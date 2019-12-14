/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/src/summary/prelinker_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./summarize_ast_test";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(PrelinkerTest);
    });
};
export namespace PrelinkerTest {
    export type Constructors = lib3.LinkedSummarizeAstTest.Constructors | 'PrelinkerTest';
    export type Interface = Omit<PrelinkerTest, Constructors>;
}
@DartClass
export class PrelinkerTest extends lib3.LinkedSummarizeAstTest {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get skipFullyLinkedData() : boolean {
        return true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get strongMode() : boolean {
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    serializeLibraryText(text : string,_namedArguments? : {allowErrors? : boolean}) : void {
        let {allowErrors} = Object.assign({
            "allowErrors" : false}, _namedArguments );
        super.serializeLibraryText(text,{
            allowErrors : allowErrors});
        var getPart : (absoluteUri : string) => any = (absoluteUri : string) : any =>  {
            return this.linkerInputs.getUnit(absoluteUri);
        };
        var getImport : (absoluteUri : string) => any = (absoluteUri : string) : any =>  {
            return ((t)=>(!!t)?t.publicNamespace:null)(getPart(absoluteUri));
        };
        this.linked = new bare.createInstance(any,null,prelink(this.linkerInputs.testDartUri.toString(),this.linkerInputs.unlinkedDefiningUnit,getPart,getImport,(declaredVariable : string) =>  {
            return null;
        }).toBuffer());
        this.validateLinkedLibrary(this.linked);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    PrelinkerTest() {
    }
}

export class properties {
}
