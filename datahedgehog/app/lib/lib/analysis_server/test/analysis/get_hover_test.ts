/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/analysis/get_hover_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../analysis_abstract";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(AnalysisHoverTest);
    });
};
export namespace AnalysisHoverTest {
    export type Constructors = lib3.AbstractAnalysisTest.Constructors | 'AnalysisHoverTest';
    export type Interface = Omit<AnalysisHoverTest, Constructors>;
}
@DartClass
export class AnalysisHoverTest extends lib3.AbstractAnalysisTest {
    prepareHover(search : string) : async.Future<any> {
        let offset : number = this.findOffset(search);
        return this.prepareHoverAt(offset);
    }
    prepareHoverAt(offset : number) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.waitForTasksFinished();
            let request : any = new bare.createInstance(any,null,this.testFile,offset).toRequest('0');
            let response : any = await this.waitResponse(request);
            let result = new bare.createInstance(any,null,response);
            let hovers : core.DartList<any> = result.hovers;
            return hovers.isNotEmpty ? hovers.first : null;
        } )());
    }

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    setUp() : void {
        super.setUp();
        this.createProject();
    }
    test_class() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A<E> {}\nclass I1<K, V> {}\nclass I2<E> {}\nclass M1 {}\nclass M2<E> {}\nclass B<T> extends A<T> with M1, M2<int> implements I1<int, String>, I2 {}\n');
            let hover : any = await this.prepareHover('B<T>');
            expect(hover.elementDescription,'class B<T> extends A<T> with M1, M2<int> ' + 'implements I1<int, String>, I2');
            expect(hover.staticType,isNull);
            expect(hover.propagatedType,isNull);
        } )());
    }

    test_class_abstract() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {}\nabstract class B extends A {}\n');
            let hover : any = await this.prepareHover('B extends');
            expect(hover.elementDescription,'abstract class B extends A');
            expect(hover.staticType,isNull);
            expect(hover.propagatedType,isNull);
        } )());
    }

    test_dartdoc_clunky() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('library my.library;\n/**\n * doc aaa\n * doc bbb\n */\nmain() {\n}\n');
            let hover : any = await this.prepareHover('main() {');
            expect(hover.dartdoc,'doc aaa\ndoc bbb');
        } )());
    }

    test_dartdoc_elegant() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('library my.library;\n/// doc aaa\n/// doc bbb\nmain() {\n}\n');
            let hover : any = await this.prepareHover('main() {');
            expect(hover.dartdoc,'doc aaa\ndoc bbb');
        } )());
    }

    test_dartdoc_inherited_methodByMethod_fromInterface() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {\n  /// my doc\n  m() {} // in A\n}\n\nclass B implements A {\n  m() {} // in B\n}\n');
            let hover : any = await this.prepareHover('m() {} // in B');
            expect(hover.dartdoc,'my doc\n\nCopied from `A`.');
        } )());
    }

    test_dartdoc_inherited_methodByMethod_fromSuper_direct() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {\n  /// my doc\n  m() {} // in A\n}\n\nclass B extends A {\n  m() {} // in B\n}\n');
            let hover : any = await this.prepareHover('m() {} // in B');
            expect(hover.dartdoc,'my doc\n\nCopied from `A`.');
        } )());
    }

    test_dartdoc_inherited_methodByMethod_fromSuper_indirect() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {\n  /// my doc\n  m() {}\n}\nclass B extends A {\n  m() {}\n}\nclass C extends B {\n  m() {} // in C\n}');
            let hover : any = await this.prepareHover('m() {} // in C');
            expect(hover.dartdoc,'my doc\n\nCopied from `A`.');
        } )());
    }

    test_dartdoc_inherited_methodByMethod_preferSuper() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {\n  /// my doc\n  m() {}\n}\nclass B extends A {\n}\nclass I {\n  // wrong doc\n  m() {}\n}\nclass C extends B implements I {\n  m() {} // in C\n}');
            let hover : any = await this.prepareHover('m() {} // in C');
            expect(hover.dartdoc,'my doc\n\nCopied from `A`.');
        } )());
    }

    test_enum() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('enum MyEnum {AAA, BBB, CCC}\n');
            let hover : any = await this.prepareHover('MyEnum');
            expect(hover.elementDescription,'enum MyEnum');
            expect(hover.staticType,isNull);
            expect(hover.propagatedType,isNull);
        } )());
    }

    test_expression_function() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('library my.library;\n/// doc aaa\n/// doc bbb\nList<String> fff(int a, String b) {\n}\n');
            let hover : any = await this.prepareHover('fff(int a');
            expect(hover.containingLibraryName,'my.library');
            expect(hover.containingLibraryPath,this.testFile);
            expect(hover.containingClassDescription,isNull);
            expect(hover.dartdoc,'doc aaa\ndoc bbb');
            expect(hover.elementDescription,'fff(int a, String b) → List<String>');
            expect(hover.elementKind,'function');
            expect(hover.staticType,isNull);
            expect(hover.propagatedType,isNull);
            expect(hover.parameter,isNull);
        } )());
    }

    test_expression_literal_noElement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('main() {\n  foo(123);\n}\nfoo(Object myParameter) {}\n');
            let hover : any = await this.prepareHover('123');
            expect(hover.containingClassDescription,isNull);
            expect(hover.elementDescription,isNull);
            expect(hover.elementKind,isNull);
            expect(hover.staticType,'int');
            expect(hover.propagatedType,isNull);
            expect(hover.parameter,'Object myParameter');
        } )());
    }

    test_expression_method() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('library my.library;\nclass A {\n  /// doc aaa\n  /// doc bbb\n  List<String> mmm(int a, String b) {\n  }\n}\n');
            let hover : any = await this.prepareHover('mmm(int a');
            expect(hover.containingLibraryName,'my.library');
            expect(hover.containingLibraryPath,this.testFile);
            expect(hover.containingClassDescription,'A');
            expect(hover.dartdoc,'doc aaa\ndoc bbb');
            expect(hover.elementDescription,'mmm(int a, String b) → List<String>');
            expect(hover.elementKind,'method');
            expect(hover.staticType,isNull);
            expect(hover.propagatedType,isNull);
            expect(hover.parameter,isNull);
        } )());
    }

    test_expression_method_deprecated() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {\n  @deprecated\n  static void test() {}\n}\nmain() {\n  A.test();\n}\n');
            let hover : any = await this.prepareHover('test();');
            expect(hover.containingLibraryPath,this.testFile);
            expect(hover.elementDescription,'test() → void');
            expect(hover.elementKind,'method');
            expect(hover.isDeprecated,isTrue);
        } )());
    }

    test_expression_method_invocation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('library my.library;\nclass A {\n  List<String> mmm(int a, String b) {\n  }\n}\nmain(A a) {\n  a.mmm(42, \'foo\');\n}\n');
            let hover : any = await this.prepareHover('mm(42, ');
            expect(hover.offset,this.findOffset('mmm(42, '));
            expect(hover.length,new core.DartString('mmm').length);
            expect(hover.containingLibraryName,'my.library');
            expect(hover.containingLibraryPath,this.testFile);
            expect(hover.elementDescription,'mmm(int a, String b) → List<String>');
            expect(hover.elementKind,'method');
            expect(hover.isDeprecated,isFalse);
            expect(hover.staticType,'(int, String) → List<String>');
            expect(hover.propagatedType,isNull);
            expect(hover.parameter,isNull);
        } )());
    }

    test_expression_parameter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('library my.library;\nclass A {\n  /// The method documentation.\n  m(int p) {\n  }\n}\n');
            let hover : any = await this.prepareHover('p) {');
            expect(hover.containingLibraryName,isNull);
            expect(hover.containingLibraryPath,isNull);
            expect(hover.containingClassDescription,isNull);
            expect(hover.dartdoc,'The method documentation.');
            expect(hover.elementDescription,'int p');
            expect(hover.elementKind,'parameter');
            expect(hover.staticType,'int');
            expect(hover.propagatedType,isNull);
            expect(hover.parameter,isNull);
        } )());
    }

    test_expression_parameter_fieldFormal_declaration() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {\n  /// The field documentation.\n  final int fff;\n  A({this.fff});\n}\nmain() {\n  new A(fff: 42);\n}\n');
            let hover : any = await this.prepareHover('fff});');
            expect(hover.containingLibraryName,isNull);
            expect(hover.containingLibraryPath,isNull);
            expect(hover.containingClassDescription,isNull);
            expect(hover.dartdoc,'The field documentation.');
            expect(hover.elementDescription,'{int fff}');
            expect(hover.elementKind,'parameter');
            expect(hover.staticType,'int');
        } )());
    }

    test_expression_parameter_fieldFormal_use() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {\n  /// The field documentation.\n  final int fff;\n  A({this.fff});\n}\nmain() {\n  new A(fff: 42);\n}\n');
            let hover : any = await this.prepareHover('fff: 42');
            expect(hover.containingLibraryName,isNull);
            expect(hover.containingLibraryPath,isNull);
            expect(hover.containingClassDescription,isNull);
            expect(hover.dartdoc,'The field documentation.');
            expect(hover.elementDescription,'{int fff}');
            expect(hover.elementKind,'parameter');
            expect(hover.staticType,'int');
        } )());
    }

    test_expression_syntheticGetter_invocation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('library my.library;\nclass A {\n  /// doc aaa\n  /// doc bbb\n  String fff;\n}\nmain(A a) {\n  print(a.fff);\n}\n');
            let hover : any = await this.prepareHover('fff);');
            expect(hover.containingLibraryName,'my.library');
            expect(hover.containingLibraryPath,this.testFile);
            expect(hover.containingClassDescription,'A');
            expect(hover.dartdoc,'doc aaa\ndoc bbb');
            expect(hover.elementDescription,'String fff');
            expect(hover.elementKind,'field');
            expect(hover.staticType,'String');
            expect(hover.propagatedType,isNull);
        } )());
    }

    test_expression_variable_hasPropagatedType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('library my.library;\nmain() {\n  var vvv = 123;\n  print(vvv);\n}\n');
            let hover : any = await this.prepareHover('vvv);');
            expect(hover.containingLibraryName,isNull);
            expect(hover.containingLibraryPath,isNull);
            expect(hover.containingClassDescription,isNull);
            expect(hover.dartdoc,isNull);
            expect(hover.elementDescription,'dynamic vvv');
            expect(hover.elementKind,'local variable');
            expect(hover.staticType,'dynamic');
            expect(hover.propagatedType,'int');
        } )());
    }

    test_expression_variable_inMethod() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('library my.library;\nclass A {\n  m() {\n    num vvv = 42;\n  }\n}\n');
            let hover : any = await this.prepareHover('vvv = 42');
            expect(hover.containingLibraryName,isNull);
            expect(hover.containingLibraryPath,isNull);
            expect(hover.containingClassDescription,isNull);
            expect(hover.dartdoc,isNull);
            expect(hover.elementDescription,'num vvv');
            expect(hover.elementKind,'local variable');
            expect(hover.staticType,'num');
            expect(hover.propagatedType,'int');
            expect(hover.parameter,isNull);
        } )());
    }

    test_instanceCreation_implicit() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('library my.library;\nclass A {\n}\nmain() {\n  new A();\n}\n');
            let hover : any = await this.prepareHover('new A');
            expect(hover.offset,this.findOffset('new A'));
            expect(hover.length,new core.DartString('new A()').length);
            expect(hover.containingLibraryName,'my.library');
            expect(hover.containingLibraryPath,this.testFile);
            expect(hover.dartdoc,isNull);
            expect(hover.elementDescription,'A() → A');
            expect(hover.elementKind,'constructor');
            expect(hover.staticType,isNull);
            expect(hover.propagatedType,isNull);
            expect(hover.parameter,isNull);
        } )());
    }

    test_instanceCreation_implicit_withTypeArgument() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('library my.library;\nclass A<T> {}\nmain() {\n  new A<String>();\n}\n');
            var onConstructor : (hover : any) => void = (hover : any) : void =>  {
                expect(hover.offset,this.findOffset('new A<String>'));
                expect(hover.length,new core.DartString('new A<String>()').length);
                expect(hover.containingLibraryName,'my.library');
                expect(hover.containingLibraryPath,this.testFile);
                expect(hover.dartdoc,isNull);
                expect(hover.elementDescription,'A() → A<String>');
                expect(hover.elementKind,'constructor');
                expect(hover.staticType,isNull);
                expect(hover.propagatedType,isNull);
                expect(hover.parameter,isNull);
            };
            {
                let hover : any = await this.prepareHover('new A');
                onConstructor(hover);
            }
            {
                let hover : any = await this.prepareHover('A<String>()');
                onConstructor(hover);
            }
            {
                let hover : any = await this.prepareHover('String>');
                expect(hover.offset,this.findOffset('String>'));
                expect(hover.length,new core.DartString('String').length);
                expect(hover.elementKind,'class');
            }
        } )());
    }

    test_instanceCreation_named() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('library my.library;\nclass A {\n  /// my doc\n  A.named() {}\n}\nmain() {\n  new A.named();\n}\n');
            var onConstructor : (hover : any) => void = (hover : any) : void =>  {
                expect(hover.offset,this.findOffset('new A'));
                expect(hover.length,new core.DartString('new A.named()').length);
                expect(hover.dartdoc,'my doc');
                expect(hover.elementDescription,'A.named() → A');
                expect(hover.elementKind,'constructor');
            };
            {
                let hover : any = await this.prepareHover('new A');
                onConstructor(hover);
            }
            {
                let hover : any = await this.prepareHover('named();');
                onConstructor(hover);
            }
        } )());
    }

    test_noHoverInfo() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('library my.library;\nmain() {\n  // nothing\n}\n');
            let hover : any = await this.prepareHover('nothing');
            expect(hover,isNull);
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    AnalysisHoverTest() {
    }
}

export class properties {
}
