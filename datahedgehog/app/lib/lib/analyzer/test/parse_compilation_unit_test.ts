/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/parse_compilation_unit_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => void = () : void =>  {
    test("parses a valid compilation unit successfully",() =>  {
        let unit = parseCompilationUnit("void main() => print('Hello, world!');");
        expect(unit.toString(),equals("void main() => print('Hello, world!');"));
    });
    test("throws errors for an invalid compilation unit",() =>  {
        expect(() =>  {
            parseCompilationUnit("void main() => print('Hello, world!')",{
                name : 'test.dart'});
        },throwsA(predicate((error : any) =>  {
            return is(error, any) && new core.DartString(error.toString()).contains("Error in test.dart: Expected to find ';'");
        })));
    });
    test("defaults to '<unknown source>' if no name is provided",() =>  {
        expect(() =>  {
            parseCompilationUnit("void main() => print('Hello, world!')");
        },throwsA(predicate((error : any) =>  {
            return is(error, any) && new core.DartString(error.toString()).contains("Error in <unknown source>: Expected to find ';'");
        })));
    });
    test("allows you to specify whether or not to parse function bodies",() =>  {
        let unit = parseCompilationUnit("void main() => print('Hello, world!');",{
            parseFunctionBodies : false});
        expect(unit.toString(),equals("void main();"));
    });
};
export class properties {
}
