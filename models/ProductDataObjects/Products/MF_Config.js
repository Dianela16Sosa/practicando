/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
	var mappings = {
		"ProductID": "ProductID",
		"ProductName": "ProductName",
		"ProductDescription": "ProductDescription",
		"ProductRating": "ProductRating",
		"Cost": "Cost",
		"Variants": "Variants",
		"StockAvailable": "StockAvailable",
	};

	Object.freeze(mappings);

	var typings = {
		"ProductID": "string",
		"ProductName": "string",
		"ProductDescription": "string",
		"ProductRating": "string",
		"Cost": "string",
		"Variants": "string",
		"StockAvailable": "string",
	}

	Object.freeze(typings);

	var primaryKeys = [
					"ProductID",
	];

	Object.freeze(primaryKeys);

	var config = {
		mappings: mappings,
		typings: typings,
		primaryKeys: primaryKeys,
		serviceName: "ProductDataObjects",
		tableName: "Products"
	};

	Object.freeze(config);

	return config;
})