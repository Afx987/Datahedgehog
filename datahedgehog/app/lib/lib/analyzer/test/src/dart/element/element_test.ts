/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/src/dart/element/element_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../../../generated/test_support";
import * as lib4 from "./../../../generated/analysis_context_factory";
import * as lib5 from "./../../../generated/resolver_test_case";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(ElementAnnotationImplTest);
        defineReflectiveTests(FieldElementImplTest);
        defineReflectiveTests(FunctionTypeImplTest);
        defineReflectiveTests(InterfaceTypeImplTest);
        defineReflectiveTests(LocalVariableElementImplTest);
        defineReflectiveTests(TypeParameterTypeImplTest);
        defineReflectiveTests(VoidTypeImplTest);
        defineReflectiveTests(ClassElementImplTest);
        defineReflectiveTests(CompilationUnitElementImplTest);
        defineReflectiveTests(ElementLocationImplTest);
        defineReflectiveTests(ElementImplTest);
        defineReflectiveTests(LibraryElementImplTest);
        defineReflectiveTests(MethodElementImplTest);
        defineReflectiveTests(MethodMemberTest);
        defineReflectiveTests(MultiplyDefinedElementImplTest);
        defineReflectiveTests(ParameterElementImplTest);
        defineReflectiveTests(PropertyAccessorElementImplTest);
        defineReflectiveTests(TopLevelVariableElementImplTest);
    });
};
export namespace ClassElementImplTest {
    export type Constructors = lib3.EngineTestCase.Constructors | 'ClassElementImplTest';
    export type Interface = Omit<ClassElementImplTest, Constructors>;
}
@DartClass
export class ClassElementImplTest extends lib3.EngineTestCase {
    test_computeNode_ClassDeclaration() : void {
        let contextHelper : lib4.AnalysisContextHelper = new lib4.AnalysisContextHelper();
        let context : any = contextHelper.context;
        let source : any = contextHelper.addSource("/test.dart",'class A {}\n@deprecated class B {}\nenum C {C1, C2, C3}\n@deprecated enum D {D1, D2, D3}');
        let libraryElement : any = context.computeLibraryElement(source);
        let unitElement : any = libraryElement.definingCompilationUnit;
        {
            let elementA : any = unitElement.getType("A");
            expect(elementA.isDeprecated,isFalse);
            expect(elementA.isEnum,isFalse);
            let nodeA : any = elementA.computeNode();
            expect(nodeA,isNotNull);
            expect(nodeA.name.name,"A");
            expect(nodeA.element,same(elementA));
        }
        {
            let elementB : any = unitElement.getType("B");
            expect(elementB.isDeprecated,isTrue);
            expect(elementB.isEnum,isFalse);
            let nodeB : any = elementB.computeNode();
            expect(nodeB,isNotNull);
            expect(nodeB.name.name,"B");
            expect(nodeB.element,same(elementB));
        }
        {
            let elementC : any = unitElement.getEnum("C");
            expect(elementC.isDeprecated,isFalse);
            expect(elementC.isEnum,isTrue);
            let nodeC : any = elementC.computeNode();
            expect(nodeC,isNotNull);
            expect(nodeC.name.name,"C");
            expect(nodeC.element,same(elementC));
        }
        {
            let elementD : any = unitElement.getEnum("D");
            expect(elementD.isDeprecated,isTrue);
            expect(elementD.isEnum,isTrue);
            let nodeC : any = elementD.computeNode();
            expect(nodeC,isNotNull);
            expect(nodeC.name.name,"D");
            expect(nodeC.element,same(elementD));
        }
    }
    test_computeNode_ClassTypeAlias() : void {
        let contextHelper : lib4.AnalysisContextHelper = new lib4.AnalysisContextHelper();
        let context : any = contextHelper.context;
        let source : any = contextHelper.addSource("/test.dart",'abstract class A<K, V> = Object with MapMixin<K, V>;\n');
        let libraryElement : any = context.computeLibraryElement(source);
        let unitElement : any = libraryElement.definingCompilationUnit;
        {
            let elementA : any = unitElement.getType("A");
            let nodeA : any = elementA.computeNode();
            expect(nodeA,isNotNull);
            expect(nodeA.name.name,"A");
            expect(nodeA.element,same(elementA));
        }
    }
    test_constructors_mixinApplicationWithHandle() : void {
        let context : any = this.createAnalysisContext();
        context.sourceFactory = new bare.createInstance(any,null,new core.DartList.literal());
        let location : any = new bare.createInstance(any,null,'');
        let classA : any = ElementFactory.classElement2("A");
        classA.mixinApplication = true;
        let resynthesizer : TestElementResynthesizer = new TestElementResynthesizer(context,new core.DartMap.literal([
            [location,classA]]));
        let classAHandle : any = new bare.createInstance(any,null,resynthesizer,location);
        let classB : any = ElementFactory.classElement("B",new bare.createInstance(any,null,classAHandle));
        classB.mixinApplication = true;
        expect(classB.constructors,hasLength(1));
    }
    test_getAllSupertypes_interface() : void {
        let classA : any = ElementFactory.classElement2("A");
        let classB : any = ElementFactory.classElement("B",classA.type);
        let elementC : any = ElementFactory.classElement2("C");
        let typeObject : any = classA.supertype;
        let typeA : any = classA.type;
        let typeB : any = classB.type;
        let typeC : any = elementC.type;
        elementC.interfaces = new core.DartList.literal<any>(typeB);
        let supers : core.DartList<any> = elementC.allSupertypes;
        let types : core.DartList<any> = new core.DartList<any>();
        types.addAll(supers);
        expect(types.contains(typeA),isTrue);
        expect(types.contains(typeB),isTrue);
        expect(types.contains(typeObject),isTrue);
        expect(types.contains(typeC),isFalse);
    }
    test_getAllSupertypes_mixins() : void {
        let classA : any = ElementFactory.classElement2("A");
        let classB : any = ElementFactory.classElement("B",classA.type);
        let classC : any = ElementFactory.classElement2("C");
        let typeObject : any = classA.supertype;
        let typeA : any = classA.type;
        let typeB : any = classB.type;
        let typeC : any = classC.type;
        classC.mixins = new core.DartList.literal<any>(typeB);
        let supers : core.DartList<any> = classC.allSupertypes;
        let types : core.DartList<any> = new core.DartList<any>();
        types.addAll(supers);
        expect(types.contains(typeA),isFalse);
        expect(types.contains(typeB),isTrue);
        expect(types.contains(typeObject),isTrue);
        expect(types.contains(typeC),isFalse);
    }
    test_getAllSupertypes_recursive() : void {
        let classA : any = ElementFactory.classElement2("A");
        let classB : any = ElementFactory.classElement("B",classA.type);
        classA.supertype = classB.type;
        let supers : core.DartList<any> = classB.allSupertypes;
        expect(supers,hasLength(1));
    }
    test_getField() : void {
        let classA : any = ElementFactory.classElement2("A");
        let fieldName : string = "f";
        let field : any = ElementFactory.fieldElement(fieldName,false,false,false,null);
        classA.fields = new core.DartList.literal<any>(field);
        expect(classA.getField(fieldName),same(field));
        expect(field.isEnumConstant,false);
        expect(classA.getField("noSuchField"),same(null));
    }
    test_getMethod_declared() : void {
        let classA : any = ElementFactory.classElement2("A");
        let methodName : string = "m";
        let method : any = ElementFactory.methodElement(methodName,null);
        classA.methods = new core.DartList.literal<any>(method);
        expect(classA.getMethod(methodName),same(method));
    }
    test_getMethod_undeclared() : void {
        let classA : any = ElementFactory.classElement2("A");
        let methodName : string = "m";
        let method : any = ElementFactory.methodElement(methodName,null);
        classA.methods = new core.DartList.literal<any>(method);
        expect(classA.getMethod(`${methodName}x`),isNull);
    }
    test_hasNonFinalField_false_const() : void {
        let classA : any = ElementFactory.classElement2("A");
        classA.fields = new core.DartList.literal<any>(ElementFactory.fieldElement("f",false,false,true,classA.type));
        expect(classA.hasNonFinalField,isFalse);
    }
    test_hasNonFinalField_false_final() : void {
        let classA : any = ElementFactory.classElement2("A");
        classA.fields = new core.DartList.literal<any>(ElementFactory.fieldElement("f",false,true,false,classA.type));
        expect(classA.hasNonFinalField,isFalse);
    }
    test_hasNonFinalField_false_recursive() : void {
        let classA : any = ElementFactory.classElement2("A");
        let classB : any = ElementFactory.classElement("B",classA.type);
        classA.supertype = classB.type;
        expect(classA.hasNonFinalField,isFalse);
    }
    test_hasNonFinalField_true_immediate() : void {
        let classA : any = ElementFactory.classElement2("A");
        classA.fields = new core.DartList.literal<any>(ElementFactory.fieldElement("f",false,false,false,classA.type));
        expect(classA.hasNonFinalField,isTrue);
    }
    test_hasNonFinalField_true_inherited() : void {
        let classA : any = ElementFactory.classElement2("A");
        let classB : any = ElementFactory.classElement("B",classA.type);
        classA.fields = new core.DartList.literal<any>(ElementFactory.fieldElement("f",false,false,false,classA.type));
        expect(classB.hasNonFinalField,isTrue);
    }
    test_hasStaticMember_false_empty() : void {
        let classA : any = ElementFactory.classElement2("A");
        expect(classA.hasStaticMember,isFalse);
    }
    test_hasStaticMember_false_instanceMethod() : void {
        let classA : any = ElementFactory.classElement2("A");
        let method : any = ElementFactory.methodElement("foo",null);
        classA.methods = new core.DartList.literal<any>(method);
        expect(classA.hasStaticMember,isFalse);
    }
    test_hasStaticMember_instanceGetter() : void {
        let classA : any = ElementFactory.classElement2("A");
        let getter : any = ElementFactory.getterElement("foo",false,null);
        classA.accessors = new core.DartList.literal<any>(getter);
        expect(classA.hasStaticMember,isFalse);
    }
    test_hasStaticMember_true_getter() : void {
        let classA : any = ElementFactory.classElement2("A");
        let getter : any = ElementFactory.getterElement("foo",false,null);
        classA.accessors = new core.DartList.literal<any>(getter);
        getter.isStatic = true;
        expect(classA.hasStaticMember,isTrue);
    }
    test_hasStaticMember_true_method() : void {
        let classA : any = ElementFactory.classElement2("A");
        let method : any = ElementFactory.methodElement("foo",null);
        classA.methods = new core.DartList.literal<any>(method);
        method.isStatic = true;
        expect(classA.hasStaticMember,isTrue);
    }
    test_hasStaticMember_true_setter() : void {
        let classA : any = ElementFactory.classElement2("A");
        let setter : any = ElementFactory.setterElement("foo",false,null);
        classA.accessors = new core.DartList.literal<any>(setter);
        setter.isStatic = true;
        expect(classA.hasStaticMember,isTrue);
    }
    test_isEnum() : void {
        let firstConst : string = "A";
        let secondConst : string = "B";
        let enumE : any = ElementFactory.enumElement(new bare.createInstance(any,null),"E",new core.DartList.literal(firstConst,secondConst));
        expect(enumE.isEnum,true);
        expect(enumE.getField(firstConst).isEnumConstant,true);
        expect(enumE.getField(secondConst).isEnumConstant,true);
    }
    test_lookUpConcreteMethod_declared() : void {
        let library : any = ElementFactory.library(this.createAnalysisContext(),"lib");
        let classA : any = ElementFactory.classElement2("A");
        let methodName : string = "m";
        let method : any = ElementFactory.methodElement(methodName,null);
        classA.methods = new core.DartList.literal<any>(method);
        (library.definingCompilationUnit as any).types = new core.DartList.literal<any>(classA);
        expect(classA.lookUpConcreteMethod(methodName,library),same(method));
    }
    test_lookUpConcreteMethod_declaredAbstract() : void {
        let library : any = ElementFactory.library(this.createAnalysisContext(),"lib");
        let classA : any = ElementFactory.classElement2("A");
        let methodName : string = "m";
        let method : any = ElementFactory.methodElement(methodName,null);
        method.abstract = true;
        classA.methods = new core.DartList.literal<any>(method);
        (library.definingCompilationUnit as any).types = new core.DartList.literal<any>(classA);
        expect(classA.lookUpConcreteMethod(methodName,library),isNull);
    }
    test_lookUpConcreteMethod_declaredAbstractAndInherited() : void {
        let library : any = ElementFactory.library(this.createAnalysisContext(),"lib");
        let classA : any = ElementFactory.classElement2("A");
        let methodName : string = "m";
        let inheritedMethod : any = ElementFactory.methodElement(methodName,null);
        classA.methods = new core.DartList.literal<any>(inheritedMethod);
        let classB : any = ElementFactory.classElement("B",classA.type);
        let method : any = ElementFactory.methodElement(methodName,null);
        method.abstract = true;
        classB.methods = new core.DartList.literal<any>(method);
        (library.definingCompilationUnit as any).types = new core.DartList.literal<any>(classA,classB);
        expect(classB.lookUpConcreteMethod(methodName,library),same(inheritedMethod));
    }
    test_lookUpConcreteMethod_declaredAndInherited() : void {
        let library : any = ElementFactory.library(this.createAnalysisContext(),"lib");
        let classA : any = ElementFactory.classElement2("A");
        let methodName : string = "m";
        let inheritedMethod : any = ElementFactory.methodElement(methodName,null);
        classA.methods = new core.DartList.literal<any>(inheritedMethod);
        let classB : any = ElementFactory.classElement("B",classA.type);
        let method : any = ElementFactory.methodElement(methodName,null);
        classB.methods = new core.DartList.literal<any>(method);
        (library.definingCompilationUnit as any).types = new core.DartList.literal<any>(classA,classB);
        expect(classB.lookUpConcreteMethod(methodName,library),same(method));
    }
    test_lookUpConcreteMethod_declaredAndInheritedAbstract() : void {
        let library : any = ElementFactory.library(this.createAnalysisContext(),"lib");
        let classA : any = ElementFactory.classElement2("A");
        classA.abstract = true;
        let methodName : string = "m";
        let inheritedMethod : any = ElementFactory.methodElement(methodName,null);
        inheritedMethod.abstract = true;
        classA.methods = new core.DartList.literal<any>(inheritedMethod);
        let classB : any = ElementFactory.classElement("B",classA.type);
        let method : any = ElementFactory.methodElement(methodName,null);
        classB.methods = new core.DartList.literal<any>(method);
        (library.definingCompilationUnit as any).types = new core.DartList.literal<any>(classA,classB);
        expect(classB.lookUpConcreteMethod(methodName,library),same(method));
    }
    test_lookUpConcreteMethod_inherited() : void {
        let library : any = ElementFactory.library(this.createAnalysisContext(),"lib");
        let classA : any = ElementFactory.classElement2("A");
        let methodName : string = "m";
        let inheritedMethod : any = ElementFactory.methodElement(methodName,null);
        classA.methods = new core.DartList.literal<any>(inheritedMethod);
        let classB : any = ElementFactory.classElement("B",classA.type);
        (library.definingCompilationUnit as any).types = new core.DartList.literal<any>(classA,classB);
        expect(classB.lookUpConcreteMethod(methodName,library),same(inheritedMethod));
    }
    test_lookUpConcreteMethod_undeclared() : void {
        let library : any = ElementFactory.library(this.createAnalysisContext(),"lib");
        let classA : any = ElementFactory.classElement2("A");
        (library.definingCompilationUnit as any).types = new core.DartList.literal<any>(classA);
        expect(classA.lookUpConcreteMethod("m",library),isNull);
    }
    test_lookUpGetter_declared() : void {
        let library : any = ElementFactory.library(this.createAnalysisContext(),"lib");
        let classA : any = ElementFactory.classElement2("A");
        let getterName : string = "g";
        let getter : any = ElementFactory.getterElement(getterName,false,null);
        classA.accessors = new core.DartList.literal<any>(getter);
        (library.definingCompilationUnit as any).types = new core.DartList.literal<any>(classA);
        expect(classA.lookUpGetter(getterName,library),same(getter));
    }
    test_lookUpGetter_inherited() : void {
        let library : any = ElementFactory.library(this.createAnalysisContext(),"lib");
        let classA : any = ElementFactory.classElement2("A");
        let getterName : string = "g";
        let getter : any = ElementFactory.getterElement(getterName,false,null);
        classA.accessors = new core.DartList.literal<any>(getter);
        let classB : any = ElementFactory.classElement("B",classA.type);
        (library.definingCompilationUnit as any).types = new core.DartList.literal<any>(classA,classB);
        expect(classB.lookUpGetter(getterName,library),same(getter));
    }
    test_lookUpGetter_undeclared() : void {
        let library : any = ElementFactory.library(this.createAnalysisContext(),"lib");
        let classA : any = ElementFactory.classElement2("A");
        (library.definingCompilationUnit as any).types = new core.DartList.literal<any>(classA);
        expect(classA.lookUpGetter("g",library),isNull);
    }
    test_lookUpGetter_undeclared_recursive() : void {
        let library : any = ElementFactory.library(this.createAnalysisContext(),"lib");
        let classA : any = ElementFactory.classElement2("A");
        let classB : any = ElementFactory.classElement("B",classA.type);
        classA.supertype = classB.type;
        (library.definingCompilationUnit as any).types = new core.DartList.literal<any>(classA,classB);
        expect(classA.lookUpGetter("g",library),isNull);
    }
    test_lookUpInheritedConcreteGetter_declared() : void {
        let library : any = ElementFactory.library(this.createAnalysisContext(),"lib");
        let classA : any = ElementFactory.classElement2("A");
        let getterName : string = "g";
        let getter : any = ElementFactory.getterElement(getterName,false,null);
        classA.accessors = new core.DartList.literal<any>(getter);
        (library.definingCompilationUnit as any).types = new core.DartList.literal<any>(classA);
        expect(classA.lookUpInheritedConcreteGetter(getterName,library),isNull);
    }
    test_lookUpInheritedConcreteGetter_inherited() : void {
        let library : any = ElementFactory.library(this.createAnalysisContext(),"lib");
        let classA : any = ElementFactory.classElement2("A");
        let getterName : string = "g";
        let inheritedGetter : any = ElementFactory.getterElement(getterName,false,null);
        classA.accessors = new core.DartList.literal<any>(inheritedGetter);
        let classB : any = ElementFactory.classElement("B",classA.type);
        (library.definingCompilationUnit as any).types = new core.DartList.literal<any>(classA,classB);
        expect(classB.lookUpInheritedConcreteGetter(getterName,library),same(inheritedGetter));
    }
    test_lookUpInheritedConcreteGetter_undeclared() : void {
        let library : any = ElementFactory.library(this.createAnalysisContext(),"lib");
        let classA : any = ElementFactory.classElement2("A");
        (library.definingCompilationUnit as any).types = new core.DartList.literal<any>(classA);
        expect(classA.lookUpInheritedConcreteGetter("g",library),isNull);
    }
    test_lookUpInheritedConcreteGetter_undeclared_recursive() : void {
        let library : any = ElementFactory.library(this.createAnalysisContext(),"lib");
        let classA : any = ElementFactory.classElement2("A");
        let classB : any = ElementFactory.classElement("B",classA.type);
        classA.supertype = classB.type;
        (library.definingCompilationUnit as any).types = new core.DartList.literal<any>(classA,classB);
        expect(classA.lookUpInheritedConcreteGetter("g",library),isNull);
    }
    test_lookUpInheritedConcreteMethod_declared() : void {
        let library : any = ElementFactory.library(this.createAnalysisContext(),"lib");
        let classA : any = ElementFactory.classElement2("A");
        let methodName : string = "m";
        let method : any = ElementFactory.methodElement(methodName,null);
        classA.methods = new core.DartList.literal<any>(method);
        (library.definingCompilationUnit as any).types = new core.DartList.literal<any>(classA);
        expect(classA.lookUpInheritedConcreteMethod(methodName,library),isNull);
    }
    test_lookUpInheritedConcreteMethod_declaredAbstractAndInherited() : void {
        let library : any = ElementFactory.library(this.createAnalysisContext(),"lib");
        let classA : any = ElementFactory.classElement2("A");
        let methodName : string = "m";
        let inheritedMethod : any = ElementFactory.methodElement(methodName,null);
        classA.methods = new core.DartList.literal<any>(inheritedMethod);
        let classB : any = ElementFactory.classElement("B",classA.type);
        let method : any = ElementFactory.methodElement(methodName,null);
        method.abstract = true;
        classB.methods = new core.DartList.literal<any>(method);
        (library.definingCompilationUnit as any).types = new core.DartList.literal<any>(classA,classB);
        expect(classB.lookUpInheritedConcreteMethod(methodName,library),same(inheritedMethod));
    }
    test_lookUpInheritedConcreteMethod_declaredAndInherited() : void {
        let library : any = ElementFactory.library(this.createAnalysisContext(),"lib");
        let classA : any = ElementFactory.classElement2("A");
        let methodName : string = "m";
        let inheritedMethod : any = ElementFactory.methodElement(methodName,null);
        classA.methods = new core.DartList.literal<any>(inheritedMethod);
        let classB : any = ElementFactory.classElement("B",classA.type);
        let method : any = ElementFactory.methodElement(methodName,null);
        classB.methods = new core.DartList.literal<any>(method);
        (library.definingCompilationUnit as any).types = new core.DartList.literal<any>(classA,classB);
        expect(classB.lookUpInheritedConcreteMethod(methodName,library),same(inheritedMethod));
    }
    test_lookUpInheritedConcreteMethod_declaredAndInheritedAbstract() : void {
        let library : any = ElementFactory.library(this.createAnalysisContext(),"lib");
        let classA : any = ElementFactory.classElement2("A");
        classA.abstract = true;
        let methodName : string = "m";
        let inheritedMethod : any = ElementFactory.methodElement(methodName,null);
        inheritedMethod.abstract = true;
        classA.methods = new core.DartList.literal<any>(inheritedMethod);
        let classB : any = ElementFactory.classElement("B",classA.type);
        let method : any = ElementFactory.methodElement(methodName,null);
        classB.methods = new core.DartList.literal<any>(method);
        (library.definingCompilationUnit as any).types = new core.DartList.literal<any>(classA,classB);
        expect(classB.lookUpInheritedConcreteMethod(methodName,library),isNull);
    }
    test_lookUpInheritedConcreteMethod_declaredAndInheritedWithAbstractBetween() : void {
        let library : any = ElementFactory.library(this.createAnalysisContext(),"lib");
        let classA : any = ElementFactory.classElement2("A");
        let methodName : string = "m";
        let inheritedMethod : any = ElementFactory.methodElement(methodName,null);
        classA.methods = new core.DartList.literal<any>(inheritedMethod);
        let classB : any = ElementFactory.classElement("B",classA.type);
        let abstractMethod : any = ElementFactory.methodElement(methodName,null);
        abstractMethod.abstract = true;
        classB.methods = new core.DartList.literal<any>(abstractMethod);
        let classC : any = ElementFactory.classElement("C",classB.type);
        let method : any = ElementFactory.methodElement(methodName,null);
        classC.methods = new core.DartList.literal<any>(method);
        (library.definingCompilationUnit as any).types = new core.DartList.literal<any>(classA,classB,classC);
        expect(classC.lookUpInheritedConcreteMethod(methodName,library),same(inheritedMethod));
    }
    test_lookUpInheritedConcreteMethod_inherited() : void {
        let library : any = ElementFactory.library(this.createAnalysisContext(),"lib");
        let classA : any = ElementFactory.classElement2("A");
        let methodName : string = "m";
        let inheritedMethod : any = ElementFactory.methodElement(methodName,null);
        classA.methods = new core.DartList.literal<any>(inheritedMethod);
        let classB : any = ElementFactory.classElement("B",classA.type);
        (library.definingCompilationUnit as any).types = new core.DartList.literal<any>(classA,classB);
        expect(classB.lookUpInheritedConcreteMethod(methodName,library),same(inheritedMethod));
    }
    test_lookUpInheritedConcreteMethod_undeclared() : void {
        let library : any = ElementFactory.library(this.createAnalysisContext(),"lib");
        let classA : any = ElementFactory.classElement2("A");
        (library.definingCompilationUnit as any).types = new core.DartList.literal<any>(classA);
        expect(classA.lookUpInheritedConcreteMethod("m",library),isNull);
    }
    test_lookUpInheritedConcreteSetter_declared() : void {
        let library : any = ElementFactory.library(this.createAnalysisContext(),"lib");
        let classA : any = ElementFactory.classElement2("A");
        let setterName : string = "s";
        let setter : any = ElementFactory.setterElement(setterName,false,null);
        classA.accessors = new core.DartList.literal<any>(setter);
        (library.definingCompilationUnit as any).types = new core.DartList.literal<any>(classA);
        expect(classA.lookUpInheritedConcreteSetter(setterName,library),isNull);
    }
    test_lookUpInheritedConcreteSetter_inherited() : void {
        let library : any = ElementFactory.library(this.createAnalysisContext(),"lib");
        let classA : any = ElementFactory.classElement2("A");
        let setterName : string = "s";
        let setter : any = ElementFactory.setterElement(setterName,false,null);
        classA.accessors = new core.DartList.literal<any>(setter);
        let classB : any = ElementFactory.classElement("B",classA.type);
        (library.definingCompilationUnit as any).types = new core.DartList.literal<any>(classA,classB);
        expect(classB.lookUpInheritedConcreteSetter(setterName,library),same(setter));
    }
    test_lookUpInheritedConcreteSetter_undeclared() : void {
        let library : any = ElementFactory.library(this.createAnalysisContext(),"lib");
        let classA : any = ElementFactory.classElement2("A");
        (library.definingCompilationUnit as any).types = new core.DartList.literal<any>(classA);
        expect(classA.lookUpInheritedConcreteSetter("s",library),isNull);
    }
    test_lookUpInheritedConcreteSetter_undeclared_recursive() : void {
        let library : any = ElementFactory.library(this.createAnalysisContext(),"lib");
        let classA : any = ElementFactory.classElement2("A");
        let classB : any = ElementFactory.classElement("B",classA.type);
        classA.supertype = classB.type;
        (library.definingCompilationUnit as any).types = new core.DartList.literal<any>(classA,classB);
        expect(classA.lookUpInheritedConcreteSetter("s",library),isNull);
    }
    test_lookUpInheritedMethod_declared() : void {
        let library : any = ElementFactory.library(this.createAnalysisContext(),"lib");
        let classA : any = ElementFactory.classElement2("A");
        let methodName : string = "m";
        let method : any = ElementFactory.methodElement(methodName,null);
        classA.methods = new core.DartList.literal<any>(method);
        (library.definingCompilationUnit as any).types = new core.DartList.literal<any>(classA);
        expect(classA.lookUpInheritedMethod(methodName,library),isNull);
    }
    test_lookUpInheritedMethod_declaredAndInherited() : void {
        let library : any = ElementFactory.library(this.createAnalysisContext(),"lib");
        let classA : any = ElementFactory.classElement2("A");
        let methodName : string = "m";
        let inheritedMethod : any = ElementFactory.methodElement(methodName,null);
        classA.methods = new core.DartList.literal<any>(inheritedMethod);
        let classB : any = ElementFactory.classElement("B",classA.type);
        let method : any = ElementFactory.methodElement(methodName,null);
        classB.methods = new core.DartList.literal<any>(method);
        (library.definingCompilationUnit as any).types = new core.DartList.literal<any>(classA,classB);
        expect(classB.lookUpInheritedMethod(methodName,library),same(inheritedMethod));
    }
    test_lookUpInheritedMethod_inherited() : void {
        let library : any = ElementFactory.library(this.createAnalysisContext(),"lib");
        let classA : any = ElementFactory.classElement2("A");
        let methodName : string = "m";
        let inheritedMethod : any = ElementFactory.methodElement(methodName,null);
        classA.methods = new core.DartList.literal<any>(inheritedMethod);
        let classB : any = ElementFactory.classElement("B",classA.type);
        (library.definingCompilationUnit as any).types = new core.DartList.literal<any>(classA,classB);
        expect(classB.lookUpInheritedMethod(methodName,library),same(inheritedMethod));
    }
    test_lookUpInheritedMethod_undeclared() : void {
        let library : any = ElementFactory.library(this.createAnalysisContext(),"lib");
        let classA : any = ElementFactory.classElement2("A");
        (library.definingCompilationUnit as any).types = new core.DartList.literal<any>(classA);
        expect(classA.lookUpInheritedMethod("m",library),isNull);
    }
    test_lookUpMethod_declared() : void {
        let library : any = ElementFactory.library(this.createAnalysisContext(),"lib");
        let classA : any = ElementFactory.classElement2("A");
        let methodName : string = "m";
        let method : any = ElementFactory.methodElement(methodName,null);
        classA.methods = new core.DartList.literal<any>(method);
        (library.definingCompilationUnit as any).types = new core.DartList.literal<any>(classA);
        expect(classA.lookUpMethod(methodName,library),same(method));
    }
    test_lookUpMethod_inherited() : void {
        let library : any = ElementFactory.library(this.createAnalysisContext(),"lib");
        let classA : any = ElementFactory.classElement2("A");
        let methodName : string = "m";
        let method : any = ElementFactory.methodElement(methodName,null);
        classA.methods = new core.DartList.literal<any>(method);
        let classB : any = ElementFactory.classElement("B",classA.type);
        (library.definingCompilationUnit as any).types = new core.DartList.literal<any>(classA,classB);
        expect(classB.lookUpMethod(methodName,library),same(method));
    }
    test_lookUpMethod_undeclared() : void {
        let library : any = ElementFactory.library(this.createAnalysisContext(),"lib");
        let classA : any = ElementFactory.classElement2("A");
        (library.definingCompilationUnit as any).types = new core.DartList.literal<any>(classA);
        expect(classA.lookUpMethod("m",library),isNull);
    }
    test_lookUpMethod_undeclared_recursive() : void {
        let library : any = ElementFactory.library(this.createAnalysisContext(),"lib");
        let classA : any = ElementFactory.classElement2("A");
        let classB : any = ElementFactory.classElement("B",classA.type);
        classA.supertype = classB.type;
        (library.definingCompilationUnit as any).types = new core.DartList.literal<any>(classA,classB);
        expect(classA.lookUpMethod("m",library),isNull);
    }
    test_lookUpSetter_declared() : void {
        let library : any = ElementFactory.library(this.createAnalysisContext(),"lib");
        let classA : any = ElementFactory.classElement2("A");
        let setterName : string = "s";
        let setter : any = ElementFactory.setterElement(setterName,false,null);
        classA.accessors = new core.DartList.literal<any>(setter);
        (library.definingCompilationUnit as any).types = new core.DartList.literal<any>(classA);
        expect(classA.lookUpSetter(setterName,library),same(setter));
    }
    test_lookUpSetter_inherited() : void {
        let library : any = ElementFactory.library(this.createAnalysisContext(),"lib");
        let classA : any = ElementFactory.classElement2("A");
        let setterName : string = "s";
        let setter : any = ElementFactory.setterElement(setterName,false,null);
        classA.accessors = new core.DartList.literal<any>(setter);
        let classB : any = ElementFactory.classElement("B",classA.type);
        (library.definingCompilationUnit as any).types = new core.DartList.literal<any>(classA,classB);
        expect(classB.lookUpSetter(setterName,library),same(setter));
    }
    test_lookUpSetter_undeclared() : void {
        let library : any = ElementFactory.library(this.createAnalysisContext(),"lib");
        let classA : any = ElementFactory.classElement2("A");
        (library.definingCompilationUnit as any).types = new core.DartList.literal<any>(classA);
        expect(classA.lookUpSetter("s",library),isNull);
    }
    test_lookUpSetter_undeclared_recursive() : void {
        let library : any = ElementFactory.library(this.createAnalysisContext(),"lib");
        let classA : any = ElementFactory.classElement2("A");
        let classB : any = ElementFactory.classElement("B",classA.type);
        classA.supertype = classB.type;
        (library.definingCompilationUnit as any).types = new core.DartList.literal<any>(classA,classB);
        expect(classA.lookUpSetter("s",library),isNull);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ClassElementImplTest() {
    }
}

export namespace CompilationUnitElementImplTest {
    export type Constructors = lib3.EngineTestCase.Constructors | 'CompilationUnitElementImplTest';
    export type Interface = Omit<CompilationUnitElementImplTest, Constructors>;
}
@DartClass
export class CompilationUnitElementImplTest extends lib3.EngineTestCase {
    test_getElementAt() : void {
        let contextHelper : lib4.AnalysisContextHelper = new lib4.AnalysisContextHelper();
        let context : any = contextHelper.context;
        let code : string = 'class A {\n  int field;\n}\nmain() {\n  int localVar = 42;\n}\n';
        let libSource : any = contextHelper.addSource("/my_lib.dart",code);
        let libraryElement : any = context.computeLibraryElement(libSource);
        let unitElement : any = libraryElement.definingCompilationUnit;
        let elementA : any;
        {
            let offset : number = new core.DartString(code).indexOf('A {');
            elementA = unitElement.getElementAt(offset);
            expect(elementA,isNotNull);
            expect(elementA.enclosingElement,unitElement);
            expect(elementA.name,'A');
        }
        {
            let offset : number = new core.DartString(code).indexOf('field;');
            let element : any = unitElement.getElementAt(offset);
            expect(element,isNotNull);
            expect(element.enclosingElement,elementA);
            expect(element.name,'field');
        }
        let mainElement : any;
        {
            let offset : number = new core.DartString(code).indexOf('main() {');
            mainElement = unitElement.getElementAt(offset);
            expect(mainElement,isNotNull);
            expect(mainElement.enclosingElement,unitElement);
            expect(mainElement.name,'main');
        }
        {
            let offset : number = new core.DartString(code).indexOf('localVar');
            let element : any = unitElement.getElementAt(offset);
            expect(element,isNotNull);
            expect(element.enclosingElement,mainElement);
            expect(element.name,'localVar');
        }
        expect(unitElement.getElementAt(1000),isNull);
    }
    test_getElementAt_multipleUnitsInLibrary() : void {
        let contextHelper : lib4.AnalysisContextHelper = new lib4.AnalysisContextHelper();
        let context : any = contextHelper.context;
        let libSource : any = contextHelper.addSource("/my_lib.dart",'library my_lib;\npart \'unit_a.dart\';\npart \'unit_b.dart\';\n');
        let unitSourceA : any = contextHelper.addSource("/unit_a.dart",'part of my_lib;class A {}');
        let unitSourceB : any = contextHelper.addSource("/unit_b.dart",'part of my_lib;class B {}');
        let offset : number = new core.DartString('part of my_lib;class A {}').indexOf('A {}');
        context.computeLibraryElement(libSource);
        let unitElementA : any = context.getCompilationUnitElement(unitSourceA,libSource);
        let unitElementB : any = context.getCompilationUnitElement(unitSourceB,libSource);
        {
            let element : any = unitElementA.getElementAt(offset);
            expect(element,isNotNull);
            expect(element.enclosingElement,unitElementA);
            expect(element.name,'A');
        }
        {
            let element : any = unitElementB.getElementAt(offset);
            expect(element,isNotNull);
            expect(element.enclosingElement,unitElementB);
            expect(element.name,'B');
        }
    }
    test_getEnum_declared() : void {
        let typeProvider : any = new bare.createInstance(any,null);
        let unit : any = ElementFactory.compilationUnit("/lib.dart");
        let enumName : string = "E";
        let enumElement : any = ElementFactory.enumElement(typeProvider,enumName);
        unit.enums = new core.DartList.literal<any>(enumElement);
        expect(unit.getEnum(enumName),same(enumElement));
    }
    test_getEnum_undeclared() : void {
        let typeProvider : any = new bare.createInstance(any,null);
        let unit : any = ElementFactory.compilationUnit("/lib.dart");
        let enumName : string = "E";
        let enumElement : any = ElementFactory.enumElement(typeProvider,enumName);
        unit.enums = new core.DartList.literal<any>(enumElement);
        expect(unit.getEnum(`${enumName}x`),isNull);
    }
    test_getType_declared() : void {
        let unit : any = ElementFactory.compilationUnit("/lib.dart");
        let className : string = "C";
        let classElement : any = ElementFactory.classElement2(className);
        unit.types = new core.DartList.literal<any>(classElement);
        expect(unit.getType(className),same(classElement));
    }
    test_getType_undeclared() : void {
        let unit : any = ElementFactory.compilationUnit("/lib.dart");
        let className : string = "C";
        let classElement : any = ElementFactory.classElement2(className);
        unit.types = new core.DartList.literal<any>(classElement);
        expect(unit.getType(`${className}x`),isNull);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    CompilationUnitElementImplTest() {
    }
}

export namespace ElementAnnotationImplTest {
    export type Constructors = lib5.ResolverTestCase.Constructors | 'ElementAnnotationImplTest';
    export type Interface = Omit<ElementAnnotationImplTest, Constructors>;
}
@DartClass
export class ElementAnnotationImplTest extends lib5.ResolverTestCase {
    test_computeConstantValue() : void {
        this.addNamedSource('/a.dart','class A {\n  final String f;\n  const A(this.f);\n}\nvoid f(@A(\'x\') int p) {}\n');
        let source : any = this.addSource('import \'a.dart\';\nmain() {\n  f(3);\n}\n');
        let library : any = this.resolve2(source);
        let unit : any = this.resolveCompilationUnit(source,library);
        let main : any = op(Op.INDEX,unit.declarations,0);
        let body : any = main.functionExpression.body;
        let statement : any = op(Op.INDEX,body.block.statements,0);
        let invocation : any = statement.expression;
        let parameter : any = op(Op.INDEX,invocation.argumentList.arguments,0).bestParameterElement;
        let annotation : any = op(Op.INDEX,parameter.metadata,0);
        expect(annotation.constantValue,isNull);
        let value : any = annotation.computeConstantValue();
        expect(value,isNotNull);
        expect(value.getField('f').toStringValue(),'x');
        expect(annotation.constantValue,value);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ElementAnnotationImplTest() {
    }
}

export namespace ElementImplTest {
    export type Constructors = lib3.EngineTestCase.Constructors | 'ElementImplTest';
    export type Interface = Omit<ElementImplTest, Constructors>;
}
@DartClass
export class ElementImplTest extends lib3.EngineTestCase {
    test_equals() : void {
        let library : any = ElementFactory.library(this.createAnalysisContext(),"lib");
        let classElement : any = ElementFactory.classElement2("C");
        (library.definingCompilationUnit as any).types = new core.DartList.literal<any>(classElement);
        let field : any = ElementFactory.fieldElement("next",false,false,false,classElement.type);
        classElement.fields = new core.DartList.literal<any>(field);
        expect(op(Op.EQUALS,field,field),isTrue);
        expect(op(Op.EQUALS,field,field.getter),isFalse);
        expect(op(Op.EQUALS,field,field.setter),isFalse);
        expect(op(Op.EQUALS,field.getter,field.setter),isFalse);
    }
    test_isAccessibleIn_private_differentLibrary() : void {
        let context : any = this.createAnalysisContext();
        let library1 : any = ElementFactory.library(context,"lib1");
        let classElement : any = ElementFactory.classElement2("_C");
        (library1.definingCompilationUnit as any).types = new core.DartList.literal<any>(classElement);
        let library2 : any = ElementFactory.library(context,"lib2");
        expect(classElement.isAccessibleIn(library2),isFalse);
    }
    test_isAccessibleIn_private_sameLibrary() : void {
        let library : any = ElementFactory.library(this.createAnalysisContext(),"lib");
        let classElement : any = ElementFactory.classElement2("_C");
        (library.definingCompilationUnit as any).types = new core.DartList.literal<any>(classElement);
        expect(classElement.isAccessibleIn(library),isTrue);
    }
    test_isAccessibleIn_public_differentLibrary() : void {
        let context : any = this.createAnalysisContext();
        let library1 : any = ElementFactory.library(context,"lib1");
        let classElement : any = ElementFactory.classElement2("C");
        (library1.definingCompilationUnit as any).types = new core.DartList.literal<any>(classElement);
        let library2 : any = ElementFactory.library(context,"lib2");
        expect(classElement.isAccessibleIn(library2),isTrue);
    }
    test_isAccessibleIn_public_sameLibrary() : void {
        let library : any = ElementFactory.library(this.createAnalysisContext(),"lib");
        let classElement : any = ElementFactory.classElement2("C");
        (library.definingCompilationUnit as any).types = new core.DartList.literal<any>(classElement);
        expect(classElement.isAccessibleIn(library),isTrue);
    }
    test_isPrivate_false() : void {
        let element : any = ElementFactory.classElement2("C");
        expect(element.isPrivate,isFalse);
    }
    test_isPrivate_null() : void {
        let element : any = ElementFactory.classElement2(null);
        expect(element.isPrivate,isTrue);
    }
    test_isPrivate_true() : void {
        let element : any = ElementFactory.classElement2("_C");
        expect(element.isPrivate,isTrue);
    }
    test_isPublic_false() : void {
        let element : any = ElementFactory.classElement2("_C");
        expect(element.isPublic,isFalse);
    }
    test_isPublic_null() : void {
        let element : any = ElementFactory.classElement2(null);
        expect(element.isPublic,isFalse);
    }
    test_isPublic_true() : void {
        let element : any = ElementFactory.classElement2("C");
        expect(element.isPublic,isTrue);
    }
    test_SORT_BY_OFFSET() : void {
        let classElementA : any = ElementFactory.classElement2("A");
        classElementA.nameOffset = 1;
        let classElementB : any = ElementFactory.classElement2("B");
        classElementB.nameOffset = 2;
        expect(Element.SORT_BY_OFFSET(classElementA,classElementA),0);
        expect(op(Op.LT,Element.SORT_BY_OFFSET(classElementA,classElementB),0),isTrue);
        expect(op(Op.GT,Element.SORT_BY_OFFSET(classElementB,classElementA),0),isTrue);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ElementImplTest() {
    }
}

export namespace ElementLocationImplTest {
    export type Constructors = lib3.EngineTestCase.Constructors | 'ElementLocationImplTest';
    export type Interface = Omit<ElementLocationImplTest, Constructors>;
}
@DartClass
export class ElementLocationImplTest extends lib3.EngineTestCase {
    test_create_encoding() : void {
        let encoding : string = "a;b;c";
        let location : any = new bare.createInstance(any,null,encoding);
        expect(location.encoding,encoding);
    }
    test_create_encoding_emptyLast() : void {
        let encoding : string = "a;b;c;";
        let location : any = new bare.createInstance(any,null,encoding);
        expect(location.encoding,encoding);
    }
    test_equals_equal() : void {
        let encoding : string = "a;b;c";
        let first : any = new bare.createInstance(any,null,encoding);
        let second : any = new bare.createInstance(any,null,encoding);
        expect(op(Op.EQUALS,first,second),isTrue);
    }
    test_equals_notEqual_differentLengths() : void {
        let first : any = new bare.createInstance(any,null,"a;b;c");
        let second : any = new bare.createInstance(any,null,"a;b;c;d");
        expect(op(Op.EQUALS,first,second),isFalse);
    }
    test_equals_notEqual_notLocation() : void {
        let first : any = new bare.createInstance(any,null,"a;b;c");
        expect(op(Op.EQUALS,first,"a;b;d"),isFalse);
    }
    test_equals_notEqual_sameLengths() : void {
        let first : any = new bare.createInstance(any,null,"a;b;c");
        let second : any = new bare.createInstance(any,null,"a;b;d");
        expect(op(Op.EQUALS,first,second),isFalse);
    }
    test_getComponents() : void {
        let encoding : string = "a;b;c";
        let location : any = new bare.createInstance(any,null,encoding);
        let components : core.DartList<string> = location.components;
        expect(components,hasLength(3));
        expect(components[0],"a");
        expect(components[1],"b");
        expect(components[2],"c");
    }
    test_getEncoding() : void {
        let encoding : string = "a;b;c;;d";
        let location : any = new bare.createInstance(any,null,encoding);
        expect(location.encoding,encoding);
    }
    test_hashCode_equal() : void {
        let encoding : string = "a;b;c";
        let first : any = new bare.createInstance(any,null,encoding);
        let second : any = new bare.createInstance(any,null,encoding);
        expect(first.hashCode == second.hashCode,isTrue);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ElementLocationImplTest() {
    }
}

export namespace FieldElementImplTest {
    export type Constructors = lib3.EngineTestCase.Constructors | 'FieldElementImplTest';
    export type Interface = Omit<FieldElementImplTest, Constructors>;
}
@DartClass
export class FieldElementImplTest extends lib3.EngineTestCase {
    test_computeNode() : void {
        let contextHelper : lib4.AnalysisContextHelper = new lib4.AnalysisContextHelper();
        let context : any = contextHelper.context;
        let source : any = contextHelper.addSource("/test.dart",'class A {\n  int a;\n}\nenum B {B1, B2, B3}');
        let libraryElement : any = context.computeLibraryElement(source);
        let unitElement : any = libraryElement.definingCompilationUnit;
        {
            let elementA : any = unitElement.getType("A").getField('a');
            let nodeA : any = elementA.computeNode();
            expect(nodeA,isNotNull);
            expect(nodeA.name.name,"a");
            expect(nodeA.element,same(elementA));
        }
        {
            let elementB : any = unitElement.getEnum("B").getField('B2');
            let nodeB : any = elementB.computeNode();
            expect(nodeB,isNotNull);
            expect(nodeB.name.name,"B2");
            expect(nodeB.element,same(elementB));
        }
    }
    test_isEnumConstant() : void {
        let contextHelper : lib4.AnalysisContextHelper = new lib4.AnalysisContextHelper();
        let context : any = contextHelper.context;
        let source : any = contextHelper.addSource("/test.dart",'enum B {B1, B2, B3}\n');
        let libraryElement : any = context.computeLibraryElement(source);
        let unitElement : any = libraryElement.definingCompilationUnit;
        let b2Element : any = unitElement.getEnum("B").getField('B2');
        expect(b2Element.isEnumConstant,isTrue);
        let indexElement : any = unitElement.getEnum("B").getField('index');
        expect(indexElement.isEnumConstant,isFalse);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    FieldElementImplTest() {
    }
}

export namespace FunctionTypeImplTest {
    export type Constructors = lib3.EngineTestCase.Constructors | 'FunctionTypeImplTest';
    export type Interface = Omit<FunctionTypeImplTest, Constructors>;
}
@DartClass
export class FunctionTypeImplTest extends lib3.EngineTestCase {
    test_creation() : void {
        expect(new bare.createInstance(any,null,new bare.createInstance(any,null,AstTestFactory.identifier3("f"))),isNotNull);
    }
    test_equality_recursive() : void {
        let s : any = ElementFactory.functionTypeAliasElement('s');
        let t : any = ElementFactory.functionTypeAliasElement('t');
        let u : any = ElementFactory.functionTypeAliasElement('u');
        let v : any = ElementFactory.functionTypeAliasElement('v');
        s.returnType = t.type;
        t.returnType = s.type;
        u.returnType = v.type;
        v.returnType = u.type;
        expect(op(Op.EQUALS,s.type,u.type),new bare.createInstance(any,null));
    }
    test_getElement() : void {
        let typeElement : any = new bare.createInstance(any,null,AstTestFactory.identifier3("f"));
        let type : any = new bare.createInstance(any,null,typeElement);
        expect(type.element,typeElement);
    }
    test_getNamedParameterTypes_namedParameters() : void {
        let typeProvider : any = new bare.createInstance(any,null);
        let element : any = ElementFactory.functionElementWithParameters('f',VoidTypeImpl.instance,new core.DartList.literal(ElementFactory.requiredParameter2('a',typeProvider.intType),ElementFactory.requiredParameter('b'),ElementFactory.namedParameter2('c',typeProvider.stringType),ElementFactory.namedParameter('d')));
        let type : any = element.type;
        let types : core.DartMap<string,any> = type.namedParameterTypes;
        expect(types,hasLength(2));
        expect(types.get('c'),typeProvider.stringType);
        expect(types.get('d'),DynamicTypeImpl.instance);
    }
    test_getNamedParameterTypes_noNamedParameters() : void {
        let typeProvider : any = new bare.createInstance(any,null);
        let element : any = ElementFactory.functionElementWithParameters('f',VoidTypeImpl.instance,new core.DartList.literal(ElementFactory.requiredParameter2('a',typeProvider.intType),ElementFactory.requiredParameter('b'),ElementFactory.positionalParameter2('c',typeProvider.stringType)));
        let type : any = element.type;
        let types : core.DartMap<string,any> = type.namedParameterTypes;
        expect(types,hasLength(0));
    }
    test_getNamedParameterTypes_noParameters() : void {
        let type : any = ElementFactory.functionElement('f').type;
        let types : core.DartMap<string,any> = type.namedParameterTypes;
        expect(types,hasLength(0));
    }
    test_getNormalParameterTypes_noNormalParameters() : void {
        let typeProvider : any = new bare.createInstance(any,null);
        let element : any = ElementFactory.functionElementWithParameters('f',VoidTypeImpl.instance,new core.DartList.literal(ElementFactory.positionalParameter2('c',typeProvider.stringType),ElementFactory.positionalParameter('d')));
        let type : any = element.type;
        let types : core.DartList<any> = type.normalParameterTypes;
        expect(types,hasLength(0));
    }
    test_getNormalParameterTypes_noParameters() : void {
        let type : any = ElementFactory.functionElement('f').type;
        let types : core.DartList<any> = type.normalParameterTypes;
        expect(types,hasLength(0));
    }
    test_getNormalParameterTypes_normalParameters() : void {
        let typeProvider : any = new bare.createInstance(any,null);
        let element : any = ElementFactory.functionElementWithParameters('f',VoidTypeImpl.instance,new core.DartList.literal(ElementFactory.requiredParameter2('a',typeProvider.intType),ElementFactory.requiredParameter('b'),ElementFactory.positionalParameter2('c',typeProvider.stringType)));
        let type : any = element.type;
        let types : core.DartList<any> = type.normalParameterTypes;
        expect(types,hasLength(2));
        expect(types[0],typeProvider.intType);
        expect(types[1],DynamicTypeImpl.instance);
    }
    test_getOptionalParameterTypes_noOptionalParameters() : void {
        let typeProvider : any = new bare.createInstance(any,null);
        let element : any = ElementFactory.functionElementWithParameters('f',VoidTypeImpl.instance,new core.DartList.literal(ElementFactory.requiredParameter2('a',typeProvider.intType),ElementFactory.requiredParameter('b'),ElementFactory.namedParameter2('c',typeProvider.stringType),ElementFactory.namedParameter('d')));
        let type : any = element.type;
        let types : core.DartList<any> = type.optionalParameterTypes;
        expect(types,hasLength(0));
    }
    test_getOptionalParameterTypes_noParameters() : void {
        let type : any = ElementFactory.functionElement('f').type;
        let types : core.DartList<any> = type.optionalParameterTypes;
        expect(types,hasLength(0));
    }
    test_getOptionalParameterTypes_optionalParameters() : void {
        let typeProvider : any = new bare.createInstance(any,null);
        let element : any = ElementFactory.functionElementWithParameters('f',VoidTypeImpl.instance,new core.DartList.literal(ElementFactory.requiredParameter2('a',typeProvider.intType),ElementFactory.requiredParameter('b'),ElementFactory.positionalParameter2('c',typeProvider.stringType),ElementFactory.positionalParameter('d')));
        let type : any = element.type;
        let types : core.DartList<any> = type.optionalParameterTypes;
        expect(types,hasLength(2));
        expect(types[0],typeProvider.stringType);
        expect(types[1],DynamicTypeImpl.instance);
    }
    test_getReturnType() : void {
        let expectedReturnType : any = VoidTypeImpl.instance;
        let functionElement : any = new bare.createInstance(any,null,AstTestFactory.identifier3("f"));
        functionElement.returnType = expectedReturnType;
        let type : any = new bare.createInstance(any,null,functionElement);
        let returnType : any = type.returnType;
        expect(returnType,expectedReturnType);
    }
    test_getTypeArguments() : void {
        let type : any = new bare.createInstance(any,null,new bare.createInstance(any,null,AstTestFactory.identifier3("f")));
        let types : core.DartList<any> = type.typeArguments;
        expect(types,hasLength(0));
    }
    test_hashCode_element() : void {
        let type : any = new bare.createInstance(any,null,new bare.createInstance(any,null,AstTestFactory.identifier3("f")));
        type.hashCode;
    }
    test_hashCode_noElement() : void {
        let type : any = new bare.createInstance(any,null,null);
        type.hashCode;
    }
    test_hashCode_recursive() : void {
        let s : any = ElementFactory.functionTypeAliasElement('s');
        let t : any = ElementFactory.functionTypeAliasElement('t');
        s.returnType = t.type;
        t.returnType = s.type;
        expect(t.type.hashCode,new bare.createInstance(any,null));
    }
    test_isAssignableTo_normalAndPositionalArgs() : void {
        let a : any = ElementFactory.classElement2("A");
        let t : any = ElementFactory.functionElement6("t",null,new core.DartList.literal<any>(a)).type;
        let s : any = ElementFactory.functionElement5("s",new core.DartList.literal<any>(a)).type;
        expect(t.isSubtypeOf(s),isTrue);
        expect(s.isSubtypeOf(t),isFalse);
        expect(t.isAssignableTo(s),isTrue);
        expect(s.isAssignableTo(t),isFalse);
    }
    test_isSubtypeOf_baseCase_classFunction() : void {
        let functionElement : any = ElementFactory.classElement2("Function");
        let functionType : any = new _FunctionTypeImplTest_isSubtypeOf_baseCase_classFunction(functionElement);
        let f : any = ElementFactory.functionElement("f").type;
        expect(f.isSubtypeOf(functionType),isTrue);
    }
    test_isSubtypeOf_baseCase_notFunctionType() : void {
        let f : any = ElementFactory.functionElement("f").type;
        let t : any = ElementFactory.classElement2("C").type;
        expect(f.isSubtypeOf(t),isFalse);
    }
    test_isSubtypeOf_baseCase_null() : void {
        let f : any = ElementFactory.functionElement("f").type;
        expect(f.isSubtypeOf(null),isFalse);
    }
    test_isSubtypeOf_baseCase_self() : void {
        let f : any = ElementFactory.functionElement("f").type;
        expect(f.isSubtypeOf(f),isTrue);
    }
    test_isSubtypeOf_namedParameters_isAssignable() : void {
        let a : any = ElementFactory.classElement2("A");
        let b : any = ElementFactory.classElement("B",a.type);
        let t : any = ElementFactory.functionElement4("t",null,null,new core.DartList.literal<string>("name"),new core.DartList.literal<any>(a)).type;
        let s : any = ElementFactory.functionElement4("s",null,null,new core.DartList.literal<string>("name"),new core.DartList.literal<any>(b)).type;
        expect(t.isSubtypeOf(s),isTrue);
        expect(s.isSubtypeOf(t),isTrue);
    }
    test_isSubtypeOf_namedParameters_isNotAssignable() : void {
        let t : any = ElementFactory.functionElement4("t",null,null,new core.DartList.literal<string>("name"),new core.DartList.literal<any>(ElementFactory.classElement2("A"))).type;
        let s : any = ElementFactory.functionElement4("s",null,null,new core.DartList.literal<string>("name"),new core.DartList.literal<any>(ElementFactory.classElement2("B"))).type;
        expect(t.isSubtypeOf(s),isFalse);
    }
    test_isSubtypeOf_namedParameters_namesDifferent() : void {
        let a : any = ElementFactory.classElement2("A");
        let b : any = ElementFactory.classElement("B",a.type);
        let t : any = ElementFactory.functionElement4("t",null,null,new core.DartList.literal<string>("name"),new core.DartList.literal<any>(a)).type;
        let s : any = ElementFactory.functionElement4("s",null,null,new core.DartList.literal<string>("diff"),new core.DartList.literal<any>(b)).type;
        expect(t.isSubtypeOf(s),isFalse);
        expect(s.isSubtypeOf(t),isFalse);
    }
    test_isSubtypeOf_namedParameters_orderOfParams() : void {
        let a : any = ElementFactory.classElement2("A");
        let b : any = ElementFactory.classElement("B",a.type);
        let t : any = ElementFactory.functionElement4("t",null,null,new core.DartList.literal<string>("A","B"),new core.DartList.literal<any>(a,b)).type;
        let s : any = ElementFactory.functionElement4("s",null,null,new core.DartList.literal<string>("B","A"),new core.DartList.literal<any>(b,a)).type;
        expect(t.isSubtypeOf(s),isTrue);
    }
    test_isSubtypeOf_namedParameters_orderOfParams2() : void {
        let a : any = ElementFactory.classElement2("A");
        let b : any = ElementFactory.classElement("B",a.type);
        let t : any = ElementFactory.functionElement4("t",null,null,new core.DartList.literal<string>("B"),new core.DartList.literal<any>(b)).type;
        let s : any = ElementFactory.functionElement4("s",null,null,new core.DartList.literal<string>("B","A"),new core.DartList.literal<any>(b,a)).type;
        expect(t.isSubtypeOf(s),isFalse);
    }
    test_isSubtypeOf_namedParameters_orderOfParams3() : void {
        let a : any = ElementFactory.classElement2("A");
        let b : any = ElementFactory.classElement("B",a.type);
        let t : any = ElementFactory.functionElement4("t",null,null,new core.DartList.literal<string>("A","B"),new core.DartList.literal<any>(a,b)).type;
        let s : any = ElementFactory.functionElement4("s",null,null,new core.DartList.literal<string>("B"),new core.DartList.literal<any>(b)).type;
        expect(t.isSubtypeOf(s),isTrue);
    }
    test_isSubtypeOf_namedParameters_sHasMoreParams() : void {
        let a : any = ElementFactory.classElement2("A");
        let b : any = ElementFactory.classElement("B",a.type);
        let t : any = ElementFactory.functionElement4("t",null,null,new core.DartList.literal<string>("name"),new core.DartList.literal<any>(a)).type;
        let s : any = ElementFactory.functionElement4("s",null,null,new core.DartList.literal<string>("name","name2"),new core.DartList.literal<any>(b,b)).type;
        expect(t.isSubtypeOf(s),isFalse);
    }
    test_isSubtypeOf_namedParameters_tHasMoreParams() : void {
        let a : any = ElementFactory.classElement2("A");
        let b : any = ElementFactory.classElement("B",a.type);
        let t : any = ElementFactory.functionElement4("t",null,null,new core.DartList.literal<string>("name","name2"),new core.DartList.literal<any>(a,a)).type;
        let s : any = ElementFactory.functionElement4("s",null,null,new core.DartList.literal<string>("name"),new core.DartList.literal<any>(b)).type;
        expect(t.isSubtypeOf(s),isTrue);
    }
    test_isSubtypeOf_normalAndPositionalArgs_1() : void {
        let a : any = ElementFactory.classElement2("A");
        let t : any = ElementFactory.functionElement6("t",null,new core.DartList.literal<any>(a)).type;
        let s : any = ElementFactory.functionElement5("s",new core.DartList.literal<any>(a)).type;
        expect(t.isSubtypeOf(s),isTrue);
        expect(s.isSubtypeOf(t),isFalse);
    }
    test_isSubtypeOf_normalAndPositionalArgs_2() : void {
        let a : any = ElementFactory.classElement2("A");
        let t : any = ElementFactory.functionElement6("t",new core.DartList.literal<any>(a),new core.DartList.literal<any>(a)).type;
        let s : any = ElementFactory.functionElement5("s",new core.DartList.literal<any>(a)).type;
        expect(t.isSubtypeOf(s),isTrue);
        expect(s.isSubtypeOf(t),isFalse);
    }
    test_isSubtypeOf_normalAndPositionalArgs_3() : void {
        let a : any = ElementFactory.classElement2("A");
        let t : any = ElementFactory.functionElement6("t",null,new core.DartList.literal<any>(a)).type;
        let s : any = ElementFactory.functionElement("s").type;
        expect(t.isSubtypeOf(s),isTrue);
        expect(s.isSubtypeOf(t),isFalse);
    }
    test_isSubtypeOf_normalAndPositionalArgs_4() : void {
        let a : any = ElementFactory.classElement2("A");
        let b : any = ElementFactory.classElement2("B");
        let c : any = ElementFactory.classElement2("C");
        let d : any = ElementFactory.classElement2("D");
        let e : any = ElementFactory.classElement2("E");
        let t : any = ElementFactory.functionElement6("t",new core.DartList.literal<any>(a,b),new core.DartList.literal<any>(c,d,e)).type;
        let s : any = ElementFactory.functionElement6("s",new core.DartList.literal<any>(a,b,c),new core.DartList.literal<any>(d)).type;
        expect(t.isSubtypeOf(s),isTrue);
        expect(s.isSubtypeOf(t),isFalse);
    }
    test_isSubtypeOf_normalParameters_isAssignable() : void {
        let a : any = ElementFactory.classElement2("A");
        let b : any = ElementFactory.classElement("B",a.type);
        let t : any = ElementFactory.functionElement5("t",new core.DartList.literal<any>(a)).type;
        let s : any = ElementFactory.functionElement5("s",new core.DartList.literal<any>(b)).type;
        expect(t.isSubtypeOf(s),isTrue);
        expect(s.isSubtypeOf(t),isTrue);
    }
    test_isSubtypeOf_normalParameters_isNotAssignable() : void {
        let t : any = ElementFactory.functionElement5("t",new core.DartList.literal<any>(ElementFactory.classElement2("A"))).type;
        let s : any = ElementFactory.functionElement5("s",new core.DartList.literal<any>(ElementFactory.classElement2("B"))).type;
        expect(t.isSubtypeOf(s),isFalse);
    }
    test_isSubtypeOf_normalParameters_sHasMoreParams() : void {
        let a : any = ElementFactory.classElement2("A");
        let b : any = ElementFactory.classElement("B",a.type);
        let t : any = ElementFactory.functionElement5("t",new core.DartList.literal<any>(a)).type;
        let s : any = ElementFactory.functionElement5("s",new core.DartList.literal<any>(b,b)).type;
        expect(t.isSubtypeOf(s),isFalse);
    }
    test_isSubtypeOf_normalParameters_tHasMoreParams() : void {
        let a : any = ElementFactory.classElement2("A");
        let b : any = ElementFactory.classElement("B",a.type);
        let t : any = ElementFactory.functionElement5("t",new core.DartList.literal<any>(a,a)).type;
        let s : any = ElementFactory.functionElement5("s",new core.DartList.literal<any>(b)).type;
        expect(t.isSubtypeOf(s),isFalse);
    }
    test_isSubtypeOf_Object() : void {
        let f : any = ElementFactory.functionElement("f").type;
        let t : any = ElementFactory.object.type;
        expect(f.isSubtypeOf(t),isTrue);
    }
    test_isSubtypeOf_positionalParameters_isAssignable() : void {
        let a : any = ElementFactory.classElement2("A");
        let b : any = ElementFactory.classElement("B",a.type);
        let t : any = ElementFactory.functionElement6("t",null,new core.DartList.literal<any>(a)).type;
        let s : any = ElementFactory.functionElement6("s",null,new core.DartList.literal<any>(b)).type;
        expect(t.isSubtypeOf(s),isTrue);
        expect(s.isSubtypeOf(t),isTrue);
    }
    test_isSubtypeOf_positionalParameters_isNotAssignable() : void {
        let t : any = ElementFactory.functionElement6("t",null,new core.DartList.literal<any>(ElementFactory.classElement2("A"))).type;
        let s : any = ElementFactory.functionElement6("s",null,new core.DartList.literal<any>(ElementFactory.classElement2("B"))).type;
        expect(t.isSubtypeOf(s),isFalse);
    }
    test_isSubtypeOf_positionalParameters_sHasMoreParams() : void {
        let a : any = ElementFactory.classElement2("A");
        let b : any = ElementFactory.classElement("B",a.type);
        let t : any = ElementFactory.functionElement6("t",null,new core.DartList.literal<any>(a)).type;
        let s : any = ElementFactory.functionElement6("s",null,new core.DartList.literal<any>(b,b)).type;
        expect(t.isSubtypeOf(s),isFalse);
    }
    test_isSubtypeOf_positionalParameters_tHasMoreParams() : void {
        let a : any = ElementFactory.classElement2("A");
        let b : any = ElementFactory.classElement("B",a.type);
        let t : any = ElementFactory.functionElement6("t",null,new core.DartList.literal<any>(a,a)).type;
        let s : any = ElementFactory.functionElement6("s",null,new core.DartList.literal<any>(b)).type;
        expect(t.isSubtypeOf(s),isTrue);
    }
    test_isSubtypeOf_returnType_sIsVoid() : void {
        let t : any = ElementFactory.functionElement("t").type;
        let s : any = ElementFactory.functionElement("s").type;
        expect(op(Op.EQUALS,VoidTypeImpl.instance,s.returnType),isTrue);
        expect(t.isSubtypeOf(s),isTrue);
    }
    test_isSubtypeOf_returnType_tAssignableToS() : void {
        let a : any = ElementFactory.classElement2("A");
        let b : any = ElementFactory.classElement("B",a.type);
        let t : any = ElementFactory.functionElement2("t",a.type).type;
        let s : any = ElementFactory.functionElement2("s",b.type).type;
        expect(t.isSubtypeOf(s),isTrue);
        expect(s.isSubtypeOf(t),isTrue);
    }
    test_isSubtypeOf_returnType_tNotAssignableToS() : void {
        let t : any = ElementFactory.functionElement2("t",ElementFactory.classElement2("A").type).type;
        let s : any = ElementFactory.functionElement2("s",ElementFactory.classElement2("B").type).type;
        expect(t.isSubtypeOf(s),isFalse);
    }
    test_isSubtypeOf_typeParameters_matchesBounds() : void {
        let provider : any = new bare.createInstance(any,null);
        let boolType : any = provider.boolType;
        let stringType : any = provider.stringType;
        let parameterB : any = new bare.createInstance(any,null,AstTestFactory.identifier3("B"));
        parameterB.bound = boolType;
        let typeB : any = new bare.createInstance(any,null,parameterB);
        let parameterS : any = new bare.createInstance(any,null,AstTestFactory.identifier3("S"));
        parameterS.bound = stringType;
        let typeS : any = new bare.createInstance(any,null,parameterS);
        let functionAliasElement : any = new bare.createInstance(any,null,AstTestFactory.identifier3("func"));
        functionAliasElement.parameters = new core.DartList.literal<any>(ElementFactory.requiredParameter2("a",typeB),ElementFactory.positionalParameter2("b",typeS));
        functionAliasElement.returnType = stringType;
        let functionAliasType : any = new bare.createInstance(any,null,functionAliasElement);
        functionAliasElement.type = functionAliasType;
        let functionElement : any = new bare.createInstance(any,null,AstTestFactory.identifier3("f"));
        functionElement.parameters = new core.DartList.literal<any>(ElementFactory.requiredParameter2("c",boolType),ElementFactory.positionalParameter2("d",stringType));
        functionElement.returnType = provider.dynamicType;
        let functionType : any = new bare.createInstance(any,null,functionElement);
        functionElement.type = functionType;
        expect(functionType.isAssignableTo(functionAliasType),isTrue);
    }
    test_isSubtypeOf_wrongFunctionType_normal_named() : void {
        let a : any = ElementFactory.classElement2("A");
        let t : any = ElementFactory.functionElement5("t",new core.DartList.literal<any>(a)).type;
        let s : any = ElementFactory.functionElement7("s",null,new core.DartList.literal<string>("name"),new core.DartList.literal<any>(a)).type;
        expect(t.isSubtypeOf(s),isFalse);
        expect(s.isSubtypeOf(t),isFalse);
    }
    test_isSubtypeOf_wrongFunctionType_optional_named() : void {
        let a : any = ElementFactory.classElement2("A");
        let t : any = ElementFactory.functionElement6("t",null,new core.DartList.literal<any>(a)).type;
        let s : any = ElementFactory.functionElement7("s",null,new core.DartList.literal<string>("name"),new core.DartList.literal<any>(a)).type;
        expect(t.isSubtypeOf(s),isFalse);
        expect(s.isSubtypeOf(t),isFalse);
    }
    test_namedParameterTypes_pruned_no_type_arguments() : void {
        let f : any = ElementFactory.functionTypeAliasElement('f');
        let g : any = ElementFactory.functionTypeAliasElement('g');
        f.parameters = new core.DartList.literal(ElementFactory.namedParameter2('x',g.type));
        let paramType : any = op(Op.INDEX,f.type.namedParameterTypes,'x');
        expect(paramType.prunedTypedefs,hasLength(1));
        expect(op(Op.INDEX,paramType.prunedTypedefs,0),same(f));
    }
    test_namedParameterTypes_pruned_with_type_arguments() : void {
        let f : any = ElementFactory.functionTypeAliasElement('f');
        let g : any = ElementFactory.functionTypeAliasElement('g');
        f.typeParameters = new core.DartList.literal(ElementFactory.typeParameterElement('T'));
        f.parameters = new core.DartList.literal(ElementFactory.namedParameter2('x',g.type));
        let paramType : any = op(Op.INDEX,f.type.namedParameterTypes,'x');
        expect(paramType.prunedTypedefs,hasLength(1));
        expect(op(Op.INDEX,paramType.prunedTypedefs,0),same(f));
    }
    test_newPrune_no_previous_prune() : void {
        let f : any = ElementFactory.functionTypeAliasElement('f');
        let type : any = f.type;
        let pruneList : core.DartList<any> = type.newPrune;
        expect(pruneList,hasLength(1));
        expect(pruneList[0],same(f));
    }
    test_newPrune_non_typedef() : void {
        let f : any = ElementFactory.functionElement('f');
        let type : any = f.type;
        expect(type.newPrune,isNull);
    }
    test_newPrune_synthetic_typedef() : void {
        let f : any = ElementFactory.functionTypeAliasElement('f');
        f.isSynthetic = true;
        let type : any = f.type;
        expect(type.newPrune,isNull);
    }
    test_newPrune_with_previous_prune() : void {
        let f : any = ElementFactory.functionTypeAliasElement('f');
        let g : any = ElementFactory.functionTypeAliasElement('g');
        let type : any = f.type;
        let prunedType : any = type.pruned(new core.DartList.literal(g));
        let pruneList : core.DartList<any> = prunedType.newPrune;
        expect(pruneList,hasLength(2));
        expect(pruneList,contains(f));
        expect(pruneList,contains(g));
    }
    test_normalParameterTypes_pruned_no_type_arguments() : void {
        let f : any = ElementFactory.functionTypeAliasElement('f');
        let g : any = ElementFactory.functionTypeAliasElement('g');
        f.parameters = new core.DartList.literal(ElementFactory.requiredParameter2('x',g.type));
        let paramType : any = op(Op.INDEX,f.type.normalParameterTypes,0);
        expect(paramType.prunedTypedefs,hasLength(1));
        expect(op(Op.INDEX,paramType.prunedTypedefs,0),same(f));
    }
    test_normalParameterTypes_pruned_with_type_arguments() : void {
        let f : any = ElementFactory.functionTypeAliasElement('f');
        let g : any = ElementFactory.functionTypeAliasElement('g');
        f.typeParameters = new core.DartList.literal(ElementFactory.typeParameterElement('T'));
        f.parameters = new core.DartList.literal(ElementFactory.requiredParameter2('x',g.type));
        let paramType : any = op(Op.INDEX,f.type.normalParameterTypes,0);
        expect(paramType.prunedTypedefs,hasLength(1));
        expect(op(Op.INDEX,paramType.prunedTypedefs,0),same(f));
    }
    test_optionalParameterTypes_pruned_no_type_arguments() : void {
        let f : any = ElementFactory.functionTypeAliasElement('f');
        let g : any = ElementFactory.functionTypeAliasElement('g');
        f.parameters = new core.DartList.literal(ElementFactory.positionalParameter2('x',g.type));
        let paramType : any = op(Op.INDEX,f.type.optionalParameterTypes,0);
        expect(paramType.prunedTypedefs,hasLength(1));
        expect(op(Op.INDEX,paramType.prunedTypedefs,0),same(f));
    }
    test_optionalParameterTypes_pruned_with_type_arguments() : void {
        let f : any = ElementFactory.functionTypeAliasElement('f');
        let g : any = ElementFactory.functionTypeAliasElement('g');
        f.typeParameters = new core.DartList.literal(ElementFactory.typeParameterElement('T'));
        f.parameters = new core.DartList.literal(ElementFactory.positionalParameter2('x',g.type));
        let paramType : any = op(Op.INDEX,f.type.optionalParameterTypes,0);
        expect(paramType.prunedTypedefs,hasLength(1));
        expect(op(Op.INDEX,paramType.prunedTypedefs,0),same(f));
    }
    test_resolveToBound() : void {
        let f : any = ElementFactory.functionElement('f');
        let type : any = f.type;
        expect(type.resolveToBound(null),same(type));
    }
    test_returnType_pruned_no_type_arguments() : void {
        let f : any = ElementFactory.functionTypeAliasElement('f');
        let g : any = ElementFactory.functionTypeAliasElement('g');
        f.returnType = g.type;
        let paramType : any = f.type.returnType;
        expect(paramType.prunedTypedefs,hasLength(1));
        expect(op(Op.INDEX,paramType.prunedTypedefs,0),same(f));
    }
    test_returnType_pruned_with_type_arguments() : void {
        let f : any = ElementFactory.functionTypeAliasElement('f');
        let g : any = ElementFactory.functionTypeAliasElement('g');
        f.typeParameters = new core.DartList.literal(ElementFactory.typeParameterElement('T'));
        f.returnType = g.type;
        let paramType : any = f.type.returnType;
        expect(paramType.prunedTypedefs,hasLength(1));
        expect(op(Op.INDEX,paramType.prunedTypedefs,0),same(f));
    }
    test_substitute2_equal() : void {
        let definingClass : any = ElementFactory.classElement2("C",new core.DartList.literal("E"));
        let parameterType : any = op(Op.INDEX,definingClass.typeParameters,0).type;
        let functionElement : any = new bare.createInstance(any,null,AstTestFactory.identifier3("m"));
        let namedParameterName : string = "c";
        functionElement.parameters = new core.DartList.literal<any>(ElementFactory.requiredParameter2("a",parameterType),ElementFactory.positionalParameter2("b",parameterType),ElementFactory.namedParameter2(namedParameterName,parameterType));
        functionElement.returnType = parameterType;
        definingClass.methods = new core.DartList.literal<any>(functionElement);
        let functionType : any = new bare.createInstance(any,null,functionElement);
        let argumentType : any = new bare.createInstance(any,null,new bare.createInstance(any,null,AstTestFactory.identifier3("D")));
        let result : any = functionType.substitute2(new core.DartList.literal<any>(argumentType),new core.DartList.literal<any>(parameterType));
        expect(result.returnType,argumentType);
        let normalParameters : core.DartList<any> = result.normalParameterTypes;
        expect(normalParameters,hasLength(1));
        expect(normalParameters[0],argumentType);
        let optionalParameters : core.DartList<any> = result.optionalParameterTypes;
        expect(optionalParameters,hasLength(1));
        expect(optionalParameters[0],argumentType);
        let namedParameters : core.DartMap<string,any> = result.namedParameterTypes;
        expect(namedParameters,hasLength(1));
        expect(namedParameters.get(namedParameterName),argumentType);
    }
    test_substitute2_notEqual() : void {
        let returnType : any = new bare.createInstance(any,null,new bare.createInstance(any,null,AstTestFactory.identifier3("R")));
        let normalParameterType : any = new bare.createInstance(any,null,new bare.createInstance(any,null,AstTestFactory.identifier3("A")));
        let optionalParameterType : any = new bare.createInstance(any,null,new bare.createInstance(any,null,AstTestFactory.identifier3("B")));
        let namedParameterType : any = new bare.createInstance(any,null,new bare.createInstance(any,null,AstTestFactory.identifier3("C")));
        let functionElement : any = new bare.createInstance(any,null,AstTestFactory.identifier3("f"));
        let namedParameterName : string = "c";
        functionElement.parameters = new core.DartList.literal<any>(ElementFactory.requiredParameter2("a",normalParameterType),ElementFactory.positionalParameter2("b",optionalParameterType),ElementFactory.namedParameter2(namedParameterName,namedParameterType));
        functionElement.returnType = returnType;
        let functionType : any = new bare.createInstance(any,null,functionElement);
        let argumentType : any = new bare.createInstance(any,null,new bare.createInstance(any,null,AstTestFactory.identifier3("D")));
        let parameterType : any = new bare.createInstance(any,null,new bare.createInstance(any,null,AstTestFactory.identifier3("E")));
        let result : any = functionType.substitute2(new core.DartList.literal<any>(argumentType),new core.DartList.literal<any>(parameterType));
        expect(result.returnType,returnType);
        let normalParameters : core.DartList<any> = result.normalParameterTypes;
        expect(normalParameters,hasLength(1));
        expect(normalParameters[0],normalParameterType);
        let optionalParameters : core.DartList<any> = result.optionalParameterTypes;
        expect(optionalParameters,hasLength(1));
        expect(optionalParameters[0],optionalParameterType);
        let namedParameters : core.DartMap<string,any> = result.namedParameterTypes;
        expect(namedParameters,hasLength(1));
        expect(namedParameters.get(namedParameterName),namedParameterType);
    }
    test_toString_recursive() : void {
        let t : any = ElementFactory.functionTypeAliasElement("t");
        let s : any = ElementFactory.functionTypeAliasElement("s");
        t.returnType = s.type;
        s.returnType = t.type;
        expect(t.type.toString(),'() → () → ...');
    }
    test_toString_recursive_via_interface_type() : void {
        let f : any = ElementFactory.functionTypeAliasElement('f');
        let c : any = ElementFactory.classElement2('C',new core.DartList.literal('T'));
        f.returnType = c.type.instantiate(new core.DartList.literal(f.type));
        expect(f.type.toString(),'() → C<...>');
    }
    test_typeParameters_genericLocalFunction_genericMethod_genericClass() : void {
        let classElement : any = ElementFactory.classElement('C',null,new core.DartList.literal('S'));
        let method : any = new bare.createInstance(any,null,'m',0);
        method.enclosingElement = classElement;
        method.returnType = ElementFactory.objectType;
        method.typeParameters = ElementFactory.typeParameters(new core.DartList.literal('T'));
        method.type = new bare.createInstance(any,null,method);
        let function : any = ElementFactory.functionElement('f');
        function.enclosingElement = method;
        function.typeParameters = ElementFactory.typeParameters(new core.DartList.literal('U'));
        function.returnType = op(Op.INDEX,function.typeParameters,0).type;
        function.type = new bare.createInstance(any,null,function);
        let inheritedParameters : core.DartList<any> = new core.DartList.literal<any>();
        inheritedParameters.addAll(method.typeParameters);
        inheritedParameters.addAll(classElement.typeParameters);
        expect(function.type.typeArguments,unorderedEquals(this._toTypes(inheritedParameters)));
        expect(function.type.typeFormals,unorderedEquals(function.typeParameters));
        expect(function.type.typeParameters,unorderedEquals(inheritedParameters));
    }
    test_typeParameters_genericMethod_genericClass() : void {
        let classElement : any = ElementFactory.classElement('C',null,new core.DartList.literal('S'));
        let method : any = new bare.createInstance(any,null,'m',0);
        method.enclosingElement = classElement;
        method.returnType = ElementFactory.objectType;
        method.typeParameters = ElementFactory.typeParameters(new core.DartList.literal('T'));
        method.type = new bare.createInstance(any,null,method);
        expect(method.type.typeArguments,unorderedEquals(this._toTypes(classElement.typeParameters)));
        expect(method.type.typeFormals,unorderedEquals(method.typeParameters));
        expect(method.type.typeParameters,unorderedEquals(classElement.typeParameters));
    }
    test_typeParameters_genericMethod_simpleClass() : void {
        let classElement : any = ElementFactory.classElement2('C');
        let method : any = new bare.createInstance(any,null,'m',0);
        method.enclosingElement = classElement;
        method.returnType = ElementFactory.objectType;
        method.typeParameters = ElementFactory.typeParameters(new core.DartList.literal('T'));
        method.type = new bare.createInstance(any,null,method);
        expect(method.type.typeArguments,unorderedEquals(this._toTypes(classElement.typeParameters)));
        expect(method.type.typeFormals,unorderedEquals(method.typeParameters));
        expect(method.type.typeParameters,unorderedEquals(classElement.typeParameters));
    }
    test_typeParameters_genericTopLevelFunction() : void {
        let function : any = ElementFactory.functionElement('f');
        function.returnType = ElementFactory.objectType;
        function.typeParameters = ElementFactory.typeParameters(new core.DartList.literal('T'));
        function.type = new bare.createInstance(any,null,function);
        expect(function.type.typeArguments,isEmpty);
        expect(function.type.typeFormals,unorderedEquals(function.typeParameters));
        expect(function.type.typeParameters,isEmpty);
    }
    test_typeParameters_simpleMethod_genericClass() : void {
        let classElement : any = ElementFactory.classElement('C',null,new core.DartList.literal('S'));
        let method : any = new bare.createInstance(any,null,'m',0);
        method.enclosingElement = classElement;
        method.typeParameters = ElementFactory.typeParameters(new core.DartList.literal('T'));
        method.returnType = ElementFactory.objectType;
        method.type = new bare.createInstance(any,null,method);
        expect(method.type.typeArguments,unorderedEquals(this._toTypes(classElement.typeParameters)));
        expect(method.type.typeFormals,unorderedEquals(method.typeParameters));
        expect(method.type.typeParameters,unorderedEquals(classElement.typeParameters));
    }
    test_typeParameters_simpleMethod_simpleClass() : void {
        let classElement : any = ElementFactory.classElement2('C');
        let method : any = new bare.createInstance(any,null,'m',0);
        method.enclosingElement = classElement;
        method.typeParameters = ElementFactory.typeParameters(new core.DartList.literal('T'));
        method.returnType = ElementFactory.objectType;
        method.type = new bare.createInstance(any,null,method);
        expect(method.type.typeArguments,unorderedEquals(this._toTypes(classElement.typeParameters)));
        expect(method.type.typeFormals,unorderedEquals(method.typeParameters));
        expect(method.type.typeParameters,unorderedEquals(classElement.typeParameters));
    }
    test_withTypeArguments() : void {
        let enclosingClass : any = ElementFactory.classElement2("C",new core.DartList.literal("E"));
        let methodElement : any = new bare.createInstance(any,null,AstTestFactory.identifier3("m"));
        enclosingClass.methods = new core.DartList.literal<any>(methodElement);
        let type : any = new bare.createInstance(any,null,methodElement);
        let expectedType : any = op(Op.INDEX,enclosingClass.typeParameters,0).type;
        let arguments : core.DartList<any> = type.typeArguments;
        expect(arguments,hasLength(1));
        expect(arguments[0],expectedType);
    }
    _toTypes(typeParameters : core.DartList<any>) : core.DartIterable<any> {
        return typeParameters.map((element : any) =>  {
            return element.type;
        });
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    FunctionTypeImplTest() {
    }
}

export namespace InterfaceTypeImplTest {
    export type Constructors = lib3.EngineTestCase.Constructors | 'InterfaceTypeImplTest';
    export type Interface = Omit<InterfaceTypeImplTest, Constructors>;
}
@DartClass
export class InterfaceTypeImplTest extends lib3.EngineTestCase {
    _typeProvider : any;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    setUp() : void {
        super.setUp();
        this._typeProvider = new bare.createInstance(any,null);
    }
    test_computeLongestInheritancePathToObject_multipleInterfacePaths() : void {
        let classA : any = ElementFactory.classElement2("A");
        let classB : any = ElementFactory.classElement2("B");
        let classC : any = ElementFactory.classElement2("C");
        let classD : any = ElementFactory.classElement2("D");
        let classE : any = ElementFactory.classElement2("E");
        classB.interfaces = new core.DartList.literal<any>(classA.type);
        classC.interfaces = new core.DartList.literal<any>(classA.type);
        classD.interfaces = new core.DartList.literal<any>(classC.type);
        classE.interfaces = new core.DartList.literal<any>(classB.type,classD.type);
        expect(InterfaceTypeImpl.computeLongestInheritancePathToObject(classB.type),2);
        expect(InterfaceTypeImpl.computeLongestInheritancePathToObject(classE.type),4);
    }
    test_computeLongestInheritancePathToObject_multipleSuperclassPaths() : void {
        let classA : any = ElementFactory.classElement2("A");
        let classB : any = ElementFactory.classElement("B",classA.type);
        let classC : any = ElementFactory.classElement("C",classA.type);
        let classD : any = ElementFactory.classElement("D",classC.type);
        let classE : any = ElementFactory.classElement("E",classB.type);
        classE.interfaces = new core.DartList.literal<any>(classD.type);
        expect(InterfaceTypeImpl.computeLongestInheritancePathToObject(classB.type),2);
        expect(InterfaceTypeImpl.computeLongestInheritancePathToObject(classE.type),4);
    }
    test_computeLongestInheritancePathToObject_object() : void {
        let classA : any = ElementFactory.classElement2("A");
        let object : any = classA.supertype;
        expect(InterfaceTypeImpl.computeLongestInheritancePathToObject(object),0);
    }
    test_computeLongestInheritancePathToObject_recursion() : void {
        let classA : any = ElementFactory.classElement2("A");
        let classB : any = ElementFactory.classElement("B",classA.type);
        classA.supertype = classB.type;
        expect(InterfaceTypeImpl.computeLongestInheritancePathToObject(classA.type),2);
    }
    test_computeLongestInheritancePathToObject_singleInterfacePath() : void {
        let classA : any = ElementFactory.classElement2("A");
        let classB : any = ElementFactory.classElement2("B");
        let classC : any = ElementFactory.classElement2("C");
        classB.interfaces = new core.DartList.literal<any>(classA.type);
        classC.interfaces = new core.DartList.literal<any>(classB.type);
        expect(InterfaceTypeImpl.computeLongestInheritancePathToObject(classA.type),1);
        expect(InterfaceTypeImpl.computeLongestInheritancePathToObject(classB.type),2);
        expect(InterfaceTypeImpl.computeLongestInheritancePathToObject(classC.type),3);
    }
    test_computeLongestInheritancePathToObject_singleSuperclassPath() : void {
        let classA : any = ElementFactory.classElement2("A");
        let classB : any = ElementFactory.classElement("B",classA.type);
        let classC : any = ElementFactory.classElement("C",classB.type);
        expect(InterfaceTypeImpl.computeLongestInheritancePathToObject(classA.type),1);
        expect(InterfaceTypeImpl.computeLongestInheritancePathToObject(classB.type),2);
        expect(InterfaceTypeImpl.computeLongestInheritancePathToObject(classC.type),3);
    }
    test_computeSuperinterfaceSet_genericInterfacePath() : void {
        let classA : any = ElementFactory.classElement2("A");
        let classB : any = ElementFactory.classElement2("B",new core.DartList.literal("T"));
        let classC : any = ElementFactory.classElement2("C",new core.DartList.literal("T"));
        let classD : any = ElementFactory.classElement2("D");
        let typeA : any = classA.type;
        classB.interfaces = new core.DartList.literal<any>(typeA);
        let typeBT : any = new bare.createInstance(any,null,classB);
        let typeT : any = op(Op.INDEX,classC.type.typeArguments,0);
        typeBT.typeArguments = new core.DartList.literal<any>(typeT);
        classC.interfaces = new core.DartList.literal<any>(typeBT);
        let superinterfacesOfA : core.DartSet<any> = InterfaceTypeImpl.computeSuperinterfaceSet(typeA);
        expect(superinterfacesOfA,hasLength(1));
        let typeObject : any = ElementFactory.object.type;
        expect(superinterfacesOfA.contains(typeObject),isTrue);
        let typeBD : any = new bare.createInstance(any,null,classB);
        typeBD.typeArguments = new core.DartList.literal<any>(classD.type);
        let superinterfacesOfBD : core.DartSet<any> = InterfaceTypeImpl.computeSuperinterfaceSet(typeBD);
        expect(superinterfacesOfBD,hasLength(2));
        expect(superinterfacesOfBD.contains(typeObject),isTrue);
        expect(superinterfacesOfBD.contains(typeA),isTrue);
        let typeCD : any = new bare.createInstance(any,null,classC);
        typeCD.typeArguments = new core.DartList.literal<any>(classD.type);
        let superinterfacesOfCD : core.DartSet<any> = InterfaceTypeImpl.computeSuperinterfaceSet(typeCD);
        expect(superinterfacesOfCD,hasLength(3));
        expect(superinterfacesOfCD.contains(typeObject),isTrue);
        expect(superinterfacesOfCD.contains(typeA),isTrue);
        expect(superinterfacesOfCD.contains(typeBD),isTrue);
    }
    test_computeSuperinterfaceSet_genericSuperclassPath() : void {
        let classA : any = ElementFactory.classElement2("A");
        let typeA : any = classA.type;
        let classB : any = ElementFactory.classElement("B",typeA,new core.DartList.literal("T"));
        let classC : any = ElementFactory.classElement2("C",new core.DartList.literal("T"));
        let typeBT : any = new bare.createInstance(any,null,classB);
        let typeT : any = op(Op.INDEX,classC.type.typeArguments,0);
        typeBT.typeArguments = new core.DartList.literal<any>(typeT);
        classC.supertype = typeBT;
        let classD : any = ElementFactory.classElement2("D");
        let superinterfacesOfA : core.DartSet<any> = InterfaceTypeImpl.computeSuperinterfaceSet(typeA);
        expect(superinterfacesOfA,hasLength(1));
        let typeObject : any = ElementFactory.object.type;
        expect(superinterfacesOfA.contains(typeObject),isTrue);
        let typeBD : any = new bare.createInstance(any,null,classB);
        typeBD.typeArguments = new core.DartList.literal<any>(classD.type);
        let superinterfacesOfBD : core.DartSet<any> = InterfaceTypeImpl.computeSuperinterfaceSet(typeBD);
        expect(superinterfacesOfBD,hasLength(2));
        expect(superinterfacesOfBD.contains(typeObject),isTrue);
        expect(superinterfacesOfBD.contains(typeA),isTrue);
        let typeCD : any = new bare.createInstance(any,null,classC);
        typeCD.typeArguments = new core.DartList.literal<any>(classD.type);
        let superinterfacesOfCD : core.DartSet<any> = InterfaceTypeImpl.computeSuperinterfaceSet(typeCD);
        expect(superinterfacesOfCD,hasLength(3));
        expect(superinterfacesOfCD.contains(typeObject),isTrue);
        expect(superinterfacesOfCD.contains(typeA),isTrue);
        expect(superinterfacesOfCD.contains(typeBD),isTrue);
    }
    test_computeSuperinterfaceSet_multipleInterfacePaths() : void {
        let classA : any = ElementFactory.classElement2("A");
        let classB : any = ElementFactory.classElement2("B");
        let classC : any = ElementFactory.classElement2("C");
        let classD : any = ElementFactory.classElement2("D");
        let classE : any = ElementFactory.classElement2("E");
        classB.interfaces = new core.DartList.literal<any>(classA.type);
        classC.interfaces = new core.DartList.literal<any>(classA.type);
        classD.interfaces = new core.DartList.literal<any>(classC.type);
        classE.interfaces = new core.DartList.literal<any>(classB.type,classD.type);
        let superinterfacesOfD : core.DartSet<any> = InterfaceTypeImpl.computeSuperinterfaceSet(classD.type);
        expect(superinterfacesOfD,hasLength(3));
        expect(superinterfacesOfD.contains(ElementFactory.object.type),isTrue);
        expect(superinterfacesOfD.contains(classA.type),isTrue);
        expect(superinterfacesOfD.contains(classC.type),isTrue);
        let superinterfacesOfE : core.DartSet<any> = InterfaceTypeImpl.computeSuperinterfaceSet(classE.type);
        expect(superinterfacesOfE,hasLength(5));
        expect(superinterfacesOfE.contains(ElementFactory.object.type),isTrue);
        expect(superinterfacesOfE.contains(classA.type),isTrue);
        expect(superinterfacesOfE.contains(classB.type),isTrue);
        expect(superinterfacesOfE.contains(classC.type),isTrue);
        expect(superinterfacesOfE.contains(classD.type),isTrue);
    }
    test_computeSuperinterfaceSet_multipleSuperclassPaths() : void {
        let classA : any = ElementFactory.classElement2("A");
        let classB : any = ElementFactory.classElement("B",classA.type);
        let classC : any = ElementFactory.classElement("C",classA.type);
        let classD : any = ElementFactory.classElement("D",classC.type);
        let classE : any = ElementFactory.classElement("E",classB.type);
        classE.interfaces = new core.DartList.literal<any>(classD.type);
        let superinterfacesOfD : core.DartSet<any> = InterfaceTypeImpl.computeSuperinterfaceSet(classD.type);
        expect(superinterfacesOfD,hasLength(3));
        expect(superinterfacesOfD.contains(ElementFactory.object.type),isTrue);
        expect(superinterfacesOfD.contains(classA.type),isTrue);
        expect(superinterfacesOfD.contains(classC.type),isTrue);
        let superinterfacesOfE : core.DartSet<any> = InterfaceTypeImpl.computeSuperinterfaceSet(classE.type);
        expect(superinterfacesOfE,hasLength(5));
        expect(superinterfacesOfE.contains(ElementFactory.object.type),isTrue);
        expect(superinterfacesOfE.contains(classA.type),isTrue);
        expect(superinterfacesOfE.contains(classB.type),isTrue);
        expect(superinterfacesOfE.contains(classC.type),isTrue);
        expect(superinterfacesOfE.contains(classD.type),isTrue);
    }
    test_computeSuperinterfaceSet_recursion() : void {
        let classA : any = ElementFactory.classElement2("A");
        let classB : any = ElementFactory.classElement("B",classA.type);
        classA.supertype = classB.type;
        let superinterfacesOfB : core.DartSet<any> = InterfaceTypeImpl.computeSuperinterfaceSet(classB.type);
        expect(superinterfacesOfB,hasLength(2));
    }
    test_computeSuperinterfaceSet_singleInterfacePath() : void {
        let classA : any = ElementFactory.classElement2("A");
        let classB : any = ElementFactory.classElement2("B");
        let classC : any = ElementFactory.classElement2("C");
        classB.interfaces = new core.DartList.literal<any>(classA.type);
        classC.interfaces = new core.DartList.literal<any>(classB.type);
        let superinterfacesOfA : core.DartSet<any> = InterfaceTypeImpl.computeSuperinterfaceSet(classA.type);
        expect(superinterfacesOfA,hasLength(1));
        expect(superinterfacesOfA.contains(ElementFactory.object.type),isTrue);
        let superinterfacesOfB : core.DartSet<any> = InterfaceTypeImpl.computeSuperinterfaceSet(classB.type);
        expect(superinterfacesOfB,hasLength(2));
        expect(superinterfacesOfB.contains(ElementFactory.object.type),isTrue);
        expect(superinterfacesOfB.contains(classA.type),isTrue);
        let superinterfacesOfC : core.DartSet<any> = InterfaceTypeImpl.computeSuperinterfaceSet(classC.type);
        expect(superinterfacesOfC,hasLength(3));
        expect(superinterfacesOfC.contains(ElementFactory.object.type),isTrue);
        expect(superinterfacesOfC.contains(classA.type),isTrue);
        expect(superinterfacesOfC.contains(classB.type),isTrue);
    }
    test_computeSuperinterfaceSet_singleSuperclassPath() : void {
        let classA : any = ElementFactory.classElement2("A");
        let classB : any = ElementFactory.classElement("B",classA.type);
        let classC : any = ElementFactory.classElement("C",classB.type);
        let superinterfacesOfA : core.DartSet<any> = InterfaceTypeImpl.computeSuperinterfaceSet(classA.type);
        expect(superinterfacesOfA,hasLength(1));
        expect(superinterfacesOfA.contains(ElementFactory.object.type),isTrue);
        let superinterfacesOfB : core.DartSet<any> = InterfaceTypeImpl.computeSuperinterfaceSet(classB.type);
        expect(superinterfacesOfB,hasLength(2));
        expect(superinterfacesOfB.contains(ElementFactory.object.type),isTrue);
        expect(superinterfacesOfB.contains(classA.type),isTrue);
        let superinterfacesOfC : core.DartSet<any> = InterfaceTypeImpl.computeSuperinterfaceSet(classC.type);
        expect(superinterfacesOfC,hasLength(3));
        expect(superinterfacesOfC.contains(ElementFactory.object.type),isTrue);
        expect(superinterfacesOfC.contains(classA.type),isTrue);
        expect(superinterfacesOfC.contains(classB.type),isTrue);
    }
    test_creation() : void {
        expect(new bare.createInstance(any,null,ElementFactory.classElement2("A")),isNotNull);
    }
    test_getAccessors() : void {
        let typeElement : any = ElementFactory.classElement2("A");
        let getterG : any = ElementFactory.getterElement("g",false,null);
        let getterH : any = ElementFactory.getterElement("h",false,null);
        typeElement.accessors = new core.DartList.literal<any>(getterG,getterH);
        let type : any = new bare.createInstance(any,null,typeElement);
        expect(type.accessors.length,2);
    }
    test_getAccessors_empty() : void {
        let typeElement : any = ElementFactory.classElement2("A");
        let type : any = new bare.createInstance(any,null,typeElement);
        expect(type.accessors.length,0);
    }
    test_getConstructors() : void {
        let typeElement : any = ElementFactory.classElement2("A");
        let constructorOne : any = ElementFactory.constructorElement(typeElement,'one',false);
        let constructorTwo : any = ElementFactory.constructorElement(typeElement,'two',false);
        typeElement.constructors = new core.DartList.literal<any>(constructorOne,constructorTwo);
        let type : any = new bare.createInstance(any,null,typeElement);
        expect(type.constructors,hasLength(2));
    }
    test_getConstructors_empty() : void {
        let typeElement : any = ElementFactory.classElement2("A");
        typeElement.constructors = ConstructorElement.EMPTY_LIST;
        let type : any = new bare.createInstance(any,null,typeElement);
        expect(type.constructors,isEmpty);
    }
    test_getElement() : void {
        let typeElement : any = ElementFactory.classElement2("A");
        let type : any = new bare.createInstance(any,null,typeElement);
        expect(type.element,typeElement);
    }
    test_getGetter_implemented() : void {
        let classA : any = ElementFactory.classElement2("A");
        let getterName : string = "g";
        let getterG : any = ElementFactory.getterElement(getterName,false,null);
        classA.accessors = new core.DartList.literal<any>(getterG);
        let typeA : any = classA.type;
        expect(typeA.getGetter(getterName),same(getterG));
    }
    test_getGetter_parameterized() : void {
        let classA : any = ElementFactory.classElement2("A",new core.DartList.literal("E"));
        let typeE : any = op(Op.INDEX,classA.type.typeArguments,0);
        let getterName : string = "g";
        let getterG : any = ElementFactory.getterElement(getterName,false,typeE);
        classA.accessors = new core.DartList.literal<any>(getterG);
        getterG.type = new bare.createInstance(any,null,getterG);
        let typeI : any = ElementFactory.classElement2("I").type;
        let typeAI : any = new bare.createInstance(any,null,classA);
        typeAI.typeArguments = new core.DartList.literal<any>(typeI);
        let getter : any = typeAI.getGetter(getterName);
        expect(getter,isNotNull);
        let getterType : any = getter.type;
        expect(getterType.returnType,same(typeI));
    }
    test_getGetter_unimplemented() : void {
        let classA : any = ElementFactory.classElement2("A");
        let typeA : any = classA.type;
        expect(typeA.getGetter("g"),isNull);
    }
    test_getInterfaces_nonParameterized() : void {
        let classA : any = ElementFactory.classElement2("A");
        let typeA : any = classA.type;
        let classB : any = ElementFactory.classElement2("B");
        let typeB : any = classB.type;
        let classC : any = ElementFactory.classElement2("C");
        classC.interfaces = new core.DartList.literal<any>(typeA,typeB);
        let interfaces : core.DartList<any> = classC.type.interfaces;
        expect(interfaces,hasLength(2));
        if (core.identical(interfaces[0],typeA)) {
            expect(interfaces[1],same(typeB));
        }else {
            expect(interfaces[0],same(typeB));
            expect(interfaces[1],same(typeA));
        }
    }
    test_getInterfaces_parameterized() : void {
        let classA : any = ElementFactory.classElement2("A",new core.DartList.literal("E"));
        let classB : any = ElementFactory.classElement2("B",new core.DartList.literal("F"));
        let typeB : any = classB.type;
        let typeAF : any = new bare.createInstance(any,null,classA);
        typeAF.typeArguments = new core.DartList.literal<any>(op(Op.INDEX,typeB.typeArguments,0));
        classB.interfaces = new core.DartList.literal<any>(typeAF);
        let typeI : any = ElementFactory.classElement2("I").type;
        let typeBI : any = new bare.createInstance(any,null,classB);
        typeBI.typeArguments = new core.DartList.literal<any>(typeI);
        let interfaces : core.DartList<any> = typeBI.interfaces;
        expect(interfaces,hasLength(1));
        let result : any = interfaces[0];
        expect(result.element,same(classA));
        expect(op(Op.INDEX,result.typeArguments,0),same(typeI));
    }
    test_getMethod_implemented() : void {
        let classA : any = ElementFactory.classElement2("A");
        let methodName : string = "m";
        let methodM : any = ElementFactory.methodElement(methodName,null);
        classA.methods = new core.DartList.literal<any>(methodM);
        let typeA : any = classA.type;
        expect(typeA.getMethod(methodName),same(methodM));
    }
    test_getMethod_parameterized_doesNotUseTypeParameter() : void {
        let classA : any = ElementFactory.classElement2("A",new core.DartList.literal("E"));
        let typeB : any = ElementFactory.classElement2("B").type;
        let typeE : any = op(Op.INDEX,classA.type.typeArguments,0);
        let methodName : string = "m";
        let methodM : any = ElementFactory.methodElement(methodName,typeB,new core.DartList.literal());
        classA.methods = new core.DartList.literal<any>(methodM);
        methodM.type = new bare.createInstance(any,null,methodM);
        let typeI : any = ElementFactory.classElement2("I").type;
        let typeAI : any = new bare.createInstance(any,null,classA);
        typeAI.typeArguments = new core.DartList.literal<any>(typeI);
        let method : any = typeAI.getMethod(methodName);
        expect(method,isNotNull);
        let methodType : any = method.type;
        expect(methodType.typeParameters,new core.DartList.literal(same(typeE.element)));
        expect(methodType.typeArguments,new core.DartList.literal(same(typeI)));
    }
    test_getMethod_parameterized_flushCached_whenVersionChanges() : void {
        let classA : any = ElementFactory.classElement2("A",new core.DartList.literal("E"));
        let typeE : any = op(Op.INDEX,classA.type.typeArguments,0);
        let methodName : string = "m";
        let methodM : any = ElementFactory.methodElement(methodName,typeE,new core.DartList.literal(typeE));
        classA.methods = new core.DartList.literal<any>(methodM);
        methodM.type = new bare.createInstance(any,null,methodM);
        let typeI : any = ElementFactory.classElement2("I").type;
        let typeAI : any = new bare.createInstance(any,null,classA);
        typeAI.typeArguments = new core.DartList.literal<any>(typeI);
        let method : any = typeAI.methods.single;
        expect(typeAI.methods.single,same(method));
        classA.version++;
        expect(typeAI.methods.single,isNot(same(method)));
    }
    test_getMethod_parameterized_usesTypeParameter() : void {
        let classA : any = ElementFactory.classElement2("A",new core.DartList.literal("E"));
        let typeE : any = op(Op.INDEX,classA.type.typeArguments,0);
        let methodName : string = "m";
        let methodM : any = ElementFactory.methodElement(methodName,typeE,new core.DartList.literal(typeE));
        classA.methods = new core.DartList.literal<any>(methodM);
        methodM.type = new bare.createInstance(any,null,methodM);
        let typeI : any = ElementFactory.classElement2("I").type;
        let typeAI : any = new bare.createInstance(any,null,classA);
        typeAI.typeArguments = new core.DartList.literal<any>(typeI);
        let method : any = typeAI.getMethod(methodName);
        expect(method,isNotNull);
        let methodType : any = method.type;
        expect(methodType.typeParameters,new core.DartList.literal(same(typeE.element)));
        expect(methodType.typeArguments,new core.DartList.literal(same(typeI)));
        expect(methodType.returnType,same(typeI));
        let parameterTypes : core.DartList<any> = methodType.normalParameterTypes;
        expect(parameterTypes,hasLength(1));
        expect(parameterTypes[0],same(typeI));
    }
    test_getMethod_unimplemented() : void {
        let classA : any = ElementFactory.classElement2("A");
        let typeA : any = classA.type;
        expect(typeA.getMethod("m"),isNull);
    }
    test_getMethods() : void {
        let typeElement : any = ElementFactory.classElement2("A");
        let methodOne : any = ElementFactory.methodElement("one",null);
        let methodTwo : any = ElementFactory.methodElement("two",null);
        typeElement.methods = new core.DartList.literal<any>(methodOne,methodTwo);
        let type : any = new bare.createInstance(any,null,typeElement);
        expect(type.methods.length,2);
    }
    test_getMethods_empty() : void {
        let typeElement : any = ElementFactory.classElement2("A");
        let type : any = new bare.createInstance(any,null,typeElement);
        expect(type.methods.length,0);
    }
    test_getMixins_nonParameterized() : void {
        let classA : any = ElementFactory.classElement2("A");
        let typeA : any = classA.type;
        let classB : any = ElementFactory.classElement2("B");
        let typeB : any = classB.type;
        let classC : any = ElementFactory.classElement2("C");
        classC.mixins = new core.DartList.literal<any>(typeA,typeB);
        let interfaces : core.DartList<any> = classC.type.mixins;
        expect(interfaces,hasLength(2));
        if (core.identical(interfaces[0],typeA)) {
            expect(interfaces[1],same(typeB));
        }else {
            expect(interfaces[0],same(typeB));
            expect(interfaces[1],same(typeA));
        }
    }
    test_getMixins_parameterized() : void {
        let classA : any = ElementFactory.classElement2("A",new core.DartList.literal("E"));
        let classB : any = ElementFactory.classElement2("B",new core.DartList.literal("F"));
        let typeB : any = classB.type;
        let typeAF : any = new bare.createInstance(any,null,classA);
        typeAF.typeArguments = new core.DartList.literal<any>(op(Op.INDEX,typeB.typeArguments,0));
        classB.mixins = new core.DartList.literal<any>(typeAF);
        let typeI : any = ElementFactory.classElement2("I").type;
        let typeBI : any = new bare.createInstance(any,null,classB);
        typeBI.typeArguments = new core.DartList.literal<any>(typeI);
        let interfaces : core.DartList<any> = typeBI.mixins;
        expect(interfaces,hasLength(1));
        let result : any = interfaces[0];
        expect(result.element,same(classA));
        expect(op(Op.INDEX,result.typeArguments,0),same(typeI));
    }
    test_getSetter_implemented() : void {
        let classA : any = ElementFactory.classElement2("A");
        let setterName : string = "s";
        let setterS : any = ElementFactory.setterElement(setterName,false,null);
        classA.accessors = new core.DartList.literal<any>(setterS);
        let typeA : any = classA.type;
        expect(typeA.getSetter(setterName),same(setterS));
    }
    test_getSetter_parameterized() : void {
        let classA : any = ElementFactory.classElement2("A",new core.DartList.literal("E"));
        let typeE : any = op(Op.INDEX,classA.type.typeArguments,0);
        let setterName : string = "s";
        let setterS : any = ElementFactory.setterElement(setterName,false,typeE);
        classA.accessors = new core.DartList.literal<any>(setterS);
        setterS.type = new bare.createInstance(any,null,setterS);
        let typeI : any = ElementFactory.classElement2("I").type;
        let typeAI : any = new bare.createInstance(any,null,classA);
        typeAI.typeArguments = new core.DartList.literal<any>(typeI);
        let setter : any = typeAI.getSetter(setterName);
        expect(setter,isNotNull);
        let setterType : any = setter.type;
        let parameterTypes : core.DartList<any> = setterType.normalParameterTypes;
        expect(parameterTypes,hasLength(1));
        expect(parameterTypes[0],same(typeI));
    }
    test_getSetter_unimplemented() : void {
        let classA : any = ElementFactory.classElement2("A");
        let typeA : any = classA.type;
        expect(typeA.getSetter("s"),isNull);
    }
    test_getSuperclass_nonParameterized() : void {
        let classA : any = ElementFactory.classElement2("A");
        let typeA : any = classA.type;
        let classB : any = ElementFactory.classElement("B",typeA);
        let typeB : any = classB.type;
        expect(typeB.superclass,same(typeA));
    }
    test_getSuperclass_parameterized() : void {
        let classA : any = ElementFactory.classElement2("A",new core.DartList.literal("E"));
        let classB : any = ElementFactory.classElement2("B",new core.DartList.literal("F"));
        let typeB : any = classB.type;
        let typeAF : any = new bare.createInstance(any,null,classA);
        typeAF.typeArguments = new core.DartList.literal<any>(op(Op.INDEX,typeB.typeArguments,0));
        classB.supertype = typeAF;
        let typeI : any = ElementFactory.classElement2("I").type;
        let typeBI : any = new bare.createInstance(any,null,classB);
        typeBI.typeArguments = new core.DartList.literal<any>(typeI);
        let superclass : any = typeBI.superclass;
        expect(superclass.element,same(classA));
        expect(op(Op.INDEX,superclass.typeArguments,0),same(typeI));
    }
    test_getTypeArguments_empty() : void {
        let type : any = ElementFactory.classElement2("A").type;
        expect(type.typeArguments,hasLength(0));
    }
    test_hashCode() : void {
        let classA : any = ElementFactory.classElement2("A");
        let typeA : any = classA.type;
        expect(0 == typeA.hashCode,isFalse);
    }
    test_isAssignableTo_typeVariables() : void {
        let classA : any = ElementFactory.classElement2("A",new core.DartList.literal("E"));
        let classB : any = ElementFactory.classElement2("B",new core.DartList.literal("F","G"));
        let typeAF : any = new bare.createInstance(any,null,classA);
        typeAF.typeArguments = new core.DartList.literal<any>(op(Op.INDEX,classB.typeParameters,0).type);
        let typeAG : any = new bare.createInstance(any,null,classA);
        typeAG.typeArguments = new core.DartList.literal<any>(op(Op.INDEX,classB.typeParameters,1).type);
        expect(typeAG.isAssignableTo(typeAF),isFalse);
    }
    test_isAssignableTo_void() : void {
        let intType : any = this._typeProvider.intType;
        expect(VoidTypeImpl.instance.isAssignableTo(intType),isFalse);
    }
    test_isDirectSupertypeOf_extends() : void {
        let classA : any = ElementFactory.classElement2("A");
        let classB : any = ElementFactory.classElement("B",classA.type);
        let typeA : any = classA.type;
        let typeB : any = classB.type;
        expect(typeA.isDirectSupertypeOf(typeB),isTrue);
    }
    test_isDirectSupertypeOf_false() : void {
        let classA : any = ElementFactory.classElement2("A");
        let classB : any = ElementFactory.classElement2("B");
        let classC : any = ElementFactory.classElement("C",classB.type);
        let typeA : any = classA.type;
        let typeC : any = classC.type;
        expect(typeA.isDirectSupertypeOf(typeC),isFalse);
    }
    test_isDirectSupertypeOf_implements() : void {
        let classA : any = ElementFactory.classElement2("A");
        let classB : any = ElementFactory.classElement2("B");
        let typeA : any = classA.type;
        let typeB : any = classB.type;
        classB.interfaces = new core.DartList.literal<any>(typeA);
        expect(typeA.isDirectSupertypeOf(typeB),isTrue);
    }
    test_isDirectSupertypeOf_with() : void {
        let classA : any = ElementFactory.classElement2("A");
        let classB : any = ElementFactory.classElement2("B");
        let typeA : any = classA.type;
        let typeB : any = classB.type;
        classB.mixins = new core.DartList.literal<any>(typeA);
        expect(typeA.isDirectSupertypeOf(typeB),isTrue);
    }
    test_isMoreSpecificThan_bottom() : void {
        let type : any = ElementFactory.classElement2("A").type;
        expect(BottomTypeImpl.instance.isMoreSpecificThan(type),isTrue);
    }
    test_isMoreSpecificThan_covariance() : void {
        let classA : any = ElementFactory.classElement2("A",new core.DartList.literal("E"));
        let classI : any = ElementFactory.classElement2("I");
        let classJ : any = ElementFactory.classElement("J",classI.type);
        let typeAI : any = new bare.createInstance(any,null,classA);
        let typeAJ : any = new bare.createInstance(any,null,classA);
        typeAI.typeArguments = new core.DartList.literal<any>(classI.type);
        typeAJ.typeArguments = new core.DartList.literal<any>(classJ.type);
        expect(typeAJ.isMoreSpecificThan(typeAI),isTrue);
        expect(typeAI.isMoreSpecificThan(typeAJ),isFalse);
    }
    test_isMoreSpecificThan_directSupertype() : void {
        let classA : any = ElementFactory.classElement2("A");
        let classB : any = ElementFactory.classElement("B",classA.type);
        let typeA : any = classA.type;
        let typeB : any = classB.type;
        expect(typeB.isMoreSpecificThan(typeA),isTrue);
        expect(typeA.isMoreSpecificThan(typeB),isFalse);
    }
    test_isMoreSpecificThan_dynamic() : void {
        let type : any = ElementFactory.classElement2("A").type;
        expect(type.isMoreSpecificThan(DynamicTypeImpl.instance),isTrue);
    }
    test_isMoreSpecificThan_generic() : void {
        let classA : any = ElementFactory.classElement2("A",new core.DartList.literal("E"));
        let classB : any = ElementFactory.classElement2("B");
        let dynamicType : any = DynamicTypeImpl.instance;
        let typeAOfDynamic : any = classA.type.instantiate(new core.DartList.literal<any>(dynamicType));
        let typeAOfB : any = classA.type.instantiate(new core.DartList.literal<any>(classB.type));
        expect(typeAOfDynamic.isMoreSpecificThan(typeAOfB),isFalse);
        expect(typeAOfB.isMoreSpecificThan(typeAOfDynamic),isTrue);
    }
    test_isMoreSpecificThan_self() : void {
        let type : any = ElementFactory.classElement2("A").type;
        expect(type.isMoreSpecificThan(type),isTrue);
    }
    test_isMoreSpecificThan_transitive_interface() : void {
        let classA : any = ElementFactory.classElement2("A");
        let classB : any = ElementFactory.classElement("B",classA.type);
        let classC : any = ElementFactory.classElement2("C");
        classC.interfaces = new core.DartList.literal<any>(classB.type);
        let typeA : any = classA.type;
        let typeC : any = classC.type;
        expect(typeC.isMoreSpecificThan(typeA),isTrue);
    }
    test_isMoreSpecificThan_transitive_mixin() : void {
        let classA : any = ElementFactory.classElement2("A");
        let classB : any = ElementFactory.classElement("B",classA.type);
        let classC : any = ElementFactory.classElement2("C");
        classC.mixins = new core.DartList.literal<any>(classB.type);
        let typeA : any = classA.type;
        let typeC : any = classC.type;
        expect(typeC.isMoreSpecificThan(typeA),isTrue);
    }
    test_isMoreSpecificThan_transitive_recursive() : void {
        let classA : any = ElementFactory.classElement2("A");
        let classB : any = ElementFactory.classElement("B",classA.type);
        let classC : any = ElementFactory.classElement2("C");
        let typeA : any = classA.type;
        let typeC : any = classC.type;
        classA.supertype = classB.type;
        expect(typeA.isMoreSpecificThan(typeC),isFalse);
    }
    test_isMoreSpecificThan_transitive_superclass() : void {
        let classA : any = ElementFactory.classElement2("A");
        let classB : any = ElementFactory.classElement("B",classA.type);
        let classC : any = ElementFactory.classElement("C",classB.type);
        let typeA : any = classA.type;
        let typeC : any = classC.type;
        expect(typeC.isMoreSpecificThan(typeA),isTrue);
    }
    test_isMoreSpecificThan_typeParameterType() : void {
        let classA : any = ElementFactory.classElement2("A",new core.DartList.literal("E"));
        let typeA : any = classA.type;
        let parameterType : any = op(Op.INDEX,classA.typeParameters,0).type;
        let objectType : any = this._typeProvider.objectType;
        expect(parameterType.isMoreSpecificThan(objectType),isTrue);
        expect(parameterType.isMoreSpecificThan(typeA),isFalse);
    }
    test_isMoreSpecificThan_typeParameterType_withBound() : void {
        let classA : any = ElementFactory.classElement2("A");
        let typeA : any = classA.type;
        let classB : any = ElementFactory.classElement2("B");
        let parameterEA : any = new bare.createInstance(any,null,AstTestFactory.identifier3("E"));
        let parameterAEType : any = new bare.createInstance(any,null,parameterEA);
        parameterEA.bound = typeA;
        parameterEA.type = parameterAEType;
        classB.typeParameters = new core.DartList.literal<any>(parameterEA);
        expect(parameterAEType.isMoreSpecificThan(typeA),isTrue);
    }
    test_isSubtypeOf_directSubtype() : void {
        let classA : any = ElementFactory.classElement2("A");
        let classB : any = ElementFactory.classElement("B",classA.type);
        let typeA : any = classA.type;
        let typeB : any = classB.type;
        expect(typeB.isSubtypeOf(typeA),isTrue);
        expect(typeA.isSubtypeOf(typeB),isFalse);
    }
    test_isSubtypeOf_dynamic() : void {
        let classA : any = ElementFactory.classElement2("A");
        let typeA : any = classA.type;
        let dynamicType : any = DynamicTypeImpl.instance;
        expect(dynamicType.isSubtypeOf(typeA),isTrue);
        expect(typeA.isSubtypeOf(dynamicType),isTrue);
    }
    test_isSubtypeOf_function() : void {
        let stringType : any = this._typeProvider.stringType;
        let classA : any = ElementFactory.classElement2("A");
        classA.methods = new core.DartList.literal<any>(ElementFactory.methodElement("call",VoidTypeImpl.instance,new core.DartList.literal(stringType)));
        let functionType : any = ElementFactory.functionElement5("f",new core.DartList.literal<any>(stringType.element)).type;
        expect(classA.type.isSubtypeOf(functionType),isTrue);
    }
    test_isSubtypeOf_generic() : void {
        let classA : any = ElementFactory.classElement2("A",new core.DartList.literal("E"));
        let classB : any = ElementFactory.classElement2("B");
        let dynamicType : any = DynamicTypeImpl.instance;
        let typeAOfDynamic : any = classA.type.instantiate(new core.DartList.literal<any>(dynamicType));
        let typeAOfB : any = classA.type.instantiate(new core.DartList.literal<any>(classB.type));
        expect(typeAOfDynamic.isSubtypeOf(typeAOfB),isTrue);
        expect(typeAOfB.isSubtypeOf(typeAOfDynamic),isTrue);
    }
    test_isSubtypeOf_interface() : void {
        let classA : any = ElementFactory.classElement2("A");
        let classB : any = ElementFactory.classElement("B",classA.type);
        let classC : any = ElementFactory.classElement2("C");
        let typeObject : any = classA.supertype;
        let typeA : any = classA.type;
        let typeB : any = classB.type;
        let typeC : any = classC.type;
        classC.interfaces = new core.DartList.literal<any>(typeB);
        expect(typeC.isSubtypeOf(typeB),isTrue);
        expect(typeC.isSubtypeOf(typeObject),isTrue);
        expect(typeC.isSubtypeOf(typeA),isTrue);
        expect(typeA.isSubtypeOf(typeC),isFalse);
    }
    test_isSubtypeOf_mixins() : void {
        let classA : any = ElementFactory.classElement2("A");
        let classB : any = ElementFactory.classElement("B",classA.type);
        let classC : any = ElementFactory.classElement2("C");
        let typeObject : any = classA.supertype;
        let typeA : any = classA.type;
        let typeB : any = classB.type;
        let typeC : any = classC.type;
        classC.mixins = new core.DartList.literal<any>(typeB);
        expect(typeC.isSubtypeOf(typeB),isTrue);
        expect(typeC.isSubtypeOf(typeObject),isTrue);
        expect(typeC.isSubtypeOf(typeA),isTrue);
        expect(typeA.isSubtypeOf(typeC),isFalse);
    }
    test_isSubtypeOf_object() : void {
        let classA : any = ElementFactory.classElement2("A");
        let typeA : any = classA.type;
        let typeObject : any = classA.supertype;
        expect(typeA.isSubtypeOf(typeObject),isTrue);
        expect(typeObject.isSubtypeOf(typeA),isFalse);
    }
    test_isSubtypeOf_self() : void {
        let classA : any = ElementFactory.classElement2("A");
        let typeA : any = classA.type;
        expect(typeA.isSubtypeOf(typeA),isTrue);
    }
    test_isSubtypeOf_transitive_recursive() : void {
        let classA : any = ElementFactory.classElement2("A");
        let classB : any = ElementFactory.classElement("B",classA.type);
        let classC : any = ElementFactory.classElement2("C");
        let typeA : any = classA.type;
        let typeC : any = classC.type;
        classA.supertype = classB.type;
        expect(typeA.isSubtypeOf(typeC),isFalse);
    }
    test_isSubtypeOf_transitive_superclass() : void {
        let classA : any = ElementFactory.classElement2("A");
        let classB : any = ElementFactory.classElement("B",classA.type);
        let classC : any = ElementFactory.classElement("C",classB.type);
        let typeA : any = classA.type;
        let typeC : any = classC.type;
        expect(typeC.isSubtypeOf(typeA),isTrue);
        expect(typeA.isSubtypeOf(typeC),isFalse);
    }
    test_isSubtypeOf_typeArguments() : void {
        let dynamicType : any = DynamicTypeImpl.instance;
        let classA : any = ElementFactory.classElement2("A",new core.DartList.literal("E"));
        let classI : any = ElementFactory.classElement2("I");
        let classJ : any = ElementFactory.classElement("J",classI.type);
        let classK : any = ElementFactory.classElement2("K");
        let typeA : any = classA.type;
        let typeA_dynamic : any = typeA.instantiate(new core.DartList.literal<any>(dynamicType));
        let typeAI : any = new bare.createInstance(any,null,classA);
        let typeAJ : any = new bare.createInstance(any,null,classA);
        let typeAK : any = new bare.createInstance(any,null,classA);
        typeAI.typeArguments = new core.DartList.literal<any>(classI.type);
        typeAJ.typeArguments = new core.DartList.literal<any>(classJ.type);
        typeAK.typeArguments = new core.DartList.literal<any>(classK.type);
        expect(typeAJ.isSubtypeOf(typeAI),isTrue);
        expect(typeAI.isSubtypeOf(typeAJ),isFalse);
        expect(typeAI.isSubtypeOf(typeAI),isTrue);
        expect(typeA_dynamic.isSubtypeOf(typeAI),isTrue);
        expect(typeA_dynamic.isSubtypeOf(typeAJ),isTrue);
        expect(typeAI.isSubtypeOf(typeA_dynamic),isTrue);
        expect(typeAJ.isSubtypeOf(typeA_dynamic),isTrue);
        expect(typeAI.isSubtypeOf(typeAK),isFalse);
        expect(typeAK.isSubtypeOf(typeAI),isFalse);
    }
    test_isSubtypeOf_typeParameter() : void {
        let classA : any = ElementFactory.classElement2("A",new core.DartList.literal("E"));
        let typeA : any = classA.type;
        let parameterType : any = op(Op.INDEX,classA.typeParameters,0).type;
        expect(typeA.isSubtypeOf(parameterType),isFalse);
    }
    test_isSupertypeOf_directSupertype() : void {
        let classA : any = ElementFactory.classElement2("A");
        let classB : any = ElementFactory.classElement("B",classA.type);
        let typeA : any = classA.type;
        let typeB : any = classB.type;
        expect(typeB.isSupertypeOf(typeA),isFalse);
        expect(typeA.isSupertypeOf(typeB),isTrue);
    }
    test_isSupertypeOf_dynamic() : void {
        let classA : any = ElementFactory.classElement2("A");
        let typeA : any = classA.type;
        let dynamicType : any = DynamicTypeImpl.instance;
        expect(dynamicType.isSupertypeOf(typeA),isTrue);
        expect(typeA.isSupertypeOf(dynamicType),isTrue);
    }
    test_isSupertypeOf_indirectSupertype() : void {
        let classA : any = ElementFactory.classElement2("A");
        let classB : any = ElementFactory.classElement("B",classA.type);
        let classC : any = ElementFactory.classElement("C",classB.type);
        let typeA : any = classA.type;
        let typeC : any = classC.type;
        expect(typeC.isSupertypeOf(typeA),isFalse);
        expect(typeA.isSupertypeOf(typeC),isTrue);
    }
    test_isSupertypeOf_interface() : void {
        let classA : any = ElementFactory.classElement2("A");
        let classB : any = ElementFactory.classElement("B",classA.type);
        let classC : any = ElementFactory.classElement2("C");
        let typeObject : any = classA.supertype;
        let typeA : any = classA.type;
        let typeB : any = classB.type;
        let typeC : any = classC.type;
        classC.interfaces = new core.DartList.literal<any>(typeB);
        expect(typeB.isSupertypeOf(typeC),isTrue);
        expect(typeObject.isSupertypeOf(typeC),isTrue);
        expect(typeA.isSupertypeOf(typeC),isTrue);
        expect(typeC.isSupertypeOf(typeA),isFalse);
    }
    test_isSupertypeOf_mixins() : void {
        let classA : any = ElementFactory.classElement2("A");
        let classB : any = ElementFactory.classElement("B",classA.type);
        let classC : any = ElementFactory.classElement2("C");
        let typeObject : any = classA.supertype;
        let typeA : any = classA.type;
        let typeB : any = classB.type;
        let typeC : any = classC.type;
        classC.mixins = new core.DartList.literal<any>(typeB);
        expect(typeB.isSupertypeOf(typeC),isTrue);
        expect(typeObject.isSupertypeOf(typeC),isTrue);
        expect(typeA.isSupertypeOf(typeC),isTrue);
        expect(typeC.isSupertypeOf(typeA),isFalse);
    }
    test_isSupertypeOf_object() : void {
        let classA : any = ElementFactory.classElement2("A");
        let typeA : any = classA.type;
        let typeObject : any = classA.supertype;
        expect(typeA.isSupertypeOf(typeObject),isFalse);
        expect(typeObject.isSupertypeOf(typeA),isTrue);
    }
    test_isSupertypeOf_self() : void {
        let classA : any = ElementFactory.classElement2("A");
        let typeA : any = classA.type;
        expect(typeA.isSupertypeOf(typeA),isTrue);
    }
    test_lookUpGetter_implemented() : void {
        let classA : any = ElementFactory.classElement2("A");
        let getterName : string = "g";
        let getterG : any = ElementFactory.getterElement(getterName,false,null);
        classA.accessors = new core.DartList.literal<any>(getterG);
        let typeA : any = classA.type;
        let library : any = ElementFactory.library(this.createAnalysisContext(),"lib");
        let unit : any = library.definingCompilationUnit;
        (unit as any).types = new core.DartList.literal<any>(classA);
        expect(typeA.lookUpGetter(getterName,library),same(getterG));
    }
    test_lookUpGetter_inherited() : void {
        let classA : any = ElementFactory.classElement2("A");
        let getterName : string = "g";
        let getterG : any = ElementFactory.getterElement(getterName,false,null);
        classA.accessors = new core.DartList.literal<any>(getterG);
        let classB : any = ElementFactory.classElement("B",classA.type);
        let typeB : any = classB.type;
        let library : any = ElementFactory.library(this.createAnalysisContext(),"lib");
        let unit : any = library.definingCompilationUnit;
        (unit as any).types = new core.DartList.literal<any>(classA,classB);
        expect(typeB.lookUpGetter(getterName,library),same(getterG));
    }
    test_lookUpGetter_mixin_shadowing() : void {
        let typeProvider : any = new bare.createInstance(any,null);
        let getterName : string = 'g';
        let classB : any = ElementFactory.classElement2('B');
        let classM1 : any = ElementFactory.classElement2('M1');
        let getterM1g : any = ElementFactory.getterElement(getterName,false,typeProvider.dynamicType);
        classM1.accessors = new core.DartList.literal<any>(getterM1g);
        let classM2 : any = ElementFactory.classElement2('M2');
        let getterM2g : any = ElementFactory.getterElement(getterName,false,typeProvider.dynamicType);
        classM2.accessors = new core.DartList.literal<any>(getterM2g);
        let classC : any = ElementFactory.classElement('C',classB.type);
        classC.mixins = new core.DartList.literal<any>(classM1.type,classM2.type);
        let library : any = ElementFactory.library(this.createAnalysisContext(),"lib");
        let unit : any = library.definingCompilationUnit;
        unit.types = new core.DartList.literal<any>(classB,classM1,classM2,classC);
        expect(classC.type.lookUpGetter(getterName,library),getterM2g);
    }
    test_lookUpGetter_recursive() : void {
        let classA : any = ElementFactory.classElement2("A");
        let typeA : any = classA.type;
        let classB : any = ElementFactory.classElement("B",typeA);
        classA.supertype = classB.type;
        let library : any = ElementFactory.library(this.createAnalysisContext(),"lib");
        let unit : any = library.definingCompilationUnit;
        (unit as any).types = new core.DartList.literal<any>(classA,classB);
        expect(typeA.lookUpGetter("g",library),isNull);
    }
    test_lookUpGetter_unimplemented() : void {
        let classA : any = ElementFactory.classElement2("A");
        let typeA : any = classA.type;
        let library : any = ElementFactory.library(this.createAnalysisContext(),"lib");
        let unit : any = library.definingCompilationUnit;
        (unit as any).types = new core.DartList.literal<any>(classA);
        expect(typeA.lookUpGetter("g",library),isNull);
    }
    test_lookUpMethod_implemented() : void {
        let classA : any = ElementFactory.classElement2("A");
        let methodName : string = "m";
        let methodM : any = ElementFactory.methodElement(methodName,null);
        classA.methods = new core.DartList.literal<any>(methodM);
        let typeA : any = classA.type;
        let library : any = ElementFactory.library(this.createAnalysisContext(),"lib");
        let unit : any = library.definingCompilationUnit;
        (unit as any).types = new core.DartList.literal<any>(classA);
        expect(typeA.lookUpMethod(methodName,library),same(methodM));
    }
    test_lookUpMethod_inherited() : void {
        let classA : any = ElementFactory.classElement2("A");
        let methodName : string = "m";
        let methodM : any = ElementFactory.methodElement(methodName,null);
        classA.methods = new core.DartList.literal<any>(methodM);
        let classB : any = ElementFactory.classElement("B",classA.type);
        let typeB : any = classB.type;
        let library : any = ElementFactory.library(this.createAnalysisContext(),"lib");
        let unit : any = library.definingCompilationUnit;
        (unit as any).types = new core.DartList.literal<any>(classA,classB);
        expect(typeB.lookUpMethod(methodName,library),same(methodM));
    }
    test_lookUpMethod_mixin_shadowing() : void {
        let methodName : string = 'm';
        let classB : any = ElementFactory.classElement2('B');
        let classM1 : any = ElementFactory.classElement2('M1');
        let methodM1m : any = ElementFactory.methodElement(methodName,null);
        classM1.methods = new core.DartList.literal<any>(methodM1m);
        let classM2 : any = ElementFactory.classElement2('M2');
        let methodM2m : any = ElementFactory.methodElement(methodName,null);
        classM2.methods = new core.DartList.literal<any>(methodM2m);
        let classC : any = ElementFactory.classElement('C',classB.type);
        classC.mixins = new core.DartList.literal<any>(classM1.type,classM2.type);
        let library : any = ElementFactory.library(this.createAnalysisContext(),"lib");
        let unit : any = library.definingCompilationUnit;
        unit.types = new core.DartList.literal<any>(classB,classM1,classM2,classC);
        expect(classC.type.lookUpMethod(methodName,library),methodM2m);
    }
    test_lookUpMethod_parameterized() : void {
        let classA : any = ElementFactory.classElement2("A",new core.DartList.literal("E"));
        let typeE : any = op(Op.INDEX,classA.type.typeArguments,0);
        let methodName : string = "m";
        let methodM : any = ElementFactory.methodElement(methodName,typeE,new core.DartList.literal(typeE));
        classA.methods = new core.DartList.literal<any>(methodM);
        methodM.type = new bare.createInstance(any,null,methodM);
        let classB : any = ElementFactory.classElement2("B",new core.DartList.literal("F"));
        let typeB : any = classB.type;
        let typeAF : any = new bare.createInstance(any,null,classA);
        typeAF.typeArguments = new core.DartList.literal<any>(op(Op.INDEX,typeB.typeArguments,0));
        classB.supertype = typeAF;
        let library : any = ElementFactory.library(this.createAnalysisContext(),"lib");
        let unit : any = library.definingCompilationUnit;
        (unit as any).types = new core.DartList.literal<any>(classA);
        let typeI : any = ElementFactory.classElement2("I").type;
        let typeBI : any = new bare.createInstance(any,null,classB);
        typeBI.typeArguments = new core.DartList.literal<any>(typeI);
        let method : any = typeBI.lookUpMethod(methodName,library);
        expect(method,isNotNull);
        let methodType : any = method.type;
        expect(methodType.returnType,same(typeI));
        let parameterTypes : core.DartList<any> = methodType.normalParameterTypes;
        expect(parameterTypes,hasLength(1));
        expect(parameterTypes[0],same(typeI));
    }
    test_lookUpMethod_recursive() : void {
        let classA : any = ElementFactory.classElement2("A");
        let typeA : any = classA.type;
        let classB : any = ElementFactory.classElement("B",typeA);
        classA.supertype = classB.type;
        let library : any = ElementFactory.library(this.createAnalysisContext(),"lib");
        let unit : any = library.definingCompilationUnit;
        (unit as any).types = new core.DartList.literal<any>(classA,classB);
        expect(typeA.lookUpMethod("m",library),isNull);
    }
    test_lookUpMethod_unimplemented() : void {
        let classA : any = ElementFactory.classElement2("A");
        let typeA : any = classA.type;
        let library : any = ElementFactory.library(this.createAnalysisContext(),"lib");
        let unit : any = library.definingCompilationUnit;
        (unit as any).types = new core.DartList.literal<any>(classA);
        expect(typeA.lookUpMethod("m",library),isNull);
    }
    test_lookUpSetter_implemented() : void {
        let classA : any = ElementFactory.classElement2("A");
        let setterName : string = "s";
        let setterS : any = ElementFactory.setterElement(setterName,false,null);
        classA.accessors = new core.DartList.literal<any>(setterS);
        let typeA : any = classA.type;
        let library : any = ElementFactory.library(this.createAnalysisContext(),"lib");
        let unit : any = library.definingCompilationUnit;
        (unit as any).types = new core.DartList.literal<any>(classA);
        expect(typeA.lookUpSetter(setterName,library),same(setterS));
    }
    test_lookUpSetter_inherited() : void {
        let classA : any = ElementFactory.classElement2("A");
        let setterName : string = "g";
        let setterS : any = ElementFactory.setterElement(setterName,false,null);
        classA.accessors = new core.DartList.literal<any>(setterS);
        let classB : any = ElementFactory.classElement("B",classA.type);
        let typeB : any = classB.type;
        let library : any = ElementFactory.library(this.createAnalysisContext(),"lib");
        let unit : any = library.definingCompilationUnit;
        (unit as any).types = new core.DartList.literal<any>(classA,classB);
        expect(typeB.lookUpSetter(setterName,library),same(setterS));
    }
    test_lookUpSetter_mixin_shadowing() : void {
        let typeProvider : any = new bare.createInstance(any,null);
        let setterName : string = 's';
        let classB : any = ElementFactory.classElement2('B');
        let classM1 : any = ElementFactory.classElement2('M1');
        let setterM1g : any = ElementFactory.setterElement(setterName,false,typeProvider.dynamicType);
        classM1.accessors = new core.DartList.literal<any>(setterM1g);
        let classM2 : any = ElementFactory.classElement2('M2');
        let setterM2g : any = ElementFactory.getterElement(setterName,false,typeProvider.dynamicType);
        classM2.accessors = new core.DartList.literal<any>(setterM2g);
        let classC : any = ElementFactory.classElement('C',classB.type);
        classC.mixins = new core.DartList.literal<any>(classM1.type,classM2.type);
        let library : any = ElementFactory.library(this.createAnalysisContext(),"lib");
        let unit : any = library.definingCompilationUnit;
        unit.types = new core.DartList.literal<any>(classB,classM1,classM2,classC);
        expect(classC.type.lookUpGetter(setterName,library),setterM2g);
    }
    test_lookUpSetter_recursive() : void {
        let classA : any = ElementFactory.classElement2("A");
        let typeA : any = classA.type;
        let classB : any = ElementFactory.classElement("B",typeA);
        classA.supertype = classB.type;
        let library : any = ElementFactory.library(this.createAnalysisContext(),"lib");
        let unit : any = library.definingCompilationUnit;
        (unit as any).types = new core.DartList.literal<any>(classA,classB);
        expect(typeA.lookUpSetter("s",library),isNull);
    }
    test_lookUpSetter_unimplemented() : void {
        let classA : any = ElementFactory.classElement2("A");
        let typeA : any = classA.type;
        let library : any = ElementFactory.library(this.createAnalysisContext(),"lib");
        let unit : any = library.definingCompilationUnit;
        (unit as any).types = new core.DartList.literal<any>(classA);
        expect(typeA.lookUpSetter("s",library),isNull);
    }
    test_resolveToBound() : void {
        let type : any = ElementFactory.classElement2("A").type as any;
        expect(type.resolveToBound(null),same(type));
    }
    test_setTypeArguments() : void {
        let type : any = ElementFactory.classElement2("A").type as any;
        let typeArguments : core.DartList<any> = new core.DartList.literal<any>(ElementFactory.classElement2("B").type,ElementFactory.classElement2("C").type);
        type.typeArguments = typeArguments;
        expect(type.typeArguments,typeArguments);
    }
    test_substitute_equal() : void {
        let classAE : any = ElementFactory.classElement2("A",new core.DartList.literal("E"));
        let typeAE : any = classAE.type;
        let argumentType : any = ElementFactory.classElement2("B").type;
        let args : core.DartList<any> = new core.DartList.literal(argumentType);
        let params : core.DartList<any> = new core.DartList.literal(op(Op.INDEX,classAE.typeParameters,0).type);
        let typeAESubbed : any = typeAE.substitute2(args,params);
        expect(typeAESubbed.element,classAE);
        let resultArguments : core.DartList<any> = typeAESubbed.typeArguments;
        expect(resultArguments,hasLength(1));
        expect(resultArguments[0],argumentType);
    }
    test_substitute_exception() : void {
        try {
            let classA : any = ElementFactory.classElement2("A");
            let type : any = new bare.createInstance(any,null,classA);
            let argumentType : any = ElementFactory.classElement2("B").type;
            type.substitute2(new core.DartList.literal<any>(argumentType),new core.DartList.literal<any>());
            fail("Expected to encounter exception, argument and parameter type array lengths not equal.");
        } catch (__error__) {

            {
                let e = __error__;
            }
        }
    }
    test_substitute_notEqual() : void {
        let classA : any = ElementFactory.classElement2("A");
        let parameterElement : any = new bare.createInstance(any,null,AstTestFactory.identifier3("E"));
        let type : any = new bare.createInstance(any,null,classA);
        let parameter : any = new bare.createInstance(any,null,parameterElement);
        type.typeArguments = new core.DartList.literal<any>(parameter);
        let argumentType : any = ElementFactory.classElement2("B").type;
        let parameterType : any = new bare.createInstance(any,null,new bare.createInstance(any,null,AstTestFactory.identifier3("F")));
        let result : any = type.substitute2(new core.DartList.literal<any>(argumentType),new core.DartList.literal<any>(parameterType));
        expect(result.element,classA);
        let resultArguments : core.DartList<any> = result.typeArguments;
        expect(resultArguments,hasLength(1));
        expect(resultArguments[0],parameter);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    InterfaceTypeImplTest() {
    }
}

export namespace LibraryElementImplTest {
    export type Constructors = lib3.EngineTestCase.Constructors | 'LibraryElementImplTest';
    export type Interface = Omit<LibraryElementImplTest, Constructors>;
}
@DartClass
export class LibraryElementImplTest extends lib3.EngineTestCase {
    test_creation() : void {
        expect(new bare.createInstance(any,null,this.createAnalysisContext(),AstTestFactory.libraryIdentifier2(new core.DartList.literal("l"))),isNotNull);
    }
    test_getImportedLibraries() : void {
        let context : any = this.createAnalysisContext();
        let library1 : any = ElementFactory.library(context,"l1");
        let library2 : any = ElementFactory.library(context,"l2");
        let library3 : any = ElementFactory.library(context,"l3");
        let library4 : any = ElementFactory.library(context,"l4");
        let prefixA : any = new bare.createInstance(any,null,AstTestFactory.identifier3("a"));
        let prefixB : any = new bare.createInstance(any,null,AstTestFactory.identifier3("b"));
        let imports : core.DartList<any> = new core.DartList.literal(ElementFactory.importFor(library2,null),ElementFactory.importFor(library2,prefixB),ElementFactory.importFor(library3,null),ElementFactory.importFor(library3,prefixA),ElementFactory.importFor(library3,prefixB),ElementFactory.importFor(library4,prefixA));
        library1.imports = imports;
        let libraries : core.DartList<any> = library1.importedLibraries;
        expect(libraries,unorderedEquals(new core.DartList.literal<any>(library2,library3,library4)));
    }
    test_getPrefixes() : void {
        let context : any = this.createAnalysisContext();
        let library : any = ElementFactory.library(context,"l1");
        let prefixA : any = new bare.createInstance(any,null,AstTestFactory.identifier3("a"));
        let prefixB : any = new bare.createInstance(any,null,AstTestFactory.identifier3("b"));
        let imports : core.DartList<any> = new core.DartList.literal(ElementFactory.importFor(ElementFactory.library(context,"l2"),null),ElementFactory.importFor(ElementFactory.library(context,"l3"),null),ElementFactory.importFor(ElementFactory.library(context,"l4"),prefixA),ElementFactory.importFor(ElementFactory.library(context,"l5"),prefixA),ElementFactory.importFor(ElementFactory.library(context,"l6"),prefixB));
        library.imports = imports;
        let prefixes : core.DartList<any> = library.prefixes;
        expect(prefixes,hasLength(2));
        if (core.identical(prefixA,prefixes[0])) {
            expect(prefixes[1],same(prefixB));
        }else {
            expect(prefixes[0],same(prefixB));
            expect(prefixes[1],same(prefixA));
        }
    }
    test_getUnits() : void {
        let context : any = this.createAnalysisContext();
        let library : any = ElementFactory.library(context,"test");
        let unitLib : any = library.definingCompilationUnit;
        let unitA : any = ElementFactory.compilationUnit("unit_a.dart",unitLib.source);
        let unitB : any = ElementFactory.compilationUnit("unit_b.dart",unitLib.source);
        library.parts = new core.DartList.literal<any>(unitA,unitB);
        expect(library.units,unorderedEquals(new core.DartList.literal<any>(unitLib,unitA,unitB)));
    }
    test_invalidateLibraryCycles_withHandle() : void {
        let context : any = this.createAnalysisContext();
        context.sourceFactory = new bare.createInstance(any,null,new core.DartList.literal());
        let library : any = ElementFactory.library(context,"foo");
        let importedLibrary : any = ElementFactory.library(context,"bar");
        let location : any = new bare.createInstance(any,null,'');
        let resynthesizer : TestElementResynthesizer = new TestElementResynthesizer(context,new core.DartMap.literal([
            [location,importedLibrary]]));
        let importedLibraryHandle : any = new bare.createInstance(any,null,resynthesizer,location);
        let import : any = ElementFactory.importFor(importedLibraryHandle,null);
        library.imports = new core.DartList.literal<any>(import);
        library.libraryCycle;
        library.invalidateLibraryCycles();
    }
    test_setImports() : void {
        let context : any = this.createAnalysisContext();
        let library : any = new bare.createInstance(any,null,context,AstTestFactory.libraryIdentifier2(new core.DartList.literal("l1")));
        let expectedImports : core.DartList<any> = new core.DartList.literal(ElementFactory.importFor(ElementFactory.library(context,"l2"),null),ElementFactory.importFor(ElementFactory.library(context,"l3"),null));
        library.imports = expectedImports;
        let actualImports : core.DartList<any> = library.imports;
        expect(actualImports,hasLength(expectedImports.length));
        for(let i : number = 0; i < actualImports.length; i++){
            expect(actualImports[i],same(expectedImports[i]));
        }
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    LibraryElementImplTest() {
    }
}

export namespace LocalVariableElementImplTest {
    export type Constructors = lib3.EngineTestCase.Constructors | 'LocalVariableElementImplTest';
    export type Interface = Omit<LocalVariableElementImplTest, Constructors>;
}
@DartClass
export class LocalVariableElementImplTest extends lib3.EngineTestCase {
    test_computeNode_declaredIdentifier() : void {
        let contextHelper : lib4.AnalysisContextHelper = new lib4.AnalysisContextHelper();
        let context : any = contextHelper.context;
        let source : any = contextHelper.addSource("/test.dart",'main() {\n  for (int v in <int>[1, 2, 3]) {}\n}');
        let libraryElement : any = context.computeLibraryElement(source);
        let mainElement : any = op(Op.INDEX,op(Op.INDEX,libraryElement.units,0).functions,0);
        let element : any = op(Op.INDEX,mainElement.localVariables,0);
        let node : any = element.computeNode() as any;
        expect(node,isNotNull);
        expect(node.identifier.name,'v');
        expect(node.element,same(element));
    }
    test_computeNode_variableDeclaration() : void {
        let contextHelper : lib4.AnalysisContextHelper = new lib4.AnalysisContextHelper();
        let context : any = contextHelper.context;
        let source : any = contextHelper.addSource("/test.dart",'main() {\n  int v = 0;\n}');
        let libraryElement : any = context.computeLibraryElement(source);
        let mainElement : any = op(Op.INDEX,op(Op.INDEX,libraryElement.units,0).functions,0);
        let element : any = op(Op.INDEX,mainElement.localVariables,0);
        let node : any = element.computeNode() as any;
        expect(node,isNotNull);
        expect(node.name.name,'v');
        expect(node.element,same(element));
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    LocalVariableElementImplTest() {
    }
}

export namespace MethodElementImplTest {
    export type Constructors = lib3.EngineTestCase.Constructors | 'MethodElementImplTest';
    export type Interface = Omit<MethodElementImplTest, Constructors>;
}
@DartClass
export class MethodElementImplTest extends lib3.EngineTestCase {
    test_computeNode() : void {
        let contextHelper : lib4.AnalysisContextHelper = new lib4.AnalysisContextHelper();
        let context : any = contextHelper.context;
        let source : any = contextHelper.addSource("/test.dart",'abstract class A {\n  String m1() => null;\n  m2();\n}\n');
        let libraryElement : any = context.computeLibraryElement(source);
        let unitElement : any = libraryElement.definingCompilationUnit;
        {
            let m1Element : any = unitElement.getType("A").getMethod('m1');
            let m1Node : any = m1Element.computeNode();
            expect(m1Node,isNotNull);
            expect(m1Node.name.name,"m1");
            expect(m1Node.element,same(m1Element));
        }
        {
            let m2Element : any = unitElement.getType("A").getMethod('m2');
            let m2Node : any = m2Element.computeNode();
            expect(m2Node,isNotNull);
            expect(m2Node.name.name,"m2");
            expect(m2Node.element,same(m2Element));
        }
    }
    test_computeNode_withoutFunctionBody() : void {
        let options : any = new bare.createInstance(any,null);
        options.analyzeFunctionBodies = false;
        let contextHelper : lib4.AnalysisContextHelper = new lib4.AnalysisContextHelper(options);
        let context : any = contextHelper.context;
        let source : any = contextHelper.addSource("/test.dart",'abstract class A {\n  String m1() => null;\n  m2();\n}\n');
        let libraryElement : any = context.computeLibraryElement(source);
        let unitElement : any = libraryElement.definingCompilationUnit;
        {
            let m1Element : any = unitElement.getType("A").getMethod('m1');
            let m1Node : any = m1Element.computeNode();
            expect(m1Node,isNotNull);
            expect(m1Node.name.name,"m1");
            expect(m1Node.element,same(m1Element));
        }
        {
            let m2Element : any = unitElement.getType("A").getMethod('m2');
            let m2Node : any = m2Element.computeNode();
            expect(m2Node,isNotNull);
            expect(m2Node.name.name,"m2");
            expect(m2Node.element,same(m2Element));
        }
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    MethodElementImplTest() {
    }
}

export namespace MethodMemberTest {
    export type Constructors = lib3.EngineTestCase.Constructors | 'MethodMemberTest';
    export type Interface = Omit<MethodMemberTest, Constructors>;
}
@DartClass
export class MethodMemberTest extends lib3.EngineTestCase {
    _typeProvider : any;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    setUp() : void {
        super.setUp();
        this._typeProvider = new bare.createInstance(any,null);
    }
    test_getReifiedType_substituteFor() : void {
        let options : any = new bare.createInstance(any,null);
        options.analyzeFunctionBodies = false;
        let contextHelper : lib4.AnalysisContextHelper = new lib4.AnalysisContextHelper(options);
        let context : any = contextHelper.context;
        let source : any = contextHelper.addSource("/test.dart",'class A<T> {\n  T f(T x) => x;\n}\nclass B<S> extends A<S> {\n  S f(S x) => x;\n}\n');
        let libraryElement : any = context.computeLibraryElement(source);
        let unitElement : any = libraryElement.definingCompilationUnit;
        let objectType : any = this._typeProvider.objectType;
        let elementB : any = unitElement.getType("B");
        let BfElement : any = elementB.type.lookUpInheritedMethod("f",{
            library : libraryElement,thisType : true});
        let AfElement : any = elementB.type.lookUpInheritedMethod("f",{
            library : libraryElement,thisType : false});
        expect(BfElement.getReifiedType(objectType),equals(AfElement.getReifiedType(objectType)));
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    MethodMemberTest() {
    }
}

export namespace MultiplyDefinedElementImplTest {
    export type Constructors = lib3.EngineTestCase.Constructors | 'MultiplyDefinedElementImplTest';
    export type Interface = Omit<MultiplyDefinedElementImplTest, Constructors>;
}
@DartClass
export class MultiplyDefinedElementImplTest extends lib3.EngineTestCase {
    test_fromElements_conflicting() : void {
        let firstElement : any = ElementFactory.topLevelVariableElement2('xx');
        let secondElement : any = ElementFactory.topLevelVariableElement2('yy');
        this._addToLibrary(new core.DartList.literal(firstElement,secondElement));
        let result : any = MultiplyDefinedElementImpl.fromElements(null,firstElement,secondElement);
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },MultiplyDefinedElement,result);
        let elements : core.DartList<any> = (result as any).conflictingElements;
        expect(elements,hasLength(2));
        for(let i : number = 0; i < elements.length; i++){
            lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
                return is(obj, any);
            },TopLevelVariableElement,elements[i]);
        }
    }
    test_fromElements_multiple() : void {
        let firstElement : any = ElementFactory.topLevelVariableElement2('xx');
        let secondElement : any = ElementFactory.topLevelVariableElement2('yy');
        let thirdElement : any = ElementFactory.topLevelVariableElement2('zz');
        this._addToLibrary(new core.DartList.literal(firstElement,secondElement,thirdElement));
        let result : any = MultiplyDefinedElementImpl.fromElements(null,MultiplyDefinedElementImpl.fromElements(null,firstElement,secondElement),thirdElement);
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },MultiplyDefinedElement,result);
        let elements : core.DartList<any> = (result as any).conflictingElements;
        expect(elements,hasLength(3));
        for(let i : number = 0; i < elements.length; i++){
            lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
                return is(obj, any);
            },TopLevelVariableElement,elements[i]);
        }
    }
    test_fromElements_nonConflicting() : void {
        let element : any = ElementFactory.topLevelVariableElement2('xx');
        this._addToLibrary(new core.DartList.literal(element));
        expect(MultiplyDefinedElementImpl.fromElements(null,element,element),same(element));
    }
    _addToLibrary(variables : core.DartList<any>) : void {
        let compilationUnit : any = ElementFactory.compilationUnit('lib.dart');
        let library : any = ElementFactory.library(null,'lib');
        library.definingCompilationUnit = compilationUnit;
        compilationUnit.topLevelVariables = variables;
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    MultiplyDefinedElementImplTest() {
    }
}

export namespace ParameterElementImplTest {
    export type Constructors = lib3.EngineTestCase.Constructors | 'ParameterElementImplTest';
    export type Interface = Omit<ParameterElementImplTest, Constructors>;
}
@DartClass
export class ParameterElementImplTest extends lib3.EngineTestCase {
    test_computeNode_DefaultFormalParameter() : void {
        let contextHelper : lib4.AnalysisContextHelper = new lib4.AnalysisContextHelper();
        let context : any = contextHelper.context;
        let source : any = contextHelper.addSource("/test.dart",'main([int p = 42]) {\n}');
        let libraryElement : any = context.computeLibraryElement(source);
        let unitElement : any = libraryElement.definingCompilationUnit;
        {
            let element : any = op(Op.INDEX,op(Op.INDEX,unitElement.functions,0).parameters,0);
            let node : any = element.computeNode();
            expect(node,isNotNull);
            expect(node.identifier.name,'p');
            expect(node.element,same(element));
        }
    }
    test_computeNode_FieldFormalParameter() : void {
        let contextHelper : lib4.AnalysisContextHelper = new lib4.AnalysisContextHelper();
        let context : any = contextHelper.context;
        let source : any = contextHelper.addSource("/test.dart",'class A {\n  int p;\n  A(this.p) {\n  }\n}');
        let libraryElement : any = context.computeLibraryElement(source);
        let unitElement : any = libraryElement.definingCompilationUnit;
        {
            let classA : any = op(Op.INDEX,unitElement.types,0);
            let constructorA : any = op(Op.INDEX,classA.constructors,0);
            let element : any = op(Op.INDEX,constructorA.parameters,0);
            let node : any = element.computeNode();
            expect(node,isNotNull);
            expect(node.identifier.name,'p');
            expect(node.element,same(element));
        }
    }
    test_computeNode_FunctionTypedFormalParameter() : void {
        let contextHelper : lib4.AnalysisContextHelper = new lib4.AnalysisContextHelper();
        let context : any = contextHelper.context;
        let source : any = contextHelper.addSource("/test.dart",'main(p(int a, int b)) {\n}');
        let libraryElement : any = context.computeLibraryElement(source);
        let unitElement : any = libraryElement.definingCompilationUnit;
        {
            let element : any = op(Op.INDEX,op(Op.INDEX,unitElement.functions,0).parameters,0);
            let node : any = element.computeNode();
            expect(node,isNotNull);
            expect(node.identifier.name,'p');
            expect(node.element,same(element));
        }
    }
    test_computeNode_SimpleFormalParameter() : void {
        let contextHelper : lib4.AnalysisContextHelper = new lib4.AnalysisContextHelper();
        let context : any = contextHelper.context;
        let source : any = contextHelper.addSource("/test.dart",'main(int p) {\n}');
        let libraryElement : any = context.computeLibraryElement(source);
        let unitElement : any = libraryElement.definingCompilationUnit;
        {
            let element : any = op(Op.INDEX,op(Op.INDEX,unitElement.functions,0).parameters,0);
            let node : any = element.computeNode();
            expect(node,isNotNull);
            expect(node.identifier.name,'p');
            expect(node.element,same(element));
        }
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ParameterElementImplTest() {
    }
}

export namespace PropertyAccessorElementImplTest {
    export type Constructors = lib3.EngineTestCase.Constructors | 'PropertyAccessorElementImplTest';
    export type Interface = Omit<PropertyAccessorElementImplTest, Constructors>;
}
@DartClass
export class PropertyAccessorElementImplTest extends lib3.EngineTestCase {
    test_matchesHandle_getter() : void {
        let compilationUnitElement : any = ElementFactory.compilationUnit('foo.dart');
        ((_) : any =>  {
            {
                _.definingCompilationUnit = compilationUnitElement;
                return _;
            }
        })(ElementFactory.library(null,''));
        let element : any = ElementFactory.getterElement('x',true,DynamicTypeImpl.instance);
        compilationUnitElement.accessors = new core.DartList.literal<any>(element);
        let handle : any = new bare.createInstance(any,null,null,element.location);
        expect(element.hashCode,handle.hashCode);
        expect(op(Op.EQUALS,element,handle),isTrue);
        expect(op(Op.EQUALS,handle,element),isTrue);
    }
    test_matchesHandle_setter() : void {
        let compilationUnitElement : any = ElementFactory.compilationUnit('foo.dart');
        ((_) : any =>  {
            {
                _.definingCompilationUnit = compilationUnitElement;
                return _;
            }
        })(ElementFactory.library(null,''));
        let element : any = ElementFactory.setterElement('x',true,DynamicTypeImpl.instance);
        compilationUnitElement.accessors = new core.DartList.literal<any>(element);
        let handle : any = new bare.createInstance(any,null,null,element.location);
        expect(element.hashCode,handle.hashCode);
        expect(op(Op.EQUALS,element,handle),isTrue);
        expect(op(Op.EQUALS,handle,element),isTrue);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    PropertyAccessorElementImplTest() {
    }
}

export namespace TestElementResynthesizer {
    export type Constructors = 'TestElementResynthesizer';
    export type Interface = Omit<TestElementResynthesizer, Constructors>;
}
@DartClass
export class TestElementResynthesizer extends any {
    locationMap : core.DartMap<any,any>;

