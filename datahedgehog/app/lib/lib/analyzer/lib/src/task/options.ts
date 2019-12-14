/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/task/options.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as collection from "@dart2ts/dart/core";
import * as lib4 from "@dart2ts.packages/source_span/lib/src/span";

export var applyToAnalysisOptions : (options : any,optionMap : core.DartMap<string,core.DartObject>) => void = (options : any,optionMap : core.DartMap<string,core.DartObject>) : void =>  {
    properties._processor.applyToAnalysisOptions(options,optionMap);
};
export namespace AnalyzerOptions {
    export type Constructors = 'AnalyzerOptions';
    export type Interface = Omit<AnalyzerOptions, Constructors>;
}
@DartClass
export class AnalyzerOptions {
    private static __$analyzer : string;
    static get analyzer() : string { 
        if (this.__$analyzer===undefined) {
            this.__$analyzer = 'analyzer';
        }
        return this.__$analyzer;
    }

    private static __$enableAssertInitializer : string;
    static get enableAssertInitializer() : string { 
        if (this.__$enableAssertInitializer===undefined) {
            this.__$enableAssertInitializer = 'enableAssertInitializer';
        }
        return this.__$enableAssertInitializer;
    }

    private static __$enableAsync : string;
    static get enableAsync() : string { 
        if (this.__$enableAsync===undefined) {
            this.__$enableAsync = 'enableAsync';
        }
        return this.__$enableAsync;
    }

    private static __$enableGenericMethods : string;
    static get enableGenericMethods() : string { 
        if (this.__$enableGenericMethods===undefined) {
            this.__$enableGenericMethods = 'enableGenericMethods';
        }
        return this.__$enableGenericMethods;
    }

    private static __$enableInitializingFormalAccess : string;
    static get enableInitializingFormalAccess() : string { 
        if (this.__$enableInitializingFormalAccess===undefined) {
            this.__$enableInitializingFormalAccess = 'enableInitializingFormalAccess';
        }
        return this.__$enableInitializingFormalAccess;
    }

    private static __$enableStrictCallChecks : string;
    static get enableStrictCallChecks() : string { 
        if (this.__$enableStrictCallChecks===undefined) {
            this.__$enableStrictCallChecks = 'enableStrictCallChecks';
        }
        return this.__$enableStrictCallChecks;
    }

    private static __$enableSuperMixins : string;
    static get enableSuperMixins() : string { 
        if (this.__$enableSuperMixins===undefined) {
            this.__$enableSuperMixins = 'enableSuperMixins';
        }
        return this.__$enableSuperMixins;
    }

    private static __$errors : string;
    static get errors() : string { 
        if (this.__$errors===undefined) {
            this.__$errors = 'errors';
        }
        return this.__$errors;
    }

    private static __$exclude : string;
    static get exclude() : string { 
        if (this.__$exclude===undefined) {
            this.__$exclude = 'exclude';
        }
        return this.__$exclude;
    }

    private static __$include : string;
    static get include() : string { 
        if (this.__$include===undefined) {
            this.__$include = 'include';
        }
        return this.__$include;
    }

    private static __$language : string;
    static get language() : string { 
        if (this.__$language===undefined) {
            this.__$language = 'language';
        }
        return this.__$language;
    }

    private static __$plugins : string;
    static get plugins() : string { 
        if (this.__$plugins===undefined) {
            this.__$plugins = 'plugins';
        }
        return this.__$plugins;
    }

    private static __$strong_mode : string;
    static get strong_mode() : string { 
        if (this.__$strong_mode===undefined) {
            this.__$strong_mode = 'strong-mode';
        }
        return this.__$strong_mode;
    }

    private static __$implicitCasts : string;
    static get implicitCasts() : string { 
        if (this.__$implicitCasts===undefined) {
            this.__$implicitCasts = 'implicit-casts';
        }
        return this.__$implicitCasts;
    }

    private static __$implicitDynamic : string;
    static get implicitDynamic() : string { 
        if (this.__$implicitDynamic===undefined) {
            this.__$implicitDynamic = 'implicit-dynamic';
        }
        return this.__$implicitDynamic;
    }

    private static __$ignoreSynonyms : core.DartList<string>;
    static get ignoreSynonyms() : core.DartList<string> { 
        if (this.__$ignoreSynonyms===undefined) {
            this.__$ignoreSynonyms = new core.DartList.literal('ignore','false');
        }
        return this.__$ignoreSynonyms;
    }

