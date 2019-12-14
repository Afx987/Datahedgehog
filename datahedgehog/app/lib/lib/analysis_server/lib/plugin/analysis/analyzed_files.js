"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var properties = /** @class */ (function () {
    function properties() {
    }
    Object.defineProperty(properties, "ANALYZED_FILE_PATTERNS_EXTENSION_POINT_ID", {
        get: function () {
            if (this.__$ANALYZED_FILE_PATTERNS_EXTENSION_POINT_ID === undefined) {
                this.__$ANALYZED_FILE_PATTERNS_EXTENSION_POINT_ID = Plugin.join(ServerPlugin.UNIQUE_IDENTIFIER, ServerPlugin.ANALYZED_FILE_PATTERNS_EXTENSION_POINT);
            }
            return this.__$ANALYZED_FILE_PATTERNS_EXTENSION_POINT_ID;
        },
        set: function (__$value) {
            this.__$ANALYZED_FILE_PATTERNS_EXTENSION_POINT_ID = __$value;
        },
        enumerable: true,
        configurable: true
    });
    return properties;
}());
exports.properties = properties;
//# sourceMappingURL=analyzed_files.js.map