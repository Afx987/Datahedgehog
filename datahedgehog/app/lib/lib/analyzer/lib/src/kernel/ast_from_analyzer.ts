/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/kernel/ast_from_analyzer.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/kernel/lib/ast";

export var makeTypeParameterType : (parameter : any) => any = (parameter : any) : any =>  {
    return new bare.createInstance(any,null,parameter);
};
export var _makeVariableGet : (variable : any) => any = (variable : any) : any =>  {
    return new bare.createInstance(any,null,variable);
};
export var _makeStaticGet : (field : any) => any = (field : any) : any =>  {
    return new bare.createInstance(any,null,field);
};
export var _makeNamedExpressionFrom : (variable : any) => any = (variable : any) : any =>  {
    return new bare.createInstance(any,null,variable.name,new bare.createInstance(any,null,variable));
};
export var isTopLevelFunction : (element : any) => boolean = (element : any) : boolean =>  {
    return is(element, any) && is(element.enclosingElement, any);
};
export var isLocalFunction : (element : any) => boolean = (element : any) : boolean =>  {
    return is(element, any) && isNot(element.enclosingElement, any) && isNot(element.enclosingElement, any);
};
export var isLocal : (element : any) => boolean = (element : any) : boolean =>  {
    return isLocalFunction(element) || is(element, any) || is(element, any);
};
export var isInstanceMethod : (element : any) => boolean = (element : any) : boolean =>  {
    return is(element, any) && !element.isStatic;
};
export var isStaticMethod : (element : any) => boolean = (element : any) : boolean =>  {
    return is(element, any) && element.isStatic || isTopLevelFunction(element);
};
export var isStaticVariableOrGetter : (element : any) => boolean = (element : any) : boolean =>  {
    element = desynthesizeGetter(element);
    return is(element, any) && element.isStatic || is(element, any);
};
export var desynthesizeGetter : (element : any) => any = (element : any) : any =>  {
    if (op(Op.EQUALS,element,null) || !element.isSynthetic) return element;
    if (is(element, any)) return element.variable;
    if (is(element, any)) return element.getter;
    return element;
};
export var desynthesizeSetter : (element : any) => any = (element : any) : any =>  {
    if (op(Op.EQUALS,element,null) || !element.isSynthetic) return element;
    if (is(element, any)) return element.variable;
    if (is(element, any)) return element.setter;
    return element;
};
export var sortAndRemoveDuplicates : (list : core.DartList<any>) => void = (list : core.DartList<any>) : void =>  {
    list.sort();
    let deleted : number = 0;
    for(let i : number = 1; i < list.length; ++i){
        let item = list[i];
        if (op(Op.EQUALS,list[i - 1].compareTo(item),0)) {
            ++deleted;
        }else if (deleted > 0) {
            list[i - deleted] = item;
        }
    }
    if (deleted > 0) {
        list.length -= deleted;
    }
};
export namespace ReferenceScope {
    export type Constructors = 'ReferenceScope';
    export type Interface = Omit<ReferenceScope, Constructors>;
}
@DartClass
export class ReferenceScope {
    loader : any;

    constructor(loader : any) {
    }
    @defaultConstructor
    ReferenceScope(loader : any) {
        this.loader = loader;
    }
    get strongMode() : boolean {
        return this.loader.strongMode;
    }
    getLibraryReference(element : any) : any {
        if (op(Op.EQUALS,element,null)) return null;
        return this.loader.getLibraryReference(ReferenceScope.getBaseElement(element));
    }
    getRootClassReference() : any {
        return this.loader.getRootClassReference();
    }
    getClassReference(element : any) : any {
        return this.loader.getClassReference(ReferenceScope.getBaseElement(element));
    }
    getMemberReference(element : any) : any {
        return this.loader.getMemberReference(ReferenceScope.getBaseElement(element));
    }
    static getBaseElement(element : any) : any {
        while (is(element, any)){
            element = (element as any).baseElement;
        }
        return element;
    }
    static supportsConcreteGet(element : any) : boolean {
        return (is(element, any) && element.isGetter && !element.isAbstract) || is(element, any) || is(element, any) || is(element, any) && !element.isAbstract || isTopLevelFunction(element);
    }
    static supportsInterfaceGet(element : any) : boolean {
        return (is(element, any) && element.isGetter) || is(element, any) || is(element, any);
    }
    static supportsConcreteSet(element : any) : boolean {
        return (is(element, any) && element.isSetter && !element.isAbstract) || is(element, any) && !element.isFinal && !element.isConst || is(element, any) && !element.isFinal && !element.isConst;
    }
    static supportsInterfaceSet(element : any) : boolean {
        return (is(element, any) && element.isSetter) || is(element, any) && !element.isFinal && !element.isConst;
    }
    static supportsConcreteIndexGet(element : any) : boolean {
        return is(element, any) && op(Op.EQUALS,element.name,'[]') && !element.isAbstract;
    }
    static supportsInterfaceIndexGet(element : any) : boolean {
        return is(element, any) && op(Op.EQUALS,element.name,'[]');
    }
    static supportsConcreteIndexSet(element : any) : boolean {
        return is(element, any) && op(Op.EQUALS,element.name,'[]=') && !element.isAbstract;
    }
    static supportsInterfaceIndexSet(element : any) : boolean {
        return is(element, any) && op(Op.EQUALS,element.name,'[]=');
    }
    static supportsConcreteMethodCall(element : any) : boolean {
        return is(element, any) && !element.isAbstract || isTopLevelFunction(element) || is(element, any) && element.isFactory;
    }
    static supportsInterfaceMethodCall(element : any) : boolean {
        return is(element, any);
    }
    static supportsConstructorCall(element : any) : boolean {
        return is(element, any) && !element.isFactory;
    }
    _resolveGet(element : any,auxiliary : any,predicate : (element : any) => boolean) : any {
        element = desynthesizeGetter(element);
        if (predicate(element)) return this.getMemberReference(element);
        if (is(element, any) && element.isSetter) {
            auxiliary = ( auxiliary ) || ( element.correspondingGetter );
        }
        auxiliary = desynthesizeGetter(auxiliary);
        if (predicate(auxiliary)) return this.getMemberReference(auxiliary);
        return null;
    }
    resolveConcreteGet(element : any,auxiliary : any) : any {
        return this._resolveGet(element,auxiliary,ReferenceScope.supportsConcreteGet.bind(this));
    }
    resolveInterfaceGet(element : any,auxiliary : any) : any {
        if (!this.strongMode) return null;
        return this._resolveGet(element,auxiliary,ReferenceScope.supportsInterfaceGet.bind(this));
    }
    getterTypeOfElement(element : any) : any {
        if (is(element, any)) {
            return element.type;
        }else if (is(element, any) && element.isGetter) {
            return element.returnType;
        }else {
            return null;
        }
    }
    resolveInterfaceFunctionCall(element : any) : any {
        if (!this.strongMode || op(Op.EQUALS,element,null)) return null;
        return this.resolveInterfaceFunctionCallOnType(this.getterTypeOfElement(element));
    }
    resolveInterfaceFunctionCallOnType(callee : any) : any {
        return is(callee, any) ? this.resolveInterfaceMethod(callee.getMethod('call')) : null;
    }
    _resolveSet(element : any,auxiliary : any,predicate : (element : any) => boolean) : any {
        element = desynthesizeSetter(element);
        if (predicate(element)) {
            return this.getMemberReference(element);
        }
        if (is(element, any) && element.isSetter) {
            auxiliary = ( auxiliary ) || ( element.correspondingGetter );
        }
        auxiliary = desynthesizeSetter(auxiliary);
        if (predicate(auxiliary)) {
            return this.getMemberReference(auxiliary);
        }
        return null;
    }
    resolveConcreteSet(element : any,auxiliary : any) : any {
        return this._resolveSet(element,auxiliary,ReferenceScope.supportsConcreteSet.bind(this));
    }
    resolveInterfaceSet(element : any,auxiliary : any) : any {
        if (!this.strongMode) return null;
        return this._resolveSet(element,auxiliary,ReferenceScope.supportsInterfaceSet.bind(this));
    }
    resolveConcreteIndexGet(element : any,auxiliary : any) : any {
        if (ReferenceScope.supportsConcreteIndexGet(element)) {
            return this.getMemberReference(element);
        }
        if (ReferenceScope.supportsConcreteIndexGet(auxiliary)) {
            return this.getMemberReference(auxiliary);
        }
        return null;
    }
    resolveInterfaceIndexGet(element : any,auxiliary : any) : any {
        if (!this.strongMode) return null;
        if (ReferenceScope.supportsInterfaceIndexGet(element)) {
            return this.getMemberReference(element);
        }
        if (ReferenceScope.supportsInterfaceIndexGet(auxiliary)) {
            return this.getMemberReference(auxiliary);
        }
        return null;
    }
    resolveConcreteIndexSet(element : any,auxiliary : any) : any {
        if (ReferenceScope.supportsConcreteIndexSet(element)) {
            return this.getMemberReference(element);
        }
        if (ReferenceScope.supportsConcreteIndexSet(auxiliary)) {
            return this.getMemberReference(auxiliary);
        }
        return null;
    }
    resolveInterfaceIndexSet(element : any,auxiliary : any) : any {
        if (!this.strongMode) return null;
        if (ReferenceScope.supportsInterfaceIndexSet(element)) {
            return this.getMemberReference(element);
        }
        if (ReferenceScope.supportsInterfaceIndexSet(auxiliary)) {
            return this.getMemberReference(auxiliary);
        }
        return null;
    }
    resolveConcreteMethod(element : any) : any {
        if (ReferenceScope.supportsConcreteMethodCall(element)) {
            return this.getMemberReference(element);
        }
        return null;
    }
    resolveInterfaceMethod(element : any) : any {
        if (!this.strongMode) return null;
        if (ReferenceScope.supportsInterfaceMethodCall(element)) {
            return this.getMemberReference(element);
        }
        return null;
    }
    resolveConstructor(element : any) : any {
        if (ReferenceScope.supportsConstructorCall(element)) {
            return this.getMemberReference(element);
        }
        return null;
    }
    resolveField(element : any) : any {
        if (is(element, any) && !element.isSynthetic) {
            return this.getMemberReference(element);
        }
        return null;
    }
    staticAccess(name : string,element : any,auxiliary? : any) : any {
        return new _StaticAccessor(this,name,this.resolveConcreteGet(element,auxiliary),this.resolveConcreteSet(element,auxiliary));
    }
    unresolvedAccess(name : string) : any {
        return new _StaticAccessor(this,name,null,null);
    }
}

export namespace LabelStack {
    export type Constructors = 'LabelStack' | 'unlabeled' | 'switchCase' | 'many';
    export type Interface = Omit<LabelStack, Constructors>;
}
@DartClass
export class LabelStack {
    labels : core.DartList<string>;

    next : LabelStack;

    jumps : core.DartList<any>;

    isSwitchTarget : boolean;

    constructor(label : string,next : LabelStack) {
    }
    @defaultConstructor
    LabelStack(label : string,next : LabelStack) {
        this.jumps = new core.DartList.literal<any>();
        this.isSwitchTarget = false;
        this.labels = new core.DartList.literal<string>(label);
        this.next = next;
    }
    @namedConstructor
    unlabeled(next : LabelStack) {
        this.jumps = new core.DartList.literal<any>();
        this.isSwitchTarget = false;
        this.labels = new core.DartList.literal<string>(null);
        this.next = next;
    }
    static unlabeled : new(next : LabelStack) => LabelStack;

    @namedConstructor
    switchCase(label : string,next : LabelStack) {
        this.jumps = new core.DartList.literal<any>();
        this.isSwitchTarget = false;
        this.isSwitchTarget = true;
        this.labels = new core.DartList.literal<string>(label);
        this.next = next;
    }
    static switchCase : new(label : string,next : LabelStack) => LabelStack;

    @namedConstructor
    many(labels : core.DartList<string>,next : LabelStack) {
        this.jumps = new core.DartList.literal<any>();
        this.isSwitchTarget = false;
        this.labels = labels;
        this.next = next;
    }
    static many : new(labels : core.DartList<string>,next : LabelStack) => LabelStack;

}

export namespace StatementBuilder {
    export type Constructors = 'StatementBuilder';
    export type Interface = Omit<StatementBuilder, Constructors>;
}
@DartClass
export class StatementBuilder extends any {
    scope : ExpressionScope;

    breakStack : LabelStack;
    continueStack : LabelStack;

