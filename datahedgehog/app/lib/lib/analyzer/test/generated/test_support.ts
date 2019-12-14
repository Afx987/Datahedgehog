/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/generated/test_support.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./analysis_context_factory";
import * as collection from "@dart2ts/dart/core";
import * as lib5 from "@dart2ts/dart/uri";

export namespace EngineTestCase {
    export type Constructors = 'EngineTestCase';
    export type Interface = Omit<EngineTestCase, Constructors>;
}
@DartClass
export class EngineTestCase {
    assertNamedElements(elements : core.DartList<any>,names : core.DartList<string>) : void {
        for(let elemName of names) {
            let found : boolean = false;
            for(let elem of elements) {
                if (op(Op.EQUALS,elem.name,elemName)) {
                    found = true;
                    break;
                }
            }
            if (!found) {
                let buffer : core.DartStringBuffer = new core.DartStringBuffer();
                buffer.write("Expected element named: ");
                buffer.write(elemName);
                buffer.write("\n  but found: ");
                for(let elem of elements) {
                    buffer.write(elem.name);
                    buffer.write(", ");
                }
                fail(buffer.toString());
            }
        }
        expect(elements,hasLength(names.length));
    }
    createAnalysisContext() : any {
        return lib3.AnalysisContextFactory.contextWithCore();
    }
    getGetter(type : any,getterName : string) : any {
        for(let accessor of type.element.accessors) {
            if (accessor.isGetter && op(Op.EQUALS,accessor.name,getterName)) {
                return accessor;
            }
        }
        fail(`Could not find getter named ${getterName} in ${type.displayName}`);
        return null;
    }
    getMethod(type : any,methodName : string) : any {
        for(let method of type.element.methods) {
            if (op(Op.EQUALS,method.name,methodName)) {
                return method;
            }
        }
        fail(`Could not find method named ${methodName} in ${type.displayName}`);
        return null;
    }
    setUp() : void {
        let plugins : core.DartList<any> = new core.DartList.literal<any>();
        plugins.addAll(AnalysisEngine.instance.requiredPlugins);
        new bare.createInstance(any,null).processPlugins(plugins);
    }
    tearDown() : void {
    }
    static assertInstanceOf(predicate : any,expectedClass : core.Type,object : core.DartObject) : core.DartObject {
        if (!predicate(object)) {
            fail(`Expected instance of ${expectedClass}, found ${op(Op.EQUALS,object,null) ? "null" : object.runtimeType}`);
        }
        return object;
    }
    static findNode(root : any,code : string,prefix : string,predicate : any) : any {
        let offset : number = new core.DartString(code).indexOf(prefix);
        if (offset == -1) {
            throw new core.ArgumentError(`Not found '${prefix}'.`);
        }
        let node : any = new bare.createInstance(any,null,offset).searchWithin(root);
        return node.getAncestor(predicate);
    }
    static findSimpleIdentifier(root : any,code : string,prefix : string) : any {
        let offset : number = new core.DartString(code).indexOf(prefix);
        if (offset == -1) {
            throw new core.ArgumentError(`Not found '${prefix}'.`);
        }
        return new bare.createInstance(any,null,offset).searchWithin(root);
    }
    constructor() {
    }
    @defaultConstructor
    EngineTestCase() {
    }
}

export namespace GatheringErrorListener {
    export type Constructors = 'GatheringErrorListener';
    export type Interface = Omit<GatheringErrorListener, Constructors>;
}
@DartClass
@Implements(any)
export class GatheringErrorListener implements any.Interface {
    private static __$_NO_ERRORS : core.DartList<any>;
    static get _NO_ERRORS() : core.DartList<any> { 
        if (this.__$_NO_ERRORS===undefined) {
            this.__$_NO_ERRORS = new core.DartList<any>(0);
        }
        return this.__$_NO_ERRORS;
    }
    static set _NO_ERRORS(__$value : core.DartList<any>)  { 
        this.__$_NO_ERRORS = __$value;
    }

    _errors : core.DartList<any>;

    _lineInfoMap : core.DartHashMap<any,any>;

