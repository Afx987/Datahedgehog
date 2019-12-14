/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/integration/execution/map_uri_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../support/integration_tests";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(MapUriTest);
    });
};
export namespace MapUriTest {
    export type Constructors = lib3.AbstractAnalysisServerIntegrationTest.Constructors | 'MapUriTest';
    export type Interface = Omit<MapUriTest, Constructors>;
}
@DartClass
export class MapUriTest extends lib3.AbstractAnalysisServerIntegrationTest {
    test_mapUri() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let pathname : string = this.sourcePath('lib/main.dart');
            this.writeFile(pathname,'// dummy');
            this.writeFile(this.sourcePath('.packages'),'foo:lib/');
            this.standardAnalysisSetup();
            let contextId : string = ((t)=>(!!t)?t.id:null)((await this.sendExecutionCreateContext(this.sourceDirectory.path)));
            {
                let result : any = await this.sendExecutionMapUri(contextId,{
                    uri : 'package:foo/main.dart'});
                expect(result.file,pathname);
            }
            {
                let result : any = await this.sendExecutionMapUri(contextId,{
                    file : pathname});
                expect(result.uri,'package:foo/main.dart');
            }
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    MapUriTest() {
    }
}

export class properties {
}
