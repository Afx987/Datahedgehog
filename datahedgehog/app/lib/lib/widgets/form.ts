/** Library asset:datahedgehog_monitor/lib/lib/widgets/form.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./framework";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as lib5 from "./will_pop_scope";

export namespace Form {
    export type Constructors = lib3.StatefulWidget.Constructors | 'Form';
    export type Interface = Omit<Form, Constructors>;
}
@DartClass
export class Form extends lib3.StatefulWidget {
    constructor(_namedArguments? : {key? : lib4.Key,child? : lib3.Widget,autovalidate? : boolean,onWillPop? : () => async.Future<boolean>,onChanged? : any}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Form(_namedArguments? : {key? : lib4.Key,child? : lib3.Widget,autovalidate? : boolean,onWillPop? : () => async.Future<boolean>,onChanged? : any}) {
        let {key,child,autovalidate,onWillPop,onChanged} = Object.assign({
            "autovalidate" : false}, _namedArguments );
        this.assert = assert;
        this.child = child;
        this.autovalidate = autovalidate;
        this.onWillPop = onWillPop;
        this.onChanged = onChanged;
    }
     : any;

     : any;

     : any;

    static of(context : lib3.BuildContext) : FormState {
        let scope : _FormScope = context.inheritFromWidgetOfExactType(_FormScope);
        return ((t)=>(!!t)?t._formState:null)(scope);
    }
    child : lib3.Widget;

    autovalidate : boolean;

    onWillPop : () => async.Future<boolean>;

    onChanged : any;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createState() : FormState {
        return FormState();
    }
}

export namespace FormState {
    export type Constructors = lib3.State.Constructors | 'FormState';
    export type Interface = Omit<FormState, Constructors>;
}
@DartClass
export class FormState extends lib3.State<Form> {
    _generation : number;

    _fields : core.DartSet<FormFieldState<any>>;

    _fieldDidChange() : void {
        if (this.widget.onChanged != null) this.widget.onChanged();
        this._forceRebuild();
    }
    _forceRebuild() : void {
        this.setState(() =>  {
            ++this._generation;
        });
    }
    _register(field : FormFieldState<any>) : void {
        this._fields.add(field);
    }
    _unregister(field : FormFieldState<any>) : void {
        this._fields.remove(field);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib3.BuildContext) : lib3.Widget {
        if (this.widget.autovalidate) this._validate();
        return lib5.WillPopScope({
            onWillPop : this.widget.onWillPop,child : _FormScope({
                formState : this,generation : this._generation,child : this.widget.child})});
    }
    save() : void {
        for(let field of this._fields) field.save();
    }
    reset() : void {
        for(let field of this._fields) field.reset();
        this._fieldDidChange();
    }
    validate() : boolean {
        this._forceRebuild();
        return this._validate();
    }
    _validate() : boolean {
        let hasError : boolean = false;
        for(let field of this._fields) hasError = !field.validate() || hasError;
        return !hasError;
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    FormState() {
        this._generation = 0;
        this._fields = core.DartSet();
    }
}

export namespace _FormScope {
    export type Constructors = lib3.InheritedWidget.Constructors | '_FormScope';
    export type Interface = Omit<_FormScope, Constructors>;
}
@DartClass
export class _FormScope extends lib3.InheritedWidget {
    constructor(_namedArguments? : {key? : lib4.Key,child? : lib3.Widget,formState? : FormState,generation? : number}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _FormScope(_namedArguments? : {key? : lib4.Key,child? : lib3.Widget,formState? : FormState,generation? : number}) {
        let {key,child,formState,generation} = Object.assign({
        }, _namedArguments );
        this._formState = formState;
        this._generation = generation;
        super.InheritedWidget({
            key : key,child : child});
    }
    _formState : FormState;

    _generation : number;

    get form() : Form {
        return this._formState.widget;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    updateShouldNotify(old : _FormScope) : boolean {
        return this._generation != old._generation;
    }
}

export namespace FormField {
    export type Constructors = lib3.StatefulWidget.Constructors | 'FormField';
    export type Interface<T> = Omit<FormField<T>, Constructors>;
}
@DartClass
export class FormField<T> extends lib3.StatefulWidget {
    constructor(_namedArguments? : {key? : lib4.Key,builder? : <T>(field : FormFieldState<T>) => lib3.Widget,onSaved? : <T>(newValue : T) => void,validator? : <T>(value : T) => string,initialValue? : T,autovalidate? : boolean,enabled? : boolean}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    FormField(_namedArguments? : {key? : lib4.Key,builder? : <T>(field : FormFieldState<T>) => lib3.Widget,onSaved? : <T>(newValue : T) => void,validator? : <T>(value : T) => string,initialValue? : T,autovalidate? : boolean,enabled? : boolean}) {
        let {key,builder,onSaved,validator,initialValue,autovalidate,enabled} = Object.assign({
            "autovalidate" : false,
            "enabled" : true}, _namedArguments );
        this.assert = assert;
        this.builder = builder;
        this.onSaved = onSaved;
        this.validator = validator;
        this.initialValue = initialValue;
        this.autovalidate = autovalidate;
        this.enabled = enabled;
    }
     : any;

     : any;

     : any;

    onSaved : <T>(newValue : T) => void;

    validator : <T>(value : T) => string;

    builder : <T>(field : FormFieldState<T>) => lib3.Widget;

    initialValue : T;

    autovalidate : boolean;

    enabled : boolean;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createState() : FormFieldState<T> {
        return FormFieldState();
    }
}

export namespace FormFieldState {
    export type Constructors = lib3.State.Constructors | 'FormFieldState';
    export type Interface<T> = Omit<FormFieldState<T>, Constructors>;
}
@DartClass
export class FormFieldState<T> extends lib3.State<FormField<T>> {
    _value : T;

    _errorText : string;

    get value() : T {
        return this._value;
    }
    get errorText() : string {
        return this._errorText;
    }
    get hasError() : boolean {
        return this._errorText != null;
    }
    save() : void {
        if (this.widget.onSaved != null) this.widget.onSaved(this.value);
    }
    reset() : void {
        this.setState(() =>  {
            this._value = this.widget.initialValue;
            this._errorText = null;
        });
    }
    validate() : boolean {
        this.setState(() =>  {
            this._validate();
        });
        return !this.hasError;
    }
    _validate() : boolean {
        if (this.widget.validator != null) this._errorText = this.widget.validator(this._value);
        return !this.hasError;
    }
    didChange(value : T) : void {
        this.setState(() =>  {
            this._value = value;
        });
        ((_892_)=>(!!_892_)?_892_._fieldDidChange():null)(Form.of(this.context));
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    setValue(value : T) : void {
        this._value = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    initState() : void {
        super.initState();
        this._value = this.widget.initialValue;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    deactivate() : void {
        ((_893_)=>(!!_893_)?_893_._unregister(this):null)(Form.of(this.context));
        super.deactivate();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib3.BuildContext) : lib3.Widget {
        if (this.widget.autovalidate && this.widget.enabled) this._validate();
        ((_894_)=>(!!_894_)?_894_._register(this):null)(Form.of(context));
        return this.widget.builder(this);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    FormFieldState() {
    }
}

export class properties {
}
