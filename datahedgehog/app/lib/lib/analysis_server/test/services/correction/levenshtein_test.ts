/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/services/correction/levenshtein_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(LevenshteinTest);
    });
};
export namespace LevenshteinTest {
    export type Constructors = 'LevenshteinTest';
    export type Interface = Omit<LevenshteinTest, Constructors>;
}
@DartClass
export class LevenshteinTest {
    test_different_caseInsensitive() : void {
        expect(levenshtein('Saturday','sunday',5,{
            caseSensitive : false}),3);
        expect(levenshtein('SaturDay','sunday',5,{
            caseSensitive : false}),3);
    }
    test_different_onThreshold() : void {
        expect(levenshtein('','abcde',5),5);
        expect(levenshtein('abcde','',5),5);
    }
    test_different_overThreshold() : void {
        expect(levenshtein('','abcde',2),LEVENSHTEIN_MAX);
        expect(levenshtein('abcde','',2),LEVENSHTEIN_MAX);
    }
    test_different_overThreshold_length() : void {
        expect(levenshtein('a','abcdefgh',5),LEVENSHTEIN_MAX);
        expect(levenshtein('abcdefgh','a',5),LEVENSHTEIN_MAX);
    }
    test_different_underThreshold() : void {
        expect(levenshtein('String','Stirng',5),2);
        expect(levenshtein('kitten','sitting',5),3);
        expect(levenshtein('Saturday','Sunday',5),3);
    }
    test_negativeThreshold() : void {
        expect(() =>  {
            levenshtein('','',-5);
        },throws);
    }
    test_null() : void {
        expect(() =>  {
            levenshtein('',null,5);
        },throws);
        expect(() =>  {
            levenshtein(null,'',5);
        },throws);
    }
    test_same() : void {
        expect(levenshtein('','',5),0);
        expect(levenshtein('test','test',5),0);
    }
    test_same_caseInsensitive() : void {
        expect(levenshtein('test','Test',5,{
            caseSensitive : false}),0);
    }
    constructor() {
    }
    @defaultConstructor
    LevenshteinTest() {
    }
}

export class properties {
}
