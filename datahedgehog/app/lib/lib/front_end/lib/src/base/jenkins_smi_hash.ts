/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/base/jenkins_smi_hash.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace JenkinsSmiHash {
    export type Constructors = 'JenkinsSmiHash';
    export type Interface = Omit<JenkinsSmiHash, Constructors>;
}
@DartClass
export class JenkinsSmiHash {
    static combine(hash : number,value : number) : number {
        hash = 536870911 & (hash + value);
        hash = 536870911 & (hash + ((524287 & hash) << 10));
        return hash ^ (hash >> 6);
    }
    static finish(hash : number) : number {
        hash = 536870911 & (hash + ((67108863 & hash) << 3));
        hash = hash ^ (hash >> 11);
        return 536870911 & (hash + ((16383 & hash) << 15));
    }
    static hash2(a : any,b : any) : number {
        return JenkinsSmiHash.finish(JenkinsSmiHash.combine(JenkinsSmiHash.combine(0,a),b));
    }
    static hash3(a : any,b : any,c : any) : number {
        return JenkinsSmiHash.finish(JenkinsSmiHash.combine(JenkinsSmiHash.combine(JenkinsSmiHash.combine(0,a),b),c));
    }
    static hash4(a : any,b : any,c : any,d : any) : number {
        return JenkinsSmiHash.finish(JenkinsSmiHash.combine(JenkinsSmiHash.combine(JenkinsSmiHash.combine(JenkinsSmiHash.combine(0,a),b),c),d));
    }
    _hash : number;

    add(o : core.DartObject) : void {
        this._hash = JenkinsSmiHash.combine(this._hash,o.hashCode);
    }
    get hashCode() : number {
        return JenkinsSmiHash.finish(this._hash);
    }
    constructor() {
    }
    @defaultConstructor
    JenkinsSmiHash() {
        this._hash = 0;
    }
}

export class properties {
}
