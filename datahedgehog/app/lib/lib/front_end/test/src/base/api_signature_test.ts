/** Library asset:datahedgehog_monitor/lib/lib/front_end/test/src/base/api_signature_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(ApiSignatureTest);
    });
};
export namespace ApiSignatureTest {
    export type Constructors = 'ApiSignatureTest';
    export type Interface = Omit<ApiSignatureTest, Constructors>;
}
@DartClass
export class ApiSignatureTest {
    sig : any;

    checkBytes(bytes : core.DartList<number>) : void {
        expect(this.sig.getBytes_forDebug(),bytes);
        expect(this.sig.toHex(),hex.encode(md5.convert(bytes).bytes));
    }
    signUnlinkedCombinator(combinator : any) : string {
        let sig : any = new bare.createInstance(any,null);
        combinator.collectApiSignature(sig);
        return sig.toHex();
    }
    test_addBool() : void {
        this.sig.addBool(true);
        this.sig.addBool(true);
        this.sig.addBool(false);
        this.sig.addBool(true);
        this.sig.addBool(false);
        this.sig.addBool(false);
        this.sig.addBool(true);
        this.sig.addBool(false);
        this.checkBytes(new core.DartList.literal(1,1,0,1,0,0,1,0));
    }
    test_addBytes() : void {
        this.sig.addBytes(new core.DartList.literal(1,2,3,4,5));
        this.sig.addBytes(new core.DartList.literal(255,254,253,252,251));
        this.checkBytes(new core.DartList.literal(1,2,3,4,5,255,254,253,252,251));
    }
    test_addDouble() : void {
        this.sig.addDouble(1.0 / 3.0);
        this.sig.addDouble(-1.0);
        this.checkBytes(new core.DartList.literal(85,85,85,85,85,85,213,63,0,0,0,0,0,0,240,191));
    }
    test_addInt() : void {
        this.sig.addInt(1);
        this.sig.addInt(1000);
        this.sig.addInt(1000000);
        this.sig.addInt(1000000000);
        this.checkBytes(new core.DartList.literal(1,0,0,0,232,3,0,0,64,66,15,0,0,202,154,59));
    }
    test_addString() : void {
        this.sig.addString('abc');
        this.sig.addString('ø');
        this.checkBytes(new core.DartList.literal(3,0,0,0,97,98,99,2,0,0,0,195,184));
    }
    test_excludesInformative() : void {
        let combinator1 : any = new bare.createInstance(any,null,{
            shows : new core.DartList.literal('foo'),offset : 1});
        let combinator2 : any = new bare.createInstance(any,null,{
            shows : new core.DartList.literal('foo'),offset : 2});
        expect(this.signUnlinkedCombinator(combinator1),this.signUnlinkedCombinator(combinator2));
    }
    test_includesSemantic() : void {
        let combinator1 : any = new bare.createInstance(any,null,{
            shows : new core.DartList.literal('foo'),offset : 1});
        let combinator2 : any = new bare.createInstance(any,null,{
            shows : new core.DartList.literal('bar'),offset : 1});
        expect(this.signUnlinkedCombinator(combinator1),isNot(this.signUnlinkedCombinator(combinator2)));
    }
    test_manyInts() : void {
        let expectedResult : core.DartList<number> = new core.DartList.literal();
        for(let i : number = 0; i < 100000; i++){
            this.sig.addInt(i);
            expectedResult.add(i % 256);
            expectedResult.add((op(Op.QUOTIENT,i,256)) % 256);
            expectedResult.add((op(Op.QUOTIENT,i,65536)) % 256);
            expectedResult.add((op(Op.QUOTIENT,i,16777216)) % 256);
        }
        this.checkBytes(expectedResult);
    }
    constructor() {
    }
    @defaultConstructor
    ApiSignatureTest() {
        this.sig = new bare.createInstance(any,null);
    }
}

export class properties {
}
