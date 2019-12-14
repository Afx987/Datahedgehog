/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/fasta/parser/identifier_context.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace IdentifierContext {
    export type Constructors = '_';
    export type Interface = Omit<IdentifierContext, Constructors>;
}
@DartClass
export class IdentifierContext {
    private static __$importPrefixDeclaration;
    static get importPrefixDeclaration() { 
        if (this.__$importPrefixDeclaration===undefined) {
            this.__$importPrefixDeclaration = new IdentifierContext._('importPrefixDeclaration',{
                inDeclaration : true,isBuiltInIdentifierAllowed : false});
        }
        return this.__$importPrefixDeclaration;
    }

    private static __$dottedName;
    static get dottedName() { 
        if (this.__$dottedName===undefined) {
            this.__$dottedName = new IdentifierContext._('dottedName');
        }
        return this.__$dottedName;
    }

    private static __$dottedNameContinuation;
    static get dottedNameContinuation() { 
        if (this.__$dottedNameContinuation===undefined) {
            this.__$dottedNameContinuation = new IdentifierContext._('dottedNameContinuation',{
                isContinuation : true});
        }
        return this.__$dottedNameContinuation;
    }

    private static __$combinator;
    static get combinator() { 
        if (this.__$combinator===undefined) {
            this.__$combinator = new IdentifierContext._('combinator');
        }
        return this.__$combinator;
    }

    private static __$metadataReference;
    static get metadataReference() { 
        if (this.__$metadataReference===undefined) {
            this.__$metadataReference = new IdentifierContext._('metadataReference',{
                isScopeReference : true});
        }
        return this.__$metadataReference;
    }

    private static __$metadataContinuation;
    static get metadataContinuation() { 
        if (this.__$metadataContinuation===undefined) {
            this.__$metadataContinuation = new IdentifierContext._('metadataContinuation',{
                isContinuation : true});
        }
        return this.__$metadataContinuation;
    }

    private static __$metadataContinuationAfterTypeArguments;
    static get metadataContinuationAfterTypeArguments() { 
        if (this.__$metadataContinuationAfterTypeArguments===undefined) {
            this.__$metadataContinuationAfterTypeArguments = new IdentifierContext._('metadataContinuationAfterTypeArguments',{
                isContinuation : true});
        }
        return this.__$metadataContinuationAfterTypeArguments;
    }

    private static __$typedefDeclaration;
    static get typedefDeclaration() { 
        if (this.__$typedefDeclaration===undefined) {
            this.__$typedefDeclaration = new IdentifierContext._('typedefDeclaration',{
                inDeclaration : true,isBuiltInIdentifierAllowed : false});
        }
        return this.__$typedefDeclaration;
    }

    private static __$fieldInitializer;
    static get fieldInitializer() { 
        if (this.__$fieldInitializer===undefined) {
            this.__$fieldInitializer = new IdentifierContext._('fieldInitializer',{
                isContinuation : true});
        }
        return this.__$fieldInitializer;
    }

    private static __$formalParameterDeclaration;
    static get formalParameterDeclaration() { 
        if (this.__$formalParameterDeclaration===undefined) {
            this.__$formalParameterDeclaration = new IdentifierContext._('formalParameterDeclaration',{
                inDeclaration : true});
        }
        return this.__$formalParameterDeclaration;
    }

    private static __$libraryName;
    static get libraryName() { 
        if (this.__$libraryName===undefined) {
            this.__$libraryName = new IdentifierContext._('libraryName',{
                inLibraryOrPartOfDeclaration : true});
        }
        return this.__$libraryName;
    }

    private static __$libraryNameContinuation;
    static get libraryNameContinuation() { 
        if (this.__$libraryNameContinuation===undefined) {
            this.__$libraryNameContinuation = new IdentifierContext._('libraryNameContinuation',{
                inLibraryOrPartOfDeclaration : true,isContinuation : true});
        }
        return this.__$libraryNameContinuation;
    }

