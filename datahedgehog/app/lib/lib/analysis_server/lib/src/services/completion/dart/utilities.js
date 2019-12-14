"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/services/completion/dart/utilities.dart */
var _common_1 = require("@dart2ts/dart/_common");
var utils_1 = require("@dart2ts/dart/utils");
var core = require("@dart2ts/dart/core");
var lib3 = require("@dart2ts.packages/analyzer_plugin/lib/protocol/protocol_common");
exports.addDefaultArgDetails = function (suggestion, element, requiredParams, namedParams, options) {
    var sb = new core.DartStringBuffer();
    var ranges = new core.DartList.literal();
    var offset;
    for (var _i = 0, requiredParams_1 = requiredParams; _i < requiredParams_1.length; _i++) {
        var param = requiredParams_1[_i];
        if (sb.isNotEmpty) {
            sb.write(', ');
        }
        offset = sb.length;
        var name_1 = param.name;
        sb.write(name_1);
        ranges.addAll(new core.DartList.literal(offset, new core.DartString(name_1).length));
    }
    for (var _a = 0, namedParams_1 = namedParams; _a < namedParams_1.length; _a++) {
        var param = namedParams_1[_a];
        if (param.isRequired) {
            if (sb.isNotEmpty) {
                sb.write(', ');
            }
            var name_2 = param.name;
            sb.write(name_2 + ": ");
            offset = sb.length;
            var defaultValue = exports._getDefaultValue(param);
            sb.write(defaultValue);
            ranges.addAll(new core.DartList.literal(offset, new core.DartString(defaultValue).length));
        }
    }
    if (utils_1.op(utils_1.Op.EQUALS, (function (t) { return (!!t) ? t.generateFlutterWidgetChildrenBoilerPlate : null; })(options), true)) {
        if (_common_1.is(element, any)) {
            if (isFlutterWidget(element.enclosingElement)) {
                for (var _b = 0, _c = element.parameters; _b < _c.length; _b++) {
                    var param = _c[_b];
                    if (utils_1.op(utils_1.Op.EQUALS, param.name, 'children')) {
                        var defaultValue = (exports.getDefaultStringParameterValue(param) || '');
                        if (sb.isNotEmpty) {
                            sb.write(', ');
                        }
                        sb.write('children: ');
                        offset = sb.length;
                        sb.write(defaultValue);
                        ranges.addAll(new core.DartList.literal(offset, new core.DartString(defaultValue).length));
                    }
                }
            }
        }
    }
    suggestion.defaultArgumentListString = sb.isNotEmpty ? sb.toString() : null;
    suggestion.defaultArgumentListTextRanges = ranges.isNotEmpty ? ranges : null;
};
exports.createLocalElement = function (source, kind, id, _namedArguments) {
    var _a = Object.assign({
        "isAbstract": false,
        "isDeprecated": false
    }, _namedArguments), parameters = _a.parameters, returnType = _a.returnType, isAbstract = _a.isAbstract, isDeprecated = _a.isDeprecated;
    var name;
    var location;
    if (id != null) {
        name = id.name;
        location = new bare.createInstance(any, null, source.fullName, id.offset, id.length, 0, 0);
    }
    else {
        name = '';
        location = new bare.createInstance(any, null, source.fullName, -1, 0, 1, 0);
    }
    var flags = lib3.Element.makeFlags({
        isAbstract: isAbstract, isDeprecated: isDeprecated, isPrivate: Identifier.isPrivateName(name)
    });
    return new bare.createInstance(any, null, kind, name, flags, {
        location: location, parameters: parameters, returnType: exports.nameForType(returnType)
    });
};
exports.createLocalFieldSuggestion = function (source, fieldDecl, varDecl) {
    var deprecated = exports.isDeprecated(fieldDecl) || exports.isDeprecated(varDecl);
    var type = fieldDecl.fields.type;
    return exports.createLocalSuggestion(varDecl.name, deprecated, DART_RELEVANCE_LOCAL_FIELD, type, {
        classDecl: fieldDecl.parent, element: exports.createLocalElement(source, lib3.ElementKind.FIELD, varDecl.name, {
            returnType: type, isDeprecated: deprecated
        })
    });
};
exports.createLocalSuggestion = function (id, isDeprecated, defaultRelevance, returnType, _namedArguments) {
    var _a = Object.assign({
        "kind": CompletionSuggestionKind.INVOCATION
    }, _namedArguments), classDecl = _a.classDecl, kind = _a.kind, element = _a.element;
    if (utils_1.op(utils_1.Op.EQUALS, id, null)) {
        return null;
    }
    var completion = id.name;
    if (completion == null || new core.DartString(completion).length <= 0 || completion == '_') {
        return null;
    }
    var suggestion = new bare.createInstance(any, null, kind, isDeprecated ? DART_RELEVANCE_LOW : defaultRelevance, completion, new core.DartString(completion).length, 0, isDeprecated, false, {
        returnType: exports.nameForType(returnType), element: element
    });
    if (classDecl != null) {
        var classId = classDecl.name;
        if (classId != null) {
            var className = classId.name;
            if (className != null && new core.DartString(className).length > 0) {
                suggestion.declaringType = className;
            }
        }
    }
    return suggestion;
};
exports.getDefaultStringParameterValue = function (param) {
    if (param != null) {
        var type = param.type;
        if (_common_1.is(type, any) && exports.isDartList(type)) {
            var typeArguments = type.typeArguments;
            if (typeArguments.length == 1) {
                var typeArg = typeArguments.first;
                var typeInfo = !typeArg.isDynamic ? "<" + typeArg.name + ">" : '';
                return typeInfo + "[]";
            }
        }
        if (_common_1.is(type, any)) {
            var params = type.parameters.map(function (p) {
                return "" + exports.getTypeString(p.type) + p.name;
            }).join(', ');
            return "(" + params + ") {}";
        }
    }
    return null;
};
exports.getTypeString = function (type) {
    return type.isDynamic ? '' : type.name + " ";
};
exports.isDartList = function (type) {
    var element = type.element;
    if (element != null) {
        return utils_1.op(utils_1.Op.EQUALS, element.name, "List") && element.library.isDartCore;
    }
    return false;
};
exports.isDeprecated = function (node) {
    if (node != null) {
        var metadata = node.metadata;
        if (metadata != null) {
            return metadata.any(function (a) {
                return _common_1.is(a.name, any) && utils_1.op(utils_1.Op.EQUALS, a.name.name, 'deprecated');
            });
        }
    }
    return false;
};
exports.nameForType = function (type) {
    if (utils_1.op(utils_1.Op.EQUALS, type, properties.NO_RETURN_TYPE)) {
        return null;
    }
    if (utils_1.op(utils_1.Op.EQUALS, type, null)) {
        return properties.DYNAMIC;
    }
    if (_common_1.is(type, any)) {
        var id = type.name;
        if (utils_1.op(utils_1.Op.EQUALS, id, null)) {
            return properties.DYNAMIC;
        }
        var name_3 = id.name;
        if (name_3 == null || new core.DartString(name_3).length <= 0) {
            return properties.DYNAMIC;
        }
        var typeArgs = type.typeArguments;
        if (typeArgs != null) {
        }
        return name_3;
    }
    else if (_common_1.is(type, any)) {
    }
    return properties.DYNAMIC;
};
exports._getDefaultValue = function (param) {
    return 'null';
};
var properties = /** @class */ (function () {
    function properties() {
    }
    Object.defineProperty(properties, "DYNAMIC", {
        get: function () {
            if (this.__$DYNAMIC === undefined) {
                this.__$DYNAMIC = 'dynamic';
            }
            return this.__$DYNAMIC;
        },
        set: function (__$value) {
            this.__$DYNAMIC = __$value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(properties, "NO_RETURN_TYPE", {
        get: function () {
            if (this.__$NO_RETURN_TYPE === undefined) {
                this.__$NO_RETURN_TYPE = astFactory.typeName(astFactory.simpleIdentifier(new bare.createInstance(any, null, TokenType.IDENTIFIER, '', 0)), null);
            }
            return this.__$NO_RETURN_TYPE;
        },
        set: function (__$value) {
            this.__$NO_RETURN_TYPE = __$value;
        },
        enumerable: true,
        configurable: true
    });
    return properties;
}());
exports.properties = properties;
//# sourceMappingURL=utilities.js.map