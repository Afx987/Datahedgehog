/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/plugin/protocol/protocol_dart.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/analyzer/lib/dart/element/element";

export var convertElement : (element : any) => any = (element : any) : any =>  {
    let name : string = element.displayName;
    let elementTypeParameters : string = _getTypeParametersString(element);
    let elementParameters : string = _getParametersString(element);
    let elementReturnType : string = getReturnTypeString(element);
    let kind : any = convertElementToElementKind(element);
    return new bare.createInstance(any,null,kind,name,Element.makeFlags({
        isPrivate : element.isPrivate,isDeprecated : element.isDeprecated,isAbstract : _isAbstract(element),isConst : _isConst(element),isFinal : _isFinal(element),isStatic : _isStatic(element)}),{
        location : newLocation_fromElement(element),typeParameters : elementTypeParameters,parameters : elementParameters,returnType : elementReturnType});
};
export var convertElementKind : (kind : any) => any = (kind : any) : any =>  {
    if (op(Op.EQUALS,kind,lib3.ElementKind.CLASS)) {
        return ElementKind.CLASS;
    }
    if (op(Op.EQUALS,kind,lib3.ElementKind.COMPILATION_UNIT)) {
        return ElementKind.COMPILATION_UNIT;
    }
    if (op(Op.EQUALS,kind,lib3.ElementKind.CONSTRUCTOR)) {
        return ElementKind.CONSTRUCTOR;
    }
    if (op(Op.EQUALS,kind,lib3.ElementKind.FIELD)) {
        return ElementKind.FIELD;
    }
    if (op(Op.EQUALS,kind,lib3.ElementKind.FUNCTION)) {
        return ElementKind.FUNCTION;
    }
    if (op(Op.EQUALS,kind,lib3.ElementKind.FUNCTION_TYPE_ALIAS)) {
        return ElementKind.FUNCTION_TYPE_ALIAS;
    }
    if (op(Op.EQUALS,kind,lib3.ElementKind.GETTER)) {
        return ElementKind.GETTER;
    }
    if (op(Op.EQUALS,kind,lib3.ElementKind.LABEL)) {
        return ElementKind.LABEL;
    }
    if (op(Op.EQUALS,kind,lib3.ElementKind.LIBRARY)) {
        return ElementKind.LIBRARY;
    }
    if (op(Op.EQUALS,kind,lib3.ElementKind.LOCAL_VARIABLE)) {
        return ElementKind.LOCAL_VARIABLE;
    }
    if (op(Op.EQUALS,kind,lib3.ElementKind.METHOD)) {
        return ElementKind.METHOD;
    }
    if (op(Op.EQUALS,kind,lib3.ElementKind.PARAMETER)) {
        return ElementKind.PARAMETER;
    }
    if (op(Op.EQUALS,kind,lib3.ElementKind.PREFIX)) {
        return ElementKind.PREFIX;
    }
    if (op(Op.EQUALS,kind,lib3.ElementKind.SETTER)) {
        return ElementKind.SETTER;
    }
    if (op(Op.EQUALS,kind,lib3.ElementKind.TOP_LEVEL_VARIABLE)) {
        return ElementKind.TOP_LEVEL_VARIABLE;
    }
    if (op(Op.EQUALS,kind,lib3.ElementKind.TYPE_PARAMETER)) {
        return ElementKind.TYPE_PARAMETER;
    }
    return ElementKind.UNKNOWN;
};
export var convertElementToElementKind : (element : any) => any = (element : any) : any =>  {
    if (is(element, any) && element.isEnum) {
        return ElementKind.ENUM;
    }
    if (is(element, any) && element.isEnumConstant && element.type != null && op(Op.EQUALS,element.type.element,element.enclosingElement)) {
        return ElementKind.ENUM_CONSTANT;
    }
    return convertElementKind(element.kind);
};
export var _getParametersString : (element : any) => string = (element : any) : string =>  {
    let parameters : core.DartList<any>;
    if (is(element, any)) {
        if (op(Op.EQUALS,element.kind,lib3.ElementKind.GETTER) && element.parameters.isEmpty) {
            return null;
        }
        parameters = element.parameters;
    }else if (is(element, any)) {
        parameters = element.parameters;
    }else {
        return null;
    }
    let sb : core.DartStringBuffer = new core.DartStringBuffer();
    let closeOptionalString : string = '';
    for(let parameter of parameters) {
        if (sb.isNotEmpty) {
            sb.write(', ');
        }
        if (new core.DartString(closeOptionalString).isEmpty) {
            let kind : any = parameter.parameterKind;
            if (op(Op.EQUALS,kind,lib3.ParameterKind.NAMED)) {
                sb.write('{');
                closeOptionalString = '}';
            }
            if (op(Op.EQUALS,kind,lib3.ParameterKind.POSITIONAL)) {
                sb.write('[');
                closeOptionalString = ']';
            }
        }
        parameter.appendToWithoutDelimiters(sb);
    }
    sb.write(closeOptionalString);
    return '(' + sb.toString() + ')';
};
export var _getTypeParametersString : (element : any) => string = (element : any) : string =>  {
    let typeParameters : core.DartList<any>;
    if (is(element, any)) {
        typeParameters = element.typeParameters;
    }else if (is(element, any)) {
        typeParameters = element.typeParameters;
    }
    if (typeParameters == null || typeParameters.isEmpty) {
        return null;
    }
    return `<${typeParameters.join(', ')}>`;
};
export var _isAbstract : (element : any) => boolean = (element : any) : boolean =>  {
    if (is(element, any)) {
        return element.isAbstract;
    }
    if (is(element, any)) {
        return element.isAbstract;
    }
    if (is(element, any)) {
        return element.isAbstract;
    }
    return false;
};
export var _isConst : (element : any) => boolean = (element : any) : boolean =>  {
    if (is(element, any)) {
        return element.isConst;
    }
    if (is(element, any)) {
        return element.isConst;
    }
    return false;
};
export var _isFinal : (element : any) => boolean = (element : any) : boolean =>  {
    if (is(element, any)) {
        return element.isFinal;
    }
    return false;
};
export var _isStatic : (element : any) => boolean = (element : any) : boolean =>  {
    if (is(element, any)) {
        return element.isStatic;
    }
    if (is(element, any)) {
        return element.isStatic;
    }
    return false;
};
export class properties {
}
