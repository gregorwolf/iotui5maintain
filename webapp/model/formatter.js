sap.ui.define([], function() {
	"use strict";

	return {
		/**
		 * Rounds the currency value to 2 digits
		 *
		 * @public
		 * @param {string} sValue value to be formatted
		 * @returns {string} formatted currency value with 2 digits
		 */
		currencyValue: function(sValue) {
			if (!sValue) {
				return "";
			}

			return parseFloat(sValue).toFixed(2);
		},
		
		inactiveStatus :  function (sStatus) {
			if (sStatus === "0") {
				return "Success";
			} else if (sStatus === "1"){
				return "Error";
			} else {
				return "None";
			}
		},
		
		inactiveText :  function (sStatus) {
			if (sStatus === "0") {
				return "Active";
			} else if (sStatus === "1"){
				return "Inactive";
			}
		}
	};

});