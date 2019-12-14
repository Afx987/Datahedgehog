/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/integration/support/integration_test_methods.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./integration_tests";
import * as lib4 from "./protocol_matchers";

export namespace IntegrationTestMixin {
    export type Constructors = 'IntegrationTestMixin';
    export type Interface = Omit<IntegrationTestMixin, Constructors>;
}
@DartClass
export class IntegrationTestMixin {
    @AbstractProperty
    get server() : lib3.Server{ throw 'abstract'}
    sendServerGetVersion() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let result = await this.server.send("server.getVersion",null);
            let decoder : any = new bare.createInstance(any,null,null);
            return new bare.createInstance(any,null,decoder,'result',result);
        } )());
    }

    sendServerShutdown() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let result = await this.server.send("server.shutdown",null);
            lib3.outOfTestExpect(result,isNull);
            return null;
        } )());
    }

    sendServerSetSubscriptions(subscriptions : core.DartList<any>) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let params = new bare.createInstance(any,null,subscriptions).toJson();
            let result = await this.server.send("server.setSubscriptions",params);
            lib3.outOfTestExpect(result,isNull);
            return null;
        } )());
    }

    onServerConnected : async.DartStream<any>;

    _onServerConnected : async.DartStreamController<any>;

    onServerError : async.DartStream<any>;

    _onServerError : async.DartStreamController<any>;

    onServerStatus : async.DartStream<any>;

    _onServerStatus : async.DartStreamController<any>;

    sendAnalysisGetErrors(file : string) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let params = new bare.createInstance(any,null,file).toJson();
            let result = await this.server.send("analysis.getErrors",params);
            let decoder : any = new bare.createInstance(any,null,null);
            return new bare.createInstance(any,null,decoder,'result',result);
        } )());
    }

    sendAnalysisGetHover(file : string,offset : number) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let params = new bare.createInstance(any,null,file,offset).toJson();
            let result = await this.server.send("analysis.getHover",params);
            let decoder : any = new bare.createInstance(any,null,null);
            return new bare.createInstance(any,null,decoder,'result',result);
        } )());
    }

    sendAnalysisGetReachableSources(file : string) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let params = new bare.createInstance(any,null,file).toJson();
            let result = await this.server.send("analysis.getReachableSources",params);
            let decoder : any = new bare.createInstance(any,null,null);
            return new bare.createInstance(any,null,decoder,'result',result);
        } )());
    }

    sendAnalysisGetLibraryDependencies() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let result = await this.server.send("analysis.getLibraryDependencies",null);
            let decoder : any = new bare.createInstance(any,null,null);
            return new bare.createInstance(any,null,decoder,'result',result);
        } )());
    }

    sendAnalysisGetNavigation(file : string,offset : number,length : number) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let params = new bare.createInstance(any,null,file,offset,length).toJson();
            let result = await this.server.send("analysis.getNavigation",params);
            let decoder : any = new bare.createInstance(any,null,null);
            return new bare.createInstance(any,null,decoder,'result',result);
        } )());
    }

    sendAnalysisReanalyze(_namedArguments? : {roots? : core.DartList<string>}) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let {roots} = Object.assign({
            }, _namedArguments );
            let params = new bare.createInstance(any,null,{
                roots : roots}).toJson();
            let result = await this.server.send("analysis.reanalyze",params);
            lib3.outOfTestExpect(result,isNull);
            return null;
        } )());
    }

    sendAnalysisSetAnalysisRoots(included : core.DartList<string>,excluded : core.DartList<string>,_namedArguments? : {packageRoots? : core.DartMap<string,string>}) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let {packageRoots} = Object.assign({
            }, _namedArguments );
            let params = new bare.createInstance(any,null,included,excluded,{
                packageRoots : packageRoots}).toJson();
            let result = await this.server.send("analysis.setAnalysisRoots",params);
            lib3.outOfTestExpect(result,isNull);
            return null;
        } )());
    }

    sendAnalysisSetGeneralSubscriptions(subscriptions : core.DartList<any>) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let params = new bare.createInstance(any,null,subscriptions).toJson();
            let result = await this.server.send("analysis.setGeneralSubscriptions",params);
            lib3.outOfTestExpect(result,isNull);
            return null;
        } )());
    }

    sendAnalysisSetPriorityFiles(files : core.DartList<string>) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let params = new bare.createInstance(any,null,files).toJson();
            let result = await this.server.send("analysis.setPriorityFiles",params);
            lib3.outOfTestExpect(result,isNull);
            return null;
        } )());
    }

    sendAnalysisSetSubscriptions(subscriptions : core.DartMap<any,core.DartList<string>>) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let params = new bare.createInstance(any,null,subscriptions).toJson();
            let result = await this.server.send("analysis.setSubscriptions",params);
            lib3.outOfTestExpect(result,isNull);
            return null;
        } )());
    }

    sendAnalysisUpdateContent(files : core.DartMap<string,any>) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let params = new bare.createInstance(any,null,files).toJson();
            let result = await this.server.send("analysis.updateContent",params);
            let decoder : any = new bare.createInstance(any,null,null);
            return new bare.createInstance(any,null,decoder,'result',result);
        } )());
    }

    @DartMethodAnnotation({
        library : 'dart:core',type : 'deprecated',value : {
            arguments : [],namedArguments : {
            }}})
    sendAnalysisUpdateOptions(options : any) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let params = new bare.createInstance(any,null,options).toJson();
            let result = await this.server.send("analysis.updateOptions",params);
            lib3.outOfTestExpect(result,isNull);
            return null;
        } )());
    }

    onAnalysisAnalyzedFiles : async.DartStream<any>;

    _onAnalysisAnalyzedFiles : async.DartStreamController<any>;

    onAnalysisErrors : async.DartStream<any>;

    _onAnalysisErrors : async.DartStreamController<any>;

    onAnalysisFlushResults : async.DartStream<any>;

    _onAnalysisFlushResults : async.DartStreamController<any>;

    onAnalysisFolding : async.DartStream<any>;

    _onAnalysisFolding : async.DartStreamController<any>;

    onAnalysisHighlights : async.DartStream<any>;

    _onAnalysisHighlights : async.DartStreamController<any>;

    onAnalysisImplemented : async.DartStream<any>;

    _onAnalysisImplemented : async.DartStreamController<any>;

    onAnalysisInvalidate : async.DartStream<any>;

    _onAnalysisInvalidate : async.DartStreamController<any>;

    onAnalysisNavigation : async.DartStream<any>;

    _onAnalysisNavigation : async.DartStreamController<any>;

    onAnalysisOccurrences : async.DartStream<any>;

    _onAnalysisOccurrences : async.DartStreamController<any>;

    onAnalysisOutline : async.DartStream<any>;

    _onAnalysisOutline : async.DartStreamController<any>;

    onAnalysisOverrides : async.DartStream<any>;

    _onAnalysisOverrides : async.DartStreamController<any>;

    sendCompletionGetSuggestions(file : string,offset : number) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let params = new bare.createInstance(any,null,file,offset).toJson();
            let result = await this.server.send("completion.getSuggestions",params);
            let decoder : any = new bare.createInstance(any,null,null);
            return new bare.createInstance(any,null,decoder,'result',result);
        } )());
    }

    onCompletionResults : async.DartStream<any>;

    _onCompletionResults : async.DartStreamController<any>;

    sendSearchFindElementReferences(file : string,offset : number,includePotential : boolean) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let params = new bare.createInstance(any,null,file,offset,includePotential).toJson();
            let result = await this.server.send("search.findElementReferences",params);
            let decoder : any = new bare.createInstance(any,null,null);
            return new bare.createInstance(any,null,decoder,'result',result);
        } )());
    }

    sendSearchFindMemberDeclarations(name : string) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let params = new bare.createInstance(any,null,name).toJson();
            let result = await this.server.send("search.findMemberDeclarations",params);
            let decoder : any = new bare.createInstance(any,null,null);
            return new bare.createInstance(any,null,decoder,'result',result);
        } )());
    }

    sendSearchFindMemberReferences(name : string) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let params = new bare.createInstance(any,null,name).toJson();
            let result = await this.server.send("search.findMemberReferences",params);
            let decoder : any = new bare.createInstance(any,null,null);
            return new bare.createInstance(any,null,decoder,'result',result);
        } )());
    }

    sendSearchFindTopLevelDeclarations(pattern : string) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let params = new bare.createInstance(any,null,pattern).toJson();
            let result = await this.server.send("search.findTopLevelDeclarations",params);
            let decoder : any = new bare.createInstance(any,null,null);
            return new bare.createInstance(any,null,decoder,'result',result);
        } )());
    }

    sendSearchGetTypeHierarchy(file : string,offset : number,_namedArguments? : {superOnly? : boolean}) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let {superOnly} = Object.assign({
            }, _namedArguments );
            let params = new bare.createInstance(any,null,file,offset,{
                superOnly : superOnly}).toJson();
            let result = await this.server.send("search.getTypeHierarchy",params);
            let decoder : any = new bare.createInstance(any,null,null);
            return new bare.createInstance(any,null,decoder,'result',result);
        } )());
    }

    onSearchResults : async.DartStream<any>;

    _onSearchResults : async.DartStreamController<any>;

    sendEditFormat(file : string,selectionOffset : number,selectionLength : number,_namedArguments? : {lineLength? : number}) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let {lineLength} = Object.assign({
            }, _namedArguments );
            let params = new bare.createInstance(any,null,file,selectionOffset,selectionLength,{
                lineLength : lineLength}).toJson();
            let result = await this.server.send("edit.format",params);
            let decoder : any = new bare.createInstance(any,null,null);
            return new bare.createInstance(any,null,decoder,'result',result);
        } )());
    }

    sendEditGetAssists(file : string,offset : number,length : number) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let params = new bare.createInstance(any,null,file,offset,length).toJson();
            let result = await this.server.send("edit.getAssists",params);
            let decoder : any = new bare.createInstance(any,null,null);
            return new bare.createInstance(any,null,decoder,'result',result);
        } )());
    }

    sendEditGetAvailableRefactorings(file : string,offset : number,length : number) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let params = new bare.createInstance(any,null,file,offset,length).toJson();
            let result = await this.server.send("edit.getAvailableRefactorings",params);
            let decoder : any = new bare.createInstance(any,null,null);
            return new bare.createInstance(any,null,decoder,'result',result);
        } )());
    }

    sendEditGetFixes(file : string,offset : number) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let params = new bare.createInstance(any,null,file,offset).toJson();
            let result = await this.server.send("edit.getFixes",params);
            let decoder : any = new bare.createInstance(any,null,null);
            return new bare.createInstance(any,null,decoder,'result',result);
        } )());
    }

    sendEditGetRefactoring(kind : any,file : string,offset : number,length : number,validateOnly : boolean,_namedArguments? : {options? : any}) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let {options} = Object.assign({
            }, _namedArguments );
            let params = new bare.createInstance(any,null,kind,file,offset,length,validateOnly,{
                options : options}).toJson();
            let result = await this.server.send("edit.getRefactoring",params);
            let decoder : any = new bare.createInstance(any,null,kind);
            return new bare.createInstance(any,null,decoder,'result',result);
        } )());
    }

    sendEditGetStatementCompletion(file : string,offset : number) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let params = new bare.createInstance(any,null,file,offset).toJson();
            let result = await this.server.send("edit.getStatementCompletion",params);
            let decoder : any = new bare.createInstance(any,null,null);
            return new bare.createInstance(any,null,decoder,'result',result);
        } )());
    }

    sendEditSortMembers(file : string) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let params = new bare.createInstance(any,null,file).toJson();
            let result = await this.server.send("edit.sortMembers",params);
            let decoder : any = new bare.createInstance(any,null,null);
            return new bare.createInstance(any,null,decoder,'result',result);
        } )());
    }

    sendEditOrganizeDirectives(file : string) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let params = new bare.createInstance(any,null,file).toJson();
            let result = await this.server.send("edit.organizeDirectives",params);
            let decoder : any = new bare.createInstance(any,null,null);
            return new bare.createInstance(any,null,decoder,'result',result);
        } )());
    }

    sendExecutionCreateContext(contextRoot : string) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let params = new bare.createInstance(any,null,contextRoot).toJson();
            let result = await this.server.send("execution.createContext",params);
            let decoder : any = new bare.createInstance(any,null,null);
            return new bare.createInstance(any,null,decoder,'result',result);
        } )());
    }

    sendExecutionDeleteContext(id : string) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let params = new bare.createInstance(any,null,id).toJson();
            let result = await this.server.send("execution.deleteContext",params);
            lib3.outOfTestExpect(result,isNull);
            return null;
        } )());
    }

    sendExecutionMapUri(id : string,_namedArguments? : {file? : string,uri? : string}) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let {file,uri} = Object.assign({
            }, _namedArguments );
            let params = new bare.createInstance(any,null,id,{
                file : file,uri : uri}).toJson();
            let result = await this.server.send("execution.mapUri",params);
            let decoder : any = new bare.createInstance(any,null,null);
            return new bare.createInstance(any,null,decoder,'result',result);
        } )());
    }

    @DartMethodAnnotation({
        library : 'dart:core',type : 'deprecated',value : {
            arguments : [],namedArguments : {
            }}})
    sendExecutionSetSubscriptions(subscriptions : core.DartList<any>) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let params = new bare.createInstance(any,null,subscriptions).toJson();
            let result = await this.server.send("execution.setSubscriptions",params);
            lib3.outOfTestExpect(result,isNull);
            return null;
        } )());
    }

    onExecutionLaunchData : async.DartStream<any>;

    _onExecutionLaunchData : async.DartStreamController<any>;

    sendDiagnosticGetDiagnostics() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let result = await this.server.send("diagnostic.getDiagnostics",null);
            let decoder : any = new bare.createInstance(any,null,null);
            return new bare.createInstance(any,null,decoder,'result',result);
        } )());
    }

    sendDiagnosticGetServerPort() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let result = await this.server.send("diagnostic.getServerPort",null);
            let decoder : any = new bare.createInstance(any,null,null);
            return new bare.createInstance(any,null,decoder,'result',result);
        } )());
    }

    initializeInttestMixin() : void {
        this._onServerConnected = new async.DartStreamController<any>({
            sync : true});
        this.onServerConnected = this._onServerConnected.stream.asBroadcastStream();
        this._onServerError = new async.DartStreamController<any>({
            sync : true});
        this.onServerError = this._onServerError.stream.asBroadcastStream();
        this._onServerStatus = new async.DartStreamController<any>({
            sync : true});
        this.onServerStatus = this._onServerStatus.stream.asBroadcastStream();
        this._onAnalysisAnalyzedFiles = new async.DartStreamController<any>({
            sync : true});
        this.onAnalysisAnalyzedFiles = this._onAnalysisAnalyzedFiles.stream.asBroadcastStream();
        this._onAnalysisErrors = new async.DartStreamController<any>({
            sync : true});
        this.onAnalysisErrors = this._onAnalysisErrors.stream.asBroadcastStream();
        this._onAnalysisFlushResults = new async.DartStreamController<any>({
            sync : true});
        this.onAnalysisFlushResults = this._onAnalysisFlushResults.stream.asBroadcastStream();
        this._onAnalysisFolding = new async.DartStreamController<any>({
            sync : true});
        this.onAnalysisFolding = this._onAnalysisFolding.stream.asBroadcastStream();
        this._onAnalysisHighlights = new async.DartStreamController<any>({
            sync : true});
        this.onAnalysisHighlights = this._onAnalysisHighlights.stream.asBroadcastStream();
        this._onAnalysisImplemented = new async.DartStreamController<any>({
            sync : true});
        this.onAnalysisImplemented = this._onAnalysisImplemented.stream.asBroadcastStream();
        this._onAnalysisInvalidate = new async.DartStreamController<any>({
            sync : true});
        this.onAnalysisInvalidate = this._onAnalysisInvalidate.stream.asBroadcastStream();
        this._onAnalysisNavigation = new async.DartStreamController<any>({
            sync : true});
        this.onAnalysisNavigation = this._onAnalysisNavigation.stream.asBroadcastStream();
        this._onAnalysisOccurrences = new async.DartStreamController<any>({
            sync : true});
        this.onAnalysisOccurrences = this._onAnalysisOccurrences.stream.asBroadcastStream();
        this._onAnalysisOutline = new async.DartStreamController<any>({
            sync : true});
        this.onAnalysisOutline = this._onAnalysisOutline.stream.asBroadcastStream();
        this._onAnalysisOverrides = new async.DartStreamController<any>({
            sync : true});
        this.onAnalysisOverrides = this._onAnalysisOverrides.stream.asBroadcastStream();
        this._onCompletionResults = new async.DartStreamController<any>({
            sync : true});
        this.onCompletionResults = this._onCompletionResults.stream.asBroadcastStream();
        this._onSearchResults = new async.DartStreamController<any>({
            sync : true});
        this.onSearchResults = this._onSearchResults.stream.asBroadcastStream();
        this._onExecutionLaunchData = new async.DartStreamController<any>({
            sync : true});
        this.onExecutionLaunchData = this._onExecutionLaunchData.stream.asBroadcastStream();
    }
    dispatchNotification(event : string,params : any) : void {
        let decoder : any = new bare.createInstance(any,null,null);
        switch (event) {
            case "server.connected":
                lib3.outOfTestExpect(params,lib4.properties.isServerConnectedParams);
                this._onServerConnected.add(new bare.createInstance(any,null,decoder,'params',params));
                break;
            case "server.error":
                lib3.outOfTestExpect(params,lib4.properties.isServerErrorParams);
                this._onServerError.add(new bare.createInstance(any,null,decoder,'params',params));
                break;
            case "server.status":
                lib3.outOfTestExpect(params,lib4.properties.isServerStatusParams);
                this._onServerStatus.add(new bare.createInstance(any,null,decoder,'params',params));
                break;
            case "analysis.analyzedFiles":
                lib3.outOfTestExpect(params,lib4.properties.isAnalysisAnalyzedFilesParams);
                this._onAnalysisAnalyzedFiles.add(new bare.createInstance(any,null,decoder,'params',params));
                break;
            case "analysis.errors":
                lib3.outOfTestExpect(params,lib4.properties.isAnalysisErrorsParams);
                this._onAnalysisErrors.add(new bare.createInstance(any,null,decoder,'params',params));
                break;
            case "analysis.flushResults":
                lib3.outOfTestExpect(params,lib4.properties.isAnalysisFlushResultsParams);
                this._onAnalysisFlushResults.add(new bare.createInstance(any,null,decoder,'params',params));
                break;
            case "analysis.folding":
                lib3.outOfTestExpect(params,lib4.properties.isAnalysisFoldingParams);
                this._onAnalysisFolding.add(new bare.createInstance(any,null,decoder,'params',params));
                break;
            case "analysis.highlights":
                lib3.outOfTestExpect(params,lib4.properties.isAnalysisHighlightsParams);
                this._onAnalysisHighlights.add(new bare.createInstance(any,null,decoder,'params',params));
                break;
            case "analysis.implemented":
                lib3.outOfTestExpect(params,lib4.properties.isAnalysisImplementedParams);
                this._onAnalysisImplemented.add(new bare.createInstance(any,null,decoder,'params',params));
                break;
            case "analysis.invalidate":
                lib3.outOfTestExpect(params,lib4.properties.isAnalysisInvalidateParams);
                this._onAnalysisInvalidate.add(new bare.createInstance(any,null,decoder,'params',params));
                break;
            case "analysis.navigation":
                lib3.outOfTestExpect(params,lib4.properties.isAnalysisNavigationParams);
                this._onAnalysisNavigation.add(new bare.createInstance(any,null,decoder,'params',params));
                break;
            case "analysis.occurrences":
                lib3.outOfTestExpect(params,lib4.properties.isAnalysisOccurrencesParams);
                this._onAnalysisOccurrences.add(new bare.createInstance(any,null,decoder,'params',params));
                break;
            case "analysis.outline":
                lib3.outOfTestExpect(params,lib4.properties.isAnalysisOutlineParams);
                this._onAnalysisOutline.add(new bare.createInstance(any,null,decoder,'params',params));
                break;
            case "analysis.overrides":
                lib3.outOfTestExpect(params,lib4.properties.isAnalysisOverridesParams);
                this._onAnalysisOverrides.add(new bare.createInstance(any,null,decoder,'params',params));
                break;
            case "completion.results":
                lib3.outOfTestExpect(params,lib4.properties.isCompletionResultsParams);
                this._onCompletionResults.add(new bare.createInstance(any,null,decoder,'params',params));
                break;
            case "search.results":
                lib3.outOfTestExpect(params,lib4.properties.isSearchResultsParams);
                this._onSearchResults.add(new bare.createInstance(any,null,decoder,'params',params));
                break;
            case "execution.launchData":
                lib3.outOfTestExpect(params,lib4.properties.isExecutionLaunchDataParams);
                this._onExecutionLaunchData.add(new bare.createInstance(any,null,decoder,'params',params));
                break;
            default:
                fail(`Unexpected notification: ${event}`);
                break;
        }
    }
    constructor() {
    }
    @defaultConstructor
    IntegrationTestMixin() {
    }
}

export class properties {
}
