/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/tool/spec/generate_all.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as io from "@dart2ts/dart/io";
import * as lib4 from "@dart2ts.packages/path/lib/path";
import * as lib5 from "./codegen_analysis_server";
import * as lib6 from "./codegen_dart_protocol";
import * as lib7 from "./codegen_java_types";
import * as lib8 from "./codegen_inttest_methods";
import * as lib9 from "./codegen_matchers";
import * as lib10 from "./to_html";

export var main : () => any = () =>  {
    let script : string = io.Platform.script.toFilePath({
        windows : io.Platform.isWindows});
    let pkgPath : string = lib4.normalize(lib4.join(lib4.dirname(script),'..','..'));
    GeneratedContent.generateAll(pkgPath,properties.allTargets);
};
export class properties {
    static get allTargets() : core.DartList<any> {
        let targets : core.DartList<any> = new core.DartList.literal<any>();
        targets.add(lib5.properties.target);
        targets.add(lib6.target(false));
        targets.add(lib7.properties.targetDir);
        targets.add(lib8.properties.target);
        targets.add(lib9.properties.target);
        targets.add(lib10.properties.target);
        return targets;
    }
}
