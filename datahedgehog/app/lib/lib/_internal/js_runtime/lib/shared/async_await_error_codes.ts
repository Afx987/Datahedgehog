/** Library asset:datahedgehog_monitor/lib/lib/_internal/js_runtime/lib/shared/async_await_error_codes.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export class properties {
    private static __$SUCCESS : number;
    static get SUCCESS() : number { 
        if (this.__$SUCCESS===undefined) {
            this.__$SUCCESS = 0;
        }
        return this.__$SUCCESS;
    }
    static set SUCCESS(__$value : number)  { 
        this.__$SUCCESS = __$value;
    }

    private static __$ERROR : number;
    static get ERROR() : number { 
        if (this.__$ERROR===undefined) {
            this.__$ERROR = 1;
        }
        return this.__$ERROR;
    }
    static set ERROR(__$value : number)  { 
        this.__$ERROR = __$value;
    }

    private static __$STREAM_WAS_CANCELED : number;
    static get STREAM_WAS_CANCELED() : number { 
        if (this.__$STREAM_WAS_CANCELED===undefined) {
            this.__$STREAM_WAS_CANCELED = 2;
        }
        return this.__$STREAM_WAS_CANCELED;
    }
    static set STREAM_WAS_CANCELED(__$value : number)  { 
        this.__$STREAM_WAS_CANCELED = __$value;
    }

}
