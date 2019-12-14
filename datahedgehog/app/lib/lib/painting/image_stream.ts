/** Library asset:datahedgehog_monitor/lib/lib/painting/image_stream.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/flutter/lib/src/foundation/diagnostics";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/foundation/assertions";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/scheduler/binding";

export var _handleCodecReady : (codec : any) => any = (codec : any) : any =>  {
    properties._codec = codec;
    /* TODO (AssertStatementImpl) : assert (_codec != null); */;
    _decodeNextFrameAndSchedule();
};
export var _handleAppFrame : (timestamp : core.DartDuration) => any = (timestamp : core.DartDuration) : any =>  {
    if (!hasListeners) return;
    if (_isFirstFrame() || _hasFrameDurationPassed(timestamp)) {
        _emitFrame(ImageInfo({
            image : properties._nextFrame.image,scale : properties._scale}));
        properties._shownTimestamp = timestamp;
        properties._frameDuration = properties._nextFrame.duration;
        properties._nextFrame = null;
        let completedCycles : number = op(Op.QUOTIENT,properties._framesEmitted,properties._codec.frameCount);
        if (op(Op.EQUALS,properties._codec.repetitionCount,-1) || completedCycles <= properties._codec.repetitionCount) {
            _decodeNextFrameAndSchedule();
        }
        return;
    }
    let delay : core.DartDuration = op(Op.MINUS,properties._frameDuration,(op(Op.MINUS,timestamp,properties._shownTimestamp)));
    properties._timer = async.DartTimer(op(Op.TIMES,delay,lib5.properties.timeDilation),() =>  {
        lib5.properties.SchedulerBinding.instance.scheduleFrameCallback(_handleAppFrame);
    });
};
export var _isFirstFrame : () => boolean = () : boolean =>  {
    return op(Op.EQUALS,properties._frameDuration,null);
};
export var _hasFrameDurationPassed : (timestamp : core.DartDuration) => boolean = (timestamp : core.DartDuration) : boolean =>  {
    /* TODO (AssertStatementImpl) : assert (_shownTimestamp != null); */;
    return op(Op.GEQ,op(Op.MINUS,timestamp,properties._shownTimestamp),properties._frameDuration);
};
export var _decodeNextFrameAndSchedule : () => any = () => new async.Future.fromPromise(( async () : Promise<any> =>  {
    try {
        properties._nextFrame = await properties._codec.getNextFrame();
    } catch (__error__) {

        {
            let stack : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
            let exception = __error__;
            reportError({
                context : 'resolving an image frame',exception : exception,stack : stack,informationCollector : properties._informationCollector,silent : true});
            return;
        }
    }
    if (op(Op.EQUALS,properties._codec.frameCount,1)) {
        _emitFrame(ImageInfo({
            image : properties._nextFrame.image,scale : properties._scale}));
        return;
    }
    lib5.properties.SchedulerBinding.instance.scheduleFrameCallback(_handleAppFrame);
})());
export var _emitFrame : (imageInfo : ImageInfo) => any = (imageInfo : ImageInfo) : any =>  {
    setImage(imageInfo);
    properties._framesEmitted += 1;
};
export var addListener : (listener : (image : ImageInfo,synchronousCall : boolean) => any,_namedArguments? : {onError? : (exception : any,stackTrace : core.DartStackTrace) => any}) => any = (listener : (image : ImageInfo,synchronousCall : boolean) => any,_namedArguments? : {onError? : (exception : any,stackTrace : core.DartStackTrace) => any}) : any =>  {
    let {onError} = Object.assign({
    }, _namedArguments );
    if (!hasListeners && properties._codec != null) _decodeNextFrameAndSchedule();
    super.addListener(listener,{
        onError : onError});
};
export var removeListener : (listener : (image : ImageInfo,synchronousCall : boolean) => any) => any = (listener : (image : ImageInfo,synchronousCall : boolean) => any) : any =>  {
    super.removeListener(listener);
    if (!hasListeners) {
        ((_804_)=>(!!_804_)?_804_.cancel():null)(properties._timer);
        properties._timer = null;
    }
};
export namespace ImageInfo {
    export type Constructors = 'ImageInfo';
    export type Interface = Omit<ImageInfo, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'asset:meta/lib/meta.dart',type : 'immutable',value : {
        arguments : [],namedArguments : {
        }}})
