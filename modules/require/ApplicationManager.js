define(function () {
    
    function ApplicationManager() {
        this.applicationManagerInstance = null;
    }
    
    ApplicationManager.getApplicationManager = function() {
        if (!this.applicationManagerInstance) 
            this.applicationManagerInstance = new ApplicationManager();
        
        return this.applicationManagerInstance;
    };
    
    ApplicationManager.prototype.getNavigationManager = function() {
        return kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule('NavigationManager').businessController;
    };
    
    return ApplicationManager;
});