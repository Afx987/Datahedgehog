/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/src/dart/analysis/base.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../../context/mock_sdk";

export var findChildElement : (root : any,name : string,kind? : any) => any = (root : any,name : string,kind? : any) : any =>  {
    let result : any = null;
    root.accept(new _ElementVisitorFunctionWrapper((element : any) =>  {
        if (element.name != name) {
            return;
        }
        if (kind != null && element.kind != kind) {
            return;
        }
        result = element;
    }));
    return result;
};
export namespace BaseAnalysisDriverTest {
    export type Constructors = 'BaseAnalysisDriverTest';
    export type Interface = Omit<BaseAnalysisDriverTest, Constructors>;
}
@DartClass
export class BaseAnalysisDriverTest {
    provider : any;

    sdk : any;

    byteStore : any;

    contentOverlay : any;

    logBuffer : core.DartStringBuffer;

    logger : any;

    generatedUriResolver : any;

    scheduler : any;

    driver : any;

    allStatuses : core.DartList<any>;

    allResults : core.DartList<any>;

    allExceptions : core.DartList<any>;

    testProject : string;

    testFile : string;

    testCode : string;

    get disableChangesAndCacheAllResults() : boolean {
        return false;
    }
    addTestFile(content : string,_namedArguments? : {priority? : boolean}) : void {
        let {priority} = Object.assign({
            "priority" : false}, _namedArguments );
        this.testCode = content;
        this.provider.newFile(this.testFile,content);
        this.driver.addFile(this.testFile);
        if (priority) {
            this.driver.priorityFiles = new core.DartList.literal(this.testFile);
        }
    }
    createAnalysisDriver(_namedArguments? : {externalSummaries? : any}) : any {
        let {externalSummaries} = Object.assign({
        }, _namedArguments );
        return new bare.createInstance(any,null,this.scheduler,this.logger,this.provider,this.byteStore,this.contentOverlay,null,new bare.createInstance(any,null,new core.DartList.literal(new bare.createInstance(any,null,this.sdk),this.generatedUriResolver,new bare.createInstance(any,null,this.provider,new core.DartMap.literal([
            ['test',new core.DartList.literal(this.provider.getFolder(this.testProject))]])),new bare.createInstance(any,null,this.provider)),null,this.provider),((_) : any =>  {
            {
                _.strongMode = true;
                _.enableUriInPartOf = true;
                return _;
            }
        })(new bare.createInstance(any,null)),{
            disableChangesAndCacheAllResults : this.disableChangesAndCacheAllResults,externalSummaries : externalSummaries});
    }
    findOffset(search : string) : number {
        let offset : number = new core.DartString(this.testCode).indexOf(search);
        if (offset < 0) {
            fail(`Did not find '${search}' in\n${this.testCode}`);
        }
        return offset;
    }
    getLeadingIdentifierLength(search : string) : number {
        let length : number = 0;
        while (length < new core.DartString(search).length){
            let c : number = new core.DartString(search).codeUnitAt(length);
            if (c >= new core.DartString('a').codeUnitAt(0) && c <= new core.DartString('z').codeUnitAt(0)) {
                length++;
                continue;
            }
            if (c >= new core.DartString('A').codeUnitAt(0) && c <= new core.DartString('Z').codeUnitAt(0)) {
                length++;
                continue;
            }
            if (c >= new core.DartString('0').codeUnitAt(0) && c <= new core.DartString('9').codeUnitAt(0)) {
                length++;
                continue;
            }
            break;
        }
        return length;
    }
    setUp() : void {
        this.sdk = new lib3.MockSdk({
            resourceProvider : this.provider});
        this.testProject = this._p('/test/lib');
        this.testFile = this._p('/test/lib/test.dart');
        this.logger = new bare.createInstance(any,null,this.logBuffer);
        this.scheduler = new bare.createInstance(any,null,this.logger);
        this.driver = this.createAnalysisDriver();
        this.scheduler.start();
        this.scheduler.status.listen(this.allStatuses.add.bind(this.allStatuses));
        this.driver.results.listen(this.allResults.add.bind(this.allResults));
        this.driver.exceptions.listen(this.allExceptions.add.bind(this.allExceptions));
    }
    tearDown() : void {
    }
    _p(path : string) : string {
        return this.provider.convertPath(path);
    }
    constructor() {
    }
    @defaultConstructor
    BaseAnalysisDriverTest() {
        this.provider = new bare.createInstance(any,null);
        this.byteStore = new bare.createInstance(any,null);
        this.contentOverlay = new bare.createInstance(any,null);
        this.logBuffer = new core.DartStringBuffer();
        this.generatedUriResolver = new _GeneratedUriResolverMock();
        this.allStatuses = new core.DartList.literal<any>();
        this.allResults = new core.DartList.literal<any>();
        this.allExceptions = new core.DartList.literal<any>();
    }
}

export namespace _ElementVisitorFunctionWrapper {
    export type Constructors = '_ElementVisitorFunctionWrapper';
    export type Interface = Omit<_ElementVisitorFunctionWrapper, Constructors>;
}
@DartClass
export class _ElementVisitorFunctionWrapper extends any {
    function : (element : any) => void;

    constructor(function : (element : any) => void) {
    }
    @defaultConstructor
    _ElementVisitorFunctionWrapper(function : (element : any) => void) {
        this.function = function;
    }
    visitElement(element : any) {
        this.function(element);
        super.visitElement(element);
    }
}

export namespace _GeneratedUriResolverMock {
    export type Constructors = '_GeneratedUriResolverMock';
    export type Interface = Omit<_GeneratedUriResolverMock, Constructors>;
}
@DartClass
@Implements(any)
export class _GeneratedUriResolverMock extends any implements any.Interface {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _GeneratedUriResolverMock() {
    }
}

export class properties {
}
