/** Library asset:datahedgehog_monitor/lib/lib/scheduler/binding.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as developer from "@dart2ts/dart/developer";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/services/system_channels";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/foundation/constants";
import * as lib6 from "@dart2ts.packages/flutter/lib/src/foundation/binding";
import * as lib7 from "@dart2ts.packages/collection/lib/src/priority_queue";
import * as lib8 from "./priority";
import * as lib9 from "@dart2ts.packages/flutter/lib/src/foundation/assertions";
import * as collection from "@dart2ts/dart/core";
import * as lib11 from "@dart2ts.packages/flutter/lib/src/foundation/debug";
import * as lib12 from "@dart2ts.packages/flutter/lib/src/foundation/profile";

export var _ensureEventLoopCallback : () => any = () : any =>  {
    /* TODO (AssertStatementImpl) : assert (!locked); */;
    /* TODO (AssertStatementImpl) : assert (_taskQueue.isNotEmpty); */;
    if (properties._hasRequestedAnEventLoopCallback) return;
    properties._hasRequestedAnEventLoopCallback = true;
    async.DartTimer.run(_runTasks);
};
export var _invokeFrameCallback : (callback : (timeStamp : core.DartDuration) => any,timeStamp : core.DartDuration,callbackStack? : core.DartStackTrace) => any = (callback : (timeStamp : core.DartDuration) => any,timeStamp : core.DartDuration,callbackStack? : core.DartStackTrace) : any =>  {
    /* TODO (AssertStatementImpl) : assert (callback != null); */;
    /* TODO (AssertStatementImpl) : assert (_FrameCallbackEntry.debugCurrentCallbackStack == null); */;
    /* TODO (AssertStatementImpl) : assert (() {_FrameCallbackEntry.debugCurrentCallbackStack = callbackStack; return true;}()); */;
    try {
        callback(timeStamp);
    } catch (__error__) {

        {
            let exceptionStack : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
            let exception = __error__;
            lib9.FlutterError.reportError(lib9.FlutterErrorDetails({
                exception : exception,stack : exceptionStack,library : 'scheduler library',context : 'during a scheduler callback',informationCollector : (op(Op.EQUALS,callbackStack,null)) ? null : (information : core.DartStringBuffer) =>  {
                    information.writeln('\nThis exception was thrown in the context of a scheduler callback. ' + 'When the scheduler callback was _registered_ (as opposed to when the ' + 'exception was thrown), this was the stack:');
                    lib9.FlutterError.defaultStackFilter(new core.DartString(new core.DartString(callbackStack.toString()).trimRight()).split('\n')).forEach(information.writeln.bind(information));
                }}));
        }
    }
    /* TODO (AssertStatementImpl) : assert (() {_FrameCallbackEntry.debugCurrentCallbackStack = null; return true;}()); */;
};
export var _debugDescribeTimeStamp : (timeStamp : core.DartDuration,buffer : core.DartStringBuffer) => any = (timeStamp : core.DartDuration,buffer : core.DartStringBuffer) : any =>  {
    if (timeStamp.inDays > 0) buffer.write(`${timeStamp.inDays}d `);
    if (timeStamp.inHours > 0) buffer.write(`${timeStamp.inHours - timeStamp.inDays * core.DartDuration.hoursPerDay}h `);
    if (timeStamp.inMinutes > 0) buffer.write(`${timeStamp.inMinutes - timeStamp.inHours * core.DartDuration.minutesPerHour}m `);
    if (timeStamp.inSeconds > 0) buffer.write(`${timeStamp.inSeconds - timeStamp.inMinutes * core.DartDuration.secondsPerMinute}s `);
    buffer.write(`${timeStamp.inMilliseconds - timeStamp.inSeconds * core.DartDuration.millisecondsPerSecond}`);
    let microseconds : number = timeStamp.inMicroseconds - timeStamp.inMilliseconds * core.DartDuration.microsecondsPerMillisecond;
    if (microseconds > 0) buffer.write(`.${new core.DartString(new core.DartInt(microseconds).toString()).padLeft(3,"0")}`);
    buffer.write('ms');
};
export var _profileFramePostEvent : () => any = () : any =>  {
    lib6.postEvent('Flutter.Frame',new core.DartMap.literal([
        ['number',properties._profileFrameNumber],
        ['startTime',properties._currentFrameTimeStamp.inMicroseconds],
        ['elapsed',properties._profileFrameStopwatch.elapsedMicroseconds]]));
};
export var initInstances : () => any = () : any =>  {
    super.initInstances();
    properties._instance = this;
    window.onBeginFrame = _handleBeginFrame;
    window.onDrawFrame = _handleDrawFrame;
    lib4.SystemChannels.lifecycle.setMessageHandler(_handleLifecycleMessage);
};
export var initServiceExtensions : () => any = () : any =>  {
    super.initServiceExtensions();
    if (!lib5.properties.kReleaseMode) {
        lib6.registerNumericServiceExtension({
            name : 'timeDilation',getter : () => new async.Future.fromPromise(( async () : Promise<any> =>  {
                return properties.timeDilation;
            })()),setter : (value : double) => new async.Future.fromPromise(( async () : Promise<any> =>  {
                properties.timeDilation = value;
            })())});
    }
};
export var handleAppLifecycleStateChanged : (state : any) => any = (state : any) : any =>  {
    /* TODO (AssertStatementImpl) : assert (state != null); */;
    properties._lifecycleState = state;
    switch (state) {
        case AppLifecycleState.resumed:
        case AppLifecycleState.inactive:
            _setFramesEnabledState(true);
            break;
        case AppLifecycleState.paused:
        case AppLifecycleState.suspending:
            _setFramesEnabledState(false);
            break;
    }
};
export var _handleLifecycleMessage : (message : string) => async.Future<string> = (message : string) => new async.Future.fromPromise(( async () : Promise<string> =>  {
    handleAppLifecycleStateChanged(_parseAppLifecycleMessage(message));
    return null;
})());
export var _parseAppLifecycleMessage : (message : string) => any = (message : string) : any =>  {
    switch (message) {
        case 'AppLifecycleState.paused':
            return AppLifecycleState.paused;
        case 'AppLifecycleState.resumed':
            return AppLifecycleState.resumed;
        case 'AppLifecycleState.inactive':
            return AppLifecycleState.inactive;
        case 'AppLifecycleState.suspending':
            return AppLifecycleState.suspending;
    }
    return null;
};
export var _taskSorter : (e1 : _TaskEntry<any>,e2 : _TaskEntry<any>) => number = (e1 : _TaskEntry<any>,e2 : _TaskEntry<any>) : number =>  {
    return -new core.DartInt(e1.priority).compareTo(e2.priority);
};
export var scheduleTask : <T>(task : <T>() => T,priority : lib8.Priority,_namedArguments? : {debugLabel? : string,flow? : any}) => async.Future<T> = <T>(task : <T>() => T,priority : lib8.Priority,_namedArguments? : {debugLabel? : string,flow? : any}) : async.Future<T> =>  {
    let {debugLabel,flow} = Object.assign({
    }, _namedArguments );
    let isFirstTask : boolean = properties._taskQueue.isEmpty;
    let entry : _TaskEntry<T> = _TaskEntry(task,priority.value,debugLabel,flow);
    properties._taskQueue.add(entry);
    if (isFirstTask && !locked) _ensureEventLoopCallback();
    return entry.completer.future;
};
export var unlocked : () => any = () : any =>  {
    super.unlocked();
    if (properties._taskQueue.isNotEmpty) _ensureEventLoopCallback();
};
export var _runTasks : () => any = () : any =>  {
    properties._hasRequestedAnEventLoopCallback = false;
    if (handleEventLoopCallback()) _ensureEventLoopCallback();
};
export var handleEventLoopCallback : () => boolean = () : boolean =>  {
    if (properties._taskQueue.isEmpty || locked) return false;
    let entry : _TaskEntry<any> = properties._taskQueue.first;
    if (properties.schedulingStrategy({
        priority : entry.priority,scheduler : this})) {
        try {
            properties._taskQueue.removeFirst();
            entry.run();
        } catch (__error__) {

            {
                let exceptionStack : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                let exception = __error__;
                let callbackStack : core.DartStackTrace;
                /* TODO (AssertStatementImpl) : assert (() {callbackStack = entry.debugStack; return true;}()); */;
                lib9.FlutterError.reportError(lib9.FlutterErrorDetails({
                    exception : exception,stack : exceptionStack,library : 'scheduler library',context : 'during a task callback',informationCollector : (op(Op.EQUALS,callbackStack,null)) ? null : (information : core.DartStringBuffer) =>  {
                        information.writeln('\nThis exception was thrown in the context of a task callback. ' + 'When the task callback was _registered_ (as opposed to when the ' + 'exception was thrown), this was the stack:');
                        lib9.FlutterError.defaultStackFilter(new core.DartString(new core.DartString(callbackStack.toString()).trimRight()).split('\n')).forEach(information.writeln.bind(information));
                    }}));
            }
        }
        return properties._taskQueue.isNotEmpty;
    }
    return false;
};
export var scheduleFrameCallback : (callback : (timeStamp : core.DartDuration) => any,_namedArguments? : {rescheduling? : boolean}) => number = (callback : (timeStamp : core.DartDuration) => any,_namedArguments? : {rescheduling? : boolean}) : number =>  {
    let {rescheduling} = Object.assign({
        "rescheduling" : false}, _namedArguments );
    scheduleFrame();
    properties._nextFrameCallbackId += 1;
    properties._transientCallbacks.set(properties._nextFrameCallbackId,_FrameCallbackEntry(callback,{
        rescheduling : rescheduling}));
    return properties._nextFrameCallbackId;
};
export var cancelFrameCallbackWithId : (id : number) => any = (id : number) : any =>  {
    /* TODO (AssertStatementImpl) : assert (id > 0); */;
    properties._transientCallbacks.remove(id);
    properties._removedIds.add(id);
};
export var debugAssertNoTransientCallbacks : (reason : string) => boolean = (reason : string) : boolean =>  {
    /* TODO (AssertStatementImpl) : assert (() {if (transientCallbackCount > 0) {final int count = transientCallbackCount; final Map<int, _FrameCallbackEntry> callbacks = Map < int, _FrameCallbackEntry;  > .from(_transientCallbacks); FlutterError.reportError(FlutterErrorDetails(exception: reason, library: 'scheduler library', informationCollector: (StringBuffer information) {if (count == 1) {information.writeln('There was one transient callback left. ' 'The stack trace for when it was registered is as follows:');} else {information.writeln('There were $count transient callbacks left. ' 'The stack traces for when they were registered are as follows:');} for (int id in callbacks.keys) {final _FrameCallbackEntry entry = callbacks[id]; information.writeln('── callback $id ──'); FlutterError.defaultStackFilter(entry.debugStack.toString().trimRight().split('\n')).forEach(information.writeln);}}));} return true;}()); */;
    return true;
};
export var debugPrintTransientCallbackRegistrationStack : () => any = () : any =>  {
    /* TODO (AssertStatementImpl) : assert (() {if (_FrameCallbackEntry.debugCurrentCallbackStack != null) {debugPrint('When the current transient callback was registered, this was the stack:'); debugPrint(FlutterError.defaultStackFilter(_FrameCallbackEntry.debugCurrentCallbackStack.toString().trimRight().split('\n')).join('\n'));} else {debugPrint('No transient callback is currently executing.');} return true;}()); */;
};
export var addPersistentFrameCallback : (callback : (timeStamp : core.DartDuration) => any) => any = (callback : (timeStamp : core.DartDuration) => any) : any =>  {
    properties._persistentCallbacks.add(callback);
};
export var addPostFrameCallback : (callback : (timeStamp : core.DartDuration) => any) => any = (callback : (timeStamp : core.DartDuration) => any) : any =>  {
    properties._postFrameCallbacks.add(callback);
};
export var defaultSchedulingStrategy : (_namedArguments? : {priority? : number,scheduler? : any}) => boolean = (_namedArguments? : {priority? : number,scheduler? : any}) : boolean =>  {
    let {priority,scheduler} = Object.assign({
    }, _namedArguments );
    if (op(Op.GT,scheduler.transientCallbackCount,0)) return priority >= lib8.Priority.animation.value;
    return true;
};
export var _setFramesEnabledState : (enabled : boolean) => any = (enabled : boolean) : any =>  {
    if (properties._framesEnabled == enabled) return;
    properties._framesEnabled = enabled;
    if (enabled) scheduleFrame();
};
export var ensureVisualUpdate : () => any = () : any =>  {
    switch (properties.schedulerPhase) {
        case SchedulerPhase.idle:
        case SchedulerPhase.postFrameCallbacks:
            scheduleFrame();
            return;
        case SchedulerPhase.transientCallbacks:
        case SchedulerPhase.midFrameMicrotasks:
        case SchedulerPhase.persistentCallbacks:
            return;
    }
};
export var scheduleFrame : () => any = () : any =>  {
    if (properties._hasScheduledFrame || !properties._framesEnabled) return;
    /* TODO (AssertStatementImpl) : assert (() {if (debugPrintScheduleFrameStacks) debugPrintStack(label: 'scheduleFrame() called. Current phase is $schedulerPhase.'); return true;}()); */;
    window.scheduleFrame();
    properties._hasScheduledFrame = true;
};
export var scheduleForcedFrame : () => any = () : any =>  {
    if (properties._hasScheduledFrame) return;
    /* TODO (AssertStatementImpl) : assert (() {if (debugPrintScheduleFrameStacks) debugPrintStack(label: 'scheduleForcedFrame() called. Current phase is $schedulerPhase.'); return true;}()); */;
    window.scheduleFrame();
    properties._hasScheduledFrame = true;
};
export var scheduleWarmUpFrame : () => any = () : any =>  {
    if (properties._warmUpFrame || properties.schedulerPhase != SchedulerPhase.idle) return;
    properties._warmUpFrame = true;
    developer.Timeline.startSync('Warm-up frame');
    let hadScheduledFrame : boolean = properties._hasScheduledFrame;
    async.DartTimer.run(() =>  {
        /* TODO (AssertStatementImpl) : assert (_warmUpFrame); */;
        handleBeginFrame(null);
    });
    async.DartTimer.run(() =>  {
        /* TODO (AssertStatementImpl) : assert (_warmUpFrame); */;
        handleDrawFrame();
        resetEpoch();
        properties._warmUpFrame = false;
        if (hadScheduledFrame) scheduleFrame();
    });
    lockEvents(() => new async.Future.fromPromise(( async () : Promise<any> =>  {
        await properties.endOfFrame;
        developer.Timeline.finishSync();
    })()));
};
export var resetEpoch : () => any = () : any =>  {
    properties._epochStart = _adjustForEpoch(properties._lastRawTimeStamp);
    properties._firstRawTimeStampInEpoch = null;
};
export var _adjustForEpoch : (rawTimeStamp : core.DartDuration) => core.DartDuration = (rawTimeStamp : core.DartDuration) : core.DartDuration =>  {
    let rawDurationSinceEpoch : core.DartDuration = op(Op.EQUALS,properties._firstRawTimeStampInEpoch,null) ? core.DartDuration.zero : op(Op.MINUS,rawTimeStamp,properties._firstRawTimeStampInEpoch);
    return core.DartDuration({
        microseconds : new core.DartDouble((rawDurationSinceEpoch.inMicroseconds / properties.timeDilation)).round() + properties._epochStart.inMicroseconds});
};
export var _handleBeginFrame : (rawTimeStamp : core.DartDuration) => any = (rawTimeStamp : core.DartDuration) : any =>  {
    if (properties._warmUpFrame) {
        /* TODO (AssertStatementImpl) : assert (!_ignoreNextEngineDrawFrame); */;
        properties._ignoreNextEngineDrawFrame = true;
        return;
    }
    handleBeginFrame(rawTimeStamp);
};
export var _handleDrawFrame : () => any = () : any =>  {
    if (properties._ignoreNextEngineDrawFrame) {
        properties._ignoreNextEngineDrawFrame = false;
        return;
    }
    handleDrawFrame();
};
export var handleBeginFrame : (rawTimeStamp : core.DartDuration) => any = (rawTimeStamp : core.DartDuration) : any =>  {
    developer.Timeline.startSync('Frame',{
        arguments : lib11.properties.timelineWhitelistArguments});
    properties._firstRawTimeStampInEpoch = ( properties._firstRawTimeStampInEpoch ) || ( rawTimeStamp );
    properties._currentFrameTimeStamp = _adjustForEpoch((rawTimeStamp || properties._lastRawTimeStamp));
    if (rawTimeStamp != null) properties._lastRawTimeStamp = rawTimeStamp;
    lib12.profile(() =>  {
        properties._profileFrameNumber += 1;
        properties._profileFrameStopwatch.reset();
        properties._profileFrameStopwatch.start();
    });
    /* TODO (AssertStatementImpl) : assert (() {if (debugPrintBeginFrameBanner || debugPrintEndFrameBanner) {final StringBuffer frameTimeStampDescription = StringBuffer(); if (rawTimeStamp != null) {_debugDescribeTimeStamp(_currentFrameTimeStamp, frameTimeStampDescription);} else {frameTimeStampDescription.write('(warm-up frame)');} _debugBanner = '▄▄▄▄▄▄▄▄ Frame ${_profileFrameNumber.toString().padRight(7)}   ${frameTimeStampDescription.toString().padLeft(18)} ▄▄▄▄▄▄▄▄'; if (debugPrintBeginFrameBanner) debugPrint(_debugBanner);} return true;}()); */;
    /* TODO (AssertStatementImpl) : assert (schedulerPhase == SchedulerPhase.idle); */;
    properties._hasScheduledFrame = false;
    try {
        developer.Timeline.startSync('Animate',{
            arguments : lib11.properties.timelineWhitelistArguments});
        properties._schedulerPhase = SchedulerPhase.transientCallbacks;
        let callbacks : core.DartMap<number,_FrameCallbackEntry> = properties._transientCallbacks;
        properties._transientCallbacks = new core.DartMap.literal([
        ]);
        callbacks.forEach((id : number,callbackEntry : _FrameCallbackEntry) =>  {
            if (!properties._removedIds.contains(id)) _invokeFrameCallback(callbackEntry.callback,properties._currentFrameTimeStamp,callbackEntry.debugStack);
        });
        properties._removedIds.clear();
    } finally {
        properties._schedulerPhase = SchedulerPhase.midFrameMicrotasks;
    }
};
export var handleDrawFrame : () => any = () : any =>  {
    /* TODO (AssertStatementImpl) : assert (_schedulerPhase == SchedulerPhase.midFrameMicrotasks); */;
    developer.Timeline.finishSync();
    try {
        properties._schedulerPhase = SchedulerPhase.persistentCallbacks;
        for(let callback of properties._persistentCallbacks) _invokeFrameCallback(callback,properties._currentFrameTimeStamp);
        properties._schedulerPhase = SchedulerPhase.postFrameCallbacks;
        let localPostFrameCallbacks : core.DartList<(timeStamp : core.DartDuration) => any> = op(Op.LT,core.DartList<E>,FrameCallback);
        op(Op.GT,,.from(properties._postFrameCallbacks));
        properties._postFrameCallbacks.clear();
        for(let callback of localPostFrameCallbacks) _invokeFrameCallback(callback,properties._currentFrameTimeStamp);
    } finally {
        properties._schedulerPhase = SchedulerPhase.idle;
        developer.Timeline.finishSync();
        lib12.profile(() =>  {
            properties._profileFrameStopwatch.stop();
            _profileFramePostEvent();
        });
        /* TODO (AssertStatementImpl) : assert (() {if (debugPrintEndFrameBanner) debugPrint('▀' * _debugBanner.length); _debugBanner = null; return true;}()); */;
        properties._currentFrameTimeStamp = null;
    }
};
export namespace _FrameCallbackEntry {
    export type Constructors = '_FrameCallbackEntry';
    export type Interface = Omit<_FrameCallbackEntry, Constructors>;
}
@DartClass
export class _FrameCallbackEntry {
    constructor(callback : (timeStamp : core.DartDuration) => any,_namedArguments? : {rescheduling? : boolean}) {
    }
    @defaultConstructor
    _FrameCallbackEntry(callback : (timeStamp : core.DartDuration) => any,_namedArguments? : {rescheduling? : boolean}) {
        let {rescheduling} = Object.assign({
            "rescheduling" : false}, _namedArguments );
        this.callback = callback;
        /* TODO (AssertStatementImpl) : assert (() {if (rescheduling) {assert (() {if (debugCurrentCallbackStack == null) {throw FlutterError('scheduleFrameCallback called with rescheduling true, but no callback is in scope.\n' 'The "rescheduling" argument should only be set to true if the ' 'callback is being reregistered from within the callback itself, ' 'and only then if the callback itself is entirely synchronous. ' 'If this is the initial registration of the callback, or if the ' 'callback is asynchronous, then do not use the "rescheduling" ' 'argument.');} return true;}()); debugStack = debugCurrentCallbackStack;} else {debugStack = StackTrace.current;} return true;}()); */;
    }
    callback : (timeStamp : core.DartDuration) => any;

