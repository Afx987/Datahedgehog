/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/integration/diagnostic/get_server_port_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../support/integration_tests";
import * as io from "@dart2ts/dart/io";
import * as lib5 from "@dart2ts/dart/uri";
import * as convert from "@dart2ts/dart/convert";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(GetServerPortTest);
    });
};
export namespace GetServerPortTest {
    export type Constructors = lib3.AbstractAnalysisServerIntegrationTest.Constructors | 'GetServerPortTest';
    export type Interface = Omit<GetServerPortTest, Constructors>;
}
@DartClass
export class GetServerPortTest extends lib3.AbstractAnalysisServerIntegrationTest {
    test_connect() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.standardAnalysisSetup();
            let result : any = await this.sendDiagnosticGetServerPort();
            expect(result.port,isNotNull);
            expect(result.port,isNonZero);
            let client : io.HttpClient = new io.HttpClient();
            let request : io.HttpClientRequest = await client.getUrl(lib5.Uri.parse(`http://localhost:${result.port}/status`));
            let response : io.HttpClientResponse = await request.close();
            let responseBody : string = await convert.properties.UTF8.decodeStream(response);
            expect(responseBody,contains('<title>Analysis Server</title>'));
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    GetServerPortTest() {
    }
}

export class properties {
}
