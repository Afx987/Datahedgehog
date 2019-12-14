/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/integration/search/get_type_hierarchy_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../support/integration_tests";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(GetTypeHierarchyTest);
    });
};
export namespace GetTypeHierarchyTest {
    export type Constructors = lib3.AbstractAnalysisServerIntegrationTest.Constructors | 'GetTypeHierarchyTest';
    export type Interface = Omit<GetTypeHierarchyTest, Constructors>;
}
@DartClass
export class GetTypeHierarchyTest extends lib3.AbstractAnalysisServerIntegrationTest {
    pathname : string;

    getTypeHierarchy_badTarget() : async.Future<any> {
        let text : string = 'main() {\n  if /* target */ (true) {\n    print(\'Hello\');\n  }\n}\n';
        return this.typeHierarchyTest(text).then((results : HierarchyResults) =>  {
            expect(results,isNull);
        });
    }
    getTypeHierarchy_classElement() : async.Future<any> {
        let text : string = 'class Base {}\nclass Pivot /* target */ extends Base {}\nclass Derived extends Pivot {}\n';
        return this.typeHierarchyTest(text).then((results : HierarchyResults) =>  {
            expect(results.items,hasLength(4));
            expect(results.nameToIndex.get('Pivot'),equals(0));
            var checkElement : (name : string) => void = (name : string) : void =>  {
                let element : any = results.items[results.nameToIndex.get(name)].classElement;
                expect(element.kind,equals(ElementKind.CLASS));
                expect(element.name,equals(name));
                if (name != 'Object') {
                    expect(element.location.offset,equals(new core.DartString(text).indexOf(`class ${name}`) + new core.DartString('class ').length));
                }
            };
            checkElement('Object');
            checkElement('Base');
            checkElement('Pivot');
            checkElement('Derived');
        });
    }
    getTypeHierarchy_displayName() : async.Future<any> {
        let text : string = 'class Base<T> {}\nclass Pivot /* target */ extends Base<int> {}\n';
        return this.typeHierarchyTest(text).then((results : HierarchyResults) =>  {
            expect(results.items,hasLength(3));
            expect(results.getItem('Object').displayName,isNull);
            expect(results.getItem('Base').displayName,equals('Base<int>'));
            expect(results.getItem('Pivot').displayName,isNull);
        });
    }
    getTypeHierarchy_functionTarget() : async.Future<any> {
        let text : string = 'main /* target */ () {\n}\n';
        return this.typeHierarchyTest(text).then((results : HierarchyResults) =>  {
            expect(results,isNull);
        });
    }
    getTypeHierarchy_interfaces() : async.Future<any> {
        let text : string = 'class Interface1 {}\nclass Interface2 {}\nclass Pivot /* target */ implements Interface1, Interface2 {}\n';
        return this.typeHierarchyTest(text).then((results : HierarchyResults) =>  {
            expect(results.items,hasLength(4));
            expect(results.pivot.interfaces,hasLength(2));
            expect(results.pivot.interfaces,contains(results.nameToIndex.get('Interface1')));
            expect(results.pivot.interfaces,contains(results.nameToIndex.get('Interface2')));
            expect(results.getItem('Object').interfaces,isEmpty);
            expect(results.getItem('Interface1').interfaces,isEmpty);
            expect(results.getItem('Interface2').interfaces,isEmpty);
        });
    }
    getTypeHierarchy_memberElement() : async.Future<any> {
        let text : string = 'class Base1 {\n  void foo /* base1 */ ();\n}\nclass Base2 extends Base1 {}\nclass Pivot extends Base2 {\n  void foo /* target */ ();\n}\nclass Derived1 extends Pivot {}\nclass Derived2 extends Derived1 {\n  void foo /* derived2 */ ();\n}';
        return this.typeHierarchyTest(text).then((results : HierarchyResults) =>  {
            expect(results.items,hasLength(6));
            expect(results.getItem('Object').memberElement,isNull);
            expect(results.getItem('Base1').memberElement.location.offset,equals(new core.DartString(text).indexOf('foo /* base1 */')));
            expect(results.getItem('Base2').memberElement,isNull);
            expect(results.getItem('Pivot').memberElement.location.offset,equals(new core.DartString(text).indexOf('foo /* target */')));
            expect(results.getItem('Derived1').memberElement,isNull);
            expect(results.getItem('Derived2').memberElement.location.offset,equals(new core.DartString(text).indexOf('foo /* derived2 */')));
        });
    }
    getTypeHierarchy_mixins() : async.Future<any> {
        let text : string = 'class Base {}\nclass Mixin1 {}\nclass Mixin2 {}\nclass Pivot /* target */ extends Base with Mixin1, Mixin2 {}\n';
        return this.typeHierarchyTest(text).then((results : HierarchyResults) =>  {
            expect(results.items,hasLength(5));
            expect(results.pivot.mixins,hasLength(2));
            expect(results.pivot.mixins,contains(results.nameToIndex.get('Mixin1')));
            expect(results.pivot.mixins,contains(results.nameToIndex.get('Mixin2')));
            expect(results.getItem('Object').mixins,isEmpty);
            expect(results.getItem('Base').mixins,isEmpty);
            expect(results.getItem('Mixin1').mixins,isEmpty);
            expect(results.getItem('Mixin2').mixins,isEmpty);
        });
    }
    getTypeHierarchy_subclasses() : async.Future<any> {
        let text : string = 'class Base {}\nclass Pivot /* target */ extends Base {}\nclass Sub1 extends Pivot {}\nclass Sub2 extends Pivot {}\nclass Sub2a extends Sub2 {}\n';
        return this.typeHierarchyTest(text).then((results : HierarchyResults) =>  {
            expect(results.items,hasLength(6));
            expect(results.pivot.subclasses,hasLength(2));
            expect(results.pivot.subclasses,contains(results.nameToIndex.get('Sub1')));
            expect(results.pivot.subclasses,contains(results.nameToIndex.get('Sub2')));
            expect(results.getItem('Object').subclasses,isEmpty);
            expect(results.getItem('Base').subclasses,isEmpty);
            expect(results.getItem('Sub1').subclasses,isEmpty);
            expect(results.getItem('Sub2').subclasses,equals(new core.DartList.literal(results.nameToIndex.get('Sub2a'))));
            expect(results.getItem('Sub2a').subclasses,isEmpty);
        });
    }
    getTypeHierarchy_superclass() : async.Future<any> {
        let text : string = 'class Base1 {}\nclass Base2 extends Base1 {}\nclass Pivot /* target */ extends Base2 {}\n';
        return this.typeHierarchyTest(text).then((results : HierarchyResults) =>  {
            expect(results.items,hasLength(4));
            expect(results.getItem('Object').superclass,isNull);
            expect(results.getItem('Base1').superclass,equals(results.nameToIndex.get('Object')));
            expect(results.getItem('Base2').superclass,equals(results.nameToIndex.get('Base1')));
            expect(results.getItem('Pivot').superclass,equals(results.nameToIndex.get('Base2')));
        });
    }
    test_getTypeHierarchy() {
        this.pathname = this.sourcePath('test.dart');
        this.writeFile(this.pathname,'// dummy');
        this.standardAnalysisSetup();
        let tests : core.DartList<any> = new core.DartList.literal(this.getTypeHierarchy_classElement.bind(this),this.getTypeHierarchy_displayName.bind(this),this.getTypeHierarchy_memberElement.bind(this),this.getTypeHierarchy_superclass.bind(this),this.getTypeHierarchy_interfaces.bind(this),this.getTypeHierarchy_mixins.bind(this),this.getTypeHierarchy_subclasses.bind(this),this.getTypeHierarchy_badTarget.bind(this),this.getTypeHierarchy_functionTarget.bind(this));
        return async.Future.forEach(tests,(test : any) =>  {
            return test();
        });
    }
    typeHierarchyTest(text : string) : async.Future<HierarchyResults> { 
        return new async.Future.fromPromise(( async () =>  {
            let offset : number = new core.DartString(text).indexOf(' /* target */') - 1;
            this.sendAnalysisUpdateContent(new core.DartMap.literal([
                [this.pathname,new bare.createInstance(any,null,text)]]));
            await this.analysisFinished;
            let result = await this.sendSearchGetTypeHierarchy(this.pathname,offset);
            if (op(Op.EQUALS,result.hierarchyItems,null)) {
                return null;
            }else {
                return new HierarchyResults(result.hierarchyItems);
            }
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    GetTypeHierarchyTest() {
    }
}

export namespace HierarchyResults {
    export type Constructors = 'HierarchyResults';
    export type Interface = Omit<HierarchyResults, Constructors>;
}
@DartClass
export class HierarchyResults {
    items : core.DartList<any>;

    pivot : any;

    nameToIndex : core.DartMap<string,number>;

    constructor(items : core.DartList<any>) {
    }
    @defaultConstructor
    HierarchyResults(items : core.DartList<any>) {
        this.items = items;
        this.pivot = this.items[0];
        this.nameToIndex = new core.DartMap.literal([
        ]);
        for(let i : number = 0; i < this.items.length; i++){
            this.nameToIndex.set(this.items[i].classElement.name,i);
        }
    }
    getItem(name : string) : any {
        if (this.nameToIndex.containsKey(name)) {
            return this.items[this.nameToIndex.get(name)];
        }else {
            fail(`Class ${name} not found in hierarchy results`);
            return null;
        }
    }
}

export class properties {
}
