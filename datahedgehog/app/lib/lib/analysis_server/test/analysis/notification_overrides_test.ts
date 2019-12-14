/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/analysis/notification_overrides_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../analysis_abstract";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(AnalysisNotificationOverridesTest);
    });
};
export namespace AnalysisNotificationOverridesTest {
    export type Constructors = lib3.AbstractAnalysisTest.Constructors | 'AnalysisNotificationOverridesTest';
    export type Interface = Omit<AnalysisNotificationOverridesTest, Constructors>;
}
@DartClass
export class AnalysisNotificationOverridesTest extends lib3.AbstractAnalysisTest {
    overridesList : core.DartList<any>;

    override : any;

    get enableNewAnalysisDriver() : boolean {
        return false;
    }
    assertHasInterfaceMember(search : string) : void {
        let offset : number = this.findOffset(search);
        for(let member of this.override.interfaceMembers) {
            if (op(Op.EQUALS,member.element.location.offset,offset)) {
                return;
            }
        }
        fail(`Expect to find an overridden interface members at ${offset} in ` + `${this.override.interfaceMembers.join('\n')}`);
    }
    assertHasOverride(search : string,length? : number) : void {
        length = length || -1;
        let offset : number = this.findOffset(search);
        if (length == -1) {
            length = lib3.findIdentifierLength(search);
        }
        this.findOverride(offset,length,true);
    }
    assertHasSuperElement(search : string) : void {
        let offset : number = this.findOffset(search);
        let member : any = this.override.superclassMember;
        expect(member.element.location.offset,offset);
    }
    assertNoInterfaceMembers() : void {
        expect(this.override.interfaceMembers,isNull);
    }
    assertNoOverride(search : string,length? : number) : void {
        length = length || -1;
        let offset : number = this.findOffset(search);
        if (length == -1) {
            length = lib3.findIdentifierLength(search);
        }
        this.findOverride(offset,length,false);
    }
    assertNoSuperMember() : void {
        expect(this.override.superclassMember,isNull);
    }
    findOverride(offset : number,length : number,exists? : boolean) : void {
        for(let override of this.overridesList) {
            if (op(Op.EQUALS,override.offset,offset) && op(Op.EQUALS,override.length,length)) {
                if (exists == false) {
                    fail(`Not expected to find (offset=${offset}; length=${length}) in\n` + `${this.overridesList.join('\n')}`);
                }
                this.override = override;
                return;
            }
        }
        if (exists == true) {
            fail(`Expected to find (offset=${offset}; length=${length}) in\n` + `${this.overridesList.join('\n')}`);
        }
    }
    prepareOverrides() : async.Future<any> {
        this.addAnalysisSubscription(AnalysisService.OVERRIDES,this.testFile);
        return this.waitForTasksFinished();
    }
    processNotification(notification : any) : void {
        if (op(Op.EQUALS,notification.event,ANALYSIS_OVERRIDES)) {
            let params = new bare.createInstance(any,null,notification);
            if (op(Op.EQUALS,params.file,this.testFile)) {
                this.overridesList = params.overrides;
            }
        }
    }
    setUp() : void {
        super.setUp();
        this.createProject();
    }
    test_afterAnalysis() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {\n  m() {} // in A\n}\nclass B implements A {\n  m() {} // in B\n}\n');
            await this.waitForTasksFinished();
            await this.prepareOverrides();
            this.assertHasOverride('m() {} // in B');
            this.assertNoSuperMember();
            this.assertHasInterfaceMember('m() {} // in A');
        } )());
    }

    test_BAD_fieldByMethod() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {\n  int fff; // in A\n}\nclass B extends A {\n  fff() {} // in B\n}\n');
            await this.prepareOverrides();
            this.assertNoOverride('fff() {} // in B');
        } )());
    }

    test_BAD_getterByMethod() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {\n  get fff => null;\n}\nclass B extends A {\n  fff() {}\n}\n');
            await this.prepareOverrides();
            this.assertNoOverride('fff() {}');
        } )());
    }

    test_BAD_getterBySetter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {\n  get fff => null;\n}\nclass B extends A {\n  set fff(x) {}\n}\n');
            await this.prepareOverrides();
            this.assertNoOverride('fff(x) {}');
        } )());
    }

    test_BAD_methodByField() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {\n  fff() {} // in A\n}\nclass B extends A {\n  int fff; // in B\n}\n');
            await this.prepareOverrides();
            this.assertNoOverride('fff; // in B');
        } )());
    }

    test_BAD_methodByGetter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {\n  fff() {}\n}\nclass B extends A {\n  int get fff => null;\n}\n');
            await this.prepareOverrides();
            this.assertNoOverride('fff => null');
        } )());
    }

    test_BAD_methodBySetter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {\n  fff(x) {} // A\n}\nclass B extends A {\n  set fff(x) {} // B\n}\n');
            await this.prepareOverrides();
            this.assertNoOverride('fff(x) {} // B');
        } )());
    }

    test_BAD_privateByPrivate_inDifferentLib() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addFile(`${this.testFolder}/lib.dart`,'class A {\n  void _m() {}\n}\n');
            this.addTestFile('import \'lib.dart\';\nclass B extends A {\n  void _m() {} // in B\n}\n');
            await this.prepareOverrides();
            this.assertNoOverride('_m() {} // in B');
        } )());
    }

    test_BAD_setterByGetter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {\n  set fff(x) {}\n}\nclass B extends A {\n  get fff => null;\n}\n');
            await this.prepareOverrides();
            this.assertNoOverride('fff => null;');
        } )());
    }

    test_BAD_setterByMethod() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {\n  set fff(x) {} // A\n}\nclass B extends A {\n  fff(x) {} // B\n}\n');
            await this.prepareOverrides();
            this.assertNoOverride('fff(x) {} // B');
        } )());
    }

    test_definedInInterface_ofInterface() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {\n  m() {} // in A\n}\nclass B implements A {}\nclass C implements B {\n  m() {} // in C\n}\n');
            await this.prepareOverrides();
            this.assertHasOverride('m() {} // in C');
            this.assertNoSuperMember();
            this.assertHasInterfaceMember('m() {} // in A');
        } )());
    }

    test_definedInInterface_ofSuper() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {\n  m() {} // in A\n}\nclass B implements A {}\nclass C extends B {\n  m() {} // in C\n}\n');
            await this.prepareOverrides();
            this.assertHasOverride('m() {} // in C');
            this.assertNoSuperMember();
            this.assertHasInterfaceMember('m() {} // in A');
        } )());
    }

    test_interface_method_direct_multiple() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class IA {\n  m() {} // in IA\n}\nclass IB {\n  m() {} // in IB\n}\nclass A implements IA, IB {\n  m() {} // in A\n}\n');
            await this.prepareOverrides();
            this.assertHasOverride('m() {} // in A');
            this.assertNoSuperMember();
            this.assertHasInterfaceMember('m() {} // in IA');
            this.assertHasInterfaceMember('m() {} // in IB');
        } )());
    }

    test_interface_method_direct_single() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {\n  m() {} // in A\n}\nclass B implements A {\n  m() {} // in B\n}\n');
            await this.prepareOverrides();
            this.assertHasOverride('m() {} // in B');
            this.assertNoSuperMember();
            this.assertHasInterfaceMember('m() {} // in A');
        } )());
    }

    test_interface_method_indirect_single() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {\n  m() {} // in A\n}\nclass B extends A {\n}\nclass C implements B {\n  m() {} // in C\n}\n');
            await this.prepareOverrides();
            this.assertHasOverride('m() {} // in C');
            this.assertNoSuperMember();
            this.assertHasInterfaceMember('m() {} // in A');
        } )());
    }

    test_interface_stopWhenFound() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {\n  m() {} // in A\n}\nclass B extends A {\n  m() {} // in B\n}\nclass C implements B {\n  m() {} // in C\n}\n');
            await this.prepareOverrides();
            this.assertHasOverride('m() {} // in C');
            expect(this.override.interfaceMembers,hasLength(2));
            this.assertHasInterfaceMember('m() {} // in B');
        } )());
    }

    test_mix_sameMethod() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {\n  m() {} // in A\n}\nabstract class B extends A {\n}\nclass C extends A implements A {\n  m() {} // in C\n}\n');
            await this.prepareOverrides();
            this.assertHasOverride('m() {} // in C');
            this.assertHasSuperElement('m() {} // in A');
            this.assertNoInterfaceMembers();
        } )());
    }

    test_mix_sameMethod_Object_hashCode() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {}\nabstract class B {}\nclass C extends A implements A {\n  int get hashCode => 42;\n}\n');
            await this.prepareOverrides();
            this.assertHasOverride('hashCode => 42;');
            expect(this.override.superclassMember,isNotNull);
            expect(this.override.interfaceMembers,isNull);
        } )());
    }

    test_staticMembers() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {\n  static int F = 0;\n  static void M() {}\n  static int get G => 0;\n  static void set S(int v) {}\n}\nclass B extends A {\n  static int F = 0;\n  static void M() {}\n  static int get G => 0;\n  static void set S(int v) {}\n}\n');
            await this.prepareOverrides();
            expect(this.overridesList,isEmpty);
        } )());
    }

    test_super_fieldByField() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {\n  int fff; // in A\n}\nclass B extends A {\n  int fff; // in B\n}\n');
            await this.prepareOverrides();
            this.assertHasOverride('fff; // in B');
            this.assertHasSuperElement('fff; // in A');
            this.assertNoInterfaceMembers();
        } )());
    }

    test_super_fieldByGetter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {\n  int fff; // in A\n}\nclass B extends A {\n  get fff => 0; // in B\n}\n');
            await this.prepareOverrides();
            this.assertHasOverride('fff => 0; // in B');
            this.assertHasSuperElement('fff; // in A');
            this.assertNoInterfaceMembers();
        } )());
    }

    test_super_fieldBySetter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {\n  int fff; // in A\n}\nclass B extends A {\n  set fff(x) {} // in B\n}\n');
            await this.prepareOverrides();
            this.assertHasOverride('fff(x) {} // in B');
            this.assertHasSuperElement('fff; // in A');
            this.assertNoInterfaceMembers();
        } )());
    }

    test_super_getterByField() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {\n  get fff => 0; // in A\n  set fff(x) {} // in A\n}\nclass B extends A {\n  int fff; // in B\n}\n');
            await this.prepareOverrides();
            this.assertHasOverride('fff; // in B');
            this.assertHasSuperElement('fff => 0; // in A');
            this.assertNoInterfaceMembers();
        } )());
    }

    test_super_getterByGetter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {\n  get fff => 0; // in A\n}\nclass B extends A {\n  get fff => 0; // in B\n}\n');
            await this.prepareOverrides();
            this.assertHasOverride('fff => 0; // in B');
            this.assertHasSuperElement('fff => 0; // in A');
            this.assertNoInterfaceMembers();
        } )());
    }

    test_super_method_direct() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {\n  m() {} // in A\n}\nclass B extends A {\n  m() {} // in B\n}\n');
            await this.prepareOverrides();
            this.assertHasOverride('m() {} // in B');
            this.assertHasSuperElement('m() {} // in A');
            this.assertNoInterfaceMembers();
        } )());
    }

    test_super_method_indirect() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {\n  m() {} // in A\n}\nclass B extends A {\n}\nclass C extends B {\n  m() {} // in C\n}\n');
            await this.prepareOverrides();
            this.assertHasOverride('m() {} // in C');
            this.assertHasSuperElement('m() {} // in A');
            this.assertNoInterfaceMembers();
        } )());
    }

    test_super_method_privateByPrivate() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {\n  _m() {} // in A\n}\nclass B extends A {\n  _m() {} // in B\n}\n');
            await this.prepareOverrides();
            this.assertHasOverride('_m() {} // in B');
            this.assertHasSuperElement('_m() {} // in A');
            this.assertNoInterfaceMembers();
        } )());
    }

    test_super_method_superTypeCycle() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A extends B {\n  m() {} // in A\n}\nclass B extends A {\n  m() {} // in B\n}\n');
            await this.prepareOverrides();
        } )());
    }

    test_super_setterBySetter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {\n  set fff(x) {} // in A\n}\nclass B extends A {\n  set fff(x) {} // in B\n}\n');
            await this.prepareOverrides();
            this.assertHasOverride('fff(x) {} // in B');
            this.assertHasSuperElement('fff(x) {} // in A');
            this.assertNoInterfaceMembers();
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    AnalysisNotificationOverridesTest() {
    }
}

export class properties {
}
