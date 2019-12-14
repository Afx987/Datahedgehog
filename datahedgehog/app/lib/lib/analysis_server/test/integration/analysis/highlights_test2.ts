/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/integration/analysis/highlights_test2.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../support/integration_tests";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(AnalysisHighlightsTest);
    });
};
export namespace AnalysisHighlightsTest {
    export type Constructors = lib3.AbstractAnalysisServerIntegrationTest.Constructors | 'AnalysisHighlightsTest';
    export type Interface = Omit<AnalysisHighlightsTest, Constructors>;
}
@DartClass
export class AnalysisHighlightsTest extends lib3.AbstractAnalysisServerIntegrationTest {
    startServer(_namedArguments? : {checked? : boolean,diagnosticPort? : number,servicesPort? : number}) : async.Future<any> {
        let {checked,diagnosticPort,servicesPort} = Object.assign({
            "checked" : true}, _namedArguments );
        return this.server.start({
            checked : checked,diagnosticPort : diagnosticPort,servicesPort : servicesPort,useAnalysisHighlight2 : true});
    }
    test_highlights() {
        let pathname : string = this.sourcePath('test.dart');
        let text : string = 'import \'dart:async\' as async;\n\n/**\n * Doc comment\n */\nclass Class<TypeParameter> {\n  Class() {\n    field = {1.0: [].toList()};\n  }\n\n  Class.constructor() {\n    dynamic local = true;\n    field = {2: local};\n  }\n\n  Map field;\n  static int staticField;\n\n  method() {\n    // End of line comment\n    /* Block comment */\n  }\n\n  static staticMethod() {\n  }\n\n  get getter {\n  }\n\n  set setter(int parameter) {\n    print(parameter);\n  }\n}\n\nclass Class2<TypeParameter> extends Class<TypeParameter> {\n  @override\n  method() {\n  }\n}\n\ntypedef functionType();\n\nfunction(dynamicType) {\n  print(\'string\');\n  unresolvedIdentifier = 42;\n  return async.Future.wait([]);\n}\n\nint topLevelVariable;\n';
        this.writeFile(pathname,text);
        this.standardAnalysisSetup();
        this.sendAnalysisSetSubscriptions(new core.DartMap.literal([
            [AnalysisService.HIGHLIGHTS,new core.DartList.literal(pathname)]]));
        let highlights : core.DartMap<any,core.DartSet<string>>;
        this.onAnalysisHighlights.listen((params : any) =>  {
            expect(params.file,equals(pathname));
            highlights = new core.DartMap.literal([
            ]);
            for(let region of params.regions) {
                let startIndex : number = region.offset;
                let endIndex : number = startIndex + region.length;
                let highlightedText : string = new core.DartString(text).substring(startIndex,endIndex);
                let type : any = region.type;
                if (!highlights.containsKey(type)) {
                    highlights.set(type,new core.DartSet<string>());
                }
                highlights.get(type).add(highlightedText);
            }
        });
        return this.analysisFinished.then((_ : any) =>  {
            expect(op(Op.INDEX,this.currentAnalysisErrors,pathname),hasLength(1));
            var check : (type : any,expected : core.DartList<string>) => void = (type : any,expected : core.DartList<string>) : void =>  {
                expect(highlights.get(type),equals(expected.toSet()));
                highlights.remove(type);
            };
            check(HighlightRegionType.ANNOTATION,new core.DartList.literal('@override'));
            check(HighlightRegionType.BUILT_IN,new core.DartList.literal('as','get','import','set','static','typedef'));
            check(HighlightRegionType.CLASS,new core.DartList.literal('Class','Class2','Future','Map','int'));
            check(HighlightRegionType.COMMENT_BLOCK,new core.DartList.literal('/* Block comment */'));
            check(HighlightRegionType.COMMENT_DOCUMENTATION,new core.DartList.literal('/**\n * Doc comment\n */'));
            check(HighlightRegionType.COMMENT_END_OF_LINE,new core.DartList.literal('// End of line comment'));
            check(HighlightRegionType.CONSTRUCTOR,new core.DartList.literal('constructor'));
            check(HighlightRegionType.DIRECTIVE,new core.DartList.literal("import 'dart:async' as async;"));
            check(HighlightRegionType.DYNAMIC_PARAMETER_DECLARATION,new core.DartList.literal('dynamicType'));
            check(HighlightRegionType.INSTANCE_FIELD_DECLARATION,new core.DartList.literal('field'));
            check(HighlightRegionType.INSTANCE_SETTER_REFERENCE,new core.DartList.literal('field'));
            check(HighlightRegionType.STATIC_FIELD_DECLARATION,new core.DartList.literal('staticField'));
            check(HighlightRegionType.TOP_LEVEL_FUNCTION_REFERENCE,new core.DartList.literal('print'));
            check(HighlightRegionType.TOP_LEVEL_FUNCTION_DECLARATION,new core.DartList.literal('function'));
            check(HighlightRegionType.FUNCTION_TYPE_ALIAS,new core.DartList.literal('functionType'));
            check(HighlightRegionType.INSTANCE_GETTER_DECLARATION,new core.DartList.literal('getter'));
            check(HighlightRegionType.IDENTIFIER_DEFAULT,new core.DartList.literal('unresolvedIdentifier'));
            check(HighlightRegionType.IMPORT_PREFIX,new core.DartList.literal('async'));
            check(HighlightRegionType.KEYWORD,new core.DartList.literal('class','true','return'));
            check(HighlightRegionType.LITERAL_BOOLEAN,new core.DartList.literal('true'));
            check(HighlightRegionType.LITERAL_DOUBLE,new core.DartList.literal('1.0'));
            check(HighlightRegionType.LITERAL_INTEGER,new core.DartList.literal('2','42'));
            check(HighlightRegionType.LITERAL_LIST,new core.DartList.literal('[]'));
            check(HighlightRegionType.LITERAL_MAP,new core.DartList.literal('{1.0: [].toList()}','{2: local}'));
            check(HighlightRegionType.LITERAL_STRING,new core.DartList.literal("'dart:async'","'string'"));
            check(HighlightRegionType.LOCAL_VARIABLE_DECLARATION,new core.DartList.literal('local'));
            check(HighlightRegionType.LOCAL_VARIABLE_REFERENCE,new core.DartList.literal('local'));
            check(HighlightRegionType.INSTANCE_METHOD_REFERENCE,new core.DartList.literal('toList'));
            check(HighlightRegionType.INSTANCE_METHOD_DECLARATION,new core.DartList.literal('method'));
            check(HighlightRegionType.STATIC_METHOD_DECLARATION,new core.DartList.literal('staticMethod'));
            check(HighlightRegionType.STATIC_METHOD_REFERENCE,new core.DartList.literal('wait'));
            check(HighlightRegionType.PARAMETER_DECLARATION,new core.DartList.literal('parameter'));
            check(HighlightRegionType.PARAMETER_REFERENCE,new core.DartList.literal('parameter'));
            check(HighlightRegionType.INSTANCE_SETTER_DECLARATION,new core.DartList.literal('setter'));
            check(HighlightRegionType.TOP_LEVEL_GETTER_REFERENCE,new core.DartList.literal('override'));
            check(HighlightRegionType.TOP_LEVEL_VARIABLE_DECLARATION,new core.DartList.literal('topLevelVariable'));
            check(HighlightRegionType.TYPE_NAME_DYNAMIC,new core.DartList.literal('dynamic'));
            check(HighlightRegionType.TYPE_PARAMETER,new core.DartList.literal('TypeParameter'));
            expect(highlights,isEmpty);
        });
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    AnalysisHighlightsTest() {
    }
}

export class properties {
}
