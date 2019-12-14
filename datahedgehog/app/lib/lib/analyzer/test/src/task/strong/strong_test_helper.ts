/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/src/task/strong/strong_test_helper.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/source_span/lib/src/span_with_context";
import * as lib4 from "@dart2ts/dart/uri";
import * as lib5 from "@dart2ts.packages/source_span/lib/src/location";
import * as lib6 from "./../../context/mock_sdk";

export var _createSpanHelper : (lineInfo : any,start : number,source : any,content : string,_namedArguments? : {end? : number}) => lib3.SourceSpanWithContext = (lineInfo : any,start : number,source : any,content : string,_namedArguments? : {end? : number}) : lib3.SourceSpanWithContext =>  {
    let {end} = Object.assign({
    }, _namedArguments );
    let startLoc = _locationForOffset(lineInfo,source.uri,start);
    let endLoc = _locationForOffset(lineInfo,source.uri,(end || start));
    let lineStart = startLoc.offset - startLoc.column;
    let lineEnd : number = endLoc.offset;
    let lineNum : number = lineInfo.getLocation(lineEnd).lineNumber;
    while (lineEnd < new core.DartString(content).length && op(Op.EQUALS,lineInfo.getLocation(++lineEnd).lineNumber,lineNum))/* TODO (EmptyStatementImpl) : ; */;
    if (end == null) {
        end = lineEnd;
        endLoc = _locationForOffset(lineInfo,source.uri,lineEnd);
    }
    let text = new core.DartString(content).substring(start,end);
    let lineText = new core.DartString(content).substring(lineStart,lineEnd);
    return new lib3.SourceSpanWithContext(startLoc,endLoc,text,lineText);
};
export var _errorCodeName : (errorCode : any) => string = (errorCode : any) : string =>  {
    let name = errorCode.name;
    let prefix = 'STRONG_MODE_';
    if (name.startsWith(prefix)) {
        return name.substring(new core.DartString(prefix).length);
    }else {
        return name;
    }
};
export var _errorSeverity : (analysisOptions : any,error : any) => any = (analysisOptions : any,error : any) : any =>  {
    if (error.errorCode.name.startsWith('STRONG_MODE_TOP_LEVEL_')) {
        return ErrorSeverity.ERROR;
    }
    return (((t)=>(!!t)?t.severity:null)(ErrorProcessor.getProcessor(analysisOptions,error)) || error.errorCode.errorSeverity);
};
export var _expectErrors : (analysisOptions : any,unit : any,actualErrors : core.DartList<any>) => void = (analysisOptions : any,unit : any,actualErrors : core.DartList<any>) : void =>  {
    let expectedErrors = _findExpectedErrors(unit.beginToken);
    actualErrors.sort((x : any,y : any) =>  {
        let delta : number = x.offset.compareTo(y.offset);
        if (delta != 0) return delta;
        delta = _errorSeverity(analysisOptions,x).compareTo(_errorSeverity(analysisOptions,y));
        if (delta != 0) return delta;
        return new core.DartString(_errorCodeName(x.errorCode)).compareTo(_errorCodeName(y.errorCode));
    });
    expectedErrors.sort((x : any,y : any) =>  {
        let delta : number = new core.DartInt(x.offset).compareTo(y.offset);
        if (delta != 0) return delta;
        delta = x.severity.compareTo(y.severity);
        if (delta != 0) return delta;
        return new core.DartString(x.typeName).compareTo(y.typeName);
    });
    let unreported = new core.DartList.literal<_ErrorExpectation>();
    let different = new core.DartMap.literal([
    ]);
    for(let expected of expectedErrors) {
        let actual : any = expected._removeMatchingActual(actualErrors);
        if (actual != null) {
            if (_errorSeverity(analysisOptions,actual) != expected.severity || _errorCodeName(actual.errorCode) != expected.typeName) {
                different.set(expected,actual);
            }
        }else {
            unreported.add(expected);
        }
    }
    let unexpected : core.DartList<any> = actualErrors;
    if (unreported.isNotEmpty || unexpected.isNotEmpty || different.isNotEmpty) {
        _reportFailure(analysisOptions,unit,unreported,unexpected,different);
    }
};
export var _findExpectedErrors : (beginToken : any) => core.DartList<_ErrorExpectation> = (beginToken : any) : core.DartList<_ErrorExpectation> =>  {
    let expectedErrors = new core.DartList.literal<_ErrorExpectation>();
    for(let t : any = beginToken; t.type != TokenType.EOF; t = t.next){
        for(let c : any = t.precedingComments; c != null; c = c.next){
            if (op(Op.EQUALS,c.type,TokenType.MULTI_LINE_COMMENT)) {
                let value : string = c.lexeme.substring(2,op(Op.MINUS,c.lexeme.length,2));
                if (new core.DartString(value).contains(':')) {
                    let offset : number = t.offset;
                    let previous : any = t.previous;
                    while (previous != null && op(Op.GT,previous.offset,c.offset)){
                        offset = previous.offset;
                        previous = previous.previous;
                    }
                    for(let expectCode of new core.DartString(value).split(',')) {
                        let expected = _ErrorExpectation.parse(offset,expectCode);
                        if (expected != null) {
                            expectedErrors.add(expected);
                        }
                    }
                }
            }
        }
    }
    return expectedErrors;
};
export var _locationForOffset : (lineInfo : any,uri : lib4.Uri,offset : number) => lib5.SourceLocation = (lineInfo : any,uri : lib4.Uri,offset : number) : lib5.SourceLocation =>  {
    let loc = lineInfo.getLocation(offset);
    return new lib5.SourceLocation(offset,{
        sourceUrl : uri,line : op(Op.MINUS,loc.lineNumber,1),column : op(Op.MINUS,loc.columnNumber,1)});
};
export var _reachableLibraries : (start : any) => core.DartSet<any> = (start : any) : core.DartSet<any> =>  {
    let results : core.DartSet<any> = new core.DartSet<any>();
    var find : (library : any) => void = (library : any) : void =>  {
        if (results.add(library)) {
            library.importedLibraries.forEach(find);
            library.exportedLibraries.forEach(find);
        }
    };
    find(start);
    return results;
};
export var _reportFailure : (analysisOptions : any,unit : any,unreported : core.DartList<_ErrorExpectation>,unexpected : core.DartList<any>,different : core.DartMap<_ErrorExpectation,any>) => void = (analysisOptions : any,unit : any,unreported : core.DartList<_ErrorExpectation>,unexpected : core.DartList<any>,different : core.DartMap<_ErrorExpectation,any>) : void =>  {
    let sourceCode = resolutionMap.elementDeclaredByCompilationUnit(unit).source.contents.data;
    var formatActualError : (error : any) => string = (error : any) : string =>  {
        let offset : number = error.offset;
        let length : number = error.length;
        let span = _createSpanHelper(unit.lineInfo,offset,resolutionMap.elementDeclaredByCompilationUnit(unit).source,sourceCode,{
            end : offset + length});
        let levelName = _errorSeverity(analysisOptions,error).displayName;
        return `@${offset} ${levelName}:${_errorCodeName(error.errorCode)}\n` + span.message(error.message);
    };
    var formatExpectedError : (error : _ErrorExpectation) => string = (error : _ErrorExpectation) : string =>  {
        let offset : number = error.offset;
        let span = _createSpanHelper(unit.lineInfo,offset,resolutionMap.elementDeclaredByCompilationUnit(unit).source,sourceCode);
        let severity = error.severity.displayName;
        return `@${offset} ${severity}:${error.typeName}\n` + span.message('');
    };
    let message = new core.DartStringBuffer();
    if (unreported.isNotEmpty) {
        message.writeln('Expected errors that were not reported:');
        unreported.map(formatExpectedError).forEach(message.writeln.bind(message));
        message.writeln();
    }
    if (unexpected.isNotEmpty) {
        message.writeln('Errors that were not expected:');
        unexpected.map(formatActualError).forEach(message.writeln.bind(message));
        message.writeln();
    }
    if (different.isNotEmpty) {
        message.writeln('Errors that were reported, but different than expected:');
        different.forEach((expected : any,actual : any) =>  {
            message.writeln('Expected: ' + formatExpectedError(expected));
            message.writeln('Actual: ' + formatActualError(actual));
        });
        message.writeln();
    }
    fail(`Checker errors do not match expected errors:\n\n${message}`);
};
export namespace AbstractStrongTest {
    export type Constructors = 'AbstractStrongTest';
    export type Interface = Omit<AbstractStrongTest, Constructors>;
}
@DartClass
export class AbstractStrongTest {
    _resourceProvider : any;

