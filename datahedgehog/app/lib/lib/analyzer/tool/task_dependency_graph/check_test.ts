/** Library asset:datahedgehog_monitor/lib/lib/analyzer/tool/task_dependency_graph/check_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as io from "@dart2ts/dart/io";
import * as lib4 from "@dart2ts.packages/path/lib/path";
import * as lib5 from "./generate";

export var main : () => any = () =>  {
    let script : string = io.Platform.script.toFilePath({
        windows : io.Platform.isWindows});
    let pkgPath : string = lib4.normalize(lib4.join(lib4.dirname(script),'..','..'));
    GeneratedContent.checkAll(pkgPath,'tool/task_dependency_graph/generate.dart',new core.DartList.literal<any>(lib5.properties.target));
};
export class properties {
}
