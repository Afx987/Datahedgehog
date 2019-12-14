/** Library asset:datahedgehog_monitor/lib/lib/kernel/test/type_parser.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts/dart/uri";

export var parseDartType : (type : string,lookupType : (name : string) => any) => any = (type : string,lookupType : (name : string) => any) : any =>  {
    return new DartTypeParser(type,lookupType).parseType();
};
export var main : (args : core.DartList<string>) => void = (args : core.DartList<string>) : void =>  {
    if (args.length != 1) {
        core.print('Usage: type_parser TYPE');
    }
    let environment = new LazyTypeEnvironment();
    let type = parseDartType(args[0],environment.lookup.bind(environment));
    let buffer = new core.DartStringBuffer();
    new bare.createInstance(any,null,buffer).writeType(type);
    core.print(buffer);
};
export namespace Token {
    export type Constructors = 'Token';
    export type Interface = Omit<Token, Constructors>;
}
@DartClass
export class Token {
    private static __$Eof : number;
    static get Eof() : number { 
        if (this.__$Eof===undefined) {
            this.__$Eof = 0;
        }
        return this.__$Eof;
    }

    private static __$Name : number;
    static get Name() : number { 
        if (this.__$Name===undefined) {
            this.__$Name = 1;
        }
        return this.__$Name;
    }

    private static __$Comma : number;
    static get Comma() : number { 
        if (this.__$Comma===undefined) {
            this.__$Comma = 2;
        }
        return this.__$Comma;
    }

    private static __$LeftAngle : number;
    static get LeftAngle() : number { 
        if (this.__$LeftAngle===undefined) {
            this.__$LeftAngle = 3;
        }
        return this.__$LeftAngle;
    }

    private static __$RightAngle : number;
    static get RightAngle() : number { 
        if (this.__$RightAngle===undefined) {
            this.__$RightAngle = 4;
        }
        return this.__$RightAngle;
    }

    private static __$LeftParen : number;
    static get LeftParen() : number { 
        if (this.__$LeftParen===undefined) {
            this.__$LeftParen = 5;
        }
        return this.__$LeftParen;
    }

    private static __$RightParen : number;
    static get RightParen() : number { 
        if (this.__$RightParen===undefined) {
            this.__$RightParen = 6;
        }
        return this.__$RightParen;
    }

    private static __$LeftBracket : number;
    static get LeftBracket() : number { 
        if (this.__$LeftBracket===undefined) {
            this.__$LeftBracket = 7;
        }
        return this.__$LeftBracket;
    }

    private static __$RightBracket : number;
    static get RightBracket() : number { 
        if (this.__$RightBracket===undefined) {
            this.__$RightBracket = 8;
        }
        return this.__$RightBracket;
    }

    private static __$LeftBrace : number;
    static get LeftBrace() : number { 
        if (this.__$LeftBrace===undefined) {
            this.__$LeftBrace = 9;
        }
        return this.__$LeftBrace;
    }

    private static __$RightBrace : number;
    static get RightBrace() : number { 
        if (this.__$RightBrace===undefined) {
            this.__$RightBrace = 10;
        }
        return this.__$RightBrace;
    }

    private static __$Arrow : number;
    static get Arrow() : number { 
        if (this.__$Arrow===undefined) {
            this.__$Arrow = 11;
        }
        return this.__$Arrow;
    }

    private static __$Colon : number;
    static get Colon() : number { 
        if (this.__$Colon===undefined) {
            this.__$Colon = 12;
        }
        return this.__$Colon;
    }

    private static __$Invalid : number;
    static get Invalid() : number { 
        if (this.__$Invalid===undefined) {
            this.__$Invalid = 100;
        }
        return this.__$Invalid;
    }

    constructor() {
    }
    @defaultConstructor
    Token() {
    }
}

export namespace DartTypeParser {
    export type Constructors = 'DartTypeParser';
    export type Interface = Omit<DartTypeParser, Constructors>;
}
@DartClass
export class DartTypeParser {
    string : string;

    index : number;

    tokenText : string;

    environment : (name : string) => any;

    localTypeParameters : core.DartMap<string,any>;

    constructor(string : string,environment : (name : string) => any) {
    }
    @defaultConstructor
    DartTypeParser(string : string,environment : (name : string) => any) {
        this.index = 0;
        this.localTypeParameters = new core.DartMap.literal([
        ]);
        this.string = string;
        this.environment = environment;
    }
    lookupType(name : string) : any {
        return (this.localTypeParameters.get(name) || this.environment(name));
    }
    isIdentifierChar(charCode : number) : boolean {
        return 65 <= charCode && charCode <= 90 || 97 <= charCode && charCode <= 122 || charCode == 95 || charCode == 36;
    }
    isWhitespaceChar(charCode : number) : boolean {
        return charCode == 32;
    }
    next() : number {
        return new core.DartString(this.string).codeUnitAt(this.index++);
    }
    peek() : number {
        return this.index < new core.DartString(this.string).length ? new core.DartString(this.string).codeUnitAt(this.index) : 0;
    }
    skipWhitespace() : void {
        while (this.isWhitespaceChar(this.peek())){
            this.next();
        }
    }
    scanToken() : number {
        this.skipWhitespace();
        if (this.index >= new core.DartString(this.string).length) return Token.Eof;
        let startIndex : number = this.index;
        let x : number = this.next();
        if (this.isIdentifierChar(x)) {
            while (this.isIdentifierChar(this.peek())){
                x = this.next();
            }
            this.tokenText = new core.DartString(this.string).substring(startIndex,this.index);
            return Token.Name;
        }else {
            this.tokenText = this.string[this.index - 1];
            let type : number = this.getTokenType(x);
            return type;
        }
    }
    peekToken() : number {
        this.skipWhitespace();
        if (this.index >= new core.DartString(this.string).length) return Token.Eof;
        return this.getTokenType(this.peek());
    }
    getTokenType(character : number) : number {
        switch (character) {
            case 44:
                return Token.Comma;
            case 60:
                return Token.LeftAngle;
            case 62:
                return Token.RightAngle;
            case 40:
                return Token.LeftParen;
            case 41:
                return Token.RightParen;
            case 91:
                return Token.LeftBracket;
            case 92:
                return Token.RightBracket;
            case 123:
                return Token.LeftBrace;
            case 125:
                return Token.RightBrace;
            case 58:
                return Token.Colon;
            default:
                if (this.isIdentifierChar(character)) return Token.Name;
                return Token.Invalid;
        }
    }
    consumeString(text : string) : void {
        this.skipWhitespace();
        if (new core.DartString(this.string).startsWith(text,this.index)) {
            this.index += new core.DartString(text).length;
        }else {
            return this.fail(`Expected token ${text}`);
        }
    }
    parseType() : any {
        let token : number = this.peekToken();
        switch (token) {
            case Token.Name:
                this.scanToken();
                let name : string = this.tokenText;
                if (name == '_') return new bare.createInstance(any,null);
                if (name == 'void') return new bare.createInstance(any,null);
                if (name == 'dynamic') return new bare.createInstance(any,null);
                let target = this.lookupType(name);
                if (op(Op.EQUALS,target,null)) {
                    return this.fail(`Unresolved type ${name}`);
                }else if (is(target, any)) {
                    return new bare.createInstance(any,null,target,this.parseOptionalTypeArgumentList());
                }else if (is(target, any)) {
                    return new bare.createInstance(any,null,target,this.parseOptionalTypeArgumentList());
                }else if (is(target, any)) {
                    if (this.peekToken() == Token.LeftAngle) {
                        return this.fail('Attempt to apply type arguments to a type variable');
                    }
                    return new bare.createInstance(any,null,target);
                }
                return this.fail(`Unexpected lookup result for ${name}: ${target}`);
            case Token.LeftParen:
                let parameters : core.DartList<any> = new core.DartList.literal<any>();
                let namedParameters : core.DartList<any> = new core.DartList.literal<any>();
                this.parseParameterList(parameters,namedParameters);
                this.consumeString('=>');
                let returnType = this.parseType();
                return new bare.createInstance(any,null,parameters,returnType,{
                    namedParameters : namedParameters});
            case Token.LeftAngle:
                let typeParameters = this.parseAndPushTypeParameterList();
                let parameters : core.DartList<any> = new core.DartList.literal<any>();
                let namedParameters : core.DartList<any> = new core.DartList.literal<any>();
                this.parseParameterList(parameters,namedParameters);
                this.consumeString('=>');
                let returnType = this.parseType();
                this.popTypeParameters(typeParameters);
                return new bare.createInstance(any,null,parameters,returnType,{
                    typeParameters : typeParameters,namedParameters : namedParameters});
            default:
                return this.fail(`Unexpected token: ${this.tokenText}`);
        }
    }
    parseParameterList(positional : core.DartList<any>,named : core.DartList<any>) : void {
        let token : number = this.scanToken();
        /* TODO (AssertStatementImpl) : assert (token == Token.LeftParen); */;
        token = this.peekToken();
        while (token != Token.RightParen){
            let type = this.parseType();
            token = this.scanToken();
            if (token == Token.Colon) {
                let name : string = this.convertTypeToParameterName(type);
                named.add(new bare.createInstance(any,null,name,this.parseType()));
                token = this.scanToken();
            }else {
                positional.add(type);
            }
            if (token != Token.Comma && token != Token.RightParen) {
                return this.fail('Unterminated parameter list');
            }
        }
        named.sort();
    }
    convertTypeToParameterName(type : any) : string {
        if (is(type, any) && type.typeArguments.isEmpty) {
            return type.classNode.name;
        }else if (is(type, any)) {
            return type.parameter.name;
        }else {
            return this.fail(`Unexpected colon after ${type}`);
        }
    }
    parseTypeList(open : number,close : number) : core.DartList<any> {
        let token : number = this.scanToken();
        /* TODO (AssertStatementImpl) : assert (token == open); */;
        let types : core.DartList<any> = new core.DartList.literal<any>();
        token = this.peekToken();
        while (token != close){
            types.add(this.parseType());
            token = this.scanToken();
            if (token != Token.Comma && token != close) {
                throw this.fail('Unterminated list');
            }
        }
        return types;
    }
    parseOptionalList(open : number,close : number) : core.DartList<any> {
        if (this.peekToken() != open) return null;
        return this.parseTypeList(open,close);
    }
    parseOptionalTypeArgumentList() : core.DartList<any> {
        return this.parseOptionalList(Token.LeftAngle,Token.RightAngle);
    }
    popTypeParameters(typeParameters : core.DartList<any>) : void {
        typeParameters.forEach(this.localTypeParameters.remove.bind(this.localTypeParameters));
    }
    parseAndPushTypeParameterList() : core.DartList<any> {
        let token : number = this.scanToken();
        /* TODO (AssertStatementImpl) : assert (token == Token.LeftAngle); */;
        let typeParameters : core.DartList<any> = new core.DartList.literal<any>();
        token = this.peekToken();
        while (token != Token.RightAngle){
            typeParameters.add(this.parseAndPushTypeParameter());
            token = this.scanToken();
            if (token != Token.Comma && token != Token.RightAngle) {
                throw this.fail('Unterminated type parameter list');
            }
        }
        return typeParameters;
    }
    parseAndPushTypeParameter() : any {
        let nameTok = this.scanToken();
        if (nameTok != Token.Name) return this.fail('Expected a name');
        let typeParameter = new bare.createInstance(any,null,this.tokenText);
        if (this.localTypeParameters.containsKey(typeParameter.name)) {
            return this.fail('Shadowing a type parameter is not allowed');
        }
        this.localTypeParameters.set(typeParameter.name,typeParameter);
        let next = this.peekToken();
        if (next == Token.Colon) {
            this.scanToken();
            typeParameter.bound = this.parseType();
        }else {
            typeParameter.bound = new bare.createInstance(any,null,this.lookupType('Object'));
        }
        return typeParameter;
    }
    fail(message : string) : any {
        throw `${message} at index ${this.index}`;
    }
}

