/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/abstract_context.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts/dart/uri";
import * as lib4 from "./mock_sdk";

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
export namespace AbstractContextTest {
    export type Constructors = 'AbstractContextTest';
    export type Interface = Omit<AbstractContextTest, Constructors>;
}
@DartClass
export class AbstractContextTest {
    provider : any;

    sdk : any;

    packageMap : core.DartMap<string,core.DartList<any>>;

    resourceResolver : any;

    _context : any;

    _logBuffer : core.DartStringBuffer;

    _fileContentOverlay : any;

    _driver : any;

    get context() : any {
        if (this.enableNewAnalysisDriver) {
            throw new core.StateError('Should not be used with the new analysis driver.');
        }
        return this._context;
    }
    get driver() : any {
        if (this.enableNewAnalysisDriver) {
            return this._driver;
        }
        throw new core.StateError('Should be used with the new analysis driver.');
    }
    get enableNewAnalysisDriver() : boolean {
        return true;
    }
    addMetaPackageSource() : any {
        return this.addPackageSource('meta','meta.dart','library meta;\n\nconst Required required = const Required();\n\nclass Required {\n  final String reason;\n  const Required([this.reason]);\n}\n');
    }
    addPackageSource(packageName : string,filePath : string,content : string) : any {
        this.packageMap.set(packageName,new core.DartList.literal((this.newFolder(`/pubcache/${packageName}`))));
        let file : any = this.newFile(`/pubcache/${packageName}/${filePath}`,content);
        return file.createSource();
    }
    addSource(path : string,content : string,uri? : lib3.Uri) : any {
        let file : any = this.newFile(path,content);
        let source : any = file.createSource(uri);
        if (this.enableNewAnalysisDriver) {
            this.driver.addFile(path);
            this.driver.changeFile(path);
            op(Op.INDEX_ASSIGN,this._fileContentOverlay,path,content);
        }else {
            let changeSet : any = new bare.createInstance(any,null);
            changeSet.addedSource(source);
            this.context.applyChanges(changeSet);
            this.context.setContents(source,content);
        }
        return source;
    }
    newFile(path : string,content? : string) : any {
        return this.provider.newFile(this.provider.convertPath(path),(content || ''));
    }
    newFolder(path : string) : any {
        return this.provider.newFolder(this.provider.convertPath(path));
    }
    performAllAnalysisTasks() : void {
        if (this.enableNewAnalysisDriver) {
            return;
        }
        while (true){
            let result : any = this.context.performAnalysisTask();
            if (!result.hasMoreWork) {
                break;
            }
        }
    }
    processRequiredPlugins() : void {
        AnalysisEngine.instance.processRequiredPlugins();
    }
    resolveLibraryUnit(source : any) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            if (this.enableNewAnalysisDriver) {
                return ((t)=>(!!t)?t.unit:null)((await this.driver.getResult(source.fullName)));
            }else {
                return this.context.resolveCompilationUnit2(source,source);
            }
        } )());
    }

    setUp() : void {
        this.processRequiredPlugins();
        this.setupResourceProvider();
        this.sdk = new lib4.MockSdk({
            resourceProvider : this.provider});
        this.resourceResolver = new bare.createInstance(any,null,this.provider);
        this.packageMap = new core.DartMap<string,core.DartList<any>>();
        let packageResolver : any = new bare.createInstance(any,null,this.provider,this.packageMap);
        let sourceFactory : any = new bare.createInstance(any,null,new core.DartList.literal(new bare.createInstance(any,null,this.sdk),packageResolver,this.resourceResolver));
        if (this.enableNewAnalysisDriver) {
            let log : any = new bare.createInstance(any,null,this._logBuffer);
            let scheduler : any = new bare.createInstance(any,null,log);
            this._driver = new bare.createInstance(any,null,scheduler,log,this.provider,new bare.createInstance(any,null),this._fileContentOverlay,null,sourceFactory,((_) : any =>  {
                {
                    _.strongMode = true;
                    return _;
                }
            })(new bare.createInstance(any,null)));
            scheduler.start();
        }else {
            this._context = AnalysisEngine.instance.createAnalysisContext();
            this.context.sourceFactory = sourceFactory;
        }
        AnalysisEngine.instance.logger = PrintLogger.instance;
    }
    setupResourceProvider() : void {
        this.provider = new bare.createInstance(any,null);
    }
    tearDown() : void {
        this._context = null;
        this.provider = null;
        AnalysisEngine.instance.clearCaches();
        AnalysisEngine.instance.logger = null;
    }
    constructor() {
    }
    @defaultConstructor
    AbstractContextTest() {
        this._logBuffer = new core.DartStringBuffer();
        this._fileContentOverlay = new bare.createInstance(any,null);
    }
}

export namespace PrintLogger {
    export type Constructors = 'PrintLogger';
    export type Interface = Omit<PrintLogger, Constructors>;
}
@DartClass
@Implements(any)
export class PrintLogger implements any.Interface {
    private static __$instance : any;
    static get instance() : any { 
        if (this.__$instance===undefined) {
            this.__$instance = new PrintLogger();
        }
        return this.__$instance;
    }
    static set instance(__$value : any)  { 
        this.__$instance = __$value;
    }

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    logError(message : string,exception? : any) : void {
        core.print(message);
        if (exception != null) {
            core.print(exception);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    logInformation(message : string,exception? : any) : void {
        core.print(message);
        if (exception != null) {
            core.print(exception);
        }
    }
    constructor() {
    }
    @defaultConstructor
    PrintLogger() {
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

export class properties {
}
