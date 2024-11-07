sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/m/IllustrationPool"],
  function (Controller, IllustrationPool) {
    "use strict";

    return Controller.extend("my.routingexternalcomponent.controller.Main", {
      onInit: function () {
        // registra las ilustraciones de TNT (tnt-)
        IllustrationPool.registerIllustrationSet(
          {
            setFamily: "tnt",
            setURI: sap.ui.require.toUrl("sap/tnt/themes/base/illustrations"),
          },
          false
        );
      },
    });
  }
);