    private static __$debugCurrentCallbackStack : core.DartStackTrace;
    static get debugCurrentCallbackStack() : core.DartStackTrace { 
        return this.__$debugCurrentCallbackStack;
    }
    static set debugCurrentCallbackStack(__$value : core.DartStackTrace)  { 
        this.__$debugCurrentCallbackStack = __$value;
    }

    debugStack : core.DartStackTrace;

}

export namespace _TaskEntry {
    export type Constructors = '_TaskEntry';
    export type Interface<T> = Omit<_TaskEntry<T>, Constructors>;
}
@DartClass
export class _TaskEntry<T> {
    constructor(task : <T>() => T,priority : number,debugLabel : string,flow : any) {
    }
    @defaultConstructor
    _TaskEntry(task : <T>() => T,priority : number,debugLabel : string,flow : any) {
        this.task = task;
        this.priority = priority;
        this.debugLabel = debugLabel;
        this.flow = flow;
        /* TODO (AssertStatementImpl) : assert (() {debugStack = StackTrace.current; return true;}()); */;
        this.completer = async.DartCompleter();
    }
    task : <T>() => T;

    priority : number;

    debugLabel : string;

    flow : any;

    debugStack : core.DartStackTrace;

    completer : async.DartCompleter<T>;

    run() : any {
        developer.Timeline.timeSync((this.debugLabel || 'Scheduled Task'),() =>  {
            this.completer.complete(this.task());
        },{
            flow : this.flow != null ? Flow.step(this.flow.id) : null});
    }
}

