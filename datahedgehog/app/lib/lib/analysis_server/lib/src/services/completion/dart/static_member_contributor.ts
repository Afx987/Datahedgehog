/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/services/completion/dart/static_member_contributor.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace StaticMemberContributor {
    export type Constructors = 'StaticMemberContributor';
    export type Interface = Omit<StaticMemberContributor, Constructors>;
}
@DartClass
export class StaticMemberContributor extends any {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeSuggestions(request : any) : async.Future<core.DartList<any>> { 
        return new async.Future.fromPromise(( async () =>  {
            let targetId : any = request.dotTarget;
            if (is(targetId, any) && !request.target.isCascade) {
                let elem : any = targetId.bestElement;
                if (is(elem, any)) {
                    let containingLibrary : any = request.libraryElement;
                    if (op(Op.EQUALS,containingLibrary,null)) {
                        return EMPTY_LIST;
                    }
                    let builder : _SuggestionBuilder = new _SuggestionBuilder(containingLibrary,request.ideOptions);
                    elem.accept(builder);
                    return builder.suggestions;
                }
            }
            return EMPTY_LIST;
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    StaticMemberContributor() {
    }
}

export namespace _SuggestionBuilder {
    export type Constructors = '_SuggestionBuilder';
    export type Interface = Omit<_SuggestionBuilder, Constructors>;
}
@DartClass
export class _SuggestionBuilder extends any {
    containingLibrary : any;

    suggestions : core.DartList<any>;

    options : any;

    constructor(containingLibrary : any,options : any) {
    }
    @defaultConstructor
    _SuggestionBuilder(containingLibrary : any,options : any) {
        this.suggestions = new core.DartList.literal<any>();
        this.containingLibrary = containingLibrary;
        this.options = options;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitClassElement(element : any) {
        element.visitChildren(this);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitElement(element : any) {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFieldElement(element : any) {
        if (element.isStatic) {
            this._addSuggestion(element);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitMethodElement(element : any) {
        if (element.isStatic && !element.isOperator) {
            this._addSuggestion(element);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitPropertyAccessorElement(element : any) {
        if (element.isStatic) {
            this._addSuggestion(element);
        }
    }
    _addSuggestion(element : any) : void {
        if (element.isPrivate) {
            if (element.library != this.containingLibrary) {
                return;
            }
        }
        if (element.isSynthetic) {
            if ((is(element, any)) || is(element, any) && !this._isSpecialEnumField(element)) {
                return;
            }
        }
        let completion : string = element.displayName;
        if (completion == null || new core.DartString(completion).length <= 0) {
            return;
        }
        let suggestion : any = createSuggestion(element,this.options,{
            completion : completion});
        if (suggestion != null) {
            this.suggestions.add(suggestion);
        }
    }
    _isSpecialEnumField(element : any) : boolean {
        let parent : any = element.enclosingElement;
        if (is(parent, any) && parent.isEnum) {
            if (op(Op.EQUALS,element.name,'values')) {
                return true;
            }
        }
        return false;
    }
}

export class properties {
}
