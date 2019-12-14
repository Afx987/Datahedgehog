/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/src/summary/package_bundle_reader_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts/dart/uri";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(ResynthesizerResultProviderTest);
        defineReflectiveTests(SummaryDataStoreTest);
    });
};
export var _namespaceWithParts : (parts : core.DartList<string>) => any = (parts : core.DartList<string>) : any =>  {
    let namespace : any = new _UnlinkedPublicNamespaceMock();
    when(namespace.parts).thenReturn(parts);
    return namespace;
};
export namespace ResynthesizerResultProviderTest {
    export type Constructors = 'ResynthesizerResultProviderTest';
    export type Interface = Omit<ResynthesizerResultProviderTest, Constructors>;
}
@DartClass
export class ResynthesizerResultProviderTest {
    sourceFactory : any;

    context : any;

    cachePartition : any;

    source1 : any;

    source2 : any;

    source3 : any;

    entry1 : any;

    entry2 : any;

    entry3 : any;

    bundle : any;

    unlinkedUnit1 : any;

    unlinkedUnit2 : any;

    linkedLibrary : any;

    dataStore : any;

    provider : _TestResynthesizerResultProvider;

    setUp() : void {
        this.cachePartition = new bare.createInstance(any,null,this.context);
        this.entry1 = new bare.createInstance(any,null,this.source1);
        this.entry2 = new bare.createInstance(any,null,this.source2);
        this.entry3 = new bare.createInstance(any,null,this.source3);
        this.cachePartition.put(this.entry1);
        this.cachePartition.put(this.entry2);
        this.cachePartition.put(this.entry3);
        when(this.sourceFactory.resolveUri(anyObject,'package:p1/u1.dart')).thenReturn(this.source1);
        when(this.sourceFactory.resolveUri(anyObject,'package:p1/u2.dart')).thenReturn(this.source2);
        when(this.context.sourceFactory).thenReturn(this.sourceFactory);
        when(this.bundle.unlinkedUnitUris).thenReturn(new core.DartList.literal<string>('package:p1/u1.dart','package:p1/u2.dart'));
        when(this.bundle.unlinkedUnits).thenReturn(new core.DartList.literal<any>(this.unlinkedUnit1,this.unlinkedUnit2));
        when(this.bundle.linkedLibraryUris).thenReturn(new core.DartList.literal<string>('package:p1/u1.dart'));
        when(this.bundle.linkedLibraries).thenReturn(new core.DartList.literal<any>(this.linkedLibrary));
        this.dataStore.addBundle('/p1.ds',this.bundle);
        when(this.unlinkedUnit1.isPartOf).thenReturn(false);
        when(this.unlinkedUnit2.isPartOf).thenReturn(true);
        when(this.unlinkedUnit1.publicNamespace).thenReturn(_namespaceWithParts(new core.DartList.literal('package:p1/u2.dart')));
        when(this.unlinkedUnit2.publicNamespace).thenReturn(_namespaceWithParts(new core.DartList.literal()));
        this.provider = new _TestResynthesizerResultProvider(this.context,this.dataStore);
        this.provider.sourcesWithResults.add(this.source1);
        this.provider.sourcesWithResults.add(this.source2);
    }
    test_compute_CONTAINING_LIBRARIES_librarySource() {
        let success : boolean = this.provider.compute(this.entry1,CONTAINING_LIBRARIES);
        expect(success,isTrue);
        expect(this.entry1.getValue(CONTAINING_LIBRARIES),unorderedEquals(new core.DartList.literal(this.source1)));
    }
    test_compute_CONTAINING_LIBRARIES_partSource() {
        let success : boolean = this.provider.compute(this.entry2,CONTAINING_LIBRARIES);
        expect(success,isTrue);
        expect(this.entry2.getValue(CONTAINING_LIBRARIES),unorderedEquals(new core.DartList.literal(this.source1)));
    }
    test_compute_LINE_INFO_emptyLineStarts() {
        when(this.unlinkedUnit1.lineStarts).thenReturn(new core.DartList.literal<number>());
        let success : boolean = this.provider.compute(this.entry1,LINE_INFO);
        expect(success,isFalse);
    }
    test_compute_LINE_INFO_hasLineStarts() {
        when(this.unlinkedUnit1.lineStarts).thenReturn(new core.DartList.literal<number>(10,20,30));
        let success : boolean = this.provider.compute(this.entry1,LINE_INFO);
        expect(success,isTrue);
        expect(this.entry1.getValue(LINE_INFO).lineStarts,new core.DartList.literal<number>(10,20,30));
    }
    test_compute_MODIFICATION_TIME_hasResult() {
        let success : boolean = this.provider.compute(this.entry1,MODIFICATION_TIME);
        expect(success,isTrue);
        expect(this.entry1.getValue(MODIFICATION_TIME),0);
    }
    test_compute_MODIFICATION_TIME_noResult() {
        let success : boolean = this.provider.compute(this.entry3,MODIFICATION_TIME);
        expect(success,isFalse);
        expect(this.entry3.getState(MODIFICATION_TIME),CacheState.INVALID);
    }
    test_compute_SOURCE_KIND_librarySource() {
        let success : boolean = this.provider.compute(this.entry1,SOURCE_KIND);
        expect(success,isTrue);
        expect(this.entry1.getValue(SOURCE_KIND),SourceKind.LIBRARY);
    }
    test_compute_SOURCE_KIND_librarySource_isPartOf() {
        when(this.unlinkedUnit1.isPartOf).thenReturn(true);
        let success : boolean = this.provider.compute(this.entry1,SOURCE_KIND);
        expect(success,isTrue);
        expect(this.entry1.getValue(SOURCE_KIND),SourceKind.PART);
    }
    test_compute_SOURCE_KIND_noResults() {
        let success : boolean = this.provider.compute(this.entry3,SOURCE_KIND);
        expect(success,isFalse);
        expect(this.entry3.getState(SOURCE_KIND),CacheState.INVALID);
    }
    test_compute_SOURCE_KIND_partSource() {
        let success : boolean = this.provider.compute(this.entry2,SOURCE_KIND);
        expect(success,isTrue);
        expect(this.entry2.getValue(SOURCE_KIND),SourceKind.PART);
    }
    constructor() {
    }
    @defaultConstructor
    ResynthesizerResultProviderTest() {
        this.sourceFactory = new _SourceFactoryMock();
        this.context = new _InternalAnalysisContextMock();
        this.source1 = new _SourceMock('package:p1/u1.dart','/p1/lib/u1.dart');
        this.source2 = new _SourceMock('package:p1/u2.dart','/p1/lib/u2.dart');
        this.source3 = new _SourceMock('package:p2/u1.dart','/p2/lib/u1.dart');
        this.bundle = new _PackageBundleMock();
        this.unlinkedUnit1 = new _UnlinkedUnitMock();
        this.unlinkedUnit2 = new _UnlinkedUnitMock();
        this.linkedLibrary = new _LinkedLibraryMock();
        this.dataStore = new bare.createInstance(any,null,new core.DartList.literal<string>());
    }
}

