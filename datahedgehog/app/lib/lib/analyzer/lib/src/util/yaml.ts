/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/util/yaml.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as collection from "@dart2ts/dart/core";

export var toStringList : (list : any) => core.DartList<string> = (list : any) : core.DartList<string> =>  {
    if (op(Op.EQUALS,list,null)) {
        return null;
    }
    let stringList : core.DartList<string> = new core.DartList.literal<string>();
    for(let element of list) {
        if (is(element, "string")) {
            stringList.add(element);
        }else {
            return null;
        }
    }
    return stringList;
};
export namespace Merger {
    export type Constructors = 'Merger';
    export type Interface = Omit<Merger, Constructors>;
}
@DartClass
export class Merger {
    merge(o1 : core.DartObject,o2 : core.DartObject) : core.DartObject {
        if (is(o1, core.DartList<any>) && Merger.isMapToBools(o2)) {
            o1 = new core.DartMap.fromIterable(o1,{
                key : (item : any) =>  {
                    return item;
                },value : (item : any) =>  {
                    return true;
                }});
        }else if (Merger.isMapToBools(o1) && is(o2, core.DartList<any>)) {
            o2 = new core.DartMap.fromIterable(o2,{
                key : (item : any) =>  {
                    return item;
                },value : (item : any) =>  {
                    return true;
                }});
        }
        if (is(o1, core.DartMap<any,any>) && is(o2, core.DartMap<any,any>)) {
            return this.mergeMap(o1,o2);
        }
        if (is(o1, core.DartList<any>) && is(o2, core.DartList<any>)) {
            return this.mergeList(o1,o2);
        }
        return o2;
    }
    mergeList(l1 : core.DartList<any>,l2 : core.DartList<any>) : core.DartList<any> {
        return ((_) : core.DartList<any> =>  {
            {
                _.addAll(l1);
                _.addAll(l2.where((item : any) =>  {
                    return !l1.contains(item);
                }));
                return _;
            }
        })(new core.DartList<any>());
    }
    mergeMap(m1 : core.DartMap<any,any>,m2 : core.DartMap<any,any>) : core.DartMap<any,any> {
        let merged : core.DartMap<any,any> = ((_) : core.DartHashMap<any,any> =>  {
            {
                _.addAll(m1);
                return _;
            }
        })(new core.DartHashMap<any,any>());
        m2.forEach((k : any,v : any) =>  {
            op(Op.INDEX_ASSIGN,merged,k,this.merge(op(Op.INDEX,merged,k),v));
        });
        return merged;
    }
    static isMapToBools(o : core.DartObject) : boolean {
        return is(o, core.DartMap<any,any>) && o.values.every((v : any) =>  {
            return is(v, "boolean");
        });
    }
    constructor() {
    }
    @defaultConstructor
    Merger() {
    }
}

export class properties {
}
