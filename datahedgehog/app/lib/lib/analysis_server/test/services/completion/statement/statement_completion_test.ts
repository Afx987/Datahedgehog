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
            await this._prepareCompletion('return 3','ex(e) {\n  do {\n    return 3//\n  } while (true);\n}\n',{
                atEnd : true});
            this._assertHasChange('Complete control flow block','ex(e) {\n  do {\n    return 3;//\n  } while (true);\n  ////\n}\n',(s : any) =>  {
                return this._afterLast(s,'  ');
            });
        } )());
    }

    test_doReturnUnterminated() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('return','ex(e) {\n  do {\n    return\n  } while (true);\n}\n',{
                atEnd : true});
            this._assertHasChange('Complete control flow block','ex(e) {\n  do {\n    return;\n  } while (true);\n  ////\n}\n',(s : any) =>  {
                return this._afterLast(s,'  ');
            });
        } )());
    }

    test_forEachReturn() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('return;','ex(e) {\n  for (var x in e) {\n    return;\n  }\n}\n',{
                atEnd : true});
            this._assertHasChange('Complete control flow block','ex(e) {\n  for (var x in e) {\n    return;\n  }\n  ////\n}\n',(s : any) =>  {
                return this._afterLast(s,'  ');
            });
        } )());
    }

    test_forThrowUnterminated() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('throw e','ex(e) {\n  for (int i = 0; i < 3; i++) {\n    throw e\n  }\n}\n',{
                atEnd : true});
            this._assertHasChange('Complete control flow block','ex(e) {\n  for (int i = 0; i < 3; i++) {\n    throw e;\n  }\n  ////\n}\n',(s : any) =>  {
                return this._afterLast(s,'  ');
            });
        } )());
    }

    test_ifNoBlock() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('return','ex(e) {\n  if (true) return 0\n}\n',{
                atEnd : true});
            this._assertHasChange('Add a semicolon and newline','ex(e) {\n  if (true) return 0;\n  ////\n}\n',(s : any) =>  {
                return this._afterLast(s,'  ');
            });
        } )());
    }

    test_ifThrow() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('throw e;','ex(e) {\n  if (true) {\n    throw e;\n  }\n}\n',{
                atEnd : true});
            this._assertHasChange('Complete control flow block','ex(e) {\n  if (true) {\n    throw e;\n  }\n  ////\n}\n',(s : any) =>  {
                return this._afterLast(s,'  ');
            });
        } )());
    }

    test_ifThrowUnterminated() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('throw e','ex(e) {\n  if (true) {\n    throw e\n  }\n}\n',{
                atEnd : true});
            this._assertHasChange('Complete control flow block','ex(e) {\n  if (true) {\n    throw e;\n  }\n  ////\n}\n',(s : any) =>  {
                return this._afterLast(s,'  ');
            });
        } )());
    }

    test_whileReturnExpr() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('+ 4','ex(e) {\n  while (true) {\n    return 3 + 4\n  }\n}\n',{
                atEnd : true});
            this._assertHasChange('Complete control flow block','ex(e) {\n  while (true) {\n    return 3 + 4;\n  }\n  ////\n}\n',(s : any) =>  {
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
            await this._prepareCompletion('Sample','class Sample\n',{
                atEnd : true});
            this._assertHasChange('Complete class declaration','class Sample {\n  ////\n}\n',(s : any) =>  {
                return this._afterLast(s,'  ');
            });
        } )());
    }

    test_extendsNoBody() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('Sample','class Sample extends Object\n',{
                atEnd : true});
            this._assertHasChange('Complete class declaration','class Sample extends Object {\n  ////\n}\n',(s : any) =>  {
                return this._afterLast(s,'  ');
            });
        } )());
    }

    test_functionDeclNoBody() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('source()','String source()\n',{
                atEnd : true});
            this._assertHasChange('Complete function declaration','String source() {\n  ////\n}\n',(s : any) =>  {
                return this._after(s,'  ');
            });
        } )());
    }

    test_functionDeclNoParen() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('source(','String source(\n',{
                atEnd : true});
            this._assertHasChange('Complete function declaration','String source() {\n  ////\n}\n',(s : any) =>  {
                return this._after(s,'  ');
            });
        } )());
    }

    test_implementsNoBody() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('Sample','class Interface {}\nclass Sample implements Interface\n',{
                atEnd : true});
            this._assertHasChange('Complete class declaration','class Interface {}\nclass Sample implements Interface {\n  ////\n}\n',(s : any) =>  {
                return this._afterLast(s,'  ');
            });
        } )());
    }

    test_methodDeclNoBody() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('source()','class Sample {\n  String source()\n}\n',{
                atEnd : true});
            this._assertHasChange('Complete function declaration','class Sample {\n  String source() {\n    ////\n  }\n}\n',(s : any) =>  {
                return this._after(s,'    ');
            });
        } )());
    }

    test_methodDeclNoParen() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('source(','class Sample {\n  String source(\n}\n',{
                atEnd : true});
            this._assertHasChange('Complete function declaration','class Sample {\n  String source() {\n    ////\n  }\n}\n',(s : any) =>  {
                return this._after(s,'    ');
            });
        } )());
    }

    test_variableDeclNoBody() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('source','String source\n',{
                atEnd : true});
            this._assertHasChange('Complete variable declaration','String source;\n////\n',(s : any) =>  {
                return this._after(s,';\n');
            });
        } )());
    }

    test_withNoBody() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('Sample','class M {}\nclass Sample extends Object with M\n',{
                atEnd : true});
            this._assertHasChange('Complete class declaration','class M {}\nclass Sample extends Object with M {\n  ////\n}\n',(s : any) =>  {
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
            await this._prepareCompletion('while ()','main() {\n  do {\n  } while ()\n}\n',{
                atEnd : true});
            this._assertHasChange('Complete do-statement','main() {\n  do {\n  } while ();\n}\n',(s : any) =>  {
                return this._after(s,'while (');
            });
        } )());
    }

    test_keywordOnly() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('do','main() {\n  do ////\n}\n',{
                atEnd : true});
            this._assertHasChange('Complete do-statement','main() {\n  do {\n    ////\n  } while ();\n}\n',(s : any) =>  {
                return this._after(s,'while (');
            });
        } )());
    }

    test_keywordStatement() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('do','main() {\n  do ////\n  return;\n}\n',{
                atEnd : true});
            this._assertHasChange('Complete do-statement','main() {\n  do {\n    ////\n  } while ();\n  return;\n}\n',(s : any) =>  {
                return this._after(s,'while (');
            });
        } )());
    }

    test_noBody() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('do','main() {\n  do;\n  while\n}\n',{
                atEnd : true});
            this._assertHasChange('Complete do-statement','main() {\n  do {\n    ////\n  } while ();\n}\n',(s : any) =>  {
                return this._after(s,'while (');
            });
        } )());
    }

    test_noCondition() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('while','main() {\n  do {\n  } while\n}\n',{
                atEnd : true});
            this._assertHasChange('Complete do-statement','main() {\n  do {\n  } while ();\n}\n',(s : any) =>  {
                return this._after(s,'while (');
            });
        } )());
    }

    test_noWhile() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('}','main() {\n  do {\n  }\n}\n',{
                atEnd : true});
            this._assertHasChange('Complete do-statement','main() {\n  do {\n  } while ();\n}\n',(s : any) =>  {
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
            await this._prepareCompletion('= ','main() {\n  var x = [1, 2, 3\n}\n',{
                atEnd : true});
            this._assertHasChange('Add a semicolon and newline','main() {\n  var x = [1, 2, 3];\n  ////\n}\n',(s : any) =>  {
                return this._afterLast(s,'  ');
            });
        } )());
    }

    test_listAssignMultiLine() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('3','main() {\n  var x = [\n    1,\n    2,\n    3\n}\n',{
                atEnd : true});
            this._assertHasChange('Add a semicolon and newline','main() {\n  var x = [\n    1,\n    2,\n    3,\n  ];\n    ////\n}\n',(s : any) =>  {
                return this._afterLast(s,'  ');
            });
        } )());
    }

    test_mapAssign() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('3: 3','main() {\n  var x = {1: 1, 2: 2, 3: 3\n}\n',{
                atEnd : true});
            this._assertHasChange('Add a semicolon and newline','main() {\n  var x = {1: 1, 2: 2, 3: 3};\n  ////\n}\n',(s : any) =>  {
                return this._afterLast(s,'  ');
            });
        } )());
    }

    test_mapAssignMissingColon() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('3','main() {\n  var x = {1: 1, 2: 2, 3\n}\n',{
                atEnd : true});
            this._assertHasChange('Add a semicolon and newline','main() {\n  var x = {1: 1, 2: 2, 3: };\n  ////\n}\n',(s : any) =>  {
                return this._afterLast(s,'  ');
            });
        } )());
    }

    test_returnString() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('text','main() {\n  if (done()) {\n    return \'text\n  }\n}\n',{
                atEnd : true});
            this._assertHasChange('Complete control flow block','main() {\n  if (done()) {\n    return \'text\';\n  }\n  ////\n}\n',(s : any) =>  {
                return this._afterLast(s,'  ');
            });
        } )());
    }

    test_stringAssign() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('= ','main() {\n  var x = \'\n}\n',{
                atEnd : true});
            this._assertHasChange('Add a semicolon and newline','main() {\n  var x = \'\';\n  ////\n}\n',(s : any) =>  {
                return this._afterLast(s,'  ');
            });
        } )());
    }

    test_stringSingle() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('text','main() {\n  print("text\n}\n',{
                atEnd : true});
            this._assertHasChange('Insert a newline at the end of the current line','main() {\n  print("text");\n  ////\n}\n',(s : any) =>  {
                return this._afterLast(s,'  ');
            });
        } )());
    }

    test_stringSingleRaw() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('text','main() {\n  print(r"text\n}\n',{
                atEnd : true});
            this._assertHasChange('Insert a newline at the end of the current line','main() {\n  print(r"text");\n  ////\n}\n',(s : any) =>  {
                return this._afterLast(s,'  ');
            });
        } )());
    }

    test_stringTriple() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('text','main() {\n  print(\'\'\'text\n}\n',{
                atEnd : true});
            this._assertHasChange('Insert a newline at the end of the current line','main() {\n  print(\'\'\'text\'\'\');\n  ////\n}\n',(s : any) =>  {
                return this._afterLast(s,'  ');
            });
        } )());
    }

    test_stringTripleRaw() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('text',"main() {\n  print(r'''text\n}\n",{
                atEnd : true});
            this._assertHasChange('Insert a newline at the end of the current line',"main() {\n  print(r'''text''');\n  ////\n}\n",(s : any) =>  {
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
            await this._prepareCompletion('0;','main() {\n  for (int i = 0;)      /**/  ////\n}\n',{
                atEnd : true});
            this._assertHasChange('Complete for-statement','main() {\n  for (int i = 0; ; ) /**/ {\n    ////\n  }\n}\n',(s : any) =>  {
                return this._after(s,'    ');
            });
        } )());
    }

    test_emptyConditionWithBody() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('0;','main() {\n  for (int i = 0;) {\n  }\n}\n',{
                atEnd : true});
            this._assertHasChange('Complete for-statement','main() {\n  for (int i = 0; ; ) {\n  }\n}\n',(s : any) =>  {
                return this._after(s,'0; ');
            });
        } )());
    }

    test_emptyInitializers() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('r (','main() {\n  for () {\n  }\n}\n',{
                atEnd : true});
            this._assertHasChange('Complete for-statement','main() {\n  for () {\n  }\n}\n',(s : any) =>  {
                return this._after(s,'r (');
            });
        } )());
    }

    test_emptyInitializersAfterBody() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('}','main() {\n  for () {\n  }\n}\n',{
                atEnd : true});
            this._assertHasChange('Insert a newline at the end of the current line','main() {\n  for () {\n  }\n  ////\n}\n',(s : any) =>  {
                return this._afterLast(s,'  ');
            });
        } )());
    }

    test_emptyInitializersEmptyCondition() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('/**/','main() {\n  for (;/**/)\n}\n',{
                atEnd : true});
            this._assertHasChange('Complete for-statement','main() {\n  for (; /**/; ) {\n    ////\n  }\n}\n',(s : any) =>  {
                return this._after(s,'    ');
            });
        } )());
    }

    test_emptyParts() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion(';)','main() {\n  for (;;)\n}\n',{
                atEnd : true});
            this._assertHasChange('Complete for-statement','main() {\n  for (;;) {\n    ////\n  }\n}\n',(s : any) =>  {
                return this._after(s,'    ');
            });
        } )());
    }

    test_emptyUpdaters() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('/**/','main() {\n  for (int i = 0; i < 10 /**/)\n}\n',{
                atEnd : true});
            this._assertHasChange('Complete for-statement','main() {\n  for (int i = 0; i < 10 /**/; ) {\n    ////\n  }\n}\n',(s : any) =>  {
                return this._after(s,'    ');
            });
        } )());
    }

    test_emptyUpdatersWithBody() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('/**/','main() {\n  for (int i = 0; i < 10 /**/) {\n  }\n}\n',{
                atEnd : true});
            this._assertHasChange('Complete for-statement','main() {\n  for (int i = 0; i < 10 /**/; ) {\n  }\n}\n',(s : any) =>  {
                return this._after(s,'*/; ');
            });
        } )());
    }

    test_keywordOnly() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('for','main() {\n  for\n}\n',{
                atEnd : true});
            this._assertHasChange('Complete for-statement','main() {\n  for () {\n    ////\n  }\n}\n',(s : any) =>  {
                return this._after(s,'for (');
            });
        } )());
    }

    test_missingLeftSeparator() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('= 0','main() {\n  for (int i = 0) {\n  }\n}\n',{
                atEnd : true});
            this._assertHasChange('Complete for-statement','main() {\n  for (int i = 0; ; ) {\n  }\n}\n',(s : any) =>  {
                return this._after(s,'0; ');
            });
        } )());
    }

    test_noError() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion(';)','main() {\n  for (;;)\n  return;\n}\n',{
                atEnd : true});
            this._assertHasChange('Complete for-statement','main() {\n  for (;;) {\n    ////\n  }\n  return;\n}\n',(s : any) =>  {
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
            await this._prepareCompletion('in xs)','main() {\n  for (in xs)\n}\n',{
                atEnd : true});
            this._assertHasChange('Complete for-each-statement','main() {\n  for ( in xs) {\n    ////\n  }\n}\n',(s : any) =>  {
                return this._after(s,'for (');
            });
        } )());
    }

    test_emptyIdentifierAndIterable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('in)','main() {\n  for (in)\n}\n',{
                atEnd : true});
            this._assertHasChange('Complete for-each-statement','main() {\n  for ( in ) {\n    ////\n  }\n}\n',(s : any) =>  {
                return this._after(s,'for (');
            });
        } )());
    }

    test_emptyIterable() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('in)','main() {\n  for (var x in)\n}\n',{
                atEnd : true});
            this._assertHasChange('Complete for-each-statement','main() {\n  for (var x in ) {\n    ////\n  }\n}\n',(s : any) =>  {
                return this._after(s,'in ');
            });
        } )());
    }

    test_noError() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('])','main() {\n  for (var x in [1,2])\n  return;\n}\n',{
                atEnd : true});
            this._assertHasChange('Complete for-each-statement','main() {\n  for (var x in [1,2]) {\n    ////\n  }\n  return;\n}\n',(s : any) =>  {
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
            await this._prepareCompletion('if (true) ','main() {\n  if (true) ////\n}\n',{
                atEnd : true});
            this._assertHasChange('Complete if-statement','main() {\n  if (true) {\n    ////\n  }\n}\n',(s : any) =>  {
                return this._after(s,'    ');
            });
        } )());
    }

    test_emptyCondition() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('if ()','main() {\n  if ()\n}\n',{
                atEnd : true});
            this._assertHasChange('Complete if-statement','main() {\n  if () {\n    ////\n  }\n}\n',(s : any) =>  {
                return this._after(s,'if (');
            });
        } )());
    }

    test_keywordOnly() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('if','main() {\n  if ////\n}\n',{
                atEnd : true});
            this._assertHasChange('Complete if-statement','main() {\n  if () {\n    ////\n  }\n}\n',(s : any) =>  {
                return this._after(s,'if (');
            });
        } )());
    }

    test_noError() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('if (true)','main() {\n  if (true)\n  return;\n}\n',{
                atEnd : true});
            this._assertHasChange('Complete if-statement','main() {\n  if (true) {\n    ////\n  }\n  return;\n}\n',(s : any) =>  {
                return this._after(s,'    ');
            });
        } )());
    }

    test_withCondition() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('if (tr','main() {\n  if (true)\n}\n',{
                atEnd : true});
            this._assertHasChange('Complete if-statement','main() {\n  if (true) {\n    ////\n  }\n}\n',(s : any) =>  {
                return this._after(s,'    ');
            });
        } )());
    }

    test_withElse() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('else','main() {\n  if () {\n  } else\n}\n',{
                atEnd : true});
            this._assertHasChange('Complete if-statement','main() {\n  if () {\n  } else {\n    ////\n  }\n}\n',(s : any) =>  {
                return this._after(s,'    ');
            });
        } )());
    }

    test_withElse_BAD() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('if ()','main() {\n  if ()\n  else\n}\n',{
                atEnd : true});
            this._assertHasChange('Insert a newline at the end of the current line','main() {\n  if ()\n  else\n}\n',(s : any) =>  {
                return this._after(s,'if ()');
            });
        } )());
    }

    test_withElseNoThen() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('else','main() {\n  if ()\n  else\n}\n',{
                atEnd : true});
            this._assertHasChange('Complete if-statement','main() {\n  if ()\n  else {\n    ////\n  }\n}\n',(s : any) =>  {
                return this._after(s,'    ');
            });
        } )());
    }

    test_withinEmptyCondition() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('if (','main() {\n  if ()\n}\n',{
                atEnd : true});
            this._assertHasChange('Complete if-statement','main() {\n  if () {\n    ////\n  }\n}\n',(s : any) =>  {
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
            await this._prepareCompletion('v = 1;','main() {\n  int v = 1;\n}\n',{
                atEnd : true});
            this._assertHasChange('Insert a newline at the end of the current line','main() {\n  int v = 1;\n  ////\n}\n');
        } )());
    }

    test_noCloseParen() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('ing(3','main() {\n  var s = \'sample\'.substring(3\n}\n',{
                atEnd : true});
            this._assertHasChange('Insert a newline at the end of the current line','main() {\n  var s = \'sample\'.substring(3);\n  ////\n}\n',(s : any) =>  {
                return this._afterLast(s,'  ');
            });
        } )());
    }

    test_noCloseParenWithSemicolon() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let before : string = 'main() {\n  var s = \'sample\'.substring(3;\n}\n';
            let after : string = 'main() {\n  var s = \'sample\'.substring(3);\n  ////\n}\n';
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
            await this._prepareCompletion('=> 3','main() {\n  int f() => 3\n}\n',{
                atEnd : true});
            this._assertHasChange('Add a semicolon and newline','main() {\n  int f() => 3;\n  ////\n}\n',(s : any) =>  {
                return this._afterLast(s,'  ');
            });
        } )());
    }

    test_semicolonFnBody() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('f()','main() {\n  int f()\n}\n',{
                atEnd : true});
            this._assertHasChange('Insert a newline at the end of the current line','main() {\n  int f()\n}\n',(s : any) =>  {
                return this._afterLast(s,'()');
            });
        } )());
    }

    test_semicolonFnBodyWithDef() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('f()','main() {\n  int f()\n}\nf() {}\n',{
                atEnd : true});
            this._assertHasChange('Add a semicolon and newline','main() {\n  int f();\n  ////\n}\nf() {}\n',(s : any) =>  {
                return this._afterLast(s,'  ');
            });
        } )());
    }

    test_semicolonFnExpr() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('=>','main() {\n  int f() =>\n}\n',{
                atEnd : true});
            this._assertHasChange('Add a semicolon and newline','main() {\n  int f() => ;\n  ////\n}\n',(s : any) =>  {
                return this._afterLast(s,'=> ');
            });
        } )());
    }

    test_semicolonFnSpaceExpr() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('=>','main() {\n  int f() => ////\n}\n',{
                atEnd : true});
            this._assertHasChange('Add a semicolon and newline','main() {\n  int f() => ;\n  ////\n}\n',(s : any) =>  {
                return this._afterLast(s,'=> ');
            });
        } )());
    }

    test_semicolonVar() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('v = 1','main() {\n  int v = 1\n}\n',{
                atEnd : true});
            this._assertHasChange('Add a semicolon and newline','main() {\n  int v = 1;\n  ////\n}\n',(s : any) =>  {
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
            await this._prepareCompletion('label','main(x) {\n  switch (x) {\n    case label\n  }\n}\n',{
                atEnd : true});
            this._assertHasChange('Complete switch-statement','main(x) {\n  switch (x) {\n    case label: ////\n  }\n}\n',(s : any) =>  {
                return this._after(s,'label: ');
            });
        } )());
    }

    test_defaultNoColon() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('default','main(x) {\n  switch (x) {\n    default\n  }\n}\n',{
                atEnd : true});
            this._assertHasChange('Complete switch-statement','main(x) {\n  switch (x) {\n    default: ////\n  }\n}\n',(s : any) =>  {
                return this._after(s,'default: ');
            });
        } )());
    }

    test_emptyCondition() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('switch','main() {\n  switch ()\n}\n',{
                atEnd : true});
            this._assertHasChange('Complete switch-statement','main() {\n  switch () {\n    ////\n  }\n}\n',(s : any) =>  {
                return this._after(s,'switch (');
            });
        } )());
    }

    test_keywordOnly() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('switch','main() {\n  switch////\n}\n',{
                atEnd : true});
            this._assertHasChange('Complete switch-statement','main() {\n  switch () {\n    ////\n  }\n}\n',(s : any) =>  {
                return this._after(s,'switch (');
            });
        } )());
    }

    test_keywordSpace() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('switch','main() {\n  switch ////\n}\n',{
                atEnd : true});
            this._assertHasChange('Complete switch-statement','main() {\n  switch () {\n    ////\n  }\n}\n',(s : any) =>  {
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
            await this._prepareCompletion('{} catch','main() {\n  try {\n  } catch(e){} catch ////\n}\n',{
                atEnd : true});
            this._assertHasChange('Complete try-statement','main() {\n  try {\n  } catch(e){} catch () {\n    ////\n  }\n}\n',(s : any) =>  {
                return this._after(s,'catch (');
            });
        } )());
    }

    test_catchSecond() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('} catch ','main() {\n  try {\n  } catch() {\n  } catch(e){} catch ////\n}\n',{
                atEnd : true});
            this._assertHasChange('Complete try-statement','main() {\n  try {\n  } catch() {\n  } catch(e){} catch () {\n    ////\n  }\n}\n',(s : any) =>  {
                return this._afterLast(s,'catch (');
            });
        } )());
    }

    test_finallyOnly() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('finally','main() {\n  try {\n  } finally\n}\n',{
                atEnd : true});
            this._assertHasChange('Complete try-statement','main() {\n  try {\n  } finally {\n    ////\n  }\n}\n',(s : any) =>  {
                return this._after(s,'    ');
            });
        } )());
    }

    test_keywordOnly() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('try','main() {\n  try////\n}\n',{
                atEnd : true});
            this._assertHasChange('Complete try-statement','main() {\n  try {\n    ////\n  }\n}\n',(s : any) =>  {
                return this._after(s,'    ');
            });
        } )());
    }

    test_keywordSpace() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('try','main() {\n  try ////\n}\n',{
                atEnd : true});
            this._assertHasChange('Complete try-statement','main() {\n  try {\n    ////\n  }\n}\n',(s : any) =>  {
                return this._after(s,'    ');
            });
        } )());
    }

    test_onCatch() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('on','main() {\n  try {\n  } on catch\n}\n',{
                atEnd : true});
            this._assertHasChange('Complete try-statement','main() {\n  try {\n  } on catch () {\n    ////\n  }\n}\n',(s : any) =>  {
                return this._after(s,'catch (');
            });
        } )());
    }

    test_onCatchComment() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('on','main() {\n  try {\n  } on catch\n  //\n}\n',{
                atEnd : true});
            this._assertHasChange('Complete try-statement','main() {\n  try {\n  } on catch () {\n    ////\n  }\n  //\n}\n',(s : any) =>  {
                return this._after(s,'catch (');
            });
        } )());
    }

    test_onOnly() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('on','main() {\n  try {\n  } on\n}\n',{
                atEnd : true});
            this._assertHasChange('Complete try-statement','main() {\n  try {\n  } on  {\n    ////\n  }\n}\n',(s : any) =>  {
                return this._after(s,' on ');
            });
        } )());
    }

    test_onSpace() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('on','main() {\n  try {\n  } on ////\n}\n',{
                atEnd : true});
            this._assertHasChange('Complete try-statement','main() {\n  try {\n  } on  {\n    ////\n  }\n}\n',(s : any) =>  {
                return this._after(s,' on ');
            });
        } )());
    }

    test_onSpaces() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('on','main() {\n  try {\n  } on  ////\n}\n',{
                atEnd : true});
            this._assertHasChange('Complete try-statement','main() {\n  try {\n  } on  {\n    ////\n  }\n}\n',(s : any) =>  {
                return this._after(s,' on ');
            });
        } )());
    }

    test_onType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this._prepareCompletion('on','main() {\n  try {\n  } on Exception\n}\n',{
                atEnd : true});
            this._assertHasChange('Complete try-statement','main() {\n  try {\n  } on Exception {\n    ////\n  }\n}\n',(s : any) =>  {
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
            await this._prepareCompletion('while','main() {\n  while ////\n}\n',{
                atEnd : true});
            this._assertHasChange('Complete while-statement','main() {\n  while () {\n    ////\n  }\n}\n',(s : any) =>  {
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
