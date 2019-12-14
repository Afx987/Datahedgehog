"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/protocol/protocol.dart */
var _common_1 = require("@dart2ts/dart/_common");
var utils_1 = require("@dart2ts/dart/utils");
var core = require("@dart2ts/dart/core");
var convert = require("@dart2ts/dart/convert");
var DomainHandler = /** @class */ (function () {
    function DomainHandler() {
    }
    DomainHandler.prototype.shutdown = function () {
    };
    DomainHandler.prototype.startup = function () {
    };
    DomainHandler.prototype.DomainHandler = function () {
    };
    __decorate([
        utils_1.defaultConstructor
    ], DomainHandler.prototype, "DomainHandler", null);
    DomainHandler = __decorate([
        utils_1.DartClass,
        utils_1.Implements(RequestHandler)
    ], DomainHandler);
    return DomainHandler;
}());
exports.DomainHandler = DomainHandler;
var Notification = /** @class */ (function () {
    function Notification(event, params) {
    }
    Notification_1 = Notification;
    Object.defineProperty(Notification, "EVENT", {
        get: function () {
            if (this.__$EVENT === undefined) {
                this.__$EVENT = 'event';
            }
            return this.__$EVENT;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Notification, "PARAMS", {
        get: function () {
            if (this.__$PARAMS === undefined) {
                this.__$PARAMS = 'params';
            }
            return this.__$PARAMS;
        },
        enumerable: true,
        configurable: true
    });
    Notification.prototype.Notification = function (event, params) {
        this.event = event;
        this.params = params;
    };
    Notification.$fromJson = function (json) {
        return new Notification_1(json.get(Notification_1.EVENT), json.get(Notification_1.PARAMS));
    };
    Notification.prototype.toJson = function () {
        var jsonObject = new core.DartMap.literal([]);
        jsonObject.set(Notification_1.EVENT, this.event);
        if (this.params != null) {
            jsonObject.set(Notification_1.PARAMS, this.params);
        }
        return jsonObject;
    };
    var Notification_1;
    __decorate([
        utils_1.defaultConstructor
    ], Notification.prototype, "Notification", null);
    __decorate([
        utils_1.namedFactory
    ], Notification, "$fromJson", null);
    Notification = Notification_1 = __decorate([
        utils_1.DartClass
    ], Notification);
    return Notification;
}());
exports.Notification = Notification;
var Request = /** @class */ (function () {
    function Request(id, method, params, clientRequestTime) {
    }
    Request_1 = Request;
    Object.defineProperty(Request, "ID", {
        get: function () {
            if (this.__$ID === undefined) {
                this.__$ID = 'id';
            }
            return this.__$ID;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Request, "METHOD", {
        get: function () {
            if (this.__$METHOD === undefined) {
                this.__$METHOD = 'method';
            }
            return this.__$METHOD;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Request, "PARAMS", {
        get: function () {
            if (this.__$PARAMS === undefined) {
                this.__$PARAMS = 'params';
            }
            return this.__$PARAMS;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Request, "CLIENT_REQUEST_TIME", {
        get: function () {
            if (this.__$CLIENT_REQUEST_TIME === undefined) {
                this.__$CLIENT_REQUEST_TIME = 'clientRequestTime';
            }
            return this.__$CLIENT_REQUEST_TIME;
        },
        enumerable: true,
        configurable: true
    });
    Request.prototype.Request = function (id, method, params, clientRequestTime) {
        this.params = (params || new core.DartMap.literal([]));
        this.id = id;
        this.method = method;
        this.clientRequestTime = clientRequestTime;
    };
    Request.$fromJson = function (result) {
        var id = result.get(Request_1.ID);
        var method = result.get(Request_1.METHOD);
        if (_common_1.isNot(id, "string") || _common_1.isNot(method, "string")) {
            return null;
        }
        var time = result.get(Request_1.CLIENT_REQUEST_TIME);
        if (time != null && _common_1.isNot(time, "number")) {
            return null;
        }
        var params = result.get(Request_1.PARAMS);
        if (_common_1.is(params, core.DartMap() || utils_1.op(utils_1.Op.EQUALS, params, null))) {
            return new Request_1(id, method, params, time);
        }
        else {
            return null;
        }
    };
    Request.$fromString = function (data) {
        try {
            var result = convert.properties.JSON.decode(data);
            if (_common_1.is(result, core.DartMap())) {
                return new Request_1.fromJson(result);
            }
            return null;
        }
        catch (__error__) {
            {
                var exception = __error__;
                return null;
            }
        }
    };
    Object.defineProperty(Request.prototype, "hashCode", {
        get: function () {
            return new core.DartString(this.id).hashCode;
        },
        enumerable: true,
        configurable: true
    });
    Request.prototype[_a = utils_1.OperatorMethods.EQUALS] = function (other) {
        return _common_1.is(other, Request_1) && this.id == other.id && this.method == other.method && this.clientRequestTime == other.clientRequestTime && this._equalMaps(this.params, other.params);
    };
    Request.prototype.toJson = function () {
        var jsonObject = new core.DartMap.literal([]);
        jsonObject.set(Request_1.ID, this.id);
        jsonObject.set(Request_1.METHOD, this.method);
        if (this.params.isNotEmpty) {
            jsonObject.set(Request_1.PARAMS, this.params);
        }
        if (this.clientRequestTime != null) {
            jsonObject.set(Request_1.CLIENT_REQUEST_TIME, this.clientRequestTime);
        }
        return jsonObject;
    };
    Request.prototype._equalLists = function (first, second) {
        if (first == null) {
            return second == null;
        }
        if (second == null) {
            return false;
        }
        var length = first.length;
        if (length != second.length) {
            return false;
        }
        for (var i = 0; i < length; i++) {
            if (!this._equalObjects(first[i], second[i])) {
                return false;
            }
        }
        return true;
    };
    Request.prototype._equalMaps = function (first, second) {
        if (first == null) {
            return second == null;
        }
        if (second == null) {
            return false;
        }
        if (first.length != second.length) {
            return false;
        }
        for (var _i = 0, _b = first.keys; _i < _b.length; _i++) {
            var key = _b[_i];
            if (!second.containsKey(key)) {
                return false;
            }
            if (!this._equalObjects(first.get(key), second.get(key))) {
                return false;
            }
        }
        return true;
    };
    Request.prototype._equalObjects = function (first, second) {
        if (utils_1.op(utils_1.Op.EQUALS, first, null)) {
            return utils_1.op(utils_1.Op.EQUALS, second, null);
        }
        if (utils_1.op(utils_1.Op.EQUALS, second, null)) {
            return false;
        }
        if (_common_1.is(first, core.DartMap())) {
            if (_common_1.is(second, core.DartMap())) {
                return this._equalMaps(first, second);
            }
            return false;
        }
        if (_common_1.is(first, core.DartList())) {
            if (_common_1.is(second, core.DartList())) {
                return this._equalLists(first, second);
            }
            return false;
        }
        return utils_1.op(utils_1.Op.EQUALS, first, second);
    };
    var Request_1, _a;
    __decorate([
        utils_1.defaultConstructor
    ], Request.prototype, "Request", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], Request.prototype, "hashCode", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], Request.prototype, _a, null);
    __decorate([
        utils_1.namedFactory
    ], Request, "$fromJson", null);
    __decorate([
        utils_1.namedFactory
    ], Request, "$fromString", null);
    Request = Request_1 = __decorate([
        utils_1.DartClass
    ], Request);
    return Request;
}());
exports.Request = Request;
var RequestFailure = /** @class */ (function () {
    function RequestFailure(response) {
    }
    RequestFailure.prototype.RequestFailure = function (response) {
        this.response = response;
    };
    __decorate([
        utils_1.defaultConstructor
    ], RequestFailure.prototype, "RequestFailure", null);
    RequestFailure = __decorate([
        utils_1.DartClass,
        utils_1.Implements(core.Exception)
    ], RequestFailure);
    return RequestFailure;
}());
exports.RequestFailure = RequestFailure;
var RequestHandler = /** @class */ (function () {
    function RequestHandler() {
    }
    RequestHandler.prototype.handleRequest = function (request) { throw 'abstract'; };
    RequestHandler.prototype.RequestHandler = function () {
    };
    __decorate([
        utils_1.Abstract
    ], RequestHandler.prototype, "handleRequest", null);
    __decorate([
        utils_1.defaultConstructor
    ], RequestHandler.prototype, "RequestHandler", null);
    RequestHandler = __decorate([
        utils_1.DartClass
    ], RequestHandler);
    return RequestHandler;
}());
exports.RequestHandler = RequestHandler;
var Response = /** @class */ (function () {
    function Response(id, _namedArguments) {
    }
    Response_1 = Response;
    Object.defineProperty(Response, "DELAYED_RESPONSE", {
        get: function () {
            if (this.__$DELAYED_RESPONSE === undefined) {
                this.__$DELAYED_RESPONSE = new Response_1('DELAYED_RESPONSE');
            }
            return this.__$DELAYED_RESPONSE;
        },
        set: function (__$value) {
            this.__$DELAYED_RESPONSE = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Response, "ID", {
        get: function () {
            if (this.__$ID === undefined) {
                this.__$ID = 'id';
            }
            return this.__$ID;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Response, "ERROR", {
        get: function () {
            if (this.__$ERROR === undefined) {
                this.__$ERROR = 'error';
            }
            return this.__$ERROR;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Response, "RESULT", {
        get: function () {
            if (this.__$RESULT === undefined) {
                this.__$RESULT = 'result';
            }
            return this.__$RESULT;
        },
        enumerable: true,
        configurable: true
    });
    Response.prototype.Response = function (id, _namedArguments) {
        var _b = Object.assign({}, _namedArguments), result = _b.result, error = _b.error;
        this.result = result;
        this.id = id;
        this.error = error;
    };
    Response.prototype.debugPortCouldNotBeOpened = function (request, error) {
        this.Response(request.id, {
            error: new bare.createInstance(any, null, RequestErrorCode.DEBUG_PORT_COULD_NOT_BE_OPENED, "" + error)
        });
    };
    Response.prototype.fileNotAnalyzed = function (request, file) {
        this.Response(request.id, {
            error: new bare.createInstance(any, null, RequestErrorCode.FILE_NOT_ANALYZED, "File is not analyzed: " + file + ".")
        });
    };
    Response.prototype.formatInvalidFile = function (request) {
        this.Response(request.id, {
            error: new bare.createInstance(any, null, RequestErrorCode.FORMAT_INVALID_FILE, 'Error during `edit.format`: invalid file.')
        });
    };
    Response.prototype.formatWithErrors = function (request) {
        this.Response(request.id, {
            error: new bare.createInstance(any, null, RequestErrorCode.FORMAT_WITH_ERRORS, 'Error during `edit.format`: source contains syntax errors.')
        });
    };
    Response.$fromJson = function (json) {
        try {
            var id = json.get(Response_1.ID);
            if (_common_1.isNot(id, "string")) {
                return null;
            }
            var error = json.get(Response_1.ERROR);
            var decodedError = void 0;
            if (_common_1.is(error, core.DartMap())) {
                decodedError = new bare.createInstance(any, null, new bare.createInstance(any, null, null), '.error', error);
            }
            var result = json.get(Response_1.RESULT);
            var decodedResult = void 0;
            if (_common_1.is(result, core.DartMap())) {
                decodedResult = result;
            }
            return new Response_1(id, {
                error: decodedError, result: decodedResult
            });
        }
        catch (__error__) {
            {
                var exception = __error__;
                return null;
            }
        }
    };
    Response.prototype.getErrorsInvalidFile = function (request) {
        this.Response(request.id, {
            error: new bare.createInstance(any, null, RequestErrorCode.GET_ERRORS_INVALID_FILE, 'Error during `analysis.getErrors`: invalid file.')
        });
    };
    Response.prototype.getNavigationInvalidFile = function (request) {
        this.Response(request.id, {
            error: new bare.createInstance(any, null, RequestErrorCode.GET_NAVIGATION_INVALID_FILE, 'Error during `analysis.getNavigation`: invalid file.')
        });
    };
    Response.prototype.getReachableSourcesInvalidFile = function (request) {
        this.Response(request.id, {
            error: new bare.createInstance(any, null, RequestErrorCode.GET_REACHABLE_SOURCES_INVALID_FILE, 'Error during `analysis.getReachableSources`: invalid file.')
        });
    };
    Response.prototype.invalidAnalysisRoot = function (request, rootPath) {
        this.Response(request.id, {
            error: new bare.createInstance(any, null, RequestErrorCode.INVALID_ANALYSIS_ROOT, "Invalid analysis root: " + rootPath)
        });
    };
    Response.prototype.invalidExecutionContext = function (request, contextId) {
        this.Response(request.id, {
            error: new bare.createInstance(any, null, RequestErrorCode.INVALID_EXECUTION_CONTEXT, "Invalid execution context: " + contextId)
        });
    };
    Response.prototype.invalidFilePathFormat = function (request, path) {
        this.Response(request.id, {
            error: new bare.createInstance(any, null, RequestErrorCode.INVALID_FILE_PATH_FORMAT, "Invalid file path format: " + path)
        });
    };
    Response.prototype.invalidParameter = function (request, path, expectation) {
        this.Response(request.id, {
            error: new bare.createInstance(any, null, RequestErrorCode.INVALID_PARAMETER, "Invalid parameter '" + path + "'. " + expectation + ".")
        });
    };
    Response.prototype.invalidRequestFormat = function () {
        this.Response('', {
            error: new bare.createInstance(any, null, RequestErrorCode.INVALID_REQUEST, 'Invalid request')
        });
    };
    Response.prototype.organizeDirectivesError = function (request, message) {
        this.Response(request.id, {
            error: new bare.createInstance(any, null, RequestErrorCode.ORGANIZE_DIRECTIVES_ERROR, message)
        });
    };
    Response.prototype.refactoringRequestCancelled = function (request) {
        this.Response(request.id, {
            error: new bare.createInstance(any, null, RequestErrorCode.REFACTORING_REQUEST_CANCELLED, 'The `edit.getRefactoring` request was cancelled.')
        });
    };
    Response.$serverError = function (request, exception, stackTrace) {
        var error = new bare.createInstance(any, null, RequestErrorCode.SERVER_ERROR, exception.toString());
        if (stackTrace != null) {
            error.stackTrace = stackTrace.toString();
        }
        return new Response_1(request.id, {
            error: error
        });
    };
    Response.prototype.sortMembersInvalidFile = function (request) {
        this.Response(request.id, {
            error: new bare.createInstance(any, null, RequestErrorCode.SORT_MEMBERS_INVALID_FILE, 'Error during `edit.sortMembers`: invalid file.')
        });
    };
    Response.prototype.sortMembersParseErrors = function (request, numErrors) {
        this.Response(request.id, {
            error: new bare.createInstance(any, null, RequestErrorCode.SORT_MEMBERS_PARSE_ERRORS, "Error during ", edit.sortMembers(templateObject_1 || (templateObject_1 = __makeTemplateObject([": file has ", " scan/parse errors."], [": file has ", " scan/parse errors."])), numErrors))
        });
    };
    Response.prototype.unanalyzedPriorityFiles = function (requestId, fileNames) {
        this.Response(requestId, {
            error: new bare.createInstance(any, null, RequestErrorCode.UNANALYZED_PRIORITY_FILES, "Unanalyzed files cannot be a priority: '" + fileNames + "'")
        });
    };
    Response.prototype.unknownRequest = function (request) {
        this.Response(request.id, {
            error: new bare.createInstance(any, null, RequestErrorCode.UNKNOWN_REQUEST, 'Unknown request')
        });
    };
    Response.prototype.unknownSource = function (request) {
        this.Response(request.id, {
            error: new bare.createInstance(any, null, RequestErrorCode.UNKNOWN_SOURCE, 'Unknown source')
        });
    };
    Response.prototype.unsupportedFeature = function (requestId, message) {
        this.Response(requestId, {
            error: new bare.createInstance(any, null, RequestErrorCode.UNSUPPORTED_FEATURE, message)
        });
    };
    Response.prototype.toJson = function () {
        var jsonObject = new core.DartMap.literal([]);
        jsonObject.set(Response_1.ID, this.id);
        if (this.error != null) {
            jsonObject.set(Response_1.ERROR, this.error.toJson());
        }
        if (this.result != null) {
            jsonObject.set(Response_1.RESULT, this.result);
        }
        return jsonObject;
    };
    var Response_1;
    __decorate([
        utils_1.defaultConstructor
    ], Response.prototype, "Response", null);
    __decorate([
        utils_1.namedConstructor
    ], Response.prototype, "debugPortCouldNotBeOpened", null);
    __decorate([
        utils_1.namedConstructor
    ], Response.prototype, "fileNotAnalyzed", null);
    __decorate([
        utils_1.namedConstructor
    ], Response.prototype, "formatInvalidFile", null);
    __decorate([
        utils_1.namedConstructor
    ], Response.prototype, "formatWithErrors", null);
    __decorate([
        utils_1.namedConstructor
    ], Response.prototype, "getErrorsInvalidFile", null);
    __decorate([
        utils_1.namedConstructor
    ], Response.prototype, "getNavigationInvalidFile", null);
    __decorate([
        utils_1.namedConstructor
    ], Response.prototype, "getReachableSourcesInvalidFile", null);
    __decorate([
        utils_1.namedConstructor
    ], Response.prototype, "invalidAnalysisRoot", null);
    __decorate([
        utils_1.namedConstructor
    ], Response.prototype, "invalidExecutionContext", null);
    __decorate([
        utils_1.namedConstructor
    ], Response.prototype, "invalidFilePathFormat", null);
    __decorate([
        utils_1.namedConstructor
    ], Response.prototype, "invalidParameter", null);
    __decorate([
        utils_1.namedConstructor
    ], Response.prototype, "invalidRequestFormat", null);
    __decorate([
        utils_1.namedConstructor
    ], Response.prototype, "organizeDirectivesError", null);
    __decorate([
        utils_1.namedConstructor
    ], Response.prototype, "refactoringRequestCancelled", null);
    __decorate([
        utils_1.namedConstructor
    ], Response.prototype, "sortMembersInvalidFile", null);
    __decorate([
        utils_1.namedConstructor
    ], Response.prototype, "sortMembersParseErrors", null);
    __decorate([
        utils_1.namedConstructor
    ], Response.prototype, "unanalyzedPriorityFiles", null);
    __decorate([
        utils_1.namedConstructor
    ], Response.prototype, "unknownRequest", null);
    __decorate([
        utils_1.namedConstructor
    ], Response.prototype, "unknownSource", null);
    __decorate([
        utils_1.namedConstructor
    ], Response.prototype, "unsupportedFeature", null);
    __decorate([
        utils_1.namedFactory
    ], Response, "$fromJson", null);
    __decorate([
        utils_1.namedFactory
    ], Response, "$serverError", null);
    Response = Response_1 = __decorate([
        utils_1.DartClass
    ], Response);
    return Response;
}());
exports.Response = Response;
var properties = /** @class */ (function () {
    function properties() {
    }
    return properties;
}());
exports.properties = properties;
var templateObject_1;
//# sourceMappingURL=protocol.js.map