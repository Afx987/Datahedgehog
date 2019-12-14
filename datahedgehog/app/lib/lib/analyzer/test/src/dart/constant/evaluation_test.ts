/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/src/dart/constant/evaluation_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../../../generated/resolver_test_case";
import * as lib4 from "./../../../generated/test_support";
import * as lib5 from "@dart2ts.packages/path/lib/path";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(ConstantValueComputerTest);
        defineReflectiveTests(ConstantVisitorTest);
        defineReflectiveTests(StrongConstantValueComputerTest);
    });
};
export namespace ConstantEvaluationValidator_ForTest {
    export type Constructors = 'ConstantEvaluationValidator_ForTest';
    export type Interface = Omit<ConstantEvaluationValidator_ForTest, Constructors>;
}
@DartClass
@Implements(any)
export class ConstantEvaluationValidator_ForTest implements any.Interface {
    context : any;

    computer : any;

    _nodeBeingEvaluated : any;

    constructor(context : any) {
    }
    @defaultConstructor
    ConstantEvaluationValidator_ForTest(context : any) {
        this.context = context;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    beforeComputeValue(constant : any) : void {
        this._nodeBeingEvaluated = constant;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    beforeGetConstantInitializers(constructor : any) : void {
        return this._checkPathTo(constructor);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    beforeGetEvaluationResult(constant : any) : void {
        return this._checkPathTo(constant);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    beforeGetFieldEvaluationResult(field : any) : void {
        return this._checkPathTo(field);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    beforeGetParameterDefault(parameter : any) : void {
        return this._checkPathTo(parameter);
    }
    _checkPathTo(target : any) : void {
        if (this.computer.referenceGraph.containsPath(this._nodeBeingEvaluated,target)) {
            return;
        }
        let out : core.DartStringBuffer = new core.DartStringBuffer();
        out.writeln("missing path in constant dependency graph");
        out.writeln(`from ${this._nodeBeingEvaluated} to ${target}`);
        for(let s of this.context.analysisCache.sources) {
            let text : string = this.context.getContents(s).data;
            if (text != "") {
                out.writeln(`=== ${s.shortName}\n${text}`);
            }
        }
        fail(out.toString());
    }
}

export namespace ConstantValueComputerTest {
    export type Constructors = lib3.ResolverTestCase.Constructors | 'ConstantValueComputerTest';
    export type Interface = Omit<ConstantValueComputerTest, Constructors>;
}
@DartClass
export class ConstantValueComputerTest extends lib3.ResolverTestCase {
    test_annotation_constConstructor() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let compilationUnit : any = await this.resolveSource('class A {\n  final int i;\n  const A(this.i);\n}\n\nclass C {\n  @A(5)\n  f() {}\n}\n');
            let result : any = this._evaluateAnnotation(compilationUnit,"C","f");
            let annotationFields : core.DartMap<string,any> = this._assertType(result,'A');
            this._assertIntField(annotationFields,'i',5);
        } )());
    }

    test_annotation_constConstructor_named() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let compilationUnit : any = await this.resolveSource('class A {\n  final int i;\n  const A.named(this.i);\n}\n\nclass C {\n  @A.named(5)\n  f() {}\n}\n');
            let result : any = this._evaluateAnnotation(compilationUnit,"C","f");
            let annotationFields : core.DartMap<string,any> = this._assertType(result,'A');
            this._assertIntField(annotationFields,'i',5);
        } )());
    }

    test_annotation_constConstructor_noArgs() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let compilationUnit : any = await this.resolveSource('class A {\n  final int i;\n  const A(this.i);\n}\n\nclass C {\n  @A\n  f() {}\n}\n');
            this._evaluateAnnotation(compilationUnit,"C","f");
        } )());
    }

    test_annotation_constConstructor_noArgs_named() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let compilationUnit : any = await this.resolveSource('class A {\n  final int i;\n  const A.named(this.i);\n}\n\nclass C {\n  @A.named\n  f() {}\n}\n');
            this._evaluateAnnotation(compilationUnit,"C","f");
        } )());
    }

    test_annotation_nonConstConstructor() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let compilationUnit : any = await this.resolveSource('class A {\n  final int i;\n  A(this.i);\n}\n\nclass C {\n  @A(5)\n  f() {}\n}\n');
            this._evaluateAnnotation(compilationUnit,"C","f");
        } )());
    }

    test_annotation_staticConst() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let compilationUnit : any = await this.resolveSource('class C {\n  static const int i = 5;\n\n  @i\n  f() {}\n}\n');
            let result : any = this._evaluateAnnotation(compilationUnit,"C","f");
            expect(this._assertValidInt(result),5);
        } )());
    }

    test_annotation_staticConst_args() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let compilationUnit : any = await this.resolveSource('class C {\n  static const int i = 5;\n\n  @i(1)\n  f() {}\n}\n');
            this._evaluateAnnotation(compilationUnit,"C","f");
        } )());
    }

    test_annotation_staticConst_otherClass() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let compilationUnit : any = await this.resolveSource('class A {\n  static const int i = 5;\n}\n\nclass C {\n  @A.i\n  f() {}\n}\n');
            let result : any = this._evaluateAnnotation(compilationUnit,"C","f");
            expect(this._assertValidInt(result),5);
        } )());
    }

    test_annotation_staticConst_otherClass_args() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let compilationUnit : any = await this.resolveSource('class A {\n  static const int i = 5;\n}\n\nclass C {\n  @A.i(1)\n  f() {}\n}\n');
            this._evaluateAnnotation(compilationUnit,"C","f");
        } )());
    }

    test_annotation_topLevelVariable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let compilationUnit : any = await this.resolveSource('const int i = 5;\nclass C {\n  @i\n  f() {}\n}\n');
            let result : any = this._evaluateAnnotation(compilationUnit,"C","f");
            expect(this._assertValidInt(result),5);
        } )());
    }

    test_annotation_topLevelVariable_args() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let compilationUnit : any = await this.resolveSource('const int i = 5;\nclass C {\n  @i(1)\n  f() {}\n}\n');
            this._evaluateAnnotation(compilationUnit,"C","f");
        } )());
    }

    test_computeValues_cycle() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let logger : lib4.TestLogger = new lib4.TestLogger();
            AnalysisEngine.instance.logger = logger;
            try {
                let source : any = this.addSource('  const int a = c;\n  const int b = a;\n  const int c = b;');
                let libraryElement : any = this.resolve2(source);
                let unit : any = this.analysisContext.resolveCompilationUnit(source,libraryElement);
                this.analysisContext.computeErrors(source);
                expect(unit,isNotNull);
                let computer : any = this._makeConstantValueComputer();
                computer.add(unit);
                computer.computeValues();
                let members : any = unit.declarations;
                expect(members,hasLength(3));
                this._validate(false,(op(Op.INDEX,members,0) as any).variables);
                this._validate(false,(op(Op.INDEX,members,1) as any).variables);
                this._validate(false,(op(Op.INDEX,members,2) as any).variables);
            } finally {
                AnalysisEngine.instance.logger = Logger.NULL;
            }
        } )());
    }

    test_computeValues_dependentVariables() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('const int b = a;\nconst int a = 0;');
            let libraryElement : any = this.resolve2(source);
            let unit : any = this.analysisContext.resolveCompilationUnit(source,libraryElement);
            expect(unit,isNotNull);
            let computer : any = this._makeConstantValueComputer();
            computer.add(unit);
            computer.computeValues();
            let members : any = unit.declarations;
            expect(members,hasLength(2));
            this._validate(true,(op(Op.INDEX,members,0) as any).variables);
            this._validate(true,(op(Op.INDEX,members,1) as any).variables);
        } )());
    }

    test_computeValues_empty() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let computer : any = this._makeConstantValueComputer();
            computer.computeValues();
        } )());
    }

    test_computeValues_multipleSources() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let librarySource : any = this.addNamedSource("/lib.dart",'library lib;\npart \'part.dart\';\nconst int c = b;\nconst int a = 0;');
            let partSource : any = this.addNamedSource("/part.dart",'part of lib;\nconst int b = a;\nconst int d = c;');
            let libraryElement : any = this.resolve2(librarySource);
            let libraryUnit : any = this.analysisContext.resolveCompilationUnit(librarySource,libraryElement);
            expect(libraryUnit,isNotNull);
            let partUnit : any = this.analysisContext.resolveCompilationUnit(partSource,libraryElement);
            expect(partUnit,isNotNull);
            let computer : any = this._makeConstantValueComputer();
            computer.add(libraryUnit);
            computer.add(partUnit);
            computer.computeValues();
            let libraryMembers : any = libraryUnit.declarations;
            expect(libraryMembers,hasLength(2));
            this._validate(true,(op(Op.INDEX,libraryMembers,0) as any).variables);
            this._validate(true,(op(Op.INDEX,libraryMembers,1) as any).variables);
            let partMembers : any = libraryUnit.declarations;
            expect(partMembers,hasLength(2));
            this._validate(true,(op(Op.INDEX,partMembers,0) as any).variables);
            this._validate(true,(op(Op.INDEX,partMembers,1) as any).variables);
        } )());
    }

    test_computeValues_singleVariable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource("const int a = 0;");
            let libraryElement : any = this.resolve2(source);
            let unit : any = this.analysisContext.resolveCompilationUnit(source,libraryElement);
            expect(unit,isNotNull);
            let computer : any = this._makeConstantValueComputer();
            computer.add(unit);
            computer.computeValues();
            let members : any = unit.declarations;
            expect(members,hasLength(1));
            this._validate(true,(op(Op.INDEX,members,0) as any).variables);
        } )());
    }

    test_computeValues_value_depends_on_enum() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let source : any = this.addSource('enum E { id0, id1 }\nconst E e = E.id0;\n');
            let libraryElement : any = this.resolve2(source);
            let unit : any = this.analysisContext.resolveCompilationUnit(source,libraryElement);
            expect(unit,isNotNull);
            let computer : any = this._makeConstantValueComputer();
            computer.add(unit);
            computer.computeValues();
            let declaration : any = unit.declarations.firstWhere((member : any) =>  {
                return is(member, any);
            });
            this._validate(true,declaration.variables);
        } )());
    }

    test_dependencyOnConstructor() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._assertProperDependencies('class A {\n  const A();\n}\nconst x = const A();');
        } )());
    }

    test_dependencyOnConstructorArgument() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._assertProperDependencies('class A {\n  const A(this.next);\n  final A next;\n}\nconst A x = const A(null);\nconst A y = const A(x);');
        } )());
    }

    test_dependencyOnConstructorArgument_unresolvedConstructor() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._assertProperDependencies('class A {\n}\nconst int x = 1;\nconst A y = const A.a(x);',new core.DartList.literal(CompileTimeErrorCode.CONST_WITH_UNDEFINED_CONSTRUCTOR));
        } )());
    }

    test_dependencyOnConstructorInitializer() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._assertProperDependencies('const int x = 1;\nclass A {\n  const A() : v = x;\n  final int v;\n}');
        } )());
    }

    test_dependencyOnExplicitSuperConstructor() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._assertProperDependencies('class A {\n  const A(this.x);\n  final int x;\n}\nclass B extends A {\n  const B() : super(5);\n}\nconst B b = const B();');
        } )());
    }

    test_dependencyOnExplicitSuperConstructorParameters() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._assertProperDependencies('class A {\n  const A(this.x);\n  final int x;\n}\nclass B extends A {\n  const B() : super(i);\n}\nconst B b = const B();\nconst int i = 5;');
        } )());
    }

    test_dependencyOnFactoryRedirect() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._assertProperDependencies('const A a = const A.foo();\nclass A {\n  factory const A.foo() = A.bar;\n  const A.bar();\n}');
        } )());
    }

    test_dependencyOnFactoryRedirectWithTypeParams() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._assertProperDependencies('class A {\n  const factory A(var a) = B<int>;\n}\n\nclass B<T> implements A {\n  final T x;\n  const B(this.x);\n}\n\nconst A a = const A(10);');
        } )());
    }

    test_dependencyOnImplicitSuperConstructor() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._assertProperDependencies('class A {\n  const A() : x = 5;\n  final int x;\n}\nclass B extends A {\n  const B();\n}\nconst B b = const B();');
        } )());
    }

    test_dependencyOnInitializedFinal() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._assertProperDependencies('class A {\n  const A();\n  final int x = 1;\n}\nconst A a = const A();\n');
        } )());
    }

    test_dependencyOnInitializedNonStaticConst() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._assertProperDependencies('class A {\n  const A();\n  const int x = 1;\n}\nconst A a = const A();\n',new core.DartList.literal(CompileTimeErrorCode.CONST_INSTANCE_FIELD));
        } )());
    }

    test_dependencyOnNonFactoryRedirect() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._assertProperDependencies('const A a = const A.foo();\nclass A {\n  const A.foo() : this.bar();\n  const A.bar();\n}');
        } )());
    }

    test_dependencyOnNonFactoryRedirect_arg() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._assertProperDependencies('const A a = const A.foo();\nconst int b = 1;\nclass A {\n  const A.foo() : this.bar(b);\n  const A.bar(x) : y = x;\n  final int y;\n}');
        } )());
    }

    test_dependencyOnNonFactoryRedirect_defaultValue() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._assertProperDependencies('const A a = const A.foo();\nconst int b = 1;\nclass A {\n  const A.foo() : this.bar();\n  const A.bar([x = b]) : y = x;\n  final int y;\n}');
        } )());
    }

    test_dependencyOnNonFactoryRedirect_toMissing() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._assertProperDependencies('const A a = const A.foo();\nclass A {\n  const A.foo() : this.bar();\n}',new core.DartList.literal(CompileTimeErrorCode.REDIRECT_GENERATIVE_TO_MISSING_CONSTRUCTOR));
        } )());
    }

    test_dependencyOnNonFactoryRedirect_toNonConst() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._assertProperDependencies('const A a = const A.foo();\nclass A {\n  const A.foo() : this.bar();\n  A.bar();\n}');
        } )());
    }

    test_dependencyOnNonFactoryRedirect_unnamed() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._assertProperDependencies('const A a = const A.foo();\nclass A {\n  const A.foo() : this();\n  const A();\n}');
        } )());
    }

    test_dependencyOnOptionalParameterDefault() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._assertProperDependencies('class A {\n  const A([x = const B()]) : b = x;\n  final B b;\n}\nclass B {\n  const B();\n}\nconst A a = const A();');
        } )());
    }

    test_dependencyOnVariable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._assertProperDependencies('const x = y + 1;\nconst y = 2;');
        } )());
    }

    test_final_initialized_at_declaration() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let compilationUnit : any = await this.resolveSource('class A {\n  final int i = 123;\n  const A();\n}\n\nconst A a = const A();\n');
            let result : any = this._evaluateTopLevelVariable(compilationUnit,'a');
            let fields : core.DartMap<string,any> = this._assertType(result,"A");
            expect(fields,hasLength(1));
            this._assertIntField(fields,"i",123);
        } )());
    }

    test_fromEnvironment_bool_default_false() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            expect(this._assertValidBool(await this._check_fromEnvironment_bool(null,"false")),false);
        } )());
    }

    test_fromEnvironment_bool_default_overridden() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            expect(this._assertValidBool(await this._check_fromEnvironment_bool("false","true")),false);
        } )());
    }

    test_fromEnvironment_bool_default_parseError() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            expect(this._assertValidBool(await this._check_fromEnvironment_bool("parseError","true")),true);
        } )());
    }

    test_fromEnvironment_bool_default_true() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            expect(this._assertValidBool(await this._check_fromEnvironment_bool(null,"true")),true);
        } )());
    }

    test_fromEnvironment_bool_false() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            expect(this._assertValidBool(await this._check_fromEnvironment_bool("false",null)),false);
        } )());
    }

    test_fromEnvironment_bool_parseError() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            expect(this._assertValidBool(await this._check_fromEnvironment_bool("parseError",null)),false);
        } )());
    }

    test_fromEnvironment_bool_true() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            expect(this._assertValidBool(await this._check_fromEnvironment_bool("true",null)),true);
        } )());
    }

    test_fromEnvironment_bool_undeclared() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertValidUnknown(await this._check_fromEnvironment_bool(null,null));
        } )());
    }

    test_fromEnvironment_int_default_overridden() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            expect(this._assertValidInt(await this._check_fromEnvironment_int("234","123")),234);
        } )());
    }

    test_fromEnvironment_int_default_parseError() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            expect(this._assertValidInt(await this._check_fromEnvironment_int("parseError","123")),123);
        } )());
    }

    test_fromEnvironment_int_default_undeclared() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            expect(this._assertValidInt(await this._check_fromEnvironment_int(null,"123")),123);
        } )());
    }

    test_fromEnvironment_int_ok() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            expect(this._assertValidInt(await this._check_fromEnvironment_int("234",null)),234);
        } )());
    }

    test_fromEnvironment_int_parseError() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertValidNull(await this._check_fromEnvironment_int("parseError",null));
        } )());
    }

    test_fromEnvironment_int_parseError_nullDefault() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertValidNull(await this._check_fromEnvironment_int("parseError","null"));
        } )());
    }

    test_fromEnvironment_int_undeclared() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertValidUnknown(await this._check_fromEnvironment_int(null,null));
        } )());
    }

    test_fromEnvironment_int_undeclared_nullDefault() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertValidNull(await this._check_fromEnvironment_int(null,"null"));
        } )());
    }

    test_fromEnvironment_string_default_overridden() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            expect(this._assertValidString(await this._check_fromEnvironment_string("abc","'def'")),"abc");
        } )());
    }

    test_fromEnvironment_string_default_undeclared() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            expect(this._assertValidString(await this._check_fromEnvironment_string(null,"'def'")),"def");
        } )());
    }

    test_fromEnvironment_string_empty() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            expect(this._assertValidString(await this._check_fromEnvironment_string("",null)),"");
        } )());
    }

    test_fromEnvironment_string_ok() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            expect(this._assertValidString(await this._check_fromEnvironment_string("abc",null)),"abc");
        } )());
    }

    test_fromEnvironment_string_undeclared() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertValidUnknown(await this._check_fromEnvironment_string(null,null));
        } )());
    }

    test_fromEnvironment_string_undeclared_nullDefault() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._assertValidNull(await this._check_fromEnvironment_string(null,"null"));
        } )());
    }

    test_getConstructor_redirectingFactory() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let compilationUnit : any = await this.resolveSource('class A {\n  factory const A() = B;\n}\n\nclass B implements A {\n  const B();\n}\n\nclass C {\n  @A()\n  f() {}\n}\n');
            let result : any = this._evaluateAnnotation(compilationUnit,"C","f");
            expect(result.value.getInvocation().constructor.isFactory,isTrue);
        } )());
    }

    test_getConstructor_withArgs() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let compilationUnit : any = await this.resolveSource('class A {\n  final int i;\n  const A(this.i);\n}\n\nclass C {\n  @A(5)\n  f() {}\n}\n');
            let result : any = this._evaluateAnnotation(compilationUnit,"C","f");
            let invocation : any = result.value.getInvocation();
            expect(invocation.constructor,isNotNull);
            expect(invocation.positionalArguments,hasLength(1));
            expect(invocation.positionalArguments.single.toIntValue(),5);
            expect(invocation.namedArguments,isEmpty);
        } )());
    }

    test_getConstructor_withNamedArgs() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let compilationUnit : any = await this.resolveSource('class A {\n  final int i;\n  const A({this.i});\n}\n\nclass C {\n  @A(i: 5)\n  f() {}\n}\n');
            let result : any = this._evaluateAnnotation(compilationUnit,"C","f");
            let invocation : any = result.value.getInvocation();
            expect(invocation.constructor,isNotNull);
            expect(invocation.positionalArguments,isEmpty);
            expect(invocation.namedArguments,isNotEmpty);
            expect(op(Op.INDEX,invocation.namedArguments,'i').toIntValue(),5);
        } )());
    }

    test_instanceCreationExpression_computedField() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let compilationUnit : any = await this.resolveSource('const foo = const A(4, 5);\nclass A {\n  const A(int i, int j) : k = 2 * i + j;\n  final int k;\n}');
            let result : any = this._evaluateTopLevelVariable(compilationUnit,"foo");
            let fields : core.DartMap<string,any> = this._assertType(result,"A");
            expect(fields,hasLength(1));
            this._assertIntField(fields,"k",13);
        } )());
    }

    test_instanceCreationExpression_computedField_namedOptionalWithDefault() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._checkInstanceCreationOptionalParams(false,true,true);
        } )());
    }

    test_instanceCreationExpression_computedField_namedOptionalWithoutDefault() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._checkInstanceCreationOptionalParams(false,true,false);
        } )());
    }

    test_instanceCreationExpression_computedField_unnamedOptionalWithDefault() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._checkInstanceCreationOptionalParams(false,false,true);
        } )());
    }

    test_instanceCreationExpression_computedField_unnamedOptionalWithoutDefault() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._checkInstanceCreationOptionalParams(false,false,false);
        } )());
    }

    test_instanceCreationExpression_computedField_usesConstConstructor() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let compilationUnit : any = await this.resolveSource('const foo = const A(3);\nclass A {\n  const A(int i) : b = const B(4);\n  final int b;\n}\nclass B {\n  const B(this.k);\n  final int k;\n}');
            let result : any = this._evaluateTopLevelVariable(compilationUnit,"foo");
            let fieldsOfA : core.DartMap<string,any> = this._assertType(result,"A");
            expect(fieldsOfA,hasLength(1));
            let fieldsOfB : core.DartMap<string,any> = this._assertFieldType(fieldsOfA,"b","B");
            expect(fieldsOfB,hasLength(1));
            this._assertIntField(fieldsOfB,"k",4);
        } )());
    }

    test_instanceCreationExpression_computedField_usesStaticConst() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let compilationUnit : any = await this.resolveSource('const foo = const A(3);\nclass A {\n  const A(int i) : k = i + B.bar;\n  final int k;\n}\nclass B {\n  static const bar = 4;\n}');
            let result : any = this._evaluateTopLevelVariable(compilationUnit,"foo");
            let fields : core.DartMap<string,any> = this._assertType(result,"A");
            expect(fields,hasLength(1));
            this._assertIntField(fields,"k",7);
        } )());
    }

    test_instanceCreationExpression_computedField_usesTopLevelConst() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let compilationUnit : any = await this.resolveSource('const foo = const A(3);\nconst bar = 4;\nclass A {\n  const A(int i) : k = i + bar;\n  final int k;\n}');
            let result : any = this._evaluateTopLevelVariable(compilationUnit,"foo");
            let fields : core.DartMap<string,any> = this._assertType(result,"A");
            expect(fields,hasLength(1));
            this._assertIntField(fields,"k",7);
        } )());
    }

    test_instanceCreationExpression_explicitSuper() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let compilationUnit : any = await this.resolveSource('const foo = const B(4, 5);\nclass A {\n  const A(this.x);\n  final int x;\n}\nclass B extends A {\n  const B(int x, this.y) : super(x * 2);\n  final int y;\n}');
            let result : any = this._evaluateTopLevelVariable(compilationUnit,"foo");
            let fields : core.DartMap<string,any> = this._assertType(result,"B");
            expect(fields,hasLength(2));
            this._assertIntField(fields,"y",5);
            let superclassFields : core.DartMap<string,any> = this._assertFieldType(fields,GenericState.SUPERCLASS_FIELD,"A");
            expect(superclassFields,hasLength(1));
            this._assertIntField(superclassFields,"x",8);
        } )());
    }

    test_instanceCreationExpression_fieldFormalParameter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let compilationUnit : any = await this.resolveSource('const foo = const A(42);\nclass A {\n  int x;\n  const A(this.x)\n}');
            let result : any = this._evaluateTopLevelVariable(compilationUnit,"foo");
            let fields : core.DartMap<string,any> = this._assertType(result,"A");
            expect(fields,hasLength(1));
            this._assertIntField(fields,"x",42);
        } )());
    }

    test_instanceCreationExpression_fieldFormalParameter_namedOptionalWithDefault() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._checkInstanceCreationOptionalParams(true,true,true);
        } )());
    }

    test_instanceCreationExpression_fieldFormalParameter_namedOptionalWithoutDefault() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._checkInstanceCreationOptionalParams(true,true,false);
        } )());
    }

    test_instanceCreationExpression_fieldFormalParameter_unnamedOptionalWithDefault() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._checkInstanceCreationOptionalParams(true,false,true);
        } )());
    }

    test_instanceCreationExpression_fieldFormalParameter_unnamedOptionalWithoutDefault() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._checkInstanceCreationOptionalParams(true,false,false);
        } )());
    }

    test_instanceCreationExpression_implicitSuper() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let compilationUnit : any = await this.resolveSource('const foo = const B(4);\nclass A {\n  const A() : x = 3;\n  final int x;\n}\nclass B extends A {\n  const B(this.y);\n  final int y;\n}');
            let result : any = this._evaluateTopLevelVariable(compilationUnit,"foo");
            let fields : core.DartMap<string,any> = this._assertType(result,"B");
            expect(fields,hasLength(2));
            this._assertIntField(fields,"y",4);
            let superclassFields : core.DartMap<string,any> = this._assertFieldType(fields,GenericState.SUPERCLASS_FIELD,"A");
            expect(superclassFields,hasLength(1));
            this._assertIntField(superclassFields,"x",3);
        } )());
    }

    test_instanceCreationExpression_nonFactoryRedirect() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let compilationUnit : any = await this.resolveSource('const foo = const A.a1();\nclass A {\n  const A.a1() : this.a2();\n  const A.a2() : x = 5;\n  final int x;\n}');
            let aFields : core.DartMap<string,any> = this._assertType(this._evaluateTopLevelVariable(compilationUnit,"foo"),"A");
            this._assertIntField(aFields,'x',5);
        } )());
    }

    test_instanceCreationExpression_nonFactoryRedirect_arg() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let compilationUnit : any = await this.resolveSource('const foo = const A.a1(1);\nclass A {\n  const A.a1(x) : this.a2(x + 100);\n  const A.a2(x) : y = x + 10;\n  final int y;\n}');
            let aFields : core.DartMap<string,any> = this._assertType(this._evaluateTopLevelVariable(compilationUnit,"foo"),"A");
            this._assertIntField(aFields,'y',111);
        } )());
    }

    test_instanceCreationExpression_nonFactoryRedirect_cycle() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let compilationUnit : any = await this.resolveSource('const foo = const A();\nclass A {\n  const A() : this.b();\n  const A.b() : this();\n}');
            this._assertValidUnknown(this._evaluateTopLevelVariable(compilationUnit,"foo"));
        } )());
    }

    test_instanceCreationExpression_nonFactoryRedirect_defaultArg() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let compilationUnit : any = await this.resolveSource('const foo = const A.a1();\nclass A {\n  const A.a1() : this.a2();\n  const A.a2([x = 100]) : y = x + 10;\n  final int y;\n}');
            let aFields : core.DartMap<string,any> = this._assertType(this._evaluateTopLevelVariable(compilationUnit,"foo"),"A");
            this._assertIntField(aFields,'y',110);
        } )());
    }

    test_instanceCreationExpression_nonFactoryRedirect_toMissing() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let compilationUnit : any = await this.resolveSource('const foo = const A.a1();\nclass A {\n  const A.a1() : this.a2();\n}');
            this._assertType(this._evaluateTopLevelVariable(compilationUnit,"foo"),"A");
        } )());
    }

    test_instanceCreationExpression_nonFactoryRedirect_toNonConst() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let compilationUnit : any = await this.resolveSource('const foo = const A.a1();\nclass A {\n  const A.a1() : this.a2();\n  A.a2();\n}');
            this._assertType(this._evaluateTopLevelVariable(compilationUnit,"foo"),"A");
        } )());
    }

    test_instanceCreationExpression_nonFactoryRedirect_unnamed() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let compilationUnit : any = await this.resolveSource('const foo = const A.a1();\nclass A {\n  const A.a1() : this();\n  const A() : x = 5;\n  final int x;\n}');
            let aFields : core.DartMap<string,any> = this._assertType(this._evaluateTopLevelVariable(compilationUnit,"foo"),"A");
            this._assertIntField(aFields,'x',5);
        } )());
    }

    test_instanceCreationExpression_redirect() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let compilationUnit : any = await this.resolveSource('const foo = const A();\nclass A {\n  const factory A() = B;\n}\nclass B implements A {\n  const B();\n}');
            this._assertType(this._evaluateTopLevelVariable(compilationUnit,"foo"),"B");
        } )());
    }

    test_instanceCreationExpression_redirect_cycle() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let compilationUnit : any = await this.resolveSource('const foo = const A();\nclass A {\n  const factory A() = A.b;\n  const factory A.b() = A;\n}');
            this._assertValidUnknown(this._evaluateTopLevelVariable(compilationUnit,"foo"));
        } )());
    }

    test_instanceCreationExpression_redirect_external() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let compilationUnit : any = await this.resolveSource('const foo = const A();\nclass A {\n  external const factory A();\n}');
            this._assertValidUnknown(this._evaluateTopLevelVariable(compilationUnit,"foo"));
        } )());
    }

    test_instanceCreationExpression_redirect_generic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let compilationUnit : any = await this.resolveSource('const foo = const A<int>();\nclass A<T> {\n  const A() : this._();\n  const A._();\n}\n');
            this._assertType(this._evaluateTopLevelVariable(compilationUnit,'foo'),'A<int>');
        } )());
    }

    test_instanceCreationExpression_redirect_nonConst() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let compilationUnit : any = await this.resolveSource('const foo = const A();\nclass A {\n  const factory A() = A.b;\n  A.b();\n}');
            this._assertValidUnknown(this._evaluateTopLevelVariable(compilationUnit,"foo"));
        } )());
    }

    test_instanceCreationExpression_redirectWithTypeParams() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let compilationUnit : any = await this.resolveSource('class A {\n  const factory A(var a) = B<int>;\n}\n\nclass B<T> implements A {\n  final T x;\n  const B(this.x);\n}\n\nconst A a = const A(10);');
            let result : any = this._evaluateTopLevelVariable(compilationUnit,"a");
            let fields : core.DartMap<string,any> = this._assertType(result,"B<int>");
            expect(fields,hasLength(1));
            this._assertIntField(fields,"x",10);
        } )());
    }

    test_instanceCreationExpression_redirectWithTypeSubstitution() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let compilationUnit : any = await this.resolveSource('class A<T> {\n  const factory A(var a) = B<T>;\n}\n\nclass B<U> implements A {\n  final U x;\n  const B(this.x);\n}\n\nconst A<int> a = const A<int>(10);');
            let result : any = this._evaluateTopLevelVariable(compilationUnit,"a");
            let fields : core.DartMap<string,any> = this._assertType(result,"B<int>");
            expect(fields,hasLength(1));
            this._assertIntField(fields,"x",10);
        } )());
    }

    test_instanceCreationExpression_symbol() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let compilationUnit : any = await this.resolveSource("const foo = const Symbol('a');");
            let evaluationResult : any = this._evaluateTopLevelVariable(compilationUnit,"foo");
            expect(evaluationResult.value,isNotNull);
            let value : any = evaluationResult.value;
            expect(value.type,this.typeProvider.symbolType);
            expect(value.toSymbolValue(),"a");
        } )());
    }

    test_instanceCreationExpression_withSupertypeParams_explicit() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._checkInstanceCreation_withSupertypeParams(true);
        } )());
    }

    test_instanceCreationExpression_withSupertypeParams_implicit() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._checkInstanceCreation_withSupertypeParams(false);
        } )());
    }

    test_instanceCreationExpression_withTypeParams() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let compilationUnit : any = await this.resolveSource('class C<E> {\n  const C();\n}\nconst c_int = const C<int>();\nconst c_num = const C<num>();');
            let c_int : any = this._evaluateTopLevelVariable(compilationUnit,"c_int");
            this._assertType(c_int,"C<int>");
            let c_int_value : any = c_int.value;
            let c_num : any = this._evaluateTopLevelVariable(compilationUnit,"c_num");
            this._assertType(c_num,"C<num>");
            let c_num_value : any = c_num.value;
            expect(op(Op.EQUALS,c_int_value,c_num_value),isFalse);
        } )());
    }

    test_isValidSymbol() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            expect(ConstantEvaluationEngine.isValidPublicSymbol(""),isTrue);
            expect(ConstantEvaluationEngine.isValidPublicSymbol("foo"),isTrue);
            expect(ConstantEvaluationEngine.isValidPublicSymbol("foo.bar"),isTrue);
            expect(ConstantEvaluationEngine.isValidPublicSymbol("foo$"),isTrue);
            expect(ConstantEvaluationEngine.isValidPublicSymbol("foo$bar"),isTrue);
            expect(ConstantEvaluationEngine.isValidPublicSymbol("iff"),isTrue);
            expect(ConstantEvaluationEngine.isValidPublicSymbol("gif"),isTrue);
            expect(ConstantEvaluationEngine.isValidPublicSymbol("if$"),isTrue);
            expect(ConstantEvaluationEngine.isValidPublicSymbol("$if"),isTrue);
            expect(ConstantEvaluationEngine.isValidPublicSymbol("foo="),isTrue);
            expect(ConstantEvaluationEngine.isValidPublicSymbol("foo.bar="),isTrue);
            expect(ConstantEvaluationEngine.isValidPublicSymbol("foo.+"),isTrue);
            expect(ConstantEvaluationEngine.isValidPublicSymbol("void"),isTrue);
            expect(ConstantEvaluationEngine.isValidPublicSymbol("_foo"),isFalse);
            expect(ConstantEvaluationEngine.isValidPublicSymbol("_foo.bar"),isFalse);
            expect(ConstantEvaluationEngine.isValidPublicSymbol("foo._bar"),isFalse);
            expect(ConstantEvaluationEngine.isValidPublicSymbol("if"),isFalse);
            expect(ConstantEvaluationEngine.isValidPublicSymbol("if.foo"),isFalse);
            expect(ConstantEvaluationEngine.isValidPublicSymbol("foo.if"),isFalse);
            expect(ConstantEvaluationEngine.isValidPublicSymbol("foo=.bar"),isFalse);
            expect(ConstantEvaluationEngine.isValidPublicSymbol("foo."),isFalse);
            expect(ConstantEvaluationEngine.isValidPublicSymbol("+.foo"),isFalse);
            expect(ConstantEvaluationEngine.isValidPublicSymbol("void.foo"),isFalse);
            expect(ConstantEvaluationEngine.isValidPublicSymbol("foo.void"),isFalse);
        } )());
    }

    test_length_of_improperly_typed_string_expression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let compilationUnit : any = await this.resolveSource('const int s1 = \'alpha\';\nconst int s2 = \'beta\';\nconst int i = (true ? s1 : s2).length;\n');
            let element : any = this.findTopLevelDeclaration(compilationUnit,'i').element;
            let result : any = element.evaluationResult;
            expect(this._assertValidInt(result),5);
        } )());
    }

    test_length_of_improperly_typed_string_identifier() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let compilationUnit : any = await this.resolveSource('const int s = \'alpha\';\nconst int i = s.length;\n');
            let element : any = this.findTopLevelDeclaration(compilationUnit,'i').element;
            let result : any = element.evaluationResult;
            expect(this._assertValidInt(result),5);
        } )());
    }

    test_non_static_const_initialized_at_declaration() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let compilationUnit : any = await this.resolveSource('class A {\n  const int i = 123;\n  const A();\n}\n\nconst A a = const A();\n');
            let result : any = this._evaluateTopLevelVariable(compilationUnit,'a');
            let fields : core.DartMap<string,any> = this._assertType(result,"A");
            expect(fields,hasLength(1));
            this._assertIntField(fields,"i",123);
        } )());
    }

    test_symbolLiteral_void() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let compilationUnit : any = await this.resolveSource("const voidSymbol = #void;");
            let voidSymbol : any = this.findTopLevelDeclaration(compilationUnit,"voidSymbol");
            let voidSymbolResult : any = (voidSymbol.element as any).evaluationResult;
            let value : any = voidSymbolResult.value;
            expect(value.type,this.typeProvider.symbolType);
            expect(value.toSymbolValue(),"void");
        } )());
    }

    _assertFieldType(fields : core.DartMap<string,any>,fieldName : string,expectedType : string) : core.DartMap<string,any> {
        let field : any = fields.get(fieldName);
        expect(field.type.displayName,expectedType);
        return field.fields;
    }
    _assertIntField(fields : core.DartMap<string,any>,fieldName : string,expectedValue : number) : void {
        let field : any = fields.get(fieldName);
        expect(field.type.name,"int");
        expect(field.toIntValue(),expectedValue);
    }
    _assertNullField(fields : core.DartMap<string,any>,fieldName : string) : void {
        let field : any = fields.get(fieldName);
        expect(field.isNull,isTrue);
    }
    _assertProperDependencies(sourceText : string,expectedErrorCodes? : core.DartList<any>) : async.Future<core.Null> { 
        return new async.Future.fromPromise(( async () =>  {
            expectedErrorCodes = expectedErrorCodes || new core.DartList.literal<any>();
            let source : any = this.addSource(sourceText);
            let element : any = this.resolve2(source);
            let unit : any = this.analysisContext.resolveCompilationUnit(source,element);
            expect(unit,isNotNull);
            let computer : any = this._makeConstantValueComputer();
            computer.add(unit);
            computer.computeValues();
            await this.computeAnalysisResult(source);
            this.assertErrors(source,expectedErrorCodes);
        } )());
    }

    _assertType(result : any,typeName : string) : core.DartMap<string,any> {
        expect(result.value,isNotNull);
        let value : any = result.value;
        expect(value.type.displayName,typeName);
        return value.fields;
    }
    _assertValidBool(result : any) : boolean {
        expect(result.value,isNotNull);
        let value : any = result.value;
        expect(value.type,this.typeProvider.boolType);
        let boolValue : boolean = value.toBoolValue();
        expect(boolValue,isNotNull);
        return boolValue;
    }
    _assertValidInt(result : any) : number {
        expect(result,isNotNull);
        expect(result.value,isNotNull);
        let value : any = result.value;
        expect(value.type,this.typeProvider.intType);
        return value.toIntValue();
    }
    _assertValidNull(result : any) : void {
        expect(result.value,isNotNull);
        let value : any = result.value;
        expect(value.type,this.typeProvider.nullType);
    }
    _assertValidString(result : any) : string {
        expect(result.value,isNotNull);
        let value : any = result.value;
        expect(value.type,this.typeProvider.stringType);
        return value.toStringValue();
    }
    _assertValidUnknown(result : any) : void {
        expect(result.value,isNotNull);
        let value : any = result.value;
        expect(value.isUnknown,isTrue);
    }
    _check_fromEnvironment_bool(valueInEnvironment : string,defaultExpr : string) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let envVarName : string = "x";
            let varName : string = "foo";
            if (valueInEnvironment != null) {
                if (this.enableNewAnalysisDriver) {
                    this.driver.declaredVariables.define(envVarName,valueInEnvironment);
                }else {
                    this.analysisContext2.declaredVariables.define(envVarName,valueInEnvironment);
                }
            }
            let defaultArg : string = defaultExpr == null ? "" : `, defaultValue: ${defaultExpr}`;
            let compilationUnit : any = await this.resolveSource(`const ${varName} = const bool.fromEnvironment('${envVarName}'${defaultArg});`);
            return this._evaluateTopLevelVariable(compilationUnit,varName);
        } )());
    }

    _check_fromEnvironment_int(valueInEnvironment : string,defaultExpr : string) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let envVarName : string = "x";
            let varName : string = "foo";
            if (valueInEnvironment != null) {
                if (this.enableNewAnalysisDriver) {
                    this.driver.declaredVariables.define(envVarName,valueInEnvironment);
                }else {
                    this.analysisContext2.declaredVariables.define(envVarName,valueInEnvironment);
                }
            }
            let defaultArg : string = defaultExpr == null ? "" : `, defaultValue: ${defaultExpr}`;
            let compilationUnit : any = await this.resolveSource(`const ${varName} = const int.fromEnvironment('${envVarName}'${defaultArg});`);
            return this._evaluateTopLevelVariable(compilationUnit,varName);
        } )());
    }

    _check_fromEnvironment_string(valueInEnvironment : string,defaultExpr : string) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let envVarName : string = "x";
            let varName : string = "foo";
            if (valueInEnvironment != null) {
                if (this.enableNewAnalysisDriver) {
                    this.driver.declaredVariables.define(envVarName,valueInEnvironment);
                }else {
                    this.analysisContext2.declaredVariables.define(envVarName,valueInEnvironment);
                }
            }
            let defaultArg : string = defaultExpr == null ? "" : `, defaultValue: ${defaultExpr}`;
            let compilationUnit : any = await this.resolveSource(`const ${varName} = const String.fromEnvironment('${envVarName}'${defaultArg});`);
            return this._evaluateTopLevelVariable(compilationUnit,varName);
        } )());
    }

    _checkInstanceCreation_withSupertypeParams(isExplicit : boolean) : async.Future<core.Null> { 
        return new async.Future.fromPromise(( async () =>  {
            let superCall : string = isExplicit ? " : super()" : "";
            let compilationUnit : any = await this.resolveSource(`class A<T> {\n  const A();\n}\nclass B<T, U> extends A<T> {\n  const B()${superCall};\n}\nclass C<T, U> extends A<U> {\n  const C()${superCall};\n}\nconst b_int_num = const B<int, num>();\nconst c_int_num = const C<int, num>();`);
            let b_int_num : any = this._evaluateTopLevelVariable(compilationUnit,"b_int_num");
            let b_int_num_fields : core.DartMap<string,any> = this._assertType(b_int_num,"B<int, num>");
            this._assertFieldType(b_int_num_fields,GenericState.SUPERCLASS_FIELD,"A<int>");
            let c_int_num : any = this._evaluateTopLevelVariable(compilationUnit,"c_int_num");
            let c_int_num_fields : core.DartMap<string,any> = this._assertType(c_int_num,"C<int, num>");
            this._assertFieldType(c_int_num_fields,GenericState.SUPERCLASS_FIELD,"A<num>");
        } )());
    }

    _checkInstanceCreationOptionalParams(isFieldFormal : boolean,isNamed : boolean,hasDefault : boolean) : async.Future<core.Null> { 
        return new async.Future.fromPromise(( async () =>  {
            let fieldName : string = "j";
            let paramName : string = isFieldFormal ? fieldName : "i";
            let formalParam : string = `${isFieldFormal ? "this." : "int "}${paramName}${hasDefault ? " = 3" : ""}`;
            let compilationUnit : any = await this.resolveSource(`const x = const A();\nconst y = const A(${isNamed ? `${paramName}: ` : ''}10);\nclass A {\n  const A(${isNamed ? `{${formalParam}}` : `[${formalParam}]`})${isFieldFormal ? "" : ` : ${fieldName} = ${paramName}`};\n  final int ${fieldName};\n}`);
            let x : any = this._evaluateTopLevelVariable(compilationUnit,"x");
            let fieldsOfX : core.DartMap<string,any> = this._assertType(x,"A");
            expect(fieldsOfX,hasLength(1));
            if (hasDefault) {
                this._assertIntField(fieldsOfX,fieldName,3);
            }else {
                this._assertNullField(fieldsOfX,fieldName);
            }
            let y : any = this._evaluateTopLevelVariable(compilationUnit,"y");
            let fieldsOfY : core.DartMap<string,any> = this._assertType(y,"A");
            expect(fieldsOfY,hasLength(1));
            this._assertIntField(fieldsOfY,fieldName,10);
        } )());
    }

    _evaluateAnnotation(compilationUnit : any,className : string,memberName : string) : any {
        for(let member of compilationUnit.declarations) {
            if (is(member, any) && op(Op.EQUALS,member.name.name,className)) {
                for(let classMember of member.members) {
                    if (is(classMember, any) && op(Op.EQUALS,classMember.name.name,memberName)) {
                        expect(classMember.metadata,hasLength(1));
                        let elementAnnotation : any = op(Op.INDEX,classMember.metadata,0).elementAnnotation;
                        return elementAnnotation.evaluationResult;
                    }
                }
            }
        }
        fail('Class member not found');
        return null;
    }
    _evaluateTopLevelVariable(compilationUnit : any,name : string) : any {
        let varDecl : any = this.findTopLevelDeclaration(compilationUnit,name);
        let varElement : any = varDecl.element;
        return varElement.evaluationResult;
    }
    _makeConstantValueComputer() : any {
        let validator : ConstantEvaluationValidator_ForTest = new ConstantEvaluationValidator_ForTest(this.analysisContext2);
        validator.computer = new bare.createInstance(any,null,this.analysisContext2.typeProvider,this.analysisContext2.declaredVariables,validator,this.analysisContext2.typeSystem);
        return validator.computer;
    }
    _validate(shouldBeValid : boolean,declarationList : any) : void {
        for(let declaration of declarationList.variables) {
            let element : any = declaration.element as any;
            expect(element,isNotNull);
            let result : any = element.evaluationResult;
            if (shouldBeValid) {
                expect(result.value,isNotNull);
            }else {
                expect(result.value,isNull);
            }
        }
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ConstantValueComputerTest() {
    }
}

