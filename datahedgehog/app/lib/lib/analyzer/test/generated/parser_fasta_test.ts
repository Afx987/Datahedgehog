/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/generated/parser_fasta_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./parser_test";
import * as lib4 from "@dart2ts.packages/front_end/lib/src/fasta/parser/parser";
import * as lib5 from "@dart2ts/dart/uri";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(ClassMemberParserTest_Fasta);
        defineReflectiveTests(ComplexParserTest_Fasta);
        defineReflectiveTests(ExpressionParserTest_Fasta);
        defineReflectiveTests(FormalParameterParserTest_Fasta);
        defineReflectiveTests(StatementParserTest_Fasta);
        defineReflectiveTests(TopLevelParserTest_Fasta);
    });
};
export namespace BuilderProxy {
    export type Constructors = 'BuilderProxy';
    export type Interface = Omit<BuilderProxy, Constructors>;
}
@DartClass
@Implements(any)
export class BuilderProxy implements any.Interface {
    noSuchMethod(invocation : core.Invocation) {
        return super.noSuchMethod(invocation);
    }
    constructor() {
    }
    @defaultConstructor
    BuilderProxy() {
    }
}

export namespace ElementProxy {
    export type Constructors = 'ElementProxy';
    export type Interface = Omit<ElementProxy, Constructors>;
}
@DartClass
@Implements(any)
export class ElementProxy implements any.Interface {
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    rawType : any;

    noSuchMethod(invocation : core.Invocation) {
        return super.noSuchMethod(invocation);
    }
    constructor() {
    }
    @defaultConstructor
    ElementProxy() {
        this.rawType = new InterfaceTypeProxy();
    }
}

export namespace ElementStoreProxy {
    export type Constructors = 'ElementStoreProxy';
    export type Interface = Omit<ElementStoreProxy, Constructors>;
}
@DartClass
@Implements(any)
export class ElementStoreProxy implements any.Interface {
    _elements;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.INDEX](builder : any) : any {
        return this._elements.putIfAbsent(builder,() =>  {
            return new ElementProxy();
        });
    }
    noSuchMethod(invocation : core.Invocation) {
        return super.noSuchMethod(invocation);
    }
    constructor() {
    }
    @defaultConstructor
    ElementStoreProxy() {
        this._elements = new core.DartMap.literal([
        ]);
    }
}

export namespace FastaParserTestCase {
    export type Constructors = 'FastaParserTestCase';
    export type Interface = Omit<FastaParserTestCase, Constructors>;
}
@DartClass
@Implements(lib3.AbstractParserTestCase)
@With(lib3.ParserTestHelpers)
export class FastaParserTestCase extends core.DartObject implements lib3.AbstractParserTestCase.Interface,lib3.ParserTestHelpers.Interface {
    @Abstract
    expectCommentText(comment : any,expectedText : string) : void {
        throw 'from mixin';
    }
    @Abstract
    expectDottedName(name : any,expectedComponents : core.DartList<string>) : void {
        throw 'from mixin';
    }
    _parserProxy : ParserProxy;

