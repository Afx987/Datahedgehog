/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/src/task/yaml_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../context/abstract_context";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(ParseYamlTaskTest);
    });
};
export namespace ParseYamlTaskTest {
    export type Constructors = lib3.AbstractContextTest.Constructors | 'ParseYamlTaskTest';
    export type Interface = Omit<ParseYamlTaskTest, Constructors>;
}
@DartClass
export class ParseYamlTaskTest extends lib3.AbstractContextTest {
    source : any;

    test_perform() {
        this._performParseTask('rules:\n  style_guide:\n    camel_case_types: false\n');
        expect(this.outputs,hasLength(3));
        let document : any = this.outputs.get(YAML_DOCUMENT);
        expect(document,isNotNull);
        let value = document.contents.value;
        expect(value,new bare.createInstance(any,null));
        expect(op(Op.INDEX,op(Op.INDEX,op(Op.INDEX,value,'rules'),'style_guide'),'camel_case_types'),isFalse);
        expect(this.outputs.get(YAML_ERRORS),hasLength(0));
        let lineInfo : any = this.outputs.get(LINE_INFO);
        expect(lineInfo,isNotNull);
        expect(lineInfo.getOffsetOfLine(0),0);
        expect(lineInfo.getOffsetOfLine(1),7);
        expect(lineInfo.getOffsetOfLine(2),22);
        expect(lineInfo.getOffsetOfLine(3),50);
    }
    test_perform_doesNotExist() {
        this._performParseTask(null);
        expect(this.outputs,hasLength(3));
        let document : any = this.outputs.get(YAML_DOCUMENT);
        expect(document,isNotNull);
        expect(document.contents.value,isNull);
        expect(this.outputs.get(YAML_ERRORS),hasLength(1));
        let lineInfo : any = this.outputs.get(LINE_INFO);
        expect(lineInfo,isNotNull);
        expect(lineInfo.getOffsetOfLine(0),0);
    }
    _performParseTask(content : string) : void {
        if (content == null) {
            this.source = this.resourceProvider.getFile('/test.yaml').createSource();
        }else {
            this.source = this.newSource('/test.yaml',content);
        }
        this.computeResult(this.source,YAML_DOCUMENT,{
            matcher : properties.isParseYamlTask});
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ParseYamlTaskTest() {
    }
}

export class properties {
    private static __$isParseYamlTask : any;
    static get isParseYamlTask() : any { 
        if (this.__$isParseYamlTask===undefined) {
            this.__$isParseYamlTask = new bare.createInstance(any,null);
        }
        return this.__$isParseYamlTask;
    }
    static set isParseYamlTask(__$value : any)  { 
        this.__$isParseYamlTask = __$value;
    }

}
