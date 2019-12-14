/** Library asset:datahedgehog_monitor/lib/lib/kernel/lib/transformations/async.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../visitor";
import * as lib4 from "./continuation";
import * as lib5 from "./../ast";

export namespace ExpressionLifter {
    export type Constructors = lib3.Transformer.Constructors | 'ExpressionLifter';
    export type Interface = Omit<ExpressionLifter, Constructors>;
}
@DartClass
export class ExpressionLifter extends lib3.Transformer {
    continuationRewriter : lib4.AsyncRewriterBase;

    seenAwait : boolean;

    statements : core.DartList<lib5.Statement>;

    nameIndex : number;

    asyncResult : lib5.VariableDeclaration;

    variables : core.DartList<lib5.VariableDeclaration>;

    constructor(continuationRewriter : lib4.AsyncRewriterBase) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ExpressionLifter(continuationRewriter : lib4.AsyncRewriterBase) {
        this.seenAwait = false;
        this.statements = new core.DartList.literal<lib5.Statement>();
        this.nameIndex = 0;
        this.asyncResult = new lib5.VariableDeclaration(':result');
        this.variables = new core.DartList.literal<lib5.VariableDeclaration>();
        this.continuationRewriter = continuationRewriter;
    }
    blockOf(stmts : core.DartList<lib5.Statement>) : lib5.Block {
        return new lib5.Block(stmts.reversed.toList());
    }
    rewrite(expression : lib5.Expression,outer : core.DartList<lib5.Statement>) : lib5.Expression {
        /* TODO (AssertStatementImpl) : assert (statements.isEmpty); */;
        /* TODO (AssertStatementImpl) : assert (nameIndex == 0); */;
        this.seenAwait = false;
        let result : lib5.Expression = expression.accept(this);
        outer.addAll(this.statements.reversed);
        this.statements.clear();
        this.nameIndex = 0;
        return result;
    }
    delimit(action : () => lib5.Expression,inner : core.DartList<lib5.Statement>) : lib5.Expression {
        let index = this.nameIndex;
        let outer = this.statements;
        this.statements = inner;
        let result : lib5.Expression = action();
        this.nameIndex = index;
        this.statements = outer;
        return result;
    }
    name(expr : lib5.Expression) : lib5.VariableGet {
        let temp : lib5.VariableDeclaration = this.allocateTemporary(this.nameIndex);
        this.statements.add(new lib5.ExpressionStatement(new lib5.VariableSet(temp,expr)));
        return new lib5.VariableGet(temp);
    }
    allocateTemporary(index : number) : lib5.VariableDeclaration {
        for(let i = this.variables.length; i <= index; i++){
            this.variables.add(new lib5.VariableDeclaration(`:async_temporary_${i}`));
        }
        return this.variables[index];
    }
    visitSymbolLiteral(expr : lib5.SymbolLiteral) : lib5.TreeNode {
        return expr;
    }
    visitTypeLiteral(expr : lib5.TypeLiteral) : lib5.TreeNode {
        return expr;
    }
    visitThisExpression(expr : lib5.ThisExpression) : lib5.TreeNode {
        return expr;
    }
    visitStringLiteral(expr : lib5.StringLiteral) : lib5.TreeNode {
        return expr;
    }
    visitIntLiteral(expr : lib5.IntLiteral) : lib5.TreeNode {
        return expr;
    }
    visitDoubleLiteral(expr : lib5.DoubleLiteral) : lib5.TreeNode {
        return expr;
    }
    visitBoolLiteral(expr : lib5.BoolLiteral) : lib5.TreeNode {
        return expr;
    }
    visitNullLiteral(expr : lib5.NullLiteral) : lib5.TreeNode {
        return expr;
    }
    nullary(expr : lib5.Expression) : lib5.Expression {
        if (this.seenAwait) {
            expr = this.name(expr);
            ++this.nameIndex;
        }
        return expr;
    }
    visitInvalidExpression(expr : lib5.InvalidExpression) : lib5.TreeNode {
        return this.nullary(expr);
    }
    visitSuperPropertyGet(expr : lib5.SuperPropertyGet) : lib5.TreeNode {
        return this.nullary(expr);
    }
    visitStaticGet(expr : lib5.StaticGet) : lib5.TreeNode {
        return this.nullary(expr);
    }
    visitRethrow(expr : lib5.Rethrow) : lib5.TreeNode {
        return this.nullary(expr);
    }
    visitVariableGet(expr : lib5.VariableGet) : lib5.TreeNode {
        if (this.seenAwait && !expr.variable.isFinal && !expr.variable.isConst) {
            expr = this.name(expr);
            ++this.nameIndex;
        }
        return expr;
    }
    transform(expr : lib5.Expression,action : () => void) : lib5.Expression {
        let shouldName = this.seenAwait;
        let result = shouldName ? this.name(expr) : expr;
        let index = this.nameIndex;
        this.seenAwait = false;
        action();
        if (shouldName) {
            this.nameIndex = index + 1;
            this.seenAwait = true;
        }
        return result;
    }
    unary(expr : lib5.Expression) : lib5.Expression {
        return this.transform(expr,() =>  {
            expr.transformChildren(this);
        });
    }
    visitVariableSet(expr : lib5.VariableSet) : lib5.TreeNode {
        return this.unary(expr);
    }
    visitPropertyGet(expr : lib5.PropertyGet) : lib5.TreeNode {
        return this.unary(expr);
    }
    visitDirectPropertyGet(expr : lib5.DirectPropertyGet) : lib5.TreeNode {
        return this.unary(expr);
    }
    visitSuperPropertySet(expr : lib5.SuperPropertySet) : lib5.TreeNode {
        return this.unary(expr);
    }
    visitStaticSet(expr : lib5.StaticSet) : lib5.TreeNode {
        return this.unary(expr);
    }
    visitNot(expr : lib5.Not) : lib5.TreeNode {
        return this.unary(expr);
    }
    visitIsExpression(expr : lib5.IsExpression) : lib5.TreeNode {
        return this.unary(expr);
    }
    visitAsExpression(expr : lib5.AsExpression) : lib5.TreeNode {
        return this.unary(expr);
    }
    visitThrow(expr : lib5.Throw) : lib5.TreeNode {
        return this.unary(expr);
    }
    visitPropertySet(expr : lib5.PropertySet) : lib5.TreeNode {
        return this.transform(expr,() =>  {
            expr.value = ((_) : any =>  {
                {
                    _.parent = expr;
                    return _;
                }
            })(expr.value.accept(this));
            expr.receiver = ((_) : any =>  {
                {
                    _.parent = expr;
                    return _;
                }
            })(expr.receiver.accept(this));
        });
    }
    visitDirectPropertySet(expr : lib5.DirectPropertySet) : lib5.TreeNode {
        return this.transform(expr,() =>  {
            expr.value = ((_) : any =>  {
                {
                    _.parent = expr;
                    return _;
                }
            })(expr.value.accept(this));
            expr.receiver = ((_) : any =>  {
                {
                    _.parent = expr;
                    return _;
                }
            })(expr.receiver.accept(this));
        });
    }
    visitArguments(args : lib5.Arguments) : lib5.TreeNode {
        for(let named of args.named.reversed) {
            named.value = ((_) : any =>  {
                {
                    _.parent = named;
                    return _;
                }
            })(named.value.accept(this));
        }
        let positional = args.positional;
        for(let i = positional.length - 1; i >= 0; --i){
            positional[i] = ((_) : any =>  {
                {
                    _.parent = args;
                    return _;
                }
            })(positional[i].accept(this));
        }
        return args;
    }
    visitMethodInvocation(expr : lib5.MethodInvocation) : lib5.TreeNode {
        return this.transform(expr,() =>  {
            this.visitArguments(expr.arguments);
            expr.receiver = ((_) : any =>  {
                {
                    _.parent = expr;
                    return _;
                }
            })(expr.receiver.accept(this));
        });
    }
    visitDirectMethodInvocation(expr : lib5.DirectMethodInvocation) : lib5.TreeNode {
        return this.transform(expr,() =>  {
            this.visitArguments(expr.arguments);
            expr.receiver = ((_) : any =>  {
                {
                    _.parent = expr;
                    return _;
                }
            })(expr.receiver.accept(this));
        });
    }
    visitSuperMethodInvocation(expr : lib5.SuperMethodInvocation) : lib5.TreeNode {
        return this.transform(expr,() =>  {
            this.visitArguments(expr.arguments);
        });
    }
    visitStaticInvocation(expr : lib5.StaticInvocation) : lib5.TreeNode {
        return this.transform(expr,() =>  {
            this.visitArguments(expr.arguments);
        });
    }
    visitConstructorInvocation(expr : lib5.ConstructorInvocation) : lib5.TreeNode {
        return this.transform(expr,() =>  {
            this.visitArguments(expr.arguments);
        });
    }
    visitStringConcatenation(expr : lib5.StringConcatenation) : lib5.TreeNode {
        return this.transform(expr,() =>  {
            let expressions = expr.expressions;
            for(let i = expressions.length - 1; i >= 0; --i){
                expressions[i] = ((_) : any =>  {
                    {
                        _.parent = expr;
                        return _;
                    }
                })(expressions[i].accept(this));
            }
        });
    }
    visitListLiteral(expr : lib5.ListLiteral) : lib5.TreeNode {
        return this.transform(expr,() =>  {
            let expressions = expr.expressions;
            for(let i = expressions.length - 1; i >= 0; --i){
                expressions[i] = ((_) : any =>  {
                    {
                        _.parent = expr;
                        return _;
                    }
                })(expr.expressions[i].accept(this));
            }
        });
    }
    visitMapLiteral(expr : lib5.MapLiteral) : lib5.TreeNode {
        return this.transform(expr,() =>  {
            for(let entry of expr.entries.reversed) {
                entry.value = ((_) : any =>  {
                    {
                        _.parent = entry;
                        return _;
                    }
                })(entry.value.accept(this));
                entry.key = ((_) : any =>  {
                    {
                        _.parent = entry;
                        return _;
                    }
                })(entry.key.accept(this));
            }
        });
    }
    visitLogicalExpression(expr : lib5.LogicalExpression) : lib5.TreeNode {
        let shouldName = this.seenAwait;
        let rightStatements = new core.DartList.literal<lib5.Statement>();
        this.seenAwait = false;
        expr.right = ((_) : lib5.Expression =>  {
            {
                _.parent = expr;
                return _;
            }
        })(this.delimit(() =>  {
            return expr.right.accept(this);
        },rightStatements));
        let rightAwait = this.seenAwait;
        if (rightStatements.isEmpty) {
            this.seenAwait = shouldName;
            return this.transform(expr,() =>  {
                expr.left = ((_) : any =>  {
                    {
                        _.parent = expr;
                        return _;
                    }
                })(expr.left.accept(this));
                this.seenAwait = this.seenAwait || rightAwait;
            });
        }
        let rightBody = this.blockOf(rightStatements);
        let result = this.allocateTemporary(this.nameIndex);
        rightBody.addStatement(new lib5.ExpressionStatement(new lib5.VariableSet(result,new lib5.MethodInvocation(expr.right,new lib5.Name('=='),new lib5.Arguments(new core.DartList.literal<lib5.Expression>(new lib5.BoolLiteral(true)))))));
        let then, otherwise;
        if (expr.operator == '&&') {
            then = rightBody;
            otherwise = null;
        }else {
            then = new lib5.EmptyStatement();
            otherwise = rightBody;
        }
        this.statements.add(new lib5.IfStatement(new lib5.VariableGet(result),then,otherwise));
        let test = new lib5.MethodInvocation(expr.left,new lib5.Name('=='),new lib5.Arguments(new core.DartList.literal<lib5.Expression>(new lib5.BoolLiteral(true))));
        this.statements.add(new lib5.ExpressionStatement(new lib5.VariableSet(result,test)));
        this.seenAwait = false;
        test.receiver = ((_) : any =>  {
            {
                _.parent = test;
                return _;
            }
        })(test.receiver.accept(this));
        ++this.nameIndex;
        this.seenAwait = this.seenAwait || rightAwait;
        return new lib5.VariableGet(result);
    }
    visitConditionalExpression(expr : lib5.ConditionalExpression) : lib5.TreeNode {
        let shouldName = this.seenAwait;
        let thenStatements = new core.DartList.literal<lib5.Statement>();
        this.seenAwait = false;
        expr.then = ((_) : lib5.Expression =>  {
            {
                _.parent = expr;
                return _;
            }
        })(this.delimit(() =>  {
            return expr.then.accept(this);
        },thenStatements));
        let thenAwait = this.seenAwait;
        let otherwiseStatements = new core.DartList.literal<lib5.Statement>();
        this.seenAwait = false;
        expr.otherwise = ((_) : lib5.Expression =>  {
            {
                _.parent = expr;
                return _;
            }
        })(this.delimit(() =>  {
            return expr.otherwise.accept(this);
        },otherwiseStatements));
        let otherwiseAwait = this.seenAwait;
        if (thenStatements.isEmpty && otherwiseStatements.isEmpty) {
            this.seenAwait = shouldName;
            return this.transform(expr,() =>  {
                expr.condition = ((_) : any =>  {
                    {
                        _.parent = expr;
                        return _;
                    }
                })(expr.condition.accept(this));
                this.seenAwait = this.seenAwait || thenAwait || otherwiseAwait;
            });
        }
        let result = this.allocateTemporary(this.nameIndex);
        let thenBody = this.blockOf(thenStatements);
        let otherwiseBody = this.blockOf(otherwiseStatements);
        thenBody.addStatement(new lib5.ExpressionStatement(new lib5.VariableSet(result,expr.then)));
        otherwiseBody.addStatement(new lib5.ExpressionStatement(new lib5.VariableSet(result,expr.otherwise)));
        let branch = new lib5.IfStatement(expr.condition,thenBody,otherwiseBody);
        this.statements.add(branch);
        this.seenAwait = false;
        branch.condition = ((_) : any =>  {
            {
                _.parent = branch;
                return _;
            }
        })(branch.condition.accept(this));
        ++this.nameIndex;
        this.seenAwait = this.seenAwait || thenAwait || otherwiseAwait;
        return new lib5.VariableGet(result);
    }
    visitAwaitExpression(expr : lib5.AwaitExpression) : lib5.TreeNode {
        let R = this.continuationRewriter;
        let shouldName = this.seenAwait;
        let result = new lib5.VariableGet(this.asyncResult);
        if (shouldName) result = this.name(result);
        this.statements.add(((_) : lib5.Statement =>  {
            {
                _.fileOffset = expr.fileOffset;
                return _;
            }
        })(R.createContinuationPoint()));
        let arguments : lib5.Arguments = new lib5.Arguments(new core.DartList.literal<lib5.Expression>(expr.operand,new lib5.VariableGet(R.thenContinuationVariable),new lib5.VariableGet(R.catchErrorContinuationVariable),new lib5.VariableGet(R.nestedClosureVariable)));
        this.statements.add(new lib5.ExpressionStatement(((_) : lib5.StaticInvocation =>  {
            {
                _.fileOffset = expr.fileOffset;
                return _;
            }
        })(new lib5.StaticInvocation(R.helper.awaitHelper,arguments))));
        this.seenAwait = false;
        let index = this.nameIndex;
        arguments.positional[0] = ((_) : any =>  {
            {
                _.parent = arguments;
                return _;
            }
        })(expr.operand.accept(this));
        if (shouldName) this.nameIndex = index + 1;
        this.seenAwait = true;
        return result;
    }
    visitFunctionExpression(expr : lib5.FunctionExpression) : lib5.TreeNode {
        expr.transformChildren(this);
        return expr;
    }
    visitLet(expr : lib5.Let) : lib5.TreeNode {
        let shouldName = this.seenAwait;
        this.seenAwait = false;
        let body = expr.body.accept(this);
        let variable : lib5.VariableDeclaration = expr.variable;
        if (this.seenAwait) {
            this.statements.add(variable);
            let index = this.nameIndex;
            this.seenAwait = false;
            variable.initializer = ((_) : any =>  {
                {
                    _.parent = variable;
                    return _;
                }
            })(variable.initializer.accept(this));
            this.nameIndex = index + 1;
            this.seenAwait = true;
            return body;
        }else {
            this.seenAwait = shouldName;
            return this.transform(expr,() =>  {
                expr.body = ((_) : any =>  {
                    {
                        _.parent = expr;
                        return _;
                    }
                })(body);
                variable.initializer = ((_) : any =>  {
                    {
                        _.parent = variable;
                        return _;
                    }
                })(variable.initializer.accept(this));
            });
        }
    }
    visitFunctionNode(node : lib5.FunctionNode) {
        let nestedRewriter = new lib4.RecursiveContinuationRewriter(this.continuationRewriter.helper);
        return node.accept(nestedRewriter);
    }
}

export class properties {
}
