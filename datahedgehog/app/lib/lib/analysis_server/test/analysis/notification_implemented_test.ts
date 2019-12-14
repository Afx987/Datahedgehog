/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/analysis/notification_implemented_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../analysis_abstract";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(AnalysisNotificationImplementedTest);
    });
};
export namespace AnalysisNotificationImplementedTest {
    export type Constructors = lib3.AbstractAnalysisTest.Constructors | 'AnalysisNotificationImplementedTest';
    export type Interface = Omit<AnalysisNotificationImplementedTest, Constructors>;
}
@DartClass
export class AnalysisNotificationImplementedTest extends lib3.AbstractAnalysisTest {
    implementedClasses : core.DartList<any>;

    implementedMembers : core.DartList<any>;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get enableNewAnalysisDriver() : boolean {
        return false;
    }
    assertHasImplementedClass(search : string,length? : number) : void {
        length = length || -1;
        let offset : number = this.findOffset(search);
        if (length == -1) {
            length = lib3.findIdentifierLength(search);
        }
        if (this.implementedClasses == null) {
            fail('No notification of impemented classes was received');
        }
        for(let clazz of this.implementedClasses) {
            if (op(Op.EQUALS,clazz.offset,offset) && op(Op.EQUALS,clazz.length,length)) {
                return;
            }
        }
        fail(`Expect to find an implemented class at ${offset}` + ` in ${this.implementedClasses}`);
    }
    assertHasImplementedMember(search : string,length? : number) : void {
        length = length || -1;
        let offset : number = this.findOffset(search);
        if (length == -1) {
            length = lib3.findIdentifierLength(search);
        }
        if (this.implementedMembers == null) {
            fail('No notification of impemented members was received');
        }
        for(let member of this.implementedMembers) {
            if (op(Op.EQUALS,member.offset,offset) && op(Op.EQUALS,member.length,length)) {
                return;
            }
        }
        fail(`Expect to find an implemented member at ${offset}` + ` in ${this.implementedMembers}`);
    }
    assertNoImplementedMember(search : string,length? : number) : void {
        length = length || -1;
        let offset : number = this.findOffset(search);
        if (length == -1) {
            length = lib3.findIdentifierLength(search);
        }
        if (this.implementedMembers == null) {
            fail('No notification of impemented members was received');
        }
        for(let member of this.implementedMembers) {
            if (op(Op.EQUALS,member.offset,offset)) {
                fail(`Unexpected implemented member at ${offset}` + ` in ${this.implementedMembers}`);
            }
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createIndex() : any {
        return createMemoryIndex();
    }
    prepareImplementedElements() : async.Future<any> {
        this.subscribeForImplemented();
        return this.waitForImplementedElements();
    }
    processNotification(notification : any) : void {
        if (op(Op.EQUALS,notification.event,ANALYSIS_IMPLEMENTED)) {
            let params = new bare.createInstance(any,null,notification);
            if (op(Op.EQUALS,params.file,this.testFile)) {
                this.implementedClasses = params.classes;
                this.implementedMembers = params.members;
            }
        }
    }
    setUp() : void {
        super.setUp();
        this.createProject();
    }
    subscribeForImplemented() : void {
        this.addAnalysisSubscription(AnalysisService.IMPLEMENTED,this.testFile);
    }
    test_afterAnalysis() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {}\nclass B extends A {}\n');
            await this.waitForTasksFinished();
            await this.prepareImplementedElements();
            this.assertHasImplementedClass('A {');
        } )());
    }

    test_afterIncrementalResolution() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.subscribeForImplemented();
            this.addTestFile('class A {}\nclass B extends A {}\n');
            await this.prepareImplementedElements();
            this.assertHasImplementedClass('A {');
            this.implementedClasses = null;
            this.testCode = 'class A  {}\nclass B extends A {}\n';
            this.server.updateContent('1',new core.DartMap.literal([
                [this.testFile,new bare.createInstance(any,null,this.testCode)]]));
            await this.waitForImplementedElements();
            this.assertHasImplementedClass('A  {');
        } )());
    }

    test_class_extended() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {}\nclass B extends A {}\n');
            await this.prepareImplementedElements();
            this.assertHasImplementedClass('A {');
        } )());
    }

    test_class_implemented() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {}\nclass B implements A {}\n');
            await this.prepareImplementedElements();
            this.assertHasImplementedClass('A {');
        } )());
    }

    test_class_mixed() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {}\nclass B = Object with A;\n');
            await this.prepareImplementedElements();
            this.assertHasImplementedClass('A {');
        } )());
    }

    test_field_withField() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {\n  int f; // A\n}\nclass B extends A {\n  int f;\n}\n');
            await this.prepareImplementedElements();
            this.assertHasImplementedMember('f; // A');
        } )());
    }

    test_field_withGetter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {\n  int f; // A\n}\nclass B extends A {\n  get f => null;\n}\n');
            await this.prepareImplementedElements();
            this.assertHasImplementedMember('f; // A');
        } )());
    }

    test_field_withSetter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {\n  int f; // A\n}\nclass B extends A {\n  void set f(_) {}\n}\n');
            await this.prepareImplementedElements();
            this.assertHasImplementedMember('f; // A');
        } )());
    }

    test_getter_withField() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {\n  get f => null; // A\n}\nclass B extends A {\n  int f;\n}\n');
            await this.prepareImplementedElements();
            this.assertHasImplementedMember('f => null; // A');
        } )());
    }

    test_getter_withGetter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {\n  get f => null; // A\n}\nclass B extends A {\n  get f => null;\n}\n');
            await this.prepareImplementedElements();
            this.assertHasImplementedMember('f => null; // A');
        } )());
    }

    test_method_withMethod() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {\n  m() {} // A\n}\nclass B extends A {\n  m() {} // B\n}\n');
            await this.prepareImplementedElements();
            this.assertHasImplementedMember('m() {} // A');
            this.assertNoImplementedMember('m() {} // B');
        } )());
    }

    test_method_withMethod_indirectSubclass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {\n  m() {} // A\n}\nclass B extends A {\n}\nclass C extends A {\n  m() {}\n}\n');
            await this.prepareImplementedElements();
            this.assertHasImplementedMember('m() {} // A');
        } )());
    }

    test_method_withMethod_private_differentLib() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addFile(`${this.testFolder}/lib.dart`,'import \'test.dart\';\nclass B extends A {\n  void _m() {}\n}\n');
            this.addTestFile('class A {\n  _m() {} // A\n}\n');
            await this.prepareImplementedElements();
            this.assertNoImplementedMember('_m() {} // A');
        } )());
    }

    test_method_withMethod_private_sameLibrary() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {\n  _m() {} // A\n}\nclass B extends A {\n  _m() {} // B\n}\n');
            await this.prepareImplementedElements();
            this.assertHasImplementedMember('_m() {} // A');
            this.assertNoImplementedMember('_m() {} // B');
        } )());
    }

    test_method_withMethod_wasAbstract() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('abstract class A {\n  m(); // A\n}\nclass B extends A {\n  m() {}\n}\n');
            await this.prepareImplementedElements();
            this.assertHasImplementedMember('m(); // A');
        } )());
    }

    test_setter_withField() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {\n  set f(_) {} // A\n}\nclass B extends A {\n  int f;\n}\n');
            await this.prepareImplementedElements();
            this.assertHasImplementedMember('f(_) {} // A');
        } )());
    }

    test_setter_withSetter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {\n  set f(_) {} // A\n}\nclass B extends A {\n  set f(_) {} // B\n}\n');
            await this.prepareImplementedElements();
            this.assertHasImplementedMember('f(_) {} // A');
        } )());
    }

    test_static_field_instanceStatic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {\n  int F = 0;\n}\nclass B extends A {\n  static int F = 1;\n}\n');
            await this.prepareImplementedElements();
            this.assertNoImplementedMember('F = 0');
        } )());
    }

    test_static_field_staticInstance() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {\n  static int F = 0;\n}\nclass B extends A {\n  int F = 1;\n}\n');
            await this.prepareImplementedElements();
            this.assertNoImplementedMember('F = 0');
        } )());
    }

    test_static_field_staticStatic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {\n  static int F = 0;\n}\nclass B extends A {\n  static int F = 1;\n}\n');
            await this.prepareImplementedElements();
            this.assertNoImplementedMember('F = 0');
        } )());
    }

    test_static_method_instanceStatic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {\n  int m() => 0;\n}\nclass B extends A {\n  static int m() => 1;\n}\n');
            await this.prepareImplementedElements();
            this.assertNoImplementedMember('m() => 0');
        } )());
    }

    test_static_method_staticInstance() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {\n  static int m() => 0;\n}\nclass B extends A {\n  int m() => 1;\n}\n');
            await this.prepareImplementedElements();
            this.assertNoImplementedMember('m() => 0');
        } )());
    }

    test_static_method_staticStatic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {\n  static int m() => 0;\n}\nclass B extends A {\n  static int m() => 1;\n}\n');
            await this.prepareImplementedElements();
            this.assertNoImplementedMember('m() => 0');
        } )());
    }

    waitForImplementedElements() : async.Future<any> {
        var waitForNotification : (times : number) => async.Future<any> = (times : number) : async.Future<any> =>  {
            if (times == 0 || this.implementedClasses != null) {
                return new async.Future.value();
            }
            return new async.Future.delayed(new core.DartDuration({
                milliseconds : 1}),() =>  {
                return waitForNotification(times - 1);
            });
        };
        return waitForNotification(30000);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    AnalysisNotificationImplementedTest() {
    }
}

export class properties {
}
