/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/services/completion/statement/statement_completion_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../../../abstract_single_unit";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(_DeclarationCompletionTest);
        defineReflectiveTests(_ControlFlowCompletionTest);
        defineReflectiveTests(_DoCompletionTest);
        defineReflectiveTests(_ExpressionCompletionTest);
        defineReflectiveTests(_ForCompletionTest);
        defineReflectiveTests(_ForEachCompletionTest);
        defineReflectiveTests(_IfCompletionTest);
        defineReflectiveTests(_SimpleCompletionTest);
        defineReflectiveTests(_SwitchCompletionTest);
        defineReflectiveTests(_TryCompletionTest);
        defineReflectiveTests(_WhileCompletionTest);
    });
};
export namespace StatementCompletionTest {
    export type Constructors = lib3.AbstractSingleUnitTest.Constructors | 'StatementCompletionTest';
    export type Interface = Omit<StatementCompletionTest, Constructors>;
}
@DartClass
export class StatementCompletionTest extends lib3.AbstractSingleUnitTest {
    change : any;

    _after(source : string,match : string) : number {
        return new core.DartString(source).indexOf(match) + new core.DartString(match).length;
    }
    _afterLast(source : string,match : string) : number {
        return new core.DartString(source).lastIndexOf(match) + new core.DartString(match).length;
    }
    _assertHasChange(message : string,expectedCode : string,cmp? : Function) : void {
        if (op(Op.EQUALS,this.change.message,message)) {
            if (!this.change.edits.isEmpty) {
                let resultCode : string = SourceEdit.applySequence(this.testCode,op(Op.INDEX,this.change.edits,0).edits);
                expect(resultCode,new core.DartString(expectedCode).replaceAll('////',''));
                if (cmp != null) {
                    let offset : number = cmp(resultCode);
                    expect(this.change.selection.offset,offset);
                }
            }else {
                expect(this.testCode,new core.DartString(expectedCode).replaceAll('////',''));
                if (cmp != null) {
                    let offset : number = cmp(this.testCode);
                    expect(this.change.selection.offset,offset);
                }
            }
            return;
        }
        fail(`Expected to find |${message}| but got: ` + this.change.message);
    }
    _computeCompletion(offset : number) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.driver.changeFile(this.testFile);
            let result : any = await this.driver.getResult(this.testFile);
            let context : any = new bare.createInstance(any,null,this.testFile,result.lineInfo,offset,this.testUnit,this.testUnitElement,result.errors);
            let processor : any = new bare.createInstance(any,null,context);
            let completion : any = await processor.compute();
            this.change = completion.change;
        } )());
    }

    _prepareCompletion(search : string,sourceCode : string,_namedArguments? : {atStart? : boolean,atEnd? : boolean,delta? : number}) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let {atStart,atEnd,delta} = Object.assign({
                "atStart" : false,
                "atEnd" : false,
                "delta" : 0}, _namedArguments );
            this.testCode = new core.DartString(sourceCode).replaceAll('////','');
            let offset : number = this.findOffset(search);
            if (atStart) {
                delta = 0;
            }else if (atEnd) {
                delta = new core.DartString(search).length;
            }
            await this._prepareCompletionAt(offset + delta,this.testCode);
        } )());
    }

    _prepareCompletionAt(offset : number,sourceCode : string) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.verifyNoTestUnitErrors = false;
            await this.resolveTestUnit(sourceCode);
            await this._computeCompletion(offset);
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    StatementCompletionTest() {
    }
}

