/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/integration/analysis/update_content_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../support/integration_tests";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(UpdateContentTest);
    });
};
export namespace UpdateContentTest {
    export type Constructors = lib3.AbstractAnalysisServerIntegrationTest.Constructors | 'UpdateContentTest';
    export type Interface = Omit<UpdateContentTest, Constructors>;
}
@DartClass
export class UpdateContentTest extends lib3.AbstractAnalysisServerIntegrationTest {
    test_updateContent() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let path : string = this.sourcePath('test.dart');
            let goodText : string = 'main() {\n  print("Hello, world!");\n}';
            let badText : string = new core.DartString(goodText).replaceAll(';','');
            this.writeFile(path,badText);
            this.standardAnalysisSetup();
            await this.analysisFinished;
            expect(op(Op.INDEX,this.currentAnalysisErrors,path),isNotEmpty);
            this.sendAnalysisUpdateContent(new core.DartMap.literal([
                [path,new bare.createInstance(any,null,goodText)]]));
            await this.analysisFinished;
            expect(op(Op.INDEX,this.currentAnalysisErrors,path),isEmpty);
            this.sendAnalysisUpdateContent(new core.DartMap.literal([
                [path,new bare.createInstance(any,null,new core.DartList.literal(new bare.createInstance(any,null,new core.DartString(goodText).indexOf(';'),1,'')))]]));
            await this.analysisFinished;
            expect(op(Op.INDEX,this.currentAnalysisErrors,path),isNotEmpty);
            this.sendAnalysisUpdateContent(new core.DartMap.literal([
                [path,new bare.createInstance(any,null,new core.DartList.literal(new bare.createInstance(any,null,new core.DartString(goodText).indexOf(';'),0,';')))]]));
            await this.analysisFinished;
            expect(op(Op.INDEX,this.currentAnalysisErrors,path),isEmpty);
            this.sendAnalysisUpdateContent(new core.DartMap.literal([
                [path,new bare.createInstance(any,null)]]));
            await this.analysisFinished;
            expect(op(Op.INDEX,this.currentAnalysisErrors,path),isNotEmpty);
        } )());
    }

    test_updateContent_multipleAdds() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let pathname : string = this.sourcePath('test.dart');
            this.writeFile(pathname,'class Person {\n  String _name;\n  Person(this._name);\n  String get name => this._name;\n  String toString() => "Name: ${name}";\n}\nvoid main() {\n  var p = new Person("Skeletor");\n  p.xname = "Faker";\n  print(p);\n}\n');
            this.standardAnalysisSetup();
            await this.analysisFinished;
            expect(op(Op.INDEX,this.currentAnalysisErrors,pathname),isList);
            let errors1 : core.DartList<any> = op(Op.INDEX,this.currentAnalysisErrors,pathname);
            expect(errors1,hasLength(1));
            expect(errors1[0].location.file,equals(pathname));
            await this.sendAnalysisUpdateContent(new core.DartMap.literal([
                [pathname,new bare.createInstance(any,null,'class Person {\n  String _name;\n  Person(this._name);\n  String get name => this._name;\n  String toString() => "Name: ${name}";\n}\nvoid main() {\n  var p = new Person("Skeletor");\n  p.name = "Faker";\n  print(p);\n}\n')]]));
            await this.analysisFinished;
            expect(op(Op.INDEX,this.currentAnalysisErrors,pathname),isList);
            let errors2 : core.DartList<any> = op(Op.INDEX,this.currentAnalysisErrors,pathname);
            expect(errors2,hasLength(1));
            expect(errors2[0].location.file,equals(pathname));
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    UpdateContentTest() {
    }
}

export class properties {
}
