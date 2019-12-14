/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/fasta/parser/token_stream_rewriter.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace TokenStreamRewriter {
    export type Constructors = 'TokenStreamRewriter';
    export type Interface = Omit<TokenStreamRewriter, Constructors>;
}
@DartClass
export class TokenStreamRewriter {
    _head : any;

    _lastPreviousToken : any;

    constructor(firstToken : any) {
    }
    @defaultConstructor
    TokenStreamRewriter(firstToken : any) {
        this._head = (firstToken.previous || (((_) : any =>  {
            {
                _.next = firstToken;
                return _;
            }
        })(new bare.createInstance(any,null,-1))));
    }
    get firstToken() : any {
        return this._head.next;
    }
    insertTokenBefore(newToken : any,insertionPoint : any) : void {
        let previous : any = this._findPreviousToken(insertionPoint);
        this._lastPreviousToken = previous;
        newToken.next = insertionPoint;
        previous.next = newToken;
        {
            insertionPoint.previous = newToken;
            newToken.previous = previous;
        }
    }
    _findPreviousToken(target : any) : any {
        if (target.previous != null) {
            return target.previous;
        }
        if (this._lastPreviousToken != null && op(Op.GEQ,target.charOffset,this._lastPreviousToken.charOffset)) {
            let previous : any = this._scanForPreviousToken(target,this._lastPreviousToken);
            if (previous != null) return previous;
        }
        let previous : any = this._scanForPreviousToken(target,this._head);
        if (op(Op.EQUALS,previous,null)) {
            internalError('Could not find previous token');
        }
        return previous;
    }
    _scanForPreviousToken(target : any,pos : any) : any {
        while (!core.identical(pos.next,target)){
            let nextPos : any;
            if (is(pos, any) && pos.endGroup != null && op(Op.LT,pos.endGroup.charOffset,target.charOffset)) {
                nextPos = pos.endGroup;
            }else {
                nextPos = pos.next;
                if (op(Op.EQUALS,nextPos,null) || op(Op.GT,nextPos.charOffset,target.charOffset)) {
                    return null;
                }
            }
            pos = nextPos;
        }
        return pos;
    }
}

export class properties {
}
