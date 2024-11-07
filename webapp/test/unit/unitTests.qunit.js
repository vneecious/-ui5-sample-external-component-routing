/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"my/routing-external-component/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