export namespace SummaryDataStoreTest {
    export type Constructors = 'SummaryDataStoreTest';
    export type Interface = Omit<SummaryDataStoreTest, Constructors>;
}
@DartClass
export class SummaryDataStoreTest {
    dataStore : any;

    bundle1 : any;

    bundle2 : any;

    unlinkedUnit11 : any;

    unlinkedUnit12 : any;

    unlinkedUnit21 : any;

    linkedLibrary1 : any;

    linkedLibrary2 : any;

    _setupDataStore(store : any) : void {
        when(this.unlinkedUnit11.publicNamespace).thenReturn(_namespaceWithParts(new core.DartList.literal('package:p1/u2.dart')));
        when(this.unlinkedUnit12.publicNamespace).thenReturn(_namespaceWithParts(new core.DartList.literal()));
        when(this.bundle1.unlinkedUnitUris).thenReturn(new core.DartList.literal<string>('package:p1/u1.dart','package:p1/u2.dart'));
        when(this.bundle1.unlinkedUnits).thenReturn(new core.DartList.literal<any>(this.unlinkedUnit11,this.unlinkedUnit12));
        when(this.bundle1.linkedLibraryUris).thenReturn(new core.DartList.literal<string>('package:p1/u1.dart'));
        when(this.bundle1.linkedLibraries).thenReturn(new core.DartList.literal<any>(this.linkedLibrary1));
        when(this.bundle1.apiSignature).thenReturn('signature1');
        store.addBundle('/p1.ds',this.bundle1);
        when(this.unlinkedUnit21.publicNamespace).thenReturn(_namespaceWithParts(new core.DartList.literal()));
        when(this.bundle2.unlinkedUnitUris).thenReturn(new core.DartList.literal<string>('package:p2/u1.dart'));
        when(this.bundle2.unlinkedUnits).thenReturn(new core.DartList.literal<any>(this.unlinkedUnit21));
        when(this.bundle2.linkedLibraryUris).thenReturn(new core.DartList.literal<string>('package:p2/u1.dart'));
        when(this.bundle2.linkedLibraries).thenReturn(new core.DartList.literal<any>(this.linkedLibrary2));
        when(this.bundle2.apiSignature).thenReturn('signature2');
        store.addBundle('/p2.ds',this.bundle2);
    }
    setUp() : void {
        this._setupDataStore(this.dataStore);
    }
    test_addBundle() {
        expect(this.dataStore.bundles,unorderedEquals(new core.DartList.literal(this.bundle1,this.bundle2)));
        expect(op(Op.INDEX,this.dataStore.dependencies,0).summaryPath,'/p1.ds');
        expect(op(Op.INDEX,this.dataStore.dependencies,0).apiSignature,'signature1');
        expect(op(Op.INDEX,this.dataStore.dependencies,0).includedPackageNames,new core.DartList.literal('p1'));
        expect(op(Op.INDEX,this.dataStore.dependencies,0).includesFileUris,false);
        expect(op(Op.INDEX,this.dataStore.dependencies,0).includesDartUris,false);
        expect(op(Op.INDEX,this.dataStore.dependencies,1).summaryPath,'/p2.ds');
        expect(op(Op.INDEX,this.dataStore.dependencies,1).apiSignature,'signature2');
        expect(op(Op.INDEX,this.dataStore.dependencies,1).includedPackageNames,new core.DartList.literal('p2'));
        expect(op(Op.INDEX,this.dataStore.dependencies,1).includesFileUris,false);
        expect(op(Op.INDEX,this.dataStore.dependencies,1).includesDartUris,false);
        expect(this.dataStore.uriToSummaryPath,containsPair('package:p1/u1.dart','/p1.ds'));
        expect(this.dataStore.unlinkedMap,hasLength(3));
        expect(this.dataStore.unlinkedMap,containsPair('package:p1/u1.dart',this.unlinkedUnit11));
        expect(this.dataStore.unlinkedMap,containsPair('package:p1/u2.dart',this.unlinkedUnit12));
        expect(this.dataStore.unlinkedMap,containsPair('package:p2/u1.dart',this.unlinkedUnit21));
        expect(this.dataStore.linkedMap,hasLength(2));
        expect(this.dataStore.linkedMap,containsPair('package:p1/u1.dart',this.linkedLibrary1));
        expect(this.dataStore.linkedMap,containsPair('package:p2/u1.dart',this.linkedLibrary2));
    }
    test_addBundle_dartUris() {
        let bundle : any = new _PackageBundleMock();
        when(bundle.unlinkedUnitUris).thenReturn(new core.DartList.literal<string>('dart:core'));
        when(bundle.unlinkedUnits).thenReturn(new core.DartList.literal<any>(this.unlinkedUnit11));
        when(bundle.linkedLibraryUris).thenReturn(new core.DartList.literal<string>('dart:core'));
        when(bundle.linkedLibraries).thenReturn(new core.DartList.literal<any>(this.linkedLibrary1));
        when(bundle.apiSignature).thenReturn('signature');
        this.dataStore.addBundle('/p3.ds',bundle);
        expect(this.dataStore.dependencies.last.includedPackageNames,new core.DartList.literal());
        expect(this.dataStore.dependencies.last.includesFileUris,false);
        expect(this.dataStore.dependencies.last.includesDartUris,true);
    }
    test_addBundle_fileUris() {
        let bundle : any = new _PackageBundleMock();
        when(bundle.unlinkedUnitUris).thenReturn(new core.DartList.literal<string>('file:/foo.dart'));
        when(bundle.unlinkedUnits).thenReturn(new core.DartList.literal<any>(this.unlinkedUnit11));
        when(bundle.linkedLibraryUris).thenReturn(new core.DartList.literal<string>('file:/foo.dart'));
        when(bundle.linkedLibraries).thenReturn(new core.DartList.literal<any>(this.linkedLibrary1));
        when(bundle.apiSignature).thenReturn('signature');
        this.dataStore.addBundle('/p3.ds',bundle);
        expect(this.dataStore.dependencies.last.includedPackageNames,new core.DartList.literal());
        expect(this.dataStore.dependencies.last.includesFileUris,true);
        expect(this.dataStore.dependencies.last.includesDartUris,false);
    }
    test_addBundle_multiProject() {
        let bundle : any = new _PackageBundleMock();
        when(bundle.unlinkedUnitUris).thenReturn(new core.DartList.literal<string>('package:p2/u1.dart','package:p1/u1.dart'));
        when(bundle.unlinkedUnits).thenReturn(new core.DartList.literal<any>(this.unlinkedUnit21,this.unlinkedUnit11));
        when(bundle.linkedLibraryUris).thenReturn(new core.DartList.literal<string>('package:p2/u1.dart','package:p1/u1.dart'));
        when(bundle.linkedLibraries).thenReturn(new core.DartList.literal<any>(this.linkedLibrary2,this.linkedLibrary1));
        when(bundle.apiSignature).thenReturn('signature');
        expect(() =>  {
            return this.dataStore.addBundle('/p3.ds',bundle);
        },throwsA(properties.isConflictingSummaryException));
        expect(this.dataStore.dependencies.last.includedPackageNames,new core.DartList.literal('p1','p2'));
    }
    test_addBundle_multiProjectOverlap() {
        let dataStore2 : any = new bare.createInstance(any,null,new core.DartList.literal<string>(),{
            recordDependencyInfo : true,disallowOverlappingSummaries : false});
        this._setupDataStore(dataStore2);
        let bundle : any = new _PackageBundleMock();
        when(bundle.unlinkedUnitUris).thenReturn(new core.DartList.literal<string>('package:p2/u1.dart','package:p1/u1.dart'));
        when(bundle.unlinkedUnits).thenReturn(new core.DartList.literal<any>(this.unlinkedUnit21,this.unlinkedUnit11));
        when(bundle.linkedLibraryUris).thenReturn(new core.DartList.literal<string>('package:p2/u1.dart','package:p1/u1.dart'));
        when(bundle.linkedLibraries).thenReturn(new core.DartList.literal<any>(this.linkedLibrary2,this.linkedLibrary1));
        when(bundle.apiSignature).thenReturn('signature');
        dataStore2.addBundle('/p3.ds',bundle);
        expect(dataStore2.dependencies.last.includedPackageNames,new core.DartList.literal('p1','p2'));
    }
    test_getContainingLibraryUris_libraryUri() {
        let partUri : string = 'package:p1/u1.dart';
        let uris : core.DartList<string> = this.dataStore.getContainingLibraryUris(partUri);
        expect(uris,unorderedEquals(new core.DartList.literal(partUri)));
    }
    test_getContainingLibraryUris_partUri() {
        let partUri : string = 'package:p1/u2.dart';
        let uris : core.DartList<string> = this.dataStore.getContainingLibraryUris(partUri);
        expect(uris,unorderedEquals(new core.DartList.literal('package:p1/u1.dart')));
    }
    test_getContainingLibraryUris_unknownUri() {
        let partUri : string = 'package:notInStore/foo.dart';
        let uris : core.DartList<string> = this.dataStore.getContainingLibraryUris(partUri);
        expect(uris,isNull);
    }
    constructor() {
    }
    @defaultConstructor
    SummaryDataStoreTest() {
        this.dataStore = new bare.createInstance(any,null,new core.DartList.literal<string>(),{
            recordDependencyInfo : true,disallowOverlappingSummaries : true});
        this.bundle1 = new _PackageBundleMock();
        this.bundle2 = new _PackageBundleMock();
        this.unlinkedUnit11 = new _UnlinkedUnitMock();
        this.unlinkedUnit12 = new _UnlinkedUnitMock();
        this.unlinkedUnit21 = new _UnlinkedUnitMock();
        this.linkedLibrary1 = new _LinkedLibraryMock();
        this.linkedLibrary2 = new _LinkedLibraryMock();
    }
}

