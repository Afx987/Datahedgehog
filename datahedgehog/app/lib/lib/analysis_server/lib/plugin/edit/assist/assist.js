"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var properties = /** @class */ (function () {
    function properties() {
    }
    Object.defineProperty(properties, "ASSIST_CONTRIBUTOR_EXTENSION_POINT_ID", {
        get: function () {
            if (this.__$ASSIST_CONTRIBUTOR_EXTENSION_POINT_ID === undefined) {
                this.__$ASSIST_CONTRIBUTOR_EXTENSION_POINT_ID = Plugin.join(ServerPlugin.UNIQUE_IDENTIFIER, ServerPlugin.ASSIST_CONTRIBUTOR_EXTENSION_POINT);
            }
            return this.__$ASSIST_CONTRIBUTOR_EXTENSION_POINT_ID;
        },
        set: function (__$value) {
            this.__$ASSIST_CONTRIBUTOR_EXTENSION_POINT_ID = __$value;
        },
        enumerable: true,
        configurable: true
    });
    return properties;
}());
exports.properties = properties;
//# sourceMappingURL=assist.js.map