/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/lint/registry.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as collection from "@dart2ts/dart/core";

export namespace Registry {
    export type Constructors = 'Registry';
    export type Interface = Omit<Registry, Constructors>;
}
@DartClass
@With(core.DartIterableMixin)
export class Registry extends core.DartObject implements core.DartIterableMixin.Interface<any> {
    @Abstract
    map(f : <T,E>(element : E) => T) : core.DartIterable<T> {
        throw 'from mixin';
    }
    @Abstract
    where(f : <E>(element : E) => boolean) : core.DartIterable<any> {
        throw 'from mixin';
    }
    @Abstract
    expand(f : <T,E>(element : E) => core.DartIterable<T>) : core.DartIterable<T> {
        throw 'from mixin';
    }
    @Abstract
    contains(element : core.DartObject) : boolean {
        throw 'from mixin';
    }
    @Abstract
    forEach(f : <E>(element : E) => void) : void {
        throw 'from mixin';
    }
    @Abstract
    reduce(combine : <E>(value : E,element : E) => E) : any {
        throw 'from mixin';
    }
    @Abstract
    fold(initialValue : T,combine : <T,E>(previousValue : T,element : E) => T) : T {
        throw 'from mixin';
    }
    @Abstract
    every(f : <E>(element : E) => boolean) : boolean {
        throw 'from mixin';
    }
    @Abstract
    join(separator? : string) : string {
        separator = separator || "";
        throw 'from mixin';
    }
    @Abstract
    any(f : <E>(element : E) => boolean) : boolean {
        throw 'from mixin';
    }
    @Abstract
    toList(_namedArguments? : {growable? : boolean}) : core.DartList<any> {
        let {growable} = Object.assign({
            "growable" : true}, _namedArguments );
        throw 'from mixin';
    }
    @Abstract
    toSet() : core.DartSet<any> {
        throw 'from mixin';
    }
    @Abstract
    take(count : number) : core.DartIterable<any> {
        throw 'from mixin';
    }
    @Abstract
    takeWhile(test : <E>(value : E) => boolean) : core.DartIterable<any> {
        throw 'from mixin';
    }
    @Abstract
    skip(count : number) : core.DartIterable<any> {
        throw 'from mixin';
    }
    @Abstract
    skipWhile(test : <E>(value : E) => boolean) : core.DartIterable<any> {
        throw 'from mixin';
    }
    @Abstract
    firstWhere(test : <E>(value : E) => boolean,_namedArguments? : {orElse? : <E>() => E}) : any {
        let {orElse} = Object.assign({
        }, _namedArguments );
        throw 'from mixin';
    }
    @Abstract
    lastWhere(test : <E>(value : E) => boolean,_namedArguments? : {orElse? : <E>() => E}) : any {
        let {orElse} = Object.assign({
        }, _namedArguments );
        throw 'from mixin';
    }
    @Abstract
    singleWhere(test : <E>(value : E) => boolean) : any {
        throw 'from mixin';
    }
    @Abstract
    elementAt(index : number) : any {
        throw 'from mixin';
    }
    @Abstract
    toString() : string {
        throw 'from mixin';
    }
    private static __$ruleRegistry : Registry;
    static get ruleRegistry() : Registry { 
        if (this.__$ruleRegistry===undefined) {
            this.__$ruleRegistry = new Registry();
        }
        return this.__$ruleRegistry;
    }
    static set ruleRegistry(__$value : Registry)  { 
        this.__$ruleRegistry = __$value;
    }

    _ruleMap : core.DartMap<string,any>;

    _defaultRules : core.DartList<any>;

    get defaultRules() : core.DartList<any> {
        return this._defaultRules;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get iterator() : core.DartIterator<any> {
        return this._ruleMap.values.iterator;
    }
    get rules() : core.DartIterable<any> {
        return this._ruleMap.values;
    }
    [OperatorMethods.INDEX](name : string) : any {
        return this._ruleMap.get(name);
    }
    getRule(name : string) : any {
        return this._ruleMap.get(name);
    }
    enabled(config : any) : core.DartIterable<any> {
        return this.rules.where((rule : any) =>  {
            return config.ruleConfigs.any((rc : any) =>  {
                return rc.enables(rule.name);
            });
        });
    }
    register(rule : any) : void {
        this._ruleMap.set(rule.name,rule);
    }
    registerDefault(rule : any) : void {
        this.register(rule);
        this._defaultRules.add(rule);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Registry() {
        this._ruleMap = new core.DartMap.literal([
        ]);
        this._defaultRules = new core.DartList.literal<any>();
    }
}

export class properties {
}
