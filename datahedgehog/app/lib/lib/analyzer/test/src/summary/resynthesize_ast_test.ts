/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/src/summary/resynthesize_ast_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./element_text";
import * as lib4 from "./summary_common";
import * as lib5 from "./resynthesize_common";
import * as lib6 from "./../context/abstract_context";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(ResynthesizeAstSpecTest);
        defineReflectiveTests(ResynthesizeAstStrongTest);
        defineReflectiveTests(ApplyCheckElementTextReplacements);
    });
};
export namespace ApplyCheckElementTextReplacements {
    export type Constructors = 'ApplyCheckElementTextReplacements';
    export type Interface = Omit<ApplyCheckElementTextReplacements, Constructors>;
}
@DartClass
export class ApplyCheckElementTextReplacements {
    test_applyReplacements() {
        lib3.applyCheckElementTextReplacements();
    }
    constructor() {
    }
    @defaultConstructor
    ApplyCheckElementTextReplacements() {
    }
}

export namespace _AstResynthesizeTestMixin {
    export type Constructors = '_AstResynthesizeTestMixin';
    export type Interface = Omit<_AstResynthesizeTestMixin, Constructors>;
}
@DartClass
@Implements(_AstResynthesizeTestMixinInterface)
export class _AstResynthesizeTestMixin implements _AstResynthesizeTestMixinInterface.Interface {
    serializedSources : core.DartSet<any>;

    bundleAssembler : any;

    uriToUnit : core.DartMap<string,any>;

