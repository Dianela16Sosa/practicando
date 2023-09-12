define([], function() {
    /**
     * User defined presentation controller
     * @constructor
     * @extends kony.mvc.Presentation.BasePresenter
     */
    function PresentationController() {
        kony.mvc.Presentation.BasePresenter.call(this);
    }

    inheritsFrom(PresentationController, kony.mvc.Presentation.BasePresenter);

    /**
     * Overridden Method of kony.mvc.Presentation.BasePresenter
     * This method gets called when presentation controller gets initialized
     * @method
     */
    PresentationController.prototype.initializePresentationController = function() {};
    
    PresentationController.prototype.getProducts = function(status, products) {
        kony.print("En formsExamples.PresentationController.getProducts");
        
        var formsExamplesManager = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("formsExamplesManager");
        var managerBusinessController = formsExamplesManager.businessController;
        
        managerBusinessController.getProducts(status, products, this.getProductsSuccessCallback, this.getProductsErrorCallback);
    };
    
    PresentationController.prototype.getProductsSuccessCallback = function(response) {
        kony.print("En formsExamples.PresentationController.getProductsSuccessCallback");
        
        var navigationObject = new kony.mvc.Navigation("listProducts");
        navigationObject.navigate({"getProductsSuccessCallback":response});
    };
    
    PresentationController.prototype.getProductsErrorCallback = function(response) {
        kony.print("En formsExamples.PresentationController.getProductsErrorCallback");
        
        var navigationObject = new kony.mvc.Navigation("listProducts");
        navigationObject.navigate({"getProductsErrorCallback":response});
    };
    
    PresentationController.prototype.showView = function(form, data) {
        var navigationObject = new kony.mvc.Navigation(form);
        navigationObject.navigate({"confirmData": data});
        
        /*if(kony.application.getCurrentForm().id !== form) {
            kony.mvc.Navigation(form).navigate({"confirmData":data});
            //applicationManager.getNavigationManager().navigateTo(form);
        }
        if(data) {
            kony.mvc.Navigation(form).navigate({"confirmData":data});
            //applicationManager.getNavigationManager().updateForm(data, form);
        }*/
    };
    
    PresentationController.prototype.showConfirmationOwnAccounts = function(form, data) {
        console.log("aaaaaaaaaaaaaaaaaaaaaa-showConfirmationOwnAccountsEurPC");
        console.log("aaaaaaaaaaaaaaaaaaaaaa-showConfirmationOwnAccountsEurPC", data);
        //this.showView(form, data);
        var navigationObject = new kony.mvc.Navigation(form);
        navigationObject.navigate({"confirmData": data});
    };
    
    return PresentationController;
});