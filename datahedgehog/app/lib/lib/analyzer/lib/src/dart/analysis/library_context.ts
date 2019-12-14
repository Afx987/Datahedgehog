/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/dart/analysis/library_context.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace LibraryContext {
    export type Constructors = '_';
    export type Interface = Omit<LibraryContext, Constructors>;
}
@DartClass
export class LibraryContext {
    store : any;

    _analysisContext : any;

    @namedFactory
    static $forSingleLibrary(targetLibrary : any,logger : any,sdkBundle : any,byteStore : any,options : any,declaredVariables : any,sourceFactory : any,externalSummaries : any,fsState : any) : LibraryContext {
        return logger.run('Create library context',() =>  {
            let libraries : core.DartMap<string,any> = new core.DartMap.literal([
            ]);
            let store : any = new bare.createInstance(any,null,new core.DartList.literal<string>());
            if (externalSummaries != null) {
                store.addStore(externalSummaries);
            }
            if (sdkBundle != null) {
                store.addBundle(null,sdkBundle);
            }
            var appendLibraryFiles : (library : any) => void = (library : any) : void =>  {
                if (!libraries.containsKey(library.uriStr)) {
                    if (sdkBundle != null && op(Op.EQUALS,library.uri.scheme,'dart')) {
                        return;
                    }
                    if (library.isInExternalSummaries) {
                        return;
                    }
                    libraries.set(library.uriStr,library);
                    store.addUnlinkedUnit(library.uriStr,library.unlinked);
                    for(let part of library.partedFiles) {
                        store.addUnlinkedUnit(part.uriStr,part.unlinked);
                    }
                    library.importedFiles.forEach(appendLibraryFiles);
                    library.exportedFiles.forEach(appendLibraryFiles);
                }
            };
            logger.run('Append library files',() =>  {
                return appendLibraryFiles(targetLibrary);
            });
            let libraryUrisToLink : core.DartSet<string> = new core.DartSet<string>();
            logger.run('Load linked bundles',() =>  {
                for(let library of libraries.values) {
                    if (library.exists || op(Op.EQUALS,library,targetLibrary)) {
                        let key : string = `${library.transitiveSignature}.linked`;
                        let bytes : core.DartList<number> = byteStore.get(key);
                        if (bytes != null) {
                            let linked : any = new bare.createInstance(any,null,bytes);
                            store.addLinkedLibrary(library.uriStr,linked);
                        }else {
                            libraryUrisToLink.add(library.uriStr);
                        }
                    }
                }
                let numOfLoaded : number = libraries.length - libraryUrisToLink.length;
                logger.writeln(`Loaded ${numOfLoaded} linked bundles.`);
            });
            let linkedLibraries : core.DartMap<string,any> = new core.DartMap.literal([
            ]);
            logger.run('Link bundles',() =>  {
                linkedLibraries = link(libraryUrisToLink,(uri : string) =>  {
                    let linkedLibrary : any = op(Op.INDEX,store.linkedMap,uri);
                    return linkedLibrary;
                },(uri : string) =>  {
                    let unlinkedUnit : any = op(Op.INDEX,store.unlinkedMap,uri);
                    return unlinkedUnit;
                },(_ : any) =>  {
                    return null;
                },options.strongMode);
                logger.writeln(`Linked ${linkedLibraries.length} bundles.`);
            });
            linkedLibraries.forEach((uri : any,linkedBuilder : any) =>  {
                let library : any = libraries.get(uri);
                let key : string = `${library.transitiveSignature}.linked`;
                let bytes : core.DartList<number> = linkedBuilder.toBuffer();
                let linked : any = new bare.createInstance(any,null,bytes);
                store.addLinkedLibrary(uri,linked);
                byteStore.put(key,bytes);
            });
            let analysisContext : any = LibraryContext._createAnalysisContext(options,declaredVariables,sourceFactory,store);
            analysisContext.contentCache = new _ContentCacheWrapper(fsState);
            return new LibraryContext._(store,analysisContext);
        });
    }
    static forSingleLibrary : new(targetLibrary : any,logger : any,sdkBundle : any,byteStore : any,options : any,declaredVariables : any,sourceFactory : any,externalSummaries : any,fsState : any) => LibraryContext;

