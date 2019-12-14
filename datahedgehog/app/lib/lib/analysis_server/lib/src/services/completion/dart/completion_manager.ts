/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/services/completion/dart/completion_manager.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace DartCompletionManager {
    export type Constructors = 'DartCompletionManager';
    export type Interface = Omit<DartCompletionManager, Constructors>;
}
@DartClass
@Implements(any)
export class DartCompletionManager implements any.Interface {
    private static __$contributionSorter : any;
    static get contributionSorter() : any { 
        if (this.__$contributionSorter===undefined) {
            this.__$contributionSorter = new bare.createInstance(any,null);
        }
        return this.__$contributionSorter;
    }
    static set contributionSorter(__$value : any)  { 
        this.__$contributionSorter = __$value;
    }

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeSuggestions(request : any) : async.Future<core.DartList<any>> { 
        return new async.Future.fromPromise(( async () =>  {
            request.checkAborted();
            if (!AnalysisEngine.isDartFileName(request.source.shortName)) {
                return EMPTY_LIST;
            }
            let performance : any = (request as any).performance;
            let dartRequest : DartCompletionRequestImpl = await DartCompletionRequestImpl.from(request);
            if (dartRequest.target.isCommentText) {
                return EMPTY_LIST;
            }
            let range : ReplacementRange = new ReplacementRange.compute(dartRequest.offset,dartRequest.target);
            ((_) : any =>  {
                {
                    _.replacementOffset = range.offset;
                    _.replacementLength = range.length;
                    return _;
                }
            })((request as any));
            let suggestionMap : core.DartMap<string,any> = new core.DartMap.literal([
            ]);
            for(let contributor of dartCompletionPlugin.contributors) {
                let contributorTag : string = `DartCompletionManager - ${contributor.runtimeType}`;
                performance.logStartTime(contributorTag);
                let contributorSuggestions : core.DartList<any> = await contributor.computeSuggestions(dartRequest);
                performance.logElapseTime(contributorTag);
                request.checkAborted();
                for(let newSuggestion of contributorSuggestions) {
                    let oldSuggestion = suggestionMap.putIfAbsent(newSuggestion.completion,() =>  {
                        return newSuggestion;
                    });
                    if (newSuggestion != oldSuggestion && op(Op.GT,newSuggestion.relevance,oldSuggestion.relevance)) {
                        suggestionMap.set(newSuggestion.completion,newSuggestion);
                    }
                }
            }
            let suggestions : core.DartList<any> = suggestionMap.values.toList();
            let SORT_TAG = 'DartCompletionManager - sort';
            performance.logStartTime(SORT_TAG);
            await DartCompletionManager.contributionSorter.sort(dartRequest,suggestions);
            performance.logElapseTime(SORT_TAG);
            request.checkAborted();
            return suggestions;
        } )());
    }

    constructor() {
    }
    @defaultConstructor
    DartCompletionManager() {
    }
}

export namespace DartCompletionRequestImpl {
    export type Constructors = '_';
    export type Interface = Omit<DartCompletionRequestImpl, Constructors>;
}
@DartClass
@Implements(any)
export class DartCompletionRequestImpl implements any.Interface {
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    result : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    ideOptions : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    coreLib : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    source : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    offset : number;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    dotTarget : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    librarySource : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    resourceProvider : any;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    target : any;

    _objectType : any;

    _opType : any;

    _originalRequest : any;

    performance : any;

