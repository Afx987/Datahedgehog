/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/src/context/context_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./abstract_context";
import * as lib4 from "./../../generated/engine_test";
import * as lib5 from "./../../generated/test_support";
import * as lib6 from "@dart2ts/dart/uri";
import * as collection from "@dart2ts/dart/core";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(AnalysisContextImplTest);
    });
};
export namespace AnalysisContextImplTest {
    export type Constructors = lib3.AbstractContextTest.Constructors | 'AnalysisContextImplTest';
    export type Interface = Omit<AnalysisContextImplTest, Constructors>;
}
@DartClass
export class AnalysisContextImplTest extends lib3.AbstractContextTest {
    fail_getErrors_html_some() : void {
        let source : any = this.addSource("/test.html",'<html><head>\n<script type=\'application/dart\' src=\'test.dart\'/>\n</head></html>');
        let errorInfo : any = this.context.getErrors(source);
        expect(errorInfo,isNotNull);
        let errors : core.DartList<any> = errorInfo.errors;
        expect(errors,hasLength(0));
        errors = this.context.computeErrors(source);
        expect(errors,hasLength(2));
    }
    fail_implicitAnalysisEvents_removed() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let listener : lib4.AnalyzedSourcesListener = new lib4.AnalyzedSourcesListener();
            this.context.implicitAnalysisEvents.listen(listener.onData.bind(listener));
            let sourceA : any = this.newSource('/a.dart',"library a; import 'b.dart';");
            let sourceB : any = this.newSource('/b.dart',"library b;");
            let changeSet : any = new bare.createInstance(any,null);
            changeSet.addedSource(sourceA);
            this.context.applyChanges(changeSet);
            this.context.computeErrors(sourceA);
            await pumpEventQueue();
            listener.expectAnalyzed(sourceB);
            this.context.setContents(sourceA,"library a;");
            this.context.computeErrors(sourceA);
            await pumpEventQueue();
            listener.expectNotAnalyzed(sourceB);
        } )());
    }

    fail_performAnalysisTask_importedLibraryDelete_html() : void {
        let htmlSource : any = this.addSource("/page.html",'<html><body><script type="application/dart">\n  import \'libB.dart\';\n  main() {print(\'hello dart\');}\n</script></body></html>');
        let libBSource : any = this.addSource("/libB.dart","library libB;");
        this._analyzeAll_assertFinished();
        this.context.computeErrors(htmlSource);
        expect(this.context.getResolvedCompilationUnit2(libBSource,libBSource),isNotNull,{
            reason : "libB resolved 1"});
        expect(!AnalysisContextImplTest._hasAnalysisErrorWithErrorSeverity(this.context.getErrors(htmlSource)),isTrue,{
            reason : "htmlSource doesn't have errors"});
        this.context.setContents(libBSource,null);
        this._analyzeAll_assertFinished();
        this.context.computeErrors(htmlSource);
        let errors : any = this.context.getErrors(htmlSource);
        expect(AnalysisContextImplTest._hasAnalysisErrorWithErrorSeverity(errors),isTrue,{
            reason : "htmlSource has an error"});
    }
    fail_recordLibraryElements() : void {
        fail("Implement this");
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    tearDown() : void {
        this.context = null;
        this.sourceFactory = null;
        super.tearDown();
    }
    test_applyChanges_add() : async.Future<any> {
        let listener : lib4.SourcesChangedListener = new lib4.SourcesChangedListener();
        this.context.onSourcesChanged.listen(listener.onData.bind(listener));
        expect(this.context.sourcesNeedingProcessing,isEmpty);
        let source : any = this.newSource('/test.dart');
        let changeSet : any = new bare.createInstance(any,null);
        changeSet.addedSource(source);
        this.context.applyChanges(changeSet);
        expect(this.context.sourcesNeedingProcessing,contains(source));
        return pumpEventQueue().then((_ : any) =>  {
            listener.assertEvent({
                wereSourcesAdded : true});
            listener.assertNoMoreEvents();
        });
    }
    test_applyChanges_add_makesExplicit() : void {
        let source : any = this.newSource('/test.dart');
        let entry : any = this.context.getCacheEntry(source);
        expect(entry.explicitlyAdded,isFalse);
        let changeSet : any = new bare.createInstance(any,null);
        changeSet.addedSource(source);
        this.context.applyChanges(changeSet);
        expect(entry.explicitlyAdded,isTrue);
    }
    test_applyChanges_addNewImport_invalidateLibraryCycle() : void {
        this.context.analysisOptions = ((_) : any =>  {
            {
                _.strongMode = true;
                return _;
            }
        })(new bare.createInstance(any,null,this.context.analysisOptions));
        let embedder : any = this.addSource('/a.dart','library a;\nimport \'b.dart\';\n//import \'c.dart\';\n');
        this.addSource('/b.dart','library b;\nimport \'a.dart\';\n');
        this.addSource('/c.dart','library c;\nimport \'b.dart\';\n');
        this._performPendingAnalysisTasks();
        this.context.setContents(embedder,'library a;\nimport \'b.dart\';\nimport \'c.dart\';\n');
        this._performPendingAnalysisTasks();
        expect(this.context.getCacheEntry(embedder).exception,isNull);
    }
    test_applyChanges_change() : async.Future<any> {
        let listener : lib4.SourcesChangedListener = new lib4.SourcesChangedListener();
        this.context.onSourcesChanged.listen(listener.onData.bind(listener));
        expect(this.context.sourcesNeedingProcessing,isEmpty);
        let source : any = this.newSource('/test.dart');
        let changeSet1 : any = new bare.createInstance(any,null);
        changeSet1.addedSource(source);
        this.context.applyChanges(changeSet1);
        expect(this.context.sourcesNeedingProcessing,contains(source));
        let source2 : any = this.newSource('/test2.dart');
        let changeSet2 : any = new bare.createInstance(any,null);
        changeSet2.addedSource(source2);
        changeSet2.changedSource(source);
        this.context.applyChanges(changeSet2);
        return pumpEventQueue().then((_ : any) =>  {
            listener.assertEvent({
                wereSourcesAdded : true});
            listener.assertEvent({
                wereSourcesAdded : true,changedSources : new core.DartList.literal(source)});
            listener.assertNoMoreEvents();
        });
    }
    test_applyChanges_change_content() : async.Future<any> {
        let listener : lib4.SourcesChangedListener = new lib4.SourcesChangedListener();
        this.context.onSourcesChanged.listen(listener.onData.bind(listener));
        expect(this.context.sourcesNeedingProcessing,isEmpty);
        let source : any = this.newSource('/test.dart');
        let changeSet1 : any = new bare.createInstance(any,null);
        changeSet1.addedSource(source);
        this.context.applyChanges(changeSet1);
        expect(this.context.sourcesNeedingProcessing,contains(source));
        let source2 : any = this.newSource('/test2.dart');
        let changeSet2 : any = new bare.createInstance(any,null);
        changeSet2.addedSource(source2);
        changeSet2.changedContent(source,'library test;');
        this.context.applyChanges(changeSet2);
        return pumpEventQueue().then((_ : any) =>  {
            listener.assertEvent({
                wereSourcesAdded : true});
            listener.assertEvent({
                wereSourcesAdded : true,changedSources : new core.DartList.literal(source)});
            listener.assertNoMoreEvents();
        });
    }
    test_applyChanges_change_flush_element() : void {
        let librarySource : any = this.addSource("/lib.dart",'library lib;\nint a = 0;');
        expect(this.context.computeLibraryElement(librarySource),isNotNull);
        this.context.setContents(librarySource,'library lib;\nint aa = 0;');
        expect(this.context.getLibraryElement(librarySource),isNull);
    }
    test_applyChanges_change_multiple() : async.Future<any> {
        let listener : lib4.SourcesChangedListener = new lib4.SourcesChangedListener();
        this.context.onSourcesChanged.listen(listener.onData.bind(listener));
        let libraryContents1 : string = 'library lib;\npart \'part.dart\';\nint a = 0;';
        let librarySource : any = this.addSource("/lib.dart",libraryContents1);
        let partContents1 : string = 'part of lib;\nint b = a;';
        let partSource : any = this.addSource("/part.dart",partContents1);
        this.context.computeLibraryElement(librarySource);
        let libraryContents2 : string = 'library lib;\npart \'part.dart\';\nint aa = 0;';
        this.context.setContents(librarySource,libraryContents2);
        let partContents2 : string = 'part of lib;\nint b = aa;';
        this.context.setContents(partSource,partContents2);
        this.context.computeLibraryElement(librarySource);
        let libraryUnit : any = this.context.resolveCompilationUnit2(librarySource,librarySource);
        expect(libraryUnit,isNotNull);
        let partUnit : any = this.context.resolveCompilationUnit2(partSource,librarySource);
        expect(partUnit,isNotNull);
        let declaration : any = op(Op.INDEX,libraryUnit.declarations,0) as any;
        let declarationElement : any = op(Op.INDEX,declaration.variables.variables,0).element;
        let use : any = op(Op.INDEX,partUnit.declarations,0) as any;
        let useElement : any = (op(Op.INDEX,use.variables.variables,0).initializer as any).staticElement;
        expect((useElement as any).variable,same(declarationElement));
        return pumpEventQueue().then((_ : any) =>  {
            listener.assertEvent({
                wereSourcesAdded : true});
            listener.assertEvent({
                wereSourcesAdded : true});
            listener.assertEvent({
                changedSources : new core.DartList.literal(librarySource)});
            listener.assertEvent({
                changedSources : new core.DartList.literal(partSource)});
            listener.assertNoMoreEvents();
        });
    }
    test_applyChanges_change_range() : async.Future<any> {
        let listener : lib4.SourcesChangedListener = new lib4.SourcesChangedListener();
        this.context.onSourcesChanged.listen(listener.onData.bind(listener));
        expect(this.context.sourcesNeedingProcessing,isEmpty);
        let source : any = this.newSource('/test.dart');
        let changeSet1 : any = new bare.createInstance(any,null);
        changeSet1.addedSource(source);
        this.context.applyChanges(changeSet1);
        expect(this.context.sourcesNeedingProcessing,contains(source));
        let source2 : any = this.newSource('/test2.dart');
        let changeSet2 : any = new bare.createInstance(any,null);
        changeSet2.addedSource(source2);
        changeSet2.changedRange(source,'library test;',0,0,13);
        this.context.applyChanges(changeSet2);
        return pumpEventQueue().then((_ : any) =>  {
            listener.assertEvent({
                wereSourcesAdded : true});
            listener.assertEvent({
                wereSourcesAdded : true,changedSources : new core.DartList.literal(source)});
            listener.assertNoMoreEvents();
        });
    }
    test_applyChanges_changedSource_updateModificationTime() : void {
        let path : string = this.resourceProvider.convertPath('/test.dart');
        let file : any = this.resourceProvider.newFile(path,'var V = 1;');
        let source : any = file.createSource();
        this.context.applyChanges(((_) : any =>  {
            {
                addedSource(source);
                return _;
            }
        })(new bare.createInstance(any,null)));
        this._analyzeAll_assertFinished();
        expect(this.context.analysisCache.getState(source,RESOLVED_UNIT),CacheState.INVALID);
        this.resourceProvider.updateFile(path,'var V = 2;');
        this.context.applyChanges(((_) : any =>  {
            {
                changedSource(source);
                return _;
            }
        })(new bare.createInstance(any,null)));
        expect(this.context.analysisCache.getState(source,RESOLVED_UNIT),CacheState.INVALID);
        expect(this.context.getCacheEntry(source).modificationTime,file.modificationStamp);
    }
    test_applyChanges_empty() : void {
        this.context.applyChanges(new bare.createInstance(any,null));
        expect(this.context.performAnalysisTask().changeNotices,isNull);
    }
    test_applyChanges_incremental_resetDriver() : void {
        if (this.context != null) return;
        throw 'is this test used by the new analysis driver?';
        this.context.analysisOptions = ((_) : any =>  {
            {
                _.incremental = true;
                return _;
            }
        })(new bare.createInstance(any,null));
        let source : any = this.addSource("/test.dart",'main() {\n  print(42);\n}\n');
        this._performPendingAnalysisTasks();
        expect(this.context.getErrors(source).errors,hasLength(0));
        this.context.setContents(source,'main() {\n  print(42)\n}\n');
        let cache : any = this.context.analysisCache;
        expect(cache.getValue(source,PARSE_ERRORS),hasLength(1));
        expect(cache.getState(source,DART_ERRORS),CacheState.INVALID);
        this.context.performAnalysisTask();
        this.context.performAnalysisTask();
        expect(cache.getState(source,DART_ERRORS),CacheState.INVALID);
        this.context.setContents(source,'main() {\n  print(42);\n}\n');
        expect(cache.getValue(source,PARSE_ERRORS),hasLength(0));
        this._performPendingAnalysisTasks();
        expect(cache.getValue(source,DART_ERRORS),hasLength(0));
        expect(this.context.getErrors(source).errors,hasLength(0));
    }
    test_applyChanges_overriddenSource() : void {
        let content : string = "library test;";
        let source : any = this.addSource("/test.dart",content);
        this.context.setContents(source,content);
        this.context.computeErrors(source);
        while (!this.context.sourcesNeedingProcessing.isEmpty){
            this.context.performAnalysisTask();
        }
        let changeSet : any = new bare.createInstance(any,null);
        changeSet.changedSource(source);
        this.context.applyChanges(changeSet);
        expect(this.context.sourcesNeedingProcessing,hasLength(0));
    }
    test_applyChanges_recompute_exportNamespace() : void {
        let libSource : any = this.addSource("/lib.dart",'class A {}\n');
        let exporterSource : any = this.addSource("/exporter.dart",'export \'lib.dart\';\n');
        this._performPendingAnalysisTasks();
        {
            let libraryElement : any = this.context.getResult(exporterSource,LIBRARY_ELEMENT1);
            expect(libraryElement.exportNamespace.definedNames.keys,unorderedEquals(new core.DartList.literal('A')));
        }
        this.context.setContents(libSource,'class B {}');
        this._performPendingAnalysisTasks();
        {
            let libraryElement : any = this.context.getResult(exporterSource,LIBRARY_ELEMENT1);
            expect(libraryElement.exportNamespace.definedNames.keys,unorderedEquals(new core.DartList.literal('B')));
        }
    }
    test_applyChanges_remove() : async.Future<any> {
        let listener : lib4.SourcesChangedListener = new lib4.SourcesChangedListener();
        this.context.onSourcesChanged.listen(listener.onData.bind(listener));
        let libAContents : string = 'library libA;\nimport \'libB.dart\';';
        let libA : any = this.addSource("/libA.dart",libAContents);
        let libBContents : string = "library libB;";
        let libB : any = this.addSource("/libB.dart",libBContents);
        let libAElement : any = this.context.computeLibraryElement(libA);
        expect(libAElement,isNotNull);
        let importedLibraries : core.DartList<any> = libAElement.importedLibraries;
        expect(importedLibraries,hasLength(2));
        this.context.computeErrors(libA);
        this.context.computeErrors(libB);
        this.context.setContents(libB,null);
        this._removeSource(libB);
        let sources : core.DartList<any> = this.context.sourcesNeedingProcessing;
        expect(sources,hasLength(1));
        expect(sources[0],same(libA));
        libAElement = this.context.computeLibraryElement(libA);
        importedLibraries = libAElement.importedLibraries;
        expect(importedLibraries,hasLength(2));
        return pumpEventQueue().then((_ : any) =>  {
            listener.assertEvent({
                wereSourcesAdded : true});
            listener.assertEvent({
                wereSourcesAdded : true});
            listener.assertEvent({
                wereSourcesRemovedOrDeleted : true});
            listener.assertNoMoreEvents();
        });
    }
    test_applyChanges_remove_incremental() : void {
        if (this.context != null) return;
        throw 'is this test used by the new analysis driver?';
        let resourceProvider : any = new bare.createInstance(any,null);
        let source : any = resourceProvider.newFile('/test.dart','main() {\n  print(1);\n}\n').createSource();
        this.context.analysisOptions = ((_) : any =>  {
            {
                _.incremental = true;
                return _;
            }
        })(new bare.createInstance(any,null));
        this.context.applyChanges(((_) : any =>  {
            {
                addedSource(source);
                return _;
            }
        })(new bare.createInstance(any,null)));
        this._analyzeAll_assertFinished();
        let unit : any = this.context.getResolvedCompilationUnit2(source,source);
        this.context.setContents(source,'main() {\n  print(12);\n}\n');
        this._analyzeAll_assertFinished();
        expect(this.context.getResolvedCompilationUnit2(source,source),unit);
        this.context.setContents(source,null);
        this._analyzeAll_assertFinished();
        expect(this.context.getResolvedCompilationUnit2(source,source),unit);
    }
    test_applyChanges_removeContainer() : async.Future<any> {
        let listener : lib4.SourcesChangedListener = new lib4.SourcesChangedListener();
        this.context.onSourcesChanged.listen(listener.onData.bind(listener));
        let libAContents : string = 'library libA;\nimport \'libB.dart\';';
        let libA : any = this.addSource("/libA.dart",libAContents);
        let libBContents : string = "library libB;";
        let libB : any = this.addSource("/libB.dart",libBContents);
        this.context.computeLibraryElement(libA);
        this.context.computeErrors(libA);
        this.context.computeErrors(libB);
        let changeSet : any = new bare.createInstance(any,null);
        let removedContainer : any = new _AnalysisContextImplTest_test_applyChanges_removeContainer(libB);
        changeSet.removedContainer(removedContainer);
        this.context.applyChanges(changeSet);
        let sources : core.DartList<any> = this.context.sourcesNeedingProcessing;
        expect(sources,hasLength(1));
        expect(sources[0],same(libA));
        return pumpEventQueue().then((_ : any) =>  {
            listener.assertEvent({
                wereSourcesAdded : true});
            listener.assertEvent({
                wereSourcesAdded : true});
            listener.assertEvent({
                wereSourcesRemovedOrDeleted : true});
            listener.assertNoMoreEvents();
        });
    }
    test_applyChanges_removeUsedLibrary_addAgain() : void {
        let codeA : string = 'import \'b.dart\';\nB b = null;\n';
        let codeB : string = 'class B {}\n';
        let a : any = this.addSource('/a.dart',codeA);
        let b : any = this.addSource('/b.dart',codeB);
        var getErrorsState : (source : any) => any = (source : any) : any =>  {
            return this.context.analysisCache.getState(source,LIBRARY_ERRORS_READY);
        };
        this._performPendingAnalysisTasks();
        expect(this.context.getErrors(a).errors,hasLength(0));
        this._removeSource(b);
        expect(getErrorsState(a),CacheState.INVALID);
        this._performPendingAnalysisTasks();
        expect(getErrorsState(a),CacheState.VALID);
        expect(this.context.getErrors(a).errors,hasLength(isPositive));
        this.addSource('/b.dart',codeB);
        expect(getErrorsState(a),CacheState.INVALID);
        this._performPendingAnalysisTasks();
        expect(getErrorsState(a),CacheState.VALID);
        expect(this.context.getErrors(a).errors,hasLength(0));
    }
    test_cacheConsistencyValidator_computed_deleted() : void {
        let validator : any = this.context.cacheConsistencyValidator;
        let stat = PerformanceStatistics.cacheConsistencyValidationStatistics;
        stat.reset();
        let resourceProvider : any = new bare.createInstance(any,null);
        let path1 : string = '/test1.dart';
        let path2 : string = '/test2.dart';
        let source1 : any = resourceProvider.newFile(path1,'// 1-1').createSource();
        let source2 : any = resourceProvider.newFile(path2,'// 2-1').createSource();
        this.context.applyChanges(((_) : any =>  {
            {
                addedSource(source1);
                addedSource(source2);
                return _;
            }
        })(new bare.createInstance(any,null)));
        expect(validator.sourceModificationTimesComputed(new core.DartList.literal(source1,source2),new core.DartList.literal(source1.modificationStamp,source2.modificationStamp)),isFalse);
        expect(stat.numOfChanged,0);
        expect(stat.numOfRemoved,0);
        this.context.setContents(source1,'// 1-2');
        expect(validator.sourceModificationTimesComputed(new core.DartList.literal(source1,source2),new core.DartList.literal(-1,source2.modificationStamp)),isFalse);
        this.context.setContents(source1,null);
        expect(stat.numOfChanged,0);
        expect(stat.numOfRemoved,0);
        expect(validator.sourceModificationTimesComputed(new core.DartList.literal(source1,source2),new core.DartList.literal(-1,source2.modificationStamp)),isTrue);
        expect(stat.numOfChanged,0);
        expect(stat.numOfRemoved,1);
    }
    test_cacheConsistencyValidator_computed_modified() : void {
        let validator : any = this.context.cacheConsistencyValidator;
        let stat = PerformanceStatistics.cacheConsistencyValidationStatistics;
        stat.reset();
        let resourceProvider : any = new bare.createInstance(any,null);
        let path1 : string = '/test1.dart';
        let path2 : string = '/test2.dart';
        let source1 : any = resourceProvider.newFile(path1,'// 1-1').createSource();
        let source2 : any = resourceProvider.newFile(path2,'// 2-1').createSource();
        this.context.applyChanges(((_) : any =>  {
            {
                addedSource(source1);
                addedSource(source2);
                return _;
            }
        })(new bare.createInstance(any,null)));
        expect(validator.sourceModificationTimesComputed(new core.DartList.literal(source1,source2),new core.DartList.literal(source1.modificationStamp,source2.modificationStamp)),isFalse);
        expect(stat.numOfChanged,0);
        expect(stat.numOfRemoved,0);
        this.context.setContents(source1,'// 1-2');
        expect(validator.sourceModificationTimesComputed(new core.DartList.literal(source1,source2),new core.DartList.literal(op(Op.PLUS,source1.modificationStamp,1),source2.modificationStamp)),isFalse);
        this.context.setContents(source1,null);
        expect(stat.numOfChanged,0);
        expect(stat.numOfRemoved,0);
        expect(validator.sourceModificationTimesComputed(new core.DartList.literal(source1,source2),new core.DartList.literal(op(Op.PLUS,source1.modificationStamp,1),source2.modificationStamp)),isTrue);
        expect(stat.numOfChanged,1);
        expect(stat.numOfRemoved,0);
    }
    test_cacheConsistencyValidator_getSources() : void {
        let validator : any = this.context.cacheConsistencyValidator;
        let resourceProvider : any = new bare.createInstance(any,null);
        let path1 : string = '/test1.dart';
        let path2 : string = '/test2.dart';
        let source1 : any = resourceProvider.newFile(path1,'// 1-1').createSource();
        let source2 : any = resourceProvider.newFile(path2,'// 2-1').createSource();
        this.context.applyChanges(((_) : any =>  {
            {
                addedSource(source1);
                addedSource(source2);
                return _;
            }
        })(new bare.createInstance(any,null)));
        expect(validator.getSourcesToComputeModificationTimes(),unorderedEquals(new core.DartList.literal(source1,source2)));
    }
    test_computeDocumentationComment_class_block() : void {
        let comment : string = "/** Comment */";
        let source : any = this.addSource("/test.dart",`${comment}\nclass A {}`);
        let libraryElement : any = this.context.computeLibraryElement(source);
        expect(libraryElement,isNotNull);
        let classElement : any = op(Op.INDEX,libraryElement.definingCompilationUnit.types,0);
        expect(libraryElement,isNotNull);
        expect(this.context.computeDocumentationComment(classElement),comment);
    }
    test_computeDocumentationComment_class_none() : void {
        let source : any = this.addSource("/test.dart","class A {}");
        let libraryElement : any = this.context.computeLibraryElement(source);
        expect(libraryElement,isNotNull);
        let classElement : any = op(Op.INDEX,libraryElement.definingCompilationUnit.types,0);
        expect(libraryElement,isNotNull);
        expect(this.context.computeDocumentationComment(classElement),isNull);
    }
    test_computeDocumentationComment_class_singleLine_multiple_EOL_n() : void {
        let comment : string = "/// line 1\n/// line 2\n/// line 3\n";
        let source : any = this.addSource("/test.dart",`${comment}class A {}`);
        let libraryElement : any = this.context.computeLibraryElement(source);
        expect(libraryElement,isNotNull);
        let classElement : any = op(Op.INDEX,libraryElement.definingCompilationUnit.types,0);
        expect(libraryElement,isNotNull);
        let actual : string = this.context.computeDocumentationComment(classElement);
        expect(actual,"/// line 1\n/// line 2\n/// line 3");
    }
    test_computeDocumentationComment_class_singleLine_multiple_EOL_rn() : void {
        let comment : string = "/// line 1\n/// line 2\n/// line 3\n";
        let source : any = this.addSource("/test.dart",`${comment}class A {}`);
        let libraryElement : any = this.context.computeLibraryElement(source);
        expect(libraryElement,isNotNull);
        let classElement : any = op(Op.INDEX,libraryElement.definingCompilationUnit.types,0);
        expect(libraryElement,isNotNull);
        let actual : string = this.context.computeDocumentationComment(classElement);
        expect(actual,"/// line 1\n/// line 2\n/// line 3");
    }
    test_computeDocumentationComment_exportDirective_block() : void {
        let comment : string = '/** Comment */';
        let source : any = this.addSource("/test.dart",`${comment}\nexport 'dart:async';\n`);
        let libraryElement : any = this.context.computeLibraryElement(source);
        expect(libraryElement,isNotNull);
        let exportElement : any = op(Op.INDEX,libraryElement.exports,0);
        expect(this.context.computeDocumentationComment(exportElement),comment);
    }
    test_computeDocumentationComment_importDirective_block() : void {
        let comment : string = '/** Comment */';
        let source : any = this.addSource("/test.dart",`${comment}\nimport 'dart:async';\n`);
        let libraryElement : any = this.context.computeLibraryElement(source);
        expect(libraryElement,isNotNull);
        let importElement : any = op(Op.INDEX,libraryElement.imports,0);
        expect(this.context.computeDocumentationComment(importElement),comment);
    }
    test_computeDocumentationComment_libraryDirective_block() : void {
        let comment : string = '/** Comment */';
        let source : any = this.addSource("/test.dart",`${comment}\nlibrary lib;\n`);
        let libraryElement : any = this.context.computeLibraryElement(source);
        expect(libraryElement,isNotNull);
        expect(this.context.computeDocumentationComment(libraryElement),comment);
    }
    test_computeDocumentationComment_null() : void {
        expect(this.context.computeDocumentationComment(null),isNull);
    }
    test_computeErrors_dart_malformedCode() : void {
        let source : any = this.addSource("/lib.dart","final int , = 42;");
        let errors : core.DartList<any> = this.context.computeErrors(source);
        expect(errors,isNotNull);
        expect(errors.length > 0,isTrue);
    }
    test_computeErrors_dart_none() : void {
        let source : any = this.addSource("/lib.dart","library lib;");
        let errors : core.DartList<any> = this.context.computeErrors(source);
        expect(errors,hasLength(0));
    }
    test_computeErrors_dart_part() : void {
        let librarySource : any = this.addSource("/lib.dart","library lib; part 'part.dart';");
        let partSource : any = this.addSource("/part.dart","part of 'lib';");
        this.context.parseCompilationUnit(librarySource);
        let errors : core.DartList<any> = this.context.computeErrors(partSource);
        if (this.context.analysisOptions.enableUriInPartOf) {
        }else {
            expect(errors,isNotNull);
            expect(errors.length > 0,isTrue);
        }
    }
    test_computeErrors_dart_some() : void {
        let source : any = this.addSource("/lib.dart","library 'lib';");
        let errors : core.DartList<any> = this.context.computeErrors(source);
        expect(errors,isNotNull);
        expect(errors.length > 0,isTrue);
    }
    test_computeErrors_html_none() : void {
        let source : any = this.addSource("/test.html","<!DOCTYPE html><html></html>");
        let errors : core.DartList<any> = this.context.computeErrors(source);
        expect(errors,hasLength(0));
    }
    test_computeExportedLibraries_none() : void {
        let source : any = this.addSource("/test.dart","library test;");
        expect(this.context.computeExportedLibraries(source),hasLength(0));
    }
    test_computeExportedLibraries_some() : void {
        let source : any = this.addSource("/test.dart","library test; export 'lib1.dart'; export 'lib2.dart';");
        expect(this.context.computeExportedLibraries(source),hasLength(2));
    }
    test_computeImportedLibraries_none() : void {
        let source : any = this.addSource("/test.dart","library test;");
        expect(this.context.computeImportedLibraries(source),hasLength(0));
    }
    test_computeImportedLibraries_some() : void {
        let source : any = this.addSource("/test.dart","library test; import 'lib1.dart'; import 'lib2.dart';");
        expect(this.context.computeImportedLibraries(source),hasLength(2));
    }
    test_computeKindOf_html() : void {
        let source : any = this.addSource("/test.html","");
        expect(this.context.computeKindOf(source),same(SourceKind.HTML));
    }
    test_computeKindOf_library() : void {
        let source : any = this.addSource("/test.dart","library lib;");
        expect(this.context.computeKindOf(source),same(SourceKind.LIBRARY));
    }
    test_computeKindOf_libraryAndPart() : void {
        let source : any = this.addSource("/test.dart","library lib; part of lib;");
        expect(this.context.computeKindOf(source),same(SourceKind.LIBRARY));
    }
    test_computeKindOf_part() : void {
        let source : any = this.addSource("/test.dart","part of lib;");
        expect(this.context.computeKindOf(source),same(SourceKind.PART));
    }
    test_computeLibraryElement() : void {
        let source : any = this.addSource("/test.dart","library lib;");
        let element : any = this.context.computeLibraryElement(source);
        expect(element,isNotNull);
    }
    test_computeLineInfo_dart() : void {
        let source : any = this.addSource("/test.dart",'library lib;\n\nmain() {}');
        let info : any = this.context.computeLineInfo(source);
        expect(info,isNotNull);
    }
    test_computeLineInfo_html() : void {
        let source : any = this.addSource("/test.html",'<html>\n  <body>\n    <h1>A</h1>\n  </body>\n</html>');
        let info : any = this.context.computeLineInfo(source);
        expect(info,isNotNull);
    }
    test_computeResolvedCompilationUnitAsync() : async.Future<any> {
        let source : any = this.addSource("/lib.dart","library lib;");
        this._performPendingAnalysisTasks();
        this._flushAst(source);
        let completed : boolean = false;
        this.context.computeResolvedCompilationUnitAsync(source,source).then((unit : any) =>  {
            expect(unit,isNotNull);
            completed = true;
        });
        return pumpEventQueue().then((_ : any) =>  {
            expect(completed,isFalse);
            this._performPendingAnalysisTasks();
        }).then((_ : any) =>  {
            return pumpEventQueue();
        }).then((_ : any) =>  {
            expect(completed,isTrue);
        });
    }
    test_computeResolvedCompilationUnitAsync_afterDispose() : async.Future<any> {
        let source : any = this.addSource("/lib.dart","library lib;");
        this._performPendingAnalysisTasks();
        this._flushAst(source);
        this.context.dispose();
        let future : any = this.context.computeResolvedCompilationUnitAsync(source,source);
        let completed : boolean = false;
        future.then((unit : any) =>  {
            fail('Future should have completed with error');
        },{
            onError : (error : any) =>  {
                expect(error,new bare.createInstance(any,null));
                completed = true;
            }});
        return pumpEventQueue().then((_ : any) =>  {
            expect(completed,isTrue);
        });
    }
    test_computeResolvedCompilationUnitAsync_cancel() : async.Future<any> {
        let source : any = this.addSource("/lib.dart","library lib;");
        this._performPendingAnalysisTasks();
        this._flushAst(source);
        let future : any = this.context.computeResolvedCompilationUnitAsync(source,source);
        let completed : boolean = false;
        future.then((unit : any) =>  {
            fail('Future should have been canceled');
        },{
            onError : (error : any) =>  {
                expect(error,new bare.createInstance(any,null));
                completed = true;
            }});
        expect(completed,isFalse);
        expect(this.context.pendingFutureSources_forTesting,isNotEmpty);
        future.cancel();
        expect(this.context.pendingFutureSources_forTesting,isEmpty);
        return pumpEventQueue().then((_ : any) =>  {
            expect(completed,isTrue);
            expect(this.context.pendingFutureSources_forTesting,isEmpty);
        });
    }
    test_computeResolvedCompilationUnitAsync_dispose() : async.Future<any> {
        let source : any = this.addSource("/lib.dart","library lib;");
        this._performPendingAnalysisTasks();
        this._flushAst(source);
        let completed : boolean = false;
        let future : any = this.context.computeResolvedCompilationUnitAsync(source,source);
        future.then((unit : any) =>  {
            fail('Future should have completed with error');
        },{
            onError : (error : any) =>  {
                expect(error,new bare.createInstance(any,null));
                completed = true;
            }});
        expect(completed,isFalse);
        expect(this.context.pendingFutureSources_forTesting,isNotEmpty);
        this.context.dispose();
        expect(this.context.pendingFutureSources_forTesting,isEmpty);
        return pumpEventQueue().then((_ : any) =>  {
            expect(completed,isTrue);
            expect(this.context.pendingFutureSources_forTesting,isEmpty);
        });
    }
    test_computeResolvedCompilationUnitAsync_noCacheEntry() : async.Future<any> {
        let librarySource : any = this.addSource("/lib.dart","library lib;");
        let partSource : any = this.addSource("/part.dart","part of foo;");
        let completed : boolean = false;
        this.context.computeResolvedCompilationUnitAsync(partSource,librarySource).then((unit : any) =>  {
            expect(unit,isNotNull);
            completed = true;
        });
        return pumpEventQueue().then((_ : any) =>  {
            expect(completed,isFalse);
            this._performPendingAnalysisTasks();
        }).then((_ : any) =>  {
            return pumpEventQueue();
        }).then((_ : any) =>  {
            expect(completed,isTrue);
        });
    }
    test_dispose() : void {
        expect(this.context.isDisposed,isFalse);
        this.context.dispose();
        expect(this.context.isDisposed,isTrue);
    }
    test_ensureResolvedDartUnits_definingUnit_hasResolved() : void {
        let source : any = this.addSource('/test.dart','');
        let libTarget : any = new bare.createInstance(any,null,source,source);
        this.analysisDriver.computeResult(libTarget,RESOLVED_UNIT);
        let unit : any = this.context.getCacheEntry(libTarget).getValue(RESOLVED_UNIT);
        let units : core.DartList<any> = this.context.ensureResolvedDartUnits(source);
        expect(units,unorderedEquals(new core.DartList.literal(unit)));
    }
    test_ensureResolvedDartUnits_definingUnit_notResolved() : void {
        let source : any = this.addSource('/test.dart','');
        let libTarget : any = new bare.createInstance(any,null,source,source);
        this.analysisDriver.computeResult(libTarget,RESOLVED_UNIT);
        this.context.getCacheEntry(libTarget).setState(RESOLVED_UNIT,CacheState.FLUSHED);
        let units : core.DartList<any> = this.context.ensureResolvedDartUnits(source);
        expect(units,isNull);
        let nextResult : any = this.context.dartWorkManager.getNextResult();
        expect(nextResult.target,libTarget);
        expect(nextResult.result,RESOLVED_UNIT);
    }
    test_ensureResolvedDartUnits_partUnit_hasResolved() : void {
        let libSource1 : any = this.addSource('/lib1.dart','library lib;\npart \'part.dart\';\n');
        let libSource2 : any = this.addSource('/lib2.dart','library lib;\npart \'part.dart\';\n');
        let partSource : any = this.addSource('/part.dart','part of lib;\n');
        let partTarget1 : any = new bare.createInstance(any,null,libSource1,partSource);
        let partTarget2 : any = new bare.createInstance(any,null,libSource2,partSource);
        this.analysisDriver.computeResult(partTarget1,RESOLVED_UNIT);
        this.analysisDriver.computeResult(partTarget2,RESOLVED_UNIT);
        let unit1 : any = this.context.getCacheEntry(partTarget1).getValue(RESOLVED_UNIT);
        let unit2 : any = this.context.getCacheEntry(partTarget2).getValue(RESOLVED_UNIT);
        let units : core.DartList<any> = this.context.ensureResolvedDartUnits(partSource);
        expect(units,unorderedEquals(new core.DartList.literal(unit1,unit2)));
    }
    test_ensureResolvedDartUnits_partUnit_notResolved() : void {
        let libSource1 : any = this.addSource('/lib1.dart','library lib;\npart \'part.dart\';\n');
        let libSource2 : any = this.addSource('/lib2.dart','library lib;\npart \'part.dart\';\n');
        let partSource : any = this.addSource('/part.dart','part of lib;\n');
        let partTarget1 : any = new bare.createInstance(any,null,libSource1,partSource);
        let partTarget2 : any = new bare.createInstance(any,null,libSource2,partSource);
        this.analysisDriver.computeResult(partTarget1,RESOLVED_UNIT);
        this.analysisDriver.computeResult(partTarget2,RESOLVED_UNIT);
        this.context.getCacheEntry(partTarget1).setState(RESOLVED_UNIT,CacheState.FLUSHED);
        this.context.getCacheEntry(partTarget2).setState(RESOLVED_UNIT,CacheState.FLUSHED);
        let units : core.DartList<any> = this.context.ensureResolvedDartUnits(partSource);
        expect(units,isNull);
        let nextResult : any = this.context.dartWorkManager.getNextResult();
        expect(nextResult.target,anyOf(partTarget1,partTarget2));
        expect(nextResult.result,RESOLVED_UNIT);
    }
    test_exists_false() : void {
        let source : lib5.TestSource = new lib5.TestSource();
        source.exists2 = false;
        expect(this.context.exists(source),isFalse);
    }
    test_exists_null() : void {
        expect(this.context.exists(null),isFalse);
    }
    test_exists_overridden() : void {
        let source : any = new lib5.TestSource();
        this.context.setContents(source,"");
        expect(this.context.exists(source),isTrue);
    }
    test_exists_true() : void {
        expect(this.context.exists(new _AnalysisContextImplTest_Source_exists_true()),isTrue);
    }
    test_flushResolvedUnit_updateFile_dontNotify() : void {
        let oldCode : string = '';
        let newCode : string = 'import \'dart:async\';\n';
        let path : string = this.resourceProvider.convertPath('/test.dart');
        let source : any = this.resourceProvider.newFile(path,oldCode).createSource();
        this.context.applyChanges(((_) : any =>  {
            {
                addedSource(source);
                return _;
            }
        })(new bare.createInstance(any,null)));
        this.context.resolveCompilationUnit2(source,source);
        this.context.analysisCache.flush((target : any,result : any) =>  {
            if (op(Op.EQUALS,target.source,source)) {
                return RESOLVED_UNIT_RESULTS.contains(result);
            }
            return false;
        });
        this.resourceProvider.updateFile(path,newCode);
        let unit : any = this.context.resolveCompilationUnit2(source,source);
        expect(unit,isNotNull);
    }
    test_flushResolvedUnit_updateFile_dontNotify2() : void {
        let oldCode : string = 'main() {}\n';
        let newCode : string = 'import \'dart:async\';\nmain() {}\n';
        let path : string = this.resourceProvider.convertPath('/test.dart');
        let source : any = this.resourceProvider.newFile(path,oldCode).createSource();
        this.context.applyChanges(((_) : any =>  {
            {
                addedSource(source);
                return _;
            }
        })(new bare.createInstance(any,null)));
        this.context.resolveCompilationUnit2(source,source);
        this.context.analysisCache.flush((target : any,result : any) =>  {
            if (op(Op.EQUALS,target.source,source)) {
                if (op(Op.EQUALS,target.source,source)) {
                    return RESOLVED_UNIT_RESULTS.contains(result);
                }
            }
            return false;
        });
        this.resourceProvider.updateFile(path,newCode);
        let unit : any = this.context.resolveCompilationUnit2(source,source);
        expect(unit,isNotNull);
    }
    test_flushSingleResolvedUnit_instanceField() : void {
        this._checkFlushSingleResolvedUnit('class C { var x = 0; }',(unitElement : any,reason : string) =>  {
            expect(unitElement.types,hasLength(1),{
                reason : reason});
            let cls : any = op(Op.INDEX,unitElement.types,0);
            expect(cls.fields,hasLength(1),{
                reason : reason});
            expect(op(Op.INDEX,cls.fields,0).type.toString(),'int',{
                reason : reason});
            expect(cls.accessors,hasLength(2),{
                reason : reason});
            expect(op(Op.INDEX,cls.accessors,0).isGetter,isTrue,{
                reason : reason});
            expect(op(Op.INDEX,cls.accessors,0).returnType.toString(),'int',{
                reason : reason});
            expect(op(Op.INDEX,cls.accessors,1).isSetter,isTrue,{
                reason : reason});
            expect(op(Op.INDEX,cls.accessors,1).returnType.toString(),'void',{
                reason : reason});
            expect(op(Op.INDEX,cls.accessors,1).parameters,hasLength(1),{
                reason : reason});
            expect(op(Op.INDEX,op(Op.INDEX,cls.accessors,1).parameters,0).type.toString(),'int',{
                reason : reason});
        });
    }
    test_flushSingleResolvedUnit_instanceGetter() : void {
        this._checkFlushSingleResolvedUnit('abstract class B {\n  int get x;\n}\nclass C extends B {\n  get x => null;\n}\n',(unitElement : any,reason : string) =>  {
            expect(unitElement.types,hasLength(2),{
                reason : reason});
            let cls : any = op(Op.INDEX,unitElement.types,1);
            expect(cls.name,'C',{
                reason : reason});
            expect(cls.accessors,hasLength(1),{
                reason : reason});
            expect(op(Op.INDEX,cls.accessors,0).returnType.toString(),'int',{
                reason : reason});
            expect(cls.fields,hasLength(1),{
                reason : reason});
            expect(op(Op.INDEX,cls.fields,0).type.toString(),'int',{
                reason : reason});
        });
    }
    test_flushSingleResolvedUnit_instanceMethod() : void {
        this._checkFlushSingleResolvedUnit('abstract class B {\n  int f(String s);\n}\nclass C extends B {\n  f(s) => null;\n}\n',(unitElement : any,reason : string) =>  {
            expect(unitElement.types,hasLength(2),{
                reason : reason});
            let cls : any = op(Op.INDEX,unitElement.types,1);
            expect(cls.name,'C',{
                reason : reason});
            expect(cls.methods,hasLength(1),{
                reason : reason});
            expect(op(Op.INDEX,cls.methods,0).returnType.toString(),'int',{
                reason : reason});
            expect(op(Op.INDEX,cls.methods,0).parameters,hasLength(1),{
                reason : reason});
            expect(op(Op.INDEX,op(Op.INDEX,cls.methods,0).parameters,0).type.toString(),'String',{
                reason : reason});
        });
    }
    test_flushSingleResolvedUnit_instanceSetter() : void {
        this._checkFlushSingleResolvedUnit('abstract class B {\n  set x(int value);\n}\nclass C extends B {\n  set x(value) {}\n}\n',(unitElement : any,reason : string) =>  {
            expect(unitElement.types,hasLength(2),{
                reason : reason});
            let cls : any = op(Op.INDEX,unitElement.types,1);
            expect(cls.name,'C',{
                reason : reason});
            expect(cls.accessors,hasLength(1),{
                reason : reason});
            expect(op(Op.INDEX,cls.accessors,0).returnType.toString(),'void',{
                reason : reason});
            expect(op(Op.INDEX,cls.accessors,0).parameters,hasLength(1),{
                reason : reason});
            expect(op(Op.INDEX,op(Op.INDEX,cls.accessors,0).parameters,0).type.toString(),'int',{
                reason : reason});
            expect(cls.fields,hasLength(1),{
                reason : reason});
            expect(op(Op.INDEX,cls.fields,0).type.toString(),'int',{
                reason : reason});
        });
    }
    test_flushSingleResolvedUnit_staticField() : void {
        this._checkFlushSingleResolvedUnit('class C { static var x = 0; }',(unitElement : any,reason : string) =>  {
            expect(unitElement.types,hasLength(1),{
                reason : reason});
            let cls : any = op(Op.INDEX,unitElement.types,0);
            expect(cls.fields,hasLength(1),{
                reason : reason});
            expect(op(Op.INDEX,cls.fields,0).type.toString(),'int',{
                reason : reason});
            expect(cls.accessors,hasLength(2),{
                reason : reason});
            expect(op(Op.INDEX,cls.accessors,0).isGetter,isTrue,{
                reason : reason});
            expect(op(Op.INDEX,cls.accessors,0).returnType.toString(),'int',{
                reason : reason});
            expect(op(Op.INDEX,cls.accessors,1).isSetter,isTrue,{
                reason : reason});
            expect(op(Op.INDEX,cls.accessors,1).returnType.toString(),'void',{
                reason : reason});
            expect(op(Op.INDEX,cls.accessors,1).parameters,hasLength(1),{
                reason : reason});
            expect(op(Op.INDEX,op(Op.INDEX,cls.accessors,1).parameters,0).type.toString(),'int',{
                reason : reason});
        });
    }
    test_flushSingleResolvedUnit_topLevelVariable() : void {
        this._checkFlushSingleResolvedUnit('var x = 0;',(unitElement : any,reason : string) =>  {
            expect(unitElement.topLevelVariables,hasLength(1),{
                reason : reason});
            expect(op(Op.INDEX,unitElement.topLevelVariables,0).type.toString(),'int',{
                reason : reason});
            expect(unitElement.accessors,hasLength(2),{
                reason : reason});
            expect(op(Op.INDEX,unitElement.accessors,0).isGetter,isTrue,{
                reason : reason});
            expect(op(Op.INDEX,unitElement.accessors,0).returnType.toString(),'int',{
                reason : reason});
            expect(op(Op.INDEX,unitElement.accessors,1).isSetter,isTrue,{
                reason : reason});
            expect(op(Op.INDEX,unitElement.accessors,1).returnType.toString(),'void',{
                reason : reason});
            expect(op(Op.INDEX,unitElement.accessors,1).parameters,hasLength(1),{
                reason : reason});
            expect(op(Op.INDEX,op(Op.INDEX,unitElement.accessors,1).parameters,0).type.toString(),'int',{
                reason : reason});
        });
    }
    test_getAnalysisOptions() : void {
        expect(this.context.analysisOptions,isNotNull);
    }
    test_getContents_fromSource() : void {
        let content : string = "library lib;";
        let contents : any = this.context.getContents(new lib5.TestSource('/test.dart',content));
        expect(contents.data.toString(),content);
    }
    test_getContents_notOverridden() : void {
        let content : string = "library lib;";
        let source : any = new lib5.TestSource('/test.dart',content);
        this.context.setContents(source,"part of lib;");
        this.context.setContents(source,null);
        let contents : any = this.context.getContents(source);
        expect(contents.data.toString(),content);
    }
    test_getContents_overridden() : void {
        let content : string = "library lib;";
        let source : any = new lib5.TestSource();
        this.context.setContents(source,content);
        let contents : any = this.context.getContents(source);
        expect(contents.data.toString(),content);
    }
    test_getDeclaredVariables() : void {
        expect(this.context.declaredVariables,isNotNull);
    }
    test_getElement() : void {
        let core : any = this.context.computeLibraryElement(this.sourceFactory.forUri("dart:core"));
        expect(core,isNotNull);
        let classObject : any = this._findClass(core.definingCompilationUnit,"Object");
        expect(classObject,isNotNull);
        let location : any = classObject.location;
        let element : any = this.context.getElement(location);
        expect(element,same(classObject));
    }
    test_getElement_constructor_named() : void {
        let source : any = this.addSource("/lib.dart",'class A {\n  A.named() {}\n}');
        this._analyzeAll_assertFinished();
        let library : any = this.context.computeLibraryElement(source);
        let classA : any = this._findClass(library.definingCompilationUnit,"A");
        let constructor : any = op(Op.INDEX,classA.constructors,0);
        let location : any = constructor.location;
        let element : any = this.context.getElement(location);
        expect(element,same(constructor));
    }
    test_getElement_constructor_unnamed() : void {
        let source : any = this.addSource("/lib.dart",'class A {\n  A() {}\n}');
        this._analyzeAll_assertFinished();
        let library : any = this.context.computeLibraryElement(source);
        let classA : any = this._findClass(library.definingCompilationUnit,"A");
        let constructor : any = op(Op.INDEX,classA.constructors,0);
        let location : any = constructor.location;
        let element : any = this.context.getElement(location);
        expect(element,same(constructor));
    }
    test_getElement_enum() : void {
        let source : any = this.addSource('/test.dart','enum MyEnum {A, B, C}');
        this._analyzeAll_assertFinished();
        let library : any = this.context.computeLibraryElement(source);
        let myEnum : any = library.definingCompilationUnit.getEnum('MyEnum');
        let location : any = myEnum.location;
        let element : any = this.context.getElement(location);
        expect(element,same(myEnum));
    }
    test_getErrors_dart_none() : void {
        let source : any = this.addSource("/lib.dart","library lib;");
        let errorInfo = this.context.getErrors(source);
        expect(errorInfo,isNotNull);
        let errors : core.DartList<any> = errorInfo.errors;
        expect(errors,hasLength(0));
        this.context.computeErrors(source);
        errors = errorInfo.errors;
        expect(errors,hasLength(0));
    }
    test_getErrors_dart_some() : void {
        let source : any = this.addSource("/lib.dart","library 'lib';");
        let errorInfo = this.context.getErrors(source);
        expect(errorInfo,isNotNull);
        let errors : core.DartList<any> = errorInfo.errors;
        expect(errors,hasLength(0));
        errors = this.context.computeErrors(source);
        expect(errors,hasLength(1));
    }
    test_getErrors_html_none() : void {
        let source : any = this.addSource("/test.html","<html></html>");
        let errorInfo : any = this.context.getErrors(source);
        expect(errorInfo,isNotNull);
        let errors : core.DartList<any> = errorInfo.errors;
        expect(errors,hasLength(0));
        this.context.computeErrors(source);
        errors = errorInfo.errors;
        expect(errors,hasLength(0));
    }
    test_getHtmlFilesReferencing_html() : void {
        let htmlSource : any = this.addSource("/test.html",'<html><head>\n<script type=\'application/dart\' src=\'test.dart\'/>\n<script type=\'application/dart\' src=\'test.js\'/>\n</head></html>');
        let librarySource : any = this.addSource("/test.dart","library lib;");
        let secondHtmlSource : any = this.addSource("/test.html","<html></html>");
        this.context.computeLibraryElement(librarySource);
        let result : core.DartList<any> = this.context.getHtmlFilesReferencing(secondHtmlSource);
        expect(result,hasLength(0));
        this.context.parseHtmlDocument(htmlSource);
        result = this.context.getHtmlFilesReferencing(secondHtmlSource);
        expect(result,hasLength(0));
    }
    test_getHtmlFilesReferencing_library() : void {
        let htmlSource : any = this.addSource("/test.html",'<!DOCTYPE html>\n<html><head>\n<script type=\'application/dart\' src=\'test.dart\'/>\n<script type=\'application/dart\' src=\'test.js\'/>\n</head></html>');
        let librarySource : any = this.addSource("/test.dart","library lib;");
        this.context.computeLibraryElement(librarySource);
        let result : core.DartList<any> = this.context.getHtmlFilesReferencing(librarySource);
        expect(result,hasLength(0));
        this.context.computeErrors(htmlSource);
        result = this.context.getHtmlFilesReferencing(librarySource);
        expect(result,hasLength(1));
        expect(result[0],htmlSource);
    }
    test_getHtmlFilesReferencing_part() : void {
        let htmlSource : any = this.addSource("/test.html",'<!DOCTYPE html>\n<html><head>\n<script type=\'application/dart\' src=\'test.dart\'/>\n<script type=\'application/dart\' src=\'test.js\'/>\n</head></html>');
        let librarySource : any = this.addSource("/test.dart","library lib; part 'part.dart';");
        let partSource : any = this.addSource("/part.dart","part of lib;");
        this.context.computeLibraryElement(librarySource);
        let result : core.DartList<any> = this.context.getHtmlFilesReferencing(partSource);
        expect(result,hasLength(0));
        this.context.computeErrors(htmlSource);
        result = this.context.getHtmlFilesReferencing(partSource);
        expect(result,hasLength(1));
        expect(result[0],htmlSource);
    }
    test_getHtmlSources() : void {
        let sources : core.DartList<any> = this.context.htmlSources;
        expect(sources,hasLength(0));
        let source : any = this.addSource("/test.html","");
        sources = this.context.htmlSources;
        expect(sources,hasLength(1));
        expect(sources[0],source);
    }
    test_getKindOf_html() : void {
        let source : any = this.addSource("/test.html","");
        expect(this.context.getKindOf(source),same(SourceKind.HTML));
    }
    test_getKindOf_library() : void {
        let source : any = this.addSource("/test.dart","library lib;");
        expect(this.context.getKindOf(source),same(SourceKind.UNKNOWN));
        this.context.computeKindOf(source);
        expect(this.context.getKindOf(source),same(SourceKind.LIBRARY));
    }
    test_getKindOf_part() : void {
        let source : any = this.addSource("/test.dart","part of lib;");
        expect(this.context.getKindOf(source),same(SourceKind.UNKNOWN));
        this.context.computeKindOf(source);
        expect(this.context.getKindOf(source),same(SourceKind.PART));
    }
    test_getKindOf_unknown() : void {
        let source : any = this.addSource("/test.css","");
        expect(this.context.getKindOf(source),same(SourceKind.UNKNOWN));
    }
    test_getLaunchableClientLibrarySources_doesNotImportHtml() : void {
        let source : any = this.addSource("/test.dart",'main() {}');
        this.context.computeLibraryElement(source);
        let sources : core.DartList<any> = this.context.launchableClientLibrarySources;
        expect(sources,isEmpty);
    }
    test_getLaunchableClientLibrarySources_importsHtml_explicitly() : void {
        let sources : core.DartList<any> = this.context.launchableClientLibrarySources;
        expect(sources,isEmpty);
        let source : any = this.addSource("/test.dart",'import \'dart:html\';\nmain() {}');
        this.context.computeLibraryElement(source);
        sources = this.context.launchableClientLibrarySources;
        expect(sources,unorderedEquals(new core.DartList.literal(source)));
    }
    test_getLaunchableClientLibrarySources_importsHtml_implicitly() : void {
        let sources : core.DartList<any> = this.context.launchableClientLibrarySources;
        expect(sources,isEmpty);
        this.addSource('/a.dart','import \'dart:html\';\n');
        let source : any = this.addSource("/test.dart",'import \'a.dart\';\nmain() {}');
        this._analyzeAll_assertFinished();
        sources = this.context.launchableClientLibrarySources;
        expect(sources,unorderedEquals(new core.DartList.literal(source)));
    }
    test_getLaunchableClientLibrarySources_importsHtml_implicitly2() : void {
        let sources : core.DartList<any> = this.context.launchableClientLibrarySources;
        expect(sources,isEmpty);
        this.addSource('/a.dart','export \'dart:html\';\n');
        let source : any = this.addSource("/test.dart",'import \'a.dart\';\nmain() {}');
        this._analyzeAll_assertFinished();
        sources = this.context.launchableClientLibrarySources;
        expect(sources,unorderedEquals(new core.DartList.literal(source)));
    }
    test_getLaunchableServerLibrarySources() : void {
        expect(this.context.launchableServerLibrarySources,isEmpty);
        let source : any = this.addSource("/test.dart","main() {}");
        this.context.computeLibraryElement(source);
        expect(this.context.launchableServerLibrarySources,unorderedEquals(new core.DartList.literal(source)));
    }
    test_getLaunchableServerLibrarySources_importsHtml_explicitly() : void {
        let source : any = this.addSource("/test.dart",'import \'dart:html\';\nmain() {}\n');
        this.context.computeLibraryElement(source);
        expect(this.context.launchableServerLibrarySources,isEmpty);
    }
    test_getLaunchableServerLibrarySources_importsHtml_implicitly() : void {
        this.addSource("/imports_html.dart",'import \'dart:html\';\n');
        this.addSource("/test.dart",'import \'imports_html.dart\';\nmain() {}');
        this._analyzeAll_assertFinished();
        expect(this.context.launchableServerLibrarySources,isEmpty);
    }
    test_getLaunchableServerLibrarySources_noMain() : void {
        let source : any = this.addSource("/test.dart",'');
        this.context.computeLibraryElement(source);
        expect(this.context.launchableServerLibrarySources,isEmpty);
    }
    test_getLibrariesContaining() : void {
        let librarySource : any = this.addSource("/lib.dart",'library lib;\npart \'part.dart\';');
        let partSource : any = this.addSource("/part.dart","part of lib;");
        this.context.computeLibraryElement(librarySource);
        let result : core.DartList<any> = this.context.getLibrariesContaining(librarySource);
        expect(result,hasLength(1));
        expect(result[0],librarySource);
        result = this.context.getLibrariesContaining(partSource);
        expect(result,hasLength(1));
        expect(result[0],librarySource);
    }
    test_getLibrariesDependingOn() : void {
        let libASource : any = this.addSource("/libA.dart","library libA;");
        this.addSource("/libB.dart","library libB;");
        let lib1Source : any = this.addSource("/lib1.dart",'library lib1;\nimport \'libA.dart\';\nexport \'libB.dart\';');
        let lib2Source : any = this.addSource("/lib2.dart",'library lib2;\nimport \'libB.dart\';\nexport \'libA.dart\';');
        this.context.computeLibraryElement(lib1Source);
        this.context.computeLibraryElement(lib2Source);
        let result : core.DartList<any> = this.context.getLibrariesDependingOn(libASource);
        expect(result,unorderedEquals(new core.DartList.literal(lib1Source,lib2Source)));
    }
    test_getLibrariesReferencedFromHtml() : void {
        let htmlSource : any = this.addSource("/test.html",'<!DOCTYPE html>\n<html><head>\n<script type=\'application/dart\' src=\'test.dart\'/>\n<script type=\'application/dart\' src=\'test.js\'/>\n</head></html>');
        let librarySource : any = this.addSource("/test.dart","library lib;");
        this.context.computeLibraryElement(librarySource);
        this.context.computeErrors(htmlSource);
        let result : core.DartList<any> = this.context.getLibrariesReferencedFromHtml(htmlSource);
        expect(result,hasLength(1));
        expect(result[0],librarySource);
    }
    test_getLibrariesReferencedFromHtml_none() : void {
        let htmlSource : any = this.addSource("/test.html",'<html><head>\n<script type=\'application/dart\' src=\'test.js\'/>\n</head></html>');
        this.addSource("/test.dart","library lib;");
        this.context.parseHtmlDocument(htmlSource);
        let result : core.DartList<any> = this.context.getLibrariesReferencedFromHtml(htmlSource);
        expect(result,hasLength(0));
    }
    test_getLibraryElement() : void {
        let source : any = this.addSource("/test.dart","library lib;");
        let element : any = this.context.getLibraryElement(source);
        expect(element,isNull);
        this.context.computeLibraryElement(source);
        element = this.context.getLibraryElement(source);
        expect(element,isNotNull);
    }
    test_getLibrarySources() : void {
        let sources : core.DartList<any> = this.context.librarySources;
        let originalLength : number = sources.length;
        let source : any = this.addSource("/test.dart","library lib;");
        this.context.computeKindOf(source);
        sources = this.context.librarySources;
        expect(sources,hasLength(originalLength + 1));
        for(let returnedSource of sources) {
            if (op(Op.EQUALS,returnedSource,source)) {
                return;
            }
        }
        fail("The added source was not in the list of library sources");
    }
    test_getLibrarySources_inSDK() : void {
        let source : any = this.addSource('/test.dart','import \'dart:async\';\nStream S = null;\n');
        let testLibrary : any = this.context.computeLibraryElement(source);
        let streamElement : any;
        {
            let testUnit : any = testLibrary.definingCompilationUnit;
            let streamType : any = op(Op.INDEX,testUnit.topLevelVariables,0).type;
            streamElement = streamType.element;
        }
        let sdkContext : any = this.context.sourceFactory.dartSdk.context;
        expect(sdkContext,streamElement.context);
        let intSource : any = streamElement.source;
        {
            let coreLibraries : core.DartList<any> = sdkContext.getLibrariesContaining(intSource);
            expect(coreLibraries,hasLength(1));
            let coreSource : any = coreLibraries[0];
            expect(coreSource.isInSystemLibrary,isTrue);
            expect(coreSource.shortName,'async.dart');
        }
        {
            let coreLibraries : core.DartList<any> = this.context.getLibrariesContaining(intSource);
            expect(coreLibraries,hasLength(1));
            let coreSource : any = coreLibraries[0];
            expect(coreSource.isInSystemLibrary,isTrue);
            expect(coreSource.shortName,'async.dart');
        }
    }
    test_getLineInfo() : void {
        let source : any = this.addSource("/test.dart",'library lib;\n\nmain() {}');
        let info : any = this.context.getLineInfo(source);
        expect(info,isNull);
        this.context.parseCompilationUnit(source);
        info = this.context.getLineInfo(source);
        expect(info,isNotNull);
    }
    test_getModificationStamp_fromSource() : void {
        let stamp : number = 42;
        expect(this.context.getModificationStamp(new _AnalysisContextImplTest_Source_getModificationStamp_fromSource(stamp)),stamp);
    }
    test_getModificationStamp_overridden() : void {
        let stamp : number = 42;
        let source : any = new _AnalysisContextImplTest_Source_getModificationStamp_overridden(stamp);
        this.context.setContents(source,"");
        expect(stamp != this.context.getModificationStamp(source),isTrue);
    }
    test_getPublicNamespace_element() : void {
        let source : any = this.addSource("/test.dart","class A {}");
        let library : any = this.context.computeLibraryElement(source);
        expect(library,isNotNull);
        let namespace : any = this.context.getPublicNamespace(library);
        expect(namespace,isNotNull);
        lib5.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },ClassElement,namespace.get("A"));
    }
    test_getResolvedCompilationUnit_library() : void {
        let source : any = this.addSource("/lib.dart","library libb;");
        let library : any = this.context.computeLibraryElement(source);
        this.context.computeErrors(source);
        expect(this.context.getResolvedCompilationUnit(source,library),isNotNull);
        this.context.setContents(source,"library lib;");
        expect(this.context.getResolvedCompilationUnit(source,library),isNull);
    }
    test_getResolvedCompilationUnit_library_null() : void {
        let source : any = this.addSource("/lib.dart","library lib;");
        expect(this.context.getResolvedCompilationUnit(source,null),isNull);
    }
    test_getResolvedCompilationUnit_source_dart() : void {
        let source : any = this.addSource("/lib.dart","library lib;");
        expect(this.context.getResolvedCompilationUnit2(source,source),isNull);
        this.context.resolveCompilationUnit2(source,source);
        expect(this.context.getResolvedCompilationUnit2(source,source),isNotNull);
    }
    test_getSourceFactory() : void {
        expect(this.context.sourceFactory,same(this.sourceFactory));
    }
    test_getSourcesWithFullName() : void {
        let filePath : string = '/foo/lib/file.dart';
        let expected : core.DartList<any> = new core.DartList.literal<any>();
        let changeSet : any = new bare.createInstance(any,null);
        let source1 : lib5.TestSourceWithUri = new lib5.TestSourceWithUri(filePath,lib6.Uri.parse(`file://${filePath}`));
        expected.add(source1);
        changeSet.addedSource(source1);
        let source2 : lib5.TestSourceWithUri = new lib5.TestSourceWithUri(filePath,lib6.Uri.parse('package:foo/file.dart'));
        expected.add(source2);
        changeSet.addedSource(source2);
        this.context.applyChanges(changeSet);
        expect(this.context.getSourcesWithFullName(filePath),unorderedEquals(expected));
    }
    test_handleContentsChanged() : void {
        let contentCache : any = new bare.createInstance(any,null);
        this.context.contentCache = contentCache;
        let oldContents : string = 'foo() {}';
        let newContents : string = 'bar() {}';
        let source : any = this.addSource("/test.dart",oldContents);
        this._analyzeAll_assertFinished();
        expect(this.context.getResolvedCompilationUnit2(source,source),isNotNull);
        contentCache.setContents(source,newContents);
        this.context.handleContentsChanged(source,oldContents,newContents,true);
        let analysisResult : any = this.context.performAnalysisTask();
        expect(analysisResult.changeNotices,isNotNull);
    }
    test_handleContentsChanged_incremental_newContentsNull() : void {
        this.context.analysisOptions = ((_) : any =>  {
            {
                _.incremental = true;
                return _;
            }
        })(new bare.createInstance(any,null));
        let contentCache : any = new bare.createInstance(any,null);
        this.context.contentCache = contentCache;
        let oldContents : string = 'foo() {}';
        let source : any = this.resourceProvider.getFile('/test.dart').createSource();
        contentCache.setContents(source,oldContents);
        expect(this.context.computeLibraryElement(source),isNotNull);
        let newContents : string = null;
        contentCache.setContents(source,newContents);
        this.context.handleContentsChanged(source,oldContents,newContents,true);
        expect(this.context.getLibraryElement(source),isNull);
    }
    test_handleContentsChanged_noOriginal_sameAsFile() : void {
        let contentCache : any = new bare.createInstance(any,null);
        this.context.contentCache = contentCache;
        let code : string = 'foo() {}';
        let source : any = this.addSource("/test.dart",code);
        this._analyzeAll_assertFinished();
        expect(this.context.getResolvedCompilationUnit2(source,source),isNotNull);
        contentCache.setContents(source,code);
        this.context.handleContentsChanged(source,null,code,true);
        expect(this.context.getResolvedCompilationUnit2(source,source),isNotNull);
    }
    test_handleContentsChanged_noOriginal_sameAsFile_butFileUpdated() : void {
        let contentCache : any = new bare.createInstance(any,null);
        this.context.contentCache = contentCache;
        let oldCode : string = 'foo() {}';
        let newCode : string = 'bar() {}';
        let file = this.resourceProvider.newFile('/test.dart',oldCode);
        let source : any = file.createSource();
        this.context.applyChanges(((_) : any =>  {
            {
                addedSource(source);
                return _;
            }
        })(new bare.createInstance(any,null)));
        this._analyzeAll_assertFinished();
        expect(this.context.getResolvedCompilationUnit2(source,source),isNotNull);
        this.resourceProvider.updateFile(this.resourceProvider.convertPath('/test.dart'),newCode);
        contentCache.setContents(source,newCode);
        this.context.handleContentsChanged(source,null,newCode,true);
        expect(this.context.getResolvedCompilationUnit2(source,source),isNull);
    }
    test_implicitAnalysisEvents_added() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let listener : lib4.AnalyzedSourcesListener = new lib4.AnalyzedSourcesListener();
            this.context.implicitAnalysisEvents.listen(listener.onData.bind(listener));
            let sourceA : any = this.newSource('/a.dart',"library a; import 'b.dart';");
            let sourceB : any = this.newSource('/b.dart',"library b;");
            let changeSet : any = new bare.createInstance(any,null);
            changeSet.addedSource(sourceA);
            this.context.applyChanges(changeSet);
            this.context.computeErrors(sourceA);
            await pumpEventQueue();
            listener.expectAnalyzed(sourceB);
        } )());
    }

    test_isClientLibrary_dart() : void {
        let source : any = this.addSource("/test.dart",'import \'dart:html\';\n\nmain() {}');
        expect(this.context.isClientLibrary(source),isFalse);
        expect(this.context.isServerLibrary(source),isFalse);
        this.context.computeLibraryElement(source);
        expect(this.context.isClientLibrary(source),isTrue);
        expect(this.context.isServerLibrary(source),isFalse);
    }
    test_isClientLibrary_html() : void {
        let source : any = this.addSource("/test.html","<html></html>");
        expect(this.context.isClientLibrary(source),isFalse);
    }
    test_isClientLibrary_unknown() : void {
        let source : any = this.newSource("/test.dart");
        expect(this.context.isClientLibrary(source),isFalse);
    }
    test_isServerLibrary_dart() : void {
        let source : any = this.addSource("/test.dart",'library lib;\n\nmain() {}');
        expect(this.context.isClientLibrary(source),isFalse);
        expect(this.context.isServerLibrary(source),isFalse);
        this.context.computeLibraryElement(source);
        expect(this.context.isClientLibrary(source),isFalse);
        expect(this.context.isServerLibrary(source),isTrue);
    }
    test_isServerLibrary_html() : void {
        let source : any = this.addSource("/test.html","<html></html>");
        expect(this.context.isServerLibrary(source),isFalse);
    }
    test_isServerLibrary_unknown() : void {
        let source : any = this.newSource("/test.dart");
        expect(this.context.isServerLibrary(source),isFalse);
    }
    test_onResultInvalidated_removeSource() : void {
        let source : any = this.addSource('/test.dart','main() {}');
        this._analyzeAll_assertFinished();
        let listenerInvoked : boolean = false;
        this.context.onResultChanged(RESOLVED_UNIT).listen((event : any) =>  {
            let eventSource : any = event.target.source;
            expect(event.wasComputed,isFalse);
            expect(event.wasInvalidated,isTrue);
            expect(event.descriptor,RESOLVED_UNIT);
            expect(eventSource,source);
            listenerInvoked = true;
        });
        expect(listenerInvoked,false);
        this.context.applyChanges(((_) : any =>  {
            {
                removedSource(source);
                return _;
            }
        })(new bare.createInstance(any,null)));
        expect(listenerInvoked,isTrue);
    }
    test_onResultInvalidated_setContents() : void {
        let source : any = this.addSource('/test.dart','main() {}');
        this._analyzeAll_assertFinished();
        let listenerInvoked : boolean = false;
        this.context.onResultChanged(RESOLVED_UNIT).listen((event : any) =>  {
            let eventSource : any = event.target.source;
            expect(event.wasComputed,isFalse);
            expect(event.wasInvalidated,isTrue);
            expect(event.descriptor,RESOLVED_UNIT);
            expect(eventSource,source);
            listenerInvoked = true;
        });
        expect(listenerInvoked,false);
        this.context.setContents(source,'class B {}');
        expect(listenerInvoked,isTrue);
    }
    test_parseCompilationUnit_errors() : void {
        let source : any = this.addSource("/lib.dart","library {");
        let compilationUnit : any = this.context.parseCompilationUnit(source);
        expect(compilationUnit,isNotNull);
        let errorInfo = this.context.getErrors(source);
        expect(errorInfo,isNotNull);
        let errors : core.DartList<any> = errorInfo.errors;
        expect(errors,isNotNull);
        expect(errors.length > 0,isTrue);
    }
    test_parseCompilationUnit_exception() : void {
        let source : any = this._addSourceWithException("/test.dart");
        try {
            this.context.parseCompilationUnit(source);
            fail("Expected AnalysisException");
        } catch (__error__) {

            if (is(__error__,any)){
            }
        }
    }
    test_parseCompilationUnit_html() : void {
        let source : any = this.addSource("/test.html","<html></html>");
        expect(this.context.parseCompilationUnit(source),isNull);
    }
    test_parseCompilationUnit_noErrors() : void {
        let source : any = this.addSource("/lib.dart","library lib;");
        let compilationUnit : any = this.context.parseCompilationUnit(source);
        expect(compilationUnit,isNotNull);
        let errorInfo : any = this.context.getErrors(source);
        expect(errorInfo,isNotNull);
        expect(errorInfo.errors,hasLength(0));
    }
    test_parseCompilationUnit_nonExistentSource() : void {
        let source : any = this.newSource('/test.dart');
        this.resourceProvider.deleteFile(this.resourceProvider.convertPath('/test.dart'));
        try {
            this.context.parseCompilationUnit(source);
            fail("Expected AnalysisException because file does not exist");
        } catch (__error__) {

            if (is(__error__,any)){
            }
        }
    }
    test_parseHtmlDocument() : void {
        let source : any = this.addSource("/lib.html","<!DOCTYPE html><html></html>");
        let document : any = this.context.parseHtmlDocument(source);
        expect(document,isNotNull);
    }
    test_parseHtmlUnit_resolveDirectives() : void {
        let libSource : any = this.addSource("/lib.dart",'library lib;\nclass ClassA {}');
        let source : any = this.addSource("/lib.html",'<!DOCTYPE html>\n<html>\n<head>\n  <script type=\'application/dart\'>\n    import \'lib.dart\';\n    ClassA v = null;\n  </script>\n</head>\n<body>\n</body>\n</html>');
        let document : any = this.context.parseHtmlDocument(source);
        expect(document,isNotNull);
        let scripts : core.DartList<any> = this.context.computeResult(source,DART_SCRIPTS);
        expect(scripts,hasLength(1));
        let unit : any = this.context.computeResult(scripts[0],PARSED_UNIT);
        let importNode : any = op(Op.INDEX,unit.directives,0) as any;
        expect(importNode.uriContent,isNotNull);
        expect(importNode.uriSource,libSource);
    }
    test_performAnalysisTask_addPart() : void {
        let libSource : any = this.addSource("/lib.dart",'library lib;\npart \'part.dart\';');
        this._analyzeAll_assertFinished();
        expect(AnalysisContextImplTest._hasAnalysisErrorWithErrorSeverity(this.context.getErrors(libSource)),isTrue,{
            reason : "lib has errors"});
        let partSource : any = this.addSource("/part.dart",'part of lib;\n');
        this._analyzeAll_assertFinished();
        let librariesWithPart : core.DartList<any> = this.context.getLibrariesContaining(partSource);
        expect(librariesWithPart,unorderedEquals(new core.DartList.literal(libSource)));
        expect(AnalysisContextImplTest._hasAnalysisErrorWithErrorSeverity(this.context.getErrors(libSource)),isFalse,{
            reason : "lib doesn't have errors"});
        expect(this.context.getResolvedCompilationUnit2(partSource,libSource),isNotNull,{
            reason : "part resolved"});
    }
    test_performAnalysisTask_changeLibraryContents() : void {
        let libSource : any = this.addSource("/test.dart","library lib; part 'test-part.dart';");
        let partSource : any = this.addSource("/test-part.dart","part of lib;");
        this._analyzeAll_assertFinished();
        expect(this.context.getResolvedCompilationUnit2(libSource,libSource),isNotNull,{
            reason : "library resolved 1"});
        expect(this.context.getResolvedCompilationUnit2(partSource,libSource),isNotNull,{
            reason : "part resolved 1"});
        this.context.setContents(libSource,"library lib;");
        expect(this.context.getResolvedCompilationUnit2(libSource,libSource),isNull,{
            reason : "library changed 2"});
        expect(this.context.getResolvedCompilationUnit2(partSource,libSource),isNull,{
            reason : "part changed 2"});
        this._analyzeAll_assertFinished();
        expect(this.context.getResolvedCompilationUnit2(libSource,libSource),isNotNull,{
            reason : "library resolved 2"});
        expect(this.context.getResolvedCompilationUnit2(partSource,libSource),isNull,{
            reason : "part resolved 2"});
        this.context.setContents(libSource,"library lib; part 'test-part.dart';");
        expect(this.context.getResolvedCompilationUnit2(libSource,libSource),isNull,{
            reason : "library changed 3"});
        expect(this.context.getResolvedCompilationUnit2(partSource,libSource),isNull,{
            reason : "part changed 3"});
        this._analyzeAll_assertFinished();
        expect(this.context.getResolvedCompilationUnit2(libSource,libSource),isNotNull,{
            reason : "library resolved 3"});
        expect(this.context.getResolvedCompilationUnit2(partSource,libSource),isNotNull,{
            reason : "part resolved 3"});
    }
    test_performAnalysisTask_changeLibraryThenPartContents() : void {
        let libSource : any = this.addSource("/test.dart","library lib; part 'test-part.dart';");
        let partSource : any = this.addSource("/test-part.dart","part of lib;");
        this._analyzeAll_assertFinished();
        expect(this.context.getResolvedCompilationUnit2(libSource,libSource),isNotNull,{
            reason : "library resolved 1"});
        expect(this.context.getResolvedCompilationUnit2(partSource,libSource),isNotNull,{
            reason : "part resolved 1"});
        this.context.setContents(libSource,"library lib;");
        expect(this.context.getResolvedCompilationUnit2(libSource,libSource),isNull,{
            reason : "library changed 2"});
        expect(this.context.getResolvedCompilationUnit2(partSource,libSource),isNull,{
            reason : "part changed 2"});
        this._analyzeAll_assertFinished();
        expect(this.context.getResolvedCompilationUnit2(libSource,libSource),isNotNull,{
            reason : "library resolved 2"});
        expect(this.context.getResolvedCompilationUnit2(partSource,libSource),isNull,{
            reason : "part resolved 2"});
        this.context.setContents(partSource,"part of lib; // 1");
        expect(this.context.getResolvedCompilationUnit2(libSource,libSource),isNotNull,{
            reason : "library changed 3"});
        expect(this.context.getResolvedCompilationUnit2(partSource,libSource),isNull,{
            reason : "part changed 3"});
        this._analyzeAll_assertFinished();
        expect(this.context.getResolvedCompilationUnit2(libSource,libSource),isNotNull,{
            reason : "library resolved 3"});
        expect(this.context.getResolvedCompilationUnit2(partSource,libSource),isNull,{
            reason : "part resolved 3"});
    }
    test_performAnalysisTask_changePartContents_makeItAPart() : void {
        let libSource : any = this.addSource("/lib.dart",'library lib;\npart \'part.dart\';\nvoid f(x) {}');
        let partSource : any = this.addSource("/part.dart","void g() { f(null); }");
        this._analyzeAll_assertFinished();
        expect(this.context.getResolvedCompilationUnit2(libSource,libSource),isNotNull,{
            reason : "library resolved 1"});
        expect(this.context.getResolvedCompilationUnit2(partSource,partSource),isNotNull,{
            reason : "part resolved 1"});
        this.context.setContents(partSource,'part of lib;\nvoid g() { f(null); }');
        expect(this.context.getResolvedCompilationUnit2(libSource,libSource),isNull,{
            reason : "library changed 2"});
        expect(this.context.getResolvedCompilationUnit2(partSource,partSource),isNull,{
            reason : "part changed 2"});
        this._analyzeAll_assertFinished();
        expect(this.context.getResolvedCompilationUnit2(libSource,libSource),isNotNull,{
            reason : "library resolved 2"});
        expect(this.context.getResolvedCompilationUnit2(partSource,libSource),isNotNull,{
            reason : "part resolved 2"});
        expect(this.context.getErrors(libSource).errors,hasLength(0));
        expect(this.context.getErrors(partSource).errors,hasLength(0));
    }
    test_performAnalysisTask_changePartContents_makeItNotPart() : void {
        let libSource : any = this.addSource("/lib.dart",'library lib;\npart \'part.dart\';\nvoid f(x) {}');
        let partSource : any = this.addSource("/part.dart",'part of lib;\nvoid g() { f(null); }');
        this._analyzeAll_assertFinished();
        expect(this.context.getErrors(libSource).errors,hasLength(0));
        expect(this.context.getErrors(partSource).errors,hasLength(0));
        this.context.setContents(partSource,'//part of lib;\nvoid g() { f(null); }');
        this._analyzeAll_assertFinished();
        expect(this.context.getErrors(libSource).errors.length != 0,isTrue);
    }
    test_performAnalysisTask_changePartContents_noSemanticChanges() : void {
        let libSource : any = this.addSource("/test.dart","library lib; part 'test-part.dart';");
        let partSource : any = this.addSource("/test-part.dart","part of lib;");
        this._analyzeAll_assertFinished();
        expect(this.context.getResolvedCompilationUnit2(libSource,libSource),isNotNull,{
            reason : "library resolved 1"});
        expect(this.context.getResolvedCompilationUnit2(partSource,libSource),isNotNull,{
            reason : "part resolved 1"});
        this.context.setContents(partSource,"part of lib; // 1");
        expect(this.context.getResolvedCompilationUnit2(libSource,libSource),isNull,{
            reason : "library changed 2"});
        expect(this.context.getResolvedCompilationUnit2(partSource,libSource),isNull,{
            reason : "part changed 2"});
        this._analyzeAll_assertFinished();
        expect(this.context.getResolvedCompilationUnit2(libSource,libSource),isNotNull,{
            reason : "library resolved 2"});
        expect(this.context.getResolvedCompilationUnit2(partSource,libSource),isNotNull,{
            reason : "part resolved 2"});
        this.context.setContents(partSource,"part of lib; // 12");
        expect(this.context.getResolvedCompilationUnit2(libSource,libSource),isNull,{
            reason : "library changed 3"});
        expect(this.context.getResolvedCompilationUnit2(partSource,libSource),isNull,{
            reason : "part changed 3"});
        this._analyzeAll_assertFinished();
        expect(this.context.getResolvedCompilationUnit2(libSource,libSource),isNotNull,{
            reason : "library resolved 3"});
        expect(this.context.getResolvedCompilationUnit2(partSource,libSource),isNotNull,{
            reason : "part resolved 3"});
    }
    test_performAnalysisTask_getContentException_dart() : void {
        let source : any = this._addSourceWithException('test.dart');
        this._analyzeAll_assertFinished();
        let errors : core.DartList<any> = this.context.getErrors(source).errors;
        expect(errors,hasLength(1));
        let error : any = errors[0];
        expect(error.source,same(source));
        expect(error.errorCode,ScannerErrorCode.UNABLE_GET_CONTENT);
    }
    test_performAnalysisTask_getContentException_html() : void {
        let source : any = this._addSourceWithException('test.html');
        this._analyzeAll_assertFinished();
        let errors : core.DartList<any> = this.context.getErrors(source).errors;
        expect(errors,hasLength(1));
        let error : any = errors[0];
        expect(error.source,same(source));
        expect(error.errorCode,ScannerErrorCode.UNABLE_GET_CONTENT);
    }
    test_performAnalysisTask_importedLibraryAdd() : void {
        let libASource : any = this.addSource("/libA.dart","library libA; import 'libB.dart';");
        this._analyzeAll_assertFinished();
        expect(this.context.getResolvedCompilationUnit2(libASource,libASource),isNotNull,{
            reason : "libA resolved 1"});
        expect(AnalysisContextImplTest._hasAnalysisErrorWithErrorSeverity(this.context.getErrors(libASource)),isTrue,{
            reason : "libA has an error"});
        let libBSource : any = this.addSource("/libB.dart","library libB;");
        this._analyzeAll_assertFinished();
        expect(this.context.getResolvedCompilationUnit2(libASource,libASource),isNotNull,{
            reason : "libA resolved 2"});
        expect(this.context.getResolvedCompilationUnit2(libBSource,libBSource),isNotNull,{
            reason : "libB resolved 2"});
        expect(AnalysisContextImplTest._hasAnalysisErrorWithErrorSeverity(this.context.getErrors(libASource)),isFalse,{
            reason : "libA doesn't have errors"});
    }
    test_performAnalysisTask_importedLibraryAdd_html() : void {
        let htmlSource : any = this.addSource("/page.html",'<html><body><script type="application/dart">\n  import \'/libB.dart\';\n  main() {print(\'hello dart\');}\n</script></body></html>');
        this._analyzeAll_assertFinished();
        this.context.computeErrors(htmlSource);
        let libBSource : any = this.addSource("/libB.dart","library libB;");
        this._analyzeAll_assertFinished();
        expect(this.context.getResolvedCompilationUnit2(libBSource,libBSource),isNotNull,{
            reason : "libB resolved 2"});
    }
    test_performAnalysisTask_importedLibraryDelete() : void {
        let libASource : any = this.addSource("/libA.dart","library libA; import 'libB.dart';");
        let libBSource : any = this.addSource("/libB.dart","library libB;");
        this._analyzeAll_assertFinished();
        expect(this.context.getResolvedCompilationUnit2(libASource,libASource),isNotNull,{
            reason : "libA resolved 1"});
        expect(this.context.getResolvedCompilationUnit2(libBSource,libBSource),isNotNull,{
            reason : "libB resolved 1"});
        expect(!AnalysisContextImplTest._hasAnalysisErrorWithErrorSeverity(this.context.getErrors(libASource)),isTrue,{
            reason : "libA doesn't have errors"});
        this._removeSource(libBSource);
        this._analyzeAll_assertFinished();
        expect(this.context.getResolvedCompilationUnit2(libASource,libASource),isNotNull,{
            reason : "libA resolved 2"});
        expect(AnalysisContextImplTest._hasAnalysisErrorWithErrorSeverity(this.context.getErrors(libASource)),isTrue,{
            reason : "libA has an error"});
    }
    test_performAnalysisTask_interruptBy_setContents() : void {
        let sourceA : any = this.addSource('/a.dart','library expectedToFindSemicolon\n');
        let unitA : any = new bare.createInstance(any,null,sourceA,sourceA);
        for(let i : number = 0; i < 10000; i++){
            this.context.performAnalysisTask();
            if (this.context.getResult(unitA,RESOLVED_UNIT3) != null) {
                break;
            }
        }
        this.context.setContents(sourceA,"library semicolonWasAdded;");
        expect(this.context.getResult(unitA,RESOLVED_UNIT3),isNull);
        expect(this.analysisDriver.currentWorkOrder,isNull);
        this._analyzeAll_assertFinished();
        expect(this.context.getErrors(sourceA).errors,isEmpty);
    }
    test_performAnalysisTask_IOException() : void {
        let source : lib5.TestSource = this._addSourceWithException2("/test.dart","library test;");
        source.generateExceptionOnRead = false;
        this._analyzeAll_assertFinished();
        expect(source.readCount,2);
        this._changeSource(source,"");
        source.generateExceptionOnRead = true;
        this._analyzeAll_assertFinished();
        expect(source.readCount,5);
    }
    test_performAnalysisTask_missingPart() : void {
        let source : any = this.addSource("/test.dart","library lib; part 'no-such-file.dart';");
        this._analyzeAll_assertFinished();
        expect(this.context.getLibraryElement(source),isNotNull,{
            reason : "performAnalysisTask failed to compute an element model"});
    }
    test_performAnalysisTask_modifiedAfterParse() : void {
    }
    test_performAnalysisTask_onResultChanged() : void {
        let libraryElementUris : core.DartSet<string> = new core.DartSet<string>();
        let parsedUnitUris : core.DartSet<string> = new core.DartSet<string>();
        let resolvedUnitUris : core.DartSet<string> = new core.DartSet<string>();
        this.context.onResultChanged(LIBRARY_ELEMENT).listen((event : any) =>  {
            expect(event.wasComputed,isTrue);
            expect(event.wasInvalidated,isFalse);
            let librarySource : any = event.target;
            libraryElementUris.add(librarySource.uri.toString());
        });
        this.context.onResultChanged(PARSED_UNIT).listen((event : any) =>  {
            expect(event.wasComputed,isTrue);
            expect(event.wasInvalidated,isFalse);
            let source : any = event.target;
            parsedUnitUris.add(source.uri.toString());
        });
        this.context.onResultChanged(RESOLVED_UNIT).listen((event : any) =>  {
            expect(event.wasComputed,isTrue);
            expect(event.wasInvalidated,isFalse);
            let target : any = event.target;
            let librarySource : any = target.library;
            resolvedUnitUris.add(librarySource.uri.toString());
        });
        this.addSource('/test.dart','main() {}');
        this._analyzeAll_assertFinished();
        let testUri : string = this.resourceProvider.getFile(this.resourceProvider.convertPath('/test.dart')).toUri().toString();
        expect(libraryElementUris,contains(testUri));
        expect(parsedUnitUris,contains(testUri));
        expect(resolvedUnitUris,contains(testUri));
    }
    test_performAnalysisTask_switchPackageVersion() : void {
        this.resourceProvider.newFile('/pkgs/crypto-1/lib/crypto.dart','library crypto;\npart \'src/hash_utils.dart\';\n');
        this.resourceProvider.newFile('/pkgs/crypto-1/lib/src/hash_utils.dart','part of crypto;\nconst _MASK_8 = 0xff;\n');
        this.resourceProvider.newFile('/pkgs/crypto-2/lib/crypto.dart','library crypto;\npart \'src/hash_utils.dart\';\n');
        this.resourceProvider.newFile('/pkgs/crypto-2/lib/src/hash_utils.dart','part of crypto;\nconst _MASK_8 = 0xff;\n');
        this.context.sourceFactory = new bare.createInstance(any,null,new core.DartList.literal<any>(this.sdkResolver,this.resourceResolver,new bare.createInstance(any,null,this.resourceProvider,new core.DartMap.literal([
            ['crypto',new core.DartList.literal(this.resourceProvider.getFolder('/pkgs/crypto-1/lib'))]]))));
        this.addSource("/test.dart",'import \'package:crypto/crypto.dart\';\n');
        this._analyzeAll_assertFinished();
        this.context.sourceFactory = new bare.createInstance(any,null,new core.DartList.literal<any>(this.sdkResolver,this.resourceResolver,new bare.createInstance(any,null,this.resourceProvider,new core.DartMap.literal([
            ['crypto',new core.DartList.literal(this.resourceProvider.getFolder('/pkgs/crypto-2/lib'))]]))));
        this._analyzeAll_assertFinished();
        this._assertNoExceptions();
    }
    test_resolveCompilationUnit_existingElementModel() : void {
        this.prepareAnalysisContext(((_) : any =>  {
            {
                _.strongMode = true;
                return _;
            }
        })(new bare.createInstance(any,null)));
        let source : any = this.addSource('/test.dart','library test;\n\nString topLevelVariable;\nint get topLevelGetter => 0;\nvoid set topLevelSetter(int value) {}\nString topLevelFunction(int i) => \'\';\n\ntypedef String FunctionTypeAlias(int i);\n\nenum EnumeratedType {Invalid, Valid}\n\nclass A {\n  const A(x);\n}\n\n@A(const [(_) => null])\nclass ClassOne {\n  int instanceField;\n  static int staticField;\n\n  ClassOne();\n  ClassOne.named();\n\n  int get instanceGetter => 0;\n  static String get staticGetter => \'\';\n\n  void set instanceSetter(int value) {}\n  static void set staticSetter(int value) {}\n\n  int instanceMethod(int first, [int second = 0]) {\n    int localVariable;\n    int localFunction(String s) {}\n  }\n  static String staticMethod(int first, {int second: 0}) => \'\';\n}\n\nclass ClassTwo {\n  // Implicit no-argument constructor\n}\n\nvoid topLevelFunctionWithLocalFunction() {\n  void localFunction({bool b: false}) {}\n}\n\nvoid functionWithGenericFunctionTypedParam/*<S>*/(/*=T*/ pf/*<T>*/(/*=T*/ e)) {}\nvoid functionWithClosureAsDefaultParam([x = () => null]) {}\n');
        this.context.resolveCompilationUnit2(source,source);
        let firstElement : any = this.context.computeLibraryElement(source);
        let gatherer : _ElementGatherer = new _ElementGatherer();
        firstElement.accept(gatherer);
        let entry : any = this.context.analysisCache.get(new bare.createInstance(any,null,source,source));
        entry.setState(RESOLVED_UNIT1,CacheState.FLUSHED);
        entry.setState(RESOLVED_UNIT2,CacheState.FLUSHED);
        entry.setState(RESOLVED_UNIT3,CacheState.FLUSHED);
        entry.setState(RESOLVED_UNIT4,CacheState.FLUSHED);
        entry.setState(RESOLVED_UNIT5,CacheState.FLUSHED);
        entry.setState(RESOLVED_UNIT6,CacheState.FLUSHED);
        entry.setState(RESOLVED_UNIT7,CacheState.FLUSHED);
        entry.setState(RESOLVED_UNIT8,CacheState.FLUSHED);
        entry.setState(RESOLVED_UNIT9,CacheState.FLUSHED);
        entry.setState(RESOLVED_UNIT10,CacheState.FLUSHED);
        entry.setState(RESOLVED_UNIT11,CacheState.FLUSHED);
        entry.setState(RESOLVED_UNIT12,CacheState.FLUSHED);
        entry.setState(RESOLVED_UNIT,CacheState.FLUSHED);
        this.context.resolveCompilationUnit2(source,source);
        let secondElement : any = this.context.computeLibraryElement(source);
        let comparer : _ElementComparer = new _ElementComparer(gatherer.elements);
        secondElement.accept(comparer);
        comparer.expectNoDifferences();
    }
    test_resolveCompilationUnit_import_relative() : void {
        let sourceA : any = this.addSource("/libA.dart","library libA; import 'libB.dart'; class A{}");
        this.addSource("/libB.dart","library libB; class B{}");
        let compilationUnit : any = this.context.resolveCompilationUnit2(sourceA,sourceA);
        expect(compilationUnit,isNotNull);
        let library : any = resolutionMap.elementDeclaredByCompilationUnit(compilationUnit).library;
        let importedLibraries : core.DartList<any> = library.importedLibraries;
        this.assertNamedElements(importedLibraries,new core.DartList.literal("dart.core","libB"));
    }
    test_resolveCompilationUnit_import_relative_cyclic() : void {
        let sourceA : any = this.addSource("/libA.dart","library libA; import 'libB.dart'; class A{}");
        this.addSource("/libB.dart","library libB; import 'libA.dart'; class B{}");
        let compilationUnit : any = this.context.resolveCompilationUnit2(sourceA,sourceA);
        expect(compilationUnit,isNotNull);
        let library : any = resolutionMap.elementDeclaredByCompilationUnit(compilationUnit).library;
        let importedLibraries : core.DartList<any> = library.importedLibraries;
        this.assertNamedElements(importedLibraries,new core.DartList.literal("dart.core","libB"));
    }
    test_resolveCompilationUnit_library() : void {
        let source : any = this.addSource("/lib.dart","library lib;");
        let library : any = this.context.computeLibraryElement(source);
        let compilationUnit : any = this.context.resolveCompilationUnit(source,library);
        expect(compilationUnit,isNotNull);
        expect(compilationUnit.element,isNotNull);
    }
    test_resolveCompilationUnit_source() : void {
        let source : any = this.addSource("/lib.dart","library lib;");
        let compilationUnit : any = this.context.resolveCompilationUnit2(source,source);
        expect(compilationUnit,isNotNull);
    }
    test_setAnalysisOptions() : void {
        let options : any = new bare.createInstance(any,null);
        options.dart2jsHint = false;
        options.hint = false;
        this.context.analysisOptions = options;
        let result : any = this.context.analysisOptions;
        expect(result.dart2jsHint,options.dart2jsHint);
        expect(result.hint,options.hint);
    }
    test_setAnalysisPriorityOrder() : void {
        let priorityCount : number = 4;
        let sources : core.DartList<any> = new core.DartList.literal<any>();
        for(let index : number = 0; index < priorityCount; index++){
            sources.add(this.addSource(`/lib.dart${index}`,""));
        }
        this.context.analysisPriorityOrder = sources;
        expect(this._getPriorityOrder(this.context).length,priorityCount);
    }
    test_setAnalysisPriorityOrder_empty() : void {
        this.context.analysisPriorityOrder = new core.DartList.literal<any>();
    }
    test_setAnalysisPriorityOrder_nonEmpty() : void {
        let sources : core.DartList<any> = new core.DartList.literal<any>();
        sources.add(this.addSource("/lib.dart","library lib;"));
        this.context.analysisPriorityOrder = sources;
    }
    test_setAnalysisPriorityOrder_resetAnalysisDriver() : void {
        let source : any = this.addSource('/lib.dart','library lib;');
        this.context.performAnalysisTask();
        expect(this.context.driver.currentWorkOrder,isNotNull);
        this.context.analysisPriorityOrder = new core.DartList.literal<any>(source);
        expect(this.context.driver.currentWorkOrder,isNull);
        this.context.performAnalysisTask();
        expect(this.context.driver.currentWorkOrder,isNotNull);
    }
    test_setChangedContents_libraryWithPart() : async.Future<any> {
        let options : any = new bare.createInstance(any,null);
        options.incremental = true;
        this.context.analysisOptions = options;
        let listener : lib4.SourcesChangedListener = new lib4.SourcesChangedListener();
        this.context.onSourcesChanged.listen(listener.onData.bind(listener));
        let oldCode : string = 'library lib;\npart \'part.dart\';\nint a = 0;';
        let librarySource : any = this.addSource("/lib.dart",oldCode);
        let partContents : string = 'part of lib;\nint b = a;';
        let partSource : any = this.addSource("/part.dart",partContents);
        let element : any = this.context.computeLibraryElement(librarySource);
        let unit : any = this.context.resolveCompilationUnit(librarySource,element);
        expect(unit,isNotNull);
        let offset : number = new core.DartString(oldCode).indexOf("int a") + 4;
        let newCode : string = 'library lib;\npart \'part.dart\';\nint ya = 0;';
        this.context.setChangedContents(librarySource,newCode,offset,0,1);
        expect(this.context.getContents(librarySource).data,newCode);
        expect(this.context.getResolvedCompilationUnit2(partSource,librarySource),isNull);
        return pumpEventQueue().then((_ : any) =>  {
            listener.assertEvent({
                wereSourcesAdded : true});
            listener.assertEvent({
                wereSourcesAdded : true});
            listener.assertEvent({
                changedSources : new core.DartList.literal(librarySource)});
            listener.assertNoMoreEvents();
        });
    }
    test_setChangedContents_notResolved() : void {
        let options : any = new bare.createInstance(any,null,this.context.analysisOptions);
        options.incremental = true;
        this.context.analysisOptions = options;
        let oldCode : string = 'library lib;\nint a = 0;';
        let librarySource : any = this.addSource("/lib.dart",oldCode);
        let offset : number = new core.DartString(oldCode).indexOf("int a") + 4;
        let newCode : string = 'library lib;\nint ya = 0;';
        this.context.setChangedContents(librarySource,newCode,offset,0,1);
        expect(this.context.getContents(librarySource).data,newCode);
    }
    test_setContents_libraryWithPart() : async.Future<any> {
        let listener : lib4.SourcesChangedListener = new lib4.SourcesChangedListener();
        this.context.onSourcesChanged.listen(listener.onData.bind(listener));
        let libraryContents1 : string = 'library lib;\npart \'part.dart\';\nint a = 0;';
        let librarySource : any = this.addSource("/lib.dart",libraryContents1);
        let partContents1 : string = 'part of lib;\nint b = a;';
        let partSource : any = this.addSource("/part.dart",partContents1);
        this.context.computeLibraryElement(librarySource);
        let libraryContents2 : string = 'library lib;\npart \'part.dart\';\nint aa = 0;';
        this.context.setContents(librarySource,libraryContents2);
        expect(this.context.getResolvedCompilationUnit2(partSource,librarySource),isNull);
        return pumpEventQueue().then((_ : any) =>  {
            listener.assertEvent({
                wereSourcesAdded : true});
            listener.assertEvent({
                wereSourcesAdded : true});
            listener.assertEvent({
                changedSources : new core.DartList.literal(librarySource)});
            listener.assertNoMoreEvents();
        });
    }
    test_setContents_null() : void {
        if (this.context != null) return;
        throw 'is this test used by the new analysis driver?';
        let librarySource : any = this.addSource("/lib.dart",'library lib;\nint a = 0;');
        this.context.setContents(librarySource,'// different');
        this.context.computeLibraryElement(librarySource);
        this.context.setContents(librarySource,null);
        expect(this.context.getResolvedCompilationUnit2(librarySource,librarySource),isNull);
    }
    test_setContents_unchanged_consistentModificationTime() : void {
        let contents : string = "// foo";
        let source : any = this.addSource("/test.dart",contents);
        this.context.setContents(source,contents);
        this._analyzeAll_assertFinished();
        {
            let result : any = this.context.performAnalysisTask();
            expect(result.changeNotices,isNull);
        }
        this.context.setContents(source,contents);
        {
            let result : any = this.context.performAnalysisTask();
            expect(result.changeNotices,isNull);
        }
    }
    test_setSourceFactory() : void {
        expect(this.context.sourceFactory,this.sourceFactory);
        let factory : any = new bare.createInstance(any,null,new core.DartList.literal());
        this.context.sourceFactory = factory;
        expect(this.context.sourceFactory,factory);
    }
    test_updateAnalysis() : void {
        expect(this.context.sourcesNeedingProcessing,isEmpty);
        let source : any = this.newSource('/test.dart');
        let delta : any = new bare.createInstance(any,null);
        delta.setAnalysisLevel(source,AnalysisLevel.ALL);
        this.context.applyAnalysisDelta(delta);
        expect(this.context.sourcesNeedingProcessing,contains(source));
        delta = new bare.createInstance(any,null);
        delta.setAnalysisLevel(source,AnalysisLevel.NONE);
        this.context.applyAnalysisDelta(delta);
        expect(this.context.sourcesNeedingProcessing.contains(source),isFalse);
    }
    test_validateCacheConsistency_deletedFile() : void {
        let resourceProvider : any = new bare.createInstance(any,null);
        let pathA : string = resourceProvider.convertPath('/a.dart');
        let pathB : string = resourceProvider.convertPath('/b.dart');
        let fileA = resourceProvider.newFile(pathA,"");
        let fileB = resourceProvider.newFile(pathB,"import 'a.dart';");
        let sourceA : any = fileA.createSource();
        let sourceB : any = fileB.createSource();
        this.context.applyChanges(((_) : any =>  {
            {
                addedSource(sourceA);
                addedSource(sourceB);
                return _;
            }
        })(new bare.createInstance(any,null)));
        this._analyzeAll_assertFinished();
        resourceProvider.deleteFile(pathA);
        this._analyzeAll_assertFinished();
    }
    xtest_performAnalysisTask_stress() : void {
        let maxCacheSize : number = 4;
        let options : any = new bare.createInstance(any,null,this.context.analysisOptions);
        this.context.analysisOptions = options;
        let sourceCount : number = maxCacheSize + 2;
        let sources : core.DartList<any> = new core.DartList.literal<any>();
        let changeSet : any = new bare.createInstance(any,null);
        for(let i : number = 0; i < sourceCount; i++){
            let source : any = this.addSource(`/lib${i}.dart`,`library lib${i};`);
            sources.add(source);
            changeSet.addedSource(source);
        }
        this.context.applyChanges(changeSet);
        this.context.analysisPriorityOrder = sources;
        for(let i : number = 0; i < 1000; i++){
            let notice : core.DartList<any> = this.context.performAnalysisTask().changeNotices;
            if (notice == null) {
                break;
            }
        }
        let notice : core.DartList<any> = this.context.performAnalysisTask().changeNotices;
        if (notice != null) {
            fail("performAnalysisTask failed to terminate after analyzing all sources");
        }
    }
    _addSourceWithException(fileName : string) : lib5.TestSource {
        return this._addSourceWithException2(fileName,"");
    }
    _addSourceWithException2(fileName : string,contents : string) : lib5.TestSource {
        let source : lib5.TestSource = new lib5.TestSource(fileName,contents);
        source.generateExceptionOnRead = true;
        let changeSet : any = new bare.createInstance(any,null);
        changeSet.addedSource(source);
        this.context.applyChanges(changeSet);
        return source;
    }
    _analyzeAll_assertFinished(maxIterations? : number) : void {
        maxIterations = maxIterations || 512;
        for(let i : number = 0; i < maxIterations; i++){
            let notice : core.DartList<any> = this.context.performAnalysisTask().changeNotices;
            if (notice == null) {
                return;
            }
        }
        fail("performAnalysisTask failed to terminate after analyzing all sources");
    }
    _assertNoExceptions() : void {
        let iterator : any = this.analysisCache.iterator();
        let exceptionsStr : string = '';
        while (iterator.moveNext()){
            let exception : any = iterator.value.exception;
            if (exception != null) {
                let target : any = iterator.key;
                exceptionsStr += `============= key: ${target}   source: ${target.source}\n`;
                exceptionsStr += exception.toString();
                exceptionsStr += '\n';
            }
        }
        if (new core.DartString(exceptionsStr).isNotEmpty) {
            fail(exceptionsStr);
        }
    }
    _changeSource(source : lib5.TestSource,contents : string) : void {
        source.setContents(contents);
        let changeSet : any = new bare.createInstance(any,null);
        changeSet.changedSource(source);
        this.context.applyChanges(changeSet);
    }
    _checkFlushSingleResolvedUnit(code : string,validate : (unitElement : any,reason : string) => void) : void {
        this.prepareAnalysisContext(((_) : any =>  {
            {
                _.strongMode = true;
                return _;
            }
        })(new bare.createInstance(any,null)));
        let path : string = this.resourceProvider.convertPath('/test.dart');
        let source : any = this.resourceProvider.newFile(path,code).createSource();
        this.context.applyChanges(((_) : any =>  {
            {
                addedSource(source);
                return _;
            }
        })(new bare.createInstance(any,null)));
        let unitElement : any = this.context.resolveCompilationUnit2(source,source).element;
        validate(unitElement,'initial state');
        for(let descriptor of RESOLVED_UNIT_RESULTS) {
            this.context.analysisCache.flush((target : any,result : any) =>  {
                return op(Op.EQUALS,target.source,source) && op(Op.EQUALS,result,descriptor);
            });
            this.context.computeResult(new bare.createInstance(any,null,source,source),descriptor);
            validate(unitElement,`after flushing ${descriptor}`);
        }
    }
    _findClass(unit : any,className : string) : any {
        for(let classElement of unit.types) {
            if (op(Op.EQUALS,classElement.displayName,className)) {
                return classElement;
            }
        }
        return null;
    }
    _flushAst(source : any) : void {
        let entry : any = this.context.getCacheEntry(new bare.createInstance(any,null,source,source));
        entry.setState(RESOLVED_UNIT,CacheState.FLUSHED);
    }
    _getPriorityOrder(context : any) : core.DartList<any> {
        return context.test_priorityOrder;
    }
    _performPendingAnalysisTasks(maxTasks? : number) : void {
        maxTasks = maxTasks || 512;
        for(let i : number = 0; this.context.performAnalysisTask().hasMoreWork; i++){
            if (i > maxTasks) {
                fail('Analysis did not terminate.');
            }
        }
    }
    _removeSource(source : any) : void {
        this.resourceProvider.deleteFile(source.fullName);
        let changeSet : any = new bare.createInstance(any,null);
        changeSet.removedSource(source);
        this.context.applyChanges(changeSet);
    }
    static _hasAnalysisErrorWithErrorSeverity(errorInfo : any) : boolean {
        let errors : core.DartList<any> = errorInfo.errors;
        for(let analysisError of errors) {
            if (op(Op.EQUALS,analysisError.errorCode.errorSeverity,ErrorSeverity.ERROR)) {
                return true;
            }
        }
        return false;
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    AnalysisContextImplTest() {
    }
}

