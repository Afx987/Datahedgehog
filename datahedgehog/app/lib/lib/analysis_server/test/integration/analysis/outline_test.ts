/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/integration/analysis/outline_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../support/integration_tests";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(OutlineTest);
    });
};
export namespace OutlineTest {
    export type Constructors = lib3.AbstractAnalysisServerIntegrationTest.Constructors | 'OutlineTest';
    export type Interface = Omit<OutlineTest, Constructors>;
}
@DartClass
export class OutlineTest extends lib3.AbstractAnalysisServerIntegrationTest {
    checkConnected(outlineObjects : core.DartList<any>) : void {
        for(let i : number = 0; i < outlineObjects.length - 1; i++){
            expect(outlineObjects[i + 1].offset,equals(op(Op.PLUS,outlineObjects[i].offset,outlineObjects[i].length)));
        }
    }
    test_outline() {
        let pathname : string = this.sourcePath('test.dart');
        let text : string = 'class Class1 {\n  int field;\n\n  void method() {\n  }\n\n  static staticMethod() {\n  }\n\n  get getter {\n    return null;\n  }\n\n  set setter(value) {\n  }\n}\n\nclass Class2 {\n}\n';
        this.writeFile(pathname,text);
        this.standardAnalysisSetup();
        this.sendAnalysisSetSubscriptions(new core.DartMap.literal([
            [AnalysisService.OUTLINE,new core.DartList.literal(pathname)]]));
        let outline : any;
        this.onAnalysisOutline.listen((params : any) =>  {
            expect(params.file,equals(pathname));
            outline = params.outline;
        });
        return this.analysisFinished.then((_ : any) =>  {
            expect(outline.element.kind,equals(ElementKind.COMPILATION_UNIT));
            expect(outline.offset,equals(0));
            expect(outline.length,equals(new core.DartString(text).length));
            let classes : core.DartList<any> = outline.children;
            expect(classes,hasLength(2));
            expect(classes[0].element.name,equals('Class1'));
            expect(classes[1].element.name,equals('Class2'));
            this.checkConnected(classes);
            let members : core.DartList<any> = classes[0].children;
            expect(members,hasLength(5));
            expect(members[0].element.name,equals('field'));
            expect(members[1].element.name,equals('method'));
            expect(members[2].element.name,equals('staticMethod'));
            expect(members[3].element.name,equals('getter'));
            expect(members[4].element.name,equals('setter'));
            this.checkConnected(members);
        });
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    OutlineTest() {
    }
}

export class properties {
}
