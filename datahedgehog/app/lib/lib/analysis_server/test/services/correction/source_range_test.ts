/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/services/correction/source_range_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../../abstract_single_unit";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(SourceRangesTest);
    });
};
export namespace SourceRangesTest {
    export type Constructors = lib3.AbstractSingleUnitTest.Constructors | 'SourceRangesTest';
    export type Interface = Omit<SourceRangesTest, Constructors>;
}
@DartClass
export class SourceRangesTest extends lib3.AbstractSingleUnitTest {
    test_rangeElementName() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class ABC {}');
            let element : any = this.findElement('ABC');
            expect(rangeElementName(element),new bare.createInstance(any,null,6,3));
        } )());
    }

    test_rangeEndEnd_nodeNode() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {}');
            let mainFunction : any = op(Op.INDEX,this.testUnit.declarations,0);
            let mainName : any = mainFunction.name;
            let mainBody : any = mainFunction.functionExpression.body;
            expect(rangeEndEnd(mainName,mainBody),new bare.createInstance(any,null,4,5));
        } )());
    }

    test_rangeEndStart_nodeNode() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {}');
            let mainFunction : any = op(Op.INDEX,this.testUnit.declarations,0);
            let mainName : any = mainFunction.name;
            let mainBody : any = mainFunction.functionExpression.body;
            expect(rangeEndStart(mainName,mainBody),new bare.createInstance(any,null,4,3));
        } )());
    }

    test_rangeError() : void {
        let error : any = new bare.createInstance(any,null,null,10,5,ParserErrorCode.CONST_CLASS,new core.DartList.literal());
        expect(rangeError(error),new bare.createInstance(any,null,10,5));
    }
    test_rangeNode() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {}');
            let mainFunction : any = op(Op.INDEX,this.testUnit.declarations,0);
            let mainName : any = mainFunction.name;
            expect(rangeNode(mainName),new bare.createInstance(any,null,0,4));
        } )());
    }

    test_rangeNodes() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit(' main() {}');
            let mainFunction : any = op(Op.INDEX,this.testUnit.declarations,0);
            let mainName : any = mainFunction.name;
            let mainBody : any = mainFunction.functionExpression.body;
            expect(rangeNodes(new core.DartList.literal(mainName,mainBody)),new bare.createInstance(any,null,1,9));
        } )());
    }

    test_rangeNodes_empty() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {}');
            expect(rangeNodes(new core.DartList.literal()),new bare.createInstance(any,null,0,0));
        } )());
    }

    test_rangeStartEnd_intInt() : void {
        expect(rangeStartEnd(10,25),new bare.createInstance(any,null,10,15));
    }
    test_rangeStartEnd_nodeNode() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit(' main() {}');
            let mainFunction : any = op(Op.INDEX,this.testUnit.declarations,0);
            let mainName : any = mainFunction.name;
            let mainBody : any = mainFunction.functionExpression.body;
            expect(rangeStartEnd(mainName,mainBody),new bare.createInstance(any,null,1,9));
        } )());
    }

    test_rangeStartLength_int() : void {
        expect(rangeStartLength(5,10),new bare.createInstance(any,null,5,10));
    }
    test_rangeStartLength_node() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit(' main() {}');
            let mainFunction : any = op(Op.INDEX,this.testUnit.declarations,0);
            let mainName : any = mainFunction.name;
            expect(rangeStartLength(mainName,10),new bare.createInstance(any,null,1,10));
        } )());
    }

    test_rangeStartStart_intInt() : void {
        expect(rangeStartStart(10,25),new bare.createInstance(any,null,10,15));
    }
    test_rangeStartStart_nodeNode() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {}');
            let mainFunction : any = op(Op.INDEX,this.testUnit.declarations,0);
            let mainName : any = mainFunction.name;
            let mainBody : any = mainFunction.functionExpression.body;
            expect(rangeStartStart(mainName,mainBody),new bare.createInstance(any,null,0,7));
        } )());
    }

    test_rangeToken() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit(' main() {}');
            let mainFunction : any = op(Op.INDEX,this.testUnit.declarations,0);
            let mainName : any = mainFunction.name;
            expect(rangeToken(mainName.beginToken),new bare.createInstance(any,null,1,4));
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SourceRangesTest() {
    }
}

export class properties {
}
