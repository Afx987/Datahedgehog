/** Library asset:datahedgehog_monitor/lib/lib/front_end/test/scanner_roundtrip_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./scanner_test";
import * as lib4 from "./scanner_fasta_test";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(ScannerTest_RoundTrip);
    });
};
export namespace ScannerTest_RoundTrip {
    export type Constructors = lib3.ScannerTest.Constructors | 'ScannerTest_RoundTrip';
    export type Interface = Omit<ScannerTest_RoundTrip, Constructors>;
}
@DartClass
export class ScannerTest_RoundTrip extends lib3.ScannerTest {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    scanWithListener(source : string,listener : lib3.ErrorListener,_namedArguments? : {genericMethodComments? : boolean,lazyAssignmentOperators? : boolean}) : any {
        let {genericMethodComments,lazyAssignmentOperators} = Object.assign({
            "genericMethodComments" : false,
            "lazyAssignmentOperators" : false}, _namedArguments );
        let analyzerToken = super.scanWithListener(source,listener,{
            genericMethodComments : genericMethodComments,lazyAssignmentOperators : lazyAssignmentOperators});
        let fastaToken = fromAnalyzerTokenStream(analyzerToken);
        return new lib4.ToAnalyzerTokenStreamConverter_NoErrors().convertTokens(fastaToken);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_comment_generic_method_type_assign() : void {
        super.test_comment_generic_method_type_assign();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_comment_generic_method_type_list() : void {
        super.test_comment_generic_method_type_list();
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ScannerTest_RoundTrip() {
    }
}

export namespace TestScanner {
    export type Constructors = 'TestScanner';
    export type Interface = Omit<TestScanner, Constructors>;
}
@DartClass
export class TestScanner extends any {
    constructor(reader : any) {
    }
    @defaultConstructor
    TestScanner(reader : any) {
        super.create(reader);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    reportError(errorCode : any,offset : number,arguments : core.DartList<core.DartObject>) : void {
        fail(`Unexpected error ${errorCode} while scanning offset ${offset}\n` + `   arguments: ${arguments}`);
    }
}

export class properties {
}
