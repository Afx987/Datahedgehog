/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/fasta/scanner/token.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../../scanner/token";
import * as lib4 from "./token_constants";
import * as lib5 from "./string_canonicalizer";

export var isUserDefinableOperator : (value : string) => boolean = (value : string) : boolean =>  {
    return isBinaryOperator(value) || isMinusOperator(value) || isTernaryOperator(value) || isUnaryOperator(value);
};
export var isUnaryOperator : (value : string) => boolean = (value : string) : boolean =>  {
    return core.identical(value,"~");
};
export var isBinaryOperator : (value : string) => boolean = (value : string) : boolean =>  {
    return core.identical(value,"==") || core.identical(value,"[]") || core.identical(value,"*") || core.identical(value,"/") || core.identical(value,"%") || core.identical(value,"~/") || core.identical(value,"+") || core.identical(value,"<<") || core.identical(value,">>") || core.identical(value,">=") || core.identical(value,">") || core.identical(value,"<=") || core.identical(value,"<") || core.identical(value,"&") || core.identical(value,"^") || core.identical(value,"|");
};
export var isTernaryOperator : (value : string) => boolean = (value : string) : boolean =>  {
    return core.identical(value,"[]=");
};
export var isMinusOperator : (value : string) => boolean = (value : string) : boolean =>  {
    return core.identical(value,"-");
};
export namespace SymbolToken {
    export type Constructors = lib3.TokenWithComment.Constructors | 'SymbolToken';
    export type Interface = Omit<SymbolToken, Constructors>;
}
@DartClass
export class SymbolToken extends lib3.TokenWithComment {
    constructor(type : lib3.TokenType,offset : number,precedingComments? : lib3.CommentToken) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SymbolToken(type : lib3.TokenType,offset : number,precedingComments? : lib3.CommentToken) {
        super.TokenWithComment(type,offset,precedingComments);
    }
    @namedFactory
    static $eof(charOffset : number,precedingComments? : lib3.CommentToken) : SymbolToken {
        let eof = new SyntheticSymbolToken(lib3.TokenType.EOF,charOffset,precedingComments);
        eof.previous = eof;
        eof.next = eof;
        return eof;
    }
    static eof : new(charOffset : number,precedingComments : lib3.CommentToken) => SymbolToken;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get lexeme() : string {
        return this.type.value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `SymbolToken(${this.isEof ? '-eof-' : this.lexeme})`;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    copy() : lib3.Token {
        return this.isEof ? new SymbolToken.eof(this.charOffset,this.precedingComments) : new SymbolToken(this.type,this.charOffset,this.precedingComments);
    }
}

export namespace StringToken {
    export type Constructors = lib3.TokenWithComment.Constructors | 'fromString' | 'fromSubstring' | 'fromUtf8Bytes' | '_';
    export type Interface = Omit<StringToken, Constructors>;
}
@DartClass
@Implements(lib3.StringTokenWithComment)
export class StringToken extends lib3.TokenWithComment implements lib3.StringTokenWithComment.Interface {
    private static __$LAZY_THRESHOLD : number;
    static get LAZY_THRESHOLD() : number { 
        if (this.__$LAZY_THRESHOLD===undefined) {
            this.__$LAZY_THRESHOLD = 4;
        }
        return this.__$LAZY_THRESHOLD;
    }

    valueOrLazySubstring;

    @namedConstructor
    fromString(type : lib3.TokenType,value : string,charOffset : number,_namedArguments? : {canonicalize? : boolean,precedingComments? : lib3.CommentToken}) {
        let {canonicalize,precedingComments} = Object.assign({
            "canonicalize" : false}, _namedArguments );
        this.valueOrLazySubstring = StringToken.canonicalizedString(value,0,new core.DartString(value).length,canonicalize);
        super.TokenWithComment(type,charOffset,precedingComments);
    }
    static fromString : new(type : lib3.TokenType,value : string,charOffset : number,_namedArguments? : {canonicalize? : boolean,precedingComments? : lib3.CommentToken}) => StringToken;

