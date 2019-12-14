/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/services/correction/strings_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(StringsTest);
    });
};
export namespace StringsTest {
    export type Constructors = 'StringsTest';
    export type Interface = Omit<StringsTest, Constructors>;
}
@DartClass
export class StringsTest {
    test_capitalize() : void {
        expect(capitalize(''),'');
        expect(capitalize('a'),'A');
        expect(capitalize('abc'),'Abc');
        expect(capitalize('abc def'),'Abc def');
        expect(capitalize('ABC'),'ABC');
    }
    test_compareStrings() : void {
        expect(compareStrings(null,null),0);
        expect(compareStrings(null,'b'),1);
        expect(compareStrings('a',null),-1);
        expect(compareStrings('a','b'),-1);
        expect(compareStrings('b','a'),1);
    }
    test_computeSimpleDiff() : void {
        var assertDiff : (oldStr : string,newStr : string) => any = (oldStr : string,newStr : string) =>  {
            let diff : any = computeSimpleDiff(oldStr,newStr);
            expect(diff.offset,isNonNegative);
            expect(diff.length,isNonNegative);
            let applied : string = new core.DartString(oldStr).substring(0,diff.offset) + diff.replacement + new core.DartString(oldStr).substring(op(Op.PLUS,diff.offset,diff.length));
            expect(applied,newStr);
        };
        assertDiff('','');
        assertDiff('','a');
        assertDiff('abc','');
        assertDiff('abcd','acd');
        assertDiff('a','b');
        assertDiff('12345xyz','12345abcxyz');
        assertDiff('12345xyz','12345xyzabc');
        assertDiff('abbc','abbbc');
        assertDiff('abbbbc','abbbbbbc');
    }
    test_countMatches() : void {
        expect(countMatches(null,null),0);
        expect(countMatches('abc',null),0);
        expect(countMatches(null,'abc'),0);
        expect(countMatches('ababa','a'),3);
        expect(countMatches('ababa','ab'),2);
        expect(countMatches('aaabaa','aa'),2);
    }
    test_findCommonPrefix() : void {
        expect(findCommonPrefix('abc','xyz'),0);
        expect(findCommonPrefix('1234abcdef','1234xyz'),4);
        expect(findCommonPrefix('123','123xyz'),3);
    }
    test_findCommonSuffix() : void {
        expect(findCommonSuffix('abc','xyz'),0);
        expect(findCommonSuffix('abcdef1234','xyz1234'),4);
        expect(findCommonSuffix('123','xyz123'),3);
    }
    test_isBlank() : void {
        expect(isBlank(null),isTrue);
        expect(isBlank(''),isTrue);
        expect(isBlank(' '),isTrue);
        expect(isBlank('	'),isTrue);
        expect(isBlank('  '),isTrue);
        expect(isBlank('X'),isFalse);
    }
    test_isDigit() : void {
        for(let c of new core.DartString('0123456789').codeUnits) {
            expect(isDigit(c),isTrue);
        }
        expect(isDigit(new core.DartString(' ').codeUnitAt(0)),isFalse);
        expect(isDigit(new core.DartString('A').codeUnitAt(0)),isFalse);
    }
    test_isLetter() : void {
        for(let c of new core.DartString('abcdefghijklmnopqrstuvwxyz').codeUnits) {
            expect(isLetter(c),isTrue);
        }
        for(let c of new core.DartString('ABCDEFGHIJKLMNOPQRSTUVWXYZ').codeUnits) {
            expect(isLetter(c),isTrue);
        }
        expect(isLetter(new core.DartString(' ').codeUnitAt(0)),isFalse);
        expect(isLetter(new core.DartString('0').codeUnitAt(0)),isFalse);
    }
    test_isLetterOrDigit() : void {
        for(let c of new core.DartString('abcdefghijklmnopqrstuvwxyz').codeUnits) {
            expect(isLetterOrDigit(c),isTrue);
        }
        for(let c of new core.DartString('ABCDEFGHIJKLMNOPQRSTUVWXYZ').codeUnits) {
            expect(isLetterOrDigit(c),isTrue);
        }
        for(let c of new core.DartString('0123456789').codeUnits) {
            expect(isLetterOrDigit(c),isTrue);
        }
        expect(isLetterOrDigit(new core.DartString(' ').codeUnitAt(0)),isFalse);
        expect(isLetterOrDigit(new core.DartString('.').codeUnitAt(0)),isFalse);
    }
    test_isSpace() : void {
        expect(isSpace(new core.DartString(' ').codeUnitAt(0)),isTrue);
        expect(isSpace(new core.DartString('	').codeUnitAt(0)),isTrue);
        expect(isSpace(new core.DartString('').codeUnitAt(0)),isFalse);
        expect(isSpace(new core.DartString('\n').codeUnitAt(0)),isFalse);
        expect(isSpace(new core.DartString('0').codeUnitAt(0)),isFalse);
        expect(isSpace(new core.DartString('A').codeUnitAt(0)),isFalse);
    }
    test_isWhitespace() : void {
        expect(isWhitespace(new core.DartString(' ').codeUnitAt(0)),isTrue);
        expect(isWhitespace(new core.DartString('	').codeUnitAt(0)),isTrue);
        expect(isWhitespace(new core.DartString('').codeUnitAt(0)),isTrue);
        expect(isWhitespace(new core.DartString('\n').codeUnitAt(0)),isTrue);
        expect(isWhitespace(new core.DartString('0').codeUnitAt(0)),isFalse);
        expect(isWhitespace(new core.DartString('A').codeUnitAt(0)),isFalse);
    }
    test_remove() : void {
        expect(remove(null,'x'),null);
        expect(remove('abc',null),'abc');
        expect(remove('abc abbc abbbc','b'),'ac ac ac');
        expect(remove('abc abbc abbbc','bc'),'a ab abb');
    }
    test_removeEnd() : void {
        expect(removeEnd(null,'x'),null);
        expect(removeEnd('abc',null),'abc');
        expect(removeEnd('www.domain.com','.com.'),'www.domain.com');
        expect(removeEnd('www.domain.com','domain'),'www.domain.com');
        expect(removeEnd('www.domain.com','.com'),'www.domain');
    }
    test_repeat() : void {
        expect(repeat('x',0),'');
        expect(repeat('x',5),'xxxxx');
        expect(repeat('abc',3),'abcabcabc');
    }
    test_substringAfterLast() : void {
        expect(substringAfterLast('','/'),'');
        expect(substringAfterLast('abc',''),'');
        expect(substringAfterLast('abc','d'),'abc');
        expect(substringAfterLast('abcbde','b'),'de');
    }
    constructor() {
    }
    @defaultConstructor
    StringsTest() {
    }
}

export class properties {
}
