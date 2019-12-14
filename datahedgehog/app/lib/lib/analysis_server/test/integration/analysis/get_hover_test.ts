/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/integration/analysis/get_hover_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../support/integration_tests";
import * as lib4 from "@dart2ts.packages/path/lib/path";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(AnalysisGetHoverIntegrationTest);
    });
};
export namespace AnalysisGetHoverIntegrationTest {
    export type Constructors = lib3.AbstractAnalysisServerIntegrationTest.Constructors | 'AnalysisGetHoverIntegrationTest';
    export type Interface = Omit<AnalysisGetHoverIntegrationTest, Constructors>;
}
@DartClass
export class AnalysisGetHoverIntegrationTest extends lib3.AbstractAnalysisServerIntegrationTest {
    pathname : string;

    text : string;

    checkHover(target : string,length : number,descriptionRegexps : core.DartList<string>,kind : string,staticTypeRegexps : core.DartList<string>,_namedArguments? : {isLocal? : boolean,isCore? : boolean,docRegexp? : string,isLiteral? : boolean,parameterRegexps? : core.DartList<string>,propagatedType? : any}) {
        let {isLocal,isCore,docRegexp,isLiteral,parameterRegexps,propagatedType} = Object.assign({
            "isLocal" : false,
            "isCore" : false,
            "docRegexp" : null,
            "isLiteral" : false,
            "parameterRegexps" : null,
            "propagatedType" : null}, _namedArguments );
        let offset : number = new core.DartString(this.text).indexOf(target);
        return this.sendAnalysisGetHover(this.pathname,offset).then((result : any) =>  {
            expect(result.hovers,hasLength(1));
            let info : any = op(Op.INDEX,result.hovers,0);
            expect(info.offset,equals(offset));
            expect(info.length,equals(length));
            if (isCore) {
                expect(lib4.basename(info.containingLibraryPath),equals('core.dart'));
                expect(info.containingLibraryName,equals('dart.core'));
            }else if (isLocal || isLiteral) {
                expect(info.containingLibraryPath,isNull);
                expect(info.containingLibraryName,isNull);
            }else {
                expect(info.containingLibraryPath,equals(this.pathname));
                expect(info.containingLibraryName,equals('lib.test'));
            }
            if (docRegexp == null) {
                expect(info.dartdoc,isNull);
            }else {
                expect(info.dartdoc,matches(docRegexp));
            }
            if (descriptionRegexps == null) {
                expect(info.elementDescription,isNull);
            }else {
                expect(info.elementDescription,lib3.properties.isString);
                for(let descriptionRegexp of descriptionRegexps) {
                    expect(info.elementDescription,matches(descriptionRegexp));
                }
            }
            expect(info.elementKind,equals(kind));
            if (parameterRegexps == null) {
                expect(info.parameter,isNull);
            }else {
                expect(info.parameter,lib3.properties.isString);
                for(let parameterRegexp of parameterRegexps) {
                    expect(info.parameter,matches(parameterRegexp));
                }
            }
            expect(info.propagatedType,equals(propagatedType));
            if (staticTypeRegexps == null) {
                expect(info.staticType,isNull);
            }else {
                expect(info.staticType,lib3.properties.isString);
                for(let staticTypeRegexp of staticTypeRegexps) {
                    expect(info.staticType,matches(staticTypeRegexp));
                }
            }
        });
    }
    checkNoHover(target : string) : async.Future<any> {
        let offset : number = new core.DartString(this.text).indexOf(target);
        return this.sendAnalysisGetHover(this.pathname,offset).then((result : any) =>  {
            expect(result.hovers,hasLength(0));
        });
    }
    setUp() {
        return super.setUp().then((_ : any) =>  {
            this.pathname = this.sourcePath('test.dart');
        });
    }
    test_getHover() {
        this.writeFile(this.pathname,this.text);
        this.standardAnalysisSetup();
        return this.analysisFinished.then((_ : any) =>  {
            let tests : core.DartList<async.Future<any>> = new core.DartList.literal();
            tests.add(this.checkHover('topLevelVar;',11,new core.DartList.literal('List','topLevelVar'),'top level variable',new core.DartList.literal('List')));
            tests.add(this.checkHover('func(',4,new core.DartList.literal('func','int','param'),'function',null,{
                docRegexp : 'Documentation for func'}));
            tests.add(this.checkHover('int param',3,new core.DartList.literal('int'),'class',null,{
                isCore : true,docRegexp : '.*'}));
            tests.add(this.checkHover('param)',5,new core.DartList.literal('int','param'),'parameter',new core.DartList.literal('int'),{
                isLocal : true,docRegexp : 'Documentation for func'}));
            tests.add(this.checkHover('num localVar',3,new core.DartList.literal('num'),'class',null,{
                isCore : true,docRegexp : '.*'}));
            tests.add(this.checkHover('localVar =',8,new core.DartList.literal('num','localVar'),'local variable',new core.DartList.literal('num'),{
                isLocal : true,propagatedType : 'int'}));
            tests.add(this.checkHover('topLevelVar.length;',11,new core.DartList.literal('List','topLevelVar'),'top level variable',new core.DartList.literal('List')));
            tests.add(this.checkHover('length;',6,new core.DartList.literal('get','length','int'),'getter',null,{
                isCore : true,docRegexp : '.*'}));
            tests.add(this.checkHover('length =',6,new core.DartList.literal('set','length','int'),'setter',null,{
                isCore : true,docRegexp : '.*'}));
            tests.add(this.checkHover('param;',5,new core.DartList.literal('int','param'),'parameter',new core.DartList.literal('int'),{
                isLocal : true,docRegexp : 'Documentation for func',parameterRegexps : new core.DartList.literal('.*')}));
            tests.add(this.checkHover('add(',3,new core.DartList.literal('List','add'),'method',new core.DartList.literal('dynamic','void'),{
                isCore : true,docRegexp : '.*'}));
            tests.add(this.checkHover('localVar)',8,new core.DartList.literal('num','localVar'),'local variable',new core.DartList.literal('num'),{
                isLocal : true,parameterRegexps : new core.DartList.literal('.*'),propagatedType : 'int'}));
            tests.add(this.checkHover('func(35',4,new core.DartList.literal('func','int','param'),'function',new core.DartList.literal('int','void'),{
                docRegexp : 'Documentation for func'}));
            tests.add(this.checkHover('35',2,null,null,new core.DartList.literal('int'),{
                isLiteral : true,parameterRegexps : new core.DartList.literal('int','param')}));
            tests.add(this.checkNoHover('comment'));
            return async.Future.wait(tests);
        });
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    AnalysisGetHoverIntegrationTest() {
        this.text = 'library lib.test;\n\nList topLevelVar;\n\n/**\n * Documentation for func\n */\nvoid func(int param) {\n  num localVar = topLevelVar.length;\n  topLevelVar.length = param;\n  topLevelVar.add(localVar);\n}\n\nmain() {\n  // comment\n  func(35);\n}\n';
    }
}

export class properties {
}
