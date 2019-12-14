/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/src/summary/top_level_inference_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./element_text";
import * as lib4 from "./../task/strong/strong_test_helper";
import * as lib5 from "./../dart/analysis/base";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(TopLevelInferenceTest);
        defineReflectiveTests(TopLevelInferenceErrorsTest);
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

export namespace TopLevelInferenceErrorsTest {
    export type Constructors = lib4.AbstractStrongTest.Constructors | 'TopLevelInferenceErrorsTest';
    export type Interface = Omit<TopLevelInferenceErrorsTest, Constructors>;
}
@DartClass
export class TopLevelInferenceErrorsTest extends lib4.AbstractStrongTest {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get enableNewAnalysisDriver() : boolean {
        return true;
    }
    test_initializer_additive() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._assertErrorOnlyLeft(new core.DartList.literal('+','-'));
        } )());
    }

    test_initializer_assign() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let content = 'var a = 1;
            await this.checkFile(content);
        } )());
    }

    test_initializer_binary_onlyLeft() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let content = 'var a = 1;
            await this.checkFile(content);
        } )());
    }

    test_initializer_bitwise() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._assertErrorOnlyLeft(new core.DartList.literal('&','|','^'));
        } )());
    }

    test_initializer_boolean() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let content = 'var a = 1;
            await this.checkFile(content);
        } )());
    }

    test_initializer_cascade() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let content = 'var a = 0;
            await this.checkFile(content);
        } )());
    }

    test_initializer_classField_instance_instanceCreation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let content = 'class A<T> {}
            await this.checkFile(content);
        } )());
    }

    test_initializer_classField_static_instanceCreation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let content = 'class A<T> {}
            await this.checkFile(content);
        } )());
    }

    test_initializer_conditional() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let content = 'var a = 1;
            await this.checkFile(content);
        } )());
    }

    test_initializer_dependencyCycle() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let content = 'var a = /*error:TOP_LEVEL_CYCLE*/b;
            await this.checkFile(content);
        } )());
    }

    test_initializer_equality() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let content = 'var a = 1;
            await this.checkFile(content);
        } )());
    }

    test_initializer_extractIndex() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let content = 'var a = /*info:INFERRED_TYPE_LITERAL*/[0, 1.2];
            await this.checkFile(content);
        } )());
    }

    test_initializer_functionLiteral_blockBody() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let content = 'var t = /*error:TOP_LEVEL_FUNCTION_LITERAL_BLOCK*/
            await this.checkFile(content);
        } )());
    }

    test_initializer_functionLiteral_expressionBody() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let content = 'var a = 0;
            await this.checkFile(content);
        } )());
    }

    test_initializer_functionLiteral_parameters_withoutType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let content = 'var t = (int a,
            await this.checkFile(content);
        } )());
    }

    test_initializer_hasTypeAnnotation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let content = 'var a = 1;
            await this.checkFile(content);
        } )());
    }

    test_initializer_identifier() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let content = 'int top_function() => 0;
            await this.checkFile(content);
        } )());
    }

    test_initializer_identifier_error() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let content = 'var a = 0;
            await this.checkFile(content);
        } )());
    }

    test_initializer_ifNull() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let content = 'var a = 1;
            await this.checkFile(content);
        } )());
    }

    test_initializer_instanceCreation_withoutTypeParameters() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let content = 'class A {}
            await this.checkFile(content);
        } )());
    }

    test_initializer_instanceCreation_withTypeParameters() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let content = 'class A<T> {}
            await this.checkFile(content);
        } )());
    }

    test_initializer_instanceGetter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let content = 'class A {
            await this.checkFile(content);
        } )());
    }

    test_initializer_methodInvocation_function() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let content = 'int f1() => null;
            await this.checkFile(content);
        } )());
    }

    test_initializer_methodInvocation_method() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let content = 'class A {
            await this.checkFile(content);
        } )());
    }

    test_initializer_multiplicative() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._assertErrorOnlyLeft(new core.DartList.literal('*','/','%','~/'));
        } )());
    }

    test_initializer_postfixIncDec() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let content = 'var a = 1;
            await this.checkFile(content);
        } )());
    }

    test_initializer_prefixIncDec() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let content = 'var a = 1;
            await this.checkFile(content);
        } )());
    }

    test_initializer_relational() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._assertErrorOnlyLeft(new core.DartList.literal('>','>=','<','<='));
        } )());
    }

    test_initializer_shift() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._assertErrorOnlyLeft(new core.DartList.literal('<<','>>'));
        } )());
    }

    test_initializer_typedList() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let content = 'var a = 1;
            await this.checkFile(content);
        } )());
    }

    test_initializer_typedMap() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let content = 'var a = 1;
            await this.checkFile(content);
        } )());
    }

    test_initializer_untypedList() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let content = 'var a = 1;
            await this.checkFile(content);
        } )());
    }

    test_initializer_untypedMap() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let content = 'var a = 1;
            await this.checkFile(content);
        } )());
    }

    test_override_conflictFieldType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let content = 'abstract class A {
            await this.checkFile(content);
        } )());
    }

    test_override_conflictParameterType_method() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let content = 'abstract class A {
            await this.checkFile(content);
        } )());
    }

    _assertErrorOnlyLeft(operators : core.DartList<string>) : async.Future<core.Null> { 
        return new async.Future.fromPromise(( async () =>  {
            let err = '/*error:TOP_LEVEL_UNSUPPORTED*/';
            let code : string = 'var a = 1;\n';
            for(let i = 0; i < operators.length; i++){
                let operator : string = operators[i];
                code += `var t${i} = (${err}a = 1) ${operator} (a = 2);\n`;
            }
            await this.checkFile(code);
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    TopLevelInferenceErrorsTest() {
    }
}

export namespace TopLevelInferenceTest {
    export type Constructors = lib5.BaseAnalysisDriverTest.Constructors | 'TopLevelInferenceTest';
    export type Interface = Omit<TopLevelInferenceTest, Constructors>;
}
@DartClass
export class TopLevelInferenceTest extends lib5.BaseAnalysisDriverTest {
    addFile(path : string,code : string) : void {
        this.provider.newFile(this._p(path),code);
    }
    test_initializer_additive() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('var vPlusIntInt = 1 + 2;
            lib3.checkElementText(library,'int vPlusIntInt;
        } )());
    }

    test_initializer_as() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('var V = 1 as num;
            lib3.checkElementText(library,'num V;
        } )());
    }

    test_initializer_await() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('import \'dart:async\';
            lib3.checkElementText(library,'import \'dart:async\';
        } )());
    }

    test_initializer_bitwise() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('var vBitXor = 1 ^ 2;
            lib3.checkElementText(library,'int vBitXor;
        } )());
    }

    test_initializer_cascade() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('class A {
            lib3.checkElementText(library,'class A {
        } )());
    }

    test_initializer_conditional() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('var V = true ? 1 : 2.3;
            lib3.checkElementText(library,'num V;
        } )());
    }

    test_initializer_equality() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('var vEq = 1 == 2;
            lib3.checkElementText(library,'bool vEq;
        } )());
    }

    test_initializer_error_assign() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('var a = 1;
            lib3.checkElementText(library,'int a;
        } )());
    }

    test_initializer_error_assign_prefixed() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('class A {
            lib3.checkElementText(library,'class A {
        } )());
    }

    test_initializer_error_assign_prefixed_viaInterface() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('class I {
            lib3.checkElementText(library,'class I {
        } )());
    }

    test_initializer_error_assign_viaInterface() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('class I {
            lib3.checkElementText(library,'class I {
        } )());
    }

    test_initializer_error_classField_useInstanceGetter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('class A {
            lib3.checkElementText(library,'class A {
        } )());
    }

    test_initializer_error_extractProperty() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('class C {
            lib3.checkElementText(library,'class C {
        } )());
    }

    test_initializer_error_extractProperty_inOtherLibraryCycle() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addFile('/a.dart','import \'b.dart\';
            this.addFile('/b.dart','class C {
            let library = await this._encodeDecodeLibrary('import \'a.dart\';
            lib3.checkElementText(library,'import \'a.dart\';
        } )());
    }

    test_initializer_error_extractProperty_inStaticField() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('class A {
            lib3.checkElementText(library,'class A {
        } )());
    }

    test_initializer_error_extractProperty_prefixedIdentifier() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('class C {
            lib3.checkElementText(library,'class C {
        } )());
    }

    test_initializer_error_extractProperty_prefixedIdentifier_viaInterface() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('class I {
            lib3.checkElementText(library,'class I {
        } )());
    }

    test_initializer_error_extractProperty_viaInterface() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('class I {
            lib3.checkElementText(library,'class I {
        } )());
    }

    test_initializer_error_instanceGetterOfObject() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('dynamic f() => null;
            lib3.checkElementText(library,'String s;
        } )());
    }

    test_initializer_error_instanceGetterOfObject_prefixed() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('dynamic d;
            lib3.checkElementText(library,'dynamic d;
        } )());
    }

    test_initializer_error_methodInvocation_cycle_topLevel() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('var a = b.foo();
            lib3.checkElementText(library,'dynamic a/*error: dependencyCycle*/;
        } )());
    }

    test_initializer_error_methodInvocation_cycle_topLevel_self() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('var a = a.foo();
            lib3.checkElementText(library,'dynamic a/*error: dependencyCycle*/;
        } )());
    }

    test_initializer_error_referenceToFieldOfStaticField() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('class C {
            lib3.checkElementText(library,'class C {
        } )());
    }

    test_initializer_error_referenceToFieldOfStaticGetter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('class C {
            lib3.checkElementText(library,'class C {
        } )());
    }

    test_initializer_extractIndex() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('var a = [0, 1.2];
            lib3.checkElementText(library,'List<num> a;
        } )());
    }

    test_initializer_functionExpression() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('import \'dart:async\';
            lib3.checkElementText(library,'import \'dart:async\';
        } )());
    }

    test_initializer_functionExpressionInvocation_noTypeParameters() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('var v = (() => 42)();
            lib3.checkElementText(library,'int v;
        } )());
    }

    test_initializer_functionInvocation_hasTypeParameters() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('T f<T>() => null;
            lib3.checkElementText(library,'int vHasTypeArgument;
        } )());
    }

    test_initializer_functionInvocation_noTypeParameters() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('String f(int p) => null;
            lib3.checkElementText(library,'String vOkArgumentType;
        } )());
    }

    test_initializer_identifier() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('String topLevelFunction(int p) => null;
            lib3.checkElementText(library,'class A {
        } )());
    }

    test_initializer_identifier_error_cycle_classField() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('class A {
            lib3.checkElementText(library,'class A {
        } )());
    }

    test_initializer_identifier_error_cycle_mix() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('class A {
            lib3.checkElementText(library,'class A {
        } )());
    }

    test_initializer_identifier_error_cycle_topLevel() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('var a = b;
            lib3.checkElementText(library,'dynamic a/*error: dependencyCycle*/;
        } )());
    }

    test_initializer_identifier_formalParameter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
        } )());
    }

    test_initializer_instanceCreation_hasTypeParameter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('class A<T> {}
            lib3.checkElementText(library,'class A<T> {
        } )());
    }

    test_initializer_instanceCreation_noTypeParameters() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('class A {}
            lib3.checkElementText(library,'class A {
        } )());
    }

    test_initializer_is() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('var a = 1.2;
            lib3.checkElementText(library,'double a;
        } )());
    }

    test_initializer_literal() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('var vNull = null;
            lib3.checkElementText(library,'Null vNull;
        } )());
    }

    test_initializer_literal_list_typed() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('var vObject = <Object>[1, 2, 3];
            lib3.checkElementText(library,'List<Object> vObject;
        } )());
    }

    test_initializer_literal_list_untyped() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('var vInt = [1, 2, 3];
            lib3.checkElementText(library,'List<int> vInt;
        } )());
    }

    test_initializer_literal_list_untyped_empty() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('var vNonConst = [];
            lib3.checkElementText(library,'List<dynamic> vNonConst;
        } )());
    }

    test_initializer_literal_map_typed() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('var vObjectObject = <Object, Object>{1: \'a\'};
            lib3.checkElementText(library,'Map<Object, Object> vObjectObject;
        } )());
    }

    test_initializer_literal_map_untyped() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('var vIntString = {1: \'a\', 2: \'b\'};
            lib3.checkElementText(library,'Map<int, String> vIntString;
        } )());
    }

    test_initializer_literal_map_untyped_empty() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('var vNonConst = {};
            lib3.checkElementText(library,'Map<dynamic, dynamic> vNonConst;
        } )());
    }

    test_initializer_logicalBool() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('var a = true;
            lib3.checkElementText(library,'bool a;
        } )());
    }

    test_initializer_methodInvocation_hasTypeParameters() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('class A {
            lib3.checkElementText(library,'class A {
        } )());
    }

    test_initializer_methodInvocation_noTypeParameters() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('class A {
            lib3.checkElementText(library,'class A {
        } )());
    }

    test_initializer_multiplicative() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('var vModuloIntInt = 1 % 2;
            lib3.checkElementText(library,'int vModuloIntInt;
        } )());
    }

    test_initializer_onlyLeft() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('var a = 1;
            lib3.checkElementText(library,'int a;
        } )());
    }

    test_initializer_parenthesized() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('var V = (42);
            lib3.checkElementText(library,'int V;
        } )());
    }

    test_initializer_postfix() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('var vInt = 1;
            lib3.checkElementText(library,'int vInt;
        } )());
    }

    test_initializer_prefix_incDec() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('var vInt = 1;
            lib3.checkElementText(library,'int vInt;
        } )());
    }

    test_initializer_prefix_incDec_custom() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('class A {
            lib3.checkElementText(library,'A a;
        } )());
    }

    test_initializer_prefix_not() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('var vNot = !true;
            lib3.checkElementText(library,'bool vNot;
        } )());
    }

    test_initializer_prefix_other() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('var vNegateInt = -1;
            lib3.checkElementText(library,'int vNegateInt;
        } )());
    }

    test_initializer_relational() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('var vLess = 1 < 2;
            lib3.checkElementText(library,'bool vLess;
        } )());
    }

    test_initializer_throw() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('var V = throw 42;
            lib3.checkElementText(library,'Null V;
        } )());
    }

    test_instanceField_error_noSetterParameter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('abstract class A {
            lib3.checkElementText(library,'abstract class A {
        } )());
    }

    test_instanceField_fieldFormal() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('class A {
            lib3.checkElementText(library,'class A {
        } )());
    }

    test_instanceField_fromField() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('abstract class A {
            lib3.checkElementText(library,'abstract class A {
                withSyntheticFields : true});
        } )());
    }

    test_instanceField_fromField_explicitDynamic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('abstract class A {
            lib3.checkElementText(library,'abstract class A {
        } )());
    }

    test_instanceField_fromField_generic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('abstract class A<E> {
            lib3.checkElementText(library,'abstract class A<E> {
                withSyntheticFields : true});
        } )());
    }

    test_instanceField_fromField_implicitDynamic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('abstract class A {
            lib3.checkElementText(library,'abstract class A {
        } )());
    }

    test_instanceField_fromField_narrowType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('abstract class A {
            lib3.checkElementText(library,'abstract class A {
        } )());
    }

    test_instanceField_fromGetter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('abstract class A {
            lib3.checkElementText(library,'abstract class A {
        } )());
    }

    test_instanceField_fromGetter_generic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('abstract class A<E> {
            lib3.checkElementText(library,'abstract class A<E> {
        } )());
    }

    test_instanceField_fromGetter_multiple_different() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('abstract class A {
            lib3.checkElementText(library,'abstract class A {
        } )());
    }

    test_instanceField_fromGetter_multiple_different_dynamic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('abstract class A {
            lib3.checkElementText(library,'abstract class A {
        } )());
    }

    test_instanceField_fromGetter_multiple_different_generic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('abstract class A<T> {
            lib3.checkElementText(library,'abstract class A<T> {
        } )());
    }

    test_instanceField_fromGetter_multiple_same() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('abstract class A {
            lib3.checkElementText(library,'abstract class A {
        } )());
    }

    test_instanceField_fromGetterSetter_different_field() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('abstract class A {
            lib3.checkElementText(library,'abstract class A {
        } )());
    }

    test_instanceField_fromGetterSetter_different_getter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('abstract class A {
            lib3.checkElementText(library,'abstract class A {
                withSyntheticFields : true});
        } )());
    }

    test_instanceField_fromGetterSetter_different_setter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('abstract class A {
            lib3.checkElementText(library,'abstract class A {
                withSyntheticFields : true});
        } )());
    }

    test_instanceField_fromGetterSetter_same_field() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('abstract class A {
            lib3.checkElementText(library,'abstract class A {
        } )());
    }

    test_instanceField_fromGetterSetter_same_getter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('abstract class A {
            lib3.checkElementText(library,'abstract class A {
                withSyntheticFields : true});
        } )());
    }

    test_instanceField_fromGetterSetter_same_setter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('abstract class A {
            lib3.checkElementText(library,'abstract class A {
                withSyntheticFields : true});
        } )());
    }

    test_instanceField_fromSetter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('abstract class A {
            lib3.checkElementText(library,'abstract class A {
        } )());
    }

    test_instanceField_fromSetter_multiple_different() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('abstract class A {
            lib3.checkElementText(library,'abstract class A {
        } )());
    }

    test_instanceField_fromSetter_multiple_same() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('abstract class A {
            lib3.checkElementText(library,'abstract class A {
        } )());
    }

    test_instanceField_functionTypeAlias_doesNotUseItsTypeParameter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('typedef F<T>();
            lib3.checkElementText(library,'typedef dynamic F<T>();
        } )());
    }

    test_instanceField_inheritsCovariant_fromSetter_field() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('abstract class A {
            lib3.checkElementText(library,'abstract class A {
                withSyntheticAccessors : true});
        } )());
    }

    test_instanceField_inheritsCovariant_fromSetter_setter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('abstract class A {
            lib3.checkElementText(library,'abstract class A {
        } )());
    }

    test_instanceField_initializer() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('class A {
            lib3.checkElementText(library,'class A {
        } )());
    }

    test_method_error_conflict_parameterType_generic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('class A<T> {
            lib3.checkElementText(library,'class A<T> {
        } )());
    }

    test_method_error_conflict_parameterType_notGeneric() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('class A {
            lib3.checkElementText(library,'class A {
        } )());
    }

    test_method_error_conflict_returnType_generic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('class A<K, V> {
            lib3.checkElementText(library,'class A<K, V> {
        } )());
    }

    test_method_error_conflict_returnType_notGeneric() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('class A {
            lib3.checkElementText(library,'class A {
        } )());
    }

    test_method_error_hasMethod_noParameter_required() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('class A {
            lib3.checkElementText(library,'class A {
        } )());
    }

    test_method_missing_hasMethod_noParameter_named() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('class A {
            lib3.checkElementText(library,'class A {
        } )());
    }

    test_method_missing_hasMethod_noParameter_optional() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('class A {
            lib3.checkElementText(library,'class A {
        } )());
    }

    test_method_missing_hasMethod_withoutTypes() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('class A {
            lib3.checkElementText(library,'class A {
        } )());
    }

    test_method_missing_noMember() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('class A {
            lib3.checkElementText(library,'class A {
        } )());
    }

    test_method_missing_notMethod() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('class A {
            lib3.checkElementText(library,'class A {
        } )());
    }

    test_method_OK_sequence_extendsExtends_generic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('class A<K, V> {
            lib3.checkElementText(library,'class A<K, V> {
        } )());
    }

    test_method_OK_sequence_inferMiddle_extendsExtends() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('class A {
            lib3.checkElementText(library,'class A {
        } )());
    }

    test_method_OK_sequence_inferMiddle_extendsImplements() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('class A {
            lib3.checkElementText(library,'class A {
        } )());
    }

    test_method_OK_sequence_inferMiddle_extendsWith() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('class A {
            lib3.checkElementText(library,'class A {
        } )());
    }

    test_method_OK_single_extends_direct_generic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('class A<K, V> {
            lib3.checkElementText(library,'class A<K, V> {
        } )());
    }

    test_method_OK_single_extends_direct_notGeneric() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('class A {
            lib3.checkElementText(library,'class A {
        } )());
    }

    test_method_OK_single_extends_direct_notGeneric_named() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('class A {
            lib3.checkElementText(library,'class A {
        } )());
    }

    test_method_OK_single_extends_direct_notGeneric_positional() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('class A {
            lib3.checkElementText(library,'class A {
        } )());
    }

    test_method_OK_single_extends_indirect_generic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('class A<K, V> {
            lib3.checkElementText(library,'class A<K, V> {
        } )());
    }

    test_method_OK_single_implements_direct_generic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('abstract class A<K, V> {
            lib3.checkElementText(library,'abstract class A<K, V> {
        } )());
    }

    test_method_OK_single_implements_direct_notGeneric() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('abstract class A {
            lib3.checkElementText(library,'abstract class A {
        } )());
    }

    test_method_OK_single_implements_indirect_generic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('abstract class A<K, V> {
            lib3.checkElementText(library,'abstract class A<K, V> {
        } )());
    }

    test_method_OK_single_private_linkThroughOtherLibraryOfCycle() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let path : string = this._p('/other.dart');
            this.provider.newFile(path,'import \'test.dart\';
            let library = await this._encodeDecodeLibrary('import \'other.dart\';
            lib3.checkElementText(library,'import \'other.dart\';
        } )());
    }

    test_method_OK_single_withExtends_notGeneric() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('class A {
            lib3.checkElementText(library,'class A {
        } )());
    }

    test_method_OK_two_extendsImplements_generic() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('class A<K, V> {
            lib3.checkElementText(library,'class A<K, V> {
        } )());
    }

    test_method_OK_two_extendsImplements_notGeneric() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let library = await this._encodeDecodeLibrary('class A {
            lib3.checkElementText(library,'class A {
        } )());
    }

    _encodeDecodeLibrary(text : string) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let path : string = this._p('/test.dart');
            this.provider.newFile(path,text);
            let result : any = await this.driver.getUnitElement(path);
            return result.element.library;
        } )());
    }

    _p(path : string) : string {
        return this.provider.convertPath(path);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    TopLevelInferenceTest() {
    }
}

export class properties {
}