/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/src/plugin/result_converter_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./protocol_test_utilities";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(ResultConverterTest);
    });
};
export namespace ResultConverterTest {
    export type Constructors = lib3.ProtocolTestUtilities.Constructors | 'ResultConverterTest';
    export type Interface = Omit<ResultConverterTest, Constructors>;
}
@DartClass
export class ResultConverterTest extends lib3.ProtocolTestUtilities {
    private static __$strings : core.DartList<string>;
    static get strings() : core.DartList<string> { 
        if (this.__$strings===undefined) {
            this.__$strings = new core.DartList.literal<string>('a','b','c','d','e','f','g','h','i','j','k','l','m','n');
        }
        return this.__$strings;
    }

    converter : any;

    test_convertAnalysisErrorFixes() : void {
        let error : any = this.analysisError(0,0);
        let change : any = this.sourceChange(4,4);
        let initial : any = new bare.createInstance(any,null,error,{
            fixes : new core.DartList.literal<any>(new bare.createInstance(any,null,100,change))});
        let expected : any = new bare.createInstance(any,null,error,{
            fixes : new core.DartList.literal<any>(change)});
        expect(this.converter.convertAnalysisErrorFixes(initial),expected);
    }
    test_convertAnalysisNavigationParams() : void {
        let initial : any = new bare.createInstance(any,null,'a.dart',new core.DartList.literal<any>(new bare.createInstance(any,null,1,2,new core.DartList.literal<number>(3,4))),new core.DartList.literal<any>(new bare.createInstance(any,null,ElementKind.FIELD,5,6,7,8,9)),new core.DartList.literal<string>('a','b'));
        let expected : any = new bare.createInstance(any,null,'a.dart',new core.DartList.literal<any>(new bare.createInstance(any,null,1,2,new core.DartList.literal<number>(3,4))),new core.DartList.literal<any>(new bare.createInstance(any,null,ElementKind.FIELD,5,6,7,8,9)),new core.DartList.literal<string>('a','b'));
        expect(this.converter.convertAnalysisNavigationParams(initial),expected);
    }
    test_convertEditGetRefactoringResult_inlineMethod() : void {
        let problem1 : any = this.refactoringProblem(0,0);
        let problem2 : any = this.refactoringProblem(2,4);
        let problem3 : any = this.refactoringProblem(4,8);
        let change : any = this.sourceChange(6,12);
        let initial : any = new bare.createInstance(any,null,new core.DartList.literal<any>(problem1),new core.DartList.literal<any>(problem2),new core.DartList.literal<any>(problem3),{
            feedback : new bare.createInstance(any,null,'a',true,{
                className : 'b'}),change : change,potentialEdits : new core.DartList.literal<string>('f')});
        let expected : any = new bare.createInstance(any,null,new core.DartList.literal<any>(problem1),new core.DartList.literal<any>(problem2),new core.DartList.literal<any>(problem3),{
            feedback : new bare.createInstance(any,null,'a',true,{
                className : 'b'}),change : change,potentialEdits : new core.DartList.literal<string>('f')});
        expect(this.converter.convertEditGetRefactoringResult(RefactoringKind.INLINE_METHOD,initial),expected);
    }
    test_convertEditGetRefactoringResult_moveFile() : void {
        let problem1 : any = this.refactoringProblem(0,0);
        let problem2 : any = this.refactoringProblem(2,4);
        let problem3 : any = this.refactoringProblem(4,8);
        let change : any = this.sourceChange(6,12);
        let initial : any = new bare.createInstance(any,null,new core.DartList.literal<any>(problem1),new core.DartList.literal<any>(problem2),new core.DartList.literal<any>(problem3),{
            feedback : new bare.createInstance(any,null),change : change,potentialEdits : new core.DartList.literal<string>('f')});
        let expected : any = new bare.createInstance(any,null,new core.DartList.literal<any>(problem1),new core.DartList.literal<any>(problem2),new core.DartList.literal<any>(problem3),{
            change : change,potentialEdits : new core.DartList.literal<string>('f')});
        expect(this.converter.convertEditGetRefactoringResult(RefactoringKind.MOVE_FILE,initial),expected);
    }
    test_convertPrioritizedSourceChange() : void {
        let change : any = this.sourceChange(0,0);
        let initial : any = new bare.createInstance(any,null,100,change);
        expect(this.converter.convertPrioritizedSourceChange(initial),change);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ResultConverterTest() {
        this.converter = new bare.createInstance(any,null);
    }
}

export class properties {
}
