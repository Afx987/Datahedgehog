/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/generated/scanner_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./test_support";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(LineInfoTest);
    });
};
export namespace CharacterRangeReaderTest {
    export type Constructors = lib3.EngineTestCase.Constructors | 'CharacterRangeReaderTest';
    export type Interface = Omit<CharacterRangeReaderTest, Constructors>;
}
@DartClass
export class CharacterRangeReaderTest extends lib3.EngineTestCase {
    test_advance() : void {
        let baseReader : any = new bare.createInstance(any,null,"xyzzy");
        let reader : any = new bare.createInstance(any,null,baseReader,1,4);
        expect(reader.advance(),121);
        expect(reader.advance(),128);
        expect(reader.advance(),128);
        expect(reader.advance(),-1);
        expect(reader.advance(),-1);
    }
    test_creation() : void {
        let baseReader : any = new bare.createInstance(any,null,"xyzzy");
        let reader : any = new bare.createInstance(any,null,baseReader,1,4);
        expect(reader,isNotNull);
    }
    test_getOffset() : void {
        let baseReader : any = new bare.createInstance(any,null,"xyzzy");
        let reader : any = new bare.createInstance(any,null,baseReader,1,2);
        expect(reader.offset,1);
        reader.advance();
        expect(reader.offset,2);
        reader.advance();
        expect(reader.offset,2);
    }
    test_getString() : void {
        let baseReader : any = new bare.createInstance(any,null,"__xyzzy__");
        let reader : any = new bare.createInstance(any,null,baseReader,2,7);
        reader.offset = 5;
        expect(reader.getString(3,0),"yzz");
        expect(reader.getString(4,1),"zzy");
    }
    test_peek() : void {
        let baseReader : any = new bare.createInstance(any,null,"xyzzy");
        let reader : any = new bare.createInstance(any,null,baseReader,1,3);
        expect(reader.peek(),121);
        expect(reader.peek(),121);
        reader.advance();
        expect(reader.peek(),128);
        expect(reader.peek(),128);
        reader.advance();
        expect(reader.peek(),-1);
        expect(reader.peek(),-1);
    }
    test_setOffset() : void {
        let baseReader : any = new bare.createInstance(any,null,"xyzzy");
        let reader : any = new bare.createInstance(any,null,baseReader,1,4);
        reader.offset = 2;
        expect(reader.offset,2);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    CharacterRangeReaderTest() {
    }
}

export namespace LineInfoTest {
    export type Constructors = lib3.EngineTestCase.Constructors | 'LineInfoTest';
    export type Interface = Omit<LineInfoTest, Constructors>;
}
@DartClass
export class LineInfoTest extends lib3.EngineTestCase {
    test_lineInfo_multilineComment() : void {
        let source : string = "/* * */";
        this._assertLineInfo(source,new core.DartList.literal(new ScannerTest_ExpectedLocation(0,1,1),new ScannerTest_ExpectedLocation(4,2,2),new ScannerTest_ExpectedLocation(new core.DartString(source).length - 1,3,3)));
    }
    test_lineInfo_multilineString() : void {
        let source : string = "'''a\nbc\nd'''";
        this._assertLineInfo(source,new core.DartList.literal(new ScannerTest_ExpectedLocation(0,1,1),new ScannerTest_ExpectedLocation(7,2,2),new ScannerTest_ExpectedLocation(new core.DartString(source).length - 1,3,4)));
    }
    test_lineInfo_multilineString_raw() : void {
        let source : string = "var a = r'''\nblah\n''';\n\nfoo";
        this._assertLineInfo(source,new core.DartList.literal(new ScannerTest_ExpectedLocation(0,1,1),new ScannerTest_ExpectedLocation(14,2,2),new ScannerTest_ExpectedLocation(new core.DartString(source).length - 2,5,2)));
    }
    test_lineInfo_simpleClass() : void {
        let source : string = "class Test {\n    String s = '...';\n    int get x => s.MISSING_GETTER;\n}";
        this._assertLineInfo(source,new core.DartList.literal(new ScannerTest_ExpectedLocation(0,1,1),new ScannerTest_ExpectedLocation(new core.DartString(source).indexOf("MISSING_GETTER"),3,20),new ScannerTest_ExpectedLocation(new core.DartString(source).length - 1,4,1)));
    }
    test_lineInfo_slashN() : void {
        let source : string = "class Test {\n}";
        this._assertLineInfo(source,new core.DartList.literal(new ScannerTest_ExpectedLocation(0,1,1),new ScannerTest_ExpectedLocation(new core.DartString(source).indexOf("}"),2,1)));
    }
    _assertLineInfo(source : string,expectedLocations : core.DartList<ScannerTest_ExpectedLocation>) : void {
        let listener : lib3.GatheringErrorListener = new lib3.GatheringErrorListener();
        this._scanWithListener(source,listener);
        listener.assertNoErrors();
        let info : any = listener.getLineInfo(new lib3.TestSource());
        expect(info,isNotNull);
        let count : number = expectedLocations.length;
        for(let i : number = 0; i < count; i++){
            let expectedLocation : ScannerTest_ExpectedLocation = expectedLocations[i];
            let location : any = info.getLocation(expectedLocation._offset);
            expect(location.lineNumber,expectedLocation._lineNumber,{
                reason : `Line number in location ${i}`});
            expect(location.columnNumber,expectedLocation._columnNumber,{
                reason : `Column number in location ${i}`});
        }
    }
    _scanWithListener(source : string,listener : lib3.GatheringErrorListener,_namedArguments? : {genericMethodComments? : boolean,lazyAssignmentOperators? : boolean}) : any {
        let {genericMethodComments,lazyAssignmentOperators} = Object.assign({
            "genericMethodComments" : false,
            "lazyAssignmentOperators" : false}, _namedArguments );
        let scanner : any = new bare.createInstance(any,null,null,new bare.createInstance(any,null,source),listener);
        scanner.scanGenericMethodComments = genericMethodComments;
        scanner.scanLazyAssignmentOperators = lazyAssignmentOperators;
        let result : any = scanner.tokenize();
        listener.setLineInfo(new lib3.TestSource(),scanner.lineStarts);
        return result;
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    LineInfoTest() {
    }
}

export namespace ScannerTest_ExpectedLocation {
    export type Constructors = 'ScannerTest_ExpectedLocation';
    export type Interface = Omit<ScannerTest_ExpectedLocation, Constructors>;
}
@DartClass
export class ScannerTest_ExpectedLocation {
    _offset : number;

