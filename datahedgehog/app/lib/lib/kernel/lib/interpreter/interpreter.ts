/** Library asset:datahedgehog_monitor/lib/lib/kernel/lib/interpreter/interpreter.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../ast";
import * as lib4 from "./../visitor";
import * as lib5 from "./../log";

export var notImplemented : (_namedArguments? : {m? : string,obj? : core.DartObject}) => any = (_namedArguments? : {m? : string,obj? : core.DartObject}) =>  {
    let {m,obj} = Object.assign({
    }, _namedArguments );
    throw new NotImplemented((m || `Evaluation for ${obj} is not implemented`));
};
export var _initializeNullFields : (class_ : Class,newObject : ObjectValue) => void = (class_ : Class,newObject : ObjectValue) : void =>  {
    let superClassSize : number = (((t)=>(!!t)?t.instanceSize:null)(class_.superclass) || 0);
    for(let i : number = superClassSize; i < class_.instanceSize; i++){
        let field : lib3.Field = class_.instanceFields[i];
        if (op(Op.EQUALS,class_.getProperty(newObject,field),null)) {
            /* TODO (AssertStatementImpl) : assert (field.initializer == null); */;
            class_.setProperty(newObject,field,Value.nullInstance);
        }
    }
};
export var _getExpression : (initializer : lib3.Initializer) => lib3.Expression = (initializer : lib3.Initializer) : lib3.Expression =>  {
    if (is(initializer, lib3.FieldInitializer)) {
        return initializer.value;
    }
    if (is(initializer, lib3.LocalInitializer)) {
        return initializer.variable.initializer;
    }
    throw `${initializer.runtimeType} has no epxression.`;
};
export var _createArgumentExpressionList : (providedArgs : lib3.Arguments,fun : lib3.FunctionNode) => core.DartList<InterpreterExpression> = (providedArgs : lib3.Arguments,fun : lib3.FunctionNode) : core.DartList<InterpreterExpression> =>  {
    let args : core.DartList<InterpreterExpression> = new core.DartList.literal<InterpreterExpression>();
    args.addAll(providedArgs.positional.map((e : lib3.Expression) =>  {
        return new PositionalExpression(e);
    }));
    for(let i : number = providedArgs.positional.length; i < fun.positionalParameters.length; i++){
        args.add(new PositionalExpression(fun.positionalParameters[i].initializer));
    }
    let namedFormals : core.DartMap<string,NamedExpression> = new core.DartMap.fromIterable(fun.namedParameters,{
        key : (vd : lib3.VariableDeclaration) =>  {
            return vd.name;
        },value : (vd : lib3.VariableDeclaration) =>  {
            return new NamedExpression(vd.name,vd.initializer);
        }});
    for(let i : number = 0; i < providedArgs.named.length; i++){
        let current = providedArgs.named[i];
        args.add(new NamedExpression(current.name,current.value));
        namedFormals.remove(current.name);
    }
    args.addAll(namedFormals.values);
    return args;
};
export namespace Interpreter {
    export type Constructors = 'Interpreter';
    export type Interface = Omit<Interpreter, Constructors>;
}
@DartClass
export class Interpreter {
    program : lib3.Program;

    visitor : StatementExecuter;

    constructor(program : lib3.Program) {
    }
    @defaultConstructor
    Interpreter(program : lib3.Program) {
        this.visitor = new StatementExecuter();
        this.program = program;
    }
    run() : void {
        /* TODO (AssertStatementImpl) : assert (program.libraries.isEmpty); */;
        let mainMethod : lib3.Procedure = this.program.mainMethod;
        if (op(Op.EQUALS,mainMethod,null)) return;
        let statementBlock : lib3.Statement = mainMethod.function.body;
        let configuration : StatementConfiguration = new StatementConfiguration(statementBlock,new State.initial());
        this.visitor.trampolinedExecution(configuration);
    }
}

export namespace Binding {
    export type Constructors = 'Binding';
    export type Interface = Omit<Binding, Constructors>;
}
@DartClass
export class Binding {
    variable : lib3.VariableDeclaration;

    value : Value;

    constructor(variable : lib3.VariableDeclaration,value : Value) {
    }
    @defaultConstructor
    Binding(variable : lib3.VariableDeclaration,value : Value) {
        this.variable = variable;
        this.value = value;
    }
}

export namespace Environment {
    export type Constructors = 'empty' | 'Environment';
    export type Interface = Omit<Environment, Constructors>;
}
@DartClass
export class Environment {
    bindings : core.DartList<Binding>;

    parent : Environment;

    get thisInstance() : Value {
        return (this.parent != null) ? this.parent.thisInstance : throw "Invalid reference to 'this' expression";
    }
    @namedConstructor
    empty() {
        this.bindings = new core.DartList.literal<Binding>();
        this.parent = null;
    }
    static empty : new() => Environment;

    constructor(parent : Environment) {
    }
    @defaultConstructor
    Environment(parent : Environment) {
        this.bindings = new core.DartList.literal<Binding>();
        this.parent = parent;
    }
    contains(variable : lib3.VariableDeclaration) : boolean {
        for(let b of this.bindings.reversed) {
            if (core.identical(b.variable,variable)) return true;
        }
        return (((_690_)=>(!!_690_)?_690_.contains(variable):null)(this.parent) || false);
    }
    lookupBinding(variable : lib3.VariableDeclaration) : Binding {
        /* TODO (AssertStatementImpl) : assert (contains(variable)); */;
        for(let b of this.bindings) {
            if (core.identical(b.variable,variable)) return b;
        }
        return this.parent.lookupBinding(variable);
    }
    lookup(variable : lib3.VariableDeclaration) : Value {
        return this.lookupBinding(variable).value;
    }
    assign(variable : lib3.VariableDeclaration,value : Value) : void {
        /* TODO (AssertStatementImpl) : assert (contains(variable)); */;
        this.lookupBinding(variable).value = value;
    }
    expand(variable : lib3.VariableDeclaration,value : Value) : void {
        /* TODO (AssertStatementImpl) : assert (!contains(variable)); */;
        this.bindings.add(new Binding(variable,value));
    }
}