export enum SchedulerPhase {
    idle,
    transientCallbacks,
    midFrameMicrotasks,
    persistentCallbacks,
    postFrameCallbacks
}

export class properties {
    private static __$_timeDilation : double;
    static get _timeDilation() : double { 
        if (this.__$_timeDilation===undefined) {
            this.__$_timeDilation = 1.0;
        }
        return this.__$_timeDilation;
    }
    static set _timeDilation(__$value : double)  { 
        this.__$_timeDilation = __$value;
    }

    static set timeDilation(value : double) {
        /* TODO (AssertStatementImpl) : assert (value > 0.0); */;
        if (properties._timeDilation == value) return;
        ((_869_)=>(!!_869_)?_869_.resetEpoch():null)(properties.SchedulerBinding.instance);
        properties._timeDilation = value;
    }
    private static __$SchedulerBinding : any;
    static get SchedulerBinding() : any { 
        return this.__$SchedulerBinding;
    }
    static set SchedulerBinding(__$value : any)  { 
        this.__$SchedulerBinding = __$value;
    }

    private static __$BindingBase : any;
    static get BindingBase() : any { 
        return this.__$BindingBase;
    }
    static set BindingBase(__$value : any)  { 
        this.__$BindingBase = __$value;
    }
    ,private static __$ServicesBinding : any;
    static get ServicesBinding() : any { 
        return this.__$ServicesBinding;
    }
    static set ServicesBinding(__$value : any)  { 
        this.__$ServicesBinding = __$value;
    }

