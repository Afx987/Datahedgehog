/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/operation/operation_analysis.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/analysis_server/lib/src/protocol_server";

export var runWithActiveContext : (context : any,f : () => any) => any = (context : any,f : () => any) =>  {
    if (is(context, any) && !context.isActive) {
        context.isActive = true;
        try {
            return f();
        } finally {
            context.isActive = false;
        }
    }else {
        return f();
    }
};
export var scheduleImplementedNotification : (server : any,files : core.DartIterable<string>) => any = (server : any,files : core.DartIterable<string>) => new async.Future.fromPromise(( async () : Promise<any> =>  {
    let searchEngine : any = server.searchEngine;
    if (op(Op.EQUALS,searchEngine,null)) {
        return;
    }
    for(let file of files) {
        let unitElement : any = server.getCompilationUnitElement(file);
        if (unitElement != null) {
            try {
                let computer : any = new bare.createInstance(any,null,searchEngine,unitElement);
                await computer.compute();
                let params = new bare.createInstance(any,null,file,computer.classes,computer.members);
                server.sendNotification(params.toNotification());
            } catch (__error__) {

                {
                    let stackTrace : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                    let exception = __error__;
                    server.sendServerErrorNotification('Failed to send analysis.implemented notification.',exception,stackTrace);
                }
            }
        }
    }
})());
export var scheduleIndexOperation : (server : any,file : string,dartUnit : any) => void = (server : any,file : string,dartUnit : any) : void =>  {
    if (server.index != null) {
        let context : any = resolutionMap.elementDeclaredByCompilationUnit(dartUnit).context;
        server.addOperation(new _DartIndexOperation(context,file,dartUnit));
    }
};
export var scheduleNotificationOperations : (server : any,source : any,file : string,lineInfo : any,context : any,parsedDartUnit : any,resolvedDartUnit : any,errors : core.DartList<any>) => void = (server : any,source : any,file : string,lineInfo : any,context : any,parsedDartUnit : any,resolvedDartUnit : any,errors : core.DartList<any>) : void =>  {
    let containingContext : any = server.getContainingContext(file);
    if (containingContext != null && context != containingContext) {
        return;
    }
    let dartUnit : any = (resolvedDartUnit || parsedDartUnit);
    if (resolvedDartUnit != null) {
        if (server.hasAnalysisSubscription(lib3.AnalysisService.HIGHLIGHTS,file)) {
            server.scheduleOperation(new _DartHighlightsOperation(context,file,resolvedDartUnit));
        }
        if (server.hasAnalysisSubscription(lib3.AnalysisService.NAVIGATION,file)) {
            server.scheduleOperation(new NavigationOperation(context,source));
        }
        if (server.hasAnalysisSubscription(lib3.AnalysisService.OCCURRENCES,file)) {
            server.scheduleOperation(new OccurrencesOperation(context,source));
        }
        if (server.hasAnalysisSubscription(lib3.AnalysisService.OVERRIDES,file)) {
            server.scheduleOperation(new _DartOverridesOperation(context,file,resolvedDartUnit));
        }
    }
    if (dartUnit != null) {
        if (server.hasAnalysisSubscription(lib3.AnalysisService.OUTLINE,file)) {
            let sourceKind : any = context.getKindOf(source);
            server.scheduleOperation(new _DartOutlineOperation(context,file,lineInfo,sourceKind,dartUnit));
        }
    }
    if (server.shouldSendErrorsNotificationFor(file)) {
        server.scheduleOperation(new _NotificationErrorsOperation(context,file,lineInfo,errors));
    }
};
export var sendAnalysisNotificationAnalyzedFiles : (server : any) => void = (server : any) : void =>  {
    _sendNotification(server,() =>  {
        let analyzedFiles : core.DartSet<string>;
        if (server.options.enableNewAnalysisDriver) {
            analyzedFiles = server.driverMap.values.map((driver : any) =>  {
                return driver.knownFiles;
            }).expand((files : any) =>  {
                return files;
            }).toSet();
        }else {
            let collector : any = new bare.createInstance(any,null,server.analysisContexts.toList());
            analyzedFiles = collector.collectLibraryDependencies();
        }
        let prevAnalyzedFiles : core.DartSet<string> = server.prevAnalyzedFiles;
        if (prevAnalyzedFiles != null && prevAnalyzedFiles.length == analyzedFiles.length && prevAnalyzedFiles.difference(analyzedFiles).isEmpty) {
            return;
        }
        server.prevAnalyzedFiles = analyzedFiles;
        let params : any = new bare.createInstance(any,null,analyzedFiles.toList());
        server.sendNotification(params.toNotification());
    });
};
export var sendAnalysisNotificationErrors : (server : any,context : any,file : string,lineInfo : any,errors : core.DartList<any>) => void = (server : any,context : any,file : string,lineInfo : any,errors : core.DartList<any>) : void =>  {
    _sendNotification(server,() =>  {
        if (errors == null) {
            errors = new core.DartList.literal<any>();
        }
        let analysisOptions : any = context.analysisOptions;
        let serverErrors = null /*topLevl*/.doAnalysisError_listFromEngine(analysisOptions,lineInfo,errors);
        let params = new bare.createInstance(any,null,file,serverErrors);
        server.sendNotification(params.toNotification());
    });
};
export var sendAnalysisNotificationFlushResults : (server : any,files : core.DartList<string>) => void = (server : any,files : core.DartList<string>) : void =>  {
    _sendNotification(server,() =>  {
        if (files != null && files.isNotEmpty) {
            let params = new bare.createInstance(any,null,files);
            server.sendNotification(params.toNotification());
        }
    });
};
export var sendAnalysisNotificationHighlights : (server : any,file : string,dartUnit : any) => void = (server : any,file : string,dartUnit : any) : void =>  {
    _sendNotification(server,() =>  {
        let regions : core.DartList<any>;
        if (server.options.useAnalysisHighlight2) {
            regions = new bare.createInstance(any,null,dartUnit).compute();
        }else {
            regions = new bare.createInstance(any,null,dartUnit).compute();
        }
        let params = new bare.createInstance(any,null,file,regions);
        server.sendNotification(params.toNotification());
    });
};
export var sendAnalysisNotificationNavigation : (server : any,context : any,source : any) => void = (server : any,context : any,source : any) : void =>  {
    _sendNotification(server,() =>  {
        let collector : any = computeNavigation(server,context,source,null,null);
        let file : string = source.fullName;
        let params = new bare.createInstance(any,null,file,collector.regions,collector.targets,collector.files);
        server.sendNotification(params.toNotification());
    });
};
export var sendAnalysisNotificationOccurrences : (server : any,context : any,source : any) => void = (server : any,context : any,source : any) : void =>  {
    _sendNotification(server,() =>  {
        let collector : any = computeOccurrences(server,context,source);
        let file : string = source.fullName;
        let params = new bare.createInstance(any,null,file,collector.allOccurrences);
        server.sendNotification(params.toNotification());
    });
};
export var sendAnalysisNotificationOutline : (server : any,file : string,lineInfo : any,sourceKind : any,dartUnit : any) => void = (server : any,file : string,lineInfo : any,sourceKind : any,dartUnit : any) : void =>  {
    _sendNotification(server,() =>  {
        let fileKind : any = lib3.FileKind.LIBRARY;
        if (op(Op.EQUALS,sourceKind,SourceKind.LIBRARY)) {
            fileKind = lib3.FileKind.LIBRARY;
        }else if (op(Op.EQUALS,sourceKind,SourceKind.PART)) {
            fileKind = lib3.FileKind.PART;
        }
        let libraryName : string = _computeLibraryName(dartUnit);
        let computer = new bare.createInstance(any,null,file,lineInfo,dartUnit);
        let outline : any = computer.compute();
        let params = new bare.createInstance(any,null,file,fileKind,outline,{
            libraryName : libraryName});
        server.sendNotification(params.toNotification());
    });
};
export var sendAnalysisNotificationOverrides : (server : any,file : string,dartUnit : any) => void = (server : any,file : string,dartUnit : any) : void =>  {
    _sendNotification(server,() =>  {
        let overrides = new bare.createInstance(any,null,dartUnit).compute();
        let params = new bare.createInstance(any,null,file,overrides);
        server.sendNotification(params.toNotification());
    });
};
export var _computeLibraryName : (unit : any) => string = (unit : any) : string =>  {
    for(let directive of unit.directives) {
        if (is(directive, any) && directive.name != null) {
            return directive.name.name;
        }
    }
    for(let directive of unit.directives) {
        if (is(directive, any) && directive.libraryName != null) {
            return directive.libraryName.name;
        }
    }
    return null;
};
export var _sendNotification : (server : any,f : () => any) => void = (server : any,f : () => any) : void =>  {
    ServerPerformanceStatistics.notices.makeCurrentWhile(() =>  {
        try {
            f();
        } catch (__error__) {

            {
                let stackTrace : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                let exception = __error__;
                server.sendServerErrorNotification('Failed to send notification',exception,stackTrace);
            }
        }
    });
};
export namespace PerformAnalysisOperation {
    export type Constructors = 'PerformAnalysisOperation';
    export type Interface = Omit<PerformAnalysisOperation, Constructors>;
}
@DartClass
export class PerformAnalysisOperation extends any {
    isContinue : boolean;

