/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/search/search_domain.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/analysis_server/lib/src/protocol_server";

export namespace SearchDomainHandler {
    export type Constructors = 'SearchDomainHandler';
    export type Interface = Omit<SearchDomainHandler, Constructors>;
}
@DartClass
@Implements(any)
export class SearchDomainHandler implements any.Interface {
    server : any;

    index : any;

    searchEngine : any;

    _nextSearchId : number;

    constructor(server : any) {
    }
    @defaultConstructor
    SearchDomainHandler(server : any) {
        this._nextSearchId = 0;
        this.server = server;
        this.index = server.index;
        this.searchEngine = server.searchEngine;
    }
    findElementReferences(request : any) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let params = new bare.createInstance(any,"fromRequest",request);
            let file : string = params.file;
            if (!this.server.options.enableNewAnalysisDriver) {
                await this.server.onAnalysisComplete;
            }
            let element : any = await this.server.getElementAtOffset(file,params.offset);
            if (is(element, any)) {
                element = (element as any).prefix;
            }
            if (is(element, any)) {
                element = (element as any).field;
            }
            if (is(element, any)) {
                element = (element as any).variable;
            }
            let searchId : string = new core.DartInt((this._nextSearchId++)).toString();
            let result = new bare.createInstance(any,null);
            if (element != null) {
                result.id = searchId;
                result.element = null /*topLevl*/.convertElement(element);
            }
            this._sendSearchResult(request,result);
            if (element != null) {
                let computer = new bare.createInstance(any,null,this.searchEngine);
                let results : core.DartList<any> = await computer.compute(element,params.includePotential);
                this._sendSearchNotification(searchId,true,results);
            }
        } )());
    }

    findMemberDeclarations(request : any) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let params = new bare.createInstance(any,"fromRequest",request);
            await this.server.onAnalysisComplete;
            let searchId : string = new core.DartInt((this._nextSearchId++)).toString();
            this._sendSearchResult(request,new bare.createInstance(any,null,searchId));
            let matches : core.DartList<any> = await this.searchEngine.searchMemberDeclarations(params.name);
            matches = SearchMatch.withNotNullElement(matches);
            this._sendSearchNotification(searchId,true,matches.map(SearchDomainHandler.toResult.bind(this)));
        } )());
    }

    findMemberReferences(request : any) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let params = new bare.createInstance(any,"fromRequest",request);
            await this.server.onAnalysisComplete;
            let searchId : string = new core.DartInt((this._nextSearchId++)).toString();
            this._sendSearchResult(request,new bare.createInstance(any,null,searchId));
            let matches : core.DartList<any> = await this.searchEngine.searchMemberReferences(params.name);
            matches = SearchMatch.withNotNullElement(matches);
            this._sendSearchNotification(searchId,true,matches.map(SearchDomainHandler.toResult.bind(this)));
        } )());
    }

    findTopLevelDeclarations(request : any) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let params = new bare.createInstance(any,"fromRequest",request);
            try {
                new core.DartRegExp(params.pattern);
            } catch (__error__) {

                if (is(__error__,core.FormatException)){
                    let exception : core.FormatException = __error__;
                    this.server.sendResponse(new bare.createInstance(any,"invalidParameter",request,'pattern',exception.message));
                    return;
                }
            }
            await this.server.onAnalysisComplete;
            let searchId : string = new core.DartInt((this._nextSearchId++)).toString();
            this._sendSearchResult(request,new bare.createInstance(any,null,searchId));
            let matches : core.DartList<any> = await this.searchEngine.searchTopLevelDeclarations(params.pattern);
            matches = SearchMatch.withNotNullElement(matches);
            this._sendSearchNotification(searchId,true,matches.map(SearchDomainHandler.toResult.bind(this)));
        } )());
    }

    getTypeHierarchy(request : any) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let params = new bare.createInstance(any,"fromRequest",request);
            let file : string = params.file;
            if (!this.server.options.enableNewAnalysisDriver) {
                if (op(Op.EQUALS,params.superOnly,true)) {
                    await this.server.onFileAnalysisComplete(file);
                }else {
                    await this.server.onAnalysisComplete;
                }
            }
            let element : any = await this.server.getElementAtOffset(file,params.offset);
            if (op(Op.EQUALS,element,null)) {
                this._sendTypeHierarchyNull(request);
                return;
            }
            if (op(Op.EQUALS,params.superOnly,true)) {
                let computer : any = new bare.createInstance(any,null,this.searchEngine,element);
                let items : core.DartList<any> = computer.computeSuper();
                let response : any = new bare.createInstance(any,null,{
                    hierarchyItems : items}).toResponse(request.id);
                this.server.sendResponse(response);
                return;
            }
            let computer : any = new bare.createInstance(any,null,this.searchEngine,element);
            let items : core.DartList<any> = await computer.compute();
            let response : any = new bare.createInstance(any,null,{
                hierarchyItems : items}).toResponse(request.id);
            this.server.sendResponse(response);
        } )());
    }

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleRequest(request : any) : any {
        try {
            let requestName : string = request.method;
            if (requestName == SEARCH_FIND_ELEMENT_REFERENCES) {
                this.findElementReferences(request);
                return lib3.Response.DELAYED_RESPONSE;
            }else if (requestName == SEARCH_FIND_MEMBER_DECLARATIONS) {
                this.findMemberDeclarations(request);
                return lib3.Response.DELAYED_RESPONSE;
            }else if (requestName == SEARCH_FIND_MEMBER_REFERENCES) {
                this.findMemberReferences(request);
                return lib3.Response.DELAYED_RESPONSE;
            }else if (requestName == SEARCH_FIND_TOP_LEVEL_DECLARATIONS) {
                this.findTopLevelDeclarations(request);
                return lib3.Response.DELAYED_RESPONSE;
            }else if (requestName == SEARCH_GET_TYPE_HIERARCHY) {
                this.getTypeHierarchy(request);
                return lib3.Response.DELAYED_RESPONSE;
            }
        } catch (__error__) {

            if (is(__error__,any)){
                let exception : any = __error__;
                return exception.response;
            }
        }
        return null;
    }
    _sendSearchNotification(searchId : string,isLast : boolean,results : core.DartIterable<any>) : void {
        this.server.sendNotification(new bare.createInstance(any,null,searchId,results.toList(),isLast).toNotification());
    }
    _sendSearchResult(request : any,result : any) : void {
        let response : any = result.toResponse(request.id);
        this.server.sendResponse(response);
    }
    _sendTypeHierarchyNull(request : any) : void {
        let response : any = new bare.createInstance(any,null).toResponse(request.id);
        this.server.sendResponse(response);
    }
    static toResult(match : any) : any {
        return null /*topLevl*/.newSearchResult_fromMatch(match);
    }
}

export class properties {
}