    constructor(context : any,locationMap : core.DartMap<any,any>) {
    }
    @defaultConstructor
    TestElementResynthesizer(context : any,locationMap : core.DartMap<any,any>) {
        super.DartObject(context);
        this.locationMap = locationMap;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getElement(location : any) : any {
        return this.locationMap.get(location);
    }
}

export namespace TopLevelVariableElementImplTest {
    export type Constructors = lib5.ResolverTestCase.Constructors | 'TopLevelVariableElementImplTest';
    export type Interface = Omit<TopLevelVariableElementImplTest, Constructors>;
}
@DartClass
export class TopLevelVariableElementImplTest extends lib5.ResolverTestCase {
    test_computeConstantValue() : void {
        this.addNamedSource('/a.dart','const int C = 42;\n');
        let source : any = this.addSource('import \'a.dart\';\nmain() {\n  print(C);\n}\n');
        let library : any = this.resolve2(source);
        let unit : any = this.resolveCompilationUnit(source,library);
        let main : any = op(Op.INDEX,unit.declarations,0);
        let body : any = main.functionExpression.body;
        let statement : any = op(Op.INDEX,body.block.statements,0);
        let invocation : any = statement.expression;
        let argument : any = op(Op.INDEX,invocation.argumentList.arguments,0);
        let getter : any = argument.bestElement;
        let constant : any = getter.variable;
        expect(constant.constantValue,isNull);
        let value : any = constant.computeConstantValue();
        expect(value,isNotNull);
        expect(value.toIntValue(),42);
        expect(constant.constantValue,value);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    TopLevelVariableElementImplTest() {
    }
}

export namespace TypeParameterTypeImplTest {
    export type Constructors = lib3.EngineTestCase.Constructors | 'TypeParameterTypeImplTest';
    export type Interface = Omit<TypeParameterTypeImplTest, Constructors>;
}
@DartClass
export class TypeParameterTypeImplTest extends lib3.EngineTestCase {
    test_creation() : void {
        expect(new bare.createInstance(any,null,new bare.createInstance(any,null,AstTestFactory.identifier3("E"))),isNotNull);
    }
    test_getElement() : void {
        let element : any = new bare.createInstance(any,null,AstTestFactory.identifier3("E"));
        let type : any = new bare.createInstance(any,null,element);
        expect(type.element,element);
    }
    test_isMoreSpecificThan_typeArguments_dynamic() : void {
        let element : any = new bare.createInstance(any,null,AstTestFactory.identifier3("E"));
        let type : any = new bare.createInstance(any,null,element);
        expect(type.isMoreSpecificThan(DynamicTypeImpl.instance),isTrue);
    }
    test_isMoreSpecificThan_typeArguments_object() : void {
        let element : any = new bare.createInstance(any,null,AstTestFactory.identifier3("E"));
        let type : any = new bare.createInstance(any,null,element);
        expect(type.isMoreSpecificThan(ElementFactory.object.type),isTrue);
    }
    test_isMoreSpecificThan_typeArguments_recursive() : void {
        let classS : any = ElementFactory.classElement2("A");
        let typeParameterU : any = new bare.createInstance(any,null,AstTestFactory.identifier3("U"));
        let typeParameterTypeU : any = new bare.createInstance(any,null,typeParameterU);
        let typeParameterT : any = new bare.createInstance(any,null,AstTestFactory.identifier3("T"));
        let typeParameterTypeT : any = new bare.createInstance(any,null,typeParameterT);
        typeParameterT.bound = typeParameterTypeU;
        typeParameterU.bound = typeParameterTypeU;
        expect(typeParameterTypeT.isMoreSpecificThan(classS.type),isFalse);
    }
    test_isMoreSpecificThan_typeArguments_self() : void {
        let element : any = new bare.createInstance(any,null,AstTestFactory.identifier3("E"));
        let type : any = new bare.createInstance(any,null,element);
        expect(type.isMoreSpecificThan(type),isTrue);
    }
    test_isMoreSpecificThan_typeArguments_transitivity_interfaceTypes() : void {
        let classA : any = ElementFactory.classElement2("A");
        let classB : any = ElementFactory.classElement("B",classA.type);
        let typeA : any = classA.type;
        let typeB : any = classB.type;
        let typeParameterT : any = new bare.createInstance(any,null,AstTestFactory.identifier3("T"));
        typeParameterT.bound = typeB;
        let typeParameterTypeT : any = new bare.createInstance(any,null,typeParameterT);
        expect(typeParameterTypeT.isMoreSpecificThan(typeA),isTrue);
    }
    test_isMoreSpecificThan_typeArguments_transitivity_typeParameters() : void {
        let classS : any = ElementFactory.classElement2("A");
        let typeParameterU : any = new bare.createInstance(any,null,AstTestFactory.identifier3("U"));
        typeParameterU.bound = classS.type;
        let typeParameterTypeU : any = new bare.createInstance(any,null,typeParameterU);
        let typeParameterT : any = new bare.createInstance(any,null,AstTestFactory.identifier3("T"));
        typeParameterT.bound = typeParameterTypeU;
        let typeParameterTypeT : any = new bare.createInstance(any,null,typeParameterT);
        expect(typeParameterTypeT.isMoreSpecificThan(classS.type),isTrue);
    }
    test_isMoreSpecificThan_typeArguments_upperBound() : void {
        let classS : any = ElementFactory.classElement2("A");
        let typeParameterT : any = new bare.createInstance(any,null,AstTestFactory.identifier3("T"));
        typeParameterT.bound = classS.type;
        let typeParameterTypeT : any = new bare.createInstance(any,null,typeParameterT);
        expect(typeParameterTypeT.isMoreSpecificThan(classS.type),isTrue);
    }
    test_resolveToBound_bound() : void {
        let classS : any = ElementFactory.classElement2("A");
        let element : any = new bare.createInstance(any,null,AstTestFactory.identifier3("E"));
        element.bound = classS.type;
        let type : any = new bare.createInstance(any,null,element);
        expect(type.resolveToBound(null),same(classS.type));
    }
    test_resolveToBound_nestedBound() : void {
        let classS : any = ElementFactory.classElement2("A");
        let elementE : any = new bare.createInstance(any,null,AstTestFactory.identifier3("E"));
        elementE.bound = classS.type;
        let typeE : any = new bare.createInstance(any,null,elementE);
        let elementF : any = new bare.createInstance(any,null,AstTestFactory.identifier3("F"));
        elementF.bound = typeE;
        let typeF : any = new bare.createInstance(any,null,elementE);
        expect(typeF.resolveToBound(null),same(classS.type));
    }
    test_resolveToBound_unbound() : void {
        let type : any = new bare.createInstance(any,null,new bare.createInstance(any,null,AstTestFactory.identifier3("E")));
        expect(type.resolveToBound(VoidTypeImpl.instance),same(VoidTypeImpl.instance));
    }
    test_substitute_equal() : void {
        let element : any = new bare.createInstance(any,null,AstTestFactory.identifier3("E"));
        let type : any = new bare.createInstance(any,null,element);
        let argument : any = new bare.createInstance(any,null,new bare.createInstance(any,null,AstTestFactory.identifier3("A")));
        let parameter : any = new bare.createInstance(any,null,element);
        expect(type.substitute2(new core.DartList.literal<any>(argument),new core.DartList.literal<any>(parameter)),same(argument));
    }
    test_substitute_notEqual() : void {
        let type : any = new bare.createInstance(any,null,new bare.createInstance(any,null,AstTestFactory.identifier3("E")));
        let argument : any = new bare.createInstance(any,null,new bare.createInstance(any,null,AstTestFactory.identifier3("A")));
        let parameter : any = new bare.createInstance(any,null,new bare.createInstance(any,null,AstTestFactory.identifier3("F")));
        expect(type.substitute2(new core.DartList.literal<any>(argument),new core.DartList.literal<any>(parameter)),same(type));
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    TypeParameterTypeImplTest() {
    }
}

export namespace VoidTypeImplTest {
    export type Constructors = lib3.EngineTestCase.Constructors | 'VoidTypeImplTest';
    export type Interface = Omit<VoidTypeImplTest, Constructors>;
}
@DartClass
export class VoidTypeImplTest extends lib3.EngineTestCase {
    _voidType : any;