    _checkCalled : boolean;

    _context : any;

    _driver : any;

    get enableNewAnalysisDriver() : boolean {
        return false;
    }
    addFile(content : string,_namedArguments? : {name? : string}) : void {
        let {name} = Object.assign({
            "name" : '/main.dart'}, _namedArguments );
        name = new core.DartString(name).replaceFirst('^package:','/packages/');
        this._resourceProvider.newFile(this._resourceProvider.convertPath(name),content);
    }
    check(_namedArguments? : {implicitCasts? : boolean,implicitDynamic? : boolean,nonnullableTypes? : core.DartList<string>}) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let {implicitCasts,implicitDynamic,nonnullableTypes} = Object.assign({
                "implicitCasts" : true,
                "implicitDynamic" : true,
                "nonnullableTypes" : AnalysisOptionsImpl.NONNULLABLE_TYPES}, _namedArguments );
            this._checkCalled = true;
            let mainFile : any = this._resourceProvider.getFile(this._resourceProvider.convertPath('/main.dart'));
            expect(mainFile.exists,true,{
                reason : '`/main.dart` is missing'});
            let analysisOptions : any = new bare.createInstance(any,null);
            analysisOptions.strongMode = true;
            analysisOptions.strongModeHints = true;
            analysisOptions.implicitCasts = implicitCasts;
            analysisOptions.implicitDynamic = implicitDynamic;
            analysisOptions.nonnullableTypes = nonnullableTypes;
            let mockSdk = new lib6.MockSdk({
                resourceProvider : this._resourceProvider});
            mockSdk.context.analysisOptions = analysisOptions;
            let sourceFactory : any;
            {
                let uriResolver = new _TestUriResolver(this._resourceProvider);
                sourceFactory = new bare.createInstance(any,null,new core.DartList.literal(new bare.createInstance(any,null,mockSdk),uriResolver));
            }
            let mainUnit : any;
            if (this.enableNewAnalysisDriver) {
                let logBuffer : core.DartStringBuffer = new core.DartStringBuffer();
                let fileContentOverlay : any = new bare.createInstance(any,null);
                let log : any = new bare.createInstance(any,null,logBuffer);
                let scheduler : any = new bare.createInstance(any,null,log);
                this._driver = new bare.createInstance(any,null,scheduler,log,this._resourceProvider,new bare.createInstance(any,null),fileContentOverlay,null,sourceFactory,analysisOptions);
                scheduler.start();
                mainUnit = (await this._driver.getResult(mainFile.path)).unit;
            }else {
                this._context = AnalysisEngine.instance.createAnalysisContext();
                this._context.analysisOptions = analysisOptions;
                this._context.sourceFactory = sourceFactory;
                let mainSource : any = sourceFactory.forUri2(mainFile.toUri());
                mainUnit = this._context.resolveCompilationUnit2(mainSource,mainSource);
            }
            let collector = new _ErrorCollector(analysisOptions);
            let mainLibrary : any = resolutionMap.elementDeclaredByCompilationUnit(mainUnit).library;
            let allLibraries : core.DartSet<any> = _reachableLibraries(mainLibrary);
            for(let library of allLibraries) {
                for(let unit of library.units) {
                    let errors = new core.DartList.literal<any>();
                    collector.errors = errors;
                    let source = unit.source;
                    if (op(Op.EQUALS,source.uri.scheme,'dart')) {
                        continue;
                    }
                    let analysisResult = await this._resolve(source);
                    errors.addAll(analysisResult.errors.where((e : any) =>  {
                        return e.errorCode.name != 'UNDEFINED_METHOD' && e.errorCode != HintCode.UNUSED_ELEMENT && e.errorCode != HintCode.UNUSED_FIELD && e.errorCode != HintCode.UNUSED_IMPORT && e.errorCode != HintCode.UNUSED_LOCAL_VARIABLE && e.errorCode != TodoCode.TODO;
                    }));
                    _expectErrors(analysisOptions,analysisResult.unit,errors);
                }
            }
            return mainUnit;
        } )());
    }

    checkFile(content : string) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addFile(content);
            return this.check();
        } )());
    }

    setUp() : void {
        AnalysisEngine.instance.processRequiredPlugins();
    }
    tearDown() : void {
        expect(this._checkCalled,true,{
            reason : 'must call check() method in test case'});
        ((_514_)=>(!!_514_)?_514_.dispose():null)(this._context);
        ((_515_)=>(!!_515_)?_515_.dispose():null)(this._driver);
        AnalysisEngine.instance.clearCaches();
    }
    _resolve(source : any) : async.Future<_TestAnalysisResult> { 
        return new async.Future.fromPromise(( async () =>  {
            if (this.enableNewAnalysisDriver) {
                let result = await this._driver.getResult(source.fullName);
                return new _TestAnalysisResult(source,result.unit,result.errors);
            }else {
                let libraries : core.DartList<any> = this._context.getLibrariesContaining(source);
                let unit = this._context.resolveCompilationUnit2(source,libraries.single);
                let errors = this._context.computeErrors(source);
                return new _TestAnalysisResult(source,unit,errors);
            }
        } )());
    }

    constructor() {
    }
    @defaultConstructor
    AbstractStrongTest() {
        this._resourceProvider = new bare.createInstance(any,null);
        this._checkCalled = false;
        this._context = null;
        this._driver = null;
    }
}

