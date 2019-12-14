/** Library asset:datahedgehog_monitor/lib/lib/kernel/lib/transformations/closure/converter.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../../visitor";
import * as lib4 from "./../../core_types";
import * as lib5 from "./../../ast";
import * as lib6 from "./clone_without_body";
import * as lib7 from "./../../clone";
import * as lib8 from "./context";
import * as lib9 from "./rewriter";
import * as lib10 from "./info";
import * as lib11 from "./../../frontend/accessors";
import * as lib12 from "./../../type_algebra";

export namespace ClosureConverter {
    export type Constructors = lib3.Transformer.Constructors | 'ClosureConverter';
    export type Interface = Omit<ClosureConverter, Constructors>;
}
@DartClass
export class ClosureConverter extends lib3.Transformer {
    coreTypes : lib4.CoreTypes;

    contextClass : lib5.Class;

    capturedVariables : core.DartSet<lib5.VariableDeclaration>;

    capturedTypeVariables : core.DartMap<lib5.FunctionNode,core.DartSet<lib5.TypeParameter>>;

    thisAccess : core.DartMap<lib5.FunctionNode,lib5.VariableDeclaration>;

    localNames : core.DartMap<lib5.FunctionNode,string>;

    contextClonePlaceHolders : core.DartSet<lib5.InvalidExpression>;

    tearOffGetterNames : core.DartMap<lib5.Name,lib5.Name>;

    cloner : lib7.CloneVisitor;

    newLibraryMembers : core.DartList<lib5.TreeNode>;

    newClassMembers : core.DartList<lib5.Member>;

    currentLibrary : lib5.Library;

    currentClass : lib5.Class;

    currentMember : lib5.Member;

    currentMemberFunction : lib5.FunctionNode;

    currentFunction : lib5.FunctionNode;

    context : lib8.Context;

    rewriter : lib9.AstRewriter;

    typeSubstitution : core.DartMap<lib5.TypeParameter,lib5.DartType>;

    constructor(coreTypes : lib4.CoreTypes,info : lib10.ClosureInfo,contextClass : lib5.Class) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ClosureConverter(coreTypes : lib4.CoreTypes,info : lib10.ClosureInfo,contextClass : lib5.Class) {
        this.contextClonePlaceHolders = new core.DartSet<lib5.InvalidExpression>();
        this.cloner = new lib6.CloneWithoutBody();
        this.newLibraryMembers = new core.DartList.literal<lib5.TreeNode>();
        this.newClassMembers = new core.DartList.literal<lib5.Member>();
        this.typeSubstitution = new core.DartMap.literal([
        ]);
        this.capturedVariables = info.variables;
        this.capturedTypeVariables = info.typeVariables;
        this.thisAccess = info.thisAccess;
        this.localNames = info.localNames;
        this.tearOffGetterNames = info.tearOffGetterNames;
        this.coreTypes = coreTypes;
        this.contextClass = contextClass;
    }
    get isOuterMostContext() : boolean {
        return op(Op.EQUALS,this.currentFunction,null) || op(Op.EQUALS,this.currentMemberFunction,this.currentFunction);
    }
    get currentFileUri() : string {
        if (is(this.currentMember, lib5.Constructor)) return this.currentClass.fileUri;
        if (is(this.currentMember, lib5.Field)) return (this.currentMember as lib5.Field).fileUri;
        if (is(this.currentMember, lib5.Procedure)) return (this.currentMember as lib5.Procedure).fileUri;
        throw `No file uri for ${this.currentMember.runtimeType}`;
    }
    saveContext(f : () => lib5.TreeNode) : lib5.TreeNode {
        let old : lib9.AstRewriter = this.rewriter;
        let savedContext : lib8.Context = this.context;
        try {
            return f();
        } finally {
            this.rewriter = old;
            this.context = savedContext;
        }
    }
    visitLibrary(node : lib5.Library) : lib5.TreeNode {
        /* TODO (AssertStatementImpl) : assert (newLibraryMembers.isEmpty); */;
        if (op(Op.EQUALS,node,this.contextClass.enclosingLibrary)) return node;
        this.currentLibrary = node;
        node = super.visitLibrary(node);
        for(let member of this.newLibraryMembers) {
            if (is(member, lib5.Class)) {
                node.addClass(member);
            }else {
                node.addMember(member);
            }
        }
        this.newLibraryMembers.clear();
        this.currentLibrary = null;
        return node;
    }
    visitClass(node : lib5.Class) : lib5.TreeNode {
        /* TODO (AssertStatementImpl) : assert (newClassMembers.isEmpty); */;
        this.currentClass = node;
        node = super.visitClass(node);
        this.newClassMembers.forEach(node.addMember.bind(node));
        this.newClassMembers.clear();
        this.currentClass = null;
        return node;
    }
    extendContextWith(parameter : lib5.VariableDeclaration) : void {
        this.context.extend(parameter,new lib5.VariableGet(parameter));
    }
    visitConstructor(node : lib5.Constructor) : lib5.TreeNode {
        /* TODO (AssertStatementImpl) : assert (isEmptyContext); */;
        this.currentMember = node;
        for(let initializer of node.initializers) {
            if (is(initializer, lib5.FieldInitializer)) {
                this.rewriter = new lib9.InitializerRewriter(initializer.value);
                this.context = new lib8.NoContext(this);
                let initializerExpression : lib5.Expression = initializer.value;
                node.function.positionalParameters.where(this.capturedVariables.contains.bind(this.capturedVariables)).forEach(this.extendContextWith.bind(this));
                node.function.namedParameters.where(this.capturedVariables.contains.bind(this.capturedVariables)).forEach(this.extendContextWith.bind(this));
                let parent = initializerExpression.parent;
                initializerExpression = initializerExpression.accept(this);
                initializerExpression.parent = parent;
                if (is(parent, lib5.Let)) {
                    parent.body = initializerExpression;
                }else if (is(parent, lib5.FieldInitializer)) {
                    parent.value = initializerExpression;
                }else {
                    throw `Found unexpected node '${node.runtimeType}, expected a 'Let' ` + "or a 'FieldInitializer'.";
                }
            }
        }
        this.rewriter = null;
        let function : lib5.FunctionNode = node.function;
        if (function.body != null && isNot(function.body, lib5.EmptyStatement)) {
            this.setupContextForFunctionBody(function);
            let self : lib5.VariableDeclaration = this.thisAccess.get(this.currentMemberFunction);
            if (self != null) {
                this.context.extend(self,new lib5.ThisExpression());
            }
            node.function.accept(this);
            this.resetContext();
        }
        return node;
    }
    makeRewriterForBody(function : lib5.FunctionNode) : lib9.AstRewriter {
        let body : lib5.Statement = function.body;
        if (isNot(body, lib5.Block)) {
            body = new lib5.Block(new core.DartList.literal<lib5.Statement>(body));
            function.body = function.body.parent = body;
        }
        return new lib9.BlockRewriter(body);
    }
    isObject(type : lib5.DartType) : boolean {
        return is(type, lib5.InterfaceType) && op(Op.EQUALS,type.classNode.supertype,null);
    }
    handleLocalFunction(function : lib5.FunctionNode) : lib5.Expression {
        let enclosingFunction : lib5.FunctionNode = this.currentFunction;
        let enclosingTypeSubstitution : core.DartMap<lib5.TypeParameter,lib5.DartType> = this.typeSubstitution;
        this.currentFunction = function;
        let body : lib5.Statement = function.body;
        /* TODO (AssertStatementImpl) : assert (body != null); */;
        this.rewriter = this.makeRewriterForBody(function);
        let contextVariable : lib5.VariableDeclaration = new lib5.VariableDeclaration("#contextParameter",{
            type : new lib5.VectorType()});
        let parent : lib8.Context = this.context;
        this.context = this.context.toNestedContext(new lib11.VariableAccessor(contextVariable,null,lib5.TreeNode.noOffset));
        let captured : core.DartSet<lib5.TypeParameter> = this.capturedTypeVariables.get(this.currentFunction);
        if (captured != null) {
            this.typeSubstitution = this.copyTypeVariables(captured);
        }else {
            this.typeSubstitution = new core.DartMap.literal([
            ]);
        }
        let replacementTypeSubstitution : core.DartMap<lib5.TypeParameter,lib5.DartType> = new core.DartMap.literal([
        ]);
        for(let parameter of this.typeSubstitution.keys) {
            replacementTypeSubstitution.set(parameter,new lib5.DynamicType());
        }
        for(let parameter of this.typeSubstitution.keys) {
            if (!this.isObject(parameter.bound)) {
                replacementTypeSubstitution.set(parameter,lib12.substitute(parameter.bound,replacementTypeSubstitution));
            }
        }
        this.typeSubstitution = replacementTypeSubstitution;
        function.transformChildren(this);
        this.typeSubstitution = new core.DartMap.literal([
        ]);
        let result : lib5.Expression = this.addClosure(function,contextVariable,parent.expression,this.typeSubstitution,enclosingTypeSubstitution);
        this.currentFunction = enclosingFunction;
        this.typeSubstitution = enclosingTypeSubstitution;
        return result;
    }
    visitFunctionDeclaration(node : lib5.FunctionDeclaration) : lib5.TreeNode {
        let isCaptured : boolean = this.capturedVariables.contains(node.variable);
        if (isCaptured) {
            this.context.extend(node.variable,new lib5.InvalidExpression());
        }
        let parent : lib8.Context = this.context;
        return this.saveContext(() =>  {
            let expression : lib5.Expression = this.handleLocalFunction(node.function);
            if (isCaptured) {
                parent.update(node.variable,expression);
                return null;
            }else {
                node.variable.initializer = expression;
                expression.parent = node.variable;
                return node.variable;
            }
        });
    }
    visitFunctionExpression(node : lib5.FunctionExpression) : lib5.TreeNode {
        return this.saveContext(() =>  {
            return this.handleLocalFunction(node.function);
        });
    }
    addClosure(function : lib5.FunctionNode,contextVariable : lib5.VariableDeclaration,accessContext : lib5.Expression,substitution : core.DartMap<lib5.TypeParameter,lib5.DartType>,enclosingTypeSubstitution : core.DartMap<lib5.TypeParameter,lib5.DartType>) : lib5.Expression {
        function.positionalParameters.insert(0,contextVariable);
        ++function.requiredParameterCount;
        let closedTopLevelFunction : lib5.Procedure = new lib5.Procedure(new lib5.Name(this.createNameForClosedTopLevelFunction(function)),lib5.ProcedureKind.Method,function,{
            isStatic : true,fileUri : this.currentFileUri});
        this.newLibraryMembers.add(closedTopLevelFunction);
        let closureType : lib5.FunctionType = new lib5.FunctionType(function.positionalParameters.skip(1).map((decl : lib5.VariableDeclaration) =>  {
            return decl.type;
        }).toList(),function.returnType,{
            namedParameters : function.namedParameters.map((decl : lib5.VariableDeclaration) =>  {
                return new lib5.NamedType(decl.name,decl.type);
            }).toList(),typeParameters : function.typeParameters,requiredParameterCount : function.requiredParameterCount - 1});
        return new lib5.ClosureCreation(closedTopLevelFunction,accessContext,closureType);
    }
    visitField(node : lib5.Field) : lib5.TreeNode {
        this.currentMember = node;
        this.context = new lib8.NoContext(this);
        if (node.isInstanceMember) {
            let tearOffName : lib5.Name = this.tearOffGetterNames.get(node.name);
            if (tearOffName != null) {
                this.addFieldForwarder(tearOffName,node);
            }
        }
        node = super.visitField(node);
        this.context = null;
        this.currentMember = null;
        return node;
    }
    visitProcedure(node : lib5.Procedure) : lib5.TreeNode {
        /* TODO (AssertStatementImpl) : assert (isEmptyContext); */;
        this.currentMember = node;
        if (node.isInstanceMember) {
            let tearOffName : lib5.Name = this.tearOffGetterNames.get(node.name);
            if (tearOffName != null) {
                if (node.isGetter) {
                    let oldName : lib5.Name = node.name;
                    node.name = tearOffName;
                    this.addGetterForwarder(oldName,node);
                }else if (op(Op.EQUALS,node.kind,lib5.ProcedureKind.Method)) {
                    this.addTearOffMethod(tearOffName,node);
                }
            }
        }
        let function : lib5.FunctionNode = node.function;
        if (function.body != null) {
            this.setupContextForFunctionBody(function);
            let self : lib5.VariableDeclaration = this.thisAccess.get(this.currentMemberFunction);
            if (self != null) {
                this.context.extend(self,new lib5.ThisExpression());
            }
            node.transformChildren(this);
            this.resetContext();
        }
        return node;
    }
    setupContextForFunctionBody(function : lib5.FunctionNode) : void {
        let body : lib5.Statement = function.body;
        /* TODO (AssertStatementImpl) : assert (body != null); */;
        this.currentMemberFunction = function;
        this.rewriter = this.makeRewriterForBody(function);
        this.context = new lib8.NoContext(this);
    }
    resetContext() : void {
        this.rewriter = null;
        this.context = null;
        this.currentMemberFunction = null;
        this.currentMember = null;
    }
    get isEmptyContext() : boolean {
        return op(Op.EQUALS,this.rewriter,null) && op(Op.EQUALS,this.context,null);
    }
    visitLocalInitializer(node : lib5.LocalInitializer) : lib5.TreeNode {
        /* TODO (AssertStatementImpl) : assert (!capturedVariables.contains(node.variable)); */;
        node.transformChildren(this);
        return node;
    }
    visitFunctionNode(node : lib5.FunctionNode) : lib5.TreeNode {
        lib5.transformList(node.typeParameters,this,node);
        node.positionalParameters.where(this.capturedVariables.contains.bind(this.capturedVariables)).forEach(this.extendContextWith.bind(this));
        node.namedParameters.where(this.capturedVariables.contains.bind(this.capturedVariables)).forEach(this.extendContextWith.bind(this));
        /* TODO (AssertStatementImpl) : assert (node.body != null); */;
        node.body = node.body.accept(this);
        node.body.parent = node;
        return node;
    }
    visitBlock(node : lib5.Block) : lib5.TreeNode {
        return this.saveContext(() =>  {
            let blockRewriter : lib9.BlockRewriter = this.rewriter = this.rewriter.forNestedBlock(node);
            blockRewriter.transformStatements(node,this);
            return node;
        });
    }
    visitVariableDeclaration(node : lib5.VariableDeclaration) : lib5.TreeNode {
        node.transformChildren(this);
        if (!this.capturedVariables.contains(node)) return node;
        if (op(Op.EQUALS,node.initializer,null) && is(node.parent, lib5.FunctionNode)) {
            this.context.extend(node,new lib5.VariableGet(node));
        }else {
            this.context.extend(node,(node.initializer || new lib5.NullLiteral()));
        }
        if (op(Op.EQUALS,node.parent,this.currentFunction)) {
            return node;
        }else {
            /* TODO (AssertStatementImpl) : assert (node.parent is Block); */;
            return null;
        }
    }
    visitVariableGet(node : lib5.VariableGet) : lib5.TreeNode {
        return this.capturedVariables.contains(node.variable) ? this.context.lookup(node.variable) : node;
    }
    visitVariableSet(node : lib5.VariableSet) : lib5.TreeNode {
        node.transformChildren(this);
        return this.capturedVariables.contains(node.variable) ? this.context.assign(node.variable,node.value,{
            voidContext : this.isInVoidContext(node)}) : node;
    }
    isInVoidContext(node : lib5.Expression) : boolean {
        let parent : lib5.TreeNode = node.parent;
        return is(parent, lib5.ExpressionStatement) || is(parent, lib5.ForStatement) && parent.condition != node;
    }
    visitDartType(node : lib5.DartType) : lib5.DartType {
        return lib12.substitute(node,this.typeSubstitution);
    }
    getReplacementLoopVariable(variable : lib5.VariableDeclaration) : lib5.VariableDeclaration {
        let newVariable : lib5.VariableDeclaration = ((_) : lib5.VariableDeclaration =>  {
            {
                _.flags = variable.flags;
                return _;
            }
        })(new lib5.VariableDeclaration(variable.name,{
            initializer : variable.initializer,type : variable.type}));
        variable.initializer = new lib5.VariableGet(newVariable);
        variable.initializer.parent = variable;
        return newVariable;
    }
    cloneContext() : lib5.Expression {
        let placeHolder : lib5.InvalidExpression = new lib5.InvalidExpression();
        this.contextClonePlaceHolders.add(placeHolder);
        return placeHolder;
    }
    visitInvalidExpression(node : lib5.InvalidExpression) : lib5.TreeNode {
        return this.contextClonePlaceHolders.remove(node) ? this.context.clone() : node;
    }
    visitForStatement(node : lib5.ForStatement) : lib5.TreeNode {
        if (node.variables.any(this.capturedVariables.contains.bind(this.capturedVariables))) {
            return this.saveContext(() =>  {
                this.context = this.context.toNestedContext();
                let statements : core.DartList<lib5.Statement> = new core.DartList.literal<lib5.Statement>();
                statements.addAll(node.variables);
                statements.add(node);
                node.variables.clear();
                node.updates.insert(0,this.cloneContext());
                let block : lib5.Block = new lib5.Block(statements);
                this.rewriter = new lib9.BlockRewriter(block);
                return block.accept(this);
            });
        }
        return super.visitForStatement(node);
    }
    visitForInStatement(node : lib5.ForInStatement) : lib5.TreeNode {
        if (this.capturedVariables.contains(node.variable)) {
            let variable : lib5.VariableDeclaration = node.variable;
            let newVariable : lib5.VariableDeclaration = this.getReplacementLoopVariable(variable);
            node.variable = newVariable;
            newVariable.parent = node;
            node.body = new lib5.Block(new core.DartList.literal<lib5.Statement>(variable,node.body));
            node.body.parent = node;
        }
        return super.visitForInStatement(node);
    }
    visitThisExpression(node : lib5.ThisExpression) : lib5.TreeNode {
        return this.isOuterMostContext ? node : this.context.lookup(this.thisAccess.get(this.currentMemberFunction));
    }
    visitStaticGet(node : lib5.StaticGet) : lib5.TreeNode {
        let target : lib5.Member = node.target;
        if (is(target, lib5.Procedure) && op(Op.EQUALS,target.kind,lib5.ProcedureKind.Method)) {
            let contextVariable : lib5.VariableDeclaration = new lib5.VariableDeclaration("#contextParameter",{
                type : new lib5.VectorType()});
            let expression : lib5.Expression = this.getTearOffExpression(null,node.target,contextVariable,new lib5.NullLiteral());
            expression.transformChildren(this);
            return expression;
        }
        return super.visitStaticGet(node);
    }
    visitPropertyGet(node : lib5.PropertyGet) : lib5.TreeNode {
        let tearOffName : lib5.Name = this.tearOffGetterNames.get(node.name);
        if (tearOffName != null) {
            let replacement : lib5.MethodInvocation = new lib5.MethodInvocation(node.receiver,tearOffName,new lib5.Arguments(new core.DartList.literal<lib5.Expression>()));
            return super.visitMethodInvocation(replacement);
        }
        return super.visitPropertyGet(node);
    }
    visitCatch(node : lib5.Catch) : lib5.TreeNode {
        let exception : lib5.VariableDeclaration = node.exception;
        let stackTrace : lib5.VariableDeclaration = node.stackTrace;
        if (stackTrace != null && this.capturedVariables.contains(stackTrace)) {
            let block : lib5.Block = node.body = this.ensureBlock(node.body);
            block.parent = node;
            node.stackTrace = new lib5.VariableDeclaration(null);
            node.stackTrace.parent = node;
            stackTrace.initializer = new lib5.VariableGet(node.stackTrace);
            block.statements.insert(0,stackTrace);
            stackTrace.parent = block;
        }
        if (exception != null && this.capturedVariables.contains(exception)) {
            let block : lib5.Block = node.body = this.ensureBlock(node.body);
            block.parent = node;
            node.exception = new lib5.VariableDeclaration(null);
            node.exception.parent = node;
            exception.initializer = new lib5.VariableGet(node.exception);
            block.statements.insert(0,exception);
            exception.parent = block;
        }
        return super.visitCatch(node);
    }
    ensureBlock(statement : lib5.Statement) : lib5.Block {
        return is(statement, lib5.Block) ? statement : new lib5.Block(new core.DartList.literal<lib5.Statement>(statement));
    }
    getTearOffExpression(receiver : lib5.VariableDeclaration,procedure : lib5.Procedure,contextVariable : lib5.VariableDeclaration,accessContext : lib5.Expression) : lib5.Expression {
        let substitution : core.DartMap<lib5.TypeParameter,lib5.DartType> = procedure.isInstanceMember ? this.copyTypeVariables(procedure.enclosingClass.typeParameters) : new core.DartMap.literal([
        ]);
        let dynamicSubstitution : core.DartMap<lib5.TypeParameter,lib5.DartType> = new core.DartMap.literal([
        ]);
        for(let parameter of substitution.keys) {
            dynamicSubstitution.set(parameter,new lib5.DynamicType());
        }
        for(let parameter of substitution.keys) {
            if (!this.isObject(parameter.bound)) {
                dynamicSubstitution.set(parameter,lib12.substitute(parameter.bound,dynamicSubstitution));
            }
        }
        let closedTopLevelFunctionName : string = this.createNameForClosedTopLevelFunction(procedure.function);
        let closedTopLevelFunction : lib5.Procedure = null;
        for(let node of this.newLibraryMembers) {
            if (is(node, lib5.Procedure) && node.name.name == closedTopLevelFunctionName) {
                closedTopLevelFunction = node;
            }
        }
        if (op(Op.EQUALS,closedTopLevelFunction,null)) {
            closedTopLevelFunction = new lib5.Procedure(new lib5.Name(closedTopLevelFunctionName),lib5.ProcedureKind.Method,this.forwardFunction(procedure,receiver,contextVariable,dynamicSubstitution),{
                isStatic : true,fileUri : this.currentFileUri});
            this.newLibraryMembers.add(closedTopLevelFunction);
        }
        return new lib5.ClosureCreation(closedTopLevelFunction,accessContext,procedure.function.functionType);
    }
    forwardFunction(procedure : lib5.Procedure,receiver : lib5.VariableDeclaration,contextVariable : lib5.VariableDeclaration,substitution : core.DartMap<lib5.TypeParameter,lib5.DartType>) : lib5.FunctionNode {
        let cloner : lib7.CloneVisitor = substitution.isEmpty ? this.cloner : new lib6.CloneWithoutBody({
            typeSubstitution : substitution});
        let function : lib5.FunctionNode = procedure.function;
        let typeParameters : core.DartList<lib5.TypeParameter> = function.typeParameters.map(cloner.clone.bind(cloner)).toList();
        let positionalParameters : core.DartList<lib5.VariableDeclaration> = function.positionalParameters.map(cloner.clone.bind(cloner)).toList();
        if (contextVariable != null) {
            positionalParameters.insert(0,contextVariable);
        }
        let namedParameters : core.DartList<lib5.VariableDeclaration> = function.namedParameters.map(cloner.clone.bind(cloner)).toList();
        let types : core.DartList<lib5.DartType> = typeParameters.map((parameter : lib5.TypeParameter) =>  {
            return new lib5.TypeParameterType(parameter);
        }).toList();
        let positional : core.DartList<lib5.Expression> = positionalParameters.map((parameter : lib5.VariableDeclaration) =>  {
            return new lib5.VariableGet(parameter);
        }).toList();
        if (contextVariable != null) {
            positional.removeAt(0);
        }
        let named : core.DartList<lib5.NamedExpression> = namedParameters.map((parameter : lib5.VariableDeclaration) =>  {
            return new lib5.NamedExpression(parameter.name,new lib5.VariableGet(parameter));
        }).toList();
        let arguments : lib5.Arguments = new lib5.Arguments(positional,{
            types : types,named : named});
        let invocation : lib5.InvocationExpression = procedure.isInstanceMember ? new lib5.MethodInvocation(this.context.lookup(receiver),procedure.name,arguments,procedure) : new lib5.StaticInvocation(procedure,arguments);
        let requiredParameterCount : number = function.requiredParameterCount;
        if (contextVariable != null) {
            ++requiredParameterCount;
        }
        return new lib5.FunctionNode(new lib5.ReturnStatement(invocation),{
            typeParameters : typeParameters,positionalParameters : positionalParameters,namedParameters : namedParameters,requiredParameterCount : requiredParameterCount,returnType : lib12.substitute(function.returnType,cloner.typeSubstitution)});
    }
    copyTypeVariables(original : core.DartIterable<lib5.TypeParameter>) : core.DartMap<lib5.TypeParameter,lib5.DartType> {
        if (original.isEmpty) return new core.DartMap.literal([
        ]);
        let substitution : core.DartMap<lib5.TypeParameter,lib5.DartType> = new core.DartMap.literal([
        ]);
        for(let t of original) {
            substitution.set(t,new lib5.TypeParameterType(new lib5.TypeParameter(t.name)));
        }
        substitution.forEach((t : lib5.TypeParameter,copy : lib5.DartType) =>  {
            if (is(copy, lib5.TypeParameterType)) {
                copy.parameter.bound = lib12.substitute(t.bound,substitution);
            }
        });
        return substitution;
    }
    createNameForClosedTopLevelFunction(function : lib5.FunctionNode) : string {
        return `closure#${this.localNames.get(function)}`;
    }
    forwardToThisProperty(node : lib5.Member) : lib5.Statement {
        /* TODO (AssertStatementImpl) : assert (node is Field || (node is Procedure && node.isGetter)); */;
        return new lib5.ReturnStatement(new lib5.PropertyGet(new lib5.ThisExpression(),node.name,node));
    }
    addFieldForwarder(name : lib5.Name,field : lib5.Field) : void {
        this.newClassMembers.add(new lib5.Procedure(name,lib5.ProcedureKind.Getter,new lib5.FunctionNode(this.forwardToThisProperty(field)),{
            fileUri : this.currentFileUri}));
    }
    copyWithBody(procedure : lib5.Procedure,body : lib5.Statement) : lib5.Procedure {
        let copy : lib5.Procedure = this.cloner.clone(procedure);
        copy.function.body = body;
        copy.function.body.parent = copy.function;
        return copy;
    }
    addGetterForwarder(name : lib5.Name,getter : lib5.Procedure) : void {
        /* TODO (AssertStatementImpl) : assert (getter.isGetter); */;
        this.newClassMembers.add(((_) : lib5.Procedure =>  {
            {
                _.name = name;
                return _;
            }
        })(this.copyWithBody(getter,this.forwardToThisProperty(getter))));
    }
    addTearOffMethod(name : lib5.Name,procedure : lib5.Procedure) : void {
        let oldCurrentMember : lib5.Member = this.currentMember;
        let oldCurrentMemberFunction : lib5.FunctionNode = this.currentMemberFunction;
        try {
            this.saveContext(() =>  {
                let body : lib5.Block = new lib5.Block(new core.DartList.literal<lib5.Statement>());
                let tearOffMethodFunction : lib5.FunctionNode = new lib5.FunctionNode(body);
                this.setupContextForFunctionBody(tearOffMethodFunction);
                let self : lib5.VariableDeclaration = new lib5.VariableDeclaration("#self",{
                    type : procedure.enclosingClass.rawType});
                this.context.extend(self,new lib5.ThisExpression());
                let contextVariable : lib5.VariableDeclaration = new lib5.VariableDeclaration("#contextParameter",{
                    type : new lib5.VectorType()});
                let parent : lib8.Context = this.context;
                this.context = this.context.toNestedContext(new lib11.VariableAccessor(contextVariable,null,lib5.TreeNode.noOffset));
                body.addStatement(new lib5.ReturnStatement(this.getTearOffExpression(self,procedure,contextVariable,parent.expression)));
                let tearOffMethod : lib5.Procedure = new lib5.Procedure(name,lib5.ProcedureKind.Method,tearOffMethodFunction,{
                    fileUri : this.currentFileUri});
                this.newClassMembers.add(tearOffMethod);
                this.resetContext();
            });
        } finally {
            this.currentMember = oldCurrentMember;
            this.currentMemberFunction = oldCurrentMemberFunction;
        }
    }
}

export class properties {
}