    private static __$severities : core.DartList<string>;
    static get severities() : core.DartList<string> { 
        if (this.__$severities===undefined) {
            this.__$severities = new core.DartList.unmodifiable(severityMap.keys);
        }
        return this.__$severities;
    }
    static set severities(__$value : core.DartList<string>)  { 
        this.__$severities = __$value;
    }

    private static __$includeSynonyms : core.DartList<string>;
    static get includeSynonyms() : core.DartList<string> { 
        if (this.__$includeSynonyms===undefined) {
            this.__$includeSynonyms = new core.DartList.literal('include','true');
        }
        return this.__$includeSynonyms;
    }

    private static __$trueOrFalse : core.DartList<string>;
    static get trueOrFalse() : core.DartList<string> { 
        if (this.__$trueOrFalse===undefined) {
            this.__$trueOrFalse = new core.DartList.literal('true','false');
        }
        return this.__$trueOrFalse;
    }

    private static __$topLevel : core.DartList<string>;
    static get topLevel() : core.DartList<string> { 
        if (this.__$topLevel===undefined) {
            this.__$topLevel = new core.DartList.literal(AnalyzerOptions.errors,AnalyzerOptions.exclude,AnalyzerOptions.language,AnalyzerOptions.plugins,AnalyzerOptions.strong_mode);
        }
        return this.__$topLevel;
    }

    private static __$languageOptions : core.DartList<string>;
    static get languageOptions() : core.DartList<string> { 
        if (this.__$languageOptions===undefined) {
            this.__$languageOptions = new core.DartList.literal(AnalyzerOptions.enableAssertInitializer,AnalyzerOptions.enableAsync,AnalyzerOptions.enableGenericMethods,AnalyzerOptions.enableStrictCallChecks,AnalyzerOptions.enableSuperMixins);
        }
        return this.__$languageOptions;
    }

    constructor() {
    }
    @defaultConstructor
    AnalyzerOptions() {
    }
}

export namespace CompositeValidator {
    export type Constructors = 'CompositeValidator';
    export type Interface = Omit<CompositeValidator, Constructors>;
}
@DartClass
export class CompositeValidator extends any {
    validators : core.DartList<any>;

    constructor(validators : core.DartList<any>) {
    }
    @defaultConstructor
    CompositeValidator(validators : core.DartList<any>) {
        this.validators = validators;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    validate(reporter : any,options : core.DartMap<string,any>) : void {
        return this.validators.forEach((v : any) =>  {
            return v.validate(reporter,options);
        });
    }
}

export namespace ErrorBuilder {
    export type Constructors = 'ErrorBuilder';
    export type Interface = Omit<ErrorBuilder, Constructors>;
}
@DartClass
export class ErrorBuilder {
    proposal : string;

    code : any;

    constructor(supportedOptions : core.DartList<string>) {
    }
    @defaultConstructor
    ErrorBuilder(supportedOptions : core.DartList<string>) {
        /* TODO (AssertStatementImpl) : assert (supportedOptions != null && !supportedOptions.isEmpty); */;
        if (supportedOptions.length > 1) {
            this.proposal = StringUtilities.printListOfQuotedNames(supportedOptions);
            this.code = this.pluralProposalCode;
        }else {
            this.proposal = `'${supportedOptions.join()}'`;
            this.code = this.singularProposalCode;
        }
    }
    get pluralProposalCode() : any {
        return AnalysisOptionsWarningCode.UNSUPPORTED_OPTION_WITH_LEGAL_VALUES;
    }
    get singularProposalCode() : any {
        return AnalysisOptionsWarningCode.UNSUPPORTED_OPTION_WITH_LEGAL_VALUE;
    }
    reportError(reporter : any,scopeName : string,node : any) : void {
        reporter.reportErrorForSpan(this.code,node.span,new core.DartList.literal(scopeName,node.value,this.proposal));
    }
}

export namespace ErrorFilterOptionValidator {
    export type Constructors = 'ErrorFilterOptionValidator';
    export type Interface = Omit<ErrorFilterOptionValidator, Constructors>;
}
@DartClass
export class ErrorFilterOptionValidator extends any {
    private static __$legalValues : core.DartList<string>;
    static get legalValues() : core.DartList<string> { 
        if (this.__$legalValues===undefined) {
            this.__$legalValues = ((_) : core.DartList<any> =>  {
                {
                    _.addAll(AnalyzerOptions.includeSynonyms);
                    _.addAll(AnalyzerOptions.severities);
                    return _;
                }
            })(new core.DartList.from(AnalyzerOptions.ignoreSynonyms));
        }
        return this.__$legalValues;
    }
    static set legalValues(__$value : core.DartList<string>)  { 
        this.__$legalValues = __$value;
    }

