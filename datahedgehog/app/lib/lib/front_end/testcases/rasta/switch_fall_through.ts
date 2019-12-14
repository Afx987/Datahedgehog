/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/rasta/switch_fall_through.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => any = () =>  {
    switch (1) {
        case 1:
            {
                "No fall-through error needed.";
                break;
                /* TODO (EmptyStatementImpl) : ; */;
            }
        case 2:
            {
                "Fall-through error needed.";
                if (true) {
                    break;
                }
            }
        case 3:
            try {
                "No fall-through error needed.";
            } finally {
                break;
            }
        case 4:
            try {
                "No fall-through error needed.";
                break;
            } finally {
            }
        case 5:
            try {
                "Fall-through error needed.";
            } finally {
            }
        case 10000:
            "Should be last. No fall-through error, falling through allowed here.";
    }
};
export class properties {
}
