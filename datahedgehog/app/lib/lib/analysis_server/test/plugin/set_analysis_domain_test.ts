/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/plugin/set_analysis_domain_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../analysis_abstract";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(SetAnalysisDomainTest);
    });
};
export namespace SetAnalysisDomainTest {
    export type Constructors = lib3.AbstractAnalysisTest.Constructors | 'SetAnalysisDomainTest';
    export type Interface = Omit<SetAnalysisDomainTest, Constructors>;
}
@DartClass
export class SetAnalysisDomainTest extends lib3.AbstractAnalysisTest {
    parsedUnitFiles : core.DartSet<string>;

    navigationParams : any;

    occurrencesParams : any;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get enableNewAnalysisDriver() : boolean {
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    addServerPlugins(plugins : core.DartList<any>) : void {
        let plugin = new TestSetAnalysisDomainPlugin(this);
        plugins.add(plugin);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    processNotification(notification : any) : void {
        if (op(Op.EQUALS,notification.event,ANALYSIS_NAVIGATION)) {
            let params = new bare.createInstance(any,null,notification);
            if (op(Op.EQUALS,params.file,this.testFile)) {
                this.navigationParams = params;
            }
        }
        if (op(Op.EQUALS,notification.event,ANALYSIS_OCCURRENCES)) {
            let params = new bare.createInstance(any,null,notification);
            if (op(Op.EQUALS,params.file,this.testFile)) {
                this.occurrencesParams = params;
            }
        }
    }
    test_contributorIsInvoked() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.createProject();
            this.addAnalysisSubscription(AnalysisService.NAVIGATION,this.testFile);
            this.addAnalysisSubscription(AnalysisService.OCCURRENCES,this.testFile);
            this.addTestFile('// usually no navigation');
            await this.server.onAnalysisComplete;
            expect(this.parsedUnitFiles,contains(this.testFile));
            {
                expect(this.navigationParams.regions,hasLength(1));
                {
                    let region : any = this.navigationParams.regions.single;
                    expect(region.offset,1);
                    expect(region.length,5);
                    expect(region.targets.single,0);
                }
                {
                    let target : any = this.navigationParams.targets.single;
                    expect(target.fileIndex,0);
                    expect(target.offset,1);
                    expect(target.length,2);
                    expect(target.startLine,3);
                    expect(target.startColumn,4);
                }
                expect(this.navigationParams.files.single,'/testLocation.dart');
            }
            {
                expect(this.occurrencesParams.occurrences,hasLength(1));
                let occurrences : any = this.occurrencesParams.occurrences.single;
                expect(occurrences.element.name,'TestElement');
                expect(occurrences.length,5);
                expect(occurrences.offsets,unorderedEquals(new core.DartList.literal(1,2,3)));
            }
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SetAnalysisDomainTest() {
        this.parsedUnitFiles = new core.DartSet<string>();
    }
}

export namespace TestNavigationContributor {
    export type Constructors = 'TestNavigationContributor';
    export type Interface = Omit<TestNavigationContributor, Constructors>;
}
@DartClass
@Implements(any)
export class TestNavigationContributor implements any.Interface {
    test : SetAnalysisDomainTest;

    constructor(test : SetAnalysisDomainTest) {
    }
    @defaultConstructor
    TestNavigationContributor(test : SetAnalysisDomainTest) {
        this.test = test;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeNavigation(collector : any,context : any,source : any,offset : number,length : number) : void {
        collector.addRegion(1,5,ElementKind.CLASS,new bare.createInstance(any,null,'/testLocation.dart',1,2,3,4));
    }
}

export namespace TestOccurrencesContributor {
    export type Constructors = 'TestOccurrencesContributor';
    export type Interface = Omit<TestOccurrencesContributor, Constructors>;
}
@DartClass
@Implements(any)
export class TestOccurrencesContributor implements any.Interface {
    test : SetAnalysisDomainTest;

    constructor(test : SetAnalysisDomainTest) {
    }
    @defaultConstructor
    TestOccurrencesContributor(test : SetAnalysisDomainTest) {
        this.test = test;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeOccurrences(collector : any,context : any,source : any) : void {
        let element : any = new bare.createInstance(any,null,ElementKind.UNKNOWN,'TestElement',0);
        collector.addOccurrences(new bare.createInstance(any,null,element,new core.DartList.literal<number>(1,2),5));
        collector.addOccurrences(new bare.createInstance(any,null,element,new core.DartList.literal<number>(3),5));
    }
}

export namespace TestSetAnalysisDomainPlugin {
    export type Constructors = 'TestSetAnalysisDomainPlugin';
    export type Interface = Omit<TestSetAnalysisDomainPlugin, Constructors>;
}
@DartClass
@Implements(any)
export class TestSetAnalysisDomainPlugin implements any.Interface {
    test : SetAnalysisDomainTest;

    constructor(test : SetAnalysisDomainTest) {
    }
    @defaultConstructor
    TestSetAnalysisDomainPlugin(test : SetAnalysisDomainTest) {
        this.test = test;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get uniqueIdentifier() : string {
        return 'test';
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    registerExtensionPoints(register : any) : void {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    registerExtensions(register : any) : void {
        register(SET_ANALYSIS_DOMAIN_EXTENSION_POINT_ID,this._setAnalysisDomain.bind(this));
        register(NAVIGATION_CONTRIBUTOR_EXTENSION_POINT_ID,new TestNavigationContributor(this.test));
        register(OCCURRENCES_CONTRIBUTOR_EXTENSION_POINT_ID,new TestOccurrencesContributor(this.test));
    }
    _setAnalysisDomain(domain : any) : void {
        domain.onResultChanged(PARSED_UNIT).listen((result : any) =>  {
            expect(result.context,isNotNull);
            expect(result.target,isNotNull);
            expect(result.value,isNotNull);
            let source : any = result.target.source;
            this.test.parsedUnitFiles.add(source.fullName);
            domain.scheduleNotification(result.context,source,AnalysisService.NAVIGATION);
            domain.scheduleNotification(result.context,source,AnalysisService.OCCURRENCES);
        });
    }
}

export class properties {
}
