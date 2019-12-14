/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/integration/analysis/update_content_list_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../support/integration_tests";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(UpdateContentTest);
    });
};
export namespace UpdateContentTest {
    export type Constructors = lib3.AbstractAnalysisServerIntegrationTest.Constructors | 'UpdateContentTest';
    export type Interface = Omit<UpdateContentTest, Constructors>;
}
@DartClass
export class UpdateContentTest extends lib3.AbstractAnalysisServerIntegrationTest {
    test_updateContent_list() {
        let pathname : string = this.sourcePath('test.dart');
        let goodText : string = 'main() {\n  print("Hello");\n  print("World!");\n}';
        let badText : string = new core.DartString(goodText).replaceAll('"','');
        this.writeFile(pathname,'// dummy text');
        this.standardAnalysisSetup();
        this.sendAnalysisUpdateContent(new core.DartMap.literal([
            [pathname,new bare.createInstance(any,null,badText)]]));
        return this.analysisFinished.then((_ : any) =>  {
            expect(op(Op.INDEX,this.currentAnalysisErrors,pathname),isNotEmpty);
        }).then((_ : any) =>  {
            let edits : core.DartList<any> = new core.DartString('"').allMatches(goodText).map((match : core.DartMatch) =>  {
                return new bare.createInstance(any,null,match.start,0,'"');
            }).toList();
            this.sendAnalysisUpdateContent(new core.DartMap.literal([
                [pathname,new bare.createInstance(any,null,edits)]]));
            return this.analysisFinished;
        }).then((_ : any) =>  {
            expect(op(Op.INDEX,this.currentAnalysisErrors,pathname),isEmpty);
        });
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    UpdateContentTest() {
    }
}

export class properties {
}