export namespace Evaluator {
    export type Constructors = lib4.ExpressionVisitor1.Constructors | 'Evaluator';
    export type Interface = Omit<Evaluator, Constructors>;
}
@DartClass
export class Evaluator extends lib4.ExpressionVisitor1<Configuration,ExpressionConfiguration> {
    eval(expr : lib3.Expression,config : ExpressionConfiguration) : Configuration {
        return expr.accept1(this,config);
    }
    evalList(list : core.DartList<InterpreterExpression>,env : Environment,cont : ApplicationContinuation) : Configuration {
        if (list.isNotEmpty) {
            return new ExpressionConfiguration(list.first.expression,env,new ExpressionListContinuation(list.first,list.skip(1),env,cont));
        }
        return new ExpressionListContinuationConfiguration(cont,new core.DartList.literal<InterpreterValue>());
    }
    defaultExpression(node : lib3.Expression,config : ExpressionConfiguration) : Configuration {
        throw new NotImplemented('Evaluation for expressions of type ' + `${node.runtimeType} is not implemented.`);
    }
    visitInvalidExpression1(node : lib3.InvalidExpression,config : ExpressionConfiguration) : Configuration {
        throw `Invalid expression at ${node.location.toString()}`;
    }
    visitVariableGet(node : lib3.VariableGet,config : ExpressionConfiguration) : Configuration {
        let value : Value = config.environment.lookup(node.variable);
        return new ContinuationConfiguration(config.continuation,value);
    }
    visitVariableSet(node : lib3.VariableSet,config : ExpressionConfiguration) : Configuration {
        let cont = new VariableSetContinuation(node.variable,config.environment,config.continuation);
        return new ExpressionConfiguration(node.value,config.environment,cont);
    }
    visitPropertyGet(node : lib3.PropertyGet,config : ExpressionConfiguration) : Configuration {
        let cont = new PropertyGetContinuation(node.name,config.continuation);
        return new ExpressionConfiguration(node.receiver,config.environment,cont);
    }
    visitPropertySet(node : lib3.PropertySet,config : ExpressionConfiguration) : Configuration {
        let cont = new PropertySetContinuation(node.value,node.name,config.environment,config.continuation);
        return new ExpressionConfiguration(node.receiver,config.environment,cont);
    }
    visitStaticGet(node : lib3.StaticGet,config : ExpressionConfiguration) : Configuration {
        return this.defaultExpression(node,config);
    }
    visitStaticSet(node : lib3.StaticSet,config : ExpressionConfiguration) : Configuration {
        return this.defaultExpression(node,config);
    }
    visitStaticInvocation(node : lib3.StaticInvocation,config : ExpressionConfiguration) : Configuration {
        if ('print' == node.name.toString()) {
            let cont = new PrintContinuation(config.continuation);
            return new ExpressionConfiguration(node.arguments.positional.first,config.environment,cont);
        }else {
            lib5.properties.log.info(`static-invocation-${node.target.name.toString()}\n`);
            let args : core.DartList<InterpreterExpression> = _createArgumentExpressionList(node.arguments,node.target.function);
            let cont : ApplicationContinuation = new StaticInvocationApplication(node.target.function,config.continuation);
            return new ExpressionListConfiguration(args,config.environment,cont);
        }
    }
    visitMethodInvocation(node : lib3.MethodInvocation,config : ExpressionConfiguration) : Configuration {
        let cont = new MethodInvocationContinuation(node.arguments,node.name,config.environment,config.continuation);
        return new ExpressionConfiguration(node.receiver,config.environment,cont);
    }
    visitConstructorInvocation(node : lib3.ConstructorInvocation,config : ExpressionConfiguration) : Configuration {
        let cont : ApplicationContinuation = new ConstructorInvocationApplication(node.target,config.continuation);
        let args = _createArgumentExpressionList(node.arguments,node.target.function);
        return new ExpressionListConfiguration(args,config.environment,cont);
    }
    visitNot(node : lib3.Not,config : ExpressionConfiguration) : Configuration {
        return new ExpressionConfiguration(node.operand,config.environment,new NotContinuation(config.continuation));
    }
    visitLogicalExpression(node : lib3.LogicalExpression,config : ExpressionConfiguration) : Configuration {
        if ('||' == node.operator) {
            let cont = new OrContinuation(node.right,config.environment,config.continuation);
            return new ExpressionConfiguration(node.left,config.environment,cont);
        }else {
            /* TODO (AssertStatementImpl) : assert ('&&' == node.operator); */;
            let cont = new AndContinuation(node.right,config.environment,config.continuation);
            return new ExpressionConfiguration(node.left,config.environment,cont);
        }
    }
    visitConditionalExpression(node : lib3.ConditionalExpression,config : ExpressionConfiguration) : Configuration {
        let cont = new ConditionalContinuation(node.then,node.otherwise,config.environment,config.continuation);
        return new ExpressionConfiguration(node.condition,config.environment,cont);
    }
    visitStringConcatenation(node : lib3.StringConcatenation,config : ExpressionConfiguration) : Configuration {
        let cont = new StringConcatenationContinuation(config.continuation);
        let expressions = node.expressions.map((e : lib3.Expression) =>  {
            return new PositionalExpression(e);
        }).toList();
        return new ExpressionListConfiguration(expressions,config.environment,cont);
    }
    visitThisExpression(node : lib3.ThisExpression,config : ExpressionConfiguration) : Configuration {
        return new ContinuationConfiguration(config.continuation,config.environment.thisInstance);
    }
    visitStringLiteral(node : lib3.StringLiteral,config : ExpressionConfiguration) : Configuration {
        return new ContinuationConfiguration(config.continuation,new StringValue(node.value));
    }
    visitIntLiteral(node : lib3.IntLiteral,config : ExpressionConfiguration) : Configuration {
        return new ContinuationConfiguration(config.continuation,new IntValue(node.value));
    }
    visitDoubleLiteral(node : lib3.DoubleLiteral,config : ExpressionConfiguration) : Configuration {
        return new ContinuationConfiguration(config.continuation,new DoubleValue(node.value));
    }
    visitBoolLiteral(node : lib3.BoolLiteral,config : ExpressionConfiguration) : Configuration {
        let value : Value = node.value ? Value.trueInstance : Value.falseInstance;
        return new ContinuationConfiguration(config.continuation,value);
    }
    visitNullLiteral(node : lib3.NullLiteral,config : ExpressionConfiguration) : Configuration {
        return new ContinuationConfiguration(config.continuation,Value.nullInstance);
    }
    visitLet(node : lib3.Let,config : ExpressionConfiguration) : Configuration {
        let letCont = new LetContinuation(node.variable,node.body,config.environment,config.continuation);
        return new ExpressionConfiguration(node.variable.initializer,config.environment,letCont);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Evaluator() {
    }
}

export namespace State {
    export type Constructors = 'State' | 'initial';
    export type Interface = Omit<State, Constructors>;
}
@DartClass
export class State {
    environment : Environment;

    labels : Label;

    statementConfiguration : StatementConfiguration;

    returnContinuation : ExpressionContinuation;

    constructor(environment : Environment,labels : Label,statementConfiguration : StatementConfiguration,returnContinuation : ExpressionContinuation) {
    }
    @defaultConstructor
    State(environment : Environment,labels : Label,statementConfiguration : StatementConfiguration,returnContinuation : ExpressionContinuation) {
        this.environment = environment;
        this.labels = labels;
        this.statementConfiguration = statementConfiguration;
        this.returnContinuation = returnContinuation;
    }
    @namedConstructor
    initial() {
        this.State(new Environment.empty(),null,null,null);
    }
    static initial : new() => State;

    withEnvironment(env : Environment) : State {
        return new State(env,this.labels,this.statementConfiguration,this.returnContinuation);
    }
    withBreak(stmt : lib3.Statement) : State {
        let breakLabels : Label = new Label(stmt,this.statementConfiguration,this.labels);
        return new State(this.environment,breakLabels,this.statementConfiguration,this.returnContinuation);
    }
    withConfiguration(config : Configuration) : State {
        return new State(this.environment,this.labels,config,this.returnContinuation);
    }
    withExpressionContinuation(cont : ExpressionContinuation) : State {
        return new State(this.environment,this.labels,this.statementConfiguration,cont);
    }
    lookupLabel(s : lib3.LabeledStatement) : Label {
        /* TODO (AssertStatementImpl) : assert (labels != null); */;
        return this.labels.lookupLabel(s);
    }
}

export namespace Label {
    export type Constructors = 'Label';
    export type Interface = Omit<Label, Constructors>;
}
@DartClass
export class Label {
    statement : lib3.LabeledStatement;

    configuration : StatementConfiguration;

    enclosingLabel : Label;

    constructor(statement : lib3.LabeledStatement,configuration : StatementConfiguration,enclosingLabel : Label) {
    }
    @defaultConstructor
    Label(statement : lib3.LabeledStatement,configuration : StatementConfiguration,enclosingLabel : Label) {
        this.statement = statement;
        this.configuration = configuration;
        this.enclosingLabel = enclosingLabel;
    }
    lookupLabel(s : lib3.LabeledStatement) : Label {
        if (core.identical(s,this.statement)) return this;
        /* TODO (AssertStatementImpl) : assert (enclosingLabel != null); */;
        return this.enclosingLabel.lookupLabel(s);
    }
}

export namespace Configuration {
    export type Constructors = 'Configuration';
    export type Interface = Omit<Configuration, Constructors>;
}
@DartClass
export class Configuration {
    @Abstract
    step(executer : StatementExecuter) : Configuration{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    Configuration() {
    }
}

export namespace InterpreterExpression {
    export type Constructors = 'InterpreterExpression';
    export type Interface = Omit<InterpreterExpression, Constructors>;
}
@DartClass
export class InterpreterExpression {
    @AbstractProperty
    get expression() : lib3.Expression{ throw 'abstract'}
    @Abstract
    assignValue(v : Value) : InterpreterValue{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    InterpreterExpression() {
    }
}

export namespace InterpreterValue {
    export type Constructors = 'InterpreterValue';
    export type Interface = Omit<InterpreterValue, Constructors>;
}
@DartClass
export class InterpreterValue {
    @AbstractProperty
    get value() : Value{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    InterpreterValue() {
    }
}

export namespace NotImplemented {
    export type Constructors = 'NotImplemented';
    export type Interface = Omit<NotImplemented, Constructors>;
}
@DartClass
export class NotImplemented {
    message : string;

    constructor(message : string) {
    }
    @defaultConstructor
    NotImplemented(message : string) {
        this.message = message;
    }
    toString() : string {
        return this.message;
    }
}

export namespace Continuation {
    export type Constructors = 'Continuation';
    export type Interface = Omit<Continuation, Constructors>;
}
@DartClass
export class Continuation {
    constructor() {
    }
    @defaultConstructor
    Continuation() {
    }
}

export namespace StatementExecuter {
    export type Constructors = lib4.StatementVisitor1.Constructors | 'StatementExecuter';
    export type Interface = Omit<StatementExecuter, Constructors>;
}
@DartClass
export class StatementExecuter extends lib4.StatementVisitor1<Configuration,State> {
    evaluator : Evaluator;