    constructor(scope : ExpressionScope,breakStack? : LabelStack,continueStack? : LabelStack) {
    }
    @defaultConstructor
    StatementBuilder(scope : ExpressionScope,breakStack? : LabelStack,continueStack? : LabelStack) {
        this.scope = scope;
        this.breakStack = breakStack;
        this.continueStack = continueStack;
    }
    build(node : any) : any {
        let result : any = node.accept(this);
        result.fileOffset = this._getOffset(node);
        return result;
    }
    buildOptional(node : any) : any {
        let result : any = ((_349_)=>(!!_349_)?_349_.accept(this):null)(node);
        ((t)=>(!!t)?t.fileOffset:null)(result) = this._getOffset(node);
        return result;
    }
    _getOffset(node : any) : number {
        return node.offset;
    }
    buildInScope(node : any,breakNode : LabelStack,continueNode : LabelStack) : any {
        let oldBreak = this.breakStack;
        let oldContinue = this.continueStack;
        this.breakStack = breakNode;
        this.continueStack = continueNode;
        let result = this.build(node);
        this.breakStack = oldBreak;
        this.continueStack = oldContinue;
        return result;
    }
    buildBlockMember(node : any,output : core.DartList<any>) : void {
        if (is(node, any) && is(node.statement, any)) {
            let labeled : any = node;
            node = labeled.statement;
        }
        if (is(node, any)) {
            let list : any = node.variables;
            let type : any = this.scope.buildOptionalTypeAnnotation(list.type);
            for(let decl of list.variables) {
                let local : any = decl.element as any;
                output.add(this.scope.makeVariableDeclaration(local,{
                    type : type,initializer : this.scope.buildOptionalExpression(decl.initializer),equalsOffset : ((t)=>(!!t)?t.offset:null)(decl.equals)}));
            }
        }else {
            output.add(this.build(node));
        }
    }
    makeBreakTarget(node : any,stackNode : LabelStack) : any {
        if (stackNode.jumps.isEmpty) return node;
        let labeled = new bare.createInstance(any,null,node);
        for(let jump of stackNode.jumps) {
            (jump as any).target = labeled;
        }
        return labeled;
    }
    findLabelTarget(label : string,stack : LabelStack) : LabelStack {
        while (stack != null){
            if (stack.labels.contains(label)) return stack;
            stack = stack.next;
        }
        return null;
    }
    visitAssertStatement(node : any) : any {
        return new bare.createInstance(any,null,this.scope.buildExpression(node.condition),this.scope.buildOptionalExpression(node.message));
    }
    visitBlock(node : any) : any {
        let statements : core.DartList<any> = new core.DartList.literal<any>();
        for(let statement of node.statements) {
            this.buildBlockMember(statement,statements);
        }
        return new bare.createInstance(any,null,statements);
    }
    visitBreakStatement(node : any) : any {
        let stackNode = this.findLabelTarget(((t)=>(!!t)?t.name:null)(node.label),this.breakStack);
        if (op(Op.EQUALS,stackNode,null)) {
            return op(Op.EQUALS,node.label,null) ? this.scope.emitCompileTimeError(ParserErrorCode.BREAK_OUTSIDE_OF_LOOP) : this.scope.emitCompileTimeError(CompileTimeErrorCode.LABEL_UNDEFINED,new core.DartList.literal(node.label.name));
        }
        let result = new bare.createInstance(any,null,null);
        stackNode.jumps.add(result);
        return result;
    }
    visitContinueStatement(node : any) : any {
        let stackNode = this.findLabelTarget(((t)=>(!!t)?t.name:null)(node.label),this.continueStack);
        if (op(Op.EQUALS,stackNode,null)) {
            return op(Op.EQUALS,node.label,null) ? this.scope.emitCompileTimeError(ParserErrorCode.CONTINUE_OUTSIDE_OF_LOOP) : this.scope.emitCompileTimeError(CompileTimeErrorCode.LABEL_UNDEFINED,new core.DartList.literal(node.label.name));
        }
        let result = stackNode.isSwitchTarget ? new bare.createInstance(any,null,null) : new bare.createInstance(any,null,null);
        stackNode.jumps.add(result);
        return result;
    }
    addLoopLabels(loop : any,continueNode : LabelStack) : void {
        let parent : any = loop.parent;
        if (is(parent, any)) {
            for(let label of parent.labels) {
                continueNode.labels.add(label.label.name);
            }
        }
    }
    visitDoStatement(node : any) : any {
        let breakNode : LabelStack = new LabelStack.unlabeled(this.breakStack);
        let continueNode : LabelStack = new LabelStack.unlabeled(this.continueStack);
        this.addLoopLabels(node,continueNode);
        let body = this.buildInScope(node.body,breakNode,continueNode);
        let loop = new bare.createInstance(any,null,this.makeBreakTarget(body,continueNode),this.scope.buildExpression(node.condition));
        return this.makeBreakTarget(loop,breakNode);
    }
    visitWhileStatement(node : any) : any {
        let breakNode : LabelStack = new LabelStack.unlabeled(this.breakStack);
        let continueNode : LabelStack = new LabelStack.unlabeled(this.continueStack);
        this.addLoopLabels(node,continueNode);
        let body = this.buildInScope(node.body,breakNode,continueNode);
        let loop = new bare.createInstance(any,null,this.scope.buildExpression(node.condition),this.makeBreakTarget(body,continueNode));
        return this.makeBreakTarget(loop,breakNode);
    }
    visitEmptyStatement(node : any) : any {
        return new bare.createInstance(any,null);
    }
    visitExpressionStatement(node : any) : any {
        return new bare.createInstance(any,null,this.scope.buildExpression(node.expression));
    }
    static _getLabelName(label : any) : string {
        return label.label.name;
    }
    visitLabeledStatement(node : any) : any {
        let breakNode = new LabelStack.many(node.labels.map(StatementBuilder._getLabelName.bind(this)).toList(),this.breakStack);
        let body = this.buildInScope(node.statement,breakNode,this.continueStack);
        return this.makeBreakTarget(body,breakNode);
    }
    static isBreakingExpression(node : any) : boolean {
        return is(node, any) || is(node, any);
    }
    static isBreakingStatement(node : any) : boolean {
        return is(node, any) || is(node, any) || is(node, any) || is(node, any) && StatementBuilder.isBreakingExpression(node.expression);
    }
    visitSwitchStatement(node : any) : any {
        let breakNode : LabelStack = new LabelStack.unlabeled(this.breakStack);
        let continueNode : LabelStack = this.continueStack;
        let cases = new core.DartList.literal<any>();
        let bodies = new core.DartList.literal<core.DartList<any>>();
        let labelToNode = new core.DartMap.literal([
        ]);
        let currentCase : any = null;
        for(let member of node.members) {
            if (currentCase != null && currentCase.isDefault) {
                let error = is(member, any) ? ParserErrorCode.SWITCH_HAS_CASE_AFTER_DEFAULT_CASE : ParserErrorCode.SWITCH_HAS_MULTIPLE_DEFAULT_CASES;
                return this.scope.emitCompileTimeError(error);
            }
            if (op(Op.EQUALS,currentCase,null)) {
                currentCase = new bare.createInstance(any,null,new core.DartList.literal<any>(),new core.DartList.literal<number>(),null);
                cases.add(currentCase);
            }
            if (is(member, any)) {
                let expression = this.scope.buildExpression(member.expression);
                currentCase.expressions.add(((_) : any =>  {
                    {
                        _.parent = currentCase;
                        return _;
                    }
                })(expression));
                currentCase.expressionOffsets.add(expression.fileOffset);
            }else {
                currentCase.isDefault = true;
            }
            for(let label of member.labels) {
                continueNode = new LabelStack.switchCase(label.label.name,continueNode);
                labelToNode.set(label.label.name,currentCase);
            }
            if ((((t)=>(!!t)?t.isNotEmpty:null)(member.statements) || false)) {
                bodies.add(member.statements);
                currentCase = null;
            }
        }
        if (currentCase != null) {
            bodies.add(new core.DartList.literal<any>());
            currentCase = null;
        }
        let oldBreak = this.breakStack;
        let oldContinue = this.continueStack;
        this.breakStack = breakNode;
        this.continueStack = continueNode;
        for(let i : number = 0; i < cases.length; ++i){
            let blockNodes = new core.DartList.literal<any>();
            for(let statement of bodies[i]) {
                this.buildBlockMember(statement,blockNodes);
            }
            if (blockNodes.isEmpty || !StatementBuilder.isBreakingStatement(blockNodes.last)) {
                if (i < cases.length - 1) {
                    blockNodes.add(new bare.createInstance(any,null,this.scope.buildThrowFallThroughError()));
                }else {
                    let jump = new bare.createInstance(any,null,null);
                    blockNodes.add(jump);
                    breakNode.jumps.add(jump);
                }
            }
            cases[i].body = ((_) : any =>  {
                {
                    _.parent = cases[i];
                    return _;
                }
            })(new bare.createInstance(any,null,blockNodes));
        }
        while (continueNode != oldContinue){
            for(let jump of continueNode.jumps) {
                (jump as any).target = labelToNode.get(continueNode.labels.first);
            }
            continueNode = continueNode.next;
        }
        let expression = this.scope.buildExpression(node.expression);
        let result = new bare.createInstance(any,null,expression,cases);
        this.breakStack = oldBreak;
        this.continueStack = oldContinue;
        return this.makeBreakTarget(result,breakNode);
    }
    visitForStatement(node : any) : any {
        let variables : core.DartList<any> = new core.DartList.literal<any>();
        let initialExpression : any;
        if (node.variables != null) {
            let list : any = node.variables;
            let type = this.scope.buildOptionalTypeAnnotation(list.type);
            for(let variable of list.variables) {
                let local : any = variable.element as any;
                variables.add(this.scope.makeVariableDeclaration(local,{
                    initializer : this.scope.buildOptionalExpression(variable.initializer),type : type,equalsOffset : ((t)=>(!!t)?t.offset:null)(variable.equals)}));
            }
        }else if (node.initialization != null) {
            initialExpression = this.scope.buildExpression(node.initialization);
        }
        let breakNode = new LabelStack.unlabeled(this.breakStack);
        let continueNode = new LabelStack.unlabeled(this.continueStack);
        this.addLoopLabels(node,continueNode);
        let body = this.buildInScope(node.body,breakNode,continueNode);
        let loop = new bare.createInstance(any,null,variables,this.scope.buildOptionalExpression(node.condition),node.updaters.map(this.scope.buildExpression.bind(this.scope)).toList(),this.makeBreakTarget(body,continueNode));
        loop = this.makeBreakTarget(loop,breakNode);
        if (initialExpression != null) {
            return new bare.createInstance(any,null,new core.DartList.literal<any>(new bare.createInstance(any,null,initialExpression),loop));
        }
        return loop;
    }
    iterableElementType(iterable : any) : any {
        if (is(iterable, any)) {
            let iterator = ((t)=>(!!t)?t.returnType:null)(iterable.lookUpInheritedGetter('iterator'));
            if (is(iterator, any)) {
                return ((t)=>(!!t)?t.returnType:null)(iterator.lookUpInheritedGetter('current'));
            }
        }
        return null;
    }
    streamElementType(stream : any) : any {
        if (is(stream, any)) {
            let class_ = stream.element;
            if (class_.library.isDartAsync && op(Op.EQUALS,class_.name,'Stream') && op(Op.EQUALS,stream.typeArguments.length,1)) {
                return op(Op.INDEX,stream.typeArguments,0);
            }
        }
        return null;
    }
    visitForEachStatement(node : any) : any {
        let variable : any;
        let leftHand : any;
        if (node.loopVariable != null) {
            let loopVariable : any = node.loopVariable;
            variable = this.scope.makeVariableDeclaration(loopVariable.element,{
                type : this.scope.buildOptionalTypeAnnotation(loopVariable.type)});
        }else if (node.identifier != null) {
            leftHand = this.scope.buildLeftHandValue(node.identifier);
            variable = new bare.createInstance(any,null,null,{
                isFinal : true});
            if (this.scope.strongMode) {
                let containerType = node.iterable.staticType;
                let elementType : any = node.awaitKeyword != null ? this.streamElementType(containerType) : this.iterableElementType(containerType);
                if (elementType != null) {
                    variable.type = this.scope.buildType(elementType);
                }
            }
        }
        let breakNode = new LabelStack.unlabeled(this.breakStack);
        let continueNode = new LabelStack.unlabeled(this.continueStack);
        this.addLoopLabels(node,continueNode);
        let body = this.buildInScope(node.body,breakNode,continueNode);
        if (leftHand != null) {
            body = new bare.createInstance(any,null,new core.DartList.literal<any>(new bare.createInstance(any,null,leftHand.buildAssignment(new bare.createInstance(any,null,variable),{
                voidContext : true})),body));
        }
        let loop = ((_) : any =>  {
            {
                _.fileOffset = node.offset;
                return _;
            }
        })(new bare.createInstance(any,null,variable,this.scope.buildExpression(node.iterable),this.makeBreakTarget(body,continueNode),{
            isAsync : node.awaitKeyword != null}));
        return this.makeBreakTarget(loop,breakNode);
    }
    visitIfStatement(node : any) : any {
        return new bare.createInstance(any,null,this.scope.buildExpression(node.condition),this.build(node.thenStatement),this.buildOptional(node.elseStatement));
    }
    visitReturnStatement(node : any) : any {
        return new bare.createInstance(any,null,this.scope.buildOptionalExpression(node.expression));
    }
    buildCatchClause(node : any) : any {
        let exceptionVariable = op(Op.EQUALS,node.exceptionParameter,null) ? null : this.scope.makeVariableDeclaration(node.exceptionParameter.staticElement);
        let stackTraceVariable = op(Op.EQUALS,node.stackTraceParameter,null) ? null : this.scope.makeVariableDeclaration(node.stackTraceParameter.staticElement);
        return new bare.createInstance(any,null,exceptionVariable,this.build(node.body),{
            stackTrace : stackTraceVariable,guard : (this.scope.buildOptionalTypeAnnotation(node.exceptionType) || new bare.createInstance(any,null))});
    }
    visitTryStatement(node : any) : any {
        let statement : any = this.build(node.body);
        if (node.catchClauses.isNotEmpty) {
            statement = new bare.createInstance(any,null,statement,node.catchClauses.map(this.buildCatchClause.bind(this)).toList());
        }
        if (node.finallyBlock != null) {
            statement = new bare.createInstance(any,null,statement,this.build(node.finallyBlock));
        }
        return statement;
    }
    visitVariableDeclarationStatement(node : any) : any {
        let statements : core.DartList<any> = new core.DartList.literal<any>();
        this.buildBlockMember(node,statements);
        return new bare.createInstance(any,null,statements);
    }
    visitYieldStatement(node : any) : any {
        return new bare.createInstance(any,null,this.scope.buildExpression(node.expression),{
            isYieldStar : node.star != null});
    }
    visitFunctionDeclarationStatement(node : any) : any {
        let declaration = node.functionDeclaration;
        let expression = declaration.functionExpression;
        let element : any = declaration.element as any;
        return ((_) : any =>  {
            {
                _.fileOffset = node.offset;
                return _;
            }
        })(new bare.createInstance(any,null,this.scope.makeVariableDeclaration(element,{
            type : this.scope.buildType(declaration.element.type)}),this.scope.buildFunctionNode(expression.parameters,expression.body,{
            typeParameters : this.scope.buildOptionalTypeParameterList(expression.typeParameters,{
                strongModeOnly : true}),returnType : declaration.returnType})));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitStatement(node : any) {
        return this.scope.internalError(`Unhandled statement ${node.runtimeType}`);
    }
}

export namespace ExpressionBuilder {
    export type Constructors = 'ExpressionBuilder';
    export type Interface = Omit<ExpressionBuilder, Constructors>;
}
@DartClass
export class ExpressionBuilder extends any {
    scope : ExpressionScope;