export namespace _ErrorCollector {
    export type Constructors = '_ErrorCollector';
    export type Interface = Omit<_ErrorCollector, Constructors>;
}
@DartClass
@Implements(any)
export class _ErrorCollector implements any.Interface {
    analysisOptions : any;

    errors : core.DartList<any>;

    hints : boolean;

    constructor(analysisOptions : any,_namedArguments? : {hints? : boolean}) {
    }
    @defaultConstructor
    _ErrorCollector(analysisOptions : any,_namedArguments? : {hints? : boolean}) {
        let {hints} = Object.assign({
            "hints" : true}, _namedArguments );
        this.analysisOptions = analysisOptions;
        this.hints = hints;
    }
    onError(error : any) : void {
        let HINT = ErrorSeverity.INFO.ordinal;
        if (this.hints || op(Op.GT,_errorSeverity(this.analysisOptions,error).ordinal,HINT)) {
            this.errors.add(error);
        }
    }
}

export namespace _ErrorExpectation {
    export type Constructors = '_ErrorExpectation';
    export type Interface = Omit<_ErrorExpectation, Constructors>;
}
@DartClass
export class _ErrorExpectation {
    offset : number;

    severity : any;

    typeName : string;

    constructor(offset : number,severity : any,typeName : string) {
    }
    @defaultConstructor
    _ErrorExpectation(offset : number,severity : any,typeName : string) {
        this.offset = offset;
        this.severity = severity;
        this.typeName = typeName;
    }
    toString() : string {
        return `@${this.offset} ${this.severity.displayName}: [${this.typeName}]`;
    }
    _removeMatchingActual(actualErrors : core.DartList<any>) : any {
        for(let actual of actualErrors) {
            if (op(Op.EQUALS,actual.offset,this.offset)) {
                actualErrors.remove(actual);
                return actual;
            }
        }
        return null;
    }
    static parse(offset : number,descriptor : string) : _ErrorExpectation {
        descriptor = new core.DartString(descriptor).trim();
        let tokens = new core.DartString(descriptor).split(' ');
        if (tokens.length == 1) return _ErrorExpectation._parse(offset,tokens[0]);
        expect(tokens.length,4,{
            reason : 'invalid error descriptor'});
        expect(tokens[1],"should",{
            reason : 'invalid error descriptor'});
        expect(tokens[2],"be",{
            reason : 'invalid error descriptor'});
        if (tokens[0] == "pass") return null;
        return _ErrorExpectation._parse(offset,tokens[0]);
    }
    static _parse(offset : any,descriptor : string) : _ErrorExpectation {
        let tokens = new core.DartString(descriptor).split(':');
        expect(tokens.length,2,{
            reason : 'invalid error descriptor'});
        let name = new core.DartString(tokens[0]).toUpperCase();
        let typeName = tokens[1];
        let level = ErrorSeverity.values.firstWhere((l : any) =>  {
            return op(Op.EQUALS,l.name,name);
        },{
            orElse : () =>  {
                return null;
            }});
        expect(level,isNotNull,{
            reason : `invalid severity in error descriptor: `${tokens[0]}``});
        expect(typeName,isNotNull,{
            reason : `invalid type in error descriptor: ${tokens[1]}`});
        return new _ErrorExpectation(offset,level,typeName);
    }
}