    @AbstractProperty
    get context() : any{ throw 'abstract'}
    _encodeDecodeLibraryElement(source : any) : any {
        let resynthesizer : any = this._encodeLibrary(source);
        return resynthesizer.getLibraryElement(source.uri.toString());
    }
    _encodeLibrary(source : any) : lib5.TestSummaryResynthesizer {
        this._serializeLibrary(source);
        let bundle : any = new bare.createInstance(any,null,this.bundleAssembler.assemble().toBuffer());
        let unlinkedSummaries : core.DartMap<string,any> = new core.DartMap.literal([
        ]);
        for(let i : number = 0; i < bundle.unlinkedUnitUris.length; i++){
            let uri : string = op(Op.INDEX,bundle.unlinkedUnitUris,i);
            unlinkedSummaries.set(uri,op(Op.INDEX,bundle.unlinkedUnits,i));
        }
        var getDependency : (absoluteUri : string) => any = (absoluteUri : string) : any =>  {
            let sdkLibraries : core.DartMap<string,any> = lib4.SerializedMockSdk.instance.uriToLinkedLibrary;
            let linkedLibrary : any = sdkLibraries.get(absoluteUri);
            if (op(Op.EQUALS,linkedLibrary,null) && !this.allowMissingFiles) {
                fail(`Linker unexpectedly requested LinkedLibrary for "${absoluteUri}".` + `  Libraries available: ${sdkLibraries.keys}`);
            }
            return linkedLibrary;
        };
        var getUnit : (absoluteUri : string) => any = (absoluteUri : string) : any =>  {
            let unit : any = (this.uriToUnit.get(absoluteUri) || lib4.SerializedMockSdk.instance.uriToUnlinkedUnit.get(absoluteUri));
            if (op(Op.EQUALS,unit,null) && !this.allowMissingFiles) {
                fail(`Linker unexpectedly requested unit for "${absoluteUri}".`);
            }
            return unit;
        };
        let nonSdkLibraryUris : core.DartSet<string> = this.serializedSources.where((source : any) =>  {
            return !source.isInSystemLibrary && op(Op.EQUALS,this.context.computeKindOf(source),SourceKind.LIBRARY);
        }).map((source : any) =>  {
            return source.uri.toString();
        }).toSet();
        let linkedSummaries : core.DartMap<string,any> = link(nonSdkLibraryUris,getDependency,getUnit,this.context.declaredVariables.get,this.context.analysisOptions.strongMode);
        return new lib5.TestSummaryResynthesizer(this.context,((_) : core.DartMap<string,any> =>  {
            {
                _.addAll(lib4.SerializedMockSdk.instance.uriToUnlinkedUnit);
                _.addAll(unlinkedSummaries);
                return _;
            }
        })(new core.DartMap<string,any>()),((_) : core.DartMap<string,any> =>  {
            {
                _.addAll(lib4.SerializedMockSdk.instance.uriToLinkedLibrary);
                _.addAll(linkedSummaries);
                return _;
            }
        })(new core.DartMap<string,any>()),this.allowMissingFiles);
    }
    _getUnlinkedUnit(source : any) : any {
        if (op(Op.EQUALS,source,null)) {
            return new bare.createInstance(any,null);
        }
        let uriStr : string = source.uri.toString();
        {
            let unlinkedUnitInSdk : any = lib4.SerializedMockSdk.instance.uriToUnlinkedUnit.get(uriStr);
            if (unlinkedUnitInSdk != null) {
                return unlinkedUnitInSdk;
            }
        }
        return this.uriToUnit.putIfAbsent(uriStr,() =>  {
            let modificationTime : number = this.context.computeResult(source,MODIFICATION_TIME);
            if (modificationTime < 0) {
                if (!this.allowMissingFiles) {
                    fail(`Unexpectedly tried to get unlinked summary for ${source}`);
                }
                return null;
            }
            let unit : any = this.context.computeResult(source,PARSED_UNIT);
            let unlinkedUnit : any = serializeAstUnlinked(unit);
            this.bundleAssembler.addUnlinkedUnit(source,unlinkedUnit);
            return unlinkedUnit;
        });
    }
    _serializeLibrary(librarySource : any) : void {
        if (op(Op.EQUALS,librarySource,null) || librarySource.isInSystemLibrary) {
            return;
        }
        if (!this.serializedSources.add(librarySource)) {
            return;
        }
        var getPart : (absoluteUri : string) => any = (absoluteUri : string) : any =>  {
            let source : any = this.context.sourceFactory.forUri(absoluteUri);
            return this._getUnlinkedUnit(source);
        };
        var getImport : (relativeUri : string) => any = (relativeUri : string) : any =>  {
            return ((t)=>(!!t)?t.publicNamespace:null)(getPart(relativeUri));
        };
        let definingUnit : any = this._getUnlinkedUnit(librarySource);
        if (definingUnit != null) {
            let linkedLibrary : any = prelink(librarySource.uri.toString(),definingUnit,getPart,getImport,this.context.declaredVariables.get);
            linkedLibrary.dependencies.skip(1).forEach((d : any) =>  {
                let source : any = this.context.sourceFactory.forUri(d.uri);
                this._serializeLibrary(source);
            });
        }
    }
    constructor() {
    }
    @defaultConstructor
    _AstResynthesizeTestMixin() {
        this.serializedSources = new core.DartSet<any>();
        this.bundleAssembler = new bare.createInstance(any,null);
        this.uriToUnit = new core.DartMap.literal([
        ]);
    }
}

