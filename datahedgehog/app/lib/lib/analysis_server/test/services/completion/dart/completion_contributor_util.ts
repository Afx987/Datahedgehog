/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/services/completion/dart/completion_contributor_util.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../../../abstract_context";
import * as lib4 from "./../../correction/flutter_util";

export var suggestionComparator : (s1 : any,s2 : any) => number = (s1 : any,s2 : any) : number =>  {
    let c1 : string = s1.completion.toLowerCase();
    let c2 : string = s2.completion.toLowerCase();
    return new core.DartString(c1).compareTo(c2);
};
export namespace DartCompletionContributorTest {
    export type Constructors = lib3.AbstractContextTest.Constructors | 'DartCompletionContributorTest';
    export type Interface = Omit<DartCompletionContributorTest, Constructors>;
}
@DartClass
export class DartCompletionContributorTest extends lib3.AbstractContextTest {
    private static __$_UNCHECKED : string;
    static get _UNCHECKED() : string { 
        if (this.__$_UNCHECKED===undefined) {
            this.__$_UNCHECKED = '__UNCHECKED__';
        }
        return this.__$_UNCHECKED;
    }

    testFile : string;

    testSource : any;

    completionOffset : number;

    replacementOffset : number;

    replacementLength : number;

    contributor : any;

    request : any;

    suggestions : core.DartList<any>;