    enableGenericMethodComments : boolean;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set enableAssertInitializer(value : boolean) {
        if (value == true) {
            throw new core.UnimplementedError();
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set enableLazyAssignmentOperators(value : boolean) {
        if (value == true) {
            throw new core.UnimplementedError();
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set enableNnbd(value : boolean) {
        if (value == true) {
            throw new core.UnimplementedError();
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set enableUriInPartOf(value : boolean) {
        if (value == true) {
            throw new core.UnimplementedError();
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get parser() : any {
        return this._parserProxy;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    assertErrorsWithCodes(expectedErrorCodes : core.DartList<any>) : void {
        fail('Not implemented');
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    assertNoErrors() : void {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createParser(content : string) : void {
        let scanner = new bare.createInstance(any,null,content,{
            includeComments : true});
        scanner.scanGenericMethodComments = this.enableGenericMethodComments;
        this._parserProxy = new ParserProxy(scanner.tokenize(),{
            enableGenericMethodComments : this.enableGenericMethodComments});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    parseAdditiveExpression(code : string) : any {
        return this._parseExpression(code);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    parseAssignableExpression(code : string,primaryAllowed : boolean) : any {
        return this._parseExpression(code);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    parseAssignableSelector(code : string,optional : boolean,_namedArguments? : {allowConditional? : boolean}) : any {
        let {allowConditional} = Object.assign({
            "allowConditional" : true}, _namedArguments );
        if (optional) {
            if (new core.DartString(code).isEmpty) {
                return this._parseExpression('foo');
            }
            return this._parseExpression(`(foo)${code}`);
        }
        return this._parseExpression(`foo${code}`);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    parseAwaitExpression(code : string) : any {
        let function = this._parseExpression(`() async => ${code}`) as any;
        return (function.body as any).expression;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    parseBitwiseAndExpression(code : string) : any {
        return this._parseExpression(code);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    parseBitwiseOrExpression(code : string) : any {
        return this._parseExpression(code);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    parseBitwiseXorExpression(code : string) : any {
        return this._parseExpression(code);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    parseCascadeSection(code : string) : any {
        let cascadeExpression = this._parseExpression(`null${code}`) as any;
        return cascadeExpression.cascadeSections.first;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    parseCompilationUnit(source : string,errorCodes? : core.DartList<any>) : any {
        errorCodes = errorCodes || new core.DartList.literal<any>();
        return this._runParser(source,(parser : any) =>  {
            return parser.parseUnit;
        },errorCodes) as any;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    parseConditionalExpression(code : string) : any {
        return this._parseExpression(code);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    parseConstExpression(code : string) : any {
        return this._parseExpression(code);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    parseConstructorInitializer(code : string) : any {
        let source : string = `class __Test { __Test() : ${code}; }`;
        let unit = this._runParser(source,(parser : any) =>  {
            return parser.parseUnit;
        }) as any;
        let clazz = op(Op.INDEX,unit.declarations,0) as any;
        let constructor = op(Op.INDEX,clazz.members,0) as any;
        return constructor.initializers.single;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    parseDirectives(source : string,errorCodes? : core.DartList<any>) : any {
        errorCodes = errorCodes || new core.DartList.literal<any>();
        return this._runParser(source,(parser : any) =>  {
            return parser.parseUnit;
        },errorCodes);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    parseEqualityExpression(code : string) : any {
        return this._parseExpression(code);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    parseExpression(source : string,errorCodes? : core.DartList<any>) : any {
        errorCodes = errorCodes || new core.DartList.literal<any>();
        return this._runParser(source,(parser : any) =>  {
            return parser.parseExpression;
        },errorCodes) as any;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    parseExpressionList(code : string) : core.DartList<any> {
        return (this._parseExpression(`[${code}]`) as any).elements.toList();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    parseExpressionWithoutCascade(code : string) : any {
        return this._parseExpression(code);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    parseFormalParameter(code : string,kind : any,_namedArguments? : {errorCodes? : core.DartList<any>}) : any {
        let {errorCodes} = Object.assign({
            "errorCodes" : new core.DartList.literal<any>()}, _namedArguments );
        let parametersCode : string;
        if (op(Op.EQUALS,kind,ParameterKind.REQUIRED)) {
            parametersCode = `(${code})`;
        }else if (op(Op.EQUALS,kind,ParameterKind.POSITIONAL)) {
            parametersCode = `([${code}])`;
        }else if (op(Op.EQUALS,kind,ParameterKind.NAMED)) {
            parametersCode = `({${code}})`;
        }else {
            fail(`${kind}`);
        }
        let list : any = this.parseFormalParameterList(parametersCode,{
            inFunctionType : false,errorCodes : errorCodes});
        return list.parameters.single;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    parseFormalParameterList(code : string,_namedArguments? : {inFunctionType? : boolean,errorCodes? : core.DartList<any>}) : any {
        let {inFunctionType,errorCodes} = Object.assign({
            "inFunctionType" : false,
            "errorCodes" : new core.DartList.literal<any>()}, _namedArguments );
        return this._runParser(code,(parser : any) =>  {
            return (token : any) =>  {
                return parser.parseFormalParameters(token,inFunctionType ? lib4.MemberKind.GeneralizedFunctionType : lib4.MemberKind.NonStaticMethod);
            };
        },errorCodes) as any;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    parseFullCompilationUnitMember() : any {
        return this._parserProxy._run((parser : any) =>  {
            return parser.parseTopLevelDeclaration;
        }) as any;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    parseFullDirective() : any {
        return this._parserProxy._run((parser : any) =>  {
            return parser.parseTopLevelDeclaration;
        }) as any;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    parseFunctionExpression(code : string) : any {
        return this._parseExpression(code);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    parseInstanceCreationExpression(code : string,newToken : any) : any {
        return this._parseExpression(`${newToken} ${code}`);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    parseListLiteral(token : any,typeArgumentsCode : string,code : string) : any {
        let sc : string = '';
        if (token != null) {
            sc += op(Op.PLUS,token.lexeme,' ');
        }
        if (typeArgumentsCode != null) {
            sc += typeArgumentsCode;
        }
        sc += code;
        return this._parseExpression(sc);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    parseListOrMapLiteral(modifier : any,code : string) : any {
        let literalCode : string = modifier != null ? `${modifier} ${code}` : code;
        return this.parsePrimaryExpression(literalCode) as any;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    parseLogicalAndExpression(code : string) : any {
        return this._parseExpression(code);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    parseLogicalOrExpression(code : string) : any {
        return this._parseExpression(code);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    parseMapLiteral(token : any,typeArgumentsCode : string,code : string) : any {
        let sc : string = '';
        if (token != null) {
            sc += op(Op.PLUS,token.lexeme,' ');
        }
        if (typeArgumentsCode != null) {
            sc += typeArgumentsCode;
        }
        sc += code;
        return this.parsePrimaryExpression(sc) as any;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    parseMapLiteralEntry(code : string) : any {
        let mapLiteral = this.parseMapLiteral(null,null,`{ ${code} }`);
        return mapLiteral.entries.single;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    parseMultiplicativeExpression(code : string) : any {
        return this._parseExpression(code);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    parseNewExpression(code : string) : any {
        return this._parseExpression(code);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    parseNormalFormalParameter(code : string,_namedArguments? : {inFunctionType? : boolean,errorCodes? : core.DartList<any>}) : any {
        let {inFunctionType,errorCodes} = Object.assign({
            "inFunctionType" : false,
            "errorCodes" : new core.DartList.literal<any>()}, _namedArguments );
        let list : any = this.parseFormalParameterList(`(${code})`,{
            inFunctionType : inFunctionType,errorCodes : errorCodes});
        return list.parameters.single;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    parsePostfixExpression(code : string) : any {
        return this._parseExpression(code);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    parsePrefixedIdentifier(code : string) : any {
        return this._parseExpression(code);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    parsePrimaryExpression(code : string) : any {
        return this._runParser(code,(parser : any) =>  {
            return (token : any) =>  {
                return parser.parsePrimary(token,IdentifierContext.expression);
            };
        },new core.DartList.literal<any>()) as any;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    parseRelationalExpression(code : string) : any {
        return this._parseExpression(code);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    parseRethrowExpression(code : string) : any {
        return this._parseExpression(code);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    parseShiftExpression(code : string) : any {
        return this._parseExpression(code);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    parseSimpleIdentifier(code : string) : any {
        return this._parseExpression(code);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    parseStatement(source : string,enableLazyAssignmentOperators? : boolean) : any {
        return this._runParser(source,(parser : any) =>  {
            return parser.parseStatement;
        }) as any;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    parseStringLiteral(code : string) : any {
        return this._parseExpression(code);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    parseSymbolLiteral(code : string) : any {
        return this._parseExpression(code);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    parseThrowExpression(code : string) : any {
        return this._parseExpression(code);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    parseThrowExpressionWithoutCascade(code : string) : any {
        return this._parseExpression(code);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    parseUnaryExpression(code : string) : any {
        return this._parseExpression(code);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    parseVariableDeclarationList(code : string) : any {
        let statement = this.parseStatement(`${code};`) as any;
        return statement.variables;
    }
    _parseExpression(code : string) : any {
        let statement = this.parseStatement(`${code};`) as any;
        return statement.expression;
    }
    _runParser(source : string,getParseFunction : (parser : any) => (token : any) => any,errorCodes? : core.DartList<any>) : core.DartObject {
        errorCodes = errorCodes || new core.DartList.literal<any>();
        if (errorCodes.isNotEmpty) {
            throw new core.UnimplementedError();
        }
        this.createParser(source);
        return this._parserProxy._run(getParseFunction);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    FastaParserTestCase() {
        this.enableGenericMethodComments = false;
    }
}

export namespace InterfaceTypeProxy {
    export type Constructors = 'InterfaceTypeProxy';
    export type Interface = Omit<InterfaceTypeProxy, Constructors>;
}
@DartClass
@Implements(any)
export class InterfaceTypeProxy implements any.Interface {
    noSuchMethod(invocation : core.Invocation) {
        return super.noSuchMethod(invocation);
    }
    constructor() {
    }
    @defaultConstructor
    InterfaceTypeProxy() {
    }
}

export namespace KernelLibraryBuilderProxy {
    export type Constructors = 'KernelLibraryBuilderProxy';
    export type Interface = Omit<KernelLibraryBuilderProxy, Constructors>;
}
@DartClass
@Implements(any)
export class KernelLibraryBuilderProxy implements any.Interface {
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    uri;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get fileUri() : lib5.Uri {
        return this.uri;
    }
    noSuchMethod(invocation : core.Invocation) {
        return super.noSuchMethod(invocation);
    }
    constructor() {
    }
    @defaultConstructor
    KernelLibraryBuilderProxy() {
        this.uri = lib5.Uri.parse('file:///test.dart');
    }
}

export namespace ParserProxy {
    export type Constructors = '_';
    export type Interface = Omit<ParserProxy, Constructors>;
}
@DartClass
@Implements(any)
export class ParserProxy implements any.Interface {
    _currentFastaToken : any;

    _fastaParser : any;

    _astBuilder : any;

    constructor(startingToken : any,_namedArguments? : {enableGenericMethodComments? : boolean}) {
    }
    @defaultFactory
    static $ParserProxy(startingToken : any,_namedArguments? : {enableGenericMethodComments? : boolean}) : ParserProxy {
        let {enableGenericMethodComments} = Object.assign({
            "enableGenericMethodComments" : false}, _namedArguments );
        let library = new KernelLibraryBuilderProxy();
        let member = new BuilderProxy();
        let elementStore = new ElementStoreProxy();
        let scope = new ScopeProxy();
        let astBuilder = new bare.createInstance(any,null,null,library,member,elementStore,scope);
        astBuilder.parseGenericMethodComments = enableGenericMethodComments;
        let fastaParser = new bare.createInstance(any,null,astBuilder);
        astBuilder.parser = fastaParser;
        return new ParserProxy._(startingToken,fastaParser,astBuilder);
    }
    @namedConstructor
    _(_currentFastaToken : any,_fastaParser : any,_astBuilder : any) {
        this._currentFastaToken = _currentFastaToken;
        this._fastaParser = _fastaParser;
        this._astBuilder = _astBuilder;
    }
    static _ : new(_currentFastaToken : any,_fastaParser : any,_astBuilder : any) => ParserProxy;

    noSuchMethod(invocation : core.Invocation) {
        return super.noSuchMethod(invocation);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    parseClassMember(className : string) : any {
        this._astBuilder.className = className;
        let result = this._run((parser : any) =>  {
            return parser.parseMember;
        }) as any;
        this._astBuilder.className = null;
        return result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    parseCompilationUnit2() : any {
        return this._run((parser : any) =>  {
            return parser.parseUnit;
        }) as any;
    }
    _run(getParseFunction : (parser : any) => (token : any) => any) : core.DartObject {
        let parseFunction = getParseFunction(this._fastaParser);
        this._currentFastaToken = parseFunction(this._currentFastaToken);
        expect(this._currentFastaToken.isEof,isTrue);
        expect(this._astBuilder.stack,hasLength(1));
        return this._astBuilder.pop();
    }
}

export namespace ScopeProxy {
    export type Constructors = 'ScopeProxy';
    export type Interface = Omit<ScopeProxy, Constructors>;
}
@DartClass
@Implements(any)
export class ScopeProxy implements any.Interface {
    _locals;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.INDEX_EQ](name : string,member : any) : void {
        op(Op.INDEX_ASSIGN,this._locals,name,member);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createNestedScope(_namedArguments? : {isModifiable? : boolean}) : any {
        let {isModifiable} = Object.assign({
            "isModifiable" : true}, _namedArguments );
        return new bare.createInstance(any,null,this,{
            isModifiable : isModifiable});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    lookup(name : string,charOffset : number,fileUri : lib5.Uri,_namedArguments? : {isInstanceScope? : boolean}) : any {
        let {isInstanceScope} = Object.assign({
            "isInstanceScope" : true}, _namedArguments );
        return this._locals.putIfAbsent(name,() =>  {
            return new BuilderProxy();
        });
    }
    noSuchMethod(invocation : core.Invocation) {
        return super.noSuchMethod(invocation);
    }
    constructor() {
    }
    @defaultConstructor
    ScopeProxy() {
        this._locals = new core.DartMap.literal([
        ]);
    }
}

export namespace ClassMemberParserTest_Fasta {
    export type Constructors = FastaParserTestCase.Constructors | 'ClassMemberParserTest_Fasta';
    export type Interface = Omit<ClassMemberParserTest_Fasta, Constructors>;
}
@DartClass
@With(lib3.ClassMemberParserTestMixin)
export class ClassMemberParserTest_Fasta extends FastaParserTestCase implements lib3.ClassMemberParserTestMixin.Interface {
    @Abstract
    test_parseAwaitExpression_asStatement_inAsync() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseAwaitExpression_asStatement_inSync() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseAwaitExpression_inSync() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseClassMember_constructor_withDocComment() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseClassMember_constructor_withInitializers() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseClassMember_field_covariant() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseClassMember_field_gftType_gftReturnType() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseClassMember_field_gftType_noReturnType() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseClassMember_field_instance_prefixedType() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseClassMember_field_namedGet() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseClassMember_field_namedOperator() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseClassMember_field_namedOperator_withAssignment() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseClassMember_field_namedSet() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseClassMember_field_static() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseClassMember_getter_functionType() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseClassMember_getter_void() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseClassMember_method_external() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseClassMember_method_external_withTypeAndArgs() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseClassMember_method_generic_comment_noReturnType() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseClassMember_method_generic_comment_parameterType() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseClassMember_method_generic_comment_returnType() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseClassMember_method_generic_comment_returnType_bound() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseClassMember_method_generic_comment_returnType_complex() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseClassMember_method_generic_comment_void() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseClassMember_method_generic_noReturnType() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseClassMember_method_generic_returnType() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseClassMember_method_generic_void() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseClassMember_method_get_noType() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseClassMember_method_get_type() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseClassMember_method_get_void() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseClassMember_method_gftReturnType_noReturnType() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseClassMember_method_gftReturnType_voidReturnType() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseClassMember_method_native() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseClassMember_method_operator_noType() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseClassMember_method_operator_type() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseClassMember_method_operator_void() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseClassMember_method_returnType_functionType() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseClassMember_method_returnType_parameterized() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseClassMember_method_set_noType() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseClassMember_method_set_type() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseClassMember_method_set_void() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseClassMember_method_static_generic_comment_returnType() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseClassMember_method_trailing_commas() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseClassMember_operator_functionType() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseClassMember_operator_index() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseClassMember_operator_indexAssign() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseClassMember_redirectingFactory_const() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseClassMember_redirectingFactory_expressionBody() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseClassMember_redirectingFactory_nonConst() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseConstructor_factory_named() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseConstructor_initializers_field() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseConstructor_named() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseConstructor_unnamed() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseConstructor_with_pseudo_function_literal() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseConstructorFieldInitializer_qualified() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseConstructorFieldInitializer_unqualified() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseGetter_nonStatic() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseGetter_static() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseInitializedIdentifierList_type() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseInitializedIdentifierList_var() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseOperator() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseSetter_nonStatic() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseSetter_static() : void {
        throw 'from mixin';
    }
    @Abstract
    test_simpleFormalParameter_withDocComment() : void {
        throw 'from mixin';
    }
    @Abstract
    _assertIsDeclarationName(name : any,expected? : boolean) : void {
        expected = expected || true;
        throw 'from mixin';
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_parseConstructor_assert() : void {
        super.test_parseConstructor_assert();
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ClassMemberParserTest_Fasta() {
    }
}

export namespace ComplexParserTest_Fasta {
    export type Constructors = FastaParserTestCase.Constructors | 'ComplexParserTest_Fasta';
    export type Interface = Omit<ComplexParserTest_Fasta, Constructors>;
}
@DartClass
@With(lib3.ComplexParserTestMixin)
export class ComplexParserTest_Fasta extends FastaParserTestCase implements lib3.ComplexParserTestMixin.Interface {
    @Abstract
    test_additiveExpression_normal() : void {
        throw 'from mixin';
    }
    @Abstract
    test_additiveExpression_noSpaces() : void {
        throw 'from mixin';
    }
    @Abstract
    test_additiveExpression_precedence_multiplicative_left() : void {
        throw 'from mixin';
    }
    @Abstract
    test_additiveExpression_precedence_multiplicative_left_withSuper() : void {
        throw 'from mixin';
    }
    @Abstract
    test_additiveExpression_precedence_multiplicative_right() : void {
        throw 'from mixin';
    }
    @Abstract
    test_additiveExpression_super() : void {
        throw 'from mixin';
    }
    @Abstract
    test_assignableExpression_arguments_normal_chain() : void {
        throw 'from mixin';
    }
    @Abstract
    test_assignmentExpression_compound() : void {
        throw 'from mixin';
    }
    @Abstract
    test_assignmentExpression_indexExpression() : void {
        throw 'from mixin';
    }
    @Abstract
    test_assignmentExpression_prefixedIdentifier() : void {
        throw 'from mixin';
    }
    @Abstract
    test_assignmentExpression_propertyAccess() : void {
        throw 'from mixin';
    }
    @Abstract
    test_bitwiseAndExpression_normal() : void {
        throw 'from mixin';
    }
    @Abstract
    test_bitwiseAndExpression_precedence_equality_left() : void {
        throw 'from mixin';
    }
    @Abstract
    test_bitwiseAndExpression_precedence_equality_right() : void {
        throw 'from mixin';
    }
    @Abstract
    test_bitwiseAndExpression_super() : void {
        throw 'from mixin';
    }
    @Abstract
    test_bitwiseOrExpression_normal() : void {
        throw 'from mixin';
    }
    @Abstract
    test_bitwiseOrExpression_precedence_xor_left() : void {
        throw 'from mixin';
    }
    @Abstract
    test_bitwiseOrExpression_precedence_xor_right() : void {
        throw 'from mixin';
    }
    @Abstract
    test_bitwiseOrExpression_super() : void {
        throw 'from mixin';
    }
    @Abstract
    test_bitwiseXorExpression_normal() : void {
        throw 'from mixin';
    }
    @Abstract
    test_bitwiseXorExpression_precedence_and_left() : void {
        throw 'from mixin';
    }
    @Abstract
    test_bitwiseXorExpression_precedence_and_right() : void {
        throw 'from mixin';
    }
    @Abstract
    test_bitwiseXorExpression_super() : void {
        throw 'from mixin';
    }
    @Abstract
    test_cascade_withAssignment() : void {
        throw 'from mixin';
    }
    @Abstract
    test_conditionalExpression_precedence_ifNullExpression() : void {
        throw 'from mixin';
    }
    @Abstract
    test_conditionalExpression_precedence_logicalOrExpression() : void {
        throw 'from mixin';
    }
    @Abstract
    test_constructor_initializer_withParenthesizedExpression() : void {
        throw 'from mixin';
    }
    @Abstract
    test_equalityExpression_precedence_relational_left() : void {
        throw 'from mixin';
    }
    @Abstract
    test_equalityExpression_precedence_relational_right() : void {
        throw 'from mixin';
    }
    @Abstract
    test_ifNullExpression() : void {
        throw 'from mixin';
    }
    @Abstract
    test_ifNullExpression_precedence_logicalOr_left() : void {
        throw 'from mixin';
    }
    @Abstract
    test_ifNullExpression_precedence_logicalOr_right() : void {
        throw 'from mixin';
    }
    @Abstract
    test_logicalAndExpression() : void {
        throw 'from mixin';
    }
    @Abstract
    test_logicalAndExpression_precedence_bitwiseOr_left() : void {
        throw 'from mixin';
    }
    @Abstract
    test_logicalAndExpression_precedence_bitwiseOr_right() : void {
        throw 'from mixin';
    }
    @Abstract
    test_logicalOrExpression() : void {
        throw 'from mixin';
    }
    @Abstract
    test_logicalOrExpression_precedence_logicalAnd_left() : void {
        throw 'from mixin';
    }
    @Abstract
    test_logicalOrExpression_precedence_logicalAnd_right() : void {
        throw 'from mixin';
    }
    @Abstract
    test_multipleLabels_statement() : void {
        throw 'from mixin';
    }
    @Abstract
    test_multiplicativeExpression_normal() : void {
        throw 'from mixin';
    }
    @Abstract
    test_multiplicativeExpression_precedence_unary_left() : void {
        throw 'from mixin';
    }
    @Abstract
    test_multiplicativeExpression_precedence_unary_right() : void {
        throw 'from mixin';
    }
    @Abstract
    test_multiplicativeExpression_super() : void {
        throw 'from mixin';
    }
    @Abstract
    test_relationalExpression_precedence_shift_right() : void {
        throw 'from mixin';
    }
    @Abstract
    test_shiftExpression_normal() : void {
        throw 'from mixin';
    }
    @Abstract
    test_shiftExpression_precedence_additive_left() : void {
        throw 'from mixin';
    }
    @Abstract
    test_shiftExpression_precedence_additive_right() : void {
        throw 'from mixin';
    }
    @Abstract
    test_shiftExpression_super() : void {
        throw 'from mixin';
    }
    @Abstract
    test_topLevelFunction_nestedGenericFunction() : void {
        throw 'from mixin';
    }
    @Abstract
    _validate_assignableExpression_arguments_normal_chain_typeArguments(code : string) : void {
        throw 'from mixin';
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_assignableExpression_arguments_normal_chain_typeArgumentComments() : void {
        super.test_assignableExpression_arguments_normal_chain_typeArgumentComments();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_assignableExpression_arguments_normal_chain_typeArguments() : void {
        super.test_assignableExpression_arguments_normal_chain_typeArguments();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_conditionalExpression_precedence_nullableType_as() : void {
        super.test_conditionalExpression_precedence_nullableType_as();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_conditionalExpression_precedence_nullableType_is() : void {
        super.test_conditionalExpression_precedence_nullableType_is();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_equalityExpression_normal() : void {
        super.test_equalityExpression_normal();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_equalityExpression_super() : void {
        super.test_equalityExpression_super();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_logicalAndExpression_precedence_nullableType() : void {
        super.test_logicalAndExpression_precedence_nullableType();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_logicalOrExpression_precedence_nullableType() : void {
        super.test_logicalOrExpression_precedence_nullableType();
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ComplexParserTest_Fasta() {
    }
}

export namespace ExpressionParserTest_Fasta {
    export type Constructors = FastaParserTestCase.Constructors | 'ExpressionParserTest_Fasta';
    export type Interface = Omit<ExpressionParserTest_Fasta, Constructors>;
}
@DartClass
@With(lib3.ExpressionParserTestMixin)
export class ExpressionParserTest_Fasta extends FastaParserTestCase implements lib3.ExpressionParserTestMixin.Interface {
    @Abstract
    test_namedArgument() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseAdditiveExpression_normal() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseAdditiveExpression_super() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseAssignableExpression_expression_args_dot() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseAssignableExpression_expression_dot() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseAssignableExpression_expression_index() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseAssignableExpression_expression_question_dot() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseAssignableExpression_identifier() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseAssignableExpression_identifier_args_dot() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseAssignableExpression_identifier_args_dot_typeArgumentComments() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseAssignableExpression_identifier_args_dot_typeArguments() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseAssignableExpression_identifier_dot() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseAssignableExpression_identifier_index() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseAssignableExpression_identifier_question_dot() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseAssignableExpression_super_dot() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseAssignableExpression_super_index() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseAssignableSelector_dot() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseAssignableSelector_index() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseAssignableSelector_none() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseAssignableSelector_question_dot() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseAwaitExpression() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseBitwiseAndExpression_normal() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseBitwiseAndExpression_super() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseBitwiseOrExpression_normal() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseBitwiseOrExpression_super() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseBitwiseXorExpression_normal() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseBitwiseXorExpression_super() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCascadeSection_i() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCascadeSection_ia() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCascadeSection_ii() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCascadeSection_ii_typeArgumentComments() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCascadeSection_ii_typeArguments() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCascadeSection_p() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCascadeSection_p_assign() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCascadeSection_p_assign_withCascade() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCascadeSection_p_assign_withCascade_typeArgumentComments() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCascadeSection_p_assign_withCascade_typeArguments() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCascadeSection_p_builtIn() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCascadeSection_pa() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCascadeSection_pa_typeArgumentComments() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCascadeSection_pa_typeArguments() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCascadeSection_paa() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCascadeSection_paapaa() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCascadeSection_pap() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCascadeSection_pap_typeArgumentComments() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCascadeSection_pap_typeArguments() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseConditionalExpression() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseConstExpression_instanceCreation() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseConstExpression_listLiteral_typed() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseConstExpression_listLiteral_typed_genericComment() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseConstExpression_listLiteral_untyped() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseConstExpression_mapLiteral_typed() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseConstExpression_mapLiteral_typed_genericComment() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseConstExpression_mapLiteral_untyped() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseEqualityExpression_normal() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseEqualityExpression_super() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseExpression_assign() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseExpression_comparison() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseExpression_function_async() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseExpression_function_asyncStar() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseExpression_function_sync() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseExpression_function_syncStar() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseExpression_invokeFunctionExpression() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseExpression_nonAwait() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseExpression_superMethodInvocation() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseExpression_superMethodInvocation_typeArgumentComments() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseExpression_superMethodInvocation_typeArguments() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseExpressionList_multiple() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseExpressionList_single() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseExpressionWithoutCascade_assign() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseExpressionWithoutCascade_comparison() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseExpressionWithoutCascade_superMethodInvocation() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseExpressionWithoutCascade_superMethodInvocation_typeArgumentComments() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseExpressionWithoutCascade_superMethodInvocation_typeArguments() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseFunctionExpression_body_inExpression() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseFunctionExpression_typeParameterComments() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseFunctionExpression_typeParameters() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseInstanceCreationExpression_qualifiedType() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseInstanceCreationExpression_qualifiedType_named() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseInstanceCreationExpression_qualifiedType_named_typeArgumentComments() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseInstanceCreationExpression_qualifiedType_named_typeArguments() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseInstanceCreationExpression_qualifiedType_typeArgumentComments() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseInstanceCreationExpression_qualifiedType_typeArguments() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseInstanceCreationExpression_type() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseInstanceCreationExpression_type_named() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseInstanceCreationExpression_type_named_typeArguments() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseInstanceCreationExpression_type_typeArgumentComments() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseInstanceCreationExpression_type_typeArguments() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseListLiteral_empty_oneToken() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseListLiteral_empty_twoTokens() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseListLiteral_multiple() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseListLiteral_single() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseListLiteral_single_withTypeArgument() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseListOrMapLiteral_list_noType() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseListOrMapLiteral_list_type() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseListOrMapLiteral_map_noType() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseListOrMapLiteral_map_type() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseLogicalAndExpression() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseLogicalOrExpression() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseMapLiteral_empty() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseMapLiteral_multiple() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseMapLiteral_single() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseMapLiteralEntry_complex() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseMapLiteralEntry_int() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseMapLiteralEntry_string() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseMultiplicativeExpression_normal() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseMultiplicativeExpression_super() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseNewExpression() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parsePostfixExpression_decrement() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parsePostfixExpression_increment() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parsePostfixExpression_none_indexExpression() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parsePostfixExpression_none_methodInvocation() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parsePostfixExpression_none_methodInvocation_question_dot() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parsePostfixExpression_none_methodInvocation_question_dot_typeArgumentComments() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parsePostfixExpression_none_methodInvocation_question_dot_typeArguments() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parsePostfixExpression_none_methodInvocation_typeArgumentComments() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parsePostfixExpression_none_methodInvocation_typeArguments() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parsePostfixExpression_none_propertyAccess() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parsePrefixedIdentifier_noPrefix() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parsePrefixedIdentifier_prefix() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parsePrimaryExpression_const() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parsePrimaryExpression_double() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parsePrimaryExpression_false() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parsePrimaryExpression_function_arguments() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parsePrimaryExpression_function_noArguments() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parsePrimaryExpression_genericFunctionExpression() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parsePrimaryExpression_hex() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parsePrimaryExpression_identifier() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parsePrimaryExpression_int() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parsePrimaryExpression_listLiteral() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parsePrimaryExpression_listLiteral_index() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parsePrimaryExpression_listLiteral_typed() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parsePrimaryExpression_listLiteral_typed_genericComment() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parsePrimaryExpression_mapLiteral() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parsePrimaryExpression_mapLiteral_typed() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parsePrimaryExpression_mapLiteral_typed_genericComment() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parsePrimaryExpression_new() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parsePrimaryExpression_null() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parsePrimaryExpression_parenthesized() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parsePrimaryExpression_string() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parsePrimaryExpression_string_multiline() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parsePrimaryExpression_string_raw() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parsePrimaryExpression_this() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parsePrimaryExpression_true() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseRedirectingConstructorInvocation_named() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseRedirectingConstructorInvocation_unnamed() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseRelationalExpression_as_functionType_noReturnType() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseRelationalExpression_as_functionType_returnType() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseRelationalExpression_as_generic() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseRelationalExpression_as_simple() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseRelationalExpression_as_simple_function() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseRelationalExpression_is() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseRelationalExpression_isNot() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseRelationalExpression_normal() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseRelationalExpression_super() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseRethrowExpression() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseShiftExpression_normal() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseShiftExpression_super() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseSimpleIdentifier1_normalIdentifier() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseSimpleIdentifier_builtInIdentifier() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseSimpleIdentifier_normalIdentifier() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseStringLiteral_adjacent() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseStringLiteral_endsWithInterpolation() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseStringLiteral_interpolated() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseStringLiteral_multiline_encodedSpace() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseStringLiteral_multiline_endsWithInterpolation() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseStringLiteral_multiline_escapedBackslash() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseStringLiteral_multiline_escapedBackslash_raw() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseStringLiteral_multiline_escapedEolMarker() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseStringLiteral_multiline_escapedEolMarker_raw() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseStringLiteral_multiline_escapedSpaceAndEolMarker() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseStringLiteral_multiline_escapedSpaceAndEolMarker_raw() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseStringLiteral_multiline_escapedTab() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseStringLiteral_multiline_escapedTab_raw() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseStringLiteral_multiline_quoteAfterInterpolation() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseStringLiteral_multiline_startsWithInterpolation() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseStringLiteral_multiline_twoSpaces() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseStringLiteral_multiline_twoSpaces_raw() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseStringLiteral_multiline_untrimmed() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseStringLiteral_quoteAfterInterpolation() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseStringLiteral_single() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseStringLiteral_startsWithInterpolation() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseSuperConstructorInvocation_named() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseSuperConstructorInvocation_unnamed() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseSymbolLiteral_builtInIdentifier() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseSymbolLiteral_multiple() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseSymbolLiteral_operator() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseSymbolLiteral_single() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseSymbolLiteral_void() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseThrowExpression() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseThrowExpressionWithoutCascade() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseUnaryExpression_decrement_normal() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseUnaryExpression_decrement_super_propertyAccess() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseUnaryExpression_increment_normal() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseUnaryExpression_increment_super_index() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseUnaryExpression_increment_super_propertyAccess() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseUnaryExpression_minus_normal() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseUnaryExpression_minus_super() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseUnaryExpression_not_normal() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseUnaryExpression_not_super() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseUnaryExpression_tilda_normal() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseUnaryExpression_tilda_super() : void {
        throw 'from mixin';
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_parseAssignableExpression_expression_args_dot_typeArgumentComments() : void {
        super.test_parseAssignableExpression_expression_args_dot_typeArgumentComments();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_parseAssignableExpression_expression_args_dot_typeArguments() : void {
        super.test_parseAssignableExpression_expression_args_dot_typeArguments();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_parseCascadeSection_ia_typeArgumentComments() : void {
        super.test_parseCascadeSection_ia_typeArgumentComments();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_parseCascadeSection_ia_typeArguments() : void {
        super.test_parseCascadeSection_ia_typeArguments();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_parseCascadeSection_paa_typeArgumentComments() : void {
        super.test_parseCascadeSection_paa_typeArgumentComments();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_parseCascadeSection_paa_typeArguments() : void {
        super.test_parseCascadeSection_paa_typeArguments();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_parseCascadeSection_paapaa_typeArgumentComments() : void {
        super.test_parseCascadeSection_paapaa_typeArgumentComments();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_parseCascadeSection_paapaa_typeArguments() : void {
        super.test_parseCascadeSection_paapaa_typeArguments();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_parseExpression_assign_compound() : void {
        super.test_parseExpression_assign_compound();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_parseInstanceCreationExpression_type_named_typeArgumentComments() : void {
        super.test_parseInstanceCreationExpression_type_named_typeArgumentComments();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_parseInstanceCreationExpression_type_typeArguments_nullable() : void {
        super.test_parseInstanceCreationExpression_type_typeArguments_nullable();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_parseListLiteral_empty_oneToken_withComment() : void {
        super.test_parseListLiteral_empty_oneToken_withComment();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_parsePrimaryExpression_super() : void {
        super.test_parsePrimaryExpression_super();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_parseRelationalExpression_as_nullable() : void {
        super.test_parseRelationalExpression_as_nullable();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_parseRelationalExpression_is_nullable() : void {
        super.test_parseRelationalExpression_is_nullable();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_parseUnaryExpression_decrement_super() : void {
        super.test_parseUnaryExpression_decrement_super();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_parseUnaryExpression_decrement_super_withComment() : void {
        super.test_parseUnaryExpression_decrement_super_withComment();
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ExpressionParserTest_Fasta() {
    }
}

export namespace FormalParameterParserTest_Fasta {
    export type Constructors = FastaParserTestCase.Constructors | 'FormalParameterParserTest_Fasta';
    export type Interface = Omit<FormalParameterParserTest_Fasta, Constructors>;
}
@DartClass
@With(lib3.FormalParameterParserTestMixin)
export class FormalParameterParserTest_Fasta extends FastaParserTestCase implements lib3.FormalParameterParserTestMixin.Interface {
    @Abstract
    test_parseFormalParameter_covariant_final_named() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseFormalParameter_covariant_final_normal() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseFormalParameter_covariant_final_positional() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseFormalParameter_covariant_final_type_named() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseFormalParameter_covariant_final_type_normal() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseFormalParameter_covariant_final_type_positional() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseFormalParameter_covariant_type_function() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseFormalParameter_covariant_type_named() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseFormalParameter_covariant_type_normal() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseFormalParameter_covariant_type_positional() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseFormalParameter_covariant_var_named() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseFormalParameter_covariant_var_normal() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseFormalParameter_covariant_var_positional() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseFormalParameter_final_named() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseFormalParameter_final_normal() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseFormalParameter_final_positional() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseFormalParameter_final_type_named() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseFormalParameter_final_type_normal() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseFormalParameter_final_type_positional() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseFormalParameter_type_function() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseFormalParameter_type_named() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseFormalParameter_type_named_noDefault() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseFormalParameter_type_normal() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseFormalParameter_type_positional() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseFormalParameter_type_positional_noDefault() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseFormalParameter_var_named() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseFormalParameter_var_normal() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseFormalParameter_var_positional() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseFormalParameterList_empty() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseFormalParameterList_named_multiple() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseFormalParameterList_named_single() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseFormalParameterList_named_trailing_comma() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseFormalParameterList_normal_multiple() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseFormalParameterList_normal_named() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseFormalParameterList_normal_named_inFunctionType() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseFormalParameterList_normal_positional() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseFormalParameterList_normal_single() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseFormalParameterList_normal_single_Function() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseFormalParameterList_normal_single_trailing_comma() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseFormalParameterList_positional_multiple() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseFormalParameterList_positional_single() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseFormalParameterList_positional_trailing_comma() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseFormalParameterList_prefixedType() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseNormalFormalParameter_field_const_noType() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseNormalFormalParameter_field_const_type() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseNormalFormalParameter_field_final_noType() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseNormalFormalParameter_field_final_type() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseNormalFormalParameter_field_function_nested() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseNormalFormalParameter_field_function_noNested() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseNormalFormalParameter_field_function_withDocComment() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseNormalFormalParameter_field_noType() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseNormalFormalParameter_field_type() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseNormalFormalParameter_field_var() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseNormalFormalParameter_field_withDocComment() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseNormalFormalParameter_function_named() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseNormalFormalParameter_function_noType() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseNormalFormalParameter_function_noType_covariant() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseNormalFormalParameter_function_noType_typeParameterComments() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseNormalFormalParameter_function_noType_typeParameters() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseNormalFormalParameter_function_type() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseNormalFormalParameter_function_type_typeParameterComments() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseNormalFormalParameter_function_type_typeParameters() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseNormalFormalParameter_function_void() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseNormalFormalParameter_function_void_typeParameterComments() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseNormalFormalParameter_function_void_typeParameters() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseNormalFormalParameter_function_withDocComment() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseNormalFormalParameter_simple_const_noType() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseNormalFormalParameter_simple_const_type() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseNormalFormalParameter_simple_final_noType() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseNormalFormalParameter_simple_final_type() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseNormalFormalParameter_simple_noName() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseNormalFormalParameter_simple_noType() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseNormalFormalParameter_simple_noType_namedCovariant() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseNormalFormalParameter_simple_type() : void {
        throw 'from mixin';
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_parseFormalParameterList_prefixedType_partial() : void {
        super.test_parseFormalParameterList_prefixedType_partial();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_parseFormalParameterList_prefixedType_partial2() : void {
        super.test_parseFormalParameterList_prefixedType_partial2();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_parseNormalFormalParameter_function_noType_nullable() : void {
        super.test_parseNormalFormalParameter_function_noType_nullable();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_parseNormalFormalParameter_function_noType_typeParameters_nullable() : void {
        super.test_parseNormalFormalParameter_function_noType_typeParameters_nullable();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_parseNormalFormalParameter_function_type_nullable() : void {
        super.test_parseNormalFormalParameter_function_type_nullable();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_parseNormalFormalParameter_function_type_typeParameters_nullable() : void {
        super.test_parseNormalFormalParameter_function_type_typeParameters_nullable();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_parseNormalFormalParameter_function_void_nullable() : void {
        super.test_parseNormalFormalParameter_function_void_nullable();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_parseNormalFormalParameter_function_void_typeParameters_nullable() : void {
        super.test_parseNormalFormalParameter_function_void_typeParameters_nullable();
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    FormalParameterParserTest_Fasta() {
    }
}

export namespace StatementParserTest_Fasta {
    export type Constructors = FastaParserTestCase.Constructors | 'StatementParserTest_Fasta';
    export type Interface = Omit<StatementParserTest_Fasta, Constructors>;
}
@DartClass
@With(lib3.StatementParserTestMixin)
export class StatementParserTest_Fasta extends FastaParserTestCase implements lib3.StatementParserTestMixin.Interface {
    @Abstract
    test_parseAssertStatement() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseAssertStatement_messageLowPrecedence() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseAssertStatement_messageString() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseBlock_empty() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseBlock_nonEmpty() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseBreakStatement_label() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseDoStatement() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseEmptyStatement() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseForStatement_each_await() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseForStatement_each_identifier() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseForStatement_each_noType_metadata() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseForStatement_each_type() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseForStatement_each_var() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseForStatement_loop_c() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseForStatement_loop_cu() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseForStatement_loop_ecu() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseForStatement_loop_i() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseForStatement_loop_i_withMetadata() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseForStatement_loop_ic() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseForStatement_loop_icu() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseForStatement_loop_iicuu() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseForStatement_loop_iu() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseForStatement_loop_u() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseFunctionDeclarationStatement() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseFunctionDeclarationStatement_typeParameterComments() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseFunctionDeclarationStatement_typeParameters() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseFunctionDeclarationStatement_typeParameters_noReturnType() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseIfStatement_else_block() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseIfStatement_else_statement() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseIfStatement_noElse_block() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseIfStatement_noElse_statement() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseNonLabeledStatement_const_list_empty() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseNonLabeledStatement_const_list_nonEmpty() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseNonLabeledStatement_const_map_empty() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseNonLabeledStatement_const_map_nonEmpty() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseNonLabeledStatement_const_object() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseNonLabeledStatement_const_object_named_typeParameters() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseNonLabeledStatement_constructorInvocation() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseNonLabeledStatement_false() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseNonLabeledStatement_functionDeclaration() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseNonLabeledStatement_functionDeclaration_arguments() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseNonLabeledStatement_functionExpressionIndex() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseNonLabeledStatement_functionInvocation() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseNonLabeledStatement_invokeFunctionExpression() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseNonLabeledStatement_localFunction_gftReturnType() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseNonLabeledStatement_null() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseNonLabeledStatement_startingWithBuiltInIdentifier() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseNonLabeledStatement_true() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseNonLabeledStatement_typeCast() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseNonLabeledStatement_variableDeclaration_final_namedFunction() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseNonLabeledStatement_variableDeclaration_gftType() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseNonLabeledStatement_variableDeclaration_gftType_functionReturnType() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseNonLabeledStatement_variableDeclaration_gftType_gftReturnType() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseNonLabeledStatement_variableDeclaration_gftType_gftReturnType2() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseNonLabeledStatement_variableDeclaration_gftType_noReturnType() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseNonLabeledStatement_variableDeclaration_gftType_returnType() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseNonLabeledStatement_variableDeclaration_gftType_voidReturnType() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseStatement_function_gftReturnType() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseStatement_functionDeclaration_noReturnType() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseStatement_functionDeclaration_noReturnType_typeParameterComments() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseStatement_functionDeclaration_noReturnType_typeParameters() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseStatement_functionDeclaration_returnType() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseStatement_functionDeclaration_returnType_typeParameters() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseStatement_multipleLabels() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseStatement_noLabels() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseStatement_singleLabel() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseSwitchStatement_case() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseSwitchStatement_empty() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseSwitchStatement_labeledCase() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseSwitchStatement_labeledDefault() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseSwitchStatement_labeledStatementInCase() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseTryStatement_catch() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseTryStatement_finally() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseTryStatement_multiple() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseTryStatement_on() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseVariableDeclarationListAfterMetadata_const_noType() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseVariableDeclarationListAfterMetadata_const_type() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseVariableDeclarationListAfterMetadata_const_typeComment() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseVariableDeclarationListAfterMetadata_dynamic_typeComment() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseVariableDeclarationListAfterMetadata_final_noType() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseVariableDeclarationListAfterMetadata_final_type() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseVariableDeclarationListAfterMetadata_final_typeComment() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseVariableDeclarationListAfterMetadata_type_multiple() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseVariableDeclarationListAfterMetadata_type_single() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseVariableDeclarationListAfterMetadata_type_typeComment() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseVariableDeclarationListAfterMetadata_var_multiple() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseVariableDeclarationListAfterMetadata_var_single() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseVariableDeclarationListAfterMetadata_var_typeComment() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseVariableDeclarationStatementAfterMetadata_multiple() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseVariableDeclarationStatementAfterMetadata_single() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseWhileStatement() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseYieldStatement_each() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseYieldStatement_normal() : void {
        throw 'from mixin';
    }
    @Abstract
    _parseAsyncStatement(code : string,_namedArguments? : {isGenerator? : boolean}) : any {
        let {isGenerator} = Object.assign({
            "isGenerator" : false}, _namedArguments );
        throw 'from mixin';
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_parseBreakStatement_noLabel() : void {
        super.test_parseBreakStatement_noLabel();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_parseContinueStatement_label() : void {
        super.test_parseContinueStatement_label();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_parseContinueStatement_noLabel() : void {
        super.test_parseContinueStatement_noLabel();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_parseStatement_emptyTypeArgumentList() : void {
        super.test_parseStatement_emptyTypeArgumentList();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_parseTryStatement_catch_finally() : void {
        super.test_parseTryStatement_catch_finally();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_parseTryStatement_on_catch() : void {
        super.test_parseTryStatement_on_catch();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_parseTryStatement_on_catch_finally() : void {
        super.test_parseTryStatement_on_catch_finally();
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    StatementParserTest_Fasta() {
    }
}

export namespace TopLevelParserTest_Fasta {
    export type Constructors = FastaParserTestCase.Constructors | 'TopLevelParserTest_Fasta';
    export type Interface = Omit<TopLevelParserTest_Fasta, Constructors>;
}
@DartClass
@With(lib3.TopLevelParserTestMixin)
export class TopLevelParserTest_Fasta extends FastaParserTestCase implements lib3.TopLevelParserTestMixin.Interface {
    @Abstract
    test_function_literal_allowed_at_toplevel() : void {
        throw 'from mixin';
    }
    @Abstract
    test_function_literal_allowed_in_ArgumentList_in_ConstructorFieldInitializer() : void {
        throw 'from mixin';
    }
    @Abstract
    test_function_literal_allowed_in_IndexExpression_in_ConstructorFieldInitializer() : void {
        throw 'from mixin';
    }
    @Abstract
    test_function_literal_allowed_in_ListLiteral_in_ConstructorFieldInitializer() : void {
        throw 'from mixin';
    }
    @Abstract
    test_function_literal_allowed_in_MapLiteral_in_ConstructorFieldInitializer() : void {
        throw 'from mixin';
    }
    @Abstract
    test_function_literal_allowed_in_ParenthesizedExpression_in_ConstructorFieldInitializer() : void {
        throw 'from mixin';
    }
    @Abstract
    test_function_literal_allowed_in_StringInterpolation_in_ConstructorFieldInitializer() : void {
        throw 'from mixin';
    }
    @Abstract
    test_import_as_show() : void {
        throw 'from mixin';
    }
    @Abstract
    test_import_show_hide() : void {
        throw 'from mixin';
    }
    @Abstract
    test_import_withDocComment() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseClassDeclaration_abstract() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseClassDeclaration_empty() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseClassDeclaration_extends() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseClassDeclaration_extendsAndImplements() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseClassDeclaration_extendsAndWith() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseClassDeclaration_extendsAndWithAndImplements() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseClassDeclaration_implements() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseClassDeclaration_metadata() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseClassDeclaration_nonEmpty() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseClassDeclaration_typeAlias_implementsC() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseClassDeclaration_typeAlias_withB() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseClassDeclaration_typeParameters() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseClassDeclaration_withDocumentationComment() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseClassTypeAlias_withDocumentationComment() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCompilationUnit_abstractAsPrefix_parameterized() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCompilationUnit_directives_multiple() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCompilationUnit_directives_single() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCompilationUnit_empty() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCompilationUnit_operatorAsPrefix_parameterized() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCompilationUnit_script() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCompilationUnit_skipFunctionBody_withInterpolation() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCompilationUnit_topLevelDeclaration() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCompilationUnit_typedefAsPrefix() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCompilationUnitMember_abstractAsPrefix() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCompilationUnitMember_class() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCompilationUnitMember_classTypeAlias() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCompilationUnitMember_constVariable() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCompilationUnitMember_expressionFunctionBody_tokens() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCompilationUnitMember_finalVariable() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCompilationUnitMember_function_external_noType() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCompilationUnitMember_function_external_type() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCompilationUnitMember_function_generic_noReturnType() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCompilationUnitMember_function_generic_noReturnType_annotated() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCompilationUnitMember_function_generic_returnType() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCompilationUnitMember_function_generic_void() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCompilationUnitMember_function_gftReturnType() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCompilationUnitMember_function_noReturnType() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCompilationUnitMember_function_noType() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCompilationUnitMember_function_type() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCompilationUnitMember_function_void() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCompilationUnitMember_getter_external_noType() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCompilationUnitMember_getter_external_type() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCompilationUnitMember_getter_noType() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCompilationUnitMember_getter_type() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCompilationUnitMember_setter_external_noType() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCompilationUnitMember_setter_external_type() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCompilationUnitMember_setter_noType() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCompilationUnitMember_setter_type() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCompilationUnitMember_typeAlias_abstract() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCompilationUnitMember_typeAlias_generic() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCompilationUnitMember_typeAlias_implements() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCompilationUnitMember_typeAlias_noImplements() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCompilationUnitMember_typedef() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCompilationUnitMember_typedef_withDocComment() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCompilationUnitMember_typedVariable() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCompilationUnitMember_variable() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCompilationUnitMember_variable_gftType_gftReturnType() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCompilationUnitMember_variable_gftType_noReturnType() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCompilationUnitMember_variable_withDocumentationComment() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCompilationUnitMember_variableGet() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseCompilationUnitMember_variableSet() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseDirective_export() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseDirective_export_withDocComment() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseDirective_import() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseDirective_library() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseDirective_library_1_component() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseDirective_library_2_components() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseDirective_library_3_components() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseDirective_library_withDocumentationComment() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseDirective_part() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseDirective_part_of_1_component() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseDirective_part_of_2_components() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseDirective_part_of_3_components() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseDirective_part_of_withDocumentationComment() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseDirective_part_withDocumentationComment() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseDirective_partOf() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseDirectives_complete() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseDirectives_empty() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseDirectives_multiple() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseDirectives_script() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseDirectives_single() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseDirectives_topLevelDeclaration() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseEnumDeclaration_one() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseEnumDeclaration_trailingComma() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseEnumDeclaration_two() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseEnumDeclaration_withDocComment_onEnum() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseEnumDeclaration_withDocComment_onValue() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseExportDirective_configuration_multiple() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseExportDirective_configuration_single() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseExportDirective_hide() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseExportDirective_hide_show() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseExportDirective_noCombinator() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseExportDirective_show() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseExportDirective_show_hide() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseFunctionDeclaration_function() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseFunctionDeclaration_functionWithTypeParameters() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseFunctionDeclaration_functionWithTypeParameters_comment() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseFunctionDeclaration_getter() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseFunctionDeclaration_getter_generic_comment_returnType() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseFunctionDeclaration_setter() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseGenericTypeAlias_noTypeParameters() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseGenericTypeAlias_typeParameters() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseImportDirective_configuration_multiple() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseImportDirective_configuration_single() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseImportDirective_deferred() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseImportDirective_hide() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseImportDirective_noCombinator() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseImportDirective_prefix() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseImportDirective_prefix_hide_show() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseImportDirective_prefix_show_hide() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseImportDirective_show() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseLibraryDirective() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parsePartDirective() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseTypeAlias_function_noParameters() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseTypeAlias_function_noReturnType() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseTypeAlias_function_parameterizedReturnType() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseTypeAlias_function_parameters() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseTypeAlias_function_typeParameters() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseTypeAlias_function_voidReturnType() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseTypeAlias_genericFunction_noParameters() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseTypeAlias_genericFunction_noReturnType() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseTypeAlias_genericFunction_parameterizedReturnType() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseTypeAlias_genericFunction_parameters() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseTypeAlias_genericFunction_typeParameters() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseTypeAlias_genericFunction_typeParameters_noParameters() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseTypeAlias_genericFunction_typeParameters_noReturnType() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseTypeAlias_genericFunction_typeParameters_parameterizedReturnType() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseTypeAlias_genericFunction_typeParameters_parameters() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseTypeAlias_genericFunction_typeParameters_typeParameters() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseTypeAlias_genericFunction_typeParameters_voidReturnType() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseTypeAlias_genericFunction_voidReturnType() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseTypeAlias_genericFunction_withDocComment() : void {
        throw 'from mixin';
    }
    @Abstract
    test_parseTypeVariable_withDocumentationComment() : void {
        throw 'from mixin';
    }
    @Abstract
    _assertIsDeclarationName(name : any) : void {
        throw 'from mixin';
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_parseClassDeclaration_native() : void {
        super.test_parseClassDeclaration_native();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_parseCompilationUnit_builtIn_asFunctionName() : void {
        super.test_parseCompilationUnit_builtIn_asFunctionName();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_parseCompilationUnit_exportAsPrefix() : void {
        super.test_parseCompilationUnit_exportAsPrefix();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_parseCompilationUnit_exportAsPrefix_parameterized() : void {
        super.test_parseCompilationUnit_exportAsPrefix_parameterized();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_parseDirectives_mixed() : void {
        super.test_parseDirectives_mixed();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_parsePartOfDirective_name() : void {
        super.test_parsePartOfDirective_name();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    test_parsePartOfDirective_uri() : void {
        super.test_parsePartOfDirective_uri();
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    TopLevelParserTest_Fasta() {
    }
}

export class properties {
}
