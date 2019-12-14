/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/services/completion/dart/type_member_contributor.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as collection from "@dart2ts/dart/core";

export namespace TypeMemberContributor {
    export type Constructors = 'TypeMemberContributor';
    export type Interface = Omit<TypeMemberContributor, Constructors>;
}
@DartClass
export class TypeMemberContributor extends any {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeSuggestions(request : any) : async.Future<core.DartList<any>> { 
        return new async.Future.fromPromise(( async () =>  {
            let containingLibrary : any = request.libraryElement;
            if (op(Op.EQUALS,containingLibrary,null)) {
                return EMPTY_LIST;
            }
            let expression : any = request.dotTarget;
            if (op(Op.EQUALS,expression,null) || expression.isSynthetic) {
                return EMPTY_LIST;
            }
            if (is(expression, any)) {
                let elem : any = expression.bestElement;
                if (is(elem, any)) {
                    return EMPTY_LIST;
                }
                if (is(elem, any)) {
                    return EMPTY_LIST;
                }
            }
            let type : any = expression.bestType;
            if (type.isDynamic) {
                if (is(expression, any)) {
                    let elem : any = expression.bestElement;
                    if (is(elem, any)) {
                        type = elem.returnType;
                    }else if (is(elem, any)) {
                        type = elem.type;
                    }else if (is(elem, any)) {
                        type = elem.type;
                    }
                    if ((op(Op.EQUALS,type,null) || type.isDynamic) && is(expression, any)) {
                        let visitor : _LocalBestTypeVisitor = new _LocalBestTypeVisitor(expression.name,request.offset);
                        if (visitor.visit(expression) && visitor.typeFound != null) {
                            type = visitor.typeFound;
                        }
                    }
                }
            }
            let containingMethodName : string;
            if (is(expression, any) && is(type, any)) {
                type = (type as any).superclass;
                let containingMethod : any = expression.getAncestor((p : any) =>  {
                    return is(p, any);
                });
                if (containingMethod != null) {
                    let id : any = containingMethod.name;
                    if (id != null) {
                        containingMethodName = id.name;
                    }
                }
            }
            if (type.isDynamic) {
                type = request.objectType;
            }
            if (is(type, any)) {
                let builder : _SuggestionBuilder = new _SuggestionBuilder(containingLibrary);
                builder.buildSuggestions(type,containingMethodName,request.ideOptions);
                return builder.suggestions.toList();
            }
            return EMPTY_LIST;
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    TypeMemberContributor() {
    }
}

export namespace _LocalBestTypeVisitor {
    export type Constructors = '_LocalBestTypeVisitor';
    export type Interface = Omit<_LocalBestTypeVisitor, Constructors>;
}
@DartClass
export class _LocalBestTypeVisitor extends any {
    targetName : string;

    typeFound : any;

    constructor(targetName : string,offset : number) {
    }
    @defaultConstructor
    _LocalBestTypeVisitor(targetName : string,offset : number) {
        super.DartObject(offset);
        this.targetName = targetName;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    declaredClass(declaration : any) : void {
        if (op(Op.EQUALS,declaration.name.name,this.targetName)) {
            finished();
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    declaredClassTypeAlias(declaration : any) : void {
        if (op(Op.EQUALS,declaration.name.name,this.targetName)) {
            finished();
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    declaredField(fieldDecl : any,varDecl : any) : void {
        if (op(Op.EQUALS,varDecl.name.name,this.targetName)) {
            finished();
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    declaredFunction(declaration : any) : void {
        if (op(Op.EQUALS,declaration.name.name,this.targetName)) {
            let typeName : any = declaration.returnType;
            if (typeName != null) {
                this.typeFound = typeName.type;
            }
            finished();
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    declaredFunctionTypeAlias(declaration : any) : void {
        if (op(Op.EQUALS,declaration.name.name,this.targetName)) {
            let typeName : any = declaration.returnType;
            if (typeName != null) {
                this.typeFound = typeName.type;
            }
            finished();
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    declaredLabel(label : any,isCaseLabel : boolean) : void {
        if (op(Op.EQUALS,label.label.name,this.targetName)) {
            finished();
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    declaredLocalVar(name : any,type : any) : void {
        if (op(Op.EQUALS,name.name,this.targetName)) {
            this.typeFound = name.bestType;
            finished();
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    declaredMethod(declaration : any) : void {
        if (op(Op.EQUALS,declaration.name.name,this.targetName)) {
            let typeName : any = declaration.returnType;
            if (typeName != null) {
                this.typeFound = typeName.type;
            }
            finished();
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    declaredParam(name : any,type : any) : void {
        if (op(Op.EQUALS,name.name,this.targetName)) {
            finished();
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    declaredTopLevelVar(varList : any,varDecl : any) : void {
        if (op(Op.EQUALS,varDecl.name.name,this.targetName)) {
            finished();
        }
    }
}

export namespace _SuggestionBuilder {
    export type Constructors = '_SuggestionBuilder';
    export type Interface = Omit<_SuggestionBuilder, Constructors>;
}
@DartClass
export class _SuggestionBuilder {
    private static __$_COMPLETION_TYPE_NONE : number;
    static get _COMPLETION_TYPE_NONE() : number { 
        if (this.__$_COMPLETION_TYPE_NONE===undefined) {
            this.__$_COMPLETION_TYPE_NONE = 0;
        }
        return this.__$_COMPLETION_TYPE_NONE;
    }

    private static __$_COMPLETION_TYPE_GETTER : number;
    static get _COMPLETION_TYPE_GETTER() : number { 
        if (this.__$_COMPLETION_TYPE_GETTER===undefined) {
            this.__$_COMPLETION_TYPE_GETTER = 1;
        }
        return this.__$_COMPLETION_TYPE_GETTER;
    }

    private static __$_COMPLETION_TYPE_SETTER : number;
    static get _COMPLETION_TYPE_SETTER() : number { 
        if (this.__$_COMPLETION_TYPE_SETTER===undefined) {
            this.__$_COMPLETION_TYPE_SETTER = 2;
        }
        return this.__$_COMPLETION_TYPE_SETTER;
    }

    private static __$_COMPLETION_TYPE_FIELD_OR_METHOD_OR_GETSET : number;
    static get _COMPLETION_TYPE_FIELD_OR_METHOD_OR_GETSET() : number { 
        if (this.__$_COMPLETION_TYPE_FIELD_OR_METHOD_OR_GETSET===undefined) {
            this.__$_COMPLETION_TYPE_FIELD_OR_METHOD_OR_GETSET = 3;
        }
        return this.__$_COMPLETION_TYPE_FIELD_OR_METHOD_OR_GETSET;
    }

    containingLibrary : any;

    _completionTypesGenerated : core.DartMap<string,number>;

    _suggestionMap : core.DartMap<string,any>;

    constructor(containingLibrary : any) {
    }
    @defaultConstructor
    _SuggestionBuilder(containingLibrary : any) {
        this._completionTypesGenerated = new core.DartHashMap<string,number>();
        this._suggestionMap = new core.DartMap.literal([
        ]);
        this.containingLibrary = containingLibrary;
    }
    get suggestions() : core.DartIterable<any> {
        return this._suggestionMap.values;
    }
    buildSuggestions(type : any,containingMethodName : string,ideOptions : any) : void {
        let types : core.DartList<any> = this._getTypeOrdering(type);
        for(let targetType of types) {
            for(let method of targetType.methods) {
                if (!method.isStatic) {
                    this._addSuggestion(method,ideOptions,{
                        relevance : op(Op.EQUALS,method.name,containingMethodName) ? DART_RELEVANCE_HIGH : DART_RELEVANCE_DEFAULT});
                }
            }
            for(let propertyAccessor of targetType.accessors) {
                if (!propertyAccessor.isStatic) {
                    if (propertyAccessor.isSynthetic) {
                        if (propertyAccessor.isGetter) {
                            this._addSuggestion(propertyAccessor.variable,ideOptions);
                        }
                    }else {
                        this._addSuggestion(propertyAccessor,ideOptions);
                    }
                }
            }
        }
    }
    _addSuggestion(element : any,options : any,_namedArguments? : {relevance? : number}) : void {
        let {relevance} = Object.assign({
            "relevance" : DART_RELEVANCE_DEFAULT}, _namedArguments );
        if (element.isPrivate) {
            if (element.library != this.containingLibrary) {
                return;
            }
        }
        let identifier : string = element.displayName;
        if (relevance == DART_RELEVANCE_DEFAULT && identifier != null) {
            if (new core.DartString(identifier).startsWith('$')) {
                relevance = DART_RELEVANCE_LOW;
            }
        }
        let alreadyGenerated : number = this._completionTypesGenerated.putIfAbsent(identifier,() =>  {
            return _SuggestionBuilder._COMPLETION_TYPE_NONE;
        });
        if (is(element, any)) {
            if (alreadyGenerated != _SuggestionBuilder._COMPLETION_TYPE_NONE) {
                return;
            }
            this._completionTypesGenerated.set(identifier,_SuggestionBuilder._COMPLETION_TYPE_FIELD_OR_METHOD_OR_GETSET);
        }else if (is(element, any)) {
            if (element.isGetter) {
                if ((alreadyGenerated & _SuggestionBuilder._COMPLETION_TYPE_GETTER) != 0) {
                    return;
                }
                this._completionTypesGenerated.set(identifier,_SuggestionBuilder._COMPLETION_TYPE_GETTER);
            }else {
                if ((alreadyGenerated & _SuggestionBuilder._COMPLETION_TYPE_SETTER) != 0) {
                    return;
                }
                this._completionTypesGenerated.set(identifier,_SuggestionBuilder._COMPLETION_TYPE_SETTER);
            }
        }else if (is(element, any)) {
            if (alreadyGenerated == _SuggestionBuilder._COMPLETION_TYPE_FIELD_OR_METHOD_OR_GETSET) {
                return;
            }
            this._completionTypesGenerated.set(identifier,_SuggestionBuilder._COMPLETION_TYPE_FIELD_OR_METHOD_OR_GETSET);
        }else {
            /* TODO (AssertStatementImpl) : assert (false); */;
            return;
        }
        let suggestion : any = createSuggestion(element,options,{
            relevance : relevance});
        if (suggestion != null) {
            this._suggestionMap.set(suggestion.completion,suggestion);
        }
    }
    _getTypeOrdering(type : any) : core.DartList<any> {
        let result : core.DartList<any> = new core.DartList.literal<any>();
        let classesSeen : core.DartSet<any> = new core.DartHashSet<any>();
        let typesToVisit : core.DartList<any> = new core.DartList.literal<any>(type);
        while (typesToVisit.isNotEmpty){
            let nextType : any = typesToVisit.removeLast();
            if (!classesSeen.add(nextType.element)) {
                continue;
            }
            result.add(nextType);
            typesToVisit.addAll(nextType.interfaces);
            if (nextType.superclass != null) {
                typesToVisit.add(nextType.superclass);
            }
            typesToVisit.addAll(nextType.mixins);
        }
        return result;
    }
}

export class properties {
}
