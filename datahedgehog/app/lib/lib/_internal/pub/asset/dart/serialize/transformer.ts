/** Library asset:datahedgehog_monitor/lib/lib/_internal/pub/asset/dart/serialize/transformer.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as isolate from "@dart2ts/dart/isolate";
import * as lib4 from "./../serialize";
import * as lib5 from "./transform";
import * as lib6 from "./aggregate_transform";

export var _serializeTransformer : (transformer : any) => core.DartMap<any,any> = (transformer : any) : core.DartMap<any,any> =>  {
    let port = new isolate.ReceivePort();
    port.listen((wrappedMessage : any) =>  {
        lib4.respond(wrappedMessage,(message : any) =>  {
            if (op(Op.EQUALS,op(Op.INDEX,message,'type'),'isPrimary')) {
                return transformer.isPrimary(lib4.deserializeId(op(Op.INDEX,message,'id')));
            }else if (op(Op.EQUALS,op(Op.INDEX,message,'type'),'declareOutputs')) {
                return new async.Future.sync(() =>  {
                    return (transformer as any).declareOutputs(new lib5.ForeignDeclaringTransform(op(Op.INDEX,message,'transform')));
                }).then((_ : any) =>  {
                    return null;
                });
            }else {
                /* TODO (AssertStatementImpl) : assert (message['type'] == 'apply'); */;
                return new async.Future.sync(() =>  {
                    return transformer.apply(new lib5.ForeignTransform(op(Op.INDEX,message,'transform')));
                }).then((_ : any) =>  {
                    return null;
                });
            }
        });
    });
    let type;
    if (is(transformer, any)) {
        type = 'LazyTransformer';
    }else if (is(transformer, any)) {
        type = 'DeclaringTransformer';
    }else {
        type = 'Transformer';
    }
    return new core.DartMap.literal([
        ['type',type],
        ['toString',transformer.toString()],
        ['port',port.sendPort]]);
};
export var _serializeAggregateTransformer : (transformer : any) => core.DartMap<any,any> = (transformer : any) : core.DartMap<any,any> =>  {
    let port = new isolate.ReceivePort();
    port.listen((wrappedMessage : any) =>  {
        lib4.respond(wrappedMessage,(message : any) =>  {
            if (op(Op.EQUALS,op(Op.INDEX,message,'type'),'classifyPrimary')) {
                return transformer.classifyPrimary(lib4.deserializeId(op(Op.INDEX,message,'id')));
            }else if (op(Op.EQUALS,op(Op.INDEX,message,'type'),'declareOutputs')) {
                return new async.Future.sync(() =>  {
                    return (transformer as any).declareOutputs(new lib6.ForeignDeclaringAggregateTransform(op(Op.INDEX,message,'transform')));
                }).then((_ : any) =>  {
                    return null;
                });
            }else {
                /* TODO (AssertStatementImpl) : assert (message['type'] == 'apply'); */;
                return new async.Future.sync(() =>  {
                    return transformer.apply(new lib6.ForeignAggregateTransform(op(Op.INDEX,message,'transform')));
                }).then((_ : any) =>  {
                    return null;
                });
            }
        });
    });
    let type;
    if (is(transformer, any)) {
        type = 'LazyAggregateTransformer';
    }else if (is(transformer, any)) {
        type = 'DeclaringAggregateTransformer';
    }else {
        type = 'AggregateTransformer';
    }
    return new core.DartMap.literal([
        ['type',type],
        ['toString',transformer.toString()],
        ['port',port.sendPort]]);
};
export var _serializeTransformerGroup : (group : any) => core.DartMap<any,any> = (group : any) : core.DartMap<any,any> =>  {
    if (op(Op.EQUALS,group.phases,null)) {
        throw `TransformerGroup ${group} phases cannot be null.`;
    }
    return new core.DartMap.literal([
        ['type','TransformerGroup'],
        ['toString',group.toString()],
        ['phases',group.phases.map((phase : any) =>  {
            return phase.map(serializeTransformerLike).toList();
        }).toList()]]);
};
export var serializeTransformerLike : (transformerLike : any) => core.DartMap<any,any> = (transformerLike : any) : core.DartMap<any,any> =>  {
    if (is(transformerLike, any)) {
        return _serializeTransformer(transformerLike);
    }else if (is(transformerLike, any)) {
        return _serializeTransformerGroup(transformerLike);
    }else {
        /* TODO (AssertStatementImpl) : assert (transformerLike is AggregateTransformer); */;
        return _serializeAggregateTransformer(transformerLike);
    }
};
export class properties {
}