    private static __$legalValueString : string;
    static get legalValueString() : string { 
        if (this.__$legalValueString===undefined) {
            this.__$legalValueString = StringUtilities.printListOfQuotedNames(ErrorFilterOptionValidator.legalValues);
        }
        return this.__$legalValueString;
    }
    static set legalValueString(__$value : string)  { 
        this.__$legalValueString = __$value;
    }

    private static __$_errorCodes : core.DartHashSet<string>;
    static get _errorCodes() : core.DartHashSet<string> { 
        return this.__$_errorCodes;
    }
    static set _errorCodes(__$value : core.DartHashSet<string>)  { 
        this.__$_errorCodes = __$value;
    }

    static get errorCodes() : core.DartSet<string> {
        if (op(Op.EQUALS,ErrorFilterOptionValidator._errorCodes,null)) {
            ErrorFilterOptionValidator._errorCodes = new core.DartHashSet<string>();
            ErrorFilterOptionValidator._errorCodes.addAll(errorCodeValues.map((code : any) =>  {
                return code.name;
            }));
        }
        return ErrorFilterOptionValidator._errorCodes;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    validate(reporter : any,options : core.DartMap<string,any>) : void {
        let analyzer = options.get(AnalyzerOptions.analyzer);
        if (is(analyzer, any)) {
            let filters = op(Op.INDEX,analyzer,AnalyzerOptions.errors);
            if (is(filters, any)) {
                let value : string;
                filters.nodes.forEach((k : any,v : any) =>  {
                    if (is(k, any)) {
                        value = toUpperCase(k.value);
                        if (!ErrorFilterOptionValidator.errorCodes.contains(value)) {
                            reporter.reportErrorForSpan(AnalysisOptionsWarningCode.UNRECOGNIZED_ERROR_CODE,k.span,new core.DartList.literal(((_504_)=>(!!_504_)?_504_.toString():null)(k.value)));
                        }
                    }
                    if (is(v, any)) {
                        value = toLowerCase(v.value);
                        if (!ErrorFilterOptionValidator.legalValues.contains(value)) {
                            reporter.reportErrorForSpan(AnalysisOptionsWarningCode.UNSUPPORTED_OPTION_WITH_LEGAL_VALUES,v.span,new core.DartList.literal(AnalyzerOptions.errors,((_505_)=>(!!_505_)?_505_.toString():null)(v.value),ErrorFilterOptionValidator.legalValueString));
                        }
                    }
                });
            }
        }
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ErrorFilterOptionValidator() {
    }
}

export namespace GenerateOptionsErrorsTask {
    export type Constructors = 'GenerateOptionsErrorsTask';
    export type Interface = Omit<GenerateOptionsErrorsTask, Constructors>;
}
@DartClass
export class GenerateOptionsErrorsTask extends any {
    private static __$CONTENT_INPUT_NAME : string;
    static get CONTENT_INPUT_NAME() : string { 
        if (this.__$CONTENT_INPUT_NAME===undefined) {
            this.__$CONTENT_INPUT_NAME = 'CONTENT_INPUT_NAME';
        }
        return this.__$CONTENT_INPUT_NAME;
    }

    private static __$DESCRIPTOR : any;
    static get DESCRIPTOR() : any { 
        if (this.__$DESCRIPTOR===undefined) {
            this.__$DESCRIPTOR = new bare.createInstance(any,null,'GenerateOptionsErrorsTask',GenerateOptionsErrorsTask.createTask.bind(this),GenerateOptionsErrorsTask.buildInputs.bind(this),new core.DartList.literal<any>(properties.ANALYSIS_OPTIONS_ERRORS,LINE_INFO),{
                suitabilityFor : GenerateOptionsErrorsTask.suitabilityFor.bind(this)});
        }
        return this.__$DESCRIPTOR;
    }
    static set DESCRIPTOR(__$value : any)  { 
        this.__$DESCRIPTOR = __$value;
    }

    optionsProvider : any;

    constructor(context : any,target : any) {
    }
    @defaultConstructor
    GenerateOptionsErrorsTask(context : any,target : any) {
        super.DartObject(context,target);
        this.optionsProvider = new bare.createInstance(any,null,((t)=>(!!t)?t.sourceFactory:null)(context));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get descriptor() : any {
        return GenerateOptionsErrorsTask.DESCRIPTOR;
    }
    get source() : any {
        return target.source;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    internalPerform() : void {
        let content : string = getRequiredInput(GenerateOptionsErrorsTask.CONTENT_INPUT_NAME);
        let errors : core.DartList<any> = new core.DartList.literal<any>();
        let initialSource : any = this.source;
        let initialIncludeSpan : lib4.SourceSpan;
        var validate : (source : any,options : core.DartMap<string,any>) => void = (source : any,options : core.DartMap<string,any>) : void =>  {
            let validationErrors : core.DartList<any> = new OptionsFileValidator(source).validate(options);
            if (initialIncludeSpan != null && validationErrors.isNotEmpty) {
                for(let error of validationErrors) {
                    let args = new core.DartList.literal(source.fullName,error.offset.toString(),(op(Op.MINUS,op(Op.PLUS,error.offset,error.length),1)).toString(),error.message);
                    errors.add(new bare.createInstance(any,null,initialSource,initialIncludeSpan.start.column + 1,initialIncludeSpan.length,AnalysisOptionsWarningCode.INCLUDED_FILE_WARNING,args));
                }
            }else {
                errors.addAll(validationErrors);
            }
            let node : any = options.get(AnalyzerOptions.include);
            if (op(Op.EQUALS,node,null)) {
                return;
            }
            let span : lib4.SourceSpan = node.span;
            initialIncludeSpan = ( initialIncludeSpan ) || ( span );
            let includeUri : string = span.text;
            let includedSource : any = context.sourceFactory.resolveUri(source,includeUri);
            if (!includedSource.exists()) {
                errors.add(new bare.createInstance(any,null,initialSource,initialIncludeSpan.start.column + 1,initialIncludeSpan.length,AnalysisOptionsWarningCode.INCLUDE_FILE_NOT_FOUND,new core.DartList.literal(includeUri,source.fullName)));
                return;
            }
            try {
                let options : core.DartMap<string,any> = this.optionsProvider.getOptionsFromString(includedSource.contents.data);
                validate(includedSource,options);
            } catch (__error__) {

                if (is(__error__,any)){
                    let e : any = __error__;
                    let args = new core.DartList.literal(includedSource.fullName,e.span.start.offset.toString(),e.span.end.offset.toString(),e.message);
                    errors.add(new bare.createInstance(any,null,initialSource,initialIncludeSpan.start.column + 1,initialIncludeSpan.length,AnalysisOptionsErrorCode.INCLUDED_FILE_PARSE_ERROR,args));
                }
            }
        };
        try {
            let options : core.DartMap<string,any> = this.optionsProvider.getOptionsFromString(content);
            validate(this.source,options);
        } catch (__error__) {

            if (is(__error__,any)){
                let e : any = __error__;
                let span : lib4.SourceSpan = e.span;
                errors.add(new bare.createInstance(any,null,this.source,span.start.column + 1,span.length,AnalysisOptionsErrorCode.PARSE_ERROR,new core.DartList.literal(e.message)));
            }
        }
        op(Op.INDEX_ASSIGN,outputs,properties.ANALYSIS_OPTIONS_ERRORS,errors);
        op(Op.INDEX_ASSIGN,outputs,LINE_INFO,GenerateOptionsErrorsTask.computeLineInfo(content));
    }
    static buildInputs(source : any) : core.DartMap<string,any> {
        return new core.DartMap.literal([
            [GenerateOptionsErrorsTask.CONTENT_INPUT_NAME,CONTENT.of(source)]]);
    }
    static computeLineInfo(content : string) : any {
        let lineStarts : core.DartList<number> = StringUtilities.computeLineStarts(content);
        return new bare.createInstance(any,null,lineStarts);
    }
    static createTask(context : any,target : any) : GenerateOptionsErrorsTask {
        return new GenerateOptionsErrorsTask(context,target);
    }
    static suitabilityFor(target : any) : any {
        if (is(target, any) && (op(Op.EQUALS,target.shortName,AnalysisEngine.ANALYSIS_OPTIONS_FILE) || op(Op.EQUALS,target.shortName,AnalysisEngine.ANALYSIS_OPTIONS_YAML_FILE))) {
            return TaskSuitability.HIGHEST;
        }
        return TaskSuitability.NONE;
    }
}

export namespace LanguageOptionValidator {
    export type Constructors = 'LanguageOptionValidator';
    export type Interface = Omit<LanguageOptionValidator, Constructors>;
}
@DartClass
export class LanguageOptionValidator extends any {
    builder : ErrorBuilder;

    trueOrFalseBuilder : ErrorBuilder;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    validate(reporter : any,options : core.DartMap<string,any>) : void {
        let analyzer = options.get(AnalyzerOptions.analyzer);
        if (is(analyzer, any)) {
            let language = op(Op.INDEX,analyzer,AnalyzerOptions.language);
            if (is(language, any)) {
                language.nodes.forEach((k : any,v : any) =>  {
                    let key : string, value : string;
                    let validKey : boolean = false;
                    if (is(k, any)) {
                        key = ((_506_)=>(!!_506_)?_506_.toString():null)(k.value);
                        if (!AnalyzerOptions.languageOptions.contains(key)) {
                            this.builder.reportError(reporter,AnalyzerOptions.language,k);
                        }else {
                            validKey = true;
                        }
                    }
                    if (validKey && is(v, any)) {
                        value = toLowerCase(v.value);
                        if (!AnalyzerOptions.trueOrFalse.contains(value)) {
                            this.trueOrFalseBuilder.reportError(reporter,key,v);
                        }
                    }
                });
            }
        }
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    LanguageOptionValidator() {
        this.builder = new ErrorBuilder(AnalyzerOptions.languageOptions);
        this.trueOrFalseBuilder = new TrueOrFalseValueErrorBuilder();
    }
}

export namespace OptionsFileValidator {
    export type Constructors = 'OptionsFileValidator';
    export type Interface = Omit<OptionsFileValidator, Constructors>;
}
@DartClass
export class OptionsFileValidator {
    source : any;

    _validators : core.DartList<any>;

    constructor(source : any) {
    }
    @defaultConstructor
    OptionsFileValidator(source : any) {
        this._validators = new core.DartList.literal(new AnalyzerOptionsValidator(),new LinterOptionsValidator(),new bare.createInstance(any,null));
        this.source = source;
    }
    validate(options : core.DartMap<string,any>) : core.DartList<any> {
        let recorder : any = new bare.createInstance(any,null);
        let reporter : any = new bare.createInstance(any,null,recorder,this.source);
        this._validators.forEach((v : any) =>  {
            return v.validate(reporter,options);
        });
        return recorder.errors;
    }
}

export namespace StrongModeOptionValueValidator {
    export type Constructors = 'StrongModeOptionValueValidator';
    export type Interface = Omit<StrongModeOptionValueValidator, Constructors>;
}
@DartClass
export class StrongModeOptionValueValidator extends any {
    trueOrFalseBuilder : ErrorBuilder;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    validate(reporter : any,options : core.DartMap<string,any>) : void {
        let analyzer = options.get(AnalyzerOptions.analyzer);
        if (is(analyzer, any)) {
            let v = op(Op.INDEX,analyzer.nodes,AnalyzerOptions.strong_mode);
            if (is(v, any)) {
                let value = toLowerCase(v.value);
                if (!AnalyzerOptions.trueOrFalse.contains(value)) {
                    this.trueOrFalseBuilder.reportError(reporter,AnalyzerOptions.strong_mode,v);
                }
            }
        }
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    StrongModeOptionValueValidator() {
        this.trueOrFalseBuilder = new TrueOrFalseValueErrorBuilder();
    }
}

export namespace TopLevelOptionValidator {
    export type Constructors = 'TopLevelOptionValidator';
    export type Interface = Omit<TopLevelOptionValidator, Constructors>;
}
@DartClass
export class TopLevelOptionValidator extends any {
    pluginName : string;

    supportedOptions : core.DartList<string>;

    _valueProposal : string;

    _warningCode : any;

    constructor(pluginName : string,supportedOptions : core.DartList<string>) {
    }
    @defaultConstructor
    TopLevelOptionValidator(pluginName : string,supportedOptions : core.DartList<string>) {
        this.pluginName = pluginName;
        this.supportedOptions = supportedOptions;
        /* TODO (AssertStatementImpl) : assert (supportedOptions != null && !supportedOptions.isEmpty); */;
        if (this.supportedOptions.length > 1) {
            this._valueProposal = StringUtilities.printListOfQuotedNames(this.supportedOptions);
            this._warningCode = AnalysisOptionsWarningCode.UNSUPPORTED_OPTION_WITH_LEGAL_VALUES;
        }else {
            this._valueProposal = `'${this.supportedOptions.join()}'`;
            this._warningCode = AnalysisOptionsWarningCode.UNSUPPORTED_OPTION_WITH_LEGAL_VALUE;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    validate(reporter : any,options : core.DartMap<string,any>) : void {
        let node : any = options.get(this.pluginName);
        if (is(node, any)) {
            node.nodes.forEach((k : any,v : any) =>  {
                if (is(k, any)) {
                    if (!this.supportedOptions.contains(k.value)) {
                        reporter.reportErrorForSpan(this._warningCode,k.span,new core.DartList.literal(this.pluginName,k.value,this._valueProposal));
                    }
                }
            });
        }
    }
}

export namespace _OptionsProcessor {
    export type Constructors = '_OptionsProcessor';
    export type Interface = Omit<_OptionsProcessor, Constructors>;
}
@DartClass
export class _OptionsProcessor {
    private static __$defaults : core.DartMap<string,core.DartObject>;
    static get defaults() : core.DartMap<string,core.DartObject> { 
        if (this.__$defaults===undefined) {
            this.__$defaults = new core.DartMap.literal([
                ['analyzer',new core.DartMap.literal([
                ])]]);
        }
        return this.__$defaults;
    }
    static set defaults(__$value : core.DartMap<string,core.DartObject>)  { 
        this.__$defaults = __$value;
    }

    applyToAnalysisOptions(options : any,optionMap : core.DartMap<string,core.DartObject>) : void {
        if (optionMap == null) {
            return;
        }
        let analyzer = optionMap.get(AnalyzerOptions.analyzer);
        if (is(analyzer, core.DartMap<any,any>)) {
            let strongMode = analyzer.get(AnalyzerOptions.strong_mode);
            this._applyStrongOptions(options,strongMode);
            let filters = analyzer.get(AnalyzerOptions.errors);
            this._applyProcessors(options,filters);
            let language = analyzer.get(AnalyzerOptions.language);
            this._applyLanguageOptions(options,language);
            let excludes = analyzer.get(AnalyzerOptions.exclude);
            this._applyExcludes(options,excludes);
        }
        let config : any = parseConfig(optionMap);
        if (config != null) {
            let lintRules : core.DartIterable<any> = Registry.ruleRegistry.enabled(config);
            if (lintRules.isNotEmpty) {
                options.lint = true;
                options.lintRules = lintRules.toList();
            }
        }
    }
    _applyExcludes(options : any,excludes : core.DartObject) : void {
        if (is(excludes, any)) {
            let excludeList : core.DartList<string> = toStringList(excludes);
            if (excludeList != null) {
                options.excludePatterns = excludeList;
            }
        }
    }
    _applyLanguageOption(options : any,feature : core.DartObject,value : core.DartObject) : void {
        let boolValue : boolean = toBool(value);
        if (boolValue != null) {
            if (op(Op.EQUALS,feature,AnalyzerOptions.enableAssertInitializer)) {
                options.enableAssertInitializer = boolValue;
            }else if (op(Op.EQUALS,feature,AnalyzerOptions.enableStrictCallChecks)) {
                options.enableStrictCallChecks = boolValue;
            }else if (op(Op.EQUALS,feature,AnalyzerOptions.enableSuperMixins)) {
                options.enableSuperMixins = boolValue;
            }
        }
    }
    _applyLanguageOptions(options : any,configs : core.DartObject) : void {
        if (is(configs, any)) {
            configs.nodes.forEach((key : any,value : any) =>  {
                if (is(key, any) && is(value, any)) {
                    let feature : string = ((_507_)=>(!!_507_)?_507_.toString():null)(key.value);
                    this._applyLanguageOption(options,feature,value.value);
                }
            });
        }else if (is(configs, core.DartMap<any,any>)) {
            configs.forEach((key : any,value : any) =>  {
                return this._applyLanguageOption(options,key,value);
            });
        }
    }
    _applyProcessors(options : any,codes : core.DartObject) : void {
        let config : any = new bare.createInstance(any,null,codes);
        options.errorProcessors = config.processors;
    }
    _applyStrongModeOption(options : any,feature : core.DartObject,value : core.DartObject) : void {
        let boolValue : boolean = toBool(value);
        if (boolValue != null) {
            if (op(Op.EQUALS,feature,AnalyzerOptions.implicitCasts)) {
                options.implicitCasts = boolValue;
            }
            if (op(Op.EQUALS,feature,AnalyzerOptions.implicitDynamic)) {
                options.implicitDynamic = boolValue;
            }
        }
    }
    _applyStrongOptions(options : any,config : core.DartObject) : void {
        if (is(config, any)) {
            options.strongMode = true;
            config.nodes.forEach((k : any,v : any) =>  {
                if (is(k, any) && is(v, any)) {
                    this._applyStrongModeOption(options,((_508_)=>(!!_508_)?_508_.toString():null)(k.value),v.value);
                }
            });
        }else if (is(config, core.DartMap<any,any>)) {
            options.strongMode = true;
            config.forEach((k : any,v : any) =>  {
                return this._applyStrongModeOption(options,k,v);
            });
        }else {
            options.strongMode = is(config, "boolean") ? config : false;
        }
    }
    constructor() {
    }
    @defaultConstructor
    _OptionsProcessor() {
    }
}

export namespace AnalyzerOptionsValidator {
    export type Constructors = CompositeValidator.Constructors | 'AnalyzerOptionsValidator';
    export type Interface = Omit<AnalyzerOptionsValidator, Constructors>;
}
@DartClass
export class AnalyzerOptionsValidator extends CompositeValidator {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    AnalyzerOptionsValidator() {
        super.CompositeValidator(new core.DartList.literal(new TopLevelAnalyzerOptionsValidator(),new StrongModeOptionValueValidator(),new ErrorFilterOptionValidator(),new LanguageOptionValidator()));
    }
}

export namespace LinterOptionsValidator {
    export type Constructors = TopLevelOptionValidator.Constructors | 'LinterOptionsValidator';
    export type Interface = Omit<LinterOptionsValidator, Constructors>;
}
@DartClass
export class LinterOptionsValidator extends TopLevelOptionValidator {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    LinterOptionsValidator() {
        super.TopLevelOptionValidator('linter',new core.DartList.literal('rules'));
    }
}

export namespace TopLevelAnalyzerOptionsValidator {
    export type Constructors = TopLevelOptionValidator.Constructors | 'TopLevelAnalyzerOptionsValidator';
    export type Interface = Omit<TopLevelAnalyzerOptionsValidator, Constructors>;
}
@DartClass
export class TopLevelAnalyzerOptionsValidator extends TopLevelOptionValidator {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    TopLevelAnalyzerOptionsValidator() {
        super.TopLevelOptionValidator(AnalyzerOptions.analyzer,AnalyzerOptions.topLevel);
    }
}

export namespace TrueOrFalseValueErrorBuilder {
    export type Constructors = ErrorBuilder.Constructors | 'TrueOrFalseValueErrorBuilder';
    export type Interface = Omit<TrueOrFalseValueErrorBuilder, Constructors>;
}
@DartClass
export class TrueOrFalseValueErrorBuilder extends ErrorBuilder {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    TrueOrFalseValueErrorBuilder() {
        super.ErrorBuilder(AnalyzerOptions.trueOrFalse);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get pluralProposalCode() : any {
        return AnalysisOptionsWarningCode.UNSUPPORTED_VALUE;
    }
}

export class properties {
    private static __$ANALYSIS_OPTIONS_ERRORS : any;
    static get ANALYSIS_OPTIONS_ERRORS() : any { 
        if (this.__$ANALYSIS_OPTIONS_ERRORS===undefined) {
            this.__$ANALYSIS_OPTIONS_ERRORS = new bare.createInstance(any,null,'ANALYSIS_OPTIONS_ERRORS',AnalysisError.NO_ERRORS);
        }
        return this.__$ANALYSIS_OPTIONS_ERRORS;
    }
    static set ANALYSIS_OPTIONS_ERRORS(__$value : any)  { 
        this.__$ANALYSIS_OPTIONS_ERRORS = __$value;
    }

    private static __$_processor : _OptionsProcessor;
    static get _processor() : _OptionsProcessor { 
        if (this.__$_processor===undefined) {
            this.__$_processor = new _OptionsProcessor();
        }
        return this.__$_processor;
    }
    static set _processor(__$value : _OptionsProcessor)  { 
        this.__$_processor = __$value;
    }

}
