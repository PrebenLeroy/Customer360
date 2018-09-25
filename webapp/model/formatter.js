sap.ui.define([
	"sap/ui/core/format/DateFormat"
	], function (DateFormat) {
	"use strict";

	return {

		addLeadingZeros : function (sValue) {
			return "00" + sValue;
		},
		
		formatDate : function (dValue) {
			var oInstance = DateFormat.getInstance();
			return oInstance.format(dValue);
		}
	};
});