export namespace _ControlFlowCompletionTest {
    export type Constructors = StatementCompletionTest.Constructors | '_ControlFlowCompletionTest';
    export type Interface = Omit<_ControlFlowCompletionTest, Constructors>;
}
@DartClass
export class _ControlFlowCompletionTest extends StatementCompletionTest {
    test_doReturnExprLineComment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('return 3','ex(e) {
                atEnd : true});
            this._assertHasChange('Complete control flow block','ex(e) {
                return this._afterLast(s,'  ');
            });
        } )());
    }

    test_doReturnUnterminated() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('return','ex(e) {
                atEnd : true});
            this._assertHasChange('Complete control flow block','ex(e) {
                return this._afterLast(s,'  ');
            });
        } )());
    }

    test_forEachReturn() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('return;','ex(e) {
                atEnd : true});
            this._assertHasChange('Complete control flow block','ex(e) {
                return this._afterLast(s,'  ');
            });
        } )());
    }

    test_forThrowUnterminated() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('throw e','ex(e) {
                atEnd : true});
            this._assertHasChange('Complete control flow block','ex(e) {
                return this._afterLast(s,'  ');
            });
        } )());
    }

    test_ifNoBlock() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('return','ex(e) {
                atEnd : true});
            this._assertHasChange('Add a semicolon and newline','ex(e) {
                return this._afterLast(s,'  ');
            });
        } )());
    }

    test_ifThrow() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('throw e;','ex(e) {
                atEnd : true});
            this._assertHasChange('Complete control flow block','ex(e) {
                return this._afterLast(s,'  ');
            });
        } )());
    }

    test_ifThrowUnterminated() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('throw e','ex(e) {
                atEnd : true});
            this._assertHasChange('Complete control flow block','ex(e) {
                return this._afterLast(s,'  ');
            });
        } )());
    }

    test_whileReturnExpr() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('+ 4','ex(e) {
                atEnd : true});
            this._assertHasChange('Complete control flow block','ex(e) {
                return this._afterLast(s,'  ');
            });
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _ControlFlowCompletionTest() {
    }
}

export namespace _DeclarationCompletionTest {
    export type Constructors = StatementCompletionTest.Constructors | '_DeclarationCompletionTest';
    export type Interface = Omit<_DeclarationCompletionTest, Constructors>;
}
@DartClass
export class _DeclarationCompletionTest extends StatementCompletionTest {
    test_classNameNoBody() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('Sample','class Sample
                atEnd : true});
            this._assertHasChange('Complete class declaration','class Sample {
                return this._afterLast(s,'  ');
            });
        } )());
    }

    test_extendsNoBody() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('Sample','class Sample extends Object
                atEnd : true});
            this._assertHasChange('Complete class declaration','class Sample extends Object {
                return this._afterLast(s,'  ');
            });
        } )());
    }

    test_functionDeclNoBody() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('source()','String source()
                atEnd : true});
            this._assertHasChange('Complete function declaration','String source() {
                return this._after(s,'  ');
            });
        } )());
    }

    test_functionDeclNoParen() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('source(','String source(
                atEnd : true});
            this._assertHasChange('Complete function declaration','String source() {
                return this._after(s,'  ');
            });
        } )());
    }

    test_implementsNoBody() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('Sample','class Interface {}
                atEnd : true});
            this._assertHasChange('Complete class declaration','class Interface {}
                return this._afterLast(s,'  ');
            });
        } )());
    }

    test_methodDeclNoBody() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('source()','class Sample {
                atEnd : true});
            this._assertHasChange('Complete function declaration','class Sample {
                return this._after(s,'    ');
            });
        } )());
    }

    test_methodDeclNoParen() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('source(','class Sample {
                atEnd : true});
            this._assertHasChange('Complete function declaration','class Sample {
                return this._after(s,'    ');
            });
        } )());
    }

    test_variableDeclNoBody() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('source','String source
                atEnd : true});
            this._assertHasChange('Complete variable declaration','String source;
                return this._after(s,';\n');
            });
        } )());
    }

    test_withNoBody() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('Sample','class M {}
                atEnd : true});
            this._assertHasChange('Complete class declaration','class M {}
                return this._afterLast(s,'  ');
            });
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _DeclarationCompletionTest() {
    }
}

