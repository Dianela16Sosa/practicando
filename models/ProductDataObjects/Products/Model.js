/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "Products", "objectService" : "ProductDataObjects"};

    var setterFunctions = {
        ProductID: function(val, state) {
            context["field"] = "ProductID";
            context["metadata"] = (objectMetadata ? objectMetadata["ProductID"] : null);
            state['ProductID'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        ProductName: function(val, state) {
            context["field"] = "ProductName";
            context["metadata"] = (objectMetadata ? objectMetadata["ProductName"] : null);
            state['ProductName'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        ProductDescription: function(val, state) {
            context["field"] = "ProductDescription";
            context["metadata"] = (objectMetadata ? objectMetadata["ProductDescription"] : null);
            state['ProductDescription'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        ProductRating: function(val, state) {
            context["field"] = "ProductRating";
            context["metadata"] = (objectMetadata ? objectMetadata["ProductRating"] : null);
            state['ProductRating'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        Cost: function(val, state) {
            context["field"] = "Cost";
            context["metadata"] = (objectMetadata ? objectMetadata["Cost"] : null);
            state['Cost'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        Variants: function(val, state) {
            context["field"] = "Variants";
            context["metadata"] = (objectMetadata ? objectMetadata["Variants"] : null);
            state['Variants'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        StockAvailable: function(val, state) {
            context["field"] = "StockAvailable";
            context["metadata"] = (objectMetadata ? objectMetadata["StockAvailable"] : null);
            state['StockAvailable'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };

    //Create the Model Class
    function Products(defaultValues) {
        var privateState = {};
        context["field"] = "ProductID";
        context["metadata"] = (objectMetadata ? objectMetadata["ProductID"] : null);
        privateState.ProductID = defaultValues ?
            (defaultValues["ProductID"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["ProductID"], context) :
                null) :
            null;

        context["field"] = "ProductName";
        context["metadata"] = (objectMetadata ? objectMetadata["ProductName"] : null);
        privateState.ProductName = defaultValues ?
            (defaultValues["ProductName"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["ProductName"], context) :
                null) :
            null;

        context["field"] = "ProductDescription";
        context["metadata"] = (objectMetadata ? objectMetadata["ProductDescription"] : null);
        privateState.ProductDescription = defaultValues ?
            (defaultValues["ProductDescription"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["ProductDescription"], context) :
                null) :
            null;

        context["field"] = "ProductRating";
        context["metadata"] = (objectMetadata ? objectMetadata["ProductRating"] : null);
        privateState.ProductRating = defaultValues ?
            (defaultValues["ProductRating"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["ProductRating"], context) :
                null) :
            null;

        context["field"] = "Cost";
        context["metadata"] = (objectMetadata ? objectMetadata["Cost"] : null);
        privateState.Cost = defaultValues ?
            (defaultValues["Cost"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["Cost"], context) :
                null) :
            null;

        context["field"] = "Variants";
        context["metadata"] = (objectMetadata ? objectMetadata["Variants"] : null);
        privateState.Variants = defaultValues ?
            (defaultValues["Variants"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["Variants"], context) :
                null) :
            null;

        context["field"] = "StockAvailable";
        context["metadata"] = (objectMetadata ? objectMetadata["StockAvailable"] : null);
        privateState.StockAvailable = defaultValues ?
            (defaultValues["StockAvailable"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["StockAvailable"], context) :
                null) :
            null;


        //Using parent constructor to create other properties req. to kony sdk
        BaseModel.call(this);

        //Defining Getter/Setters
        Object.defineProperties(this, {
            "ProductID": {
                get: function() {
                    context["field"] = "ProductID";
                    context["metadata"] = (objectMetadata ? objectMetadata["ProductID"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.ProductID, context);
                },
                set: function(val) {
                    setterFunctions['ProductID'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "ProductName": {
                get: function() {
                    context["field"] = "ProductName";
                    context["metadata"] = (objectMetadata ? objectMetadata["ProductName"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.ProductName, context);
                },
                set: function(val) {
                    setterFunctions['ProductName'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "ProductDescription": {
                get: function() {
                    context["field"] = "ProductDescription";
                    context["metadata"] = (objectMetadata ? objectMetadata["ProductDescription"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.ProductDescription, context);
                },
                set: function(val) {
                    setterFunctions['ProductDescription'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "ProductRating": {
                get: function() {
                    context["field"] = "ProductRating";
                    context["metadata"] = (objectMetadata ? objectMetadata["ProductRating"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.ProductRating, context);
                },
                set: function(val) {
                    setterFunctions['ProductRating'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "Cost": {
                get: function() {
                    context["field"] = "Cost";
                    context["metadata"] = (objectMetadata ? objectMetadata["Cost"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.Cost, context);
                },
                set: function(val) {
                    setterFunctions['Cost'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "Variants": {
                get: function() {
                    context["field"] = "Variants";
                    context["metadata"] = (objectMetadata ? objectMetadata["Variants"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.Variants, context);
                },
                set: function(val) {
                    setterFunctions['Variants'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "StockAvailable": {
                get: function() {
                    context["field"] = "StockAvailable";
                    context["metadata"] = (objectMetadata ? objectMetadata["StockAvailable"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.StockAvailable, context);
                },
                set: function(val) {
                    setterFunctions['StockAvailable'].call(this, val, privateState);
                },
                enumerable: true,
            },
        });

        //converts model object to json object.
        this.toJsonInternal = function() {
            return Object.assign({}, privateState);
        };

        //overwrites object state with provided json value in argument.
        this.fromJsonInternal = function(value) {
            privateState.ProductID = value ? (value["ProductID"] ? value["ProductID"] : null) : null;
            privateState.ProductName = value ? (value["ProductName"] ? value["ProductName"] : null) : null;
            privateState.ProductDescription = value ? (value["ProductDescription"] ? value["ProductDescription"] : null) : null;
            privateState.ProductRating = value ? (value["ProductRating"] ? value["ProductRating"] : null) : null;
            privateState.Cost = value ? (value["Cost"] ? value["Cost"] : null) : null;
            privateState.Variants = value ? (value["Variants"] ? value["Variants"] : null) : null;
            privateState.StockAvailable = value ? (value["StockAvailable"] ? value["StockAvailable"] : null) : null;
        };
    }

    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(Products);

    //Create new class level validator object
    BaseModel.Validator.call(Products);

    var registerValidatorBackup = Products.registerValidator;

    Products.registerValidator = function() {
        var propName = arguments[0];
        if(!setterFunctions[propName].changed) {
            var setterBackup = setterFunctions[propName];
            setterFunctions[arguments[0]] = function() {
                if(Products.isValid(this, propName, val)) {
                    return setterBackup.apply(null, arguments);
                } else {
                    throw Error("Validation failed for " + propName + " : " + val);
                }
            }
            setterFunctions[arguments[0]].changed = true;
        }
        return registerValidatorBackup.apply(null, arguments);
    }

    //Extending Model for custom operations
    var relations = [];

    Products.relations = relations;

    Products.prototype.isValid = function() {
        return Products.isValid(this);
    };

    Products.prototype.objModelName = "Products";

    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    Products.registerProcessors = function(options, successCallback, failureCallback) {

        if(!options) {
            options = {};
        }

        if(options && ((options["preProcessor"] && typeof(options["preProcessor"]) === "function") || !options["preProcessor"])) {
            preProcessorCallback = options["preProcessor"];
        }

        if(options && ((options["postProcessor"] && typeof(options["postProcessor"]) === "function") || !options["postProcessor"])) {
            postProcessorCallback = options["postProcessor"];
        }

        function metaDataSuccess(res) {
            objectMetadata = kony.mvc.util.ProcessorUtils.convertObjectMetadataToFieldMetadataMap(res);
            successCallback();
        }

        function metaDataFailure(err) {
            failureCallback(err);
        }

        kony.mvc.util.ProcessorUtils.getMetadataForObject("ProductDataObjects", "Products", options, metaDataSuccess, metaDataFailure);
    };

    //clone the object provided in argument.
    Products.clone = function(objectToClone) {
        var clonedObj = new Products();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };

    return Products;
});