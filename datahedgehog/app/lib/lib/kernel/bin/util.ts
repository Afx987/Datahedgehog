/** Library asset:datahedgehog_monitor/lib/lib/kernel/bin/util.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as io from "@dart2ts/dart/io";

export var parseProgramRoots : (embedderEntryPointManifests : core.DartList<string>) => core.DartList<any> = (embedderEntryPointManifests : core.DartList<string>) : core.DartList<any> =>  {
    let roots : core.DartList<any> = new core.DartList.literal<any>();
    for(let file of embedderEntryPointManifests) {
        let lines = new core.DartString(new core.DartString(new io.File(file).readAsStringSync()).trim()).split('\n');
        for(let line of lines) {
            let parts = new core.DartString(line).split(',');
            /* TODO (AssertStatementImpl) : assert (parts.length == 3); */;
            let library = parts[0];
            let klass = parts[1];
            let member = parts[2];
            if (klass == '::') klass = null;
            let kind : any = ProgramRootKind.Other;
            if (new core.DartString(member).startsWith('set:')) {
                kind = ProgramRootKind.Setter;
                member = new core.DartString(member).substring(new core.DartString('set:').length);
            }else if (new core.DartString(member).startsWith('get:')) {
                kind = ProgramRootKind.Getter;
                member = new core.DartString(member).substring(new core.DartString('get:').length);
            }else if (member == "*external-instantiation*") {
                kind = ProgramRootKind.ExternallyInstantiatedClass;
                member = null;
            }else if (new core.DartString(member).startsWith(`${klass}.`)) {
                kind = ProgramRootKind.Constructor;
                member = new core.DartString(member).substring(new core.DartString(`${klass}.`).length);
            }
            roots.add(new bare.createInstance(any,null,library,klass,member,kind));
        }
    }
    return roots;
};
export class properties {
}
