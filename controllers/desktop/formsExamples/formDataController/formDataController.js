define({
    
    init: function() {
        console.log("aaaaaaaaaaaaaaaaaaaaaa-Init");
        this.presenter = kony.mvc.MDAApplication.getSharedInstance().getModuleManager().getModule("formsExamples").presentationController;
        this.initActions();
    },
    
    initActions: function () {
        var self = this;
        console.log("aaaaaaaaaaaaaaaaaaaaaa-showViewConfirm");
        //var data = this.getFormDetails.call(this);
        //console.log(data);
        
        self.view.btnContinue.onClick = function() {
            //self.presenter.showConfirmationOwnAccounts(data);
            this.showViewConfirm();
        }.bind(this);
    },
    
    showViewConfirm: function () {
        var self = this;
        console.log("aaaaaaaaaaaaaaaaaaaaaa-showViewConfirm");
        var data = this.getFormDetails.call(this);
        console.log(data);
        self.presenter.showConfirmationOwnAccounts("confirmData", data);     
    },

    getFormDetails: function () {
        var self = this;
        var formData = {};
        formData.name = self.view.inpName.text;
        formData.age = self.view.inpAge.text;
        formData.documentType = self.view.inpDocumentType.selectedKey;
        formData.documentNumber = self.view.inpDocumentNumber.text;
        formData.phoneNumber = self.view.inpPhoneNumber.text;
        formData.email = self.view.inpEmail.text;
        
        return formData;
    },

    validateName: function() {
      var self = this;
      
      if (self.view.inpName.text.length === 0) {
        self.view.lblErrorName.isVisible = true;
      } else {
        self.view.lblErrorName.isVisible = false;
      }
    },
    
    validateAge: function() {
      var self = this;
      
      if (self.view.inpAge.text < 0 || self.view.inpAge.text > 120) {
        self.view.lblErrorAge.isVisible = true;
        self.view.inpAge.skin = "inpError2";
        return false;
      } else {
        self.view.lblErrorAge.isVisible = false;
        self.view.inpAge.skin = "inpNormal";
        return true;
      }
    },
    
    validateEmail: function() {
      var self = this;
      var regx = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
      
      if (self.view.inpEmail.text.length === 0) {
        self.view.lblErrorEmail.isVisible = true;
        self.view.lblErrorEmail.text = "Campo requerido";
      } else {
        if (!regx.test(self.view.inpEmail.text)) {
          self.view.lblErrorEmail.isVisible = true;
          self.view.lblErrorEmail.text = "Email inválido";
        } else {
          self.view.lblErrorEmail.isVisible = false;
        }
      }
    },
    
    validatePhoneNumber: function() {
      var self = this;
      var regx = /^\+569\d{8}$/;
      
      if (self.view.inpPhoneNumber.text.length === 0) {
        self.view.lblErrorPhoneNumber.isVisible = true;
        self.view.lblErrorPhoneNumber.text = "Campo requerido";
      } else {
        if (!regx.test(self.view.inpPhoneNumber.text)) {
          self.view.lblErrorPhoneNumber.isVisible = true;
          self.view.lblErrorPhoneNumber.text = "Número de teléfono inválido";
        } else {
          self.view.lblErrorPhoneNumber.isVisible = false;
        }
      }
    },
    
    validateDocNumber: function() {
      var self = this;
      
      if (self.view.inpDocumentNumber.text.length === 0) {
        self.view.lblErrorDocumentNumber.isVisible = true;
        self.view.lblErrorDocumentNumber.text = "Campo requerido";
      } else {
        self.view.lblErrorDocumentNumber.text = "Número de documento inválido";
        
        if (self.view.inpDocumentType.selectedKey === "DNI" && self.view.inpDocumentNumber.text.length !== 8) {
          self.view.lblErrorDocumentNumber.isVisible = true;
        } else {
          if ((self.view.inpDocumentType.selectedKey === "PA") && self.view.inpDocumentNumber.text.length !== 12) {
            self.view.lblErrorDocumentNumber.isVisible = true;
          } else {
            self.view.lblErrorDocumentNumber.isVisible = false;
          }
        }
      }
    },
    
    validateInputs: function() {
      var self = this;
      
      return self.view.inpName.text.length > 0 && 
        self.validateAge.call(this) &&
        //self.validateDocNumber.call(this) && no funciona
        ((self.view.inpDocumentType.selectedKey === "DNI" && self.view.inpDocumentNumber.text.length === 8) || 
         (self.view.inpDocumentType.selectedKey === "PA" && self.view.inpDocumentNumber.text.length === 12)) &&
        (self.view.inpEmail.text.length > 0 && 
         /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(self.view.inpEmail.text)) && 
        (self.view.inpPhoneNumber.text.length > 0 && /^\+569\d{8}$/.test(self.view.inpPhoneNumber.text));
    },
    
    enableButton: function() {
      var self = this;

      if (self.validateInputs.call(this)) {
        self.view.btnContinue.setEnabled(true);
        self.view.btnContinue.backgroundColor = "0b8f44";
        self.view.btnContinue.fontColor = "ffffff";
      } else {
        self.view.btnContinue.setEnabled(false);
        self.view.btnContinue.backgroundColor = "e2e9f0";
        self.view.btnContinue.fontColor = "c1d4ef";
      }
    },
    
    cleanInputs: function() {
      var self = this;
      
      self.view.inpName.text = "";
      self.view.inpAge.text = "";
      self.view.inpDocumentType.selectedKey = "DNI";
      self.view.inpDocumentNumber.text = "";
      self.view.inpPhoneNumber.text = "";
      self.view.inpEmail.text = "";
      
      self.view.btnContinue.setEnabled(false);
      self.view.btnContinue.backgroundColor = "e2e9f0";
      self.view.btnContinue.fontColor = "c1d4ef";
      
      self.view.lblErrorName.isVisible = false;
      self.view.lblErrorAge.isVisible = false;
      self.view.lblErrorDocumentNumber.isVisible = false;
      self.view.lblErrorPhoneNumber.isVisible = false;
      self.view.lblErrorEmail.isVisible = false;
    }
 });