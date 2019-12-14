/** Library asset:datahedgehog_monitor/lib/lib/_internal/pub/asset/dart/serialize/exception.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/stack_trace/lib/src/chain";
import * as lib4 from "./../utils";

export var serializeException : (error : any,stack? : core.DartStackTrace) => core.DartMap<any,any> = (error : any,stack? : core.DartStackTrace) : core.DartMap<any,any> =>  {
    if (is(error, any)) {
        return _CrossIsolateAssetNotFoundException.serialize(error,stack);
    }else {
        return CrossIsolateException.serialize(error,stack);
    }
};
export var deserializeException : (error : core.DartMap<any,any>) => CrossIsolateException = (error : core.DartMap<any,any>) : CrossIsolateException =>  {
    if (op(Op.EQUALS,error.get('type'),'AssetNotFoundException')) {
        return new _CrossIsolateAssetNotFoundException.deserialize(error);
    }else {
        return new CrossIsolateException.deserialize(error);
    }
};
export namespace CrossIsolateException {
    export type Constructors = 'deserialize';
    export type Interface = Omit<CrossIsolateException, Constructors>;
}
@DartClass
@Implements(core.Exception)
export class CrossIsolateException implements core.Exception.Interface {
    type : string;

    get message() : string {
        return this._message;
    }
    _message : string;

    stackTrace : lib3.Chain;

    @namedConstructor
    deserialize(error : core.DartMap<any,any>) {
        this.type = error.get('type');
        this._message = error.get('message');
        this.stackTrace = op(Op.EQUALS,error.get('stack'),null) ? null : new lib3.Chain.parse(error.get('stack'));
    }
    static deserialize : new(error : core.DartMap<any,any>) => CrossIsolateException;

    static serialize(error : any,stack? : core.DartStackTrace) : core.DartMap<any,any> {
        if (op(Op.EQUALS,stack,null) && is(error, core.DartError)) stack = error.stackTrace;
        return new core.DartMap.literal([
            ['type',error.runtimeType.toString()],
            ['message',lib4.getErrorMessage(error)],
            ['stack',op(Op.EQUALS,stack,null) ? null : new lib3.Chain.forTrace(stack).toString()]]);
    }
    toString() : string {
        return `${this.message}\n${this.stackTrace}`;
    }
}

export namespace _CrossIsolateAssetNotFoundException {
    export type Constructors = CrossIsolateException.Constructors | 'deserialize';
    export type Interface = Omit<_CrossIsolateAssetNotFoundException, Constructors>;
}
@DartClass
@Implements(any)
export class _CrossIsolateAssetNotFoundException extends CrossIsolateException implements any.Interface {
    id : any;

    get message() : string {
        return `Could not find asset ${this.id}.`;
    }
    @namedConstructor
    deserialize(error : core.DartMap<any,any>) {
        this.id = new bare.createInstance(any,null,error.get('package'),error.get('path'));
        super.deserialize(error);
    }
    static deserialize : new(error : core.DartMap<any,any>) => _CrossIsolateAssetNotFoundException;

    static serialize(error : any,stack? : core.DartStackTrace) : core.DartMap<any,any> {
        let map = CrossIsolateException.serialize(error);
        map.set('package',error.id.package);
        map.set('path',error.id.path);
        return map;
    }
}

export class properties {
}