    @namedConstructor
    _(store : any,_analysisContext : any) {
        this.store = store;
        this._analysisContext = _analysisContext;
    }
    static _ : new(store : any,_analysisContext : any) => LibraryContext;

    computeUnitElement(librarySource : any,unitSource : any) : any {
        return this._analysisContext.computeResult(new bare.createInstance(any,null,librarySource,unitSource),COMPILATION_UNIT_ELEMENT);
    }
    dispose() : void {
        this._analysisContext.dispose();
    }
    resolveUnit(librarySource : any,unitSource : any) : ResolutionResult {
        let resolvedUnit : any = this._analysisContext.resolveCompilationUnit2(unitSource,librarySource);
        let errors : core.DartList<any> = this._analysisContext.computeErrors(unitSource);
        return new ResolutionResult(resolvedUnit,errors);
    }
    static resynthesizeLibraryElement(analysisOptions : any,declaredVariables : any,sourceFactory : any,store : any,uri : string) : any {
        let analysisContext : any = LibraryContext._createAnalysisContext(analysisOptions,declaredVariables,sourceFactory,store);
        try {
            return new bare.createInstance(any,null,analysisContext,sourceFactory,analysisOptions.strongMode,store).getLibraryElement(uri);
        } finally {
            analysisContext.dispose();
        }
    }
    static _createAnalysisContext(analysisOptions : any,declaredVariables : any,sourceFactory : any,store : any) : any {
        let analysisContext : any = AnalysisEngine.instance.createAnalysisContext();
        analysisContext.useSdkCachePartition = false;
        analysisContext.analysisOptions = analysisOptions;
        analysisContext.declaredVariables.addAll(declaredVariables);
        analysisContext.sourceFactory = sourceFactory.clone();
        analysisContext.resultProvider = new bare.createInstance(any,null,analysisContext,store);
        return analysisContext;
    }
}

export namespace ResolutionResult {
    export type Constructors = 'ResolutionResult';
    export type Interface = Omit<ResolutionResult, Constructors>;
}
@DartClass
export class ResolutionResult {
    resolvedUnit : any;

    errors : core.DartList<any>;

    constructor(resolvedUnit : any,errors : core.DartList<any>) {
    }
    @defaultConstructor
    ResolutionResult(resolvedUnit : any,errors : core.DartList<any>) {
        this.resolvedUnit = resolvedUnit;
        this.errors = errors;
    }
}

export namespace _ContentCacheWrapper {
    export type Constructors = '_ContentCacheWrapper';
    export type Interface = Omit<_ContentCacheWrapper, Constructors>;
}
@DartClass
@Implements(any)
export class _ContentCacheWrapper implements any.Interface {
    fsState : any;

    constructor(fsState : any) {
    }
    @defaultConstructor
    _ContentCacheWrapper(fsState : any) {
        this.fsState = fsState;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    accept(visitor : any) : void {
        throw new core.UnimplementedError();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getContents(source : any) : string {
        return this._getFileForSource(source).content;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getExists(source : any) : boolean {
        if (source.isInSystemLibrary) {
            return true;
        }
        let uriStr : string = source.uri.toString();
        if (this.fsState.externalSummaries.hasUnlinkedUnit(uriStr)) {
            return true;
        }
        return this._getFileForSource(source).exists;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getModificationStamp(source : any) : number {
        if (source.isInSystemLibrary) {
            return 0;
        }
        return this._getFileForSource(source).exists ? 0 : -1;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    setContents(source : any,contents : string) : string {
        throw new core.UnimplementedError();
    }
    _getFileForSource(source : any) : any {
        let path : string = source.fullName;
        return this.fsState.getFileForPath(path);
    }
}

export class properties {
}