export namespace ConstantVisitorTest {
    export type Constructors = lib3.ResolverTestCase.Constructors | 'ConstantVisitorTest';
    export type Interface = Omit<ConstantVisitorTest, Constructors>;
}
@DartClass
export class ConstantVisitorTest extends lib3.ResolverTestCase {
    test_visitBinaryExpression_questionQuestion_notNull_notNull() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let left : any = AstTestFactory.string2('a');
            let right : any = AstTestFactory.string2('b');
            let expression : any = AstTestFactory.binaryExpression(left,TokenType.QUESTION_QUESTION,right);
            let errorListener : lib4.GatheringErrorListener = new lib4.GatheringErrorListener();
            let errorReporter : any = new bare.createInstance(any,null,errorListener,this._dummySource());
            let result : any = this._evaluate(expression,errorReporter);
            expect(result,isNotNull);
            expect(result.isNull,isFalse);
            expect(result.toStringValue(),'a');
            errorListener.assertNoErrors();
        } )());
    }

    test_visitBinaryExpression_questionQuestion_null_notNull() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let left : any = AstTestFactory.nullLiteral();
            let right : any = AstTestFactory.string2('b');
            let expression : any = AstTestFactory.binaryExpression(left,TokenType.QUESTION_QUESTION,right);
            let errorListener : lib4.GatheringErrorListener = new lib4.GatheringErrorListener();
            let errorReporter : any = new bare.createInstance(any,null,errorListener,this._dummySource());
            let result : any = this._evaluate(expression,errorReporter);
            expect(result,isNotNull);
            expect(result.isNull,isFalse);
            expect(result.toStringValue(),'b');
            errorListener.assertNoErrors();
        } )());
    }

    test_visitBinaryExpression_questionQuestion_null_null() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let left : any = AstTestFactory.nullLiteral();
            let right : any = AstTestFactory.nullLiteral();
            let expression : any = AstTestFactory.binaryExpression(left,TokenType.QUESTION_QUESTION,right);
            let errorListener : lib4.GatheringErrorListener = new lib4.GatheringErrorListener();
            let errorReporter : any = new bare.createInstance(any,null,errorListener,this._dummySource());
            let result : any = this._evaluate(expression,errorReporter);
            expect(result,isNotNull);
            expect(result.isNull,isTrue);
            errorListener.assertNoErrors();
        } )());
    }

    test_visitConditionalExpression_false() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let thenExpression : any = AstTestFactory.integer(1);
            let elseExpression : any = AstTestFactory.integer(0);
            let expression : any = AstTestFactory.conditionalExpression(AstTestFactory.booleanLiteral(false),thenExpression,elseExpression);
            let errorListener : lib4.GatheringErrorListener = new lib4.GatheringErrorListener();
            let errorReporter : any = new bare.createInstance(any,null,errorListener,this._dummySource());
            this._assertValue(0,this._evaluate(expression,errorReporter));
            errorListener.assertNoErrors();
        } )());
    }

    test_visitConditionalExpression_nonBooleanCondition() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let thenExpression : any = AstTestFactory.integer(1);
            let elseExpression : any = AstTestFactory.integer(0);
            let conditionExpression : any = AstTestFactory.nullLiteral();
            let expression : any = AstTestFactory.conditionalExpression(conditionExpression,thenExpression,elseExpression);
            let errorListener : lib4.GatheringErrorListener = new lib4.GatheringErrorListener();
            let errorReporter : any = new bare.createInstance(any,null,errorListener,this._dummySource());
            let result : any = this._evaluate(expression,errorReporter);
            expect(result,isNull);
            errorListener.assertErrorsWithCodes(new core.DartList.literal(CompileTimeErrorCode.CONST_EVAL_TYPE_BOOL));
        } )());
    }

    test_visitConditionalExpression_nonConstantElse() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let thenExpression : any = AstTestFactory.integer(1);
            let elseExpression : any = AstTestFactory.identifier3("x");
            let expression : any = AstTestFactory.conditionalExpression(AstTestFactory.booleanLiteral(true),thenExpression,elseExpression);
            let errorListener : lib4.GatheringErrorListener = new lib4.GatheringErrorListener();
            let errorReporter : any = new bare.createInstance(any,null,errorListener,this._dummySource());
            let result : any = this._evaluate(expression,errorReporter);
            expect(result,isNull);
            errorListener.assertErrorsWithCodes(new core.DartList.literal(CompileTimeErrorCode.INVALID_CONSTANT));
        } )());
    }

    test_visitConditionalExpression_nonConstantThen() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let thenExpression : any = AstTestFactory.identifier3("x");
            let elseExpression : any = AstTestFactory.integer(0);
            let expression : any = AstTestFactory.conditionalExpression(AstTestFactory.booleanLiteral(true),thenExpression,elseExpression);
            let errorListener : lib4.GatheringErrorListener = new lib4.GatheringErrorListener();
            let errorReporter : any = new bare.createInstance(any,null,errorListener,this._dummySource());
            let result : any = this._evaluate(expression,errorReporter);
            expect(result,isNull);
            errorListener.assertErrorsWithCodes(new core.DartList.literal(CompileTimeErrorCode.INVALID_CONSTANT));
        } )());
    }

    test_visitConditionalExpression_true() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let thenExpression : any = AstTestFactory.integer(1);
            let elseExpression : any = AstTestFactory.integer(0);
            let expression : any = AstTestFactory.conditionalExpression(AstTestFactory.booleanLiteral(true),thenExpression,elseExpression);
            let errorListener : lib4.GatheringErrorListener = new lib4.GatheringErrorListener();
            let errorReporter : any = new bare.createInstance(any,null,errorListener,this._dummySource());
            this._assertValue(1,this._evaluate(expression,errorReporter));
            errorListener.assertNoErrors();
        } )());
    }

    test_visitSimpleIdentifier_className() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let compilationUnit : any = await this.resolveSource('const a = C;\nclass C {}\n');
            let result : any = this._evaluateConstant(compilationUnit,'a',null);
            expect(result.type,this.typeProvider.typeType);
            expect(result.toTypeValue().name,'C');
        } )());
    }

    test_visitSimpleIdentifier_dynamic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let compilationUnit : any = await this.resolveSource('const a = dynamic;\n');
            let result : any = this._evaluateConstant(compilationUnit,'a',null);
            expect(result.type,this.typeProvider.typeType);
            expect(result.toTypeValue(),this.typeProvider.dynamicType);
        } )());
    }

    test_visitSimpleIdentifier_inEnvironment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let compilationUnit : any = await this.resolveSource('const a = b;\nconst b = 3;');
            let environment : core.DartMap<string,any> = new core.DartMap<string,any>();
            let six : any = new bare.createInstance(any,null,this.typeProvider.intType,new bare.createInstance(any,null,6));
            environment.set("b",six);
            this._assertValue(6,this._evaluateConstant(compilationUnit,"a",environment));
        } )());
    }

    test_visitSimpleIdentifier_notInEnvironment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let compilationUnit : any = await this.resolveSource('const a = b;\nconst b = 3;');
            let environment : core.DartMap<string,any> = new core.DartMap<string,any>();
            let six : any = new bare.createInstance(any,null,this.typeProvider.intType,new bare.createInstance(any,null,6));
            environment.set("c",six);
            this._assertValue(3,this._evaluateConstant(compilationUnit,"a",environment));
        } )());
    }

    test_visitSimpleIdentifier_withoutEnvironment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let compilationUnit : any = await this.resolveSource('const a = b;\nconst b = 3;');
            this._assertValue(3,this._evaluateConstant(compilationUnit,"a",null));
        } )());
    }

    _assertValue(expectedValue : number,result : any) : void {
        expect(result,isNotNull);
        expect(result.type.name,"int");
        expect(result.toIntValue(),expectedValue);
    }
    _dummySource() : any {
        let path : string = '/test.dart';
        return new bare.createInstance(any,null,path,lib5.toUri(path),UriKind.FILE_URI);
    }
    _evaluate(expression : any,errorReporter : any) : any {
        let typeProvider : any = new bare.createInstance(any,null);
        return expression.accept(new bare.createInstance(any,null,new bare.createInstance(any,null,typeProvider,new bare.createInstance(any,null),{
            typeSystem : new bare.createInstance(any,null,typeProvider)}),errorReporter));
    }
    _evaluateConstant(compilationUnit : any,name : string,lexicalEnvironment : core.DartMap<string,any>) : any {
        let source : any = resolutionMap.elementDeclaredByCompilationUnit(compilationUnit).source;
        let expression : any = this.findTopLevelConstantExpression(compilationUnit,name);
        let errorListener : lib4.GatheringErrorListener = new lib4.GatheringErrorListener();
        let errorReporter : any = new bare.createInstance(any,null,errorListener,source);
        let result : any = expression.accept(new bare.createInstance(any,null,new bare.createInstance(any,null,this.typeProvider,new bare.createInstance(any,null),{
            typeSystem : this.typeSystem}),errorReporter,{
            lexicalEnvironment : lexicalEnvironment}));
        errorListener.assertNoErrors();
        return result;
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ConstantVisitorTest() {
    }
}

export namespace StrongConstantValueComputerTest {
    export type Constructors = ConstantValueComputerTest.Constructors | 'StrongConstantValueComputerTest';
    export type Interface = Omit<StrongConstantValueComputerTest, Constructors>;
}
@DartClass
export class StrongConstantValueComputerTest extends ConstantValueComputerTest {
    setUp() : void {
        super.setUp();
        this.resetWith({
            options : ((_) : any =>  {
                {
                    _.strongMode = true;
                    return _;
                }
            })(new bare.createInstance(any,null))});
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    StrongConstantValueComputerTest() {
    }
}

export class properties {
}