export class ImageInfo {
    constructor(_namedArguments? : {image? : any,scale? : double}) {
    }
    @defaultConstructor
    ImageInfo(_namedArguments? : {image? : any,scale? : double}) {
        let {image,scale} = Object.assign({
            "scale" : 1.0}, _namedArguments );
        this.assert = assert;
        this.image = image;
        this.scale = scale;
    }
     : any;

     : any;

    image : any;

    scale : double;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `${this.image} @ ${this.scale}x`;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return hashValues(this.image,this.scale);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : core.DartObject) : boolean {
        if (other.runtimeType != this.runtimeType) return false;
        let typedOther : ImageInfo = other;
        return op(Op.EQUALS,typedOther.image,this.image) && typedOther.scale == this.scale;
    }
}

export namespace _ImageListenerPair {
    export type Constructors = '_ImageListenerPair';
    export type Interface = Omit<_ImageListenerPair, Constructors>;
}
@DartClass
export class _ImageListenerPair {
    constructor(listener : (image : ImageInfo,synchronousCall : boolean) => any,errorListener : (exception : any,stackTrace : core.DartStackTrace) => any) {
    }
    @defaultConstructor
    _ImageListenerPair(listener : (image : ImageInfo,synchronousCall : boolean) => any,errorListener : (exception : any,stackTrace : core.DartStackTrace) => any) {
        this.listener = listener;
        this.errorListener = errorListener;
    }
    listener : (image : ImageInfo,synchronousCall : boolean) => any;

    errorListener : (exception : any,stackTrace : core.DartStackTrace) => any;

}

export namespace ImageStream {
    export type Constructors = lib3.Diagnosticable.Constructors | 'ImageStream';
    export type Interface = Omit<ImageStream, Constructors>;
}
@DartClass
export class ImageStream extends lib3.Diagnosticable {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ImageStream() {
    }
    get completer() : ImageStreamCompleter {
        return this._completer;
    }
    _completer : ImageStreamCompleter;

    _listeners : core.DartList<_ImageListenerPair>;

    setCompleter(value : ImageStreamCompleter) : any {
        /* TODO (AssertStatementImpl) : assert (_completer == null); */;
        this._completer = value;
        if (this._listeners != null) {
            let initialListeners : core.DartList<_ImageListenerPair> = this._listeners;
            this._listeners = null;
            for(let listenerPair of initialListeners) {
                this._completer.addListener(listenerPair.listener,{
                    onError : listenerPair.errorListener});
            }
        }
    }
    addListener(listener : (image : ImageInfo,synchronousCall : boolean) => any,_namedArguments? : {onError? : (exception : any,stackTrace : core.DartStackTrace) => any}) : any {
        let {onError} = Object.assign({
        }, _namedArguments );
        if (this._completer != null) return this._completer.addListener(listener,{
            onError : onError});
        this._listeners = ( this._listeners ) || ( new core.DartList.literal<_ImageListenerPair>() );
        this._listeners.add(_ImageListenerPair(listener,onError));
    }
    removeListener(listener : (image : ImageInfo,synchronousCall : boolean) => any) : any {
        if (this._completer != null) return this._completer.removeListener(listener);
        /* TODO (AssertStatementImpl) : assert (_listeners != null); */;
        for(let i : number = 0; i < this._listeners.length; i += 1){
            if (op(Op.EQUALS,this._listeners[i].listener,listener)) {
                this._listeners.removeAt(i);
                break;
            }
        }
    }
    get key() : core.DartObject {
        return this._completer != null ? this._completer : this;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib3.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib3.ObjectFlagProperty('completer',this._completer,{
            ifPresent : ((_802_)=>(!!_802_)?_802_.toStringShort():null)(this._completer),ifNull : 'unresolved'}));
        properties.add(lib3.ObjectFlagProperty('listeners',this._listeners,{
            ifPresent : `${((t)=>(!!t)?t.length:null)(this._listeners)} listener${((t)=>(!!t)?t.length:null)(this._listeners) == 1 ? "" : "s"}`,ifNull : 'no listeners',level : this._completer != null ? lib3.DiagnosticLevel.hidden : lib3.DiagnosticLevel.info}));
        ((_803_)=>(!!_803_)?_803_.debugFillProperties(properties):null)(this._completer);
    }
}

