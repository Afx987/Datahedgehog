/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/analysis/notification_navigation_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../analysis_abstract";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(AnalysisNotificationNavigationTest);
    });
};
export namespace AbstractNavigationTest {
    export type Constructors = lib3.AbstractAnalysisTest.Constructors | 'AbstractNavigationTest';
    export type Interface = Omit<AbstractNavigationTest, Constructors>;
}
@DartClass
export class AbstractNavigationTest extends lib3.AbstractAnalysisTest {
    regions : core.DartList<any>;

    targets : core.DartList<any>;

    targetFiles : core.DartList<string>;

    testRegion : any;

    testTargetIndexes : core.DartList<number>;

    testTargets : core.DartList<any>;

    testTarget : any;

    assertHasFileTarget(file : string,offset : number,length : number) : void {
        for(let target of this.testTargets) {
            if (this.targetFiles[target.fileIndex] == file && op(Op.EQUALS,target.offset,offset) && op(Op.EQUALS,target.length,length)) {
                this.testTarget = target;
                return;
            }
        }
        fail(`Expected to find target (file=${file}; offset=${offset}; length=${length}) in\n` + `${this.testRegion} in\n` + `${this.testTargets.join('\n')}`);
    }
    assertHasOperatorRegion(regionSearch : string,regionLength : number,targetSearch : string,targetLength : number) : void {
        this.assertHasRegion(regionSearch,regionLength);
        this.assertHasTarget(targetSearch,targetLength);
    }
    assertHasRegion(search : string,length? : number) : void {
        length = length || -1;
        let offset : number = this.findOffset(search);
        if (length == -1) {
            length = lib3.findIdentifierLength(search);
        }
        this.findRegion(offset,length,true);
    }
    assertHasRegionString(search : string,length? : number) : void {
        length = length || -1;
        let offset : number = this.findOffset(search);
        if (length == -1) {
            length = new core.DartString(search).length;
        }
        this.findRegion(offset,length,true);
    }
    assertHasRegionTarget(regionSearch : string,targetSearch : string) : void {
        this.assertHasRegion(regionSearch);
        this.assertHasTarget(targetSearch);
    }
    assertHasTarget(search : string,length? : number) : void {
        length = length || -1;
        let offset : number = this.findOffset(search);
        if (length == -1) {
            length = lib3.findIdentifierLength(search);
        }
        this.assertHasFileTarget(this.testFile,offset,length);
    }
    assertHasTargetString(str : string) : void {
        this.assertHasTarget(str,new core.DartString(str).length);
    }
    assertNoRegion(search : string,length : number) : void {
        let offset : number = this.findOffset(search);
        this.findRegion(offset,length,false);
    }
    assertNoRegionAt(search : string) : void {
        let offset : number = this.findOffset(search);
        this.findRegion(offset,-1,false);
    }
    assertNoRegionString(search : string) : void {
        let offset : number = this.findOffset(search);
        let length : number = new core.DartString(search).length;
        this.findRegion(offset,length,false);
    }
    assertRegionsSorted() : void {
        let lastEnd : number = -1;
        for(let region of this.regions) {
            let offset : number = region.offset;
            if (offset < lastEnd) {
                fail(`${lastEnd} was expected to be > ${offset} in\n` + this.regions.join('\n'));
            }
            lastEnd = offset + region.length;
        }
    }
    findRegion(offset : number,length : number,exists : boolean) : void {
        for(let region of this.regions) {
            if (op(Op.EQUALS,region.offset,offset) && (length == -1 || op(Op.EQUALS,region.length,length))) {
                if (exists == false) {
                    fail(`Not expected to find (offset=${offset}; length=${length}) in\n` + `${this.regions.join('\n')}`);
                }
                this.testRegion = region;
                this.testTargetIndexes = region.targets;
                this.testTargets = this.testTargetIndexes.map((i : any) =>  {
                    return this.targets[i];
                }).toList();
                return;
            }
        }
        if (exists == true) {
            fail(`Expected to find (offset=${offset}; length=${length}) in\n` + `${this.regions.join('\n')}`);
        }
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    AbstractNavigationTest() {
    }
}

export namespace AnalysisNotificationNavigationTest {
    export type Constructors = AbstractNavigationTest.Constructors | 'AnalysisNotificationNavigationTest';
    export type Interface = Omit<AnalysisNotificationNavigationTest, Constructors>;
}
@DartClass
export class AnalysisNotificationNavigationTest extends AbstractNavigationTest {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get enableNewAnalysisDriver() : boolean {
        return false;
    }
    prepareNavigation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addAnalysisSubscription(AnalysisService.NAVIGATION,this.testFile);
            await this.waitForTasksFinished();
            this.assertRegionsSorted();
        } )());
    }

    processNotification(notification : any) : void {
        if (op(Op.EQUALS,notification.event,ANALYSIS_NAVIGATION)) {
            let params = new bare.createInstance(any,null,notification);
            if (op(Op.EQUALS,params.file,this.testFile)) {
                this.regions = params.regions;
                this.targets = params.targets;
                this.targetFiles = params.files;
            }
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    setUp() : void {
        super.setUp();
        this.createProject();
    }
    test_afterAnalysis() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class AAA {}\nAAA aaa;\n');
            await this.waitForTasksFinished();
            await this.prepareNavigation();
            this.assertHasRegionTarget('AAA aaa;','AAA {}');
        } )());
    }

    test_annotationConstructor_implicit() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {\n}\n@A()\nmain() {\n}\n');
            await this.prepareNavigation();
            this.assertHasRegionString('A()',new core.DartString('A').length);
            this.assertHasTarget('A {');
        } )());
    }

    test_annotationConstructor_importPrefix() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addFile(`${this.testFolder}/my_annotation.dart`,'library an;\nclass MyAnnotation {\n  const MyAnnotation();\n  const MyAnnotation.named();\n}\n');
            this.addTestFile('import \'my_annotation.dart\' as man;\n@man.MyAnnotation()\n@man.MyAnnotation.named()\nmain() {\n}\n');
            await this.prepareNavigation();
            this.assertHasRegion('MyAnnotation()');
            this.assertHasRegion('MyAnnotation.named()');
            this.assertHasRegion('named()');
            {
                this.assertHasRegion('man.MyAnnotation()');
                this.assertHasTarget('man;');
            }
            {
                this.assertHasRegion('man.MyAnnotation.named()');
                this.assertHasTarget('man;');
            }
        } )());
    }

    test_annotationConstructor_named() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {\n  const A.named(p);\n}\n@A.named(0)\nmain() {\n}\n');
            await this.prepareNavigation();
            {
                this.assertHasRegion('A.named(0)');
                this.assertHasTarget('named(p);');
            }
            {
                this.assertHasRegion('named(0)');
                this.assertHasTarget('named(p);');
            }
        } )());
    }

    test_annotationConstructor_unnamed() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {\n  const A();\n}\n@A()\nmain() {\n}\n');
            await this.prepareNavigation();
            this.assertHasRegionString('A()',new core.DartString('A').length);
            this.assertHasTarget('A();',0);
        } )());
    }

    test_annotationField() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('const myan = new Object();\n@myan // ref\nmain() {\n}\n');
            await this.prepareNavigation();
            this.assertHasRegion('myan // ref');
            this.assertHasTarget('myan = new Object();');
        } )());
    }

    test_annotationField_importPrefix() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addFile(`${this.testFolder}/mayn.dart`,'library an;\nconst myan = new Object();\n');
            this.addTestFile('import \'mayn.dart\' as man;\n@man.myan // ref\nmain() {\n}\n');
            await this.prepareNavigation();
            this.assertHasRegion('myan // ref');
        } )());
    }

    test_class_fromSDK() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('int V = 42;\n');
            await this.prepareNavigation();
            this.assertHasRegion('int V');
            let targetIndex : number = this.testTargetIndexes[0];
            let target : any = this.targets[targetIndex];
            expect(target.startLine,greaterThan(0));
            expect(target.startColumn,greaterThan(0));
        } )());
    }

    test_constructor_named() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {\n  A.named(BBB p) {}\n}\nclass BBB {}\n');
            await this.prepareNavigation();
            this.assertHasRegionString('A.named');
            this.assertHasTarget('named(BBB');
            this.assertNoRegion('A.named(',new core.DartString('A').length);
            this.assertNoRegion('named(',new core.DartString('named').length);
            this.assertHasRegionTarget('BBB p','BBB {}');
        } )());
    }

    test_constructor_unnamed() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {\n  A(BBB p) {}\n}\nclass BBB {}\n');
            await this.prepareNavigation();
            this.assertHasRegion("A(BBB");
            this.assertHasTarget("A(BBB",0);
            this.assertHasRegionTarget('BBB p','BBB {}');
        } )());
    }

    test_factoryRedirectingConstructor_implicit() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {\n  factory A() = B;\n}\nclass B {\n}\n');
            await this.prepareNavigation();
            this.assertHasRegion('B;');
            this.assertHasTarget('B {');
        } )());
    }

    test_factoryRedirectingConstructor_implicit_withTypeArgument() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {}\nclass B {\n  factory B() = C<A>;\n}\nclass C<T> {}\n');
            await this.prepareNavigation();
            {
                this.assertHasRegion('C<A>');
                this.assertHasTarget('C<T> {');
            }
            {
                this.assertHasRegion('A>;');
                this.assertHasTarget('A {');
            }
        } )());
    }

    test_factoryRedirectingConstructor_named() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {\n  factory A() = B.named;\n}\nclass B {\n  B.named();\n}\n');
            await this.prepareNavigation();
            {
                this.assertHasRegionString('B.named;',new core.DartString('B').length);
                this.assertHasTarget('named();');
            }
            {
                this.assertHasRegionString('named;',new core.DartString('named').length);
                this.assertHasTarget('named();');
            }
        } )());
    }

    test_factoryRedirectingConstructor_named_withTypeArgument() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {}\nclass B {\n  factory B.named() = C<A>.named;\n}\nclass C<T> {\n  C.named() {}\n}\n');
            await this.prepareNavigation();
            {
                this.assertHasRegion('C<A>');
                this.assertHasTarget('named() {}');
            }
            {
                this.assertHasRegion('A>.named');
                this.assertHasTarget('A {');
            }
            {
                this.assertHasRegion('named;',new core.DartString('named').length);
                this.assertHasTarget('named() {}');
            }
        } )());
    }

    test_factoryRedirectingConstructor_unnamed() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {\n  factory A() = B;\n}\nclass B {\n  B() {}\n}\n');
            await this.prepareNavigation();
            this.assertHasRegion('B;');
            this.assertHasTarget('B() {}',0);
        } )());
    }

    test_factoryRedirectingConstructor_unnamed_withTypeArgument() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {}\nclass B {\n  factory B() = C<A>;\n}\nclass C<T> {\n  C() {}\n}\n');
            await this.prepareNavigation();
            {
                this.assertHasRegion('C<A>');
                this.assertHasTarget('C() {}',0);
            }
            {
                this.assertHasRegion('A>;');
                this.assertHasTarget('A {');
            }
        } )());
    }

    test_factoryRedirectingConstructor_unresolved() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {\n  factory A() = B;\n}\n');
            await this.prepareNavigation();
        } )());
    }

    test_fieldFormalParameter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class AAA {\n  int fff = 123;\n  AAA(this.fff);\n}\n');
            await this.prepareNavigation();
            this.assertHasRegionTarget('fff);','fff = 123');
        } )());
    }

    test_fieldFormalParameter_unresolved() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class AAA {\n  AAA(this.fff);\n}\n');
            await this.prepareNavigation();
            this.assertNoRegion('fff);',3);
        } )());
    }

    test_identifier_resolved() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class AAA {}\nmain() {\n  AAA aaa = null;\n  print(aaa);\n}\n');
            await this.prepareNavigation();
            this.assertHasRegionTarget('AAA aaa','AAA {}');
            this.assertHasRegionTarget('aaa);','aaa = null');
            this.assertHasRegionTarget('main() {','main() {');
        } )());
    }

    test_identifier_unresolved() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('main() {\n  print(vvv);\n}\n');
            await this.prepareNavigation();
            this.assertNoRegionString('vvv');
        } )());
    }

    test_identifier_whenStrayImportDirective() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('main() {\n  int aaa = 42;\n  print(aaa);\n}\nimport \'dart:math\';\n');
            await this.prepareNavigation();
            this.assertHasRegionTarget('aaa);','aaa = 42');
        } )());
    }

    test_inComment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class FirstClass {}\nclass SecondClass {\n  /**\n   * Return a [FirstClass] object equivalent to this object in every other way.\n   */\n  convert() {\n    return new FirstClass();\n  }\n}\n');
            await this.prepareNavigation();
            this.assertHasRegionTarget('FirstClass]','FirstClass {');
            this.assertHasRegionTarget('FirstClass(','FirstClass {');
        } )());
    }

    test_instanceCreation_implicit() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {\n}\nmain() {\n  new A();\n}\n');
            await this.prepareNavigation();
            this.assertHasRegionString('A()',new core.DartString('A').length);
            this.assertHasTarget('A {');
        } )());
    }

    test_instanceCreation_implicit_withTypeArgument() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {}\nclass B<T> {}\nmain() {\n  new B<A>();\n}\n');
            await this.prepareNavigation();
            {
                this.assertHasRegion('B<A>',new core.DartString('B').length);
                this.assertHasTarget('B<T> {');
            }
            {
                this.assertHasRegion('A>();',new core.DartString('A').length);
                this.assertHasTarget('A {');
            }
        } )());
    }

    test_instanceCreation_named() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {\n  A.named() {}\n}\nmain() {\n  new A.named();\n}\n');
            await this.prepareNavigation();
            {
                this.assertHasRegionString('A.named();',new core.DartString('A').length);
                this.assertHasTarget('named() {}');
            }
            {
                this.assertHasRegionString('named();',new core.DartString('named').length);
                this.assertHasTarget('named() {}');
            }
        } )());
    }

    test_instanceCreation_named_withTypeArgument() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {}\nclass B<T> {\n  B.named() {}\n}\nmain() {\n  new B<A>.named();\n}\n');
            await this.prepareNavigation();
            {
                this.assertHasRegionString('B<A>',new core.DartString('B').length);
                this.assertHasTarget('named() {}');
            }
            {
                this.assertHasRegion('A>.named');
                this.assertHasTarget('A {');
            }
            {
                this.assertHasRegion('named();',new core.DartString('named').length);
                this.assertHasTarget('named() {}');
            }
        } )());
    }

    test_instanceCreation_unnamed() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {\n  A() {}\n}\nmain() {\n  new A();\n}\n');
            await this.prepareNavigation();
            this.assertHasRegionString('A();',new core.DartString('A').length);
            this.assertHasTarget('A() {}',0);
        } )());
    }

    test_instanceCreation_unnamed_withTypeArgument() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {}\nclass B<T> {\n  B() {}\n}\nmain() {\n  new B<A>();\n}\n');
            await this.prepareNavigation();
            {
                this.assertHasRegionString('B<A>();',new core.DartString('B').length);
                this.assertHasTarget('B() {}',0);
            }
            {
                this.assertHasRegion('A>();');
                this.assertHasTarget('A {');
            }
        } )());
    }

    test_instanceCreation_withImportPrefix_named() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('import \'dart:async\' as ppp;\nmain() {\n  new ppp.Future.value(42);\n}\n');
            await this.prepareNavigation();
            {
                this.assertHasRegion('ppp.');
                this.assertHasTarget('ppp;');
            }
            this.assertHasRegion('Future.value');
            this.assertHasRegion('value(42)');
        } )());
    }

    test_library() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('library my.lib;\n');
            await this.prepareNavigation();
            this.assertHasRegionString('my.lib');
            this.assertHasTargetString('my.lib');
        } )());
    }

    test_multiplyDefinedElement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addFile(`${this.projectPath}/bin/libA.dart`,'library A; int TEST = 1;');
            this.addFile(`${this.projectPath}/bin/libB.dart`,'library B; int TEST = 2;');
            this.addTestFile('import \'libA.dart\';\nimport \'libB.dart\';\nmain() {\n  TEST;\n}\n');
            await this.prepareNavigation();
            this.assertNoRegionAt('TEST');
        } )());
    }

    test_operator_arithmetic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {\n  A operator +(other) => null;\n  A operator -() => null;\n  A operator -(other) => null;\n  A operator *(other) => null;\n  A operator /(other) => null;\n}\nmain() {\n  var a = new A();\n  a - 1;\n  a + 2;\n  -a; // unary\n  --a;\n  ++a;\n  a--; // mm\n  a++; // pp\n  a -= 3;\n  a += 4;\n  a *= 5;\n  a /= 6;\n}\n');
            await this.prepareNavigation();
            this.assertHasOperatorRegion('- 1',1,'-(other) => null',1);
            this.assertHasOperatorRegion('+ 2',1,'+(other) => null',1);
            this.assertHasOperatorRegion('-a; // unary',1,'-() => null',1);
            this.assertHasOperatorRegion('--a;',2,'-(other) => null',1);
            this.assertHasOperatorRegion('++a;',2,'+(other) => null',1);
            this.assertHasOperatorRegion('--; // mm',2,'-(other) => null',1);
            this.assertHasOperatorRegion('++; // pp',2,'+(other) => null',1);
            this.assertHasOperatorRegion('-= 3',2,'-(other) => null',1);
            this.assertHasOperatorRegion('+= 4',2,'+(other) => null',1);
            this.assertHasOperatorRegion('*= 5',2,'*(other) => null',1);
            this.assertHasOperatorRegion('/= 6',2,'/(other) => null',1);
        } )());
    }

    test_operator_index() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {\n  A operator +(other) => null;\n}\nclass B {\n  A operator [](index) => null;\n  operator []=(index, A value) {}\n}\nmain() {\n  var b = new B();\n  b[0] // [];\n  b[1] = 1; // []=;\n  b[2] += 2;\n}\n');
            await this.prepareNavigation();
            this.assertHasOperatorRegion('[0',1,'[](index)',2);
            this.assertHasOperatorRegion('] // []',1,'[](index)',2);
            this.assertHasOperatorRegion('[1',1,'[]=(index,',3);
            this.assertHasOperatorRegion('] = 1;',1,'[]=(index,',3);
            this.assertHasOperatorRegion('[2',1,'[]=(index,',3);
            this.assertHasOperatorRegion('] += 2;',1,'[]=(index,',3);
            this.assertHasOperatorRegion('+= 2;',2,'+(other)',1);
        } )());
    }

    test_partOf() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let libCode = 'library lib; part "test.dart";';
            let libFile = this.addFile(`${this.projectPath}/bin/lib.dart`,libCode);
            this.addTestFile('part of lib;');
            await this.prepareNavigation();
            this.assertHasRegionString('lib');
            this.assertHasFileTarget(libFile,new core.DartString(libCode).indexOf('lib;'),new core.DartString('lib').length);
        } )());
    }

    test_redirectingConstructorInvocation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {\n  A() {}\n  A.foo() : this();\n  A.bar() : this.foo();\n}\n');
            await this.prepareNavigation();
            {
                this.assertHasRegion('this();');
                this.assertHasTarget('A() {}',0);
            }
            {
                this.assertHasRegion('this.foo');
                this.assertHasTarget('foo() :');
            }
            {
                this.assertHasRegion('foo();');
                this.assertHasTarget('foo() :');
            }
        } )());
    }

    test_string_export() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let libCode = 'library lib;';
            let libFile = this.addFile(`${this.projectPath}/bin/lib.dart`,libCode);
            this.addTestFile('export "lib.dart";');
            await this.prepareNavigation();
            this.assertHasRegionString('"lib.dart"');
            this.assertHasFileTarget(libFile,new core.DartString(libCode).indexOf('lib;'),new core.DartString('lib').length);
        } )());
    }

    test_string_export_unresolvedUri() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('export "no.dart";');
            await this.prepareNavigation();
            this.assertNoRegionString('"no.dart"');
        } )());
    }

    test_string_import() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let libCode = 'library lib;';
            let libFile = this.addFile(`${this.projectPath}/bin/lib.dart`,libCode);
            this.addTestFile('import "lib.dart";');
            await this.prepareNavigation();
            this.assertHasRegionString('"lib.dart"');
            this.assertHasFileTarget(libFile,new core.DartString(libCode).indexOf('lib;'),new core.DartString('lib').length);
        } )());
    }

    test_string_import_noUri() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('import ;');
            await this.prepareNavigation();
            this.assertNoRegionAt('import ;');
        } )());
    }

    test_string_import_unresolvedUri() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('import "no.dart";');
            await this.prepareNavigation();
            this.assertNoRegionString('"no.dart"');
        } )());
    }

    test_string_part() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let unitCode = 'part of lib;  f() {}';
            let unitFile = this.addFile(`${this.projectPath}/bin/test_unit.dart`,unitCode);
            this.addTestFile('library lib;\npart "test_unit.dart";\n');
            await this.prepareNavigation();
            this.assertHasRegionString('"test_unit.dart"');
            this.assertHasFileTarget(unitFile,0,0);
        } )());
    }

    test_string_part_unresolvedUri() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('library lib;\npart "test_unit.dart";\n');
            await this.prepareNavigation();
            this.assertNoRegionString('"test_unit.dart"');
        } )());
    }

    test_superConstructorInvocation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {\n  A() {}\n  A.named() {}\n}\nclass B extends A {\n  B() : super();\n  B.named() : super.named();\n}\n');
            await this.prepareNavigation();
            {
                this.assertHasRegionString('super');
                this.assertHasTarget('A() {}',0);
            }
            {
                this.assertHasRegion('super.named');
                this.assertHasTarget('named() {}');
            }
            {
                this.assertHasRegion('named();');
                this.assertHasTarget('named() {}');
            }
        } )());
    }

    test_superConstructorInvocation_synthetic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {\n}\nclass B extends A {\n  B() : super();\n}\n');
            await this.prepareNavigation();
            this.assertHasRegionString('super');
            this.assertHasTarget('A {');
        } )());
    }

    test_targetElement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class AAA {}\nmain() {\n  AAA aaa = null;\n}\n');
            await this.prepareNavigation();
            this.assertHasRegionTarget('AAA aaa','AAA {}');
            expect(this.testTarget.kind,ElementKind.CLASS);
        } )());
    }

    test_type_dynamic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('main() {\n  dynamic v = null;\n}\n');
            await this.prepareNavigation();
            this.assertNoRegionAt('dynamic');
        } )());
    }

    test_type_void() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('void main() {\n}\n');
            await this.prepareNavigation();
            this.assertNoRegionAt('void');
        } )());
    }

    test_var_declaredVariable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class C {}\nf(List<C> items) {\n  for (var item in items) {}\n}\n');
            await this.prepareNavigation();
            this.assertHasRegionTarget('var','C {}');
            expect(this.testTarget.kind,ElementKind.CLASS);
        } )());
    }

    test_var_localVariable_multiple_inferred_different() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {}\nclass B {}\nvoid f() {\n  var a = new A(), b = new B();\n}\n');
            await this.prepareNavigation();
            this.assertNoRegionAt('var');
        } )());
    }

    test_var_localVariable_multiple_inferred_same() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class C {}\nvoid f() {\n  var a = new C(), b = new C();\n}\n');
            await this.prepareNavigation();
            this.assertHasRegionTarget('var','C {}');
            expect(this.testTarget.kind,ElementKind.CLASS);
        } )());
    }

    test_var_localVariable_single_inferred() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class C {}\nf() {\n  var c = new C();\n}\n');
            await this.prepareNavigation();
            this.assertHasRegionTarget('var','C {}');
            expect(this.testTarget.kind,ElementKind.CLASS);
        } )());
    }

    test_var_localVariable_single_notInferred() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('f() {\n  var x;\n}\n');
            await this.prepareNavigation();
            this.assertNoRegionAt('var');
        } )());
    }

    test_var_topLevelVariable_multiple_inferred_different() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {}\nclass B {}\nvar a = new A(), b = new B();\n');
            await this.prepareNavigation();
            this.assertNoRegionAt('var');
        } )());
    }

    test_var_topLevelVariable_multiple_inferred_same() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class C {}\nvar a = new C(), b = new C();\n');
            await this.prepareNavigation();
            this.assertHasRegionTarget('var','C {}');
            expect(this.testTarget.kind,ElementKind.CLASS);
        } )());
    }

    test_var_topLevelVariable_single_inferred() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class C {}\nvar c = new C();\n');
            await this.prepareNavigation();
            this.assertHasRegionTarget('var','C {}');
            expect(this.testTarget.kind,ElementKind.CLASS);
        } )());
    }

    test_var_topLevelVariable_single_notInferred() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('var x;\n');
            await this.prepareNavigation();
            this.assertNoRegionAt('var');
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    AnalysisNotificationNavigationTest() {
    }
}

export class properties {
}
