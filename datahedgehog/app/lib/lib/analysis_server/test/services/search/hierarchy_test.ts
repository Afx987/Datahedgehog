/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/services/search/hierarchy_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../../abstract_single_unit";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(HierarchyTest);
    });
};
export namespace HierarchyTest {
    export type Constructors = lib3.AbstractSingleUnitTest.Constructors | 'HierarchyTest';
    export type Interface = Omit<HierarchyTest, Constructors>;
}
@DartClass
export class HierarchyTest extends lib3.AbstractSingleUnitTest {
    searchEngine : any;

    setUp() : void {
        super.setUp();
        this.searchEngine = new bare.createInstance(any,null,new core.DartList.literal(this.driver));
    }
    test_getClassMembers() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._indexTestUnit('class A {\n  A() {}\n  var ma1;\n  ma2() {}\n}\nclass B extends A {\n  B() {}\n  B.named() {}\n  var mb1;\n  mb2() {}\n}\n');
            {
                let classA : any = this.findElement('A');
                let members : core.DartList<any> = getClassMembers(classA);
                expect(members.map((e : any) =>  {
                    return e.name;
                }),unorderedEquals(new core.DartList.literal('ma1','ma2')));
            }
            {
                let classB : any = this.findElement('B');
                let members : core.DartList<any> = getClassMembers(classB);
                expect(members.map((e : any) =>  {
                    return e.name;
                }),unorderedEquals(new core.DartList.literal('mb1','mb2')));
            }
        } )());
    }

    test_getHierarchyMembers_constructors() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._indexTestUnit('class A {\n  A() {}\n}\nclass B extends A {\n  B() {}\n}\n');
            let classA : any = this.findElement("A");
            let classB : any = this.findElement("B");
            let memberA : any = op(Op.INDEX,classA.constructors,0);
            let memberB : any = op(Op.INDEX,classB.constructors,0);
            let futureA = getHierarchyMembers(this.searchEngine,memberA).then((members : any) =>  {
                expect(members,unorderedEquals(new core.DartList.literal(memberA)));
            });
            let futureB = getHierarchyMembers(this.searchEngine,memberB).then((members : any) =>  {
                expect(members,unorderedEquals(new core.DartList.literal(memberB)));
            });
            return async.Future.wait(new core.DartList.literal(futureA,futureB));
        } )());
    }

    test_getHierarchyMembers_fields() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._indexTestUnit('class A {\n  int foo;\n}\nclass B extends A {\n  get foo => null;\n}\nclass C extends B {\n  set foo(x) {}\n}\nclass D {\n  int foo;\n}\n');
            let classA : any = this.findElement("A");
            let classB : any = this.findElement("B");
            let classC : any = this.findElement("C");
            let classD : any = this.findElement("D");
            let memberA : any = op(Op.INDEX,classA.fields,0);
            let memberB : any = op(Op.INDEX,classB.fields,0);
            let memberC : any = op(Op.INDEX,classC.fields,0);
            let memberD : any = op(Op.INDEX,classD.fields,0);
            let futureA = getHierarchyMembers(this.searchEngine,memberA).then((members : any) =>  {
                expect(members,unorderedEquals(new core.DartList.literal(memberA,memberB,memberC)));
            });
            let futureB = getHierarchyMembers(this.searchEngine,memberB).then((members : any) =>  {
                expect(members,unorderedEquals(new core.DartList.literal(memberA,memberB,memberC)));
            });
            let futureC = getHierarchyMembers(this.searchEngine,memberC).then((members : any) =>  {
                expect(members,unorderedEquals(new core.DartList.literal(memberA,memberB,memberC)));
            });
            let futureD = getHierarchyMembers(this.searchEngine,memberD).then((members : any) =>  {
                expect(members,unorderedEquals(new core.DartList.literal(memberD)));
            });
            return async.Future.wait(new core.DartList.literal(futureA,futureB,futureC,futureD));
        } )());
    }

    test_getHierarchyMembers_fields_static() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._indexTestUnit('class A {\n  static int foo;\n}\nclass B extends A {\n  static get foo => null;\n}\nclass C extends B {\n  static set foo(x) {}\n}\n');
            let classA : any = this.findElement('A');
            let classB : any = this.findElement('B');
            let classC : any = this.findElement('C');
            let memberA : any = op(Op.INDEX,classA.fields,0);
            let memberB : any = op(Op.INDEX,classB.fields,0);
            let memberC : any = op(Op.INDEX,classC.fields,0);
            {
                let members : core.DartSet<any> = await getHierarchyMembers(this.searchEngine,memberA);
                expect(members,unorderedEquals(new core.DartList.literal(memberA)));
            }
            {
                let members : core.DartSet<any> = await getHierarchyMembers(this.searchEngine,memberB);
                expect(members,unorderedEquals(new core.DartList.literal(memberB)));
            }
            {
                let members : core.DartSet<any> = await getHierarchyMembers(this.searchEngine,memberC);
                expect(members,unorderedEquals(new core.DartList.literal(memberC)));
            }
        } )());
    }

    test_getHierarchyMembers_methods() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._indexTestUnit('class A {\n  foo() {}\n}\nclass B extends A {\n  foo() {}\n}\nclass C extends B {\n  foo() {}\n}\nclass D {\n  foo() {}\n}\nclass E extends D {\n  foo() {}\n}\n');
            let classA : any = this.findElement("A");
            let classB : any = this.findElement("B");
            let classC : any = this.findElement("C");
            let classD : any = this.findElement("D");
            let classE : any = this.findElement("E");
            let memberA : any = op(Op.INDEX,classA.methods,0);
            let memberB : any = op(Op.INDEX,classB.methods,0);
            let memberC : any = op(Op.INDEX,classC.methods,0);
            let memberD : any = op(Op.INDEX,classD.methods,0);
            let memberE : any = op(Op.INDEX,classE.methods,0);
            let futureA = getHierarchyMembers(this.searchEngine,memberA).then((members : any) =>  {
                expect(members,unorderedEquals(new core.DartList.literal(memberA,memberB,memberC)));
            });
            let futureB = getHierarchyMembers(this.searchEngine,memberB).then((members : any) =>  {
                expect(members,unorderedEquals(new core.DartList.literal(memberA,memberB,memberC)));
            });
            let futureC = getHierarchyMembers(this.searchEngine,memberC).then((members : any) =>  {
                expect(members,unorderedEquals(new core.DartList.literal(memberA,memberB,memberC)));
            });
            let futureD = getHierarchyMembers(this.searchEngine,memberD).then((members : any) =>  {
                expect(members,unorderedEquals(new core.DartList.literal(memberD,memberE)));
            });
            let futureE = getHierarchyMembers(this.searchEngine,memberE).then((members : any) =>  {
                expect(members,unorderedEquals(new core.DartList.literal(memberD,memberE)));
            });
            return async.Future.wait(new core.DartList.literal(futureA,futureB,futureC,futureD,futureE));
        } )());
    }

    test_getHierarchyMembers_methods_static() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._indexTestUnit('class A {\n  static foo() {}\n}\nclass B extends A {\n  static foo() {}\n}\n');
            let classA : any = this.findElement('A');
            let classB : any = this.findElement('B');
            let memberA : any = op(Op.INDEX,classA.methods,0);
            let memberB : any = op(Op.INDEX,classB.methods,0);
            {
                let members : core.DartSet<any> = await getHierarchyMembers(this.searchEngine,memberA);
                expect(members,unorderedEquals(new core.DartList.literal(memberA)));
            }
            {
                let members : core.DartSet<any> = await getHierarchyMembers(this.searchEngine,memberB);
                expect(members,unorderedEquals(new core.DartList.literal(memberB)));
            }
        } )());
    }

    test_getHierarchyMembers_withInterfaces() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._indexTestUnit('class A {\n  foo() {}\n}\nclass B implements A {\n  foo() {}\n}\nabstract class C implements A {\n}\nclass D extends C {\n  foo() {}\n}\nclass E {\n  foo() {}\n}\n');
            let classA : any = this.findElement("A");
            let classB : any = this.findElement("B");
            let classD : any = this.findElement("D");
            let memberA : any = op(Op.INDEX,classA.methods,0);
            let memberB : any = op(Op.INDEX,classB.methods,0);
            let memberD : any = op(Op.INDEX,classD.methods,0);
            let futureA = getHierarchyMembers(this.searchEngine,memberA).then((members : any) =>  {
                expect(members,unorderedEquals(new core.DartList.literal(memberA,memberB,memberD)));
            });
            let futureB = getHierarchyMembers(this.searchEngine,memberB).then((members : any) =>  {
                expect(members,unorderedEquals(new core.DartList.literal(memberA,memberB,memberD)));
            });
            let futureD = getHierarchyMembers(this.searchEngine,memberD).then((members : any) =>  {
                expect(members,unorderedEquals(new core.DartList.literal(memberA,memberB,memberD)));
            });
            return async.Future.wait(new core.DartList.literal(futureA,futureB,futureD));
        } )());
    }

    test_getMembers() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._indexTestUnit('class A {\n  A() {}\n  var ma1;\n  ma2() {}\n}\nclass B extends A {\n  B() {}\n  B.named() {}\n  var mb1;\n  mb2() {}\n}\n');
            {
                let classA : any = this.findElement('A');
                let members : core.DartList<any> = getMembers(classA);
                expect(members.map((e : any) =>  {
                    return e.name;
                }),unorderedEquals(new core.DartList.literal('ma1','ma2','==','toString','hashCode','noSuchMethod','runtimeType')));
            }
            {
                let classB : any = this.findElement('B');
                let members : core.DartList<any> = getMembers(classB);
                expect(members.map((e : any) =>  {
                    return e.name;
                }),unorderedEquals(new core.DartList.literal('mb1','mb2','ma1','ma2','==','toString','hashCode','noSuchMethod','runtimeType')));
            }
        } )());
    }

    test_getSuperClasses() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._indexTestUnit('class A {}\nclass B extends A {}\nclass C extends B {}\nclass D extends B implements A {}\nclass M {}\nclass E extends A with M {}\nclass F implements A {}\n');
            let classA : any = this.findElement("A");
            let classB : any = this.findElement("B");
            let classC : any = this.findElement("C");
            let classD : any = this.findElement("D");
            let classE : any = this.findElement("E");
            let classF : any = this.findElement("F");
            let objectElement : any = classA.supertype.element;
            {
                let supers : core.DartSet<any> = getSuperClasses(objectElement);
                expect(supers,isEmpty);
            }
            {
                let supers : core.DartSet<any> = getSuperClasses(classA);
                expect(supers,unorderedEquals(new core.DartList.literal(objectElement)));
            }
            {
                let supers : core.DartSet<any> = getSuperClasses(classB);
                expect(supers,unorderedEquals(new core.DartList.literal(objectElement,classA)));
            }
            {
                let supers : core.DartSet<any> = getSuperClasses(classC);
                expect(supers,unorderedEquals(new core.DartList.literal(objectElement,classA,classB)));
            }
            {
                let supers : core.DartSet<any> = getSuperClasses(classD);
                expect(supers,unorderedEquals(new core.DartList.literal(objectElement,classA,classB)));
            }
            {
                let supers : core.DartSet<any> = getSuperClasses(classE);
                expect(supers,unorderedEquals(new core.DartList.literal(objectElement,classA)));
            }
            {
                let supers : core.DartSet<any> = getSuperClasses(classF);
                expect(supers,unorderedEquals(new core.DartList.literal(objectElement,classA)));
            }
        } )());
    }

    _indexTestUnit(code : string) : async.Future<core.Null> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit(code);
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    HierarchyTest() {
    }
}

export class properties {
}