export namespace ImageStreamCompleter {
    export type Constructors = lib3.Diagnosticable.Constructors | 'ImageStreamCompleter';
    export type Interface = Omit<ImageStreamCompleter, Constructors>;
}
@DartClass
export class ImageStreamCompleter extends lib3.Diagnosticable {
    _listeners : core.DartList<_ImageListenerPair>;

    _currentImage : ImageInfo;

    _currentError : lib4.FlutterErrorDetails;

    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    get hasListeners() : boolean {
        return this._listeners.isNotEmpty;
    }
    addListener(listener : (image : ImageInfo,synchronousCall : boolean) => any,_namedArguments? : {onError? : (exception : any,stackTrace : core.DartStackTrace) => any}) : any {
        let {onError} = Object.assign({
        }, _namedArguments );
        this._listeners.add(_ImageListenerPair(listener,onError));
        if (this._currentImage != null) {
            try {
                listener(this._currentImage,true);
            } catch (__error__) {

                {
                    let stack : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                    let exception = __error__;
                    this.reportError({
                        context : 'by a synchronously-called image listener',exception : exception,stack : stack});
                }
            }
        }
        if (this._currentError != null && onError != null) {
            try {
                onError(this._currentError.exception,this._currentError.stack);
            } catch (__error__) {

                {
                    let stack : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                    let exception = __error__;
                    lib4.FlutterError.reportError(lib4.FlutterErrorDetails({
                        exception : exception,library : 'image resource service',context : 'by a synchronously-called image error listener',stack : stack}));
                }
            }
        }
    }
    removeListener(listener : (image : ImageInfo,synchronousCall : boolean) => any) : any {
        for(let i : number = 0; i < this._listeners.length; i += 1){
            if (op(Op.EQUALS,this._listeners[i].listener,listener)) {
                this._listeners.removeAt(i);
                break;
            }
        }
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    setImage(image : ImageInfo) : any {
        this._currentImage = image;
        if (this._listeners.isEmpty) return;
        let localListeners : core.DartList<(image : ImageInfo,synchronousCall : boolean) => any> = this._listeners.map((listenerPair : _ImageListenerPair) =>  {
            return listenerPair.listener;
        }).toList();
        for(let listener of localListeners) {
            try {
                listener(image,false);
            } catch (__error__) {

                {
                    let stack : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                    let exception = __error__;
                    this.reportError({
                        context : 'by an image listener',exception : exception,stack : stack});
                }
            }
        }
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    reportError(_namedArguments? : {context? : string,exception? : any,stack? : core.DartStackTrace,informationCollector? : (information : core.DartStringBuffer) => any,silent? : boolean}) : any {
        let {context,exception,stack,informationCollector,silent} = Object.assign({
            "silent" : false}, _namedArguments );
        this._currentError = lib4.FlutterErrorDetails({
            exception : exception,stack : stack,library : 'image resource service',context : context,informationCollector : informationCollector,silent : silent});
        let localErrorListeners : core.DartList<(exception : any,stackTrace : core.DartStackTrace) => any> = this._listeners.map((listenerPair : _ImageListenerPair) =>  {
            return listenerPair.errorListener;
        }).where((errorListener : (exception : any,stackTrace : core.DartStackTrace) => any) =>  {
            return errorListener != null;
        }).toList();
        if (localErrorListeners.isEmpty) {
            lib4.FlutterError.reportError(this._currentError);
        }else {
            for(let errorListener of localErrorListeners) {
                try {
                    errorListener(exception,stack);
                } catch (__error__) {

                    {
                        let stack : core.DartStackTrace = new core.DartStackTrace.fromError(__error__);
                        let exception = __error__;
                        lib4.FlutterError.reportError(lib4.FlutterErrorDetails({
                            context : 'when reporting an error to an image listener',library : 'image resource service',exception : exception,stack : stack}));
                    }
                }
            }
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(description : lib3.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(description);
        description.add(lib3.DiagnosticsProperty('current',this._currentImage,{
            ifNull : 'unresolved',showName : false}));
        description.add(lib3.ObjectFlagProperty('listeners',this._listeners,{
            ifPresent : `${((t)=>(!!t)?t.length:null)(this._listeners)} listener${((t)=>(!!t)?t.length:null)(this._listeners) == 1 ? "" : "s"}`}));
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ImageStreamCompleter() {
        this._listeners = new core.DartList.literal<_ImageListenerPair>();
    }
}

export namespace OneFrameImageStreamCompleter {
    export type Constructors = ImageStreamCompleter.Constructors | 'OneFrameImageStreamCompleter';
    export type Interface = Omit<OneFrameImageStreamCompleter, Constructors>;
}
@DartClass
export class OneFrameImageStreamCompleter extends ImageStreamCompleter {
    constructor(image : async.Future<ImageInfo>,_namedArguments? : {informationCollector? : (information : core.DartStringBuffer) => any}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    OneFrameImageStreamCompleter(image : async.Future<ImageInfo>,_namedArguments? : {informationCollector? : (information : core.DartStringBuffer) => any}) {
        let {informationCollector} = Object.assign({
        }, _namedArguments );
        this.assert = assert;
    }
     : any;

    void : any;

    @Abstract
    [OperatorMethods.GT](setImage : any,_namedArguments? : {onError? : any}) : any{ throw 'abstract'}
}

export namespace MultiFrameImageStreamCompleter {
    export type Constructors = ImageStreamCompleter.Constructors | 'MultiFrameImageStreamCompleter';
    export type Interface = Omit<MultiFrameImageStreamCompleter, Constructors>;
}
@DartClass
export class MultiFrameImageStreamCompleter extends ImageStreamCompleter {
    constructor(_namedArguments? : {codec? : async.Future<any>,scale? : double,informationCollector? : (information : core.DartStringBuffer) => any}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    MultiFrameImageStreamCompleter(_namedArguments? : {codec? : async.Future<any>,scale? : double,informationCollector? : (information : core.DartStringBuffer) => any}) {
        let {codec,scale,informationCollector} = Object.assign({
        }, _namedArguments );
        this._informationCollector = informationCollector;
        this._scale = scale;
        this._framesEmitted = 0;
        this._timer = null;
        this.assert = assert;
    }
     : any;

    _informationCollector;
    _scale;
    _framesEmitted;
    _timer;

    void : any;

    @Abstract
    [OperatorMethods.GT](_handleCodecReady : any,_namedArguments? : {onError? : any}) : any{ throw 'abstract'}
}

export class properties {
    private static __$_codec : any;
    static get _codec() : any { 
        return this.__$_codec;
    }
    static set _codec(__$value : any)  { 
        this.__$_codec = __$value;
    }

    private static __$_scale : double;
    static get _scale() : double { 
        return this.__$_scale;
    }
    static set _scale(__$value : double)  { 
        this.__$_scale = __$value;
    }

    private static __$_informationCollector : (information : core.DartStringBuffer) => any;
    static get _informationCollector() : (information : core.DartStringBuffer) => any { 
        return this.__$_informationCollector;
    }
    static set _informationCollector(__$value : (information : core.DartStringBuffer) => any)  { 
        this.__$_informationCollector = __$value;
    }

    private static __$_nextFrame : any;
    static get _nextFrame() : any { 
        return this.__$_nextFrame;
    }
    static set _nextFrame(__$value : any)  { 
        this.__$_nextFrame = __$value;
    }

    private static __$_shownTimestamp : core.DartDuration;
    static get _shownTimestamp() : core.DartDuration { 
        return this.__$_shownTimestamp;
    }
    static set _shownTimestamp(__$value : core.DartDuration)  { 
        this.__$_shownTimestamp = __$value;
    }

    private static __$_frameDuration : core.DartDuration;
    static get _frameDuration() : core.DartDuration { 
        return this.__$_frameDuration;
    }
    static set _frameDuration(__$value : core.DartDuration)  { 
        this.__$_frameDuration = __$value;
    }

    private static __$_framesEmitted : number;
    static get _framesEmitted() : number { 
        return this.__$_framesEmitted;
    }
    static set _framesEmitted(__$value : number)  { 
        this.__$_framesEmitted = __$value;
    }

    private static __$_timer : async.DartTimer;
    static get _timer() : async.DartTimer { 
        return this.__$_timer;
    }
    static set _timer(__$value : async.DartTimer)  { 
        this.__$_timer = __$value;
    }

    private static __$void : async.Future<any>;
    static get void() : async.Future<any> { 
        return this.__$void;
    }
    static set void(__$value : async.Future<any>)  { 
        this.__$void = __$value;
    }

}
