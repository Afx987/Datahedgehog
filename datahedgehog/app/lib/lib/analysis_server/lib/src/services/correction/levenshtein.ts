/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/services/correction/levenshtein.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as math from "@dart2ts/dart/math";

export var levenshtein : (s : string,t : string,threshold : number,_namedArguments? : {caseSensitive? : boolean}) => number = (s : string,t : string,threshold : number,_namedArguments? : {caseSensitive? : boolean}) : number =>  {
    let {caseSensitive} = Object.assign({
        "caseSensitive" : true}, _namedArguments );
    if (s == null || t == null) {
        throw new core.ArgumentError('Strings must not be null');
    }
    if (threshold < 0) {
        throw new core.ArgumentError('Threshold must not be negative');
    }
    if (!caseSensitive) {
        s = new core.DartString(s).toLowerCase();
        t = new core.DartString(t).toLowerCase();
    }
    let s_len : number = new core.DartString(s).length;
    let t_len : number = new core.DartString(t).length;
    if (s_len == 0) {
        return t_len <= threshold ? t_len : properties.LEVENSHTEIN_MAX;
    }
    if (t_len == 0) {
        return s_len <= threshold ? s_len : properties.LEVENSHTEIN_MAX;
    }
    if (new core.DartInt((s_len - t_len)).abs() > threshold) {
        return properties.LEVENSHTEIN_MAX;
    }
    if (s_len > t_len) {
        let tmp : string = s;
        s = t;
        t = tmp;
        s_len = t_len;
        t_len = new core.DartString(t).length;
    }
    let p : core.DartList<number> = new core.DartList.filled(s_len + 1,0);
    let d : core.DartList<number> = new core.DartList.filled(s_len + 1,0);
    let _d : core.DartList<number>;
    let boundary : number = op(Op.PLUS,math.min(s_len,threshold),1);
    for(let i : number = 0; i < boundary; i++){
        p[i] = i;
    }
    _setRange(p,boundary,p.length,properties._MAX_VALUE);
    _setRange(d,0,d.length,properties._MAX_VALUE);
    for(let j : number = 1; j <= t_len; j++){
        let t_j : number = new core.DartString(t).codeUnitAt(j - 1);
        d[0] = j;
        let min : number = math.max(1,j - threshold);
        let max : number = math.min(s_len,j + threshold);
        if (min > max) {
            return properties.LEVENSHTEIN_MAX;
        }
        if (min > 1) {
            d[min - 1] = properties._MAX_VALUE;
        }
        for(let i : number = min; i <= max; i++){
            if (new core.DartString(s).codeUnitAt(i - 1) == t_j) {
                d[i] = p[i - 1];
            }else {
                d[i] = 1 + math.min(math.min(d[i - 1],p[i]),p[i - 1]);
            }
        }
        _d = p;
        p = d;
        d = _d;
    }
    if (p[s_len] <= threshold) {
        return p[s_len];
    }
    return properties.LEVENSHTEIN_MAX;
};
export var _setRange : (a : core.DartList<number>,start : number,end : number,value : number) => void = (a : core.DartList<number>,start : number,end : number,value : number) : void =>  {
    for(let i : number = start; i < end; i++){
        a[i] = value;
    }
};
export class properties {
    private static __$LEVENSHTEIN_MAX : number;
    static get LEVENSHTEIN_MAX() : number { 
        if (this.__$LEVENSHTEIN_MAX===undefined) {
            this.__$LEVENSHTEIN_MAX = 1 << 20;
        }
        return this.__$LEVENSHTEIN_MAX;
    }
    static set LEVENSHTEIN_MAX(__$value : number)  { 
        this.__$LEVENSHTEIN_MAX = __$value;
    }

    private static __$_MAX_VALUE : number;
    static get _MAX_VALUE() : number { 
        if (this.__$_MAX_VALUE===undefined) {
            this.__$_MAX_VALUE = 1 << 10;
        }
        return this.__$_MAX_VALUE;
    }
    static set _MAX_VALUE(__$value : number)  { 
        this.__$_MAX_VALUE = __$value;
    }

}
