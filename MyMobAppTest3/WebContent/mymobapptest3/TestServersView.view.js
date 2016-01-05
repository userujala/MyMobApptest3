sap.ui.jsview("mymobapptest3.TestServersView", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf mymobapptest3.TestServersView
	*/ 
	getControllerName : function() {
		return "mymobapptest3.TestServersView";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf mymobapptest3.TestServersView
	*/ 
	createContent : function(oController) {

		app = sap.ui.getCore().byId("myApp");
  	  var page7 = new sap.m.Page("page7",{  
          title: "CG_DashBoard",    
         // content:flexbox,  
          showNavButton: true,  
          navButtonTap:function(){  
                         app = sap.ui.getCore().byId("myApp");  
                        // app.to("idMobileView1");
                         app.back();
          }  
});
  	  
  	var oContainer = new sap.m.TileContainer({});  
	page7.addContent(oContainer);  
	  
	var T1 = new sap.m.StandardTile({
		title:"VM-1",
		info : "Availability",
		number : "23",
		infoState : "Success",
		numberUnit : "34"
			});  
	oContainer.addTile(T1);
	
	var T2 = new sap.m.StandardTile({
		title:"VM-2",
		info : "Availability",
		number : "23",
		infoState : "Success",
		numberUnit : "34"
			});  
	oContainer.addTile(T2);
	
	var T3 = new sap.m.StandardTile({
		title:"Monsoon-Test1",
		info : "Availability",
		number : "23",
		infoState : "Success",
		numberUnit : "34"
			});  
	oContainer.addTile(T3);
	
	var T4 = new sap.m.StandardTile({
		title:"Monsoon-Test2",
		info : "Availability",
		number : "23",
		infoState : "Success",
		numberUnit : "34"
			});  
	oContainer.addTile(T4);
	
	var T5 = new sap.m.StandardTile({
		title:"Monsoon-Test3",
		info : "Availability",
		number : "23",
		infoState : "Success",
		numberUnit : "34"
			});  
	oContainer.addTile(T5);
	
		return page7; 
		
	}

});