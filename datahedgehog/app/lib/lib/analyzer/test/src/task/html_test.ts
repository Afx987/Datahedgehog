/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/src/task/html_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../context/abstract_context";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(DartScriptsTaskTest);
        defineReflectiveTests(HtmlErrorsTaskTest);
        defineReflectiveTests(ParseHtmlTaskTest);
    });
};
export namespace DartScriptsTaskTest {
    export type Constructors = lib3.AbstractContextTest.Constructors | 'DartScriptsTaskTest';
    export type Interface = Omit<DartScriptsTaskTest, Constructors>;
}
@DartClass
export class DartScriptsTaskTest extends lib3.AbstractContextTest {
    test_buildInputs() {
        let source : any = this.newSource('/test.html');
        let inputs : core.DartMap<string,any> = DartScriptsTask.buildInputs(source);
        expect(inputs,isNotNull);
        expect(inputs.keys,unorderedEquals(new core.DartList.literal(DartScriptsTask.DOCUMENT_INPUT)));
    }
    test_constructor() {
        let source : any = this.newSource('/test.html');
        let task : any = new bare.createInstance(any,null,this.context,source);
        expect(task,isNotNull);
        expect(task.context,this.context);
        expect(task.target,source);
    }
    test_createTask() {
        let source : any = this.newSource('/test.html');
        let task : any = DartScriptsTask.createTask(this.context,source);
        expect(task,isNotNull);
        expect(task.context,this.context);
        expect(task.target,source);
    }
    test_description() {
        let source : any = this.newSource('/test.html');
        let task : any = new bare.createInstance(any,null,null,source);
        expect(task.description,isNotNull);
    }
    test_descriptor() {
        let descriptor : any = DartScriptsTask.DESCRIPTOR;
        expect(descriptor,isNotNull);
    }
    test_perform_embedded_source() : void {
        let content : string = '    void buttonPressed() {}\n  ';
        let target : any = this.newSource('/test.html',`<!DOCTYPE html>\n<html>\n<head>\n  <script type='application/dart'>${content}</script>\n</head>\n<body>\n</body>\n</html>`);
        this.computeResult(target,REFERENCED_LIBRARIES,{
            matcher : properties.isDartScriptsTask});
        expect(this.outputs.get(REFERENCED_LIBRARIES),hasLength(0));
        expect(this.outputs.get(DART_SCRIPTS),hasLength(1));
        let script : any = op(Op.INDEX,this.outputs.get(DART_SCRIPTS),0);
        expect(script.fragments,hasLength(1));
        let fragment : any = op(Op.INDEX,script.fragments,0);
        expect(fragment.content,content);
    }
    test_perform_empty_source_reference() : void {
        let target : any = this.newSource('/test.html','<!DOCTYPE html>\n<html>\n<head>\n  <script type=\'application/dart\' src=\'\'/>\n</head>\n<body>\n</body>\n</html>');
        this.computeResult(target,REFERENCED_LIBRARIES,{
            matcher : properties.isDartScriptsTask});
        expect(this.outputs.get(REFERENCED_LIBRARIES),hasLength(0));
        expect(this.outputs.get(DART_SCRIPTS),hasLength(0));
    }
    test_perform_invalid_source_reference() : void {
        let target : any = this.newSource('/test.html','<!DOCTYPE html>\n<html>\n<head>\n  <script type=\'application/dart\' src=\'an;invalid:[]uri\'/>\n</head>\n<body>\n</body>\n</html>');
        this.computeResult(target,REFERENCED_LIBRARIES,{
            matcher : properties.isDartScriptsTask});
        expect(this.outputs.get(REFERENCED_LIBRARIES),hasLength(0));
        expect(this.outputs.get(DART_SCRIPTS),hasLength(0));
    }
    test_perform_non_existing_source_reference() : void {
        let target : any = this.newSource('/test.html','<!DOCTYPE html>\n<html>\n<head>\n  <script type=\'application/dart\' src=\'does/not/exist.dart\'/>\n</head>\n<body>\n</body>\n</html>');
        this.computeResult(target,REFERENCED_LIBRARIES,{
            matcher : properties.isDartScriptsTask});
        expect(this.outputs.get(REFERENCED_LIBRARIES),hasLength(1));
        expect(this.outputs.get(DART_SCRIPTS),hasLength(0));
    }
    test_perform_none() {
        let target : any = this.newSource('/test.html','<!DOCTYPE html>\n<html>\n  <head>\n    <title>test page</title>\n  </head>\n  <body>\n    Test\n  </body>\n</html>\n');
        this.computeResult(target,REFERENCED_LIBRARIES,{
            matcher : properties.isDartScriptsTask});
        expect(this.outputs.get(REFERENCED_LIBRARIES),hasLength(0));
        expect(this.outputs.get(DART_SCRIPTS),hasLength(0));
    }
    test_perform_referenced_source() : void {
        let target : any = this.newSource('/test.html','<!DOCTYPE html>\n<html>\n<head>\n  <script type=\'application/dart\' src=\'test.dart\'/>\n</head>\n<body>\n</body>\n</html>');
        this.computeResult(target,REFERENCED_LIBRARIES,{
            matcher : properties.isDartScriptsTask});
        expect(this.outputs.get(REFERENCED_LIBRARIES),hasLength(1));
        expect(this.outputs.get(DART_SCRIPTS),hasLength(0));
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    DartScriptsTaskTest() {
    }
}

export namespace HtmlErrorsTaskTest {
    export type Constructors = lib3.AbstractContextTest.Constructors | 'HtmlErrorsTaskTest';
    export type Interface = Omit<HtmlErrorsTaskTest, Constructors>;
}
@DartClass
export class HtmlErrorsTaskTest extends lib3.AbstractContextTest {
    fail_perform_htmlErrors() {
        let target : any = this.newSource('/test.html','<html>\n  <head>\n    <title>test page</not-title>\n  </head>\n  <body>\n    Test\n  </body>\n</html>\n');
        this.computeResult(target,HTML_ERRORS,{
            matcher : properties.isHtmlErrorsTask});
        expect(this.outputs.get(HTML_ERRORS),hasLength(1));
    }
    test_constructor() {
        let source : any = this.newSource('/test.html');
        let task : any = new bare.createInstance(any,null,this.context,source);
        expect(task,isNotNull);
        expect(task.context,this.context);
        expect(task.target,source);
    }
    test_createTask() {
        let source : any = this.newSource('/test.html');
        let task : any = HtmlErrorsTask.createTask(this.context,source);
        expect(task,isNotNull);
        expect(task.context,this.context);
        expect(task.target,source);
    }
    test_description() {
        let source : any = this.newSource('/test.html');
        let task : any = new bare.createInstance(any,null,null,source);
        expect(task.description,isNotNull);
    }
    test_descriptor() {
        let descriptor : any = HtmlErrorsTask.DESCRIPTOR;
        expect(descriptor,isNotNull);
    }
    test_perform_dartErrors() {
        let target : any = this.newSource('/test.html','<!DOCTYPE html>\n<html>\n  <head>\n    <title>test page</title>\n    <script type=\'application/dart\'>\n      void buttonPressed() {\n    </script>\n  </head>\n  <body>Test</body>\n</html>\n');
        this.computeResult(target,HTML_ERRORS,{
            matcher : properties.isHtmlErrorsTask});
        expect(this.outputs.get(HTML_ERRORS),hasLength(1));
    }
    test_perform_noErrors() {
        let target : any = this.newSource('/test.html','<!DOCTYPE html>\n<html>\n  <head>\n    <title>test page</title>\n  </head>\n  <body>\n    Test\n  </body>\n</html>\n');
        this.computeResult(target,HTML_ERRORS,{
            matcher : properties.isHtmlErrorsTask});
        expect(this.outputs.get(HTML_ERRORS),isEmpty);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    HtmlErrorsTaskTest() {
    }
}

export namespace ParseHtmlTaskTest {
    export type Constructors = lib3.AbstractContextTest.Constructors | 'ParseHtmlTaskTest';
    export type Interface = Omit<ParseHtmlTaskTest, Constructors>;
}
@DartClass
export class ParseHtmlTaskTest extends lib3.AbstractContextTest {
    test_buildInputs() {
        let source : any = this.newSource('/test.html');
        let inputs : core.DartMap<string,any> = ParseHtmlTask.buildInputs(source);
        expect(inputs,isNotNull);
        expect(inputs.keys,unorderedEquals(new core.DartList.literal(ParseHtmlTask.CONTENT_INPUT_NAME,ParseHtmlTask.MODIFICATION_TIME_INPUT)));
    }
    test_constructor() {
        let source : any = this.newSource('/test.html');
        let task : any = new bare.createInstance(any,null,this.context,source);
        expect(task,isNotNull);
        expect(task.context,this.context);
        expect(task.target,source);
    }
    test_createTask() {
        let source : any = this.newSource('/test.html');
        let task : any = ParseHtmlTask.createTask(this.context,source);
        expect(task,isNotNull);
        expect(task.context,this.context);
        expect(task.target,source);
    }
    test_description() {
        let source : any = this.newSource('/test.html');
        let task : any = new bare.createInstance(any,null,null,source);
        expect(task.description,isNotNull);
    }
    test_descriptor() {
        let descriptor : any = ParseHtmlTask.DESCRIPTOR;
        expect(descriptor,isNotNull);
    }
    test_perform() {
        let code : string = '<!DOCTYPE html>\n<html>\n  <head>\n    <title>test page</title>\n  </head>\n  <body>\n    <h1 myAttr=\'my value\'>Test</h1>\n  </body>\n</html>\n';
        let target : any = this.newSource('/test.html',code);
        this.computeResult(target,HTML_DOCUMENT);
        expect(this.task,properties.isParseHtmlTask);
        expect(this.outputs.get(HTML_DOCUMENT_ERRORS),isEmpty);
        {
            let document : any = this.outputs.get(HTML_DOCUMENT);
            expect(document,isNotNull);
            let element : any = document.body.getElementsByTagName('h1').single;
            expect(op(Op.INDEX,element.attributes,'myAttr'),'my value');
        }
        {
            let lineInfo : any = this.outputs.get(LINE_INFO);
            expect(lineInfo,isNotNull);
            {
                let offset : number = new core.DartString(code).indexOf('<!DOCTYPE');
                let location : any = lineInfo.getLocation(offset);
                expect(location.lineNumber,1);
                expect(location.columnNumber,1);
            }
            {
                let offset : number = new core.DartString(code).indexOf('<html>');
                let location : any = lineInfo.getLocation(offset);
                expect(location.lineNumber,2);
                expect(location.columnNumber,1);
            }
            {
                let offset : number = new core.DartString(code).indexOf('<title>');
                let location : any = lineInfo.getLocation(offset);
                expect(location.lineNumber,4);
                expect(location.columnNumber,5);
            }
        }
    }
    test_perform_noDocType() {
        let code : string = '<div>AAA</div>\n<span>BBB</span>\n';
        let target : any = this.newSource('/test.html',code);
        this.computeResult(target,HTML_DOCUMENT);
        expect(this.task,properties.isParseHtmlTask);
        {
            let document : any = this.outputs.get(HTML_DOCUMENT);
            expect(document,isNotNull);
            expect(document.nodes,hasLength(1));
            let htmlElement : any = op(Op.INDEX,document.nodes,0);
            expect(htmlElement.localName,'html');
            expect(htmlElement.nodes,hasLength(2));
            let bodyElement : any = op(Op.INDEX,htmlElement.nodes,1);
            expect(bodyElement.localName,'body');
            expect(bodyElement.nodes,hasLength(4));
            expect((op(Op.INDEX,bodyElement.nodes,0) as any).localName,'div');
            expect((op(Op.INDEX,bodyElement.nodes,2) as any).localName,'span');
        }
        expect(this.outputs.get(HTML_DOCUMENT_ERRORS),isEmpty);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ParseHtmlTaskTest() {
    }
}

export class properties {
    private static __$isDartScriptsTask : any;
    static get isDartScriptsTask() : any { 
        if (this.__$isDartScriptsTask===undefined) {
            this.__$isDartScriptsTask = new bare.createInstance(any,null);
        }
        return this.__$isDartScriptsTask;
    }
    static set isDartScriptsTask(__$value : any)  { 
        this.__$isDartScriptsTask = __$value;
    }

    private static __$isHtmlErrorsTask : any;
    static get isHtmlErrorsTask() : any { 
        if (this.__$isHtmlErrorsTask===undefined) {
            this.__$isHtmlErrorsTask = new bare.createInstance(any,null);
        }
        return this.__$isHtmlErrorsTask;
    }
    static set isHtmlErrorsTask(__$value : any)  { 
        this.__$isHtmlErrorsTask = __$value;
    }

    private static __$isParseHtmlTask : any;
    static get isParseHtmlTask() : any { 
        if (this.__$isParseHtmlTask===undefined) {
            this.__$isParseHtmlTask = new bare.createInstance(any,null);
        }
        return this.__$isParseHtmlTask;
    }
    static set isParseHtmlTask(__$value : any)  { 
        this.__$isParseHtmlTask = __$value;
    }

}