export namespace LazyTypeEnvironment {
    export type Constructors = 'LazyTypeEnvironment';
    export type Interface = Omit<LazyTypeEnvironment, Constructors>;
}
@DartClass
export class LazyTypeEnvironment {
    classes : core.DartMap<string,any>;

    typeParameters : core.DartMap<string,any>;

    dummyLibrary : any;

    program : any;

    constructor() {
    }
    @defaultConstructor
    LazyTypeEnvironment() {
        this.classes = new core.DartMap.literal([
        ]);
        this.typeParameters = new core.DartMap.literal([
        ]);
        this.program = new bare.createInstance(any,null);
        this.dummyLibrary = new bare.createInstance(any,null,lib3.Uri.parse('file://dummy.dart'));
        this.program.libraries.add(((_) : any =>  {
            {
                _.parent = this.program;
                return _;
            }
        })(this.dummyLibrary));
        this.dummyLibrary.name = 'lib';
    }
    lookup(name : string) : any {
        return new core.DartString(name).length == 1 ? this.typeParameters.putIfAbsent(name,() =>  {
            return new bare.createInstance(any,null,name);
        }) : this.classes.putIfAbsent(name,() =>  {
            return this.makeClass(name);
        });
    }
    makeClass(name : string) : any {
        let class_ = new bare.createInstance(any,null,{
            name : name});
        this.dummyLibrary.addClass(class_);
        return class_;
    }
    clearTypeParameters() : void {
        this.typeParameters.clear();
    }
    parse(type : string) : any {
        return parseDartType(type,this.lookup.bind(this));
    }
    parseSuper(type : string) : any {
        let interfaceType : any = this.parse(type);
        return new bare.createInstance(any,null,interfaceType.classNode,interfaceType.typeArguments);
    }
    parseFresh(type : string) : any {
        this.clearTypeParameters();
        return this.parse(type);
    }
    getTypeParameter(name : string) : any {
        if (new core.DartString(name).length != 1) throw 'Type parameter names must have length 1';
        return this.lookup(name);
    }
}

export class properties {
}
