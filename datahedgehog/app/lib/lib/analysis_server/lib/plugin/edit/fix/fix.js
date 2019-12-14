"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var properties = /** @class */ (function () {
    function properties() {
    }
    Object.defineProperty(properties, "FIX_CONTRIBUTOR_EXTENSION_POINT_ID", {
        get: function () {
            if (this.__$FIX_CONTRIBUTOR_EXTENSION_POINT_ID === undefined) {
                this.__$FIX_CONTRIBUTOR_EXTENSION_POINT_ID = Plugin.join(ServerPlugin.UNIQUE_IDENTIFIER, ServerPlugin.FIX_CONTRIBUTOR_EXTENSION_POINT);
            }
            return this.__$FIX_CONTRIBUTOR_EXTENSION_POINT_ID;
        },
        set: function (__$value) {
            this.__$FIX_CONTRIBUTOR_EXTENSION_POINT_ID = __$value;
        },
        enumerable: true,
        configurable: true
    });
    return properties;
}());
exports.properties = properties;
//# sourceMappingURL=fix.js.map