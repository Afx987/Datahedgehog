/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/summary/package_bundle_reader.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as math from "@dart2ts/dart/math";
import * as io from "@dart2ts/dart/io";
import * as lib5 from "@dart2ts/dart/uri";

export namespace ConflictingSummaryException {
    export type Constructors = 'ConflictingSummaryException';
    export type Interface = Omit<ConflictingSummaryException, Constructors>;
}
@DartClass
@Implements(core.Exception)
export class ConflictingSummaryException implements core.Exception.Interface {
    duplicatedUri : string;

    summary1Uri : string;

    summary2Uri : string;

    _message : string;

    constructor(summaryPaths : core.DartIterable<string>,duplicatedUri : string,summary1Uri : string,summary2Uri : string) {
    }
    @defaultConstructor
    ConflictingSummaryException(summaryPaths : core.DartIterable<string>,duplicatedUri : string,summary1Uri : string,summary2Uri : string) {
        this.duplicatedUri = duplicatedUri;
        this.summary1Uri = summary1Uri;
        this.summary2Uri = summary2Uri;
        let prefix = this._commonPrefix(summaryPaths.toList());
        this._message = `These summaries conflict because they overlap:\n- ${new core.DartString(this.summary1Uri).substring(prefix)}\n- ${new core.DartString(this.summary2Uri).substring(prefix)}\nBoth contain the file: ${this.duplicatedUri}.\nThis typically indicates an invalid build rule where two or more targets\ninclude the same source.\n  `;
    }
    toString() : string {
        return this._message;
    }
    _commonPrefix(strings : core.DartList<string>) : number {
        if (strings.isEmpty) return 0;
        let first = strings.first;
        let common : number = new core.DartString(first).length;
        for(let i : number = 1; i < strings.length; ++i){
            let current = strings[i];
            common = math.min(common,new core.DartString(current).length);
            for(let j : number = 0; j < common; ++j){
                if (first[j] != current[j]) {
                    common = j;
                    if (common == 0) return 0;
                    break;
                }
            }
        }
        let last = new core.DartString(new core.DartString(first).substring(0,common)).lastIndexOf(io.Platform.pathSeparator);
        return last < 0 ? 0 : last + 1;
    }
}

export namespace InSummaryPackageUriResolver {
    export type Constructors = 'InSummaryPackageUriResolver';
    export type Interface = Omit<InSummaryPackageUriResolver, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'dart:core',type : 'deprecated',value : {
        arguments : [],namedArguments : {
        }}})
export class InSummaryPackageUriResolver extends any {
    _dataStore : SummaryDataStore;

    constructor(_dataStore : SummaryDataStore) {
    }
    @defaultConstructor
    InSummaryPackageUriResolver(_dataStore : SummaryDataStore) {
        this._dataStore = _dataStore;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    resolveAbsolute(uri : lib5.Uri,actualUri? : lib5.Uri) : any {
        actualUri = ( actualUri ) || ( uri );
        let uriString : string = uri.toString();
        let unit : any = this._dataStore.unlinkedMap.get(uriString);
        if (unit != null) {
            let summaryPath : string = this._dataStore.uriToSummaryPath.get(uriString);
            return new InSummarySource(actualUri,summaryPath);
        }
        return null;
    }
}

export namespace InSummarySource {
    export type Constructors = 'InSummarySource';
    export type Interface = Omit<InSummarySource, Constructors>;
}
@DartClass
export class InSummarySource extends any {
    summaryPath : string;

