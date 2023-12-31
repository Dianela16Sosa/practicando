define([], function(){
	var BaseRepository = kony.mvc.Data.BaseRepository;

	//Create the Repository Class
	function AccountsRepository(modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource) {
		BaseRepository.call(this, modelDefinition, config, defaultAppMode, dataSourceFactory, injectedDataSource);
	};

	//Setting BaseRepository as Parent to this Repository
	AccountsRepository.prototype = Object.create(BaseRepository.prototype);
	AccountsRepository.prototype.constructor = AccountsRepository;

	//For Operation 'getCustomerAccounts' with service id 'getCustomerAccounts7724'
	AccountsRepository.prototype.getCustomerAccounts = function(params, onCompletion){
		return AccountsRepository.prototype.customVerb('getCustomerAccounts', params, onCompletion);
	};

	//For Operation 'getOrganizationAccounts' with service id 'getOrganizationAccounts9889'
	AccountsRepository.prototype.getOrganizationAccounts = function(params, onCompletion){
		return AccountsRepository.prototype.customVerb('getOrganizationAccounts', params, onCompletion);
	};

	//For Operation 'updateUserAccountSettingsForAdmin' with service id 'updateUserAccountSettingsForAdmin1340'
	AccountsRepository.prototype.updateUserAccountSettingsForAdmin = function(params, onCompletion){
		return AccountsRepository.prototype.customVerb('updateUserAccountSettingsForAdmin', params, onCompletion);
	};

	//For Operation 'getLoanDueAmount' with service id 'getLoanDueAmount6510'
	AccountsRepository.prototype.getLoanDueAmount = function(params, onCompletion){
		return AccountsRepository.prototype.customVerb('getLoanDueAmount', params, onCompletion);
	};

	//For Operation 'getAccountsByCustomerIdForAdmin' with service id 'getAccountsByCustomerIdForAdmin1462'
	AccountsRepository.prototype.getAccountsByCustomerIdForAdmin = function(params, onCompletion){
		return AccountsRepository.prototype.customVerb('getAccountsByCustomerIdForAdmin', params, onCompletion);
	};

	//For Operation 'getDepositDetails' with service id 'getDepositDetails4526'
	AccountsRepository.prototype.getDepositDetails = function(params, onCompletion){
		return AccountsRepository.prototype.customVerb('getDepositDetails', params, onCompletion);
	};

	//For Operation 'getCheckingDetails' with service id 'getCheckingDetails8163'
	AccountsRepository.prototype.getCheckingDetails = function(params, onCompletion){
		return AccountsRepository.prototype.customVerb('getCheckingDetails', params, onCompletion);
	};

	//For Operation 'downloadEstatement' with service id 'downloadTransactionHistory3715'
	AccountsRepository.prototype.downloadEstatement = function(params, onCompletion){
		return AccountsRepository.prototype.customVerb('downloadEstatement', params, onCompletion);
	};

	//For Operation 'getAccountDetailsForCombinedStatements' with service id 'getAccountDetailsForCombinedStatement4734'
	AccountsRepository.prototype.getAccountDetailsForCombinedStatements = function(params, onCompletion){
		return AccountsRepository.prototype.customVerb('getAccountDetailsForCombinedStatements', params, onCompletion);
	};

	//For Operation 'CreatePayoffSimulation' with service id 'CreatePayoffSimulation3835'
	AccountsRepository.prototype.CreatePayoffSimulation = function(params, onCompletion){
		return AccountsRepository.prototype.customVerb('CreatePayoffSimulation', params, onCompletion);
	};

	//For Operation 'updateFavouriteStatus' with service id 'setFavouriteAccount3739'
	AccountsRepository.prototype.updateFavouriteStatus = function(params, onCompletion){
		return AccountsRepository.prototype.customVerb('updateFavouriteStatus', params, onCompletion);
	};

	//For Operation 'deleteCustomView' with service id 'DeleteCustomView3490'
	AccountsRepository.prototype.deleteCustomView = function(params, onCompletion){
		return AccountsRepository.prototype.customVerb('deleteCustomView', params, onCompletion);
	};

	//For Operation 'getRecentAccounts' with service id 'getRecentAccounts9643'
	AccountsRepository.prototype.getRecentAccounts = function(params, onCompletion){
		return AccountsRepository.prototype.customVerb('getRecentAccounts', params, onCompletion);
	};

	//For Operation 'getLoanPayoffStatement' with service id 'getLoanPayoffStatement1465'
	AccountsRepository.prototype.getLoanPayoffStatement = function(params, onCompletion){
		return AccountsRepository.prototype.customVerb('getLoanPayoffStatement', params, onCompletion);
	};

	//For Operation 'GetRecentList' with service id 'getRecentAccountsList2469'
	AccountsRepository.prototype.GetRecentList = function(params, onCompletion){
		return AccountsRepository.prototype.customVerb('GetRecentList', params, onCompletion);
	};

	//For Operation 'getCustomView' with service id 'GetCustomView2376'
	AccountsRepository.prototype.getCustomView = function(params, onCompletion){
		return AccountsRepository.prototype.customVerb('getCustomView', params, onCompletion);
	};

	//For Operation 'getLoanDetails' with service id 'getLoanDetails5844'
	AccountsRepository.prototype.getLoanDetails = function(params, onCompletion){
		return AccountsRepository.prototype.customVerb('getLoanDetails', params, onCompletion);
	};

	//For Operation 'newLoanAccount' with service id 'openNewAccount6702'
	AccountsRepository.prototype.newLoanAccount = function(params, onCompletion){
		return AccountsRepository.prototype.customVerb('newLoanAccount', params, onCompletion);
	};

	//For Operation 'getLoanSchedule' with service id 'getLoanSchedule2344'
	AccountsRepository.prototype.getLoanSchedule = function(params, onCompletion){
		return AccountsRepository.prototype.customVerb('getLoanSchedule', params, onCompletion);
	};

	//For Operation 'createOnboardingAccount' with service id 'createAccount6834'
	AccountsRepository.prototype.createOnboardingAccount = function(params, onCompletion){
		return AccountsRepository.prototype.customVerb('createOnboardingAccount', params, onCompletion);
	};

	//For Operation 'createCustomView' with service id 'CreateCustomView1406'
	AccountsRepository.prototype.createCustomView = function(params, onCompletion){
		return AccountsRepository.prototype.customVerb('createCustomView', params, onCompletion);
	};

	//For Operation 'getAccountsNew' with service id 'getAccounts8576'
	AccountsRepository.prototype.getAccountsNew = function(params, onCompletion){
		return AccountsRepository.prototype.customVerb('getAccountsNew', params, onCompletion);
	};

	//For Operation 'getAllAccounts' with service id 'getAllAccounts6273'
	AccountsRepository.prototype.getAllAccounts = function(params, onCompletion){
		return AccountsRepository.prototype.customVerb('getAllAccounts', params, onCompletion);
	};

	//For Operation 'getCompanyAccounts' with service id 'GetCustomerCentricAccountsInformationByServiceKey3394'
	AccountsRepository.prototype.getCompanyAccounts = function(params, onCompletion){
		return AccountsRepository.prototype.customVerb('getCompanyAccounts', params, onCompletion);
	};

	//For Operation 'getAccountCentricDetails' with service id 'GetAccountInformation4723'
	AccountsRepository.prototype.getAccountCentricDetails = function(params, onCompletion){
		return AccountsRepository.prototype.customVerb('getAccountCentricDetails', params, onCompletion);
	};

	//For Operation 'newAccountOpening' with service id 'openNewAccount9026'
	AccountsRepository.prototype.newAccountOpening = function(params, onCompletion){
		return AccountsRepository.prototype.customVerb('newAccountOpening', params, onCompletion);
	};

	//For Operation 'getAccountDetailsNew' with service id 'getAccountDetails9348'
	AccountsRepository.prototype.getAccountDetailsNew = function(params, onCompletion){
		return AccountsRepository.prototype.customVerb('getAccountDetailsNew', params, onCompletion);
	};

	//For Operation 'updateAccountPreference' with service id 'updateAccountPreference6645'
	AccountsRepository.prototype.updateAccountPreference = function(params, onCompletion){
		return AccountsRepository.prototype.customVerb('updateAccountPreference', params, onCompletion);
	};

	//For Operation 'updateCustomView' with service id 'UpdateCustomView6488'
	AccountsRepository.prototype.updateCustomView = function(params, onCompletion){
		return AccountsRepository.prototype.customVerb('updateCustomView', params, onCompletion);
	};

	//For Operation 'fetchBankDetails' with service id 'fetchBankDetails9439'
	AccountsRepository.prototype.fetchBankDetails = function(params, onCompletion){
		return AccountsRepository.prototype.customVerb('fetchBankDetails', params, onCompletion);
	};

	//For Operation 'newCashIncentiveAccount' with service id 'openNewAccount1051'
	AccountsRepository.prototype.newCashIncentiveAccount = function(params, onCompletion){
		return AccountsRepository.prototype.customVerb('newCashIncentiveAccount', params, onCompletion);
	};

	//For Operation 'getAccountDetails' with service id 'getAccountDetails5924'
	AccountsRepository.prototype.getAccountDetails = function(params, onCompletion){
		return AccountsRepository.prototype.customVerb('getAccountDetails', params, onCompletion);
	};

	//For Operation 'getCreditCardAccouts' with service id 'getCreditCardAccouts4874'
	AccountsRepository.prototype.getCreditCardAccouts = function(params, onCompletion){
		return AccountsRepository.prototype.customVerb('getCreditCardAccouts', params, onCompletion);
	};

	//For Operation 'verifyAccountPermissions' with service id 'verifyAccountPermissions8457'
	AccountsRepository.prototype.verifyAccountPermissions = function(params, onCompletion){
		return AccountsRepository.prototype.customVerb('verifyAccountPermissions', params, onCompletion);
	};

	//For Operation 'updateAccountPhoneNumber' with service id 'updateAccountPhoneNumber9695'
	AccountsRepository.prototype.updateAccountPhoneNumber = function(params, onCompletion){
		return AccountsRepository.prototype.customVerb('updateAccountPhoneNumber', params, onCompletion);
	};

	//For Operation 'getAccountsPostLogin' with service id 'getAccountsPostLogin5040'
	AccountsRepository.prototype.getAccountsPostLogin = function(params, onCompletion){
		return AccountsRepository.prototype.customVerb('getAccountsPostLogin', params, onCompletion);
	};

	//For Operation 'getCreditCardAccounts' with service id 'getCreditCardAccounts7957'
	AccountsRepository.prototype.getCreditCardAccounts = function(params, onCompletion){
		return AccountsRepository.prototype.customVerb('getCreditCardAccounts', params, onCompletion);
	};

	//For Operation 'updateUserAccountSettings' with service id 'updateUserAccountSettingsOperation1645'
	AccountsRepository.prototype.updateUserAccountSettings = function(params, onCompletion){
		return AccountsRepository.prototype.customVerb('updateUserAccountSettings', params, onCompletion);
	};

	//For Operation 'unLinkOrgAccounts' with service id 'unLinkOrgAccounts8710'
	AccountsRepository.prototype.unLinkOrgAccounts = function(params, onCompletion){
		return AccountsRepository.prototype.customVerb('unLinkOrgAccounts', params, onCompletion);
	};

	//For Operation 'getPayoffSimulationStatus' with service id 'getPayoffSimulationStatus4477'
	AccountsRepository.prototype.getPayoffSimulationStatus = function(params, onCompletion){
		return AccountsRepository.prototype.customVerb('getPayoffSimulationStatus', params, onCompletion);
	};

	//For Operation 'getAccountsForAdmin' with service id 'getAccountsForAdmin6053'
	AccountsRepository.prototype.getAccountsForAdmin = function(params, onCompletion){
		return AccountsRepository.prototype.customVerb('getAccountsForAdmin', params, onCompletion);
	};

	//For Operation 'newAccountShortTermDeposit' with service id 'openNewAccount9449'
	AccountsRepository.prototype.newAccountShortTermDeposit = function(params, onCompletion){
		return AccountsRepository.prototype.customVerb('newAccountShortTermDeposit', params, onCompletion);
	};

	return AccountsRepository;
})