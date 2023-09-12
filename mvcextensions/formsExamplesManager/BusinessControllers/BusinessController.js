define([], function () { 
    
    /**
     * User defined business controller
     * @constructor
     * @extends kony.mvc.Business.Delegator
     */
    function BusinessController() { 

        kony.mvc.Business.Delegator.call(this); 

    } 

    inheritsFrom(BusinessController, kony.mvc.Business.Delegator);
    
    BusinessController.prototype.getProducts = function(status, products, successCallback, errorCallback) {
        //Como que se le pasa las funciones que están en PresentationController para poder invocarlas desde acá
        kony.print("En BusinessController.getProducts");
        //var productObject = kony.mvc.MDAApplication.getSharedInstance().getRepoManager().getRepository("")
        
        //var status = getProducts["httpStatusCode"];
        //var response = getProducts["responseList"];
        
        if (status === 200) {
            successCallback(products);
            kony.print("Exito");
        } else {
            errorCallback(products);
            kony.print("Error");
        }
    };
       
    return BusinessController;
});