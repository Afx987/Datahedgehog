/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/lint/linter.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as io from "@dart2ts/dart/io";
import * as lib4 from "@dart2ts.packages/path/lib/path";
import * as lib5 from "@dart2ts/dart/uri";

export namespace CamelCaseString {
    export type Constructors = 'CamelCaseString';
    export type Interface = Omit<CamelCaseString, Constructors>;
}
@DartClass
export class CamelCaseString {
    private static __$_camelCaseMatcher;
    static get _camelCaseMatcher() { 
        if (this.__$_camelCaseMatcher===undefined) {
            this.__$_camelCaseMatcher = new core.DartRegExp('[A-Z][a-z]*');
        }
        return this.__$_camelCaseMatcher;
    }
    static set _camelCaseMatcher(__$value : any)  { 
        this.__$_camelCaseMatcher = __$value;
    }

    private static __$_camelCaseTester;
    static get _camelCaseTester() { 
        if (this.__$_camelCaseTester===undefined) {
            this.__$_camelCaseTester = new core.DartRegExp('^([_$]*)([A-Z?$]+[a-z0-9]*)+$');
        }
        return this.__$_camelCaseTester;
    }
    static set _camelCaseTester(__$value : any)  { 
        this.__$_camelCaseTester = __$value;
    }

    value : string;

    constructor(value : string) {
    }
    @defaultConstructor
    CamelCaseString(value : string) {
        this.value = value;
        if (!CamelCaseString.isCamelCase(this.value)) {
            throw new core.ArgumentError(`${this.value} is not CamelCase`);
        }
    }
    get humanized() : string {
        return CamelCaseString._humanize(this.value);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return this.value;
    }
    static isCamelCase(name : string) : boolean {
        return CamelCaseString._camelCaseTester.hasMatch(name);
    }
    static _humanize(camelCase : string) : string {
        return CamelCaseString._camelCaseMatcher.allMatches(camelCase).map((m : any) =>  {
            return m.group(0);
        }).join(' ');
    }
}

export namespace DartLinter {
    export type Constructors = 'DartLinter';
    export type Interface = Omit<DartLinter, Constructors>;
}
@DartClass
@Implements(any)
export class DartLinter implements any.Interface {
    errors;

    options : LinterOptions;

    reporter : Reporter;

    numSourcesAnalyzed : number;

    constructor(options : LinterOptions,_namedArguments? : {reporter? : Reporter}) {
    }
    @defaultConstructor
    DartLinter(options : LinterOptions,_namedArguments? : {reporter? : Reporter}) {
        let {reporter} = Object.assign({
            "reporter" : new PrintingReporter()}, _namedArguments );
        this.errors = new core.DartList.literal<any>();
        this.options = options;
        this.reporter = reporter;
    }
    lintFiles(files : core.DartList<io.File>) : core.DartIterable<any> {
        let errors : core.DartList<any> = new core.DartList.literal();
        let analysisDriver = new bare.createInstance(any,null,this.options);
        errors.addAll(analysisDriver.analyze(files.where((f : any) =>  {
            return isDartFile(f);
        })));
        this.numSourcesAnalyzed = analysisDriver.numSourcesAnalyzed;
        files.where((f : any) =>  {
            return isPubspecFile(f);
        }).forEach((p : any) =>  {
            this.numSourcesAnalyzed++;
            return errors.addAll(this._lintPubspecFile(p));
        });
        return errors;
    }
    lintPubspecSource(_namedArguments? : {contents? : string,sourcePath? : string}) : core.DartIterable<any> {
        let {contents,sourcePath} = Object.assign({
        }, _namedArguments );
        let results = new core.DartList.literal<any>();
        let sourceUrl : lib5.Uri = sourcePath == null ? null : lib4.toUri(sourcePath);
        let spec = new bare.createInstance(any,null,contents,{
            sourceUrl : sourceUrl});
        for(let lint of this.options.enabledLints) {
            if (is(lint, LintRule)) {
                let rule : LintRule = lint;
                let visitor = rule.getPubspecVisitor();
                if (visitor != null) {
                    if (op(Op.EQUALS,rule.reporter,null) && sourceUrl != null) {
                        let source = createSource(sourceUrl);
                        rule.reporter = new bare.createInstance(any,null,this,source);
                    }
                    try {
                        spec.accept(visitor);
                    } catch (__error__) {

                        if (is(__error__,core.Exception)){
                            let e : core.Exception = __error__;
                            this.reporter.exception(new LinterException(e.toString()));
                        }
                    }
                    if (rule._locationInfo != null && rule._locationInfo.isNotEmpty) {
                        results.addAll(rule._locationInfo);
                        rule._locationInfo.clear();
                    }
                }
            }
        }
        return results;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    onError(error : any) {
        return this.errors.add(error);
    }
    _lintPubspecFile(sourceFile : io.File) : core.DartIterable<any> {
        return this.lintPubspecSource({
            contents : sourceFile.readAsStringSync(),sourcePath : sourceFile.path});
    }
}

export namespace Group {
    export type Constructors = '_';
    export type Interface = Omit<Group, Constructors>;
}
@DartClass
@Implements(core.DartComparable)
export class Group implements core.DartComparable.Interface<Group> {
    private static __$errors : Group;
    static get errors() : Group { 
        if (this.__$errors===undefined) {
            this.__$errors = new Group._('errors',{
                description : 'Possible coding errors.'});
        }
        return this.__$errors;
    }

