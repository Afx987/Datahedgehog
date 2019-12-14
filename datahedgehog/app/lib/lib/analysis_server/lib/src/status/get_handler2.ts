/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/status/get_handler2.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as io from "@dart2ts/dart/io";
import * as lib4 from "@dart2ts.packages/path/lib/path";
import * as convert from "@dart2ts/dart/convert";
import * as math from "@dart2ts/dart/math";
import * as lib7 from "@dart2ts/dart/uri";

export var _writeWithSeparators : (value : number) => string = (value : number) : string =>  {
    let str : string = new core.DartInt(value).toString();
    let pos : number = 3;
    while (new core.DartString(str).length > pos){
        let len : number = new core.DartString(str).length;
        str = `${new core.DartString(str).substring(0,len - pos)},${new core.DartString(str).substring(len - pos)}`;
        pos += 4;
    }
    return str;
};
export namespace GetHandler2 {
    export type Constructors = 'GetHandler2';
    export type Interface = Omit<GetHandler2, Constructors>;
}
@DartClass
@Implements(any)
export class GetHandler2 implements any.Interface {
    private static __$ANALYSIS_PERFORMANCE_PATH : string;
    static get ANALYSIS_PERFORMANCE_PATH() : string { 
        if (this.__$ANALYSIS_PERFORMANCE_PATH===undefined) {
            this.__$ANALYSIS_PERFORMANCE_PATH = '/perf/analysis';
        }
        return this.__$ANALYSIS_PERFORMANCE_PATH;
    }

    private static __$COMPLETION_PATH : string;
    static get COMPLETION_PATH() : string { 
        if (this.__$COMPLETION_PATH===undefined) {
            this.__$COMPLETION_PATH = '/completion';
        }
        return this.__$COMPLETION_PATH;
    }

    private static __$COMMUNICATION_PERFORMANCE_PATH : string;
    static get COMMUNICATION_PERFORMANCE_PATH() : string { 
        if (this.__$COMMUNICATION_PERFORMANCE_PATH===undefined) {
            this.__$COMMUNICATION_PERFORMANCE_PATH = '/perf/communication';
        }
        return this.__$COMMUNICATION_PERFORMANCE_PATH;
    }

    private static __$CONTEXT_PATH : string;
    static get CONTEXT_PATH() : string { 
        if (this.__$CONTEXT_PATH===undefined) {
            this.__$CONTEXT_PATH = '/context';
        }
        return this.__$CONTEXT_PATH;
    }

    private static __$OVERLAY_PATH : string;
    static get OVERLAY_PATH() : string { 
        if (this.__$OVERLAY_PATH===undefined) {
            this.__$OVERLAY_PATH = '/overlay';
        }
        return this.__$OVERLAY_PATH;
    }

    private static __$OVERLAYS_PATH : string;
    static get OVERLAYS_PATH() : string { 
        if (this.__$OVERLAYS_PATH===undefined) {
            this.__$OVERLAYS_PATH = '/overlays';
        }
        return this.__$OVERLAYS_PATH;
    }

    private static __$STATUS_PATH : string;
    static get STATUS_PATH() : string { 
        if (this.__$STATUS_PATH===undefined) {
            this.__$STATUS_PATH = '/status';
        }
        return this.__$STATUS_PATH;
    }

    private static __$CONTEXT_QUERY_PARAM : string;
    static get CONTEXT_QUERY_PARAM() : string { 
        if (this.__$CONTEXT_QUERY_PARAM===undefined) {
            this.__$CONTEXT_QUERY_PARAM = 'context';
        }
        return this.__$CONTEXT_QUERY_PARAM;
    }

    private static __$PATH_PARAM : string;
    static get PATH_PARAM() : string { 
        if (this.__$PATH_PARAM===undefined) {
            this.__$PATH_PARAM = 'path';
        }
        return this.__$PATH_PARAM;
    }

    private static __$_htmlContent : io.ContentType;
    static get _htmlContent() : io.ContentType { 
        if (this.__$_htmlContent===undefined) {
            this.__$_htmlContent = new io.ContentType("text","html",{
                charset : "utf-8"});
        }
        return this.__$_htmlContent;
    }
    static set _htmlContent(__$value : io.ContentType)  { 
        this.__$_htmlContent = __$value;
    }

    _server : any;

    _printBuffer : core.DartList<string>;

    _overlayContents : core.DartMap<string,string>;

    _diagnosticHandler : any;

