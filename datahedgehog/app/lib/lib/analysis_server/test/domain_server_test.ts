/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/domain_server_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./mocks";

export var main : () => any = () =>  {
    let server : any;
    let handler : any;
    setUp(() =>  {
        let serverChannel = new lib3.MockServerChannel();
        let resourceProvider = new bare.createInstance(any,null);
        let manager : any = new bare.createInstance(any,null);
        let serverPlugin : any = new bare.createInstance(any,null);
        manager.processPlugins(new core.DartList.literal(serverPlugin));
        server = new bare.createInstance(any,null,serverChannel,resourceProvider,new lib3.MockPackageMapProvider(),null,serverPlugin,new bare.createInstance(any,null),new bare.createInstance(any,null,'',false),InstrumentationService.NULL_SERVICE);
        handler = new bare.createInstance(any,null,server);
    });
    group('ServerDomainHandler',() =>  {
        test('getVersion',() =>  {
            let request = new bare.createInstance(any,null).toRequest('0');
            let response = handler.handleRequest(request);
            expect(response.toJson(),equals(new core.DartMap.literal([
                [Response.ID,'0'],
                [Response.RESULT,new core.DartMap.literal([
                    [VERSION,AnalysisServer.VERSION]])]])));
        });
        group('setSubscriptions',() =>  {
            test('invalid service name',() =>  {
                let request : any = new bare.createInstance(any,null,'0',SERVER_SET_SUBSCRIPTIONS,new core.DartMap.literal([
                    [SUBSCRIPTIONS,new core.DartList.literal('noSuchService')]]));
                let response = handler.handleRequest(request);
                expect(response,lib3.isResponseFailure('0'));
            });
            test('success',() =>  {
                expect(server.serverServices,isEmpty);
                let request : any = new bare.createInstance(any,null,new core.DartList.literal(ServerService.STATUS)).toRequest('0');
                let response = handler.handleRequest(request);
                expect(response,lib3.isResponseSuccess('0'));
                expect(server.serverServices,contains(ServerService.STATUS));
            });
        });
        test('shutdown',() =>  {
            expect(server.running,isTrue);
            let request = new bare.createInstance(any,null).toRequest('0');
            let response = handler.handleRequest(request);
            expect(response,lib3.isResponseSuccess('0'));
            expect(server.running,isFalse);
        });
    });
};
export class properties {
}