    cascadeReceiver : any;

    constructor(scope : ExpressionScope) {
    }
    @defaultConstructor
    ExpressionBuilder(scope : ExpressionScope) {
        this.scope = scope;
    }
    build(node : any) : any {
        let result = node.accept(this);
        if (is(result, any)) {
            result = result.buildSimpleRead();
        }
        if (isNot(node, any) || op(Op.LT,result.fileOffset,0)) {
            result.fileOffset = this._getOffset(node);
        }
        return result;
    }
    _getOffset(node : any) : number {
        if (is(node, any)) {
            return node.methodName.offset;
        }else if (is(node, any)) {
            return node.constructorName.offset;
        }else if (is(node, any)) {
            return node.operator.offset;
        }else if (is(node, any)) {
            return node.identifier.offset;
        }else if (is(node, any)) {
            return this._getOffset(node.leftHandSide);
        }else if (is(node, any)) {
            return node.propertyName.offset;
        }else if (is(node, any)) {
            return node.isOperator.offset;
        }else if (is(node, any)) {
            return node.asOperator.offset;
        }else if (is(node, any)) {
            return node.end;
        }else if (is(node, any)) {
            return node.leftBracket.offset;
        }
        return node.offset;
    }
    buildLeftHandValue(node : any) : any {
        let result = node.accept(this);
        if (is(result, any)) {
            return result;
        }else {
            return new bare.createInstance(any,null,result,lib3.TreeNode.noOffset);
        }
    }
    visitAsExpression(node : any) : any {
        return new bare.createInstance(any,null,this.build(node.expression),this.scope.buildTypeAnnotation(node.type));
    }
    visitAssignmentExpression(node : any) : any {
        let voidContext : boolean = this.isInVoidContext(node);
        let operator : string = node.operator.value();
        let leftHand = this.buildLeftHandValue(node.leftHandSide);
        let rightHand = this.build(node.rightHandSide);
        if (operator == '=') {
            return leftHand.buildAssignment(rightHand,{
                voidContext : voidContext});
        }else if (operator == '??=') {
            return leftHand.buildNullAwareAssignment(rightHand,this.scope.buildType(node.staticType),{
                voidContext : voidContext});
        }else {
            let name = new bare.createInstance(any,null,new core.DartString(operator).substring(0,new core.DartString(operator).length - 1));
            return leftHand.buildCompoundAssignment(name,rightHand,{
                offset : node.offset,voidContext : voidContext,interfaceTarget : this.scope.resolveInterfaceMethod(node.staticElement)});
        }
    }
    visitAwaitExpression(node : any) : any {
        return new bare.createInstance(any,null,this.build(node.expression));
    }
    buildSingleArgument(node : any) : any {
        return new bare.createInstance(any,null,new core.DartList.literal<any>(this.build(node)));
    }
    visitBinaryExpression(node : any) : any {
        let operator : string = node.operator.value();
        if (operator == '&&' || operator == '||') {
            return new bare.createInstance(any,null,this.build(node.leftOperand),operator,this.build(node.rightOperand));
        }
        if (operator == '??') {
            let leftOperand : any = this.build(node.leftOperand);
            if (is(leftOperand, any)) {
                return new bare.createInstance(any,null,buildIsNull(leftOperand,{
                    offset : node.leftOperand.offset}),this.build(node.rightOperand),new bare.createInstance(any,null,leftOperand.variable),this.scope.getInferredType(node));
            }else {
                let variable = new bare.createInstance(any,"forValue",leftOperand);
                return new bare.createInstance(any,null,variable,new bare.createInstance(any,null,buildIsNull(new bare.createInstance(any,null,variable),{
                    offset : leftOperand.fileOffset}),this.build(node.rightOperand),new bare.createInstance(any,null,variable),this.scope.getInferredType(node)));
            }
        }
        let isNegated : boolean = false;
        if (operator == '!=') {
            isNegated = true;
            operator = '==';
        }
        let expression : any;
        if (is(node.leftOperand, any)) {
            this.scope.addTransformerFlag(TransformerFlag.superCalls);
            expression = new bare.createInstance(any,null,new bare.createInstance(any,null,operator),this.buildSingleArgument(node.rightOperand),this.scope.resolveConcreteMethod(node.staticElement));
        }else {
            expression = new bare.createInstance(any,null,this.build(node.leftOperand),new bare.createInstance(any,null,operator),this.buildSingleArgument(node.rightOperand),this.scope.resolveInterfaceMethod(node.staticElement));
        }
        return isNegated ? new bare.createInstance(any,null,expression) : expression;
    }
    visitBooleanLiteral(node : any) : any {
        return new bare.createInstance(any,null,node.value);
    }
    visitDoubleLiteral(node : any) : any {
        return new bare.createInstance(any,null,node.value);
    }
    visitIntegerLiteral(node : any) : any {
        return new bare.createInstance(any,null,node.value);
    }
    visitNullLiteral(node : any) : any {
        return new bare.createInstance(any,null);
    }
    visitSimpleStringLiteral(node : any) : any {
        return new bare.createInstance(any,null,node.value);
    }
    visitStringLiteral(node : any) : any {
        return this.scope.buildStringLiteral(node);
    }
    static _getTokenValue(token : any) : core.DartObject {
        return token.value();
    }
    visitSymbolLiteral(node : any) : any {
        let value : string = node.components.map(ExpressionBuilder._getTokenValue.bind(this)).join('.');
        return new bare.createInstance(any,null,value);
    }
    visitCascadeExpression(node : any) : any {
        let receiver = this.build(node.target);
        let receiverVariable = new bare.createInstance(any,"forValue",receiver,{
            type : this.scope.getInferredType(node.target)});
        let oldReceiver = this.cascadeReceiver;
        this.cascadeReceiver = receiverVariable;
        let result : any = new bare.createInstance(any,null,receiverVariable);
        for(let section of node.cascadeSections.reversed) {
            let dummy = new bare.createInstance(any,"forValue",this.build(section));
            result = new bare.createInstance(any,null,dummy,result);
        }
        this.cascadeReceiver = oldReceiver;
        return new bare.createInstance(any,null,receiverVariable,result);
    }
    makeCascadeReceiver() : any {
        /* TODO (AssertStatementImpl) : assert (cascadeReceiver != null); */;
        return new bare.createInstance(any,null,this.cascadeReceiver);
    }
    visitConditionalExpression(node : any) : any {
        return new bare.createInstance(any,null,this.build(node.condition),this.build(node.thenExpression),this.build(node.elseExpression),this.scope.getInferredType(node));
    }
    visitFunctionExpression(node : any) : any {
        return new bare.createInstance(any,null,this.scope.buildFunctionNode(node.parameters,node.body,{
            typeParameters : this.scope.buildOptionalTypeParameterList(node.typeParameters,{
                strongModeOnly : true}),inferredReturnType : this.scope.getInferredReturnType(node)}));
    }
    buildArguments(valueArguments : any,_namedArguments? : {explicitTypeArguments? : any,inferTypeArguments? : () => core.DartList<any>}) : any {
        let {explicitTypeArguments,inferTypeArguments} = Object.assign({
        }, _namedArguments );
        let positional = new core.DartList.literal<any>();
        let named = new core.DartList.literal<any>();
        for(let argument of valueArguments.arguments) {
            if (is(argument, any)) {
                named.add(new bare.createInstance(any,null,argument.name.label.name,this.build(argument.expression)));
            }else if (named.isNotEmpty) {
                return this.scope.emitCompileTimeError(ParserErrorCode.POSITIONAL_AFTER_NAMED_ARGUMENT);
            }else {
                positional.add(this.build(argument));
            }
        }
        let typeArguments : core.DartList<any>;
        if (explicitTypeArguments != null) {
            typeArguments = this.scope.buildTypeArgumentList(explicitTypeArguments);
        }else if (inferTypeArguments != null) {
            typeArguments = inferTypeArguments();
        }
        return new bare.createInstance(any,null,positional,{
            named : named,types : typeArguments});
    }
    buildArgumentsForInvocation(node : any) : any {
        if (this.scope.strongMode) {
            return this.buildArguments(node.argumentList,{
                explicitTypeArguments : node.typeArguments,inferTypeArguments : () =>  {
                    return this.scope.getInferredInvocationTypeArguments(node);
                }});
        }else {
            return this.buildArguments(node.argumentList);
        }
    }
    private static __$callName : any;
    static get callName() : any { 
        if (this.__$callName===undefined) {
            this.__$callName = new bare.createInstance(any,null,'call');
        }
        return this.__$callName;
    }
    static set callName(__$value : any)  { 
        this.__$callName = __$value;
    }

