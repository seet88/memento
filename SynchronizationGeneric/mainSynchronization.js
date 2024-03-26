var serverUrl = "http://192.168.55.24:3000/api/mobile-client-data";
// getLibraryFieldsFromAPI("Uprawy PROD", serverUrl);

/**
 * @typedef {Object} Entry
 * @property {function(string): string} field
 * @property {function(string, string): void} set
 * @property {function(string, Entry): void} link
 * @property {function(string, Entry): void} unlink
 * @property {function(): void} recalc
 * @property {function(): void} trash
 * @property {function(): void} untrash
 * @property {function(): void} show
 * @property {string} id
 * @property {string} author
 * @property {string} deleted
 * @property {string} description
 * @property {string} favorites
 * @property {string} creationTime
 * @property {string} lastModifiedTime
 * @property {string} name
 * @property {string} title
 *
 */

/**
 * @typedef {Object} Library
 * @property {function(): Array<Entry>} entries
 * @property {function(Object.<string, string>): Entry} create
 * @property {function(string): Array<Entry>} find
 * @property {function(string): Entry} findById
 * @property {function(string): Entry} findByKey
 * @property {function(Entry): Array<Entry>} linksTo
 * @property {function(): null} show()
 * @property {string} name
 * @property {string} title
 * 

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

/**
 * @typedef {Object} ServerUpdateData
 * @property {Array<ServerUpdateRow>} update
 * @property {Array<ServerUpdateRow>} insert
 * @property {Array<ServerUpdateRow>} delete
 */

/**
 * @typedef {Object} ServerUpdateRow
 * @property {string} memento_id
 * @property {Array<ServerUpdateField>} fields
 * @property {string} uniqueName
 */

/**
 * @typedef {Object} ServerUpdateField
 * @property {Object.<string, EntryCustomField>}
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

/**
 * @param {ServerUpdateData} response
 * @param {string} libName
 */
function handleResponseFromServer(response, libName) {
  if (response.update.length > 0) {
    updateLibrary(response.update, libName);
  }
  if (response.insert.length > 0) {
    insertEntriesInLibrary(response.insert, libName);
  }
  if (response.delete.length > 0) {
    deleteEntriesFromLibrary(response.delete, libName);
  }
}

/**
 * @param {Array<ServerUpdateRow>} dataRows
 * @param {string} libName
 */
function updateLibrary(dataRows, libName) {
  let lib = libByName(libName);
  for (let i = 0; i < dataRows.length; i++) {
    updateRow(dataRows[i], lib);
  }
}

/**
 *
 * @param {ServerUpdateRow} row
 * @param {Library} lib
 */
function updateRow(row, lib) {
  let foundedEntry = lib.findById(row.memento_id);
  for (let field of row.fields) {
    updateField(field, foundedEntry);
  }
  foundedEntry.recalc();
}

/**
 * @param {ServerUpdateField} field
 * @param {Entry} foundedEntry
 */
function updateField(field, foundedEntry) {
  //support linking
  //unlinking ?
  if (field.type === "ft_date" || field.type === "ft_date_time")
    field.value = new Date(field.value);

  foundedEntry.set(field.name, field.value);
}

/**
 *
 * @param {Array<ServerUpdateRow>} dataRows
 * @param {string} libName
 */
function insertEntriesInLibrary(dataRows, libName) {
  let lib = libByName(libName);
  for (let i = 0; i < dataRows.length; i++) {
    insertRow(dataRows[i], lib);
  }
}

/**
 *
 * @param {ServerUpdateRow} row
 * @param {Library} lib
 */
function insertRow(row, lib) {
  let newMember = new Object();
  for (let field of row.fields) {
    if (field.type === "ft_date" || field.type === "ft_date_time")
      field.value = new Date(field.value);
    newMember[field.name] = field.value;
  }
  let newEntry = lib.create(newMember);
  newEntry.recalc();
}

/**
 *
 * @param {Array<ServerUpdateRow>} dataRows
 * @param {string} libName
 */
function deleteEntriesFromLibrary(dataRows, libName) {
  let lib = libByName(libName);
  for (let i = 0; i < dataRows.length; i++) {
    deleteRow(dataRows[i], lib);
  }
}

/**
 * @param {ServerUpdateRow} row
 * @param {Library} lib
 */
function deleteRow(row, lib) {
  let foundedEntry = lib.findById(row.memento_id);
  foundedEntry.trash();
}

synchronizeLibData("Uprawy PROD", serverUrl);
