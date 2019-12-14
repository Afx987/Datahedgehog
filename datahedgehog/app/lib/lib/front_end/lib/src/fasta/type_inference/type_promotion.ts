/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/fasta/type_inference/type_promotion.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace TypePromoter {
    export type Constructors = 'TypePromoter';
    export type Interface<E,V> = Omit<TypePromoter<E,V>, Constructors>;
}
@DartClass
export class TypePromoter<E,V> {
    @AbstractProperty
    get currentScope() : TypePromotionScope{ throw 'abstract'}
    @Abstract
    computePromotedType(fact : TypePromotionFact<V>,scope : TypePromotionScope,mutatedInClosure : boolean) : any{ throw 'abstract'}
    @Abstract
    enterElse() : void{ throw 'abstract'}
    @Abstract
    enterThen(condition : E) : void{ throw 'abstract'}
    @Abstract
    exitConditional() : void{ throw 'abstract'}
    @Abstract
    finished() : void{ throw 'abstract'}
    @Abstract
    getFactForAccess(variable : V,functionNestingLevel : number) : TypePromotionFact<V>{ throw 'abstract'}
    @Abstract
    handleIsCheck(isExpression : E,isInverted : boolean,variable : V,type : any,functionNestingLevel : number) : void{ throw 'abstract'}
    @Abstract
    mutateVariable(variable : V,functionNestingLevel : number) : void{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    TypePromoter() {
    }
}

export namespace TypePromotionFact {
    export type Constructors = 'TypePromotionFact';
    export type Interface<V> = Omit<TypePromotionFact<V>, Constructors>;
}
@DartClass
export class TypePromotionFact<V> {
    variable : V;

    previous : TypePromotionFact<V>;

    sequenceNumber : number;

    previousForVariable : TypePromotionFact<V>;

    functionNestingLevel : number;

    _mutatedInScopes : core.DartSet<TypePromotionScope>;

    _accessedInClosureInScopes : core.DartSet<TypePromotionScope>;

    constructor(sequenceNumber : number,variable : V,previous : TypePromotionFact<V>,previousForVariable : TypePromotionFact<V>,functionNestingLevel : number) {
    }
    @defaultConstructor
    TypePromotionFact(sequenceNumber : number,variable : V,previous : TypePromotionFact<V>,previousForVariable : TypePromotionFact<V>,functionNestingLevel : number) {
        this.sequenceNumber = sequenceNumber;
        this.variable = variable;
        this.previous = previous;
        this.previousForVariable = previousForVariable;
        this.functionNestingLevel = functionNestingLevel;
    }
    @Abstract
    _computePromotedType(promoter : TypePromoterImpl<any,V>,scope : TypePromotionScope) : any{ throw 'abstract'}
    static _recordAccessedInScope(fact : TypePromotionFact<any>,scope : TypePromotionScope,functionNestingLevel : number) : void {
        while (fact != null){
            if (functionNestingLevel > fact.functionNestingLevel) {
                fact._accessedInClosureInScopes = ( fact._accessedInClosureInScopes ) || ( new core.DartSet.identity() );
                if (!fact._accessedInClosureInScopes.add(scope)) return;
            }
            fact = fact.previousForVariable;
        }
    }
    static _recordMutatedInScope(fact : TypePromotionFact<any>,scope : TypePromotionScope) : void {
        while (fact != null){
            fact._mutatedInScopes = ( fact._mutatedInScopes ) || ( new core.DartSet.identity() );
            if (!fact._mutatedInScopes.add(scope)) return;
            fact = fact.previousForVariable;
        }
    }
}

export namespace TypePromotionScope {
    export type Constructors = 'TypePromotionScope' | '_topLevel';
    export type Interface = Omit<TypePromotionScope, Constructors>;
}
@DartClass
export class TypePromotionScope {
    _depth : number;

    _enclosing : TypePromotionScope;

