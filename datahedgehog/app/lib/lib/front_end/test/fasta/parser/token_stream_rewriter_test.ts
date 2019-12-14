/** Library asset:datahedgehog_monitor/lib/lib/front_end/test/fasta/parser/token_stream_rewriter_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(TokenStreamRewriterTest_NoPrevious);
        defineReflectiveTests(TokenStreamRewriterTest_UsingPrevious);
    });
};
export namespace TokenStreamRewriterTest {
    export type Constructors = 'TokenStreamRewriterTest';
    export type Interface = Omit<TokenStreamRewriterTest, Constructors>;
}
@DartClass
export class TokenStreamRewriterTest {
    @AbstractProperty
    get setPrevious() : boolean{ throw 'abstract'}
    test_insert_at_end() : void {
        let a = this._makeToken(0,'a');
        let b = this._makeToken(1,'b');
        let eof = this._link(new core.DartList.literal(a));
        let rewriter = new bare.createInstance(any,null,a);
        rewriter.insertTokenBefore(b,eof);
        expect(rewriter.firstToken,same(a));
        expect(a.next,same(b));
        expect(b.next,same(eof));
        expect(eof.previous,same(b));
        expect(b.previous,same(a));
    }
    test_insert_at_start() : void {
        let a = this._makeToken(0,'a');
        let b = this._makeToken(1,'b');
        this._link(new core.DartList.literal(b));
        let rewriter = new bare.createInstance(any,null,b);
        rewriter.insertTokenBefore(a,b);
        expect(rewriter.firstToken,same(a));
        expect(a.next,same(b));
        expect(a.previous.next,same(a));
        expect(b.previous,same(a));
    }
    test_resume_at_previous_insertion_point() : void {
        let a = this._makeToken(0,'a');
        let b = this._makeToken(1,'b');
        let c = this._makeToken(2,'c');
        let d = this._makeToken(3,'d');
        let e = this._makeToken(4,'e');
        this._link(new core.DartList.literal(a,b,e));
        let rewriter = new bare.createInstance(any,null,a);
        rewriter.insertTokenBefore(d,e);
        expect(b.next,same(d));
        expect(d.next,same(e));
        a.next = null;
        rewriter.insertTokenBefore(c,d);
        expect(b.next,same(c));
        expect(c.next,same(d));
    }
    test_second_insertion_earlier_in_stream() : void {
        let a = this._makeToken(0,'a');
        let b = this._makeToken(1,'b');
        let c = this._makeToken(2,'c');
        let d = this._makeToken(3,'d');
        let e = this._makeToken(4,'e');
        this._link(new core.DartList.literal(a,c,e));
        let rewriter = new bare.createInstance(any,null,a);
        rewriter.insertTokenBefore(d,e);
        expect(c.next,same(d));
        expect(d.next,same(e));
        rewriter.insertTokenBefore(b,c);
        expect(a.next,same(b));
        expect(b.next,same(c));
    }
    test_skip_group() : void {
        let a = this._makeBeginGroupToken(0);
        let b = this._makeToken(1,'b');
        let c = this._makeToken(2,'c');
        let d = this._makeToken(3,'d');
        let e = this._makeToken(4,'e');
        a.endGroup = c;
        this._link(new core.DartList.literal(a,b,c,e));
        b.next = null;
        let rewriter = new bare.createInstance(any,null,a);
        rewriter.insertTokenBefore(d,e);
        expect(c.next,same(d));
        expect(d.next,same(e));
    }
    _link(tokens : core.DartIterable<any>) : any {
        let head : any = new bare.createInstance(any,null,-1);
        if (!this.setPrevious) head.previous = null;
        for(let token of tokens) {
            head.next = token;
            if (this.setPrevious) token.previous = head;
            head = token;
        }
        let eofOffset : number = op(Op.PLUS,head.charOffset,head.lexeme.length);
        if (eofOffset < 0) eofOffset = 0;
        let eof : any = new bare.createInstance(any,null,eofOffset);
        if (!this.setPrevious) eof.previous = null;
        head.next = eof;
        if (this.setPrevious) eof.previous = head;
        return eof;
    }
    _makeBeginGroupToken(charOffset : number) : any {
        return new bare.createInstance(any,null,TokenType.OPEN_PAREN,charOffset);
    }
    _makeToken(charOffset : number,text : string) : any {
        return new bare.createInstance(any,null,null,text,charOffset);
    }
    constructor() {
    }
    @defaultConstructor
    TokenStreamRewriterTest() {
    }
}

export namespace TokenStreamRewriterTest_NoPrevious {
    export type Constructors = TokenStreamRewriterTest.Constructors | 'TokenStreamRewriterTest_NoPrevious';
    export type Interface = Omit<TokenStreamRewriterTest_NoPrevious, Constructors>;
}
@DartClass
export class TokenStreamRewriterTest_NoPrevious extends TokenStreamRewriterTest {
    get setPrevious() : boolean {
        return false;
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    TokenStreamRewriterTest_NoPrevious() {
    }
}

export namespace TokenStreamRewriterTest_UsingPrevious {
    export type Constructors = TokenStreamRewriterTest.Constructors | 'TokenStreamRewriterTest_UsingPrevious';
    export type Interface = Omit<TokenStreamRewriterTest_UsingPrevious, Constructors>;
}
@DartClass
export class TokenStreamRewriterTest_UsingPrevious extends TokenStreamRewriterTest {
    get setPrevious() : boolean {
        return true;
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    TokenStreamRewriterTest_UsingPrevious() {
    }
}

export class properties {
}
