/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/services/completion/dart/local_reference_contributor.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/analyzer_plugin/lib/protocol/protocol_common";

export namespace LocalReferenceContributor {
    export type Constructors = 'LocalReferenceContributor';
    export type Interface = Omit<LocalReferenceContributor, Constructors>;
}
@DartClass
export class LocalReferenceContributor extends any {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeSuggestions(request : any) : async.Future<core.DartList<any>> { 
        return new async.Future.fromPromise(( async () =>  {
            let optype : any = (request as any).opType;
            let node : any = request.target.containingNode;
            let suggestLocalFields : boolean = is(node, any) && node.initializers.contains(request.target.entity);
            if (!optype.isPrefixed) {
                if (optype.includeReturnValueSuggestions || optype.includeTypeNameSuggestions || optype.includeVoidReturnSuggestions || suggestLocalFields) {
                    while (is(node, any)){
                        node = node.parent;
                    }
                    if (is(node, any)) {
                        node = node.parent;
                    }
                    let visitor : _LocalVisitor = new _LocalVisitor(request,request.offset,optype,{
                        suggestLocalFields : suggestLocalFields});
                    visitor.visit(node);
                    return visitor.suggestions;
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
    LocalReferenceContributor() {
    }
}

export namespace _LocalVisitor {
    export type Constructors = '_LocalVisitor';
    export type Interface = Omit<_LocalVisitor, Constructors>;
}
@DartClass
export class _LocalVisitor extends any {
    request : any;

    optype : any;

    suggestLocalFields : boolean;

    suggestionMap : core.DartMap<string,any>;

    privateMemberRelevance : number;

    targetIsFunctionalArgument : boolean;

    constructor(request : any,offset : number,optype : any,_namedArguments? : {suggestLocalFields? : boolean}) {
    }
    @defaultConstructor
    _LocalVisitor(request : any,offset : number,optype : any,_namedArguments? : {suggestLocalFields? : boolean}) {
        let {suggestLocalFields} = Object.assign({
        }, _namedArguments );
        this.suggestionMap = new core.DartMap.literal([
        ]);
        this.privateMemberRelevance = DART_RELEVANCE_DEFAULT;
        super.DartObject(offset);
        this.request = request;
        this.optype = optype;
        this.suggestLocalFields = suggestLocalFields;
        this.targetIsFunctionalArgument = this.request.target.isFunctionalArgument();
        let data = this.request.result != null ? this.request.result.content : this.request.sourceContents;
        let offset : number = this.request.offset;
        if (data != null && 0 < offset && offset <= data.length) {
            var isIdentifierChar : (index : number) => boolean = (index : number) : boolean =>  {
                let code : number = data.codeUnitAt(index);
                return isLetterOrDigit(code) || code == CHAR_UNDERSCORE;
            };
            if (isIdentifierChar(offset - 1)) {
                while (offset > 0 && isIdentifierChar(offset - 1)){
                    --offset;
                }
                if (op(Op.EQUALS,data.codeUnitAt(offset),CHAR_UNDERSCORE)) {
                    this.privateMemberRelevance = null;
                }
            }
        }
    }
    get suggestions() : core.DartList<any> {
        return this.suggestionMap.values.toList();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    declaredClass(declaration : any) : void {
        if (this.optype.includeTypeNameSuggestions) {
            this._addLocalSuggestion_includeTypeNameSuggestions(declaration.documentationComment,declaration.name,NO_RETURN_TYPE,lib3.ElementKind.CLASS,{
                isAbstract : declaration.isAbstract,isDeprecated : isDeprecated(declaration)});
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    declaredClassTypeAlias(declaration : any) : void {
        if (this.optype.includeTypeNameSuggestions) {
            this._addLocalSuggestion_includeTypeNameSuggestions(declaration.documentationComment,declaration.name,NO_RETURN_TYPE,lib3.ElementKind.CLASS_TYPE_ALIAS,{
                isAbstract : true,isDeprecated : isDeprecated(declaration)});
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    declaredEnum(declaration : any) : void {
        if (this.optype.includeTypeNameSuggestions) {
            this._addLocalSuggestion_includeTypeNameSuggestions(declaration.documentationComment,declaration.name,NO_RETURN_TYPE,lib3.ElementKind.ENUM,{
                isDeprecated : isDeprecated(declaration)});
            for(let enumConstant of declaration.constants) {
                if (!enumConstant.isSynthetic) {
                    this._addLocalSuggestion_includeReturnValueSuggestions_enumConstant(enumConstant,declaration,{
                        isDeprecated : isDeprecated(declaration)});
                }
            }
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    declaredField(fieldDecl : any,varDecl : any) : void {
        if ((this.optype.includeReturnValueSuggestions && (!this.optype.inStaticMethodBody || fieldDecl.isStatic)) || this.suggestLocalFields) {
            let deprecated : boolean = isDeprecated(fieldDecl) || isDeprecated(varDecl);
            let typeName : any = fieldDecl.fields.type;
            this._addLocalSuggestion_includeReturnValueSuggestions(fieldDecl.documentationComment,varDecl.name,typeName,lib3.ElementKind.FIELD,{
                isDeprecated : deprecated,relevance : DART_RELEVANCE_LOCAL_FIELD,classDecl : fieldDecl.parent});
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    declaredFunction(declaration : any) : void {
        if (this.optype.includeReturnValueSuggestions || this.optype.includeVoidReturnSuggestions) {
            let typeName : any = declaration.returnType;
            let elemKind : any;
            let relevance : number = DART_RELEVANCE_DEFAULT;
            if (declaration.isGetter) {
                elemKind = lib3.ElementKind.GETTER;
                relevance = DART_RELEVANCE_LOCAL_ACCESSOR;
            }else if (declaration.isSetter) {
                if (!this.optype.includeVoidReturnSuggestions) {
                    return;
                }
                elemKind = lib3.ElementKind.SETTER;
                typeName = NO_RETURN_TYPE;
                relevance = DART_RELEVANCE_LOCAL_ACCESSOR;
            }else {
                if (!this.optype.includeVoidReturnSuggestions && this._isVoid(typeName)) {
                    return;
                }
                elemKind = lib3.ElementKind.FUNCTION;
                relevance = DART_RELEVANCE_LOCAL_FUNCTION;
            }
            this._addLocalSuggestion_includeReturnValueSuggestions(declaration.documentationComment,declaration.name,typeName,elemKind,{
                isDeprecated : isDeprecated(declaration),param : declaration.functionExpression.parameters,relevance : relevance});
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    declaredFunctionTypeAlias(declaration : any) : void {
        if (this.optype.includeTypeNameSuggestions) {
            this._addLocalSuggestion_includeTypeNameSuggestions(declaration.documentationComment,declaration.name,declaration.returnType,lib3.ElementKind.FUNCTION_TYPE_ALIAS,{
                isAbstract : true,isDeprecated : isDeprecated(declaration)});
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    declaredLabel(label : any,isCaseLabel : boolean) : void {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    declaredLocalVar(id : any,typeName : any) : void {
        if (this.optype.includeReturnValueSuggestions) {
            this._addLocalSuggestion_includeReturnValueSuggestions(null,id,typeName,lib3.ElementKind.LOCAL_VARIABLE,{
                relevance : DART_RELEVANCE_LOCAL_VARIABLE});
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    declaredMethod(declaration : any) : void {
        if ((this.optype.includeReturnValueSuggestions || this.optype.includeVoidReturnSuggestions) && (!this.optype.inStaticMethodBody || declaration.isStatic)) {
            let elemKind : any;
            let param : any;
            let typeName : any = declaration.returnType;
            let relevance : number = DART_RELEVANCE_DEFAULT;
            if (declaration.isGetter) {
                elemKind = lib3.ElementKind.GETTER;
                param = null;
                relevance = DART_RELEVANCE_LOCAL_ACCESSOR;
            }else if (declaration.isSetter) {
                if (!this.optype.includeVoidReturnSuggestions) {
                    return;
                }
                elemKind = lib3.ElementKind.SETTER;
                typeName = NO_RETURN_TYPE;
                relevance = DART_RELEVANCE_LOCAL_ACCESSOR;
            }else {
                if (!this.optype.includeVoidReturnSuggestions && this._isVoid(typeName)) {
                    return;
                }
                elemKind = lib3.ElementKind.METHOD;
                param = declaration.parameters;
                relevance = DART_RELEVANCE_LOCAL_METHOD;
            }
            this._addLocalSuggestion_includeReturnValueSuggestions(declaration.documentationComment,declaration.name,typeName,elemKind,{
                isAbstract : declaration.isAbstract,isDeprecated : isDeprecated(declaration),classDecl : declaration.parent,param : param,relevance : relevance});
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    declaredParam(id : any,typeName : any) : void {
        if (this.optype.includeReturnValueSuggestions) {
            this._addLocalSuggestion_includeReturnValueSuggestions(null,id,typeName,lib3.ElementKind.PARAMETER,{
                relevance : DART_RELEVANCE_PARAMETER});
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    declaredTopLevelVar(varList : any,varDecl : any) : void {
        if (this.optype.includeReturnValueSuggestions) {
            this._addLocalSuggestion_includeReturnValueSuggestions(varDecl.documentationComment,varDecl.name,varList.type,lib3.ElementKind.TOP_LEVEL_VARIABLE,{
                isDeprecated : isDeprecated(varList) || isDeprecated(varDecl),relevance : DART_RELEVANCE_LOCAL_TOP_LEVEL_VARIABLE});
        }
    }
    _addLocalSuggestion(documentationComment : any,id : any,typeName : any,elemKind : any,_namedArguments? : {isAbstract? : boolean,isDeprecated? : boolean,classDecl? : any,param? : any,relevance? : number}) : void {
        let {isAbstract,isDeprecated,classDecl,param,relevance} = Object.assign({
            "isAbstract" : false,
            "isDeprecated" : false,
            "relevance" : DART_RELEVANCE_DEFAULT}, _namedArguments );
        let kind : any = this.targetIsFunctionalArgument ? CompletionSuggestionKind.IDENTIFIER : this.optype.suggestKind;
        let suggestion : any = createLocalSuggestion(id,isDeprecated,relevance,typeName,{
            classDecl : classDecl,kind : kind});
        if (suggestion != null) {
            _LocalVisitor._setDocumentation(suggestion,documentationComment);
            if (this.privateMemberRelevance != null && suggestion.completion.startsWith('_')) {
                suggestion.relevance = this.privateMemberRelevance;
            }
            this.suggestionMap.putIfAbsent(suggestion.completion,() =>  {
                return suggestion;
            });
            suggestion.element = createLocalElement(this.request.source,elemKind,id,{
                isAbstract : isAbstract,isDeprecated : isDeprecated,parameters : ((_33_)=>(!!_33_)?_33_.toSource():null)(param),returnType : typeName});
            if ((op(Op.EQUALS,elemKind,lib3.ElementKind.METHOD) || op(Op.EQUALS,elemKind,lib3.ElementKind.FUNCTION)) && param != null) {
                this._addParameterInfo(suggestion,param);
            }
        }
    }
    _addLocalSuggestion_enumConstant(constantDeclaration : any,enumDeclaration : any,_namedArguments? : {isAbstract? : boolean,isDeprecated? : boolean,relevance? : number}) : void {
        let {isAbstract,isDeprecated,relevance} = Object.assign({
            "isAbstract" : false,
            "isDeprecated" : false,
            "relevance" : DART_RELEVANCE_DEFAULT}, _namedArguments );
        let completion : string = `${enumDeclaration.name.name}.${constantDeclaration.name.name}`;
        let suggestion : any = new bare.createInstance(any,null,CompletionSuggestionKind.INVOCATION,isDeprecated ? DART_RELEVANCE_LOW : relevance,completion,new core.DartString(completion).length,0,isDeprecated,false,{
            returnType : enumDeclaration.name.name});
        this.suggestionMap.putIfAbsent(suggestion.completion,() =>  {
            return suggestion;
        });
        let flags : number = lib3.Element.makeFlags({
            isAbstract : isAbstract,isDeprecated : isDeprecated,isPrivate : Identifier.isPrivateName(constantDeclaration.name.name)});
        suggestion.element = new bare.createInstance(any,null,lib3.ElementKind.ENUM_CONSTANT,constantDeclaration.name.name,flags,{
            location : new bare.createInstance(any,null,this.request.source.fullName,constantDeclaration.name.offset,constantDeclaration.name.length,0,0)});
    }
    _addLocalSuggestion_includeReturnValueSuggestions(documentationComment : any,id : any,typeName : any,elemKind : any,_namedArguments? : {isAbstract? : boolean,isDeprecated? : boolean,classDecl? : any,param? : any,relevance? : number}) : void {
        let {isAbstract,isDeprecated,classDecl,param,relevance} = Object.assign({
            "isAbstract" : false,
            "isDeprecated" : false,
            "relevance" : DART_RELEVANCE_DEFAULT}, _namedArguments );
        relevance = this.optype.returnValueSuggestionsFilter(this._staticTypeOfIdentifier(id),relevance);
        if (relevance != null) {
            this._addLocalSuggestion(documentationComment,id,typeName,elemKind,{
                isAbstract : isAbstract,isDeprecated : isDeprecated,classDecl : classDecl,param : param,relevance : relevance});
        }
    }
    _addLocalSuggestion_includeReturnValueSuggestions_enumConstant(constantDeclaration : any,enumDeclaration : any,_namedArguments? : {isAbstract? : boolean,isDeprecated? : boolean,relevance? : number}) : void {
        let {isAbstract,isDeprecated,relevance} = Object.assign({
            "isAbstract" : false,
            "isDeprecated" : false,
            "relevance" : DART_RELEVANCE_DEFAULT}, _namedArguments );
        let classElement : any = resolutionMap.elementDeclaredByEnumDeclaration(enumDeclaration);
        relevance = this.optype.returnValueSuggestionsFilter(((t)=>(!!t)?t.type:null)(classElement),relevance);
        if (relevance != null) {
            this._addLocalSuggestion_enumConstant(constantDeclaration,enumDeclaration,{
                isAbstract : isAbstract,isDeprecated : isDeprecated,relevance : relevance});
        }
    }
    _addLocalSuggestion_includeTypeNameSuggestions(documentationComment : any,id : any,typeName : any,elemKind : any,_namedArguments? : {isAbstract? : boolean,isDeprecated? : boolean,classDecl? : any,param? : any,relevance? : number}) : void {
        let {isAbstract,isDeprecated,classDecl,param,relevance} = Object.assign({
            "isAbstract" : false,
            "isDeprecated" : false,
            "relevance" : DART_RELEVANCE_DEFAULT}, _namedArguments );
        relevance = this.optype.typeNameSuggestionsFilter(this._staticTypeOfIdentifier(id),relevance);
        if (relevance != null) {
            this._addLocalSuggestion(documentationComment,id,typeName,elemKind,{
                isAbstract : isAbstract,isDeprecated : isDeprecated,classDecl : classDecl,param : param,relevance : relevance});
        }
    }
    _addParameterInfo(suggestion : any,parameters : any) : void {
        let paramList = parameters.parameters;
        suggestion.parameterNames = paramList.map((param : any) =>  {
            return param.identifier.name;
        }).toList();
        suggestion.parameterTypes = paramList.map((param : any) =>  {
            let type : any = null;
            if (is(param, any)) {
                let child : any = param.parameter;
                if (is(child, any)) {
                    type = child.type;
                }else if (is(child, any)) {
                    type = child.type;
                }
            }
            if (is(param, any)) {
                type = param.type;
            }else if (is(param, any)) {
                type = param.type;
            }
            if (op(Op.EQUALS,type,null)) {
                return 'dynamic';
            }
            if (is(type, any)) {
                let typeId : any = type.name;
                if (op(Op.EQUALS,typeId,null)) {
                    return 'dynamic';
                }
                return typeId.name;
            }
            return 'dynamic';
        }).toList();
        let requiredParameters : core.DartIterable<any> = paramList.where((param : any) =>  {
            return op(Op.EQUALS,param.kind,ParameterKind.REQUIRED);
        }).map((p : any) =>  {
            return p.element;
        });
        suggestion.requiredParameterCount = requiredParameters.length;
        let namedParameters : core.DartIterable<any> = paramList.where((param : any) =>  {
            return op(Op.EQUALS,param.kind,ParameterKind.NAMED);
        }).map((p : any) =>  {
            return p.element;
        });
        suggestion.hasNamedParameters = namedParameters.isNotEmpty;
        addDefaultArgDetails(suggestion,null,requiredParameters,namedParameters,this.request.ideOptions);
    }
    _isVoid(returnType : any) : boolean {
        if (is(returnType, any)) {
            let id : any = returnType.name;
            if (id != null && op(Op.EQUALS,id.name,'void')) {
                return true;
            }
        }
        return false;
    }
    _staticTypeOfIdentifier(id : any) : any {
        if (is(id.staticElement, any)) {
            return (id.staticElement as any).type;
        }else {
            return id.staticType;
        }
    }
    static _setDocumentation(suggestion : any,documentationComment : any) : void {
        if (documentationComment != null) {
            let text : string = documentationComment.tokens.map((t : any) =>  {
                return t.toString();
            }).join('\n').replaceAll('\n','\n');
            let doc : string = removeDartDocDelimiters(text);
            suggestion.docComplete = doc;
            suggestion.docSummary = getDartDocSummary(doc);
        }
    }
}

export class properties {
}
