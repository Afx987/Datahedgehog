/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/dart/analysis/defined_names.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var computeDefinedNames : (unit : any) => DefinedNames = (unit : any) : DefinedNames =>  {
    let names : DefinedNames = new DefinedNames();
    var appendName : (names : core.DartSet<string>,node : any) => void = (names : core.DartSet<string>,node : any) : void =>  {
        let name : string = ((t)=>(!!t)?t.name:null)(node);
        if (name != null && new core.DartString(name).length != 0) {
            names.add(name);
        }
    };
    var appendClassMemberName : (member : any) => void = (member : any) : void =>  {
        if (is(member, any)) {
            appendName(names.classMemberNames,member.name);
        }else if (is(member, any)) {
            for(let field of member.fields.variables) {
                appendName(names.classMemberNames,field.name);
            }
        }
    };
    var appendTopLevelName : (member : any) => void = (member : any) : void =>  {
        if (is(member, any)) {
            appendName(names.topLevelNames,member.name);
            if (is(member, any)) {
                member.members.forEach(appendClassMemberName);
            }
        }else if (is(member, any)) {
            for(let variable of member.variables.variables) {
                appendName(names.topLevelNames,variable.name);
            }
        }
    };
    unit.declarations.forEach(appendTopLevelName);
    return names;
};
export namespace DefinedNames {
    export type Constructors = 'DefinedNames';
    export type Interface = Omit<DefinedNames, Constructors>;
}
@DartClass
export class DefinedNames {
    topLevelNames : core.DartSet<string>;

    classMemberNames : core.DartSet<string>;

    constructor() {
    }
    @defaultConstructor
    DefinedNames() {
        this.topLevelNames = new core.DartSet<string>();
        this.classMemberNames = new core.DartSet<string>();
    }
}

export class properties {
}
