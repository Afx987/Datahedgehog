/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/search/type_hierarchy_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../analysis_abstract";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(GetTypeHierarchyTest);
    });
};
export namespace GetTypeHierarchyTest {
    export type Constructors = lib3.AbstractAnalysisTest.Constructors | 'GetTypeHierarchyTest';
    export type Interface = Omit<GetTypeHierarchyTest, Constructors>;
}
@DartClass
export class GetTypeHierarchyTest extends lib3.AbstractAnalysisTest {
    private static __$requestId : string;
    static get requestId() : string { 
        if (this.__$requestId===undefined) {
            this.__$requestId = 'test-getTypeHierarchy';
        }
        return this.__$requestId;
    }

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createIndex() : any {
        return createMemoryIndex();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    setUp() : void {
        super.setUp();
        this.createProject();
        this.server.handlers = new core.DartList.literal(new bare.createInstance(any,null,this.server));
    }
    test_bad_function() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('main() {\n}\n');
            let items : core.DartList<any> = await this._getTypeHierarchy('main() {');
            expect(items,isNull);
        } )());
    }

    test_bad_noElement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('main() {\n  /* target */\n}\n');
            let items : core.DartList<any> = await this._getTypeHierarchy('/* target */');
            expect(items,isNull);
        } )());
    }

    test_bad_recursion() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A extends B {\n}\nclass B extends A {\n}\n');
            let items : core.DartList<any> = await this._getTypeHierarchy('B extends A');
            expect(this._toJson(items),new core.DartList.literal(new core.DartMap.literal([
                ['classElement',new core.DartMap.literal([
                    ['kind','CLASS'],
                    ['name','B'],
                    ['location',anything],
                    ['flags',0]])],
                ['superclass',1],
                ['interfaces',new core.DartList.literal()],
                ['mixins',new core.DartList.literal()],
                ['subclasses',new core.DartList.literal(1)]]),new core.DartMap.literal([
                ['classElement',new core.DartMap.literal([
                    ['kind','CLASS'],
                    ['name','A'],
                    ['location',anything],
                    ['flags',0]])],
                ['superclass',0],
                ['interfaces',new core.DartList.literal()],
                ['mixins',new core.DartList.literal()],
                ['subclasses',new core.DartList.literal()]])));
        } )());
    }

    test_class_displayName() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A<T> {\n}\nclass B extends A<int> {\n}\n');
            let items : core.DartList<any> = await this._getTypeHierarchy('B extends');
            let itemB = items[0];
            let itemA = items[itemB.superclass];
            expect(itemA.classElement.name,'A');
            expect(itemB.classElement.name,'B');
            expect(itemA.displayName,'A<int>');
        } )());
    }

    test_class_double_subclass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class AAA {} // A\n\nclass BBB extends AAA {}\n\nclass CCC extends BBB implements AAA {}\n');
            let items : core.DartList<any> = await this._getTypeHierarchy('AAA {} // A');
            expect(this._toJson(items),new core.DartList.literal(new core.DartMap.literal([
                ['classElement',new core.DartMap.literal([
                    ['kind','CLASS'],
                    ['name','AAA'],
                    ['location',anything],
                    ['flags',0]])],
                ['superclass',1],
                ['interfaces',new core.DartList.literal()],
                ['mixins',new core.DartList.literal()],
                ['subclasses',new core.DartList.literal(2,3)]]),new core.DartMap.literal([
                ['classElement',new core.DartMap.literal([
                    ['kind','CLASS'],
                    ['name','Object'],
                    ['location',anything],
                    ['flags',0]])],
                ['interfaces',new core.DartList.literal()],
                ['mixins',new core.DartList.literal()],
                ['subclasses',new core.DartList.literal()]]),new core.DartMap.literal([
                ['classElement',new core.DartMap.literal([
                    ['kind','CLASS'],
                    ['name','BBB'],
                    ['location',anything],
                    ['flags',0]])],
                ['superclass',0],
                ['interfaces',new core.DartList.literal()],
                ['mixins',new core.DartList.literal()],
                ['subclasses',new core.DartList.literal(3)]]),new core.DartMap.literal([
                ['classElement',new core.DartMap.literal([
                    ['kind','CLASS'],
                    ['name','CCC'],
                    ['location',anything],
                    ['flags',0]])],
                ['superclass',0],
                ['interfaces',new core.DartList.literal()],
                ['mixins',new core.DartList.literal()],
                ['subclasses',new core.DartList.literal()]])));
        } )());
    }

    test_class_extends_fileAndPackageUris() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let pkgFile : string = '/packages/pkgA/lib/libA.dart';
            this.resourceProvider.newFile(pkgFile,'library lib_a;\nclass A {}\nclass B extends A {}\n');
            this.resourceProvider.newFile('/packages/pkgA/.packages','pkgA:file:///packages/pkgA/lib');
            this.resourceProvider.newFile(`${this.projectPath}/.packages`,'pkgA:file:///packages/pkgA/lib');
            this.addTestFile('import \'package:pkgA/libA.dart\';\nclass C extends A {}\n');
            await this.waitForTasksFinished();
            let request : any = new bare.createInstance(any,null,new core.DartList.literal(this.projectPath,'/packages/pkgA'),new core.DartList.literal()).toRequest('0');
            this.handleSuccessfulRequest(request);
            let items : core.DartList<any> = await this._getTypeHierarchy('A {}');
            let names : core.DartSet<string> = GetTypeHierarchyTest._toClassNames(items);
            expect(names,contains('A'));
            expect(names,contains('B'));
            expect(names,contains('C'));
        } )());
    }

    test_class_extendsTypeA() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {}\nclass B extends A {\n}\nclass C extends B {\n}\n');
            let items : core.DartList<any> = await this._getTypeHierarchy('A {}');
            expect(this._toJson(items),new core.DartList.literal(new core.DartMap.literal([
                ['classElement',new core.DartMap.literal([
                    ['kind','CLASS'],
                    ['name','A'],
                    ['location',anything],
                    ['flags',0]])],
                ['superclass',1],
                ['interfaces',new core.DartList.literal()],
                ['mixins',new core.DartList.literal()],
                ['subclasses',new core.DartList.literal(2)]]),new core.DartMap.literal([
                ['classElement',new core.DartMap.literal([
                    ['kind','CLASS'],
                    ['name','Object'],
                    ['location',anything],
                    ['flags',0]])],
                ['interfaces',new core.DartList.literal()],
                ['mixins',new core.DartList.literal()],
                ['subclasses',new core.DartList.literal()]]),new core.DartMap.literal([
                ['classElement',new core.DartMap.literal([
                    ['kind','CLASS'],
                    ['name','B'],
                    ['location',anything],
                    ['flags',0]])],
                ['superclass',0],
                ['interfaces',new core.DartList.literal()],
                ['mixins',new core.DartList.literal()],
                ['subclasses',new core.DartList.literal(3)]]),new core.DartMap.literal([
                ['classElement',new core.DartMap.literal([
                    ['kind','CLASS'],
                    ['name','C'],
                    ['location',anything],
                    ['flags',0]])],
                ['superclass',2],
                ['interfaces',new core.DartList.literal()],
                ['mixins',new core.DartList.literal()],
                ['subclasses',new core.DartList.literal()]])));
        } )());
    }

    test_class_extendsTypeB() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {\n}\nclass B extends A {\n}\nclass C extends B {\n}\n');
            let items : core.DartList<any> = await this._getTypeHierarchy('B extends');
            expect(this._toJson(items),new core.DartList.literal(new core.DartMap.literal([
                ['classElement',new core.DartMap.literal([
                    ['kind','CLASS'],
                    ['name','B'],
                    ['location',anything],
                    ['flags',0]])],
                ['superclass',1],
                ['interfaces',new core.DartList.literal()],
                ['mixins',new core.DartList.literal()],
                ['subclasses',new core.DartList.literal(3)]]),new core.DartMap.literal([
                ['classElement',new core.DartMap.literal([
                    ['kind','CLASS'],
                    ['name','A'],
                    ['location',anything],
                    ['flags',0]])],
                ['superclass',2],
                ['interfaces',new core.DartList.literal()],
                ['mixins',new core.DartList.literal()],
                ['subclasses',new core.DartList.literal()]]),new core.DartMap.literal([
                ['classElement',new core.DartMap.literal([
                    ['kind','CLASS'],
                    ['name','Object'],
                    ['location',anything],
                    ['flags',0]])],
                ['interfaces',new core.DartList.literal()],
                ['mixins',new core.DartList.literal()],
                ['subclasses',new core.DartList.literal()]]),new core.DartMap.literal([
                ['classElement',new core.DartMap.literal([
                    ['kind','CLASS'],
                    ['name','C'],
                    ['location',anything],
                    ['flags',0]])],
                ['superclass',0],
                ['interfaces',new core.DartList.literal()],
                ['mixins',new core.DartList.literal()],
                ['subclasses',new core.DartList.literal()]])));
        } )());
    }

    test_class_extendsTypeC() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {\n}\nclass B extends A {\n}\nclass C extends B {\n}\n');
            let items : core.DartList<any> = await this._getTypeHierarchy('C extends');
            expect(this._toJson(items),new core.DartList.literal(new core.DartMap.literal([
                ['classElement',new core.DartMap.literal([
                    ['kind','CLASS'],
                    ['name','C'],
                    ['location',anything],
                    ['flags',0]])],
                ['superclass',1],
                ['interfaces',new core.DartList.literal()],
                ['mixins',new core.DartList.literal()],
                ['subclasses',new core.DartList.literal()]]),new core.DartMap.literal([
                ['classElement',new core.DartMap.literal([
                    ['kind','CLASS'],
                    ['name','B'],
                    ['location',anything],
                    ['flags',0]])],
                ['superclass',2],
                ['interfaces',new core.DartList.literal()],
                ['mixins',new core.DartList.literal()],
                ['subclasses',new core.DartList.literal()]]),new core.DartMap.literal([
                ['classElement',new core.DartMap.literal([
                    ['kind','CLASS'],
                    ['name','A'],
                    ['location',anything],
                    ['flags',0]])],
                ['superclass',3],
                ['interfaces',new core.DartList.literal()],
                ['mixins',new core.DartList.literal()],
                ['subclasses',new core.DartList.literal()]]),new core.DartMap.literal([
                ['classElement',new core.DartMap.literal([
                    ['kind','CLASS'],
                    ['name','Object'],
                    ['location',anything],
                    ['flags',0]])],
                ['interfaces',new core.DartList.literal()],
                ['mixins',new core.DartList.literal()],
                ['subclasses',new core.DartList.literal()]])));
        } )());
    }

    test_class_implementsTypes() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class MA {}\nclass MB {}\nclass B extends A {\n}\nclass T implements MA, MB {\n}\n');
            let items : core.DartList<any> = await this._getTypeHierarchy('T implements');
            expect(this._toJson(items),new core.DartList.literal(new core.DartMap.literal([
                ['classElement',new core.DartMap.literal([
                    ['kind','CLASS'],
                    ['name','T'],
                    ['location',anything],
                    ['flags',0]])],
                ['superclass',1],
                ['interfaces',new core.DartList.literal(2,3)],
                ['mixins',new core.DartList.literal()],
                ['subclasses',new core.DartList.literal()]]),new core.DartMap.literal([
                ['classElement',new core.DartMap.literal([
                    ['kind','CLASS'],
                    ['name','Object'],
                    ['location',anything],
                    ['flags',0]])],
                ['interfaces',new core.DartList.literal()],
                ['mixins',new core.DartList.literal()],
                ['subclasses',new core.DartList.literal()]]),new core.DartMap.literal([
                ['classElement',new core.DartMap.literal([
                    ['kind','CLASS'],
                    ['name','MA'],
                    ['location',anything],
                    ['flags',0]])],
                ['superclass',1],
                ['interfaces',new core.DartList.literal()],
                ['mixins',new core.DartList.literal()],
                ['subclasses',new core.DartList.literal()]]),new core.DartMap.literal([
                ['classElement',new core.DartMap.literal([
                    ['kind','CLASS'],
                    ['name','MB'],
                    ['location',anything],
                    ['flags',0]])],
                ['superclass',1],
                ['interfaces',new core.DartList.literal()],
                ['mixins',new core.DartList.literal()],
                ['subclasses',new core.DartList.literal()]])));
        } )());
    }

    test_class_withTypes() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class MA {}\nclass MB {}\nclass B extends A {\n}\nclass T extends Object with MA, MB {\n}\n');
            let items : core.DartList<any> = await this._getTypeHierarchy('T extends Object');
            expect(this._toJson(items),new core.DartList.literal(new core.DartMap.literal([
                ['classElement',new core.DartMap.literal([
                    ['kind','CLASS'],
                    ['name','T'],
                    ['location',anything],
                    ['flags',0]])],
                ['superclass',1],
                ['interfaces',new core.DartList.literal()],
                ['mixins',new core.DartList.literal(2,3)],
                ['subclasses',new core.DartList.literal()]]),new core.DartMap.literal([
                ['classElement',new core.DartMap.literal([
                    ['kind','CLASS'],
                    ['name','Object'],
                    ['location',anything],
                    ['flags',0]])],
                ['interfaces',new core.DartList.literal()],
                ['mixins',new core.DartList.literal()],
                ['subclasses',new core.DartList.literal()]]),new core.DartMap.literal([
                ['classElement',new core.DartMap.literal([
                    ['kind','CLASS'],
                    ['name','MA'],
                    ['location',anything],
                    ['flags',0]])],
                ['superclass',1],
                ['interfaces',new core.DartList.literal()],
                ['mixins',new core.DartList.literal()],
                ['subclasses',new core.DartList.literal()]]),new core.DartMap.literal([
                ['classElement',new core.DartMap.literal([
                    ['kind','CLASS'],
                    ['name','MB'],
                    ['location',anything],
                    ['flags',0]])],
                ['superclass',1],
                ['interfaces',new core.DartList.literal()],
                ['mixins',new core.DartList.literal()],
                ['subclasses',new core.DartList.literal()]])));
        } )());
    }

    test_fromField_toMixinGetter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('abstract class A {\n  var test = 1;\n}\nclass Mixin {\n  get test => 2;\n}\nclass B extends A with Mixin {}\n');
            let items : core.DartList<any> = await this._getTypeHierarchy('test = 1;');
            let itemA = items.firstWhere((e : any) =>  {
                return op(Op.EQUALS,e.classElement.name,'A');
            });
            let itemB = items.firstWhere((e : any) =>  {
                return op(Op.EQUALS,e.classElement.name,'B');
            });
            let memberA : any = itemA.memberElement;
            let memberB : any = itemB.memberElement;
            expect(memberA,isNotNull);
            expect(memberB,isNotNull);
            expect(memberA.location.offset,this.findOffset('test = 1;'));
            expect(memberB.location.offset,this.findOffset('test => 2;'));
        } )());
    }

    test_fromField_toMixinSetter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('abstract class A {\n  var test = 1;\n}\nclass Mixin {\n  set test(m) {}\n}\nclass B extends A with Mixin {}\n');
            let items : core.DartList<any> = await this._getTypeHierarchy('test = 1;');
            let itemA = items.firstWhere((e : any) =>  {
                return op(Op.EQUALS,e.classElement.name,'A');
            });
            let itemB = items.firstWhere((e : any) =>  {
                return op(Op.EQUALS,e.classElement.name,'B');
            });
            let memberA : any = itemA.memberElement;
            let memberB : any = itemB.memberElement;
            expect(memberA,isNotNull);
            expect(memberB,isNotNull);
            expect(memberA.location.offset,this.findOffset('test = 1;'));
            expect(memberB.location.offset,this.findOffset('test(m) {}'));
        } )());
    }

    test_member_fromField_toField() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {\n  var test = 1;\n}\nclass B extends A {\n  var test = 2;\n}\n');
            let items : core.DartList<any> = await this._getTypeHierarchy('test = 2;');
            let itemB : any = items[0];
            let itemA : any = items[itemB.superclass];
            expect(itemA.classElement.name,'A');
            expect(itemB.classElement.name,'B');
            expect(itemA.memberElement.location.offset,this.findOffset('test = 1;'));
            expect(itemB.memberElement.location.offset,this.findOffset('test = 2;'));
        } )());
    }

    test_member_fromField_toGetter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {\n  get test => 1;\n}\nclass B extends A {\n  var test = 2;\n}\n');
            let items : core.DartList<any> = await this._getTypeHierarchy('test = 2;');
            let itemB : any = items[0];
            let itemA : any = items[itemB.superclass];
            expect(itemA.classElement.name,'A');
            expect(itemB.classElement.name,'B');
            expect(itemA.memberElement.location.offset,this.findOffset('test => 1'));
            expect(itemB.memberElement.location.offset,this.findOffset('test = 2;'));
        } )());
    }

    test_member_fromField_toSetter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {\n  set test(a) {}\n}\nclass B extends A {\n  var test = 2;\n}\n');
            let items : core.DartList<any> = await this._getTypeHierarchy('test = 2;');
            let itemB : any = items[0];
            let itemA : any = items[itemB.superclass];
            expect(itemA.classElement.name,'A');
            expect(itemB.classElement.name,'B');
            expect(itemA.memberElement.location.offset,this.findOffset('test(a) {}'));
            expect(itemB.memberElement.location.offset,this.findOffset('test = 2;'));
        } )());
    }

    test_member_fromFinalField_toGetter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {\n  get test => 1;\n}\nclass B extends A {\n  final test = 2;\n}\n');
            let items : core.DartList<any> = await this._getTypeHierarchy('test = 2;');
            let itemB : any = items[0];
            let itemA : any = items[itemB.superclass];
            expect(itemA.classElement.name,'A');
            expect(itemB.classElement.name,'B');
            expect(itemA.memberElement.location.offset,this.findOffset('test => 1;'));
            expect(itemB.memberElement.location.offset,this.findOffset('test = 2;'));
        } )());
    }

    test_member_fromFinalField_toSetter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {\n  set test(x) {}\n}\nclass B extends A {\n  final test = 2;\n}\n');
            let items : core.DartList<any> = await this._getTypeHierarchy('test = 2;');
            let itemB : any = items[0];
            let itemA : any = items[itemB.superclass];
            expect(itemA.classElement.name,'A');
            expect(itemB.classElement.name,'B');
            expect(itemA.memberElement,isNull);
            expect(itemB.memberElement.location.offset,this.findOffset('test = 2;'));
        } )());
    }

    test_member_getter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {\n  get test => null; // in A\n}\nclass B extends A {\n  get test => null; // in B\n}\nclass C extends B {\n}\nclass D extends C {\n  get test => null; // in D\n}\n');
            let items : core.DartList<any> = await this._getTypeHierarchy('test => null; // in B');
            let itemB : any = items[0];
            let itemA : any = items[itemB.superclass];
            let itemC : any = items[op(Op.INDEX,itemB.subclasses,0)];
            let itemD : any = items[op(Op.INDEX,itemC.subclasses,0)];
            expect(itemA.classElement.name,'A');
            expect(itemB.classElement.name,'B');
            expect(itemC.classElement.name,'C');
            expect(itemD.classElement.name,'D');
            expect(itemA.memberElement.location.offset,this.findOffset('test => null; // in A'));
            expect(itemB.memberElement.location.offset,this.findOffset('test => null; // in B'));
            expect(itemC.memberElement,isNull);
            expect(itemD.memberElement.location.offset,this.findOffset('test => null; // in D'));
        } )());
    }

    test_member_method() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {\n  test() {} // in A\n}\nclass B extends A {\n  test() {} // in B\n}\nclass C extends B {\n}\nclass D extends C {\n  test() {} // in D\n}\n');
            let items : core.DartList<any> = await this._getTypeHierarchy('test() {} // in B');
            let itemB = items[0];
            let itemA = items[itemB.superclass];
            let itemC = items[op(Op.INDEX,itemB.subclasses,0)];
            let itemD = items[op(Op.INDEX,itemC.subclasses,0)];
            expect(itemA.classElement.name,'A');
            expect(itemB.classElement.name,'B');
            expect(itemC.classElement.name,'C');
            expect(itemD.classElement.name,'D');
            expect(itemA.memberElement.location.offset,this.findOffset('test() {} // in A'));
            expect(itemB.memberElement.location.offset,this.findOffset('test() {} // in B'));
            expect(itemC.memberElement,isNull);
            expect(itemD.memberElement.location.offset,this.findOffset('test() {} // in D'));
        } )());
    }

    test_member_method_private_differentLib() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addFile(`${this.testFolder}/lib.dart`,'import \'test.dart\';\nclass A {\n  void _m() {}\n}\nclass C extends B {\n  void _m() {}\n}\n');
            this.addTestFile('import \'lib.dart\';\nclass B extends A {\n  _m() {} // in B\n}\nclass D extends C {\n  _m() {} // in D\n}\n');
            let items : core.DartList<any> = await this._getTypeHierarchy('_m() {} // in B');
            let itemB = items[0];
            let itemA = items[itemB.superclass];
            let itemC = items[op(Op.INDEX,itemB.subclasses,0)];
            let itemD = items[op(Op.INDEX,itemC.subclasses,0)];
            expect(itemB.classElement.name,'B');
            expect(itemA.classElement.name,'A');
            expect(itemC.classElement.name,'C');
            expect(itemD.classElement.name,'D');
            expect(itemA.memberElement,isNull);
            expect(itemC.memberElement,isNull);
            expect(itemB.memberElement,isNotNull);
            expect(itemD.memberElement,isNotNull);
        } )());
    }

    test_member_method_private_sameLib() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {\n  _m() {} // in A\n}\nclass B extends A {\n  _m() {} // in B\n}\nclass C extends B {\n  _m() {} // in C\n}\n');
            let items : core.DartList<any> = await this._getTypeHierarchy('_m() {} // in B');
            let itemB = items[0];
            let itemA = items[itemB.superclass];
            let itemC = items[op(Op.INDEX,itemB.subclasses,0)];
            expect(itemA.classElement.name,'A');
            expect(itemB.classElement.name,'B');
            expect(itemC.classElement.name,'C');
            expect(itemA.memberElement.location.offset,this.findOffset('_m() {} // in A'));
            expect(itemB.memberElement.location.offset,this.findOffset('_m() {} // in B'));
            expect(itemC.memberElement.location.offset,this.findOffset('_m() {} // in C'));
        } )());
    }

    test_member_ofMixin2_method() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class M1 {\n  void test() {} // in M1\n}\nclass M2 {\n  void test() {} // in M2\n}\nclass D1 extends Object with M1 {}\nclass D2 extends Object with M1, M2 {}\nclass D3 extends Object with M2, M1 {}\nclass D4 extends Object with M2, M1 {\n  void test() {} // in D4\n}\n');
            let items : core.DartList<any> = await this._getTypeHierarchy('test() {} // in M1');
            let itemM1 = items.firstWhere((e : any) =>  {
                return op(Op.EQUALS,e.classElement.name,'M1');
            });
            let item1 = items.firstWhere((e : any) =>  {
                return op(Op.EQUALS,e.classElement.name,'D1');
            });
            let item2 = items.firstWhere((e : any) =>  {
                return op(Op.EQUALS,e.classElement.name,'D2');
            });
            let item3 = items.firstWhere((e : any) =>  {
                return op(Op.EQUALS,e.classElement.name,'D3');
            });
            let item4 = items.firstWhere((e : any) =>  {
                return op(Op.EQUALS,e.classElement.name,'D4');
            });
            expect(itemM1,isNotNull);
            expect(item1,isNotNull);
            expect(item2,isNotNull);
            expect(item3,isNotNull);
            expect(item4,isNotNull);
            {
                let member1 : any = item1.memberElement;
                expect(member1,isNull);
            }
            {
                let member2 : any = item2.memberElement;
                expect(member2,isNotNull);
                expect(member2.location.offset,this.findOffset('test() {} // in M2'));
            }
            {
                let member3 : any = item3.memberElement;
                expect(member3,isNull);
            }
            {
                let member4 : any = item4.memberElement;
                expect(member4.location.offset,this.findOffset('test() {} // in D4'));
            }
        } )());
    }

    test_member_ofMixin_getter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('abstract class Base {\n  get test; // in Base\n}\nclass Mixin {\n  get test => null; // in Mixin\n}\nclass Derived1 extends Base with Mixin {}\nclass Derived2 extends Base {\n  get test => null; // in Derived2\n}\n');
            let items : core.DartList<any> = await this._getTypeHierarchy('test; // in Base');
            let itemBase = items.firstWhere((e : any) =>  {
                return op(Op.EQUALS,e.classElement.name,'Base');
            });
            let item1 = items.firstWhere((e : any) =>  {
                return op(Op.EQUALS,e.classElement.name,'Derived1');
            });
            let item2 = items.firstWhere((e : any) =>  {
                return op(Op.EQUALS,e.classElement.name,'Derived2');
            });
            let memberBase : any = itemBase.memberElement;
            let member1 : any = item1.memberElement;
            let member2 : any = item2.memberElement;
            expect(memberBase,isNotNull);
            expect(member1,isNotNull);
            expect(member2,isNotNull);
            expect(memberBase.location.offset,this.findOffset('test; // in Base'));
            expect(member1.location.offset,this.findOffset('test => null; // in Mixin'));
            expect(member2.location.offset,this.findOffset('test => null; // in Derived2'));
        } )());
    }

    test_member_ofMixin_method() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('abstract class Base {\n  void test(); // in Base\n}\nclass Mixin {\n  void test() {} // in Mixin\n}\nclass Derived1 extends Base with Mixin {}\nclass Derived2 extends Base {\n  void test() {} // in Derived2\n}\n');
            let items : core.DartList<any> = await this._getTypeHierarchy('test(); // in Base');
            let itemBase = items.firstWhere((e : any) =>  {
                return op(Op.EQUALS,e.classElement.name,'Base');
            });
            let item1 = items.firstWhere((e : any) =>  {
                return op(Op.EQUALS,e.classElement.name,'Derived1');
            });
            let item2 = items.firstWhere((e : any) =>  {
                return op(Op.EQUALS,e.classElement.name,'Derived2');
            });
            let memberBase : any = itemBase.memberElement;
            let member1 : any = item1.memberElement;
            let member2 : any = item2.memberElement;
            expect(memberBase,isNotNull);
            expect(member1,isNotNull);
            expect(member2,isNotNull);
            expect(memberBase.location.offset,this.findOffset('test(); // in Base'));
            expect(member1.location.offset,this.findOffset('test() {} // in Mixin'));
            expect(member2.location.offset,this.findOffset('test() {} // in Derived2'));
        } )());
    }

    test_member_ofMixin_setter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('abstract class Base {\n  set test(x); // in Base\n}\nclass Mixin {\n  set test(x) {} // in Mixin\n}\nclass Derived1 extends Base with Mixin {}\nclass Derived2 extends Base {\n  set test(x) {} // in Derived2\n}\n');
            let items : core.DartList<any> = await this._getTypeHierarchy('test(x); // in Base');
            let itemBase = items.firstWhere((e : any) =>  {
                return op(Op.EQUALS,e.classElement.name,'Base');
            });
            let item1 = items.firstWhere((e : any) =>  {
                return op(Op.EQUALS,e.classElement.name,'Derived1');
            });
            let item2 = items.firstWhere((e : any) =>  {
                return op(Op.EQUALS,e.classElement.name,'Derived2');
            });
            let memberBase : any = itemBase.memberElement;
            let member1 : any = item1.memberElement;
            let member2 : any = item2.memberElement;
            expect(memberBase,isNotNull);
            expect(member1,isNotNull);
            expect(member2,isNotNull);
            expect(memberBase.location.offset,this.findOffset('test(x); // in Base'));
            expect(member1.location.offset,this.findOffset('test(x) {} // in Mixin'));
            expect(member2.location.offset,this.findOffset('test(x) {} // in Derived2'));
        } )());
    }

    test_member_operator() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {\n  operator ==(x) => null; // in A\n}\nclass B extends A {\n  operator ==(x) => null; // in B\n}\nclass C extends B {\n}\nclass D extends C {\n  operator ==(x) => null; // in D\n}\n');
            let items : core.DartList<any> = await this._getTypeHierarchy('==(x) => null; // in B');
            let itemB = items[0];
            let itemA = items[itemB.superclass];
            let itemC = items[op(Op.INDEX,itemB.subclasses,0)];
            let itemD = items[op(Op.INDEX,itemC.subclasses,0)];
            expect(itemA.classElement.name,'A');
            expect(itemB.classElement.name,'B');
            expect(itemC.classElement.name,'C');
            expect(itemD.classElement.name,'D');
            expect(itemA.memberElement.location.offset,this.findOffset('==(x) => null; // in A'));
            expect(itemB.memberElement.location.offset,this.findOffset('==(x) => null; // in B'));
            expect(itemC.memberElement,isNull);
            expect(itemD.memberElement.location.offset,this.findOffset('==(x) => null; // in D'));
        } )());
    }

    test_member_setter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {\n  set test(x) {} // in A\n}\nclass B extends A {\n  set test(x) {} // in B\n}\nclass C extends B {\n}\nclass D extends C {\n  set test(x) {} // in D\n}\n');
            let items : core.DartList<any> = await this._getTypeHierarchy('test(x) {} // in B');
            let itemB = items[0];
            let itemA = items[itemB.superclass];
            let itemC = items[op(Op.INDEX,itemB.subclasses,0)];
            let itemD = items[op(Op.INDEX,itemC.subclasses,0)];
            expect(itemA.classElement.name,'A');
            expect(itemB.classElement.name,'B');
            expect(itemC.classElement.name,'C');
            expect(itemD.classElement.name,'D');
            expect(itemA.memberElement.location.offset,this.findOffset('test(x) {} // in A'));
            expect(itemB.memberElement.location.offset,this.findOffset('test(x) {} // in B'));
            expect(itemC.memberElement,isNull);
            expect(itemD.memberElement.location.offset,this.findOffset('test(x) {} // in D'));
        } )());
    }

    test_superOnly() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {}\nclass B {}\nclass C extends A implements B {}\nclass D extends C {}\n');
            let items : core.DartList<any> = await this._getTypeHierarchy('C extends',{
                superOnly : true});
            expect(this._toJson(items),new core.DartList.literal(new core.DartMap.literal([
                ['classElement',new core.DartMap.literal([
                    ['kind','CLASS'],
                    ['name','C'],
                    ['location',anything],
                    ['flags',0]])],
                ['superclass',1],
                ['interfaces',new core.DartList.literal(3)],
                ['mixins',new core.DartList.literal()],
                ['subclasses',new core.DartList.literal()]]),new core.DartMap.literal([
                ['classElement',new core.DartMap.literal([
                    ['kind','CLASS'],
                    ['name','A'],
                    ['location',anything],
                    ['flags',0]])],
                ['superclass',2],
                ['interfaces',new core.DartList.literal()],
                ['mixins',new core.DartList.literal()],
                ['subclasses',new core.DartList.literal()]]),new core.DartMap.literal([
                ['classElement',new core.DartMap.literal([
                    ['kind','CLASS'],
                    ['name','Object'],
                    ['location',anything],
                    ['flags',0]])],
                ['interfaces',new core.DartList.literal()],
                ['mixins',new core.DartList.literal()],
                ['subclasses',new core.DartList.literal()]]),new core.DartMap.literal([
                ['classElement',new core.DartMap.literal([
                    ['kind','CLASS'],
                    ['name','B'],
                    ['location',anything],
                    ['flags',0]])],
                ['superclass',2],
                ['interfaces',new core.DartList.literal()],
                ['mixins',new core.DartList.literal()],
                ['subclasses',new core.DartList.literal()]])));
        } )());
    }

    test_superOnly_fileDoesNotExist() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let request : any = new bare.createInstance(any,null,'/does/not/exist.dart',0,{
                superOnly : true}).toRequest(GetTypeHierarchyTest.requestId);
            let response : any = await this.serverChannel.sendRequest(request);
            let items : core.DartList<any> = new bare.createInstance(any,null,response).hierarchyItems;
            expect(items,isNull);
        } )());
    }

    _createGetTypeHierarchyRequest(search : string,_namedArguments? : {superOnly? : boolean}) : any {
        let {superOnly} = Object.assign({
        }, _namedArguments );
        return new bare.createInstance(any,null,this.testFile,this.findOffset(search),{
            superOnly : superOnly}).toRequest(GetTypeHierarchyTest.requestId);
    }
    _getTypeHierarchy(search : string,_namedArguments? : {superOnly? : boolean}) : async.Future<core.DartList<any>> { 
        return new async.Future.fromPromise(( async () =>  {
            let {superOnly} = Object.assign({
            }, _namedArguments );
            await this.waitForTasksFinished();
            let request : any = this._createGetTypeHierarchyRequest(search,{
                superOnly : superOnly});
            let response : any = await this.serverChannel.sendRequest(request);
            expect(this.serverErrors,isEmpty);
            return new bare.createInstance(any,null,response).hierarchyItems;
        } )());
    }

    _toJson(items : core.DartList<any>) : core.DartList<any> {
        return items.map((item : any) =>  {
            return item.toJson();
        }).toList();
    }
    static _toClassNames(items : core.DartList<any>) : core.DartSet<string> {
        return items.map((item : any) =>  {
            return item.classElement.name;
        }).toSet();
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    GetTypeHierarchyTest() {
    }
}

export class properties {
}