    @namedConstructor
    fromSubstring(type : lib3.TokenType,data : string,start : number,end : number,charOffset : number,_namedArguments? : {canonicalize? : boolean,precedingComments? : lib3.CommentToken}) {
        let {canonicalize,precedingComments} = Object.assign({
            "canonicalize" : false}, _namedArguments );
        super.TokenWithComment(type,charOffset,precedingComments);
        let length : number = end - start;
        if (length <= StringToken.LAZY_THRESHOLD) {
            this.valueOrLazySubstring = StringToken.canonicalizedString(data,start,end,canonicalize);
        }else {
            this.valueOrLazySubstring = new _LazySubstring(data,start,length,canonicalize);
        }
    }
    static fromSubstring : new(type : lib3.TokenType,data : string,start : number,end : number,charOffset : number,_namedArguments? : {canonicalize? : boolean,precedingComments? : lib3.CommentToken}) => StringToken;

    @namedConstructor
    fromUtf8Bytes(type : lib3.TokenType,data : core.DartList<number>,start : number,end : number,asciiOnly : boolean,charOffset : number,_namedArguments? : {precedingComments? : lib3.CommentToken}) {
        let {precedingComments} = Object.assign({
        }, _namedArguments );
        super.TokenWithComment(type,charOffset,precedingComments);
        let length : number = end - start;
        if (length <= StringToken.LAZY_THRESHOLD) {
            this.valueOrLazySubstring = StringToken.decodeUtf8(data,start,end,asciiOnly);
        }else {
            this.valueOrLazySubstring = new _LazySubstring(data,start,length,asciiOnly);
        }
    }
    static fromUtf8Bytes : new(type : lib3.TokenType,data : core.DartList<number>,start : number,end : number,asciiOnly : boolean,charOffset : number,_namedArguments? : {precedingComments? : lib3.CommentToken}) => StringToken;

