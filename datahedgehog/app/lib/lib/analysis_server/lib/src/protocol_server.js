"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/protocol_server.dart */
var _common_1 = require("@dart2ts/dart/_common");
var utils_1 = require("@dart2ts/dart/utils");
var core = require("@dart2ts/dart/core");
var lib3 = require("@dart2ts.packages/analysis_server/lib/src/services/search/search_engine");
exports.doAnalysisError_listFromEngine = function (analysisOptions, lineInfo, errors) {
    var serverErrors = new core.DartList.literal();
    for (var _i = 0, errors_1 = errors; _i < errors_1.length; _i++) {
        var error = errors_1[_i];
        var processor = ErrorProcessor.getProcessor(analysisOptions, error);
        if (processor != null) {
            var severity = processor.severity;
            if (severity != null) {
                serverErrors.add(exports.newAnalysisError_fromEngine(lineInfo, error, severity));
            }
        }
        else {
            serverErrors.add(exports.newAnalysisError_fromEngine(lineInfo, error));
        }
    }
    return serverErrors;
};
exports.doSourceChange_addElementEdit = function (change, element, edit) {
    var source = element.source;
    exports.doSourceChange_addSourceEdit(change, source, edit);
};
exports.doSourceChange_addSourceEdit = function (change, source, edit, _namedArguments) {
    var isNewFile = Object.assign({
        "isNewFile": false
    }, _namedArguments).isNewFile;
    var file = source.fullName;
    change.addEdit(file, isNewFile ? -1 : 0, edit);
};
exports.getReturnTypeString = function (element) {
    if (_common_1.is(element, any)) {
        if (utils_1.op(utils_1.Op.EQUALS, element.kind, lib3.ElementKind.SETTER)) {
            return null;
        }
        else {
            return (function (_31_) { return (!!_31_) ? _31_.toString() : null; })(element.returnType);
        }
    }
    else if (_common_1.is(element, any)) {
        var type = element.type;
        return type != null ? type.displayName : 'dynamic';
    }
    else if (_common_1.is(element, any)) {
        return element.returnType.toString();
    }
    else {
        return null;
    }
};
exports.newAnalysisError_fromEngine = function (lineInfo, error, errorSeverity) {
    var errorCode = error.errorCode;
    var location;
    {
        var file = error.source.fullName;
        var offset = error.offset;
        var length_1 = error.length;
        var startLine = -1;
        var startColumn = -1;
        if (lineInfo != null) {
            var lineLocation = lineInfo.getLocation(offset);
            if (lineLocation != null) {
                startLine = lineLocation.lineNumber;
                startColumn = lineLocation.columnNumber;
            }
        }
        location = new bare.createInstance(any, null, file, offset, length_1, startLine, startColumn);
    }
    errorSeverity = (errorSeverity) || (errorCode.errorSeverity);
    var severity = new bare.createInstance(any, null, errorSeverity.name);
    var type = new bare.createInstance(any, null, errorCode.type.name);
    var message = error.message;
    var code = errorCode.name.toLowerCase();
    var correction = error.correction;
    var fix = hasFix(error.errorCode);
    return new bare.createInstance(any, null, severity, type, location, message, code, {
        correction: correction, hasFix: fix
    });
};
exports.newLocation_fromElement = function (element) {
    if (utils_1.op(utils_1.Op.EQUALS, element, null) || utils_1.op(utils_1.Op.EQUALS, element.source, null)) {
        return null;
    }
    var offset = element.nameOffset;
    var length = element.nameLength;
    if (_common_1.is(element, any) || (_common_1.is(element, any) && offset < 0)) {
        offset = 0;
        length = 0;
    }
    var unitElement = exports._getUnitElement(element);
    var range = new bare.createInstance(any, null, offset, length);
    return exports._locationForArgs(unitElement, range);
};
exports.newLocation_fromMatch = function (match) {
    var unitElement = exports._getUnitElement(match.element);
    return exports._locationForArgs(unitElement, match.sourceRange);
};
exports.newLocation_fromNode = function (node) {
    var unit = node.getAncestor(function (node) {
        return _common_1.is(node, any);
    });
    var unitElement = unit.element;
    var range = new bare.createInstance(any, null, node.offset, node.length);
    return exports._locationForArgs(unitElement, range);
};
exports.newLocation_fromUnit = function (unit, range) {
    return exports._locationForArgs(unit.element, range);
};
exports.newOverriddenMember_fromEngine = function (member) {
    var element = convertElement(member);
    var className = member.enclosingElement.displayName;
    return new bare.createInstance(any, null, element, className);
};
exports.newSearchResult_fromMatch = function (match) {
    var kind = exports.newSearchResultKind_fromEngine(match.kind);
    var location = exports.newLocation_fromMatch(match);
    var path = exports._computePath(match.element);
    return new bare.createInstance(any, null, location, kind, !match.isResolved, path);
};
exports.newSearchResultKind_fromEngine = function (kind) {
    if (utils_1.op(utils_1.Op.EQUALS, kind, lib3.MatchKind.DECLARATION)) {
        return SearchResultKind.DECLARATION;
    }
    if (utils_1.op(utils_1.Op.EQUALS, kind, lib3.MatchKind.READ)) {
        return SearchResultKind.READ;
    }
    if (utils_1.op(utils_1.Op.EQUALS, kind, lib3.MatchKind.READ_WRITE)) {
        return SearchResultKind.READ_WRITE;
    }
    if (utils_1.op(utils_1.Op.EQUALS, kind, lib3.MatchKind.WRITE)) {
        return SearchResultKind.WRITE;
    }
    if (utils_1.op(utils_1.Op.EQUALS, kind, lib3.MatchKind.INVOCATION)) {
        return SearchResultKind.INVOCATION;
    }
    if (utils_1.op(utils_1.Op.EQUALS, kind, lib3.MatchKind.REFERENCE)) {
        return SearchResultKind.REFERENCE;
    }
    return SearchResultKind.UNKNOWN;
};
exports.newSourceEdit_range = function (range, replacement, _namedArguments) {
    var id = Object.assign({}, _namedArguments).id;
    return new bare.createInstance(any, null, range.offset, range.length, replacement, {
        id: id
    });
};
exports._computePath = function (element) {
    var path = new core.DartList.literal();
    while (element != null) {
        path.add(convertElement(element));
        if (_common_1.is(element, any)) {
            var library = element.enclosingElement;
            element = library.definingCompilationUnit;
        }
        else {
            element = element.enclosingElement;
        }
    }
    return path;
};
exports._getUnitElement = function (element) {
    if (_common_1.is(element, any)) {
        return element;
    }
    if (_common_1.is((function (t) { return (!!t) ? t.enclosingElement : null; })(element), any)) {
        element = element.enclosingElement;
    }
    if (_common_1.is(element, any)) {
        return element.definingCompilationUnit;
    }
    for (; element != null; element = element.enclosingElement) {
        if (_common_1.is(element, any)) {
            return element;
        }
    }
    return null;
};
exports._locationForArgs = function (unitElement, range) {
    var startLine = 0;
    var startColumn = 0;
    try {
        var lineInfo = unitElement.lineInfo;
        if (lineInfo != null) {
            var offsetLocation = lineInfo.getLocation(range.offset);
            startLine = offsetLocation.lineNumber;
            startColumn = offsetLocation.columnNumber;
        }
    }
    catch (__error__) {
        if (_common_1.is(__error__, any)) {
        }
    }
    return new bare.createInstance(any, null, unitElement.source.fullName, range.offset, range.length, startLine, startColumn);
};
var properties = /** @class */ (function () {
    function properties() {
    }
    return properties;
}());
exports.properties = properties;
//# sourceMappingURL=protocol_server.js.map