    visitFunctionExpressionInvocation(node : any) : any {
        return new bare.createInstance(any,null,this.build(node.function),ExpressionBuilder.callName,this.buildArgumentsForInvocation(node),this.scope.resolveInterfaceFunctionCallOnType(node.function.staticType));
    }
    visitPrefixedIdentifier(node : any) {
        switch (ElementKind.of(node.prefix.staticElement)) {
            case ElementKind.CLASS:
            case ElementKind.LIBRARY:
            case ElementKind.PREFIX:
            case ElementKind.IMPORT:
                if (node.identifier.staticElement != null) {
                    return this.visitSimpleIdentifier(node.identifier);
                }
                return this.scope.unresolvedAccess(node.identifier.name);
            case ElementKind.DYNAMIC:
            case ElementKind.FUNCTION_TYPE_ALIAS:
            case ElementKind.TYPE_PARAMETER:
            case ElementKind.FIELD:
            case ElementKind.TOP_LEVEL_VARIABLE:
            case ElementKind.FUNCTION:
            case ElementKind.METHOD:
            case ElementKind.GETTER:
            case ElementKind.SETTER:
            case ElementKind.LOCAL_VARIABLE:
            case ElementKind.PARAMETER:
            case ElementKind.ERROR:
                let element : any = node.identifier.staticElement;
                let auxiliary : any = ((t)=>(!!t)?t.staticElement:null)(node.identifier.auxiliaryElements);
                return PropertyAccessor.make(this.build(node.prefix),this.scope.buildName(node.identifier),this.scope.resolveInterfaceGet(element,auxiliary),this.scope.resolveInterfaceSet(element,auxiliary));
            case ElementKind.UNIVERSE:
            case ElementKind.NAME:
            case ElementKind.CONSTRUCTOR:
            case ElementKind.EXPORT:
            case ElementKind.LABEL:
            default:
                return this.scope.internalError(`Unexpected element kind: ${node.prefix.staticElement}`);
        }
    }
    isStatic(element : any) : boolean {
        if (is(element, any)) {
            return element.isStatic || op(Op.EQUALS,element.enclosingElement,null);
        }
        if (is(element, any)) {
            return element.isStatic || op(Op.EQUALS,element.enclosingElement,null);
        }
        if (is(element, any)) {
            return element.isStatic;
        }
        return false;
    }
    visitSimpleIdentifier(node : any) {
        let element : any = node.staticElement;
        switch (ElementKind.of(element)) {
            case ElementKind.CLASS:
            case ElementKind.DYNAMIC:
            case ElementKind.FUNCTION_TYPE_ALIAS:
            case ElementKind.TYPE_PARAMETER:
                return new bare.createInstance(any,null,this.scope.buildTypeAnnotation(node));
            case ElementKind.ERROR:
                if (!this.scope.allowThis) {
                    return this.scope.unresolvedAccess(node.name);
                }
                return PropertyAccessor.make(this.scope.buildThis(),this.scope.buildName(node),null,null);
            case ElementKind.FIELD:
            case ElementKind.TOP_LEVEL_VARIABLE:
            case ElementKind.GETTER:
            case ElementKind.SETTER:
            case ElementKind.METHOD:
                let auxiliary : any = ((t)=>(!!t)?t.staticElement:null)(node.auxiliaryElements);
                if (this.isStatic(element)) {
                    return this.scope.staticAccess(node.name,element,auxiliary);
                }
                if (!this.scope.allowThis) {
                    return this.scope.unresolvedAccess(node.name);
                }
                return PropertyAccessor.make(this.scope.buildThis(),this.scope.buildName(node),this.scope.resolveInterfaceGet(element,auxiliary),this.scope.resolveInterfaceSet(element,auxiliary));
            case ElementKind.FUNCTION:
                let function : any = element;
                if (isTopLevelFunction(function)) {
                    return this.scope.staticAccess(node.name,function);
                }
                if (op(Op.EQUALS,function,function.library.loadLibraryFunction)) {
                    return this.scope.unsupportedFeature('Deferred loading');
                }
                return new bare.createInstance(any,null,this.scope.getVariableReference(function),null,lib3.TreeNode.noOffset);
            case ElementKind.LOCAL_VARIABLE:
            case ElementKind.PARAMETER:
                let variable : any = element;
                let type = core.identical(node.staticType,variable.type) ? null : this.scope.buildType(node.staticType);
                return new bare.createInstance(any,null,this.scope.getVariableReference(element),type,lib3.TreeNode.noOffset);
            case ElementKind.IMPORT:
            case ElementKind.LIBRARY:
            case ElementKind.PREFIX:
                return this.scope.emitCompileTimeError(CompileTimeErrorCode.PREFIX_IDENTIFIER_NOT_FOLLOWED_BY_DOT,new core.DartList.literal(node.name));
            case ElementKind.COMPILATION_UNIT:
            case ElementKind.CONSTRUCTOR:
            case ElementKind.EXPORT:
            case ElementKind.LABEL:
            case ElementKind.UNIVERSE:
            case ElementKind.NAME:
            default:
                return this.scope.internalError(`Unexpected element kind: ${element}`);
        }
    }
    visitIndexExpression(node : any) {
        let element : any = node.staticElement;
        let auxiliary : any = ((t)=>(!!t)?t.staticElement:null)(node.auxiliaryElements);
        if (node.isCascaded) {
            return IndexAccessor.make(this.makeCascadeReceiver(),this.build(node.index),this.scope.resolveInterfaceIndexGet(element,auxiliary),this.scope.resolveInterfaceIndexSet(element,auxiliary));
        }else if (is(node.target, any)) {
            this.scope.addTransformerFlag(TransformerFlag.superCalls);
            return new bare.createInstance(any,null,this.build(node.index),this.scope.resolveConcreteIndexGet(element,auxiliary),this.scope.resolveConcreteIndexSet(element,auxiliary),lib3.TreeNode.noOffset);
        }else {
            return IndexAccessor.make(this.build(node.target),this.build(node.index),this.scope.resolveInterfaceIndexGet(element,auxiliary),this.scope.resolveInterfaceIndexSet(element,auxiliary));
        }
    }
    getEffectiveFactoryTarget(element : any) : any {
        let anchor : any = null;
        let n : number = 1;
        while (element.isFactory && element.redirectedConstructor != null){
            element = element.redirectedConstructor;
            let base = ReferenceScope.getBaseElement(element);
            if (op(Op.EQUALS,base,anchor)) return null;
            if (n & ++n == 0) {
                anchor = base;
            }
        }
        return element;
    }
    _coerceTypeArgumentArity(typeArguments : core.DartList<any>,arity : number) : void {
        if (typeArguments.length != arity) {
            typeArguments.length = arity;
            typeArguments.fillRange(0,arity,new bare.createInstance(any,null));
        }
    }
    visitInstanceCreationExpression(node : any) : any {
        let element : any = node.staticElement;
        let classElement : any = ((t)=>(!!t)?t.enclosingElement:null)(element);
        var inferTypeArguments : () => core.DartList<any> = () : core.DartList<any> =>  {
            let inferredType = this.scope.getInferredType(node);
            if (is(inferredType, any)) {
                return inferredType.typeArguments.toList();
            }
            let numberOfTypeArguments : number = op(Op.EQUALS,classElement,null) ? 0 : classElement.typeParameters.length;
            return new core.DartList.filled(numberOfTypeArguments,new bare.createInstance(any,null),{
                growable : true});
        };
        let arguments = this.buildArguments(node.argumentList,{
            explicitTypeArguments : node.constructorName.type.typeArguments,inferTypeArguments : inferTypeArguments});
        var noSuchMethodError : () => any = () : any =>  {
            return node.isConst ? this.scope.emitInvalidConstant() : this.scope.buildThrowNoSuchMethodError(new bare.createInstance(any,null),`${node.constructorName}`,arguments,{
                candidateTarget : element});
        };
        if (op(Op.EQUALS,element,null)) {
            return noSuchMethodError();
        }
        /* TODO (AssertStatementImpl) : assert (classElement != null); */;
        let redirect = this.getEffectiveFactoryTarget(element);
        if (op(Op.EQUALS,redirect,null)) {
            return this.scope.buildThrowCompileTimeError(CompileTimeErrorCode.RECURSIVE_FACTORY_REDIRECT.message);
        }
        if (redirect != element) {
            let returnType : any = this.scope.buildType(redirect.returnType);
            ((_) : any =>  {
                {
                    clear();
                    addAll(returnType.typeArguments);
                    return _;
                }
            })(arguments.types);
            element = redirect;
            classElement = element.enclosingElement;
        }
        element = ReferenceScope.getBaseElement(element);
        if (node.isConst && !element.isConst) {
            return this.scope.emitInvalidConstant(CompileTimeErrorCode.CONST_WITH_NON_CONST);
        }
        if (classElement.isEnum) {
            return this.scope.emitCompileTimeError(CompileTimeErrorCode.INSTANTIATE_ENUM);
        }
        this._coerceTypeArgumentArity(arguments.types,classElement.typeParameters.length);
        if (element.isFactory) {
            let target : any = this.scope.resolveConcreteMethod(element);
            if (is(target, any) && this.scope.areArgumentsCompatible(element,arguments)) {
                return new bare.createInstance(any,null,target,arguments,{
                    isConst : node.isConst});
            }else {
                return noSuchMethodError();
            }
        }
        if (classElement.isAbstract) {
            return node.isConst ? this.scope.emitInvalidConstant() : this.scope.buildThrowAbstractClassInstantiationError(classElement.name);
        }
        let constructor : any = this.scope.resolveConstructor(element);
        if (constructor != null && this.scope.areArgumentsCompatible(element,arguments)) {
            return new bare.createInstance(any,null,constructor,arguments,{
                isConst : node.isConst});
        }else {
            return noSuchMethodError();
        }
    }
    visitIsExpression(node : any) : any {
        if (node.notOperator != null) {
            return new bare.createInstance(any,null,((_) : any =>  {
                {
                    _.fileOffset = this._getOffset(node);
                    return _;
                }
            })(new bare.createInstance(any,null,this.build(node.expression),this.scope.buildTypeAnnotation(node.type))));
        }else {
            return new bare.createInstance(any,null,this.build(node.expression),this.scope.buildTypeAnnotation(node.type));
        }
    }
    buildDecomposableMethodInvocation(receiver : any,name : any,arguments : any,targetElement : any) : any {
        let targetMethod : any = this.scope.resolveInterfaceMethod(targetElement);
        if (targetMethod != null) {
            return new bare.createInstance(any,null,receiver,name,arguments,targetMethod);
        }
        let targetGetter : any = this.scope.resolveInterfaceGet(targetElement,null);
        if (targetGetter != null) {
            return new bare.createInstance(any,null,new bare.createInstance(any,null,receiver,name,targetGetter),ExpressionBuilder.callName,arguments,this.scope.resolveInterfaceFunctionCall(targetElement));
        }
        return new bare.createInstance(any,null,receiver,name,arguments);
    }
    visitMethodInvocation(node : any) : any {
        let element : any = node.methodName.staticElement;
        if (element != null && op(Op.EQUALS,element,((t)=>(!!t)?t.loadLibraryFunction:null)(element.library))) {
            return this.scope.unsupportedFeature('Deferred loading');
        }
        let target = node.target;
        if (node.isCascaded) {
            return this.buildDecomposableMethodInvocation(this.makeCascadeReceiver(),this.scope.buildName(node.methodName),this.buildArgumentsForInvocation(node),element);
        }else if (is(target, any)) {
            this.scope.addTransformerFlag(TransformerFlag.superCalls);
            return new bare.createInstance(any,null,this.scope.buildName(node.methodName),this.buildArgumentsForInvocation(node),this.scope.resolveConcreteMethod(element));
        }else if (isLocal(element)) {
            return ((_) : any =>  {
                {
                    _.fileOffset = node.methodName.end;
                    return _;
                }
            })(new bare.createInstance(any,null,new bare.createInstance(any,null,this.scope.getVariableReference(element)),ExpressionBuilder.callName,this.buildArgumentsForInvocation(node),this.scope.resolveInterfaceFunctionCall(element)));
        }else if (isStaticMethod(element)) {
            let method = this.scope.resolveConcreteMethod(element);
            let arguments = this.buildArgumentsForInvocation(node);
            if (op(Op.EQUALS,method,null) || !this.scope.areArgumentsCompatible(element,arguments)) {
                return this.scope.buildThrowNoSuchMethodError(new bare.createInstance(any,null),node.methodName.name,arguments,{
                    candidateTarget : element});
            }
            return new bare.createInstance(any,null,method,arguments);
        }else if (isStaticVariableOrGetter(element)) {
            let method = this.scope.resolveConcreteGet(element,null);
            if (op(Op.EQUALS,method,null)) {
                return this.scope.buildThrowNoSuchMethodError(new bare.createInstance(any,null),node.methodName.name,new bare.createInstance(any,null,new core.DartList.literal()),{
                    candidateTarget : element});
            }
            return ((_) : any =>  {
                {
                    _.fileOffset = node.methodName.end;
                    return _;
                }
            })(new bare.createInstance(any,null,new bare.createInstance(any,null,method),ExpressionBuilder.callName,this.buildArgumentsForInvocation(node),this.scope.resolveInterfaceFunctionCall(element)));
        }else if (op(Op.EQUALS,target,null) && !this.scope.allowThis || is(target, any) && is(target.staticElement, any) || is(target, any) && is(target.staticElement, any)) {
            return this.scope.buildThrowNoSuchMethodError(new bare.createInstance(any,null),node.methodName.name,this.buildArgumentsForInvocation(node),{
                candidateTarget : element});
        }else if (op(Op.EQUALS,target,null)) {
            return this.buildDecomposableMethodInvocation(this.scope.buildThis(),this.scope.buildName(node.methodName),this.buildArgumentsForInvocation(node),element);
        }else if (op(Op.EQUALS,node.operator.value(),'?.')) {
            let receiver = makeOrReuseVariable(this.build(target));
            return makeLet(receiver,new bare.createInstance(any,null,buildIsNull(new bare.createInstance(any,null,receiver)),new bare.createInstance(any,null),((_) : any =>  {
                {
                    _.fileOffset = node.methodName.offset;
                    return _;
                }
            })(this.buildDecomposableMethodInvocation(new bare.createInstance(any,null,receiver),this.scope.buildName(node.methodName),this.buildArgumentsForInvocation(node),element)),this.scope.buildType(node.staticType)));
        }else {
            return this.buildDecomposableMethodInvocation(this.build(node.target),this.scope.buildName(node.methodName),this.buildArgumentsForInvocation(node),element);
        }
    }
    visitNamedExpression(node : any) : any {
        return this.scope.internalError('Unexpected named expression');
    }
    visitParenthesizedExpression(node : any) : any {
        return this.build(node.expression);
    }
    isInVoidContext(node : any) : boolean {
        let parent : any = node.parent;
        return is(parent, any) && (parent.updaters.contains(node) || op(Op.EQUALS,parent.initialization,node)) || is(parent, any) || is(parent, any) && this.scope.bodyHasVoidReturn(parent);
    }
    visitPostfixExpression(node : any) : any {
        let operator : string = node.operator.value();
        switch (operator) {
            case '++':
            case '--':
                let leftHand = this.buildLeftHandValue(node.operand);
                let binaryOperator = new bare.createInstance(any,null,operator[0]);
                return leftHand.buildPostfixIncrement(binaryOperator,{
                    offset : node.operator.offset,voidContext : this.isInVoidContext(node),interfaceTarget : this.scope.resolveInterfaceMethod(node.staticElement)});
            default:
                return this.scope.internalError(`Invalid postfix operator ${operator}`);
        }
    }
    visitPrefixExpression(node : any) : any {
        let operator : string = node.operator.value();
        switch (operator) {
            case '-':
            case '~':
                let name = new bare.createInstance(any,null,operator == '-' ? 'unary-' : '~');
                if (is(node.operand, any)) {
                    this.scope.addTransformerFlag(TransformerFlag.superCalls);
                    return new bare.createInstance(any,null,name,new bare.createInstance(any,"empty"),this.scope.resolveConcreteMethod(node.staticElement));
                }
                return new bare.createInstance(any,null,this.build(node.operand),name,new bare.createInstance(any,"empty"),this.scope.resolveInterfaceMethod(node.staticElement));
            case '!':
                return new bare.createInstance(any,null,this.build(node.operand));
            case '++':
            case '--':
                let leftHand = this.buildLeftHandValue(node.operand);
                let binaryOperator = new bare.createInstance(any,null,operator[0]);
                return leftHand.buildPrefixIncrement(binaryOperator,{
                    offset : node.offset,interfaceTarget : this.scope.resolveInterfaceMethod(node.staticElement)});
            default:
                return this.scope.internalError(`Invalid prefix operator ${operator}`);
        }
    }
    visitPropertyAccess(node : any) {
        let element : any = node.propertyName.staticElement;
        let auxiliary : any = ((t)=>(!!t)?t.staticElement:null)(node.propertyName.auxiliaryElements);
        let getter = this.scope.resolveInterfaceGet(element,auxiliary);
        let setter = this.scope.resolveInterfaceSet(element,auxiliary);
        let target : any = node.target;
        if (node.isCascaded) {
            return PropertyAccessor.make(this.makeCascadeReceiver(),this.scope.buildName(node.propertyName),getter,setter);
        }else if (is(node.target, any)) {
            this.scope.addTransformerFlag(TransformerFlag.superCalls);
            return new bare.createInstance(any,null,this.scope.buildName(node.propertyName),this.scope.resolveConcreteGet(element,auxiliary),this.scope.resolveConcreteSet(element,auxiliary),lib3.TreeNode.noOffset);
        }else if (is(target, any) && is(target.staticElement, any)) {
            return this.scope.staticAccess(node.propertyName.name,element,auxiliary);
        }else if (op(Op.EQUALS,node.operator.value(),'?.')) {
            return new bare.createInstance(any,null,this.build(target),this.scope.buildName(node.propertyName),getter,setter,this.scope.buildType(node.staticType),lib3.TreeNode.noOffset);
        }else {
            return PropertyAccessor.make(this.build(target),this.scope.buildName(node.propertyName),getter,setter);
        }
    }
    visitRethrowExpression(node : any) : any {
        return new bare.createInstance(any,null);
    }
    visitSuperExpression(node : any) : any {
        return this.scope.emitCompileTimeError(CompileTimeErrorCode.SUPER_IN_INVALID_CONTEXT);
    }
    visitThisExpression(node : any) : any {
        return this.scope.buildThis();
    }
    visitThrowExpression(node : any) : any {
        return new bare.createInstance(any,null,this.build(node.expression));
    }
    visitListLiteral(node : any) : any {
        let type : any = (((t)=>(!!t)?t.isNotEmpty:null)(((t)=>(!!t)?t.arguments:null)(node.typeArguments)) || false) ? this.scope.buildTypeAnnotation(op(Op.INDEX,node.typeArguments.arguments,0)) : this.scope.getInferredTypeArgument(node,0);
        return new bare.createInstance(any,null,node.elements.map(this.build.bind(this)).toList(),{
            typeArgument : type,isConst : node.constKeyword != null});
    }
    visitMapLiteral(node : any) : any {
        let key : any, value : any;
        if (node.typeArguments != null && op(Op.GT,node.typeArguments.arguments.length,1)) {
            key = this.scope.buildTypeAnnotation(op(Op.INDEX,node.typeArguments.arguments,0));
            value = this.scope.buildTypeAnnotation(op(Op.INDEX,node.typeArguments.arguments,1));
        }else {
            key = this.scope.getInferredTypeArgument(node,0);
            value = this.scope.getInferredTypeArgument(node,1);
        }
        return new bare.createInstance(any,null,node.entries.map(this.buildMapEntry.bind(this)).toList(),{
            keyType : key,valueType : value,isConst : node.constKeyword != null});
    }
    buildMapEntry(node : any) : any {
        return new bare.createInstance(any,null,this.build(node.key),this.build(node.value));
    }
    visitExpression(node : any) : any {
        return this.scope.internalError(`Unhandled expression ${node.runtimeType}`);
    }
}

export namespace StringLiteralPartBuilder {
    export type Constructors = 'StringLiteralPartBuilder';
    export type Interface = Omit<StringLiteralPartBuilder, Constructors>;
}
@DartClass
export class StringLiteralPartBuilder extends any {
    scope : ExpressionScope;

