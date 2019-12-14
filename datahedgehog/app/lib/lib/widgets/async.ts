/** Library asset:datahedgehog_monitor/lib/lib/widgets/async.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./framework";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/foundation/key";

export namespace StreamBuilderBase {
    export type Constructors = lib3.StatefulWidget.Constructors | 'StreamBuilderBase';
    export type Interface<T,S> = Omit<StreamBuilderBase<T,S>, Constructors>;
}
@DartClass
export class StreamBuilderBase<T,S> extends lib3.StatefulWidget {
    constructor(_namedArguments? : {key? : lib4.Key,stream? : async.DartStream<T>}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    StreamBuilderBase(_namedArguments? : {key? : lib4.Key,stream? : async.DartStream<T>}) {
        let {key,stream} = Object.assign({
        }, _namedArguments );
        super.StatefulWidget({
            key : key});
        this.stream = stream;
    }
    stream : async.DartStream<T>;

    @Abstract
    initial() : S{ throw 'abstract'}
    afterConnected(current : S) : S {
        return current;
    }
    @Abstract
    afterData(current : S,data : T) : S{ throw 'abstract'}
    afterError(current : S,error : core.DartObject) : S {
        return current;
    }
    afterDone(current : S) : S {
        return current;
    }
    afterDisconnected(current : S) : S {
        return current;
    }
    @Abstract
    build(context : lib3.BuildContext,currentSummary : S) : lib3.Widget{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createState() : lib3.State<StreamBuilderBase<T,S>> {
        return _StreamBuilderBaseState();
    }
}

export namespace _StreamBuilderBaseState {
    export type Constructors = lib3.State.Constructors | '_StreamBuilderBaseState';
    export type Interface<T,S> = Omit<_StreamBuilderBaseState<T,S>, Constructors>;
}
@DartClass
export class _StreamBuilderBaseState<T,S> extends lib3.State<StreamBuilderBase<T,S>> {
    _subscription : async.DartStreamSubscription<T>;

    _summary : S;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    initState() : void {
        super.initState();
        this._summary = this.widget.initial();
        this._subscribe();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    didUpdateWidget(oldWidget : StreamBuilderBase<T,S>) : void {
        super.didUpdateWidget(oldWidget);
        if (oldWidget.stream != this.widget.stream) {
            if (this._subscription != null) {
                this._unsubscribe();
                this._summary = this.widget.afterDisconnected(this._summary);
            }
            this._subscribe();
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib3.BuildContext) : lib3.Widget {
        return this.widget.build(context,this._summary);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    dispose() : void {
        this._unsubscribe();
        super.dispose();
    }
    _subscribe() : void {
        if (this.widget.stream != null) {
            this._subscription = this.widget.stream.listen((data : T) =>  {
                this.setState(() =>  {
                    this._summary = this.widget.afterData(this._summary,data);
                });
            },{
                onError : (error : core.DartObject) =>  {
                    this.setState(() =>  {
                        this._summary = this.widget.afterError(this._summary,error);
                    });
                },onDone : () =>  {
                    this.setState(() =>  {
                        this._summary = this.widget.afterDone(this._summary);
                    });
                }});
            this._summary = this.widget.afterConnected(this._summary);
        }
    }
    _unsubscribe() : void {
        if (this._subscription != null) {
            this._subscription.cancel();
            this._subscription = null;
        }
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _StreamBuilderBaseState() {
    }
}

export enum ConnectionState {
    none,
    waiting,
    active,
    done
}

export namespace AsyncSnapshot {
    export type Constructors = '_' | 'nothing' | 'withData' | 'withError';
    export type Interface<T> = Omit<AsyncSnapshot<T>, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'asset:meta/lib/meta.dart',type : 'immutable',value : {
        arguments : [],namedArguments : {
        }}})
export class AsyncSnapshot<T> {
    @namedConstructor
    _(connectionState : ConnectionState,data : T,error : core.DartObject) {
        this.assert = assert;
        this.connectionState = connectionState;
        this.data = data;
        this.error = error;
    }
    static _ : new<T>(connectionState : ConnectionState,data : T,error : core.DartObject) => AsyncSnapshot<T>;

     : any;

    [null](data : any, : any) {
    }
     : any;

    @namedConstructor
    nothing() {
        this._(ConnectionState.none,null,null);
    }
    static nothing : new<T>() => AsyncSnapshot<T>;

    @namedConstructor
    withData(state : ConnectionState,data : T) {
        this._(state,data,null);
    }
    static withData : new<T>(state : ConnectionState,data : T) => AsyncSnapshot<T>;

    @namedConstructor
    withError(state : ConnectionState,error : core.DartObject) {
        this._(state,null,error);
    }
    static withError : new<T>(state : ConnectionState,error : core.DartObject) => AsyncSnapshot<T>;

    connectionState : ConnectionState;

    data : T;

    get requireData() : T {
        if (this.hasData) return this.data;
        if (this.hasError) throw this.error;
        throw core.StateError('Snapshot has neither data nor error');
    }
    error : core.DartObject;

    inState(state : ConnectionState) : AsyncSnapshot<T> {
        return op(Op.LT,AsyncSnapshot<T>,T);
    }
    @Abstract
    _(state : any,data : any,error : any){ throw 'abstract'}
    get hasData() : boolean {
        return this.data != null;
    }
    get hasError() : boolean {
        return this.error != null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `${this.runtimeType}(${this.connectionState}, ${this.data}, ${this.error})`;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (core.identical(this,other)) return true;
        if (isNot(other, AsyncSnapshot<T>)) return false;
        let typedOther : AsyncSnapshot<T> = other;
        return op(Op.EQUALS,this.connectionState,typedOther.connectionState) && op(Op.EQUALS,this.data,typedOther.data) && op(Op.EQUALS,this.error,typedOther.error);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return hashValues(this.connectionState,this.data,this.error);
    }
}

export namespace FutureBuilder {
    export type Constructors = lib3.StatefulWidget.Constructors | 'FutureBuilder';
    export type Interface<T> = Omit<FutureBuilder<T>, Constructors>;
}
@DartClass
export class FutureBuilder<T> extends lib3.StatefulWidget {
    constructor(_namedArguments? : {key? : lib4.Key,future? : async.Future<T>,initialData? : T,builder? : <T>(context : lib3.BuildContext,snapshot : AsyncSnapshot<T>) => lib3.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    FutureBuilder(_namedArguments? : {key? : lib4.Key,future? : async.Future<T>,initialData? : T,builder? : <T>(context : lib3.BuildContext,snapshot : AsyncSnapshot<T>) => lib3.Widget}) {
        let {key,future,initialData,builder} = Object.assign({
        }, _namedArguments );
        this.assert = assert;
        this.future = future;
        this.initialData = initialData;
        this.builder = builder;
    }
     : any;

     : any;

     : any;

    future : async.Future<T>;

    builder : <T>(context : lib3.BuildContext,snapshot : AsyncSnapshot<T>) => lib3.Widget;

    initialData : T;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createState() : lib3.State<FutureBuilder<T>> {
        return _FutureBuilderState();
    }
}

export namespace _FutureBuilderState {
    export type Constructors = lib3.State.Constructors | '_FutureBuilderState';
    export type Interface<T> = Omit<_FutureBuilderState<T>, Constructors>;
}
@DartClass
export class _FutureBuilderState<T> extends lib3.State<FutureBuilder<T>> {
    _activeCallbackIdentity : core.DartObject;

    _snapshot : AsyncSnapshot<T>;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    initState() : void {
        super.initState();
        this._snapshot = op(Op.LT,AsyncSnapshot<T>,T);
        op(Op.GT,,.withData(ConnectionState.none,this.widget.initialData));
        this._subscribe();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    didUpdateWidget(oldWidget : FutureBuilder<T>) : void {
        super.didUpdateWidget(oldWidget);
        if (oldWidget.future != this.widget.future) {
            if (this._activeCallbackIdentity != null) {
                this._unsubscribe();
                this._snapshot = this._snapshot.inState(ConnectionState.none);
            }
            this._subscribe();
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib3.BuildContext) : lib3.Widget {
        return this.widget.builder(context,this._snapshot);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    dispose() : void {
        this._unsubscribe();
        super.dispose();
    }
    _subscribe() : void {
        if (this.widget.future != null) {
            let callbackIdentity : core.DartObject = core.DartObject();
            this._activeCallbackIdentity = callbackIdentity;
            op(Op.LT,this.widget.future.then.bind(this.widget.future),);
            op(Op.GT,,((data : T) =>  {
                if (op(Op.EQUALS,this._activeCallbackIdentity,callbackIdentity)) {
                    this.setState(() =>  {
                        this._snapshot = op(Op.LT,AsyncSnapshot<T>,T);
                        op(Op.GT,,.withData(ConnectionState.done,data));
                    });
                }
            }));
            onError:
                (error : core.DartObject) =>  {
                    if (op(Op.EQUALS,this._activeCallbackIdentity,callbackIdentity)) {
                        this.setState(() =>  {
                            this._snapshot = op(Op.LT,AsyncSnapshot<T>,T);
                            op(Op.GT,,.withError(ConnectionState.done,error));
                        });
                    }
                };
            this._snapshot = this._snapshot.inState(ConnectionState.waiting);
        }
    }
    _unsubscribe() : void {
        this._activeCallbackIdentity = null;
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _FutureBuilderState() {
    }
}

export namespace StreamBuilder {
    export type Constructors = StreamBuilderBase.Constructors | 'StreamBuilder';
    export type Interface<T> = Omit<StreamBuilder<T>, Constructors>;
}
@DartClass
export class StreamBuilder<T> extends StreamBuilderBase<T,AsyncSnapshot<T>> {
    constructor(_namedArguments? : {key? : lib4.Key,initialData? : T,stream? : async.DartStream<T>,builder? : <T>(context : lib3.BuildContext,snapshot : AsyncSnapshot<T>) => lib3.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    StreamBuilder(_namedArguments? : {key? : lib4.Key,initialData? : T,stream? : async.DartStream<T>,builder? : <T>(context : lib3.BuildContext,snapshot : AsyncSnapshot<T>) => lib3.Widget}) {
        let {key,initialData,stream,builder} = Object.assign({
        }, _namedArguments );
        this.assert = assert;
        this.initialData = initialData;
        this.builder = builder;
    }
     : any;

     : any;

    key;
    stream;

     : any;

    builder : <T>(context : lib3.BuildContext,snapshot : AsyncSnapshot<T>) => lib3.Widget;

    initialData : T;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    initial() : AsyncSnapshot<T> {
        return op(Op.LT,AsyncSnapshot<T>,T);
    }
    @Abstract
    withData( : any,initialData : any){ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    afterConnected(current : AsyncSnapshot<T>) : AsyncSnapshot<T> {
        return current.inState(ConnectionState.waiting);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    afterData(current : AsyncSnapshot<T>,data : T) : AsyncSnapshot<T> {
        return op(Op.LT,AsyncSnapshot<T>,T);
        op(Op.GT,,.withData(ConnectionState.active,data));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    afterError(current : AsyncSnapshot<T>,error : core.DartObject) : AsyncSnapshot<T> {
        return op(Op.LT,AsyncSnapshot<T>,T);
        op(Op.GT,,.withError(ConnectionState.active,error));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    afterDone(current : AsyncSnapshot<T>) : AsyncSnapshot<T> {
        return current.inState(ConnectionState.done);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    afterDisconnected(current : AsyncSnapshot<T>) : AsyncSnapshot<T> {
        return current.inState(ConnectionState.none);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib3.BuildContext,currentSummary : AsyncSnapshot<T>) : lib3.Widget {
        return this.builder(context,currentSummary);
    }
}

export class properties {
}
