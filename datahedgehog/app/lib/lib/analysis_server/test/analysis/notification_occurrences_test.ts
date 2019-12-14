/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/analysis/notification_occurrences_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../analysis_abstract";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(AnalysisNotificationOccurrencesTest);
    });
};
export namespace AnalysisNotificationOccurrencesTest {
    export type Constructors = lib3.AbstractAnalysisTest.Constructors | 'AnalysisNotificationOccurrencesTest';
    export type Interface = Omit<AnalysisNotificationOccurrencesTest, Constructors>;
}
@DartClass
export class AnalysisNotificationOccurrencesTest extends lib3.AbstractAnalysisTest {
    occurrencesList : core.DartList<any>;

    testOccurrences : any;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get enableNewAnalysisDriver() : boolean {
        return false;
    }
    assertHasOffset(search : string) : void {
        let offset : number = this.findOffset(search);
        expect(this.testOccurrences.offsets,contains(offset));
    }
    assertHasRegion(search : string,length? : number) : void {
        length = length || -1;
        let offset : number = this.findOffset(search);
        if (length == -1) {
            length = lib3.findIdentifierLength(search);
        }
        this.findRegion(offset,length,true);
    }
    findRegion(offset : number,length : number,exists? : boolean) : void {
        for(let occurrences of this.occurrencesList) {
            if (occurrences.length != length) {
                continue;
            }
            for(let occurrenceOffset of occurrences.offsets) {
                if (occurrenceOffset == offset) {
                    if (exists == false) {
                        fail(`Not expected to find (offset=${offset}; length=${length}) in\n` + `${this.occurrencesList.join('\n')}`);
                    }
                    this.testOccurrences = occurrences;
                    return;
                }
            }
        }
        if (exists == true) {
            fail(`Expected to find (offset=${offset}; length=${length}) in\n` + `${this.occurrencesList.join('\n')}`);
        }
    }
    prepareOccurrences() : async.Future<any> {
        this.addAnalysisSubscription(AnalysisService.OCCURRENCES,this.testFile);
        return this.waitForTasksFinished();
    }
    processNotification(notification : any) : void {
        if (op(Op.EQUALS,notification.event,ANALYSIS_OCCURRENCES)) {
            let params = new bare.createInstance(any,null,notification);
            if (op(Op.EQUALS,params.file,this.testFile)) {
                this.occurrencesList = params.occurrences;
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
            this.addTestFile('main() {\n  var vvv = 42;\n  print(vvv);\n}\n');
            await this.waitForTasksFinished();
            await this.prepareOccurrences();
            this.assertHasRegion('vvv =');
            expect(this.testOccurrences.element.kind,ElementKind.LOCAL_VARIABLE);
            expect(this.testOccurrences.element.name,'vvv');
            this.assertHasOffset('vvv = 42');
            this.assertHasOffset('vvv);');
        } )());
    }

    test_field() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {\n  int fff;\n  A(this.fff); // constructor\n  main() {\n    fff = 42;\n    print(fff); // print\n  }\n}\n');
            await this.prepareOccurrences();
            this.assertHasRegion('fff;');
            expect(this.testOccurrences.element.kind,ElementKind.FIELD);
            this.assertHasOffset('fff); // constructor');
            this.assertHasOffset('fff = 42;');
            this.assertHasOffset('fff); // print');
        } )());
    }

    test_field_unresolved() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {\n  A(this.noSuchField);\n}\n');
            await this.prepareOccurrences();
        } )());
    }

    test_localVariable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('main() {\n  var vvv = 42;\n  vvv += 5;\n  print(vvv);\n}\n');
            await this.prepareOccurrences();
            this.assertHasRegion('vvv =');
            expect(this.testOccurrences.element.kind,ElementKind.LOCAL_VARIABLE);
            expect(this.testOccurrences.element.name,'vvv');
            this.assertHasOffset('vvv = 42');
            this.assertHasOffset('vvv += 5');
            this.assertHasOffset('vvv);');
        } )());
    }

    test_memberField() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A<T> {\n  T fff;\n}\nmain() {\n  var a = new A<int>();\n  var b = new A<String>();\n  a.fff = 1;\n  b.fff = 2;\n}\n');
            await this.prepareOccurrences();
            this.assertHasRegion('fff;');
            expect(this.testOccurrences.element.kind,ElementKind.FIELD);
            this.assertHasOffset('fff = 1;');
            this.assertHasOffset('fff = 2;');
        } )());
    }

    test_memberMethod() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A<T> {\n  T mmm() {}\n}\nmain() {\n  var a = new A<int>();\n  var b = new A<String>();\n  a.mmm(); // a\n  b.mmm(); // b\n}\n');
            await this.prepareOccurrences();
            this.assertHasRegion('mmm() {}');
            expect(this.testOccurrences.element.kind,ElementKind.METHOD);
            this.assertHasOffset('mmm(); // a');
            this.assertHasOffset('mmm(); // b');
        } )());
    }

    test_topLevelVariable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('var VVV = 1;\nmain() {\n  VVV = 2;\n  print(VVV);\n}\n');
            await this.prepareOccurrences();
            this.assertHasRegion('VVV = 1;');
            expect(this.testOccurrences.element.kind,ElementKind.TOP_LEVEL_VARIABLE);
            this.assertHasOffset('VVV = 2;');
            this.assertHasOffset('VVV);');
        } )());
    }

    test_type_class() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('main() {\n  int a = 1;\n  int b = 2;\n  int c = 3;\n}\nint VVV = 4;\n');
            await this.prepareOccurrences();
            this.assertHasRegion('int a');
            expect(this.testOccurrences.element.kind,ElementKind.CLASS);
            expect(this.testOccurrences.element.name,'int');
            this.assertHasOffset('int a');
            this.assertHasOffset('int b');
            this.assertHasOffset('int c');
            this.assertHasOffset('int VVV');
        } )());
    }

    test_type_dynamic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('main() {\n  dynamic a = 1;\n  dynamic b = 2;\n}\ndynamic V = 3;\n');
            await this.prepareOccurrences();
            let offset : number = this.findOffset('dynamic a');
            this.findRegion(offset,new core.DartString('dynamic').length,false);
        } )());
    }

    test_type_void() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('void main() {\n}\n');
            await this.prepareOccurrences();
            let offset : number = this.findOffset('void main()');
            this.findRegion(offset,new core.DartString('void').length,false);
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    AnalysisNotificationOccurrencesTest() {
    }
}

export class properties {
}
