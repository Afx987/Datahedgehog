/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/integration/analysis/get_navigation_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../support/integration_tests";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(GetNavigationTest);
    });
};
export namespace GetNavigationTest {
    export type Constructors = lib3.AbstractAnalysisServerIntegrationTest.Constructors | 'GetNavigationTest';
    export type Interface = Omit<GetNavigationTest, Constructors>;
}
@DartClass
export class GetNavigationTest extends lib3.AbstractAnalysisServerIntegrationTest {
    test_navigation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let pathname : string = this.sourcePath('test.dart');
            let text : string = 'class Foo {}\n\nclass Bar {\n  Foo foo;\n}\n';
            this.writeFile(pathname,text);
            this.standardAnalysisSetup();
            await this.analysisFinished;
            let result : any = await this.sendAnalysisGetNavigation(pathname,new core.DartString(text).indexOf('Foo foo'),0);
            expect(result.targets,hasLength(1));
            let target : any = result.targets.first;
            expect(target.kind,ElementKind.CLASS);
            expect(target.offset,new core.DartString(text).indexOf('Foo {}'));
            expect(target.length,3);
            expect(target.startLine,1);
            expect(target.startColumn,7);
        } )());
    }

    test_navigation_no_result() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let pathname : string = this.sourcePath('test.dart');
            let text : string = '//\n\nclass Foo {}\n\nclass Bar {\n  Foo foo;\n}\n';
            this.writeFile(pathname,text);
            this.standardAnalysisSetup();
            await this.analysisFinished;
            let result : any = await this.sendAnalysisGetNavigation(pathname,0,0);
            expect(result.targets,isEmpty);
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    GetNavigationTest() {
    }
}

export class properties {
}
