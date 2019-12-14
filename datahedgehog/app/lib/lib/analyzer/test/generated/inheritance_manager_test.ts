/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/generated/inheritance_manager_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./test_support";
import * as collection from "@dart2ts/dart/core";
import * as lib5 from "./analysis_context_factory";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(InheritanceManagerTest);
    });
};
export namespace InheritanceManagerTest {
    export type Constructors = 'InheritanceManagerTest';
    export type Interface = Omit<InheritanceManagerTest, Constructors>;
}
@DartClass
export class InheritanceManagerTest {
    _typeProvider : any;

    _definingLibrary : any;

    _inheritanceManager : any;

    _numOfMembersInObject : number;

    setUp() : void {
        this._typeProvider = new bare.createInstance(any,null);
        this._inheritanceManager = this._createInheritanceManager();
        let objectType : any = this._typeProvider.objectType;
        this._numOfMembersInObject = op(Op.PLUS,objectType.methods.length,objectType.accessors.length);
    }
    test_getMapOfMembersInheritedFromClasses_accessor_extends() : void {
        let classA : any = ElementFactory.classElement2("A");
        let getterName : string = "g";
        let getterG : any = ElementFactory.getterElement(getterName,false,this._typeProvider.intType);
        classA.accessors = new core.DartList.literal<any>(getterG);
        let classB : any = ElementFactory.classElement("B",classA.type);
        let mapB : core.DartMap<string,any> = this._inheritanceManager.getMembersInheritedFromClasses(classB);
        let mapA : core.DartMap<string,any> = this._inheritanceManager.getMembersInheritedFromClasses(classA);
        expect(mapA.length,this._numOfMembersInObject);
        expect(mapB.length,this._numOfMembersInObject + 1);
        expect(mapB.get(getterName),same(getterG));
        this._assertNoErrors(classA);
        this._assertNoErrors(classB);
    }
    test_getMapOfMembersInheritedFromClasses_accessor_implements() : void {
        let classA : any = ElementFactory.classElement2("A");
        let getterName : string = "g";
        let getterG : any = ElementFactory.getterElement(getterName,false,this._typeProvider.intType);
        classA.accessors = new core.DartList.literal<any>(getterG);
        let classB : any = ElementFactory.classElement2("B");
        classB.interfaces = new core.DartList.literal<any>(classA.type);
        let mapB : core.DartMap<string,any> = this._inheritanceManager.getMembersInheritedFromClasses(classB);
        let mapA : core.DartMap<string,any> = this._inheritanceManager.getMembersInheritedFromClasses(classA);
        expect(mapA.length,this._numOfMembersInObject);
        expect(mapB.length,this._numOfMembersInObject);
        expect(mapB.get(getterName),isNull);
        this._assertNoErrors(classA);
        this._assertNoErrors(classB);
    }
    test_getMapOfMembersInheritedFromClasses_accessor_with() : void {
        let classA : any = ElementFactory.classElement2("A");
        let getterName : string = "g";
        let getterG : any = ElementFactory.getterElement(getterName,false,this._typeProvider.intType);
        classA.accessors = new core.DartList.literal<any>(getterG);
        let classB : any = ElementFactory.classElement2("B");
        classB.mixins = new core.DartList.literal<any>(classA.type);
        let mapB : core.DartMap<string,any> = this._inheritanceManager.getMembersInheritedFromClasses(classB);
        let mapA : core.DartMap<string,any> = this._inheritanceManager.getMembersInheritedFromClasses(classA);
        expect(mapA.length,this._numOfMembersInObject);
        expect(mapB.length,this._numOfMembersInObject + 1);
        expect(mapB.get(getterName),same(getterG));
        this._assertNoErrors(classA);
        this._assertNoErrors(classB);
    }
    test_getMapOfMembersInheritedFromClasses_implicitExtends() : void {
        let classA : any = ElementFactory.classElement2("A");
        let mapA : core.DartMap<string,any> = this._inheritanceManager.getMembersInheritedFromClasses(classA);
        expect(mapA.length,this._numOfMembersInObject);
        this._assertNoErrors(classA);
    }
    test_getMapOfMembersInheritedFromClasses_method_extends() : void {
        let classA : any = ElementFactory.classElement2("A");
        let methodName : string = "m";
        let methodM : any = ElementFactory.methodElement(methodName,this._typeProvider.intType);
        classA.methods = new core.DartList.literal<any>(methodM);
        let classB : any = ElementFactory.classElement2("B");
        classB.supertype = classA.type;
        let mapB : core.DartMap<string,any> = this._inheritanceManager.getMembersInheritedFromClasses(classB);
        let mapA : core.DartMap<string,any> = this._inheritanceManager.getMembersInheritedFromClasses(classA);
        expect(mapA.length,this._numOfMembersInObject);
        expect(mapB.length,this._numOfMembersInObject + 1);
        expect(mapB.get(methodName),same(methodM));
        this._assertNoErrors(classA);
        this._assertNoErrors(classB);
    }
    test_getMapOfMembersInheritedFromClasses_method_implements() : void {
        let classA : any = ElementFactory.classElement2("A");
        let methodName : string = "m";
        let methodM : any = ElementFactory.methodElement(methodName,this._typeProvider.intType);
        classA.methods = new core.DartList.literal<any>(methodM);
        let classB : any = ElementFactory.classElement2("B");
        classB.interfaces = new core.DartList.literal<any>(classA.type);
        let mapB : core.DartMap<string,any> = this._inheritanceManager.getMembersInheritedFromClasses(classB);
        let mapA : core.DartMap<string,any> = this._inheritanceManager.getMembersInheritedFromClasses(classA);
        expect(mapA.length,this._numOfMembersInObject);
        expect(mapB.length,this._numOfMembersInObject);
        expect(mapB.get(methodName),isNull);
        this._assertNoErrors(classA);
        this._assertNoErrors(classB);
    }
    test_getMapOfMembersInheritedFromClasses_method_with() : void {
        let classA : any = ElementFactory.classElement2("A");
        let methodName : string = "m";
        let methodM : any = ElementFactory.methodElement(methodName,this._typeProvider.intType);
        classA.methods = new core.DartList.literal<any>(methodM);
        let classB : any = ElementFactory.classElement2("B");
        classB.mixins = new core.DartList.literal<any>(classA.type);
        let mapB : core.DartMap<string,any> = this._inheritanceManager.getMembersInheritedFromClasses(classB);
        let mapA : core.DartMap<string,any> = this._inheritanceManager.getMembersInheritedFromClasses(classA);
        expect(mapA.length,this._numOfMembersInObject);
        expect(mapB.length,this._numOfMembersInObject + 1);
        expect(mapB.get(methodName),same(methodM));
        this._assertNoErrors(classA);
        this._assertNoErrors(classB);
    }
    test_getMapOfMembersInheritedFromClasses_method_with_two_mixins() : void {
        let classA1 : any = ElementFactory.classElement2("A1");
        let methodName : string = "m";
        let methodA1M : any = ElementFactory.methodElement(methodName,this._typeProvider.intType);
        classA1.methods = new core.DartList.literal<any>(methodA1M);
        let classA2 : any = ElementFactory.classElement2("A2");
        let methodA2M : any = ElementFactory.methodElement(methodName,this._typeProvider.intType);
        classA2.methods = new core.DartList.literal<any>(methodA2M);
        let classB : any = ElementFactory.classElement2("B");
        classB.mixins = new core.DartList.literal<any>(classA1.type,classA2.type);
        let mapB : core.DartMap<string,any> = this._inheritanceManager.getMembersInheritedFromClasses(classB);
        expect(mapB.get(methodName),same(methodA2M));
        this._assertNoErrors(classA1);
        this._assertNoErrors(classA2);
        this._assertNoErrors(classB);
    }
    test_getMapOfMembersInheritedFromInterfaces_accessor_extends() : void {
        let classA : any = ElementFactory.classElement2("A");
        let getterName : string = "g";
        let getterG : any = ElementFactory.getterElement(getterName,false,this._typeProvider.intType);
        classA.accessors = new core.DartList.literal<any>(getterG);
        let classB : any = ElementFactory.classElement("B",classA.type);
        let mapB : core.DartMap<string,any> = this._inheritanceManager.getMembersInheritedFromInterfaces(classB);
        let mapA : core.DartMap<string,any> = this._inheritanceManager.getMembersInheritedFromInterfaces(classA);
        expect(mapA.length,this._numOfMembersInObject);
        expect(mapB.length,this._numOfMembersInObject + 1);
        expect(mapB.get(getterName),same(getterG));
        this._assertNoErrors(classA);
        this._assertNoErrors(classB);
    }
    test_getMapOfMembersInheritedFromInterfaces_accessor_implements() : void {
        let classA : any = ElementFactory.classElement2("A");
        let getterName : string = "g";
        let getterG : any = ElementFactory.getterElement(getterName,false,this._typeProvider.intType);
        classA.accessors = new core.DartList.literal<any>(getterG);
        let classB : any = ElementFactory.classElement2("B");
        classB.interfaces = new core.DartList.literal<any>(classA.type);
        let mapB : core.DartMap<string,any> = this._inheritanceManager.getMembersInheritedFromInterfaces(classB);
        let mapA : core.DartMap<string,any> = this._inheritanceManager.getMembersInheritedFromInterfaces(classA);
        expect(mapA.length,this._numOfMembersInObject);
        expect(mapB.length,this._numOfMembersInObject + 1);
        expect(mapB.get(getterName),same(getterG));
        this._assertNoErrors(classA);
        this._assertNoErrors(classB);
    }
    test_getMapOfMembersInheritedFromInterfaces_accessor_with() : void {
        let classA : any = ElementFactory.classElement2("A");
        let getterName : string = "g";
        let getterG : any = ElementFactory.getterElement(getterName,false,this._typeProvider.intType);
        classA.accessors = new core.DartList.literal<any>(getterG);
        let classB : any = ElementFactory.classElement2("B");
        classB.mixins = new core.DartList.literal<any>(classA.type);
        let mapB : core.DartMap<string,any> = this._inheritanceManager.getMembersInheritedFromInterfaces(classB);
        let mapA : core.DartMap<string,any> = this._inheritanceManager.getMembersInheritedFromInterfaces(classA);
        expect(mapA.length,this._numOfMembersInObject);
        expect(mapB.length,this._numOfMembersInObject + 1);
        expect(mapB.get(getterName),same(getterG));
        this._assertNoErrors(classA);
        this._assertNoErrors(classB);
    }
    test_getMapOfMembersInheritedFromInterfaces_field_indirectWith() : void {
        let classA : any = ElementFactory.classElement2('A');
        let fieldName : string = "f";
        let fieldF : any = ElementFactory.fieldElement(fieldName,false,false,false,this._typeProvider.intType);
        classA.fields = new core.DartList.literal<any>(fieldF);
        classA.accessors = new core.DartList.literal<any>(fieldF.getter,fieldF.setter);
        let classB : any = ElementFactory.classElement('B',classA.type);
        let classC : any = ElementFactory.classElement2('C');
        classC.mixins = new core.DartList.literal<any>(classB.type);
        let mapC : core.DartMap<string,any> = this._inheritanceManager.getMembersInheritedFromInterfaces(classC);
        expect(mapC,hasLength(this._numOfMembersInObject + 2));
        expect(mapC.get(fieldName),same(fieldF.getter));
        expect(mapC.get(`${fieldName}=`),same(fieldF.setter));
        this._assertNoErrors(classA);
        this._assertNoErrors(classB);
        this._assertNoErrors(classC);
    }
    test_getMapOfMembersInheritedFromInterfaces_implicitExtends() : void {
        let classA : any = ElementFactory.classElement2("A");
        let mapA : core.DartMap<string,any> = this._inheritanceManager.getMembersInheritedFromInterfaces(classA);
        expect(mapA.length,this._numOfMembersInObject);
        this._assertNoErrors(classA);
    }
    test_getMapOfMembersInheritedFromInterfaces_inconsistentMethodInheritance_getter_method() : void {
        let classI1 : any = ElementFactory.classElement2("I1");
        let methodName : string = "m";
        let methodM : any = ElementFactory.methodElement(methodName,this._typeProvider.intType);
        classI1.methods = new core.DartList.literal<any>(methodM);
        let classI2 : any = ElementFactory.classElement2("I2");
        let getter : any = ElementFactory.getterElement(methodName,false,this._typeProvider.intType);
        classI2.accessors = new core.DartList.literal<any>(getter);
        let classA : any = ElementFactory.classElement2("A");
        classA.interfaces = new core.DartList.literal<any>(classI2.type,classI1.type);
        let mapA : core.DartMap<string,any> = this._inheritanceManager.getMembersInheritedFromInterfaces(classA);
        expect(mapA.length,this._numOfMembersInObject);
        expect(mapA.get(methodName),isNull);
        this._assertErrors(classA,new core.DartList.literal(StaticWarningCode.INCONSISTENT_METHOD_INHERITANCE_GETTER_AND_METHOD));
    }
    test_getMapOfMembersInheritedFromInterfaces_inconsistentMethodInheritance_int_str() : void {
        let classI1 : any = ElementFactory.classElement2("I1");
        let methodName : string = "m";
        let methodM1 : any = ElementFactory.methodElement(methodName,null,new core.DartList.literal(this._typeProvider.intType));
        classI1.methods = new core.DartList.literal<any>(methodM1);
        let classI2 : any = ElementFactory.classElement2("I2");
        let methodM2 : any = ElementFactory.methodElement(methodName,null,new core.DartList.literal(this._typeProvider.stringType));
        classI2.methods = new core.DartList.literal<any>(methodM2);
        let classA : any = ElementFactory.classElement2("A");
        classA.interfaces = new core.DartList.literal<any>(classI1.type,classI2.type);
        let mapA : core.DartMap<string,any> = this._inheritanceManager.getMembersInheritedFromInterfaces(classA);
        expect(mapA.length,this._numOfMembersInObject);
        expect(mapA.get(methodName),isNull);
        this._assertErrors(classA,new core.DartList.literal(StaticTypeWarningCode.INCONSISTENT_METHOD_INHERITANCE));
    }
    test_getMapOfMembersInheritedFromInterfaces_inconsistentMethodInheritance_method_getter() : void {
        let classI1 : any = ElementFactory.classElement2("I1");
        let methodName : string = "m";
        let methodM : any = ElementFactory.methodElement(methodName,this._typeProvider.intType);
        classI1.methods = new core.DartList.literal<any>(methodM);
        let classI2 : any = ElementFactory.classElement2("I2");
        let getter : any = ElementFactory.getterElement(methodName,false,this._typeProvider.intType);
        classI2.accessors = new core.DartList.literal<any>(getter);
        let classA : any = ElementFactory.classElement2("A");
        classA.interfaces = new core.DartList.literal<any>(classI1.type,classI2.type);
        let mapA : core.DartMap<string,any> = this._inheritanceManager.getMembersInheritedFromInterfaces(classA);
        expect(mapA.length,this._numOfMembersInObject);
        expect(mapA.get(methodName),isNull);
        this._assertErrors(classA,new core.DartList.literal(StaticWarningCode.INCONSISTENT_METHOD_INHERITANCE_GETTER_AND_METHOD));
    }
    test_getMapOfMembersInheritedFromInterfaces_inconsistentMethodInheritance_numOfRequiredParams() : void {
        let classI1 : any = ElementFactory.classElement2("I1");
        let methodName : string = "m";
        let methodM1 : any = ElementFactory.methodElement(methodName,this._typeProvider.dynamicType);
        let parameter1 : any = new bare.createInstance(any,null,AstTestFactory.identifier3("a1"));
        parameter1.type = this._typeProvider.intType;
        parameter1.parameterKind = ParameterKind.REQUIRED;
        let parameter2 : any = new bare.createInstance(any,null,AstTestFactory.identifier3("a2"));
        parameter2.type = this._typeProvider.intType;
        parameter2.parameterKind = ParameterKind.POSITIONAL;
        methodM1.parameters = new core.DartList.literal<any>(parameter1,parameter2);
        classI1.methods = new core.DartList.literal<any>(methodM1);
        let classI2 : any = ElementFactory.classElement2("I2");
        let methodM2 : any = ElementFactory.methodElement(methodName,this._typeProvider.dynamicType);
        let parameter3 : any = new bare.createInstance(any,null,AstTestFactory.identifier3("a3"));
        parameter3.type = this._typeProvider.intType;
        parameter3.parameterKind = ParameterKind.REQUIRED;
        let parameter4 : any = new bare.createInstance(any,null,AstTestFactory.identifier3("a4"));
        parameter4.type = this._typeProvider.intType;
        parameter4.parameterKind = ParameterKind.REQUIRED;
        let parameter5 : any = new bare.createInstance(any,null,AstTestFactory.identifier3("a5"));
        parameter5.type = this._typeProvider.intType;
        parameter5.parameterKind = ParameterKind.REQUIRED;
        methodM2.parameters = new core.DartList.literal<any>(parameter3,parameter4,parameter5);
        classI2.methods = new core.DartList.literal<any>(methodM2);
        let classA : any = ElementFactory.classElement2("A");
        classA.interfaces = new core.DartList.literal<any>(classI1.type,classI2.type);
        let mapA : core.DartMap<string,any> = this._inheritanceManager.getMembersInheritedFromInterfaces(classA);
        expect(mapA.length,this._numOfMembersInObject);
        expect(mapA.get(methodName),isNull);
        this._assertErrors(classA,new core.DartList.literal(StaticTypeWarningCode.INCONSISTENT_METHOD_INHERITANCE));
    }
    test_getMapOfMembersInheritedFromInterfaces_inconsistentMethodInheritance_str_int() : void {
        let classI1 : any = ElementFactory.classElement2("I1");
        let methodName : string = "m";
        let methodM1 : any = ElementFactory.methodElement(methodName,null,new core.DartList.literal(this._typeProvider.stringType));
        classI1.methods = new core.DartList.literal<any>(methodM1);
        let classI2 : any = ElementFactory.classElement2("I2");
        let methodM2 : any = ElementFactory.methodElement(methodName,null,new core.DartList.literal(this._typeProvider.intType));
        classI2.methods = new core.DartList.literal<any>(methodM2);
        let classA : any = ElementFactory.classElement2("A");
        classA.interfaces = new core.DartList.literal<any>(classI2.type,classI1.type);
        let mapA : core.DartMap<string,any> = this._inheritanceManager.getMembersInheritedFromInterfaces(classA);
        expect(mapA.length,this._numOfMembersInObject);
        expect(mapA.get(methodName),isNull);
        this._assertErrors(classA,new core.DartList.literal(StaticTypeWarningCode.INCONSISTENT_METHOD_INHERITANCE));
    }
    test_getMapOfMembersInheritedFromInterfaces_method_extends() : void {
        let classA : any = ElementFactory.classElement2("A");
        let methodName : string = "m";
        let methodM : any = ElementFactory.methodElement(methodName,this._typeProvider.intType);
        classA.methods = new core.DartList.literal<any>(methodM);
        let classB : any = ElementFactory.classElement("B",classA.type);
        let mapB : core.DartMap<string,any> = this._inheritanceManager.getMembersInheritedFromInterfaces(classB);
        let mapA : core.DartMap<string,any> = this._inheritanceManager.getMembersInheritedFromInterfaces(classA);
        expect(mapA.length,this._numOfMembersInObject);
        expect(mapB.length,this._numOfMembersInObject + 1);
        expect(mapB.get(methodName),same(methodM));
        this._assertNoErrors(classA);
        this._assertNoErrors(classB);
    }
    test_getMapOfMembersInheritedFromInterfaces_method_implements() : void {
        let classA : any = ElementFactory.classElement2("A");
        let methodName : string = "m";
        let methodM : any = ElementFactory.methodElement(methodName,this._typeProvider.intType);
        classA.methods = new core.DartList.literal<any>(methodM);
        let classB : any = ElementFactory.classElement2("B");
        classB.interfaces = new core.DartList.literal<any>(classA.type);
        let mapB : core.DartMap<string,any> = this._inheritanceManager.getMembersInheritedFromInterfaces(classB);
        let mapA : core.DartMap<string,any> = this._inheritanceManager.getMembersInheritedFromInterfaces(classA);
        expect(mapA.length,this._numOfMembersInObject);
        expect(mapB.length,this._numOfMembersInObject + 1);
        expect(mapB.get(methodName),same(methodM));
        this._assertNoErrors(classA);
        this._assertNoErrors(classB);
    }
    test_getMapOfMembersInheritedFromInterfaces_method_with() : void {
        let classA : any = ElementFactory.classElement2("A");
        let methodName : string = "m";
        let methodM : any = ElementFactory.methodElement(methodName,this._typeProvider.intType);
        classA.methods = new core.DartList.literal<any>(methodM);
        let classB : any = ElementFactory.classElement2("B");
        classB.mixins = new core.DartList.literal<any>(classA.type);
        let mapB : core.DartMap<string,any> = this._inheritanceManager.getMembersInheritedFromInterfaces(classB);
        let mapA : core.DartMap<string,any> = this._inheritanceManager.getMembersInheritedFromInterfaces(classA);
        expect(mapA.length,this._numOfMembersInObject);
        expect(mapB.length,this._numOfMembersInObject + 1);
        expect(mapB.get(methodName),same(methodM));
        this._assertNoErrors(classA);
        this._assertNoErrors(classB);
    }
    test_getMapOfMembersInheritedFromInterfaces_union_differentNames() : void {
        let classI1 : any = ElementFactory.classElement2("I1");
        let methodName1 : string = "m1";
        let methodM1 : any = ElementFactory.methodElement(methodName1,this._typeProvider.intType);
        classI1.methods = new core.DartList.literal<any>(methodM1);
        let classI2 : any = ElementFactory.classElement2("I2");
        let methodName2 : string = "m2";
        let methodM2 : any = ElementFactory.methodElement(methodName2,this._typeProvider.intType);
        classI2.methods = new core.DartList.literal<any>(methodM2);
        let classA : any = ElementFactory.classElement2("A");
        classA.interfaces = new core.DartList.literal<any>(classI1.type,classI2.type);
        let mapA : core.DartMap<string,any> = this._inheritanceManager.getMembersInheritedFromInterfaces(classA);
        expect(mapA.length,this._numOfMembersInObject + 2);
        expect(mapA.get(methodName1),same(methodM1));
        expect(mapA.get(methodName2),same(methodM2));
        this._assertNoErrors(classA);
    }
    test_getMapOfMembersInheritedFromInterfaces_union_multipleSubtypes_2_getters() : void {
        let classI1 : any = ElementFactory.classElement2("I1");
        let accessorName : string = "g";
        let getter1 : any = ElementFactory.getterElement(accessorName,false,this._typeProvider.intType);
        classI1.accessors = new core.DartList.literal<any>(getter1);
        let classI2 : any = ElementFactory.classElement2("I2");
        let getter2 : any = ElementFactory.getterElement(accessorName,false,this._typeProvider.numType);
        classI2.accessors = new core.DartList.literal<any>(getter2);
        let classA : any = ElementFactory.classElement2("A");
        classA.interfaces = new core.DartList.literal<any>(classI1.type,classI2.type);
        let mapA : core.DartMap<string,any> = this._inheritanceManager.getMembersInheritedFromInterfaces(classA);
        expect(mapA.length,this._numOfMembersInObject + 1);
        let syntheticAccessor : any = ElementFactory.getterElement(accessorName,false,this._typeProvider.dynamicType);
        expect(mapA.get(accessorName).type,syntheticAccessor.type);
        this._assertNoErrors(classA);
    }
    test_getMapOfMembersInheritedFromInterfaces_union_multipleSubtypes_2_methods() : void {
        let classI1 : any = ElementFactory.classElement2("I1");
        let methodName : string = "m";
        let methodM1 : any = ElementFactory.methodElement(methodName,this._typeProvider.dynamicType);
        let parameter1 : any = new bare.createInstance(any,null,AstTestFactory.identifier3("a0"));
        parameter1.type = this._typeProvider.intType;
        parameter1.parameterKind = ParameterKind.REQUIRED;
        methodM1.parameters = new core.DartList.literal<any>(parameter1);
        classI1.methods = new core.DartList.literal<any>(methodM1);
        let classI2 : any = ElementFactory.classElement2("I2");
        let methodM2 : any = ElementFactory.methodElement(methodName,this._typeProvider.dynamicType);
        let parameter2 : any = new bare.createInstance(any,null,AstTestFactory.identifier3("a0"));
        parameter2.type = this._typeProvider.numType;
        parameter2.parameterKind = ParameterKind.REQUIRED;
        methodM2.parameters = new core.DartList.literal<any>(parameter2);
        classI2.methods = new core.DartList.literal<any>(methodM2);
        let classA : any = ElementFactory.classElement2("A");
        classA.interfaces = new core.DartList.literal<any>(classI1.type,classI2.type);
        let mapA : core.DartMap<string,any> = this._inheritanceManager.getMembersInheritedFromInterfaces(classA);
        expect(mapA.length,this._numOfMembersInObject + 1);
        let syntheticMethod : any = ElementFactory.methodElement(methodName,this._typeProvider.dynamicType,new core.DartList.literal(this._typeProvider.dynamicType));
        expect(mapA.get(methodName).type,syntheticMethod.type);
        this._assertNoErrors(classA);
    }
    test_getMapOfMembersInheritedFromInterfaces_union_multipleSubtypes_2_setters() : void {
        let classI1 : any = ElementFactory.classElement2("I1");
        let accessorName : string = "s";
        let setter1 : any = ElementFactory.setterElement(accessorName,false,this._typeProvider.intType);
        classI1.accessors = new core.DartList.literal<any>(setter1);
        let classI2 : any = ElementFactory.classElement2("I2");
        let setter2 : any = ElementFactory.setterElement(accessorName,false,this._typeProvider.numType);
        classI2.accessors = new core.DartList.literal<any>(setter2);
        let classA : any = ElementFactory.classElement2("A");
        classA.interfaces = new core.DartList.literal<any>(classI1.type,classI2.type);
        let mapA : core.DartMap<string,any> = this._inheritanceManager.getMembersInheritedFromInterfaces(classA);
        expect(mapA.length,this._numOfMembersInObject + 1);
        let syntheticAccessor : any = ElementFactory.setterElement(accessorName,false,this._typeProvider.dynamicType);
        syntheticAccessor.returnType = this._typeProvider.dynamicType;
        expect(mapA.get(`${accessorName}=`).type,syntheticAccessor.type);
        this._assertNoErrors(classA);
    }
    test_getMapOfMembersInheritedFromInterfaces_union_multipleSubtypes_3_getters() : void {
        let classA : any = ElementFactory.classElement2("A");
        let classB : any = ElementFactory.classElement("B",classA.type);
        let classC : any = ElementFactory.classElement("C",classB.type);
        let classI1 : any = ElementFactory.classElement2("I1");
        let accessorName : string = "g";
        let getter1 : any = ElementFactory.getterElement(accessorName,false,classA.type);
        classI1.accessors = new core.DartList.literal<any>(getter1);
        let classI2 : any = ElementFactory.classElement2("I2");
        let getter2 : any = ElementFactory.getterElement(accessorName,false,classB.type);
        classI2.accessors = new core.DartList.literal<any>(getter2);
        let classI3 : any = ElementFactory.classElement2("I3");
        let getter3 : any = ElementFactory.getterElement(accessorName,false,classC.type);
        classI3.accessors = new core.DartList.literal<any>(getter3);
        let classD : any = ElementFactory.classElement2("D");
        classD.interfaces = new core.DartList.literal<any>(classI1.type,classI2.type,classI3.type);
        let mapD : core.DartMap<string,any> = this._inheritanceManager.getMembersInheritedFromInterfaces(classD);
        expect(mapD.length,this._numOfMembersInObject + 1);
        let syntheticAccessor : any = ElementFactory.getterElement(accessorName,false,this._typeProvider.dynamicType);
        expect(mapD.get(accessorName).type,syntheticAccessor.type);
        this._assertNoErrors(classD);
    }
    test_getMapOfMembersInheritedFromInterfaces_union_multipleSubtypes_3_methods() : void {
        let classA : any = ElementFactory.classElement2("A");
        let classB : any = ElementFactory.classElement("B",classA.type);
        let classC : any = ElementFactory.classElement("C",classB.type);
        let classI1 : any = ElementFactory.classElement2("I1");
        let methodName : string = "m";
        let methodM1 : any = ElementFactory.methodElement(methodName,this._typeProvider.dynamicType);
        let parameter1 : any = new bare.createInstance(any,null,AstTestFactory.identifier3("a0"));
        parameter1.type = classA.type;
        parameter1.parameterKind = ParameterKind.REQUIRED;
        methodM1.parameters = new core.DartList.literal<any>(parameter1);
        classI1.methods = new core.DartList.literal<any>(methodM1);
        let classI2 : any = ElementFactory.classElement2("I2");
        let methodM2 : any = ElementFactory.methodElement(methodName,this._typeProvider.dynamicType);
        let parameter2 : any = new bare.createInstance(any,null,AstTestFactory.identifier3("a0"));
        parameter2.type = classB.type;
        parameter2.parameterKind = ParameterKind.REQUIRED;
        methodM2.parameters = new core.DartList.literal<any>(parameter2);
        classI2.methods = new core.DartList.literal<any>(methodM2);
        let classI3 : any = ElementFactory.classElement2("I3");
        let methodM3 : any = ElementFactory.methodElement(methodName,this._typeProvider.dynamicType);
        let parameter3 : any = new bare.createInstance(any,null,AstTestFactory.identifier3("a0"));
        parameter3.type = classC.type;
        parameter3.parameterKind = ParameterKind.REQUIRED;
        methodM3.parameters = new core.DartList.literal<any>(parameter3);
        classI3.methods = new core.DartList.literal<any>(methodM3);
        let classD : any = ElementFactory.classElement2("D");
        classD.interfaces = new core.DartList.literal<any>(classI1.type,classI2.type,classI3.type);
        let mapD : core.DartMap<string,any> = this._inheritanceManager.getMembersInheritedFromInterfaces(classD);
        expect(mapD.length,this._numOfMembersInObject + 1);
        let syntheticMethod : any = ElementFactory.methodElement(methodName,this._typeProvider.dynamicType,new core.DartList.literal(this._typeProvider.dynamicType));
        expect(mapD.get(methodName).type,syntheticMethod.type);
        this._assertNoErrors(classD);
    }
    test_getMapOfMembersInheritedFromInterfaces_union_multipleSubtypes_3_setters() : void {
        let classA : any = ElementFactory.classElement2("A");
        let classB : any = ElementFactory.classElement("B",classA.type);
        let classC : any = ElementFactory.classElement("C",classB.type);
        let classI1 : any = ElementFactory.classElement2("I1");
        let accessorName : string = "s";
        let setter1 : any = ElementFactory.setterElement(accessorName,false,classA.type);
        classI1.accessors = new core.DartList.literal<any>(setter1);
        let classI2 : any = ElementFactory.classElement2("I2");
        let setter2 : any = ElementFactory.setterElement(accessorName,false,classB.type);
        classI2.accessors = new core.DartList.literal<any>(setter2);
        let classI3 : any = ElementFactory.classElement2("I3");
        let setter3 : any = ElementFactory.setterElement(accessorName,false,classC.type);
        classI3.accessors = new core.DartList.literal<any>(setter3);
        let classD : any = ElementFactory.classElement2("D");
        classD.interfaces = new core.DartList.literal<any>(classI1.type,classI2.type,classI3.type);
        let mapD : core.DartMap<string,any> = this._inheritanceManager.getMembersInheritedFromInterfaces(classD);
        expect(mapD.length,this._numOfMembersInObject + 1);
        let syntheticAccessor : any = ElementFactory.setterElement(accessorName,false,this._typeProvider.dynamicType);
        syntheticAccessor.returnType = this._typeProvider.dynamicType;
        expect(mapD.get(`${accessorName}=`).type,syntheticAccessor.type);
        this._assertNoErrors(classD);
    }
    test_getMapOfMembersInheritedFromInterfaces_union_oneSubtype_2_methods() : void {
        let classI1 : any = ElementFactory.classElement2("I1");
        let methodName : string = "m";
        let methodM1 : any = ElementFactory.methodElement(methodName,this._typeProvider.intType);
        classI1.methods = new core.DartList.literal<any>(methodM1);
        let classI2 : any = ElementFactory.classElement2("I2");
        let methodM2 : any = ElementFactory.methodElement(methodName,this._typeProvider.intType);
        let parameter1 : any = new bare.createInstance(any,null,AstTestFactory.identifier3("a1"));
        parameter1.type = this._typeProvider.intType;
        parameter1.parameterKind = ParameterKind.POSITIONAL;
        methodM2.parameters = new core.DartList.literal<any>(parameter1);
        classI2.methods = new core.DartList.literal<any>(methodM2);
        let classA : any = ElementFactory.classElement2("A");
        classA.interfaces = new core.DartList.literal<any>(classI1.type,classI2.type);
        let mapA : core.DartMap<string,any> = this._inheritanceManager.getMembersInheritedFromInterfaces(classA);
        expect(mapA.length,this._numOfMembersInObject + 1);
        expect(mapA.get(methodName),same(methodM2));
        this._assertNoErrors(classA);
    }
    test_getMapOfMembersInheritedFromInterfaces_union_oneSubtype_3_methods() : void {
        let classI1 : any = ElementFactory.classElement2("I1");
        let methodName : string = "m";
        let methodM1 : any = ElementFactory.methodElement(methodName,this._typeProvider.intType);
        classI1.methods = new core.DartList.literal<any>(methodM1);
        let classI2 : any = ElementFactory.classElement2("I2");
        let methodM2 : any = ElementFactory.methodElement(methodName,this._typeProvider.intType);
        let parameter1 : any = new bare.createInstance(any,null,AstTestFactory.identifier3("a1"));
        parameter1.type = this._typeProvider.intType;
        parameter1.parameterKind = ParameterKind.POSITIONAL;
        methodM1.parameters = new core.DartList.literal<any>(parameter1);
        classI2.methods = new core.DartList.literal<any>(methodM2);
        let classI3 : any = ElementFactory.classElement2("I3");
        let methodM3 : any = ElementFactory.methodElement(methodName,this._typeProvider.intType);
        let parameter2 : any = new bare.createInstance(any,null,AstTestFactory.identifier3("a2"));
        parameter2.type = this._typeProvider.intType;
        parameter2.parameterKind = ParameterKind.POSITIONAL;
        let parameter3 : any = new bare.createInstance(any,null,AstTestFactory.identifier3("a3"));
        parameter3.type = this._typeProvider.intType;
        parameter3.parameterKind = ParameterKind.POSITIONAL;
        methodM3.parameters = new core.DartList.literal<any>(parameter2,parameter3);
        classI3.methods = new core.DartList.literal<any>(methodM3);
        let classA : any = ElementFactory.classElement2("A");
        classA.interfaces = new core.DartList.literal<any>(classI1.type,classI2.type,classI3.type);
        let mapA : core.DartMap<string,any> = this._inheritanceManager.getMembersInheritedFromInterfaces(classA);
        expect(mapA.length,this._numOfMembersInObject + 1);
        expect(mapA.get(methodName),same(methodM3));
        this._assertNoErrors(classA);
    }
    test_getMapOfMembersInheritedFromInterfaces_union_oneSubtype_4_methods() : void {
        let classI1 : any = ElementFactory.classElement2("I1");
        let methodName : string = "m";
        let methodM1 : any = ElementFactory.methodElement(methodName,this._typeProvider.intType);
        classI1.methods = new core.DartList.literal<any>(methodM1);
        let classI2 : any = ElementFactory.classElement2("I2");
        let methodM2 : any = ElementFactory.methodElement(methodName,this._typeProvider.intType);
        classI2.methods = new core.DartList.literal<any>(methodM2);
        let classI3 : any = ElementFactory.classElement2("I3");
        let methodM3 : any = ElementFactory.methodElement(methodName,this._typeProvider.intType);
        let parameter1 : any = new bare.createInstance(any,null,AstTestFactory.identifier3("a1"));
        parameter1.type = this._typeProvider.intType;
        parameter1.parameterKind = ParameterKind.POSITIONAL;
        methodM3.parameters = new core.DartList.literal<any>(parameter1);
        classI3.methods = new core.DartList.literal<any>(methodM3);
        let classI4 : any = ElementFactory.classElement2("I4");
        let methodM4 : any = ElementFactory.methodElement(methodName,this._typeProvider.intType);
        let parameter2 : any = new bare.createInstance(any,null,AstTestFactory.identifier3("a2"));
        parameter2.type = this._typeProvider.intType;
        parameter2.parameterKind = ParameterKind.POSITIONAL;
        let parameter3 : any = new bare.createInstance(any,null,AstTestFactory.identifier3("a3"));
        parameter3.type = this._typeProvider.intType;
        parameter3.parameterKind = ParameterKind.POSITIONAL;
        methodM4.parameters = new core.DartList.literal<any>(parameter2,parameter3);
        classI4.methods = new core.DartList.literal<any>(methodM4);
        let classA : any = ElementFactory.classElement2("A");
        classA.interfaces = new core.DartList.literal<any>(classI1.type,classI2.type,classI3.type,classI4.type);
        let mapA : core.DartMap<string,any> = this._inheritanceManager.getMembersInheritedFromInterfaces(classA);
        expect(mapA.length,this._numOfMembersInObject + 1);
        expect(mapA.get(methodName),same(methodM4));
        this._assertNoErrors(classA);
    }
    test_getMembersInheritedFromClasses_field_indirectWith() : void {
        let classA : any = ElementFactory.classElement2('A');
        let fieldName : string = "f";
        let fieldF : any = ElementFactory.fieldElement(fieldName,false,false,false,this._typeProvider.intType);
        classA.fields = new core.DartList.literal<any>(fieldF);
        classA.accessors = new core.DartList.literal<any>(fieldF.getter,fieldF.setter);
        let classB : any = ElementFactory.classElement('B',classA.type);
        let classC : any = ElementFactory.classElement2('C');
        classC.mixins = new core.DartList.literal<any>(classB.type);
        let mapC : core.DartMap<string,any> = this._inheritanceManager.getMembersInheritedFromClasses(classC);
        expect(mapC,hasLength(this._numOfMembersInObject));
        this._assertNoErrors(classA);
        this._assertNoErrors(classB);
        this._assertNoErrors(classC);
    }
    test_lookupInheritance_interface_getter() : void {
        let classA : any = ElementFactory.classElement2("A");
        let getterName : string = "g";
        let getterG : any = ElementFactory.getterElement(getterName,false,this._typeProvider.intType);
        classA.accessors = new core.DartList.literal<any>(getterG);
        let classB : any = ElementFactory.classElement2("B");
        classB.interfaces = new core.DartList.literal<any>(classA.type);
        expect(this._inheritanceManager.lookupInheritance(classB,getterName),same(getterG));
        this._assertNoErrors(classA);
        this._assertNoErrors(classB);
    }
    test_lookupInheritance_interface_method() : void {
        let classA : any = ElementFactory.classElement2("A");
        let methodName : string = "m";
        let methodM : any = ElementFactory.methodElement(methodName,this._typeProvider.intType);
        classA.methods = new core.DartList.literal<any>(methodM);
        let classB : any = ElementFactory.classElement2("B");
        classB.interfaces = new core.DartList.literal<any>(classA.type);
        expect(this._inheritanceManager.lookupInheritance(classB,methodName),same(methodM));
        this._assertNoErrors(classA);
        this._assertNoErrors(classB);
    }
    test_lookupInheritance_interface_setter() : void {
        let classA : any = ElementFactory.classElement2("A");
        let setterName : string = "s";
        let setterS : any = ElementFactory.setterElement(setterName,false,this._typeProvider.intType);
        classA.accessors = new core.DartList.literal<any>(setterS);
        let classB : any = ElementFactory.classElement2("B");
        classB.interfaces = new core.DartList.literal<any>(classA.type);
        expect(this._inheritanceManager.lookupInheritance(classB,`${setterName}=`),same(setterS));
        this._assertNoErrors(classA);
        this._assertNoErrors(classB);
    }
    test_lookupInheritance_interface_staticMember() : void {
        let classA : any = ElementFactory.classElement2("A");
        let methodName : string = "m";
        let methodM : any = ElementFactory.methodElement(methodName,this._typeProvider.intType);
        (methodM as any).isStatic = true;
        classA.methods = new core.DartList.literal<any>(methodM);
        let classB : any = ElementFactory.classElement2("B");
        classB.interfaces = new core.DartList.literal<any>(classA.type);
        expect(this._inheritanceManager.lookupInheritance(classB,methodName),isNull);
        this._assertNoErrors(classA);
        this._assertNoErrors(classB);
    }
    test_lookupInheritance_interfaces_infiniteLoop() : void {
        let classA : any = ElementFactory.classElement2("A");
        classA.interfaces = new core.DartList.literal<any>(classA.type);
        expect(this._inheritanceManager.lookupInheritance(classA,"name"),isNull);
        this._assertNoErrors(classA);
    }
    test_lookupInheritance_interfaces_infiniteLoop2() : void {
        let classA : any = ElementFactory.classElement2("A");
        let classB : any = ElementFactory.classElement2("B");
        classA.interfaces = new core.DartList.literal<any>(classB.type);
        classB.interfaces = new core.DartList.literal<any>(classA.type);
        expect(this._inheritanceManager.lookupInheritance(classA,"name"),isNull);
        this._assertNoErrors(classA);
        this._assertNoErrors(classB);
    }
    test_lookupInheritance_interfaces_union2() : void {
        let classI1 : any = ElementFactory.classElement2("I1");
        let methodName1 : string = "m1";
        let methodM1 : any = ElementFactory.methodElement(methodName1,this._typeProvider.intType);
        classI1.methods = new core.DartList.literal<any>(methodM1);
        let classI2 : any = ElementFactory.classElement2("I2");
        let methodName2 : string = "m2";
        let methodM2 : any = ElementFactory.methodElement(methodName2,this._typeProvider.intType);
        classI2.methods = new core.DartList.literal<any>(methodM2);
        classI2.interfaces = new core.DartList.literal<any>(classI1.type);
        let classA : any = ElementFactory.classElement2("A");
        classA.interfaces = new core.DartList.literal<any>(classI2.type);
        expect(this._inheritanceManager.lookupInheritance(classA,methodName1),same(methodM1));
        expect(this._inheritanceManager.lookupInheritance(classA,methodName2),same(methodM2));
        this._assertNoErrors(classI1);
        this._assertNoErrors(classI2);
        this._assertNoErrors(classA);
    }
    test_lookupInheritance_mixin_getter() : void {
        let classA : any = ElementFactory.classElement2("A");
        let getterName : string = "g";
        let getterG : any = ElementFactory.getterElement(getterName,false,this._typeProvider.intType);
        classA.accessors = new core.DartList.literal<any>(getterG);
        let classB : any = ElementFactory.classElement2("B");
        classB.mixins = new core.DartList.literal<any>(classA.type);
        expect(this._inheritanceManager.lookupInheritance(classB,getterName),same(getterG));
        this._assertNoErrors(classA);
        this._assertNoErrors(classB);
    }
    test_lookupInheritance_mixin_method() : void {
        let classA : any = ElementFactory.classElement2("A");
        let methodName : string = "m";
        let methodM : any = ElementFactory.methodElement(methodName,this._typeProvider.intType);
        classA.methods = new core.DartList.literal<any>(methodM);
        let classB : any = ElementFactory.classElement2("B");
        classB.mixins = new core.DartList.literal<any>(classA.type);
        expect(this._inheritanceManager.lookupInheritance(classB,methodName),same(methodM));
        this._assertNoErrors(classA);
        this._assertNoErrors(classB);
    }
    test_lookupInheritance_mixin_setter() : void {
        let classA : any = ElementFactory.classElement2("A");
        let setterName : string = "s";
        let setterS : any = ElementFactory.setterElement(setterName,false,this._typeProvider.intType);
        classA.accessors = new core.DartList.literal<any>(setterS);
        let classB : any = ElementFactory.classElement2("B");
        classB.mixins = new core.DartList.literal<any>(classA.type);
        expect(this._inheritanceManager.lookupInheritance(classB,`${setterName}=`),same(setterS));
        this._assertNoErrors(classA);
        this._assertNoErrors(classB);
    }
    test_lookupInheritance_mixin_staticMember() : void {
        let classA : any = ElementFactory.classElement2("A");
        let methodName : string = "m";
        let methodM : any = ElementFactory.methodElement(methodName,this._typeProvider.intType);
        (methodM as any).isStatic = true;
        classA.methods = new core.DartList.literal<any>(methodM);
        let classB : any = ElementFactory.classElement2("B");
        classB.mixins = new core.DartList.literal<any>(classA.type);
        expect(this._inheritanceManager.lookupInheritance(classB,methodName),isNull);
        this._assertNoErrors(classA);
        this._assertNoErrors(classB);
    }
    test_lookupInheritance_noMember() : void {
        let classA : any = ElementFactory.classElement2("A");
        expect(this._inheritanceManager.lookupInheritance(classA,"a"),isNull);
        this._assertNoErrors(classA);
    }
    test_lookupInheritance_superclass_getter() : void {
        let classA : any = ElementFactory.classElement2("A");
        let getterName : string = "g";
        let getterG : any = ElementFactory.getterElement(getterName,false,this._typeProvider.intType);
        classA.accessors = new core.DartList.literal<any>(getterG);
        let classB : any = ElementFactory.classElement("B",classA.type);
        expect(this._inheritanceManager.lookupInheritance(classB,getterName),same(getterG));
        this._assertNoErrors(classA);
        this._assertNoErrors(classB);
    }
    test_lookupInheritance_superclass_infiniteLoop() : void {
        let classA : any = ElementFactory.classElement2("A");
        classA.supertype = classA.type;
        expect(this._inheritanceManager.lookupInheritance(classA,"name"),isNull);
        this._assertNoErrors(classA);
    }
    test_lookupInheritance_superclass_infiniteLoop2() : void {
        let classA : any = ElementFactory.classElement2("A");
        let classB : any = ElementFactory.classElement2("B");
        classA.supertype = classB.type;
        classB.supertype = classA.type;
        expect(this._inheritanceManager.lookupInheritance(classA,"name"),isNull);
        this._assertNoErrors(classA);
        this._assertNoErrors(classB);
    }
    test_lookupInheritance_superclass_method() : void {
        let classA : any = ElementFactory.classElement2("A");
        let methodName : string = "m";
        let methodM : any = ElementFactory.methodElement(methodName,this._typeProvider.intType);
        classA.methods = new core.DartList.literal<any>(methodM);
        let classB : any = ElementFactory.classElement("B",classA.type);
        expect(this._inheritanceManager.lookupInheritance(classB,methodName),same(methodM));
        this._assertNoErrors(classA);
        this._assertNoErrors(classB);
    }
    test_lookupInheritance_superclass_setter() : void {
        let classA : any = ElementFactory.classElement2("A");
        let setterName : string = "s";
        let setterS : any = ElementFactory.setterElement(setterName,false,this._typeProvider.intType);
        classA.accessors = new core.DartList.literal<any>(setterS);
        let classB : any = ElementFactory.classElement("B",classA.type);
        expect(this._inheritanceManager.lookupInheritance(classB,`${setterName}=`),same(setterS));
        this._assertNoErrors(classA);
        this._assertNoErrors(classB);
    }
    test_lookupInheritance_superclass_staticMember() : void {
        let classA : any = ElementFactory.classElement2("A");
        let methodName : string = "m";
        let methodM : any = ElementFactory.methodElement(methodName,this._typeProvider.intType);
        (methodM as any).isStatic = true;
        classA.methods = new core.DartList.literal<any>(methodM);
        let classB : any = ElementFactory.classElement("B",classA.type);
        expect(this._inheritanceManager.lookupInheritance(classB,methodName),isNull);
        this._assertNoErrors(classA);
        this._assertNoErrors(classB);
    }
    test_lookupMember_getter() : void {
        let classA : any = ElementFactory.classElement2("A");
        let getterName : string = "g";
        let getterG : any = ElementFactory.getterElement(getterName,false,this._typeProvider.intType);
        classA.accessors = new core.DartList.literal<any>(getterG);
        expect(this._inheritanceManager.lookupMember(classA,getterName),same(getterG));
        this._assertNoErrors(classA);
    }
    test_lookupMember_getter_static() : void {
        let classA : any = ElementFactory.classElement2("A");
        let getterName : string = "g";
        let getterG : any = ElementFactory.getterElement(getterName,true,this._typeProvider.intType);
        classA.accessors = new core.DartList.literal<any>(getterG);
        expect(this._inheritanceManager.lookupMember(classA,getterName),isNull);
        this._assertNoErrors(classA);
    }
    test_lookupMember_method() : void {
        let classA : any = ElementFactory.classElement2("A");
        let methodName : string = "m";
        let methodM : any = ElementFactory.methodElement(methodName,this._typeProvider.intType);
        classA.methods = new core.DartList.literal<any>(methodM);
        expect(this._inheritanceManager.lookupMember(classA,methodName),same(methodM));
        this._assertNoErrors(classA);
    }
    test_lookupMember_method_static() : void {
        let classA : any = ElementFactory.classElement2("A");
        let methodName : string = "m";
        let methodM : any = ElementFactory.methodElement(methodName,this._typeProvider.intType);
        (methodM as any).isStatic = true;
        classA.methods = new core.DartList.literal<any>(methodM);
        expect(this._inheritanceManager.lookupMember(classA,methodName),isNull);
        this._assertNoErrors(classA);
    }
    test_lookupMember_noMember() : void {
        let classA : any = ElementFactory.classElement2("A");
        expect(this._inheritanceManager.lookupMember(classA,"a"),isNull);
        this._assertNoErrors(classA);
    }
    test_lookupMember_setter() : void {
        let classA : any = ElementFactory.classElement2("A");
        let setterName : string = "s";
        let setterS : any = ElementFactory.setterElement(setterName,false,this._typeProvider.intType);
        classA.accessors = new core.DartList.literal<any>(setterS);
        expect(this._inheritanceManager.lookupMember(classA,`${setterName}=`),same(setterS));
        this._assertNoErrors(classA);
    }
    test_lookupMember_setter_static() : void {
        let classA : any = ElementFactory.classElement2("A");
        let setterName : string = "s";
        let setterS : any = ElementFactory.setterElement(setterName,true,this._typeProvider.intType);
        classA.accessors = new core.DartList.literal<any>(setterS);
        expect(this._inheritanceManager.lookupMember(classA,setterName),isNull);
        this._assertNoErrors(classA);
    }
    test_lookupOverrides_noParentClasses() : void {
        let classA : any = ElementFactory.classElement2("A");
        let methodName : string = "m";
        let methodM : any = ElementFactory.methodElement(methodName,this._typeProvider.intType);
        classA.methods = new core.DartList.literal<any>(methodM);
        expect(this._inheritanceManager.lookupOverrides(classA,methodName),hasLength(0));
        this._assertNoErrors(classA);
    }
    test_lookupOverrides_overrideBaseClass() : void {
        let classA : any = ElementFactory.classElement2("A");
        let methodName : string = "m";
        let methodMinA : any = ElementFactory.methodElement(methodName,this._typeProvider.intType);
        classA.methods = new core.DartList.literal<any>(methodMinA);
        let classB : any = ElementFactory.classElement("B",classA.type);
        let methodMinB : any = ElementFactory.methodElement(methodName,this._typeProvider.intType);
        classB.methods = new core.DartList.literal<any>(methodMinB);
        let overrides : core.DartList<any> = this._inheritanceManager.lookupOverrides(classB,methodName);
        expect(overrides,unorderedEquals(new core.DartList.literal(methodMinA)));
        this._assertNoErrors(classA);
        this._assertNoErrors(classB);
    }
    test_lookupOverrides_overrideInterface() : void {
        let classA : any = ElementFactory.classElement2("A");
        let methodName : string = "m";
        let methodMinA : any = ElementFactory.methodElement(methodName,this._typeProvider.intType);
        classA.methods = new core.DartList.literal<any>(methodMinA);
        let classB : any = ElementFactory.classElement2("B");
        classB.interfaces = new core.DartList.literal<any>(classA.type);
        let methodMinB : any = ElementFactory.methodElement(methodName,this._typeProvider.intType);
        classB.methods = new core.DartList.literal<any>(methodMinB);
        let overrides : core.DartList<any> = this._inheritanceManager.lookupOverrides(classB,methodName);
        expect(overrides,unorderedEquals(new core.DartList.literal(methodMinA)));
        this._assertNoErrors(classA);
        this._assertNoErrors(classB);
    }
    test_lookupOverrides_overrideTwoInterfaces() : void {
        let classA : any = ElementFactory.classElement2("A");
        let methodName : string = "m";
        let methodMinA : any = ElementFactory.methodElement(methodName,this._typeProvider.intType);
        classA.methods = new core.DartList.literal<any>(methodMinA);
        let classB : any = ElementFactory.classElement2("B");
        let methodMinB : any = ElementFactory.methodElement(methodName,this._typeProvider.doubleType);
        classB.methods = new core.DartList.literal<any>(methodMinB);
        let classC : any = ElementFactory.classElement2("C");
        classC.interfaces = new core.DartList.literal<any>(classA.type,classB.type);
        let methodMinC : any = ElementFactory.methodElement(methodName,this._typeProvider.numType);
        classC.methods = new core.DartList.literal<any>(methodMinC);
        let overrides : core.DartList<any> = this._inheritanceManager.lookupOverrides(classC,methodName);
        expect(overrides,unorderedEquals(new core.DartList.literal(methodMinA,methodMinB)));
        this._assertNoErrors(classA);
        this._assertNoErrors(classB);
        this._assertNoErrors(classC);
    }
    _assertErrors(classElt : any,expectedErrorCodes? : core.DartList<any>) : void {
        expectedErrorCodes = expectedErrorCodes || new core.DartList.literal<any>();
        let errorListener : lib3.GatheringErrorListener = new lib3.GatheringErrorListener();
        let actualErrors : core.DartHashSet<any> = this._inheritanceManager.getErrors(classElt);
        if (actualErrors != null) {
            for(let error of actualErrors) {
                errorListener.onError(error);
            }
        }
        errorListener.assertErrorsWithCodes(expectedErrorCodes);
    }
    _assertNoErrors(classElt : any) : void {
        this._assertErrors(classElt);
    }
    _createInheritanceManager() : any {
        let resourceProvider : any = new bare.createInstance(any,null);
        let context : any = lib5.AnalysisContextFactory.contextWithCore({
            resourceProvider : resourceProvider});
        let source : any = new bare.createInstance(any,null,resourceProvider.getFile("/test.dart"));
        let definingCompilationUnit : any = new bare.createInstance(any,null,"test.dart");
        definingCompilationUnit.librarySource = definingCompilationUnit.source = source;
        this._definingLibrary = ElementFactory.library(context,"test");
        this._definingLibrary.definingCompilationUnit = definingCompilationUnit;
        return new bare.createInstance(any,null,this._definingLibrary);
    }
    constructor() {
    }
    @defaultConstructor
    InheritanceManagerTest() {
        this._numOfMembersInObject = 0;
    }
}

export class properties {
}