    private static __$pub : Group;
    static get pub() : Group { 
        if (this.__$pub===undefined) {
            this.__$pub = new Group._('pub',{
                description : 'Pub-related rules.',link : new Hyperlink('See the <strong>Pubspec Format</strong>','https://www.dartlang.org/tools/pub/pubspec.html')});
        }
        return this.__$pub;
    }

    private static __$style : Group;
    static get style() : Group { 
        if (this.__$style===undefined) {
            this.__$style = new Group._('style',{
                description : 'Matters of style, largely derived from the official Dart Style Guide.',link : new Hyperlink('See the <strong>Style Guide</strong>','https://www.dartlang.org/articles/style-guide/')});
        }
        return this.__$style;
    }

    private static __$builtin : core.DartIterable<Group>;
    static get builtin() : core.DartIterable<Group> { 
        if (this.__$builtin===undefined) {
            this.__$builtin = new core.DartList.literal(Group.errors,Group.style,Group.pub);
        }
        return this.__$builtin;
    }

    name : string;

    custom : boolean;

    description : string;

    link : Hyperlink;

    constructor(name : string,_namedArguments? : {description? : string,link? : Hyperlink}) {
    }
    @defaultFactory
    static $Group(name : string,_namedArguments? : {description? : string,link? : Hyperlink}) : Group {
        let {description,link} = Object.assign({
            "description" : ''}, _namedArguments );
        let n = new core.DartString(name).toLowerCase();
        return Group.builtin.firstWhere((g : any) =>  {
            return g.name == n;
        },{
            orElse : () =>  {
                return new Group._(name,{
                    custom : true,description : description,link : link});
            }});
    }
    @namedConstructor
    _(name : string,_namedArguments? : {custom? : boolean,description? : string,link? : Hyperlink}) {
        let {custom,description,link} = Object.assign({
            "custom" : false}, _namedArguments );
        this.name = name;
        this.custom = custom;
        this.description = description;
        this.link = link;
    }
    static _ : new(name : string,_namedArguments? : {custom? : boolean,description? : string,link? : Hyperlink}) => Group;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    compareTo(other : Group) : number {
        return new core.DartString(this.name).compareTo(other.name);
    }
}

export namespace Hyperlink {
    export type Constructors = 'Hyperlink';
    export type Interface = Omit<Hyperlink, Constructors>;
}
@DartClass
export class Hyperlink {
    label : string;

    href : string;

    bold : boolean;

