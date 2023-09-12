define(['jspdf'], function(jsPDF) {
  return {
      
      onNavigate: function (viewModel) {
          console.log("aaaaaaaaaaaaaaaaaaaaaa1", viewModel);
          
          /*if (viewModel.isLoading === true) {
              FormControllerUtility.showProgressBar(this.view);
          } else if (viewModel.isLoading === false) {
              FormControllerUtility.hideProgressBar(this.view);
          }*/
          
          if (viewModel.confirmData) {
              console.log("aaaaaaaaaaaaaaaaaaaaaa2", viewModel);
                    

              this.confirmDetails(viewModel);
          }
      },
      
      confirmDetails: function (data) {
          var self = this;
          console.log("aaaaaaaaaaaaaaaaaaaaaa3", data.confirmData);
          console.log("aaaaaaaaaaaaaaaaaaaaaa3", data.confirmData.name);
          console.log("aaaaaaaaaaaaaaaaaaaaaa3", data.confirmData["name"]);
          
          self.view.nameConfirm.text = data.confirmData["name"];
          self.view.ageConfirm.text = data.confirmData["age"];
          self.view.docTypeConfirm.text = data.confirmData.documentType;
          self.view.docNumberConfirm.text = data.confirmData.documentNumber;
          self.view.phoneConfirm.text = data.confirmData.phoneNumber;
          self.view.emailConfirm.text = data.confirmData.email;
      },
      
    generatePDF: function() {
      let name = kony.store.getItem("Name");
      let age = kony.store.getItem("Age");
      let docType = kony.store.getItem("DocumentType");
      let docNumber = kony.store.getItem("DocumentNumber");
      let email = kony.store.getItem("Email");
      let phone = kony.store.getItem("PhoneNumber");


      let doc = jsPDF.jsPDF({
                orientation: 'p',
                unit: 'mm',
                format: 'a4'
      });
      doc.setFontSize(20);
      doc.setFont("helvetica", "bold");
      doc.text("DATOS", 10, 10);
      doc.setFont("helvetica", "normal");
      doc.text("- Nombre: " + name, 10, 25);
      doc.text("- Edad: " + age, 110, 25);
      doc.text("- Tipo y número de documento: " + docType + " " + docNumber, 10, 35);
      doc.text("- Correo electrónico: " + email, 10, 45);
      doc.text("- Teléfono: " + phone, 10, 55);

      doc.save(name + ".pdf"); //Generar pdf
    },
  };
 });