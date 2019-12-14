/** Library asset:datahedgehog_monitor/lib/lib/front_end/testcases/stringliteral.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => any = () =>  {
};
export class properties {
    private static __$color;
    static get color() { 
        if (this.__$color===undefined) {
            this.__$color = 'brown';
        }
        return this.__$color;
    }
    static set color(__$value : any)  { 
        this.__$color = __$value;
    }

    private static __$thing;
    static get thing() { 
        if (this.__$thing===undefined) {
            this.__$thing = 'lazy dog';
        }
        return this.__$thing;
    }
    static set thing(__$value : any)  { 
        this.__$thing = __$value;
    }

    private static __$phrase;
    static get phrase() { 
        if (this.__$phrase===undefined) {
            this.__$phrase = `The quick ${properties.color} fox\njumped over the ${properties.thing}.\n`;
        }
        return this.__$phrase;
    }
    static set phrase(__$value : any)  { 
        this.__$phrase = __$value;
    }

    private static __$adjacent;
    static get adjacent() { 
        if (this.__$adjacent===undefined) {
            this.__$adjacent = `${properties.color}${properties.color}${properties.color}`;
        }
        return this.__$adjacent;
    }
    static set adjacent(__$value : any)  { 
        this.__$adjacent = __$value;
    }

    private static __$linebreaks;
    static get linebreaks() { 
        if (this.__$linebreaks===undefined) {
            this.__$linebreaks = `${properties.color}\n${properties.color}\n${properties.color}`;
        }
        return this.__$linebreaks;
    }
    static set linebreaks(__$value : any)  { 
        this.__$linebreaks = __$value;
    }

    private static __$other;
    static get other() { 
        if (this.__$other===undefined) {
            this.__$other = `${properties.color}\n is \n${properties.color}`;
        }
        return this.__$other;
    }
    static set other(__$value : any)  { 
        this.__$other = __$value;
    }

}
