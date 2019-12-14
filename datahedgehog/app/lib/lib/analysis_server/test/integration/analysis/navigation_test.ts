/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/integration/analysis/navigation_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../support/integration_tests";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(AnalysisNavigationTest);
    });
};
export namespace AnalysisNavigationTest {
    export type Constructors = lib3.AbstractAnalysisServerIntegrationTest.Constructors | 'AnalysisNavigationTest';
    export type Interface = Omit<AnalysisNavigationTest, Constructors>;
}
@DartClass
export class AnalysisNavigationTest extends lib3.AbstractAnalysisServerIntegrationTest {
    test_navigation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let pathname1 : string = this.sourcePath('test1.dart');
            let text1 : string = 'library foo;\n\nimport \'dart:async\';\npart \'test2.dart\';\n\nclass Class<TypeParameter> {\n  Class.constructor(); /* constructor declaration */\n\n  TypeParameter field;\n\n  method() {}\n}\n\ntypedef FunctionTypeAlias();\n\nfunction(FunctionTypeAlias parameter) {\n  print(parameter());\n}\n\nint topLevelVariable;\n\nmain() {\n  Class<int> localVariable = new Class<int>.constructor(); // usage\n  function(() => localVariable.field);\n  localVariable.method();\n  localVariable.field = 1;\n}\n';
            this.writeFile(pathname1,text1);
            let pathname2 : string = this.sourcePath('test2.dart');
            let text2 : string = 'part of foo;\n';
            this.writeFile(pathname2,text2);
            this.standardAnalysisSetup();
            this.sendAnalysisSetSubscriptions(new core.DartMap.literal([
                [AnalysisService.NAVIGATION,new core.DartList.literal(pathname1)]]));
            let regions : core.DartList<any>;
            let targets : core.DartList<any>;
            let targetFiles : core.DartList<string>;
            this.onAnalysisNavigation.listen((params : any) =>  {
                expect(params.file,equals(pathname1));
                regions = params.regions;
                targets = params.targets;
                targetFiles = params.files;
            });
            await this.analysisFinished;
            expect(op(Op.INDEX,this.currentAnalysisErrors,pathname1),hasLength(1));
            expect(op(Op.INDEX,this.currentAnalysisErrors,pathname2),isEmpty);
            var findTargetElement : (index : number) => any = (index : number) : any =>  {
                for(let region of regions) {
                    if (op(Op.LEQ,region.offset,index) && index < op(Op.PLUS,region.offset,region.length)) {
                        expect(region.targets,hasLength(1));
                        let targetIndex : number = op(Op.INDEX,region.targets,0);
                        return targets[targetIndex];
                    }
                }
                fail(`No element found for index ${index}`);
                return null;
            };
            var checkLocal : (source : string,expectedTarget : string,expectedKind : any) => void = (source : string,expectedTarget : string,expectedKind : any) : void =>  {
                let sourceIndex : number = new core.DartString(text1).indexOf(source);
                let targetIndex : number = new core.DartString(text1).indexOf(expectedTarget);
                let element : any = findTargetElement(sourceIndex);
                expect(targetFiles[element.fileIndex],equals(pathname1));
                expect(element.offset,equals(targetIndex));
                expect(element.kind,equals(expectedKind));
            };
            var checkRemote : (source : string,expectedTargetRegexp : string,expectedKind : any) => void = (source : string,expectedTargetRegexp : string,expectedKind : any) : void =>  {
                let sourceIndex : number = new core.DartString(text1).indexOf(source);
                let element : any = findTargetElement(sourceIndex);
                expect(targetFiles[element.fileIndex],matches(expectedTargetRegexp));
                expect(element.kind,equals(expectedKind));
            };
            checkLocal('Class<int>','Class<TypeParameter>',ElementKind.CLASS);
            checkRemote("'test2.dart';",'test2.dart$',ElementKind.COMPILATION_UNIT);
            checkLocal('Class<int>.constructor','constructor(); /* constructor declaration */',ElementKind.CONSTRUCTOR);
            checkLocal('constructor(); // usage','constructor(); /* constructor declaration */',ElementKind.CONSTRUCTOR);
            checkLocal('field;','field;',ElementKind.FIELD);
            checkLocal('function(() => localVariable.field)','function(FunctionTypeAlias parameter)',ElementKind.FUNCTION);
            checkLocal('FunctionTypeAlias parameter','FunctionTypeAlias();',ElementKind.FUNCTION_TYPE_ALIAS);
            checkLocal('field)','field;',ElementKind.GETTER);
            checkRemote("'dart:async'",'async\.dart$',ElementKind.LIBRARY);
            checkLocal('localVariable.field','localVariable =',ElementKind.LOCAL_VARIABLE);
            checkLocal('method();','method() {',ElementKind.METHOD);
            checkLocal('parameter());','parameter) {',ElementKind.PARAMETER);
            checkLocal('field = 1','field;',ElementKind.SETTER);
            checkLocal('topLevelVariable;','topLevelVariable;',ElementKind.TOP_LEVEL_VARIABLE);
            checkLocal('TypeParameter field;','TypeParameter>',ElementKind.TYPE_PARAMETER);
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    AnalysisNavigationTest() {
    }
}

export class properties {
}