    constructor() {
    }
    @defaultConstructor
    GatheringErrorListener() {
        this._errors = new core.DartList<any>();
        this._lineInfoMap = new core.DartHashMap<any,any>();
    }
    get errors() : core.DartList<any> {
        return this._errors;
    }
    get hasErrors() : boolean {
        return this._errors.length > 0;
    }
    addAll(errors : core.DartList<any>) : void {
        for(let error of errors) {
            this.onError(error);
        }
    }
    addAll2(listener : any) : void {
        this.addAll(listener.errors);
    }
    assertErrors(expectedErrors : core.DartList<any>) : void {
        if (this._errors.length != expectedErrors.length) {
            this._fail(expectedErrors);
        }
        let remainingErrors : core.DartList<any> = new core.DartList<any>();
        for(let error of expectedErrors) {
            remainingErrors.add(error);
        }
        for(let error of this._errors) {
            if (!this._foundAndRemoved(remainingErrors,error)) {
                this._fail(expectedErrors);
            }
        }
    }
    assertErrorsWithCodes(expectedErrorCodes? : core.DartList<any>) : void {
        expectedErrorCodes = expectedErrorCodes || new core.DartList.literal<any>();
        let buffer : core.DartStringBuffer = new core.DartStringBuffer();
        for(let errorCode of expectedErrorCodes) {
            expect(errorCode.message.isEmpty,isFalse,{
                reason : "Empty error code message"});
        }
        let expectedCounts : core.DartHashMap<any,number> = new core.DartHashMap<any,number>();
        for(let code of expectedErrorCodes) {
            let count : number = op(Op.INDEX,expectedCounts,code);
            if (count == null) {
                count = 1;
            }else {
                count = count + 1;
            }
            op(Op.INDEX_ASSIGN,expectedCounts,code,count);
        }
        let errorsByCode : core.DartHashMap<any,core.DartList<any>> = new core.DartHashMap<any,core.DartList<any>>();
        for(let error of this._errors) {
            let code : any = error.errorCode;
            let list : core.DartList<any> = op(Op.INDEX,errorsByCode,code);
            if (list == null) {
                list = new core.DartList<any>();
                op(Op.INDEX_ASSIGN,errorsByCode,code,list);
            }
            list.add(error);
        }
        expectedCounts.forEach((code : any,expectedCount : number) =>  {
            let actualCount : number;
            let list : core.DartList<any> = errorsByCode.remove(code);
            if (list == null) {
                actualCount = 0;
            }else {
                actualCount = list.length;
            }
            if (actualCount != expectedCount) {
                if (buffer.length == 0) {
                    buffer.write("Expected ");
                }else {
                    buffer.write("; ");
                }
                buffer.write(expectedCount);
                buffer.write(" errors of type ");
                buffer.write(code.uniqueName);
                buffer.write(", found ");
                buffer.write(actualCount);
            }
        });
        errorsByCode.forEach((code : any,actualErrors : core.DartList<any>) =>  {
            let actualCount : number = actualErrors.length;
            if (buffer.length == 0) {
                buffer.write("Expected ");
            }else {
                buffer.write("; ");
            }
            buffer.write("0 errors of type ");
            buffer.write(code.uniqueName);
            buffer.write(", found ");
            buffer.write(actualCount);
            buffer.write(" (");
            for(let i : number = 0; i < actualErrors.length; i++){
                let error : any = actualErrors[i];
                if (i > 0) {
                    buffer.write(", ");
                }
                buffer.write(error.offset);
            }
            buffer.write(")");
        });
        if (buffer.length > 0) {
            fail(buffer.toString());
        }
    }
    assertErrorsWithSeverities(expectedSeverities : core.DartList<any>) : void {
        let expectedErrorCount : number = 0;
        let expectedWarningCount : number = 0;
        for(let severity of expectedSeverities) {
            if (op(Op.EQUALS,severity,ErrorSeverity.ERROR)) {
                expectedErrorCount++;
            }else {
                expectedWarningCount++;
            }
        }
        let actualErrorCount : number = 0;
        let actualWarningCount : number = 0;
        for(let error of this._errors) {
            if (op(Op.EQUALS,error.errorCode.errorSeverity,ErrorSeverity.ERROR)) {
                actualErrorCount++;
            }else {
                actualWarningCount++;
            }
        }
        if (expectedErrorCount != actualErrorCount || expectedWarningCount != actualWarningCount) {
            fail(`Expected ${expectedErrorCount} errors and ${expectedWarningCount} warnings, found ${actualErrorCount} errors and ${actualWarningCount} warnings`);
        }
    }
    assertNoErrors() : void {
        this.assertErrors(GatheringErrorListener._NO_ERRORS);
    }
    getLineInfo(source : any) : any {
        return op(Op.INDEX,this._lineInfoMap,source);
    }
    hasError(errorCode : any) : boolean {
        for(let error of this._errors) {
            if (core.identical(error.errorCode,errorCode)) {
                return true;
            }
        }
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    onError(error : any) : void {
        this._errors.add(error);
    }
    setLineInfo(source : any,lineStarts : core.DartList<number>) : void {
        op(Op.INDEX_ASSIGN,this._lineInfoMap,source,new bare.createInstance(any,null,lineStarts));
    }
    _equalErrors(expectedError : any,actualError : any) : boolean {
        let expectedSource : any = expectedError.source;
        return core.identical(expectedError.errorCode,actualError.errorCode) && op(Op.EQUALS,expectedError.offset,actualError.offset) && op(Op.EQUALS,expectedError.length,actualError.length) && (op(Op.EQUALS,expectedSource,null) || this._equalSources(expectedSource,actualError.source));
    }
    _equalSources(firstSource : any,secondSource : any) : boolean {
        if (op(Op.EQUALS,firstSource,null)) {
            return op(Op.EQUALS,secondSource,null);
        }else if (op(Op.EQUALS,secondSource,null)) {
            return false;
        }
        return op(Op.EQUALS,firstSource,secondSource);
    }
    _fail(expectedErrors : core.DartList<any>) : void {
        let buffer : core.DartStringBuffer = new core.DartStringBuffer();
        buffer.write("Expected ");
        buffer.write(expectedErrors.length);
        buffer.write(" errors:");
        for(let error of expectedErrors) {
            let source : any = error.source;
            let lineInfo : any = op(Op.INDEX,this._lineInfoMap,source);
            buffer.writeln();
            let sourceName : string = op(Op.EQUALS,source,null) ? '' : source.shortName;
            if (op(Op.EQUALS,lineInfo,null)) {
                let offset : number = error.offset;
                buffer.write(`  ${sourceName} ${error.errorCode} ` + `(${offset}..${offset + error.length})`);
            }else {
                let location : any = lineInfo.getLocation(error.offset);
                let lineNumber : number = location.lineNumber;
                let columnNumber : number = location.columnNumber;
                buffer.write(`  ${sourceName} ${error.errorCode} ` + `(${lineNumber}, ${columnNumber}/${error.length})`);
            }
        }
        buffer.writeln();
        buffer.write("found ");
        buffer.write(this._errors.length);
        buffer.write(" errors:");
        for(let error of this._errors) {
            let source : any = error.source;
            let lineInfo : any = op(Op.INDEX,this._lineInfoMap,source);
            buffer.writeln();
            let sourceName : string = op(Op.EQUALS,source,null) ? '' : source.shortName;
            if (op(Op.EQUALS,lineInfo,null)) {
                let offset : number = error.offset;
                buffer.write(`  ${sourceName} ${error.errorCode} ` + `(${offset}..${offset + error.length}): ${error.message}`);
            }else {
                let location : any = lineInfo.getLocation(error.offset);
                let lineNumber : number = location.lineNumber;
                let columnNumber : number = location.columnNumber;
                buffer.write(`  ${sourceName} ${error.errorCode} ` + `(${lineNumber}, ${columnNumber}/${error.length}): ${error.message}`);
            }
        }
        fail(buffer.toString());
    }
    _foundAndRemoved(errors : core.DartList<any>,targetError : any) : boolean {
        for(let error of errors) {
            if (this._equalErrors(error,targetError)) {
                errors.remove(error);
                return true;
            }
        }
        return false;
    }
}

export namespace TestLogger {
    export type Constructors = 'TestLogger';
    export type Interface = Omit<TestLogger, Constructors>;
}
@DartClass
@Implements(any)
export class TestLogger implements any.Interface {
    log : core.DartList<string>;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    logError(message : string,exception? : any) : void {
        this.log.add(`error: ${message}`);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    logInformation(message : string,exception? : any) : void {
        this.log.add(`info: ${message}`);
    }
    constructor() {
    }
    @defaultConstructor
    TestLogger() {
        this.log = new core.DartList.literal();
    }
}

export namespace TestSource {
    export type Constructors = 'TestSource';
    export type Interface = Omit<TestSource, Constructors>;
}
@DartClass
export class TestSource extends any {
    _name : string;