    constructor(label : string,href : string,_namedArguments? : {bold? : boolean}) {
    }
    @defaultConstructor
    Hyperlink(label : string,href : string,_namedArguments? : {bold? : boolean}) {
        let {bold} = Object.assign({
            "bold" : false}, _namedArguments );
        this.label = label;
        this.href = href;
        this.bold = bold;
    }
    get html() : string {
        return `<a href="${this.href}">${this._emph(this.label)}</a>`;
    }
    _emph(msg : any) : string {
        return this.bold ? `<strong>${msg}</strong>` : msg;
    }
}

export namespace LinterException {
    export type Constructors = 'LinterException';
    export type Interface = Omit<LinterException, Constructors>;
}
@DartClass
@Implements(core.Exception)
export class LinterException implements core.Exception.Interface {
    message : string;

    constructor(message? : string) {
    }
    @defaultConstructor
    LinterException(message? : string) {
        this.message = message;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return this.message == null ? "LinterException" : `LinterException: ${this.message}`;
    }
}

export namespace LinterOptions {
    export type Constructors = 'LinterOptions';
    export type Interface = Omit<LinterOptions, Constructors>;
}
@DartClass
export class LinterOptions extends any {
    enabledLints : core.DartIterable<LintRule>;

    filter : LintFilter;

    constructor(enabledLints? : core.DartIterable<LintRule>) {
    }
    @defaultConstructor
    LinterOptions(enabledLints? : core.DartIterable<LintRule>) {
        this.enabledLints = enabledLints;
        this.enabledLints = ( this.enabledLints ) || ( Registry.ruleRegistry );
    }
    configure(config : any) : void {
        this.enabledLints = Registry.ruleRegistry.where((rule : LintRule) =>  {
            return !config.ruleConfigs.any((rc : any) =>  {
                return rc.disables(rule.name);
            });
        });
        this.filter = new FileGlobFilter(config.fileIncludes,config.fileExcludes);
    }
}

export namespace LintFilter {
    export type Constructors = 'LintFilter';
    export type Interface = Omit<LintFilter, Constructors>;
}
@DartClass
export class LintFilter {
    @Abstract
    filter(lint : any) : boolean{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    LintFilter() {
    }
}

export namespace LintRule {
    export type Constructors = 'LintRule';
    export type Interface = Omit<LintRule, Constructors>;
}
@DartClass
@Implements(core.DartComparable)
export class LintRule extends any implements core.DartComparable.Interface<LintRule> {
    details : string;

    description : string;

    group : Group;

    maturity : Maturity;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    name : string;

    _locationInfo : core.DartList<any>;