    output : core.DartList<any>;

    constructor(scope : ExpressionScope,output : core.DartList<any>) {
    }
    @defaultConstructor
    StringLiteralPartBuilder(scope : ExpressionScope,output : core.DartList<any>) {
        this.scope = scope;
        this.output = output;
    }
    build(node : any) : void {
        node.accept(this);
    }
    buildInterpolationElement(node : any) : void {
        node.accept(this);
    }
    visitSimpleStringLiteral(node : any) {
        this.output.add(new bare.createInstance(any,null,node.value));
    }
    visitAdjacentStrings(node : any) {
        node.strings.forEach(this.build.bind(this));
    }
    visitStringInterpolation(node : any) {
        node.elements.forEach(this.buildInterpolationElement.bind(this));
    }
    visitInterpolationString(node : any) {
        this.output.add(new bare.createInstance(any,null,node.value));
    }
    visitInterpolationExpression(node : any) {
        this.output.add(this.scope.buildExpression(node.expression));
    }
}

export namespace TypeAnnotationBuilder {
    export type Constructors = 'TypeAnnotationBuilder';
    export type Interface = Omit<TypeAnnotationBuilder, Constructors>;
}
@DartClass
export class TypeAnnotationBuilder extends any {
    scope : TypeScope;

    constructor(scope : TypeScope) {
    }
    @defaultConstructor
    TypeAnnotationBuilder(scope : TypeScope) {
        this.scope = scope;
    }
    build(node : any) : any {
        return node.accept(this);
    }
    buildList(node : core.DartIterable<any>) : core.DartList<any> {
        return node.map(this.build.bind(this)).toList();
    }
    buildClosedTypeFromDartType(type : any) : any {
        return this.convertType(type,new core.DartList.literal<any>());
    }
    buildFromDartType(type : any) : any {
        return this.convertType(type,null);
    }
    isUnreifiedTypeParameter(parameter : any) : boolean {
        return !this.scope.strongMode && isNot(parameter.enclosingElement, any);
    }
    convertType(type : any,boundVariables : core.DartList<any>) : any {
        if (is(type, any)) {
            if (this.isUnreifiedTypeParameter(type.element)) {
                return new bare.createInstance(any,null);
            }
            if (boundVariables == null || boundVariables.contains(type)) {
                let typeParameter = this.scope.tryGetTypeParameterReference(type.element);
                if (op(Op.EQUALS,typeParameter,null)) {
                    if (type.element.bound != null) {
                        return this.convertType(type.element.bound,new core.DartList.literal());
                    }
                    return new bare.createInstance(any,null);
                }
                if (!this.scope.allowClassTypeParameters && is(typeParameter.parent, any)) {
                    return new bare.createInstance(any,null);
                }
                return new bare.createInstance(any,null,typeParameter);
            }else {
                return new bare.createInstance(any,null);
            }
        }else if (is(type, any)) {
            let classNode = this.scope.getClassReference(type.element);
            if (op(Op.EQUALS,type.typeArguments.length,0)) {
                return classNode.rawType;
            }
            if (type.typeArguments.length != classNode.typeParameters.length) {
                log.warning(`Type parameter arity error in ${type}`);
                return new bare.createInstance(any,null);
            }
            return new bare.createInstance(any,null,classNode,this.convertTypeList(type.typeArguments,boundVariables));
        }else if (is(type, any)) {
            ((_350_)=>(!!_350_)?_350_.addAll(type.typeParameters):null)(boundVariables);
            let positionals = TypeAnnotationBuilder.concatenate(type.normalParameterTypes,type.optionalParameterTypes);
            let result = new bare.createInstance(any,null,this.convertTypeList(positionals,boundVariables),this.convertType(type.returnType,boundVariables),{
                typeParameters : this.convertTypeParameterList(type.typeFormals,boundVariables),namedParameters : this.convertTypeMap(type.namedParameterTypes,boundVariables),requiredParameterCount : type.normalParameterTypes.length});
            ((_351_)=>(!!_351_)?_351_.removeRange(boundVariables.length - type.typeParameters.length,boundVariables.length):null)(boundVariables);
            return result;
        }else if (type.isUndefined) {
            log.warning(`Unresolved type found in ${this.scope.location}`);
            return new bare.createInstance(any,null);
        }else if (type.isVoid) {
            return new bare.createInstance(any,null);
        }else if (type.isDynamic) {
            return new bare.createInstance(any,null);
        }else {
            log.severe(`Unexpected DartType: ${type}`);
            return new bare.createInstance(any,null);
        }
    }
    static concatenate(x : core.DartIterable<any>,y : core.DartIterable<any>) : core.DartIterable<any> {
        return new core.DartList.literal<core.DartIterable<any>>(x,y).expand((z : any) =>  {
            return z;
        });
    }
    convertTypeParameter(typeParameter : any,boundVariables : core.DartList<any>) : any {
        return this.scope.makeTypeParameter(typeParameter,{
            bound : op(Op.EQUALS,typeParameter.bound,null) ? this.scope.defaultTypeParameterBound : this.convertType(typeParameter.bound,boundVariables)});
    }
    convertTypeParameterList(typeParameters : core.DartIterable<any>,boundVariables : core.DartList<any>) : core.DartList<any> {
        if (typeParameters.isEmpty) return new core.DartList.literal<any>();
        return typeParameters.map((tp : any) =>  {
            return this.convertTypeParameter(tp,boundVariables);
        }).toList();
    }
    convertTypeList(types : core.DartIterable<any>,boundVariables : core.DartList<any>) : core.DartList<any> {
        if (types.isEmpty) return new core.DartList.literal<any>();
        return types.map((t : any) =>  {
            return this.convertType(t,boundVariables);
        }).toList();
    }
    convertTypeMap(types : core.DartMap<string,any>,boundVariables : core.DartList<any>) : core.DartList<any> {
        if (types.isEmpty) return new core.DartList.literal<any>();
        let result : core.DartList<any> = new core.DartList.literal<any>();
        types.forEach((name : any,type : any) =>  {
            result.add(new bare.createInstance(any,null,name,this.convertType(type,boundVariables)));
        });
        sortAndRemoveDuplicates(result);
        return result;
    }
    visitSimpleIdentifier(node : any) : any {
        let element : any = node.staticElement;
        switch (ElementKind.of(element)) {
            case ElementKind.CLASS:
                return this.scope.getClassReference(element).rawType;
            case ElementKind.DYNAMIC:
                return new bare.createInstance(any,null);
            case ElementKind.FUNCTION_TYPE_ALIAS:
                let functionType : any = element;
                return this.buildClosedTypeFromDartType(functionType.type);
            case ElementKind.TYPE_PARAMETER:
                let typeParameter = this.scope.getTypeParameterReference(element);
                if (!this.scope.allowClassTypeParameters && is(typeParameter.parent, any)) {
                    return new bare.createInstance(any,null);
                }
                if (this.isUnreifiedTypeParameter(element)) {
                    return new bare.createInstance(any,null);
                }
                return new bare.createInstance(any,null,typeParameter);
            case ElementKind.COMPILATION_UNIT:
            case ElementKind.CONSTRUCTOR:
            case ElementKind.EXPORT:
            case ElementKind.IMPORT:
            case ElementKind.LABEL:
            case ElementKind.LIBRARY:
            case ElementKind.PREFIX:
            case ElementKind.UNIVERSE:
            case ElementKind.ERROR:
            case ElementKind.FIELD:
            case ElementKind.TOP_LEVEL_VARIABLE:
            case ElementKind.GETTER:
            case ElementKind.SETTER:
            case ElementKind.METHOD:
            case ElementKind.LOCAL_VARIABLE:
            case ElementKind.PARAMETER:
            case ElementKind.FUNCTION:
            case ElementKind.NAME:
            default:
                log.severe(`Invalid type annotation: ${element}`);
                return new bare.createInstance(any,null);
        }
    }
    visitPrefixedIdentifier(node : any) {
        return this.build(node.identifier);
    }
    visitTypeName(node : any) {
        return this.buildFromDartType(node.type);
    }
    visitNode(node : any) {
        log.severe(`Unexpected type annotation: ${node}`);
        return new bare.createInstance(any,null);
    }
}

export namespace InitializerBuilder {
    export type Constructors = 'InitializerBuilder';
    export type Interface = Omit<InitializerBuilder, Constructors>;
}
@DartClass
export class InitializerBuilder extends any {
    scope : MemberScope;

    constructor(scope : MemberScope) {
    }
    @defaultConstructor
    InitializerBuilder(scope : MemberScope) {
        this.scope = scope;
    }
    build(node : any) : any {
        return node.accept(this);
    }
    visitConstructorFieldInitializer(node : any) {
        let target = this.scope.resolveField(node.fieldName.staticElement);
        if (op(Op.EQUALS,target,null)) {
            return new bare.createInstance(any,null);
        }
        return new bare.createInstance(any,null,target,this.scope.buildExpression(node.expression));
    }
    visitSuperConstructorInvocation(node : any) {
        let target = this.scope.resolveConstructor(node.staticElement);
        if (op(Op.EQUALS,target,null)) {
            return new bare.createInstance(any,null);
        }
        this.scope.addTransformerFlag(TransformerFlag.superCalls);
        return new bare.createInstance(any,null,target,this.scope._expressionBuilder.buildArguments(node.argumentList));
    }
    visitRedirectingConstructorInvocation(node : any) {
        let target = this.scope.resolveConstructor(node.staticElement);
        if (op(Op.EQUALS,target,null)) {
            return new bare.createInstance(any,null);
        }
        return new bare.createInstance(any,null,target,this.scope._expressionBuilder.buildArguments(node.argumentList));
    }
    visitNode(node : any) {
        log.severe(`Unexpected constructor initializer: ${node.runtimeType}`);
        return new bare.createInstance(any,null);
    }
}

export namespace ClassBodyBuilder {
    export type Constructors = 'ClassBodyBuilder';
    export type Interface = Omit<ClassBodyBuilder, Constructors>;
}
@DartClass
export class ClassBodyBuilder extends any {
    scope : ClassScope;

    annotationScope : ExpressionScope;

    currentClass : any;

    element : any;

