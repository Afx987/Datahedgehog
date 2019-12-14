/** Library asset:datahedgehog_monitor/lib/lib/analyzer/example/parser_driver.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as io from "@dart2ts/dart/io";

export var main : (args : core.DartList<string>) => any = (args : core.DartList<string>) =>  {
    core.print(`working dir ${new io.File('.').resolveSymbolicLinksSync()}`);
    if (args.length == 0) {
        core.print('Usage: parser_driver [files_to_parse]');
        io.exit(0);
    }
    for(let arg of args) {
        _parse(new io.File(arg));
    }
};
export var _parse : (file : io.File) => any = (file : io.File) =>  {
    let src = file.readAsStringSync();
    let errorListener = new _ErrorCollector();
    let reader = new bare.createInstance(any,null,src);
    let scanner = new bare.createInstance(any,null,null,reader,errorListener);
    let token = scanner.tokenize();
    let parser = new bare.createInstance(any,null,null,errorListener);
    let unit = parser.parseCompilationUnit(token);
    let visitor = new _ASTVisitor();
    unit.accept(visitor);
    for(let error of errorListener.errors) {
        core.print(error);
    }
};
export namespace _ASTVisitor {
    export type Constructors = '_ASTVisitor';
    export type Interface = Omit<_ASTVisitor, Constructors>;
}
@DartClass
export class _ASTVisitor extends any {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitNode(node : any) {
        core.print(`${node.runtimeType} : <"${node}">`);
        return super.visitNode(node);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _ASTVisitor() {
    }
}

export namespace _ErrorCollector {
    export type Constructors = '_ErrorCollector';
    export type Interface = Omit<_ErrorCollector, Constructors>;
}
@DartClass
export class _ErrorCollector extends any {
    errors : core.DartList<any>;

    constructor() {
    }
    @defaultConstructor
    _ErrorCollector() {
        this.errors = new core.DartList<any>();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    onError(error : any) {
        return this.errors.add(error);
    }
}

export class properties {
}