    constructor(uri : lib5.Uri,summaryPath : string) {
    }
    @defaultConstructor
    InSummarySource(uri : lib5.Uri,summaryPath : string) {
        super.DartObject(uri);
        this.summaryPath = summaryPath;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get contents() : any {
        return new bare.createInstance(any,null,0,'');
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get modificationStamp() : number {
        return 0;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get uriKind() : any {
        return UriKind.PACKAGE_URI;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    exists() : boolean {
        return true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return uri.toString();
    }
}

export namespace InSummaryUriResolver {
    export type Constructors = 'InSummaryUriResolver';
    export type Interface = Omit<InSummaryUriResolver, Constructors>;
}
@DartClass
export class InSummaryUriResolver extends any {
    resourceProvider : any;

    _dataStore : SummaryDataStore;

    constructor(resourceProvider : any,_dataStore : SummaryDataStore) {
    }
    @defaultConstructor
    InSummaryUriResolver(resourceProvider : any,_dataStore : SummaryDataStore) {
        this.resourceProvider = resourceProvider;
        this._dataStore = _dataStore;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    resolveAbsolute(uri : lib5.Uri,actualUri? : lib5.Uri) : any {
        actualUri = ( actualUri ) || ( uri );
        let uriString : string = uri.toString();
        let unit : any = this._dataStore.unlinkedMap.get(uriString);
        if (unit != null) {
            let summaryPath : string = this._dataStore.uriToSummaryPath.get(uriString);
            return new InSummarySource(actualUri,summaryPath);
        }
        return null;
    }
}

export namespace ResynthesizerResultProvider {
    export type Constructors = 'ResynthesizerResultProvider';
    export type Interface = Omit<ResynthesizerResultProvider, Constructors>;
}
@DartClass
export class ResynthesizerResultProvider extends any {
    context : any;

    _dataStore : SummaryDataStore;

    _resynthesizer : StoreBasedSummaryResynthesizer;

    constructor(context : any,_dataStore : SummaryDataStore) {
    }
    @defaultConstructor
    ResynthesizerResultProvider(context : any,_dataStore : SummaryDataStore) {
        this.context = context;
        this._dataStore = _dataStore;
    }
    get resynthesizer() : any {
        return this._resynthesizer;
    }
    addBundle(path : string,bundle : any) : void {
        this._dataStore.addBundle(path,bundle);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    compute(entry : any,result : any) : boolean {
        let target : any = entry.target;
        if (op(Op.EQUALS,result,TYPE_PROVIDER)) {
            entry.setValue(result as any,this._resynthesizer.typeProvider,TargetedResult.EMPTY_LIST);
            return true;
        }
        if (is(target, any) && op(Op.EQUALS,result,LINE_INFO)) {
            let uriString : string = target.uri.toString();
            let unlinkedUnit : any = this._dataStore.unlinkedMap.get(uriString);
            if (unlinkedUnit != null) {
                let lineStarts : core.DartList<number> = unlinkedUnit.lineStarts;
                if (lineStarts.isNotEmpty) {
                    let lineInfo : any = new bare.createInstance(any,null,lineStarts);
                    entry.setValue(result as any,lineInfo,TargetedResult.EMPTY_LIST);
                    return true;
                }
            }
            return false;
        }
        if (!this.hasResultsForSource((target.librarySource || target.source))) {
            return false;
        }
        if (op(Op.EQUALS,result,CONSTANT_EXPRESSION_RESOLVED) && is(target, any)) {
            entry.setValue(result as any,true,TargetedResult.EMPTY_LIST);
            return true;
        }
        if (is(target, any)) {
            let uriString : string = target.uri.toString();
            if (op(Op.EQUALS,result,LIBRARY_ELEMENT1) || op(Op.EQUALS,result,LIBRARY_ELEMENT2) || op(Op.EQUALS,result,LIBRARY_ELEMENT3) || op(Op.EQUALS,result,LIBRARY_ELEMENT4) || op(Op.EQUALS,result,LIBRARY_ELEMENT5) || op(Op.EQUALS,result,LIBRARY_ELEMENT6) || op(Op.EQUALS,result,LIBRARY_ELEMENT7) || op(Op.EQUALS,result,LIBRARY_ELEMENT8) || op(Op.EQUALS,result,LIBRARY_ELEMENT9) || op(Op.EQUALS,result,LIBRARY_ELEMENT)) {
                let libraryElement : any = this.resynthesizer.getLibraryElement(uriString);
                entry.setValue(result as any,libraryElement,TargetedResult.EMPTY_LIST);
                return true;
            }else if (op(Op.EQUALS,result,READY_LIBRARY_ELEMENT2) || op(Op.EQUALS,result,READY_LIBRARY_ELEMENT6) || op(Op.EQUALS,result,READY_LIBRARY_ELEMENT7)) {
                entry.setValue(result as any,true,TargetedResult.EMPTY_LIST);
                return true;
            }else if (op(Op.EQUALS,result,MODIFICATION_TIME)) {
                entry.setValue(result as any,0,TargetedResult.EMPTY_LIST);
                return true;
            }else if (op(Op.EQUALS,result,SOURCE_KIND)) {
                let unlinked : any = this._dataStore.unlinkedMap.get(uriString);
                if (unlinked != null) {
                    entry.setValue(result as any,unlinked.isPartOf ? SourceKind.PART : SourceKind.LIBRARY,TargetedResult.EMPTY_LIST);
                    return true;
                }
                return false;
            }else if (op(Op.EQUALS,result,CONTAINING_LIBRARIES)) {
                let libraryUriStrings : core.DartList<string> = this._dataStore.getContainingLibraryUris(uriString);
                if (libraryUriStrings != null) {
                    let librarySources : core.DartList<any> = libraryUriStrings.map((libraryUriString : any) =>  {
                        return this.context.sourceFactory.resolveUri(target,libraryUriString);
                    }).toList({
                        growable : false});
                    entry.setValue(result as any,librarySources,TargetedResult.EMPTY_LIST);
                    return true;
                }
                return false;
            }
        }else if (is(target, any)) {
            if (op(Op.EQUALS,result,CREATED_RESOLVED_UNIT1) || op(Op.EQUALS,result,CREATED_RESOLVED_UNIT2) || op(Op.EQUALS,result,CREATED_RESOLVED_UNIT3) || op(Op.EQUALS,result,CREATED_RESOLVED_UNIT4) || op(Op.EQUALS,result,CREATED_RESOLVED_UNIT5) || op(Op.EQUALS,result,CREATED_RESOLVED_UNIT6) || op(Op.EQUALS,result,CREATED_RESOLVED_UNIT7) || op(Op.EQUALS,result,CREATED_RESOLVED_UNIT8) || op(Op.EQUALS,result,CREATED_RESOLVED_UNIT9) || op(Op.EQUALS,result,CREATED_RESOLVED_UNIT10) || op(Op.EQUALS,result,CREATED_RESOLVED_UNIT11)) {
                entry.setValue(result as any,true,TargetedResult.EMPTY_LIST);
                return true;
            }
            if (op(Op.EQUALS,result,COMPILATION_UNIT_ELEMENT)) {
                let libraryUri : string = target.library.uri.toString();
                let unitUri : string = target.unit.uri.toString();
                let unit : any = this.resynthesizer.getElement(new bare.createInstance(any,null,new core.DartList.literal<string>(libraryUri,unitUri)));
                if (unit != null) {
                    entry.setValue(result as any,unit,TargetedResult.EMPTY_LIST);
                    return true;
                }
            }
        }else if (is(target, any)) {
            if (op(Op.EQUALS,result,INFERRED_STATIC_VARIABLE)) {
                entry.setValue(result as any,target,TargetedResult.EMPTY_LIST);
                return true;
            }
        }
        return false;
    }
    createResynthesizer() : void {
        this._resynthesizer = new StoreBasedSummaryResynthesizer(this.context,this.context.sourceFactory,this.context.analysisOptions.strongMode,this._dataStore);
    }
    @Abstract
    hasResultsForSource(source : any) : boolean{ throw 'abstract'}
}

export namespace StoreBasedSummaryResynthesizer {
    export type Constructors = 'StoreBasedSummaryResynthesizer';
    export type Interface = Omit<StoreBasedSummaryResynthesizer, Constructors>;
}
@DartClass
export class StoreBasedSummaryResynthesizer extends any {
    _dataStore : SummaryDataStore;

    constructor(context : any,sourceFactory : any,strongMode : boolean,_dataStore : SummaryDataStore) {
    }
    @defaultConstructor
    StoreBasedSummaryResynthesizer(context : any,sourceFactory : any,strongMode : boolean,_dataStore : SummaryDataStore) {
        super.DartObject(context,sourceFactory,strongMode);
        this._dataStore = _dataStore;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getLinkedSummary(uri : string) : any {
        return this._dataStore.linkedMap.get(uri);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getUnlinkedSummary(uri : string) : any {
        return this._dataStore.unlinkedMap.get(uri);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    hasLibrarySummary(uri : string) : boolean {
        let linkedLibrary : any = this._dataStore.linkedMap.get(uri);
        return linkedLibrary != null;
    }
}

export namespace SummaryDataStore {
    export type Constructors = 'SummaryDataStore';
    export type Interface = Omit<SummaryDataStore, Constructors>;
}
@DartClass
export class SummaryDataStore {
    bundles : core.DartList<any>;

    dependencies : core.DartList<any>;

    unlinkedMap : core.DartMap<string,any>;

    linkedMap : core.DartMap<string,any>;

    uriToSummaryPath : core.DartMap<string,string>;

    _summaryPaths : core.DartIterable<string>;

    _disallowOverlappingSummaries : boolean;

    constructor(summaryPaths : core.DartIterable<string>,_namedArguments? : {recordDependencyInfo? : boolean,disallowOverlappingSummaries? : boolean,resourceProvider? : any}) {
    }
    @defaultConstructor
    SummaryDataStore(summaryPaths : core.DartIterable<string>,_namedArguments? : {recordDependencyInfo? : boolean,disallowOverlappingSummaries? : boolean,resourceProvider? : any}) {
        let {recordDependencyInfo,disallowOverlappingSummaries,resourceProvider} = Object.assign({
            "recordDependencyInfo" : false,
            "disallowOverlappingSummaries" : false}, _namedArguments );
        this.bundles = new core.DartList.literal<any>();
        this.unlinkedMap = new core.DartMap.literal([
        ]);
        this.linkedMap = new core.DartMap.literal([
        ]);
        this.uriToSummaryPath = new core.DartMap.literal([
        ]);
        this._summaryPaths = summaryPaths;
        this._disallowOverlappingSummaries = disallowOverlappingSummaries;
        this.dependencies = recordDependencyInfo ? new core.DartList.literal<any>() : null;
        summaryPaths.forEach((path : string) =>  {
            return this._fillMaps(path,resourceProvider);
        });
    }
    addBundle(path : string,bundle : any) : void {
        this.bundles.add(bundle);
        if (this.dependencies != null) {
            let includedPackageNames : core.DartSet<string> = new core.DartSet<string>();
            let includesDartUris : boolean = false;
            let includesFileUris : boolean = false;
            for(let uriString of bundle.unlinkedUnitUris) {
                let uri : lib5.Uri = lib5.Uri.parse(uriString);
                let scheme : string = uri.scheme;
                if (scheme == 'package') {
                    let pathSegments : core.DartList<string> = uri.pathSegments;
                    includedPackageNames.add(pathSegments.isEmpty ? '' : pathSegments[0]);
                }else if (scheme == 'file') {
                    includesFileUris = true;
                }else if (scheme == 'dart') {
                    includesDartUris = true;
                }
            }
            this.dependencies.add(new bare.createInstance(any,null,{
                includedPackageNames : ((_) : core.DartList<string> =>  {
                    {
                        _.sort();
                        return _;
                    }
                })(includedPackageNames.toList()),includesDartUris : includesDartUris,includesFileUris : includesFileUris,apiSignature : bundle.apiSignature,summaryPath : path}));
        }
        for(let i : number = 0; i < bundle.unlinkedUnitUris.length; i++){
            let uri : string = op(Op.INDEX,bundle.unlinkedUnitUris,i);
            if (this._disallowOverlappingSummaries && this.uriToSummaryPath.containsKey(uri) && (this.uriToSummaryPath.get(uri) != path)) {
                throw new ConflictingSummaryException(this._summaryPaths,uri,this.uriToSummaryPath.get(uri),path);
            }
            this.uriToSummaryPath.set(uri,path);
            this.addUnlinkedUnit(uri,op(Op.INDEX,bundle.unlinkedUnits,i));
        }
        for(let i : number = 0; i < bundle.linkedLibraryUris.length; i++){
            let uri : string = op(Op.INDEX,bundle.linkedLibraryUris,i);
            this.addLinkedLibrary(uri,op(Op.INDEX,bundle.linkedLibraries,i));
        }
    }
    addLinkedLibrary(uri : string,linkedLibrary : any) : void {
        this.linkedMap.set(uri,linkedLibrary);
    }
    addStore(other : SummaryDataStore) : void {
        this.unlinkedMap.addAll(other.unlinkedMap);
        this.linkedMap.addAll(other.linkedMap);
    }
    addUnlinkedUnit(uri : string,unlinkedUnit : any) : void {
        this.unlinkedMap.set(uri,unlinkedUnit);
    }
    getContainingLibraryUris(unitUriString : string) : core.DartList<string> {
        if (this.linkedMap.containsKey(unitUriString)) {
            return new core.DartList.literal<string>(unitUriString);
        }
        let libraryUriStrings : core.DartList<string> = new core.DartList.literal<string>();
        this.unlinkedMap.forEach((unlinkedUnitUriString : any,unlinkedUnit : any) =>  {
            let libraryUri : lib5.Uri = lib5.Uri.parse(unlinkedUnitUriString);
            for(let partUriString of unlinkedUnit.publicNamespace.parts) {
                let partUri : lib5.Uri = lib5.Uri.parse(partUriString);
                let partAbsoluteUriString : string = resolveRelativeUri(libraryUri,partUri).toString();
                if (partAbsoluteUriString == unitUriString) {
                    libraryUriStrings.add(unlinkedUnitUriString);
                }
            }
        });
        return libraryUriStrings.isNotEmpty ? libraryUriStrings : null;
    }
    hasUnlinkedUnit(uri : string) : boolean {
        return this.unlinkedMap.containsKey(uri);
    }
    _fillMaps(path : string,resourceProvider : any) : void {
        let buffer : core.DartList<number>;
        if (resourceProvider != null) {
            let file = resourceProvider.getFile(path);
            buffer = file.readAsBytesSync();
        }else {
            let file : io.File = new io.File(path);
            buffer = file.readAsBytesSync();
        }
        let bundle : any = new bare.createInstance(any,null,buffer);
        this.addBundle(path,bundle);
    }
}

export namespace InputPackagesResultProvider {
    export type Constructors = ResynthesizerResultProvider.Constructors | 'InputPackagesResultProvider';
    export type Interface = Omit<InputPackagesResultProvider, Constructors>;
}
@DartClass
export class InputPackagesResultProvider extends ResynthesizerResultProvider {
    constructor(context : any,dataStore : SummaryDataStore) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    InputPackagesResultProvider(context : any,dataStore : SummaryDataStore) {
        super.ResynthesizerResultProvider(context,dataStore);
        this.createResynthesizer();
        context.typeProvider = this.resynthesizer.typeProvider;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    hasResultsForSource(source : any) : boolean {
        let uriString : string = source.uri.toString();
        return this.resynthesizer.hasLibrarySummary(uriString);
    }
}

export class properties {
}