    trampolinedExecution(configuration : Configuration) : void {
        while (configuration != null){
            configuration = configuration.step(this);
        }
    }
    exec(statement : lib3.Statement,state : State) : Configuration {
        return statement.accept1(this,state);
    }
    eval(expression : lib3.Expression,config : ExpressionConfiguration) : Configuration {
        return this.evaluator.eval(expression,config);
    }
    evalList(es : core.DartList<InterpreterExpression>,env : Environment,cont : Continuation) : Configuration {
        return this.evaluator.evalList(es,env,cont);
    }
    defaultStatement(node : lib3.Statement,state : State) : Configuration {
        throw notImplemented({
            m : `Execution is not implemented for statement:\n${node} `});
    }
    visitInvalidStatement(node : lib3.InvalidStatement,state : State) : Configuration {
        throw `Invalid statement at ${node.location}`;
    }
    visitExpressionStatement(node : lib3.ExpressionStatement,state : State) : Configuration {
        let cont = new ExpressionStatementContinuation(state.statementConfiguration);
        return new ExpressionConfiguration(node.expression,state.environment,cont);
    }
    visitBlock(node : lib3.Block,state : State) : Configuration {
        if (node.statements.isEmpty) {
            return state.statementConfiguration;
        }
        let blockState : State = state.withEnvironment(new Environment(state.environment));
        let configuration : StatementConfiguration = state.statementConfiguration;
        for(let s of node.statements.reversed) {
            configuration = new StatementConfiguration(s,blockState.withConfiguration(configuration));
        }
        return configuration;
    }
    visitEmptyStatement(node : lib3.EmptyStatement,state : State) : Configuration {
        return state.statementConfiguration;
    }
    visitIfStatement(node : lib3.IfStatement,state : State) : Configuration {
        let cont = new IfConditionContinuation(node.then,node.otherwise,state);
        return new ExpressionConfiguration(node.condition,state.environment,cont);
    }
    visitLabeledStatement(node : lib3.LabeledStatement,state : State) : Configuration {
        return new StatementConfiguration(node.body,state.withBreak(node));
    }
    visitBreakStatement(node : lib3.BreakStatement,state : State) : Configuration {
        return state.lookupLabel(node.target).configuration;
    }
    visitWhileStatement(node : lib3.WhileStatement,state : State) : Configuration {
        let cont = new WhileConditionContinuation(node,state);
        return new ExpressionConfiguration(node.condition,state.environment,cont);
    }
    visitDoStatement(node : lib3.DoStatement,state : State) : Configuration {
        let whileStatement : lib3.WhileStatement = new lib3.WhileStatement(node.condition,node.body);
        let configuration : StatementConfiguration = new StatementConfiguration(whileStatement,state);
        return new StatementConfiguration(node.body,state.withConfiguration(configuration));
    }
    visitReturnStatement(node : lib3.ReturnStatement,state : State) : Configuration {
        /* TODO (AssertStatementImpl) : assert (state.returnContinuation != null); */;
        lib5.properties.log.info('return\n');
        if (op(Op.EQUALS,node.expression,null)) {
            return new ContinuationConfiguration(state.returnContinuation,Value.nullInstance);
        }
        return new ExpressionConfiguration(node.expression,state.environment,state.returnContinuation);
    }
    visitVariableDeclaration(node : lib3.VariableDeclaration,state : State) : Configuration {
        if (node.initializer != null) {
            let cont = new VariableInitializerContinuation(node,state.environment,state.statementConfiguration);
            return new ExpressionConfiguration(node.initializer,state.environment,cont);
        }
        state.environment.expand(node,Value.nullInstance);
        return state.statementConfiguration;
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    StatementExecuter() {
        this.evaluator = new Evaluator();
    }
}

export namespace Class {
    export type Constructors = '_internal';
    export type Interface = Omit<Class, Constructors>;
}
@DartClass
export class Class {
    private static __$_classes : core.DartMap<lib3.Reference,Class>;
    static get _classes() : core.DartMap<lib3.Reference,Class> { 
        if (this.__$_classes===undefined) {
            this.__$_classes = new core.DartMap.literal([
            ]);
        }
        return this.__$_classes;
    }
    static set _classes(__$value : core.DartMap<lib3.Reference,Class>)  { 
        this.__$_classes = __$value;
    }

    superclass : Class;

    instanceFields : core.DartList<lib3.Field>;

    staticFields : core.DartList<lib3.Field>;

    getters : core.DartMap<lib3.Name,(receiver : Value) => Value>;

    setters : core.DartMap<lib3.Name,(receiver : Value,value : Value) => void>;

    staticFieldValues : core.DartList<Value>;

    methods : core.DartList<lib3.Procedure>;

    get instanceSize() : number {
        return this.instanceFields.length;
    }
    constructor(classRef : lib3.Reference) {
    }
    @defaultFactory
    static $Class(classRef : lib3.Reference) : Class {
        return Class._classes.putIfAbsent(classRef,() =>  {
            return new Class._internal(classRef.asClass);
        });
    }
    @namedConstructor
    _internal(currentClass : lib3.Class) {
        this.instanceFields = new core.DartList.literal<lib3.Field>();
        this.staticFields = new core.DartList.literal<lib3.Field>();
        this.getters = new core.DartMap.literal([
        ]);
        this.setters = new core.DartMap.literal([
        ]);
        this.staticFieldValues = new core.DartList.literal<Value>();
        this.methods = new core.DartList.literal<lib3.Procedure>();
        if (currentClass.superclass != null) {
            this.superclass = new Class(currentClass.superclass.reference);
        }
        this._populateInstanceFields(currentClass);
    }
    static _internal : new(currentClass : lib3.Class) => Class;

    lookupGetter(name : lib3.Name) : (receiver : Value) => Value {
        let getter : (receiver : Value) => Value = this.getters.get(name);
        if (getter != null) return getter;
        if (this.superclass != null) return this.superclass.lookupGetter(name);
        return (receiver : Value) =>  {
            return notImplemented({
                obj : name});
        };
    }
    lookupSetter(name : lib3.Name) : (receiver : Value,value : Value) => void {
        let setter : (receiver : Value,value : Value) => void = this.setters.get(name);
        if (setter != null) return setter;
        if (this.superclass != null) return this.superclass.lookupSetter(name);
        return (receiver : Value,value : Value) =>  {
            return notImplemented({
                obj : name});
        };
    }
    getProperty(object : ObjectValue,member : lib3.Member) : Value {
        if (is(member, lib3.Field)) {
            let index : number = this.instanceFields.indexOf(member);
            if (index < 0) return notImplemented({
                m : `NoSuchMethod: ${member}`});
            return object.fields[index];
        }
        return notImplemented({
            obj : member});
    }
    setProperty(object : ObjectValue,member : lib3.Member,value : Value) : Value {
        if (is(member, lib3.Field)) {
            let index : number = this.instanceFields.indexOf(member);
            if (index < 0) return notImplemented({
                m : `NoSuchMethod: ${member}`});
            object.fields[index] = value;
            return Value.nullInstance;
        }
        return notImplemented({
            obj : member});
    }
    _populateInstanceFields(class_ : lib3.Class) {
        if (class_.superclass != null) {
            this._populateInstanceFields(class_.superclass);
        }
        for(let f of class_.fields) {
            if (f.isStatic) continue;
            this.instanceFields.add(f);
            /* TODO (AssertStatementImpl) : assert (f.hasImplicitGetter); */;
            let currentFieldIndex : number = this.instanceFields.length - 1;
            this.getters.set(f.name,(receiver : Value) =>  {
                return receiver.fields[currentFieldIndex];
            });
            if (f.hasImplicitSetter) {
                this.setters.set(f.name,(receiver : Value,value : Value) =>  {
                    return receiver.fields[currentFieldIndex] = value;
                });
            }
        }
    }
}

export namespace Value {
    export type Constructors = 'Value';
    export type Interface = Omit<Value, Constructors>;
}
@DartClass
export class Value {
    @AbstractProperty
    get class_() : Class{ throw 'abstract'}
    @AbstractProperty
    get fields() : core.DartList<Value>{ throw 'abstract'}
    @AbstractProperty
    get value() : core.DartObject{ throw 'abstract'}
    private static __$nullInstance : NullValue;
    static get nullInstance() : NullValue { 
        if (this.__$nullInstance===undefined) {
            this.__$nullInstance = new NullValue();
        }
        return this.__$nullInstance;
    }
    static set nullInstance(__$value : NullValue)  { 
        this.__$nullInstance = __$value;
    }

    private static __$trueInstance : BoolValue;
    static get trueInstance() : BoolValue { 
        if (this.__$trueInstance===undefined) {
            this.__$trueInstance = new BoolValue(true);
        }
        return this.__$trueInstance;
    }
    static set trueInstance(__$value : BoolValue)  { 
        this.__$trueInstance = __$value;
    }

    private static __$falseInstance : BoolValue;
    static get falseInstance() : BoolValue { 
        if (this.__$falseInstance===undefined) {
            this.__$falseInstance = new BoolValue(false);
        }
        return this.__$falseInstance;
    }
    static set falseInstance(__$value : BoolValue)  { 
        this.__$falseInstance = __$value;
    }

    constructor() {
    }
    @defaultConstructor
    Value() {
    }
    toBoolean() : BoolValue {
        return core.identical(this,Value.trueInstance) ? Value.trueInstance : Value.falseInstance;
    }
    equals(other : Value) : BoolValue {
        return op(Op.EQUALS,this.value,((t)=>(!!t)?t.value:null)(other)) ? Value.trueInstance : Value.falseInstance;
    }
    invokeMethod(name : lib3.Name,arg? : Value) : Value {
        if (name.toString() == "==") return this.equals(arg);
        throw notImplemented({
            obj : name});
    }
}

export namespace ObjectValue {
    export type Constructors = Value.Constructors | 'ObjectValue';
    export type Interface = Omit<ObjectValue, Constructors>;
}
@DartClass
export class ObjectValue extends Value {
    class_ : Class;

    fields : core.DartList<Value>;