export namespace _TestAnalysisResult {
    export type Constructors = '_TestAnalysisResult';
    export type Interface = Omit<_TestAnalysisResult, Constructors>;
}
@DartClass
export class _TestAnalysisResult {
    source : any;

    unit : any;

    errors : core.DartList<any>;

    constructor(source : any,unit : any,errors : core.DartList<any>) {
    }
    @defaultConstructor
    _TestAnalysisResult(source : any,unit : any,errors : core.DartList<any>) {
        this.source = source;
        this.unit = unit;
        this.errors = errors;
    }
}

export namespace _TestUriResolver {
    export type Constructors = '_TestUriResolver';
    export type Interface = Omit<_TestUriResolver, Constructors>;
}
@DartClass
export class _TestUriResolver extends any {
    provider : any;

    constructor(provider : any) {
    }
    @defaultConstructor
    _TestUriResolver(provider : any) {
        this.provider = provider;
        super.DartObject(provider);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    resolveAbsolute(uri : lib4.Uri,actualUri? : lib4.Uri) : any {
        if (uri.scheme == 'package') {
            return (this.provider.getResource(this.provider.convertPath('/packages/' + uri.path)) as any).createSource(uri);
        }
        return super.resolveAbsolute(uri,actualUri);
    }
}

export class properties {
}
