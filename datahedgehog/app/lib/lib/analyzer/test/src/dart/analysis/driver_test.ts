/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/src/dart/analysis/driver_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../../context/mock_sdk";
import * as lib4 from "./base";
import * as lib5 from "./../../../utils";
import * as lib6 from "@dart2ts/dart/uri";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(AnalysisDriverSchedulerTest);
        defineReflectiveTests(AnalysisDriverTest);
        defineReflectiveTests(CacheAllAnalysisDriverTest);
    });
};
export var pumpEventQueue : (times? : number) => async.Future<any> = (times? : number) : async.Future<any> =>  {
    times = times || 5000;
    if (times == 0) return new async.Future.value();
    return new async.Future.delayed(core.DartDuration.ZERO,() =>  {
        return pumpEventQueue(times - 1);
    });
};
export namespace AnalysisDriverSchedulerTest {
    export type Constructors = 'AnalysisDriverSchedulerTest';
    export type Interface = Omit<AnalysisDriverSchedulerTest, Constructors>;
}
@DartClass
export class AnalysisDriverSchedulerTest {
    provider : any;

    sdk : any;

    byteStore : any;

    contentOverlay : any;

    logBuffer : core.DartStringBuffer;

    logger : any;

    scheduler : any;

    allResults : core.DartList<any>;

    newDriver() : any {
        this.sdk = new lib3.MockSdk({
            resourceProvider : this.provider});
        let driver : any = new bare.createInstance(any,null,this.scheduler,this.logger,this.provider,this.byteStore,this.contentOverlay,null,new bare.createInstance(any,null,new core.DartList.literal(new bare.createInstance(any,null,this.sdk),new bare.createInstance(any,null,this.provider)),null,this.provider),((_) : any =>  {
            {
                _.strongMode = true;
                return _;
            }
        })(new bare.createInstance(any,null)));
        driver.results.forEach(this.allResults.add.bind(this.allResults));
        return driver;
    }
    setUp() : void {
        this.sdk = new lib3.MockSdk({
            resourceProvider : this.provider});
        this.logger = new bare.createInstance(any,null,this.logBuffer);
        this.scheduler = new bare.createInstance(any,null,this.logger);
        this.scheduler.start();
    }
    test_priorities_allChangedFirst() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let driver1 : any = this.newDriver();
            let driver2 : any = this.newDriver();
            let a : string = this._p('/a.dart');
            let b : string = this._p('/b.dart');
            let c : string = this._p('/c.dart');
            let d : string = this._p('/d.dart');
            this.provider.newFile(a,'class A {}');
            this.provider.newFile(b,"import 'a.dart';");
            this.provider.newFile(c,'class C {}');
            this.provider.newFile(d,"import 'c.dart';");
            driver1.addFile(a);
            driver1.addFile(b);
            driver2.addFile(c);
            driver2.addFile(d);
            await this.scheduler.waitForIdle();
            this.allResults.clear();
            this.provider.updateFile(a,'class A2 {}');
            this.provider.updateFile(c,'class C2 {}');
            driver1.changeFile(a);
            driver1.changeFile(c);
            driver2.changeFile(a);
            driver2.changeFile(c);
            await this.scheduler.waitForIdle();
            expect(this.allResults,hasLength(greaterThanOrEqualTo(2)));
            expect(this.allResults[0].path,a);
            expect(this.allResults[1].path,c);
        } )());
    }

    test_priorities_firstChanged_thenImporting() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let driver1 : any = this.newDriver();
            let driver2 : any = this.newDriver();
            let a : string = this._p('/a.dart');
            let b : string = this._p('/b.dart');
            let c : string = this._p('/c.dart');
            this.provider.newFile(a,"import 'c.dart';");
            this.provider.newFile(b,'class B {}');
            this.provider.newFile(c,"import 'b.dart';");
            driver1.addFile(a);
            driver1.addFile(b);
            driver2.addFile(c);
            await this.scheduler.waitForIdle();
            this.allResults.clear();
            this.provider.updateFile(b,'class B2 {}');
            driver1.changeFile(b);
            driver2.changeFile(b);
            await this.scheduler.waitForIdle();
            expect(this.allResults,hasLength(greaterThanOrEqualTo(2)));
            expect(this.allResults[0].path,b);
            expect(this.allResults[1].path,c);
        } )());
    }

    test_priorities_firstChanged_thenWithErrors() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let driver1 : any = this.newDriver();
            let driver2 : any = this.newDriver();
            let a : string = this._p('/a.dart');
            let b : string = this._p('/b.dart');
            let c : string = this._p('/c.dart');
            let d : string = this._p('/d.dart');
            this.provider.newFile(a,'class A {}');
            this.provider.newFile(b,"export 'a.dart';");
            this.provider.newFile(c,"import 'b.dart';");
            this.provider.newFile(d,"import 'b.dart'; class D extends X {}");
            driver1.addFile(a);
            driver1.addFile(b);
            driver2.addFile(c);
            driver2.addFile(d);
            await this.scheduler.waitForIdle();
            this.allResults.clear();
            this.provider.updateFile(a,'class A2 {}');
            driver1.changeFile(a);
            driver2.changeFile(a);
            await this.scheduler.waitForIdle();
            expect(this.allResults,hasLength(greaterThanOrEqualTo(2)));
            expect(this.allResults[0].path,a);
            expect(this.allResults[1].path,d);
        } )());
    }

    test_priorities_getResult_beforePriority() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let driver1 : any = this.newDriver();
            let driver2 : any = this.newDriver();
            let a : string = this._p('/a.dart');
            let b : string = this._p('/b.dart');
            let c : string = this._p('/c.dart');
            this.provider.newFile(a,'class A {}');
            this.provider.newFile(b,'class B {}');
            this.provider.newFile(c,'class C {}');
            driver1.addFile(a);
            driver2.addFile(b);
            driver2.addFile(c);
            driver1.priorityFiles = new core.DartList.literal(a);
            driver2.priorityFiles = new core.DartList.literal(a);
            let result : any = await driver2.getResult(b);
            expect(result.path,b);
            await this.scheduler.status.firstWhere((status : any) =>  {
                return status.isIdle;
            });
            expect(this.allResults,hasLength(3));
            expect(this.allResults[0].path,b);
            expect(this.allResults[1].path,a);
            expect(this.allResults[2].path,c);
        } )());
    }

    test_priorities_priorityBeforeGeneral1() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let driver1 : any = this.newDriver();
            let driver2 : any = this.newDriver();
            let a : string = this._p('/a.dart');
            let b : string = this._p('/b.dart');
            this.provider.newFile(a,'class A {}');
            this.provider.newFile(b,'class B {}');
            driver1.addFile(a);
            driver2.addFile(b);
            driver1.priorityFiles = new core.DartList.literal(a);
            driver2.priorityFiles = new core.DartList.literal(a);
            await this.scheduler.status.firstWhere((status : any) =>  {
                return status.isIdle;
            });
            expect(this.allResults,hasLength(2));
            expect(this.allResults[0].path,a);
            expect(this.allResults[1].path,b);
        } )());
    }

    test_priorities_priorityBeforeGeneral2() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let driver1 : any = this.newDriver();
            let driver2 : any = this.newDriver();
            let a : string = this._p('/a.dart');
            let b : string = this._p('/b.dart');
            this.provider.newFile(a,'class A {}');
            this.provider.newFile(b,'class B {}');
            driver1.addFile(a);
            driver2.addFile(b);
            driver1.priorityFiles = new core.DartList.literal(b);
            driver2.priorityFiles = new core.DartList.literal(b);
            await this.scheduler.status.firstWhere((status : any) =>  {
                return status.isIdle;
            });
            expect(this.allResults,hasLength(2));
            expect(this.allResults[0].path,b);
            expect(this.allResults[1].path,a);
        } )());
    }

    test_priorities_priorityBeforeGeneral3() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let driver1 : any = this.newDriver();
            let driver2 : any = this.newDriver();
            let a : string = this._p('/a.dart');
            let b : string = this._p('/b.dart');
            let c : string = this._p('/c.dart');
            this.provider.newFile(a,'class A {}');
            this.provider.newFile(b,'class B {}');
            this.provider.newFile(c,'class C {}');
            driver1.addFile(a);
            driver1.addFile(b);
            driver2.addFile(c);
            driver1.priorityFiles = new core.DartList.literal(a,c);
            driver2.priorityFiles = new core.DartList.literal(a,c);
            await this.scheduler.status.firstWhere((status : any) =>  {
                return status.isIdle;
            });
            expect(this.allResults,hasLength(3));
            expect(this.allResults[0].path,a);
            expect(this.allResults[1].path,c);
            expect(this.allResults[2].path,b);
        } )());
    }

    test_status() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let driver1 : any = this.newDriver();
            let driver2 : any = this.newDriver();
            let a : string = this._p('/a.dart');
            let b : string = this._p('/b.dart');
            let c : string = this._p('/c.dart');
            this.provider.newFile(a,'class A {}');
            this.provider.newFile(b,'class B {}');
            this.provider.newFile(c,'class C {}');
            driver1.addFile(a);
            driver2.addFile(b);
            driver2.addFile(c);
            let idleStatusMonitor : any = new bare.createInstance(any,null);
            let allStatuses : core.DartList<any> = new core.DartList.literal();
            this.scheduler.status.forEach((status : any) =>  {
                allStatuses.add(status);
                if (status.isIdle) {
                    idleStatusMonitor.notify();
                }
            });
            await idleStatusMonitor.signal;
            expect(allStatuses,hasLength(2));
            expect(allStatuses[0].isAnalyzing,isTrue);
            expect(allStatuses[1].isAnalyzing,isFalse);
            expect(this.allResults,hasLength(3));
        } )());
    }

    test_status_analyzingOnlyWhenHasFilesToAnalyze() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let driver1 : any = this.newDriver();
            let driver2 : any = this.newDriver();
            let a : string = this._p('/a.dart');
            let b : string = this._p('/b.dart');
            this.provider.newFile(a,'class A {}');
            this.provider.newFile(b,'class B {}');
            driver1.addFile(a);
            driver2.addFile(b);
            let idleStatusMonitor : any = new bare.createInstance(any,null);
            let allStatuses : core.DartList<any> = new core.DartList.literal();
            this.scheduler.status.forEach((status : any) =>  {
                allStatuses.add(status);
                if (status.isIdle) {
                    idleStatusMonitor.notify();
                }
            });
            await idleStatusMonitor.signal;
            expect(allStatuses,hasLength(2));
            expect(allStatuses[0].isAnalyzing,isTrue);
            expect(allStatuses[1].isAnalyzing,isFalse);
            allStatuses.clear();
            await driver1.getFilesReferencingName('X');
            expect(allStatuses,isEmpty);
        } )());
    }

    _p(path : string) : string {
        return this.provider.convertPath(path);
    }
    constructor() {
    }
    @defaultConstructor
    AnalysisDriverSchedulerTest() {
        this.provider = new bare.createInstance(any,null);
        this.byteStore = new bare.createInstance(any,null);
        this.contentOverlay = new bare.createInstance(any,null);
        this.logBuffer = new core.DartStringBuffer();
        this.allResults = new core.DartList.literal();
    }
}