    get value() : core.DartObject {
        return this;
    }
    constructor(class_ : Class,fields : core.DartList<Value>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ObjectValue(class_ : Class,fields : core.DartList<Value>) {
        this.class_ = class_;
        this.fields = fields;
    }
}

export namespace PositionalExpression {
    export type Constructors = InterpreterExpression.Constructors | 'PositionalExpression';
    export type Interface = Omit<PositionalExpression, Constructors>;
}
@DartClass
export class PositionalExpression extends InterpreterExpression {
    expression : lib3.Expression;

    constructor(expression : lib3.Expression) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    PositionalExpression(expression : lib3.Expression) {
        this.expression = expression;
    }
    assignValue(v : Value) : InterpreterValue {
        return new PositionalValue(v);
    }
}

export namespace FieldInitializerExpression {
    export type Constructors = InterpreterExpression.Constructors | 'FieldInitializerExpression';
    export type Interface = Omit<FieldInitializerExpression, Constructors>;
}
@DartClass
export class FieldInitializerExpression extends InterpreterExpression {
    field : lib3.Field;

    expression : lib3.Expression;

    constructor(field : lib3.Field,expression : lib3.Expression) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    FieldInitializerExpression(field : lib3.Field,expression : lib3.Expression) {
        this.field = field;
        this.expression = expression;
    }
    assignValue(v : Value) : InterpreterValue {
        return new FieldInitializerValue(this.field,v);
    }
}

export namespace StatementConfiguration {
    export type Constructors = Configuration.Constructors | 'StatementConfiguration';
    export type Interface = Omit<StatementConfiguration, Constructors>;
}
@DartClass
export class StatementConfiguration extends Configuration {
    statement : lib3.Statement;

    state : State;

    constructor(statement : lib3.Statement,state : State) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    StatementConfiguration(statement : lib3.Statement,state : State) {
        this.statement = statement;
        this.state = state;
    }
    step(executer : StatementExecuter) : Configuration {
        return executer.exec(this.statement,this.state);
    }
}

export namespace PositionalValue {
    export type Constructors = InterpreterValue.Constructors | 'PositionalValue';
    export type Interface = Omit<PositionalValue, Constructors>;
}
@DartClass
export class PositionalValue extends InterpreterValue {
    value : Value;

    constructor(value : Value) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    PositionalValue(value : Value) {
        this.value = value;
    }
}

export namespace LocalInitializerValue {
    export type Constructors = InterpreterValue.Constructors | 'LocalInitializerValue';
    export type Interface = Omit<LocalInitializerValue, Constructors>;
}
@DartClass
export class LocalInitializerValue extends InterpreterValue {
    variable : lib3.VariableDeclaration;

    value : Value;

    constructor(variable : lib3.VariableDeclaration,value : Value) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    LocalInitializerValue(variable : lib3.VariableDeclaration,value : Value) {
        this.variable = variable;
        this.value = value;
    }
}

export namespace FieldInitializerValue {
    export type Constructors = InterpreterValue.Constructors | 'FieldInitializerValue';
    export type Interface = Omit<FieldInitializerValue, Constructors>;
}
@DartClass
export class FieldInitializerValue extends InterpreterValue {
    field : lib3.Field;

    value : Value;

    constructor(field : lib3.Field,value : Value) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    FieldInitializerValue(field : lib3.Field,value : Value) {
        this.field = field;
        this.value = value;
    }
}

export namespace NamedValue {
    export type Constructors = InterpreterValue.Constructors | 'NamedValue';
    export type Interface = Omit<NamedValue, Constructors>;
}
@DartClass
export class NamedValue extends InterpreterValue {
    name : string;

    value : Value;

    constructor(name : string,value : Value) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    NamedValue(name : string,value : Value) {
        this.name = name;
        this.value = value;
    }
}

export namespace ApplicationContinuation {
    export type Constructors = Continuation.Constructors | 'ApplicationContinuation';
    export type Interface = Omit<ApplicationContinuation, Constructors>;
}
@DartClass
export class ApplicationContinuation extends Continuation {
    @Abstract
    call(values : core.DartList<InterpreterValue>) : Configuration{ throw 'abstract'}
    static createEnvironment(function : lib3.FunctionNode,args : core.DartList<InterpreterValue>,parentEnv? : Environment) : Environment {
        let newEnv : Environment = new Environment(parentEnv);
        let positional : core.DartList<PositionalValue> = args.reversed.where((av : InterpreterValue) =>  {
            return is(av, PositionalValue);
        }).toList();
        for(let i : number = 0; i < positional.length; ++i){
            newEnv.expand(function.positionalParameters[i],positional[i].value);
        }
        let named : core.DartMap<string,Value> = new core.DartMap.fromIterable(args.where((av : InterpreterValue) =>  {
            return is(av, NamedValue);
        }),{
            key : (av : NamedValue) =>  {
                return av.name;
            },value : (av : NamedValue) =>  {
                return av.value;
            }});
        for(let v of function.namedParameters) {
            newEnv.expand(v,named.get(new core.DartString(v.name).toString()));
        }
        return newEnv;
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ApplicationContinuation() {
    }
}

export namespace ObjectInitializationConfiguration {
    export type Constructors = Configuration.Constructors | 'ObjectInitializationConfiguration';
    export type Interface = Omit<ObjectInitializationConfiguration, Constructors>;
}
@DartClass
export class ObjectInitializationConfiguration extends Configuration {
    constructor : lib3.Constructor;

    environment : Environment;

    configuration : StatementConfiguration;

    constructor(constructor : lib3.Constructor,environment : Environment,configuration : StatementConfiguration) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ObjectInitializationConfiguration(constructor : lib3.Constructor,environment : Environment,configuration : StatementConfiguration) {
        this.constructor = constructor;
        this.environment = environment;
        this.configuration = configuration;
    }
    step(_ : StatementExecuter) : Configuration {
        if (this.constructor.initializers.isNotEmpty && is(this.constructor.initializers.last, lib3.RedirectingInitializer)) {
            let initializer : lib3.Initializer = this.constructor.initializers.first;
            if (is(initializer, lib3.RedirectingInitializer)) {
                let app = new RedirectingConstructorApplication(initializer.target,this.environment,this.configuration);
                let args = _createArgumentExpressionList(initializer.arguments,initializer.target.function);
                return new ExpressionListConfiguration(args,this.environment,app);
            }
            for(let i of this.constructor.initializers.reversed.skip(1)) {
                /* TODO (AssertStatementImpl) : assert (i is LocalInitializer); */;
            }
            let class_ = new Class(this.constructor.enclosingClass.reference);
            let initEnv = new Environment(this.environment);
            let cont = new InitializerContinuation(class_,initEnv,this.constructor.initializers,this.configuration);
            return new ExpressionConfiguration((initializer as lib3.LocalInitializer).variable.initializer,initEnv,cont);
        }
        let state = new State.initial().withEnvironment(this.environment).withConfiguration(this.configuration);
        let bodyConfig = new StatementConfiguration(this.constructor.function.body,state);
        let cont = new InstanceFieldsApplication(this.constructor,this.environment,bodyConfig);
        let fieldExpressions = ObjectInitializationConfiguration._createInstanceInitializers(this.constructor);
        return new ExpressionListConfiguration(fieldExpressions,new Environment.empty(),cont);
    }
    static _createInstanceInitializers(ctr : lib3.Constructor) : core.DartList<InterpreterExpression> {
        let currentClass : Class = new Class(ctr.enclosingClass.reference);
        let es : core.DartList<InterpreterExpression> = new core.DartList.literal<InterpreterExpression>();
        for(let i : number = (((t)=>(!!t)?t.instanceSize:null)(currentClass.superclass) || 0); i < currentClass.instanceSize; i++){
            let current : lib3.Field = currentClass.instanceFields[i];
            if (current.initializer != null) {
                es.add(new FieldInitializerExpression(current,current.initializer));
            }
        }
        return es;
    }
}

export namespace LocalInitializerExpression {
    export type Constructors = InterpreterExpression.Constructors | 'LocalInitializerExpression';
    export type Interface = Omit<LocalInitializerExpression, Constructors>;
}
@DartClass
export class LocalInitializerExpression extends InterpreterExpression {
    variable : lib3.VariableDeclaration;

    get expression() : lib3.Expression {
        return this.variable.initializer;
    }
    constructor(variable : lib3.VariableDeclaration) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    LocalInitializerExpression(variable : lib3.VariableDeclaration) {
        this.variable = variable;
    }
    assignValue(v : Value) : InterpreterValue {
        return new LocalInitializerValue(this.variable,v);
    }
}

export namespace ExpressionContinuation {
    export type Constructors = Continuation.Constructors | 'ExpressionContinuation';
    export type Interface = Omit<ExpressionContinuation, Constructors>;
}
@DartClass
export class ExpressionContinuation extends Continuation {
    @Abstract
    call(v : Value) : Configuration{ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ExpressionContinuation() {
    }
}

export namespace ContinuationConfiguration {
    export type Constructors = Configuration.Constructors | 'ContinuationConfiguration';
    export type Interface = Omit<ContinuationConfiguration, Constructors>;
}
@DartClass
export class ContinuationConfiguration extends Configuration {
    continuation : ExpressionContinuation;

    value : Value;