    private static __$void : any;
    static get void() : any { 
        return this.__$void;
    }
    static set void(__$value : any)  { 
        this.__$void = __$value;
    }

    static get instance() : any {
        return properties._instance;
    }
    private static __$_instance : any;
    static get _instance() : any { 
        return this.__$_instance;
    }
    static set _instance(__$value : any)  { 
        this.__$_instance = __$value;
    }

    static get lifecycleState() : any {
        return properties._lifecycleState;
    }
    private static __$_lifecycleState : any;
    static get _lifecycleState() : any { 
        return this.__$_lifecycleState;
    }
    static set _lifecycleState(__$value : any)  { 
        this.__$_lifecycleState = __$value;
    }

    private static __$schedulingStrategy : (_namedArguments : {priority? : number?,scheduler? : any?}) => boolean;
    static get schedulingStrategy() : (_namedArguments : {priority? : number?,scheduler? : any?}) => boolean { 
        if (this.__$schedulingStrategy===undefined) {
            this.__$schedulingStrategy = defaultSchedulingStrategy;
        }
        return this.__$schedulingStrategy;
    }
    static set schedulingStrategy(__$value : (_namedArguments : {priority? : number?,scheduler? : any?}) => boolean)  { 
        this.__$schedulingStrategy = __$value;
    }