    constructor(_namedArguments? : {name? : string,group? : Group,description? : string,details? : string,maturity? : Maturity}) {
    }
    @defaultConstructor
    LintRule(_namedArguments? : {name? : string,group? : Group,description? : string,details? : string,maturity? : Maturity}) {
        let {name,group,description,details,maturity} = Object.assign({
            "maturity" : Maturity.stable}, _namedArguments );
        this._locationInfo = new core.DartList.literal<any>();
        this.name = name;
        this.group = group;
        this.description = description;
        this.details = details;
        this.maturity = maturity;
    }
    get lintCode() : any {
        return new _LintCode(this.name,this.description);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    compareTo(other : LintRule) : number {
        let g = this.group.compareTo(other.group);
        if (g != 0) {
            return g;
        }
        return new core.DartString(this.name).compareTo(other.name);
    }
    getProjectVisitor() : any {
        return null;
    }
    getPubspecVisitor() : any {
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getVisitor() : any {
        return null;
    }
    reportLint(node : any,_namedArguments? : {ignoreSyntheticNodes? : boolean}) : void {
        let {ignoreSyntheticNodes} = Object.assign({
            "ignoreSyntheticNodes" : true}, _namedArguments );
        if (node != null && (!node.isSynthetic || !ignoreSyntheticNodes)) {
            reporter.reportErrorForNode(this.lintCode,node,new core.DartList.literal());
        }
    }
    reportLintForToken(token : any,_namedArguments? : {ignoreSyntheticTokens? : boolean}) : void {
        let {ignoreSyntheticTokens} = Object.assign({
            "ignoreSyntheticTokens" : true}, _namedArguments );
        if (token != null && (!token.isSynthetic || !ignoreSyntheticTokens)) {
            reporter.reportErrorForToken(this.lintCode,token,new core.DartList.literal());
        }
    }
    reportPubLint(node : any) : void {
        let source : any = createSource(node.span.sourceUrl);
        let error : any = new bare.createInstance(any,null,source,op(Op.PLUS,node.span.start.column,1),node.span.length,this.lintCode);
        let lineInfo : any = new bare.createInstance(any,null,source.contents.data);
        this._locationInfo.add(new bare.createInstance(any,null,new core.DartList.literal(error),lineInfo));
        ((_353_)=>(!!_353_)?_353_.reportError(error):null)(reporter);
    }
}

export namespace Maturity {
    export type Constructors = '_';
    export type Interface = Omit<Maturity, Constructors>;
}
@DartClass
@Implements(core.DartComparable)
export class Maturity implements core.DartComparable.Interface<Maturity> {
    private static __$stable : Maturity;
    static get stable() : Maturity { 
        if (this.__$stable===undefined) {
            this.__$stable = new Maturity._('stable',{
                ordinal : 0});
        }
        return this.__$stable;
    }

    private static __$experimental : Maturity;
    static get experimental() : Maturity { 
        if (this.__$experimental===undefined) {
            this.__$experimental = new Maturity._('stable',{
                ordinal : 1});
        }
        return this.__$experimental;
    }

    name : string;

    ordinal : number;

    constructor(name : string,_namedArguments? : {ordinal? : number}) {
    }
    @defaultFactory
    static $Maturity(name : string,_namedArguments? : {ordinal? : number}) : Maturity {
        let {ordinal} = Object.assign({
        }, _namedArguments );
        switch (new core.DartString(name).toLowerCase()) {
            case 'stable':
                return Maturity.stable;
            case 'experimental':
                return Maturity.experimental;
            default:
                return new Maturity._(name,{
                    ordinal : ordinal});
        }
    }
    @namedConstructor
    _(name : string,_namedArguments? : {ordinal? : number}) {
        let {ordinal} = Object.assign({
        }, _namedArguments );
        this.name = name;
        this.ordinal = ordinal;
    }
    static _ : new(name : string,_namedArguments? : {ordinal? : number}) => Maturity;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    compareTo(other : Maturity) : number {
        return this.ordinal - other.ordinal;
    }
}

export namespace PrintingReporter {
    export type Constructors = 'PrintingReporter';
    export type Interface = Omit<PrintingReporter, Constructors>;
}
@DartClass
@Implements(Reporter,any)
export class PrintingReporter implements Reporter.Interface,any.Interface {
    _print : (msg : string) => any;

    constructor(_print? : (msg : string) => any) {
    }
    @defaultConstructor
    PrintingReporter(_print? : (msg : string) => any) {
        _print = _print || core.print;
        this._print = _print;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    exception(exception : LinterException) : void {
        this._print(`EXCEPTION: ${exception}`);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    logError(message : string,exception? : any) : void {
        this._print(`ERROR: ${message}`);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    logInformation(message : string,exception? : any) : void {
        this._print(`INFO: ${message}`);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    warn(message : string) : void {
        this._print(`WARN: ${message}`);
    }
}

export namespace Reporter {
    export type Constructors = 'Reporter';
    export type Interface = Omit<Reporter, Constructors>;
}
@DartClass
export class Reporter {
    @Abstract
    exception(exception : LinterException) : void{ throw 'abstract'}
    @Abstract
    warn(message : string) : void{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    Reporter() {
    }
}

export namespace SourceLinter {
    export type Constructors = 'SourceLinter';
    export type Interface = Omit<SourceLinter, Constructors>;
}
@DartClass
@Implements(DartLinter,any)
export class SourceLinter implements DartLinter.Interface,any.Interface {
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    errors;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    options : LinterOptions;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    reporter : Reporter;

    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    numSourcesAnalyzed : number;

    constructor(options : LinterOptions,_namedArguments? : {reporter? : Reporter}) {
    }
    @defaultConstructor
    SourceLinter(options : LinterOptions,_namedArguments? : {reporter? : Reporter}) {
        let {reporter} = Object.assign({
            "reporter" : new PrintingReporter()}, _namedArguments );
        this.errors = new core.DartList.literal<any>();
        this.options = options;
        this.reporter = reporter;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    lintFiles(files : core.DartList<io.File>) : core.DartIterable<any> {
        let errors : core.DartList<any> = new core.DartList.literal();
        let analysisDriver = new bare.createInstance(any,null,this.options);
        errors.addAll(analysisDriver.analyze(files.where((f : any) =>  {
            return isDartFile(f);
        })));
        this.numSourcesAnalyzed = analysisDriver.numSourcesAnalyzed;
        files.where((f : any) =>  {
            return isPubspecFile(f);
        }).forEach((p : any) =>  {
            this.numSourcesAnalyzed++;
            return errors.addAll(this._lintPubspecFile(p));
        });
        return errors;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    lintPubspecSource(_namedArguments? : {contents? : string,sourcePath? : string}) : core.DartIterable<any> {
        let {contents,sourcePath} = Object.assign({
        }, _namedArguments );
        let results = new core.DartList.literal<any>();
        let sourceUrl : lib5.Uri = sourcePath == null ? null : lib4.toUri(sourcePath);
        let spec = new bare.createInstance(any,null,contents,{
            sourceUrl : sourceUrl});
        for(let lint of this.options.enabledLints) {
            if (is(lint, LintRule)) {
                let rule : LintRule = lint;
                let visitor = rule.getPubspecVisitor();
                if (visitor != null) {
                    if (op(Op.EQUALS,rule.reporter,null) && sourceUrl != null) {
                        let source = createSource(sourceUrl);
                        rule.reporter = new bare.createInstance(any,null,this,source);
                    }
                    try {
                        spec.accept(visitor);
                    } catch (__error__) {

                        if (is(__error__,core.Exception)){
                            let e : core.Exception = __error__;
                            this.reporter.exception(new LinterException(e.toString()));
                        }
                    }
                    if (rule._locationInfo != null && rule._locationInfo.isNotEmpty) {
                        results.addAll(rule._locationInfo);
                        rule._locationInfo.clear();
                    }
                }
            }
        }
        return results;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    onError(error : any) {
        return this.errors.add(error);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    _lintPubspecFile(sourceFile : io.File) : core.DartIterable<any> {
        return this.lintPubspecSource({
            contents : sourceFile.readAsStringSync(),sourcePath : sourceFile.path});
    }
}

export namespace _LintCode {
    export type Constructors = '_';
    export type Interface = Omit<_LintCode, Constructors>;
}
@DartClass
export class _LintCode extends any {
    private static __$registry;
    static get registry() { 
        if (this.__$registry===undefined) {
            this.__$registry = new core.DartMap.literal([
            ]);
        }
        return this.__$registry;
    }
    static set registry(__$value : any)  { 
        this.__$registry = __$value;
    }

    constructor(name : string,message : string) {
    }
    @defaultFactory
    static $_LintCode(name : string,message : string) : _LintCode {
        return _LintCode.registry.putIfAbsent(name + message,() =>  {
            return new _LintCode._(name,message);
        });
    }
    @namedConstructor
    _(name : string,message : string) {
        super.DartObject(name,message);
    }
    static _ : new(name : string,message : string) => _LintCode;

}

export namespace FileGlobFilter {
    export type Constructors = LintFilter.Constructors | 'FileGlobFilter';
    export type Interface = Omit<FileGlobFilter, Constructors>;
}
@DartClass
export class FileGlobFilter extends LintFilter {
    includes : core.DartIterable<any>;

    excludes : core.DartIterable<any>;

    constructor(includeGlobs? : core.DartIterable<string>,excludeGlobs? : core.DartIterable<string>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    FileGlobFilter(includeGlobs? : core.DartIterable<string>,excludeGlobs? : core.DartIterable<string>) {
        this.includes = includeGlobs.map((glob : any) =>  {
            return new bare.createInstance(any,null,glob);
        });
        this.excludes = excludeGlobs.map((glob : any) =>  {
            return new bare.createInstance(any,null,glob);
        });
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    filter(lint : any) : boolean {
        return this.excludes.any((glob : any) =>  {
            return glob.matches(lint.source.fullName);
        }) && !this.includes.any((glob : any) =>  {
            return glob.matches(lint.source.fullName);
        });
    }
}

export class properties {
}
