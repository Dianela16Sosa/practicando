define({ 

 //Type your controller code here 
    
    onNavigate: function(params) {
        kony.print("En listProducts.onNavigate");
        
        var self = this;
        
        if (params !== null && params !== undefined) {
            if (params.getProductsSuccessCallback !== null &&
               params.getProductsSuccessCallback !== undefined && 
               params.getProductsSuccessCallback.length !== 0) {
                
                kony.store.setItem("Products", params.getProductsSuccessCallback);
                
                self.view.list.widgetDataMap = {
                    "imgProduct": "",
                    "lblProductName": "ProductName",
                    "lblProductId": "ProductId",
                    "AngleRight": ""
                };
                self.view.list.setData(params.getProductsSuccessCallback);
            }
        }
        /*let products = getProducts["responseList"];
        let data = [];
        
        for(let p in products) {
            let existe = data.findIndex((d) => d.lblProductId === products[p].ProductId && d.lblProductName === products[p].ProductName);
            if(existe < 0) {
                let product = {
                    imgProduct: "imagedrag.png",
                    lblProductName: products[p].ProductName,
                    lblProductId: products[p].ProductId,
                    AngleRight: ""
                };
                data.push(product);
            }
        }
        self.view.list.addAll(data);*/
    },
    
    init: function(status, products) {
        kony.print("En listProducts.init");
        
        var self = this;
        
        self.view.list.removeAll(); //Limpiar listado de productos
        
        this.getProducts(status, products);
    },
    
    getProducts: function(status, products) {
        kony.print("En listProducts.getProducts");
        
        //Hacer referencia al PresentationController e invocar funciones en él
        var formsExamplesModule = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("formsExamples");
        formsExamplesModule.presentationController.getProducts(status, products);
        //modulePresentationController.getProducts();
    }
 });