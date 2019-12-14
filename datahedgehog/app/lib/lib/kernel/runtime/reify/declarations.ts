/** Library asset:datahedgehog_monitor/lib/lib/kernel/runtime/reify/declarations.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./types";

export var allocateDeclarations : (names : core.DartList<string>,typeParameters : core.DartList<number>) => core.DartList<Class> = (names : core.DartList<string>,typeParameters : core.DartList<number>) : core.DartList<Class> =>  {
    var allocateVariables : (amount : number) => core.DartList<lib3.TypeVariable> = (amount : number) : core.DartList<lib3.TypeVariable> =>  {
        if (amount == 0) return new core.DartList.literal<lib3.TypeVariable>();
        return new core.DartList.generate(amount,(i : number) =>  {
            return new lib3.TypeVariable(i);
        },{
            growable : false});
    };
    return new core.DartList.generate(names.length,(i : number) =>  {
        return new Class(names[i],null,{
            variables : allocateVariables(typeParameters[i])});
    },{
        growable : false});
};
export var init : (classes : core.DartList<Class>,index : number,supertype : lib3.ReifiedType,interfaces? : core.DartList<lib3.Interface>,callableType? : lib3.FunctionType) => void = (classes : core.DartList<Class>,index : number,supertype : lib3.ReifiedType,interfaces? : core.DartList<lib3.Interface>,callableType? : lib3.FunctionType) : void =>  {
    interfaces = interfaces || new core.DartList.literal<lib3.Interface>();
    let declaration : Class = classes[index];
    /* TODO (AssertStatementImpl) : assert (supertype == null); */;
    declaration.supertype = supertype;
    /* TODO (AssertStatementImpl) : assert (interfaces == null); */;
    declaration.interfaces = interfaces;
    declaration.callableType = callableType;
};
export namespace Class {
    export type Constructors = 'Class';
    export type Interface = Omit<Class, Constructors>;
}
@DartClass
export class Class {
    id;

    supertype : lib3.Interface;

    callableType : lib3.FunctionType;

    variables : core.DartList<lib3.TypeVariable>;

    interfaces : core.DartList<lib3.Interface>;

    private static __$debugId2String : (id : core.DartObject) => string;
    static get debugId2String() : (id : core.DartObject) => string { 
        return this.__$debugId2String;
    }
    static set debugId2String(__$value : (id : core.DartObject) => string)  { 
        this.__$debugId2String = __$value;
    }

    constructor(id : any,supertype : lib3.Interface,_namedArguments? : {callableType? : lib3.FunctionType,variables? : core.DartList<lib3.TypeVariable>,interfaces? : core.DartList<lib3.Interface>}) {
    }
    @defaultConstructor
    Class(id : any,supertype : lib3.Interface,_namedArguments? : {callableType? : lib3.FunctionType,variables? : core.DartList<lib3.TypeVariable>,interfaces? : core.DartList<lib3.Interface>}) {
        let {callableType,variables,interfaces} = Object.assign({
            "variables" : new core.DartList.literal<lib3.TypeVariable>()}, _namedArguments );
        this.id = id;
        this.supertype = supertype;
        this.callableType = callableType;
        this.variables = variables;
        this.interfaces = interfaces;
    }
    get thisType() : lib3.Interface {
        return new lib3.Interface(this,this.variables);
    }
    get name() : string {
        return op(Op.EQUALS,Class.debugId2String,null) ? `${this.id}` : Class.debugId2String(this.id);
    }
    toString() : string {
        let sb : core.DartStringBuffer = new core.DartStringBuffer();
        sb.write(`class ${this.name}`);
        if (this.variables.isNotEmpty) {
            sb.write("<");
            let first : boolean = true;
            for(let tv of this.variables) {
                if (!first) {
                    sb.write(", ");
                }
                sb.write(tv);
                sb.write(" extends ");
                sb.write(tv.bound);
            }
            sb.write(">");
        }
        if (this.supertype != null) {
            sb.write(` extends ${this.supertype}`);
        }
        if (this.interfaces.isNotEmpty) {
            sb.write(" implements ");
            sb.writeAll(this.interfaces,", ");
        }
        return `${sb}`;
    }
}

export class properties {
}
