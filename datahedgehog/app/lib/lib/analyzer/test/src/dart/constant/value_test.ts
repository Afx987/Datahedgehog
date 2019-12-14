/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/src/dart/constant/value_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../../../generated/test_support";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(DartObjectImplTest);
    });
};
export namespace DartObjectImplTest {
    export type Constructors = lib3.EngineTestCase.Constructors | 'DartObjectImplTest';
    export type Interface = Omit<DartObjectImplTest, Constructors>;
}
@DartClass
export class DartObjectImplTest extends lib3.EngineTestCase {
    _typeProvider : any;

    test_add_knownDouble_knownDouble() : void {
        this._assertAdd(this._doubleValue(3.0),this._doubleValue(1.0),this._doubleValue(2.0));
    }
    test_add_knownDouble_knownInt() : void {
        this._assertAdd(this._doubleValue(3.0),this._doubleValue(1.0),this._intValue(2));
    }
    test_add_knownDouble_unknownDouble() : void {
        this._assertAdd(this._doubleValue(null),this._doubleValue(1.0),this._doubleValue(null));
    }
    test_add_knownDouble_unknownInt() : void {
        this._assertAdd(this._doubleValue(null),this._doubleValue(1.0),this._intValue(null));
    }
    test_add_knownInt_knownInt() : void {
        this._assertAdd(this._intValue(3),this._intValue(1),this._intValue(2));
    }
    test_add_knownInt_knownString() : void {
        this._assertAdd(null,this._intValue(1),this._stringValue("2"));
    }
    test_add_knownInt_unknownDouble() : void {
        this._assertAdd(this._doubleValue(null),this._intValue(1),this._doubleValue(null));
    }
    test_add_knownInt_unknownInt() : void {
        this._assertAdd(this._intValue(null),this._intValue(1),this._intValue(null));
    }
    test_add_knownString_knownInt() : void {
        this._assertAdd(null,this._stringValue("1"),this._intValue(2));
    }
    test_add_knownString_knownString() : void {
        this._assertAdd(this._stringValue("ab"),this._stringValue("a"),this._stringValue("b"));
    }
    test_add_knownString_unknownString() : void {
        this._assertAdd(this._stringValue(null),this._stringValue("a"),this._stringValue(null));
    }
    test_add_unknownDouble_knownDouble() : void {
        this._assertAdd(this._doubleValue(null),this._doubleValue(null),this._doubleValue(2.0));
    }
    test_add_unknownDouble_knownInt() : void {
        this._assertAdd(this._doubleValue(null),this._doubleValue(null),this._intValue(2));
    }
    test_add_unknownInt_knownDouble() : void {
        this._assertAdd(this._doubleValue(null),this._intValue(null),this._doubleValue(2.0));
    }
    test_add_unknownInt_knownInt() : void {
        this._assertAdd(this._intValue(null),this._intValue(null),this._intValue(2));
    }
    test_add_unknownString_knownString() : void {
        this._assertAdd(this._stringValue(null),this._stringValue(null),this._stringValue("b"));
    }
    test_add_unknownString_unknownString() : void {
        this._assertAdd(this._stringValue(null),this._stringValue(null),this._stringValue(null));
    }
    test_bitAnd_knownInt_knownInt() : void {
        this._assertBitAnd(this._intValue(2),this._intValue(6),this._intValue(3));
    }
    test_bitAnd_knownInt_knownString() : void {
        this._assertBitAnd(null,this._intValue(6),this._stringValue("3"));
    }
    test_bitAnd_knownInt_unknownInt() : void {
        this._assertBitAnd(this._intValue(null),this._intValue(6),this._intValue(null));
    }
    test_bitAnd_knownString_knownInt() : void {
        this._assertBitAnd(null,this._stringValue("6"),this._intValue(3));
    }
    test_bitAnd_unknownInt_knownInt() : void {
        this._assertBitAnd(this._intValue(null),this._intValue(null),this._intValue(3));
    }
    test_bitAnd_unknownInt_unknownInt() : void {
        this._assertBitAnd(this._intValue(null),this._intValue(null),this._intValue(null));
    }
    test_bitNot_knownInt() : void {
        this._assertBitNot(this._intValue(-4),this._intValue(3));
    }
    test_bitNot_knownString() : void {
        this._assertBitNot(null,this._stringValue("6"));
    }
    test_bitNot_unknownInt() : void {
        this._assertBitNot(this._intValue(null),this._intValue(null));
    }
    test_bitOr_knownInt_knownInt() : void {
        this._assertBitOr(this._intValue(7),this._intValue(6),this._intValue(3));
    }
    test_bitOr_knownInt_knownString() : void {
        this._assertBitOr(null,this._intValue(6),this._stringValue("3"));
    }
    test_bitOr_knownInt_unknownInt() : void {
        this._assertBitOr(this._intValue(null),this._intValue(6),this._intValue(null));
    }
    test_bitOr_knownString_knownInt() : void {
        this._assertBitOr(null,this._stringValue("6"),this._intValue(3));
    }
    test_bitOr_unknownInt_knownInt() : void {
        this._assertBitOr(this._intValue(null),this._intValue(null),this._intValue(3));
    }
    test_bitOr_unknownInt_unknownInt() : void {
        this._assertBitOr(this._intValue(null),this._intValue(null),this._intValue(null));
    }
    test_bitXor_knownInt_knownInt() : void {
        this._assertBitXor(this._intValue(5),this._intValue(6),this._intValue(3));
    }
    test_bitXor_knownInt_knownString() : void {
        this._assertBitXor(null,this._intValue(6),this._stringValue("3"));
    }
    test_bitXor_knownInt_unknownInt() : void {
        this._assertBitXor(this._intValue(null),this._intValue(6),this._intValue(null));
    }
    test_bitXor_knownString_knownInt() : void {
        this._assertBitXor(null,this._stringValue("6"),this._intValue(3));
    }
    test_bitXor_unknownInt_knownInt() : void {
        this._assertBitXor(this._intValue(null),this._intValue(null),this._intValue(3));
    }
    test_bitXor_unknownInt_unknownInt() : void {
        this._assertBitXor(this._intValue(null),this._intValue(null),this._intValue(null));
    }
    test_concatenate_knownInt_knownString() : void {
        this._assertConcatenate(null,this._intValue(2),this._stringValue("def"));
    }
    test_concatenate_knownString_knownInt() : void {
        this._assertConcatenate(null,this._stringValue("abc"),this._intValue(3));
    }
    test_concatenate_knownString_knownString() : void {
        this._assertConcatenate(this._stringValue("abcdef"),this._stringValue("abc"),this._stringValue("def"));
    }
    test_concatenate_knownString_unknownString() : void {
        this._assertConcatenate(this._stringValue(null),this._stringValue("abc"),this._stringValue(null));
    }
    test_concatenate_unknownString_knownString() : void {
        this._assertConcatenate(this._stringValue(null),this._stringValue(null),this._stringValue("def"));
    }
    test_divide_knownDouble_knownDouble() : void {
        this._assertDivide(this._doubleValue(3.0),this._doubleValue(6.0),this._doubleValue(2.0));
    }
    test_divide_knownDouble_knownInt() : void {
        this._assertDivide(this._doubleValue(3.0),this._doubleValue(6.0),this._intValue(2));
    }
    test_divide_knownDouble_unknownDouble() : void {
        this._assertDivide(this._doubleValue(null),this._doubleValue(6.0),this._doubleValue(null));
    }
    test_divide_knownDouble_unknownInt() : void {
        this._assertDivide(this._doubleValue(null),this._doubleValue(6.0),this._intValue(null));
    }
    test_divide_knownInt_knownInt() : void {
        this._assertDivide(this._doubleValue(3.0),this._intValue(6),this._intValue(2));
    }
    test_divide_knownInt_knownString() : void {
        this._assertDivide(null,this._intValue(6),this._stringValue("2"));
    }
    test_divide_knownInt_unknownDouble() : void {
        this._assertDivide(this._doubleValue(null),this._intValue(6),this._doubleValue(null));
    }
    test_divide_knownInt_unknownInt() : void {
        this._assertDivide(this._doubleValue(null),this._intValue(6),this._intValue(null));
    }
    test_divide_knownString_knownInt() : void {
        this._assertDivide(null,this._stringValue("6"),this._intValue(2));
    }
    test_divide_unknownDouble_knownDouble() : void {
        this._assertDivide(this._doubleValue(null),this._doubleValue(null),this._doubleValue(2.0));
    }
    test_divide_unknownDouble_knownInt() : void {
        this._assertDivide(this._doubleValue(null),this._doubleValue(null),this._intValue(2));
    }
    test_divide_unknownInt_knownDouble() : void {
        this._assertDivide(this._doubleValue(null),this._intValue(null),this._doubleValue(2.0));
    }
    test_divide_unknownInt_knownInt() : void {
        this._assertDivide(this._doubleValue(null),this._intValue(null),this._intValue(2));
    }
    test_equalEqual_bool_false() : void {
        this._assertEqualEqual(this._boolValue(false),this._boolValue(false),this._boolValue(true));
    }
    test_equalEqual_bool_true() : void {
        this._assertEqualEqual(this._boolValue(true),this._boolValue(true),this._boolValue(true));
    }
    test_equalEqual_bool_unknown() : void {
        this._assertEqualEqual(this._boolValue(null),this._boolValue(null),this._boolValue(false));
    }
    test_equalEqual_double_false() : void {
        this._assertEqualEqual(this._boolValue(false),this._doubleValue(2.0),this._doubleValue(4.0));
    }
    test_equalEqual_double_true() : void {
        this._assertEqualEqual(this._boolValue(true),this._doubleValue(2.0),this._doubleValue(2.0));
    }
    test_equalEqual_double_unknown() : void {
        this._assertEqualEqual(this._boolValue(null),this._doubleValue(1.0),this._doubleValue(null));
    }
    test_equalEqual_int_false() : void {
        this._assertEqualEqual(this._boolValue(false),this._intValue(-5),this._intValue(5));
    }
    test_equalEqual_int_true() : void {
        this._assertEqualEqual(this._boolValue(true),this._intValue(5),this._intValue(5));
    }
    test_equalEqual_int_unknown() : void {
        this._assertEqualEqual(this._boolValue(null),this._intValue(null),this._intValue(3));
    }
    test_equalEqual_list_empty() : void {
        this._assertEqualEqual(null,this._listValue(),this._listValue());
    }
    test_equalEqual_list_false() : void {
        this._assertEqualEqual(null,this._listValue(),this._listValue());
    }
    test_equalEqual_map_empty() : void {
        this._assertEqualEqual(null,this._mapValue(),this._mapValue());
    }
    test_equalEqual_map_false() : void {
        this._assertEqualEqual(null,this._mapValue(),this._mapValue());
    }
    test_equalEqual_null() : void {
        this._assertEqualEqual(this._boolValue(true),this._nullValue(),this._nullValue());
    }
    test_equalEqual_string_false() : void {
        this._assertEqualEqual(this._boolValue(false),this._stringValue("abc"),this._stringValue("def"));
    }
    test_equalEqual_string_true() : void {
        this._assertEqualEqual(this._boolValue(true),this._stringValue("abc"),this._stringValue("abc"));
    }
    test_equalEqual_string_unknown() : void {
        this._assertEqualEqual(this._boolValue(null),this._stringValue(null),this._stringValue("def"));
    }
    test_equals_list_false_differentSizes() : void {
        expect(op(Op.EQUALS,this._listValue(new core.DartList.literal(this._boolValue(true))),this._listValue(new core.DartList.literal(this._boolValue(true),this._boolValue(false)))),isFalse);
    }
    test_equals_list_false_sameSize() : void {
        expect(op(Op.EQUALS,this._listValue(new core.DartList.literal(this._boolValue(true))),this._listValue(new core.DartList.literal(this._boolValue(false)))),isFalse);
    }
    test_equals_list_true_empty() : void {
        expect(this._listValue(),this._listValue());
    }
    test_equals_list_true_nonEmpty() : void {
        expect(this._listValue(new core.DartList.literal(this._boolValue(true))),this._listValue(new core.DartList.literal(this._boolValue(true))));
    }
    test_equals_map_true_empty() : void {
        expect(this._mapValue(),this._mapValue());
    }
    test_equals_symbol_false() : void {
        expect(op(Op.EQUALS,this._symbolValue("a"),this._symbolValue("b")),isFalse);
    }
    test_equals_symbol_true() : void {
        expect(this._symbolValue("a"),this._symbolValue("a"));
    }
    test_getValue_bool_false() : void {
        expect(this._boolValue(false).toBoolValue(),false);
    }
    test_getValue_bool_true() : void {
        expect(this._boolValue(true).toBoolValue(),true);
    }
    test_getValue_bool_unknown() : void {
        expect(this._boolValue(null).toBoolValue(),isNull);
    }
    test_getValue_double_known() : void {
        let value : double = 2.3;
        expect(this._doubleValue(value).toDoubleValue(),value);
    }
    test_getValue_double_unknown() : void {
        expect(this._doubleValue(null).toDoubleValue(),isNull);
    }
    test_getValue_int_known() : void {
        let value : number = 23;
        expect(this._intValue(value).toIntValue(),value);
    }
    test_getValue_int_unknown() : void {
        expect(this._intValue(null).toIntValue(),isNull);
    }
    test_getValue_list_empty() : void {
        let result : core.DartObject = this._listValue().toListValue();
        this._assertInstanceOfObjectArray(result);
        let array : core.DartList<core.DartObject> = result as core.DartList<core.DartObject>;
        expect(array,hasLength(0));
    }
    test_getValue_list_valid() : void {
        let result : core.DartObject = this._listValue(new core.DartList.literal(this._intValue(23))).toListValue();
        this._assertInstanceOfObjectArray(result);
        let array : core.DartList<core.DartObject> = result as core.DartList<core.DartObject>;
        expect(array,hasLength(1));
    }
    test_getValue_map_empty() : void {
        let result : core.DartObject = this._mapValue().toMapValue();
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, core.DartMap<any,any>);
        },core.DartMap<K,V>,result);
        let map : core.DartMap<any,any> = result as core.DartMap<any,any>;
        expect(map,hasLength(0));
    }
    test_getValue_map_valid() : void {
        let result : core.DartObject = this._mapValue(new core.DartList.literal(this._stringValue("key"),this._stringValue("value"))).toMapValue();
        lib3.EngineTestCase.assertInstanceOf((obj : any) =>  {
            return is(obj, core.DartMap<any,any>);
        },core.DartMap<K,V>,result);
        let map : core.DartMap<any,any> = result as core.DartMap<any,any>;
        expect(map,hasLength(1));
    }
    test_getValue_null() : void {
        expect(this._nullValue().isNull,isTrue);
    }
    test_getValue_string_known() : void {
        let value : string = "twenty-three";
        expect(this._stringValue(value).toStringValue(),value);
    }
    test_getValue_string_unknown() : void {
        expect(this._stringValue(null).toStringValue(),isNull);
    }
    test_greaterThan_knownDouble_knownDouble_false() : void {
        this._assertGreaterThan(this._boolValue(false),this._doubleValue(1.0),this._doubleValue(2.0));
    }
    test_greaterThan_knownDouble_knownDouble_true() : void {
        this._assertGreaterThan(this._boolValue(true),this._doubleValue(2.0),this._doubleValue(1.0));
    }
    test_greaterThan_knownDouble_knownInt_false() : void {
        this._assertGreaterThan(this._boolValue(false),this._doubleValue(1.0),this._intValue(2));
    }
    test_greaterThan_knownDouble_knownInt_true() : void {
        this._assertGreaterThan(this._boolValue(true),this._doubleValue(2.0),this._intValue(1));
    }
    test_greaterThan_knownDouble_unknownDouble() : void {
        this._assertGreaterThan(this._boolValue(null),this._doubleValue(1.0),this._doubleValue(null));
    }
    test_greaterThan_knownDouble_unknownInt() : void {
        this._assertGreaterThan(this._boolValue(null),this._doubleValue(1.0),this._intValue(null));
    }
    test_greaterThan_knownInt_knownInt_false() : void {
        this._assertGreaterThan(this._boolValue(false),this._intValue(1),this._intValue(2));
    }
    test_greaterThan_knownInt_knownInt_true() : void {
        this._assertGreaterThan(this._boolValue(true),this._intValue(2),this._intValue(1));
    }
    test_greaterThan_knownInt_knownString() : void {
        this._assertGreaterThan(null,this._intValue(1),this._stringValue("2"));
    }
    test_greaterThan_knownInt_unknownDouble() : void {
        this._assertGreaterThan(this._boolValue(null),this._intValue(1),this._doubleValue(null));
    }
    test_greaterThan_knownInt_unknownInt() : void {
        this._assertGreaterThan(this._boolValue(null),this._intValue(1),this._intValue(null));
    }
    test_greaterThan_knownString_knownInt() : void {
        this._assertGreaterThan(null,this._stringValue("1"),this._intValue(2));
    }
    test_greaterThan_unknownDouble_knownDouble() : void {
        this._assertGreaterThan(this._boolValue(null),this._doubleValue(null),this._doubleValue(2.0));
    }
    test_greaterThan_unknownDouble_knownInt() : void {
        this._assertGreaterThan(this._boolValue(null),this._doubleValue(null),this._intValue(2));
    }
    test_greaterThan_unknownInt_knownDouble() : void {
        this._assertGreaterThan(this._boolValue(null),this._intValue(null),this._doubleValue(2.0));
    }
    test_greaterThan_unknownInt_knownInt() : void {
        this._assertGreaterThan(this._boolValue(null),this._intValue(null),this._intValue(2));
    }
    test_greaterThanOrEqual_knownDouble_knownDouble_false() : void {
        this._assertGreaterThanOrEqual(this._boolValue(false),this._doubleValue(1.0),this._doubleValue(2.0));
    }
    test_greaterThanOrEqual_knownDouble_knownDouble_true() : void {
        this._assertGreaterThanOrEqual(this._boolValue(true),this._doubleValue(2.0),this._doubleValue(1.0));
    }
    test_greaterThanOrEqual_knownDouble_knownInt_false() : void {
        this._assertGreaterThanOrEqual(this._boolValue(false),this._doubleValue(1.0),this._intValue(2));
    }
    test_greaterThanOrEqual_knownDouble_knownInt_true() : void {
        this._assertGreaterThanOrEqual(this._boolValue(true),this._doubleValue(2.0),this._intValue(1));
    }
    test_greaterThanOrEqual_knownDouble_unknownDouble() : void {
        this._assertGreaterThanOrEqual(this._boolValue(null),this._doubleValue(1.0),this._doubleValue(null));
    }
    test_greaterThanOrEqual_knownDouble_unknownInt() : void {
        this._assertGreaterThanOrEqual(this._boolValue(null),this._doubleValue(1.0),this._intValue(null));
    }
    test_greaterThanOrEqual_knownInt_knownInt_false() : void {
        this._assertGreaterThanOrEqual(this._boolValue(false),this._intValue(1),this._intValue(2));
    }
    test_greaterThanOrEqual_knownInt_knownInt_true() : void {
        this._assertGreaterThanOrEqual(this._boolValue(true),this._intValue(2),this._intValue(2));
    }
    test_greaterThanOrEqual_knownInt_knownString() : void {
        this._assertGreaterThanOrEqual(null,this._intValue(1),this._stringValue("2"));
    }
    test_greaterThanOrEqual_knownInt_unknownDouble() : void {
        this._assertGreaterThanOrEqual(this._boolValue(null),this._intValue(1),this._doubleValue(null));
    }
    test_greaterThanOrEqual_knownInt_unknownInt() : void {
        this._assertGreaterThanOrEqual(this._boolValue(null),this._intValue(1),this._intValue(null));
    }
    test_greaterThanOrEqual_knownString_knownInt() : void {
        this._assertGreaterThanOrEqual(null,this._stringValue("1"),this._intValue(2));
    }
    test_greaterThanOrEqual_unknownDouble_knownDouble() : void {
        this._assertGreaterThanOrEqual(this._boolValue(null),this._doubleValue(null),this._doubleValue(2.0));
    }
    test_greaterThanOrEqual_unknownDouble_knownInt() : void {
        this._assertGreaterThanOrEqual(this._boolValue(null),this._doubleValue(null),this._intValue(2));
    }
    test_greaterThanOrEqual_unknownInt_knownDouble() : void {
        this._assertGreaterThanOrEqual(this._boolValue(null),this._intValue(null),this._doubleValue(2.0));
    }
    test_greaterThanOrEqual_unknownInt_knownInt() : void {
        this._assertGreaterThanOrEqual(this._boolValue(null),this._intValue(null),this._intValue(2));
    }
    test_hasKnownValue_bool_false() : void {
        expect(this._boolValue(false).hasKnownValue,isTrue);
    }
    test_hasKnownValue_bool_true() : void {
        expect(this._boolValue(true).hasKnownValue,isTrue);
    }
    test_hasKnownValue_bool_unknown() : void {
        expect(this._boolValue(null).hasKnownValue,isFalse);
    }
    test_hasKnownValue_double_known() : void {
        expect(this._doubleValue(2.3).hasKnownValue,isTrue);
    }
    test_hasKnownValue_double_unknown() : void {
        expect(this._doubleValue(null).hasKnownValue,isFalse);
    }
    test_hasKnownValue_dynamic() : void {
        expect(this._dynamicValue().hasKnownValue,isTrue);
    }
    test_hasKnownValue_int_known() : void {
        expect(this._intValue(23).hasKnownValue,isTrue);
    }
    test_hasKnownValue_int_unknown() : void {
        expect(this._intValue(null).hasKnownValue,isFalse);
    }
    test_hasKnownValue_list_empty() : void {
        expect(this._listValue().hasKnownValue,isTrue);
    }
    test_hasKnownValue_list_invalidElement() : void {
        expect(this._listValue(new core.DartList.literal(this._dynamicValue())).hasKnownValue,isTrue);
    }
    test_hasKnownValue_list_valid() : void {
        expect(this._listValue(new core.DartList.literal(this._intValue(23))).hasKnownValue,isTrue);
    }
    test_hasKnownValue_map_empty() : void {
        expect(this._mapValue().hasKnownValue,isTrue);
    }
    test_hasKnownValue_map_invalidKey() : void {
        expect(this._mapValue(new core.DartList.literal(this._dynamicValue(),this._stringValue("value"))).hasKnownValue,isTrue);
    }
    test_hasKnownValue_map_invalidValue() : void {
        expect(this._mapValue(new core.DartList.literal(this._stringValue("key"),this._dynamicValue())).hasKnownValue,isTrue);
    }
    test_hasKnownValue_map_valid() : void {
        expect(this._mapValue(new core.DartList.literal(this._stringValue("key"),this._stringValue("value"))).hasKnownValue,isTrue);
    }
    test_hasKnownValue_null() : void {
        expect(this._nullValue().hasKnownValue,isTrue);
    }
    test_hasKnownValue_num() : void {
        expect(this._numValue().hasKnownValue,isFalse);
    }
    test_hasKnownValue_string_known() : void {
        expect(this._stringValue("twenty-three").hasKnownValue,isTrue);
    }
    test_hasKnownValue_string_unknown() : void {
        expect(this._stringValue(null).hasKnownValue,isFalse);
    }
    test_identical_bool_false() : void {
        this._assertIdentical(this._boolValue(false),this._boolValue(false),this._boolValue(true));
    }
    test_identical_bool_true() : void {
        this._assertIdentical(this._boolValue(true),this._boolValue(true),this._boolValue(true));
    }
    test_identical_bool_unknown() : void {
        this._assertIdentical(this._boolValue(null),this._boolValue(null),this._boolValue(false));
    }
    test_identical_double_false() : void {
        this._assertIdentical(this._boolValue(false),this._doubleValue(2.0),this._doubleValue(4.0));
    }
    test_identical_double_true() : void {
        this._assertIdentical(this._boolValue(true),this._doubleValue(2.0),this._doubleValue(2.0));
    }
    test_identical_double_unknown() : void {
        this._assertIdentical(this._boolValue(null),this._doubleValue(1.0),this._doubleValue(null));
    }
    test_identical_int_false() : void {
        this._assertIdentical(this._boolValue(false),this._intValue(-5),this._intValue(5));
    }
    test_identical_int_true() : void {
        this._assertIdentical(this._boolValue(true),this._intValue(5),this._intValue(5));
    }
    test_identical_int_unknown() : void {
        this._assertIdentical(this._boolValue(null),this._intValue(null),this._intValue(3));
    }
    test_identical_list_empty() : void {
        this._assertIdentical(this._boolValue(true),this._listValue(),this._listValue());
    }
    test_identical_list_false() : void {
        this._assertIdentical(this._boolValue(false),this._listValue(),this._listValue(new core.DartList.literal(this._intValue(3))));
    }
    test_identical_map_empty() : void {
        this._assertIdentical(this._boolValue(true),this._mapValue(),this._mapValue());
    }
    test_identical_map_false() : void {
        this._assertIdentical(this._boolValue(false),this._mapValue(),this._mapValue(new core.DartList.literal(this._intValue(1),this._intValue(2))));
    }
    test_identical_null() : void {
        this._assertIdentical(this._boolValue(true),this._nullValue(),this._nullValue());
    }
    test_identical_string_false() : void {
        this._assertIdentical(this._boolValue(false),this._stringValue("abc"),this._stringValue("def"));
    }
    test_identical_string_true() : void {
        this._assertIdentical(this._boolValue(true),this._stringValue("abc"),this._stringValue("abc"));
    }
    test_identical_string_unknown() : void {
        this._assertIdentical(this._boolValue(null),this._stringValue(null),this._stringValue("def"));
    }
    test_integerDivide_knownDouble_knownDouble() : void {
        this._assertIntegerDivide(this._intValue(3),this._doubleValue(6.0),this._doubleValue(2.0));
    }
    test_integerDivide_knownDouble_knownInt() : void {
        this._assertIntegerDivide(this._intValue(3),this._doubleValue(6.0),this._intValue(2));
    }
    test_integerDivide_knownDouble_unknownDouble() : void {
        this._assertIntegerDivide(this._intValue(null),this._doubleValue(6.0),this._doubleValue(null));
    }
    test_integerDivide_knownDouble_unknownInt() : void {
        this._assertIntegerDivide(this._intValue(null),this._doubleValue(6.0),this._intValue(null));
    }
    test_integerDivide_knownInt_knownInt() : void {
        this._assertIntegerDivide(this._intValue(3),this._intValue(6),this._intValue(2));
    }
    test_integerDivide_knownInt_knownString() : void {
        this._assertIntegerDivide(null,this._intValue(6),this._stringValue("2"));
    }
    test_integerDivide_knownInt_unknownDouble() : void {
        this._assertIntegerDivide(this._intValue(null),this._intValue(6),this._doubleValue(null));
    }
    test_integerDivide_knownInt_unknownInt() : void {
        this._assertIntegerDivide(this._intValue(null),this._intValue(6),this._intValue(null));
    }
    test_integerDivide_knownString_knownInt() : void {
        this._assertIntegerDivide(null,this._stringValue("6"),this._intValue(2));
    }
    test_integerDivide_unknownDouble_knownDouble() : void {
        this._assertIntegerDivide(this._intValue(null),this._doubleValue(null),this._doubleValue(2.0));
    }
    test_integerDivide_unknownDouble_knownInt() : void {
        this._assertIntegerDivide(this._intValue(null),this._doubleValue(null),this._intValue(2));
    }
    test_integerDivide_unknownInt_knownDouble() : void {
        this._assertIntegerDivide(this._intValue(null),this._intValue(null),this._doubleValue(2.0));
    }
    test_integerDivide_unknownInt_knownInt() : void {
        this._assertIntegerDivide(this._intValue(null),this._intValue(null),this._intValue(2));
    }
    test_isBoolNumStringOrNull_bool_false() : void {
        expect(this._boolValue(false).isBoolNumStringOrNull,isTrue);
    }
    test_isBoolNumStringOrNull_bool_true() : void {
        expect(this._boolValue(true).isBoolNumStringOrNull,isTrue);
    }
    test_isBoolNumStringOrNull_bool_unknown() : void {
        expect(this._boolValue(null).isBoolNumStringOrNull,isTrue);
    }
    test_isBoolNumStringOrNull_double_known() : void {
        expect(this._doubleValue(2.3).isBoolNumStringOrNull,isTrue);
    }
    test_isBoolNumStringOrNull_double_unknown() : void {
        expect(this._doubleValue(null).isBoolNumStringOrNull,isTrue);
    }
    test_isBoolNumStringOrNull_dynamic() : void {
        expect(this._dynamicValue().isBoolNumStringOrNull,isTrue);
    }
    test_isBoolNumStringOrNull_int_known() : void {
        expect(this._intValue(23).isBoolNumStringOrNull,isTrue);
    }
    test_isBoolNumStringOrNull_int_unknown() : void {
        expect(this._intValue(null).isBoolNumStringOrNull,isTrue);
    }
    test_isBoolNumStringOrNull_list() : void {
        expect(this._listValue().isBoolNumStringOrNull,isFalse);
    }
    test_isBoolNumStringOrNull_null() : void {
        expect(this._nullValue().isBoolNumStringOrNull,isTrue);
    }
    test_isBoolNumStringOrNull_num() : void {
        expect(this._numValue().isBoolNumStringOrNull,isTrue);
    }
    test_isBoolNumStringOrNull_string_known() : void {
        expect(this._stringValue("twenty-three").isBoolNumStringOrNull,isTrue);
    }
    test_isBoolNumStringOrNull_string_unknown() : void {
        expect(this._stringValue(null).isBoolNumStringOrNull,isTrue);
    }
    test_lessThan_knownDouble_knownDouble_false() : void {
        this._assertLessThan(this._boolValue(false),this._doubleValue(2.0),this._doubleValue(1.0));
    }
    test_lessThan_knownDouble_knownDouble_true() : void {
        this._assertLessThan(this._boolValue(true),this._doubleValue(1.0),this._doubleValue(2.0));
    }
    test_lessThan_knownDouble_knownInt_false() : void {
        this._assertLessThan(this._boolValue(false),this._doubleValue(2.0),this._intValue(1));
    }
    test_lessThan_knownDouble_knownInt_true() : void {
        this._assertLessThan(this._boolValue(true),this._doubleValue(1.0),this._intValue(2));
    }
    test_lessThan_knownDouble_unknownDouble() : void {
        this._assertLessThan(this._boolValue(null),this._doubleValue(1.0),this._doubleValue(null));
    }
    test_lessThan_knownDouble_unknownInt() : void {
        this._assertLessThan(this._boolValue(null),this._doubleValue(1.0),this._intValue(null));
    }
    test_lessThan_knownInt_knownInt_false() : void {
        this._assertLessThan(this._boolValue(false),this._intValue(2),this._intValue(1));
    }
    test_lessThan_knownInt_knownInt_true() : void {
        this._assertLessThan(this._boolValue(true),this._intValue(1),this._intValue(2));
    }
    test_lessThan_knownInt_knownString() : void {
        this._assertLessThan(null,this._intValue(1),this._stringValue("2"));
    }
    test_lessThan_knownInt_unknownDouble() : void {
        this._assertLessThan(this._boolValue(null),this._intValue(1),this._doubleValue(null));
    }
    test_lessThan_knownInt_unknownInt() : void {
        this._assertLessThan(this._boolValue(null),this._intValue(1),this._intValue(null));
    }
    test_lessThan_knownString_knownInt() : void {
        this._assertLessThan(null,this._stringValue("1"),this._intValue(2));
    }
    test_lessThan_unknownDouble_knownDouble() : void {
        this._assertLessThan(this._boolValue(null),this._doubleValue(null),this._doubleValue(2.0));
    }
    test_lessThan_unknownDouble_knownInt() : void {
        this._assertLessThan(this._boolValue(null),this._doubleValue(null),this._intValue(2));
    }
    test_lessThan_unknownInt_knownDouble() : void {
        this._assertLessThan(this._boolValue(null),this._intValue(null),this._doubleValue(2.0));
    }
    test_lessThan_unknownInt_knownInt() : void {
        this._assertLessThan(this._boolValue(null),this._intValue(null),this._intValue(2));
    }
    test_lessThanOrEqual_knownDouble_knownDouble_false() : void {
        this._assertLessThanOrEqual(this._boolValue(false),this._doubleValue(2.0),this._doubleValue(1.0));
    }
    test_lessThanOrEqual_knownDouble_knownDouble_true() : void {
        this._assertLessThanOrEqual(this._boolValue(true),this._doubleValue(1.0),this._doubleValue(2.0));
    }
    test_lessThanOrEqual_knownDouble_knownInt_false() : void {
        this._assertLessThanOrEqual(this._boolValue(false),this._doubleValue(2.0),this._intValue(1));
    }
    test_lessThanOrEqual_knownDouble_knownInt_true() : void {
        this._assertLessThanOrEqual(this._boolValue(true),this._doubleValue(1.0),this._intValue(2));
    }
    test_lessThanOrEqual_knownDouble_unknownDouble() : void {
        this._assertLessThanOrEqual(this._boolValue(null),this._doubleValue(1.0),this._doubleValue(null));
    }
    test_lessThanOrEqual_knownDouble_unknownInt() : void {
        this._assertLessThanOrEqual(this._boolValue(null),this._doubleValue(1.0),this._intValue(null));
    }
    test_lessThanOrEqual_knownInt_knownInt_false() : void {
        this._assertLessThanOrEqual(this._boolValue(false),this._intValue(2),this._intValue(1));
    }
    test_lessThanOrEqual_knownInt_knownInt_true() : void {
        this._assertLessThanOrEqual(this._boolValue(true),this._intValue(1),this._intValue(2));
    }
    test_lessThanOrEqual_knownInt_knownString() : void {
        this._assertLessThanOrEqual(null,this._intValue(1),this._stringValue("2"));
    }
    test_lessThanOrEqual_knownInt_unknownDouble() : void {
        this._assertLessThanOrEqual(this._boolValue(null),this._intValue(1),this._doubleValue(null));
    }
    test_lessThanOrEqual_knownInt_unknownInt() : void {
        this._assertLessThanOrEqual(this._boolValue(null),this._intValue(1),this._intValue(null));
    }
    test_lessThanOrEqual_knownString_knownInt() : void {
        this._assertLessThanOrEqual(null,this._stringValue("1"),this._intValue(2));
    }
    test_lessThanOrEqual_unknownDouble_knownDouble() : void {
        this._assertLessThanOrEqual(this._boolValue(null),this._doubleValue(null),this._doubleValue(2.0));
    }
    test_lessThanOrEqual_unknownDouble_knownInt() : void {
        this._assertLessThanOrEqual(this._boolValue(null),this._doubleValue(null),this._intValue(2));
    }
    test_lessThanOrEqual_unknownInt_knownDouble() : void {
        this._assertLessThanOrEqual(this._boolValue(null),this._intValue(null),this._doubleValue(2.0));
    }
    test_lessThanOrEqual_unknownInt_knownInt() : void {
        this._assertLessThanOrEqual(this._boolValue(null),this._intValue(null),this._intValue(2));
    }
    test_logicalAnd_false_false() : void {
        this._assertLogicalAnd(this._boolValue(false),this._boolValue(false),this._boolValue(false));
    }
    test_logicalAnd_false_null() : void {
        expect(() =>  {
            this._assertLogicalAnd(this._boolValue(false),this._boolValue(false),this._nullValue());
        },properties.throwsEvaluationException);
    }
    test_logicalAnd_false_string() : void {
        expect(() =>  {
            this._assertLogicalAnd(this._boolValue(false),this._boolValue(false),this._stringValue("false"));
        },properties.throwsEvaluationException);
    }
    test_logicalAnd_false_true() : void {
        this._assertLogicalAnd(this._boolValue(false),this._boolValue(false),this._boolValue(true));
    }
    test_logicalAnd_null_false() : void {
        expect(() =>  {
            this._assertLogicalAnd(this._boolValue(false),this._nullValue(),this._boolValue(false));
        },properties.throwsEvaluationException);
    }
    test_logicalAnd_null_true() : void {
        expect(() =>  {
            this._assertLogicalAnd(this._boolValue(false),this._nullValue(),this._boolValue(true));
        },properties.throwsEvaluationException);
    }
    test_logicalAnd_string_false() : void {
        expect(() =>  {
            this._assertLogicalAnd(this._boolValue(false),this._stringValue("true"),this._boolValue(false));
        },properties.throwsEvaluationException);
    }
    test_logicalAnd_string_true() : void {
        expect(() =>  {
            this._assertLogicalAnd(this._boolValue(false),this._stringValue("false"),this._boolValue(true));
        },properties.throwsEvaluationException);
    }
    test_logicalAnd_true_false() : void {
        this._assertLogicalAnd(this._boolValue(false),this._boolValue(true),this._boolValue(false));
    }
    test_logicalAnd_true_null() : void {
        this._assertLogicalAnd(null,this._boolValue(true),this._nullValue());
    }
    test_logicalAnd_true_string() : void {
        expect(() =>  {
            this._assertLogicalAnd(this._boolValue(false),this._boolValue(true),this._stringValue("true"));
        },properties.throwsEvaluationException);
    }
    test_logicalAnd_true_true() : void {
        this._assertLogicalAnd(this._boolValue(true),this._boolValue(true),this._boolValue(true));
    }
    test_logicalNot_false() : void {
        this._assertLogicalNot(this._boolValue(true),this._boolValue(false));
    }
    test_logicalNot_null() : void {
        this._assertLogicalNot(null,this._nullValue());
    }
    test_logicalNot_string() : void {
        expect(() =>  {
            this._assertLogicalNot(this._boolValue(true),this._stringValue(null));
        },properties.throwsEvaluationException);
    }
    test_logicalNot_true() : void {
        this._assertLogicalNot(this._boolValue(false),this._boolValue(true));
    }
    test_logicalNot_unknown() : void {
        this._assertLogicalNot(this._boolValue(null),this._boolValue(null));
    }
    test_logicalOr_false_false() : void {
        this._assertLogicalOr(this._boolValue(false),this._boolValue(false),this._boolValue(false));
    }
    test_logicalOr_false_null() : void {
        this._assertLogicalOr(null,this._boolValue(false),this._nullValue());
    }
    test_logicalOr_false_string() : void {
        expect(() =>  {
            this._assertLogicalOr(this._boolValue(false),this._boolValue(false),this._stringValue("false"));
        },properties.throwsEvaluationException);
    }
    test_logicalOr_false_true() : void {
        this._assertLogicalOr(this._boolValue(true),this._boolValue(false),this._boolValue(true));
    }
    test_logicalOr_null_false() : void {
        expect(() =>  {
            this._assertLogicalOr(this._boolValue(false),this._nullValue(),this._boolValue(false));
        },properties.throwsEvaluationException);
    }
    test_logicalOr_null_true() : void {
        expect(() =>  {
            this._assertLogicalOr(this._boolValue(true),this._nullValue(),this._boolValue(true));
        },properties.throwsEvaluationException);
    }
    test_logicalOr_string_false() : void {
        expect(() =>  {
            this._assertLogicalOr(this._boolValue(false),this._stringValue("true"),this._boolValue(false));
        },properties.throwsEvaluationException);
    }
    test_logicalOr_string_true() : void {
        expect(() =>  {
            this._assertLogicalOr(this._boolValue(true),this._stringValue("false"),this._boolValue(true));
        },properties.throwsEvaluationException);
    }
    test_logicalOr_true_false() : void {
        this._assertLogicalOr(this._boolValue(true),this._boolValue(true),this._boolValue(false));
    }
    test_logicalOr_true_null() : void {
        expect(() =>  {
            this._assertLogicalOr(this._boolValue(true),this._boolValue(true),this._nullValue());
        },properties.throwsEvaluationException);
    }
    test_logicalOr_true_string() : void {
        expect(() =>  {
            this._assertLogicalOr(this._boolValue(true),this._boolValue(true),this._stringValue("true"));
        },properties.throwsEvaluationException);
    }
    test_logicalOr_true_true() : void {
        this._assertLogicalOr(this._boolValue(true),this._boolValue(true),this._boolValue(true));
    }
    test_minus_knownDouble_knownDouble() : void {
        this._assertMinus(this._doubleValue(1.0),this._doubleValue(4.0),this._doubleValue(3.0));
    }
    test_minus_knownDouble_knownInt() : void {
        this._assertMinus(this._doubleValue(1.0),this._doubleValue(4.0),this._intValue(3));
    }
    test_minus_knownDouble_unknownDouble() : void {
        this._assertMinus(this._doubleValue(null),this._doubleValue(4.0),this._doubleValue(null));
    }
    test_minus_knownDouble_unknownInt() : void {
        this._assertMinus(this._doubleValue(null),this._doubleValue(4.0),this._intValue(null));
    }
    test_minus_knownInt_knownInt() : void {
        this._assertMinus(this._intValue(1),this._intValue(4),this._intValue(3));
    }
    test_minus_knownInt_knownString() : void {
        this._assertMinus(null,this._intValue(4),this._stringValue("3"));
    }
    test_minus_knownInt_unknownDouble() : void {
        this._assertMinus(this._doubleValue(null),this._intValue(4),this._doubleValue(null));
    }
    test_minus_knownInt_unknownInt() : void {
        this._assertMinus(this._intValue(null),this._intValue(4),this._intValue(null));
    }
    test_minus_knownString_knownInt() : void {
        this._assertMinus(null,this._stringValue("4"),this._intValue(3));
    }
    test_minus_unknownDouble_knownDouble() : void {
        this._assertMinus(this._doubleValue(null),this._doubleValue(null),this._doubleValue(3.0));
    }
    test_minus_unknownDouble_knownInt() : void {
        this._assertMinus(this._doubleValue(null),this._doubleValue(null),this._intValue(3));
    }
    test_minus_unknownInt_knownDouble() : void {
        this._assertMinus(this._doubleValue(null),this._intValue(null),this._doubleValue(3.0));
    }
    test_minus_unknownInt_knownInt() : void {
        this._assertMinus(this._intValue(null),this._intValue(null),this._intValue(3));
    }
    test_negated_double_known() : void {
        this._assertNegated(this._doubleValue(2.0),this._doubleValue(-2.0));
    }
    test_negated_double_unknown() : void {
        this._assertNegated(this._doubleValue(null),this._doubleValue(null));
    }
    test_negated_int_known() : void {
        this._assertNegated(this._intValue(-3),this._intValue(3));
    }
    test_negated_int_unknown() : void {
        this._assertNegated(this._intValue(null),this._intValue(null));
    }
    test_negated_string() : void {
        this._assertNegated(null,this._stringValue(null));
    }
    test_notEqual_bool_false() : void {
        this._assertNotEqual(this._boolValue(false),this._boolValue(true),this._boolValue(true));
    }
    test_notEqual_bool_true() : void {
        this._assertNotEqual(this._boolValue(true),this._boolValue(false),this._boolValue(true));
    }
    test_notEqual_bool_unknown() : void {
        this._assertNotEqual(this._boolValue(null),this._boolValue(null),this._boolValue(false));
    }
    test_notEqual_double_false() : void {
        this._assertNotEqual(this._boolValue(false),this._doubleValue(2.0),this._doubleValue(2.0));
    }
    test_notEqual_double_true() : void {
        this._assertNotEqual(this._boolValue(true),this._doubleValue(2.0),this._doubleValue(4.0));
    }
    test_notEqual_double_unknown() : void {
        this._assertNotEqual(this._boolValue(null),this._doubleValue(1.0),this._doubleValue(null));
    }
    test_notEqual_int_false() : void {
        this._assertNotEqual(this._boolValue(false),this._intValue(5),this._intValue(5));
    }
    test_notEqual_int_true() : void {
        this._assertNotEqual(this._boolValue(true),this._intValue(-5),this._intValue(5));
    }
    test_notEqual_int_unknown() : void {
        this._assertNotEqual(this._boolValue(null),this._intValue(null),this._intValue(3));
    }
    test_notEqual_null() : void {
        this._assertNotEqual(this._boolValue(false),this._nullValue(),this._nullValue());
    }
    test_notEqual_string_false() : void {
        this._assertNotEqual(this._boolValue(false),this._stringValue("abc"),this._stringValue("abc"));
    }
    test_notEqual_string_true() : void {
        this._assertNotEqual(this._boolValue(true),this._stringValue("abc"),this._stringValue("def"));
    }
    test_notEqual_string_unknown() : void {
        this._assertNotEqual(this._boolValue(null),this._stringValue(null),this._stringValue("def"));
    }
    test_performToString_bool_false() : void {
        this._assertPerformToString(this._stringValue("false"),this._boolValue(false));
    }
    test_performToString_bool_true() : void {
        this._assertPerformToString(this._stringValue("true"),this._boolValue(true));
    }
    test_performToString_bool_unknown() : void {
        this._assertPerformToString(this._stringValue(null),this._boolValue(null));
    }
    test_performToString_double_known() : void {
        this._assertPerformToString(this._stringValue("2.0"),this._doubleValue(2.0));
    }
    test_performToString_double_unknown() : void {
        this._assertPerformToString(this._stringValue(null),this._doubleValue(null));
    }
    test_performToString_int_known() : void {
        this._assertPerformToString(this._stringValue("5"),this._intValue(5));
    }
    test_performToString_int_unknown() : void {
        this._assertPerformToString(this._stringValue(null),this._intValue(null));
    }
    test_performToString_null() : void {
        this._assertPerformToString(this._stringValue("null"),this._nullValue());
    }
    test_performToString_string_known() : void {
        this._assertPerformToString(this._stringValue("abc"),this._stringValue("abc"));
    }
    test_performToString_string_unknown() : void {
        this._assertPerformToString(this._stringValue(null),this._stringValue(null));
    }
    test_remainder_knownDouble_knownDouble() : void {
        this._assertRemainder(this._doubleValue(1.0),this._doubleValue(7.0),this._doubleValue(2.0));
    }
    test_remainder_knownDouble_knownInt() : void {
        this._assertRemainder(this._doubleValue(1.0),this._doubleValue(7.0),this._intValue(2));
    }
    test_remainder_knownDouble_unknownDouble() : void {
        this._assertRemainder(this._doubleValue(null),this._doubleValue(7.0),this._doubleValue(null));
    }
    test_remainder_knownDouble_unknownInt() : void {
        this._assertRemainder(this._doubleValue(null),this._doubleValue(6.0),this._intValue(null));
    }
    test_remainder_knownInt_knownInt() : void {
        this._assertRemainder(this._intValue(1),this._intValue(7),this._intValue(2));
    }
    test_remainder_knownInt_knownString() : void {
        this._assertRemainder(null,this._intValue(7),this._stringValue("2"));
    }
    test_remainder_knownInt_unknownDouble() : void {
        this._assertRemainder(this._doubleValue(null),this._intValue(7),this._doubleValue(null));
    }
    test_remainder_knownInt_unknownInt() : void {
        this._assertRemainder(this._intValue(null),this._intValue(7),this._intValue(null));
    }
    test_remainder_knownString_knownInt() : void {
        this._assertRemainder(null,this._stringValue("7"),this._intValue(2));
    }
    test_remainder_unknownDouble_knownDouble() : void {
        this._assertRemainder(this._doubleValue(null),this._doubleValue(null),this._doubleValue(2.0));
    }
    test_remainder_unknownDouble_knownInt() : void {
        this._assertRemainder(this._doubleValue(null),this._doubleValue(null),this._intValue(2));
    }
    test_remainder_unknownInt_knownDouble() : void {
        this._assertRemainder(this._doubleValue(null),this._intValue(null),this._doubleValue(2.0));
    }
    test_remainder_unknownInt_knownInt() : void {
        this._assertRemainder(this._intValue(null),this._intValue(null),this._intValue(2));
    }
    test_shiftLeft_knownInt_knownInt() : void {
        this._assertShiftLeft(this._intValue(48),this._intValue(6),this._intValue(3));
    }
    test_shiftLeft_knownInt_knownString() : void {
        this._assertShiftLeft(null,this._intValue(6),this._stringValue(null));
    }
    test_shiftLeft_knownInt_tooLarge() : void {
        this._assertShiftLeft(this._intValue(null),this._intValue(6),new bare.createInstance(any,null,this._typeProvider.intType,new bare.createInstance(any,null,properties.LONG_MAX_VALUE)));
    }
    test_shiftLeft_knownInt_unknownInt() : void {
        this._assertShiftLeft(this._intValue(null),this._intValue(6),this._intValue(null));
    }
    test_shiftLeft_knownString_knownInt() : void {
        this._assertShiftLeft(null,this._stringValue(null),this._intValue(3));
    }
    test_shiftLeft_unknownInt_knownInt() : void {
        this._assertShiftLeft(this._intValue(null),this._intValue(null),this._intValue(3));
    }
    test_shiftLeft_unknownInt_unknownInt() : void {
        this._assertShiftLeft(this._intValue(null),this._intValue(null),this._intValue(null));
    }
    test_shiftRight_knownInt_knownInt() : void {
        this._assertShiftRight(this._intValue(6),this._intValue(48),this._intValue(3));
    }
    test_shiftRight_knownInt_knownString() : void {
        this._assertShiftRight(null,this._intValue(48),this._stringValue(null));
    }
    test_shiftRight_knownInt_tooLarge() : void {
        this._assertShiftRight(this._intValue(null),this._intValue(48),new bare.createInstance(any,null,this._typeProvider.intType,new bare.createInstance(any,null,properties.LONG_MAX_VALUE)));
    }
    test_shiftRight_knownInt_unknownInt() : void {
        this._assertShiftRight(this._intValue(null),this._intValue(48),this._intValue(null));
    }
    test_shiftRight_knownString_knownInt() : void {
        this._assertShiftRight(null,this._stringValue(null),this._intValue(3));
    }
    test_shiftRight_unknownInt_knownInt() : void {
        this._assertShiftRight(this._intValue(null),this._intValue(null),this._intValue(3));
    }
    test_shiftRight_unknownInt_unknownInt() : void {
        this._assertShiftRight(this._intValue(null),this._intValue(null),this._intValue(null));
    }
    test_stringLength_int() : void {
        expect(() =>  {
            this._assertStringLength(this._intValue(null),this._intValue(0));
        },properties.throwsEvaluationException);
    }
    test_stringLength_knownString() : void {
        this._assertStringLength(this._intValue(3),this._stringValue("abc"));
    }
    test_stringLength_unknownString() : void {
        this._assertStringLength(this._intValue(null),this._stringValue(null));
    }
    test_times_knownDouble_knownDouble() : void {
        this._assertTimes(this._doubleValue(6.0),this._doubleValue(2.0),this._doubleValue(3.0));
    }
    test_times_knownDouble_knownInt() : void {
        this._assertTimes(this._doubleValue(6.0),this._doubleValue(2.0),this._intValue(3));
    }
    test_times_knownDouble_unknownDouble() : void {
        this._assertTimes(this._doubleValue(null),this._doubleValue(2.0),this._doubleValue(null));
    }
    test_times_knownDouble_unknownInt() : void {
        this._assertTimes(this._doubleValue(null),this._doubleValue(2.0),this._intValue(null));
    }
    test_times_knownInt_knownInt() : void {
        this._assertTimes(this._intValue(6),this._intValue(2),this._intValue(3));
    }
    test_times_knownInt_knownString() : void {
        this._assertTimes(null,this._intValue(2),this._stringValue("3"));
    }
    test_times_knownInt_unknownDouble() : void {
        this._assertTimes(this._doubleValue(null),this._intValue(2),this._doubleValue(null));
    }
    test_times_knownInt_unknownInt() : void {
        this._assertTimes(this._intValue(null),this._intValue(2),this._intValue(null));
    }
    test_times_knownString_knownInt() : void {
        this._assertTimes(null,this._stringValue("2"),this._intValue(3));
    }
    test_times_unknownDouble_knownDouble() : void {
        this._assertTimes(this._doubleValue(null),this._doubleValue(null),this._doubleValue(3.0));
    }
    test_times_unknownDouble_knownInt() : void {
        this._assertTimes(this._doubleValue(null),this._doubleValue(null),this._intValue(3));
    }
    test_times_unknownInt_knownDouble() : void {
        this._assertTimes(this._doubleValue(null),this._intValue(null),this._doubleValue(3.0));
    }
    test_times_unknownInt_knownInt() : void {
        this._assertTimes(this._intValue(null),this._intValue(null),this._intValue(3));
    }
    _assertAdd(expected : any,left : any,right : any) : void {
        if (op(Op.EQUALS,expected,null)) {
            expect(() =>  {
                left.add(this._typeProvider,right);
            },properties.throwsEvaluationException);
        }else {
            let result : any = left.add(this._typeProvider,right);
            expect(result,isNotNull);
            expect(result,expected);
        }
    }
    _assertBitAnd(expected : any,left : any,right : any) : void {
        if (op(Op.EQUALS,expected,null)) {
            expect(() =>  {
                left.bitAnd(this._typeProvider,right);
            },properties.throwsEvaluationException);
        }else {
            let result : any = left.bitAnd(this._typeProvider,right);
            expect(result,isNotNull);
            expect(result,expected);
        }
    }
    _assertBitNot(expected : any,operand : any) : void {
        if (op(Op.EQUALS,expected,null)) {
            expect(() =>  {
                operand.bitNot(this._typeProvider);
            },properties.throwsEvaluationException);
        }else {
            let result : any = operand.bitNot(this._typeProvider);
            expect(result,isNotNull);
            expect(result,expected);
        }
    }
    _assertBitOr(expected : any,left : any,right : any) : void {
        if (op(Op.EQUALS,expected,null)) {
            expect(() =>  {
                left.bitOr(this._typeProvider,right);
            },properties.throwsEvaluationException);
        }else {
            let result : any = left.bitOr(this._typeProvider,right);
            expect(result,isNotNull);
            expect(result,expected);
        }
    }
    _assertBitXor(expected : any,left : any,right : any) : void {
        if (op(Op.EQUALS,expected,null)) {
            expect(() =>  {
                left.bitXor(this._typeProvider,right);
            },properties.throwsEvaluationException);
        }else {
            let result : any = left.bitXor(this._typeProvider,right);
            expect(result,isNotNull);
            expect(result,expected);
        }
    }
    _assertConcatenate(expected : any,left : any,right : any) : void {
        if (op(Op.EQUALS,expected,null)) {
            expect(() =>  {
                left.concatenate(this._typeProvider,right);
            },properties.throwsEvaluationException);
        }else {
            let result : any = left.concatenate(this._typeProvider,right);
            expect(result,isNotNull);
            expect(result,expected);
        }
    }
    _assertDivide(expected : any,left : any,right : any) : void {
        if (op(Op.EQUALS,expected,null)) {
            expect(() =>  {
                left.divide(this._typeProvider,right);
            },properties.throwsEvaluationException);
        }else {
            let result : any = left.divide(this._typeProvider,right);
            expect(result,isNotNull);
            expect(result,expected);
        }
    }
    _assertEqualEqual(expected : any,left : any,right : any) : void {
        if (op(Op.EQUALS,expected,null)) {
            expect(() =>  {
                left.equalEqual(this._typeProvider,right);
            },properties.throwsEvaluationException);
        }else {
            let result : any = left.equalEqual(this._typeProvider,right);
            expect(result,isNotNull);
            expect(result,expected);
        }
    }
    _assertGreaterThan(expected : any,left : any,right : any) : void {
        if (op(Op.EQUALS,expected,null)) {
            expect(() =>  {
                left.greaterThan(this._typeProvider,right);
            },properties.throwsEvaluationException);
        }else {
            let result : any = left.greaterThan(this._typeProvider,right);
            expect(result,isNotNull);
            expect(result,expected);
        }
    }
    _assertGreaterThanOrEqual(expected : any,left : any,right : any) : void {
        if (op(Op.EQUALS,expected,null)) {
            expect(() =>  {
                left.greaterThanOrEqual(this._typeProvider,right);
            },properties.throwsEvaluationException);
        }else {
            let result : any = left.greaterThanOrEqual(this._typeProvider,right);
            expect(result,isNotNull);
            expect(result,expected);
        }
    }
    _assertIdentical(expected : any,left : any,right : any) : void {
        let result : any = left.isIdentical(this._typeProvider,right);
        expect(result,isNotNull);
        expect(result,expected);
    }
    _assertInstanceOfObjectArray(result : core.DartObject) : void {
    }
    _assertIntegerDivide(expected : any,left : any,right : any) : void {
        if (op(Op.EQUALS,expected,null)) {
            expect(() =>  {
                left.integerDivide(this._typeProvider,right);
            },properties.throwsEvaluationException);
        }else {
            let result : any = left.integerDivide(this._typeProvider,right);
            expect(result,isNotNull);
            expect(result,expected);
        }
    }
    _assertLessThan(expected : any,left : any,right : any) : void {
        if (op(Op.EQUALS,expected,null)) {
            expect(() =>  {
                left.lessThan(this._typeProvider,right);
            },properties.throwsEvaluationException);
        }else {
            let result : any = left.lessThan(this._typeProvider,right);
            expect(result,isNotNull);
            expect(result,expected);
        }
    }
    _assertLessThanOrEqual(expected : any,left : any,right : any) : void {
        if (op(Op.EQUALS,expected,null)) {
            expect(() =>  {
                left.lessThanOrEqual(this._typeProvider,right);
            },properties.throwsEvaluationException);
        }else {
            let result : any = left.lessThanOrEqual(this._typeProvider,right);
            expect(result,isNotNull);
            expect(result,expected);
        }
    }
    _assertLogicalAnd(expected : any,left : any,right : any) : void {
        if (op(Op.EQUALS,expected,null)) {
            expect(() =>  {
                left.logicalAnd(this._typeProvider,right);
            },properties.throwsEvaluationException);
        }else {
            let result : any = left.logicalAnd(this._typeProvider,right);
            expect(result,isNotNull);
            expect(result,expected);
        }
    }
    _assertLogicalNot(expected : any,operand : any) : void {
        if (op(Op.EQUALS,expected,null)) {
            expect(() =>  {
                operand.logicalNot(this._typeProvider);
            },properties.throwsEvaluationException);
        }else {
            let result : any = operand.logicalNot(this._typeProvider);
            expect(result,isNotNull);
            expect(result,expected);
        }
    }
    _assertLogicalOr(expected : any,left : any,right : any) : void {
        if (op(Op.EQUALS,expected,null)) {
            expect(() =>  {
                left.logicalOr(this._typeProvider,right);
            },properties.throwsEvaluationException);
        }else {
            let result : any = left.logicalOr(this._typeProvider,right);
            expect(result,isNotNull);
            expect(result,expected);
        }
    }
    _assertMinus(expected : any,left : any,right : any) : void {
        if (op(Op.EQUALS,expected,null)) {
            expect(() =>  {
                left.minus(this._typeProvider,right);
            },properties.throwsEvaluationException);
        }else {
            let result : any = left.minus(this._typeProvider,right);
            expect(result,isNotNull);
            expect(result,expected);
        }
    }
    _assertNegated(expected : any,operand : any) : void {
        if (op(Op.EQUALS,expected,null)) {
            expect(() =>  {
                operand.negated(this._typeProvider);
            },properties.throwsEvaluationException);
        }else {
            let result : any = operand.negated(this._typeProvider);
            expect(result,isNotNull);
            expect(result,expected);
        }
    }
    _assertNotEqual(expected : any,left : any,right : any) : void {
        if (op(Op.EQUALS,expected,null)) {
            expect(() =>  {
                left.notEqual(this._typeProvider,right);
            },properties.throwsEvaluationException);
        }else {
            let result : any = left.notEqual(this._typeProvider,right);
            expect(result,isNotNull);
            expect(result,expected);
        }
    }
    _assertPerformToString(expected : any,operand : any) : void {
        if (op(Op.EQUALS,expected,null)) {
            expect(() =>  {
                operand.performToString(this._typeProvider);
            },properties.throwsEvaluationException);
        }else {
            let result : any = operand.performToString(this._typeProvider);
            expect(result,isNotNull);
            expect(result,expected);
        }
    }
    _assertRemainder(expected : any,left : any,right : any) : void {
        if (op(Op.EQUALS,expected,null)) {
            expect(() =>  {
                left.remainder(this._typeProvider,right);
            },properties.throwsEvaluationException);
        }else {
            let result : any = left.remainder(this._typeProvider,right);
            expect(result,isNotNull);
            expect(result,expected);
        }
    }
    _assertShiftLeft(expected : any,left : any,right : any) : void {
        if (op(Op.EQUALS,expected,null)) {
            expect(() =>  {
                left.shiftLeft(this._typeProvider,right);
            },properties.throwsEvaluationException);
        }else {
            let result : any = left.shiftLeft(this._typeProvider,right);
            expect(result,isNotNull);
            expect(result,expected);
        }
    }
    _assertShiftRight(expected : any,left : any,right : any) : void {
        if (op(Op.EQUALS,expected,null)) {
            expect(() =>  {
                left.shiftRight(this._typeProvider,right);
            },properties.throwsEvaluationException);
        }else {
            let result : any = left.shiftRight(this._typeProvider,right);
            expect(result,isNotNull);
            expect(result,expected);
        }
    }
    _assertStringLength(expected : any,operand : any) : void {
        if (op(Op.EQUALS,expected,null)) {
            expect(() =>  {
                operand.stringLength(this._typeProvider);
            },properties.throwsEvaluationException);
        }else {
            let result : any = operand.stringLength(this._typeProvider);
            expect(result,isNotNull);
            expect(result,expected);
        }
    }
    _assertTimes(expected : any,left : any,right : any) : void {
        if (op(Op.EQUALS,expected,null)) {
            expect(() =>  {
                left.times(this._typeProvider,right);
            },properties.throwsEvaluationException);
        }else {
            let result : any = left.times(this._typeProvider,right);
            expect(result,isNotNull);
            expect(result,expected);
        }
    }
    _boolValue(value : boolean) : any {
        if (value == null) {
            return new bare.createInstance(any,null,this._typeProvider.boolType,BoolState.UNKNOWN_VALUE);
        }else if (core.identical(value,false)) {
            return new bare.createInstance(any,null,this._typeProvider.boolType,BoolState.FALSE_STATE);
        }else if (core.identical(value,true)) {
            return new bare.createInstance(any,null,this._typeProvider.boolType,BoolState.TRUE_STATE);
        }
        fail("Invalid boolean value used in test");
        return null;
    }
    _doubleValue(value : double) : any {
        if (value == null) {
            return new bare.createInstance(any,null,this._typeProvider.doubleType,DoubleState.UNKNOWN_VALUE);
        }else {
            return new bare.createInstance(any,null,this._typeProvider.doubleType,new bare.createInstance(any,null,value));
        }
    }
    _dynamicValue() : any {
        return new bare.createInstance(any,null,this._typeProvider.nullType,DynamicState.DYNAMIC_STATE);
    }
    _intValue(value : number) : any {
        if (value == null) {
            return new bare.createInstance(any,null,this._typeProvider.intType,IntState.UNKNOWN_VALUE);
        }else {
            return new bare.createInstance(any,null,this._typeProvider.intType,new bare.createInstance(any,null,value));
        }
    }
    _listValue(elements? : core.DartList<any>) : any {
        elements = elements || DartObjectImpl.EMPTY_LIST;
        return new bare.createInstance(any,null,this._typeProvider.listType,new bare.createInstance(any,null,elements));
    }
    _mapValue(keyElementPairs? : core.DartList<any>) : any {
        keyElementPairs = keyElementPairs || DartObjectImpl.EMPTY_LIST;
        let map : core.DartMap<any,any> = new core.DartMap<any,any>();
        let count : number = keyElementPairs.length;
        for(let i : number = 0; i < count; ){
            map.set(keyElementPairs[i++],keyElementPairs[i++]);
        }
        return new bare.createInstance(any,null,this._typeProvider.mapType,new bare.createInstance(any,null,map));
    }
    _nullValue() : any {
        return new bare.createInstance(any,null,this._typeProvider.nullType,NullState.NULL_STATE);
    }
    _numValue() : any {
        return new bare.createInstance(any,null,this._typeProvider.nullType,NumState.UNKNOWN_VALUE);
    }
    _stringValue(value : string) : any {
        if (value == null) {
            return new bare.createInstance(any,null,this._typeProvider.stringType,StringState.UNKNOWN_VALUE);
        }else {
            return new bare.createInstance(any,null,this._typeProvider.stringType,new bare.createInstance(any,null,value));
        }
    }
    _symbolValue(value : string) : any {
        return new bare.createInstance(any,null,this._typeProvider.symbolType,new bare.createInstance(any,null,value));
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    DartObjectImplTest() {
        this._typeProvider = new bare.createInstance(any,null);
    }
}

export class properties {
    private static __$isEvaluationException : any;
    static get isEvaluationException() : any { 
        if (this.__$isEvaluationException===undefined) {
            this.__$isEvaluationException = new bare.createInstance(any,null);
        }
        return this.__$isEvaluationException;
    }
    static set isEvaluationException(__$value : any)  { 
        this.__$isEvaluationException = __$value;
    }

    private static __$LONG_MAX_VALUE : number;
    static get LONG_MAX_VALUE() : number { 
        if (this.__$LONG_MAX_VALUE===undefined) {
            this.__$LONG_MAX_VALUE = 9223372036854775807;
        }
        return this.__$LONG_MAX_VALUE;
    }
    static set LONG_MAX_VALUE(__$value : number)  { 
        this.__$LONG_MAX_VALUE = __$value;
    }

    private static __$throwsEvaluationException : any;
    static get throwsEvaluationException() : any { 
        if (this.__$throwsEvaluationException===undefined) {
            this.__$throwsEvaluationException = new bare.createInstance(any,null,properties.isEvaluationException);
        }
        return this.__$throwsEvaluationException;
    }
    static set throwsEvaluationException(__$value : any)  { 
        this.__$throwsEvaluationException = __$value;
    }

}
