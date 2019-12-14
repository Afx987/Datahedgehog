/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/context/context_root.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/path/lib/path";

export namespace ContextRoot {
    export type Constructors = 'ContextRoot';
    export type Interface = Omit<ContextRoot, Constructors>;
}
@DartClass
export class ContextRoot {
    root : string;

    exclude : core.DartList<string>;

    constructor(root : string,exclude : core.DartList<string>) {
    }
    @defaultConstructor
    ContextRoot(root : string,exclude : core.DartList<string>) {
        this.root = root;
        this.exclude = exclude;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        let hash : number = 0;
        hash = JenkinsSmiHash.combine(hash,new core.DartString(this.root).hashCode);
        hash = JenkinsSmiHash.combine(hash,this.exclude.hashCode);
        return JenkinsSmiHash.finish(hash);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (is(other, ContextRoot)) {
            return this.root == other.root && this._listEqual(this.exclude,other.exclude,(a : string,b : string) =>  {
                return a == b;
            });
        }
        return false;
    }
    containsFile(filePath : string) : boolean {
        if (!lib3.isWithin(this.root,filePath)) {
            return false;
        }
        for(let excluded of this.exclude) {
            if (filePath == excluded || lib3.isWithin(excluded,filePath)) {
                return false;
            }
        }
        return true;
    }
    _listEqual(listA : core.DartList<any>,listB : core.DartList<any>,itemEqual : (a : any,b : any) => boolean) : boolean {
        if (listA == null) {
            return listB == null;
        }
        if (listB == null) {
            return false;
        }
        if (listA.length != listB.length) {
            return false;
        }
        for(let i : number = 0; i < listA.length; i++){
            if (!itemEqual(listA[i],listB[i])) {
                return false;
            }
        }
        return true;
    }
}

export class properties {
}