    _contents : string;

    _modificationStamp : number;

    exists2 : boolean;

    generateExceptionOnRead : boolean;

    readCount : number;

    constructor(_name? : string,_contents? : string) {
    }
    @defaultConstructor
    TestSource(_name? : string,_contents? : string) {
        _name = _name || '/test.dart';
        this._modificationStamp = 0;
        this.exists2 = true;
        this.generateExceptionOnRead = false;
        this.readCount = 0;
        this._name = _name;
        this._contents = _contents;
    }
    get contents() : any {
        this.readCount++;
        if (this.generateExceptionOnRead) {
            let msg : string = "I/O Exception while getting the contents of " + this._name;
            throw new core.Exception(msg);
        }
        return new bare.createInstance(any,null,0,this._contents);
    }
    get encoding() : string {
        return this._name;
    }
    get fullName() : string {
        return this._name;
    }
    get hashCode() : number {
        return 0;
    }
    get isInSystemLibrary() : boolean {
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get modificationStamp() : number {
        return this.generateExceptionOnRead ? -1 : this._modificationStamp;
    }
    get shortName() : string {
        return this._name;
    }
    get uri() : lib5.Uri {
        return new lib5.Uri.file(this._name);
    }
    get uriKind() : any {
        throw new core.UnsupportedError('uriKind');
    }
    [OperatorMethods.EQUALS](other : core.DartObject) : boolean {
        if (is(other, TestSource)) {
            return other._name == this._name;
        }
        return false;
    }
    exists() : boolean {
        return this.exists2;
    }
    getContentsToReceiver(receiver : any) : void {
        throw new core.UnsupportedError('getContentsToReceiver');
    }
    resolve(uri : string) : any {
        throw new core.UnsupportedError('resolve');
    }
    setContents(value : string) : void {
        this.generateExceptionOnRead = false;
        this._modificationStamp = new core.DartDateTime.now().millisecondsSinceEpoch;
        this._contents = value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `${this._name}`;
    }
}

export namespace TestSourceWithUri {
    export type Constructors = TestSource.Constructors | 'TestSourceWithUri';
    export type Interface = Omit<TestSourceWithUri, Constructors>;
}
@DartClass
export class TestSourceWithUri extends TestSource {
    uri : lib5.Uri;

    constructor(path : string,uri : lib5.Uri,content? : string) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    TestSourceWithUri(path : string,uri : lib5.Uri,content? : string) {
        super.TestSource(path,content);
        this.uri = uri;
    }
    get encoding() : string {
        return this.uri.toString();
    }
    get uriKind() : any {
        if (op(Op.EQUALS,this.uri,null)) {
            return UriKind.FILE_URI;
        }else if (this.uri.scheme == 'dart') {
            return UriKind.DART_URI;
        }else if (this.uri.scheme == 'package') {
            return UriKind.PACKAGE_URI;
        }
        return UriKind.FILE_URI;
    }
    [OperatorMethods.EQUALS](other : core.DartObject) : boolean {
        if (is(other, TestSource)) {
            return op(Op.EQUALS,other.uri,this.uri);
        }
        return false;
    }
}

export class properties {
}
