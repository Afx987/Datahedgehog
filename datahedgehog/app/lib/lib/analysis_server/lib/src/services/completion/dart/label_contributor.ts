/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/services/completion/dart/label_contributor.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/analyzer_plugin/lib/protocol/protocol_common";

export namespace LabelContributor {
    export type Constructors = 'LabelContributor';
    export type Interface = Omit<LabelContributor, Constructors>;
}
@DartClass
export class LabelContributor extends any {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeSuggestions(request : any) : async.Future<core.DartList<any>> { 
        return new async.Future.fromPromise(( async () =>  {
            let optype : any = (request as any).opType;
            let suggestions : core.DartList<any> = new core.DartList.literal<any>();
            if (!optype.isPrefixed) {
                if (optype.includeStatementLabelSuggestions || optype.includeCaseLabelSuggestions) {
                    new _LabelVisitor(request,optype.includeStatementLabelSuggestions,optype.includeCaseLabelSuggestions,suggestions).visit(request.target.containingNode);
                }
            }
            return suggestions;
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    LabelContributor() {
    }
}

export namespace _LabelVisitor {
    export type Constructors = '_LabelVisitor';
    export type Interface = Omit<_LabelVisitor, Constructors>;
}
@DartClass
export class _LabelVisitor extends any {
    request : any;

    suggestions : core.DartList<any>;

    includeStatementLabels : boolean;

    includeCaseLabels : boolean;

    constructor(request : any,includeStatementLabels : boolean,includeCaseLabels : boolean,suggestions : core.DartList<any>) {
    }
    @defaultConstructor
    _LabelVisitor(request : any,includeStatementLabels : boolean,includeCaseLabels : boolean,suggestions : core.DartList<any>) {
        this.request = request;
        super.DartObject(request.offset);
        this.includeStatementLabels = includeStatementLabels;
        this.includeCaseLabels = includeCaseLabels;
        this.suggestions = suggestions;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    declaredClass(declaration : any) : void {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    declaredClassTypeAlias(declaration : any) : void {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    declaredField(fieldDecl : any,varDecl : any) : void {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    declaredFunction(declaration : any) : void {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    declaredFunctionTypeAlias(declaration : any) : void {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    declaredLabel(label : any,isCaseLabel : boolean) : void {
        if (isCaseLabel ? this.includeCaseLabels : this.includeStatementLabels) {
            let suggestion : any = this._addSuggestion(label.label);
            if (suggestion != null) {
                suggestion.element = createLocalElement(this.request.source,lib3.ElementKind.LABEL,label.label,{
                    returnType : NO_RETURN_TYPE});
            }
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    declaredLocalVar(name : any,type : any) : void {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    declaredMethod(declaration : any) : void {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    declaredParam(name : any,type : any) : void {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    declaredTopLevelVar(varList : any,varDecl : any) : void {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitFunctionExpression(node : any) : void {
        finished();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitMethodDeclaration(node : any) : void {
        finished();
    }
    _addSuggestion(id : any) : any {
        if (id != null) {
            let completion : string = id.name;
            if (completion != null && new core.DartString(completion).length > 0 && completion != '_') {
                let suggestion : any = new bare.createInstance(any,null,CompletionSuggestionKind.IDENTIFIER,DART_RELEVANCE_DEFAULT,completion,new core.DartString(completion).length,0,false,false);
                this.suggestions.add(suggestion);
                return suggestion;
            }
        }
        return null;
    }
}

export class properties {
}
