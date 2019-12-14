/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/services/refactoring/rename_constructor.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace RenameConstructorRefactoringImpl {
    export type Constructors = 'RenameConstructorRefactoringImpl';
    export type Interface = Omit<RenameConstructorRefactoringImpl, Constructors>;
}
@DartClass
export class RenameConstructorRefactoringImpl extends any {
    astProvider : any;

    constructor(searchEngine : any,astProvider : any,element : any) {
    }
    @defaultConstructor
    RenameConstructorRefactoringImpl(searchEngine : any,astProvider : any,element : any) {
        super.DartObject(searchEngine,element);
        this.astProvider = astProvider;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get element() : any {
        return super.element as any;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get refactoringName() : string {
        return "Rename Constructor";
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    checkFinalConditions() : async.Future<any> {
        let result : any = new bare.createInstance(any,null);
        return new async.Future.value(result);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    checkNewName() : any {
        let result : any = super.checkNewName();
        result.addStatus(validateConstructorName(newName));
        if (newName != null) {
            this._analyzePossibleConflicts(result);
        }
        return result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    fillChange() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let matches : core.DartList<any> = await searchEngine.searchReferences(this.element);
            let references : core.DartList<any> = getSourceReferences(matches);
            if (this.element.isSynthetic) {
                await this._replaceSynthetic();
            }else {
                references.add(this._createDeclarationReference());
            }
            let replacement : string = newName.isEmpty ? '' : `.${newName}`;
            for(let reference of references) {
                reference.addEdit(change,replacement);
            }
        } )());
    }

    _analyzePossibleConflicts(result : any) : void {
        let parentClass : any = this.element.enclosingElement;
        if (op(Op.EQUALS,parentClass.name,newName)) {
            result.addError('The constructor should not have the same name ' + 'as the name of the enclosing class.');
        }
        for(let newNameMember of getChildren(parentClass,newName)) {
            let message : string = format("Class '{0}' already declares {1} with name '{2}'.",parentClass.displayName,getElementKindName(newNameMember),newName);
            result.addError(message,newLocation_fromElement(newNameMember));
        }
    }
    _createDeclarationReference() : any {
        let sourceRange : any;
        let offset : number = this.element.periodOffset;
        if (offset != null) {
            sourceRange = range.startOffsetEndOffset(offset,this.element.nameEnd);
        }else {
            sourceRange = new bare.createInstance(any,null,this.element.nameEnd,0);
        }
        return new bare.createInstance(any,null,new bare.createInstance(any,null,this.element.context,this.element.library.source.uri.toString(),this.element.source.uri.toString(),MatchKind.DECLARATION,sourceRange,true,true));
    }
    _replaceSynthetic() : async.Future<core.Null> { 
        return new async.Future.fromPromise(( async () =>  {
            let classElement : any = this.element.enclosingElement;
            let name : any = await this.astProvider.getResolvedNameForElement(classElement);
            let classNode : any = name.parent as any;
            let utils : any = new bare.createInstance(any,null,classNode.parent);
            let location : any = utils.prepareNewConstructorLocation(classNode);
            doSourceChange_addElementEdit(change,classElement,new bare.createInstance(any,null,location.offset,0,op(Op.PLUS,op(Op.PLUS,location.prefix,`${classElement.name}.${newName}();`),location.suffix)));
        } )());
    }

}

export class properties {
}
