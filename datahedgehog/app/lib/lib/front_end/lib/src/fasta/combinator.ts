/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/fasta/combinator.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts/dart/uri";

export namespace Combinator {
    export type Constructors = 'Combinator' | 'show' | 'hide';
    export type Interface = Omit<Combinator, Constructors>;
}
@DartClass
export class Combinator {
    isShow : boolean;

    names : core.DartSet<string>;

    constructor(isShow : boolean,names : core.DartSet<string>,charOffset : number,fileUri : lib3.Uri) {
    }
    @defaultConstructor
    Combinator(isShow : boolean,names : core.DartSet<string>,charOffset : number,fileUri : lib3.Uri) {
        this.isShow = isShow;
        this.names = names;
    }
    @namedConstructor
    show(names : core.DartIterable<string>,charOffset : number,fileUri : lib3.Uri) {
        this.Combinator(true,new core.DartSet.from(names),charOffset,fileUri);
    }
    static show : new(names : core.DartIterable<string>,charOffset : number,fileUri : lib3.Uri) => Combinator;

    @namedConstructor
    hide(names : core.DartIterable<string>,charOffset : number,fileUri : lib3.Uri) {
        this.Combinator(false,new core.DartSet.from(names),charOffset,fileUri);
    }
    static hide : new(names : core.DartIterable<string>,charOffset : number,fileUri : lib3.Uri) => Combinator;

    get isHide() : boolean {
        return !this.isShow;
    }
}

export class properties {
}
