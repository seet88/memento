function addKeyForObject(obj,fieldName, entry, typeCode){
 let fieldObj = {};
 let fieldValue = entry.field(fieldName);
 if (
      typeof fieldValue === "object" &&
      !Array.isArray(fieldValue) &&
      fieldValue !== null
 ){
	if( typeCode === "ft_lib_entry" || typeCode === "ft_img" || typeCode === "ft_audio" ){
	let linkList = []
	for(let i=0; i<fieldValue.length; i++){
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
	//let json = JSON.stringify(String(entry.creationTime))
	obj["creationTime"] = moment(String(entry.creationTime));
	obj["lastModifiedTime"] = moment(String(entry.lastModifiedTime));
	obj["uniqueName"] = entry.name;

return obj;
}

function addAllValueForLib(libName, userName, addAllCustomLibFields){
  let obj = {};
  let libObj = {};
  libObj.entries = [];
  libObj.tableName = libName;
  libObj.userName = userName;
  let entries = libByName(libName).entries();
    for(let en in entries){  
      libObj.entries.push(addAllLibFields(obj,entries[en], addAllCustomLibFields));
      obj = {};       
   }
  return libObj;  
}

function setSynchronisationField(syncTableEntry, fieldName){
	syncTableEntry.set(fieldName,new Date());
}

function createSyncEntryAndSetStart(lib, libName){	
	let newMember = new Object();
	newMember["nazwa biblioteki"] = libName;
	newMember["start synchronizacji"] = new Date();
	lib.create(newMember);
}

function clearSynchronisationFields(syncTableEntry){
	syncTableEntry.set("sukces synchronizacji",null);
	syncTableEntry.set("blad synchronizacji",null);		
	syncTableEntry.set("status",null);		
	syncTableEntry.set("odpowiedz",null);		
	syncTableEntry.set("blad",null);		
	syncTableEntry.set("zapytanie",null);	
}

function clearOrCreateNewSyncEntryWithStartTime(libName){	
	let lib = libByName("Synchronizacje bibliotek PROD");
	let syncTableEntry = lib.findByKey(libName);
	if(syncTableEntry){
		clearSynchronisationFields(syncTableEntry);
		setSynchronisationField(syncTableEntry,"start synchronizacji");
	}else{
		createSyncEntryAndSetStart(lib,libName);
		syncTableEntry = lib.findByKey(libName);
	}
	return syncTableEntry;
}

function setSuccessSynchronisationTable(syncTableEntry){
	setSynchronisationField(syncTableEntry,"sukces synchronizacji");
	syncTableEntry.set("status","sukces");	
}

function setErrorSynchronisationTable(libName, errorMessage){
	
	let lib = libByName("Synchronizacje bibliotek PROD");
	let syncTableEntry = lib.findByKey(libName);
	
	setSynchronisationField(syncTableEntry,"blad synchronizacji");
	syncTableEntry.set("status","blad");
	syncTableEntry.set("blad","blad");		
}


function synchronizeLibraryWithServer(libName,serverAddress, userName,addAllCustomLibFields){
	try {
		let syncTableEntry = clearOrCreateNewSyncEntryWithStartTime(libName);
		message("rozpoczynam synchronizacje bazy:" + libName);
		let mementoLibraryData = addAllValueForLib(libName, userName, addAllCustomLibFields);

		message("zebralem dane - wysylam do servera");
		let result = http().post(serverAddress, JSON.stringify(mementoLibraryData));
		if(result.code < 200 || result.code > 220){
			message("lib: "+libName+". Odebrany zostal blad z serwera:"+result.body);
			return;
		}
		message("otrzymalem dane z serwera o dlugosci: "+result.body.length);
		handleResposneFromServer(JSON.parse(result.body), libName);
		setSuccessSynchronisationTable(syncTableEntry);
		message("Zakonczona synchronizacja bazy:" + libName);
	}
	catch (e){
		setErrorSynchronisationTable(libName, e.message);
		message("Nastapil blad - przerywam skrypt - info w tabeli synchronizacji");
		exit();
	}
}

function handleResposneFromServer(response, libName){
	if(response.update.length>0){
		updateLibrary(response.update, libName);
	}
	if(response.insert.length>0){
		insertEntriesInLibrary(response.insert, libName);
	}
	if(response.delete.length>0){
		deleteEntriesFromLibrary(response.delete, libName);
	}
}

function updateLibrary(updateData, libName){
	let lib = libByName(libName);
	for(let i=0; i<updateData.length; i++){
		updateRow(updateData[i], lib);
	}
}

function updateRow(row, lib){
	let foundedEntry = lib.findById(row.memento_id);
	for(let field of row.fields){
		updateField(field, foundedEntry);
	}
	foundedEntry.recalc();
}

function updateField(field, foundedEntry){
	if(field.type==='ft_date' || field.type ==='ft_date_time')
		field.value = new Date(field.value);
	
	foundedEntry.set(field.name, field.value);
	
}

function insertEntriesInLibrary(dataRows, libName){
	let lib = libByName(libName);
	for(let i=0; i<dataRows.length; i++){
		insertRow(dataRows[i], lib);
	}
}

function insertRow(row,lib){
	let newMember = new Object();
	for(let field of row.fields){
		if(field.type==='ft_date' || field.type ==='ft_date_time')
			field.value = new Date(field.value);
		newMember[field.name] = field.value;
		
	}
	let newEntry = lib.create(newMember);
	newEntry.recalc();
}

function deleteEntriesFromLibrary(dataRows, libName){
	let lib = libByName(libName);
	for(let i=0; i<dataRows.length; i++){
		deleteRow(dataRows[i], lib);
	}
}

function deleteRow(row,lib){
	let foundedEntry = lib.findById(row.memento_id);
	foundedEntry.trash();	
}