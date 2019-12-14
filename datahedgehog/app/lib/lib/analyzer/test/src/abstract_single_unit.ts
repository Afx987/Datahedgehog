/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/src/abstract_single_unit.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./context/abstract_context";
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

    addTestSource(code : string,uri? : lib4.Uri) : any {
        this.testCode = code;
        this.testSource = this.addSource(this.testFile,code);
        return this.testSource;
    }
    assertNoErrorsInSource(source : any) : void {
        let errors : core.DartList<any> = this.context.getErrors(source).errors;
        expect(errors,isEmpty);
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
    resolveTestUnit(code : string) : void {
        this.addTestSource(code);
        this.testUnit = this.resolveLibraryUnit(this.testSource);
        if (this.verifyNoTestUnitErrors) {
            this.assertNoErrorsInSource(this.testSource);
        }
        this.testUnitElement = this.testUnit.element;
        this.testLibraryElement = this.testUnitElement.library;
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