    constructor(_enclosing : TypePromotionScope) {
    }
    @defaultConstructor
    TypePromotionScope(_enclosing : TypePromotionScope) {
        this._depth = _enclosing._depth + 1;
        this._enclosing = _enclosing;
    }
    @namedConstructor
    _topLevel() {
        this._enclosing = null;
        this._depth = 0;
    }
    static _topLevel : new() => TypePromotionScope;

    containsScope(other : TypePromotionScope) : boolean {
        if (this._depth > other._depth) {
            return false;
        }
        while (this._depth < other._depth){
            other = other._enclosing;
        }
        return core.identical(this,other);
    }
}

export namespace TypePromoterImpl {
    export type Constructors = TypePromoter.Constructors | 'TypePromoterImpl' | '_';
    export type Interface<E,V> = Omit<TypePromoterImpl<E,V>, Constructors>;
}
@DartClass
export class TypePromoterImpl<E,V> extends TypePromoter<E,V> {
    _nullFacts : _NullFact<V>;

    _factCache;

    _factCacheState : TypePromotionFact<V>;

    _currentFacts : TypePromotionFact<V>;

    _promotionExpression : E;

    _trueFactsForPromotionExpression : TypePromotionFact<V>;

    _currentScope : TypePromotionScope;

    _lastFactSequenceNumber : number;

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    TypePromoterImpl() {
        this._factCache = new core.DartMap.literal([
        ]);
        this._currentScope = new _TopLevelScope();
        this._lastFactSequenceNumber = 0;
        this._(new _NullFact<V>());
    }
    @namedConstructor
    _(_nullFacts : _NullFact<V>) {
        this._factCache = new core.DartMap.literal([
        ]);
        this._currentScope = new _TopLevelScope();
        this._lastFactSequenceNumber = 0;
        this._factCacheState = _nullFacts;
        this._currentFacts = _nullFacts;
        this._nullFacts = _nullFacts;
        op(Op.INDEX_ASSIGN,this._factCache,null,this._nullFacts);
    }
    static _ : new<E,V>(_nullFacts : _NullFact<V>) => TypePromoterImpl<E,V>;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get currentScope() : TypePromotionScope {
        return this._currentScope;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computePromotedType(fact : TypePromotionFact<V>,scope : TypePromotionScope,mutatedInClosure : boolean) : any {
        if (mutatedInClosure) return null;
        return ((_566_)=>(!!_566_)?_566_._computePromotedType(this,scope):null)(fact);
    }
    debugEvent(name : string) : void {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    enterElse() : void {
        this.debugEvent('enterElse');
        let scope : _ConditionalScope<any> = this._currentScope;
        scope.afterTrue = this._currentFacts;
        this._currentFacts = scope.beforeElse;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    enterThen(condition : E) : void {
        this.debugEvent('enterThen');
        let trueFacts = this._factsWhenTrue(condition);
        let falseFacts = this._factsWhenFalse(condition);
        this._currentScope = new _ConditionalScope<any>(this._currentScope,falseFacts);
        this._currentFacts = trueFacts;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    exitConditional() : void {
        this.debugEvent('exitConditional');
        let scope : _ConditionalScope<any> = this._currentScope;
        this._currentScope = this._currentScope._enclosing;
        this._currentFacts = this._mergeFacts(scope.afterTrue,this._currentFacts);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    finished() : void {
        this.debugEvent('finished');
        if (isNot(this._currentScope, _TopLevelScope)) {
            internalError('Stack not empty');
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    getFactForAccess(variable : V,functionNestingLevel : number) : TypePromotionFact<V> {
        this.debugEvent('getFactForAccess');
        let fact = this._computeCurrentFactMap().get(variable);
        TypePromotionFact._recordAccessedInScope(fact,this._currentScope,functionNestingLevel);
        return fact;
    }
    @Abstract
    getVariableFunctionNestingLevel(variable : V) : number{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    handleIsCheck(isExpression : E,isInverted : boolean,variable : V,type : any,functionNestingLevel : number) : void {
        this.debugEvent('handleIsCheck');
        if (!this.isPromotionCandidate(variable)) return;
        let isCheck = new _IsCheck<V>(++this._lastFactSequenceNumber,variable,this._currentFacts,this._computeCurrentFactMap().get(variable),functionNestingLevel,type);
        if (isInverted) {
            this._recordPromotionExpression(isExpression,this._currentFacts,isCheck);
        }else {
            this._recordPromotionExpression(isExpression,isCheck,this._currentFacts);
        }
    }
    @Abstract
    isPromotionCandidate(variable : V) : boolean{ throw 'abstract'}
    mutateVariable(variable : V,functionNestingLevel : number) : void {
        this.debugEvent('mutateVariable');
        let fact = this._computeCurrentFactMap().get(variable);
        TypePromotionFact._recordMutatedInScope(fact,this._currentScope);
        if (this.getVariableFunctionNestingLevel(variable) < functionNestingLevel) {
            this.setVariableMutatedInClosure(variable);
        }
        this.setVariableMutatedAnywhere(variable);
    }
    @Abstract
    sameExpressions(a : E,b : E) : boolean{ throw 'abstract'}
    @Abstract
    setVariableMutatedAnywhere(variable : V) : void{ throw 'abstract'}
    @Abstract
    setVariableMutatedInClosure(variable : V) : void{ throw 'abstract'}
    @Abstract
    wasVariableMutatedAnywhere(variable : V) : boolean{ throw 'abstract'}
    _computeCurrentFactMap() : core.DartMap<V,TypePromotionFact<V>> {
        let commonAncestor : TypePromotionFact<V> = this._currentFacts;
        while (commonAncestor.sequenceNumber != this._factCacheState.sequenceNumber){
            if (commonAncestor.sequenceNumber > this._factCacheState.sequenceNumber) {
                commonAncestor = commonAncestor.previous;
            }else {
                op(Op.INDEX_ASSIGN,this._factCache,this._factCacheState.variable,this._factCacheState.previousForVariable);
                this._factCacheState = this._factCacheState.previous;
            }
        }
        /* TODO (AssertStatementImpl) : assert (identical(commonAncestor, _factCacheState)); */;
        for(let newState : TypePromotionFact<V> = this._currentFacts; !core.identical(newState,commonAncestor); newState = newState.previous){
            let currentlyCached = op(Op.INDEX,this._factCache,newState.variable);
            if (op(Op.EQUALS,currentlyCached,null) || newState.sequenceNumber > currentlyCached.sequenceNumber) {
                op(Op.INDEX_ASSIGN,this._factCache,newState.variable,newState);
            }
        }
        this._factCacheState = this._currentFacts;
        return this._factCache;
    }
    _factsWhenFalse(e : E) : TypePromotionFact<V> {
        return this._currentFacts;
    }
    _factsWhenTrue(e : E) : TypePromotionFact<V> {
        return this.sameExpressions(this._promotionExpression,e) ? this._trueFactsForPromotionExpression : this._currentFacts;
    }
    _mergeFacts(a : TypePromotionFact<V>,b : TypePromotionFact<V>) : TypePromotionFact<V> {
        while (a.sequenceNumber != b.sequenceNumber){
            if (a.sequenceNumber > b.sequenceNumber) {
                a = a.previous;
            }else {
                b = b.previous;
            }
        }
        /* TODO (AssertStatementImpl) : assert (identical(a, b)); */;
        return a;
    }
    _printEvent(name : string) : void {
        var factChain : (fact : TypePromotionFact<V>) => core.DartIterable<TypePromotionFact<V>> = (fact : TypePromotionFact<V>) : core.DartIterable<TypePromotionFact<V>> => core.iter<TypePromotionFact<V>>(()=>(function*()  {
            while (fact != null){
                yield fact;
                fact = fact.previousForVariable;
            }
        }).call(this));
        this._computeCurrentFactMap().forEach((variable : any,fact : any) =>  {
            if (op(Op.EQUALS,fact,null)) return;
            core.print(`  ${(variable || '(null)')}: ${factChain(fact).join(' -> ')}`);
        });
        core.print(name);
    }
    _recordPromotionExpression(expression : E,ifTrue : TypePromotionFact<V>,ifFalse : TypePromotionFact<V>) : void {
        this._promotionExpression = expression;
        this._trueFactsForPromotionExpression = ifTrue;
        this._currentFacts = ifFalse;
    }
}

export namespace _ConditionalScope {
    export type Constructors = TypePromotionScope.Constructors | '_ConditionalScope';
    export type Interface<V> = Omit<_ConditionalScope<V>, Constructors>;
}
@DartClass
export class _ConditionalScope<V> extends TypePromotionScope {
    beforeElse : TypePromotionFact<V>;

    afterTrue : TypePromotionFact<V>;

    constructor(enclosing : TypePromotionScope,beforeElse : TypePromotionFact<V>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _ConditionalScope(enclosing : TypePromotionScope,beforeElse : TypePromotionFact<V>) {
        super.TypePromotionScope(enclosing);
        this.beforeElse = beforeElse;
    }
}

export namespace _IsCheck {
    export type Constructors = TypePromotionFact.Constructors | '_IsCheck';
    export type Interface<V> = Omit<_IsCheck<V>, Constructors>;
}
@DartClass
export class _IsCheck<V> extends TypePromotionFact<V> {
    checkedType : any;

    constructor(sequenceNumber : number,variable : V,previous : TypePromotionFact<V>,previousForVariable : TypePromotionFact<V>,functionNestingLevel : number,checkedType : any) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _IsCheck(sequenceNumber : number,variable : V,previous : TypePromotionFact<V>,previousForVariable : TypePromotionFact<V>,functionNestingLevel : number,checkedType : any) {
        super.TypePromotionFact(sequenceNumber,variable,previous,previousForVariable,functionNestingLevel);
        this.checkedType = checkedType;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `isCheck(${this.checkedType})`;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    _computePromotedType(promoter : TypePromoterImpl<any,V>,scope : TypePromotionScope) : any {
        if (this._mutatedInScopes != null) {
            for(let assignmentScope of this._mutatedInScopes) {
                if (assignmentScope.containsScope(scope)) {
                    return ((_567_)=>(!!_567_)?_567_._computePromotedType(promoter,scope):null)(this.previousForVariable);
                }
            }
        }
        if (promoter.wasVariableMutatedAnywhere(this.variable) && this._accessedInClosureInScopes != null) {
            for(let accessScope of this._accessedInClosureInScopes) {
                if (accessScope.containsScope(scope)) {
                    return ((_568_)=>(!!_568_)?_568_._computePromotedType(promoter,scope):null)(this.previousForVariable);
                }
            }
        }
        return this.checkedType;
    }
}

export namespace _NullFact {
    export type Constructors = TypePromotionFact.Constructors | '_NullFact';
    export type Interface<V> = Omit<_NullFact<V>, Constructors>;
}
@DartClass
export class _NullFact<V> extends TypePromotionFact<V> {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _NullFact() {
        super.TypePromotionFact(0,null,null,null,0);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return 'null';
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    _computePromotedType(promoter : TypePromoter<any,V>,scope : TypePromotionScope) : any {
        throw new core.StateError('Tried to create promoted type for no variable');
    }
}

export namespace _TopLevelScope {
    export type Constructors = TypePromotionScope.Constructors | '_TopLevelScope';
    export type Interface = Omit<_TopLevelScope, Constructors>;
}
@DartClass
export class _TopLevelScope extends TypePromotionScope {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _TopLevelScope() {
        super._topLevel();
    }
}

export class properties {
}
