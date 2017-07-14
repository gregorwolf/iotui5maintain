jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"de/computerservice-wolf/iotui5/maintain/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"de/computerservice-wolf/iotui5/maintain/test/integration/pages/App",
	"de/computerservice-wolf/iotui5/maintain/test/integration/pages/Browser",
	"de/computerservice-wolf/iotui5/maintain/test/integration/pages/Master",
	"de/computerservice-wolf/iotui5/maintain/test/integration/pages/Detail",
	"de/computerservice-wolf/iotui5/maintain/test/integration/pages/NotFound"
], function(Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "de.computerservice-wolf.iotui5.maintain.view."
	});

	sap.ui.require([
		"de/computerservice-wolf/iotui5/maintain/test/integration/NavigationJourneyPhone",
		"de/computerservice-wolf/iotui5/maintain/test/integration/NotFoundJourneyPhone",
		"de/computerservice-wolf/iotui5/maintain/test/integration/BusyJourneyPhone"
	], function() {
		QUnit.start();
	});
});