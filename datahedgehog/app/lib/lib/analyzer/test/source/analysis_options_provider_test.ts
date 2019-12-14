/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/source/analysis_options_provider_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../resource_utils";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(AnalysisOptionsProviderOldTest);
        defineReflectiveTests(AnalysisOptionsProviderNewTest);
    });
    group('AnalysisOptionsProvider',() =>  {
        var expectMergesTo : (defaults : string,overrides : string,expected : string) => void = (defaults : string,overrides : string,expected : string) : void =>  {
            let optionsProvider = new bare.createInstance(any,null);
            let defaultOptions = optionsProvider.getOptionsFromString(defaults);
            let overrideOptions = optionsProvider.getOptionsFromString(overrides);
            let merged = optionsProvider.merge(defaultOptions,overrideOptions);
            expect(merged,optionsProvider.getOptionsFromString(expected));
        };
        group('merging',() =>  {
            test('integration',() =>  {
                expectMergesTo('analyzer:\n  plugins:\n    - p1\n    - p2\n  errors:\n    unused_local_variable : error\nlinter:\n  rules:\n    - camel_case_types\n    - one_member_abstracts\n','analyzer:\n  plugins:\n    - p3\n  errors:\n    unused_local_variable : ignore # overrides error\nlinter:\n  rules:\n    one_member_abstracts: false # promotes and disables\n    always_specify_return_types: true\n','analyzer:\n  plugins:\n    - p1\n    - p2\n    - p3\n  errors:\n    unused_local_variable : ignore\nlinter:\n  rules:\n    camel_case_types: true\n    one_member_abstracts: false\n    always_specify_return_types: true\n');
            });
        });
    });
    group('AnalysisOptionsProvider',() =>  {
        test('test_bad_yaml (1)',() =>  {
            let src = '    analyzer: # <= bang\nstrong-mode: true\n';
            let optionsProvider = new bare.createInstance(any,null);
            expect(() =>  {
                return optionsProvider.getOptionsFromString(src);
            },throwsA(new bare.createInstance(any,null)));
        });
        test('test_bad_yaml (2)',() =>  {
            let src = 'analyzer:\n  strong-mode:true # missing space (sdk/issues/24885)\n';
            let optionsProvider = new bare.createInstance(any,null);
            let options = optionsProvider.getOptionsFromString(src);
            expect(options,isNotNull);
        });
    });
};
export namespace AnalysisOptionsProviderTest {
    export type Constructors = 'AnalysisOptionsProviderTest';
    export type Interface = Omit<AnalysisOptionsProviderTest, Constructors>;
}
@DartClass
export class AnalysisOptionsProviderTest {
    pathTranslator : lib3.TestPathTranslator;

    resourceProvider : any;

    provider : any;

