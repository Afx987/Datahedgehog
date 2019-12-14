/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/src/context/abstract_context.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./mock_sdk";

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
    private static __$SHARED_MOCK_SDK : lib3.MockSdk;
    static get SHARED_MOCK_SDK() : lib3.MockSdk { 
        if (this.__$SHARED_MOCK_SDK===undefined) {
            this.__$SHARED_MOCK_SDK = new lib3.MockSdk();
        }
        return this.__$SHARED_MOCK_SDK;
    }
    static set SHARED_MOCK_SDK(__$value : lib3.MockSdk)  { 
        this.__$SHARED_MOCK_SDK = __$value;
    }

    private static __$SHARED_STRONG_MOCK_SDK : lib3.MockSdk;
    static get SHARED_STRONG_MOCK_SDK() : lib3.MockSdk { 
        if (this.__$SHARED_STRONG_MOCK_SDK===undefined) {
            this.__$SHARED_STRONG_MOCK_SDK = new lib3.MockSdk();
        }
        return this.__$SHARED_STRONG_MOCK_SDK;
    }
    static set SHARED_STRONG_MOCK_SDK(__$value : lib3.MockSdk)  { 
        this.__$SHARED_STRONG_MOCK_SDK = __$value;
    }

    resourceProvider : any;

    sdk : any;

    sourceFactory : any;

    context : any;

    analysisCache : any;

    analysisDriver : any;

    sdkResolver : any;

    resourceResolver : any;

    task : any;

    oldOutputs : core.DartMap<any,any>;

    outputs : core.DartMap<any,any>;

    addSource(path : string,contents : string) : any {
        let source : any = this.newSource(path,contents);
        let changeSet : any = new bare.createInstance(any,null);
        changeSet.addedSource(source);
        this.context.applyChanges(changeSet);
        return source;
    }
    assertNamedElements(elements : core.DartList<any>,names : core.DartList<string>) : void {
        for(let elemName of names) {
            let found : boolean = false;
            for(let elem of elements) {
                if (op(Op.EQUALS,elem.name,elemName)) {
                    found = true;
                    break;
                }
            }
            if (!found) {
                let buffer : core.DartStringBuffer = new core.DartStringBuffer();
                buffer.write("Expected element named: ");
                buffer.write(elemName);
                buffer.write("\n  but found: ");
                for(let elem of elements) {
                    buffer.write(elem.name);
                    buffer.write(", ");
                }
                fail(buffer.toString());
            }
        }
        expect(elements,hasLength(names.length));
    }
    computeResult(target : any,result : any,_namedArguments? : {matcher? : any}) : void {
        let {matcher} = Object.assign({
            "matcher" : null}, _namedArguments );
        this.oldOutputs = this.outputs;
        this.task = this.analysisDriver.computeResult(target,result);
        if (op(Op.EQUALS,matcher,null)) {
            expect(this.task,isNotNull);
        }else {
            expect(this.task,matcher);
        }
        expect(this.task.caughtException,isNull);
        this.outputs = this.task.outputs;
        for(let descriptor of this.task.descriptor.results) {
            expect(this.outputs,contains(descriptor));
        }
    }
    createAnalysisContext() : any {
        return new bare.createInstance(any,null);
    }
    createDartSdk() : any {
        return new lib3.MockSdk({
            resourceProvider : this.resourceProvider});
    }
    newSource(path : string,content? : string) : any {
        content = content || '';
        let file : any = this.resourceProvider.newFile(this.resourceProvider.convertPath(path),content);
        return file.createSource();
    }
    newSources(sourceMap : core.DartMap<string,string>) : core.DartList<any> {
        let sources : core.DartList<any> = new core.DartList.literal<any>();
        sourceMap.forEach((path : string,content : string) =>  {
            let source : any = this.newSource(path,content);
            sources.add(source);
        });
        return sources;
    }
    prepareAnalysisContext(options? : any) : void {
        this.sdk = this.createDartSdk();
        this.sdkResolver = new bare.createInstance(any,null,this.sdk);
        this.resourceResolver = new bare.createInstance(any,null,this.resourceProvider);
        this.sourceFactory = new bare.createInstance(any,null,new core.DartList.literal<any>(this.sdkResolver,this.resourceResolver),null,this.resourceProvider);
        this.context = this.createAnalysisContext();
        if (options != null) {
            this.context.analysisOptions = options;
        }
        this.context.sourceFactory = this.sourceFactory;
        this.analysisCache = this.context.analysisCache;
        this.analysisDriver = this.context.driver;
    }
    resolveLibraryUnit(source : any) : any {
        return this.context.resolveCompilationUnit2(source,source);
    }
    setUp() : void {
        let plugins : core.DartList<any> = new core.DartList.literal<any>();
        plugins.addAll(AnalysisEngine.instance.requiredPlugins);
        let manager : any = new bare.createInstance(any,null);
        manager.processPlugins(plugins);
        this.prepareAnalysisContext();
    }
    tearDown() : void {
    }
    constructor() {
    }
    @defaultConstructor
    AbstractContextTest() {
        this.resourceProvider = new bare.createInstance(any,null);
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