export namespace _AnalysisContextImplTest_Source_exists_true {
    export type Constructors = lib5.TestSource.Constructors | '_AnalysisContextImplTest_Source_exists_true';
    export type Interface = Omit<_AnalysisContextImplTest_Source_exists_true, Constructors>;
}
@DartClass
export class _AnalysisContextImplTest_Source_exists_true extends lib5.TestSource {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    exists() : boolean {
        return true;
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _AnalysisContextImplTest_Source_exists_true() {
    }
}

export namespace _AnalysisContextImplTest_Source_getModificationStamp_fromSource {
    export type Constructors = lib5.TestSource.Constructors | '_AnalysisContextImplTest_Source_getModificationStamp_fromSource';
    export type Interface = Omit<_AnalysisContextImplTest_Source_getModificationStamp_fromSource, Constructors>;
}
@DartClass
export class _AnalysisContextImplTest_Source_getModificationStamp_fromSource extends lib5.TestSource {
    stamp : number;

    constructor(stamp : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _AnalysisContextImplTest_Source_getModificationStamp_fromSource(stamp : number) {
        this.stamp = stamp;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get modificationStamp() : number {
        return this.stamp;
    }
}

export namespace _AnalysisContextImplTest_Source_getModificationStamp_overridden {
    export type Constructors = lib5.TestSource.Constructors | '_AnalysisContextImplTest_Source_getModificationStamp_overridden';
    export type Interface = Omit<_AnalysisContextImplTest_Source_getModificationStamp_overridden, Constructors>;
}
@DartClass
export class _AnalysisContextImplTest_Source_getModificationStamp_overridden extends lib5.TestSource {
    stamp : number;

    constructor(stamp : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _AnalysisContextImplTest_Source_getModificationStamp_overridden(stamp : number) {
        this.stamp = stamp;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get modificationStamp() : number {
        return this.stamp;
    }
}

export namespace _AnalysisContextImplTest_test_applyChanges_removeContainer {
    export type Constructors = '_AnalysisContextImplTest_test_applyChanges_removeContainer';
    export type Interface = Omit<_AnalysisContextImplTest_test_applyChanges_removeContainer, Constructors>;
}
@DartClass
@Implements(any)
export class _AnalysisContextImplTest_test_applyChanges_removeContainer implements any.Interface {
    libB : any;

    constructor(libB : any) {
    }
    @defaultConstructor
    _AnalysisContextImplTest_test_applyChanges_removeContainer(libB : any) {
        this.libB = libB;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    contains(source : any) : boolean {
        return op(Op.EQUALS,source,this.libB);
    }
}

export namespace _ElementComparer {
    export type Constructors = '_ElementComparer';
    export type Interface = Omit<_ElementComparer, Constructors>;
}
@DartClass
export class _ElementComparer extends any {
    previousElements : core.DartMap<any,any>;

    overwrittenCount : number;

    buffer : core.DartStringBuffer;

    constructor(previousElements : core.DartMap<any,any>) {
    }
    @defaultConstructor
    _ElementComparer(previousElements : core.DartMap<any,any>) {
        this.overwrittenCount = 0;
        this.buffer = new core.DartStringBuffer();
        this.previousElements = previousElements;
    }
    expectNoDifferences() : void {
        if (this.overwrittenCount > 0) {
            fail(`Found ${this.overwrittenCount} overwritten elements.${this.buffer}`);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitElement(element : any) : void {
        let previousElement : any = this.previousElements.get(element);
        let ok : boolean = _ElementComparer._expectedIdentical(element) ? core.identical(previousElement,element) : op(Op.EQUALS,previousElement,element);
        if (!ok) {
            if (this.overwrittenCount == 0) {
                this.buffer.writeln();
            }
            this.overwrittenCount++;
            this.buffer.writeln('Overwritten element:');
            let currentElement : any = element;
            while (currentElement != null){
                this.buffer.write('  ');
                this.buffer.writeln(currentElement.toString());
                currentElement = currentElement.enclosingElement;
            }
        }
        super.visitElement(element);
    }
    static _expectedIdentical(element : any) : boolean {
        while (element != null){
            if (is(element, any) || is(element, any) || is(element, any) && is(element.enclosingElement, any)) {
                return false;
            }
            element = element.enclosingElement;
        }
        return true;
    }
}

export namespace _ElementGatherer {
    export type Constructors = '_ElementGatherer';
    export type Interface = Omit<_ElementGatherer, Constructors>;
}
@DartClass
export class _ElementGatherer extends any {
    elements : core.DartMap<any,any>;

    constructor() {
    }
    @defaultConstructor
    _ElementGatherer() {
        this.elements = new core.DartHashMap<any,any>();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitElement(element : any) : void {
        this.elements.set(element,element);
        super.visitElement(element);
    }
}

export class properties {
}