    constructor(context : any,isContinue : boolean) {
    }
    @defaultConstructor
    PerformAnalysisOperation(context : any,isContinue : boolean) {
        super.DartObject(context);
        this.isContinue = isContinue;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get priority() : any {
        if (this._isPriorityContext) {
            if (this.isContinue) {
                return ServerOperationPriority.PRIORITY_ANALYSIS_CONTINUE;
            }else {
                return ServerOperationPriority.PRIORITY_ANALYSIS;
            }
        }else {
            if (this.isContinue) {
                return ServerOperationPriority.ANALYSIS_CONTINUE;
            }else {
                return ServerOperationPriority.ANALYSIS;
            }
        }
    }
    get _isPriorityContext() : boolean {
        return is(context, any) && (context as any).prioritySources.isNotEmpty;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    perform(server : any) : void {
        if (!this.isContinue) {
            this._setContextActive(true);
        }
        let result : any = context.performAnalysisTask();
        let notices : core.DartList<any> = result.changeNotices;
        if (notices == null) {
            server.scheduleCacheConsistencyValidation(context);
            this._setContextActive(false);
            server.sendContextAnalysisDoneNotifications(context,AnalysisDoneReason.COMPLETE);
            return;
        }
        ServerPerformanceStatistics.notices.makeCurrentWhile(() =>  {
            this._sendNotices(server,notices);
            this._updateIndex(server,notices);
        });
        server.addOperation(new PerformAnalysisOperation(context,true));
    }
    _sendNotices(server : any,notices : core.DartList<any>) : void {
        for(let i : number = 0; i < notices.length; i++){
            let notice : any = notices[i];
            let source : any = notice.source;
            let file : string = source.fullName;
            let parsedDartUnit : any = notice.parsedDartUnit;
            let resolvedDartUnit : any = notice.resolvedDartUnit;
            scheduleNotificationOperations(server,source,file,notice.lineInfo,context,parsedDartUnit,resolvedDartUnit,notice.errors);
            server.fileAnalyzed(notice);
        }
    }
    _setContextActive(active : boolean) : void {
        let context : any = this.context;
        if (is(context, any)) {
            context.isActive = active;
        }
    }
    _updateIndex(server : any,notices : core.DartList<any>) : void {
        if (op(Op.EQUALS,server.index,null)) {
            return;
        }
        for(let notice of notices) {
            let file : string = notice.source.fullName;
            try {
                let dartUnit : any = notice.resolvedDartUnit;
                if (dartUnit != null) {
                    scheduleIndexOperation(server,file,dartUnit);
                }
            } catch (__error__) {

                {
                    let stackTrace : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                    let exception = __error__;
                    server.sendServerErrorNotification(`Failed to index Dart file: ${file}`,exception,stackTrace);
                }
            }
        }
    }
}

export namespace _NotificationOperation {
    export type Constructors = '_NotificationOperation';
    export type Interface = Omit<_NotificationOperation, Constructors>;
}
@DartClass
export class _NotificationOperation extends any {
    source : any;

    constructor(context : any,source : any) {
    }
    @defaultConstructor
    _NotificationOperation(context : any,source : any) {
        super.DartObject(context);
        this.source = source;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get priority() : any {
        return ServerOperationPriority.ANALYSIS_NOTIFICATION;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    shouldBeDiscardedOnSourceChange(source : any) : boolean {
        return op(Op.EQUALS,source,this.source);
    }
}

export namespace _SingleFileOperation {
    export type Constructors = '_SingleFileOperation';
    export type Interface = Omit<_SingleFileOperation, Constructors>;
}
@DartClass
export class _SingleFileOperation extends any {
    file : string;

    constructor(context : any,file : string) {
    }
    @defaultConstructor
    _SingleFileOperation(context : any,file : string) {
        super.DartObject(context);
        this.file = file;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    shouldBeDiscardedOnSourceChange(source : any) : boolean {
        return op(Op.EQUALS,source.fullName,this.file);
    }
}

export namespace NavigationOperation {
    export type Constructors = _NotificationOperation.Constructors | 'NavigationOperation';
    export type Interface = Omit<NavigationOperation, Constructors>;
}
@DartClass
@Implements(any)
export class NavigationOperation extends _NotificationOperation implements any.Interface {
    constructor(context : any,source : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    NavigationOperation(context : any,source : any) {
        super._NotificationOperation(context,source);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    merge(other : any) : boolean {
        return is(other, NavigationOperation) && op(Op.EQUALS,other.context,context) && op(Op.EQUALS,other.source,this.source);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    perform(server : any) : void {
        sendAnalysisNotificationNavigation(server,context,this.source);
    }
}

export namespace OccurrencesOperation {
    export type Constructors = _NotificationOperation.Constructors | 'OccurrencesOperation';
    export type Interface = Omit<OccurrencesOperation, Constructors>;
}
@DartClass
@Implements(any)
export class OccurrencesOperation extends _NotificationOperation implements any.Interface {
    constructor(context : any,source : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    OccurrencesOperation(context : any,source : any) {
        super._NotificationOperation(context,source);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    merge(other : any) : boolean {
        return is(other, OccurrencesOperation) && op(Op.EQUALS,other.context,context) && op(Op.EQUALS,other.source,this.source);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    perform(server : any) : void {
        sendAnalysisNotificationOccurrences(server,context,this.source);
    }
}

export namespace _DartIndexOperation {
    export type Constructors = _SingleFileOperation.Constructors | '_DartIndexOperation';
    export type Interface = Omit<_DartIndexOperation, Constructors>;
}
@DartClass
export class _DartIndexOperation extends _SingleFileOperation {
    unit : any;

    constructor(context : any,file : string,unit : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _DartIndexOperation(context : any,file : string,unit : any) {
        super._SingleFileOperation(context,file);
        this.unit = unit;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get priority() : any {
        return ServerOperationPriority.ANALYSIS_INDEX;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    perform(server : any) : void {
        ServerPerformanceStatistics.indexOperation.makeCurrentWhile(() =>  {
            try {
                ((_25_)=>(!!_25_)?_25_.indexUnit(this.unit):null)(server.index);
            } catch (__error__) {

                {
                    let stackTrace : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                    let exception = __error__;
                    server.sendServerErrorNotification(`Failed to index: ${this.file}`,exception,stackTrace);
                }
            }
        });
    }
}

export namespace _DartNotificationOperation {
    export type Constructors = _SingleFileOperation.Constructors | '_DartNotificationOperation';
    export type Interface = Omit<_DartNotificationOperation, Constructors>;
}
@DartClass
export class _DartNotificationOperation extends _SingleFileOperation {
    unit : any;

    constructor(context : any,file : string,unit : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _DartNotificationOperation(context : any,file : string,unit : any) {
        super._SingleFileOperation(context,file);
        this.unit = unit;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get priority() : any {
        return ServerOperationPriority.ANALYSIS_NOTIFICATION;
    }
}

export namespace _NotificationErrorsOperation {
    export type Constructors = _SingleFileOperation.Constructors | '_NotificationErrorsOperation';
    export type Interface = Omit<_NotificationErrorsOperation, Constructors>;
}
@DartClass
export class _NotificationErrorsOperation extends _SingleFileOperation {
    lineInfo : any;

    errors : core.DartList<any>;

    constructor(context : any,file : string,lineInfo : any,errors : core.DartList<any>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _NotificationErrorsOperation(context : any,file : string,lineInfo : any,errors : core.DartList<any>) {
        super._SingleFileOperation(context,file);
        this.lineInfo = lineInfo;
        this.errors = errors;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get priority() : any {
        return ServerOperationPriority.ANALYSIS_NOTIFICATION;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    perform(server : any) : void {
        sendAnalysisNotificationErrors(server,context,this.file,this.lineInfo,this.errors);
    }
}

export namespace _DartHighlightsOperation {
    export type Constructors = _DartNotificationOperation.Constructors | '_DartHighlightsOperation';
    export type Interface = Omit<_DartHighlightsOperation, Constructors>;
}
@DartClass
export class _DartHighlightsOperation extends _DartNotificationOperation {
    constructor(context : any,file : string,unit : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _DartHighlightsOperation(context : any,file : string,unit : any) {
        super._DartNotificationOperation(context,file,unit);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    perform(server : any) : void {
        sendAnalysisNotificationHighlights(server,this.file,this.unit);
    }
}

export namespace _DartOutlineOperation {
    export type Constructors = _DartNotificationOperation.Constructors | '_DartOutlineOperation';
    export type Interface = Omit<_DartOutlineOperation, Constructors>;
}
@DartClass
export class _DartOutlineOperation extends _DartNotificationOperation {
    lineInfo : any;

    sourceKind : any;

    constructor(context : any,file : string,lineInfo : any,sourceKind : any,unit : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _DartOutlineOperation(context : any,file : string,lineInfo : any,sourceKind : any,unit : any) {
        super._DartNotificationOperation(context,file,unit);
        this.lineInfo = lineInfo;
        this.sourceKind = sourceKind;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    perform(server : any) : void {
        sendAnalysisNotificationOutline(server,this.file,this.lineInfo,this.sourceKind,this.unit);
    }
}

export namespace _DartOverridesOperation {
    export type Constructors = _DartNotificationOperation.Constructors | '_DartOverridesOperation';
    export type Interface = Omit<_DartOverridesOperation, Constructors>;
}
@DartClass
export class _DartOverridesOperation extends _DartNotificationOperation {
    constructor(context : any,file : string,unit : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _DartOverridesOperation(context : any,file : string,unit : any) {
        super._DartNotificationOperation(context,file,unit);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    perform(server : any) : void {
        sendAnalysisNotificationOverrides(server,this.file,this.unit);
    }
}

export class properties {
}
