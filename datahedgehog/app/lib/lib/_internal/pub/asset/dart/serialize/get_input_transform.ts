/** Library asset:datahedgehog_monitor/lib/lib/_internal/pub/asset/dart/serialize/get_input_transform.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as convert from "@dart2ts/dart/convert";
import * as lib4 from "@dart2ts.packages/async/lib/src/stream_completer";

export namespace GetInputTransform {
    export type Constructors = 'GetInputTransform';
    export type Interface = Omit<GetInputTransform, Constructors>;
}
@DartClass
export class GetInputTransform {
    @Abstract
    getInput(id : any) : async.Future<any>{ throw 'abstract'}
    readInputAsString(id : any,_namedArguments? : {encoding? : convert.Encoding}) : async.Future<string> {
        let {encoding} = Object.assign({
        }, _namedArguments );
        if (op(Op.EQUALS,encoding,null)) encoding = convert.properties.UTF8;
        return this.getInput(id).then((input : any) =>  {
            return input.readAsString({
                encoding : encoding});
        });
    }
    readInput(id : any) : async.DartStream<core.DartList<number>> {
        return lib4.StreamCompleter.fromFuture(this.getInput(id).then((input : any) =>  {
            return input.read();
        }));
    }
    hasInput(id : any) : async.Future<boolean> { 
        return new async.Future.fromPromise(( async () =>  {
            try {
                await this.getInput(id);
                return true;
            } catch (__error__) {

                if (is(__error__,any)){
                    let error : any = __error__;
                    if (op(Op.EQUALS,error.id,id)) return false;
                    /* TODO (RethrowExpressionImpl): rethrow */;
                }
            }
        } )());
    }

    constructor() {
    }
    @defaultConstructor
    GetInputTransform() {
    }
}

export class properties {
}