    private static __$_taskQueue : lib7.PriorityQueue<_TaskEntry<any>>;
    static get _taskQueue() : lib7.PriorityQueue<_TaskEntry<any>> { 
        if (this.__$_taskQueue===undefined) {
            this.__$_taskQueue = lib7.HeapPriorityQueue(_taskSorter);
        }
        return this.__$_taskQueue;
    }
    static set _taskQueue(__$value : lib7.PriorityQueue<_TaskEntry<any>>)  { 
        this.__$_taskQueue = __$value;
    }

    private static __$_hasRequestedAnEventLoopCallback : boolean;
    static get _hasRequestedAnEventLoopCallback() : boolean { 
        if (this.__$_hasRequestedAnEventLoopCallback===undefined) {
            this.__$_hasRequestedAnEventLoopCallback = false;
        }
        return this.__$_hasRequestedAnEventLoopCallback;
    }
    static set _hasRequestedAnEventLoopCallback(__$value : boolean)  { 
        this.__$_hasRequestedAnEventLoopCallback = __$value;
    }

    static get timeDilation() : double {
        return properties._timeDilation;
    }
    private static __$_nextFrameCallbackId : number;
    static get _nextFrameCallbackId() : number { 
        if (this.__$_nextFrameCallbackId===undefined) {
            this.__$_nextFrameCallbackId = 0;
        }
        return this.__$_nextFrameCallbackId;
    }
    static set _nextFrameCallbackId(__$value : number)  { 
        this.__$_nextFrameCallbackId = __$value;
    }