    _lineNumber : number;

    _columnNumber : number;

    constructor(_offset : number,_lineNumber : number,_columnNumber : number) {
    }
    @defaultConstructor
    ScannerTest_ExpectedLocation(_offset : number,_lineNumber : number,_columnNumber : number) {
        this._offset = _offset;
        this._lineNumber = _lineNumber;
        this._columnNumber = _columnNumber;
    }
}

export namespace TokenStreamValidator {
    export type Constructors = 'TokenStreamValidator';
    export type Interface = Omit<TokenStreamValidator, Constructors>;
}
@DartClass
export class TokenStreamValidator {
    validate(token : any) : void {
        let buffer : core.DartStringBuffer = new core.DartStringBuffer();
        this._validateStream(buffer,token);
        if (buffer.length > 0) {
            fail(buffer.toString());
        }
    }
    _validateStream(buffer : core.DartStringBuffer,token : any) : void {
        if (op(Op.EQUALS,token,null)) {
            return;
        }
        let previousToken : any = null;
        let previousEnd : number = -1;
        let currentToken : any = token;
        while (currentToken != null && currentToken.type != TokenType.EOF){
            this._validateStream(buffer,currentToken.precedingComments);
            let type : any = currentToken.type;
            if (op(Op.EQUALS,type,TokenType.OPEN_CURLY_BRACKET) || op(Op.EQUALS,type,TokenType.OPEN_PAREN) || op(Op.EQUALS,type,TokenType.OPEN_SQUARE_BRACKET) || op(Op.EQUALS,type,TokenType.STRING_INTERPOLATION_EXPRESSION)) {
                if (isNot(currentToken, any)) {
                    buffer.write("\nExpected BeginToken, found ");
                    buffer.write(currentToken.runtimeType.toString());
                    buffer.write(" ");
                    this._writeToken(buffer,currentToken);
                }
            }
            let currentStart : number = currentToken.offset;
            let currentLength : number = currentToken.length;
            let currentEnd : number = currentStart + currentLength - 1;
            if (currentStart <= previousEnd) {
                buffer.write("\nInvalid token sequence: ");
                this._writeToken(buffer,previousToken);
                buffer.write(" followed by ");
                this._writeToken(buffer,currentToken);
            }
            previousEnd = currentEnd;
            previousToken = currentToken;
            currentToken = currentToken.next;
        }
    }
    _writeToken(buffer : core.DartStringBuffer,token : any) : void {
        buffer.write("[");
        buffer.write(token.type);
        buffer.write(", '");
        buffer.write(token.lexeme);
        buffer.write("', ");
        buffer.write(token.offset);
        buffer.write(", ");
        buffer.write(token.length);
        buffer.write("]");
    }
    constructor() {
    }
    @defaultConstructor
    TokenStreamValidator() {
    }
}

export class properties {
}