    @AbstractProperty
    get optionsFileName() : string{ throw 'abstract'}
    setUp() : void {
        let rawProvider = new bare.createInstance(any,null);
        this.resourceProvider = new lib3.TestResourceProvider(rawProvider);
        this.pathTranslator = new lib3.TestPathTranslator(rawProvider);
        this.provider = new bare.createInstance(any,null,new bare.createInstance(any,null,new core.DartList.literal(new bare.createInstance(any,null,rawProvider))));
    }
    test_getOptions_crawlUp_hasInFolder() : void {
        this.pathTranslator.newFolder('/foo/bar');
        this.pathTranslator.newFile(`/foo/${this.optionsFileName}`,'analyzer:\n  ignore:\n    - foo\n');
        this.pathTranslator.newFile(`/foo/bar/${this.optionsFileName}`,'analyzer:\n  ignore:\n    - bar\n');
        let options : core.DartMap<string,any> = this._getOptions('/foo/bar',{
            crawlUp : true});
        expect(options,hasLength(1));
        {
            let analyzer : any = options.get('analyzer');
            expect(analyzer,isNotNull);
            expect(op(Op.INDEX,analyzer,'ignore'),unorderedEquals(new core.DartList.literal('bar')));
        }
    }
    test_getOptions_crawlUp_hasInParent() : void {
        this.pathTranslator.newFolder('/foo/bar/baz');
        this.pathTranslator.newFile(`/foo/${this.optionsFileName}`,'analyzer:\n  ignore:\n    - foo\n');
        this.pathTranslator.newFile(`/foo/bar/${this.optionsFileName}`,'analyzer:\n  ignore:\n    - bar\n');
        let options : core.DartMap<string,any> = this._getOptions('/foo/bar/baz',{
            crawlUp : true});
        expect(options,hasLength(1));
        {
            let analyzer : any = options.get('analyzer');
            expect(analyzer,isNotNull);
            expect(op(Op.INDEX,analyzer,'ignore'),unorderedEquals(new core.DartList.literal('bar')));
        }
    }
    test_getOptions_doesNotExist() : void {
        this.pathTranslator.newFolder('/notFile');
        let options : core.DartMap<string,any> = this._getOptions('/notFile');
        expect(options,isEmpty);
    }
    test_getOptions_empty() : void {
        this.pathTranslator.newFile(`/${this.optionsFileName}`,'#empty');
        let options : core.DartMap<string,any> = this._getOptions('/');
        expect(options,isNotNull);
        expect(options,isEmpty);
    }
    test_getOptions_include() : void {
        this.pathTranslator.newFile('/foo.include','analyzer:\n  ignore:\n    - ignoreme.dart\n    - \'sdk_ext/**\'\n');
        this.pathTranslator.newFile(`/${this.optionsFileName}`,'include: foo.include\n');
        let options : core.DartMap<string,any> = this._getOptions('/');
        expect(options,hasLength(1));
        {
            let analyzer : any = options.get('analyzer');
            expect(analyzer,hasLength(1));
            {
                let ignore : any = op(Op.INDEX,analyzer,'ignore');
                expect(ignore,hasLength(2));
                expect(op(Op.INDEX,ignore,0),'ignoreme.dart');
                expect(op(Op.INDEX,ignore,1),'sdk_ext/**');
            }
        }
    }
    test_getOptions_include_missing() : void {
        this.pathTranslator.newFile(`/${this.optionsFileName}`,'include: /foo.include\n');
        let options : core.DartMap<string,any> = this._getOptions('/');
        expect(options,hasLength(0));
    }
    test_getOptions_invalid() : void {
        this.pathTranslator.newFile(`/${this.optionsFileName}`,':');
        expect(() =>  {
            this._getOptions('/');
        },throws);
    }
    test_getOptions_simple() : void {
        this.pathTranslator.newFile(`/${this.optionsFileName}`,'analyzer:\n  ignore:\n    - ignoreme.dart\n    - \'sdk_ext/**\'\n');
        let options : core.DartMap<string,any> = this._getOptions('/');
        expect(options,hasLength(1));
        {
            let analyzer : any = options.get('analyzer');
            expect(analyzer,hasLength(1));
            {
                let ignore : any = op(Op.INDEX,analyzer,'ignore');
                expect(ignore,hasLength(2));
                expect(op(Op.INDEX,ignore,0),'ignoreme.dart');
                expect(op(Op.INDEX,ignore,1),'sdk_ext/**');
            }
        }
    }
    _getOptions(posixPath : string,_namedArguments? : {crawlUp? : boolean}) : core.DartMap<string,any> {
        let {crawlUp} = Object.assign({
            "crawlUp" : false}, _namedArguments );
        let resource : any = this.pathTranslator.getResource(posixPath);
        return this.provider.getOptions(resource,{
            crawlUp : crawlUp});
    }
    constructor() {
    }
    @defaultConstructor
    AnalysisOptionsProviderTest() {
    }
}

export namespace AnalysisOptionsProviderNewTest {
    export type Constructors = AnalysisOptionsProviderTest.Constructors | 'AnalysisOptionsProviderNewTest';
    export type Interface = Omit<AnalysisOptionsProviderNewTest, Constructors>;
}
@DartClass
export class AnalysisOptionsProviderNewTest extends AnalysisOptionsProviderTest {
    get optionsFileName() : string {
        return AnalysisEngine.ANALYSIS_OPTIONS_YAML_FILE;
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    AnalysisOptionsProviderNewTest() {
    }
}

export namespace AnalysisOptionsProviderOldTest {
    export type Constructors = AnalysisOptionsProviderTest.Constructors | 'AnalysisOptionsProviderOldTest';
    export type Interface = Omit<AnalysisOptionsProviderOldTest, Constructors>;
}
@DartClass
export class AnalysisOptionsProviderOldTest extends AnalysisOptionsProviderTest {
    get optionsFileName() : string {
        return AnalysisEngine.ANALYSIS_OPTIONS_FILE;
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    AnalysisOptionsProviderOldTest() {
    }
}

export class properties {
}