export namespace AnalysisDriverTest {
    export type Constructors = lib4.BaseAnalysisDriverTest.Constructors | 'AnalysisDriverTest';
    export type Interface = Omit<AnalysisDriverTest, Constructors>;
}
@DartClass
export class AnalysisDriverTest extends lib4.BaseAnalysisDriverTest {
    test_addedFiles() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let a = this._p('/test/lib/a.dart');
            let b = this._p('/test/lib/b.dart');
            this.driver.addFile(a);
            expect(this.driver.addedFiles,contains(a));
            expect(this.driver.addedFiles,isNot(contains(b)));
            this.driver.removeFile(a);
            expect(this.driver.addedFiles,isNot(contains(a)));
            expect(this.driver.addedFiles,isNot(contains(b)));
        } )());
    }

    test_addFile_shouldRefresh() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let a = this._p('/test/lib/a.dart');
            let b = this._p('/test/lib/b.dart');
            this.provider.newFile(a,'class A {}');
            this.provider.newFile(b,'import \'a.dart\';\n');
            this.driver.addFile(a);
            this.driver.addFile(b);
            var assertNumberOfErrorsInB : (n : number) => void = (n : number) : void =>  {
                let bResult = this.allResults.singleWhere((r : any) =>  {
                    return op(Op.EQUALS,r.path,b);
                });
                expect(bResult.errors,hasLength(n));
                this.allResults.clear();
            };
            await this.scheduler.waitForIdle();
            assertNumberOfErrorsInB(1);
            this.provider.newFile(b,'import \'a.dart\';\nmain() {\n  print(A);\n}\n');
            this.driver.changeFile(b);
            await this.scheduler.waitForIdle();
            assertNumberOfErrorsInB(0);
            this.provider.newFile(b,'import \'a.dart\';\n');
            this.driver.removeFile(b);
            this.driver.addFile(b);
            await this.scheduler.waitForIdle();
            assertNumberOfErrorsInB(1);
        } )());
    }

    test_addFile_thenRemove() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let a = this._p('/test/lib/a.dart');
            let b = this._p('/test/lib/b.dart');
            this.provider.newFile(a,'class A {}');
            this.provider.newFile(b,'class B {}');
            this.driver.addFile(a);
            this.driver.addFile(b);
            this.driver.removeFile(a);
            await this.scheduler.waitForIdle();
            expect(this.allResults,hasLength(1));
            expect(this.allResults[0].path,b);
        } )());
    }

    test_analyze_resolveDirectives() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let lib = this._p('/test/lib.dart');
            let part1 = this._p('/test/part1.dart');
            let part2 = this._p('/test/part2.dart');
            this.provider.newFile(lib,'library lib;\npart \'part1.dart\';\npart \'part2.dart\';\n');
            this.provider.newFile(part1,'part of lib;\n');
            this.provider.newFile(part2,'part of \'lib.dart\';\n');
            let libResult : any = await this.driver.getResult(lib);
            let partResult1 : any = await this.driver.getResult(part1);
            let partResult2 : any = await this.driver.getResult(part2);
            let libUnit : any = libResult.unit;
            let partUnit1 : any = partResult1.unit;
            let partUnit2 : any = partResult2.unit;
            let unitElement : any = libUnit.element;
            let partElement1 : any = partUnit1.element;
            let partElement2 : any = partUnit2.element;
            let libraryElement : any = unitElement.library;
            {
                expect(libraryElement.entryPoint,isNull);
                expect(libraryElement.source,unitElement.source);
                expect(libraryElement.definingCompilationUnit,unitElement);
                expect(libraryElement.parts,hasLength(2));
            }
            expect((op(Op.INDEX,libUnit.directives,0) as any).element,libraryElement);
            expect((op(Op.INDEX,libUnit.directives,1) as any).element,partElement1);
            expect((op(Op.INDEX,libUnit.directives,2) as any).element,partElement2);
            {
                let partOf = partUnit1.directives.single as any;
                expect(partOf.element,libraryElement);
            }
            {
                let partOf = partUnit2.directives.single as any;
                expect(partOf.element,libraryElement);
            }
        } )());
    }

    test_analyze_resolveDirectives_error_missingLibraryDirective() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let lib = this._p('/test/lib.dart');
            let part = this._p('/test/part.dart');
            this.provider.newFile(lib,'part \'part.dart\';\n');
            this.provider.newFile(part,'part of lib;\n');
            this.driver.addFile(lib);
            let libResult : any = await this.driver.getResult(lib);
            let errors : core.DartList<any> = libResult.errors;
            if (libResult.unit.element.context.analysisOptions.enableUriInPartOf) {
                expect(errors,hasLength(0));
            }else {
                expect(errors,hasLength(1));
                expect(errors[0].errorCode,ResolverErrorCode.MISSING_LIBRARY_DIRECTIVE_WITH_PART);
            }
        } )());
    }

    test_analyze_resolveDirectives_error_partOfDifferentLibrary_byName() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let lib = this._p('/test/lib.dart');
            let part = this._p('/test/part.dart');
            this.provider.newFile(lib,'library lib;\npart \'part.dart\';\n');
            this.provider.newFile(part,'part of someOtherLib;\n');
            this.driver.addFile(lib);
            let libResult : any = await this.driver.getResult(lib);
            let errors : core.DartList<any> = libResult.errors;
            expect(errors,hasLength(1));
            expect(errors[0].errorCode,StaticWarningCode.PART_OF_DIFFERENT_LIBRARY);
        } )());
    }

    test_analyze_resolveDirectives_error_partOfDifferentLibrary_byUri() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let lib = this._p('/test/lib.dart');
            let part = this._p('/test/part.dart');
            this.provider.newFile(lib,'library lib;\npart \'part.dart\';\n');
            this.provider.newFile(part,'part of \'other_lib.dart\';\n');
            this.driver.addFile(lib);
            let libResult : any = await this.driver.getResult(lib);
            let errors : core.DartList<any> = libResult.errors;
            expect(errors,hasLength(1));
            expect(errors[0].errorCode,StaticWarningCode.PART_OF_DIFFERENT_LIBRARY);
        } )());
    }

    test_analyze_resolveDirectives_error_partOfNonPart() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let lib = this._p('/test/lib.dart');
            let part = this._p('/test/part.dart');
            this.provider.newFile(lib,'library lib;\npart \'part.dart\';\n');
            this.provider.newFile(part,'// no part of directive\n');
            this.driver.addFile(lib);
            let libResult : any = await this.driver.getResult(lib);
            let errors : core.DartList<any> = libResult.errors;
            expect(errors,hasLength(1));
            expect(errors[0].errorCode,CompileTimeErrorCode.PART_OF_NON_PART);
        } )());
    }

    test_cachedPriorityResults() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let a = this._p('/test/bin/a.dart');
            this.provider.newFile(a,'var a = 1;');
            this.driver.priorityFiles = new core.DartList.literal(a);
            let result1 : any = await this.driver.getResult(a);
            expect(this.driver.test.priorityResults,containsPair(a,result1));
            let result2 : any = await this.driver.getResult(a);
            expect(result2,same(result1));
        } )());
    }

    test_cachedPriorityResults_flush_onAnyFileChange() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let a = this._p('/test/bin/a.dart');
            let b = this._p('/test/bin/b.dart');
            this.provider.newFile(a,'var a = 1;');
            this.provider.newFile(a,'var b = 2;');
            this.driver.priorityFiles = new core.DartList.literal(a);
            let result1 : any = await this.driver.getResult(a);
            expect(this.driver.test.priorityResults,containsPair(a,result1));
            this.driver.changeFile(a);
            expect(this.driver.test.priorityResults,isEmpty);
            let result2 : any = await this.driver.getResult(a);
            expect(this.driver.test.priorityResults,containsPair(a,result2));
            this.driver.addFile(b);
            expect(this.driver.test.priorityResults,isEmpty);
            let result3 : any = await this.driver.getResult(a);
            expect(this.driver.test.priorityResults,containsPair(a,result3));
            this.driver.removeFile(b);
            expect(this.driver.test.priorityResults,isEmpty);
        } )());
    }

    test_cachedPriorityResults_flush_onPrioritySetChange() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let a = this._p('/test/bin/a.dart');
            let b = this._p('/test/bin/b.dart');
            this.provider.newFile(a,'var a = 1;');
            this.provider.newFile(b,'var b = 2;');
            this.driver.priorityFiles = new core.DartList.literal(a);
            let result1 : any = await this.driver.getResult(a);
            expect(this.driver.test.priorityResults,hasLength(1));
            expect(this.driver.test.priorityResults,containsPair(a,result1));
            this.driver.priorityFiles = new core.DartList.literal(a,b);
            expect(this.driver.test.priorityResults,hasLength(1));
            expect(this.driver.test.priorityResults,containsPair(a,result1));
            let result2 : any = await this.driver.getResult(b);
            expect(this.driver.test.priorityResults,hasLength(2));
            expect(this.driver.test.priorityResults,containsPair(a,result1));
            expect(this.driver.test.priorityResults,containsPair(b,result2));
            this.driver.priorityFiles = new core.DartList.literal(b);
            expect(this.driver.test.priorityResults,hasLength(1));
            expect(this.driver.test.priorityResults,containsPair(b,result2));
        } )());
    }

    test_cachedPriorityResults_notPriority() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let a = this._p('/test/bin/a.dart');
            this.provider.newFile(a,'var a = 1;');
            let result1 : any = await this.driver.getResult(a);
            expect(this.driver.test.priorityResults,isEmpty);
            let result2 : any = await this.driver.getResult(a);
            expect(result2,isNot(same(result1)));
        } )());
    }

    test_changeFile_implicitlyAnalyzed() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let a = this._p('/test/lib/a.dart');
            let b = this._p('/test/lib/b.dart');
            this.provider.newFile(a,'import \'b.dart\';\nvar A = B;\n');
            this.provider.newFile(b,'var B = 1;');
            this.driver.priorityFiles = new core.DartList.literal(a);
            this.driver.addFile(a);
            await this.scheduler.waitForIdle();
            expect(this.allResults,hasLength(1));
            {
                let ar : any = this.allResults.firstWhere((r : any) =>  {
                    return op(Op.EQUALS,r.path,a);
                });
                expect(this._getTopLevelVarType(ar.unit,'A'),'int');
            }
            this.allResults.clear();
            this.provider.updateFile(b,'var B = 1.2;');
            this.driver.changeFile(b);
            expect(this.driver.test.fileTracker.hasPendingFiles,isFalse);
            await this.scheduler.waitForIdle();
            expect(this.allResults,hasLength(1));
            {
                let ar : any = this.allResults.firstWhere((r : any) =>  {
                    return op(Op.EQUALS,r.path,a);
                });
                expect(this._getTopLevelVarType(ar.unit,'A'),'double');
            }
        } )());
    }

    test_changeFile_notUsed() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let a = this._p('/test/lib/a.dart');
            let b = this._p('/other/b.dart');
            this.provider.newFile(a,'');
            this.provider.newFile(b,'class B1 {}');
            this.driver.addFile(a);
            await this.scheduler.waitForIdle();
            this.allResults.clear();
            this.provider.updateFile(b,'class B2 {}');
            this.driver.changeFile(b);
            await this.scheduler.waitForIdle();
            expect(this.allResults,isEmpty);
            expect(this.driver.fsState.knownFilePaths,isNot(contains(b)));
        } )());
    }

    test_changeFile_selfConsistent() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let a = this._p('/test/lib/a.dart');
            let b = this._p('/test/lib/b.dart');
            this.provider.newFile(a,'import \'b.dart\';\nvar A1 = 1;\nvar A2 = B1;\n');
            this.provider.newFile(b,'import \'a.dart\';\nvar B1 = A1;\n');
            this.driver.priorityFiles = new core.DartList.literal(a,b);
            this.driver.addFile(a);
            this.driver.addFile(b);
            await this.scheduler.waitForIdle();
            expect(this.allResults,hasLength(2));
            {
                let ar : any = this.allResults.firstWhere((r : any) =>  {
                    return op(Op.EQUALS,r.path,a);
                });
                expect(this._getTopLevelVarType(ar.unit,'A1'),'int');
                expect(this._getTopLevelVarType(ar.unit,'A2'),'int');
            }
            {
                let br : any = this.allResults.firstWhere((r : any) =>  {
                    return op(Op.EQUALS,r.path,b);
                });
                expect(this._getTopLevelVarType(br.unit,'B1'),'int');
            }
            this.allResults.clear();
            this.provider.updateFile(a,'import \'b.dart\';\nvar A1 = 1.2;\nvar A2 = B1;\n');
            this.driver.changeFile(a);
            await this.scheduler.waitForIdle();
            expect(this.allResults,hasLength(2));
            {
                let ar : any = this.allResults.firstWhere((r : any) =>  {
                    return op(Op.EQUALS,r.path,a);
                });
                expect(this._getTopLevelVarType(ar.unit,'A1'),'double');
                expect(this._getTopLevelVarType(ar.unit,'A2'),'double');
            }
            {
                let br : any = this.allResults.firstWhere((r : any) =>  {
                    return op(Op.EQUALS,r.path,b);
                });
                expect(this._getTopLevelVarType(br.unit,'B1'),'double');
            }
        } )());
    }

    test_changeFile_single() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('var V = 1;',{
                priority : true});
            {
                await this.scheduler.waitForIdle();
                expect(this.allResults,hasLength(1));
                let result : any = this.allResults[0];
                expect(result.path,this.testFile);
                expect(this._getTopLevelVarType(result.unit,'V'),'int');
            }
            this.allResults.clear();
            this.provider.updateFile(this.testFile,'var V = 1.2;');
            await pumpEventQueue();
            expect(this.allResults,isEmpty);
            this.driver.changeFile(this.testFile);
            expect(this.driver.test.fileTracker.isFilePending(this.testFile),isTrue);
            {
                await this.scheduler.waitForIdle();
                expect(this.allResults,hasLength(1));
                let result : any = this.allResults[0];
                expect(result.path,this.testFile);
                expect(this._getTopLevelVarType(result.unit,'V'),'double');
            }
        } )());
    }

    test_const_annotation_notConstConstructor() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {\n  final int i;\n  A(this.i);\n}\n\n@A(5)\nclass C {}\n');
            let result = await this.driver.getResult(this.testFile);
            let atD = op(Op.INDEX,lib5.AstFinder.getClass(result.unit,'C').metadata,0);
            let atDI = atD.elementAnnotation as any;
            let value = atDI.evaluationResult.value;
            expect(value,isNull);
        } )());
    }

    test_const_annotation_withArgs() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('const x = 1;\n@D(x) class C {}\nclass D {\n  const D(this.value);\n  final value;\n}\n');
            let result = await this.driver.getResult(this.testFile);
            let atD = op(Op.INDEX,lib5.AstFinder.getClass(result.unit,'C').metadata,0);
            let atDI = atD.elementAnnotation as any;
            let value = atDI.evaluationResult.value;
            expect(value,isNotNull);
            expect(value.type,isNotNull);
            expect(value.type.name,'D');
            expect(value.fields.keys,new core.DartList.literal('value'));
            expect(value.getField('value').toIntValue(),1);
            expect(atDI.evaluationResult.errors,isEmpty);
        } )());
    }

    test_const_annotation_withoutArgs() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('const x = 1;\n@x class C {}\n');
            let result = await this.driver.getResult(this.testFile);
            let at_x : any = op(Op.INDEX,lib5.AstFinder.getClass(result.unit,'C').metadata,0);
            expect(at_x.elementAnnotation.constantValue.toIntValue(),1);
        } )());
    }

    test_const_circular_reference() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('const x = y + 1;\nconst y = x + 1;\n');
            let result = await this.driver.getResult(this.testFile);
            let x = lib5.AstFinder.getTopLevelVariableElement(result.unit,'x') as any;
            this._expectCircularityError(x.evaluationResult);
        } )());
    }

    test_const_dependency_sameUnit() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('const x = y + 1;\nconst y = 1;\n');
            let result = await this.driver.getResult(this.testFile);
            let x = lib5.AstFinder.getTopLevelVariableElement(result.unit,'x');
            let y = lib5.AstFinder.getTopLevelVariableElement(result.unit,'y');
            expect(x.constantValue.toIntValue(),2);
            expect(y.constantValue.toIntValue(),1);
        } )());
    }

    test_const_externalConstFactory() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('const x = const C.foo();\n\nclass C extends B {\n  external const factory C.foo();\n}\n\nclass B {}\n');
            let result = await this.driver.getResult(this.testFile);
            let x = lib5.AstFinder.getTopLevelVariableElement(result.unit,'x');
            expect(x.constantValue,isNotNull);
        } )());
    }

    test_const_implicitSuperConstructorInvocation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class Base {}\nclass Derived extends Base {\n  const Derived();\n}\nconst x = const Derived();\n');
            let result = await this.driver.getResult(this.testFile);
            let x = lib5.AstFinder.getTopLevelVariableElement(result.unit,'x');
            expect(x.constantValue,isNotNull);
        } )());
    }

    test_const_simple_topLevelVariable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('const x = 1;\n');
            let result = await this.driver.getResult(this.testFile);
            let x = lib5.AstFinder.getTopLevelVariableElement(result.unit,'x');
            expect(x.constantValue.toIntValue(),1);
        } )());
    }

    test_errors_uriDoesNotExist_export() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('export \'foo.dart\';\n');
            let result : any = await this.driver.getResult(this.testFile);
            let errors : core.DartList<any> = result.errors;
            expect(errors,hasLength(1));
            expect(errors[0].errorCode,CompileTimeErrorCode.URI_DOES_NOT_EXIST);
        } )());
    }

    test_errors_uriDoesNotExist_import() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('import \'foo.dart\';\n');
            let result : any = await this.driver.getResult(this.testFile);
            let errors : core.DartList<any> = result.errors;
            expect(errors,hasLength(1));
            expect(errors[0].errorCode,CompileTimeErrorCode.URI_DOES_NOT_EXIST);
        } )());
    }

    test_errors_uriDoesNotExist_import_deferred() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('import \'foo.dart\' deferred as foo;\nmain() {\n  foo.loadLibrary();\n}\n',{
                priority : true});
            let result : any = await this.driver.getResult(this.testFile);
            let errors : core.DartList<any> = result.errors;
            expect(errors,hasLength(1));
            expect(errors[0].errorCode,CompileTimeErrorCode.URI_DOES_NOT_EXIST);
        } )());
    }

    test_errors_uriDoesNotExist_part() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('library lib;\npart \'foo.dart\';\n');
            let result : any = await this.driver.getResult(this.testFile);
            let errors : core.DartList<any> = result.errors;
            expect(errors,hasLength(1));
            expect(errors[0].errorCode,CompileTimeErrorCode.URI_DOES_NOT_EXIST);
        } )());
    }

    test_externalSummaries() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let a = this._p('/a.dart');
            let b = this._p('/b.dart');
            this.provider.newFile(a,'class A {}\n');
            this.provider.newFile(b,'import \'a.dart\';\nvar a = new A();\n');
            let summaryStore : any = this.createAnalysisDriver().test.getSummaryStore(a);
            let aUri : string = this.provider.pathContext.toUri(a).toString();
            expect(summaryStore.unlinkedMap.keys,contains(aUri));
            expect(summaryStore.linkedMap.keys,contains(aUri));
            expect(summaryStore.unlinkedMap.keys,contains('dart:core'));
            expect(summaryStore.linkedMap.keys,contains('dart:core'));
            this.provider.deleteFile(a);
            let driver : any = this.createAnalysisDriver({
                externalSummaries : summaryStore});
            let result : any = await driver.getResult(b);
            expect(result.errors,isEmpty);
        } )());
    }

    test_generatedFile() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let uri : lib6.Uri = lib6.Uri.parse('package:aaa/foo.dart');
            let templatePath : string = this._p('/aaa/lib/foo.dart');
            let generatedPath : string = this._p('/generated/aaa/lib/foo.dart');
            this.provider.newFile(templatePath,'a() {}\nb() {}\n');
            this.provider.newFile(generatedPath,'aaa() {}\nbbb() {}\n');
            let generatedSource : any = new _SourceMock();
            when(generatedSource.uri).thenReturn(uri);
            when(generatedSource.fullName).thenReturn(generatedPath);
            when(this.generatedUriResolver.resolveAbsolute(uri,uri)).thenReturn(generatedSource);
            when(this.generatedUriResolver.restoreAbsolute(anyObject)).thenInvoke((source : any) =>  {
                let path : string = source.fullName;
                if (path == templatePath || path == generatedPath) {
                    return uri;
                }else {
                    return null;
                }
            });
            this.driver.addFile(templatePath);
            await this.scheduler.waitForIdle();
            expect(this.allExceptions,isEmpty);
            expect(this.allResults,isEmpty);
            let result = await this.driver.getResult(templatePath);
            expect(result,isNull);
            expect(this.allExceptions,isEmpty);
            expect(this.allResults,isEmpty);
            let element = await this.driver.getUnitElement(templatePath);
            expect(element,isNull);
            expect(this.allExceptions,isEmpty);
            expect(this.allResults,isEmpty);
            this.driver.priorityFiles = new core.DartList.literal(templatePath);
            this.driver.changeFile(templatePath);
            await this.scheduler.waitForIdle();
            expect(this.allExceptions,isEmpty);
            expect(this.allResults,isEmpty);
            expect(this.driver.knownFiles,isNot(contains(templatePath)));
        } )());
    }

    test_getErrors() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let content : string = 'int f() => 42 + bar();';
            this.addTestFile(content,{
                priority : true});
            let result : any = await this.driver.getErrors(this.testFile);
            expect(result.path,this.testFile);
            expect(result.uri.toString(),'package:test/test.dart');
            expect(result.errors,hasLength(1));
        } )());
    }

    test_getFilesDefiningClassMemberName() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let a = this._p('/test/bin/a.dart');
            let b = this._p('/test/bin/b.dart');
            let c = this._p('/test/bin/c.dart');
            let d = this._p('/test/bin/d.dart');
            this.provider.newFile(a,'class A { m1() {} }');
            this.provider.newFile(b,'class B { m2() {} }');
            this.provider.newFile(c,'class C { m2() {} }');
            this.provider.newFile(d,'class D { m3() {} }');
            this.driver.addFile(a);
            this.driver.addFile(b);
            this.driver.addFile(c);
            this.driver.addFile(d);
            expect(await this.driver.getFilesDefiningClassMemberName('m1'),unorderedEquals(new core.DartList.literal(a)));
            expect(await this.driver.getFilesDefiningClassMemberName('m2'),unorderedEquals(new core.DartList.literal(b,c)));
            expect(await this.driver.getFilesDefiningClassMemberName('m3'),unorderedEquals(new core.DartList.literal(d)));
        } )());
    }

    test_getFilesReferencingName() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let a = this._p('/test/bin/a.dart');
            let b = this._p('/test/bin/b.dart');
            let c = this._p('/test/bin/c.dart');
            let d = this._p('/test/bin/d.dart');
            let e = this._p('/test/bin/e.dart');
            this.provider.newFile(a,'class A {}');
            this.provider.newFile(b,"import 'a.dart'; A a;");
            this.provider.newFile(c,"import 'a.dart'; var a = new A();");
            this.provider.newFile(d,"class A{} A a;");
            this.provider.newFile(e,"import 'a.dart'; main() {}");
            this.driver.addFile(a);
            this.driver.addFile(b);
            this.driver.addFile(c);
            this.driver.addFile(d);
            this.driver.addFile(e);
            let files : core.DartList<string> = await this.driver.getFilesReferencingName('A');
            expect(files,unorderedEquals(new core.DartList.literal(b,c)));
            let files2 : core.DartList<string> = await this.driver.getFilesReferencingName('A');
            expect(files2,unorderedEquals(new core.DartList.literal(b,c)));
        } )());
    }

    test_getIndex() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let content : string = 'foo(int p) {}\nmain() {\n  foo(42);\n}\n';
            this.addTestFile(content);
            let index : any = await this.driver.getIndex(this.testFile);
            let unitId : number = index.strings.indexOf('package:test/test.dart');
            let fooId : number = index.strings.indexOf('foo');
            expect(unitId,isNonNegative);
            expect(fooId,isNonNegative);
        } )());
    }

    test_getLibraryByUri_external_resynthesize() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.provider.newFile(this.testFile,'class Test {}\n');
            let summaryStore : any = this.createAnalysisDriver().test.getSummaryStore(this.testFile);
            let uri : string = 'package:test/test.dart';
            expect(summaryStore.unlinkedMap.keys,contains(uri));
            expect(summaryStore.linkedMap.keys,contains(uri));
            this.provider.deleteFile(this.testFile);
            let driver : any = this.createAnalysisDriver({
                externalSummaries : summaryStore});
            expect(driver.test.numOfCreatedLibraryContexts,0);
            let library : any = await driver.getLibraryByUri(uri);
            expect(library.getType('Test'),isNotNull);
        } )());
    }

    test_getLibraryByUri_sdk_analyze() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let coreLibrary : any = await this.driver.getLibraryByUri('dart:core');
            expect(coreLibrary,isNotNull);
            expect(coreLibrary.getType('Object'),isNotNull);
            expect(coreLibrary.getType('int'),isNotNull);
        } )());
    }

    test_getLibraryByUri_sdk_resynthesize() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let sdkStore : any;
            {
                let corePath : string = this.sdk.mapDartUri('dart:core').fullName;
                sdkStore = this.createAnalysisDriver().test.getSummaryStore(corePath);
            }
            expect(sdkStore.unlinkedMap.keys,contains('dart:core'));
            expect(sdkStore.unlinkedMap.keys,contains('dart:async'));
            expect(sdkStore.linkedMap.keys,contains('dart:core'));
            expect(sdkStore.linkedMap.keys,contains('dart:async'));
            let driver : any = this.createAnalysisDriver({
                externalSummaries : sdkStore});
            let coreLibrary : any = await driver.getLibraryByUri('dart:core');
            expect(driver.test.numOfCreatedLibraryContexts,0);
            expect(coreLibrary,isNotNull);
            expect(coreLibrary.getType('Object'),isNotNull);
        } )());
    }

    test_getResult() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let content : string = 'int f() => 42;';
            this.addTestFile(content,{
                priority : true});
            let result : any = await this.driver.getResult(this.testFile);
            expect(result.path,this.testFile);
            expect(result.uri.toString(),'package:test/test.dart');
            expect(result.exists,isTrue);
            expect(result.content,content);
            expect(result.unit,isNotNull);
            expect(result.errors,hasLength(0));
            let f = op(Op.INDEX,result.unit.declarations,0) as any;
            expect(f.name.staticType.toString(),'() → int');
            expect(f.returnType.type.toString(),'int');
            await this.scheduler.waitForIdle();
            expect(this.allResults,new core.DartList.literal(result));
        } )());
    }

    test_getResult_constants_defaultParameterValue_localFunction() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let a = this._p('/test/bin/a.dart');
            let b = this._p('/test/bin/b.dart');
            this.provider.newFile(a,'const C = 42;');
            this.provider.newFile(b,'import \'a.dart\';\nmain() {\n  foo({int p: C}) {}\n  foo();\n}\n');
            this.driver.addFile(a);
            this.driver.addFile(b);
            await this.scheduler.waitForIdle();
            let result : any = await this.driver.getResult(b);
            expect(result.errors,isEmpty);
        } )());
    }

    test_getResult_doesNotExist() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let a = this._p('/test/lib/a.dart');
            let result : any = await this.driver.getResult(a);
            expect(result.path,a);
            expect(result.uri.toString(),'package:test/a.dart');
            expect(result.exists,isFalse);
            expect(result.content,'');
        } )());
    }

    test_getResult_errors() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let content : string = 'main() { int vv; }';
            this.addTestFile(content,{
                priority : true});
            let result : any = await this.driver.getResult(this.testFile);
            expect(result.path,this.testFile);
            expect(result.errors,hasLength(1));
            {
                let error : any = op(Op.INDEX,result.errors,0);
                expect(error.offset,13);
                expect(error.length,2);
                expect(error.errorCode,HintCode.UNUSED_LOCAL_VARIABLE);
                expect(error.message,"The value of the local variable 'vv' isn't used.");
                expect(error.correction,"Try removing the variable, or using it.");
            }
        } )());
    }

    test_getResult_fileContentOverlay_throughAnalysisContext() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let a = this._p('/test/bin/a.dart');
            let b = this._p('/test/bin/b.dart');
            this.provider.newFile(a,'import "b.dart";');
            this.provider.newFile(b,'var v = 1;');
            op(Op.INDEX_ASSIGN,this.contentOverlay,b,'var v = 2;');
            let result = await this.driver.getResult(a);
            let unitA : any = result.unit.element;
            let sourceB : any = op(Op.INDEX,unitA.library.imports,0).importedLibrary.source;
            expect(unitA.context.getContents(sourceB).data,'var v = 2;');
        } )());
    }

    test_getResult_functionTypeFormalParameter_withTypeParameter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {\n  int foo( bar<T extends B>() ) {}\n}\nclass B {}\n');
            let result : any = await this.driver.getResult(this.testFile);
            expect(result.path,this.testFile);
        } )());
    }

    test_getResult_inferTypes_finalField() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class C {\n  final f = 42;\n}\n',{
                priority : true});
            await this.scheduler.waitForIdle();
            let result : any = await this.driver.getResult(this.testFile);
            expect(this._getClassFieldType(result.unit,'C','f'),'int');
        } )());
    }

    test_getResult_inferTypes_instanceMethod() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('class A {\n  int m(double p) => 1;\n}\nclass B extends A {\n  m(double p) => 2;\n}\n',{
                priority : true});
            await this.scheduler.waitForIdle();
            let result : any = await this.driver.getResult(this.testFile);
            expect(this._getClassMethodReturnType(result.unit,'A','m'),'int');
            expect(this._getClassMethodReturnType(result.unit,'B','m'),'int');
        } )());
    }

    test_getResult_invalid_annotation_functionAsConstructor() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('fff() {}\n\n@fff()\nclass C {}\n',{
                priority : true});
            let result : any = await this.driver.getResult(this.testFile);
            let c : any = op(Op.INDEX,result.unit.declarations,1) as any;
            let a : any = op(Op.INDEX,c.metadata,0);
            expect(a.name.name,'fff');
            expect(a.name.staticElement,new bare.createInstance(any,null));
        } )());
    }

    test_getResult_invalidUri() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let content : string = 'import \'[invalid uri]\';\nimport \'[invalid uri]:foo.dart\';\nimport \'package:aaa/a1.dart\';\nimport \'[invalid uri]\';\nimport \'[invalid uri]:foo.dart\';\n\nexport \'[invalid uri]\';\nexport \'[invalid uri]:foo.dart\';\nexport \'package:aaa/a2.dart\';\nexport \'[invalid uri]\';\nexport \'[invalid uri]:foo.dart\';\n\npart \'[invalid uri]\';\npart \'a3.dart\';\npart \'[invalid uri]\';\n';
            this.addTestFile(content);
            let result : any = await this.driver.getResult(this.testFile);
            expect(result.path,this.testFile);
        } )());
    }

    test_getResult_invalidUri_exports_dart() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let content : string = 'export \'dart:async\';\nexport \'dart:noSuchLib\';\nexport \'dart:math\';\n';
            this.addTestFile(content,{
                priority : true});
            let result : any = await this.driver.getResult(this.testFile);
            expect(result.path,this.testFile);
            let imports : core.DartList<any> = resolutionMap.elementDeclaredByCompilationUnit(result.unit).library.exports;
            expect(imports.map((import : any) =>  {
                return ((_512_)=>(!!_512_)?_512_.toString():null)(((t)=>(!!t)?t.uri:null)(((t)=>(!!t)?t.source:null)(import.exportedLibrary)));
            }),new core.DartList.literal('dart:async',null,'dart:math'));
        } )());
    }

    test_getResult_invalidUri_imports_dart() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let content : string = 'import \'dart:async\';\nimport \'dart:noSuchLib\';\nimport \'dart:math\';\n';
            this.addTestFile(content,{
                priority : true});
            let result : any = await this.driver.getResult(this.testFile);
            expect(result.path,this.testFile);
            let imports : core.DartList<any> = resolutionMap.elementDeclaredByCompilationUnit(result.unit).library.imports;
            expect(imports.map((import : any) =>  {
                return ((_513_)=>(!!_513_)?_513_.toString():null)(((t)=>(!!t)?t.uri:null)(((t)=>(!!t)?t.source:null)(import.importedLibrary)));
            }),new core.DartList.literal('dart:async',null,'dart:math','dart:core'));
        } )());
    }

    test_getResult_invalidUri_metadata() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let content : string = '@foo\nimport \'\';\n\n@foo\nexport \'\';\n\n@foo\npart \'\';\n';
            this.addTestFile(content);
            await this.driver.getResult(this.testFile);
        } )());
    }

    test_getResult_mix_fileAndPackageUris() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let a = this._p('/test/bin/a.dart');
            let b = this._p('/test/bin/b.dart');
            let c = this._p('/test/lib/c.dart');
            let d = this._p('/test/test/d.dart');
            this.provider.newFile(a,'import \'package:test/c.dart\';\nint x = y;\n');
            this.provider.newFile(b,'import \'../lib/c.dart\';\nint x = y;\n');
            this.provider.newFile(c,'import \'../test/d.dart\';\nvar y = z;\n');
            this.provider.newFile(d,'String z = "string";\n');
            this.driver.addFile(a);
            this.driver.addFile(b);
            this.driver.addFile(c);
            this.driver.addFile(d);
            {
                let result : any = await this.driver.getResult(a);
                expect(result.errors,isEmpty);
            }
            {
                let result : any = await this.driver.getResult(b);
                let errors : core.DartList<any> = result.errors;
                expect(errors,hasLength(1));
                expect(errors[0].errorCode,StaticTypeWarningCode.INVALID_ASSIGNMENT);
            }
        } )());
    }

    test_getResult_nameConflict_local() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let content : string = 'foo([p = V]) {}\nV();\nvar V;\n';
            this.addTestFile(content);
            await this.driver.getResult(this.testFile);
        } )());
    }

    test_getResult_nameConflict_local_typeInference() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let content : string = 'typedef F();\nvar F;\nF _ff() => null;\nvar f = _ff(); // the inference must fail\nmain() {\n  f();\n}\n';
            this.addTestFile(content);
            await this.driver.getResult(this.testFile);
        } )());
    }

    test_getResult_notDartFile() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let path = this._p('/test/lib/test.txt');
            this.provider.newFile(path,'class A {}');
            let result : any = await this.driver.getResult(path);
            expect(result,isNotNull);
            expect(result.unit.element.types.map((e : any) =>  {
                return e.name;
            }),new core.DartList.literal('A'));
        } )());
    }

    test_getResult_recursiveFlatten() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let content : string = 'import \'dart:async\';\nclass C<T> implements Future<C<T>> {}\n';
            this.addTestFile(content);
            await this.driver.getResult(this.testFile);
        } )());
    }

    test_getResult_sameFile_twoUris() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let a = this._p('/test/lib/a.dart');
            let b = this._p('/test/lib/b.dart');
            let c = this._p('/test/test/c.dart');
            this.provider.newFile(a,'class A<T> {}');
            this.provider.newFile(b,'import \'a.dart\';\nvar VB = new A<int>();\n');
            this.provider.newFile(c,'import \'../lib/a.dart\';\nvar VC = new A<double>();\n');
            this.driver.addFile(a);
            this.driver.addFile(b);
            await this.scheduler.waitForIdle();
            {
                let result : any = await this.driver.getResult(b);
                expect(this._getImportSource(result.unit,0).uri.toString(),'package:test/a.dart');
                expect(this._getTopLevelVarType(result.unit,'VB'),'A<int>');
            }
            {
                let result : any = await this.driver.getResult(c);
                expect(this._getImportSource(result.unit,0).uri,this.provider.pathContext.toUri(this._p('/test/lib/a.dart')));
                expect(this._getTopLevelVarType(result.unit,'VC'),'A<double>');
            }
        } )());
    }

    test_getResult_selfConsistent() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let a = this._p('/test/lib/a.dart');
            let b = this._p('/test/lib/b.dart');
            this.provider.newFile(a,'import \'b.dart\';\nvar A1 = 1;\nvar A2 = B1;\n');
            this.provider.newFile(b,'import \'a.dart\';\nvar B1 = A1;\n');
            this.driver.addFile(a);
            this.driver.addFile(b);
            await this.scheduler.waitForIdle();
            {
                let result : any = await this.driver.getResult(a);
                expect(this._getTopLevelVarType(result.unit,'A1'),'int');
                expect(this._getTopLevelVarType(result.unit,'A2'),'int');
            }
            this.provider.updateFile(a,'import \'b.dart\';\nvar A1 = 1.2;\nvar A2 = B1;\n');
            this.driver.changeFile(a);
            {
                let result : any = await this.driver.getResult(a);
                expect(this._getTopLevelVarType(result.unit,'A1'),'double');
                expect(this._getTopLevelVarType(result.unit,'A2'),'double');
            }
        } )());
    }

    test_getResult_thenRemove() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('main() {}',{
                priority : true});
            let resultFuture : async.Future<any> = this.driver.getResult(this.testFile);
            this.driver.removeFile(this.testFile);
            let result : any = await resultFuture;
            expect(result,isNotNull);
            expect(result.path,this.testFile);
            expect(result.unit,isNotNull);
        } )());
    }

    test_getResult_twoPendingFutures() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let content : string = 'main() {}';
            this.addTestFile(content,{
                priority : true});
            let future1 : async.Future<any> = this.driver.getResult(this.testFile);
            let future2 : async.Future<any> = this.driver.getResult(this.testFile);
            let result1 : any = await future1;
            let result2 : any = await future2;
            expect(result2,same(result1));
            expect(result1.path,this.testFile);
            expect(result1.unit,isNotNull);
        } )());
    }

    test_getSourceKind_library() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let path = this._p('/test/lib/test.dart');
            this.provider.newFile(path,'class A {}');
            expect(await this.driver.getSourceKind(path),SourceKind.LIBRARY);
        } )());
    }

    test_getSourceKind_notDartFile() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let path = this._p('/test/lib/test.txt');
            this.provider.newFile(path,'class A {}');
            expect(await this.driver.getSourceKind(path),isNull);
        } )());
    }

    test_getSourceKind_part() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let path = this._p('/test/lib/test.dart');
            this.provider.newFile(path,'part of lib; class A {}');
            expect(await this.driver.getSourceKind(path),SourceKind.PART);
        } )());
    }

    test_getTopLevelNameDeclarations() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let a = this._p('/test/lib/a.dart');
            let b = this._p('/test/lib/b.dart');
            let c = this._p('/test/lib/c.dart');
            let d = this._p('/test/lib/d.dart');
            this.provider.newFile(a,'class A {}');
            this.provider.newFile(b,'export "a.dart"; class B {}');
            this.provider.newFile(c,'import "d.dart"; class C {}');
            this.provider.newFile(d,'class D {}');
            this.driver.addFile(a);
            this.driver.addFile(b);
            this.driver.addFile(c);
            this._assertTopLevelDeclarations(await this.driver.getTopLevelNameDeclarations('A'),new core.DartList.literal(a,b),new core.DartList.literal(false,true));
            this._assertTopLevelDeclarations(await this.driver.getTopLevelNameDeclarations('B'),new core.DartList.literal(b),new core.DartList.literal(false));
            this._assertTopLevelDeclarations(await this.driver.getTopLevelNameDeclarations('C'),new core.DartList.literal(c),new core.DartList.literal(false));
            this._assertTopLevelDeclarations(await this.driver.getTopLevelNameDeclarations('D'),new core.DartList.literal(d),new core.DartList.literal(false));
            this._assertTopLevelDeclarations(await this.driver.getTopLevelNameDeclarations('X'),new core.DartList.literal(),new core.DartList.literal());
        } )());
    }

    test_getTopLevelNameDeclarations_parts() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let a = this._p('/test/lib/a.dart');
            let b = this._p('/test/lib/b.dart');
            let c = this._p('/test/lib/c.dart');
            this.provider.newFile(a,'library lib;\npart \'b.dart\';\npart \'c.dart\';\nclass A {}\n');
            this.provider.newFile(b,'part of lib; class B {}');
            this.provider.newFile(c,'part of lib; class C {}');
            this.driver.addFile(a);
            this.driver.addFile(b);
            this.driver.addFile(c);
            this._assertTopLevelDeclarations(await this.driver.getTopLevelNameDeclarations('A'),new core.DartList.literal(a),new core.DartList.literal(false));
            this._assertTopLevelDeclarations(await this.driver.getTopLevelNameDeclarations('B'),new core.DartList.literal(a),new core.DartList.literal(false));
            this._assertTopLevelDeclarations(await this.driver.getTopLevelNameDeclarations('C'),new core.DartList.literal(a),new core.DartList.literal(false));
            this._assertTopLevelDeclarations(await this.driver.getTopLevelNameDeclarations('X'),new core.DartList.literal(),new core.DartList.literal());
        } )());
    }

    test_getUnitElement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let content : string = 'foo(int p) {}\nmain() {\n  foo(42);\n}\n';
            this.addTestFile(content);
            let unitResult : any = await this.driver.getUnitElement(this.testFile);
            expect(unitResult,isNotNull);
            let unitElement : any = unitResult.element;
            expect(unitElement.source.fullName,this.testFile);
            expect(unitElement.functions.map((c : any) =>  {
                return c.name;
            }),unorderedEquals(new core.DartList.literal('foo','main')));
        } )());
    }

    test_getUnitElement_notDart() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let path = this._p('/test.txt');
            this.provider.newFile(path,'class A {}');
            let unitResult : any = await this.driver.getUnitElement(path);
            expect(unitResult,isNotNull);
            expect(unitResult.element.types.map((e : any) =>  {
                return e.name;
            }),new core.DartList.literal('A'));
        } )());
    }

    test_getUnitElementSignature() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let a = this._p('/test/lib/a.dart');
            this.provider.newFile(a,'foo() {}');
            let signature : string = await this.driver.getUnitElementSignature(a);
            expect(signature,isNotNull);
            let unitResult : any = await this.driver.getUnitElement(a);
            expect(unitResult.path,a);
            expect(unitResult.signature,signature);
            this.provider.updateFile(a,'bar() {}');
            this.driver.changeFile(a);
            let signature2 : string = await this.driver.getUnitElementSignature(a);
            expect(signature2,isNotNull);
            expect(signature2,isNot(signature));
        } )());
    }

    test_hasFilesToAnalyze() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            expect(this.driver.hasFilesToAnalyze,isFalse);
            this.addTestFile('main() {}',{
                priority : false});
            expect(this.driver.hasFilesToAnalyze,isTrue);
            await this.scheduler.waitForIdle();
            expect(this.driver.hasFilesToAnalyze,isFalse);
            let future : async.Future<any> = this.driver.getResult(this.testFile);
            expect(this.driver.hasFilesToAnalyze,isTrue);
            await future;
            expect(this.driver.hasFilesToAnalyze,isFalse);
            this.driver.changeFile(this._p('/not/added.dart'));
            expect(this.driver.hasFilesToAnalyze,isTrue);
            await this.scheduler.waitForIdle();
            expect(this.driver.hasFilesToAnalyze,isFalse);
            this.driver.getFilesReferencingName('X');
            expect(this.driver.hasFilesToAnalyze,isFalse);
        } )());
    }

    test_hermetic_modifyLibraryFile_resolvePart() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let a = this._p('/test/lib/a.dart');
            let b = this._p('/test/lib/b.dart');
            this.provider.newFile(a,'library a;\npart \'b.dart\';\nclass C {\n  int foo;\n}\n');
            this.provider.newFile(b,'part of a;\nvar c = new C();\n');
            this.driver.addFile(a);
            this.driver.addFile(b);
            await this.driver.getResult(b);
            this.provider.newFile(a,'library a;\npart \'b.dart\';\nclass C {\n  int bar;\n}\n');
            let result = await this.driver.getResult(b);
            let c = this._getTopLevelVar(result.unit,'c');
            let typeC = c.element.type as any;
            expect(typeC.element.getField('foo'),isNotNull);
            expect(typeC.element.getField('bar'),isNull);
        } )());
    }

    test_hermetic_overlayOnly_part() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let a = this._p('/test/lib/a.dart');
            let b = this._p('/test/lib/b.dart');
            op(Op.INDEX_ASSIGN,this.contentOverlay,a,'library a;\npart \'b.dart\';\nclass A {}\nvar b = new B();\n');
            op(Op.INDEX_ASSIGN,this.contentOverlay,b,'part of a; class B {}');
            this.driver.addFile(a);
            this.driver.addFile(b);
            let result : any = await this.driver.getResult(a);
            expect(result.errors,isEmpty);
            expect(this._getTopLevelVarType(result.unit,'b'),'B');
        } )());
    }

    test_knownFiles() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let a = this._p('/test/lib/a.dart');
            let b = this._p('/test/lib/b.dart');
            let c = this._p('/test/lib/c.dart');
            this.provider.newFile(a,'import \'b.dart\';\n');
            this.provider.newFile(b,'');
            this.provider.newFile(c,'');
            this.driver.addFile(a);
            this.driver.addFile(c);
            await this.scheduler.waitForIdle();
            expect(this.driver.knownFiles,contains(a));
            expect(this.driver.knownFiles,contains(b));
            expect(this.driver.knownFiles,contains(c));
            this.driver.removeFile(a);
            await this.scheduler.waitForIdle();
            expect(this.driver.knownFiles,isNot(contains(a)));
            expect(this.driver.knownFiles,isNot(contains(b)));
            expect(this.driver.knownFiles,contains(c));
        } )());
    }

    test_knownFiles_beforeAnalysis() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let a = this._p('/test/lib/a.dart');
            let b = this._p('/test/lib/b.dart');
            this.provider.newFile(a,'');
            this.driver.addFile(a);
            expect(this.driver.knownFiles,isEmpty);
            this.driver.removeFile(a);
            expect(this.driver.knownFiles,isNot(contains(a)));
            expect(this.driver.knownFiles,isNot(contains(b)));
        } )());
    }

    test_parseFile_notDart() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let p = this._p('/test/bin/a.txt');
            this.provider.newFile(p,'class A {}');
            let parseResult : any = await this.driver.parseFile(p);
            expect(parseResult,isNotNull);
            expect(this.driver.knownFiles,contains(p));
        } )());
    }

    test_parseFile_shouldRefresh() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let p = this._p('/test/bin/a.dart');
            this.provider.newFile(p,'class A {}');
            this.driver.addFile(p);
            await this.driver.getResult(p);
            this.provider.newFile(p,'class A2 {}');
            let parseResult : any = await this.driver.parseFile(p);
            let clazz = op(Op.INDEX,parseResult.unit.declarations,0) as any;
            expect(clazz.name.name,'A2');
        } )());
    }

    test_part_getErrors_afterLibrary() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let a = this._p('/test/lib/a.dart');
            let b = this._p('/test/lib/b.dart');
            let c = this._p('/test/lib/c.dart');
            this.provider.newFile(a,'library a;\nimport \'b.dart\';\npart \'c.dart\';\nclass A {}\nvar c = new C();\n');
            this.provider.newFile(b,'class B {}');
            this.provider.newFile(c,'part of a;\nclass C {}\nvar a = new A();\nvar b = new B();\n');
            this.driver.addFile(a);
            this.driver.addFile(b);
            this.driver.addFile(c);
            {
                let result : any = await this.driver.getErrors(a);
                expect(result.errors,isEmpty);
            }
            {
                let result : any = await this.driver.getErrors(c);
                expect(result.errors,isEmpty);
            }
        } )());
    }

    test_part_getErrors_beforeLibrary() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let a = this._p('/test/lib/a.dart');
            let b = this._p('/test/lib/b.dart');
            let c = this._p('/test/lib/c.dart');
            this.provider.newFile(a,'library a;\nimport \'b.dart\';\npart \'c.dart\';\nclass A {}\nvar c = new C();\n');
            this.provider.newFile(b,'class B {}');
            this.provider.newFile(c,'part of a;\nclass C {}\nvar a = new A();\nvar b = new B();\n');
            this.driver.addFile(a);
            this.driver.addFile(b);
            this.driver.addFile(c);
            {
                let result : any = await this.driver.getErrors(c);
                expect(result.errors,isEmpty);
            }
        } )());
    }

    test_part_getResult_afterLibrary() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let a = this._p('/test/lib/a.dart');
            let b = this._p('/test/lib/b.dart');
            let c = this._p('/test/lib/c.dart');
            this.provider.newFile(a,'library a;\nimport \'b.dart\';\npart \'c.dart\';\nclass A {}\nvar c = new C();\n');
            this.provider.newFile(b,'class B {}');
            this.provider.newFile(c,'part of a;\nclass C {}\nvar a = new A();\nvar b = new B();\n');
            this.driver.addFile(a);
            this.driver.addFile(b);
            this.driver.addFile(c);
            {
                let result : any = await this.driver.getResult(a);
                expect(result.errors,isEmpty);
                expect(this._getTopLevelVarType(result.unit,'c'),'C');
            }
            {
                let result : any = await this.driver.getResult(c);
                expect(result.errors,isEmpty);
                expect(this._getTopLevelVarType(result.unit,'a'),'A');
                expect(this._getTopLevelVarType(result.unit,'b'),'B');
            }
        } )());
    }

    test_part_getResult_beforeLibrary() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let a = this._p('/test/lib/a.dart');
            let b = this._p('/test/lib/b.dart');
            let c = this._p('/test/lib/c.dart');
            this.provider.newFile(a,'library a;\nimport \'b.dart\';\npart \'c.dart\';\nclass A {}\nvar c = new C();\n');
            this.provider.newFile(b,'class B {}');
            this.provider.newFile(c,'part of a;\nclass C {}\nvar a = new A();\nvar b = new B();\n');
            this.driver.addFile(a);
            this.driver.addFile(b);
            this.driver.addFile(c);
            let result : any = await this.driver.getResult(c);
            expect(result.errors,isEmpty);
            expect(this._getTopLevelVarType(result.unit,'a'),'A');
            expect(this._getTopLevelVarType(result.unit,'b'),'B');
        } )());
    }

    test_part_getResult_noLibrary() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let c = this._p('/test/lib/c.dart');
            this.provider.newFile(c,'part of a;\nclass C {}\nvar a = new A();\nvar b = new B();\n');
            this.driver.addFile(c);
            let result : any = await this.driver.getResult(c);
            expect(result.errors,isNotEmpty);
            expect(result.unit,isNotNull);
        } )());
    }

    test_part_results_afterLibrary() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let a = this._p('/test/lib/a.dart');
            let b = this._p('/test/lib/b.dart');
            let c = this._p('/test/lib/c.dart');
            this.provider.newFile(a,'library a;\nimport \'b.dart\';\npart \'c.dart\';\nclass A {}\nvar c = new C();\n');
            this.provider.newFile(b,'class B {}');
            this.provider.newFile(c,'part of a;\nclass C {}\nvar a = new A();\nvar b = new B();\n');
            this.driver.addFile(a);
            this.driver.addFile(b);
            this.driver.addFile(c);
            {
                await this.scheduler.waitForIdle();
                let result : any = this.allResults.lastWhere((r : any) =>  {
                    return op(Op.EQUALS,r.path,c);
                });
                expect(result.errors,isEmpty);
                expect(result.unit,isNull);
            }
            {
                this.provider.updateFile(a,'// does not use c.dart anymore');
                this.driver.changeFile(a);
                await this.scheduler.waitForIdle();
                let result : any = this.allResults.lastWhere((r : any) =>  {
                    return op(Op.EQUALS,r.path,c);
                });
                expect(result.errors,isNotEmpty);
                expect(result.unit,isNull);
            }
        } )());
    }

    test_part_results_beforeLibrary() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let a = this._p('/test/lib/a.dart');
            let b = this._p('/test/lib/b.dart');
            let c = this._p('/test/lib/c.dart');
            this.provider.newFile(a,'library a;\nimport \'b.dart\';\npart \'c.dart\';\nclass A {}\nvar c = new C();\n');
            this.provider.newFile(b,'class B {}');
            this.provider.newFile(c,'part of a;\nclass C {}\nvar a = new A();\nvar b = new B();\n');
            this.driver.addFile(c);
            this.driver.addFile(a);
            this.driver.addFile(b);
            await this.scheduler.waitForIdle();
            let result : any = this.allResults.lastWhere((r : any) =>  {
                return op(Op.EQUALS,r.path,c);
            });
            expect(result.errors,isEmpty);
            expect(result.unit,isNull);
        } )());
    }

    test_part_results_noLibrary() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let c = this._p('/test/lib/c.dart');
            this.provider.newFile(c,'part of a;\nclass C {}\nvar a = new A();\nvar b = new B();\n');
            this.driver.addFile(c);
            await this.scheduler.waitForIdle();
            let result : any = this.allResults.lastWhere((r : any) =>  {
                return op(Op.EQUALS,r.path,c);
            });
            expect(result.errors,isNotEmpty);
            expect(result.unit,isNull);
        } )());
    }

    test_part_results_priority_beforeLibrary() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let a = this._p('/test/lib/a.dart');
            let b = this._p('/test/lib/b.dart');
            let c = this._p('/test/lib/c.dart');
            this.provider.newFile(a,'library a;\nimport \'b.dart\';\npart \'c.dart\';\nclass A {}\nvar c = new C();\n');
            this.provider.newFile(b,'class B {}');
            this.provider.newFile(c,'part of a;\nclass C {}\nvar a = new A();\nvar b = new B();\n');
            this.driver.priorityFiles = new core.DartList.literal(c);
            this.driver.addFile(c);
            this.driver.addFile(a);
            this.driver.addFile(b);
            await this.scheduler.waitForIdle();
            let result : any = this.allResults.lastWhere((r : any) =>  {
                return op(Op.EQUALS,r.path,c);
            });
            expect(result.errors,isEmpty);
            expect(result.unit,isNotNull);
        } )());
    }

    test_removeFile_changeFile_implicitlyAnalyzed() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let a = this._p('/test/lib/a.dart');
            let b = this._p('/test/lib/b.dart');
            this.provider.newFile(a,'import \'b.dart\';\nvar A = B;\n');
            this.provider.newFile(b,'var B = 1;');
            this.driver.priorityFiles = new core.DartList.literal(a,b);
            this.driver.addFile(a);
            this.driver.addFile(b);
            await this.scheduler.waitForIdle();
            expect(this.allResults,hasLength(2));
            {
                let ar : any = this.allResults.firstWhere((r : any) =>  {
                    return op(Op.EQUALS,r.path,a);
                });
                expect(this._getTopLevelVarType(ar.unit,'A'),'int');
            }
            {
                let br : any = this.allResults.firstWhere((r : any) =>  {
                    return op(Op.EQUALS,r.path,b);
                });
                expect(this._getTopLevelVarType(br.unit,'B'),'int');
            }
            this.allResults.clear();
            this.provider.updateFile(b,'var B = 1.2;');
            this.driver.removeFile(b);
            this.driver.changeFile(b);
            await this.scheduler.waitForIdle();
            expect(this.allResults,hasLength(1));
            {
                let ar : any = this.allResults.firstWhere((r : any) =>  {
                    return op(Op.EQUALS,r.path,a);
                });
                expect(this._getTopLevelVarType(ar.unit,'A'),'double');
            }
        } )());
    }

    test_removeFile_changeFile_notAnalyzed() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('main() {}');
            await this.scheduler.waitForIdle();
            expect(this.allResults,hasLength(1));
            expect(this.allResults[0].path,this.testFile);
            this.allResults.clear();
            this.driver.removeFile(this.testFile);
            this.driver.changeFile(this.testFile);
            await this.scheduler.waitForIdle();
            expect(this.allResults,isEmpty);
        } )());
    }

    test_removeFile_invalidate_importers() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let a = this._p('/test/lib/a.dart');
            let b = this._p('/test/lib/b.dart');
            this.provider.newFile(a,'class A {}');
            this.provider.newFile(b,"import 'a.dart';  var a = new A();");
            this.driver.addFile(a);
            this.driver.addFile(b);
            await this.scheduler.waitForIdle();
            expect(this.allResults.singleWhere((r : any) =>  {
                return op(Op.EQUALS,r.path,b);
            }).errors,isEmpty);
            this.allResults.clear();
            this.provider.deleteFile(a);
            this.driver.removeFile(a);
            await this.scheduler.waitForIdle();
            expect(this.allResults.singleWhere((r : any) =>  {
                return op(Op.EQUALS,r.path,b);
            }).errors,hasLength(2));
            this.allResults.clear();
        } )());
    }

    test_results_order() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let a = this._p('/test/lib/a.dart');
            let b = this._p('/test/lib/b.dart');
            let c = this._p('/test/lib/c.dart');
            let d = this._p('/test/lib/d.dart');
            let e = this._p('/test/lib/e.dart');
            let f = this._p('/test/lib/f.dart');
            this.provider.newFile(a,'import \'d.dart\';\n');
            this.provider.newFile(b,'');
            this.provider.newFile(c,'import \'d.dart\';\n');
            this.provider.newFile(d,'import \'b.dart\';\n');
            this.provider.newFile(e,'export \'b.dart\';\n');
            this.provider.newFile(f,'import \'e.dart\';\nclass F extends X {}\n');
            this.driver.addFile(a);
            this.driver.addFile(b);
            this.driver.addFile(c);
            this.driver.addFile(d);
            this.driver.addFile(e);
            this.driver.addFile(f);
            await this.scheduler.waitForIdle();
            expect(this.driver.fsState.getFileForPath(f).hasErrorOrWarning,isTrue);
            this.allResults.clear();
            this.provider.updateFile(b,'class A {}');
            this.driver.changeFile(b);
            await this.scheduler.waitForIdle();
            let analyzedPaths : core.DartList<string> = this.allResults.map((r : any) =>  {
                return r.path;
            }).toList();
            expect(analyzedPaths[0],b);
            expect(analyzedPaths[1],d);
            expect(analyzedPaths[2],f);
        } )());
    }

    test_results_order_allChangedFirst_thenImports() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let a = this._p('/test/lib/a.dart');
            let b = this._p('/test/lib/b.dart');
            let c = this._p('/test/lib/c.dart');
            let d = this._p('/test/lib/d.dart');
            let e = this._p('/test/lib/e.dart');
            this.provider.newFile(a,'class A {}');
            this.provider.newFile(b,'class B {}');
            this.provider.newFile(c,'');
            this.provider.newFile(d,"import 'a.dart';");
            this.provider.newFile(e,"import 'b.dart';");
            this.driver.addFile(a);
            this.driver.addFile(b);
            this.driver.addFile(c);
            this.driver.addFile(d);
            this.driver.addFile(e);
            await this.scheduler.waitForIdle();
            this.allResults.clear();
            this.provider.updateFile(a,'class A2 {}');
            this.provider.updateFile(b,'class B2 {}');
            this.driver.changeFile(b);
            this.driver.changeFile(a);
            await this.scheduler.waitForIdle();
            let analyzedPaths : core.DartList<string> = this.allResults.map((r : any) =>  {
                return r.path;
            }).toList();
            expect(analyzedPaths[0],a);
            expect(analyzedPaths[1],b);
            expect(analyzedPaths[2],d);
            expect(analyzedPaths[3],e);
        } )());
    }

    test_results_priority() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let content : string = 'int f() => 42;';
            this.addTestFile(content,{
                priority : true});
            await this.scheduler.waitForIdle();
            expect(this.allResults,hasLength(1));
            let result : any = this.allResults.single;
            expect(result.path,this.testFile);
            expect(result.uri.toString(),'package:test/test.dart');
            expect(result.content,content);
            expect(result.unit,isNotNull);
            expect(result.errors,hasLength(0));
            let f = op(Op.INDEX,result.unit.declarations,0) as any;
            expect(f.name.staticType.toString(),'() → int');
            expect(f.returnType.type.toString(),'int');
        } )());
    }

    test_results_priorityFirst() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let a = this._p('/test/lib/a.dart');
            let b = this._p('/test/lib/b.dart');
            let c = this._p('/test/lib/c.dart');
            this.provider.newFile(a,'class A {}');
            this.provider.newFile(b,'class B {}');
            this.provider.newFile(c,'class C {}');
            this.driver.addFile(a);
            this.driver.addFile(b);
            this.driver.addFile(c);
            this.driver.priorityFiles = new core.DartList.literal(b);
            await this.scheduler.waitForIdle();
            expect(this.allResults,hasLength(3));
            let result : any = this.allResults[0];
            expect(result.path,b);
            expect(result.unit,isNotNull);
            expect(result.errors,hasLength(0));
        } )());
    }

    test_results_regular() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let content : string = 'int f() => 42;';
            this.addTestFile(content);
            await this.scheduler.waitForIdle();
            expect(this.allResults,hasLength(1));
            let result : any = this.allResults.single;
            expect(result.path,this.testFile);
            expect(result.uri.toString(),'package:test/test.dart');
            expect(result.content,isNull);
            expect(result.unit,isNull);
            expect(result.errors,hasLength(0));
        } )());
    }

    test_results_skipNotAffected() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let a = this._p('/test/lib/a.dart');
            let b = this._p('/test/lib/b.dart');
            this.provider.newFile(a,'class A {}');
            this.provider.newFile(b,'class B {}');
            this.driver.addFile(a);
            this.driver.addFile(b);
            await this.scheduler.waitForIdle();
            expect(this.allResults,hasLength(2));
            this.allResults.clear();
            this.provider.updateFile(a,'class A2 {}');
            this.driver.changeFile(a);
            await this.scheduler.waitForIdle();
            expect(this.allResults,hasLength(1));
        } )());
    }

    test_results_status() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestFile('int f() => 42;');
            await this.scheduler.waitForIdle();
            expect(this.allStatuses,hasLength(2));
            expect(this.allStatuses[0].isAnalyzing,isTrue);
            expect(this.allStatuses[0].isIdle,isFalse);
            expect(this.allStatuses[1].isAnalyzing,isFalse);
            expect(this.allStatuses[1].isIdle,isTrue);
        } )());
    }

    test_waitForIdle() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.scheduler.waitForIdle();
            this.addTestFile('int f() => 42;');
            expect(this.allResults,isEmpty);
            await this.scheduler.waitForIdle();
            expect(this.allResults,hasLength(1));
            await this.scheduler.waitForIdle();
            expect(this.allResults,hasLength(1));
        } )());
    }

    _assertTopLevelDeclarations(declarations : core.DartList<any>,expectedFiles : core.DartList<string>,expectedIsExported : core.DartList<boolean>) : void {
        expect(expectedFiles,hasLength(expectedIsExported.length));
        for(let i : number = 0; i < expectedFiles.length; i++){
            expect(declarations,contains(predicate((declaration : any) =>  {
                return op(Op.EQUALS,declaration.source.fullName,expectedFiles[i]) && op(Op.EQUALS,declaration.isExported,expectedIsExported[i]);
            })));
        }
    }
    _expectCircularityError(evaluationResult : any) : void {
        expect(evaluationResult,isNotNull);
        expect(evaluationResult.value,isNull);
        expect(evaluationResult.errors,hasLength(1));
        expect(op(Op.INDEX,evaluationResult.errors,0).errorCode,CompileTimeErrorCode.RECURSIVE_COMPILE_TIME_CONSTANT);
    }
    _getClass(unit : any,name : string) : any {
        for(let declaration of unit.declarations) {
            if (is(declaration, any)) {
                if (op(Op.EQUALS,declaration.name.name,name)) {
                    return declaration;
                }
            }
        }
        fail(`Cannot find the class ${name} in\n${unit}`);
        return null;
    }
    _getClassField(unit : any,className : string,fieldName : string) : any {
        let classDeclaration : any = this._getClass(unit,className);
        for(let declaration of classDeclaration.members) {
            if (is(declaration, any)) {
                for(let field of declaration.fields.variables) {
                    if (op(Op.EQUALS,field.name.name,fieldName)) {
                        return field;
                    }
                }
            }
        }
        fail(`Cannot find the field ${fieldName} in the class ${className} in\n${unit}`);
        return null;
    }
    _getClassFieldType(unit : any,className : string,fieldName : string) : string {
        return resolutionMap.elementDeclaredByVariableDeclaration(this._getClassField(unit,className,fieldName)).type.toString();
    }
    _getClassMethod(unit : any,className : string,methodName : string) : any {
        let classDeclaration : any = this._getClass(unit,className);
        for(let declaration of classDeclaration.members) {
            if (is(declaration, any) && op(Op.EQUALS,declaration.name.name,methodName)) {
                return declaration;
            }
        }
        fail(`Cannot find the method ${methodName} in the class ${className} in\n` + `${unit}`);
        return null;
    }
    _getClassMethodReturnType(unit : any,className : string,fieldName : string) : string {
        return resolutionMap.elementDeclaredByMethodDeclaration(this._getClassMethod(unit,className,fieldName)).type.returnType.toString();
    }
    _getImportElement(unit : any,directiveIndex : number) : any {
        let import = op(Op.INDEX,unit.directives,directiveIndex) as any;
        return import.element as any;
    }
    _getImportSource(unit : any,directiveIndex : number) : any {
        return this._getImportElement(unit,directiveIndex).importedLibrary.source;
    }
    _getTopLevelVar(unit : any,name : string) : any {
        for(let declaration of unit.declarations) {
            if (is(declaration, any)) {
                for(let variable of declaration.variables.variables) {
                    if (op(Op.EQUALS,variable.name.name,name)) {
                        return variable;
                    }
                }
            }
        }
        fail(`Cannot find the top-level variable ${name} in\n${unit}`);
        return null;
    }
    _getTopLevelVarType(unit : any,name : string) : string {
        let variable : any = this._getTopLevelVar(unit,name);
        return resolutionMap.elementDeclaredByVariableDeclaration(variable).type.toString();
    }
    _p(path : string) : string {
        return this.provider.convertPath(path);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    AnalysisDriverTest() {
    }
}