    private static __$partName;
    static get partName() { 
        if (this.__$partName===undefined) {
            this.__$partName = new IdentifierContext._('partName',{
                inLibraryOrPartOfDeclaration : true});
        }
        return this.__$partName;
    }

    private static __$partNameContinuation;
    static get partNameContinuation() { 
        if (this.__$partNameContinuation===undefined) {
            this.__$partNameContinuation = new IdentifierContext._('partNameContinuation',{
                inLibraryOrPartOfDeclaration : true,isContinuation : true});
        }
        return this.__$partNameContinuation;
    }

    private static __$enumDeclaration;
    static get enumDeclaration() { 
        if (this.__$enumDeclaration===undefined) {
            this.__$enumDeclaration = new IdentifierContext._('enumDeclaration',{
                inDeclaration : true,isBuiltInIdentifierAllowed : false});
        }
        return this.__$enumDeclaration;
    }

    private static __$enumValueDeclaration;
    static get enumValueDeclaration() { 
        if (this.__$enumValueDeclaration===undefined) {
            this.__$enumValueDeclaration = new IdentifierContext._('enumValueDeclaration',{
                inDeclaration : true});
        }
        return this.__$enumValueDeclaration;
    }

    private static __$namedMixinDeclaration;
    static get namedMixinDeclaration() { 
        if (this.__$namedMixinDeclaration===undefined) {
            this.__$namedMixinDeclaration = new IdentifierContext._('namedMixinDeclaration',{
                inDeclaration : true,isBuiltInIdentifierAllowed : false});
        }
        return this.__$namedMixinDeclaration;
    }

    private static __$classDeclaration;
    static get classDeclaration() { 
        if (this.__$classDeclaration===undefined) {
            this.__$classDeclaration = new IdentifierContext._('classDeclaration',{
                inDeclaration : true,isBuiltInIdentifierAllowed : false});
        }
        return this.__$classDeclaration;
    }

    private static __$typeVariableDeclaration;
    static get typeVariableDeclaration() { 
        if (this.__$typeVariableDeclaration===undefined) {
            this.__$typeVariableDeclaration = new IdentifierContext._('typeVariableDeclaration',{
                inDeclaration : true,isBuiltInIdentifierAllowed : false});
        }
        return this.__$typeVariableDeclaration;
    }

    private static __$prefixedTypeReference;
    static get prefixedTypeReference() { 
        if (this.__$prefixedTypeReference===undefined) {
            this.__$prefixedTypeReference = new IdentifierContext._('prefixedTypeReference',{
                isScopeReference : true,isBuiltInIdentifierAllowed : true});
        }
        return this.__$prefixedTypeReference;
    }

    private static __$typeReference;
    static get typeReference() { 
        if (this.__$typeReference===undefined) {
            this.__$typeReference = new IdentifierContext._('typeReference',{
                isScopeReference : true,isBuiltInIdentifierAllowed : false});
        }
        return this.__$typeReference;
    }

    private static __$typeReferenceContinuation;
    static get typeReferenceContinuation() { 
        if (this.__$typeReferenceContinuation===undefined) {
            this.__$typeReferenceContinuation = new IdentifierContext._('typeReferenceContinuation',{
                isContinuation : true,isBuiltInIdentifierAllowed : false});
        }
        return this.__$typeReferenceContinuation;
    }

    private static __$topLevelVariableDeclaration;
    static get topLevelVariableDeclaration() { 
        if (this.__$topLevelVariableDeclaration===undefined) {
            this.__$topLevelVariableDeclaration = new IdentifierContext._('topLevelVariableDeclaration',{
                inDeclaration : true});
        }
        return this.__$topLevelVariableDeclaration;
    }

    private static __$fieldDeclaration;
    static get fieldDeclaration() { 
        if (this.__$fieldDeclaration===undefined) {
            this.__$fieldDeclaration = new IdentifierContext._('fieldDeclaration',{
                inDeclaration : true});
        }
        return this.__$fieldDeclaration;
    }