    @namedConstructor
    _(type : lib3.TokenType,valueOrLazySubstring : any,charOffset : number,precedingComments? : lib3.CommentToken) {
        super.TokenWithComment(type,charOffset,precedingComments);
        this.valueOrLazySubstring = valueOrLazySubstring;
    }
    static _ : new(type : lib3.TokenType,valueOrLazySubstring : any,charOffset : number,precedingComments : lib3.CommentToken) => StringToken;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get lexeme() : string {
        if (is(this.valueOrLazySubstring, "string")) {
            return this.valueOrLazySubstring;
        }else {
            /* TODO (AssertStatementImpl) : assert (valueOrLazySubstring is _LazySubstring); */;
            let data = this.valueOrLazySubstring.data;
            let start : number = this.valueOrLazySubstring.start;
            let end : number = start + this.valueOrLazySubstring.length;
            if (is(data, "string")) {
                this.valueOrLazySubstring = StringToken.canonicalizedString(data,start,end,this.valueOrLazySubstring.boolValue);
            }else {
                this.valueOrLazySubstring = StringToken.decodeUtf8(data,start,end,this.valueOrLazySubstring.boolValue);
            }
            return this.valueOrLazySubstring;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isIdentifier() : boolean {
        return core.identical(this.kind,lib4.properties.IDENTIFIER_TOKEN);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `StringToken(${this.lexeme})`;
    }
    private static __$canonicalizer : lib5.StringCanonicalizer;
    static get canonicalizer() : lib5.StringCanonicalizer { 
        if (this.__$canonicalizer===undefined) {
            this.__$canonicalizer = new lib5.StringCanonicalizer();
        }
        return this.__$canonicalizer;
    }
    static set canonicalizer(__$value : lib5.StringCanonicalizer)  { 
        this.__$canonicalizer = __$value;
    }

    static canonicalizedString(s : string,start : number,end : number,canonicalize : boolean) : string {
        if (!canonicalize) return s;
        return StringToken.canonicalizer.canonicalize(s,start,end,false);
    }
    static decodeUtf8(data : core.DartList<number>,start : number,end : number,asciiOnly : boolean) : string {
        return StringToken.canonicalizer.canonicalize(data,start,end,asciiOnly);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    copy() : lib3.Token {
        return new StringToken._(this.type,this.valueOrLazySubstring,this.charOffset,this.precedingComments);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    value() : string {
        return this.lexeme;
    }
}

export namespace _LazySubstring {
    export type Constructors = 'internal';
    export type Interface = Omit<_LazySubstring, Constructors>;
}
@DartClass
export class _LazySubstring {
    @AbstractProperty
    get data(){ throw 'abstract'}
    @AbstractProperty
    get start() : number{ throw 'abstract'}
    @AbstractProperty
    get length() : number{ throw 'abstract'}
    @AbstractProperty
    get boolValue() : boolean{ throw 'abstract'}
    @namedConstructor
    internal() {
    }
    static internal : new() => _LazySubstring;

    constructor(data : any,start : number,length : number,b : boolean) {
    }
    @defaultFactory
    static $_LazySubstring(data : any,start : number,length : number,b : boolean) : _LazySubstring {
        if (start < 1048576 && length < 512) {
            let fields : number = (start << 9);
            fields = fields | length;
            fields = fields << 1;
            if (b) fields |= 1;
            return new _CompactLazySubstring(data,fields);
        }else {
            return new _FullLazySubstring(data,start,length,b);
        }
    }
}

export namespace SyntheticSymbolToken {
    export type Constructors = SymbolToken.Constructors | 'SyntheticSymbolToken';
    export type Interface = Omit<SyntheticSymbolToken, Constructors>;
}
@DartClass
export class SyntheticSymbolToken extends SymbolToken {
    constructor(type : lib3.TokenType,charOffset : number,precedingComments? : lib3.CommentToken) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SyntheticSymbolToken(type : lib3.TokenType,charOffset : number,precedingComments? : lib3.CommentToken) {
        super.SymbolToken(type,charOffset,precedingComments);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get length() : number {
        return 0;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    copy() : lib3.Token {
        return this.isEof ? new SymbolToken.eof(this.charOffset,this.precedingComments) : new SyntheticSymbolToken(this.type,this.charOffset,this.precedingComments);
    }
}

export namespace BeginGroupToken {
    export type Constructors = SymbolToken.Constructors | 'BeginGroupToken';
    export type Interface = Omit<BeginGroupToken, Constructors>;
}
@DartClass
@Implements(lib3.BeginTokenWithComment)
export class BeginGroupToken extends SymbolToken implements lib3.BeginTokenWithComment.Interface {
    endGroup : lib3.Token;

    constructor(type : lib3.TokenType,charOffset : number,precedingComments? : lib3.CommentToken) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    BeginGroupToken(type : lib3.TokenType,charOffset : number,precedingComments? : lib3.CommentToken) {
        super.SymbolToken(type,charOffset,precedingComments);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get endToken() : lib3.Token {
        return this.endGroup;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    set endToken(token : lib3.Token) {
        this.endGroup = token;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    copy() : lib3.Token {
        return new BeginGroupToken(this.type,this.charOffset,this.precedingComments);
    }
}

export namespace SyntheticStringToken {
    export type Constructors = StringToken.Constructors | 'SyntheticStringToken';
    export type Interface = Omit<SyntheticStringToken, Constructors>;
}
@DartClass
@Implements(lib3.SyntheticStringToken)
export class SyntheticStringToken extends StringToken implements lib3.SyntheticStringToken.Interface {
    constructor(type : lib3.TokenType,value : string,offset : number,precedingComments? : lib3.CommentToken) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SyntheticStringToken(type : lib3.TokenType,value : string,offset : number,precedingComments? : lib3.CommentToken) {
        super._(type,value,offset,precedingComments);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get length() : number {
        return 0;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    copy() : lib3.Token {
        return new SyntheticStringToken(this.type,this.valueOrLazySubstring,this.offset,this.precedingComments);
    }
}

export namespace CommentToken {
    export type Constructors = StringToken.Constructors | 'fromSubstring' | 'fromString' | 'fromUtf8Bytes' | '_';
    export type Interface = Omit<CommentToken, Constructors>;
}
@DartClass
@Implements(lib3.CommentToken)
export class CommentToken extends StringToken implements lib3.CommentToken.Interface {
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    parent : lib3.TokenWithComment;

    @namedConstructor
    fromSubstring(type : lib3.TokenType,data : string,start : number,end : number,charOffset : number,_namedArguments? : {canonicalize? : boolean}) {
        let {canonicalize} = Object.assign({
            "canonicalize" : false}, _namedArguments );
        super.fromSubstring(type,data,start,end,charOffset,{
            canonicalize : canonicalize});
    }
    static fromSubstring : new(type : lib3.TokenType,data : string,start : number,end : number,charOffset : number,_namedArguments? : {canonicalize? : boolean}) => CommentToken;

    @namedConstructor
    fromString(type : lib3.TokenType,lexeme : string,charOffset : number) {
        super.fromString(type,lexeme,charOffset);
    }
    static fromString : new(type : lib3.TokenType,lexeme : string,charOffset : number) => CommentToken;

    @namedConstructor
    fromUtf8Bytes(type : lib3.TokenType,data : core.DartList<number>,start : number,end : number,asciiOnly : boolean,charOffset : number) {
        super.fromUtf8Bytes(type,data,start,end,asciiOnly,charOffset);
    }
    static fromUtf8Bytes : new(type : lib3.TokenType,data : core.DartList<number>,start : number,end : number,asciiOnly : boolean,charOffset : number) => CommentToken;

    @namedConstructor
    _(type : lib3.TokenType,valueOrLazySubstring : any,charOffset : number) {
        super._(type,valueOrLazySubstring,charOffset);
    }
    static _ : new(type : lib3.TokenType,valueOrLazySubstring : any,charOffset : number) => CommentToken;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    copy() : CommentToken {
        return new CommentToken._(this.type,this.valueOrLazySubstring,this.charOffset);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    remove() : void {
        if (this.previous != null) {
            this.previous.setNextWithoutSettingPrevious(this.next);
            ((t)=>(!!t)?t.previous:null)(this.next) = this.previous;
        }else {
            /* TODO (AssertStatementImpl) : assert (parent.precedingComments == this); */;
            this.parent.precedingComments = this.next as CommentToken;
        }
    }
}

export namespace _CompactLazySubstring {
    export type Constructors = _LazySubstring.Constructors | '_CompactLazySubstring';
    export type Interface = Omit<_CompactLazySubstring, Constructors>;
}
@DartClass
export class _CompactLazySubstring extends _LazySubstring {
    data;

    fields : number;

    constructor(data : any,fields : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _CompactLazySubstring(data : any,fields : number) {
        super.internal();
        this.data = data;
        this.fields = fields;
    }
    get start() : number {
        return this.fields >> 10;
    }
    get length() : number {
        return (this.fields >> 1) & 511;
    }
    get boolValue() : boolean {
        return (this.fields & 1) == 1;
    }
}

export namespace _FullLazySubstring {
    export type Constructors = _LazySubstring.Constructors | '_FullLazySubstring';
    export type Interface = Omit<_FullLazySubstring, Constructors>;
}
@DartClass
export class _FullLazySubstring extends _LazySubstring {
    data;

    start : number;

    length : number;

    boolValue : boolean;

    constructor(data : any,start : number,length : number,boolValue : boolean) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _FullLazySubstring(data : any,start : number,length : number,boolValue : boolean) {
        super.internal();
        this.data = data;
        this.start = start;
        this.length = length;
        this.boolValue = boolValue;
    }
}

export namespace DartDocToken {
    export type Constructors = CommentToken.Constructors | 'fromSubstring' | 'fromUtf8Bytes' | '_';
    export type Interface = Omit<DartDocToken, Constructors>;
}
@DartClass
@Implements(lib3.DocumentationCommentToken)
export class DartDocToken extends CommentToken implements lib3.DocumentationCommentToken.Interface {
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    references : core.DartList<lib3.Token>;

    @namedConstructor
    fromSubstring(type : lib3.TokenType,data : string,start : number,end : number,charOffset : number,_namedArguments? : {canonicalize? : boolean}) {
        let {canonicalize} = Object.assign({
            "canonicalize" : false}, _namedArguments );
        this.references = new core.DartList.literal<lib3.Token>();
        super.fromSubstring(type,data,start,end,charOffset,{
            canonicalize : canonicalize});
    }
    static fromSubstring : new(type : lib3.TokenType,data : string,start : number,end : number,charOffset : number,_namedArguments? : {canonicalize? : boolean}) => DartDocToken;

    @namedConstructor
    fromUtf8Bytes(type : lib3.TokenType,data : core.DartList<number>,start : number,end : number,asciiOnly : boolean,charOffset : number) {
        this.references = new core.DartList.literal<lib3.Token>();
        super.fromUtf8Bytes(type,data,start,end,asciiOnly,charOffset);
    }
    static fromUtf8Bytes : new(type : lib3.TokenType,data : core.DartList<number>,start : number,end : number,asciiOnly : boolean,charOffset : number) => DartDocToken;

    @namedConstructor
    _(type : lib3.TokenType,valueOrLazySubstring : any,charOffset : number) {
        this.references = new core.DartList.literal<lib3.Token>();
        super._(type,valueOrLazySubstring,charOffset);
    }
    static _ : new(type : lib3.TokenType,valueOrLazySubstring : any,charOffset : number) => DartDocToken;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    copy() : DartDocToken {
        let copy : DartDocToken = new DartDocToken._(this.type,this.valueOrLazySubstring,this.charOffset);
        this.references.forEach((ref : any) =>  {
            return copy.references.add(ref.copy());
        });
        return copy;
    }
}

export class properties {
}