export namespace _InternalAnalysisContextMock {
    export type Constructors = '_InternalAnalysisContextMock';
    export type Interface = Omit<_InternalAnalysisContextMock, Constructors>;
}
@DartClass
@Implements(any)
export class _InternalAnalysisContextMock extends any implements any.Interface {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _InternalAnalysisContextMock() {
    }
}

export namespace _LinkedLibraryMock {
    export type Constructors = '_LinkedLibraryMock';
    export type Interface = Omit<_LinkedLibraryMock, Constructors>;
}
@DartClass
@Implements(any)
export class _LinkedLibraryMock extends any implements any.Interface {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _LinkedLibraryMock() {
    }
}

export namespace _PackageBundleMock {
    export type Constructors = '_PackageBundleMock';
    export type Interface = Omit<_PackageBundleMock, Constructors>;
}
@DartClass
@Implements(any)
export class _PackageBundleMock extends any implements any.Interface {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _PackageBundleMock() {
    }
}

export namespace _SourceFactoryMock {
    export type Constructors = '_SourceFactoryMock';
    export type Interface = Omit<_SourceFactoryMock, Constructors>;
}
@DartClass
@Implements(any)
export class _SourceFactoryMock extends any implements any.Interface {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _SourceFactoryMock() {
    }
}

export namespace _SourceMock {
    export type Constructors = '_SourceMock';
    export type Interface = Omit<_SourceMock, Constructors>;
}
@DartClass
@Implements(any)
export class _SourceMock implements any.Interface {
    uri : lib3.Uri;

