function initModel() {
	var sUrl = "/sap/opu/odata/sap/ZV_ZVT18_ORDERS_PL_CDS/";
	var oModel = new sap.ui.model.odata.ODataModel(sUrl, true);
	sap.ui.getCore().setModel(oModel);
}