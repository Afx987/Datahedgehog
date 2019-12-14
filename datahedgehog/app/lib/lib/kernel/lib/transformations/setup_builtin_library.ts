/** Library asset:datahedgehog_monitor/lib/lib/kernel/lib/transformations/setup_builtin_library.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../ast";

export var transformProgram : (program : lib3.Program,_namedArguments? : {libraryUri? : string}) => lib3.Program = (program : lib3.Program,_namedArguments? : {libraryUri? : string}) : lib3.Program =>  {
    let {libraryUri} = Object.assign({
        "libraryUri" : 'dart:_builtin'}, _namedArguments );
    let mainMethod : lib3.Procedure = program.mainMethod;
    let builtinLibrary : lib3.Library;
    for(let library of program.libraries) {
        if (library.importUri.toString() == libraryUri) {
            builtinLibrary = library;
            break;
        }
    }
    if (op(Op.EQUALS,builtinLibrary,null)) {
        throw new core.Exception('Could not find "dart:_builtin" library');
    }
    let getMainClosure : lib3.FunctionNode;
    for(let procedure of builtinLibrary.procedures) {
        if (procedure.name.name == '_getMainClosure') {
            getMainClosure = procedure.function;
            break;
        }
    }
    if (op(Op.EQUALS,getMainClosure,null)) {
        throw new core.Exception(`Could not find "_getMainClosure" in "${libraryUri}"`);
    }
    if (mainMethod != null) {
        let returnMainStatement = new lib3.ReturnStatement(new lib3.StaticGet(mainMethod));
        getMainClosure.body = returnMainStatement;
        returnMainStatement.parent = getMainClosure;
    }else {
        getMainClosure.body = null;
    }
    return program;
};
export class properties {
}
