/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/context/declared_variables_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../generated/test_support";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(DeclaredVariablesTest);
    });
};
export namespace DeclaredVariablesTest {
    export type Constructors = lib3.EngineTestCase.Constructors | 'DeclaredVariablesTest';
    export type Interface = Omit<DeclaredVariablesTest, Constructors>;
}
@DartClass
export class DeclaredVariablesTest extends lib3.EngineTestCase {
    test_getBool_false() : void {
        let typeProvider : any = new bare.createInstance(any,null);
        let variableName : string = "var";
        let variables : any = new bare.createInstance(any,null);
        variables.define(variableName,"false");
        let object : any = variables.getBool(typeProvider,variableName);
        expect(object,isNotNull);
        expect(object.toBoolValue(),false);
    }
    test_getBool_invalid() : void {
        let typeProvider : any = new bare.createInstance(any,null);
        let variableName : string = "var";
        let variables : any = new bare.createInstance(any,null);
        variables.define(variableName,"not true");
        this._assertNullDartObject(typeProvider,variables.getBool(typeProvider,variableName));
    }
    test_getBool_true() : void {
        let typeProvider : any = new bare.createInstance(any,null);
        let variableName : string = "var";
        let variables : any = new bare.createInstance(any,null);
        variables.define(variableName,"true");
        let object : any = variables.getBool(typeProvider,variableName);
        expect(object,isNotNull);
        expect(object.toBoolValue(),true);
    }
    test_getBool_undefined() : void {
        let typeProvider : any = new bare.createInstance(any,null);
        let variableName : string = "var";
        let variables : any = new bare.createInstance(any,null);
        this._assertUnknownDartObject(typeProvider.boolType,variables.getBool(typeProvider,variableName));
    }
    test_getInt_invalid() : void {
        let typeProvider : any = new bare.createInstance(any,null);
        let variableName : string = "var";
        let variables : any = new bare.createInstance(any,null);
        variables.define(variableName,"four score and seven years");
        this._assertNullDartObject(typeProvider,variables.getInt(typeProvider,variableName));
    }
    test_getInt_undefined() : void {
        let typeProvider : any = new bare.createInstance(any,null);
        let variableName : string = "var";
        let variables : any = new bare.createInstance(any,null);
        this._assertUnknownDartObject(typeProvider.intType,variables.getInt(typeProvider,variableName));
    }
    test_getInt_valid() : void {
        let typeProvider : any = new bare.createInstance(any,null);
        let variableName : string = "var";
        let variables : any = new bare.createInstance(any,null);
        variables.define(variableName,"23");
        let object : any = variables.getInt(typeProvider,variableName);
        expect(object,isNotNull);
        expect(object.toIntValue(),23);
    }
    test_getString_defined() : void {
        let typeProvider : any = new bare.createInstance(any,null);
        let variableName : string = "var";
        let value : string = "value";
        let variables : any = new bare.createInstance(any,null);
        variables.define(variableName,value);
        let object : any = variables.getString(typeProvider,variableName);
        expect(object,isNotNull);
        expect(object.toStringValue(),value);
    }
    test_getString_undefined() : void {
        let typeProvider : any = new bare.createInstance(any,null);
        let variableName : string = "var";
        let variables : any = new bare.createInstance(any,null);
        this._assertUnknownDartObject(typeProvider.stringType,variables.getString(typeProvider,variableName));
    }
    _assertNullDartObject(typeProvider : any,result : any) : void {
        expect(result.type,typeProvider.nullType);
    }
    _assertUnknownDartObject(expectedType : any,result : any) : void {
        expect((result as any).isUnknown,isTrue);
        expect(result.type,expectedType);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    DeclaredVariablesTest() {
    }
}

export class properties {
}
