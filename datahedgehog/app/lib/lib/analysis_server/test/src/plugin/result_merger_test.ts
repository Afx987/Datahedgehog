/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/src/plugin/result_merger_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(ResultMergerTest);
    });
};
export namespace ResultMergerTest {
    export type Constructors = 'ResultMergerTest';
    export type Interface = Omit<ResultMergerTest, Constructors>;
}
@DartClass
export class ResultMergerTest {
    merger : any;

    test_mergeAnalysisErrorFixes() : void {
        var createError : (offset : number) => any = (offset : number) : any =>  {
            let severity : any = AnalysisErrorSeverity.ERROR;
            let type : any = AnalysisErrorType.HINT;
            let location : any = new bare.createInstance(any,null,'test.dart',offset,2,3,4);
            return new bare.createInstance(any,null,severity,type,location,'','');
        };
        let error1 : any = createError(10);
        let error2 : any = createError(20);
        let error3 : any = createError(30);
        let error4 : any = createError(40);
        let change1 : any = new bare.createInstance(any,null,1,new bare.createInstance(any,null,'a'));
        let change2 : any = new bare.createInstance(any,null,2,new bare.createInstance(any,null,'b'));
        let change3 : any = new bare.createInstance(any,null,3,new bare.createInstance(any,null,'c'));
        let change4 : any = new bare.createInstance(any,null,4,new bare.createInstance(any,null,'d'));
        let change5 : any = new bare.createInstance(any,null,5,new bare.createInstance(any,null,'e'));
        let fix1 : any = new bare.createInstance(any,null,error1,{
            fixes : new core.DartList.literal(change1)});
        let fix2 : any = new bare.createInstance(any,null,error2,{
            fixes : new core.DartList.literal(change2)});
        let fix3 : any = new bare.createInstance(any,null,error2,{
            fixes : new core.DartList.literal(change3)});
        let fix4 : any = new bare.createInstance(any,null,error3,{
            fixes : new core.DartList.literal(change4)});
        let fix5 : any = new bare.createInstance(any,null,error4,{
            fixes : new core.DartList.literal(change5)});
        let fix2and3 : any = new bare.createInstance(any,null,error2,{
            fixes : new core.DartList.literal(change2,change3)});
        var runTest : () => void = () : void =>  {
            expect(this.merger.mergeAnalysisErrorFixes(new core.DartList.literal(new core.DartList.literal(fix1,fix2),new core.DartList.literal(fix3,fix4),new core.DartList.literal(fix5),new core.DartList.literal())),unorderedEquals(new core.DartList.literal(fix1,fix2and3,fix4,fix5)));
        };
        runTest();
        runTest();
    }
    test_mergeAnalysisErrors() : void {
        var createError : (offset : number) => any = (offset : number) : any =>  {
            let severity : any = AnalysisErrorSeverity.ERROR;
            let type : any = AnalysisErrorType.HINT;
            let location : any = new bare.createInstance(any,null,'test.dart',offset,2,3,4);
            return new bare.createInstance(any,null,severity,type,location,'','');
        };
        let error1 : any = createError(10);
        let error2 : any = createError(20);
        let error3 : any = createError(30);
        let error4 : any = createError(40);
        var runTest : () => void = () : void =>  {
            expect(this.merger.mergeAnalysisErrors(new core.DartList.literal(new core.DartList.literal(error1,error2),new core.DartList.literal(error3),new core.DartList.literal(),new core.DartList.literal(error4))),unorderedEquals(new core.DartList.literal(error1,error2,error3,error4)));
        };
        runTest();
        runTest();
    }
    test_mergeCompletionSuggestions() : void {
        var createSuggestion : (completion : string) => any = (completion : string) : any =>  {
            return new bare.createInstance(any,null,CompletionSuggestionKind.IDENTIFIER,50,completion,0,3,false,false);
        };
        let suggestion1 : any = createSuggestion('a');
        let suggestion2 : any = createSuggestion('b');
        let suggestion3 : any = createSuggestion('c');
        let suggestion4 : any = createSuggestion('d');
        var runTest : () => void = () : void =>  {
            expect(this.merger.mergeCompletionSuggestions(new core.DartList.literal(new core.DartList.literal(suggestion1),new core.DartList.literal(suggestion2,suggestion3,suggestion4),new core.DartList.literal())),unorderedEquals(new core.DartList.literal(suggestion1,suggestion2,suggestion3,suggestion4)));
        };
        runTest();
        runTest();
    }
    test_mergeFoldingRegion() : void {
        let kind : any = FoldingKind.COMMENT;
        let region1 : any = new bare.createInstance(any,null,kind,30,5);
        let region2 : any = new bare.createInstance(any,null,kind,0,4);
        let region3 : any = new bare.createInstance(any,null,kind,20,6);
        let region4 : any = new bare.createInstance(any,null,kind,10,3);
        let region5 : any = new bare.createInstance(any,null,kind,2,6);
        var runTest : () => void = () : void =>  {
            expect(this.merger.mergeFoldingRegions(new core.DartList.literal(new core.DartList.literal(region1,region2),new core.DartList.literal(),new core.DartList.literal(region3),new core.DartList.literal(region4,region5))),unorderedEquals(new core.DartList.literal(region1,region2,region3,region4)));
        };
        runTest();
        runTest();
    }
    test_mergeHighlightRegions() : void {
        let type : any = HighlightRegionType.COMMENT_BLOCK;
        let region1 : any = new bare.createInstance(any,null,type,30,5);
        let region2 : any = new bare.createInstance(any,null,type,0,4);
        let region3 : any = new bare.createInstance(any,null,type,20,6);
        let region4 : any = new bare.createInstance(any,null,type,10,3);
        var runTest : () => void = () : void =>  {
            expect(this.merger.mergeHighlightRegions(new core.DartList.literal(new core.DartList.literal(region1,region2),new core.DartList.literal(),new core.DartList.literal(region3),new core.DartList.literal(region4))),unorderedEquals(new core.DartList.literal(region1,region2,region3,region4)));
        };
        runTest();
        runTest();
    }
    test_mergeNavigation() : void {
        var target : (fileIndex : number,offset : number) => any = (fileIndex : number,offset : number) : any =>  {
            return new bare.createInstance(any,null,ElementKind.CLASS,fileIndex,offset,1,0,0);
        };
        let target1_1 : any = target(0,1);
        let target1_2 : any = target(0,2);
        let target2_1 : any = target(1,3);
        let target2_2 : any = target(1,4);
        let region1_1 : any = new bare.createInstance(any,null,10,4,new core.DartList.literal(0));
        let region1_2 : any = new bare.createInstance(any,null,20,4,new core.DartList.literal(1));
        let region2_1 : any = new bare.createInstance(any,null,30,4,new core.DartList.literal(2));
        let region2_2 : any = new bare.createInstance(any,null,40,4,new core.DartList.literal(3));
        let params1 : any = new bare.createInstance(any,null,'a.dart',new core.DartList.literal(region1_1,region1_2,region2_1,region2_2),new core.DartList.literal(target1_1,target1_2,target2_1,target2_2),new core.DartList.literal('one.dart','two.dart'));
        let target2_3 : any = target(0,4);
        let target2_4 : any = target(0,5);
        let target3_1 : any = target(1,6);
        let target3_2 : any = target(1,7);
        let region2_3 : any = new bare.createInstance(any,null,40,4,new core.DartList.literal(0));
        let region2_4 : any = new bare.createInstance(any,null,40,4,new core.DartList.literal(2));
        let region2_5 : any = new bare.createInstance(any,null,50,4,new core.DartList.literal(1));
        let region3_1 : any = new bare.createInstance(any,null,60,4,new core.DartList.literal(2));
        let region3_2 : any = new bare.createInstance(any,null,70,4,new core.DartList.literal(3));
        let params2 : any = new bare.createInstance(any,null,'a.dart',new core.DartList.literal(region2_3,region2_4,region2_5,region3_1,region3_2),new core.DartList.literal(target2_3,target2_4,target3_1,target3_2),new core.DartList.literal('two.dart','three.dart'));
        let expected : any = new bare.createInstance(any,null,'a.dart',new core.DartList.literal(region1_1,region1_2,region2_1,new bare.createInstance(any,null,40,4,new core.DartList.literal(3,5)),new bare.createInstance(any,null,50,4,new core.DartList.literal(4)),new bare.createInstance(any,null,60,4,new core.DartList.literal(5)),new bare.createInstance(any,null,70,4,new core.DartList.literal(6))),new core.DartList.literal(target1_1,target1_2,target2_1,target2_2,target(1,5),target(2,6),target(2,7)),new core.DartList.literal('one.dart','two.dart','three.dart'));
        var runTest : () => void = () : void =>  {
            expect(this.merger.mergeNavigation(new core.DartList.literal(params1,params2)),expected);
        };
        runTest();
        runTest();
    }
    test_mergeOccurrences() : void {
        let element1 : any = new bare.createInstance(any,null,ElementKind.CLASS,'e1',0);
        let element2 : any = new bare.createInstance(any,null,ElementKind.CLASS,'e2',0);
        let element3 : any = new bare.createInstance(any,null,ElementKind.CLASS,'e3',0);
        let occurrence1 : any = new bare.createInstance(any,null,element1,new core.DartList.literal(1,2,4),2);
        let occurrence2 : any = new bare.createInstance(any,null,element2,new core.DartList.literal(5),2);
        let occurrence3 : any = new bare.createInstance(any,null,element1,new core.DartList.literal(2,3),2);
        let occurrence4 : any = new bare.createInstance(any,null,element3,new core.DartList.literal(8),2);
        let occurrence5 : any = new bare.createInstance(any,null,element2,new core.DartList.literal(6),2);
        let occurrence6 : any = new bare.createInstance(any,null,element3,new core.DartList.literal(7,9),2);
        let result1 : any = new bare.createInstance(any,null,element1,new core.DartList.literal(1,2,3,4),2);
        let result2 : any = new bare.createInstance(any,null,element2,new core.DartList.literal(5,6),2);
        let result3 : any = new bare.createInstance(any,null,element3,new core.DartList.literal(7,8,9),2);
        var runTest : () => void = () : void =>  {
            expect(this.merger.mergeOccurrences(new core.DartList.literal(new core.DartList.literal(occurrence1,occurrence2),new core.DartList.literal(),new core.DartList.literal(occurrence3,occurrence4),new core.DartList.literal(occurrence5,occurrence6))),unorderedEquals(new core.DartList.literal(result1,result2,result3)));
        };
        runTest();
        runTest();
    }
    test_mergeOutline() : void {
        var element : (kind : any,offset : number) => any = (kind : any,offset : number) : any =>  {
            let location : any = new bare.createInstance(any,null,'',offset,0,0,0);
            return new bare.createInstance(any,null,kind,'',0,{
                location : location});
        };
        let element1 : any = element(ElementKind.CLASS,100);
        let element1_1 : any = element(ElementKind.METHOD,110);
        let element1_2 : any = element(ElementKind.METHOD,120);
        let element2 : any = element(ElementKind.CLASS,200);
        let element2_1 : any = element(ElementKind.METHOD,210);
        let element2_2 : any = element(ElementKind.METHOD,220);
        let element3_1 : any = element(ElementKind.METHOD,220);
        let element3_2 : any = element(ElementKind.METHOD,230);
        let element4 : any = element(ElementKind.CLASS,300);
        let element4_1 : any = element(ElementKind.METHOD,310);
        let outline1_1 : any = new bare.createInstance(any,null,element1_1,0,0,{
            children : new core.DartList.literal()});
        let outline1_2 : any = new bare.createInstance(any,null,element1_2,0,0,{
            children : new core.DartList.literal()});
        let outline1 : any = new bare.createInstance(any,null,element1,0,0,{
            children : new core.DartList.literal(outline1_1,outline1_2)});
        let outline2_1 : any = new bare.createInstance(any,null,element2_1,0,0,{
            children : new core.DartList.literal()});
        let outline2_2 : any = new bare.createInstance(any,null,element2_2,0,0,{
            children : new core.DartList.literal()});
        let outline3_1 : any = new bare.createInstance(any,null,element3_1,0,0,{
            children : new core.DartList.literal()});
        let outline3_2 : any = new bare.createInstance(any,null,element3_2,0,0,{
            children : new core.DartList.literal()});
        let outline2 : any = new bare.createInstance(any,null,element2,0,0,{
            children : new core.DartList.literal(outline2_1,outline2_2)});
        let outline3 : any = new bare.createInstance(any,null,element2,0,0,{
            children : new core.DartList.literal(outline3_1,outline3_2)});
        let outline2and3 : any = new bare.createInstance(any,null,element2,0,0,{
            children : new core.DartList.literal(outline2_1,outline2_2,outline3_2)});
        let outline4_1 : any = new bare.createInstance(any,null,element4_1,0,0,{
            children : new core.DartList.literal()});
        let outline4 : any = new bare.createInstance(any,null,element4,0,0,{
            children : new core.DartList.literal(outline4_1)});
        var runTest : () => void = () : void =>  {
            expect(this.merger.mergeOutline(new core.DartList.literal(new core.DartList.literal(outline1,outline2),new core.DartList.literal(),new core.DartList.literal(outline3,outline4))),unorderedEquals(new core.DartList.literal(outline1,outline2and3,outline4)));
        };
        runTest();
        runTest();
    }
    test_mergePrioritizedSourceChanges() : void {
        let kind1 : any = new bare.createInstance(any,null,1,new bare.createInstance(any,null,''));
        let kind2 : any = new bare.createInstance(any,null,1,new bare.createInstance(any,null,''));
        let kind3 : any = new bare.createInstance(any,null,1,new bare.createInstance(any,null,''));
        let kind4 : any = new bare.createInstance(any,null,1,new bare.createInstance(any,null,''));
        var runTest : () => void = () : void =>  {
            expect(this.merger.mergePrioritizedSourceChanges(new core.DartList.literal(new core.DartList.literal(kind3,kind2),new core.DartList.literal(),new core.DartList.literal(kind4),new core.DartList.literal(kind1))),unorderedEquals(new core.DartList.literal(kind1,kind2,kind3,kind4)));
        };
        runTest();
        runTest();
    }
    test_mergeRefactoringFeedbacks_convertGetterToMethodFeedback() : void {
        let feedback1 : any = new bare.createInstance(any,null);
        let feedback2 : any = new bare.createInstance(any,null);
        var runTest : () => void = () : void =>  {
            expect(this.merger.mergeRefactoringFeedbacks(new core.DartList.literal(feedback1,feedback2)),equals(feedback1));
        };
        runTest();
        runTest();
    }
    test_mergeRefactoringFeedbacks_convertMethodToGetterFeedback() : void {
        let feedback1 : any = new bare.createInstance(any,null);
        let feedback2 : any = new bare.createInstance(any,null);
        var runTest : () => void = () : void =>  {
            expect(this.merger.mergeRefactoringFeedbacks(new core.DartList.literal(feedback1,feedback2)),equals(feedback1));
        };
        runTest();
        runTest();
    }
    test_mergeRefactoringFeedbacks_extractLocalVariableFeedback_addEverything() : void {
        let names1 : core.DartList<string> = new core.DartList.literal<string>('a','b','c');
        let offsets1 : core.DartList<number> = new core.DartList.literal<number>(10,20);
        let lengths1 : core.DartList<number> = new core.DartList.literal<number>(4,5);
        let coveringOffsets1 : core.DartList<number> = new core.DartList.literal<number>(100,150,200);
        let coveringLengths1 : core.DartList<number> = new core.DartList.literal<number>(200,100,20);
        let feedback1 : any = new bare.createInstance(any,null,names1,offsets1,lengths1,{
            coveringExpressionOffsets : coveringOffsets1,coveringExpressionLengths : coveringLengths1});
        let names2 : core.DartList<string> = new core.DartList.literal<string>('c','d');
        let offsets2 : core.DartList<number> = new core.DartList.literal<number>(30);
        let lengths2 : core.DartList<number> = new core.DartList.literal<number>(6);
        let coveringOffsets2 : core.DartList<number> = new core.DartList.literal<number>(210);
        let coveringLengths2 : core.DartList<number> = new core.DartList.literal<number>(5);
        let feedback2 : any = new bare.createInstance(any,null,names2,offsets2,lengths2,{
            coveringExpressionOffsets : coveringOffsets2,coveringExpressionLengths : coveringLengths2});
        let resultNames : core.DartList<string> = new core.DartList.literal<string>('a','b','c','d');
        let resultOffsets : core.DartList<number> = ((_) : core.DartList<number> =>  {
            {
                _.addAll(offsets2);
                return _;
            }
        })(new core.DartList.from(offsets1));
        let resultLengths : core.DartList<number> = ((_) : core.DartList<number> =>  {
            {
                _.addAll(lengths2);
                return _;
            }
        })(new core.DartList.from(lengths1));
        let resultCoveringOffsets : core.DartList<number> = ((_) : core.DartList<number> =>  {
            {
                _.addAll(coveringOffsets2);
                return _;
            }
        })(new core.DartList.from(coveringOffsets1));
        let resultCoveringLengths : core.DartList<number> = ((_) : core.DartList<number> =>  {
            {
                _.addAll(coveringLengths2);
                return _;
            }
        })(new core.DartList.from(coveringLengths1));
        let result : any = new bare.createInstance(any,null,resultNames,resultOffsets,resultLengths,{
            coveringExpressionOffsets : resultCoveringOffsets,coveringExpressionLengths : resultCoveringLengths});
        var runTest : () => void = () : void =>  {
            expect(this.merger.mergeRefactoringFeedbacks(new core.DartList.literal(feedback1,feedback2)),equals(result));
        };
        runTest();
        runTest();
    }
    test_mergeRefactoringFeedbacks_extractLocalVariableFeedback_addOffsetsAndLengths() : void {
        let names1 : core.DartList<string> = new core.DartList.literal<string>('a','b','c');
        let offsets1 : core.DartList<number> = new core.DartList.literal<number>(10,20);
        let lengths1 : core.DartList<number> = new core.DartList.literal<number>(4,5);
        let coveringOffsets1 : core.DartList<number> = new core.DartList.literal<number>(100,150,200);
        let coveringLengths1 : core.DartList<number> = new core.DartList.literal<number>(200,100,20);
        let feedback1 : any = new bare.createInstance(any,null,names1,offsets1,lengths1,{
            coveringExpressionOffsets : coveringOffsets1,coveringExpressionLengths : coveringLengths1});
        let names2 : core.DartList<string> = new core.DartList.literal<string>();
        let offsets2 : core.DartList<number> = new core.DartList.literal<number>(30);
        let lengths2 : core.DartList<number> = new core.DartList.literal<number>(6);
        let feedback2 : any = new bare.createInstance(any,null,names2,offsets2,lengths2);
        let resultOffsets : core.DartList<number> = ((_) : core.DartList<number> =>  {
            {
                _.addAll(offsets2);
                return _;
            }
        })(new core.DartList.from(offsets1));
        let resultLengths : core.DartList<number> = ((_) : core.DartList<number> =>  {
            {
                _.addAll(lengths2);
                return _;
            }
        })(new core.DartList.from(lengths1));
        let result : any = new bare.createInstance(any,null,names1,resultOffsets,resultLengths,{
            coveringExpressionOffsets : coveringOffsets1,coveringExpressionLengths : coveringLengths1});
        var runTest : () => void = () : void =>  {
            expect(this.merger.mergeRefactoringFeedbacks(new core.DartList.literal(feedback1,feedback2)),equals(result));
        };
        runTest();
        runTest();
    }
    test_mergeRefactoringFeedbacks_extractLocalVariableFeedback_noCoverings() : void {
        let names1 : core.DartList<string> = new core.DartList.literal<string>('a','b','c');
        let offsets1 : core.DartList<number> = new core.DartList.literal<number>(10,20);
        let lengths1 : core.DartList<number> = new core.DartList.literal<number>(4,5);
        let feedback1 : any = new bare.createInstance(any,null,names1,offsets1,lengths1);
        let names2 : core.DartList<string> = new core.DartList.literal<string>();
        let offsets2 : core.DartList<number> = new core.DartList.literal<number>(30);
        let lengths2 : core.DartList<number> = new core.DartList.literal<number>(6);
        let feedback2 : any = new bare.createInstance(any,null,names2,offsets2,lengths2);
        let resultOffsets : core.DartList<number> = ((_) : core.DartList<number> =>  {
            {
                _.addAll(offsets2);
                return _;
            }
        })(new core.DartList.from(offsets1));
        let resultLengths : core.DartList<number> = ((_) : core.DartList<number> =>  {
            {
                _.addAll(lengths2);
                return _;
            }
        })(new core.DartList.from(lengths1));
        let result : any = new bare.createInstance(any,null,names1,resultOffsets,resultLengths);
        var runTest : () => void = () : void =>  {
            expect(this.merger.mergeRefactoringFeedbacks(new core.DartList.literal(feedback1,feedback2)),equals(result));
        };
        runTest();
        runTest();
    }
    test_mergeRefactoringFeedbacks_extractMethodFeedback() : void {
        let offset1 : number = 20;
        let length1 : number = 5;
        let returnType1 : string = 'int';
        let names1 : core.DartList<string> = new core.DartList.literal<string>('a','b','c');
        let canCreateGetter1 : boolean = false;
        let parameters1 : core.DartList<any> = new core.DartList.literal<any>();
        let offsets1 : core.DartList<number> = new core.DartList.literal<number>(10,20);
        let lengths1 : core.DartList<number> = new core.DartList.literal<number>(4,5);
        let feedback1 : any = new bare.createInstance(any,null,offset1,length1,returnType1,names1,canCreateGetter1,parameters1,offsets1,lengths1);
        let names2 : core.DartList<string> = new core.DartList.literal<string>('c','d');
        let canCreateGetter2 : boolean = true;
        let parameters2 : core.DartList<any> = new core.DartList.literal<any>();
        let offsets2 : core.DartList<number> = new core.DartList.literal<number>(30);
        let lengths2 : core.DartList<number> = new core.DartList.literal<number>(6);
        let feedback2 : any = new bare.createInstance(any,null,0,0,'',names2,canCreateGetter2,parameters2,offsets2,lengths2);
        let resultNames : core.DartList<string> = new core.DartList.literal<string>('a','b','c','d');
        let resultOffsets : core.DartList<number> = ((_) : core.DartList<number> =>  {
            {
                _.addAll(offsets2);
                return _;
            }
        })(new core.DartList.from(offsets1));
        let resultLengths : core.DartList<number> = ((_) : core.DartList<number> =>  {
            {
                _.addAll(lengths2);
                return _;
            }
        })(new core.DartList.from(lengths1));
        let result : any = new bare.createInstance(any,null,offset1,length1,returnType1,resultNames,false,parameters1,resultOffsets,resultLengths);
        var runTest : () => void = () : void =>  {
            expect(this.merger.mergeRefactoringFeedbacks(new core.DartList.literal(feedback1,feedback2)),equals(result));
        };
        runTest();
        runTest();
    }
    test_mergeRefactoringFeedbacks_inlineLocalVariableFeedback() : void {
        let feedback1 : any = new bare.createInstance(any,null,'a',2);
        let feedback2 : any = new bare.createInstance(any,null,'a',3);
        let result : any = new bare.createInstance(any,null,'a',5);
        var runTest : () => void = () : void =>  {
            expect(this.merger.mergeRefactoringFeedbacks(new core.DartList.literal(feedback1,feedback2)),equals(result));
        };
        runTest();
        runTest();
    }
    test_mergeRefactoringFeedbacks_inlineMethodFeedback() : void {
        let feedback1 : any = new bare.createInstance(any,null,'a',false);
        let feedback2 : any = new bare.createInstance(any,null,'a',false);
        var runTest : () => void = () : void =>  {
            expect(this.merger.mergeRefactoringFeedbacks(new core.DartList.literal(feedback1,feedback2)),equals(feedback1));
        };
        runTest();
        runTest();
    }
    test_mergeRefactoringFeedbacks_moveFileFeedback() : void {
        let feedback1 : any = new bare.createInstance(any,null);
        let feedback2 : any = new bare.createInstance(any,null);
        var runTest : () => void = () : void =>  {
            expect(this.merger.mergeRefactoringFeedbacks(new core.DartList.literal(feedback1,feedback2)),equals(feedback1));
        };
        runTest();
        runTest();
    }
    test_mergeRefactoringFeedbacks_renameFeedback() : void {
        let feedback1 : any = new bare.createInstance(any,null,10,0,'','');
        let feedback2 : any = new bare.createInstance(any,null,20,0,'','');
        var runTest : () => void = () : void =>  {
            expect(this.merger.mergeRefactoringFeedbacks(new core.DartList.literal(feedback1,feedback2)),equals(feedback1));
        };
        runTest();
        runTest();
    }
    test_mergeRefactoringKinds() : void {
        let kind1 : any = RefactoringKind.CONVERT_GETTER_TO_METHOD;
        let kind2 : any = RefactoringKind.EXTRACT_LOCAL_VARIABLE;
        let kind3 : any = RefactoringKind.INLINE_LOCAL_VARIABLE;
        let kind4 : any = RefactoringKind.MOVE_FILE;
        let kind5 : any = RefactoringKind.EXTRACT_LOCAL_VARIABLE;
        var runTest : () => void = () : void =>  {
            expect(this.merger.mergeRefactoringKinds(new core.DartList.literal(new core.DartList.literal(kind1,kind2),new core.DartList.literal(kind3),new core.DartList.literal(),new core.DartList.literal(kind4,kind5))),unorderedEquals(new core.DartList.literal(kind1,kind2,kind3,kind4)));
        };
        runTest();
        runTest();
    }
    test_mergeRefactorings() : void {
        var problem : (message : string) => any = (message : string) : any =>  {
            return new bare.createInstance(any,null,RefactoringProblemSeverity.ERROR,message);
        };
        let problem1 : any = problem('1');
        let problem2 : any = problem('2');
        let problem3 : any = problem('3');
        let problem4 : any = problem('4');
        let problem5 : any = problem('5');
        let problem6 : any = problem('6');
        let initialProblems1 : core.DartList<any> = new core.DartList.literal<any>(problem1,problem2);
        let optionsProblems1 : core.DartList<any> = new core.DartList.literal<any>(problem3);
        let finalProblems1 : core.DartList<any> = new core.DartList.literal<any>(problem4);
        let feedback1 : any = new bare.createInstance(any,null,10,0,'','');
        let edit1 : any = new bare.createInstance(any,null,'file1.dart',11,{
            edits : new core.DartList.literal<any>(new bare.createInstance(any,null,12,2,'w',{
                id : 'e1'}),new bare.createInstance(any,null,13,3,'x'))});
        let change1 : any = new bare.createInstance(any,null,'c1',{
            edits : new core.DartList.literal<any>(edit1)});
        let potentialEdits1 : core.DartList<string> = new core.DartList.literal<string>('e1');
        let result1 : any = new bare.createInstance(any,null,initialProblems1,optionsProblems1,finalProblems1,{
            feedback : feedback1,change : change1,potentialEdits : potentialEdits1});
        let initialProblems2 : core.DartList<any> = new core.DartList.literal<any>(problem5);
        let optionsProblems2 : core.DartList<any> = new core.DartList.literal<any>();
        let finalProblems2 : core.DartList<any> = new core.DartList.literal<any>(problem6);
        let feedback2 : any = new bare.createInstance(any,null,20,0,'','');
        let edit2 : any = new bare.createInstance(any,null,'file2.dart',21,{
            edits : new core.DartList.literal<any>(new bare.createInstance(any,null,12,2,'y',{
                id : 'e2'}),new bare.createInstance(any,null,13,3,'z'))});
        let change2 : any = new bare.createInstance(any,null,'c2',{
            edits : new core.DartList.literal<any>(edit2)});
        let potentialEdits2 : core.DartList<string> = new core.DartList.literal<string>('e2');
        let result2 : any = new bare.createInstance(any,null,initialProblems2,optionsProblems2,finalProblems2,{
            feedback : feedback2,change : change2,potentialEdits : potentialEdits2});
        let mergedInitialProblems : core.DartList<any> = new core.DartList.literal<any>(problem1,problem2,problem5);
        let mergedOptionsProblems : core.DartList<any> = new core.DartList.literal<any>(problem3);
        let mergedFinalProblems : core.DartList<any> = new core.DartList.literal<any>(problem4,problem6);
        let mergedChange : any = new bare.createInstance(any,null,'c1',{
            edits : new core.DartList.literal<any>(edit1,edit2)});
        let mergedPotentialEdits : core.DartList<string> = new core.DartList.literal<string>('e1','e2');
        let mergedResult : any = new bare.createInstance(any,null,mergedInitialProblems,mergedOptionsProblems,mergedFinalProblems,{
            feedback : this.merger.mergeRefactoringFeedbacks(new core.DartList.literal(feedback1,feedback2)),change : mergedChange,potentialEdits : mergedPotentialEdits});
        var runTest : () => void = () : void =>  {
            expect(this.merger.mergeRefactorings(new core.DartList.literal(result1,result2)),mergedResult);
        };
        runTest();
        runTest();
    }
    test_mergeSourceChanges() : void {
        let kind1 : any = new bare.createInstance(any,null,'');
        let kind2 : any = new bare.createInstance(any,null,'');
        let kind3 : any = new bare.createInstance(any,null,'');
        let kind4 : any = new bare.createInstance(any,null,'');
        var runTest : () => void = () : void =>  {
            expect(this.merger.mergeSourceChanges(new core.DartList.literal(new core.DartList.literal(kind1,kind2),new core.DartList.literal(),new core.DartList.literal(kind3),new core.DartList.literal(kind4))),unorderedEquals(new core.DartList.literal(kind1,kind2,kind3,kind4)));
        };
        runTest();
        runTest();
    }
    test_overlaps_false_nested_left() : void {
        expect(this.merger.overlaps(3,5,1,7,{
            allowNesting : true}),isFalse);
    }
    test_overlaps_false_nested_right() : void {
        expect(this.merger.overlaps(1,7,3,5,{
            allowNesting : true}),isFalse);
    }
    test_overlaps_false_onLeft() : void {
        expect(this.merger.overlaps(1,3,5,7),isFalse);
    }
    test_overlaps_false_onRight() : void {
        expect(this.merger.overlaps(5,7,1,3),isFalse);
    }
    test_overlaps_true_nested_left() : void {
        expect(this.merger.overlaps(3,5,1,7),isTrue);
    }
    test_overlaps_true_nested_right() : void {
        expect(this.merger.overlaps(1,7,3,5),isTrue);
    }
    test_overlaps_true_onLeft() : void {
        expect(this.merger.overlaps(1,5,3,7),isTrue);
    }
    test_overlaps_true_onRight() : void {
        expect(this.merger.overlaps(3,7,1,5),isTrue);
    }
    constructor() {
    }
    @defaultConstructor
    ResultMergerTest() {
        this.merger = new bare.createInstance(any,null);
    }
}

export class properties {
}