    private static __$_transientCallbacks : core.DartMap<number,_FrameCallbackEntry>;
    static get _transientCallbacks() : core.DartMap<number,_FrameCallbackEntry> { 
        if (this.__$_transientCallbacks===undefined) {
            this.__$_transientCallbacks = new core.DartMap.literal([
            ]);
        }
        return this.__$_transientCallbacks;
    }
    static set _transientCallbacks(__$value : core.DartMap<number,_FrameCallbackEntry>)  { 
        this.__$_transientCallbacks = __$value;
    }

    private static __$_removedIds : core.DartSet<number>;
    static get _removedIds() : core.DartSet<number> { 
        if (this.__$_removedIds===undefined) {
            this.__$_removedIds = core.DartHashSet();
        }
        return this.__$_removedIds;
    }
    static set _removedIds(__$value : core.DartSet<number>)  { 
        this.__$_removedIds = __$value;
    }

    static get transientCallbackCount() : number {
        return properties._transientCallbacks.length;
    }
    private static __$_persistentCallbacks : core.DartList<(timeStamp : core.DartDuration) => any>;
    static get _persistentCallbacks() : core.DartList<(timeStamp : core.DartDuration) => any> { 
        if (this.__$_persistentCallbacks===undefined) {
            this.__$_persistentCallbacks = new core.DartList.literal<(timeStamp : core.DartDuration) => any>();
        }
        return this.__$_persistentCallbacks;
    }
    static set _persistentCallbacks(__$value : core.DartList<(timeStamp : core.DartDuration) => any>)  { 
        this.__$_persistentCallbacks = __$value;
    }