    private static __$topLevelFunctionDeclaration;
    static get topLevelFunctionDeclaration() { 
        if (this.__$topLevelFunctionDeclaration===undefined) {
            this.__$topLevelFunctionDeclaration = new IdentifierContext._('topLevelFunctionDeclaration',{
                inDeclaration : true});
        }
        return this.__$topLevelFunctionDeclaration;
    }

    private static __$methodDeclaration;
    static get methodDeclaration() { 
        if (this.__$methodDeclaration===undefined) {
            this.__$methodDeclaration = new IdentifierContext._('methodDeclaration',{
                inDeclaration : true});
        }
        return this.__$methodDeclaration;
    }

    private static __$methodDeclarationContinuation;
    static get methodDeclarationContinuation() { 
        if (this.__$methodDeclarationContinuation===undefined) {
            this.__$methodDeclarationContinuation = new IdentifierContext._('methodDeclarationContinuation',{
                inDeclaration : true,isContinuation : true});
        }
        return this.__$methodDeclarationContinuation;
    }

    private static __$operatorName;
    static get operatorName() { 
        if (this.__$operatorName===undefined) {
            this.__$operatorName = new IdentifierContext._('operatorName');
        }
        return this.__$operatorName;
    }

    private static __$localAccessorDeclaration;
    static get localAccessorDeclaration() { 
        if (this.__$localAccessorDeclaration===undefined) {
            this.__$localAccessorDeclaration = new IdentifierContext._('localAccessorDeclaration',{
                inDeclaration : true});
        }
        return this.__$localAccessorDeclaration;
    }

    private static __$localFunctionDeclaration;
    static get localFunctionDeclaration() { 
        if (this.__$localFunctionDeclaration===undefined) {
            this.__$localFunctionDeclaration = new IdentifierContext._('localFunctionDeclaration',{
                inDeclaration : true});
        }
        return this.__$localFunctionDeclaration;
    }

    private static __$localFunctionDeclarationContinuation;
    static get localFunctionDeclarationContinuation() { 
        if (this.__$localFunctionDeclarationContinuation===undefined) {
            this.__$localFunctionDeclarationContinuation = new IdentifierContext._('localFunctionDeclarationContinuation',{
                inDeclaration : true,isContinuation : true});
        }
        return this.__$localFunctionDeclarationContinuation;
    }

    private static __$functionExpressionName;
    static get functionExpressionName() { 
        if (this.__$functionExpressionName===undefined) {
            this.__$functionExpressionName = new IdentifierContext._('functionExpressionName');
        }
        return this.__$functionExpressionName;
    }

    private static __$constructorReference;
    static get constructorReference() { 
        if (this.__$constructorReference===undefined) {
            this.__$constructorReference = new IdentifierContext._('constructorReference',{
                isScopeReference : true});
        }
        return this.__$constructorReference;
    }

    private static __$constructorReferenceContinuation;
    static get constructorReferenceContinuation() { 
        if (this.__$constructorReferenceContinuation===undefined) {
            this.__$constructorReferenceContinuation = new IdentifierContext._('constructorReferenceContinuation',{
                isContinuation : true});
        }
        return this.__$constructorReferenceContinuation;
    }

    private static __$constructorReferenceContinuationAfterTypeArguments;
    static get constructorReferenceContinuationAfterTypeArguments() { 
        if (this.__$constructorReferenceContinuationAfterTypeArguments===undefined) {
            this.__$constructorReferenceContinuationAfterTypeArguments = new IdentifierContext._('constructorReferenceContinuationAfterTypeArguments',{
                isContinuation : true});
        }
        return this.__$constructorReferenceContinuationAfterTypeArguments;
    }

    private static __$labelDeclaration;
    static get labelDeclaration() { 
        if (this.__$labelDeclaration===undefined) {
            this.__$labelDeclaration = new IdentifierContext._('labelDeclaration',{
                inDeclaration : true});
        }
        return this.__$labelDeclaration;
    }

