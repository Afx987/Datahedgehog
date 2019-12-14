/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/services/completion/dart/local_declaration_visitor_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(LocalDeclarationVisitorTest);
    });
};
export namespace LocalDeclarationVisitorTest {
    export type Constructors = 'LocalDeclarationVisitorTest';
    export type Interface = Omit<LocalDeclarationVisitorTest, Constructors>;
}
@DartClass
export class LocalDeclarationVisitorTest {
    parseCompilationUnit(source : string) : any {
        let listener : any = AnalysisErrorListener.NULL_LISTENER;
        let scanner : any = new bare.createInstance(any,null,null,new bare.createInstance(any,null,source),listener);
        let token : any = scanner.tokenize();
        let parser : any = new bare.createInstance(any,null,null,listener);
        let unit : any = parser.parseCompilationUnit(token);
        expect(unit,isNotNull);
        return unit;
    }
    test_visitForEachStatement() {
        let unit : any = this.parseCompilationUnit('class MyClass {}\nf(List<MyClass> list) {\n  for(MyClas( x in list) {}\n}\n');
        let declarations : any = unit.declarations;
        expect(declarations,hasLength(2));
        let f : any = op(Op.INDEX,declarations,1);
        expect(f,isNotNull);
        let body : any = f.functionExpression.body;
        let statement : any = op(Op.INDEX,body.block.statements,0);
        expect(statement,new bare.createInstance(any,null));
        statement.accept(new TestVisitor(statement.offset));
    }
    constructor() {
    }
    @defaultConstructor
    LocalDeclarationVisitorTest() {
    }
}

export namespace TestVisitor {
    export type Constructors = 'TestVisitor';
    export type Interface = Omit<TestVisitor, Constructors>;
}
@DartClass
export class TestVisitor extends any {
    constructor(offset : number) {
    }
    @defaultConstructor
    TestVisitor(offset : number) {
        super.DartObject(offset);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    declaredClass(declaration : any) : void {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    declaredClassTypeAlias(declaration : any) : void {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    declaredField(fieldDecl : any,varDecl : any) : void {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    declaredFunction(declaration : any) : void {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    declaredFunctionTypeAlias(declaration : any) : void {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    declaredLabel(label : any,isCaseLabel : boolean) : void {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    declaredLocalVar(name : any,type : any) : void {
        expect(name,isNotNull);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    declaredMethod(declaration : any) : void {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    declaredParam(name : any,type : any) : void {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    declaredTopLevelVar(varList : any,varDecl : any) : void {
    }
}

export class properties {
}
