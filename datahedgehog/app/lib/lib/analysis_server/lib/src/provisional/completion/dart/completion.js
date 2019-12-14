"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var properties = /** @class */ (function () {
    function properties() {
    }
    Object.defineProperty(properties, "DART_COMPLETION_CONTRIBUTOR_EXTENSION_POINT_ID", {
        get: function () {
            if (this.__$DART_COMPLETION_CONTRIBUTOR_EXTENSION_POINT_ID === undefined) {
                this.__$DART_COMPLETION_CONTRIBUTOR_EXTENSION_POINT_ID = Plugin.join(DartCompletionPlugin.UNIQUE_IDENTIFIER, DartCompletionPlugin.CONTRIBUTOR_EXTENSION_POINT);
            }
            return this.__$DART_COMPLETION_CONTRIBUTOR_EXTENSION_POINT_ID;
        },
        set: function (__$value) {
            this.__$DART_COMPLETION_CONTRIBUTOR_EXTENSION_POINT_ID = __$value;
        },
        enumerable: true,
        configurable: true
    });
    return properties;
}());
exports.properties = properties;
//# sourceMappingURL=completion.js.map