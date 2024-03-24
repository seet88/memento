var serverUrl = "http://192.168.55.24:3000/api/mobile-client-data";
// getLibraryFieldsFromAPI("Uprawy PROD", serverUrl);

/**
 * @typedef {Object} Entry
 * @property {function(string): string} field
 * @property {function(string, string): void} set
 * @property {string} id
 * @property {string} author
 * @property {string} creationTime
 * @property {string} lastModifiedTime
 * @property {string} name
 *
 */

/**
 * @typedef {Object} EntrySystemFields
 * @property {string} id
 * @property {string} author
 * @property {string} creationTime
 * @property {string} lastModifiedTime
 * @property {string} name
 *
 */

/**
 * @typedef {Object} EntryCustomField
 * @property {string} UUID
 * @property {string} value
 * @property {string} type_code
 *
 */

/**
 * @typedef {Object} EntryCustomFields
 * @property {Object.<string, EntryCustomField>}
 *
 */

/**
 * @typedef {Object} EntryAllFields
 * @property {EntrySystemFields} systemFields
 * @property {EntryCustomFields} customFields
* /

fieldsTemplate: {
        title: string;
        type_code: string;
        UUID: string;
    }[];
    libName: string | undefined;
    libUUID: string;

/**
 * @typedef {Object} LibraryFieldsTemplate
 * @property {Array<FieldTemplate>} fieldsTemplate
 * @property {string} libName
 * @property {string} libUUID
 */

/**
 * @typedef {Object} FieldTemplate
 * @property {string} title
 * @property {string} type_code
 * @property {string} UUID
 */

/**
 * @typedef {Object} LibraryData
 * @property {Array<EntryAllFields>} entries
 * @property {string} name
 * @property {string} title
 * @property {string} UUID
 */

/**
 * @param {string} libName
 * @returns {LibraryFieldsTemplate}
 */
function getLibraryFieldsFromAPI(libName, serverAddress) {
  var url = serverAddress + "/get-fields-to-sync?lib-name=" + libName;
  //   message(url);
  var result = http().get(url);
  message(result.body);
  return JSON.parse(result.body);
}

/**
 * @param {Entry} entry
 * @param {Array<FieldTemplate>} fieldsTemplate
 * @returns {Object}
 */
function getEntryCustomValues(entry, fieldsTemplate) {
  var entryValues = {};
  for (var field of fieldsTemplate) {
    entryValues[field.title] = {
      value: entry.field(field.title),
      UUID: field.UUID,
      type_code: field.type_code,
    };
    // message(z);
  }
  return entryValues;
}

/**
 * @param {Entry} entry
 * @returns {EntrySystemFields}
 */
function getEntrySystemValues(entry) {
  var obj = {};
  obj["id"] = entry.id;
  obj["author"] = entry.author;
  obj["creationTime"] = moment(String(entry.creationTime));
  obj["lastModifiedTime"] = moment(String(entry.lastModifiedTime));
  obj["name"] = entry.name;
  return obj;
}

/**
 * @param {string} libName
 * @returns {LibraryData}
 */
function getValuesFromLibrary(libName) {
  var lib = libByName(libName);
  var libraryFieldsTemplate = getLibraryFieldsFromAPI(libName, serverUrl);
  var fieldsTemplate = libraryFieldsTemplate.fieldsTemplate;

  /**@type {LibraryData} */
  var libData = { entries: [] };
  var libRows = [];
  for (var entry of lib.entries()) {
    message(JSON.stringify(fieldsTemplate));
    var allValues = getAllFieldsValuesFromEntry(entry, fieldsTemplate);
    libRows.push(allValues);
  }
  libData.entries = libRows;
  libData.name = lib.name;
  libData.title = lib.title;
  libData.UUID = libraryFieldsTemplate.libUUID;

  return libData;
}

/**
 * @param {Entry} entry
 * @param {Array<FieldTemplate>} fieldsTemplate
 * @returns {EntryAllFields}
 */
function getAllFieldsValuesFromEntry(entry, fieldsTemplate) {
  var entryValues = getEntryCustomValues(entry, fieldsTemplate);
  var systemValues = getEntrySystemValues(entry);
  return { systemFields: systemValues, customFields: entryValues };
}

/**
 *
 * @param {string} libName
 * @param {string} serverUrl
 * @returns
 */
function synchronizeLibData(libName, serverUrl) {
  var libData = getValuesFromLibrary(libName);
  message(libData);
  var url = serverUrl + "/sync-lib-data";
  var result = http().post(url, JSON.stringify(libData));
  message("after post");
  message(result);
  return result;
}

synchronizeLibData("Uprawy PROD", serverUrl);
