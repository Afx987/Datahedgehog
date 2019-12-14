/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/dart/analysis/library_analyzer.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts/dart/uri";

export namespace LibraryAnalyzer {
    export type Constructors = 'LibraryAnalyzer';
    export type Interface = Omit<LibraryAnalyzer, Constructors>;
}
@DartClass
export class LibraryAnalyzer {
    _analysisOptions : any;

    _declaredVariables : any;

    _sourceFactory : any;

    _fsState : any;

    _store : any;

    _library : any;

    _typeProvider : any;

    _context : any;

    _resynthesizer : any;

    _libraryElement : any;

    _fileToLineInfo : core.DartMap<any,any>;

    _fileToIgnoreInfo : core.DartMap<any,any>;

    _errorListeners : core.DartMap<any,any>;

    _errorReporters : core.DartMap<any,any>;

    _usedImportedElementsList : core.DartList<any>;

    _usedLocalElementsList : core.DartList<any>;

    _fileToPendingErrors : core.DartMap<any,core.DartList<any>>;

    _constants : core.DartList<any>;

    constructor(_analysisOptions : any,_declaredVariables : any,_sourceFactory : any,_fsState : any,_store : any,_library : any) {
    }
    @defaultConstructor
    LibraryAnalyzer(_analysisOptions : any,_declaredVariables : any,_sourceFactory : any,_fsState : any,_store : any,_library : any) {
        this._fileToLineInfo = new core.DartMap.literal([
        ]);
        this._fileToIgnoreInfo = new core.DartMap.literal([
        ]);
        this._errorListeners = new core.DartMap.literal([
        ]);
        this._errorReporters = new core.DartMap.literal([
        ]);
        this._usedImportedElementsList = new core.DartList.literal();
        this._usedLocalElementsList = new core.DartList.literal();
        this._fileToPendingErrors = new core.DartMap.literal([
        ]);
        this._constants = new core.DartList.literal();
        this._analysisOptions = _analysisOptions;
        this._declaredVariables = _declaredVariables;
        this._sourceFactory = _sourceFactory;
        this._fsState = _fsState;
        this._store = _store;
        this._library = _library;
    }
    analyze() : core.DartMap<any,UnitAnalysisResult> {
        let units : core.DartMap<any,any> = new core.DartMap.literal([
        ]);
        units.set(this._library,this._parse(this._library));
        for(let part of this._library.partedFiles) {
            units.set(part,this._parse(part));
        }
        units.forEach((file : any,unit : any) =>  {
            this._resolveUriBasedDirectives(file,unit);
        });
        this._createAnalysisContext();
        try {
            this._resynthesizer = new bare.createInstance(any,null,this._context,this._sourceFactory,this._analysisOptions.strongMode,this._store);
            this._typeProvider = this._resynthesizer.typeProvider;
            this._context.typeProvider = this._typeProvider;
            this._libraryElement = this._resynthesizer.getLibraryElement(this._library.uriStr);
            this._resolveDirectives(units);
            units.forEach((file : any,unit : any) =>  {
                this._resolveFile(file,unit);
                this._computePendingMissingRequiredParameters(file,unit);
            });
            this._computeConstants();
            units.forEach((file : any,unit : any) =>  {
                this._computeVerifyErrors(file,unit);
            });
            if (this._analysisOptions.hint) {
                units.forEach((file : any,unit : any) =>  {
                    {
                        let visitor = new bare.createInstance(any,null,this._libraryElement);
                        unit.accept(visitor);
                        this._usedLocalElementsList.add(visitor.usedElements);
                    }
                    {
                        let visitor = new bare.createInstance(any,null,this._libraryElement);
                        unit.accept(visitor);
                        this._usedImportedElementsList.add(visitor.usedElements);
                    }
                });
                units.forEach((file : any,unit : any) =>  {
                    this._computeHints(file,unit);
                });
            }
            if (this._analysisOptions.lint) {
                units.forEach((file : any,unit : any) =>  {
                    this._computeLints(file,unit);
                });
            }
        } finally {
            this._context.dispose();
        }
        let results : core.DartMap<any,UnitAnalysisResult> = new core.DartMap.literal([
        ]);
        units.forEach((file : any,unit : any) =>  {
            let errors : core.DartList<any> = this._getErrorListener(file).errors;
            errors = this._filterIgnoredErrors(file,errors);
            results.set(file,new UnitAnalysisResult(file,unit,errors));
        });
        return results;
    }
    _computeConstants() : void {
        let evaluationEngine : any = new bare.createInstance(any,null,this._typeProvider,this._declaredVariables,{
            typeSystem : this._context.typeSystem});
        let nodes : core.DartList<_ConstantNode> = new core.DartList.literal();
        let nodeMap : core.DartMap<any,_ConstantNode> = new core.DartMap.literal([
        ]);
        for(let constant of this._constants) {
            let node = new _ConstantNode(evaluationEngine,nodeMap,constant);
            nodes.add(node);
            nodeMap.set(constant,node);
        }
        for(let node of nodes) {
            if (!node.isEvaluated) {
                new _ConstantWalker(evaluationEngine).walk(node);
            }
        }
    }
    _computeHints(file : any,unit : any) : void {
        if (op(Op.EQUALS,file.source,null)) {
            return;
        }
        let errorListener : any = this._getErrorListener(file);
        let errorReporter : any = this._getErrorReporter(file);
        for(let pendingError of this._fileToPendingErrors.get(file)) {
            errorListener.onError(pendingError.toAnalysisError());
        }
        unit.accept(new bare.createInstance(any,null,errorReporter,{
            typeSystem : this._context.typeSystem}));
        if (this._analysisOptions.dart2jsHint) {
            unit.accept(new bare.createInstance(any,null,errorReporter));
        }
        let inheritanceManager : any = new bare.createInstance(any,null,this._libraryElement,{
            includeAbstractFromSuperclasses : true});
        unit.accept(new bare.createInstance(any,null,errorReporter,this._typeProvider,this._libraryElement,inheritanceManager,{
            typeSystem : this._context.typeSystem}));
        unit.accept(new bare.createInstance(any,null,errorReporter,inheritanceManager));
        new bare.createInstance(any,null,errorReporter).findIn(unit);
        {
            let verifier : any = new bare.createInstance(any,null);
            verifier.addImports(unit);
            this._usedImportedElementsList.forEach(verifier.removeUsedElements);
            verifier.generateDuplicateImportHints(errorReporter);
            verifier.generateUnusedImportHints(errorReporter);
            verifier.generateUnusedShownNameHints(errorReporter);
        }
        {
            let usedElements : any = new bare.createInstance(any,null,this._usedLocalElementsList);
            let visitor : any = new bare.createInstance(any,null,errorListener,usedElements);
            unit.element.accept(visitor);
        }
    }
    _computeLints(file : any,unit : any) : void {
        if (op(Op.EQUALS,file.source,null)) {
            return;
        }
        let errorReporter : any = this._getErrorReporter(file);
        let visitors : core.DartList<any> = new core.DartList.literal<any>();
        for(let linter of this._analysisOptions.lintRules) {
            let visitor : any = linter.getVisitor();
            if (visitor != null) {
                linter.reporter = errorReporter;
                if (this._analysisOptions.enableTiming) {
                    visitor = new bare.createInstance(any,null,visitor,lintRegistry.getTimer(linter));
                }
                visitors.add(visitor);
            }
        }
        let visitor : any = new bare.createInstance(any,null,visitors,ExceptionHandlingDelegatingAstVisitor.logException);
        unit.accept(visitor);
    }
    _computePendingMissingRequiredParameters(file : any,unit : any) : void {
        let computer = new bare.createInstance(any,null,file.source);
        unit.accept(computer);
        this._constants.addAll(computer.requiredConstants);
        this._fileToPendingErrors.set(file,computer.pendingErrors);
    }
    _computeVerifyErrors(file : any,unit : any) : void {
        if (op(Op.EQUALS,file.source,null)) {
            return;
        }
        let errorListener : any = this._getErrorListener(file);
        if (this._analysisOptions.strongMode) {
            let options : any = this._analysisOptions as any;
            let checker : any = new bare.createInstance(any,null,this._typeProvider,new bare.createInstance(any,null,this._typeProvider,{
                implicitCasts : options.implicitCasts,nonnullableTypes : options.nonnullableTypes}),errorListener,options);
            checker.visitCompilationUnit(unit);
        }
        let errorReporter : any = this._getErrorReporter(file);
        this._validateUriBasedDirectives(file,unit);
        let constantVerifier : any = new bare.createInstance(any,null,errorReporter,this._libraryElement,this._typeProvider,this._declaredVariables);
        unit.accept(constantVerifier);
        let errorVerifier : any = new bare.createInstance(any,null,errorReporter,this._libraryElement,this._typeProvider,new bare.createInstance(any,null,this._libraryElement),this._analysisOptions.enableSuperMixins);
        unit.accept(errorVerifier);
    }
    _createAnalysisContext() : void {
        let analysisContext : any = AnalysisEngine.instance.createAnalysisContext();
        analysisContext.analysisOptions = this._analysisOptions;
        analysisContext.declaredVariables.addAll(this._declaredVariables);
        analysisContext.sourceFactory = this._sourceFactory.clone();
        analysisContext.contentCache = new _ContentCacheWrapper(this._fsState);
        this._context = analysisContext;
    }
    _filterIgnoredErrors(file : any,errors : core.DartList<any>) : core.DartList<any> {
        if (errors.isEmpty) {
            return errors;
        }
        let ignoreInfo : any = this._fileToIgnoreInfo.get(file);
        if (!ignoreInfo.hasIgnores) {
            return errors;
        }
        let lineInfo : any = this._fileToLineInfo.get(file);
        var isIgnored : (error : any) => boolean = (error : any) : boolean =>  {
            let errorLine : number = lineInfo.getLocation(error.offset).lineNumber;
            let errorCode : string = error.errorCode.name.toLowerCase();
            return ignoreInfo.ignoredAt(errorCode,errorLine) || ignoreInfo.ignoredAt(errorCode,errorLine - 1);
        };
        return errors.where((e : any) =>  {
            return !isIgnored(e);
        }).toList();
    }
    _getErrorListener(file : any) : any {
        return this._errorListeners.putIfAbsent(file,() =>  {
            return new bare.createInstance(any,null);
        });
    }
    _getErrorReporter(file : any) : any {
        return this._errorReporters.putIfAbsent(file,() =>  {
            let listener : any = this._getErrorListener(file);
            return new bare.createInstance(any,null,listener,file.source);
        });
    }
    _getPartLibraryNameOrUri(partSource : any,partUnit : any,directivesToResolve : core.DartList<any>) : _NameOrSource {
        for(let directive of partUnit.directives) {
            if (is(directive, any)) {
                directivesToResolve.add(directive);
                let libraryName : any = directive.libraryName;
                if (libraryName != null) {
                    return new _NameOrSource(libraryName.name,null);
                }
                let uri : string = ((t)=>(!!t)?t.stringValue:null)(directive.uri);
                if (uri != null) {
                    let librarySource : any = this._sourceFactory.resolveUri(partSource,uri);
                    if (librarySource != null) {
                        return new _NameOrSource(null,librarySource);
                    }
                }
            }
        }
        return null;
    }
    _isLibrarySource(source : any) : boolean {
        let uriStr : string = source.uri.toString();
        return op(Op.EQUALS,((t)=>(!!t)?t.isPartOf:null)(op(Op.INDEX,this._store.unlinkedMap,uriStr)),false);
    }
    _parse(file : any) : any {
        let errorListener : any = this._getErrorListener(file);
        let content : string = file.content;
        let unit : any = file.parse(errorListener);
        let lineInfo : any = unit.lineInfo;
        this._fileToLineInfo.set(file,lineInfo);
        this._fileToIgnoreInfo.set(file,IgnoreInfo.calculateIgnores(content,lineInfo));
        return unit;
    }
    _resolveDirectives(units : core.DartMap<any,any>) : void {
        let definingCompilationUnit : any = units.get(this._library);
        definingCompilationUnit.element = this._libraryElement.definingCompilationUnit;
        let libraryErrorReporter : any = this._getErrorReporter(this._library);
        let libraryNameNode : any = null;
        let hasPartDirective : boolean = false;
        let seenPartSources = new core.DartSet<any>();
        let directivesToResolve = new core.DartList.literal<any>();
        let partIndex : number = 0;
        for(let directive of definingCompilationUnit.directives) {
            if (is(directive, any)) {
                libraryNameNode = directive.name;
                directivesToResolve.add(directive);
            }else if (is(directive, any)) {
                for(let importElement of this._libraryElement.imports) {
                    if (op(Op.EQUALS,importElement.nameOffset,directive.offset)) {
                        directive.element = importElement;
                        let source : any = ((t)=>(!!t)?t.source:null)(importElement.importedLibrary);
                        if (source != null && !this._isLibrarySource(source)) {
                            let errorCode : any = importElement.isDeferred ? StaticWarningCode.IMPORT_OF_NON_LIBRARY : CompileTimeErrorCode.IMPORT_OF_NON_LIBRARY;
                            libraryErrorReporter.reportErrorForNode(errorCode,directive.uri,new core.DartList.literal(directive.uri));
                        }
                    }
                }
            }else if (is(directive, any)) {
                for(let exportElement of this._libraryElement.exports) {
                    if (op(Op.EQUALS,exportElement.nameOffset,directive.offset)) {
                        directive.element = exportElement;
                        let source : any = ((t)=>(!!t)?t.source:null)(exportElement.exportedLibrary);
                        if (source != null && !this._isLibrarySource(source)) {
                            libraryErrorReporter.reportErrorForNode(CompileTimeErrorCode.EXPORT_OF_NON_LIBRARY,directive.uri,new core.DartList.literal(directive.uri));
                        }
                    }
                }
            }else if (is(directive, any)) {
                hasPartDirective = true;
                let partUri : any = directive.uri;
                let partFile : any = op(Op.INDEX,this._library.partedFiles,partIndex);
                let partUnit : any = units.get(partFile);
                let partElement : any = op(Op.INDEX,this._libraryElement.parts,partIndex);
                partUnit.element = partElement;
                directive.element = partElement;
                partIndex++;
                let partSource : any = directive.uriSource;
                if (op(Op.EQUALS,partSource,null)) {
                    continue;
                }
                if (!seenPartSources.add(partSource)) {
                    libraryErrorReporter.reportErrorForNode(CompileTimeErrorCode.DUPLICATE_PART,partUri,new core.DartList.literal(partSource.uri));
                }
                if (this._context.exists(partSource)) {
                    let nameOrSource : _NameOrSource = this._getPartLibraryNameOrUri(partSource,partUnit,directivesToResolve);
                    if (op(Op.EQUALS,nameOrSource,null)) {
                        libraryErrorReporter.reportErrorForNode(CompileTimeErrorCode.PART_OF_NON_PART,partUri,new core.DartList.literal(partUri.toSource()));
                    }else {
                        let name : string = nameOrSource.name;
                        if (name != null) {
                            if (libraryNameNode != null && libraryNameNode.name != name) {
                                libraryErrorReporter.reportErrorForNode(StaticWarningCode.PART_OF_DIFFERENT_LIBRARY,partUri,new core.DartList.literal(libraryNameNode.name,name));
                            }
                        }else {
                            let source : any = nameOrSource.source;
                            if (source != this._library.source) {
                                libraryErrorReporter.reportErrorForNode(StaticWarningCode.PART_OF_DIFFERENT_LIBRARY,partUri,new core.DartList.literal(this._library.uriStr,source.uri));
                            }
                        }
                    }
                }
            }
        }
        if (hasPartDirective && op(Op.EQUALS,libraryNameNode,null) && !this._context.analysisOptions.enableUriInPartOf) {
            libraryErrorReporter.reportErrorForOffset(ResolverErrorCode.MISSING_LIBRARY_DIRECTIVE_WITH_PART,0,0);
        }
        for(let directive of directivesToResolve) {
            directive.element = this._libraryElement;
        }
    }
    _resolveFile(file : any,unit : any) : void {
        let source : any = file.source;
        if (op(Op.EQUALS,source,null)) {
            return;
        }
        let errorListener : any = this._getErrorListener(file);
        let unitElement : any = unit.element;
        for(let e of unitElement.topLevelVariables) {
            if (!e.isSynthetic) {
                e.type;
            }
        }
        new bare.createInstance(any,null).resolve(unit,unitElement);
        new bare.createInstance(any,null,this._typeProvider,this._libraryElement,source,errorListener).resolveTypeBounds(unit);
        unit.accept(new bare.createInstance(any,null,this._libraryElement,source,this._typeProvider,errorListener));
        let libraryScope : any = new bare.createInstance(any,null,this._libraryElement);
        unit.accept(new bare.createInstance(any,null,this._libraryElement,source,this._typeProvider,errorListener,{
            nameScope : libraryScope}));
        unit.accept(new bare.createInstance(any,null,this._libraryElement,source,this._typeProvider,AnalysisErrorListener.NULL_LISTENER));
        unit.accept(new bare.createInstance(any,null,this._libraryElement,source,this._typeProvider,errorListener));
        {
            let constantFinder : any = new bare.createInstance(any,null);
            unit.accept(constantFinder);
            this._constants.addAll(constantFinder.constantsToCompute);
        }
        {
            let finder = new bare.createInstance(any,null);
            unit.accept(finder);
            this._constants.addAll(finder.dependencies);
        }
    }
    _resolveUri(file : any,isImport : boolean,uriLiteral : any,uriContent : string) : any {
        let code : any = UriBasedDirectiveImpl.validateUri(isImport,uriLiteral,uriContent);
        if (op(Op.EQUALS,code,null)) {
            try {
                lib3.Uri.parse(uriContent);
            } catch (__error__) {

                if (is(__error__,core.FormatException)){
                    return null;
                }
            }
            return this._sourceFactory.resolveUri(file.source,uriContent);
        }else if (op(Op.EQUALS,code,UriValidationCode.URI_WITH_DART_EXT_SCHEME)) {
            return null;
        }else if (op(Op.EQUALS,code,UriValidationCode.URI_WITH_INTERPOLATION)) {
            this._getErrorReporter(file).reportErrorForNode(CompileTimeErrorCode.URI_WITH_INTERPOLATION,uriLiteral);
            return null;
        }else if (op(Op.EQUALS,code,UriValidationCode.INVALID_URI)) {
            this._getErrorReporter(file).reportErrorForNode(CompileTimeErrorCode.INVALID_URI,uriLiteral,new core.DartList.literal(uriContent));
            return null;
        }
        return null;
    }
    _resolveUriBasedDirectives(file : any,unit : any) : void {
        for(let directive of unit.directives) {
            if (is(directive, any)) {
                let uriLiteral : any = directive.uri;
                let uriContent : string = ((_66_)=>(!!_66_)?_66_.trim():null)(uriLiteral.stringValue);
                directive.uriContent = uriContent;
                let defaultSource : any = this._resolveUri(file,is(directive, any),uriLiteral,uriContent);
                directive.uriSource = defaultSource;
            }
        }
    }
    _validateUriBasedDirective(file : any,directive : any) : void {
        let source : any = directive.uriSource;
        if (source != null) {
            if (this._context.exists(source)) {
                return;
            }
        }else {
            if (directive.validate() != null) {
                return;
            }
        }
        let uriLiteral : any = directive.uri;
        let errorCode : any = CompileTimeErrorCode.URI_DOES_NOT_EXIST;
        if (LibraryAnalyzer._isGenerated(source)) {
            errorCode = CompileTimeErrorCode.URI_HAS_NOT_BEEN_GENERATED;
        }
        this._getErrorReporter(file).reportErrorForNode(errorCode,uriLiteral,new core.DartList.literal(directive.uriContent));
    }
    _validateUriBasedDirectives(file : any,unit : any) : void {
        for(let directive of unit.directives) {
            if (is(directive, any)) {
                this._validateUriBasedDirective(file,directive);
            }
        }
    }
    static _isGenerated(source : any) : boolean {
        if (op(Op.EQUALS,source,null)) {
            return false;
        }
        let suffixes : core.DartList<string> = new core.DartList.literal<string>('.g.dart','.pb.dart','.pbenum.dart','.pbserver.dart','.pbjson.dart','.template.dart');
        let fullName : string = source.fullName;
        for(let suffix of suffixes) {
            if (new core.DartString(fullName).endsWith(suffix)) {
                return true;
            }
        }
        return false;
    }
}

