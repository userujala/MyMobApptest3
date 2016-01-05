sap.ui.jsview("mymobapptest3.ServerStatusView", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf mymobapptest3.ServerStatusView
	*/ 
	getControllerName : function() {
		return "mymobapptest3.ServerStatusView";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf mymobapptest3.ServerStatusView
	*/ 
	createContent : function(oController) {
		
		app = sap.ui.getCore().byId("myApp");
       
	 	  var page8 =new sap.m.Page("page8",{  
	 	                      title: "CG_DashBoard",    
	 	                    //  content:flexbox, 
	 	                     // content : oContainer,
	 	                      showNavButton: true,  
	 	                      navButtonTap:function(){  
	 	                                    // app = sap.ui.getCore().byId("myApp");  
	 	                    	  app.back();
	 	                    	  
	 	                                     
	 	                      }  
	 	  
	 	  
	 	  });
	 	    	 	 
	 	  
	 	 return page8;
		
	}

});