    private static __$_postFrameCallbacks : core.DartList<(timeStamp : core.DartDuration) => any>;
    static get _postFrameCallbacks() : core.DartList<(timeStamp : core.DartDuration) => any> { 
        if (this.__$_postFrameCallbacks===undefined) {
            this.__$_postFrameCallbacks = new core.DartList.literal<(timeStamp : core.DartDuration) => any>();
        }
        return this.__$_postFrameCallbacks;
    }
    static set _postFrameCallbacks(__$value : core.DartList<(timeStamp : core.DartDuration) => any>)  { 
        this.__$_postFrameCallbacks = __$value;
    }

    private static __$void : async.DartCompleter<any>;
    static get void() : async.DartCompleter<any> { 
        return this.__$void;
    }
    static set void(__$value : async.DartCompleter<any>)  { 
        this.__$void = __$value;
    }

    private static __$_nextFrameCompleter;
    static get _nextFrameCompleter() { 
        return this.__$_nextFrameCompleter;
    }
    static set _nextFrameCompleter(__$value : any)  { 
        this.__$_nextFrameCompleter = __$value;
    }

    private static __$void : async.Future<any>;
    static get void() : async.Future<any> { 
        return this.__$void;
    }
    static set void(__$value : async.Future<any>)  { 
        this.__$void = __$value;
    }

    static get endOfFrame() {
        if (op(Op.EQUALS,properties._nextFrameCompleter,null)) {
            if (op(Op.EQUALS,properties.schedulerPhase,SchedulerPhase.idle)) scheduleFrame();
            properties._nextFrameCompleter = op(Op.LT,async.DartCompleter<T>,);
            op(Op.GT,,());
            addPostFrameCallback((timeStamp : core.DartDuration) =>  {
                properties._nextFrameCompleter.complete();
                properties._nextFrameCompleter = null;
            });
        }
        return properties._nextFrameCompleter.future;
    }
    static get hasScheduledFrame() : boolean {
        return properties._hasScheduledFrame;
    }
    private static __$_hasScheduledFrame : boolean;
    static get _hasScheduledFrame() : boolean { 
        if (this.__$_hasScheduledFrame===undefined) {
            this.__$_hasScheduledFrame = false;
        }
        return this.__$_hasScheduledFrame;
    }
    static set _hasScheduledFrame(__$value : boolean)  { 
        this.__$_hasScheduledFrame = __$value;
    }