export namespace _DoCompletionTest {
    export type Constructors = StatementCompletionTest.Constructors | '_DoCompletionTest';
    export type Interface = Omit<_DoCompletionTest, Constructors>;
}
@DartClass
export class _DoCompletionTest extends StatementCompletionTest {
    test_emptyCondition() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('while ()','main() {
                atEnd : true});
            this._assertHasChange('Complete do-statement','main() {
                return this._after(s,'while (');
            });
        } )());
    }

    test_keywordOnly() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('do','main() {
                atEnd : true});
            this._assertHasChange('Complete do-statement','main() {
                return this._after(s,'while (');
            });
        } )());
    }

    test_keywordStatement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('do','main() {
                atEnd : true});
            this._assertHasChange('Complete do-statement','main() {
                return this._after(s,'while (');
            });
        } )());
    }

    test_noBody() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('do','main() {
                atEnd : true});
            this._assertHasChange('Complete do-statement','main() {
                return this._after(s,'while (');
            });
        } )());
    }

    test_noCondition() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('while','main() {
                atEnd : true});
            this._assertHasChange('Complete do-statement','main() {
                return this._after(s,'while (');
            });
        } )());
    }

    test_noWhile() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('}','main() {
                atEnd : true});
            this._assertHasChange('Complete do-statement','main() {
                return this._after(s,'while (');
            });
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _DoCompletionTest() {
    }
}

export namespace _ExpressionCompletionTest {
    export type Constructors = StatementCompletionTest.Constructors | '_ExpressionCompletionTest';
    export type Interface = Omit<_ExpressionCompletionTest, Constructors>;
}
@DartClass
export class _ExpressionCompletionTest extends StatementCompletionTest {
    test_listAssign() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('= ','main() {
                atEnd : true});
            this._assertHasChange('Add a semicolon and newline','main() {
                return this._afterLast(s,'  ');
            });
        } )());
    }

    test_listAssignMultiLine() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('3','main() {
                atEnd : true});
            this._assertHasChange('Add a semicolon and newline','main() {
                return this._afterLast(s,'  ');
            });
        } )());
    }

    test_mapAssign() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('3: 3','main() {
                atEnd : true});
            this._assertHasChange('Add a semicolon and newline','main() {
                return this._afterLast(s,'  ');
            });
        } )());
    }

    test_mapAssignMissingColon() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('3','main() {
                atEnd : true});
            this._assertHasChange('Add a semicolon and newline','main() {
                return this._afterLast(s,'  ');
            });
        } )());
    }

    test_returnString() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('text','main() {
                atEnd : true});
            this._assertHasChange('Complete control flow block','main() {
                return this._afterLast(s,'  ');
            });
        } )());
    }

    test_stringAssign() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('= ','main() {
                atEnd : true});
            this._assertHasChange('Add a semicolon and newline','main() {
                return this._afterLast(s,'  ');
            });
        } )());
    }

    test_stringSingle() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('text','main() {
                atEnd : true});
            this._assertHasChange('Insert a newline at the end of the current line','main() {
                return this._afterLast(s,'  ');
            });
        } )());
    }

    test_stringSingleRaw() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('text','main() {
                atEnd : true});
            this._assertHasChange('Insert a newline at the end of the current line','main() {
                return this._afterLast(s,'  ');
            });
        } )());
    }

    test_stringTriple() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('text','main() {
                atEnd : true});
            this._assertHasChange('Insert a newline at the end of the current line','main() {
                return this._afterLast(s,'  ');
            });
        } )());
    }

    test_stringTripleRaw() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('text',"main() {
                atEnd : true});
            this._assertHasChange('Insert a newline at the end of the current line',"main() {
                return this._afterLast(s,'  ');
            });
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _ExpressionCompletionTest() {
    }
}