export namespace _AstResynthesizeTestMixinInterface {
    export type Constructors = '_AstResynthesizeTestMixinInterface';
    export type Interface = Omit<_AstResynthesizeTestMixinInterface, Constructors>;
}
@DartClass
export class _AstResynthesizeTestMixinInterface {
    @AbstractProperty
    get allowMissingFiles() : boolean{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    _AstResynthesizeTestMixinInterface() {
    }
}

export namespace _ResynthesizeAstTest {
    export type Constructors = lib5.ResynthesizeTest.Constructors | '_ResynthesizeAstTest';
    export type Interface = Omit<_ResynthesizeAstTest, Constructors>;
}
@DartClass
@With(_AstResynthesizeTestMixin)
export class _ResynthesizeAstTest extends lib5.ResynthesizeTest implements _AstResynthesizeTestMixin.Interface {
    @Abstract
    _encodeDecodeLibraryElement(source : any) : any {
        throw 'from mixin';
    }
    @Abstract
    _encodeLibrary(source : any) : lib5.TestSummaryResynthesizer {
        throw 'from mixin';
    }
    @Abstract
    _getUnlinkedUnit(source : any) : any {
        throw 'from mixin';
    }
    @Abstract
    _serializeLibrary(librarySource : any) : void {
        throw 'from mixin';
    }
    @AbstractProperty
    get isStrongMode() : boolean{ throw 'abstract'}
    @AbstractProperty
    get shouldCompareLibraryElements() : boolean{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    checkLibrary(text : string,_namedArguments? : {allowErrors? : boolean,dumpSummaries? : boolean}) : any {
        let {allowErrors,dumpSummaries} = Object.assign({
            "allowErrors" : false,
            "dumpSummaries" : false}, _namedArguments );
        let source : any = this.addTestSource(text);
        let resynthesized : any = this._encodeDecodeLibraryElement(source);
        let original : any = context.computeLibraryElement(source);
        if (!allowErrors) {
            let errors : core.DartList<any> = context.computeErrors(source);
            if (errors.where((e : any) =>  {
                return e.message.startsWith('unused');
            }).isNotEmpty) {
                fail(`Analysis errors: ${errors}`);
            }
        }
        if (this.shouldCompareLibraryElements) {
            this.checkLibraryElements(original,resynthesized);
        }
        return resynthesized;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    compareLocalElementsOfExecutable(resynthesized : any,original : any,desc : string) : void {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createDartSdk() : any {
        return lib6.AbstractContextTest.SHARED_MOCK_SDK;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createOptions() : any {
        return ((_) : any =>  {
            {
                _.strongMode = this.isStrongMode;
                return _;
            }
        })(super.createOptions());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    encodeDecodeLibrarySource(source : any) : lib5.TestSummaryResynthesizer {
        return this._encodeLibrary(source);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _ResynthesizeAstTest() {
    }
}

export namespace ResynthesizeAstSpecTest {
    export type Constructors = _ResynthesizeAstTest.Constructors | 'ResynthesizeAstSpecTest';
    export type Interface = Omit<ResynthesizeAstSpecTest, Constructors>;
}
@DartClass
export class ResynthesizeAstSpecTest extends _ResynthesizeAstTest {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isStrongMode() : boolean {
        return false;
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ResynthesizeAstSpecTest() {
    }
}

export namespace ResynthesizeAstStrongTest {
    export type Constructors = _ResynthesizeAstTest.Constructors | 'ResynthesizeAstStrongTest';
    export type Interface = Omit<ResynthesizeAstStrongTest, Constructors>;
}
@DartClass
export class ResynthesizeAstStrongTest extends _ResynthesizeAstTest {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isStrongMode() : boolean {
        return true;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createOptions() : any {
        return ((_) : any =>  {
            {
                _.strongMode = true;
                return _;
            }
        })(super.createOptions());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_const_invokeConstructor_generic_noTypeArguments() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await super.test_const_invokeConstructor_generic_noTypeArguments();
        } )());
    }

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_instantiateToBounds_boundRefersToItself() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await super.test_instantiateToBounds_boundRefersToItself();
        } )());
    }

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_syntheticFunctionType_genericClosure() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await super.test_syntheticFunctionType_genericClosure();
        } )());
    }

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_syntheticFunctionType_inGenericClass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await super.test_syntheticFunctionType_inGenericClass();
        } )());
    }

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_syntheticFunctionType_noArguments() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await super.test_syntheticFunctionType_noArguments();
        } )());
    }

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_syntheticFunctionType_withArguments() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await super.test_syntheticFunctionType_withArguments();
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ResynthesizeAstStrongTest() {
    }
}

export class properties {
}
