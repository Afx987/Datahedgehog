/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/analyzer.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as io from "@dart2ts/dart/io";
import * as lib4 from "@dart2ts.packages/path/lib/path";

export var parseCompilationUnit : (contents : string,_namedArguments? : {name? : string,suppressErrors? : boolean,parseFunctionBodies? : boolean}) => any = (contents : string,_namedArguments? : {name? : string,suppressErrors? : boolean,parseFunctionBodies? : boolean}) : any =>  {
    let {name,suppressErrors,parseFunctionBodies} = Object.assign({
        "suppressErrors" : false,
        "parseFunctionBodies" : true}, _namedArguments );
    let source : any = new bare.createInstance(any,null,contents,name);
    return _parseSource(contents,source,{
        suppressErrors : suppressErrors,parseFunctionBodies : parseFunctionBodies});
};
export var parseDartFile : (path : string,_namedArguments? : {suppressErrors? : boolean,parseFunctionBodies? : boolean}) => any = (path : string,_namedArguments? : {suppressErrors? : boolean,parseFunctionBodies? : boolean}) : any =>  {
    let {suppressErrors,parseFunctionBodies} = Object.assign({
        "suppressErrors" : false,
        "parseFunctionBodies" : true}, _namedArguments );
    let contents : string = new io.File(path).readAsStringSync();
    let sourceFactory = new bare.createInstance(any,null,new core.DartList.literal(new bare.createInstance(any,null,PhysicalResourceProvider.INSTANCE)));
    let absolutePath = lib4.absolute(path);
    let source = sourceFactory.forUri(lib4.toUri(absolutePath).toString());
    if (op(Op.EQUALS,source,null)) {
        throw new core.ArgumentError(`Can't get source for path ${path}`);
    }
    if (!source.exists()) {
        throw new core.ArgumentError(`Source ${source} doesn't exist`);
    }
    return _parseSource(contents,source,{
        suppressErrors : suppressErrors,parseFunctionBodies : parseFunctionBodies});
};
export var parseDirectives : (contents : string,_namedArguments? : {name? : string,suppressErrors? : boolean}) => any = (contents : string,_namedArguments? : {name? : string,suppressErrors? : boolean}) : any =>  {
    let {name,suppressErrors} = Object.assign({
        "suppressErrors" : false}, _namedArguments );
    let source = new bare.createInstance(any,null,contents,name);
    let errorCollector = new _ErrorCollector();
    let reader = new bare.createInstance(any,null,contents);
    let scanner = new bare.createInstance(any,null,source,reader,errorCollector);
    let token = scanner.tokenize();
    let parser = new bare.createInstance(any,null,source,errorCollector);
    let unit = parser.parseDirectives(token);
    unit.lineInfo = new bare.createInstance(any,null,scanner.lineStarts);
    if (errorCollector.hasErrors && !suppressErrors) throw errorCollector.group;
    return unit;
};
export var stringLiteralToString : (literal : any) => string = (literal : any) : string =>  {
    return literal.stringValue;
};
export var _parseSource : (contents : string,source : any,_namedArguments? : {suppressErrors? : boolean,parseFunctionBodies? : boolean}) => any = (contents : string,source : any,_namedArguments? : {suppressErrors? : boolean,parseFunctionBodies? : boolean}) : any =>  {
    let {suppressErrors,parseFunctionBodies} = Object.assign({
        "suppressErrors" : false,
        "parseFunctionBodies" : true}, _namedArguments );
    let reader = new bare.createInstance(any,null,contents);
    let errorCollector = new _ErrorCollector();
    let scanner = new bare.createInstance(any,null,source,reader,errorCollector);
    let token = scanner.tokenize();
    let parser = ((_) : any =>  {
        {
            _.parseFunctionBodies = parseFunctionBodies;
            return _;
        }
    })(new bare.createInstance(any,null,source,errorCollector));
    let unit = ((_) : any =>  {
        {
            _.lineInfo = new bare.createInstance(any,null,scanner.lineStarts);
            return _;
        }
    })(parser.parseCompilationUnit(token));
    if (errorCollector.hasErrors && !suppressErrors) throw errorCollector.group;
    return unit;
};
export namespace _ErrorCollector {
    export type Constructors = '_ErrorCollector';
    export type Interface = Omit<_ErrorCollector, Constructors>;
}
@DartClass
export class _ErrorCollector extends any {
    _errors;

    constructor() {
    }
    @defaultConstructor
    _ErrorCollector() {
        this._errors = new core.DartList.literal<any>();
    }
    get group() : any {
        return new bare.createInstance(any,null,this._errors);
    }
    get hasErrors() : boolean {
        return !this._errors.isEmpty;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    onError(error : any) : void {
        return this._errors.add(error);
    }
}

export class properties {
}
