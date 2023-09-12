/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
	var mappings = {
		"accountNumber": "accountNumber",
		"startDate": "startDate",
		"endDate": "endDate",
		"date": "date",
		"file": "file",
		"pointer": "pointer",
		"base64": "base64",
		"content": "content",
		"id": "id",
	};

	Object.freeze(mappings);

	var typings = {
		"accountNumber": "string",
		"startDate": "string",
		"endDate": "string",
		"date": "string",
		"file": "string",
		"pointer": "string",
		"base64": "string",
		"content": "string",
		"id": "string",
	}

	Object.freeze(typings);

	var primaryKeys = [
					"accountNumber",
	];

	Object.freeze(primaryKeys);

	var config = {
		mappings: mappings,
		typings: typings,
		primaryKeys: primaryKeys,
		serviceName: "RBObjects",
		tableName: "AccountStatementBCI"
	};

	Object.freeze(config);

	return config;
})