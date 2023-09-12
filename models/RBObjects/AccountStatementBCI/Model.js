/*
    This is an auto generated file and any modifications to it may result in corrupted data.
*/
define([], function() {
    var BaseModel = kony.mvc.Data.BaseModel;
    var preProcessorCallback;
    var postProcessorCallback;
    var objectMetadata;
    var context = {"object" : "AccountStatementBCI", "objectService" : "RBObjects"};

    var setterFunctions = {
        accountNumber: function(val, state) {
            context["field"] = "accountNumber";
            context["metadata"] = (objectMetadata ? objectMetadata["accountNumber"] : null);
            state['accountNumber'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        startDate: function(val, state) {
            context["field"] = "startDate";
            context["metadata"] = (objectMetadata ? objectMetadata["startDate"] : null);
            state['startDate'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        endDate: function(val, state) {
            context["field"] = "endDate";
            context["metadata"] = (objectMetadata ? objectMetadata["endDate"] : null);
            state['endDate'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        date: function(val, state) {
            context["field"] = "date";
            context["metadata"] = (objectMetadata ? objectMetadata["date"] : null);
            state['date'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        file: function(val, state) {
            context["field"] = "file";
            context["metadata"] = (objectMetadata ? objectMetadata["file"] : null);
            state['file'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        pointer: function(val, state) {
            context["field"] = "pointer";
            context["metadata"] = (objectMetadata ? objectMetadata["pointer"] : null);
            state['pointer'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        base64: function(val, state) {
            context["field"] = "base64";
            context["metadata"] = (objectMetadata ? objectMetadata["base64"] : null);
            state['base64'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        content: function(val, state) {
            context["field"] = "content";
            context["metadata"] = (objectMetadata ? objectMetadata["content"] : null);
            state['content'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
        id: function(val, state) {
            context["field"] = "id";
            context["metadata"] = (objectMetadata ? objectMetadata["id"] : null);
            state['id'] = kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, val, context);
        },
    };

    //Create the Model Class
    function AccountStatementBCI(defaultValues) {
        var privateState = {};
        context["field"] = "accountNumber";
        context["metadata"] = (objectMetadata ? objectMetadata["accountNumber"] : null);
        privateState.accountNumber = defaultValues ?
            (defaultValues["accountNumber"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["accountNumber"], context) :
                null) :
            null;

        context["field"] = "startDate";
        context["metadata"] = (objectMetadata ? objectMetadata["startDate"] : null);
        privateState.startDate = defaultValues ?
            (defaultValues["startDate"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["startDate"], context) :
                null) :
            null;

        context["field"] = "endDate";
        context["metadata"] = (objectMetadata ? objectMetadata["endDate"] : null);
        privateState.endDate = defaultValues ?
            (defaultValues["endDate"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["endDate"], context) :
                null) :
            null;

        context["field"] = "date";
        context["metadata"] = (objectMetadata ? objectMetadata["date"] : null);
        privateState.date = defaultValues ?
            (defaultValues["date"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["date"], context) :
                null) :
            null;

        context["field"] = "file";
        context["metadata"] = (objectMetadata ? objectMetadata["file"] : null);
        privateState.file = defaultValues ?
            (defaultValues["file"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["file"], context) :
                null) :
            null;

        context["field"] = "pointer";
        context["metadata"] = (objectMetadata ? objectMetadata["pointer"] : null);
        privateState.pointer = defaultValues ?
            (defaultValues["pointer"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["pointer"], context) :
                null) :
            null;

        context["field"] = "base64";
        context["metadata"] = (objectMetadata ? objectMetadata["base64"] : null);
        privateState.base64 = defaultValues ?
            (defaultValues["base64"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["base64"], context) :
                null) :
            null;

        context["field"] = "content";
        context["metadata"] = (objectMetadata ? objectMetadata["content"] : null);
        privateState.content = defaultValues ?
            (defaultValues["content"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["content"], context) :
                null) :
            null;

        context["field"] = "id";
        context["metadata"] = (objectMetadata ? objectMetadata["id"] : null);
        privateState.id = defaultValues ?
            (defaultValues["id"] ?
                kony.mvc.util.ProcessorUtils.applyFunction(preProcessorCallback, defaultValues["id"], context) :
                null) :
            null;


        //Using parent constructor to create other properties req. to kony sdk
        BaseModel.call(this);

        //Defining Getter/Setters
        Object.defineProperties(this, {
            "accountNumber": {
                get: function() {
                    context["field"] = "accountNumber";
                    context["metadata"] = (objectMetadata ? objectMetadata["accountNumber"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.accountNumber, context);
                },
                set: function(val) {
                    setterFunctions['accountNumber'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "startDate": {
                get: function() {
                    context["field"] = "startDate";
                    context["metadata"] = (objectMetadata ? objectMetadata["startDate"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.startDate, context);
                },
                set: function(val) {
                    setterFunctions['startDate'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "endDate": {
                get: function() {
                    context["field"] = "endDate";
                    context["metadata"] = (objectMetadata ? objectMetadata["endDate"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.endDate, context);
                },
                set: function(val) {
                    setterFunctions['endDate'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "date": {
                get: function() {
                    context["field"] = "date";
                    context["metadata"] = (objectMetadata ? objectMetadata["date"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.date, context);
                },
                set: function(val) {
                    setterFunctions['date'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "file": {
                get: function() {
                    context["field"] = "file";
                    context["metadata"] = (objectMetadata ? objectMetadata["file"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.file, context);
                },
                set: function(val) {
                    setterFunctions['file'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "pointer": {
                get: function() {
                    context["field"] = "pointer";
                    context["metadata"] = (objectMetadata ? objectMetadata["pointer"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.pointer, context);
                },
                set: function(val) {
                    setterFunctions['pointer'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "base64": {
                get: function() {
                    context["field"] = "base64";
                    context["metadata"] = (objectMetadata ? objectMetadata["base64"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.base64, context);
                },
                set: function(val) {
                    setterFunctions['base64'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "content": {
                get: function() {
                    context["field"] = "content";
                    context["metadata"] = (objectMetadata ? objectMetadata["content"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.content, context);
                },
                set: function(val) {
                    setterFunctions['content'].call(this, val, privateState);
                },
                enumerable: true,
            },
            "id": {
                get: function() {
                    context["field"] = "id";
                    context["metadata"] = (objectMetadata ? objectMetadata["id"] : null);
                    return kony.mvc.util.ProcessorUtils.applyFunction(postProcessorCallback, privateState.id, context);
                },
                set: function(val) {
                    setterFunctions['id'].call(this, val, privateState);
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
            privateState.accountNumber = value ? (value["accountNumber"] ? value["accountNumber"] : null) : null;
            privateState.startDate = value ? (value["startDate"] ? value["startDate"] : null) : null;
            privateState.endDate = value ? (value["endDate"] ? value["endDate"] : null) : null;
            privateState.date = value ? (value["date"] ? value["date"] : null) : null;
            privateState.file = value ? (value["file"] ? value["file"] : null) : null;
            privateState.pointer = value ? (value["pointer"] ? value["pointer"] : null) : null;
            privateState.base64 = value ? (value["base64"] ? value["base64"] : null) : null;
            privateState.content = value ? (value["content"] ? value["content"] : null) : null;
            privateState.id = value ? (value["id"] ? value["id"] : null) : null;
        };
    }

    //Setting BaseModel as Parent to this Model
    BaseModel.isParentOf(AccountStatementBCI);

    //Create new class level validator object
    BaseModel.Validator.call(AccountStatementBCI);

    var registerValidatorBackup = AccountStatementBCI.registerValidator;

    AccountStatementBCI.registerValidator = function() {
        var propName = arguments[0];
        if(!setterFunctions[propName].changed) {
            var setterBackup = setterFunctions[propName];
            setterFunctions[arguments[0]] = function() {
                if(AccountStatementBCI.isValid(this, propName, val)) {
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
    //For Operation 'searchDocumentBCI' with service id 'searchDocumentBCI8926'
     AccountStatementBCI.searchDocumentBCI = function(params, onCompletion){
        return AccountStatementBCI.customVerb('searchDocumentBCI', params, onCompletion);
     };

    //For Operation 'getDocument' with service id 'getDocument1454'
     AccountStatementBCI.getDocument = function(params, onCompletion){
        return AccountStatementBCI.customVerb('getDocument', params, onCompletion);
     };

    var relations = [];

    AccountStatementBCI.relations = relations;

    AccountStatementBCI.prototype.isValid = function() {
        return AccountStatementBCI.isValid(this);
    };

    AccountStatementBCI.prototype.objModelName = "AccountStatementBCI";

    /*This API allows registration of preprocessors and postprocessors for model.
     *It also fetches object metadata for object.
     *Options Supported
     *preProcessor  - preprocessor function for use with setters.
     *postProcessor - post processor callback for use with getters.
     *getFromServer - value set to true will fetch metadata from network else from cache.
     */
    AccountStatementBCI.registerProcessors = function(options, successCallback, failureCallback) {

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

        kony.mvc.util.ProcessorUtils.getMetadataForObject("RBObjects", "AccountStatementBCI", options, metaDataSuccess, metaDataFailure);
    };

    //clone the object provided in argument.
    AccountStatementBCI.clone = function(objectToClone) {
        var clonedObj = new AccountStatementBCI();
        clonedObj.fromJsonInternal(objectToClone.toJsonInternal());
        return clonedObj;
    };

    return AccountStatementBCI;
});