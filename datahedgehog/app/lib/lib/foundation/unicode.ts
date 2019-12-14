/** Library asset:datahedgehog_monitor/lib/lib/foundation/unicode.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace Unicode {
    export type Constructors = '_';
    export type Interface = Omit<Unicode, Constructors>;
}
@DartClass
export class Unicode {
    @namedConstructor
    _() {
    }
    static _ : new() => Unicode;

    private static __$LRE : string;
    static get LRE() : string { 
        if (this.__$LRE===undefined) {
            this.__$LRE = '‪';
        }
        return this.__$LRE;
    }

    private static __$RLE : string;
    static get RLE() : string { 
        if (this.__$RLE===undefined) {
            this.__$RLE = '‫';
        }
        return this.__$RLE;
    }

    private static __$PDF : string;
    static get PDF() : string { 
        if (this.__$PDF===undefined) {
            this.__$PDF = '‬';
        }
        return this.__$PDF;
    }

    private static __$LRO : string;
    static get LRO() : string { 
        if (this.__$LRO===undefined) {
            this.__$LRO = '‭';
        }
        return this.__$LRO;
    }

    private static __$RLO : string;
    static get RLO() : string { 
        if (this.__$RLO===undefined) {
            this.__$RLO = '‮';
        }
        return this.__$RLO;
    }

    private static __$LRI : string;
    static get LRI() : string { 
        if (this.__$LRI===undefined) {
            this.__$LRI = '⁦';
        }
        return this.__$LRI;
    }

    private static __$RLI : string;
    static get RLI() : string { 
        if (this.__$RLI===undefined) {
            this.__$RLI = '⁧';
        }
        return this.__$RLI;
    }

    private static __$FSI : string;
    static get FSI() : string { 
        if (this.__$FSI===undefined) {
            this.__$FSI = '⁨';
        }
        return this.__$FSI;
    }

    private static __$PDI : string;
    static get PDI() : string { 
        if (this.__$PDI===undefined) {
            this.__$PDI = '⁩';
        }
        return this.__$PDI;
    }

    private static __$LRM : string;
    static get LRM() : string { 
        if (this.__$LRM===undefined) {
            this.__$LRM = '‎';
        }
        return this.__$LRM;
    }

    private static __$RLM : string;
    static get RLM() : string { 
        if (this.__$RLM===undefined) {
            this.__$RLM = '‏';
        }
        return this.__$RLM;
    }

    private static __$ALM : string;
    static get ALM() : string { 
        if (this.__$ALM===undefined) {
            this.__$ALM = '؜';
        }
        return this.__$ALM;
    }

}

export class properties {
}