    private static __$literalSymbol;
    static get literalSymbol() { 
        if (this.__$literalSymbol===undefined) {
            this.__$literalSymbol = new IdentifierContext._('literalSymbol',{
                inSymbol : true});
        }
        return this.__$literalSymbol;
    }

    private static __$literalSymbolContinuation;
    static get literalSymbolContinuation() { 
        if (this.__$literalSymbolContinuation===undefined) {
            this.__$literalSymbolContinuation = new IdentifierContext._('literalSymbolContinuation',{
                inSymbol : true,isContinuation : true});
        }
        return this.__$literalSymbolContinuation;
    }

    private static __$expression;
    static get expression() { 
        if (this.__$expression===undefined) {
            this.__$expression = new IdentifierContext._('expression',{
                isScopeReference : true});
        }
        return this.__$expression;
    }

    private static __$expressionContinuation;
    static get expressionContinuation() { 
        if (this.__$expressionContinuation===undefined) {
            this.__$expressionContinuation = new IdentifierContext._('expressionContinuation',{
                isContinuation : true});
        }
        return this.__$expressionContinuation;
    }

    private static __$namedArgumentReference;
    static get namedArgumentReference() { 
        if (this.__$namedArgumentReference===undefined) {
            this.__$namedArgumentReference = new IdentifierContext._('namedArgumentReference',{
                allowedInConstantExpression : true});
        }
        return this.__$namedArgumentReference;
    }

    private static __$localVariableDeclaration;
    static get localVariableDeclaration() { 
        if (this.__$localVariableDeclaration===undefined) {
            this.__$localVariableDeclaration = new IdentifierContext._('localVariableDeclaration',{
                inDeclaration : true});
        }
        return this.__$localVariableDeclaration;
    }

    private static __$labelReference;
    static get labelReference() { 
        if (this.__$labelReference===undefined) {
            this.__$labelReference = new IdentifierContext._('labelReference');
        }
        return this.__$labelReference;
    }

    _name : string;

    inDeclaration : boolean;

    inLibraryOrPartOfDeclaration : boolean;

    inSymbol : boolean;

    isContinuation : boolean;

    isScopeReference : boolean;

    isBuiltInIdentifierAllowed : boolean;

    allowedInConstantExpression : boolean;

    @namedConstructor
    _(_name : string,_namedArguments? : {inDeclaration? : boolean,inLibraryOrPartOfDeclaration? : boolean,inSymbol? : boolean,isContinuation? : boolean,isScopeReference? : boolean,isBuiltInIdentifierAllowed? : boolean,allowedInConstantExpression? : boolean}) {
        let {inDeclaration,inLibraryOrPartOfDeclaration,inSymbol,isContinuation,isScopeReference,isBuiltInIdentifierAllowed,allowedInConstantExpression} = Object.assign({
            "inDeclaration" : false,
            "inLibraryOrPartOfDeclaration" : false,
            "inSymbol" : false,
            "isContinuation" : false,
            "isScopeReference" : false,
            "isBuiltInIdentifierAllowed" : true}, _namedArguments );
        this.allowedInConstantExpression = (allowedInConstantExpression || (inDeclaration || isContinuation || inSymbol));
        this._name = _name;
        this.inDeclaration = inDeclaration;
        this.inLibraryOrPartOfDeclaration = inLibraryOrPartOfDeclaration;
        this.inSymbol = inSymbol;
        this.isContinuation = isContinuation;
        this.isScopeReference = isScopeReference;
        this.isBuiltInIdentifierAllowed = isBuiltInIdentifierAllowed;
    }
    static _ : new(_name : string,_namedArguments? : {inDeclaration? : boolean,inLibraryOrPartOfDeclaration? : boolean,inSymbol? : boolean,isContinuation? : boolean,isScopeReference? : boolean,isBuiltInIdentifierAllowed? : boolean,allowedInConstantExpression? : boolean}) => IdentifierContext;

    toString() : string {
        return this._name;
    }
}

export class properties {
}