export namespace UnitAnalysisResult {
    export type Constructors = 'UnitAnalysisResult';
    export type Interface = Omit<UnitAnalysisResult, Constructors>;
}
@DartClass
export class UnitAnalysisResult {
    file : any;

    unit : any;

    errors : core.DartList<any>;

    constructor(file : any,unit : any,errors : core.DartList<any>) {
    }
    @defaultConstructor
    UnitAnalysisResult(file : any,unit : any,errors : core.DartList<any>) {
        this.file = file;
        this.unit = unit;
        this.errors = errors;
    }
}

export namespace _ConstantNode {
    export type Constructors = '_ConstantNode';
    export type Interface = Omit<_ConstantNode, Constructors>;
}
@DartClass
export class _ConstantNode extends any {
    evaluationEngine : any;

    nodeMap : core.DartMap<any,_ConstantNode>;

    constant : any;

    isEvaluated : boolean;

    constructor(evaluationEngine : any,nodeMap : core.DartMap<any,_ConstantNode>,constant : any) {
    }
    @defaultConstructor
    _ConstantNode(evaluationEngine : any,nodeMap : core.DartMap<any,_ConstantNode>,constant : any) {
        this.isEvaluated = false;
        this.evaluationEngine = evaluationEngine;
        this.nodeMap = nodeMap;
        this.constant = constant;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeDependencies() : core.DartList<_ConstantNode> {
        let targets : core.DartList<any> = new core.DartList.literal();
        this.evaluationEngine.computeDependencies(this.constant,targets.add.bind(targets));
        return targets.map(this._getNode.bind(this)).toList();
    }
    _getNode(constant : any) : _ConstantNode {
        return this.nodeMap.putIfAbsent(constant,() =>  {
            return new _ConstantNode(this.evaluationEngine,this.nodeMap,constant);
        });
    }
}

export namespace _ConstantWalker {
    export type Constructors = '_ConstantWalker';
    export type Interface = Omit<_ConstantWalker, Constructors>;
}
@DartClass
export class _ConstantWalker extends any {
    evaluationEngine : any;