export namespace _ForCompletionTest {
    export type Constructors = StatementCompletionTest.Constructors | '_ForCompletionTest';
    export type Interface = Omit<_ForCompletionTest, Constructors>;
}
@DartClass
export class _ForCompletionTest extends StatementCompletionTest {
    test_emptyCondition() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('0;','main() {
                atEnd : true});
            this._assertHasChange('Complete for-statement','main() {
                return this._after(s,'    ');
            });
        } )());
    }

    test_emptyConditionWithBody() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('0;','main() {
                atEnd : true});
            this._assertHasChange('Complete for-statement','main() {
                return this._after(s,'0; ');
            });
        } )());
    }

    test_emptyInitializers() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('r (','main() {
                atEnd : true});
            this._assertHasChange('Complete for-statement','main() {
                return this._after(s,'r (');
            });
        } )());
    }

    test_emptyInitializersAfterBody() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('}','main() {
                atEnd : true});
            this._assertHasChange('Insert a newline at the end of the current line','main() {
                return this._afterLast(s,'  ');
            });
        } )());
    }

    test_emptyInitializersEmptyCondition() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('/**/','main() {
                atEnd : true});
            this._assertHasChange('Complete for-statement','main() {
                return this._after(s,'    ');
            });
        } )());
    }

    test_emptyParts() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion(';)','main() {
                atEnd : true});
            this._assertHasChange('Complete for-statement','main() {
                return this._after(s,'    ');
            });
        } )());
    }

    test_emptyUpdaters() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('/**/','main() {
                atEnd : true});
            this._assertHasChange('Complete for-statement','main() {
                return this._after(s,'    ');
            });
        } )());
    }

    test_emptyUpdatersWithBody() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('/**/','main() {
                atEnd : true});
            this._assertHasChange('Complete for-statement','main() {
                return this._after(s,'*/; ');
            });
        } )());
    }

    test_keywordOnly() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('for','main() {
                atEnd : true});
            this._assertHasChange('Complete for-statement','main() {
                return this._after(s,'for (');
            });
        } )());
    }

    test_missingLeftSeparator() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('= 0','main() {
                atEnd : true});
            this._assertHasChange('Complete for-statement','main() {
                return this._after(s,'0; ');
            });
        } )());
    }

    test_noError() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion(';)','main() {
                atEnd : true});
            this._assertHasChange('Complete for-statement','main() {
                return this._after(s,'    ');
            });
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _ForCompletionTest() {
    }
}

export namespace _ForEachCompletionTest {
    export type Constructors = StatementCompletionTest.Constructors | '_ForEachCompletionTest';
    export type Interface = Omit<_ForEachCompletionTest, Constructors>;
}
@DartClass
export class _ForEachCompletionTest extends StatementCompletionTest {
    test_emptyIdentifier() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('in xs)','main() {
                atEnd : true});
            this._assertHasChange('Complete for-each-statement','main() {
                return this._after(s,'for (');
            });
        } )());
    }

    test_emptyIdentifierAndIterable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('in)','main() {
                atEnd : true});
            this._assertHasChange('Complete for-each-statement','main() {
                return this._after(s,'for (');
            });
        } )());
    }

    test_emptyIterable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('in)','main() {
                atEnd : true});
            this._assertHasChange('Complete for-each-statement','main() {
                return this._after(s,'in ');
            });
        } )());
    }

    test_noError() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('])','main() {
                atEnd : true});
            this._assertHasChange('Complete for-each-statement','main() {
                return this._after(s,'    ');
            });
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _ForEachCompletionTest() {
    }
}