    @namedConstructor
    _(result : any,resourceProvider : any,coreLib : any,librarySource : any,source : any,offset : number,unit : any,_originalRequest : any,performance : any,ideOptions : any) {
        this.result = result;
        this.resourceProvider = resourceProvider;
        this.coreLib = coreLib;
        this.librarySource = librarySource;
        this.source = source;
        this.offset = offset;
        this._originalRequest = _originalRequest;
        this.performance = performance;
        this.ideOptions = ideOptions;
        this._updateTargets(unit);
    }
    static _ : new(result : any,resourceProvider : any,coreLib : any,librarySource : any,source : any,offset : number,unit : any,_originalRequest : any,performance : any,ideOptions : any) => DartCompletionRequestImpl;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get includeIdentifiers() : boolean {
        return this.opType.includeIdentifiers;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get libraryElement() : any {
        let unit : any = this.target.unit;
        if (unit != null) {
            let elem : any = unit.element;
            if (elem != null) {
                return elem.library;
            }
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get objectType() : any {
        if (op(Op.EQUALS,this._objectType,null)) {
            this._objectType = this.coreLib.getType('Object').type;
        }
        return this._objectType;
    }
    get opType() : any {
        if (op(Op.EQUALS,this._opType,null)) {
            this._opType = new bare.createInstance(any,null,this.target,this.offset);
        }
        return this._opType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get sourceContents() : string {
        return this.result.content;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get sourceFactory() : any {
        return this.result.sourceFactory;
    }
    checkAborted() : void {
        this._originalRequest.checkAborted();
    }
    _updateTargets(unit : any) : void {
        this._opType = null;
        this.dotTarget = null;
        this.target = new bare.createInstance(any,null,unit,this.offset);
        let node : any = this.target.containingNode;
        if (is(node, any)) {
            if (core.identical(node.methodName,this.target.entity)) {
                this.dotTarget = node.realTarget;
            }else if (node.isCascaded && op(Op.EQUALS,op(Op.PLUS,node.operator.offset,1),this.target.offset)) {
                this.dotTarget = node.realTarget;
            }
        }
        if (is(node, any)) {
            if (core.identical(node.propertyName,this.target.entity)) {
                this.dotTarget = node.realTarget;
            }else if (node.isCascaded && op(Op.EQUALS,op(Op.PLUS,node.operator.offset,1),this.target.offset)) {
                this.dotTarget = node.realTarget;
            }
        }
        if (is(node, any)) {
            if (core.identical(node.identifier,this.target.entity)) {
                this.dotTarget = node.prefix;
            }
        }
    }
    static from(request : any,_namedArguments? : {resultDescriptor? : any}) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let {resultDescriptor} = Object.assign({
            }, _namedArguments );
            request.checkAborted();
            let performance : any = (request as any).performance;
            let BUILD_REQUEST_TAG = 'build DartCompletionRequest';
            performance.logStartTime(BUILD_REQUEST_TAG);
            let libSource : any;
            let unit : any;
            unit = request.result.unit;
            libSource = resolutionMap.elementDeclaredByCompilationUnit(unit).source;
            let coreLib : any = await request.result.driver.getLibraryByUri('dart:core');
            let dartRequest : DartCompletionRequestImpl = new DartCompletionRequestImpl._(request.result,request.resourceProvider,coreLib,libSource,request.source,request.offset,unit,request,performance,request.ideOptions);
            performance.logElapseTime(BUILD_REQUEST_TAG);
            return dartRequest;
        } )());
    }

}

export namespace ReplacementRange {
    export type Constructors = 'ReplacementRange';
    export type Interface = Omit<ReplacementRange, Constructors>;
}
@DartClass
export class ReplacementRange {
    offset : number;

    length : number;

    constructor(offset : number,length : number) {
    }
    @defaultConstructor
    ReplacementRange(offset : number,length : number) {
        this.offset = offset;
        this.length = length;
    }
    @namedFactory
    static $compute(requestOffset : number,target : any) : ReplacementRange {
        var isKeywordOrIdentifier : (token : any) => boolean = (token : any) : boolean =>  {
            return token.type.isKeyword || op(Op.EQUALS,token.type,TokenType.IDENTIFIER);
        };
        let entity = target.entity;
        let token : any = is(entity, any) ? entity.beginToken : entity;
        if (token != null && requestOffset < token.offset) {
            token = token.previous;
        }
        if (token != null) {
            if (requestOffset == token.offset && !isKeywordOrIdentifier(token)) {
                token = token.previous;
            }
            if (token != null && isKeywordOrIdentifier(token)) {
                if (op(Op.LEQ,token.offset,requestOffset) && requestOffset <= token.end) {
                    return new ReplacementRange(token.offset,token.length);
                }
            }
            if (is(token, any)) {
                let uri : any = astFactory.simpleStringLiteral(token,token.lexeme);
                let keyword : any = ((t)=>(!!t)?t.keyword:null)(token.previous);
                if (op(Op.EQUALS,keyword,Keyword.IMPORT) || op(Op.EQUALS,keyword,Keyword.EXPORT) || op(Op.EQUALS,keyword,Keyword.PART)) {
                    let start : number = uri.contentsOffset;
                    let end = uri.contentsEnd;
                    if (start <= requestOffset && requestOffset <= end) {
                        return new ReplacementRange(start,op(Op.MINUS,end,start));
                    }
                }
            }
        }
        return new ReplacementRange(requestOffset,0);
    }
    static compute : new(requestOffset : number,target : any) => ReplacementRange;

}

export class properties {
}
