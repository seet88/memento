

function addKeyForObject(obj,fieldName, entry, typeCode){
 var fieldObj = {};
 var fieldValue = entry.field(fieldName);
 if (
      typeof fieldValue === "object" &&
      !Array.isArray(fieldValue) &&
      fieldValue !== null
 ){
	if( typeCode === "ft_lib_entry" || typeCode === "ft_img" || typeCode === "ft_audio" ){
	var linkList = []
	for(var i=0; i<fieldValue.length; i++){
		if(typeCode === "ft_img")
			linkList.push(fieldValue[i]);
		if(typeCode === "ft_lib_entry")
			linkList.push(fieldValue[i].title)	
	}
	fieldValue = linkList; 
	}
	
 } 	
	fieldObj.value = fieldValue;
	fieldObj.name = fieldName;	
	fieldObj.type = typeCode;	
  obj[prepareFieldNameKey(fieldName)] = fieldObj;
return obj;
}

function prepareFieldNameKey(fieldName){
	
	fieldName = fieldName.toLowerCase();
	fieldName = fieldName.replace('ą','a');
	fieldName = fieldName.replace('ó','o');
	fieldName = fieldName.replace('ę','e');
	fieldName = fieldName.replace('ć','c');
	fieldName = fieldName.replace('ł','l');
	fieldName = fieldName.replace('ń','n');
	fieldName = fieldName.replace('ś','s');
	fieldName = fieldName.replace('ż','ż');
	fieldName = fieldName.replace('ź','ź');
	fieldName = fieldName.replace('  ','_');
	fieldName = fieldName.replace(' ','_');
	fieldName = fieldName.replace(' ','_');
	fieldName = fieldName.replace(' ','_');
	fieldName = fieldName.replace('.','');
	fieldName = fieldName.replace(',','');
	fieldName = fieldName.replace('__','_');
	fieldName = fieldName.replace('__','_');
	fieldName = fieldName.replace('__','_');
	fieldName = fieldName.replace('(','_');
	fieldName = fieldName.replace(')','_');

	return fieldName
}


function addAllLibFields(obj,entry, addAllCustomLibFields){
obj = addAllCustomLibFields(obj,entry);
obj["MEMENTO_ID"] = entry.id;
obj["Author"] = entry.author;
//var json = JSON.stringify(String(entry.creationTime))
obj["creationTime"] = moment(String(entry.creationTime));
obj["lastModifiedTime"] = moment(String(entry.lastModifiedTime));
obj["uniqueName"] = entry.name;

return obj;
}

function addAllValueForLib(libName, addAllCustomLibFields){
  var obj = {};
  var libObj = {};
  libObj.entries = [];
  libObj.tableName = libName;
  var entries = libByName(libName).entries();
    for(var en in entries){  
      libObj.entries.push(addAllLibFields(obj,entries[en], addAllCustomLibFields));
      obj = {};       
   }
  return libObj;  
}

function synchronizeLibraryWithServer(libName,serverAddress,addAllCustomLibFields){
	var mementoLibraryData = addAllValueForLib(libName, addAllCustomLibFields);

	message("zebralem dane - wysylam do servera");
	var result = http().post(serverAddress, JSON.stringify(mementoLibraryData));
	message("otrzymalem dane z serwera o dlugosci:"+result.length);
	handleResposneFromServer(JSON.parse(result.body), libName);
}

function handleResposneFromServer(response, libName){
	if(response.update.length>0){
		updateLibrary(response.update, libName);
	}
}

function updateLibrary(updateData, libName){
var lib = libByName(libName);
	for(var i=0; i<updateData.length; i++){
		updateRow(updateData[i], lib);
	}
}

function updateRow(columns, lib){
	var foundedEntry = lib.findById(columns[columns.length-1].value);
	for(var field of columns){
		updateField(field, foundedEntry);
	}
}


function updateField(field, foundedEntry){
	if(field.name !== "mementoID")
		foundedEntry.set(field.name, field.value);
}