    constructor(continuation : ExpressionContinuation,value : Value) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ContinuationConfiguration(continuation : ExpressionContinuation,value : Value) {
        this.continuation = continuation;
        this.value = value;
    }
    step(_ : StatementExecuter) : Configuration {
        return this.continuation(this.value);
    }
}

export namespace NamedExpression {
    export type Constructors = InterpreterExpression.Constructors | 'NamedExpression';
    export type Interface = Omit<NamedExpression, Constructors>;
}
@DartClass
export class NamedExpression extends InterpreterExpression {
    name : string;

    expression : lib3.Expression;

    constructor(name : string,expression : lib3.Expression) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    NamedExpression(name : string,expression : lib3.Expression) {
        this.name = name;
        this.expression = expression;
    }
    assignValue(v : Value) : InterpreterValue {
        return new NamedValue(this.name,v);
    }
}

export namespace ExpressionListContinuationConfiguration {
    export type Constructors = Configuration.Constructors | 'ExpressionListContinuationConfiguration';
    export type Interface = Omit<ExpressionListContinuationConfiguration, Constructors>;
}
@DartClass
export class ExpressionListContinuationConfiguration extends Configuration {
    continuation : ApplicationContinuation;

    values : core.DartList<InterpreterValue>;

    constructor(continuation : ApplicationContinuation,values : core.DartList<InterpreterValue>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ExpressionListContinuationConfiguration(continuation : ApplicationContinuation,values : core.DartList<InterpreterValue>) {
        this.continuation = continuation;
        this.values = values;
    }
    step(_ : StatementExecuter) : Configuration {
        return this.continuation(this.values);
    }
}

export namespace ExpressionConfiguration {
    export type Constructors = Configuration.Constructors | 'ExpressionConfiguration';
    export type Interface = Omit<ExpressionConfiguration, Constructors>;
}
@DartClass
export class ExpressionConfiguration extends Configuration {
    expression : lib3.Expression;

    environment : Environment;

    continuation : Continuation;

    constructor(expression : lib3.Expression,environment : Environment,continuation : Continuation) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ExpressionConfiguration(expression : lib3.Expression,environment : Environment,continuation : Continuation) {
        this.expression = expression;
        this.environment = environment;
        this.continuation = continuation;
    }
    step(executer : StatementExecuter) : Configuration {
        return executer.eval(this.expression,this);
    }
}

export namespace ExpressionListConfiguration {
    export type Constructors = Configuration.Constructors | 'ExpressionListConfiguration';
    export type Interface = Omit<ExpressionListConfiguration, Constructors>;
}
@DartClass
export class ExpressionListConfiguration extends Configuration {
    expressions : core.DartList<InterpreterExpression>;

    environment : Environment;

    continuation : Continuation;

    constructor(expressions : core.DartList<InterpreterExpression>,environment : Environment,continuation : Continuation) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ExpressionListConfiguration(expressions : core.DartList<InterpreterExpression>,environment : Environment,continuation : Continuation) {
        this.expressions = expressions;
        this.environment = environment;
        this.continuation = continuation;
    }
    step(executer : StatementExecuter) : Configuration {
        return executer.evalList(this.expressions,this.environment,this.continuation);
    }
}

export namespace LiteralValue {
    export type Constructors = Value.Constructors | 'LiteralValue';
    export type Interface = Omit<LiteralValue, Constructors>;
}
@DartClass
export class LiteralValue extends Value {
    get class_() : Class {
        return notImplemented({
            m : "Loading class for literal is not implemented."});
    }
    get fields() : core.DartList<Value> {
        return notImplemented({
            m : "Literal value does not have fields"});
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    LiteralValue() {
    }
}

export namespace InstanceEnvironment {
    export type Constructors = Environment.Constructors | 'InstanceEnvironment';
    export type Interface = Omit<InstanceEnvironment, Constructors>;
}
@DartClass
export class InstanceEnvironment extends Environment {
    _thisInstance : ObjectValue;

    get thisInstance() : Value {
        return this._thisInstance;
    }
    constructor(_thisInstance : ObjectValue,env : Environment) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    InstanceEnvironment(_thisInstance : ObjectValue,env : Environment) {
        super.Environment(env);
        this._thisInstance = _thisInstance;
    }
}

export namespace NewInstanceConfiguration {
    export type Constructors = StatementConfiguration.Constructors | 'NewInstanceConfiguration';
    export type Interface = Omit<NewInstanceConfiguration, Constructors>;
}
@DartClass
export class NewInstanceConfiguration extends StatementConfiguration {
    continuation : ExpressionContinuation;

    newObject : ObjectValue;

    constructor(continuation : ExpressionContinuation,newObject : ObjectValue) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    NewInstanceConfiguration(continuation : ExpressionContinuation,newObject : ObjectValue) {
        super.StatementConfiguration(null,new State.initial());
        this.continuation = continuation;
        this.newObject = newObject;
    }
    step(_ : StatementExecuter) : Configuration {
        return this.continuation(this.newObject);
    }
}

export namespace PrintContinuation {
    export type Constructors = ExpressionContinuation.Constructors | 'PrintContinuation';
    export type Interface = Omit<PrintContinuation, Constructors>;
}
@DartClass
export class PrintContinuation extends ExpressionContinuation {
    continuation : ExpressionContinuation;

    constructor(continuation : ExpressionContinuation) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    PrintContinuation(continuation : ExpressionContinuation) {
        this.continuation = continuation;
    }
    call(v : Value) : Configuration {
        lib5.properties.log.info(`print(${v.value.runtimeType}: ${v.value})\n`);
        core.print(v.value);
        return new ContinuationConfiguration(this.continuation,Value.nullInstance);
    }
}

export namespace PropertyGetContinuation {
    export type Constructors = ExpressionContinuation.Constructors | 'PropertyGetContinuation';
    export type Interface = Omit<PropertyGetContinuation, Constructors>;
}
@DartClass
export class PropertyGetContinuation extends ExpressionContinuation {
    name : lib3.Name;

    continuation : ExpressionContinuation;

    constructor(name : lib3.Name,continuation : ExpressionContinuation) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    PropertyGetContinuation(name : lib3.Name,continuation : ExpressionContinuation) {
        this.name = name;
        this.continuation = continuation;
    }
    call(receiver : Value) : Configuration {
        let propertyValue : Value = (receiver.class_.lookupGetter(this.name))(receiver);
        return new ContinuationConfiguration(this.continuation,propertyValue);
    }
}

export namespace PropertySetContinuation {
    export type Constructors = ExpressionContinuation.Constructors | 'PropertySetContinuation';
    export type Interface = Omit<PropertySetContinuation, Constructors>;
}
@DartClass
export class PropertySetContinuation extends ExpressionContinuation {
    value : lib3.Expression;

    setterName : lib3.Name;

    environment : Environment;

    continuation : ExpressionContinuation;

    constructor(value : lib3.Expression,setterName : lib3.Name,environment : Environment,continuation : ExpressionContinuation) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    PropertySetContinuation(value : lib3.Expression,setterName : lib3.Name,environment : Environment,continuation : ExpressionContinuation) {
        this.value = value;
        this.setterName = setterName;
        this.environment = environment;
        this.continuation = continuation;
    }
    call(receiver : Value) : Configuration {
        let cont = new SetterContinuation(receiver,this.setterName,this.continuation);
        return new ExpressionConfiguration(this.value,this.environment,cont);
    }
}

export namespace SetterContinuation {
    export type Constructors = ExpressionContinuation.Constructors | 'SetterContinuation';
    export type Interface = Omit<SetterContinuation, Constructors>;
}
@DartClass
export class SetterContinuation extends ExpressionContinuation {
    receiver : Value;

    name : lib3.Name;

    continuation : ExpressionContinuation;

    constructor(receiver : Value,name : lib3.Name,continuation : ExpressionContinuation) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SetterContinuation(receiver : Value,name : lib3.Name,continuation : ExpressionContinuation) {
        this.receiver = receiver;
        this.name = name;
        this.continuation = continuation;
    }
    call(v : Value) : Configuration {
        let setter : (receiver : Value,value : Value) => void = this.receiver.class_.lookupSetter(this.name);
        setter(this.receiver,v);
        return new ContinuationConfiguration(this.continuation,v);
    }
}

export namespace ExpressionListContinuation {
    export type Constructors = ExpressionContinuation.Constructors | 'ExpressionListContinuation';
    export type Interface = Omit<ExpressionListContinuation, Constructors>;
}
@DartClass
export class ExpressionListContinuation extends ExpressionContinuation {
    currentExpression : InterpreterExpression;

    expressions : core.DartList<InterpreterExpression>;

    environment : Environment;

    applicationContinuation : ApplicationContinuation;

