"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var properties = /** @class */ (function () {
    function properties() {
    }
    Object.defineProperty(properties, "OCCURRENCES_CONTRIBUTOR_EXTENSION_POINT_ID", {
        get: function () {
            if (this.__$OCCURRENCES_CONTRIBUTOR_EXTENSION_POINT_ID === undefined) {
                this.__$OCCURRENCES_CONTRIBUTOR_EXTENSION_POINT_ID = Plugin.join(ServerPlugin.UNIQUE_IDENTIFIER, ServerPlugin.OCCURRENCES_CONTRIBUTOR_EXTENSION_POINT);
            }
            return this.__$OCCURRENCES_CONTRIBUTOR_EXTENSION_POINT_ID;
        },
        set: function (__$value) {
            this.__$OCCURRENCES_CONTRIBUTOR_EXTENSION_POINT_ID = __$value;
        },
        enumerable: true,
        configurable: true
    });
    return properties;
}());
exports.properties = properties;
//# sourceMappingURL=occurrences.js.map