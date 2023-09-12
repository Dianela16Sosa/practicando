define([], function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;

	//Create the Repository Class
	function AccountStatementBCIRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};

	//Setting BaseRepository as Parent to this Repository
	AccountStatementBCIRepository.prototype = Object.create(BaseRepository.prototype);
	AccountStatementBCIRepository.prototype.constructor = AccountStatementBCIRepository;

	//For Operation 'searchDocumentBCI' with service id 'searchDocumentBCI8926'
	AccountStatementBCIRepository.prototype.searchDocumentBCI = function(params, onCompletion){
		return AccountStatementBCIRepository.prototype.customVerb('searchDocumentBCI', params, onCompletion);
	};

	//For Operation 'getDocument' with service id 'getDocument1454'
	AccountStatementBCIRepository.prototype.getDocument = function(params, onCompletion){
		return AccountStatementBCIRepository.prototype.customVerb('getDocument', params, onCompletion);
	};

	return AccountStatementBCIRepository;
})