/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/services/refactoring/rename_unit_member.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var validateCreateFunction : (searchEngine : any,library : any,name : string) => async.Future<any> = (searchEngine : any,library : any,name : string) : async.Future<any> =>  {
    return new _RenameUnitMemberValidator.forCreate(searchEngine,library,ElementKind.FUNCTION,name).validate();
};
export var validateRenameTopLevel : (searchEngine : any,element : any,name : string) => async.Future<any> = (searchEngine : any,element : any,name : string) : async.Future<any> =>  {
    return new _RenameUnitMemberValidator.forRename(searchEngine,element,name).validate();
};
export namespace RenameUnitMemberRefactoringImpl {
    export type Constructors = 'RenameUnitMemberRefactoringImpl';
    export type Interface = Omit<RenameUnitMemberRefactoringImpl, Constructors>;
}
@DartClass
export class RenameUnitMemberRefactoringImpl extends any {
    constructor(searchEngine : any,element : any) {
    }
    @defaultConstructor
    RenameUnitMemberRefactoringImpl(searchEngine : any,element : any) {
        super.DartObject(searchEngine,element);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get refactoringName() : string {
        if (is(element, any)) {
            return "Rename Top-Level Function";
        }
        if (is(element, any)) {
            return "Rename Function Type Alias";
        }
        if (is(element, any)) {
            return "Rename Top-Level Variable";
        }
        return "Rename Class";
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    checkFinalConditions() : async.Future<any> {
        return validateRenameTopLevel(searchEngine,element,newName);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    checkNewName() : any {
        let result : any = super.checkNewName();
        if (is(element, any)) {
            result.addStatus(validateVariableName(newName));
        }
        if (is(element, any)) {
            result.addStatus(validateFunctionName(newName));
        }
        if (is(element, any)) {
            result.addStatus(validateFunctionTypeAliasName(newName));
        }
        if (is(element, any)) {
            result.addStatus(validateClassName(newName));
        }
        return result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    fillChange() : async.Future<any> {
        let elements : core.DartList<any> = new core.DartList.literal();
        if (is(element, any) && element.isSynthetic) {
            let property : any = element as any;
            let getter : any = property.getter;
            let setter : any = property.setter;
            if (getter != null) {
                elements.add(getter);
            }
            if (setter != null) {
                elements.add(setter);
            }
        }else {
            elements.add(element);
        }
        return async.Future.forEach(elements,(element : any) =>  {
            addDeclarationEdit(element);
            return searchEngine.searchReferences(element).then(addReferenceEdits);
        });
    }
}

export namespace _RenameUnitMemberValidator {
    export type Constructors = 'forCreate' | 'forRename';
    export type Interface = Omit<_RenameUnitMemberValidator, Constructors>;
}
@DartClass
export class _RenameUnitMemberValidator {
    searchEngine : any;

    library : any;

    element : any;

    elementKind : any;

    name : string;

    isRename : boolean;

    references : core.DartList<any>;

    result : any;

    @namedConstructor
    forCreate(searchEngine : any,library : any,elementKind : any,name : string) {
        this.references = new core.DartList.literal<any>();
        this.result = new bare.createInstance(any,null);
        this.isRename = false;
        this.searchEngine = searchEngine;
        this.library = library;
        this.elementKind = elementKind;
        this.name = name;
    }
    static forCreate : new(searchEngine : any,library : any,elementKind : any,name : string) => _RenameUnitMemberValidator;

    @namedConstructor
    forRename(searchEngine : any,element : any,name : string) {
        this.references = new core.DartList.literal<any>();
        this.result = new bare.createInstance(any,null);
        this.isRename = true;
        this.searchEngine = searchEngine;
        this.element = element;
        this.name = name;
        this.library = this.element.library;
        this.elementKind = this.element.kind;
    }
    static forRename : new(searchEngine : any,element : any,name : string) => _RenameUnitMemberValidator;

    validate() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this._validateWillConflict();
            if (this.isRename) {
                this.references = await this.searchEngine.searchReferences(this.element);
                this._validateWillBeInvisible();
                this._validateWillBeShadowed();
            }
            await this._validateWillShadow();
            return this.result;
        } )());
    }

    _isVisibleAt(element : any,at : any) : boolean {
        let atLibrary : any = at.element.library;
        if (op(Op.EQUALS,this.library,atLibrary)) {
            return true;
        }
        for(let importElement of atLibrary.imports) {
            if (importElement.prefix != null) {
                continue;
            }
            if (getImportNamespace(importElement).containsValue(element)) {
                return true;
            }
        }
        return false;
    }
    _validateWillBeInvisible() : void {
        if (!Identifier.isPrivateName(this.name)) {
            return;
        }
        for(let reference of this.references) {
            let refElement : any = reference.element;
            let refLibrary : any = refElement.library;
            if (refLibrary != this.library) {
                let message : string = format("Renamed {0} will be invisible in '{1}'.",getElementKindName(this.element),getElementQualifiedName(refLibrary));
                this.result.addError(message,newLocation_fromMatch(reference));
            }
        }
    }
    _validateWillBeShadowed() : void {
        for(let reference of this.references) {
            let refElement : any = reference.element;
            let refClass : any = refElement.getAncestor((e : any) =>  {
                return is(e, any);
            });
            if (refClass != null) {
                visitChildren(refClass,(shadow : any) =>  {
                    if (hasDisplayName(shadow,this.name)) {
                        let message : string = format("Reference to renamed {0} will be shadowed by {1} '{2}'.",getElementKindName(this.element),getElementKindName(shadow),getElementQualifiedName(shadow));
                        this.result.addError(message,newLocation_fromElement(shadow));
                    }
                });
            }
        }
    }
    _validateWillConflict() : void {
        visitLibraryTopLevelElements(this.library,(element : any) =>  {
            if (hasDisplayName(element,this.name)) {
                let message : string = format("Library already declares {0} with name '{1}'.",getElementKindName(element),this.name);
                this.result.addError(message,newLocation_fromElement(element));
            }
        });
    }
    _validateWillShadow() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let declarations : core.DartList<any> = await this.searchEngine.searchMemberDeclarations(this.name);
            for(let declaration of declarations) {
                let member : any = declaration.element;
                let declaringClass : any = member.enclosingElement;
                let memberReferences : core.DartList<any> = await this.searchEngine.searchReferences(member);
                for(let memberReference of memberReferences) {
                    let refElement : any = memberReference.element;
                    if (memberReference.isQualified) {
                        continue;
                    }
                    let refClass : any = refElement.getAncestor((e : any) =>  {
                        return is(e, any);
                    });
                    if (op(Op.EQUALS,refClass,declaringClass)) {
                        continue;
                    }
                    if (!this._isVisibleAt(this.element,memberReference)) {
                        continue;
                    }
                    let message : string = format(this.isRename ? "Renamed {0} will shadow {1} '{2}'." : "Created {0} will shadow {1} '{2}'.",this.elementKind.displayName,getElementKindName(member),getElementQualifiedName(member));
                    this.result.addError(message,newLocation_fromMatch(memberReference));
                }
            }
        } )());
    }

}

export class properties {
}
