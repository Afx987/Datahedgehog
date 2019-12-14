/** Library asset:datahedgehog_monitor/lib/lib/_internal/pub/asset/dart/serialize/transform.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as isolate from "@dart2ts/dart/isolate";
import * as lib4 from "./../serialize";
import * as lib5 from "./get_input_transform";
import * as convert from "@dart2ts/dart/convert";

export var _serializeBaseTransform : (transform : any,additionalFields : core.DartMap<string,any>,methodHandlers : core.DartMap<string,Function>) => core.DartMap<any,any> = (transform : any,additionalFields : core.DartMap<string,any>,methodHandlers : core.DartMap<string,Function>) : core.DartMap<any,any> =>  {
    let receivePort = new isolate.ReceivePort();
    receivePort.listen((wrappedMessage : any) =>  {
        lib4.respond(wrappedMessage,(message : any) =>  {
            let handler = methodHandlers.get(op(Op.INDEX,message,'type'));
            if (handler != null) return handler(message);
            if (op(Op.EQUALS,op(Op.INDEX,message,'type'),'consumePrimary')) {
                transform.consumePrimary();
                return null;
            }
            /* TODO (AssertStatementImpl) : assert (message['type'] == 'log'); */;
            let method = new core.DartMap.literal([
                ['Info',transform.logger.info],
                ['Fine',transform.logger.fine],
                ['Warning',transform.logger.warning],
                ['Error',transform.logger.error]]).get(op(Op.INDEX,message,'level'));
            /* TODO (AssertStatementImpl) : assert (method != null); */;
            let assetId = op(Op.EQUALS,op(Op.INDEX,message,'assetId'),null) ? null : lib4.deserializeId(op(Op.INDEX,message,'assetId'));
            let span = op(Op.EQUALS,op(Op.INDEX,message,'span'),null) ? null : lib4.deserializeSpan(op(Op.INDEX,message,'span'));
            method(op(Op.INDEX,message,'message'),{
                asset : assetId,span : span});
        });
    });
    return ((_) : core.DartMap<string,any> =>  {
        {
            _.addAll(additionalFields);
            return _;
        }
    })(new core.DartMap.literal([
        ['port',receivePort.sendPort]]));
};
export var serializeTransform : (transform : any) => core.DartMap<any,any> = (transform : any) : core.DartMap<any,any> =>  {
    return _serializeBaseTransform(transform,new core.DartMap.literal([
        ['primaryInput',serializeAsset(transform.primaryInput)]]),new core.DartMap.literal([
        ['getInput',(message : any) =>  {
            return transform.getInput(lib4.deserializeId(op(Op.INDEX,message,'id'))).then((asset : any) =>  {
                return serializeAsset(asset);
            });
        }],
        ['addOutput',(message : any) =>  {
            return transform.addOutput(deserializeAsset(op(Op.INDEX,message,'output')));
        }]]));
};
export var serializeDeclaringTransform : (transform : any) => core.DartMap<any,any> = (transform : any) : core.DartMap<any,any> =>  {
    return _serializeBaseTransform(transform,new core.DartMap.literal([
        ['primaryId',lib4.serializeId(transform.primaryId)]]),new core.DartMap.literal([
        ['declareOutput',(message : any) =>  {
            return transform.declareOutput(lib4.deserializeId(op(Op.INDEX,message,'output')));
        }]]));
};
export namespace _ForeignBaseTransform {
    export type Constructors = '_ForeignBaseTransform';
    export type Interface = Omit<_ForeignBaseTransform, Constructors>;
}
@DartClass
export class _ForeignBaseTransform {
    _port : isolate.SendPort;

    get logger() : any {
        return this._logger;
    }
    _logger : any;

    constructor(transform : core.DartMap<any,any>) {
    }
    @defaultConstructor
    _ForeignBaseTransform(transform : core.DartMap<any,any>) {
        this._port = transform.get('port');
        this._logger = new bare.createInstance(any,null,(assetId : any,level : any,message : any,span : any) =>  {
            lib4.call(this._port,new core.DartMap.literal([
                ['type','log'],
                ['level',level.name],
                ['message',message],
                ['assetId',op(Op.EQUALS,assetId,null) ? null : lib4.serializeId(assetId)],
                ['span',op(Op.EQUALS,span,null) ? null : lib4.serializeSpan(span)]]));
        });
    }
    consumePrimary() : void {
        lib4.call(this._port,new core.DartMap.literal([
            ['type','consumePrimary']]));
    }
}

export namespace ForeignTransform {
    export type Constructors = _ForeignBaseTransform.Constructors | 'ForeignTransform';
    export type Interface = Omit<ForeignTransform, Constructors>;
}
@DartClass
@Implements(any)
@With(lib5.GetInputTransform)
export class ForeignTransform extends _ForeignBaseTransform implements any.Interface,lib5.GetInputTransform.Interface {
    @Abstract
    readInputAsString(id : any,_namedArguments? : {encoding? : convert.Encoding}) : async.Future<string> {
        let {encoding} = Object.assign({
        }, _namedArguments );
        throw 'from mixin';
    }
    @Abstract
    readInput(id : any) : async.DartStream<core.DartList<number>> {
        throw 'from mixin';
    }
    @Abstract
    hasInput(id : any) : async.Future<boolean> {
        throw 'from mixin';
    }
    primaryInput : any;

    constructor(transform : core.DartMap<any,any>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ForeignTransform(transform : core.DartMap<any,any>) {
        this.primaryInput = deserializeAsset(transform.get('primaryInput'));
        super._ForeignBaseTransform(transform);
    }
    getInput(id : any) : async.Future<any> {
        return lib4.call(this._port,new core.DartMap.literal([
            ['type','getInput'],
            ['id',lib4.serializeId(id)]])).then(deserializeAsset);
    }
    addOutput(output : any) : void {
        lib4.call(this._port,new core.DartMap.literal([
            ['type','addOutput'],
            ['output',serializeAsset(output)]]));
    }
}

export namespace ForeignDeclaringTransform {
    export type Constructors = _ForeignBaseTransform.Constructors | 'ForeignDeclaringTransform';
    export type Interface = Omit<ForeignDeclaringTransform, Constructors>;
}
@DartClass
@Implements(any)
export class ForeignDeclaringTransform extends _ForeignBaseTransform implements any.Interface {
    primaryId : any;

    constructor(transform : core.DartMap<any,any>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ForeignDeclaringTransform(transform : core.DartMap<any,any>) {
        this.primaryId = lib4.deserializeId(transform.get('primaryId'));
        super._ForeignBaseTransform(transform);
    }
    declareOutput(id : any) : void {
        lib4.call(this._port,new core.DartMap.literal([
            ['type','declareOutput'],
            ['output',lib4.serializeId(id)]]));
    }
}

export class properties {
}
