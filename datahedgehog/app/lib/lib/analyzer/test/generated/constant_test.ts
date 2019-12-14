/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/generated/constant_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./resolver_test_case";
import * as lib4 from "./test_support";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(ConstantEvaluatorTest);
    });
};
export namespace ConstantEvaluatorTest {
    export type Constructors = lib3.ResolverTestCase.Constructors | 'ConstantEvaluatorTest';
    export type Interface = Omit<ConstantEvaluatorTest, Constructors>;
}
@DartClass
export class ConstantEvaluatorTest extends lib3.ResolverTestCase {
    fail_constructor() : void {
        let result : any = this._getExpressionValue("?");
        expect(result.isValid,isTrue);
        let value : any = result.value;
        expect(value,null);
    }
    fail_identifier_class() : void {
        let result : any = this._getExpressionValue("?");
        expect(result.isValid,isTrue);
        let value : any = result.value;
        expect(value,null);
    }
    fail_identifier_function() : void {
        let result : any = this._getExpressionValue("?");
        expect(result.isValid,isTrue);
        let value : any = result.value;
        expect(value,null);
    }
    fail_identifier_static() : void {
        let result : any = this._getExpressionValue("?");
        expect(result.isValid,isTrue);
        let value : any = result.value;
        expect(value,null);
    }
    fail_identifier_staticMethod() : void {
        let result : any = this._getExpressionValue("?");
        expect(result.isValid,isTrue);
        let value : any = result.value;
        expect(value,null);
    }
    fail_identifier_topLevel() : void {
        let result : any = this._getExpressionValue("?");
        expect(result.isValid,isTrue);
        let value : any = result.value;
        expect(value,null);
    }
    fail_identifier_typeParameter() : void {
        let result : any = this._getExpressionValue("?");
        expect(result.isValid,isTrue);
        let value : any = result.value;
        expect(value,null);
    }
    fail_prefixedIdentifier_invalid() : void {
        let result : any = this._getExpressionValue("?");
        expect(result.isValid,isTrue);
        let value : any = result.value;
        expect(value,null);
    }
    fail_prefixedIdentifier_valid() : void {
        let result : any = this._getExpressionValue("?");
        expect(result.isValid,isTrue);
        let value : any = result.value;
        expect(value,null);
    }
    fail_propertyAccess_invalid() : void {
        let result : any = this._getExpressionValue("?");
        expect(result.isValid,isTrue);
        let value : any = result.value;
        expect(value,null);
    }
    fail_propertyAccess_valid() : void {
        let result : any = this._getExpressionValue("?");
        expect(result.isValid,isTrue);
        let value : any = result.value;
        expect(value,null);
    }
    fail_simpleIdentifier_invalid() : void {
        let result : any = this._getExpressionValue("?");
        expect(result.isValid,isTrue);
        let value : any = result.value;
        expect(value,null);
    }
    fail_simpleIdentifier_valid() : void {
        let result : any = this._getExpressionValue("?");
        expect(result.isValid,isTrue);
        let value : any = result.value;
        expect(value,null);
    }
    test_bitAnd_int_int() : void {
        this._assertValue3(74 & 42,"74 & 42");
    }
    test_bitNot() : void {
        this._assertValue3(~42,"~42");
    }
    test_bitOr_int_int() : void {
        this._assertValue3(74 | 42,"74 | 42");
    }
    test_bitXor_int_int() : void {
        this._assertValue3(74 ^ 42,"74 ^ 42");
    }
    test_divide_double_double() : void {
        this._assertValue2(3.2 / 2.3,"3.2 / 2.3");
    }
    test_divide_double_double_byZero() : void {
        let result : any = this._getExpressionValue("3.2 / 0.0");
        expect(result.isValid,isTrue);
        let value : any = result.value;
        expect(value.type.name,"double");
        expect(value.toDoubleValue().isInfinite,isTrue);
    }
    test_divide_int_int() : void {
        this._assertValue2(1.5,"3 / 2");
    }
    test_divide_int_int_byZero() : void {
        let result : any = this._getExpressionValue("3 / 0");
        expect(result.isValid,isTrue);
    }
    test_equal_boolean_boolean() : void {
        this._assertValue(false,"true == false");
    }
    test_equal_int_int() : void {
        this._assertValue(false,"2 == 3");
    }
    test_equal_invalidLeft() : void {
        let result : any = this._getExpressionValue("a == 3");
        expect(result.isValid,isFalse);
    }
    test_equal_invalidRight() : void {
        let result : any = this._getExpressionValue("2 == a");
        expect(result.isValid,isFalse);
    }
    test_equal_string_string() : void {
        this._assertValue(false,"'a' == 'b'");
    }
    test_greaterThan_int_int() : void {
        this._assertValue(false,"2 > 3");
    }
    test_greaterThanOrEqual_int_int() : void {
        this._assertValue(false,"2 >= 3");
    }
    test_leftShift_int_int() : void {
        this._assertValue3(64,"16 << 2");
    }
    test_lessThan_int_int() : void {
        this._assertValue(true,"2 < 3");
    }
    test_lessThanOrEqual_int_int() : void {
        this._assertValue(true,"2 <= 3");
    }
    test_literal_boolean_false() : void {
        this._assertValue(false,"false");
    }
    test_literal_boolean_true() : void {
        this._assertValue(true,"true");
    }
    test_literal_list() : void {
        let result : any = this._getExpressionValue("const ['a', 'b', 'c']");
        expect(result.isValid,isTrue);
    }
    test_literal_map() : void {
        let result : any = this._getExpressionValue("const {'a' : 'm', 'b' : 'n', 'c' : 'o'}");
        expect(result.isValid,isTrue);
        let map : core.DartMap<any,any> = result.value.toMapValue();
        expect(map.keys.map((k : any) =>  {
            return k.toStringValue();
        }),new core.DartList.literal('a','b','c'));
    }
    test_literal_null() : void {
        let result : any = this._getExpressionValue("null");
        expect(result.isValid,isTrue);
        let value : any = result.value;
        expect(value.isNull,isTrue);
    }
    test_literal_number_double() : void {
        this._assertValue2(3.45,"3.45");
    }
    test_literal_number_integer() : void {
        this._assertValue3(42,"42");
    }
    test_literal_string_adjacent() : void {
        this._assertValue4("abcdef","'abc' 'def'");
    }
    test_literal_string_interpolation_invalid() : void {
        let result : any = this._getExpressionValue("'a${f()}c'");
        expect(result.isValid,isFalse);
    }
    test_literal_string_interpolation_valid() : void {
        this._assertValue4("a3c","'a${3}c'");
    }
    test_literal_string_simple() : void {
        this._assertValue4("abc","'abc'");
    }
    test_logicalAnd() : void {
        this._assertValue(false,"true && false");
    }
    test_logicalNot() : void {
        this._assertValue(false,"!true");
    }
    test_logicalOr() : void {
        this._assertValue(true,"true || false");
    }
    test_minus_double_double() : void {
        this._assertValue2(3.2 - 2.3,"3.2 - 2.3");
    }
    test_minus_int_int() : void {
        this._assertValue3(1,"3 - 2");
    }
    test_negated_boolean() : void {
        let result : any = this._getExpressionValue("-true");
        expect(result.isValid,isFalse);
    }
    test_negated_double() : void {
        this._assertValue2(-42.3,"-42.3");
    }
    test_negated_integer() : void {
        this._assertValue3(-42,"-42");
    }
    test_notEqual_boolean_boolean() : void {
        this._assertValue(true,"true != false");
    }
    test_notEqual_int_int() : void {
        this._assertValue(true,"2 != 3");
    }
    test_notEqual_invalidLeft() : void {
        let result : any = this._getExpressionValue("a != 3");
        expect(result.isValid,isFalse);
    }
    test_notEqual_invalidRight() : void {
        let result : any = this._getExpressionValue("2 != a");
        expect(result.isValid,isFalse);
    }
    test_notEqual_string_string() : void {
        this._assertValue(true,"'a' != 'b'");
    }
    test_parenthesizedExpression() : void {
        this._assertValue4("a","('a')");
    }
    test_plus_double_double() : void {
        this._assertValue2(2.3 + 3.2,"2.3 + 3.2");
    }
    test_plus_int_int() : void {
        this._assertValue3(5,"2 + 3");
    }
    test_plus_string_string() : void {
        this._assertValue4("ab","'a' + 'b'");
    }
    test_remainder_double_double() : void {
        this._assertValue2(3.2 % 2.3,"3.2 % 2.3");
    }
    test_remainder_int_int() : void {
        this._assertValue3(2,"8 % 3");
    }
    test_rightShift() : void {
        this._assertValue3(16,"64 >> 2");
    }
    test_stringLength_complex() : void {
        this._assertValue3(6,"('qwe' + 'rty').length");
    }
    test_stringLength_simple() : void {
        this._assertValue3(6,"'Dvorak'.length");
    }
    test_times_double_double() : void {
        this._assertValue2(2.3 * 3.2,"2.3 * 3.2");
    }
    test_times_int_int() : void {
        this._assertValue3(6,"2 * 3");
    }
    test_truncatingDivide_double_double() : void {
        this._assertValue3(1,"3.2 ~/ 2.3");
    }
    test_truncatingDivide_int_int() : void {
        this._assertValue3(3,"10 ~/ 3");
    }
    _assertValue(expectedValue : boolean,contents : string) : void {
        let result : any = this._getExpressionValue(contents);
        let value : any = result.value;
        expect(value.type.name,"bool");
        expect(value.toBoolValue(),expectedValue);
    }
    _assertValue2(expectedValue : double,contents : string) : void {
        let result : any = this._getExpressionValue(contents);
        expect(result.isValid,isTrue);
        let value : any = result.value;
        expect(value.type.name,"double");
        expect(value.toDoubleValue(),expectedValue);
    }
    _assertValue3(expectedValue : number,contents : string) : void {
        let result : any = this._getExpressionValue(contents);
        expect(result.isValid,isTrue);
        let value : any = result.value;
        expect(value.type.name,"int");
        expect(value.toIntValue(),expectedValue);
    }
    _assertValue4(expectedValue : string,contents : string) : void {
        let result : any = this._getExpressionValue(contents);
        let value : any = result.value;
        expect(value,isNotNull);
        let type : any = value.type;
        expect(type,isNotNull);
        expect(type.name,"String");
        expect(value.toStringValue(),expectedValue);
    }
    _getExpressionValue(contents : string) : any {
        let source : any = this.addSource(`var x = ${contents};`);
        let library : any = this.resolve2(source);
        let unit : any = this.analysisContext.resolveCompilationUnit(source,library);
        expect(unit,isNotNull);
        let declarations : any = unit.declarations;
        expect(declarations,hasLength(1));
        let declaration : any = op(Op.INDEX,declarations,0);
        lib4.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, any);
        },TopLevelVariableDeclaration,declaration);
        let variables : any = (declaration as any).variables.variables;
        expect(variables,hasLength(1));
        let evaluator : any = new bare.createInstance(any,null,source,this.analysisContext.typeProvider,{
            typeSystem : this.analysisContext.typeSystem});
        return evaluator.evaluate(op(Op.INDEX,variables,0).initializer);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ConstantEvaluatorTest() {
    }
}

export class properties {
}