    test_isMoreSpecificThan_void_A() : void {
        let classA : any = ElementFactory.classElement2("A");
        expect(this._voidType.isMoreSpecificThan(classA.type),isFalse);
    }
    test_isMoreSpecificThan_void_dynamic() : void {
        expect(this._voidType.isMoreSpecificThan(DynamicTypeImpl.instance),isTrue);
    }
    test_isMoreSpecificThan_void_void() : void {
        expect(this._voidType.isMoreSpecificThan(this._voidType),isTrue);
    }
    test_isSubtypeOf_void_A() : void {
        let classA : any = ElementFactory.classElement2("A");
        expect(this._voidType.isSubtypeOf(classA.type),isFalse);
    }
    test_isSubtypeOf_void_dynamic() : void {
        expect(this._voidType.isSubtypeOf(DynamicTypeImpl.instance),isTrue);
    }
    test_isSubtypeOf_void_void() : void {
        expect(this._voidType.isSubtypeOf(this._voidType),isTrue);
    }
    test_isVoid() : void {
        expect(this._voidType.isVoid,isTrue);
    }
    test_resolveToBound() : void {
        expect(this._voidType.resolveToBound(null),same(this._voidType));
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    VoidTypeImplTest() {
        this._voidType = VoidTypeImpl.instance;
    }
}

export namespace _FunctionTypeImplTest_isSubtypeOf_baseCase_classFunction {
    export type Constructors = '_FunctionTypeImplTest_isSubtypeOf_baseCase_classFunction';
    export type Interface = Omit<_FunctionTypeImplTest_isSubtypeOf_baseCase_classFunction, Constructors>;
}
@DartClass
export class _FunctionTypeImplTest_isSubtypeOf_baseCase_classFunction extends any {
    constructor(arg0 : any) {
    }
    @defaultConstructor
    _FunctionTypeImplTest_isSubtypeOf_baseCase_classFunction(arg0 : any) {
        super.DartObject(arg0);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isDartCoreFunction() : boolean {
        return true;
    }
}

export class properties {
}
