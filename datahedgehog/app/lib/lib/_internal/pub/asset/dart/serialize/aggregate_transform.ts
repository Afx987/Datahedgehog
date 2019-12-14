/** Library asset:datahedgehog_monitor/lib/lib/_internal/pub/asset/dart/serialize/aggregate_transform.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as isolate from "@dart2ts/dart/isolate";
import * as lib4 from "./../serialize";
import * as lib5 from "./get_input_transform";
import * as convert from "@dart2ts/dart/convert";

export var _serializeBaseAggregateTransform : (transform : any,additionalFields : core.DartMap<string,any>,methodHandlers : core.DartMap<string,Function>) => core.DartMap<any,any> = (transform : any,additionalFields : core.DartMap<string,any>,methodHandlers : core.DartMap<string,Function>) : core.DartMap<any,any> =>  {
    let receivePort = new isolate.ReceivePort();
    receivePort.listen((wrappedMessage : any) =>  {
        lib4.respond(wrappedMessage,(message : any) =>  {
            let handler = methodHandlers.get(op(Op.INDEX,message,'type'));
            if (handler != null) return handler(message);
            if (op(Op.EQUALS,op(Op.INDEX,message,'type'),'consumePrimary')) {
                transform.consumePrimary(lib4.deserializeId(op(Op.INDEX,message,'assetId')));
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
    return ((_) : core.DartMap<any,any> =>  {
        {
            _.addAll(additionalFields);
            return _;
        }
    })(new core.DartMap.literal([
        ['port',receivePort.sendPort],
        ['key',transform.key],
        ['package',transform.package]]));
};
export var serializeAggregateTransform : (transform : any) => core.DartMap<any,any> = (transform : any) : core.DartMap<any,any> =>  {
    return _serializeBaseAggregateTransform(transform,new core.DartMap.literal([
        ['primaryInputs',lib4.serializeStream(transform.primaryInputs,serializeAsset)]]),new core.DartMap.literal([
        ['getInput',(message : any) =>  {
            return transform.getInput(lib4.deserializeId(op(Op.INDEX,message,'id'))).then((asset : any) =>  {
                return serializeAsset(asset);
            });
        }],
        ['addOutput',(message : any) =>  {
            return transform.addOutput(deserializeAsset(op(Op.INDEX,message,'output')));
        }]]));
};
export var serializeDeclaringAggregateTransform : (transform : any) => core.DartMap<any,any> = (transform : any) : core.DartMap<any,any> =>  {
    return _serializeBaseAggregateTransform(transform,new core.DartMap.literal([
        ['primaryIds',lib4.serializeStream(transform.primaryIds,lib4.serializeId)]]),new core.DartMap.literal([
        ['declareOutput',(message : any) =>  {
            return transform.declareOutput(lib4.deserializeId(op(Op.INDEX,message,'output')));
        }]]));
};
export namespace _ForeignBaseAggregateTransform {
    export type Constructors = '_ForeignBaseAggregateTransform';
    export type Interface = Omit<_ForeignBaseAggregateTransform, Constructors>;
}
@DartClass
export class _ForeignBaseAggregateTransform {
    _port : isolate.SendPort;

    key : string;

    package : string;

    get logger() : any {
        return this._logger;
    }
    _logger : any;

    constructor(transform : core.DartMap<any,any>) {
    }
    @defaultConstructor
    _ForeignBaseAggregateTransform(transform : core.DartMap<any,any>) {
        this._port = transform.get('port');
        this.key = transform.get('key');
        this.package = transform.get('package');
        this._logger = new bare.createInstance(any,null,(assetId : any,level : any,message : any,span : any) =>  {
            lib4.call(this._port,new core.DartMap.literal([
                ['type','log'],
                ['level',level.name],
                ['message',message],
                ['assetId',op(Op.EQUALS,assetId,null) ? null : lib4.serializeId(assetId)],
                ['span',op(Op.EQUALS,span,null) ? null : lib4.serializeSpan(span)]]));
        });
    }
    consumePrimary(id : any) : void {
        lib4.call(this._port,new core.DartMap.literal([
            ['type','consumePrimary'],
            ['assetId',lib4.serializeId(id)]]));
    }
}

export namespace ForeignAggregateTransform {
    export type Constructors = _ForeignBaseAggregateTransform.Constructors | 'ForeignAggregateTransform';
    export type Interface = Omit<ForeignAggregateTransform, Constructors>;
}
@DartClass
@Implements(any)
@With(lib5.GetInputTransform)
export class ForeignAggregateTransform extends _ForeignBaseAggregateTransform implements any.Interface,lib5.GetInputTransform.Interface {
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
    primaryInputs : async.DartStream<any>;

    constructor(transform : core.DartMap<any,any>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ForeignAggregateTransform(transform : core.DartMap<any,any>) {
        this.primaryInputs = lib4.deserializeStream(transform.get('primaryInputs'),deserializeAsset);
        super._ForeignBaseAggregateTransform(transform);
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

export namespace ForeignDeclaringAggregateTransform {
    export type Constructors = _ForeignBaseAggregateTransform.Constructors | 'ForeignDeclaringAggregateTransform';
    export type Interface = Omit<ForeignDeclaringAggregateTransform, Constructors>;
}
@DartClass
@Implements(any)
export class ForeignDeclaringAggregateTransform extends _ForeignBaseAggregateTransform implements any.Interface {
    primaryIds : async.DartStream<any>;

    constructor(transform : core.DartMap<any,any>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ForeignDeclaringAggregateTransform(transform : core.DartMap<any,any>) {
        this.primaryIds = lib4.deserializeStream(transform.get('primaryIds'),lib4.deserializeId);
        super._ForeignBaseAggregateTransform(transform);
    }
    declareOutput(id : any) : void {
        lib4.call(this._port,new core.DartMap.literal([
            ['type','declareOutput'],
            ['output',lib4.serializeId(id)]]));
    }
}

export class properties {
}
