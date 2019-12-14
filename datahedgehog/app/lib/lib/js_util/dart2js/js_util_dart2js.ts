/** Library asset:datahedgehog_monitor/lib/lib/js_util/dart2js/js_util_dart2js.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as collection from "@dart2ts/dart/core";

export var jsify : (object : any) => any = (object : any) =>  {
    if ((isNot(object, core.DartMap<any,any>)) && (isNot(object, core.DartIterable<any>))) {
        throw new core.ArgumentError("object must be a Map or Iterable");
    }
    return _convertDataTree(object);
};
export var _convertDataTree : (data : any) => any = (data : any) =>  {
    let _convertedObjects = new core.DartHashMap.identity();
    var _convert : (o : any) => any = (o : any) =>  {
        if (_convertedObjects.containsKey(o)) {
            return op(Op.INDEX,_convertedObjects,o);
        }
        if (is(o, core.DartMap<any,any>)) {
            let convertedMap = {}/* JS('=Object', '{}') */;
            op(Op.INDEX_ASSIGN,_convertedObjects,o,convertedMap);
            for(let key of o.keys) {
                convertedMap[key]=_convert(o.get(key))/* JS('=Object', '#[#]=#', convertedMap, key, _convert(o[key])) */;
            }
            return convertedMap;
        }else if (is(o, core.DartIterable<any>)) {
            let convertedList = new core.DartList.literal();
            op(Op.INDEX_ASSIGN,_convertedObjects,o,convertedList);
            convertedList.addAll(o.map(_convert));
            return convertedList;
        }else {
            return o;
        }
    };
    return _convert(data);
};
export var newObject : () => any = () =>  {
    return {}/* JS('=Object', '{}') */;
};
export var hasProperty : (o : any,name : any) => any = (o : any,name : any) =>  {
    return name in o/* JS('bool', '# in #', name, o) */;
};
export var getProperty : (o : any,name : any) => any = (o : any,name : any) =>  {
    return o[name]/* JS('Object|Null', '#[#]', o, name) */;
};
export var setProperty : (o : any,name : any,value : any) => any = (o : any,name : any,value : any) =>  {
    return o[name]=value/* JS('', '#[#]=#', o, name, value) */;
};
export var callMethod : (o : any,method : string,args : core.DartList<any>) => any = (o : any,method : string,args : core.DartList<any>) =>  {
    return o[method].apply(o, args)/* JS('Object|Null', '#[#].apply(#, #)', o, method, o, args) */;
};
export var instanceof : (o : any,type : Function) => any = (o : any,type : Function) =>  {
    return o instanceof type/* JS('bool', '# instanceof #', o, type) */;
};
export var callConstructor : (constr : Function,arguments : core.DartList<any>) => any = (constr : Function,arguments : core.DartList<any>) =>  {
    if (arguments == null) {
        return new constr()/* JS('Object', 'new #()', constr) */;
    }
    if (arguments instanceof Array/* JS('bool', '# instanceof Array', arguments) */) {
        let argumentCount : number = arguments.length/* JS('int', '#.length', arguments) */;
        switch (argumentCount) {
            case 0:
                return new constr()/* JS('Object', 'new #()', constr) */;
            case 1:
                let arg0 = arguments[0]/* JS('', '#[0]', arguments) */;
                return new constr(arg0)/* JS('Object', 'new #(#)', constr, arg0) */;
            case 2:
                let arg0 = arguments[0]/* JS('', '#[0]', arguments) */;
                let arg1 = arguments[1]/* JS('', '#[1]', arguments) */;
                return new constr(arg0, arg1)/* JS('Object', 'new #(#, #)', constr, arg0, arg1) */;
            case 3:
                let arg0 = arguments[0]/* JS('', '#[0]', arguments) */;
                let arg1 = arguments[1]/* JS('', '#[1]', arguments) */;
                let arg2 = arguments[2]/* JS('', '#[2]', arguments) */;
                return new constr(arg0, arg1, arg2)/* JS('Object', 'new #(#, #, #)', constr, arg0, arg1, arg2) */;
            case 4:
                let arg0 = arguments[0]/* JS('', '#[0]', arguments) */;
                let arg1 = arguments[1]/* JS('', '#[1]', arguments) */;
                let arg2 = arguments[2]/* JS('', '#[2]', arguments) */;
                let arg3 = arguments[3]/* JS('', '#[3]', arguments) */;
                return new constr(arg0, arg1, arg2, arg3)/* JS('Object', 'new #(#, #, #, #)', constr, arg0, arg1, arg2, arg3) */;
        }
    }
    let args = ((_) : core.DartList<any> =>  {
        {
            _.addAll(arguments);
            return _;
        }
    })(new core.DartList.literal(null));
    let factoryFunction = constr.bind.apply(constr, args)/* JS('', '#.bind.apply(#, #)', constr, constr, args) */;
    String(factoryFunction)/* JS('String', 'String(#)', factoryFunction) */;
    return new factoryFunction()/* JS('Object', 'new #()', factoryFunction) */;
};
export class properties {
}
