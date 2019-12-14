/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/protocol_server_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./mocks";
import * as lib4 from "@dart2ts.packages/analyzer/lib/dart/ast/ast";
import * as mirrors from "@dart2ts/dart/mirrors";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(AnalysisErrorTest);
        defineReflectiveTests(EnumTest);
    });
};
export namespace AnalysisErrorMock {
    export type Constructors = 'AnalysisErrorMock';
    export type Interface = Omit<AnalysisErrorMock, Constructors>;
}
@DartClass
@Implements(any)
export class AnalysisErrorMock extends any implements any.Interface {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    AnalysisErrorMock() {
    }
}

export namespace AnalysisErrorTest {
    export type Constructors = 'AnalysisErrorTest';
    export type Interface = Omit<AnalysisErrorTest, Constructors>;
}
@DartClass
export class AnalysisErrorTest {
    source : any;

    lineInfo : any;

    engineError : any;

    setUp() : void {
        when(this.source.fullName).thenReturn('foo.dart');
        this.lineInfo = new bare.createInstance(any,null,new core.DartList.literal(0,5,9,20));
        when(this.engineError.source).thenReturn(this.source);
        when(this.engineError.errorCode).thenReturn(lib4.CompileTimeErrorCode.AMBIGUOUS_EXPORT);
        when(this.engineError.message).thenReturn('my message');
        when(this.engineError.offset).thenReturn(10);
        when(this.engineError.length).thenReturn(20);
    }
    tearDown() : void {
        this.source = null;
        this.engineError = null;
    }
    test_fromEngine_hasCorrection() : void {
        when(this.engineError.correction).thenReturn('my correction');
        let error : any = newAnalysisError_fromEngine(this.lineInfo,this.engineError);
        expect(error.toJson(),new core.DartMap.literal([
            [SEVERITY,'ERROR'],
            [TYPE,'COMPILE_TIME_ERROR'],
            [LOCATION,new core.DartMap.literal([
                [FILE,'foo.dart'],
                [OFFSET,10],
                [LENGTH,20],
                [START_LINE,3],
                [START_COLUMN,2]])],
            [MESSAGE,'my message'],
            [CORRECTION,'my correction'],
            [CODE,'ambiguous_export'],
            [HAS_FIX,false]]));
    }
    test_fromEngine_noCorrection() : void {
        when(this.engineError.correction).thenReturn(null);
        let error : any = newAnalysisError_fromEngine(this.lineInfo,this.engineError);
        expect(error.toJson(),new core.DartMap.literal([
            [SEVERITY,'ERROR'],
            [TYPE,'COMPILE_TIME_ERROR'],
            [LOCATION,new core.DartMap.literal([
                [FILE,'foo.dart'],
                [OFFSET,10],
                [LENGTH,20],
                [START_LINE,3],
                [START_COLUMN,2]])],
            [MESSAGE,'my message'],
            [CODE,'ambiguous_export'],
            [HAS_FIX,false]]));
    }
    test_fromEngine_noLineInfo() : void {
        when(this.engineError.correction).thenReturn(null);
        let error : any = newAnalysisError_fromEngine(null,this.engineError);
        expect(error.toJson(),new core.DartMap.literal([
            [SEVERITY,'ERROR'],
            [TYPE,'COMPILE_TIME_ERROR'],
            [LOCATION,new core.DartMap.literal([
                [FILE,'foo.dart'],
                [OFFSET,10],
                [LENGTH,20],
                [START_LINE,-1],
                [START_COLUMN,-1]])],
            [MESSAGE,'my message'],
            [CODE,'ambiguous_export'],
            [HAS_FIX,false]]));
    }
    constructor() {
    }
    @defaultConstructor
    AnalysisErrorTest() {
        this.source = new lib3.MockSource();
        this.engineError = new AnalysisErrorMock();
    }
}

export namespace EnumTest {
    export type Constructors = 'EnumTest';
    export type Interface = Omit<EnumTest, Constructors>;
}
@DartClass
export class EnumTest {
    test_AnalysisErrorSeverity() : void {
        new EnumTester<any,any>().run((engineErrorSeverity : any) =>  {
            return new bare.createInstance(any,null,engineErrorSeverity.name);
        },{
            exceptions : new core.DartMap.literal([
                [lib4.ErrorSeverity.NONE,null]])});
    }
    test_AnalysisErrorType() : void {
        new EnumTester<any,any>().run((engineErrorType : any) =>  {
            return new bare.createInstance(any,null,engineErrorType.name);
        });
    }
    test_ElementKind() : void {
        new EnumTester<any,any>().run(convertElementKind,{
            exceptions : new core.DartMap.literal([
                [lib4.ElementKind.DYNAMIC,ElementKind.UNKNOWN],
                [lib4.ElementKind.ERROR,ElementKind.UNKNOWN],
                [lib4.ElementKind.EXPORT,ElementKind.UNKNOWN],
                [lib4.ElementKind.GENERIC_FUNCTION_TYPE,ElementKind.UNKNOWN],
                [lib4.ElementKind.IMPORT,ElementKind.UNKNOWN],
                [lib4.ElementKind.NAME,ElementKind.UNKNOWN],
                [lib4.ElementKind.UNIVERSE,ElementKind.UNKNOWN]])});
    }
    test_SearchResultKind() : void {
        new EnumTester<any,any>().run(newSearchResultKind_fromEngine);
    }
    constructor() {
    }
    @defaultConstructor
    EnumTest() {
    }
}

export namespace EnumTester {
    export type Constructors = 'EnumTester';
    export type Interface<EngineEnum,ApiEnum> = Omit<EnumTester<EngineEnum,ApiEnum>, Constructors>;
}
@DartClass
export class EnumTester<EngineEnum,ApiEnum> {
    run(convert : <EngineEnum,ApiEnum>(value : EngineEnum) => ApiEnum,_namedArguments? : {exceptions? : core.DartMap<EngineEnum,ApiEnum>}) : void {
        let {exceptions} = Object.assign({
            "exceptions" : new core.DartMap.literal([
            ])}, _namedArguments );
        let engineClass : mirrors.ClassMirror = mirrors.reflectClass(EngineEnum);
        engineClass.staticMembers.forEach((symbol : core.Symbol,method : mirrors.MethodMirror) =>  {
            if (op(Op.EQUALS,symbol,/* TODO (SymbolLiteralImpl): #values */)) {
                return;
            }
            if (!method.isGetter) {
                return;
            }
            let enumName : string = mirrors.MirrorSystem.getName(symbol);
            let engineValue : EngineEnum = engineClass.getField(symbol).reflectee as EngineEnum;
            expect(engineValue,new bare.createInstance(any,null));
            if (exceptions.containsKey(engineValue)) {
                let expectedResult : ApiEnum = exceptions.get(engineValue);
                if (op(Op.EQUALS,expectedResult,null)) {
                    expect(() =>  {
                        convert(engineValue);
                    },throws);
                }else {
                    let apiValue : ApiEnum = convert(engineValue);
                    expect(apiValue,equals(expectedResult));
                }
            }else {
                let apiValue : ApiEnum = convert(engineValue);
                expect((apiValue as any).name,equals(enumName));
            }
        });
    }
    constructor() {
    }
    @defaultConstructor
    EnumTester() {
    }
}

export class properties {
}
