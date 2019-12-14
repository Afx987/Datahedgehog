/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/generated/java_core_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => any = () =>  {
    group('Character',() =>  {
        group('isLetter',() =>  {
            test('digits',() =>  {
                expect(Character.isLetter(new core.DartString('0').codeUnitAt(0)),isFalse);
                expect(Character.isLetter(new core.DartString('1').codeUnitAt(0)),isFalse);
                expect(Character.isLetter(new core.DartString('9').codeUnitAt(0)),isFalse);
            });
            test('letters',() =>  {
                expect(Character.isLetter(new core.DartString('a').codeUnitAt(0)),isTrue);
                expect(Character.isLetter(new core.DartString('b').codeUnitAt(0)),isTrue);
                expect(Character.isLetter(new core.DartString('z').codeUnitAt(0)),isTrue);
                expect(Character.isLetter(new core.DartString('C').codeUnitAt(0)),isTrue);
                expect(Character.isLetter(new core.DartString('D').codeUnitAt(0)),isTrue);
                expect(Character.isLetter(new core.DartString('Y').codeUnitAt(0)),isTrue);
            });
            test('other',() =>  {
                expect(Character.isLetter(new core.DartString(' ').codeUnitAt(0)),isFalse);
                expect(Character.isLetter(new core.DartString('.').codeUnitAt(0)),isFalse);
                expect(Character.isLetter(new core.DartString('-').codeUnitAt(0)),isFalse);
                expect(Character.isLetter(new core.DartString('+').codeUnitAt(0)),isFalse);
            });
        });
        group('isLetterOrDigit',() =>  {
            test('digits',() =>  {
                expect(Character.isLetterOrDigit(new core.DartString('0').codeUnitAt(0)),isTrue);
                expect(Character.isLetterOrDigit(new core.DartString('1').codeUnitAt(0)),isTrue);
                expect(Character.isLetterOrDigit(new core.DartString('9').codeUnitAt(0)),isTrue);
            });
            test('letters',() =>  {
                expect(Character.isLetterOrDigit(new core.DartString('a').codeUnitAt(0)),isTrue);
                expect(Character.isLetterOrDigit(new core.DartString('b').codeUnitAt(0)),isTrue);
                expect(Character.isLetterOrDigit(new core.DartString('z').codeUnitAt(0)),isTrue);
                expect(Character.isLetterOrDigit(new core.DartString('C').codeUnitAt(0)),isTrue);
                expect(Character.isLetterOrDigit(new core.DartString('D').codeUnitAt(0)),isTrue);
                expect(Character.isLetterOrDigit(new core.DartString('Y').codeUnitAt(0)),isTrue);
            });
            test('other',() =>  {
                expect(Character.isLetterOrDigit(new core.DartString(' ').codeUnitAt(0)),isFalse);
                expect(Character.isLetterOrDigit(new core.DartString('.').codeUnitAt(0)),isFalse);
                expect(Character.isLetterOrDigit(new core.DartString('-').codeUnitAt(0)),isFalse);
                expect(Character.isLetterOrDigit(new core.DartString('+').codeUnitAt(0)),isFalse);
            });
        });
    });
};
export class properties {
}
