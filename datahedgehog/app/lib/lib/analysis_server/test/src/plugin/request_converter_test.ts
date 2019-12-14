/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/src/plugin/request_converter_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./protocol_test_utilities";
import * as lib4 from "@dart2ts.packages/analyzer_plugin/lib/protocol/protocol_generated";
import * as lib5 from "@dart2ts.packages/analysis_server/lib/protocol/protocol_generated";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(RequestConverterTest);
    });
};
export namespace RequestConverterTest {
    export type Constructors = lib3.ProtocolTestUtilities.Constructors | 'RequestConverterTest';
    export type Interface = Omit<RequestConverterTest, Constructors>;
}
@DartClass
export class RequestConverterTest extends lib3.ProtocolTestUtilities {
    converter : any;

    test_convertAnalysisService() : void {
        let kindMap : core.DartMap<any,any> = new core.DartMap.literal([
            [lib4.AnalysisService.FOLDING,lib5.AnalysisService.FOLDING],
            [lib4.AnalysisService.HIGHLIGHTS,lib5.AnalysisService.HIGHLIGHTS],
            [lib4.AnalysisService.NAVIGATION,lib5.AnalysisService.NAVIGATION],
            [lib4.AnalysisService.OCCURRENCES,lib5.AnalysisService.OCCURRENCES],
            [lib4.AnalysisService.OUTLINE,lib5.AnalysisService.OUTLINE]]);
        kindMap.forEach((pluginKind : any,serverKind : any) =>  {
            expect(this.converter.convertAnalysisService(serverKind),pluginKind);
        });
    }
    test_convertAnalysisSetPriorityFilesParams() : void {
        let files : core.DartList<string> = new core.DartList.literal<string>('a','b','c');
        let result : any = this.converter.convertAnalysisSetPriorityFilesParams(new bare.createInstance(any,null,files));
        expect(result,isNotNull);
        expect(result.files,files);
    }
    test_convertAnalysisSetSubscriptionsParams() : void {
        let serverSubscriptions : core.DartMap<any,core.DartList<string>> = new core.DartMap.literal([
            [lib5.AnalysisService.HIGHLIGHTS,new core.DartList.literal<string>('a','b')],
            [lib5.AnalysisService.OUTLINE,new core.DartList.literal<string>('c')],
            [lib5.AnalysisService.OVERRIDES,new core.DartList.literal<string>('d','e')]]);
        let result : any = this.converter.convertAnalysisSetSubscriptionsParams(new bare.createInstance(any,null,serverSubscriptions));
        expect(result,isNotNull);
        let pluginSubscriptions : core.DartMap<any,core.DartList<string>> = result.subscriptions;
        expect(pluginSubscriptions,hasLength(2));
        expect(pluginSubscriptions.get(lib4.AnalysisService.HIGHLIGHTS),hasLength(2));
        expect(pluginSubscriptions.get(lib4.AnalysisService.OUTLINE),hasLength(1));
    }
    test_convertAnalysisUpdateContentParams() : void {
        let serverFiles : core.DartMap<string,any> = new core.DartMap.literal([
            ['file1',new bare.createInstance(any,null,'content1')],
            ['file2',new bare.createInstance(any,null,'content2')]]);
        let result : any = this.converter.convertAnalysisUpdateContentParams(new bare.createInstance(any,null,serverFiles));
        expect(result,isNotNull);
        let pluginFiles : core.DartMap<string,any> = result.files;
        expect(pluginFiles,hasLength(2));
        expect(pluginFiles.get('file1'),new bare.createInstance(any,null));
        expect(pluginFiles.get('file2'),new bare.createInstance(any,null));
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RequestConverterTest() {
        this.converter = new bare.createInstance(any,null);
    }
}

export class properties {
}