    constructor(evaluationEngine : any) {
    }
    @defaultConstructor
    _ConstantWalker(evaluationEngine : any) {
        this.evaluationEngine = evaluationEngine;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    evaluate(node : _ConstantNode) : void {
        this.evaluationEngine.computeConstantValue(node.constant);
        node.isEvaluated = true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    evaluateScc(scc : core.DartList<_ConstantNode>) : void {
        let constantsInCycle = scc.map((node : any) =>  {
            return node.constant;
        });
        for(let node of scc) {
            this.evaluationEngine.generateCycleError(constantsInCycle,node.constant);
            node.isEvaluated = true;
        }
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
        if (this.fsState.externalSummaries != null) {
            let uriStr : string = source.uri.toString();
            if (this.fsState.externalSummaries.hasUnlinkedUnit(uriStr)) {
                return true;
            }
        }
        return this._getFileForSource(source).exists;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getModificationStamp(source : any) : number {
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

export namespace _NameOrSource {
    export type Constructors = '_NameOrSource';
    export type Interface = Omit<_NameOrSource, Constructors>;
}
@DartClass
export class _NameOrSource {
    name : string;

    source : any;

    constructor(name : string,source : any) {
    }
    @defaultConstructor
    _NameOrSource(name : string,source : any) {
        this.name = name;
        this.source = source;
    }
}

export class properties {
}
