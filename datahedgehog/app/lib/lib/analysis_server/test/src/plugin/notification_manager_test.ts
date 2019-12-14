/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/src/plugin/notification_manager_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./protocol_test_utilities";
import * as lib4 from "@dart2ts.packages/analysis_server/lib/protocol/protocol";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(NotificationManagerTest);
    });
};
export namespace NotificationManagerTest {
    export type Constructors = lib3.ProtocolTestUtilities.Constructors | 'NotificationManagerTest';
    export type Interface = Omit<NotificationManagerTest, Constructors>;
}
@DartClass
export class NotificationManagerTest extends lib3.ProtocolTestUtilities {
    testDir : string;

    fileA : string;

    fileB : string;

    channel : TestChannel;

    manager : any;

    setUp() : void {
        let provider : any = new bare.createInstance(any,null);
        this.testDir = provider.convertPath('/test');
        this.fileA = provider.convertPath('/test/a.dart');
        this.fileB = provider.convertPath('/test/b.dart');
        this.channel = new TestChannel();
        this.manager = new bare.createInstance(any,null,this.channel,provider);
    }
    test_handlePluginNotification_errors() : void {
        this.manager.setAnalysisRoots(new core.DartList.literal(this.testDir),new core.DartList.literal());
        let error1 : any = this.analysisError(0,0,{
            file : this.fileA});
        let error2 : any = this.analysisError(3,4,{
            file : this.fileA});
        let params : any = new bare.createInstance(any,null,this.fileA,new core.DartList.literal(error1,error2));
        this.manager.handlePluginNotification('a',params.toNotification());
        this._verifyErrors(this.fileA,new core.DartList.literal(error1,error2));
    }
    test_handlePluginNotification_folding() : void {
        this.manager.setSubscriptions(new core.DartMap.literal([
            [lib4.AnalysisService.FOLDING,new core.DartSet.from(new core.DartList.literal(this.fileA,this.fileB))]]));
        let region1 : any = this.foldingRegion(10,3);
        let region2 : any = this.foldingRegion(20,6);
        let params : any = new bare.createInstance(any,null,this.fileA,new core.DartList.literal(region1,region2));
        this.manager.handlePluginNotification('a',params.toNotification());
        this._verifyFoldingRegions(this.fileA,new core.DartList.literal(region1,region2));
    }
    test_handlePluginNotification_highlights() : void {
        this.manager.setSubscriptions(new core.DartMap.literal([
            [lib4.AnalysisService.HIGHLIGHTS,new core.DartSet.from(new core.DartList.literal(this.fileA,this.fileB))]]));
        let region1 : any = this.highlightRegion(10,3);
        let region2 : any = this.highlightRegion(20,6);
        let params : any = new bare.createInstance(any,null,this.fileA,new core.DartList.literal(region1,region2));
        this.manager.handlePluginNotification('a',params.toNotification());
        this._verifyHighlightRegions(this.fileA,new core.DartList.literal(region1,region2));
    }
    test_handlePluginNotification_naviation() : void {
        this.manager.setSubscriptions(new core.DartMap.literal([
            [lib4.AnalysisService.NAVIGATION,new core.DartSet.from(new core.DartList.literal(this.fileA,this.fileB))]]));
        let pluginParams : any = this.pluginNavigationParams(0,0,{
            file : this.fileA});
        this.manager.handlePluginNotification('a',pluginParams.toNotification());
        let serverParams : any = this.serverNavigationParams(0,0,{
            file : this.fileA});
        this._verifyNavigationParams(serverParams);
    }
    test_handlePluginNotification_occurences() : void {
        this.manager.setSubscriptions(new core.DartMap.literal([
            [lib4.AnalysisService.OCCURRENCES,new core.DartSet.from(new core.DartList.literal(this.fileA,this.fileB))]]));
        let occurrences1 : any = this.occurrences(0,0);
        let occurrences2 : any = this.occurrences(5,7);
        let params : any = new bare.createInstance(any,null,this.fileA,new core.DartList.literal(occurrences1,occurrences2));
        this.manager.handlePluginNotification('a',params.toNotification());
        this._verifyOccurrences(this.fileA,new core.DartList.literal(occurrences1,occurrences2));
    }
    test_handlePluginNotification_outline() : void {
        this.manager.setSubscriptions(new core.DartMap.literal([
            [lib4.AnalysisService.OUTLINE,new core.DartSet.from(new core.DartList.literal(this.fileA,this.fileB))]]));
        let outline1 : any = this.outline(0,0);
        let params : any = new bare.createInstance(any,null,this.fileA,new core.DartList.literal(outline1));
        this.manager.handlePluginNotification('a',params.toNotification());
        this._verifyOutlines(this.fileA,outline1);
    }
    test_handlePluginNotification_pluginError() : void {
        let isFatal : boolean = false;
        let message : string = 'message';
        let stackTrace : string = 'stackTrace';
        let params : any = new bare.createInstance(any,null,isFatal,message,stackTrace);
        this.manager.handlePluginNotification('a',params.toNotification());
        this._verifyPluginError(isFatal,message,stackTrace);
    }
    test_recordAnalysisErrors_noSubscription() : void {
        let error : any = this.analysisError(0,0,{
            file : this.fileA});
        this.manager.recordAnalysisErrors('a',this.fileA,new core.DartList.literal(error));
        expect(this.channel.sentNotification,isNull);
    }
    test_recordAnalysisErrors_withSubscription() : void {
        this.manager.setAnalysisRoots(new core.DartList.literal(this.testDir),new core.DartList.literal());
        let error1 : any = this.analysisError(0,0,{
            file : this.fileA});
        let error2 : any = this.analysisError(3,4,{
            file : this.fileA});
        this.manager.recordAnalysisErrors('a',this.fileA,new core.DartList.literal(error1,error2));
        this._verifyErrors(this.fileA,new core.DartList.literal(error1,error2));
        let error3 : any = this.analysisError(6,8,{
            file : this.fileA});
        this.manager.recordAnalysisErrors('b',this.fileA,new core.DartList.literal(error3));
        this._verifyErrors(this.fileA,new core.DartList.literal(error1,error2,error3));
        let error4 : any = this.analysisError(9,12,{
            file : this.fileA});
        this.manager.recordAnalysisErrors('a',this.fileA,new core.DartList.literal(error4));
        this._verifyErrors(this.fileA,new core.DartList.literal(error4,error3));
        let error5 : any = this.analysisError(12,16,{
            file : this.fileB});
        this.manager.recordAnalysisErrors('a',this.fileB,new core.DartList.literal(error5));
        this._verifyErrors(this.fileB,new core.DartList.literal(error5));
    }
    test_recordFoldingRegions_noSubscription() : void {
        let region : any = this.foldingRegion(10,5);
        this.manager.recordFoldingRegions('a',this.fileA,new core.DartList.literal(region));
        expect(this.channel.sentNotification,isNull);
    }
    test_recordFoldingRegions_withSubscription() : void {
        this.manager.setSubscriptions(new core.DartMap.literal([
            [lib4.AnalysisService.FOLDING,new core.DartSet.from(new core.DartList.literal(this.fileA,this.fileB))]]));
        let region1 : any = this.foldingRegion(10,3);
        let region2 : any = this.foldingRegion(20,6);
        this.manager.recordFoldingRegions('a',this.fileA,new core.DartList.literal(region1,region2));
        this._verifyFoldingRegions(this.fileA,new core.DartList.literal(region1,region2));
        let region3 : any = this.foldingRegion(30,5);
        this.manager.recordFoldingRegions('b',this.fileA,new core.DartList.literal(region3));
        this._verifyFoldingRegions(this.fileA,new core.DartList.literal(region1,region2,region3));
        let region4 : any = this.foldingRegion(40,2);
        this.manager.recordFoldingRegions('a',this.fileA,new core.DartList.literal(region4));
        this._verifyFoldingRegions(this.fileA,new core.DartList.literal(region4,region3));
        let region5 : any = this.foldingRegion(50,7);
        this.manager.recordFoldingRegions('a',this.fileB,new core.DartList.literal(region5));
        this._verifyFoldingRegions(this.fileB,new core.DartList.literal(region5));
    }
    test_recordHighlightRegions_noSubscription() : void {
        let region : any = this.highlightRegion(10,5);
        this.manager.recordHighlightRegions('a',this.fileA,new core.DartList.literal(region));
        expect(this.channel.sentNotification,isNull);
    }
    test_recordHighlightRegions_withSubscription() : void {
        this.manager.setSubscriptions(new core.DartMap.literal([
            [lib4.AnalysisService.HIGHLIGHTS,new core.DartSet.from(new core.DartList.literal(this.fileA,this.fileB))]]));
        let region1 : any = this.highlightRegion(10,3);
        let region2 : any = this.highlightRegion(20,6);
        this.manager.recordHighlightRegions('a',this.fileA,new core.DartList.literal(region1,region2));
        this._verifyHighlightRegions(this.fileA,new core.DartList.literal(region1,region2));
        let region3 : any = this.highlightRegion(30,5);
        this.manager.recordHighlightRegions('b',this.fileA,new core.DartList.literal(region3));
        this._verifyHighlightRegions(this.fileA,new core.DartList.literal(region1,region2,region3));
        let region4 : any = this.highlightRegion(40,2);
        this.manager.recordHighlightRegions('a',this.fileA,new core.DartList.literal(region4));
        this._verifyHighlightRegions(this.fileA,new core.DartList.literal(region4,region3));
        let region5 : any = this.highlightRegion(50,7);
        this.manager.recordHighlightRegions('a',this.fileB,new core.DartList.literal(region5));
        this._verifyHighlightRegions(this.fileB,new core.DartList.literal(region5));
    }
    test_recordNavigationParams_noSubscription() : void {
        let params : any = this.serverNavigationParams(0,0,{
            file : this.fileA});
        this.manager.recordNavigationParams('a',this.fileA,params);
        expect(this.channel.sentNotification,isNull);
    }
    test_recordNavigationParams_withSubscription() : void {
        this.manager.setSubscriptions(new core.DartMap.literal([
            [lib4.AnalysisService.NAVIGATION,new core.DartSet.from(new core.DartList.literal(this.fileA,this.fileB))]]));
        let params1 : any = this.serverNavigationParams(0,0,{
            file : this.fileA});
        this.manager.recordNavigationParams('a',this.fileA,params1);
        this._verifyNavigationParams(params1);
        let params2 : any = this.serverNavigationParams(2,4,{
            file : this.fileA});
        this.manager.recordNavigationParams('b',this.fileA,params2);
        let params1and2 : any = new bare.createInstance(any,null,this.fileA,new core.DartList.literal<any>(new bare.createInstance(any,null,0,2,new core.DartList.literal<number>(0)),new bare.createInstance(any,null,4,2,new core.DartList.literal<number>(1))),new core.DartList.literal<any>(new bare.createInstance(any,null,ElementKind.FIELD,0,1,2,2,3),new bare.createInstance(any,null,ElementKind.FIELD,2,5,2,6,7)),new core.DartList.literal<string>('aa','ab','ac','ad'));
        this._verifyNavigationParams(params1and2);
        let params3 : any = this.serverNavigationParams(4,8,{
            file : this.fileA});
        this.manager.recordNavigationParams('a',this.fileA,params3);
        let params3and2 : any = new bare.createInstance(any,null,this.fileA,new core.DartList.literal<any>(new bare.createInstance(any,null,8,2,new core.DartList.literal<number>(0)),new bare.createInstance(any,null,4,2,new core.DartList.literal<number>(1))),new core.DartList.literal<any>(new bare.createInstance(any,null,ElementKind.FIELD,0,9,2,10,11),new bare.createInstance(any,null,ElementKind.FIELD,2,5,2,6,7)),new core.DartList.literal<string>('ae','af','ac','ad'));
        this._verifyNavigationParams(params3and2);
        let params4 : any = this.serverNavigationParams(6,12,{
            file : this.fileB});
        this.manager.recordNavigationParams('a',this.fileB,params4);
        this._verifyNavigationParams(params4);
    }
    test_recordOccurrences_noSubscription() : void {
        let occurrences1 : any = this.occurrences(0,0);
        this.manager.recordOccurrences('a',this.fileA,new core.DartList.literal(occurrences1));
        expect(this.channel.sentNotification,isNull);
    }
    test_recordOccurrences_withSubscription() : void {
        this.manager.setSubscriptions(new core.DartMap.literal([
            [lib4.AnalysisService.OCCURRENCES,new core.DartSet.from(new core.DartList.literal(this.fileA,this.fileB))]]));
        let occurrences1 : any = this.occurrences(0,0);
        let occurrences2 : any = this.occurrences(5,7);
        this.manager.recordOccurrences('a',this.fileA,new core.DartList.literal(occurrences1,occurrences2));
        this._verifyOccurrences(this.fileA,new core.DartList.literal(occurrences1,occurrences2));
        let occurrences3 : any = this.occurrences(10,14);
        this.manager.recordOccurrences('b',this.fileA,new core.DartList.literal(occurrences3));
        this._verifyOccurrences(this.fileA,new core.DartList.literal(occurrences1,occurrences2,occurrences3));
        let occurrences4 : any = this.occurrences(15,21);
        this.manager.recordOccurrences('a',this.fileA,new core.DartList.literal(occurrences4));
        this._verifyOccurrences(this.fileA,new core.DartList.literal(occurrences4,occurrences3));
        let occurrences5 : any = this.occurrences(20,28);
        this.manager.recordOccurrences('a',this.fileB,new core.DartList.literal(occurrences5));
        this._verifyOccurrences(this.fileB,new core.DartList.literal(occurrences5));
    }
    test_recordOutlines_noSubscription() : void {
        let outline1 : any = this.outline(0,0);
        this.manager.recordOutlines('a',this.fileA,new core.DartList.literal(outline1));
        expect(this.channel.sentNotification,isNull);
    }
    test_recordOutlines_withSubscription() : void {
        fail('The outline handling needs to be re-worked slightly');
        this.manager.setSubscriptions(new core.DartMap.literal([
            [lib4.AnalysisService.OUTLINE,new core.DartSet.from(new core.DartList.literal(this.fileA,this.fileB))]]));
        let outline1 : any = this.outline(0,0);
        let outline2 : any = this.outline(5,7);
        this.manager.recordOutlines('a',this.fileA,new core.DartList.literal(outline1,outline2));
        let outline3 : any = this.outline(10,14);
        this.manager.recordOutlines('b',this.fileA,new core.DartList.literal(outline3));
        let outline4 : any = this.outline(15,21);
        this.manager.recordOutlines('a',this.fileA,new core.DartList.literal(outline4));
        let outline5 : any = this.outline(20,28);
        this.manager.recordOutlines('a',this.fileB,new core.DartList.literal(outline5));
    }
    _verifyErrors(fileName : string,expectedErrors : core.DartList<any>) : void {
        let notification : any = this.channel.sentNotification;
        expect(notification,isNotNull);
        expect(notification.event,'analysis.errors');
        let params : any = new bare.createInstance(any,"fromNotification",notification);
        expect(params,isNotNull);
        expect(params.file,fileName);
        expect(params.errors,equals(expectedErrors));
        this.channel.sentNotification = null;
    }
    _verifyFoldingRegions(fileName : string,expectedRegions : core.DartList<any>) : void {
        let notification : any = this.channel.sentNotification;
        expect(notification,isNotNull);
        expect(notification.event,'analysis.folding');
        let params : any = new bare.createInstance(any,"fromNotification",notification);
        expect(params,isNotNull);
        expect(params.file,fileName);
        expect(params.regions,equals(expectedRegions));
        this.channel.sentNotification = null;
    }
    _verifyHighlightRegions(fileName : string,expectedRegions : core.DartList<any>) : void {
        let notification : any = this.channel.sentNotification;
        expect(notification,isNotNull);
        expect(notification.event,'analysis.highlights');
        let params : any = new bare.createInstance(any,"fromNotification",notification);
        expect(params,isNotNull);
        expect(params.file,fileName);
        expect(params.regions,equals(expectedRegions));
        this.channel.sentNotification = null;
    }
    _verifyNavigationParams(expectedParams : any) : void {
        let notification : any = this.channel.sentNotification;
        expect(notification,isNotNull);
        expect(notification.event,'analysis.navigation');
        let params : any = new bare.createInstance(any,"fromNotification",notification);
        expect(params,isNotNull);
        expect(params.file,expectedParams.file);
        expect(params.files,equals(expectedParams.files));
        expect(params.regions,equals(expectedParams.regions));
        expect(params.targets,equals(expectedParams.targets));
        this.channel.sentNotification = null;
    }
    _verifyOccurrences(fileName : string,expectedOccurrences : core.DartList<any>) : void {
        let notification : any = this.channel.sentNotification;
        expect(notification,isNotNull);
        expect(notification.event,'analysis.occurrences');
        let params : any = new bare.createInstance(any,"fromNotification",notification);
        expect(params,isNotNull);
        expect(params.file,fileName);
        expect(params.occurrences,equals(expectedOccurrences));
        this.channel.sentNotification = null;
    }
    _verifyOutlines(fileName : string,expectedOutline : any) : void {
        let notification : any = this.channel.sentNotification;
        expect(notification,isNotNull);
        expect(notification.event,'analysis.outline');
        let params : any = new bare.createInstance(any,"fromNotification",notification);
        expect(params,isNotNull);
        expect(params.file,fileName);
        expect(params.outline,equals(expectedOutline));
        this.channel.sentNotification = null;
    }
    _verifyPluginError(isFatal : boolean,message : string,stackTrace : string) : void {
        let notification : any = this.channel.sentNotification;
        expect(notification,isNotNull);
        expect(notification.event,'server.error');
        let params : any = new bare.createInstance(any,"fromNotification",notification);
        expect(params,isNotNull);
        expect(params.isFatal,isFatal);
        expect(params.message,message);
        expect(params.stackTrace,stackTrace);
        this.channel.sentNotification = null;
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    NotificationManagerTest() {
    }
}

export namespace TestChannel {
    export type Constructors = 'TestChannel';
    export type Interface = Omit<TestChannel, Constructors>;
}
@DartClass
@Implements(any)
export class TestChannel implements any.Interface {
    sentNotification : any;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    close() : void {
        fail('Unexpected invocation of close');
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    listen(onRequest : (request : any) => void,_namedArguments? : {onError? : Function,onDone? : () => void}) : void {
        let {onError,onDone} = Object.assign({
        }, _namedArguments );
        fail('Unexpected invocation of listen');
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    sendNotification(notification : any) : void {
        this.sentNotification = notification;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    sendResponse(response : any) : void {
        fail('Unexpected invocation of sendResponse');
    }
    constructor() {
    }
    @defaultConstructor
    TestChannel() {
    }
}

export class properties {
}