    constructor(_server : any,_printBuffer : core.DartList<string>) {
    }
    @defaultConstructor
    GetHandler2(_server : any,_printBuffer : core.DartList<string>) {
        this._overlayContents = new core.DartMap.literal([
        ]);
        this._server = _server;
        this._printBuffer = _printBuffer;
    }
    get diagnosticHandler() : any {
        if (op(Op.EQUALS,this._diagnosticHandler,null)) {
            this._diagnosticHandler = new bare.createInstance(any,null,this._server.analysisServer);
        }
        return this._diagnosticHandler;
    }
    get _completionDomainHandler() : any {
        let analysisServer : any = this._server.analysisServer;
        if (op(Op.EQUALS,analysisServer,null)) {
            return null;
        }
        return analysisServer.handlers.firstWhere((h : any) =>  {
            return is(h, any);
        },{
            orElse : () =>  {
                return null;
            }});
    }
    handleGetRequest(request : io.HttpRequest) : void {
        let path : string = request.uri.path;
        if (path == '/') {
            this._returnRedirect(request,GetHandler2.STATUS_PATH);
        }else if (path == GetHandler2.STATUS_PATH) {
            this._returnServerStatus(request);
        }else if (path == GetHandler2.ANALYSIS_PERFORMANCE_PATH) {
            this._returnAnalysisPerformance(request);
        }else if (path == GetHandler2.COMPLETION_PATH) {
            this._returnCompletionInfo(request);
        }else if (path == GetHandler2.COMMUNICATION_PERFORMANCE_PATH) {
            this._returnCommunicationPerformance(request);
        }else if (path == GetHandler2.CONTEXT_PATH) {
            this._returnContextInfo(request);
        }else if (path == GetHandler2.OVERLAY_PATH) {
            this._returnOverlayContents(request);
        }else if (path == GetHandler2.OVERLAYS_PATH) {
            this._returnOverlaysInfo(request);
        }else {
            this._returnUnknownRequest(request);
        }
    }
    _findFolder(analysisServer : any,contextFilter : string) : any {
        return analysisServer.driverMap.keys.firstWhere((folder : any) =>  {
            return op(Op.EQUALS,folder.path,contextFilter);
        },{
            orElse : () =>  {
                return null;
            }});
    }
    _hasException(driver : any) : boolean {
        return false;
    }
    _returnAnalysisPerformance(request : io.HttpRequest) : void {
        let analysisServer : any = this._server.analysisServer;
        if (op(Op.EQUALS,analysisServer,null)) {
            return this._returnFailure(request,'Analysis server is not running');
        }
        this._writeResponse(request,(buffer : core.DartStringBuffer) =>  {
            this._writePage(buffer,'Analysis Performance',new core.DartList.literal(),(buffer : core.DartStringBuffer) =>  {
                buffer.write('<h3>Analysis Performance</h3>');
                this._writeTwoColumns(buffer,(buffer : core.DartStringBuffer) =>  {
                    buffer.write('<p><b>Performance tag data</b></p>');
                    buffer.write('<table style="border-collapse: separate; border-spacing: 10px 5px;">');
                    this._writeRow(buffer,new core.DartList.literal('Time (in ms)','Percent','Tag name'),{
                        header : true});
                    let tags : core.DartList<any> = PerformanceTag.all.toList();
                    tags.remove(ServerPerformanceStatistics.idle);
                    tags.sort((a : any,b : any) =>  {
                        return op(Op.MINUS,b.elapsedMs,a.elapsedMs);
                    });
                    let totalTagTime : number = 0;
                    tags.forEach((tag : any) =>  {
                        totalTagTime += tag.elapsedMs;
                    });
                    var writeRow : (tag : any) => void = (tag : any) : void =>  {
                        let percent : double = op(Op.DIVIDE,(op(Op.TIMES,tag.elapsedMs,100)),totalTagTime);
                        let percentStr : string = `${new core.DartDouble(percent).toStringAsFixed(2)}%`;
                        this._writeRow(buffer,new core.DartList.literal(tag.elapsedMs,percentStr,tag.label),{
                            classes : new core.DartList.literal("right","right",null)});
                    };
                    tags.forEach(writeRow);
                    buffer.write('</table>');
                },(buffer : core.DartStringBuffer) =>  {
                    buffer.write('<p><b>Task performance data</b></p>');
                    buffer.write('<table style="border-collapse: separate; border-spacing: 10px 5px;">');
                    this._writeRow(buffer,new core.DartList.literal('Task Name','Count','Total Time (in ms)','Average Time (in ms)'),{
                        header : true});
                    let countMap : core.DartMap<core.Type,number> = AnalysisTask.countMap;
                    let stopwatchMap : core.DartMap<core.Type,core.DartStopwatch> = AnalysisTask.stopwatchMap;
                    let taskClasses : core.DartList<core.Type> = stopwatchMap.keys.toList();
                    taskClasses.sort((first : core.Type,second : core.Type) =>  {
                        return new core.DartString(first.toString()).compareTo(second.toString());
                    });
                    let totalTaskTime : number = 0;
                    taskClasses.forEach((taskClass : core.Type) =>  {
                        let count : number = countMap.get(taskClass);
                        if (count == null) {
                            count = 0;
                        }
                        let taskTime : number = stopwatchMap.get(taskClass).elapsedMilliseconds;
                        totalTaskTime += taskTime;
                        this._writeRow(buffer,new core.DartList.literal(taskClass.toString(),count,taskTime,count <= 0 ? '-' : new core.DartDouble((taskTime / count)).toStringAsFixed(3)),{
                            classes : new core.DartList.literal(null,"right","right","right")});
                    });
                    this._writeRow(buffer,new core.DartList.literal('Total','-',totalTaskTime,'-'),{
                        classes : new core.DartList.literal(null,"right","right","right")});
                    buffer.write('</table>');
                });
            });
        });
    }
    _returnCommunicationPerformance(request : io.HttpRequest) : void {
        let analysisServer : any = this._server.analysisServer;
        if (op(Op.EQUALS,analysisServer,null)) {
            return this._returnFailure(request,'Analysis server is not running');
        }
        this._writeResponse(request,(buffer : core.DartStringBuffer) =>  {
            this._writePage(buffer,'Communication Performance',new core.DartList.literal(),(buffer : core.DartStringBuffer) =>  {
                buffer.write('<h3>Communication Performance</h3>');
                this._writeTwoColumns(buffer,(buffer : core.DartStringBuffer) =>  {
                    let perf : any = analysisServer.performanceDuringStartup;
                    let requestCount : number = perf.requestCount;
                    let averageLatency : number = requestCount > 0 ? (op(Op.DIVIDE,perf.requestLatency,requestCount)).round() : 0;
                    let maximumLatency : number = perf.maxLatency;
                    let slowRequestPercent : number = requestCount > 0 ? (op(Op.DIVIDE,op(Op.TIMES,perf.slowRequestCount,100),requestCount)).round() : 0;
                    buffer.write('<h4>Startup</h4>');
                    buffer.write('<table>');
                    this._writeRow(buffer,new core.DartList.literal(requestCount,'requests'),{
                        classes : new core.DartList.literal("right",null)});
                    this._writeRow(buffer,new core.DartList.literal(averageLatency,'ms average latency'),{
                        classes : new core.DartList.literal("right",null)});
                    this._writeRow(buffer,new core.DartList.literal(maximumLatency,'ms maximum latency'),{
                        classes : new core.DartList.literal("right",null)});
                    this._writeRow(buffer,new core.DartList.literal(slowRequestPercent,'% > 150 ms latency'),{
                        classes : new core.DartList.literal("right",null)});
                    if (analysisServer.performanceAfterStartup != null) {
                        let startupTime : number = op(Op.MINUS,analysisServer.performanceAfterStartup.startTime,perf.startTime);
                        this._writeRow(buffer,new core.DartList.literal(startupTime,'ms for initial analysis to complete'));
                    }
                    buffer.write('</table>');
                },(buffer : core.DartStringBuffer) =>  {
                    let perf : any = analysisServer.performanceAfterStartup;
                    if (op(Op.EQUALS,perf,null)) {
                        return;
                    }
                    let requestCount : number = perf.requestCount;
                    let averageLatency : number = requestCount > 0 ? op(Op.DIVIDE,(op(Op.DIVIDE,op(Op.TIMES,perf.requestLatency,10),requestCount)).round(),10) : 0;
                    let maximumLatency : number = perf.maxLatency;
                    let slowRequestPercent : number = requestCount > 0 ? (op(Op.DIVIDE,op(Op.TIMES,perf.slowRequestCount,100),requestCount)).round() : 0;
                    buffer.write('<h4>Current</h4>');
                    buffer.write('<table>');
                    this._writeRow(buffer,new core.DartList.literal(requestCount,'requests'),{
                        classes : new core.DartList.literal("right",null)});
                    this._writeRow(buffer,new core.DartList.literal(averageLatency,'ms average latency'),{
                        classes : new core.DartList.literal("right",null)});
                    this._writeRow(buffer,new core.DartList.literal(maximumLatency,'ms maximum latency'),{
                        classes : new core.DartList.literal("right",null)});
                    this._writeRow(buffer,new core.DartList.literal(slowRequestPercent,'% > 150 ms latency'),{
                        classes : new core.DartList.literal("right",null)});
                    buffer.write('</table>');
                });
            });
        });
    }
    _returnCompletionInfo(request : io.HttpRequest) : void {
        let value : string = request.requestedUri.queryParameters.get('index');
        let index : number = value != null ? core.DartInt.parse(value,{
            onError : (_ : any) =>  {
                return 0;
            }}) : 0;
        this._writeResponse(request,(buffer : core.DartStringBuffer) =>  {
            this._writePage(buffer,'Completion Stats',new core.DartList.literal(),(buffer : core.DartStringBuffer) =>  {
                this._writeCompletionPerformanceDetail(buffer,index);
                this._writeCompletionPerformanceList(buffer);
            });
        });
    }
    _returnContextInfo(request : io.HttpRequest) : void {
        let analysisServer : any = this._server.analysisServer;
        if (op(Op.EQUALS,analysisServer,null)) {
            return this._returnFailure(request,'Analysis server not running');
        }
        let contextFilter : string = request.uri.queryParameters.get(GetHandler2.CONTEXT_QUERY_PARAM);
        if (contextFilter == null) {
            return this._returnFailure(request,`Query parameter ${GetHandler2.CONTEXT_QUERY_PARAM} required`);
        }
        let driver : any = null;
        let folder : any = this._findFolder(analysisServer,contextFilter);
        if (op(Op.EQUALS,folder,null)) {
            return this._returnFailure(request,`Invalid context: ${contextFilter}`);
        }else {
            driver = op(Op.INDEX,analysisServer.driverMap,folder);
        }
        let priorityFiles : core.DartList<string> = driver.priorityFiles;
        let addedFiles : core.DartList<string> = driver.addedFiles.toList();
        let implicitFiles : core.DartList<string> = driver.knownFiles.difference(driver.addedFiles).toList();
        addedFiles.sort();
        implicitFiles.sort();
        var _writeFiles : (buffer : core.DartStringBuffer,title : string,files : core.DartList<string>) => void = (buffer : core.DartStringBuffer,title : string,files : core.DartList<string>) : void =>  {
            buffer.write(`<h3>${title}</h3>`);
            if (files == null || files.isEmpty) {
                buffer.write('<p>None</p>');
            }else {
                buffer.write('<p><table style="width: 100%">');
                for(let file of files) {
                    buffer.write('<tr><td>');
                    buffer.write(file);
                    buffer.write('</td><td>');
                    if (this._overlayContents.containsKey(files)) {
                        buffer.write(GetHandler2.makeLink(GetHandler2.OVERLAY_PATH,new core.DartMap.literal([
                            [GetHandler2.PATH_PARAM,file]]),'overlay'));
                    }
                    buffer.write('</td></tr>');
                }
                buffer.write('</table></p>');
            }
        };
        var writeOptions : (buffer : core.DartStringBuffer,options : any,_namedArguments? : {writeAdditionalOptions? : (buffer : core.DartStringBuffer) => void}) => void = (buffer : core.DartStringBuffer,options : any,_namedArguments? : {writeAdditionalOptions? : (buffer : core.DartStringBuffer) => void}) : void =>  {
            let {writeAdditionalOptions} = Object.assign({
            }, _namedArguments );
            if (op(Op.EQUALS,options,null)) {
                buffer.write('<p>No option information available.</p>');
                return;
            }
            buffer.write('<p>');
            this._writeOption(buffer,'Analyze functon bodies',options.analyzeFunctionBodies);
            this._writeOption(buffer,'Enable strict call checks',options.enableStrictCallChecks);
            this._writeOption(buffer,'Enable super mixins',options.enableSuperMixins);
            this._writeOption(buffer,'Generate dart2js hints',options.dart2jsHint);
            this._writeOption(buffer,'Generate errors in implicit files',options.generateImplicitErrors);
            this._writeOption(buffer,'Generate errors in SDK files',options.generateSdkErrors);
            this._writeOption(buffer,'Generate hints',options.hint);
            this._writeOption(buffer,'Incremental resolution',options.incremental);
            this._writeOption(buffer,'Incremental resolution with API changes',options.incrementalApi);
            this._writeOption(buffer,'Preserve comments',options.preserveComments);
            this._writeOption(buffer,'Strong mode',options.strongMode);
            this._writeOption(buffer,'Strong mode hints',options.strongModeHints);
            if (writeAdditionalOptions != null) {
                writeAdditionalOptions(buffer);
            }
            buffer.write('</p>');
        };
        this._writeResponse(request,(buffer : core.DartStringBuffer) =>  {
            let contextName : string = lib4.basename(contextFilter);
            this._writePage(buffer,`Context: ${contextName}`,new core.DartList.literal(contextFilter),(buffer : core.DartStringBuffer) =>  {
                buffer.write('<h3>Configuration</h3>');
                this._writeColumns(buffer,new core.DartList.literal<(buffer : core.DartStringBuffer) => void>((buffer : core.DartStringBuffer) =>  {
                    buffer.write('<p><b>Context Options</b></p>');
                    writeOptions(buffer,driver.analysisOptions);
                },(buffer : core.DartStringBuffer) =>  {
                    buffer.write('<p><b>SDK Context Options</b></p>');
                    let sdk : any = ((t)=>(!!t)?t.dartSdk:null)(((t)=>(!!t)?t.sourceFactory:null)(driver));
                    writeOptions(buffer,((t)=>(!!t)?t.analysisOptions:null)(((t)=>(!!t)?t.context:null)(sdk)),{
                        writeAdditionalOptions : (buffer : core.DartStringBuffer) =>  {
                            if (is(sdk, any)) {
                                this._writeOption(buffer,'Use summaries',sdk.useSummary);
                            }
                        }});
                },(buffer : core.DartStringBuffer) =>  {
                    let lints : core.DartList<any> = driver.analysisOptions.lintRules;
                    buffer.write('<p><b>Lints</b></p>');
                    if (lints.isEmpty) {
                        buffer.write('<p>none</p>');
                    }else {
                        for(let lint of lints) {
                            buffer.write('<p>');
                            buffer.write(lint.runtimeType);
                            buffer.write('</p>');
                        }
                    }
                    let errorProcessors : core.DartList<any> = driver.analysisOptions.errorProcessors;
                    let processorCount : number = (((t)=>(!!t)?t.length:null)(errorProcessors) || 0);
                    buffer.write(`<p><b>Error Processor count</b>: ${processorCount}</p>`);
                }));
                let sourceFactory : any = driver.sourceFactory;
                if (is(sourceFactory, any)) {
                    buffer.write('<h3>Resolvers</h3>');
                    for(let resolver of sourceFactory.resolvers) {
                        buffer.write('<p>');
                        buffer.write(resolver.runtimeType);
                        if (is(resolver, any)) {
                            let sdk : any = resolver.dartSdk;
                            buffer.write(' (sdk = ');
                            buffer.write(sdk.runtimeType);
                            if (is(sdk, any)) {
                                buffer.write(' (path = ');
                                buffer.write(sdk.directory.path);
                                buffer.write(')');
                            }else if (is(sdk, any)) {
                                buffer.write(' (map = ');
                                this._writeMapOfStringToString(buffer,sdk.urlMappings);
                                buffer.write(')');
                            }
                            buffer.write(')');
                        }else if (is(resolver, any)) {
                            buffer.write(' (map = ');
                            this._writeMapOfStringToString(buffer,resolver.urlMappings);
                            buffer.write(')');
                        }
                        buffer.write('</p>');
                    }
                }
                _writeFiles(buffer,`Priority Files (${priorityFiles.length})`,priorityFiles);
                _writeFiles(buffer,`Added Files (${addedFiles.length})`,addedFiles);
                _writeFiles(buffer,`Implicitly Analyzed Files (${implicitFiles.length})`,implicitFiles);
            });
        });
    }
    _returnFailure(request : io.HttpRequest,message : string) : void {
        this._writeResponse(request,(buffer : core.DartStringBuffer) =>  {
            this._writePage(buffer,'Failure',new core.DartList.literal(),(buffer : core.DartStringBuffer) =>  {
                buffer.write(convert.properties.HTML_ESCAPE.convert(message));
            });
        });
    }
    _returnOverlayContents(request : io.HttpRequest) : void {
        let path : string = request.requestedUri.queryParameters.get(GetHandler2.PATH_PARAM);
        if (path == null) {
            return this._returnFailure(request,`Query parameter ${GetHandler2.PATH_PARAM} required`);
        }
        let contents : string = this._overlayContents.get(path);
        this._writeResponse(request,(buffer : core.DartStringBuffer) =>  {
            this._writePage(buffer,'Overlay',new core.DartList.literal(),(buffer : core.DartStringBuffer) =>  {
                buffer.write(`<pre>${convert.properties.HTML_ESCAPE.convert(contents)}</pre>`);
            });
        });
    }
    _returnOverlaysInfo(request : io.HttpRequest) : void {
        let analysisServer : any = this._server.analysisServer;
        if (op(Op.EQUALS,analysisServer,null)) {
            return this._returnFailure(request,'Analysis server is not running');
        }
        this._writeResponse(request,(buffer : core.DartStringBuffer) =>  {
            this._writePage(buffer,'Overlay information',new core.DartList.literal(),(buffer : core.DartStringBuffer) =>  {
                buffer.write('<table border="1">');
                this._overlayContents.clear();
                let overlayState : any = analysisServer.overlayState;
                overlayState.accept((fullName : string,stamp : number,contents : string) =>  {
                    buffer.write('<tr>');
                    let link : string = GetHandler2.makeLink(GetHandler2.OVERLAY_PATH,new core.DartMap.literal([
                        [GetHandler2.PATH_PARAM,fullName]]),fullName);
                    let time : core.DartDateTime = new core.DartDateTime.fromMillisecondsSinceEpoch(stamp);
                    this._writeRow(buffer,new core.DartList.literal(link,time));
                    this._overlayContents.set(fullName,contents);
                });
                let count : number = this._overlayContents.length;
                buffer.write(`<tr><td colspan="2">Total: ${count} entries</td></tr>`);
                buffer.write('</table>');
            });
        });
    }
    _returnRedirect(request : io.HttpRequest,pathFragment : string) : void {
        let response : io.HttpResponse = request.response;
        response.redirect(request.uri.resolve(pathFragment));
    }
    _returnServerStatus(request : io.HttpRequest) : void {
        this._writeResponse(request,(buffer : core.DartStringBuffer) =>  {
            this._writePage(buffer,'Status',new core.DartList.literal(),(buffer : core.DartStringBuffer) =>  {
                if (this._writeServerStatus(buffer)) {
                    this._writeAnalysisStatus(buffer);
                    this._writeEditStatus(buffer);
                    this._writeExecutionStatus(buffer);
                    this._writePluginStatus(buffer);
                    this._writeRecentOutput(buffer);
                }
            });
        });
    }
    _returnUnknownRequest(request : io.HttpRequest) : void {
        this._writeResponse(request,(buffer : core.DartStringBuffer) =>  {
            this._writePage(buffer,'Analysis Server',new core.DartList.literal(),(buffer : core.DartStringBuffer) =>  {
                buffer.write('<h3>Unknown page: ');
                buffer.write(request.uri.path);
                buffer.write('</h3>');
                buffer.write(`        <p>\n        You have reached an un-recognized page. If you reached this page by\n        following a link from a status page, please report the broken link to\n        the Dart analyzer team:\n        <a>https://github.com/dart-lang/sdk/issues/new</a>.\n        </p><p>\n        If you mistyped the URL, you can correct it or return to\n        ${GetHandler2.makeLink(GetHandler2.STATUS_PATH,new core.DartMap.literal([
                ]),'the main status page')}.\n        </p>`);
            });
        });
    }
    _twoDigit(value : number) : string {
        return new core.DartString(new core.DartInt(value).toString()).padLeft(2,'0');
    }
    _writeAnalysisStatus(buffer : core.DartStringBuffer) : void {
        let analysisServer : any = this._server.analysisServer;
        let driverMap : core.DartMap<any,any> = analysisServer.driverMap;
        let folders : core.DartList<any> = driverMap.keys.toList();
        folders.sort((first : any,second : any) =>  {
            return first.shortName.compareTo(second.shortName);
        });
        buffer.write('<h3>Analysis Domain</h3>');
        this._writeTwoColumns(buffer,(buffer : core.DartStringBuffer) =>  {
            buffer.write('<p>Using package resolver provider: ');
            buffer.write(this._server.packageResolverProvider != null);
            buffer.write('</p>');
            buffer.write(GetHandler2.makeLink(GetHandler2.OVERLAYS_PATH,new core.DartMap.literal([
            ]),'Overlay information'));
            buffer.write('<p><b>Analysis Contexts</b></p>');
            let first : boolean = true;
            folders.forEach((folder : any) =>  {
                if (first) {
                    first = false;
                }else {
                    buffer.write('<br>');
                }
                let key : string = folder.shortName;
                buffer.write(GetHandler2.makeLink(GetHandler2.CONTEXT_PATH,new core.DartMap.literal([
                    [GetHandler2.CONTEXT_QUERY_PARAM,folder.path]]),key,this._hasException(driverMap.get(folder))));
                if (!folder.getChild('.packages').exists) {
                    buffer.write(' [no .packages file]');
                }
            });
            let freq : number = AnalysisServer.performOperationDelayFrequency;
            let delay : string = freq > 0 ? `1 ms every ${freq} ms` : 'off';
            buffer.write('<p><b>Performance Data</b></p>');
            buffer.write(GetHandler2.makeLink(GetHandler2.ANALYSIS_PERFORMANCE_PATH,new core.DartMap.literal([
            ]),'Analysis performance'));
            buffer.write('<br>');
            buffer.write(`Perform operation delay: ${delay}`);
            buffer.write('<br>');
        },(buffer : core.DartStringBuffer) =>  {
            this._writeSubscriptionMap(buffer,AnalysisService.VALUES,analysisServer.analysisServices);
        });
    }
    _writeColumns(buffer : core.DartStringBuffer,columns : core.DartList<(buffer : core.DartStringBuffer) => void>) : void {
        buffer.write('<table class="column"><tr class="column"><td class="column">');
        let count : number = columns.length;
        for(let i : number = 0; i < count; i++){
            if (i > 0) {
                buffer.write('</td><td class="column">');
            }
            (columns[i])(buffer);
        }
        buffer.write('</td></tr></table>');
    }
    _writeCompletionPerformanceDetail(buffer : core.DartStringBuffer,index : number) : void {
        let handler : any = this._completionDomainHandler;
        let performance : any;
        if (handler != null) {
            let list : core.DartList<any> = handler.performanceList;
            if (list != null && list.isNotEmpty) {
                performance = list[math.max(0,math.min(list.length - 1,index))];
            }
        }
        if (op(Op.EQUALS,performance,null)) {
            buffer.write('<h3>Completion Performance Detail</h3>');
            buffer.write('<p>No completions yet</p>');
            return;
        }
        buffer.write('<h3>Completion Performance Detail</h3>');
        buffer.write(`<p>${performance.startTimeAndMs} for ${performance.source}`);
        buffer.write('<table>');
        this._writeRow(buffer,new core.DartList.literal('Elapsed','','Operation'),{
            header : true});
        performance.operations.forEach((op : any) =>  {
            let elapsed : string = op.elapsed != null ? op.elapsed.toString() : '???';
            this._writeRow(buffer,new core.DartList.literal(elapsed,'&nbsp;&nbsp;',op.name));
        });
        buffer.write('</table>');
        buffer.write('<p><b>Compute Cache Performance</b>: ');
        if (op(Op.EQUALS,handler.computeCachePerformance,null)) {
            buffer.write('none');
        }else {
            let elapsed : number = handler.computeCachePerformance.elapsedInMilliseconds;
            let source : any = handler.computeCachePerformance.source;
            buffer.write(` ${elapsed} ms for ${source}`);
        }
        buffer.write('</p>');
    }
    _writeCompletionPerformanceList(buffer : core.DartStringBuffer) : void {
        let handler : any = this._completionDomainHandler;
        buffer.write('<h3>Completion Performance List</h3>');
        if (op(Op.EQUALS,handler,null)) {
            return;
        }
        buffer.write('<table>');
        this._writeRow(buffer,new core.DartList.literal('Start Time','','First (ms)','','Complete (ms)','','# Notifications','','# Suggestions','','Snippet'),{
            header : true});
        let index : number = 0;
        for(let performance of handler.performanceList) {
            let link : string = GetHandler2.makeLink(GetHandler2.COMPLETION_PATH,new core.DartMap.literal([
                ['index',`${index}`]]),`${performance.startTimeAndMs}`);
            this._writeRow(buffer,new core.DartList.literal(link,'&nbsp;&nbsp;',performance.firstNotificationInMilliseconds,'&nbsp;&nbsp;',performance.elapsedInMilliseconds,'&nbsp;&nbsp;',performance.notificationCount,'&nbsp;&nbsp;',performance.suggestionCount,'&nbsp;&nbsp;',convert.properties.HTML_ESCAPE.convert(performance.snippet)));
            ++index;
        }
        buffer.write('</table>');
        buffer.write('      <p><strong>First (ms)</strong> - the number of milliseconds\n        from when completion received the request until the first notification\n        with completion results was queued for sending back to the client.\n      <p><strong>Complete (ms)</strong> - the number of milliseconds\n        from when completion received the request until the final notification\n        with completion results was queued for sending back to the client.\n      <p><strong># Notifications</strong> - the total number of notifications\n        sent to the client with completion results for this request.\n      <p><strong># Suggestions</strong> - the number of suggestions\n        sent to the client in the first notification, followed by a comma,\n        followed by the number of suggestions send to the client\n        in the last notification. If there is only one notification,\n        then there will be only one number in this column.');
    }
    _writeEditStatus(buffer : core.DartStringBuffer) : void {
        buffer.write('<h3>Edit Domain</h3>');
        this._writeTwoColumns(buffer,(buffer : core.DartStringBuffer) =>  {
            buffer.write(GetHandler2.makeLink(GetHandler2.COMPLETION_PATH,new core.DartMap.literal([
            ]),'Completion stats'));
        },(buffer : core.DartStringBuffer) =>  {
        });
    }
    _writeException(buffer : core.DartStringBuffer,caughtException : any,_namedArguments? : {isCause? : boolean}) : void {
        let {isCause} = Object.assign({
            "isCause" : false}, _namedArguments );
        let exception : core.DartObject = caughtException.exception;
        if (is(exception, any)) {
            buffer.write('<p>');
            if (isCause) {
                buffer.write('Caused by ');
            }
            buffer.write(exception.message);
            buffer.write('</p>');
            this._writeStackTrace(buffer,caughtException.stackTrace);
            let cause : any = exception.cause;
            if (cause != null) {
                buffer.write('<blockquote>');
                this._writeException(buffer,cause,{
                    isCause : true});
                buffer.write('</blockquote>');
            }
        }else {
            buffer.write('<p>');
            if (isCause) {
                buffer.write('Caused by ');
            }
            buffer.write(exception.toString());
            buffer.write('<p>');
            this._writeStackTrace(buffer,caughtException.stackTrace);
        }
    }
    _writeExecutionStatus(buffer : core.DartStringBuffer) : void {
        let analysisServer : any = this._server.analysisServer;
        let handler : any = analysisServer.handlers.firstWhere((handler : any) =>  {
            return is(handler, any);
        },{
            orElse : () =>  {
                return null;
            }});
        let services : core.DartSet<any> = new core.DartSet<any>();
        if (handler.onFileAnalyzed != null) {
            services.add(ExecutionService.LAUNCH_DATA);
        }
        if (handler != null) {
            buffer.write('<h3>Execution Domain</h3>');
            this._writeTwoColumns(buffer,(buffer : core.DartStringBuffer) =>  {
                buffer.write('<br>');
            },(buffer : core.DartStringBuffer) =>  {
                this._writeSubscriptionList(buffer,ExecutionService.VALUES,services);
            });
        }
    }
    _writeMapOfStringToString(buffer : core.DartStringBuffer,map : core.DartMap<string,string>) : void {
        let keys : core.DartList<string> = map.keys.toList();
        keys.sort();
        let length : number = keys.length;
        buffer.write('{');
        for(let i : number = 0; i < length; i++){
            buffer.write('<br>');
            let key : string = keys[i];
            if (i > 0) {
                buffer.write(', ');
            }
            buffer.write(key);
            buffer.write(' = ');
            buffer.write(map.get(key));
        }
        buffer.write('<br>}');
    }
    _writeOption(buffer : core.DartStringBuffer,name : string,value : core.DartObject,_namedArguments? : {last? : boolean}) : void {
        let {last} = Object.assign({
            "last" : false}, _namedArguments );
        buffer.write(name);
        buffer.write(' = ');
        buffer.write(value.toString());
        if (!last) {
            buffer.write('<br>');
        }
    }
    _writePage(buffer : core.DartStringBuffer,title : string,subtitles : core.DartList<string>,body : (buffer : core.DartStringBuffer) => void) : void {
        let now : core.DartDateTime = new core.DartDateTime.now();
        let date : string = `${now.month}/${now.day}/${now.year}`;
        let time : string = `${now.hour}:${this._twoDigit(now.minute)}:${this._twoDigit(now.second)}.${now.millisecond}`;
        buffer.write('<!DOCTYPE html>');
        buffer.write('<html>');
        buffer.write('<head>');
        buffer.write('<meta charset="utf-8">');
        buffer.write('<meta name="viewport" content="width=device-width, initial-scale=1.0">');
        buffer.write('<title>Analysis Server</title>');
        buffer.write('<style>');
        buffer.write('a {color: #0000DD; text-decoration: none;}');
        buffer.write('a:link.error {background-color: #FFEEEE;}');
        buffer.write('a:visited.error {background-color: #FFEEEE;}');
        buffer.write('a:hover.error {background-color: #FFEEEE;}');
        buffer.write('a:active.error {background-color: #FFEEEE;}');
        buffer.write('div.subtitle {float: right; font-weight: normal; font-size: 1rem;}');
        buffer.write('h2 {margin-top: 0;}');
        buffer.write('h3 {border-bottom: 1px #DDD solid; margin-bottom: 0em;}');
        buffer.write('p {margin-top: 0.5em; margin-bottom: 0;}');
        buffer.write('p.commentary {margin-top: 1em; margin-bottom: 1em; margin-left: 2em; font-style: italic;}');
        buffer.write('table.column {border: 0px solid black; width: 100%; table-layout: fixed;}');
        buffer.write('td.column {vertical-align: top; width: 50%;}');
        buffer.write('td.right {text-align: right;}');
        buffer.write('th {text-align: left; vertical-align:top;}');
        buffer.write('tr {vertical-align:top;}');
        buffer.write('</style>');
        buffer.write('</head>');
        buffer.write('<body>');
        buffer.write(`<h2>${title} <div class="subtitle">${date}, ${time}</div></h2>`);
        if (subtitles != null && subtitles.isNotEmpty) {
            let first : boolean = true;
            for(let subtitle of subtitles) {
                if (first) {
                    first = false;
                }else {
                    buffer.write('<br>');
                }
                buffer.write('<b>');
                buffer.write(subtitle);
                buffer.write('</b>');
            }
        }
        try {
            body(buffer);
        } catch (__error__) {

            {
                let stackTrace : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                let exception = __error__;
                buffer.write('<h3>Exception while creating page</h3>');
                this._writeException(buffer,new bare.createInstance(any,null,exception,stackTrace));
            }
        }
        buffer.write('</body>');
        buffer.write('</html>');
    }
    _writePluginStatus(buffer : core.DartStringBuffer) : void {
        var writePlugin : (plugin : any) => void = (plugin : any) : void =>  {
            buffer.write(plugin.uniqueIdentifier);
            buffer.write(' (');
            buffer.write(plugin.runtimeType);
            buffer.write(')<br>');
        };
        buffer.write('<h3>Plugin Status</h3><p>');
        writePlugin(AnalysisEngine.instance.enginePlugin);
        writePlugin(this._server.serverPlugin);
        for(let plugin of this._server.analysisServer.userDefinedPlugins) {
            writePlugin(plugin);
        }
        buffer.write('<p>');
    }
    _writeRecentOutput(buffer : core.DartStringBuffer) : void {
        buffer.write('<h3>Recent Output</h3>');
        let output : string = convert.properties.HTML_ESCAPE.convert(this._printBuffer.join('\n'));
        if (new core.DartString(output).isEmpty) {
            buffer.write('<i>none</i>');
        }else {
            buffer.write('<pre>');
            buffer.write(output);
            buffer.write('</pre>');
        }
    }
    _writeResponse(request : io.HttpRequest,writePage : (buffer : core.DartStringBuffer) => void) : void {
        let response : io.HttpResponse = request.response;
        response.statusCode = io.HttpStatus.OK;
        response.headers.contentType = GetHandler2._htmlContent;
        try {
            let buffer : core.DartStringBuffer = new core.DartStringBuffer();
            try {
                writePage(buffer);
            } catch (__error__) {

                {
                    let stackTrace : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                    let exception = __error__;
                    buffer.clear();
                    this._writePage(buffer,'Internal Exception',new core.DartList.literal(),(buffer : core.DartStringBuffer) =>  {
                        this._writeException(buffer,new bare.createInstance(any,null,exception,stackTrace));
                    });
                }
            }
            response.write(buffer.toString());
        } finally {
            response.close();
        }
    }
    _writeRow(buffer : core.DartStringBuffer,columns : core.DartList<core.DartObject>,_namedArguments? : {header? : boolean,classes? : core.DartList<string>}) : void {
        let {header,classes} = Object.assign({
            "header" : false}, _namedArguments );
        buffer.write('<tr>');
        let count : number = columns.length;
        let maxClassIndex : number = classes == null ? 0 : classes.length - 1;
        for(let i : number = 0; i < count; i++){
            let classAttribute : string = '';
            if (classes != null) {
                let className : string = classes[math.min(i,maxClassIndex)];
                if (className != null) {
                    classAttribute = ` class="${className}"`;
                }
            }
            if (header) {
                buffer.write(`<th${classAttribute}>`);
            }else {
                buffer.write(`<td${classAttribute}>`);
            }
            if (is(columns[i], "number")) {
                buffer.write(_writeWithSeparators(columns[i]));
            }else {
                buffer.write(columns[i]);
            }
            if (header) {
                buffer.write('</th>');
            }else {
                buffer.write('</td>');
            }
        }
        buffer.write('</tr>');
    }
    _writeServerStatus(buffer : core.DartStringBuffer) : boolean {
        let analysisServer : any = this._server.analysisServer;
        let services : core.DartSet<any> = analysisServer.serverServices;
        buffer.write('<h3>Server Domain</h3>');
        this._writeTwoColumns(buffer,(buffer : core.DartStringBuffer) =>  {
            buffer.write('<p><b>State</b></p>');
            if (op(Op.EQUALS,analysisServer,null)) {
                buffer.write('Status: <span style="color:red">Not running</span>');
                return;
            }
            buffer.write('Status: Running<br>');
            buffer.write('New analysis driver: ');
            buffer.write(analysisServer.options.enableNewAnalysisDriver);
            buffer.write('<br>');
            buffer.write('Instrumentation: ');
            if (AnalysisEngine.instance.instrumentationService.isActive) {
                buffer.write('<strong>active</strong>');
            }else {
                buffer.write('inactive');
            }
            buffer.write('<br>');
            buffer.write('Process ID: ');
            buffer.write(io.properties.pid);
            buffer.write('<p><b>Performance Data</b></p>');
            buffer.write(GetHandler2.makeLink(GetHandler2.COMMUNICATION_PERFORMANCE_PATH,new core.DartMap.literal([
            ]),'Communication performance'));
            if (AnalysisEngine.instance.instrumentationService.isActive) {
                buffer.write('<p><b>Instrumentation</b></p>');
                let instrumentationServer : any = AnalysisEngine.instance.instrumentationService.instrumentationServer;
                let description : string = instrumentationServer.describe;
                let htmlEscape : convert.HtmlEscape = new convert.HtmlEscape(convert.HtmlEscapeMode.ELEMENT);
                description = htmlEscape.convert(description);
                let urlRegExp : core.DartRegExp = new core.DartRegExp('[http|https]+:\/*(\S+)');
                description = new core.DartString(description).replaceAllMapped(urlRegExp,(match : core.DartMatch) =>  {
                    return `<a href="${match.group(0)}">${match.group(1)}</a>`;
                });
                buffer.write(new core.DartString(description).replaceAll('\n','<br>'));
            }
        },(buffer : core.DartStringBuffer) =>  {
            this._writeSubscriptionList(buffer,ServerService.VALUES,services);
            buffer.write('<p><b>Versions</b></p>');
            buffer.write(`Dart SDK: ${io.Platform.version}<br>`);
            buffer.write(`Analysis server version: ${AnalysisServer.VERSION}<br>`);
        });
        return analysisServer != null;
    }
    _writeStackTrace(buffer : core.DartStringBuffer,stackTrace : core.DartStackTrace) : void {
        if (stackTrace != null) {
            let trace : string = new core.DartString(stackTrace.toString()).replaceAll('#','<br>#');
            if (new core.DartString(trace).startsWith('<br>#')) {
                trace = new core.DartString(trace).substring(4);
            }
            buffer.write('<p>');
            buffer.write(trace);
            buffer.write('</p>');
        }
    }
    _writeSubscriptionInList(buffer : core.DartStringBuffer,service : any,subscribedServices : core.DartSet<any>) : void {
        if (subscribedServices.contains(service)) {
            buffer.write('<code>+ </code>');
        }else {
            buffer.write('<code>- </code>');
        }
        buffer.write(service.name);
        buffer.write('<br>');
    }
    _writeSubscriptionInMap(buffer : core.DartStringBuffer,service : any,subscribedPaths : core.DartSet<string>) : void {
        buffer.write('<p>');
        buffer.write(service.name);
        buffer.write('<br>');
        if (subscribedPaths != null && subscribedPaths.isNotEmpty) {
            let paths : core.DartList<string> = subscribedPaths.toList();
            paths.sort();
            for(let path of paths) {
                buffer.write(`${path}<br>`);
            }
        }
        buffer.write('</p>');
    }
    _writeSubscriptionList(buffer : core.DartStringBuffer,allServices : core.DartList<any>,subscribedServices : core.DartSet<any>) : void {
        buffer.write('<p><b>Subscriptions</b></p>');
        for(let service of allServices) {
            this._writeSubscriptionInList(buffer,service,subscribedServices);
            buffer.write('<br>');
        }
    }
    _writeSubscriptionMap(buffer : core.DartStringBuffer,allServices : core.DartList<any>,subscribedServices : core.DartMap<any,core.DartSet<string>>) : void {
        buffer.write('<p><b>Subscriptions</b></p>');
        for(let service of allServices) {
            this._writeSubscriptionInMap(buffer,service,subscribedServices.get(service));
        }
    }
    _writeTwoColumns(buffer : core.DartStringBuffer,leftColumn : (buffer : core.DartStringBuffer) => void,rightColumn : (buffer : core.DartStringBuffer) => void) : void {
        buffer.write('<table class="column"><tr class="column"><td class="column">');
        leftColumn(buffer);
        buffer.write('</td><td class="column">');
        rightColumn(buffer);
        buffer.write('</td></tr></table>');
    }
    static makeLink(path : string,params : core.DartMap<string,string>,innerHtml : string,hasError? : boolean) : string {
        hasError = hasError || false;
        let uri : lib7.Uri = params.isEmpty ? new lib7.Uri({
            path : path}) : new lib7.Uri({
            path : path,queryParameters : params});
        let href : string = convert.properties.HTML_ESCAPE.convert(uri.toString());
        let classAttribute : string = hasError ? ' class="error"' : '';
        return `<a href="${href}" ${classAttribute}>${innerHtml}</a>`;
    }
}

export class properties {
}
