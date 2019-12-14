/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/cascade.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => any = () =>  {
    let list = ((_) : core.DartList<any> =>  {
        {
            _.add(2);
            _.add(3);
            _.addAll(new core.DartList.literal(4,5));
            return _;
        }
    })(new core.DartList.literal(1));
    core.print(list);
    ((_) : core.DartList<any> =>  {
        {
            _.add(2);
            _.length;
            _.length = 0;
            return _;
        }
    })(list);
    core.print(list);
    ((_) : core.DartList<any> =>  {
        {
            _.add(2);
            _[0];
            _[0] = 87;
            return _;
        }
    })(list);
    core.print(list);
    list = ((_) : core.DartList<any> =>  {
        {
            _.first.last.toString();
            op(Op.INDEX,_.first,0).toString();
            _[0].last.toString();
            return _;
        }
    })(new core.DartList.literal(new core.DartList.literal(1)));
    core.print(list);
};
export class properties {
}
