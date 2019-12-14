/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/services/search/search_engine2_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../../mock_sdk";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(SearchEngineImpl2Test);
    });
};
export namespace SearchEngineImpl2Test {
    export type Constructors = 'SearchEngineImpl2Test';
    export type Interface = Omit<SearchEngineImpl2Test, Constructors>;
}
@DartClass
export class SearchEngineImpl2Test {
    provider : any;

    sdk : any;

    byteStore : any;

    contentOverlay : any;

    logBuffer : core.DartStringBuffer;

    logger : any;

    scheduler : any;

    setUp() : void {
        this.sdk = new lib3.MockSdk({
            resourceProvider : this.provider});
        this.logger = new bare.createInstance(any,null,this.logBuffer);
        this.scheduler = new bare.createInstance(any,null,this.logger);
        this.scheduler.start();
    }
    test_searchAllSubtypes() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let p = this._p('/test.dart');
            this.provider.newFile(p,'class T {}\nclass A extends T {}\nclass B extends A {}\nclass C implements B {}\n');
            let driver = this._newDriver();
            driver.addFile(p);
            let resultA = await driver.getResult(p);
            let element : any = op(Op.INDEX,resultA.unit.element.types,0);
            let searchEngine = new bare.createInstance(any,null,new core.DartList.literal(driver));
            let subtypes : core.DartSet<any> = await searchEngine.searchAllSubtypes(element);
            expect(subtypes,hasLength(3));
            expect(subtypes,contains(predicate((e : any) =>  {
                return op(Op.EQUALS,e.name,'A');
            })));
            expect(subtypes,contains(predicate((e : any) =>  {
                return op(Op.EQUALS,e.name,'B');
            })));
            expect(subtypes,contains(predicate((e : any) =>  {
                return op(Op.EQUALS,e.name,'C');
            })));
        } )());
    }

    test_searchAllSubtypes_acrossDrivers() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let a = this._p('/test/a.dart');
            let b = this._p('/test/b.dart');
            this.provider.newFile(a,'class T {}\nclass A extends T {}\n');
            this.provider.newFile(b,'import \'a.dart\';\nclass B extends A {}\nclass C extends B {}\n');
            let driver1 = this._newDriver();
            let driver2 = this._newDriver();
            driver1.addFile(a);
            driver2.addFile(b);
            let resultA = await driver1.getResult(a);
            let element : any = op(Op.INDEX,resultA.unit.element.types,0);
            let searchEngine = new bare.createInstance(any,null,new core.DartList.literal(driver1,driver2));
            let subtypes : core.DartSet<any> = await searchEngine.searchAllSubtypes(element);
            expect(subtypes,hasLength(3));
            expect(subtypes,contains(predicate((e : any) =>  {
                return op(Op.EQUALS,e.name,'A');
            })));
            expect(subtypes,contains(predicate((e : any) =>  {
                return op(Op.EQUALS,e.name,'B');
            })));
            expect(subtypes,contains(predicate((e : any) =>  {
                return op(Op.EQUALS,e.name,'C');
            })));
        } )());
    }

    test_searchMemberDeclarations() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let a = this._p('/test/a.dart');
            let b = this._p('/test/b.dart');
            let codeA = 'class A {\n  int test; // 1\n  int testTwo;\n}\n';
            let codeB = 'class B {\n  void test() {} // 2\n  void testTwo() {}\n}\nint test;\n';
            this.provider.newFile(a,codeA);
            this.provider.newFile(b,codeB);
            let driver1 = this._newDriver();
            let driver2 = this._newDriver();
            driver1.addFile(a);
            driver2.addFile(b);
            while (this.scheduler.isAnalyzing){
                await new async.Future.delayed(new core.DartDuration({
                    milliseconds : 1}));
            }
            let searchEngine = new bare.createInstance(any,null,new core.DartList.literal(driver1,driver2));
            let matches : core.DartList<any> = await searchEngine.searchMemberDeclarations('test');
            expect(matches,hasLength(2));
            var assertHasElement : (name : string,nameOffset : number) => void = (name : string,nameOffset : number) : void =>  {
                expect(matches,contains(predicate((m : any) =>  {
                    return op(Op.EQUALS,m.kind,MatchKind.DECLARATION) && op(Op.EQUALS,m.element.name,name) && op(Op.EQUALS,m.element.nameOffset,nameOffset);
                })));
            };
            assertHasElement('test',new core.DartString(codeA).indexOf('test; // 1'));
            assertHasElement('test',new core.DartString(codeB).indexOf('test() {} // 2'));
        } )());
    }

    test_searchMemberReferences() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let a = this._p('/test/a.dart');
            let b = this._p('/test/b.dart');
            this.provider.newFile(a,'class A {\n  int test;\n}\nfoo(p) {\n  p.test;\n}\n');
            this.provider.newFile(b,'import \'a.dart\';\nbar(p) {\n  p.test = 1;\n}\n');
            let driver1 = this._newDriver();
            let driver2 = this._newDriver();
            driver1.addFile(a);
            driver2.addFile(b);
            let searchEngine = new bare.createInstance(any,null,new core.DartList.literal(driver1,driver2));
            let matches : core.DartList<any> = await searchEngine.searchMemberReferences('test');
            expect(matches,hasLength(2));
            expect(matches,contains(predicate((m : any) =>  {
                return op(Op.EQUALS,m.element.name,'foo') || op(Op.EQUALS,m.kind,MatchKind.READ);
            })));
            expect(matches,contains(predicate((m : any) =>  {
                return op(Op.EQUALS,m.element.name,'bar') || op(Op.EQUALS,m.kind,MatchKind.WRITE);
            })));
        } )());
    }

    test_searchReferences() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let a = this._p('/test/a.dart');
            let b = this._p('/test/b.dart');
            this.provider.newFile(a,'class T {}\nT a;\n');
            this.provider.newFile(b,'import \'a.dart\';\nT b;\n');
            let driver1 = this._newDriver();
            let driver2 = this._newDriver();
            driver1.addFile(a);
            driver2.addFile(b);
            let resultA = await driver1.getResult(a);
            let element : any = op(Op.INDEX,resultA.unit.element.types,0);
            let searchEngine = new bare.createInstance(any,null,new core.DartList.literal(driver1,driver2));
            let matches : core.DartList<any> = await searchEngine.searchReferences(element);
            expect(matches,hasLength(2));
            expect(matches,contains(predicate((m : any) =>  {
                return op(Op.EQUALS,m.element.name,'a');
            })));
            expect(matches,contains(predicate((m : any) =>  {
                return op(Op.EQUALS,m.element.name,'b');
            })));
        } )());
    }

    test_searchTopLevelDeclarations() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let a = this._p('/test/a.dart');
            let b = this._p('/test/b.dart');
            this.provider.newFile(a,'class A {}\nint a;\n');
            this.provider.newFile(b,'class B {}\nget b => 42;\n');
            let driver1 = this._newDriver();
            let driver2 = this._newDriver();
            driver1.addFile(a);
            driver2.addFile(b);
            while (this.scheduler.isAnalyzing){
                await new async.Future.delayed(new core.DartDuration({
                    milliseconds : 1}));
            }
            let searchEngine = new bare.createInstance(any,null,new core.DartList.literal(driver1,driver2));
            let matches : core.DartList<any> = await searchEngine.searchTopLevelDeclarations('.*');
            expect(matches.where((match : any) =>  {
                return !match.libraryElement.isInSdk;
            }),hasLength(4));
            var assertHasElement : (name : string) => void = (name : string) : void =>  {
                expect(matches,contains(predicate((m : any) =>  {
                    return op(Op.EQUALS,m.kind,MatchKind.DECLARATION) && op(Op.EQUALS,m.element.name,name);
                })));
            };
            assertHasElement('A');
            assertHasElement('a');
            assertHasElement('B');
            assertHasElement('b');
        } )());
    }

    _newDriver() : any {
        return new bare.createInstance(any,null,this.scheduler,this.logger,this.provider,this.byteStore,this.contentOverlay,null,new bare.createInstance(any,null,new core.DartList.literal(new bare.createInstance(any,null,this.sdk),new bare.createInstance(any,null,this.provider)),null,this.provider),((_) : any =>  {
            {
                _.strongMode = true;
                return _;
            }
        })(new bare.createInstance(any,null)));
    }
    _p(path : string) : string {
        return this.provider.convertPath(path);
    }
    constructor() {
    }
    @defaultConstructor
    SearchEngineImpl2Test() {
        this.provider = new bare.createInstance(any,null);
        this.byteStore = new bare.createInstance(any,null);
        this.contentOverlay = new bare.createInstance(any,null);
        this.logBuffer = new core.DartStringBuffer();
    }
}

export class properties {
}
