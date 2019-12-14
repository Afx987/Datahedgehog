/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/lint/config.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var parseConfig : (optionsMap : core.DartMap<any,any>) => LintConfig = (optionsMap : core.DartMap<any,any>) : LintConfig =>  {
    if (optionsMap != null) {
        let options = optionsMap.get('linter');
        if (is(options, core.DartMap<any,any>)) {
            return new LintConfig.parseMap(options);
        }
    }
    return null;
};
export var processAnalysisOptionsFile : (fileContents : string,_namedArguments? : {fileUrl? : string}) => LintConfig = (fileContents : string,_namedArguments? : {fileUrl? : string}) : LintConfig =>  {
    let {fileUrl} = Object.assign({
    }, _namedArguments );
    let yaml = loadYamlNode(fileContents,{
        sourceUrl : fileUrl});
    if (is(yaml, any)) {
        return parseConfig(yaml);
    }
    return null;
};
export namespace LintConfig {
    export type Constructors = never;
    export type Interface = Omit<LintConfig, Constructors>;
}
@DartClass
export class LintConfig {
    @namedFactory
    static $parse(source : string,_namedArguments? : {sourceUrl? : string}) : LintConfig {
        let {sourceUrl} = Object.assign({
        }, _namedArguments );
        return ((_) : _LintConfig =>  {
            {
                _._parse(source,{
                    sourceUrl : sourceUrl});
                return _;
            }
        })(new _LintConfig());
    }
    static parse : new(source : string,_namedArguments? : {sourceUrl? : string}) => LintConfig;

    @namedFactory
    static $parseMap(map : core.DartMap<any,any>) : LintConfig {
        return ((_) : _LintConfig =>  {
            {
                _._parseMap(map);
                return _;
            }
        })(new _LintConfig());
    }
    static parseMap : new(map : core.DartMap<any,any>) => LintConfig;

    @AbstractProperty
    get fileExcludes() : core.DartList<string>{ throw 'abstract'}
    @AbstractProperty
    get fileIncludes() : core.DartList<string>{ throw 'abstract'}
    @AbstractProperty
    get ruleConfigs() : core.DartList<RuleConfig>{ throw 'abstract'}
}

export namespace RuleConfig {
    export type Constructors = 'RuleConfig';
    export type Interface = Omit<RuleConfig, Constructors>;
}
@DartClass
export class RuleConfig {
    args : core.DartMap<string,any>;

    @AbstractProperty
    get group() : string{ throw 'abstract'}
    @AbstractProperty
    get name() : string{ throw 'abstract'}
    disables(ruleName : string) : boolean {
        return ruleName == this.name && op(Op.EQUALS,this.args.get('enabled'),false);
    }
    enables(ruleName : string) : boolean {
        return ruleName == this.name && op(Op.EQUALS,this.args.get('enabled'),true);
    }
    constructor() {
    }
    @defaultConstructor
    RuleConfig() {
        this.args = new core.DartMap.literal([
        ]);
    }
}

export namespace _LintConfig {
    export type Constructors = '_LintConfig';
    export type Interface = Omit<_LintConfig, Constructors>;
}
@DartClass
@Implements(LintConfig)
export class _LintConfig implements LintConfig.Interface {
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    fileIncludes;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    fileExcludes;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    ruleConfigs;