    get isNullExpectedReturnTypeConsideredDynamic() : boolean {
        return true;
    }
    addTestSource(content : string) : void {
        expect(this.completionOffset,isNull,{
            reason : 'Call addTestUnit exactly once'});
        this.completionOffset = new core.DartString(content).indexOf('^');
        expect(this.completionOffset,isNot(equals(-1)),{
            reason : 'missing ^'});
        let nextOffset : number = new core.DartString(content).indexOf('^',this.completionOffset + 1);
        expect(nextOffset,equals(-1),{
            reason : 'too many ^'});
        content = new core.DartString(content).substring(0,this.completionOffset) + new core.DartString(content).substring(this.completionOffset + 1);
        this.testSource = this.addSource(this.testFile,content);
    }
    assertHasNoParameterInfo(suggestion : any) : void {
        expect(suggestion.parameterNames,isNull);
        expect(suggestion.parameterTypes,isNull);
        expect(suggestion.requiredParameterCount,isNull);
        expect(suggestion.hasNamedParameters,isNull);
    }
    assertHasParameterInfo(suggestion : any) : void {
        expect(suggestion.parameterNames,isNotNull);
        expect(suggestion.parameterTypes,isNotNull);
        expect(suggestion.parameterNames.length,suggestion.parameterTypes.length);
        expect(suggestion.requiredParameterCount,lessThanOrEqualTo(suggestion.parameterNames.length));
        expect(suggestion.hasNamedParameters,isNotNull);
    }
    assertNoSuggestions(_namedArguments? : {kind? : any}) : void {
        let {kind} = Object.assign({
            "kind" : null}, _namedArguments );
        if (op(Op.EQUALS,kind,null)) {
            if (this.suggestions.length > 0) {
                this.failedCompletion('Expected no suggestions',this.suggestions);
            }
            return;
        }
        let suggestion : any = this.suggestions.firstWhere((cs : any) =>  {
            return op(Op.EQUALS,cs.kind,kind);
        },{
            orElse : () =>  {
                return null;
            }});
        if (suggestion != null) {
            this.failedCompletion(`did not expect completion: ${completion}\n  ${suggestion}`);
        }
    }
    assertNotSuggested(completion : string) : void {
        let suggestion : any = this.suggestions.firstWhere((cs : any) =>  {
            return op(Op.EQUALS,cs.completion,completion);
        },{
            orElse : () =>  {
                return null;
            }});
        if (suggestion != null) {
            this.failedCompletion(`did not expect completion: ${completion}\n  ${suggestion}`);
        }
    }
    assertSuggest(completion : string,_namedArguments? : {csKind? : any,relevance? : number,importUri? : string,elemKind? : any,isDeprecated? : boolean,isPotential? : boolean,elemFile? : string,elemOffset? : number,selectionOffset? : number,paramName? : string,paramType? : string,defaultArgListString? : string,defaultArgumentListTextRanges? : core.DartList<number>}) : any {
        let {csKind,relevance,importUri,elemKind,isDeprecated,isPotential,elemFile,elemOffset,selectionOffset,paramName,paramType,defaultArgListString,defaultArgumentListTextRanges} = Object.assign({
            "csKind" : CompletionSuggestionKind.INVOCATION,
            "relevance" : DART_RELEVANCE_DEFAULT,
            "elemKind" : null,
            "isDeprecated" : false,
            "isPotential" : false,
            "defaultArgListString" : DartCompletionContributorTest._UNCHECKED}, _namedArguments );
        let cs : any = this.getSuggest({
            completion : completion,csKind : csKind,elemKind : elemKind});
        if (op(Op.EQUALS,cs,null)) {
            this.failedCompletion(`expected ${completion} ${csKind} ${elemKind}`,this.suggestions);
        }
        expect(cs.kind,equals(csKind));
        if (isDeprecated) {
            expect(cs.relevance,equals(DART_RELEVANCE_LOW));
        }else {
            expect(cs.relevance,equals(relevance),{
                reason : completion});
        }
        expect(cs.importUri,importUri);
        expect(cs.selectionOffset,equals((selectionOffset || new core.DartString(completion).length)));
        expect(cs.selectionLength,equals(0));
        expect(cs.isDeprecated,equals(isDeprecated));
        expect(cs.isPotential,equals(isPotential));
        if (cs.element != null) {
            expect(cs.element.location,isNotNull);
            expect(cs.element.location.file,isNotNull);
            expect(cs.element.location.offset,isNotNull);
            expect(cs.element.location.length,isNotNull);
            expect(cs.element.location.startColumn,isNotNull);
            expect(cs.element.location.startLine,isNotNull);
        }
        if (elemFile != null) {
            expect(cs.element.location.file,elemFile);
        }
        if (elemOffset != null) {
            expect(cs.element.location.offset,elemOffset);
        }
        if (paramName != null) {
            expect(cs.parameterName,paramName);
        }
        if (paramType != null) {
            expect(cs.parameterType,paramType);
        }
        if (defaultArgListString != DartCompletionContributorTest._UNCHECKED) {
            expect(cs.defaultArgumentListString,defaultArgListString);
        }
        if (defaultArgumentListTextRanges != null) {
            expect(cs.defaultArgumentListTextRanges,defaultArgumentListTextRanges);
        }
        return cs;
    }
    assertSuggestClass(name : string,_namedArguments? : {relevance? : number,importUri? : string,kind? : any,isDeprecated? : boolean,elemFile? : string,elemName? : string,elemOffset? : number}) : any {
        let {relevance,importUri,kind,isDeprecated,elemFile,elemName,elemOffset} = Object.assign({
            "relevance" : DART_RELEVANCE_DEFAULT,
            "kind" : CompletionSuggestionKind.INVOCATION,
            "isDeprecated" : false}, _namedArguments );
        let cs : any = this.assertSuggest(name,{
            csKind : kind,relevance : relevance,importUri : importUri,isDeprecated : isDeprecated,elemFile : elemFile,elemOffset : elemOffset});
        let element : any = cs.element;
        expect(element,isNotNull);
        expect(element.kind,equals(ElementKind.CLASS));
        expect(element.name,equals((elemName || name)));
        expect(element.parameters,isNull);
        expect(element.returnType,isNull);
        this.assertHasNoParameterInfo(cs);
        return cs;
    }
    assertSuggestClassTypeAlias(name : string,_namedArguments? : {relevance? : number,kind? : any}) : any {
        let {relevance,kind} = Object.assign({
            "relevance" : DART_RELEVANCE_DEFAULT,
            "kind" : CompletionSuggestionKind.INVOCATION}, _namedArguments );
        let cs : any = this.assertSuggest(name,{
            csKind : kind,relevance : relevance});
        let element : any = cs.element;
        expect(element,isNotNull);
        expect(element.kind,equals(ElementKind.CLASS_TYPE_ALIAS));
        expect(element.name,equals(name));
        expect(element.parameters,isNull);
        expect(element.returnType,isNull);
        this.assertHasNoParameterInfo(cs);
        return cs;
    }
    assertSuggestConstructor(name : string,_namedArguments? : {relevance? : number,importUri? : string,elemOffset? : number,defaultArgListString? : string,defaultArgumentListTextRanges? : core.DartList<number>}) : any {
        let {relevance,importUri,elemOffset,defaultArgListString,defaultArgumentListTextRanges} = Object.assign({
            "relevance" : DART_RELEVANCE_DEFAULT,
            "defaultArgListString" : DartCompletionContributorTest._UNCHECKED}, _namedArguments );
        let cs : any = this.assertSuggest(name,{
            relevance : relevance,importUri : importUri,elemOffset : elemOffset,defaultArgListString : defaultArgListString,defaultArgumentListTextRanges : defaultArgumentListTextRanges});
        let element : any = cs.element;
        expect(element,isNotNull);
        expect(element.kind,equals(ElementKind.CONSTRUCTOR));
        let index : number = new core.DartString(name).indexOf('.');
        expect(element.name,index >= 0 ? new core.DartString(name).substring(index + 1) : '');
        return cs;
    }
    assertSuggestEnum(completion : string,_namedArguments? : {isDeprecated? : boolean}) : any {
        let {isDeprecated} = Object.assign({
            "isDeprecated" : false}, _namedArguments );
        let suggestion : any = this.assertSuggest(completion,{
            isDeprecated : isDeprecated});
        expect(suggestion.isDeprecated,isDeprecated);
        expect(suggestion.element.kind,ElementKind.ENUM);
        return suggestion;
    }
    assertSuggestEnumConst(completion : string,_namedArguments? : {relevance? : number,isDeprecated? : boolean}) : any {
        let {relevance,isDeprecated} = Object.assign({
            "relevance" : DART_RELEVANCE_DEFAULT,
            "isDeprecated" : false}, _namedArguments );
        let suggestion : any = this.assertSuggest(completion,{
            relevance : relevance,isDeprecated : isDeprecated});
        expect(suggestion.completion,completion);
        expect(suggestion.isDeprecated,isDeprecated);
        expect(suggestion.element.kind,ElementKind.ENUM_CONSTANT);
        return suggestion;
    }
    assertSuggestField(name : string,type : string,_namedArguments? : {relevance? : number,importUri? : string,kind? : any,isDeprecated? : boolean}) : any {
        let {relevance,importUri,kind,isDeprecated} = Object.assign({
            "relevance" : DART_RELEVANCE_DEFAULT,
            "kind" : CompletionSuggestionKind.INVOCATION,
            "isDeprecated" : false}, _namedArguments );
        let cs : any = this.assertSuggest(name,{
            csKind : kind,relevance : relevance,importUri : importUri,elemKind : ElementKind.FIELD,isDeprecated : isDeprecated});
        expect(cs.returnType,type != null ? type : 'dynamic');
        let element : any = cs.element;
        expect(element,isNotNull);
        expect(element.kind,equals(ElementKind.FIELD));
        expect(element.name,equals(name));
        expect(element.parameters,isNull);
        expect(element.returnType,type != null ? type : 'dynamic');
        this.assertHasNoParameterInfo(cs);
        return cs;
    }
    assertSuggestFunction(name : string,returnType : string,_namedArguments? : {kind? : any,isDeprecated? : boolean,relevance? : number,importUri? : string,defaultArgListString? : string,defaultArgumentListTextRanges? : core.DartList<number>}) : any {
        let {kind,isDeprecated,relevance,importUri,defaultArgListString,defaultArgumentListTextRanges} = Object.assign({
            "kind" : CompletionSuggestionKind.INVOCATION,
            "isDeprecated" : false,
            "relevance" : DART_RELEVANCE_DEFAULT,
            "defaultArgListString" : DartCompletionContributorTest._UNCHECKED}, _namedArguments );
        let cs : any = this.assertSuggest(name,{
            csKind : kind,relevance : relevance,importUri : importUri,isDeprecated : isDeprecated,defaultArgListString : defaultArgListString,defaultArgumentListTextRanges : defaultArgumentListTextRanges});
        if (returnType != null) {
            expect(cs.returnType,returnType);
        }else if (this.isNullExpectedReturnTypeConsideredDynamic) {
            expect(cs.returnType,'dynamic');
        }
        let element : any = cs.element;
        expect(element,isNotNull);
        expect(element.kind,equals(ElementKind.FUNCTION));
        expect(element.name,equals(name));
        expect(element.isDeprecated,equals(isDeprecated));
        let param : string = element.parameters;
        expect(param,isNotNull);
        expect(param[0],equals('('));
        expect(param[new core.DartString(param).length - 1],equals(')'));
        if (returnType != null) {
            expect(element.returnType,returnType);
        }else if (this.isNullExpectedReturnTypeConsideredDynamic) {
            expect(element.returnType,'dynamic');
        }
        this.assertHasParameterInfo(cs);
        return cs;
    }
    assertSuggestFunctionTypeAlias(name : string,returnType : string,_namedArguments? : {isDeprecated? : boolean,relevance? : number,kind? : any,importUri? : string}) : any {
        let {isDeprecated,relevance,kind,importUri} = Object.assign({
            "isDeprecated" : false,
            "relevance" : DART_RELEVANCE_DEFAULT,
            "kind" : CompletionSuggestionKind.INVOCATION}, _namedArguments );
        let cs : any = this.assertSuggest(name,{
            csKind : kind,relevance : relevance,importUri : importUri,isDeprecated : isDeprecated});
        if (returnType != null) {
            expect(cs.returnType,returnType);
        }else if (this.isNullExpectedReturnTypeConsideredDynamic) {
            expect(cs.returnType,'dynamic');
        }else {
            expect(cs.returnType,isNull);
        }
        let element : any = cs.element;
        expect(element,isNotNull);
        expect(element.kind,equals(ElementKind.FUNCTION_TYPE_ALIAS));
        expect(element.name,equals(name));
        expect(element.isDeprecated,equals(isDeprecated));
        expect(element.returnType,equals(returnType != null ? returnType : 'dynamic'));
        return cs;
    }
    assertSuggestGetter(name : string,returnType : string,_namedArguments? : {relevance? : number,importUri? : string,kind? : any,isDeprecated? : boolean}) : any {
        let {relevance,importUri,kind,isDeprecated} = Object.assign({
            "relevance" : DART_RELEVANCE_DEFAULT,
            "kind" : CompletionSuggestionKind.INVOCATION,
            "isDeprecated" : false}, _namedArguments );
        let cs : any = this.assertSuggest(name,{
            csKind : kind,relevance : relevance,importUri : importUri,elemKind : ElementKind.GETTER,isDeprecated : isDeprecated});
        expect(cs.returnType,returnType != null ? returnType : 'dynamic');
        let element : any = cs.element;
        expect(element,isNotNull);
        expect(element.kind,equals(ElementKind.GETTER));
        expect(element.name,equals(name));
        expect(element.parameters,isNull);
        expect(element.returnType,equals(returnType != null ? returnType : 'dynamic'));
        this.assertHasNoParameterInfo(cs);
        return cs;
    }
    assertSuggestMethod(name : string,declaringType : string,returnType : string,_namedArguments? : {relevance? : number,importUri? : string,kind? : any,isDeprecated? : boolean,defaultArgListString? : string,defaultArgumentListTextRanges? : core.DartList<number>}) : any {
        let {relevance,importUri,kind,isDeprecated,defaultArgListString,defaultArgumentListTextRanges} = Object.assign({
            "relevance" : DART_RELEVANCE_DEFAULT,
            "kind" : CompletionSuggestionKind.INVOCATION,
            "isDeprecated" : false,
            "defaultArgListString" : DartCompletionContributorTest._UNCHECKED}, _namedArguments );
        let cs : any = this.assertSuggest(name,{
            csKind : kind,relevance : relevance,importUri : importUri,isDeprecated : isDeprecated,defaultArgListString : defaultArgListString,defaultArgumentListTextRanges : defaultArgumentListTextRanges});
        expect(cs.declaringType,equals(declaringType));
        expect(cs.returnType,returnType != null ? returnType : 'dynamic');
        let element : any = cs.element;
        expect(element,isNotNull);
        expect(element.kind,equals(ElementKind.METHOD));
        expect(element.name,equals(name));
        let param : string = element.parameters;
        expect(param,isNotNull);
        expect(param[0],equals('('));
        expect(param[new core.DartString(param).length - 1],equals(')'));
        expect(element.returnType,returnType != null ? returnType : 'dynamic');
        this.assertHasParameterInfo(cs);
        return cs;
    }
    assertSuggestName(name : string,_namedArguments? : {relevance? : number,importUri? : string,kind? : any,isDeprecated? : boolean}) : any {
        let {relevance,importUri,kind,isDeprecated} = Object.assign({
            "relevance" : DART_RELEVANCE_DEFAULT,
            "kind" : CompletionSuggestionKind.IDENTIFIER,
            "isDeprecated" : false}, _namedArguments );
        let cs : any = this.assertSuggest(name,{
            csKind : kind,relevance : relevance,importUri : importUri,isDeprecated : isDeprecated});
        expect(cs.completion,equals(name));
        expect(cs.element,isNull);
        this.assertHasNoParameterInfo(cs);
        return cs;
    }
    assertSuggestSetter(name : string,_namedArguments? : {relevance? : number,importUri? : string,kind? : any}) : any {
        let {relevance,importUri,kind} = Object.assign({
            "relevance" : DART_RELEVANCE_DEFAULT,
            "kind" : CompletionSuggestionKind.INVOCATION}, _namedArguments );
        let cs : any = this.assertSuggest(name,{
            csKind : kind,relevance : relevance,importUri : importUri,elemKind : ElementKind.SETTER});
        let element : any = cs.element;
        expect(element,isNotNull);
        expect(element.kind,equals(ElementKind.SETTER));
        expect(element.name,equals(name));
        if (element.returnType != null) {
            expect(element.returnType,'dynamic');
        }
        this.assertHasNoParameterInfo(cs);
        return cs;
    }
    assertSuggestTopLevelVar(name : string,returnType : string,_namedArguments? : {relevance? : number,kind? : any,importUri? : string}) : any {
        let {relevance,kind,importUri} = Object.assign({
            "relevance" : DART_RELEVANCE_DEFAULT,
            "kind" : CompletionSuggestionKind.INVOCATION}, _namedArguments );
        let cs : any = this.assertSuggest(name,{
            csKind : kind,relevance : relevance,importUri : importUri});
        if (returnType != null) {
            expect(cs.returnType,returnType);
        }else if (this.isNullExpectedReturnTypeConsideredDynamic) {
            expect(cs.returnType,'dynamic');
        }
        let element : any = cs.element;
        expect(element,isNotNull);
        expect(element.kind,equals(ElementKind.TOP_LEVEL_VARIABLE));
        expect(element.name,equals(name));
        expect(element.parameters,isNull);
        if (returnType != null) {
            expect(element.returnType,returnType);
        }else if (this.isNullExpectedReturnTypeConsideredDynamic) {
            expect(element.returnType,'dynamic');
        }
        this.assertHasNoParameterInfo(cs);
        return cs;
    }
    computeLibrariesContaining(times? : number) : async.Future<core.Null> {
        times = times || 200;
        return this.driver.getResult(this.testFile).then((result : any) =>  {
            return null;
        });
    }
    computeSuggestions(_namedArguments? : {times? : number,options? : any}) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let {times,options} = Object.assign({
                "times" : 200}, _namedArguments );
            let analysisResult : any = await this.driver.getResult(this.testFile);
            this.testSource = analysisResult.unit.element.source;
            let baseRequest : any = new bare.createInstance(any,null,analysisResult,this.provider,this.testSource,this.completionOffset,new bare.createInstance(any,null),options);
            let requestCompleter : async.DartCompleter<any> = new async.DartCompleter<any>();
            DartCompletionRequestImpl.from(baseRequest).then((request : any) =>  {
                requestCompleter.complete(request);
            });
            this.request = await this.performAnalysis(times,requestCompleter);
            let range = new bare.createInstance(any,null,this.request.offset,this.request.target);
            this.replacementOffset = range.offset;
            this.replacementLength = range.length;
            let suggestionCompleter : async.DartCompleter<core.DartList<any>> = new async.DartCompleter<core.DartList<any>>();
            this.contributor.computeSuggestions(this.request).then((computedSuggestions : core.DartList<any>) =>  {
                suggestionCompleter.complete(computedSuggestions);
            });
            this.suggestions = await this.performAnalysis(times,suggestionCompleter);
            expect(this.suggestions,isNotNull,{
                reason : 'expected suggestions'});
        } )());
    }

    configureFlutterPkg(pathToCode : core.DartMap<string,string>) : void {
        pathToCode.forEach((path : any,code : any) =>  {
            this.provider.newFile(`${lib4.properties.flutterPkgLibPath}/${path}`,code);
        });
        let myPkgFolder : any = this.provider.getResource(lib4.properties.flutterPkgLibPath);
        let pkgResolver : any = new bare.createInstance(any,null,this.provider,new core.DartMap.literal([
            ['flutter',new core.DartList.literal(myPkgFolder)]]));
        let sourceFactory : any = new bare.createInstance(any,null,new core.DartList.literal(new bare.createInstance(any,null,this.sdk),pkgResolver,this.resourceResolver));
        this.driver.configure({
            sourceFactory : sourceFactory});
        this.addSource('/tmp/other.dart',pathToCode.keys.map((path : any) =>  {
            return `import 'package:flutter/${path}';`;
        }).join('\n'));
    }
    @Abstract
    createContributor() : any{ throw 'abstract'}
    failedCompletion(message : string,completions? : core.DartIterable<any>) : void {
        let sb : core.DartStringBuffer = new core.DartStringBuffer(message);
        if (completions != null) {
            sb.write('\n  found');
            ((_) : core.DartList<any> =>  {
                {
                    _.sort(suggestionComparator);
                    _.forEach((suggestion : any) =>  {
                        sb.write(`\n    ${suggestion.completion} -> ${suggestion}`);
                    });
                    return _;
                }
            })(completions.toList());
        }
        fail(sb.toString());
    }
    getSuggest(_namedArguments? : {completion? : string,csKind? : any,elemKind? : any}) : any {
        let {completion,csKind,elemKind} = Object.assign({
            "completion" : null,
            "csKind" : null,
            "elemKind" : null}, _namedArguments );
        let cs : any;
        if (this.suggestions != null) {
            this.suggestions.forEach((s : any) =>  {
                if (completion != null && completion != s.completion) {
                    return;
                }
                if (csKind != null && csKind != s.kind) {
                    return;
                }
                if (elemKind != null) {
                    let element : any = s.element;
                    if (op(Op.EQUALS,element,null) || elemKind != element.kind) {
                        return;
                    }
                }
                if (op(Op.EQUALS,cs,null)) {
                    cs = s;
                }else {
                    this.failedCompletion(`expected exactly one ${cs}`,this.suggestions.where((s : any) =>  {
                        return op(Op.EQUALS,s.completion,completion);
                    }));
                }
            });
        }
        return cs;
    }
    performAnalysis(times : number,completer : async.DartCompleter<any>) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            if (completer.isCompleted) {
                return completer.future;
            }
            return new async.Future.delayed(core.DartDuration.ZERO,() =>  {
                return this.performAnalysis(times - 1,completer);
            });
        } )());
    }

    resolveSource(path : string,content : string) : void {
        this.addSource(path,content);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    setUp() : void {
        super.setUp();
        this.contributor = this.createContributor();
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    DartCompletionContributorTest() {
        this.testFile = '/completionTest.dart';
    }
}

export class properties {
}