export namespace _IfCompletionTest {
    export type Constructors = StatementCompletionTest.Constructors | '_IfCompletionTest';
    export type Interface = Omit<_IfCompletionTest, Constructors>;
}
@DartClass
export class _IfCompletionTest extends StatementCompletionTest {
    test_afterCondition() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('if (true) ','main() {
                atEnd : true});
            this._assertHasChange('Complete if-statement','main() {
                return this._after(s,'    ');
            });
        } )());
    }

    test_emptyCondition() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('if ()','main() {
                atEnd : true});
            this._assertHasChange('Complete if-statement','main() {
                return this._after(s,'if (');
            });
        } )());
    }

    test_keywordOnly() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('if','main() {
                atEnd : true});
            this._assertHasChange('Complete if-statement','main() {
                return this._after(s,'if (');
            });
        } )());
    }

    test_noError() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('if (true)','main() {
                atEnd : true});
            this._assertHasChange('Complete if-statement','main() {
                return this._after(s,'    ');
            });
        } )());
    }

    test_withCondition() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('if (tr','main() {
                atEnd : true});
            this._assertHasChange('Complete if-statement','main() {
                return this._after(s,'    ');
            });
        } )());
    }

    test_withElse() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('else','main() {
                atEnd : true});
            this._assertHasChange('Complete if-statement','main() {
                return this._after(s,'    ');
            });
        } )());
    }

    test_withElse_BAD() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('if ()','main() {
                atEnd : true});
            this._assertHasChange('Insert a newline at the end of the current line','main() {
                return this._after(s,'if ()');
            });
        } )());
    }

    test_withElseNoThen() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('else','main() {
                atEnd : true});
            this._assertHasChange('Complete if-statement','main() {
                return this._after(s,'    ');
            });
        } )());
    }

    test_withinEmptyCondition() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('if (','main() {
                atEnd : true});
            this._assertHasChange('Complete if-statement','main() {
                return this._after(s,'if (');
            });
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _IfCompletionTest() {
    }
}

export namespace _SimpleCompletionTest {
    export type Constructors = StatementCompletionTest.Constructors | '_SimpleCompletionTest';
    export type Interface = Omit<_SimpleCompletionTest, Constructors>;
}
@DartClass
export class _SimpleCompletionTest extends StatementCompletionTest {
    test_enter() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('v = 1;','main() {
                atEnd : true});
            this._assertHasChange('Insert a newline at the end of the current line','main() {
        } )());
    }

    test_noCloseParen() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('ing(3','main() {
                atEnd : true});
            this._assertHasChange('Insert a newline at the end of the current line','main() {
                return this._afterLast(s,'  ');
            });
        } )());
    }

    test_noCloseParenWithSemicolon() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let before : string = 'main() {
            let after : string = 'main() {
            await this._prepareCompletion('ing(3',before,{
                atEnd : true});
            this._assertHasChange('Insert a newline at the end of the current line',after,(s : any) =>  {
                return this._afterLast(s,'  ');
            });
            await this._prepareCompletion('ing(3;',before,{
                atEnd : true});
            this._assertHasChange('Insert a newline at the end of the current line',after,(s : any) =>  {
                return this._afterLast(s,'  ');
            });
        } )());
    }

    test_semicolonFn() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('=> 3','main() {
                atEnd : true});
            this._assertHasChange('Add a semicolon and newline','main() {
                return this._afterLast(s,'  ');
            });
        } )());
    }

    test_semicolonFnBody() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('f()','main() {
                atEnd : true});
            this._assertHasChange('Insert a newline at the end of the current line','main() {
                return this._afterLast(s,'()');
            });
        } )());
    }

    test_semicolonFnBodyWithDef() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('f()','main() {
                atEnd : true});
            this._assertHasChange('Add a semicolon and newline','main() {
                return this._afterLast(s,'  ');
            });
        } )());
    }

    test_semicolonFnExpr() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('=>','main() {
                atEnd : true});
            this._assertHasChange('Add a semicolon and newline','main() {
                return this._afterLast(s,'=> ');
            });
        } )());
    }

    test_semicolonFnSpaceExpr() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('=>','main() {
                atEnd : true});
            this._assertHasChange('Add a semicolon and newline','main() {
                return this._afterLast(s,'=> ');
            });
        } )());
    }

    test_semicolonVar() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('v = 1','main() {
                atEnd : true});
            this._assertHasChange('Add a semicolon and newline','main() {
                return this._afterLast(s,'  ');
            });
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _SimpleCompletionTest() {
    }
}