    constructor(currentExpression : InterpreterExpression,expressions : core.DartList<InterpreterExpression>,environment : Environment,applicationContinuation : ApplicationContinuation) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ExpressionListContinuation(currentExpression : InterpreterExpression,expressions : core.DartList<InterpreterExpression>,environment : Environment,applicationContinuation : ApplicationContinuation) {
        this.currentExpression = currentExpression;
        this.expressions = expressions;
        this.environment = environment;
        this.applicationContinuation = applicationContinuation;
    }
    call(v : Value) : Configuration {
        let app : ValueApplication = new ValueApplication(this.currentExpression.assignValue(v),this.applicationContinuation);
        return new ExpressionListConfiguration(this.expressions,this.environment,app);
    }
}

export namespace MethodInvocationContinuation {
    export type Constructors = ExpressionContinuation.Constructors | 'MethodInvocationContinuation';
    export type Interface = Omit<MethodInvocationContinuation, Constructors>;
}
@DartClass
export class MethodInvocationContinuation extends ExpressionContinuation {
    arguments : lib3.Arguments;

    methodName : lib3.Name;

    environment : Environment;

    continuation : ExpressionContinuation;

    constructor(arguments : lib3.Arguments,methodName : lib3.Name,environment : Environment,continuation : ExpressionContinuation) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    MethodInvocationContinuation(arguments : lib3.Arguments,methodName : lib3.Name,environment : Environment,continuation : ExpressionContinuation) {
        this.arguments = arguments;
        this.methodName = methodName;
        this.environment = environment;
        this.continuation = continuation;
    }
    call(receiver : Value) : Configuration {
        if (this.arguments.positional.isEmpty) {
            let returnValue : Value = receiver.invokeMethod(this.methodName);
            return new ContinuationConfiguration(this.continuation,returnValue);
        }
        let cont = new ArgumentsContinuation(receiver,this.methodName,this.arguments,this.environment,this.continuation);
        return new ExpressionConfiguration(this.arguments.positional.first,this.environment,cont);
    }
}

export namespace ArgumentsContinuation {
    export type Constructors = ExpressionContinuation.Constructors | 'ArgumentsContinuation';
    export type Interface = Omit<ArgumentsContinuation, Constructors>;
}
@DartClass
export class ArgumentsContinuation extends ExpressionContinuation {
    receiver : Value;

    methodName : lib3.Name;

    arguments : lib3.Arguments;

    environment : Environment;

    continuation : ExpressionContinuation;

    constructor(receiver : Value,methodName : lib3.Name,arguments : lib3.Arguments,environment : Environment,continuation : ExpressionContinuation) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ArgumentsContinuation(receiver : Value,methodName : lib3.Name,arguments : lib3.Arguments,environment : Environment,continuation : ExpressionContinuation) {
        this.receiver = receiver;
        this.methodName = methodName;
        this.arguments = arguments;
        this.environment = environment;
        this.continuation = continuation;
    }
    call(value : Value) : Configuration {
        let returnValue : Value = this.receiver.invokeMethod(this.methodName,value);
        return new ContinuationConfiguration(this.continuation,returnValue);
    }
}

export namespace RedirectingConstructorApplication {
    export type Constructors = ApplicationContinuation.Constructors | 'RedirectingConstructorApplication';
    export type Interface = Omit<RedirectingConstructorApplication, Constructors>;
}
@DartClass
export class RedirectingConstructorApplication extends ApplicationContinuation {
    constructor : lib3.Constructor;

    environment : Environment;

    configuration : StatementConfiguration;

    constructor(constructor : lib3.Constructor,environment : Environment,configuration : StatementConfiguration) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RedirectingConstructorApplication(constructor : lib3.Constructor,environment : Environment,configuration : StatementConfiguration) {
        this.constructor = constructor;
        this.environment = environment;
        this.configuration = configuration;
    }
    call(argValues : core.DartList<InterpreterValue>) : Configuration {
        let object : Value = this.environment.thisInstance;
        let ctrEnv : Environment = ApplicationContinuation.createEnvironment(this.constructor.function,argValues,new InstanceEnvironment(object,new Environment.empty()));
        return new ObjectInitializationConfiguration(this.constructor,ctrEnv,this.configuration);
    }
}

export namespace NotContinuation {
    export type Constructors = ExpressionContinuation.Constructors | 'NotContinuation';
    export type Interface = Omit<NotContinuation, Constructors>;
}
@DartClass
export class NotContinuation extends ExpressionContinuation {
    continuation : ExpressionContinuation;

    constructor(continuation : ExpressionContinuation) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    NotContinuation(continuation : ExpressionContinuation) {
        this.continuation = continuation;
    }
    call(value : Value) : Configuration {
        let notValue : Value = core.identical(Value.trueInstance,value) ? Value.falseInstance : Value.trueInstance;
        return new ContinuationConfiguration(this.continuation,notValue);
    }
}

export namespace OrContinuation {
    export type Constructors = ExpressionContinuation.Constructors | 'OrContinuation';
    export type Interface = Omit<OrContinuation, Constructors>;
}
@DartClass
export class OrContinuation extends ExpressionContinuation {
    right : lib3.Expression;

    environment : Environment;

    continuation : ExpressionContinuation;

    constructor(right : lib3.Expression,environment : Environment,continuation : ExpressionContinuation) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    OrContinuation(right : lib3.Expression,environment : Environment,continuation : ExpressionContinuation) {
        this.right = right;
        this.environment = environment;
        this.continuation = continuation;
    }
    call(left : Value) : Configuration {
        return core.identical(Value.trueInstance,left) ? new ContinuationConfiguration(this.continuation,Value.trueInstance) : new ExpressionConfiguration(this.right,this.environment,this.continuation);
    }
}

export namespace AndContinuation {
    export type Constructors = ExpressionContinuation.Constructors | 'AndContinuation';
    export type Interface = Omit<AndContinuation, Constructors>;
}
@DartClass
export class AndContinuation extends ExpressionContinuation {
    right : lib3.Expression;

    environment : Environment;

    continuation : ExpressionContinuation;

    constructor(right : lib3.Expression,environment : Environment,continuation : ExpressionContinuation) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    AndContinuation(right : lib3.Expression,environment : Environment,continuation : ExpressionContinuation) {
        this.right = right;
        this.environment = environment;
        this.continuation = continuation;
    }
    call(left : Value) : Configuration {
        return core.identical(Value.falseInstance,left) ? new ContinuationConfiguration(this.continuation,Value.falseInstance) : new ExpressionConfiguration(this.right,this.environment,this.continuation);
    }
}

export namespace ConditionalContinuation {
    export type Constructors = ExpressionContinuation.Constructors | 'ConditionalContinuation';
    export type Interface = Omit<ConditionalContinuation, Constructors>;
}
@DartClass
export class ConditionalContinuation extends ExpressionContinuation {
    then : lib3.Expression;

    otherwise : lib3.Expression;

    environment : Environment;

    continuation : ExpressionContinuation;

    constructor(then : lib3.Expression,otherwise : lib3.Expression,environment : Environment,continuation : ExpressionContinuation) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ConditionalContinuation(then : lib3.Expression,otherwise : lib3.Expression,environment : Environment,continuation : ExpressionContinuation) {
        this.then = then;
        this.otherwise = otherwise;
        this.environment = environment;
        this.continuation = continuation;
    }
    call(value : Value) : Configuration {
        return core.identical(Value.trueInstance,value) ? new ExpressionConfiguration(this.then,this.environment,this.continuation) : new ExpressionConfiguration(this.otherwise,this.environment,this.continuation);
    }
}

export namespace SuperConstructorApplication {
    export type Constructors = ApplicationContinuation.Constructors | 'SuperConstructorApplication';
    export type Interface = Omit<SuperConstructorApplication, Constructors>;
}
@DartClass
export class SuperConstructorApplication extends ApplicationContinuation {
    constructor : lib3.Constructor;

    environment : Environment;

    configuration : StatementConfiguration;

    constructor(constructor : lib3.Constructor,environment : Environment,configuration : StatementConfiguration) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SuperConstructorApplication(constructor : lib3.Constructor,environment : Environment,configuration : StatementConfiguration) {
        this.constructor = constructor;
        this.environment = environment;
        this.configuration = configuration;
    }
    call(argValues : core.DartList<InterpreterValue>) : Configuration {
        let object : Value = this.environment.thisInstance;
        let superEnv : Environment = ApplicationContinuation.createEnvironment(this.constructor.function,argValues,new InstanceEnvironment(object,new Environment.empty()));
        return new ObjectInitializationConfiguration(this.constructor,superEnv,this.configuration);
    }
}

export namespace LetContinuation {
    export type Constructors = ExpressionContinuation.Constructors | 'LetContinuation';
    export type Interface = Omit<LetContinuation, Constructors>;
}
@DartClass
export class LetContinuation extends ExpressionContinuation {
    variable : lib3.VariableDeclaration;

    letBody : lib3.Expression;

    environment : Environment;

    continuation : ExpressionContinuation;

    constructor(variable : lib3.VariableDeclaration,letBody : lib3.Expression,environment : Environment,continuation : ExpressionContinuation) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    LetContinuation(variable : lib3.VariableDeclaration,letBody : lib3.Expression,environment : Environment,continuation : ExpressionContinuation) {
        this.variable = variable;
        this.letBody = letBody;
        this.environment = environment;
        this.continuation = continuation;
    }
    call(value : Value) : Configuration {
        let letEnv = new Environment(this.environment);
        letEnv.expand(this.variable,value);
        return new ExpressionConfiguration(this.letBody,letEnv,this.continuation);
    }
}

export namespace WhileConditionContinuation {
    export type Constructors = ExpressionContinuation.Constructors | 'WhileConditionContinuation';
    export type Interface = Omit<WhileConditionContinuation, Constructors>;
}
@DartClass
export class WhileConditionContinuation extends ExpressionContinuation {
    node : lib3.WhileStatement;

