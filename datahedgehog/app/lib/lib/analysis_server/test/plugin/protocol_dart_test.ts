/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/plugin/protocol_dart_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/analyzer/lib/dart/ast/ast";
import * as lib4 from "./../abstract_context";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(ElementTest);
        defineReflectiveTests(ElementKindTest);
    });
};
export namespace ElementKindTest {
    export type Constructors = 'ElementKindTest';
    export type Interface = Omit<ElementKindTest, Constructors>;
}
@DartClass
export class ElementKindTest {
    test_fromEngine() : void {
        expect(convertElementKind(lib3.ElementKind.CLASS),ElementKind.CLASS);
        expect(convertElementKind(lib3.ElementKind.COMPILATION_UNIT),ElementKind.COMPILATION_UNIT);
        expect(convertElementKind(lib3.ElementKind.CONSTRUCTOR),ElementKind.CONSTRUCTOR);
        expect(convertElementKind(lib3.ElementKind.FIELD),ElementKind.FIELD);
        expect(convertElementKind(lib3.ElementKind.FUNCTION),ElementKind.FUNCTION);
        expect(convertElementKind(lib3.ElementKind.FUNCTION_TYPE_ALIAS),ElementKind.FUNCTION_TYPE_ALIAS);
        expect(convertElementKind(lib3.ElementKind.GETTER),ElementKind.GETTER);
        expect(convertElementKind(lib3.ElementKind.LABEL),ElementKind.LABEL);
        expect(convertElementKind(lib3.ElementKind.LIBRARY),ElementKind.LIBRARY);
        expect(convertElementKind(lib3.ElementKind.LOCAL_VARIABLE),ElementKind.LOCAL_VARIABLE);
        expect(convertElementKind(lib3.ElementKind.METHOD),ElementKind.METHOD);
        expect(convertElementKind(lib3.ElementKind.PARAMETER),ElementKind.PARAMETER);
        expect(convertElementKind(lib3.ElementKind.SETTER),ElementKind.SETTER);
        expect(convertElementKind(lib3.ElementKind.TOP_LEVEL_VARIABLE),ElementKind.TOP_LEVEL_VARIABLE);
        expect(convertElementKind(lib3.ElementKind.TYPE_PARAMETER),ElementKind.TYPE_PARAMETER);
    }
    test_string_constructor() : void {
        expect(new bare.createInstance(any,null,ElementKind.CLASS.name),ElementKind.CLASS);
        expect(new bare.createInstance(any,null,ElementKind.CLASS_TYPE_ALIAS.name),ElementKind.CLASS_TYPE_ALIAS);
        expect(new bare.createInstance(any,null,ElementKind.COMPILATION_UNIT.name),ElementKind.COMPILATION_UNIT);
        expect(new bare.createInstance(any,null,ElementKind.CONSTRUCTOR.name),ElementKind.CONSTRUCTOR);
        expect(new bare.createInstance(any,null,ElementKind.FIELD.name),ElementKind.FIELD);
        expect(new bare.createInstance(any,null,ElementKind.FUNCTION.name),ElementKind.FUNCTION);
        expect(new bare.createInstance(any,null,ElementKind.FUNCTION_TYPE_ALIAS.name),ElementKind.FUNCTION_TYPE_ALIAS);
        expect(new bare.createInstance(any,null,ElementKind.GETTER.name),ElementKind.GETTER);
        expect(new bare.createInstance(any,null,ElementKind.LIBRARY.name),ElementKind.LIBRARY);
        expect(new bare.createInstance(any,null,ElementKind.LOCAL_VARIABLE.name),ElementKind.LOCAL_VARIABLE);
        expect(new bare.createInstance(any,null,ElementKind.METHOD.name),ElementKind.METHOD);
        expect(new bare.createInstance(any,null,ElementKind.PARAMETER.name),ElementKind.PARAMETER);
        expect(new bare.createInstance(any,null,ElementKind.SETTER.name),ElementKind.SETTER);
        expect(new bare.createInstance(any,null,ElementKind.TOP_LEVEL_VARIABLE.name),ElementKind.TOP_LEVEL_VARIABLE);
        expect(new bare.createInstance(any,null,ElementKind.TYPE_PARAMETER.name),ElementKind.TYPE_PARAMETER);
        expect(new bare.createInstance(any,null,ElementKind.UNIT_TEST_TEST.name),ElementKind.UNIT_TEST_TEST);
        expect(new bare.createInstance(any,null,ElementKind.UNIT_TEST_GROUP.name),ElementKind.UNIT_TEST_GROUP);
        expect(new bare.createInstance(any,null,ElementKind.UNKNOWN.name),ElementKind.UNKNOWN);
        expect(() =>  {
            new bare.createInstance(any,null,'no-such-kind');
        },throws);
    }
    test_toString() : void {
        expect(ElementKind.CLASS.toString(),'ElementKind.CLASS');
        expect(ElementKind.COMPILATION_UNIT.toString(),'ElementKind.COMPILATION_UNIT');
    }
    constructor() {
    }
    @defaultConstructor
    ElementKindTest() {
    }
}

