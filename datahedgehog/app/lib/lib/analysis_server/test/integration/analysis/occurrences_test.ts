/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/integration/analysis/occurrences_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../support/integration_tests";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(OccurrencesTest);
    });
};
export namespace OccurrencesTest {
    export type Constructors = lib3.AbstractAnalysisServerIntegrationTest.Constructors | 'OccurrencesTest';
    export type Interface = Omit<OccurrencesTest, Constructors>;
}
@DartClass
export class OccurrencesTest extends lib3.AbstractAnalysisServerIntegrationTest {
    test_occurrences() {
        let pathname : string = this.sourcePath('test.dart');
        let text : string = 'main() {\n  int sum = 0;\n  for (int i = 0; i < 10; i++) {\n    for (int j = 0; j < i; j++) {\n      sum += j;\n    }\n  }\n  print(sum);\n}\n';
        this.writeFile(pathname,text);
        this.standardAnalysisSetup();
        this.sendAnalysisSetSubscriptions(new core.DartMap.literal([
            [AnalysisService.OCCURRENCES,new core.DartList.literal(pathname)]]));
        let occurrences : core.DartList<any>;
        this.onAnalysisOccurrences.listen((params : any) =>  {
            expect(params.file,equals(pathname));
            occurrences = params.occurrences;
        });
        return this.analysisFinished.then((_ : any) =>  {
            expect(op(Op.INDEX,this.currentAnalysisErrors,pathname),isEmpty);
            var findOffsets : (elementName : string) => core.DartSet<number> = (elementName : string) : core.DartSet<number> =>  {
                for(let occurrence of occurrences) {
                    if (op(Op.EQUALS,occurrence.element.name,elementName)) {
                        return occurrence.offsets.toSet();
                    }
                }
                fail(`No element found matching ${elementName}`);
                return null;
            };
            var check : (elementName : string,expectedOccurrences : core.DartIterable<string>) => void = (elementName : string,expectedOccurrences : core.DartIterable<string>) : void =>  {
                let expectedOffsets : core.DartSet<number> = expectedOccurrences.map((substring : string) =>  {
                    return new core.DartString(text).indexOf(substring);
                }).toSet();
                let foundOffsets : core.DartSet<number> = findOffsets(elementName);
                expect(foundOffsets,equals(expectedOffsets));
            };
            check('i',new core.DartList.literal('i = 0','i < 10','i++','i;'));
            check('j',new core.DartList.literal('j = 0','j < i','j++','j;'));
            check('sum',new core.DartList.literal('sum = 0','sum +=','sum)'));
        });
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    OccurrencesTest() {
    }
}

export class properties {
}