    state : State;

    constructor(node : lib3.WhileStatement,state : State) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    WhileConditionContinuation(node : lib3.WhileStatement,state : State) {
        this.node = node;
        this.state = state;
    }
    call(v : Value) : StatementConfiguration {
        if (core.identical(v,Value.trueInstance)) {
            let config : StatementConfiguration = new StatementConfiguration(this.node,this.state);
            return new StatementConfiguration(this.node.body,this.state.withConfiguration(config));
        }
        return this.state.statementConfiguration;
    }
}

export namespace IfConditionContinuation {
    export type Constructors = ExpressionContinuation.Constructors | 'IfConditionContinuation';
    export type Interface = Omit<IfConditionContinuation, Constructors>;
}
@DartClass
export class IfConditionContinuation extends ExpressionContinuation {
    then : lib3.Statement;

    otherwise : lib3.Statement;

    state : State;

    constructor(then : lib3.Statement,otherwise : lib3.Statement,state : State) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    IfConditionContinuation(then : lib3.Statement,otherwise : lib3.Statement,state : State) {
        this.then = then;
        this.otherwise = otherwise;
        this.state = state;
    }
    call(v : Value) : StatementConfiguration {
        if (core.identical(v,Value.trueInstance)) {
            lib5.properties.log.info("if-then\n");
            return new StatementConfiguration(this.then,this.state);
        }else if (this.otherwise != null) {
            lib5.properties.log.info("if-otherwise\n");
            return new StatementConfiguration(this.otherwise,this.state);
        }
        return this.state.statementConfiguration;
    }
}

export namespace VariableInitializerContinuation {
    export type Constructors = ExpressionContinuation.Constructors | 'VariableInitializerContinuation';
    export type Interface = Omit<VariableInitializerContinuation, Constructors>;
}
@DartClass
export class VariableInitializerContinuation extends ExpressionContinuation {
    variable : lib3.VariableDeclaration;

    environment : Environment;

    nextConfiguration : StatementConfiguration;

    constructor(variable : lib3.VariableDeclaration,environment : Environment,nextConfiguration : StatementConfiguration) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    VariableInitializerContinuation(variable : lib3.VariableDeclaration,environment : Environment,nextConfiguration : StatementConfiguration) {
        this.variable = variable;
        this.environment = environment;
        this.nextConfiguration = nextConfiguration;
    }
    call(v : Value) : StatementConfiguration {
        this.environment.expand(this.variable,v);
        return this.nextConfiguration;
    }
}

export namespace ExitConfiguration {
    export type Constructors = StatementConfiguration.Constructors | 'ExitConfiguration';
    export type Interface = Omit<ExitConfiguration, Constructors>;
}
@DartClass
export class ExitConfiguration extends StatementConfiguration {
    returnContinuation : ExpressionContinuation;

    constructor(returnContinuation : ExpressionContinuation) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ExitConfiguration(returnContinuation : ExpressionContinuation) {
        super.StatementConfiguration(null,null);
        this.returnContinuation = returnContinuation;
    }
    step(_ : StatementExecuter) : Configuration {
        return this.returnContinuation(Value.nullInstance);
    }
}

export namespace InstanceFieldsApplication {
    export type Constructors = ApplicationContinuation.Constructors | 'InstanceFieldsApplication';
    export type Interface = Omit<InstanceFieldsApplication, Constructors>;
}
@DartClass
export class InstanceFieldsApplication extends ApplicationContinuation {
    constructor : lib3.Constructor;

    environment : Environment;

    configuration : StatementConfiguration;

    _currentClass : Class;

    _newObject : ObjectValue;

    constructor(constructor : lib3.Constructor,environment : Environment,configuration : StatementConfiguration) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    InstanceFieldsApplication(constructor : lib3.Constructor,environment : Environment,configuration : StatementConfiguration) {
        this._currentClass = new Class(constructor.enclosingClass.reference);
        this._newObject = environment.thisInstance;
        this.constructor = constructor;
        this.environment = environment;
        this.configuration = configuration;
    }
    call(fieldValues : core.DartList<InterpreterValue>) : Configuration {
        for(let current of fieldValues.reversed) {
            this._currentClass.setProperty(this._newObject,current.field,current.value);
        }
        if (this.constructor.initializers.isEmpty) {
            _initializeNullFields(this._currentClass,this._newObject);
            return this.configuration;
        }
        if (is(this.constructor.initializers.first, lib3.SuperInitializer)) {
            /* TODO (AssertStatementImpl) : assert (constructor.initializers.length == 1); */;
            let current : lib3.SuperInitializer = this.constructor.initializers.first;
            let args = _createArgumentExpressionList(current.arguments,current.target.function);
            let superApp = new SuperConstructorApplication(current.target,this.environment,this.configuration);
            _initializeNullFields(this._currentClass,this._newObject);
            return new ExpressionListConfiguration(args,this.environment,superApp);
        }
        let class_ : Class = new Class(this.constructor.enclosingClass.reference);
        let initEnv : Environment = new Environment(this.environment);
        let cont = new InitializerContinuation(class_,initEnv,this.constructor.initializers,this.configuration);
        return new ExpressionConfiguration(_getExpression(this.constructor.initializers.first),initEnv,cont);
    }
}

export namespace StaticInvocationApplication {
    export type Constructors = ApplicationContinuation.Constructors | 'StaticInvocationApplication';
    export type Interface = Omit<StaticInvocationApplication, Constructors>;
}
@DartClass
export class StaticInvocationApplication extends ApplicationContinuation {
    function : lib3.FunctionNode;

    continuation : ExpressionContinuation;

    constructor(function : lib3.FunctionNode,continuation : ExpressionContinuation) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    StaticInvocationApplication(function : lib3.FunctionNode,continuation : ExpressionContinuation) {
        this.function = function;
        this.continuation = continuation;
    }
    call(argValues : core.DartList<InterpreterValue>) : Configuration {
        let functionEnv : Environment = ApplicationContinuation.createEnvironment(this.function,argValues);
        let bodyState : State = new State.initial().withExpressionContinuation(this.continuation).withConfiguration(new ExitConfiguration(this.continuation)).withEnvironment(functionEnv);
        return new StatementConfiguration(this.function.body,bodyState);
    }
}

export namespace VariableSetContinuation {
    export type Constructors = ExpressionContinuation.Constructors | 'VariableSetContinuation';
    export type Interface = Omit<VariableSetContinuation, Constructors>;
}
@DartClass
export class VariableSetContinuation extends ExpressionContinuation {
    variable : lib3.VariableDeclaration;

    environment : Environment;

    continuation : ExpressionContinuation;

    constructor(variable : lib3.VariableDeclaration,environment : Environment,continuation : ExpressionContinuation) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    VariableSetContinuation(variable : lib3.VariableDeclaration,environment : Environment,continuation : ExpressionContinuation) {
        this.variable = variable;
        this.environment = environment;
        this.continuation = continuation;
    }
    call(value : Value) : Configuration {
        this.environment.assign(this.variable,value);
        return new ContinuationConfiguration(this.continuation,value);
    }
}

export namespace ValueApplication {
    export type Constructors = ApplicationContinuation.Constructors | 'ValueApplication';
    export type Interface = Omit<ValueApplication, Constructors>;
}
@DartClass
export class ValueApplication extends ApplicationContinuation {
    value : InterpreterValue;

    applicationContinuation : ApplicationContinuation;

    constructor(value : InterpreterValue,applicationContinuation : ApplicationContinuation) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ValueApplication(value : InterpreterValue,applicationContinuation : ApplicationContinuation) {
        this.value = value;
        this.applicationContinuation = applicationContinuation;
    }
    call(args : core.DartList<InterpreterValue>) : Configuration {
        args.add(this.value);
        return new ExpressionListContinuationConfiguration(this.applicationContinuation,args);
    }
}

export namespace StringValue {
    export type Constructors = LiteralValue.Constructors | 'StringValue';
    export type Interface = Omit<StringValue, Constructors>;
}
@DartClass
export class StringValue extends LiteralValue {
    value : string;

    private static __$operators;
    static get operators() { 
        if (this.__$operators===undefined) {
            this.__$operators = new core.DartMap.literal([
                ['[]',(v1 : StringValue,v2 : Value) =>  {
                    return op(Op.INDEX,v1,v2);
                }],
                ['==',(v1 : StringValue,v2 : Value) =>  {
                    return v1.equals(v2);
                }]]);
        }
        return this.__$operators;
    }
    static set operators(__$value : any)  { 
        this.__$operators = __$value;
    }

