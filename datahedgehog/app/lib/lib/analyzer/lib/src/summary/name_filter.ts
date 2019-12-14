/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/summary/name_filter.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace NameFilter {
    export type Constructors = '_';
    export type Interface = Omit<NameFilter, Constructors>;
}
@DartClass
export class NameFilter {
    private static __$identity : NameFilter;
    static get identity() : NameFilter { 
        if (this.__$identity===undefined) {
            this.__$identity = new NameFilter._({
                hiddenNames : new core.DartSet<string>()});
        }
        return this.__$identity;
    }
    static set identity(__$value : NameFilter)  { 
        this.__$identity = __$value;
    }

    shownNames : core.DartSet<string>;

    hiddenNames : core.DartSet<string>;

    @namedFactory
    static $forNamespaceCombinator(combinator : any) : NameFilter {
        if (is(combinator, any)) {
            return new NameFilter._({
                shownNames : combinator.shownNames.toSet()});
        }else if (is(combinator, any)) {
            return new NameFilter._({
                hiddenNames : combinator.hiddenNames.toSet()});
        }else {
            throw new core.StateError(`Unexpected combinator type ${combinator.runtimeType}`);
        }
    }
    static forNamespaceCombinator : new(combinator : any) => NameFilter;

    @namedFactory
    static $forNamespaceCombinators(combinators : core.DartList<any>) : NameFilter {
        let result : NameFilter = NameFilter.identity;
        for(let combinator of combinators) {
            result = result.merge(new NameFilter.forNamespaceCombinator(combinator));
        }
        return result;
    }
    static forNamespaceCombinators : new(combinators : core.DartList<any>) => NameFilter;

    @namedFactory
    static $forUnlinkedCombinator(combinator : any) : NameFilter {
        if (combinator.shows.isNotEmpty) {
            return new NameFilter._({
                shownNames : combinator.shows.toSet()});
        }else {
            return new NameFilter._({
                hiddenNames : combinator.hides.toSet()});
        }
    }
    static forUnlinkedCombinator : new(combinator : any) => NameFilter;

    @namedFactory
    static $forUnlinkedCombinators(combinators : core.DartList<any>) : NameFilter {
        let result : NameFilter = NameFilter.identity;
        for(let combinator of combinators) {
            result = result.merge(new NameFilter.forUnlinkedCombinator(combinator));
        }
        return result;
    }
    static forUnlinkedCombinators : new(combinators : core.DartList<any>) => NameFilter;

    @namedConstructor
    _(_namedArguments? : {shownNames? : core.DartSet<string>,hiddenNames? : core.DartSet<string>}) {
        let {shownNames,hiddenNames} = Object.assign({
        }, _namedArguments );
        this.shownNames = shownNames;
        this.hiddenNames = hiddenNames;
    }
    static _ : new(_namedArguments? : {shownNames? : core.DartSet<string>,hiddenNames? : core.DartSet<string>}) => NameFilter;

    accepts(name : string) : boolean {
        if (new core.DartString(name).endsWith('=')) {
            name = new core.DartString(name).substring(0,new core.DartString(name).length - 1);
        }
        if (this.shownNames != null) {
            return this.shownNames.contains(name);
        }else {
            return !this.hiddenNames.contains(name);
        }
    }
    merge(other : NameFilter) : NameFilter {
        if (this.shownNames != null) {
            if (other.shownNames != null) {
                return new NameFilter._({
                    shownNames : this.shownNames.intersection(other.shownNames)});
            }else {
                return new NameFilter._({
                    shownNames : this.shownNames.difference(other.hiddenNames)});
            }
        }else {
            if (other.shownNames != null) {
                return new NameFilter._({
                    shownNames : other.shownNames.difference(this.hiddenNames)});
            }else {
                return new NameFilter._({
                    hiddenNames : this.hiddenNames.union(other.hiddenNames)});
            }
        }
    }
}

export class properties {
}
