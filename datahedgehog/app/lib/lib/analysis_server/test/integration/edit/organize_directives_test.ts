/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/integration/edit/organize_directives_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../support/integration_tests";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(OrganizeDirectivesTest);
    });
};
export namespace OrganizeDirectivesTest {
    export type Constructors = lib3.AbstractAnalysisServerIntegrationTest.Constructors | 'OrganizeDirectivesTest';
    export type Interface = Omit<OrganizeDirectivesTest, Constructors>;
}
@DartClass
export class OrganizeDirectivesTest extends lib3.AbstractAnalysisServerIntegrationTest {
    test_organize_directives() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let pathname : string = this.sourcePath('test.dart');
            let text : string = 'import \'dart:math\';\nimport \'dart:async\';\n\nFuture foo;\nint minified(int x, int y) => min(x, y);\n';
            this.writeFile(pathname,text);
            this.standardAnalysisSetup();
            let result : any = await this.sendEditOrganizeDirectives(pathname);
            let edit : any = result.edit;
            expect(edit.edits,hasLength(1));
            expect(edit.edits.first.replacement,"import 'dart:async';\nimport 'dart:math");
        } )());
    }

    test_organize_directives_no_changes() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let pathname : string = this.sourcePath('test.dart');
            let text : string = 'import \'dart:async\';\nimport \'dart:math\';\n\nFuture foo;\nint minified(int x, int y) => min(x, y);\n';
            this.writeFile(pathname,text);
            this.standardAnalysisSetup();
            let result : any = await this.sendEditOrganizeDirectives(pathname);
            let edit : any = result.edit;
            expect(edit.edits,isEmpty);
        } )());
    }

    test_organize_directives_with_errors() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let pathname : string = this.sourcePath('test.dart');
            let text : string = 'import \'dart:async\'\nimport \'dart:math\';\n\nFuture foo;\nint minified(int x, int y) => min(x, y);\n';
            this.writeFile(pathname,text);
            this.standardAnalysisSetup();
            try {
                await this.sendEditOrganizeDirectives(pathname);
            } catch (__error__) {

                if (is(__error__,lib3.ServerErrorMessage)){
                    let message : lib3.ServerErrorMessage = __error__;
                    expect(op(Op.INDEX,message.error,'code'),'ORGANIZE_DIRECTIVES_ERROR');
                }
            }
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    OrganizeDirectivesTest() {
    }
}

export class properties {
}