export namespace ElementTest {
    export type Constructors = lib4.AbstractContextTest.Constructors | 'ElementTest';
    export type Interface = Omit<ElementTest, Constructors>;
}
@DartClass
export class ElementTest extends lib4.AbstractContextTest {
    findElementInUnit(unit : any,name : string,kind? : any) : any {
        return lib4.findChildElement(unit.element,name,kind);
    }
    test_fromElement_CLASS() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('/test.dart','@deprecated\nabstract class _A {}\nclass B<K, V> {}');
            let unit : any = await this.resolveLibraryUnit(source);
            {
                let engineElement : any = this.findElementInUnit(unit,'_A');
                let element : any = convertElement(engineElement);
                expect(element.kind,ElementKind.CLASS);
                expect(element.name,'_A');
                expect(element.typeParameters,isNull);
                {
                    let location : any = element.location;
                    expect(location.file,'/test.dart');
                    expect(location.offset,27);
                    expect(location.length,new core.DartString('_A').length);
                    expect(location.startLine,2);
                    expect(location.startColumn,16);
                }
                expect(element.parameters,isNull);
                expect(element.flags,op(Op.BITOR,op(Op.BITOR,Element.FLAG_ABSTRACT,Element.FLAG_DEPRECATED),Element.FLAG_PRIVATE));
            }
            {
                let engineElement : any = this.findElementInUnit(unit,'B');
                let element : any = convertElement(engineElement);
                expect(element.kind,ElementKind.CLASS);
                expect(element.name,'B');
                expect(element.typeParameters,'<K, V>');
                expect(element.flags,0);
            }
        } )());
    }

    test_fromElement_CONSTRUCTOR() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('/test.dart','class A {\n  const A.myConstructor(int a, [String b]);\n}');
            let unit : any = await this.resolveLibraryUnit(source);
            let engineElement : any = this.findElementInUnit(unit,'myConstructor');
            let element : any = convertElement(engineElement);
            expect(element.kind,ElementKind.CONSTRUCTOR);
            expect(element.name,'myConstructor');
            expect(element.typeParameters,isNull);
            {
                let location : any = element.location;
                expect(location.file,'/test.dart');
                expect(location.offset,20);
                expect(location.length,new core.DartString('myConstructor').length);
                expect(location.startLine,2);
                expect(location.startColumn,11);
            }
            expect(element.parameters,'(int a, [String b])');
            expect(element.returnType,'A');
            expect(element.flags,Element.FLAG_CONST);
        } )());
    }

    test_fromElement_dynamic() : void {
        let engineElement = lib3.DynamicElementImpl.instance;
        let element : any = convertElement(engineElement);
        expect(element.kind,ElementKind.UNKNOWN);
        expect(element.name,'dynamic');
        expect(element.location,isNull);
        expect(element.parameters,isNull);
        expect(element.returnType,isNull);
        expect(element.flags,0);
    }
    test_fromElement_ENUM() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('/test.dart','@deprecated\nenum _E1 { one, two }\nenum E2 { three, four }');
            let unit : any = await this.resolveLibraryUnit(source);
            {
                let engineElement : any = this.findElementInUnit(unit,'_E1');
                expect(engineElement.isDeprecated,isTrue);
                let element : any = convertElement(engineElement);
                expect(element.kind,ElementKind.ENUM);
                expect(element.name,'_E1');
                expect(element.typeParameters,isNull);
                {
                    let location : any = element.location;
                    expect(location.file,'/test.dart');
                    expect(location.offset,17);
                    expect(location.length,new core.DartString('_E1').length);
                    expect(location.startLine,2);
                    expect(location.startColumn,6);
                }
                expect(element.parameters,isNull);
                expect(element.flags,op(Op.BITOR,(engineElement.isDeprecated ? Element.FLAG_DEPRECATED : 0),Element.FLAG_PRIVATE));
            }
            {
                let engineElement : any = this.findElementInUnit(unit,'E2');
                let element : any = convertElement(engineElement);
                expect(element.kind,ElementKind.ENUM);
                expect(element.name,'E2');
                expect(element.typeParameters,isNull);
                expect(element.flags,0);
            }
        } )());
    }

    test_fromElement_ENUM_CONSTANT() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('/test.dart','@deprecated\nenum _E1 { one, two }\nenum E2 { three, four }');
            let unit : any = await this.resolveLibraryUnit(source);
            {
                let engineElement : any = this.findElementInUnit(unit,'one');
                let element : any = convertElement(engineElement);
                expect(element.kind,ElementKind.ENUM_CONSTANT);
                expect(element.name,'one');
                {
                    let location : any = element.location;
                    expect(location.file,'/test.dart');
                    expect(location.offset,23);
                    expect(location.length,new core.DartString('one').length);
                    expect(location.startLine,2);
                    expect(location.startColumn,12);
                }
                expect(element.parameters,isNull);
                expect(element.returnType,'_E1');
                expect(element.flags,op(Op.BITOR,Element.FLAG_CONST,Element.FLAG_STATIC));
            }
            {
                let engineElement : any = this.findElementInUnit(unit,'three');
                let element : any = convertElement(engineElement);
                expect(element.kind,ElementKind.ENUM_CONSTANT);
                expect(element.name,'three');
                {
                    let location : any = element.location;
                    expect(location.file,'/test.dart');
                    expect(location.offset,44);
                    expect(location.length,new core.DartString('three').length);
                    expect(location.startLine,3);
                    expect(location.startColumn,11);
                }
                expect(element.parameters,isNull);
                expect(element.returnType,'E2');
                expect(element.flags,op(Op.BITOR,Element.FLAG_CONST,Element.FLAG_STATIC));
            }
            {
                let engineElement : any = this.findElementInUnit(unit,'index');
                let element : any = convertElement(engineElement);
                expect(element.kind,ElementKind.FIELD);
                expect(element.name,'index');
                {
                    let location : any = element.location;
                    expect(location.file,'/test.dart');
                    expect(location.offset,-1);
                    expect(location.length,new core.DartString('index').length);
                    expect(location.startLine,1);
                    expect(location.startColumn,0);
                }
                expect(element.parameters,isNull);
                expect(element.returnType,'int');
                expect(element.flags,Element.FLAG_FINAL);
            }
            {
                let engineElement : any = this.findElementInUnit(unit,'values');
                let element : any = convertElement(engineElement);
                expect(element.kind,ElementKind.FIELD);
                expect(element.name,'values');
                {
                    let location : any = element.location;
                    expect(location.file,'/test.dart');
                    expect(location.offset,-1);
                    expect(location.length,new core.DartString('values').length);
                    expect(location.startLine,1);
                    expect(location.startColumn,0);
                }
                expect(element.parameters,isNull);
                expect(element.returnType,'List<E2>');
                expect(element.flags,op(Op.BITOR,Element.FLAG_CONST,Element.FLAG_STATIC));
            }
        } )());
    }

    test_fromElement_FIELD() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('/test.dart','class A {\n  static const myField = 42;\n}');
            let unit : any = await this.resolveLibraryUnit(source);
            let engineElement : any = this.findElementInUnit(unit,'myField');
            let element : any = convertElement(engineElement);
            expect(element.kind,ElementKind.FIELD);
            expect(element.name,'myField');
            {
                let location : any = element.location;
                expect(location.file,'/test.dart');
                expect(location.offset,25);
                expect(location.length,new core.DartString('myField').length);
                expect(location.startLine,2);
                expect(location.startColumn,16);
            }
            expect(element.parameters,isNull);
            expect(element.returnType,'int');
            expect(element.flags,op(Op.BITOR,Element.FLAG_CONST,Element.FLAG_STATIC));
        } )());
    }

    test_fromElement_FUNCTION_TYPE_ALIAS() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('/test.dart','typedef int F<T>(String x);\n');
            let unit : any = await this.resolveLibraryUnit(source);
            let engineElement : any = this.findElementInUnit(unit,'F');
            let element : any = convertElement(engineElement);
            expect(element.kind,ElementKind.FUNCTION_TYPE_ALIAS);
            expect(element.name,'F');
            expect(element.typeParameters,'<T>');
            {
                let location : any = element.location;
                expect(location.file,'/test.dart');
                expect(location.offset,12);
                expect(location.length,new core.DartString('F').length);
                expect(location.startLine,1);
                expect(location.startColumn,13);
            }
            expect(element.parameters,'(String x)');
            expect(element.returnType,'int');
            expect(element.flags,0);
        } )());
    }

    test_fromElement_GETTER() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('/test.dart','class A {\n  String get myGetter => 42;\n}');
            let unit : any = await this.resolveLibraryUnit(source);
            let engineElement : any = this.findElementInUnit(unit,'myGetter',lib3.ElementKind.GETTER);
            let element : any = convertElement(engineElement);
            expect(element.kind,ElementKind.GETTER);
            expect(element.name,'myGetter');
            {
                let location : any = element.location;
                expect(location.file,'/test.dart');
                expect(location.offset,23);
                expect(location.length,new core.DartString('myGetter').length);
                expect(location.startLine,2);
                expect(location.startColumn,14);
            }
            expect(element.parameters,isNull);
            expect(element.returnType,'String');
            expect(element.flags,0);
        } )());
    }

    test_fromElement_LABEL() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('/test.dart','main() {\nmyLabel:\n  while (true) {\n    break myLabel;\n  }\n}');
            let unit : any = await this.resolveLibraryUnit(source);
            let engineElement : any = this.findElementInUnit(unit,'myLabel');
            let element : any = convertElement(engineElement);
            expect(element.kind,ElementKind.LABEL);
            expect(element.name,'myLabel');
            {
                let location : any = element.location;
                expect(location.file,'/test.dart');
                expect(location.offset,9);
                expect(location.length,new core.DartString('myLabel').length);
                expect(location.startLine,2);
                expect(location.startColumn,1);
            }
            expect(element.parameters,isNull);
            expect(element.returnType,isNull);
            expect(element.flags,0);
        } )());
    }

    test_fromElement_METHOD() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('/test.dart','class A {\n  static List<String> myMethod(int a, {String b, int c}) {\n    return null;\n  }\n}');
            let unit : any = await this.resolveLibraryUnit(source);
            let engineElement : any = this.findElementInUnit(unit,'myMethod');
            let element : any = convertElement(engineElement);
            expect(element.kind,ElementKind.METHOD);
            expect(element.name,'myMethod');
            {
                let location : any = element.location;
                expect(location.file,'/test.dart');
                expect(location.offset,32);
                expect(location.length,new core.DartString('myGetter').length);
                expect(location.startLine,2);
                expect(location.startColumn,23);
            }
            expect(element.parameters,'(int a, {String b, int c})');
            expect(element.returnType,'List<String>');
            expect(element.flags,Element.FLAG_STATIC);
        } )());
    }

    test_fromElement_SETTER() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('/test.dart','class A {\n  set mySetter(String x) {}\n}');
            let unit : any = await this.resolveLibraryUnit(source);
            let engineFieldElement : any = this.findElementInUnit(unit,'mySetter',lib3.ElementKind.FIELD);
            let engineElement : any = engineFieldElement.setter;
            let element : any = convertElement(engineElement);
            expect(element.kind,ElementKind.SETTER);
            expect(element.name,'mySetter');
            {
                let location : any = element.location;
                expect(location.file,'/test.dart');
                expect(location.offset,16);
                expect(location.length,new core.DartString('mySetter').length);
                expect(location.startLine,2);
                expect(location.startColumn,7);
            }
            expect(element.parameters,'(String x)');
            expect(element.returnType,isNull);
            expect(element.flags,0);
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ElementTest() {
    }
}

export class properties {
}