    fullName : string;

    constructor(uriStr : string,fullName : string) {
    }
    @defaultConstructor
    _SourceMock(uriStr : string,fullName : string) {
        this.uri = lib3.Uri.parse(uriStr);
        this.fullName = fullName;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get librarySource() : any {
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get source() : any {
        return this;
    }
    noSuchMethod(invocation : core.Invocation) {
        return super.noSuchMethod(invocation);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `${this.uri} (${this.fullName})`;
    }
}

export namespace _TestResynthesizerResultProvider {
    export type Constructors = '_TestResynthesizerResultProvider';
    export type Interface = Omit<_TestResynthesizerResultProvider, Constructors>;
}
@DartClass
export class _TestResynthesizerResultProvider extends any {
    sourcesWithResults : core.DartSet<any>;

    constructor(context : any,dataStore : any) {
    }
    @defaultConstructor
    _TestResynthesizerResultProvider(context : any,dataStore : any) {
        this.sourcesWithResults = new core.DartSet<any>();
        super.DartObject(context,dataStore);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    hasResultsForSource(source : any) : boolean {
        return this.sourcesWithResults.contains(source);
    }
}

export namespace _UnlinkedPublicNamespaceMock {
    export type Constructors = '_UnlinkedPublicNamespaceMock';
    export type Interface = Omit<_UnlinkedPublicNamespaceMock, Constructors>;
}
@DartClass
@Implements(any)
export class _UnlinkedPublicNamespaceMock extends any implements any.Interface {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _UnlinkedPublicNamespaceMock() {
    }
}

export namespace _UnlinkedUnitMock {
    export type Constructors = '_UnlinkedUnitMock';
    export type Interface = Omit<_UnlinkedUnitMock, Constructors>;
}
@DartClass
@Implements(any)
export class _UnlinkedUnitMock extends any implements any.Interface {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _UnlinkedUnitMock() {
    }
}

export namespace _ConflictingSummaryException {
    export type Constructors = '_ConflictingSummaryException';
    export type Interface = Omit<_ConflictingSummaryException, Constructors>;
}
@DartClass
export class _ConflictingSummaryException extends any {
    constructor() {
    }
    @defaultConstructor
    _ConflictingSummaryException() {
        super.DartObject("ConflictingSummaryException");
    }
    matches(item : any,matchState : core.DartMap<any,any>) : boolean {
        return is(item, any);
    }
}

export class properties {
    private static __$isConflictingSummaryException : any;
    static get isConflictingSummaryException() : any { 
        if (this.__$isConflictingSummaryException===undefined) {
            this.__$isConflictingSummaryException = new _ConflictingSummaryException();
        }
        return this.__$isConflictingSummaryException;
    }
    static set isConflictingSummaryException(__$value : any)  { 
        this.__$isConflictingSummaryException = __$value;
    }

}
