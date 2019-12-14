/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/generated/incremental_resolution_validator.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var assertSameResolution : (actual : any,expected : any,_namedArguments? : {validateTypes? : boolean}) => void = (actual : any,expected : any,_namedArguments? : {validateTypes? : boolean}) : void =>  {
    let {validateTypes} = Object.assign({
        "validateTypes" : false}, _namedArguments );
    let validator : _SameResolutionValidator = new _SameResolutionValidator(validateTypes);
    validator.isEqualNodes(expected,actual);
};
export namespace IncrementalResolutionMismatch {
    export type Constructors = 'IncrementalResolutionMismatch';
    export type Interface = Omit<IncrementalResolutionMismatch, Constructors>;
}
@DartClass
export class IncrementalResolutionMismatch {
    message : string;

    constructor(message : string) {
    }
    @defaultConstructor
    IncrementalResolutionMismatch(message : string) {
        this.message = message;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `IncrementalResolutionMismatch: ${this.message}`;
    }
}

export namespace _SameResolutionValidator {
    export type Constructors = '_SameResolutionValidator';
    export type Interface = Omit<_SameResolutionValidator, Constructors>;
}
@DartClass
export class _SameResolutionValidator extends any {
    validateTypes : boolean;

    constructor(validateTypes : boolean) {
    }
    @defaultConstructor
    _SameResolutionValidator(validateTypes : boolean) {
        this.validateTypes = validateTypes;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    failDifferentLength(expectedList : core.DartList<any>,actualList : core.DartList<any>) : boolean {
        let expectedLength : number = expectedList.length;
        let actualLength : number = actualList.length;
        let message : string = '';
        message += `Expected length: ${expectedLength}\n`;
        message += `but ${actualLength} found\n`;
        message += `in ${actualList}`;
        this._fail(message);
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    failIfNotNull(expected : core.DartObject,actual : core.DartObject) : boolean {
        if (actual != null) {
            this._fail(`Expected null, but found ${actual}`);
            return false;
        }
        return true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    failIsNull(expected : core.DartObject,actual : core.DartObject) : boolean {
        this._fail('Expected not null, but found null');
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    failRuntimeType(expected : core.DartObject,actual : core.DartObject) : boolean {
        this._fail(`Expected ${expected.runtimeType}, but found ${actual.runtimeType}`);
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    isEqualNodes(first : any,second : any) : boolean {
        super.isEqualNodes(first,second);
        if (is(first, any) && is(second, any)) {
            let offset : number = first.offset;
            this._verifyElement(first.staticElement,second.staticElement,`staticElement[${offset}]`);
            this._verifyElement(first.propagatedElement,second.propagatedElement,`propagatedElement[${offset}]`);
        }else if (is(first, any) && is(second, any)) {
            let offset : number = first.offset;
            this._verifyElement(first.element,second.element,`declaration[${offset}]`);
        }else if (is(first, any) && is(second, any)) {
            let offset : number = first.offset;
            this._verifyElement(first.element,second.element,`directive[${offset}]`);
        }else if (is(first, any) && is(second, any)) {
            let offset : number = first.offset;
            this._verifyType(first.staticType,second.staticType,`staticType[${offset}]`);
            this._verifyType(first.propagatedType,second.propagatedType,`propagatedType[${offset}]`);
            this._verifyElement(first.staticParameterElement,second.staticParameterElement,`staticParameterElement[${offset}]`);
            this._verifyElement(first.propagatedParameterElement,second.propagatedParameterElement,`propagatedParameterElement[${offset}]`);
        }
        return true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    isEqualTokensNotNull(expected : any,actual : any) : boolean {
        this._verifyEqual('lexeme',expected.lexeme,actual.lexeme);
        this._verifyEqual('offset',expected.offset,actual.offset);
        this._verifyEqual('offset',expected.length,actual.length);
        return true;
    }
    _fail(message : string) : void {
        throw new IncrementalResolutionMismatch(message);
    }
    _verifyElement(a : any,b : any,desc : string) : void {
        if (is(a, any) && is(b, any)) {
            a = (a as any).baseElement;
            b = (b as any).baseElement;
        }
        let locationA : string = _SameResolutionValidator._getElementLocationWithoutUri(a);
        let locationB : string = _SameResolutionValidator._getElementLocationWithoutUri(b);
        if (locationA != locationB) {
            this._fail(`${desc}\nExpected: ${b} (${locationB})\n  Actual: ${a} (${locationA})`);
        }
        if (op(Op.EQUALS,a,null) && op(Op.EQUALS,b,null)) {
            return;
        }
        this._verifyEqual('nameOffset',a.nameOffset,b.nameOffset);
        if (is(a, any) && is(b, any)) {
            this._verifyEqual('codeOffset',a.codeOffset,b.codeOffset);
            this._verifyEqual('codeLength',a.codeLength,b.codeLength);
        }
        if (is(a, any) && is(b, any)) {
            this._verifyEqual('visibleRange',a.visibleRange,b.visibleRange);
        }
        this._verifyEqual('documentationComment',a.documentationComment,b.documentationComment);
    }
    _verifyEqual(name : string,actual : any,expected : any) : void {
        if (actual != expected) {
            this._fail(`${name}\nExpected: ${expected}\n  Actual: ${actual}`);
        }
    }
    _verifyType(a : any,b : any,desc : string) : void {
        if (!this.validateTypes) {
            return;
        }
        if (a != b) {
            this._fail(`${desc}\nExpected: ${b}\n  Actual: ${a}`);
        }
    }
    static _getElementLocationWithoutUri(element : any) : string {
        if (op(Op.EQUALS,element,null)) {
            return '<null>';
        }
        if (is(element, any)) {
            return '<ignored>';
        }
        let location : any = element.location;
        let components : core.DartList<string> = location.components;
        let uriPrefix : string = '';
        let unit : any = is(element, any) ? element : element.getAncestor((e : any) =>  {
            return is(e, any);
        });
        if (unit != null) {
            let libComponent : string = components[0];
            let unitComponent : string = components[1];
            components = components.sublist(2);
            uriPrefix = _SameResolutionValidator._getShortElementLocationUri(libComponent) + ':' + _SameResolutionValidator._getShortElementLocationUri(unitComponent);
        }else {
            let libComponent : string = components[0];
            components = components.sublist(1);
            uriPrefix = _SameResolutionValidator._getShortElementLocationUri(libComponent);
        }
        return uriPrefix + ':' + components.join(':');
    }
    static _getShortElementLocationUri(uri : string) : string {
        let index : number = new core.DartString(uri).lastIndexOf('/');
        if (index == -1) {
            return uri;
        }
        return new core.DartString(uri).substring(index + 1);
    }
}

export class properties {
}