    get currentLibrary() : any {
        return this.currentClass.enclosingLibrary;
    }
    constructor(loader : any,currentClass : any,element : any) {
    }
    @defaultConstructor
    ClassBodyBuilder(loader : any,currentClass : any,element : any) {
        this.currentClass = currentClass;
        this.scope = new ClassScope(loader,currentClass.enclosingLibrary);
        this.annotationScope = new ExpressionScope(loader,currentClass.enclosingLibrary);
        this.element = element;
    }
    build(node : any) : void {
        if (op(Op.EQUALS,node,null)) {
            this.buildBrokenClass();
            return;
        }
        node.accept(this);
    }
    buildBrokenClass() : void {
        this.currentClass.name = this.element.name;
        this.currentClass.supertype = this.scope.getRootClassReference().asRawSupertype;
        this.currentClass.constructors.add(((_) : any =>  {
            {
                _.fileOffset = this.element.nameOffset;
                return _;
            }
        })(new bare.createInstance(any,null,new bare.createInstance(any,null,new bare.createInstance(any,null)))));
    }
    addAnnotations(annotations : core.DartList<any>) : void {
        for(let annotation of annotations) {
            this.currentClass.addAnnotation(this.annotationScope.buildAnnotation(annotation));
        }
    }
    _buildMemberBody(member : any,element : any,node : any) : void {
        new MemberBodyBuilder(this.scope.loader,member,element).build(node);
    }
    _isIgnoredMember(node : any) : boolean {
        if (is(node, any) && node.factoryKeyword != null) {
            let element = resolutionMap.elementDeclaredByConstructorDeclaration(node);
            return element.redirectedConstructor != null && (element.isSynthetic || this.scope.loader.ignoreRedirectingFactories);
        }else {
            return false;
        }
    }
    visitClassDeclaration(node : any) {
        this.addAnnotations(node.metadata);
        let classNode : any = this.currentClass;
        /* TODO (AssertStatementImpl) : assert (classNode.members.isEmpty); */;
        let foundConstructor : boolean = false;
        for(let member of node.members) {
            if (this._isIgnoredMember(member)) continue;
            if (is(member, any)) {
                for(let variable of member.fields.variables) {
                    if (variable.isSynthetic || op(Op.EQUALS,variable.length,0)) continue;
                    let field = this.scope.getMemberReference(variable.element);
                    classNode.addMember(field);
                    this._buildMemberBody(field,variable.element,variable);
                }
            }else {
                let memberNode = this.scope.getMemberReference(member.element);
                classNode.addMember(memberNode);
                this._buildMemberBody(memberNode,member.element,member);
                if (is(member, any)) {
                    foundConstructor = true;
                }
            }
        }
        if (!foundConstructor) {
            let defaultConstructor = this.scope.findDefaultConstructor(node.element);
            if (defaultConstructor != null) {
                /* TODO (AssertStatementImpl) : assert (defaultConstructor.enclosingElement == node.element); */;
                if (!defaultConstructor.isSynthetic) {
                    throw 'Non-synthetic default constructor not in list of members. ' + `${node} ${this.element} ${defaultConstructor}`;
                }
                let memberNode = this.scope.getMemberReference(defaultConstructor);
                classNode.addMember(memberNode);
                this.buildDefaultConstructor(memberNode,defaultConstructor);
            }
        }
        this.addDefaultInstanceFieldInitializers(classNode);
    }
    buildDefaultConstructor(constructor : any,element : any) : void {
        let function = constructor.function;
        function.body = ((_) : any =>  {
            {
                _.parent = function;
                return _;
            }
        })(new bare.createInstance(any,null));
        let class_ = element.enclosingElement;
        if (class_.supertype != null) {
            let superConstructor = this.scope.findDefaultConstructor(class_.supertype.element);
            let target = this.scope.resolveConstructor(superConstructor);
            if (op(Op.EQUALS,target,null)) {
                constructor.initializers.add(((_) : any =>  {
                    {
                        _.parent = constructor;
                        return _;
                    }
                })(new bare.createInstance(any,null)));
            }else {
                let arguments = new bare.createInstance(any,"empty");
                constructor.initializers.add(((_) : any =>  {
                    {
                        _.parent = constructor;
                        return _;
                    }
                })(new bare.createInstance(any,null,target,arguments)));
            }
        }
    }
    addDefaultInstanceFieldInitializers(node : any) : void {
        let uninitializedFields : core.DartList<any> = new core.DartList<any>();
        for(let field of node.fields) {
            if (field.initializer != null || field.isStatic) continue;
            uninitializedFields.add(field);
        }
        if (uninitializedFields.isEmpty) return;
        constructorLoop:
            for(let constructor of node.constructors) {
                let remainingFields = uninitializedFields.toSet();
                for(let initializer of constructor.initializers) {
                    if (is(initializer, any)) {
                        remainingFields.remove(initializer.field);
                    }else if (is(initializer, any)) {
                        continue;
                    }
                }
                for(let field of remainingFields) {
                    if (op(Op.EQUALS,field.initializer,null)) {
                        field.initializer = ((_) : any =>  {
                            {
                                _.parent = field;
                                return _;
                            }
                        })(new bare.createInstance(any,null));
                    }
                }
            };
    }
    static _isValuesField(field : any) : boolean {
        return op(Op.EQUALS,field.name,'values');
    }
    static _isIndexField(field : any) : boolean {
        return op(Op.EQUALS,field.name,'index');
    }
    visitEnumDeclaration(node : any) {
        this.addAnnotations(node.metadata);
        let classNode : any = this.currentClass;
        let intType = this.scope.loader.getCoreClassReference('int').rawType;
        let indexFieldElement = this.element.fields.firstWhere(ClassBodyBuilder._isIndexField.bind(this));
        let indexField : any = this.scope.getMemberReference(indexFieldElement);
        indexField.type = intType;
        classNode.addMember(indexField);
        let stringType = this.scope.loader.getCoreClassReference('String').rawType;
        let nameField : any = new bare.createInstance(any,null,new bare.createInstance(any,null,'_name',this.scope.currentLibrary),{
            type : stringType,isFinal : true,fileUri : classNode.fileUri});
        classNode.addMember(nameField);
        let indexParameter = new bare.createInstance(any,null,'index',{
            type : intType});
        let nameParameter = new bare.createInstance(any,null,'name',{
            type : stringType});
        let function = new bare.createInstance(any,null,new bare.createInstance(any,null),{
            positionalParameters : new core.DartList.literal(indexParameter,nameParameter)});
        let superConstructor = this.scope.loader.getRootClassConstructorReference();
        let constructor = ((_) : any =>  {
            {
                _.fileOffset = this.element.nameOffset;
                return _;
            }
        })(new bare.createInstance(any,null,function,{
            name : new bare.createInstance(any,null,''),isConst : true,initializers : new core.DartList.literal(new bare.createInstance(any,null,indexField,new bare.createInstance(any,null,indexParameter)),new bare.createInstance(any,null,nameField,new bare.createInstance(any,null,nameParameter)),new bare.createInstance(any,null,superConstructor,new bare.createInstance(any,"empty")))}));
        classNode.addMember(constructor);
        let index : number = 0;
        let enumConstantFields = new core.DartList.literal<any>();
        for(let constant of node.constants) {
            let field : any = this.scope.getMemberReference(constant.element);
            field.initializer = ((_) : any =>  {
                {
                    _.parent = field;
                    return _;
                }
            })(new bare.createInstance(any,null,constructor,new bare.createInstance(any,null,new core.DartList.literal(new bare.createInstance(any,null,index),new bare.createInstance(any,null,`${classNode.name}.${field.name.name}`))),{
                isConst : true}));
            field.type = classNode.rawType;
            classNode.addMember(field);
            ++index;
            enumConstantFields.add(field);
        }
        let valuesFieldElement = this.element.fields.firstWhere(ClassBodyBuilder._isValuesField.bind(this));
        let valuesField : any = this.scope.getMemberReference(valuesFieldElement);
        let enumType = classNode.rawType;
        valuesField.type = new bare.createInstance(any,null,this.scope.loader.getCoreClassReference('List'),new core.DartList.literal<any>(enumType));
        valuesField.initializer = ((_) : any =>  {
            {
                _.parent = valuesField;
                return _;
            }
        })(new bare.createInstance(any,null,enumConstantFields.map(_makeStaticGet).toList(),{
            isConst : true,typeArgument : enumType}));
        classNode.addMember(valuesField);
        let body = new bare.createInstance(any,null,new bare.createInstance(any,null,new bare.createInstance(any,null),nameField));
        let toStringFunction = new bare.createInstance(any,null,body,{
            returnType : stringType});
        let toStringMethod = new bare.createInstance(any,null,new bare.createInstance(any,null,'toString'),lib3.ProcedureKind.Method,toStringFunction,{
            fileUri : classNode.fileUri});
        classNode.addMember(toStringMethod);
    }
    visitClassTypeAlias(node : any) {
        this.addAnnotations(node.metadata);
        /* TODO (AssertStatementImpl) : assert (node.withClause != null && node.withClause.mixinTypes.isNotEmpty); */;
        let classNode : any = this.currentClass;
        for(let constructor of this.element.constructors) {
            let constructorNode = this.scope.getMemberReference(constructor);
            classNode.addMember(constructorNode);
            this.buildMixinConstructor(constructorNode,constructor);
        }
    }
    buildMixinConstructor(constructor : any,element : any) : void {
        let function = constructor.function;
        function.body = ((_) : any =>  {
            {
                _.parent = function;
                return _;
            }
        })(new bare.createInstance(any,null));
        let classElement : any = element.enclosingElement;
        let targetConstructor = classElement.supertype.element.constructors.firstWhere((c : any) =>  {
            return op(Op.EQUALS,c.name,element.name);
        });
        let positionalArguments = constructor.function.positionalParameters.map(_makeVariableGet).toList();
        let namedArguments = constructor.function.namedParameters.map(_makeNamedExpressionFrom).toList();
        constructor.initializers.add(((_) : any =>  {
            {
                _.parent = constructor;
                return _;
            }
        })(new bare.createInstance(any,null,this.scope.getMemberReference(targetConstructor),new bare.createInstance(any,null,positionalArguments,{
            named : namedArguments}))));
    }
    visitNode(node : any) {
        throw `Unsupported class declaration: ${node.runtimeType}`;
    }
}

export namespace MemberBodyBuilder {
    export type Constructors = 'MemberBodyBuilder';
    export type Interface = Omit<MemberBodyBuilder, Constructors>;
}
@DartClass
export class MemberBodyBuilder extends any {
    scope : MemberScope;

    element : any;

    get currentMember() : any {
        return this.scope.currentMember;
    }
    constructor(loader : any,member : any,element : any) {
    }
    @defaultConstructor
    MemberBodyBuilder(loader : any,member : any,element : any) {
        this.scope = new MemberScope(loader,member);
        this.element = element;
    }
    build(node : any) : void {
        if (node != null) {
            this.currentMember.fileEndOffset = node.endToken.offset;
            node.accept(this);
        }else {
            this.buildBrokenMember();
        }
    }
    buildBrokenMember() : void {
        let member = this.currentMember;
        member.name = new bare.createInstance(any,null,this.element.name,this.scope.currentLibrary);
        if (is(member, any)) {
            member.function = ((_) : any =>  {
                {
                    _.parent = member;
                    return _;
                }
            })(new bare.createInstance(any,null,new bare.createInstance(any,null)));
        }else if (is(member, any)) {
            member.function = ((_) : any =>  {
                {
                    _.parent = member;
                    return _;
                }
            })(new bare.createInstance(any,null,new bare.createInstance(any,null)));
        }
    }
    addAnnotations(annotations : core.DartList<any>) : void {
        for(let annotation of annotations) {
            this.currentMember.addAnnotation(this.scope.buildAnnotation(annotation));
        }
    }
    handleNativeBody(body : any) : void {
        if (is(body, any)) {
            this.currentMember.isExternal = true;
            this.currentMember.addAnnotation(new bare.createInstance(any,null,this.scope.loader.getCoreClassConstructorReference('ExternalName',{
                library : 'dart:_internal'}),new bare.createInstance(any,null,new core.DartList.literal<any>(new bare.createInstance(any,null,body.stringLiteral.stringValue))),{
                isConst : true}));
        }
    }
    visitConstructorDeclaration(node : any) {
        if (node.factoryKeyword != null) {
            this.buildFactoryConstructor(node);
        }else {
            this.buildGenerativeConstructor(node);
        }
    }
    buildGenerativeConstructor(node : any) : void {
        if (isNot(this.currentMember, any)) {
            this.buildBrokenMember();
            return;
        }
        this.addAnnotations(node.metadata);
        let constructor : any = this.currentMember;
        constructor.function = ((_) : any =>  {
            {
                _.parent = constructor;
                return _;
            }
        })(this.scope.buildFunctionNode(node.parameters,node.body,{
            inferredReturnType : new bare.createInstance(any,null)}));
        this.handleNativeBody(node.body);
        if (is(node.body, any) && !constructor.isExternal) {
            let function = constructor.function;
            function.body = ((_) : any =>  {
                {
                    _.parent = function;
                    return _;
                }
            })(new bare.createInstance(any,null));
        }
        for(let parameter of node.parameters.parameterElements) {
            if (is(parameter, any)) {
                let initializer : any;
                if (op(Op.EQUALS,parameter.field,null)) {
                    initializer = new bare.createInstance(any,null,new bare.createInstance(any,"forValue",this.scope.buildThrowCompileTimeErrorFromCode(CompileTimeErrorCode.INITIALIZER_FOR_NON_EXISTENT_FIELD,new core.DartList.literal(parameter.name))));
                }else {
                    initializer = new bare.createInstance(any,null,this.scope.getMemberReference(parameter.field),new bare.createInstance(any,null,this.scope.getVariableReference(parameter)));
                }
                constructor.initializers.add(((_) : any =>  {
                    {
                        _.parent = constructor;
                        return _;
                    }
                })(initializer));
            }
        }
        let hasExplicitConstructorCall : boolean = false;
        for(let initializer of node.initializers) {
            let node = this.scope.buildInitializer(initializer);
            constructor.initializers.add(((_) : any =>  {
                {
                    _.parent = constructor;
                    return _;
                }
            })(node));
            if (is(node, any) || is(node, any)) {
                hasExplicitConstructorCall = true;
            }
        }
        let classElement : any = resolutionMap.elementDeclaredByConstructorDeclaration(node).enclosingElement;
        if (classElement.supertype != null && !hasExplicitConstructorCall) {
            let targetElement : any = this.scope.findDefaultConstructor(classElement.supertype.element);
            let target : any = this.scope.resolveConstructor(targetElement);
            let initializer : any = op(Op.EQUALS,target,null) ? new bare.createInstance(any,null) : new bare.createInstance(any,null,target,new bare.createInstance(any,null,new core.DartList.literal<any>()));
            constructor.initializers.add(((_) : any =>  {
                {
                    _.parent = constructor;
                    return _;
                }
            })(initializer));
        }else {
            moveSuperInitializerLast(constructor);
        }
    }
    buildFactoryConstructor(node : any) : void {
        if (isNot(this.currentMember, any)) {
            this.buildBrokenMember();
            return;
        }
        this.addAnnotations(node.metadata);
        let procedure : any = this.currentMember;
        let classElement : any = resolutionMap.elementDeclaredByConstructorDeclaration(node).enclosingElement;
        let classNode : any = procedure.enclosingClass;
        let types = getFreshTypeParameters(classNode.typeParameters);
        for(let i : number = 0; i < classElement.typeParameters.length; ++i){
            this.scope.localTypeParameters.set(op(Op.INDEX,classElement.typeParameters,i),op(Op.INDEX,types.freshTypeParameters,i));
        }
        let inferredReturnType = types.freshTypeParameters.isEmpty ? classNode.rawType : new bare.createInstance(any,null,classNode,types.freshTypeParameters.map(makeTypeParameterType).toList({
            growable : false}));
        let function = this.scope.buildFunctionNode(node.parameters,node.body,{
            typeParameters : types.freshTypeParameters,inferredReturnType : inferredReturnType});
        procedure.function = ((_) : any =>  {
            {
                _.parent = procedure;
                return _;
            }
        })(function);
        this.handleNativeBody(node.body);
        if (node.redirectedConstructor != null) {
            let element = resolutionMap.elementDeclaredByConstructorDeclaration(node);
            /* TODO (AssertStatementImpl) : assert (!element.isSynthetic); */;
            let expression;
            if (node.element.redirectedConstructor != null) {
                /* TODO (AssertStatementImpl) : assert (!scope.loader.ignoreRedirectingFactories); */;
                let element : any = node.element.redirectedConstructor;
                while (element.isFactory && element.redirectedConstructor != null){
                    element = element.redirectedConstructor;
                }
                let target : any = this.scope.getMemberReference(element);
                /* TODO (AssertStatementImpl) : assert (target != null); */;
                expression = new bare.createInstance(any,null,new bare.createInstance(any,"forValue",new bare.createInstance(any,null,target)),new bare.createInstance(any,null));
                let constructors : any = new bare.createInstance(any,null,"_redirecting#",this.scope.currentLibrary);
                let constructorsField : any;
                for(let field of classNode.fields) {
                    if (op(Op.EQUALS,field.name,constructors)) {
                        constructorsField = field;
                        break;
                    }
                }
                if (op(Op.EQUALS,constructorsField,null)) {
                    let literal : any = new bare.createInstance(any,null,new core.DartList.literal<any>());
                    constructorsField = ((_) : any =>  {
                        {
                            _.fileOffset = classNode.fileOffset;
                            return _;
                        }
                    })(new bare.createInstance(any,null,constructors,{
                        isStatic : true,initializer : literal,fileUri : classNode.fileUri}));
                    classNode.addMember(constructorsField);
                }
                let literal : any = constructorsField.initializer;
                literal.expressions.add(((_) : any =>  {
                    {
                        _.parent = literal;
                        return _;
                    }
                })(new bare.createInstance(any,null,procedure)));
            }else {
                let name = node.redirectedConstructor.type.name.name;
                if (node.redirectedConstructor.name != null) {
                    name += '.' + node.redirectedConstructor.name.name;
                }
                expression = this.scope.buildThrowNoSuchMethodError(new bare.createInstance(any,null),name,new bare.createInstance(any,"empty"));
            }
            let function = procedure.function;
            function.body = ((_) : any =>  {
                {
                    _.parent = function;
                    return _;
                }
            })(new bare.createInstance(any,null,expression));
        }
    }
    visitMethodDeclaration(node : any) {
        this.addAnnotations(node.metadata);
        let procedure : any = this.currentMember;
        procedure.function = ((_) : any =>  {
            {
                _.parent = procedure;
                return _;
            }
        })(this.scope.buildFunctionNode(node.parameters,node.body,{
            returnType : node.returnType,inferredReturnType : this.scope.buildType(resolutionMap.elementDeclaredByMethodDeclaration(node).returnType),typeParameters : this.scope.buildOptionalTypeParameterList(node.typeParameters,{
                strongModeOnly : true})}));
        this.handleNativeBody(node.body);
    }
    visitVariableDeclaration(node : any) {
        this.addAnnotations(node.metadata);
        let field : any = this.currentMember;
        field.type = this.scope.buildType(resolutionMap.elementDeclaredByVariableDeclaration(node).type);
        if (node.initializer != null) {
            field.initializer = ((_) : any =>  {
                {
                    _.parent = field;
                    return _;
                }
            })(this.scope.buildTopLevelExpression(node.initializer));
        }else if (field.isStatic) {
            field.initializer = ((_) : any =>  {
                {
                    _.parent = field;
                    return _;
                }
            })(new bare.createInstance(any,null));
        }
    }
    visitFunctionDeclaration(node : any) {
        this.addAnnotations(node.metadata);
        let function = node.functionExpression;
        let procedure : any = this.currentMember;
        procedure.function = ((_) : any =>  {
            {
                _.parent = procedure;
                return _;
            }
        })(this.scope.buildFunctionNode(function.parameters,function.body,{
            returnType : node.returnType,typeParameters : this.scope.buildOptionalTypeParameterList(function.typeParameters,{
                strongModeOnly : true})}));
        this.handleNativeBody(function.body);
    }
    visitNode(node : any) {
        log.severe(`Unexpected class or library member: ${node}`);
    }
}

export namespace _CompilationError {
    export type Constructors = '_CompilationError';
    export type Interface = Omit<_CompilationError, Constructors>;
}
@DartClass
export class _CompilationError {
    message : string;

