sap.ui.define(["sap/ui/core/mvc/Controller"], function (BaseController) {
  "use strict";

  return BaseController.extend("my.routingexternalcomponent.controller.App", {
    onInit: function () {},
    onItemSelect: function (oEvent) {
      const oItem = oEvent.getParameter("item");
      var oRouter = this.getOwnerComponent().getRouter();
      oRouter.navTo(oItem.getKey());
    },
  });
});