    addAsListOrString(value : any,list : core.DartList<string>) : void {
        if (is(value, core.DartList<any>)) {
            value.forEach((v : any) =>  {
                return list.add(v);
            });
        }else if (is(value, "string")) {
            list.add(value);
        }
    }
    asBool(scalar : any) : boolean {
        if (is(scalar, "boolean")) {
            return scalar;
        }
        if (is(scalar, "string")) {
            if (scalar == 'true') {
                return true;
            }
            if (scalar == 'false') {
                return false;
            }
        }
        return null;
    }
    asString(scalar : any) : string {
        if (is(scalar, "string")) {
            return scalar;
        }
        return null;
    }
    parseArgs(args : any) : core.DartMap<string,any> {
        let enabled : boolean = this.asBool(args);
        if (enabled != null) {
            return new core.DartMap.literal([
                ['enabled',enabled]]);
        }
        return null;
    }
    _parse(src : string,_namedArguments? : {sourceUrl? : string}) : void {
        let {sourceUrl} = Object.assign({
        }, _namedArguments );
        let yaml = loadYamlNode(src,{
            sourceUrl : sourceUrl});
        if (is(yaml, any)) {
            this._parseYaml(yaml);
        }
    }
    _parseMap(options : core.DartMap<any,any>) : void {
        if (is(options, any)) {
            this._parseYaml(options);
        }else {
            this._parseRawMap(options);
        }
    }
    _parseRawMap(options : core.DartMap<any,any>) : void {
        options.forEach((k : any,v : any) =>  {
            if (isNot(k, "string")) {
                return;
            }
            let key : string = k;
            switch (key) {
                case 'files':
                    if (is(v, core.DartMap<any,any>)) {
                        this.addAsListOrString(v.get('include'),this.fileIncludes);
                        this.addAsListOrString(v.get('exclude'),this.fileExcludes);
                    }
                    break;
                case 'rules':
                    if (is(v, core.DartList<any>)) {
                        v.forEach((rule : any) =>  {
                            let config = new _RuleConfig();
                            config.name = this.asString(rule);
                            config.args = new core.DartMap.literal([
                                ['enabled',true]]);
                            this.ruleConfigs.add(config);
                        });
                    }
                    if (is(v, core.DartMap<any,any>)) {
                        v.forEach((key : any,value : any) =>  {
                            if (is(value, core.DartMap<any,any>)) {
                                value.forEach((rule : any,args : any) =>  {
                                    let config = new _RuleConfig();
                                    config.group = key;
                                    config.name = this.asString(rule);
                                    config.args = this.parseArgs(args);
                                    this.ruleConfigs.add(config);
                                });
                            }else {
                                value = this.asBool(value);
                                if (value != null) {
                                    let config = new _RuleConfig();
                                    config.name = this.asString(key);
                                    config.args = new core.DartMap.literal([
                                        ['enabled',value]]);
                                    this.ruleConfigs.add(config);
                                }
                            }
                        });
                    }
                    break;
            }
        });
    }
    _parseYaml(yaml : any) : void {
        yaml.nodes.forEach((k : any,v : any) =>  {
            if (isNot(k, any)) {
                return;
            }
            let key : any = k;
            switch (key.toString()) {
                case 'files':
                    if (is(v, any)) {
                        this.addAsListOrString(op(Op.INDEX,v,'include'),this.fileIncludes);
                        this.addAsListOrString(op(Op.INDEX,v,'exclude'),this.fileExcludes);
                    }
                    break;
                case 'rules':
                    if (is(v, core.DartList<any>)) {
                        (v as core.DartList<any>).forEach((rule : any) =>  {
                            let config = new _RuleConfig();
                            config.name = this.asString(rule);
                            config.args = new core.DartMap.literal([
                                ['enabled',true]]);
                            this.ruleConfigs.add(config);
                        });
                    }
                    if (is(v, any)) {
                        v.forEach((key : any,value : any) =>  {
                            if (is(value, "boolean")) {
                                let config = new _RuleConfig();
                                config.name = this.asString(key);
                                config.args = new core.DartMap.literal([
                                    ['enabled',value]]);
                                this.ruleConfigs.add(config);
                            }
                            if (is(value, any)) {
                                value.forEach((rule : any,args : any) =>  {
                                    let config = new _RuleConfig();
                                    config.group = key;
                                    config.name = this.asString(rule);
                                    config.args = this.parseArgs(args);
                                    this.ruleConfigs.add(config);
                                });
                            }
                        });
                    }
                    break;
            }
        });
    }
    constructor() {
    }
    @defaultConstructor
    _LintConfig() {
        this.fileIncludes = new core.DartList.literal<string>();
        this.fileExcludes = new core.DartList.literal<string>();
        this.ruleConfigs = new core.DartList.literal<RuleConfig>();
    }
}

export namespace _RuleConfig {
    export type Constructors = RuleConfig.Constructors | '_RuleConfig';
    export type Interface = Omit<_RuleConfig, Constructors>;
}
@DartClass
export class _RuleConfig extends RuleConfig {
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    group : string;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    name : string;

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _RuleConfig() {
    }
}

export class properties {
}