    constructor(message : string) {
    }
    @defaultConstructor
    _CompilationError(message : string) {
        this.message = message;
    }
}

export namespace _StaticAccessor {
    export type Constructors = '_StaticAccessor';
    export type Interface = Omit<_StaticAccessor, Constructors>;
}
@DartClass
export class _StaticAccessor extends any {
    scope : ExpressionScope;

    name : string;

    constructor(scope : ExpressionScope,name : string,readTarget : any,writeTarget : any) {
    }
    @defaultConstructor
    _StaticAccessor(scope : ExpressionScope,name : string,readTarget : any,writeTarget : any) {
        super.DartObject(readTarget,writeTarget,lib3.TreeNode.noOffset);
        this.scope = scope;
        this.name = name;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    makeInvalidRead() {
        return this.scope.buildThrowNoSuchMethodError(new bare.createInstance(any,null),this.name,new bare.createInstance(any,null,new core.DartList.literal()));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    makeInvalidWrite(value : any) {
        return this.scope.buildThrowNoSuchMethodError(new bare.createInstance(any,null),this.name,new bare.createInstance(any,null,new core.DartList.literal(value)));
    }
}

export namespace TypeScope {
    export type Constructors = ReferenceScope.Constructors | 'TypeScope';
    export type Interface = Omit<TypeScope, Constructors>;
}
@DartClass
export class TypeScope extends ReferenceScope {
    localTypeParameters : core.DartMap<any,any>;

    _typeBuilder : TypeAnnotationBuilder;

    constructor(loader : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    TypeScope(loader : any) {
        this.localTypeParameters = new core.DartMap.literal([
        ]);
        super.ReferenceScope(loader);
        this._typeBuilder = new TypeAnnotationBuilder(this);
    }
    get location() : string {
        return '?';
    }
    get allowClassTypeParameters() : boolean {
        return false;
    }
    get defaultTypeParameterBound() : any {
        return this.getRootClassReference().rawType;
    }
    tryGetTypeParameterReference(element : any) : any {
        return (this.localTypeParameters.get(element) || this.loader.tryGetClassTypeParameter(element));
    }
    getTypeParameterReference(element : any) : any {
        return ((this.localTypeParameters.get(element) || this.loader.tryGetClassTypeParameter(element)) || (this.localTypeParameters.set(element,new bare.createInstance(any,null,element.name))));
    }
    makeTypeParameter(element : any,_namedArguments? : {bound? : any}) : any {
        let {bound} = Object.assign({
        }, _namedArguments );
        let typeParameter = this.getTypeParameterReference(element);
        /* TODO (AssertStatementImpl) : assert (bound != null); */;
        typeParameter.bound = bound;
        return typeParameter;
    }
    buildType(type : any) : any {
        return this._typeBuilder.buildFromDartType(type);
    }
    buildSupertype(type : any) : any {
        if (is(type, any)) {
            let classElement = type.element;
            if (op(Op.EQUALS,classElement,null)) return this.getRootClassReference().asRawSupertype;
            let classNode = this.getClassReference(classElement);
            if (classNode.typeParameters.isEmpty || classNode.typeParameters.length != type.typeArguments.length) {
                return classNode.asRawSupertype;
            }else {
                return new bare.createInstance(any,null,classNode,type.typeArguments.map(this.buildType.bind(this)).toList({
                    growable : false}));
            }
        }
        return this.getRootClassReference().asRawSupertype;
    }
    buildTypeAnnotation(node : any) : any {
        return this._typeBuilder.build(node);
    }
    buildOptionalTypeAnnotation(node : any) : any {
        return op(Op.EQUALS,node,null) ? null : this._typeBuilder.build(node);
    }
    getInferredType(node : any) : any {
        if (!this.strongMode) return new bare.createInstance(any,null);
        return this.buildType(node.staticType);
    }
    getInferredTypeArgument(node : any,index : number) : any {
        let type = this.getInferredType(node);
        return is(type, any) && index < type.typeArguments.length ? op(Op.INDEX,type.typeArguments,index) : new bare.createInstance(any,null);
    }
    getInferredReturnType(node : any) : any {
        let type = this.getInferredType(node);
        return is(type, any) ? type.returnType : new bare.createInstance(any,null);
    }
    getInferredInvocationTypeArguments(node : any) : core.DartList<any> {
        if (!this.strongMode) return new core.DartList.literal<any>();
        let inferredFunctionType : any = this.buildType(node.staticInvokeType);
        let genericFunctionType : any = this.buildType(node.function.staticType);
        if (is(genericFunctionType, any)) {
            if (genericFunctionType.typeParameters.isEmpty) return new core.DartList.literal<any>();
            let substitution = unifyTypes(genericFunctionType.withoutTypeParameters,inferredFunctionType,genericFunctionType.typeParameters.toSet());
            if (substitution != null) {
                return genericFunctionType.typeParameters.map((p : any) =>  {
                    return (op(Op.INDEX,substitution,p) || new bare.createInstance(any,null));
                }).toList();
            }
            return new core.DartList.filled(genericFunctionType.typeParameters.length,new bare.createInstance(any,null),{
                growable : true});
        }else {
            return new core.DartList.literal<any>();
        }
    }
    buildOptionalTypeArgumentList(node : any) : core.DartList<any> {
        if (op(Op.EQUALS,node,null)) return null;
        return this._typeBuilder.buildList(node.arguments);
    }
    buildTypeArgumentList(node : any) : core.DartList<any> {
        return this._typeBuilder.buildList(node.arguments);
    }
    buildOptionalTypeParameterList(node : any,_namedArguments? : {strongModeOnly? : boolean}) : core.DartList<any> {
        let {strongModeOnly} = Object.assign({
            "strongModeOnly" : false}, _namedArguments );
        if (op(Op.EQUALS,node,null)) return new core.DartList.literal<any>();
        if (strongModeOnly && !this.strongMode) return new core.DartList.literal<any>();
        return node.typeParameters.map(this.buildTypeParameter.bind(this)).toList();
    }
    buildTypeParameter(node : any) : any {
        return this.makeTypeParameter(node.element,{
            bound : (this.buildOptionalTypeAnnotation(node.bound) || this.defaultTypeParameterBound)});
    }
    findDefaultConstructor(class_ : any) : any {
        for(let constructor of class_.constructors) {
            if (constructor.isDefaultConstructor && !constructor.isFactory) {
                return constructor;
            }
        }
        return null;
    }
    buildFunctionInterface(element : any) : any {
        let positional = new core.DartList.literal<any>();
        let named = new core.DartList.literal<any>();
        let requiredParameterCount : number = 0;
        let typeParameters = new core.DartList.literal<any>();
        let typeParameterElements = is(element, any) && element.isFactory ? element.enclosingElement.typeParameters : element.typeParameters;
        if (this.strongMode || is(element, any)) {
            for(let parameter of typeParameterElements) {
                let parameterNode = new bare.createInstance(any,null,parameter.name);
                typeParameters.add(parameterNode);
                this.localTypeParameters.set(parameter,parameterNode);
            }
        }
        for(let i : number = 0; i < typeParameters.length; ++i){
            let parameter = op(Op.INDEX,typeParameterElements,i);
            let parameterNode = typeParameters[i];
            parameterNode.bound = op(Op.EQUALS,parameter.bound,null) ? this.defaultTypeParameterBound : this.buildType(parameter.bound);
        }
        for(let parameter of element.parameters) {
            let parameterNode = new bare.createInstance(any,null,parameter.name,{
                type : this.buildType(parameter.type)});
            switch (parameter.parameterKind) {
                case ParameterKind.REQUIRED:
                    positional.add(parameterNode);
                    ++requiredParameterCount;
                    break;
                case ParameterKind.POSITIONAL:
                    positional.add(parameterNode);
                    break;
                case ParameterKind.NAMED:
                    named.add(parameterNode);
                    break;
            }
        }
        let returnType = is(element, any) ? new bare.createInstance(any,null) : this.buildType(element.returnType);
        return ((_) : any =>  {
            {
                _.fileOffset = element.nameOffset;
                return _;
            }
        })(new bare.createInstance(any,null,null,{
            typeParameters : typeParameters,positionalParameters : positional,namedParameters : named,requiredParameterCount : requiredParameterCount,returnType : returnType}));
    }
}

export namespace ExpressionScope {
    export type Constructors = TypeScope.Constructors | 'ExpressionScope';
    export type Interface = Omit<ExpressionScope, Constructors>;
}
@DartClass
export class ExpressionScope extends TypeScope {
    currentLibrary : any;

    localVariables : core.DartMap<any,any>;

    _expressionBuilder : ExpressionBuilder;

    _statementBuilder : StatementBuilder;

    constructor(loader : any,currentLibrary : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ExpressionScope(loader : any,currentLibrary : any) {
        this.localVariables = new core.DartMap.literal([
        ]);
        super.TypeScope(loader);
        this.currentLibrary = currentLibrary;
        /* TODO (AssertStatementImpl) : assert (currentLibrary != null); */;
        this._expressionBuilder = new ExpressionBuilder(this);
        this._statementBuilder = new StatementBuilder(this);
    }
    get allowThis() : boolean {
        return false;
    }
    buildName(node : any) : any {
        return new bare.createInstance(any,null,node.name,this.currentLibrary);
    }
    buildStatement(node : any) : any {
        return this._statementBuilder.build(node);
    }
    buildOptionalFunctionBody(body : any) : any {
        if (op(Op.EQUALS,body,null) || is(body, any) || is(body, any)) {
            return null;
        }
        return this.buildMandatoryFunctionBody(body);
    }
    buildMandatoryFunctionBody(body : any) : any {
        try {
            if (is(body, any)) {
                return this.buildStatement(body.block);
            }else if (is(body, any)) {
                if (this.bodyHasVoidReturn(body)) {
                    return new bare.createInstance(any,null,this.buildExpression(body.expression));
                }else {
                    return ((_) : any =>  {
                        {
                            _.fileOffset = body.expression.offset;
                            return _;
                        }
                    })(new bare.createInstance(any,null,this.buildExpression(body.expression)));
                }
            }else {
                return this.internalError('Missing function body');
            }
        } catch (__error__) {

            if (is(__error__,_CompilationError)){
                let e : _CompilationError = __error__;
                return new bare.createInstance(any,null,this.buildThrowCompileTimeError(e.message));
            }
        }
    }
    getAsyncMarker(_namedArguments? : {isAsync? : boolean,isStar? : boolean}) : any {
        let {isAsync,isStar} = Object.assign({
            "isAsync" : false,
            "isStar" : false}, _namedArguments );
        return op(Op.INDEX,lib3.AsyncMarker.values,(isAsync ? 2 : 0) + (isStar ? 1 : 0));
    }
    buildFunctionNode(formalParameters : any,body : any,_namedArguments? : {returnType? : any,typeParameters? : core.DartList<any>,inferredReturnType? : any}) : any {
        let {returnType,typeParameters,inferredReturnType} = Object.assign({
        }, _namedArguments );
        let positional = new core.DartList.literal<any>();
        let named = new core.DartList.literal<any>();
        let requiredParameterCount : number = 0;
        let formals = (((t)=>(!!t)?t.parameters:null)(formalParameters) || new core.DartList.literal<any>());
        for(let parameter of formals) {
            let declaration = this.makeVariableDeclaration(parameter.element,{
                initializer : is(parameter, any) ? this.buildOptionalTopLevelExpression(parameter.defaultValue) : null,type : this.buildType(resolutionMap.elementDeclaredByFormalParameter(parameter).type)});
            switch (parameter.kind) {
                case ParameterKind.REQUIRED:
                    positional.add(declaration);
                    ++requiredParameterCount;
                    declaration.initializer = null;
                    break;
                case ParameterKind.POSITIONAL:
                    positional.add(declaration);
                    break;
                case ParameterKind.NAMED:
                    named.add(declaration);
                    break;
            }
        }
        let offset : number = (((t)=>(!!t)?t.offset:null)(formalParameters) || body.offset);
        let endOffset : number = body.endToken.offset;
        let asyncMarker : any = this.getAsyncMarker({
            isAsync : body.isAsynchronous,isStar : body.isGenerator});
        return ((_) : any =>  {
            {
                _.fileOffset = offset;
                _.fileEndOffset = endOffset;
                return _;
            }
        })(new bare.createInstance(any,null,this.buildOptionalFunctionBody(body),{
            typeParameters : typeParameters,positionalParameters : positional,namedParameters : named,requiredParameterCount : requiredParameterCount,returnType : ((this.buildOptionalTypeAnnotation(returnType) || inferredReturnType) || new bare.createInstance(any,null)),asyncMarker : asyncMarker,dartAsyncMarker : asyncMarker}));
    }
    buildOptionalTopLevelExpression(node : any) : any {
        return op(Op.EQUALS,node,null) ? null : this.buildTopLevelExpression(node);
    }
    buildTopLevelExpression(node : any) : any {
        try {
            return this._expressionBuilder.build(node);
        } catch (__error__) {

            if (is(__error__,_CompilationError)){
                let e : _CompilationError = __error__;
                return this.buildThrowCompileTimeError(e.message);
            }
        }
    }
    buildExpression(node : any) : any {
        return this._expressionBuilder.build(node);
    }
    buildOptionalExpression(node : any) : any {
        return op(Op.EQUALS,node,null) ? null : this._expressionBuilder.build(node);
    }
    buildLeftHandValue(node : any) : any {
        return this._expressionBuilder.buildLeftHandValue(node);
    }
    buildStringLiteral(node : any) : any {
        let parts : core.DartList<any> = new core.DartList.literal<any>();
        new StringLiteralPartBuilder(this,parts).build(node);
        return parts.length == 1 && is(parts[0], any) ? parts[0] : new bare.createInstance(any,null,parts);
    }
    buildThis() : any {
        return this.allowThis ? new bare.createInstance(any,null) : this.emitCompileTimeError(CompileTimeErrorCode.INVALID_REFERENCE_TO_THIS);
    }
    buildInitializer(node : any) : any {
        try {
            return new InitializerBuilder(this).build(node);
        } catch (__error__) {

            if (is(__error__,_CompilationError)){
                let _ : _CompilationError = __error__;
                return new bare.createInstance(any,null);
            }
        }
    }
    isFinal(element : any) : boolean {
        return is(element, any) && element.isFinal || is(element, any);
    }
    isConst(element : any) : boolean {
        return is(element, any) && element.isConst;
    }
    getVariableReference(element : any) : any {
        return this.localVariables.putIfAbsent(element,() =>  {
            return ((_) : any =>  {
                {
                    _.fileOffset = element.nameOffset;
                    return _;
                }
            })(new bare.createInstance(any,null,element.name,{
                isFinal : this.isFinal(element),isConst : this.isConst(element)}));
        });
    }
    getInferredVariableType(element : any) : any {
        if (!this.strongMode) return new bare.createInstance(any,null);
        if (is(element, any)) {
            return this.buildType(element.type);
        }else if (is(element, any)) {
            return this.buildType(element.type);
        }else {
            log.severe(`Unexpected variable element: ${element}`);
            return new bare.createInstance(any,null);
        }
    }
    makeVariableDeclaration(element : any,_namedArguments? : {type? : any,initializer? : any,equalsOffset? : number}) : any {
        let {type,initializer,equalsOffset} = Object.assign({
        }, _namedArguments );
        let declaration = this.getVariableReference(element);
        if (equalsOffset != null) declaration.fileEqualsOffset = equalsOffset;
        declaration.type = (type || this.getInferredVariableType(element));
        if (initializer != null) {
            declaration.initializer = ((_) : any =>  {
                {
                    _.parent = declaration;
                    return _;
                }
            })(initializer);
        }
        return declaration;
    }
    areArgumentsCompatible(target : any,arguments : any) : boolean {
        let positionals = arguments.positional;
        let parameters = target.parameters;
        let required = ParameterKind.REQUIRED;
        let named = ParameterKind.NAMED;
        if (op(Op.LT,positionals.length,parameters.length) && op(Op.EQUALS,op(Op.INDEX,parameters,positionals.length).parameterKind,required)) {
            return false;
        }
        if (op(Op.GT,positionals.length,parameters.length)) return false;
        if (positionals.isNotEmpty && op(Op.EQUALS,op(Op.INDEX,parameters,op(Op.MINUS,positionals.length,1)).parameterKind,named)) {
            return false;
        }
        if (arguments.named.isEmpty) return true;
        let firstNamedParameter : number = positionals.length;
        while (firstNamedParameter < parameters.length && op(Op.INDEX,parameters,firstNamedParameter).parameterKind != ParameterKind.NAMED){
            ++firstNamedParameter;
        }
        namedLoop:
            for(let i : number = 0; i < arguments.named.length; ++i){
                let name : string = op(Op.INDEX,arguments.named,i).name;
                for(let j : number = firstNamedParameter; j < parameters.length; ++j){
                    if (op(Op.EQUALS,op(Op.INDEX,parameters,j).parameterKind,ParameterKind.NAMED) && op(Op.EQUALS,op(Op.INDEX,parameters,j).name,name)) {
                        continue;
                    }
                }
                return false;
            };
        return true;
    }
    buildThrowNoSuchMethodError(receiver : any,memberName : string,arguments : any,_namedArguments? : {candidateTarget? : any}) : any {
        let {candidateTarget} = Object.assign({
        }, _namedArguments );
        let candidateArgumentNames : any;
        if (is(candidateTarget, any)) {
            candidateArgumentNames = new bare.createInstance(any,null,candidateTarget.parameters.map((p : any) =>  {
                return new bare.createInstance(any,null,p.name);
            }).toList());
        }else {
            candidateArgumentNames = new bare.createInstance(any,null);
        }
        return new bare.createInstance(any,null,new bare.createInstance(any,null,this.loader.getCoreClassConstructorReference('NoSuchMethodError'),new bare.createInstance(any,null,new core.DartList.literal<any>(receiver,new bare.createInstance(any,null,memberName),new bare.createInstance(any,null,arguments.positional),new bare.createInstance(any,null,arguments.named.map((arg : any) =>  {
            return new bare.createInstance(any,null,new bare.createInstance(any,null,arg.name),arg.value);
        }).toList()),candidateArgumentNames))));
    }
    buildThrowCompileTimeError(message : string) : any {
        return new bare.createInstance(any,null,new bare.createInstance(any,null,message));
    }
    buildThrowCompileTimeErrorFromCode(code : any,arguments? : core.DartList<any>) : any {
        return this.buildThrowCompileTimeError(this.makeErrorMessage(code,arguments));
    }
    private static __$_errorMessagePattern : core.DartRegExp;
    static get _errorMessagePattern() : core.DartRegExp { 
        if (this.__$_errorMessagePattern===undefined) {
            this.__$_errorMessagePattern = new core.DartRegExp('\{(\d+)\}');
        }
        return this.__$_errorMessagePattern;
    }
    static set _errorMessagePattern(__$value : core.DartRegExp)  { 
        this.__$_errorMessagePattern = __$value;
    }

    makeErrorMessage(error : any,arguments? : core.DartList<any>) : string {
        let message : string = error.message;
        if (arguments != null) {
            message = new core.DartString(message).replaceAllMapped(ExpressionScope._errorMessagePattern,(m : any) =>  {
                let numberString : string = m.group(1);
                let index : number = core.DartInt.parse(numberString);
                return arguments[index];
            });
        }
        return message;
    }
    emitCompileTimeError(error : any,arguments? : core.DartList<any>) {
        throw new _CompilationError(this.makeErrorMessage(error,arguments));
    }
    buildThrowAbstractClassInstantiationError(name : string) : any {
        return new bare.createInstance(any,null,new bare.createInstance(any,null,this.loader.getCoreClassConstructorReference('AbstractClassInstantiationError'),new bare.createInstance(any,null,new core.DartList.literal<any>(new bare.createInstance(any,null,name)))));
    }
    buildThrowFallThroughError() : any {
        return new bare.createInstance(any,null,new bare.createInstance(any,null,this.loader.getCoreClassConstructorReference('FallThroughError'),new bare.createInstance(any,"empty")));
    }
    emitInvalidConstant(error? : any) {
        error = ( error ) || ( CompileTimeErrorCode.INVALID_CONSTANT );
        return this.emitCompileTimeError(error);
    }
    internalError(message : string) {
        throw `Internal error when compiling ${this.location}: ${message}`;
    }
    unsupportedFeature(feature : string) {
        throw new _CompilationError(`${feature} is not supported`);
    }
    buildAnnotation(annotation : any) : any {
        let element : any = annotation.element;
        if (op(Op.EQUALS,annotation.arguments,null)) {
            let target = this.resolveConcreteGet(element,null);
            return op(Op.EQUALS,target,null) ? new bare.createInstance(any,null) : new bare.createInstance(any,null,target);
        }else if (is(element, any) && element.isConst) {
            let target = this.resolveConstructor(element);
            return op(Op.EQUALS,target,null) ? new bare.createInstance(any,null) : new bare.createInstance(any,null,target,this._expressionBuilder.buildArguments(annotation.arguments),{
                isConst : true});
        }else {
            return new bare.createInstance(any,null);
        }
    }
    addTransformerFlag(flags : number) : void {
    }
    hasVoidReturn(element : any) : boolean {
        return (this.strongMode && element.returnType.isVoid) || (is(element, any) && element.isSetter) || op(Op.EQUALS,element.name,'[]=');
    }
    bodyHasVoidReturn(body : any) : boolean {
        let parent : any = body.parent;
        return is(parent, any) && this.hasVoidReturn(parent.element) || is(parent, any) && this.hasVoidReturn(parent.element);
    }
}

export namespace ClassScope {
    export type Constructors = ExpressionScope.Constructors | 'ClassScope';
    export type Interface = Omit<ClassScope, Constructors>;
}
@DartClass
export class ClassScope extends ExpressionScope {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get allowClassTypeParameters() : boolean {
        return true;
    }
    constructor(loader : any,library : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ClassScope(loader : any,library : any) {
        super.ExpressionScope(loader,library);
    }
}

export namespace MemberScope {
    export type Constructors = ExpressionScope.Constructors | 'MemberScope';
    export type Interface = Omit<MemberScope, Constructors>;
}
@DartClass
export class MemberScope extends ExpressionScope {
    currentMember : any;

    constructor(loader : any,currentMember : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    MemberScope(loader : any,currentMember : any) {
        this.currentMember = currentMember;
        super.ExpressionScope(loader,currentMember.enclosingLibrary);
        /* TODO (AssertStatementImpl) : assert (currentMember != null); */;
    }
    get currentClass() : any {
        return this.currentMember.enclosingClass;
    }
    get allowThis() : boolean {
        return this._memberHasThis(this.currentMember);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get allowClassTypeParameters() : boolean {
        return this.currentMember.isInstanceMember || is(this.currentMember, any);
    }
    get location() : string {
        let library = (((t)=>(!!t)?t.importUri:null)(this.currentMember.enclosingLibrary) || '<No Library>');
        let className = op(Op.EQUALS,this.currentMember.enclosingClass,null) ? null : ((((t)=>(!!t)?t.name:null)(this.currentMember.enclosingClass) || '<Anonymous Class>'));
        let member = (((t)=>(!!t)?t.name:null)(this.currentMember.name) || `<Anonymous ${this.currentMember.runtimeType}>`);
        return new core.DartList.literal(library,className,member).join('::');
    }
    _memberHasThis(member : any) : boolean {
        return is(member, any) && !member.isStatic || is(member, any);
    }
    addTransformerFlag(flags : number) : void {
        this.currentMember.transformerFlags |= flags;
    }
}

export class properties {
}