    constructor(value : string) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    StringValue(value : string) {
        this.value = value;
    }
    invokeMethod(name : lib3.Name,arg? : Value) : Value {
        if (!StringValue.operators.containsKey(name.name)) {
            return notImplemented({
                obj : name});
        }
        return (op(Op.INDEX,StringValue.operators,name.name))(this,arg);
    }
    [OperatorMethods.INDEX](index : Value) : Value {
        return new StringValue(this.value[index.value]);
    }
}

export namespace NumValue {
    export type Constructors = LiteralValue.Constructors | 'NumValue';
    export type Interface = Omit<NumValue, Constructors>;
}
@DartClass
export class NumValue extends LiteralValue {
    @AbstractProperty
    get value() : number{ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    NumValue() {
    }
    @namedFactory
    static $fromValue(value : number) : NumValue {
        if (is(value, "number")) {
            return new IntValue(value);
        }else {
            /* TODO (AssertStatementImpl) : assert (value is double); */;
            return new DoubleValue(value);
        }
    }
    static fromValue : new(value : number) => NumValue;

    private static __$operators;
    static get operators() { 
        if (this.__$operators===undefined) {
            this.__$operators = new core.DartMap.literal([
                ['+',(v1 : NumValue,v2 : Value) =>  {
                    return op(Op.PLUS,v1,v2);
                }],
                ['-',(v1 : NumValue,v2 : Value) =>  {
                    return op(Op.MINUS,v1,v2);
                }],
                ['>',(v1 : NumValue,v2 : Value) =>  {
                    return op(Op.GT,v1,v2);
                }],
                ['<',(v1 : NumValue,v2 : Value) =>  {
                    return op(Op.LT,v1,v2);
                }],
                ['==',(v1 : NumValue,v2 : Value) =>  {
                    return v1.equals(v2);
                }],
                ['unary-',(v1 : NumValue) =>  {
                    return op(Op.NEG,v1);
                }]]);
        }
        return this.__$operators;
    }
    static set operators(__$value : any)  { 
        this.__$operators = __$value;
    }

    invokeMethod(name : lib3.Name,arg? : Value) : Value {
        if (!NumValue.operators.containsKey(name.name)) return notImplemented({
            obj : name});
        if (op(Op.EQUALS,arg,null)) return (op(Op.INDEX,NumValue.operators,name.name))(this);
        return (op(Op.INDEX,NumValue.operators,name.name))(this,arg);
    }
    [OperatorMethods.PLUS](other : Value) : NumValue {
        return new NumValue.fromValue(this.value + other.value);
    }
    [OperatorMethods.MINUS](other : Value) : NumValue {
        return new NumValue.fromValue(this.value - other.value);
    }
    [OperatorMethods.NEGATE]() : NumValue {
        return new NumValue.fromValue(-this.value);
    }
    [OperatorMethods.GT](other : Value) : BoolValue {
        return this.value > other.value ? Value.trueInstance : Value.falseInstance;
    }
    [OperatorMethods.LT](other : Value) : BoolValue {
        return this.value < other.value ? Value.trueInstance : Value.falseInstance;
    }
}

export namespace ConstructorInvocationApplication {
    export type Constructors = ApplicationContinuation.Constructors | 'ConstructorInvocationApplication';
    export type Interface = Omit<ConstructorInvocationApplication, Constructors>;
}
@DartClass
export class ConstructorInvocationApplication extends ApplicationContinuation {
    constructor : lib3.Constructor;

    continuation : ExpressionContinuation;

    constructor(constructor : lib3.Constructor,continuation : ExpressionContinuation) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ConstructorInvocationApplication(constructor : lib3.Constructor,continuation : ExpressionContinuation) {
        this.constructor = constructor;
        this.continuation = continuation;
    }
    call(argValues : core.DartList<InterpreterValue>) : Configuration {
        let ctrEnv : Environment = ApplicationContinuation.createEnvironment(this.constructor.function,argValues);
        let class_ = new Class(this.constructor.enclosingClass.reference);
        let newObject = new ObjectValue(class_,new core.DartList<Value>(class_.instanceSize));
        return new ObjectInitializationConfiguration(this.constructor,new InstanceEnvironment(newObject,ctrEnv),new NewInstanceConfiguration(this.continuation,newObject));
    }
}

export namespace ExpressionStatementContinuation {
    export type Constructors = ExpressionContinuation.Constructors | 'ExpressionStatementContinuation';
    export type Interface = Omit<ExpressionStatementContinuation, Constructors>;
}
@DartClass
export class ExpressionStatementContinuation extends ExpressionContinuation {
    configuration : StatementConfiguration;

    constructor(configuration : StatementConfiguration) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ExpressionStatementContinuation(configuration : StatementConfiguration) {
        this.configuration = configuration;
    }
    call(_ : Value) : Configuration {
        return this.configuration;
    }
}

export namespace BoolValue {
    export type Constructors = LiteralValue.Constructors | 'BoolValue';
    export type Interface = Omit<BoolValue, Constructors>;
}
@DartClass
export class BoolValue extends LiteralValue {
    value : boolean;

    constructor(value : boolean) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    BoolValue(value : boolean) {
        this.value = value;
    }
}

export namespace NullValue {
    export type Constructors = LiteralValue.Constructors | 'NullValue';
    export type Interface = Omit<NullValue, Constructors>;
}
@DartClass
export class NullValue extends LiteralValue {
    get value() : core.DartObject {
        return null;
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    NullValue() {
    }
}

export namespace StringConcatenationContinuation {
    export type Constructors = ApplicationContinuation.Constructors | 'StringConcatenationContinuation';
    export type Interface = Omit<StringConcatenationContinuation, Constructors>;
}
@DartClass
export class StringConcatenationContinuation extends ApplicationContinuation {
    continuation : ExpressionContinuation;

    constructor(continuation : ExpressionContinuation) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    StringConcatenationContinuation(continuation : ExpressionContinuation) {
        this.continuation = continuation;
    }
    call(values : core.DartList<InterpreterValue>) : Configuration {
        let result : core.DartStringBuffer = new core.DartStringBuffer();
        for(let v of values.reversed) {
            result.write(v.value.value);
        }
        return new ContinuationConfiguration(this.continuation,new StringValue(result.toString()));
    }
}

export namespace InitializerContinuation {
    export type Constructors = ExpressionContinuation.Constructors | 'InitializerContinuation';
    export type Interface = Omit<InitializerContinuation, Constructors>;
}
@DartClass
export class InitializerContinuation extends ExpressionContinuation {
    currentClass : Class;

    initializerEnvironment : Environment;

    initializers : core.DartList<lib3.Initializer>;

    configuration : StatementConfiguration;

    constructor(currentClass : Class,initializerEnvironment : Environment,initializers : core.DartList<lib3.Initializer>,configuration : StatementConfiguration) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    InitializerContinuation(currentClass : Class,initializerEnvironment : Environment,initializers : core.DartList<lib3.Initializer>,configuration : StatementConfiguration) {
        this.currentClass = currentClass;
        this.initializerEnvironment = initializerEnvironment;
        this.initializers = initializers;
        this.configuration = configuration;
    }
    call(v : Value) : Configuration {
        let newObject : ObjectValue = this.initializerEnvironment.thisInstance;
        let current : lib3.Initializer = this.initializers.first;
        if (is(current, lib3.FieldInitializer)) {
            this.currentClass.setProperty(newObject,current.field,v);
        }else if (is(current, lib3.LocalInitializer)) {
            this.initializerEnvironment.expand(current.variable,v);
        }else {
            throw `Assigning value ${v} to ${current.runtimeType}`;
        }
        if (this.initializers.length <= 1) {
            _initializeNullFields(this.currentClass,newObject);
            return this.configuration;
        }
        let next : lib3.Initializer = this.initializers[1];
        if (is(next, lib3.RedirectingInitializer)) {
            /* TODO (AssertStatementImpl) : assert (initializers.length == 2); */;
            let app = new RedirectingConstructorApplication(next.target,this.initializerEnvironment,this.configuration);
            let args = _createArgumentExpressionList(next.arguments,next.target.function);
            return new ExpressionListConfiguration(args,this.initializerEnvironment,app);
        }
        if (is(next, lib3.SuperInitializer)) {
            /* TODO (AssertStatementImpl) : assert (initializers.length == 2); */;
            let args = _createArgumentExpressionList(next.arguments,next.target.function);
            let superApp = new SuperConstructorApplication(next.target,this.initializerEnvironment,this.configuration);
            _initializeNullFields(this.currentClass,newObject);
            return new ExpressionListConfiguration(args,this.initializerEnvironment,superApp);
        }
        let cont = new InitializerContinuation(this.currentClass,this.initializerEnvironment,this.initializers.skip(1).toList(),this.configuration);
        return new ExpressionConfiguration(_getExpression(next),this.initializerEnvironment,cont);
    }
}

export namespace IntValue {
    export type Constructors = NumValue.Constructors | 'IntValue';
    export type Interface = Omit<IntValue, Constructors>;
}
@DartClass
export class IntValue extends NumValue {
    value : number;

    constructor(value : number) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    IntValue(value : number) {
        this.value = value;
    }
}

export namespace DoubleValue {
    export type Constructors = NumValue.Constructors | 'DoubleValue';
    export type Interface = Omit<DoubleValue, Constructors>;
}
@DartClass
export class DoubleValue extends NumValue {
    value : double;

    constructor(value : double) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    DoubleValue(value : double) {
        this.value = value;
    }
}

export class properties {
}
