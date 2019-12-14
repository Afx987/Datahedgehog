/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/fasta/modifier.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./errors";

export enum ModifierEnum {
    Abstract,
    Const,
    Covariant,
    External,
    Final,
    Static,
    Var
}

export namespace Modifier {
    export type Constructors = 'Modifier';
    export type Interface = Omit<Modifier, Constructors>;
}
@DartClass
export class Modifier {
    kind : ModifierEnum;

    mask : number;

    constructor(kind : ModifierEnum,mask : number) {
    }
    @defaultConstructor
    Modifier(kind : ModifierEnum,mask : number) {
        this.kind = kind;
        this.mask = mask;
    }
    @namedFactory
    static $fromString(string : string) : Modifier {
        if (core.identical('abstract',string)) return properties.Abstract;
        if (core.identical('const',string)) return properties.Const;
        if (core.identical('covariant',string)) return properties.Covariant;
        if (core.identical('external',string)) return properties.External;
        if (core.identical('final',string)) return properties.Final;
        if (core.identical('static',string)) return properties.Static;
        if (core.identical('var',string)) return properties.Var;
        return lib3.internalError(`Unhandled modifier: ${string}`);
    }
    static fromString : new(string : string) => Modifier;

    toString() {
        return `modifier(${new core.DartString(`${this.kind}`).substring(new core.DartString('ModifierEnum.').length)})`;
    }
    static validate(modifiers : core.DartList<Modifier>,_namedArguments? : {isAbstract? : boolean}) : number {
        let {isAbstract} = Object.assign({
            "isAbstract" : false}, _namedArguments );
        let result : number = isAbstract ? properties.abstractMask : 0;
        if (modifiers == null) return result;
        for(let modifier of modifiers) {
            result |= modifier.mask;
        }
        return result;
    }
}

export class properties {
    private static __$abstractMask : number;
    static get abstractMask() : number { 
        if (this.__$abstractMask===undefined) {
            this.__$abstractMask = 1;
        }
        return this.__$abstractMask;
    }
    static set abstractMask(__$value : number)  { 
        this.__$abstractMask = __$value;
    }

    private static __$constMask : number;
    static get constMask() : number { 
        if (this.__$constMask===undefined) {
            this.__$constMask = properties.abstractMask << 1;
        }
        return this.__$constMask;
    }
    static set constMask(__$value : number)  { 
        this.__$constMask = __$value;
    }

    private static __$covariantMask : number;
    static get covariantMask() : number { 
        if (this.__$covariantMask===undefined) {
            this.__$covariantMask = properties.constMask << 1;
        }
        return this.__$covariantMask;
    }
    static set covariantMask(__$value : number)  { 
        this.__$covariantMask = __$value;
    }

    private static __$externalMask : number;
    static get externalMask() : number { 
        if (this.__$externalMask===undefined) {
            this.__$externalMask = properties.covariantMask << 1;
        }
        return this.__$externalMask;
    }
    static set externalMask(__$value : number)  { 
        this.__$externalMask = __$value;
    }

    private static __$finalMask : number;
    static get finalMask() : number { 
        if (this.__$finalMask===undefined) {
            this.__$finalMask = properties.externalMask << 1;
        }
        return this.__$finalMask;
    }
    static set finalMask(__$value : number)  { 
        this.__$finalMask = __$value;
    }

    private static __$staticMask : number;
    static get staticMask() : number { 
        if (this.__$staticMask===undefined) {
            this.__$staticMask = properties.finalMask << 1;
        }
        return this.__$staticMask;
    }
    static set staticMask(__$value : number)  { 
        this.__$staticMask = __$value;
    }

    private static __$namedMixinApplicationMask : number;
    static get namedMixinApplicationMask() : number { 
        if (this.__$namedMixinApplicationMask===undefined) {
            this.__$namedMixinApplicationMask = properties.staticMask << 1;
        }
        return this.__$namedMixinApplicationMask;
    }
    static set namedMixinApplicationMask(__$value : number)  { 
        this.__$namedMixinApplicationMask = __$value;
    }

    private static __$varMask : number;
    static get varMask() : number { 
        if (this.__$varMask===undefined) {
            this.__$varMask = 0;
        }
        return this.__$varMask;
    }
    static set varMask(__$value : number)  { 
        this.__$varMask = __$value;
    }

    private static __$Abstract : Modifier;
    static get Abstract() : Modifier { 
        if (this.__$Abstract===undefined) {
            this.__$Abstract = new Modifier(ModifierEnum.Abstract,properties.abstractMask);
        }
        return this.__$Abstract;
    }
    static set Abstract(__$value : Modifier)  { 
        this.__$Abstract = __$value;
    }

    private static __$Const : Modifier;
    static get Const() : Modifier { 
        if (this.__$Const===undefined) {
            this.__$Const = new Modifier(ModifierEnum.Const,properties.constMask);
        }
        return this.__$Const;
    }
    static set Const(__$value : Modifier)  { 
        this.__$Const = __$value;
    }

    private static __$Covariant : Modifier;
    static get Covariant() : Modifier { 
        if (this.__$Covariant===undefined) {
            this.__$Covariant = new Modifier(ModifierEnum.Covariant,properties.covariantMask);
        }
        return this.__$Covariant;
    }
    static set Covariant(__$value : Modifier)  { 
        this.__$Covariant = __$value;
    }

    private static __$External : Modifier;
    static get External() : Modifier { 
        if (this.__$External===undefined) {
            this.__$External = new Modifier(ModifierEnum.External,properties.externalMask);
        }
        return this.__$External;
    }
    static set External(__$value : Modifier)  { 
        this.__$External = __$value;
    }

    private static __$Final : Modifier;
    static get Final() : Modifier { 
        if (this.__$Final===undefined) {
            this.__$Final = new Modifier(ModifierEnum.Final,properties.finalMask);
        }
        return this.__$Final;
    }
    static set Final(__$value : Modifier)  { 
        this.__$Final = __$value;
    }

    private static __$Static : Modifier;
    static get Static() : Modifier { 
        if (this.__$Static===undefined) {
            this.__$Static = new Modifier(ModifierEnum.Static,properties.staticMask);
        }
        return this.__$Static;
    }
    static set Static(__$value : Modifier)  { 
        this.__$Static = __$value;
    }

    private static __$Var : Modifier;
    static get Var() : Modifier { 
        if (this.__$Var===undefined) {
            this.__$Var = new Modifier(ModifierEnum.Var,properties.varMask);
        }
        return this.__$Var;
    }
    static set Var(__$value : Modifier)  { 
        this.__$Var = __$value;
    }

}