    static get schedulerPhase() : SchedulerPhase {
        return properties._schedulerPhase;
    }
    private static __$_schedulerPhase : SchedulerPhase;
    static get _schedulerPhase() : SchedulerPhase { 
        if (this.__$_schedulerPhase===undefined) {
            this.__$_schedulerPhase = SchedulerPhase.idle;
        }
        return this.__$_schedulerPhase;
    }
    static set _schedulerPhase(__$value : SchedulerPhase)  { 
        this.__$_schedulerPhase = __$value;
    }

    static get framesEnabled() : boolean {
        return properties._framesEnabled;
    }
    private static __$_warmUpFrame : boolean;
    static get _warmUpFrame() : boolean { 
        if (this.__$_warmUpFrame===undefined) {
            this.__$_warmUpFrame = false;
        }
        return this.__$_warmUpFrame;
    }
    static set _warmUpFrame(__$value : boolean)  { 
        this.__$_warmUpFrame = __$value;
    }

    private static __$_firstRawTimeStampInEpoch : core.DartDuration;
    static get _firstRawTimeStampInEpoch() : core.DartDuration { 
        return this.__$_firstRawTimeStampInEpoch;
    }
    static set _firstRawTimeStampInEpoch(__$value : core.DartDuration)  { 
        this.__$_firstRawTimeStampInEpoch = __$value;
    }

    private static __$_epochStart : core.DartDuration;
    static get _epochStart() : core.DartDuration { 
        if (this.__$_epochStart===undefined) {
            this.__$_epochStart = core.DartDuration.zero;
        }
        return this.__$_epochStart;
    }
    static set _epochStart(__$value : core.DartDuration)  { 
        this.__$_epochStart = __$value;
    }

    private static __$_lastRawTimeStamp : core.DartDuration;
    static get _lastRawTimeStamp() : core.DartDuration { 
        if (this.__$_lastRawTimeStamp===undefined) {
            this.__$_lastRawTimeStamp = core.DartDuration.zero;
        }
        return this.__$_lastRawTimeStamp;
    }
    static set _lastRawTimeStamp(__$value : core.DartDuration)  { 
        this.__$_lastRawTimeStamp = __$value;
    }

    static get currentFrameTimeStamp() : core.DartDuration {
        /* TODO (AssertStatementImpl) : assert (_currentFrameTimeStamp != null); */;
        return properties._currentFrameTimeStamp;
    }
    private static __$_currentFrameTimeStamp : core.DartDuration;
    static get _currentFrameTimeStamp() : core.DartDuration { 
        return this.__$_currentFrameTimeStamp;
    }
    static set _currentFrameTimeStamp(__$value : core.DartDuration)  { 
        this.__$_currentFrameTimeStamp = __$value;
    }

    private static __$_profileFrameNumber : number;
    static get _profileFrameNumber() : number { 
        if (this.__$_profileFrameNumber===undefined) {
            this.__$_profileFrameNumber = 0;
        }
        return this.__$_profileFrameNumber;
    }
    static set _profileFrameNumber(__$value : number)  { 
        this.__$_profileFrameNumber = __$value;
    }

    private static __$_profileFrameStopwatch : core.DartStopwatch;
    static get _profileFrameStopwatch() : core.DartStopwatch { 
        if (this.__$_profileFrameStopwatch===undefined) {
            this.__$_profileFrameStopwatch = core.DartStopwatch();
        }
        return this.__$_profileFrameStopwatch;
    }
    static set _profileFrameStopwatch(__$value : core.DartStopwatch)  { 
        this.__$_profileFrameStopwatch = __$value;
    }

    private static __$_debugBanner : string;
    static get _debugBanner() : string { 
        return this.__$_debugBanner;
    }
    static set _debugBanner(__$value : string)  { 
        this.__$_debugBanner = __$value;
    }

    private static __$_ignoreNextEngineDrawFrame : boolean;
    static get _ignoreNextEngineDrawFrame() : boolean { 
        if (this.__$_ignoreNextEngineDrawFrame===undefined) {
            this.__$_ignoreNextEngineDrawFrame = false;
        }
        return this.__$_ignoreNextEngineDrawFrame;
    }
    static set _ignoreNextEngineDrawFrame(__$value : boolean)  { 
        this.__$_ignoreNextEngineDrawFrame = __$value;
    }

    private static __$_framesEnabled : boolean;
    static get _framesEnabled() : boolean { 
        if (this.__$_framesEnabled===undefined) {
            this.__$_framesEnabled = true;
        }
        return this.__$_framesEnabled;
    }
    static set _framesEnabled(__$value : boolean)  { 
        this.__$_framesEnabled = __$value;
    }

}
