jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 sensors in the list
// * All 3 sensors have at least one last_measurement

sap.ui.require([
	"sap/ui/test/Opa5",
	"de/computerservice-wolf/iotui5/maintain/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"de/computerservice-wolf/iotui5/maintain/test/integration/pages/App",
	"de/computerservice-wolf/iotui5/maintain/test/integration/pages/Browser",
	"de/computerservice-wolf/iotui5/maintain/test/integration/pages/Master",
	"de/computerservice-wolf/iotui5/maintain/test/integration/pages/Detail",
	"de/computerservice-wolf/iotui5/maintain/test/integration/pages/Create",
	"de/computerservice-wolf/iotui5/maintain/test/integration/pages/NotFound"
], function(Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "de.computerservice-wolf.iotui5.maintain.view."
	});

	sap.ui.require([
		"de/computerservice-wolf/iotui5/maintain/test/integration/MasterJourney",
		"de/computerservice-wolf/iotui5/maintain/test/integration/NavigationJourney",
		"de/computerservice-wolf/iotui5/maintain/test/integration/NotFoundJourney",
		"de/computerservice-wolf/iotui5/maintain/test/integration/BusyJourney",
		"de/computerservice-wolf/iotui5/maintain/test/integration/FLPIntegrationJourney"
	], function() {
		QUnit.start();
	});
});