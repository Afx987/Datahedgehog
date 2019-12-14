"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.new_sendDartNotificationNavigation = function (analysisServer, result) {
    var unit = result.unit;
    if (unit != null) {
        var collector = new bare.createInstance(any, null);
        computeDartNavigation(collector, unit, null, null);
        collector.createRegions();
        var params = new bare.createInstance(any, null, result.path, collector.regions, collector.targets, collector.files);
        analysisServer.sendNotification(params.toNotification());
    }
};
exports.new_sendDartNotificationOccurrences = function (analysisServer, result) {
    var unit = result.unit;
    if (unit != null) {
        var collector = new bare.createInstance(any, null);
        addDartOccurrences(collector, unit);
        var params = new bare.createInstance(any, null, result.path, collector.allOccurrences);
        analysisServer.sendNotification(params.toNotification());
    }
};
exports.new_sendErrorNotification = function (analysisServer, result) {
    var serverErrors = null /*topLevl*/.doAnalysisError_listFromEngine(result.driver.analysisOptions, result.lineInfo, result.errors);
    var params = new bare.createInstance(any, null, result.path, serverErrors);
    analysisServer.sendNotification(params.toNotification());
};
var properties = /** @class */ (function () {
    function properties() {
    }
    return properties;
}());
exports.properties = properties;
//# sourceMappingURL=new_notifications.js.map