/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/abstract_single_unit.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./abstract_context";
import * as lib4 from "@dart2ts/dart/uri";

export namespace AbstractSingleUnitTest {
    export type Constructors = lib3.AbstractContextTest.Constructors | 'AbstractSingleUnitTest';
    export type Interface = Omit<AbstractSingleUnitTest, Constructors>;
}
@DartClass
export class AbstractSingleUnitTest extends lib3.AbstractContextTest {
    verifyNoTestUnitErrors : boolean;

    testCode : string;

    testFile : string;

    testSource : any;

    testUnit : any;

    testUnitElement : any;

    testLibraryElement : any;

    addTestSource(code : string,uri? : lib4.Uri) : void {
        this.testCode = code;
        this.testSource = this.addSource(this.testFile,code,uri);
    }
    findElement(name : string,kind? : any) : any {
        return lib3.findChildElement(this.testUnitElement,name,kind);
    }
    findEnd(search : string) : number {
        return this.findOffset(search) + new core.DartString(search).length;
    }
    findIdentifier(search : string) : any {
        return this.findNodeAtString(search,(node : any) =>  {
            return is(node, any);
        });
    }
    findNodeAtOffset(offset : number,predicate? : any) : any {
        let result : any = new bare.createInstance(any,null,offset).searchWithin(this.testUnit);
        if (result != null && predicate != null) {
            result = result.getAncestor(predicate);
        }
        return result;
    }
    findNodeAtString(search : string,predicate? : any) : any {
        let offset : number = this.findOffset(search);
        return this.findNodeAtOffset(offset,predicate);
    }
    findNodeElementAtString(search : string,predicate? : any) : any {
        let node : any = this.findNodeAtString(search,predicate);
        if (op(Op.EQUALS,node,null)) {
            return null;
        }
        return ElementLocator.locate(node);
    }
    findOffset(search : string) : number {
        let offset : number = new core.DartString(this.testCode).indexOf(search);
        expect(offset,isNonNegative,{
            reason : `Not found '${search}' in\n${this.testCode}`});
        return offset;
    }
    getLeadingIdentifierLength(search : string) : number {
        let length : number = 0;
        while (length < new core.DartString(search).length){
            let c : number = new core.DartString(search).codeUnitAt(length);
            if (c >= new core.DartString('a').codeUnitAt(0) && c <= new core.DartString('z').codeUnitAt(0)) {
                length++;
                continue;
            }
            if (c >= new core.DartString('A').codeUnitAt(0) && c <= new core.DartString('Z').codeUnitAt(0)) {
                length++;
                continue;
            }
            if (c >= new core.DartString('0').codeUnitAt(0) && c <= new core.DartString('9').codeUnitAt(0)) {
                length++;
                continue;
            }
            break;
        }
        return length;
    }
    resolveTestUnit(code : string) : async.Future<core.Null> { 
        return new async.Future.fromPromise(( async () =>  {
            this.addTestSource(code);
            if (this.enableNewAnalysisDriver) {
                let result = await this.driver.getResult(this.testFile);
                this.testUnit = (result).unit;
                if (this.verifyNoTestUnitErrors) {
                    expect(result.errors.where((error : any) =>  {
                        return error.errorCode != HintCode.DEAD_CODE && error.errorCode != HintCode.UNUSED_CATCH_CLAUSE && error.errorCode != HintCode.UNUSED_CATCH_STACK && error.errorCode != HintCode.UNUSED_ELEMENT && error.errorCode != HintCode.UNUSED_FIELD && error.errorCode != HintCode.UNUSED_IMPORT && error.errorCode != HintCode.UNUSED_LOCAL_VARIABLE;
                    }),isEmpty);
                }
            }else {
                this.testUnit = await this.resolveLibraryUnit(this.testSource);
                if (this.verifyNoTestUnitErrors) {
                    expect(this.context.getErrors(this.testSource).errors,isEmpty);
                }
            }
            this.testUnitElement = this.testUnit.element;
            this.testLibraryElement = this.testUnitElement.library;
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    AbstractSingleUnitTest() {
        this.verifyNoTestUnitErrors = true;
        this.testFile = '/test.dart';
    }
}

export class properties {
}