export namespace CacheAllAnalysisDriverTest {
    export type Constructors = lib4.BaseAnalysisDriverTest.Constructors | 'CacheAllAnalysisDriverTest';
    export type Interface = Omit<CacheAllAnalysisDriverTest, Constructors>;
}
@DartClass
export class CacheAllAnalysisDriverTest extends lib4.BaseAnalysisDriverTest {
    get disableChangesAndCacheAllResults() : boolean {
        return true;
    }
    test_addFile() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let a = this._p('/test/lib/a.dart');
            let b = this._p('/test/lib/b.dart');
            this.driver.addFile(a);
            this.driver.addFile(b);
        } )());
    }

    test_changeFile() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let path = this._p('/test.dart');
            expect(() =>  {
                this.driver.changeFile(path);
            },throwsStateError);
        } )());
    }

    test_getResult_libraryUnits() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let lib = this._p('/lib.dart');
            let part1 = this._p('/part1.dart');
            let part2 = this._p('/part2.dart');
            this.provider.newFile(lib,'library test;\npart \'part1.dart\';\npart \'part2.dart\';\n');
            this.provider.newFile(part1,'part of test; class A {}');
            this.provider.newFile(part2,'part of test; class B {}');
            this.driver.addFile(lib);
            this.driver.addFile(part1);
            this.driver.addFile(part2);
            expect(this.driver.test.numOfAnalyzedLibraries,0);
            let libResult : any = await this.driver.getResult(lib);
            let partResult1 : any = await this.driver.getResult(part1);
            let partResult2 : any = await this.driver.getResult(part2);
            expect(this.driver.test.numOfAnalyzedLibraries,1);
            expect(libResult.path,lib);
            expect(partResult1.path,part1);
            expect(partResult2.path,part2);
            expect(libResult.unit,isNotNull);
            expect(partResult1.unit,isNotNull);
            expect(partResult2.unit,isNotNull);
            let libLibrary = libResult.unit.element.library;
            let partLibrary1 = partResult1.unit.element.library;
            let partLibrary2 = partResult2.unit.element.library;
            expect(partLibrary1,same(libLibrary));
            expect(partLibrary2,same(libLibrary));
        } )());
    }

    test_getResult_singleFile() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let path = this._p('/test.dart');
            this.provider.newFile(path,'main() {}');
            this.driver.addFile(path);
            let result1 : any = await this.driver.getResult(path);
            expect(this.driver.test.numOfAnalyzedLibraries,1);
            let unit1 = result1.unit;
            let unitElement1 = unit1.element;
            expect(result1.path,path);
            expect(unit1,isNotNull);
            expect(unitElement1,isNotNull);
            let result2 : any = await this.driver.getResult(path);
            expect(this.driver.test.numOfAnalyzedLibraries,1);
            expect(result2.path,path);
            expect(result2.unit,same(unit1));
            expect(result2.unit.element,same(unitElement1));
        } )());
    }

    test_removeFile() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let path = this._p('/test.dart');
            expect(() =>  {
                this.driver.removeFile(path);
            },throwsStateError);
        } )());
    }

    _p(path : string) : string {
        return this.provider.convertPath(path);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    CacheAllAnalysisDriverTest() {
    }
}

export namespace _SourceMock {
    export type Constructors = '_SourceMock';
    export type Interface = Omit<_SourceMock, Constructors>;
}
@DartClass
@Implements(any)
export class _SourceMock extends any implements any.Interface {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _SourceMock() {
    }
}

export class properties {
}