export namespace _SwitchCompletionTest {
    export type Constructors = StatementCompletionTest.Constructors | '_SwitchCompletionTest';
    export type Interface = Omit<_SwitchCompletionTest, Constructors>;
}
@DartClass
export class _SwitchCompletionTest extends StatementCompletionTest {
    test_caseNoColon() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('label','main(x) {
                atEnd : true});
            this._assertHasChange('Complete switch-statement','main(x) {
                return this._after(s,'label: ');
            });
        } )());
    }

    test_defaultNoColon() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('default','main(x) {
                atEnd : true});
            this._assertHasChange('Complete switch-statement','main(x) {
                return this._after(s,'default: ');
            });
        } )());
    }

    test_emptyCondition() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('switch','main() {
                atEnd : true});
            this._assertHasChange('Complete switch-statement','main() {
                return this._after(s,'switch (');
            });
        } )());
    }

    test_keywordOnly() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('switch','main() {
                atEnd : true});
            this._assertHasChange('Complete switch-statement','main() {
                return this._after(s,'switch (');
            });
        } )());
    }

    test_keywordSpace() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('switch','main() {
                atEnd : true});
            this._assertHasChange('Complete switch-statement','main() {
                return this._after(s,'switch (');
            });
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _SwitchCompletionTest() {
    }
}

export namespace _TryCompletionTest {
    export type Constructors = StatementCompletionTest.Constructors | '_TryCompletionTest';
    export type Interface = Omit<_TryCompletionTest, Constructors>;
}
@DartClass
export class _TryCompletionTest extends StatementCompletionTest {
    test_catchOnly() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('{} catch','main() {
                atEnd : true});
            this._assertHasChange('Complete try-statement','main() {
                return this._after(s,'catch (');
            });
        } )());
    }

    test_catchSecond() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('} catch ','main() {
                atEnd : true});
            this._assertHasChange('Complete try-statement','main() {
                return this._afterLast(s,'catch (');
            });
        } )());
    }

    test_finallyOnly() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('finally','main() {
                atEnd : true});
            this._assertHasChange('Complete try-statement','main() {
                return this._after(s,'    ');
            });
        } )());
    }

    test_keywordOnly() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('try','main() {
                atEnd : true});
            this._assertHasChange('Complete try-statement','main() {
                return this._after(s,'    ');
            });
        } )());
    }

    test_keywordSpace() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('try','main() {
                atEnd : true});
            this._assertHasChange('Complete try-statement','main() {
                return this._after(s,'    ');
            });
        } )());
    }

    test_onCatch() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('on','main() {
                atEnd : true});
            this._assertHasChange('Complete try-statement','main() {
                return this._after(s,'catch (');
            });
        } )());
    }

    test_onCatchComment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('on','main() {
                atEnd : true});
            this._assertHasChange('Complete try-statement','main() {
                return this._after(s,'catch (');
            });
        } )());
    }

    test_onOnly() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('on','main() {
                atEnd : true});
            this._assertHasChange('Complete try-statement','main() {
                return this._after(s,' on ');
            });
        } )());
    }

    test_onSpace() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('on','main() {
                atEnd : true});
            this._assertHasChange('Complete try-statement','main() {
                return this._after(s,' on ');
            });
        } )());
    }

    test_onSpaces() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('on','main() {
                atEnd : true});
            this._assertHasChange('Complete try-statement','main() {
                return this._after(s,' on ');
            });
        } )());
    }

    test_onType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('on','main() {
                atEnd : true});
            this._assertHasChange('Complete try-statement','main() {
                return this._after(s,'    ');
            });
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _TryCompletionTest() {
    }
}

export namespace _WhileCompletionTest {
    export type Constructors = StatementCompletionTest.Constructors | '_WhileCompletionTest';
    export type Interface = Omit<_WhileCompletionTest, Constructors>;
}
@DartClass
export class _WhileCompletionTest extends StatementCompletionTest {
    test_keywordOnly() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('while','main() {
                atEnd : true});
            this._assertHasChange('Complete while-statement','main() {
                return this._after(s,'while (');
            });
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _WhileCompletionTest() {
    }
}

export class properties {
}