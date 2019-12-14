"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/plugin/protocol/protocol_dart.dart */
var _common_1 = require("@dart2ts/dart/_common");
var utils_1 = require("@dart2ts/dart/utils");
var core = require("@dart2ts/dart/core");
var lib3 = require("@dart2ts.packages/analyzer/lib/dart/element/element");
exports.convertElement = function (element) {
    var name = element.displayName;
    var elementTypeParameters = exports._getTypeParametersString(element);
    var elementParameters = exports._getParametersString(element);
    var elementReturnType = getReturnTypeString(element);
    var kind = exports.convertElementToElementKind(element);
    return new bare.createInstance(any, null, kind, name, Element.makeFlags({
        isPrivate: element.isPrivate, isDeprecated: element.isDeprecated, isAbstract: exports._isAbstract(element), isConst: exports._isConst(element), isFinal: exports._isFinal(element), isStatic: exports._isStatic(element)
    }), {
        location: newLocation_fromElement(element), typeParameters: elementTypeParameters, parameters: elementParameters, returnType: elementReturnType
    });
};
exports.convertElementKind = function (kind) {
    if (utils_1.op(utils_1.Op.EQUALS, kind, lib3.ElementKind.CLASS)) {
        return ElementKind.CLASS;
    }
    if (utils_1.op(utils_1.Op.EQUALS, kind, lib3.ElementKind.COMPILATION_UNIT)) {
        return ElementKind.COMPILATION_UNIT;
    }
    if (utils_1.op(utils_1.Op.EQUALS, kind, lib3.ElementKind.CONSTRUCTOR)) {
        return ElementKind.CONSTRUCTOR;
    }
    if (utils_1.op(utils_1.Op.EQUALS, kind, lib3.ElementKind.FIELD)) {
        return ElementKind.FIELD;
    }
    if (utils_1.op(utils_1.Op.EQUALS, kind, lib3.ElementKind.FUNCTION)) {
        return ElementKind.FUNCTION;
    }
    if (utils_1.op(utils_1.Op.EQUALS, kind, lib3.ElementKind.FUNCTION_TYPE_ALIAS)) {
        return ElementKind.FUNCTION_TYPE_ALIAS;
    }
    if (utils_1.op(utils_1.Op.EQUALS, kind, lib3.ElementKind.GETTER)) {
        return ElementKind.GETTER;
    }
    if (utils_1.op(utils_1.Op.EQUALS, kind, lib3.ElementKind.LABEL)) {
        return ElementKind.LABEL;
    }
    if (utils_1.op(utils_1.Op.EQUALS, kind, lib3.ElementKind.LIBRARY)) {
        return ElementKind.LIBRARY;
    }
    if (utils_1.op(utils_1.Op.EQUALS, kind, lib3.ElementKind.LOCAL_VARIABLE)) {
        return ElementKind.LOCAL_VARIABLE;
    }
    if (utils_1.op(utils_1.Op.EQUALS, kind, lib3.ElementKind.METHOD)) {
        return ElementKind.METHOD;
    }
    if (utils_1.op(utils_1.Op.EQUALS, kind, lib3.ElementKind.PARAMETER)) {
        return ElementKind.PARAMETER;
    }
    if (utils_1.op(utils_1.Op.EQUALS, kind, lib3.ElementKind.PREFIX)) {
        return ElementKind.PREFIX;
    }
    if (utils_1.op(utils_1.Op.EQUALS, kind, lib3.ElementKind.SETTER)) {
        return ElementKind.SETTER;
    }
    if (utils_1.op(utils_1.Op.EQUALS, kind, lib3.ElementKind.TOP_LEVEL_VARIABLE)) {
        return ElementKind.TOP_LEVEL_VARIABLE;
    }
    if (utils_1.op(utils_1.Op.EQUALS, kind, lib3.ElementKind.TYPE_PARAMETER)) {
        return ElementKind.TYPE_PARAMETER;
    }
    return ElementKind.UNKNOWN;
};
exports.convertElementToElementKind = function (element) {
    if (_common_1.is(element, any) && element.isEnum) {
        return ElementKind.ENUM;
    }
    if (_common_1.is(element, any) && element.isEnumConstant && element.type != null && utils_1.op(utils_1.Op.EQUALS, element.type.element, element.enclosingElement)) {
        return ElementKind.ENUM_CONSTANT;
    }
    return exports.convertElementKind(element.kind);
};
exports._getParametersString = function (element) {
    var parameters;
    if (_common_1.is(element, any)) {
        if (utils_1.op(utils_1.Op.EQUALS, element.kind, lib3.ElementKind.GETTER) && element.parameters.isEmpty) {
            return null;
        }
        parameters = element.parameters;
    }
    else if (_common_1.is(element, any)) {
        parameters = element.parameters;
    }
    else {
        return null;
    }
    var sb = new core.DartStringBuffer();
    var closeOptionalString = '';
    for (var _i = 0, parameters_1 = parameters; _i < parameters_1.length; _i++) {
        var parameter = parameters_1[_i];
        if (sb.isNotEmpty) {
            sb.write(', ');
        }
        if (new core.DartString(closeOptionalString).isEmpty) {
            var kind = parameter.parameterKind;
            if (utils_1.op(utils_1.Op.EQUALS, kind, lib3.ParameterKind.NAMED)) {
                sb.write('{');
                closeOptionalString = '}';
            }
            if (utils_1.op(utils_1.Op.EQUALS, kind, lib3.ParameterKind.POSITIONAL)) {
                sb.write('[');
                closeOptionalString = ']';
            }
        }
        parameter.appendToWithoutDelimiters(sb);
    }
    sb.write(closeOptionalString);
    return '(' + sb.toString() + ')';
};
exports._getTypeParametersString = function (element) {
    var typeParameters;
    if (_common_1.is(element, any)) {
        typeParameters = element.typeParameters;
    }
    else if (_common_1.is(element, any)) {
        typeParameters = element.typeParameters;
    }
    if (typeParameters == null || typeParameters.isEmpty) {
        return null;
    }
    return "<" + typeParameters.join(', ') + ">";
};
exports._isAbstract = function (element) {
    if (_common_1.is(element, any)) {
        return element.isAbstract;
    }
    if (_common_1.is(element, any)) {
        return element.isAbstract;
    }
    if (_common_1.is(element, any)) {
        return element.isAbstract;
    }
    return false;
};
exports._isConst = function (element) {
    if (_common_1.is(element, any)) {
        return element.isConst;
    }
    if (_common_1.is(element, any)) {
        return element.isConst;
    }
    return false;
};
exports._isFinal = function (element) {
    if (_common_1.is(element, any)) {
        return element.isFinal;
    }
    return false;
};
exports._isStatic = function (element) {
    if (_common_1.is(element, any)) {
        return element.isStatic;
    }
    if (_common_1.is(element, any)) {
        return element.isStatic;
    }
    return false;
};
var properties = /** @class */ (function () {
    function properties() {
    }
    return properties;
}());
exports.properties = properties;
//# sourceMappingURL=protocol_dart.js.map