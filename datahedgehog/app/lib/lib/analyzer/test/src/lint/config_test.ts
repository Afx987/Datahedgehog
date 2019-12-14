/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/src/lint/config_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => any = () =>  {
    defineTests();
};
export var defineTests : () => any = () =>  {
    let src = "files:\n  include: foo # un-quoted\n  exclude:\n    - 'test/**'       # file globs can be scalars or lists\n    - '**/_data.dart' # unquoted stars treated by YAML as aliases\nrules:\n  style_guide:\n    unnecessary_getters: false #disable\n    camel_case_types: true #enable\n  pub:\n    package_names: false\n";
    let config = new bare.createInstance(any,null,src);
    group('lint config',() =>  {
        group('file',() =>  {
            test('includes',() =>  {
                expect(config.fileIncludes,unorderedEquals(new core.DartList.literal('foo')));
            });
            test('excludes',() =>  {
                expect(config.fileExcludes,unorderedEquals(new core.DartList.literal('test/**','**/_data.dart')));
            });
        });
        group('rule',() =>  {
            test('configs',() =>  {
                expect(config.ruleConfigs,hasLength(3));
            });
            test('config',() =>  {
                config = new bare.createInstance(any,null,'rules:\n  style_guide:\n    unnecessary_getters: false');
                expect(config.ruleConfigs,hasLength(1));
                let ruleConfig = op(Op.INDEX,config.ruleConfigs,0);
                expect(ruleConfig.group,'style_guide');
                expect(ruleConfig.name,'unnecessary_getters');
                expect(ruleConfig.args,new core.DartMap.literal([
                    ['enabled',false]]));
                expect(ruleConfig.disables('unnecessary_getters'),isTrue);
            });
        });
    });
    group('analysis options',() =>  {
        group('parsing',() =>  {
            group('groups',() =>  {
                test('basic',() =>  {
                    let src = 'plugin_a:\n  option_a: false\nplugin_b:\n  option_b: true\nlinter:\n  rules:\n    style_guide:\n      unnecessary_getters: false #disable\n      camel_case_types: true #enable\n';
                    let config = processAnalysisOptionsFile(src);
                    let ruleNames = config.ruleConfigs.map((rc : any) =>  {
                        return rc.name;
                    });
                    expect(ruleNames,hasLength(2));
                    expect(ruleNames,contains('unnecessary_getters'));
                    expect(ruleNames,contains('camel_case_types'));
                });
            });
            group('w/o groups',() =>  {
                test('rule list',() =>  {
                    let src = 'plugin_a:\n  option_a: false\nplugin_b:\n  option_b: true\nlinter:\n  rules:\n    - camel_case_types\n';
                    let config = processAnalysisOptionsFile(src);
                    expect(config.ruleConfigs.length,1);
                    expect(op(Op.INDEX,op(Op.INDEX,config.ruleConfigs,0).args,'enabled'),isTrue);
                });
                test('rule map (bools)',() =>  {
                    let src = 'plugin_a:\n  option_a: false\nplugin_b:\n  option_b: true\nlinter:\n  rules:\n    camel_case_types: true #enable\n    unnecessary_getters: false #disable\n';
                    let config = processAnalysisOptionsFile(src);
                    let ruleConfigs = config.ruleConfigs.toList();
                    ruleConfigs.sort((rc1 : any,rc2 : any) =>  {
                        return rc1.name.compareTo(rc2.name);
                    });
                    expect(ruleConfigs,hasLength(2));
                    expect(op(Op.INDEX,ruleConfigs,0).name,'camel_case_types');
                    expect(op(Op.INDEX,op(Op.INDEX,config.ruleConfigs,0).args,'enabled'),isFalse);
                    expect(op(Op.INDEX,ruleConfigs,1).name,'unnecessary_getters');
                    expect(op(Op.INDEX,op(Op.INDEX,config.ruleConfigs,1).args,'enabled'),isTrue);
                });
            });
        });
        test('empty file',() =>  {
            expect(processAnalysisOptionsFile(''),isNull);
        });
        test('bad format',() =>  {
            expect(processAnalysisOptionsFile('foo: '),isNull);
        });
    });
    group('options processing',() =>  {
        group('raw maps',() =>  {
            test('rule list',() =>  {
                let options : core.DartMap<any,any> = new core.DartMap.literal([
                ]);
                let lintOptions = new core.DartMap.literal([
                    ['rules',new core.DartList.literal('camel_case_types')]]);
                options.set('linter',lintOptions);
                let config = parseConfig(options);
                expect(config,isNotNull);
                expect(config.ruleConfigs,hasLength(1));
            });
            test('rule map (bool)',() =>  {
                let options : core.DartMap<any,any> = new core.DartMap.literal([
                ]);
                let lintOptions = new core.DartMap.literal([
                    ['rules',new core.DartMap.literal([
                        ['camel_case_types',true]])]]);
                options.set('linter',lintOptions);
                let config = parseConfig(options);
                expect(config,isNotNull);
                expect(config.ruleConfigs,hasLength(1));
            });
            test('rule map (string)',() =>  {
                let options : core.DartMap<any,any> = new core.DartMap.literal([
                ]);
                let lintOptions = new core.DartMap.literal([
                    ['rules',new core.DartMap.literal([
                        ['camel_case_types','true']])]]);
                options.set('linter',lintOptions);
                let config = parseConfig(options);
                expect(config,isNotNull);
                expect(config.ruleConfigs,hasLength(1));
            });
            test('nested rule map (bool)',() =>  {
                let options : core.DartMap<any,any> = new core.DartMap.literal([
                ]);
                let lintOptions = new core.DartMap.literal([
                    ['rules',new core.DartMap.literal([
                        ['style_guide',new core.DartMap.literal([
                            ['camel_case_types',true]])]])]]);
                options.set('linter',lintOptions);
                let config = parseConfig(options);
                expect(config,isNotNull);
                expect(config.ruleConfigs,hasLength(1));
            });
            test('nested rule map (string)',() =>  {
                let options : core.DartMap<any,any> = new core.DartMap.literal([
                ]);
                let lintOptions = new core.DartMap.literal([
                    ['rules',new core.DartMap.literal([
                        ['style_guide',new core.DartMap.literal([
                            ['camel_case_types',true]])]])]]);
                options.set('linter',lintOptions);
                let config = parseConfig(options);
                expect(config,isNotNull);
                expect(config.ruleConfigs,hasLength(1));
            });
        });
    });
};
export class properties {
}
