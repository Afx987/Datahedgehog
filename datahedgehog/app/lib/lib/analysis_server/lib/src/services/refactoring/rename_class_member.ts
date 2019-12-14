/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/services/refactoring/rename_class_member.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var validateCreateMethod : (searchEngine : any,classElement : any,name : string) => async.Future<any> = (searchEngine : any,classElement : any,name : string) : async.Future<any> =>  {
    return new _ClassMemberValidator.forCreate(searchEngine,classElement,name).validate();
};
export namespace RenameClassMemberRefactoringImpl {
    export type Constructors = 'RenameClassMemberRefactoringImpl';
    export type Interface = Omit<RenameClassMemberRefactoringImpl, Constructors>;
}
@DartClass
export class RenameClassMemberRefactoringImpl extends any {
    _validator : _ClassMemberValidator;

    constructor(searchEngine : any,element : any) {
    }
    @defaultConstructor
    RenameClassMemberRefactoringImpl(searchEngine : any,element : any) {
        super.DartObject(searchEngine,element);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get refactoringName() : string {
        if (is(element, any)) {
            return "Rename Type Parameter";
        }
        if (is(element, any)) {
            return "Rename Field";
        }
        return "Rename Method";
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    checkFinalConditions() : async.Future<any> {
        this._validator = new _ClassMemberValidator.forRename(searchEngine,element,newName);
        return this._validator.validate();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    checkInitialConditions() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let result : any = await super.checkInitialConditions();
            if (is(element, any) && (element as any).isOperator) {
                result.addFatalError('Cannot rename operator.');
            }
            return new async.Future.value(result);
        } )());
    }

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    checkNewName() : any {
        let result : any = super.checkNewName();
        if (is(element, any)) {
            result.addStatus(validateFieldName(newName));
        }
        if (is(element, any)) {
            result.addStatus(validateMethodName(newName));
        }
        return result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    fillChange() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            for(let renameElement of this._validator.elements) {
                if (renameElement.isSynthetic && is(renameElement, any)) {
                    addDeclarationEdit(renameElement.getter);
                    addDeclarationEdit(renameElement.setter);
                }else {
                    addDeclarationEdit(renameElement);
                }
            }
            addReferenceEdits(this._validator.references);
            let nameMatches : core.DartList<any> = await searchEngine.searchMemberReferences(oldName);
            let nameRefs : core.DartList<any> = getSourceReferences(nameMatches);
            for(let reference of nameRefs) {
                if (isElementInSdkOrPubCache(reference.element)) {
                    continue;
                }
                {
                    let whereLibrary : any = reference.element.library;
                    if (!element.isAccessibleIn(whereLibrary)) {
                        continue;
                    }
                }
                reference.addEdit(change,newName,{
                    id : this._newPotentialId()});
            }
        } )());
    }

    _newPotentialId() : string {
        let id : string = potentialEditIds.length.toString();
        potentialEditIds.add(id);
        return id;
    }
}

export namespace _ClassMemberValidator {
    export type Constructors = 'forCreate' | 'forRename';
    export type Interface = Omit<_ClassMemberValidator, Constructors>;
}
@DartClass
export class _ClassMemberValidator {
    searchEngine : any;

    library : any;

    element : any;

    elementClass : any;

    elementKind : any;

    name : string;

    isRename : boolean;

    result : any;

    elements : core.DartSet<any>;

    references : core.DartList<any>;

    @namedConstructor
    forCreate(searchEngine : any,elementClass : any,name : string) {
        this.result = new bare.createInstance(any,null);
        this.elements = new core.DartSet<any>();
        this.references = new core.DartList.literal<any>();
        this.isRename = false;
        this.library = null;
        this.element = null;
        this.elementKind = ElementKind.METHOD;
        this.searchEngine = searchEngine;
        this.elementClass = elementClass;
        this.name = name;
    }
    static forCreate : new(searchEngine : any,elementClass : any,name : string) => _ClassMemberValidator;

    @namedConstructor
    forRename(searchEngine : any,element : any,name : string) {
        this.result = new bare.createInstance(any,null);
        this.elements = new core.DartSet<any>();
        this.references = new core.DartList.literal<any>();
        this.isRename = true;
        this.library = element.library;
        this.element = element;
        this.elementClass = element.enclosingElement;
        this.elementKind = element.kind;
        this.searchEngine = searchEngine;
        this.name = name;
    }
    static forRename : new(searchEngine : any,element : any,name : string) => _ClassMemberValidator;

    validate() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            for(let newNameMember of getChildren(this.elementClass,this.name)) {
                this.result.addError(format("Class '{0}' already declares {1} with name '{2}'.",this.elementClass.displayName,getElementKindName(newNameMember),this.name),newLocation_fromElement(newNameMember));
            }
            let superClasses : core.DartSet<any> = getSuperClasses(this.elementClass);
            await this._prepareReferences();
            let subClasses : core.DartSet<any> = await this.searchEngine.searchAllSubtypes(this.elementClass);
            if (this.element != null) {
                for(let element of this.elements) {
                    let clazz : any = element.enclosingElement;
                    if (op(Op.EQUALS,clazz.name,this.name)) {
                        this.result.addError(format("Renamed {0} has the same name as the declaring class '{1}'.",this.elementKind.displayName,this.name),newLocation_fromElement(element));
                    }
                }
            }else {
                if (op(Op.EQUALS,this.elementClass.name,this.name)) {
                    this.result.addError(format("Created {0} has the same name as the declaring class '{1}'.",this.elementKind.displayName,this.name),newLocation_fromElement(this.elementClass));
                }
            }
            {
                let conflict : _MatchShadowedByLocal = this._getShadowingLocalElement();
                if (conflict != null) {
                    let localElement : any = conflict.localElement;
                    this.result.addError(format("Usage of renamed {0} will be shadowed by {1} '{2}'.",this.elementKind.displayName,getElementKindName(localElement),localElement.displayName),newLocation_fromMatch(conflict.match));
                }
            }
            let declarations : core.DartList<any> = await this.searchEngine.searchMemberDeclarations(this.name);
            for(let declaration of declarations) {
                let nameElement : any = getSyntheticAccessorVariable(declaration.element);
                let nameClass : any = nameElement.enclosingElement;
                if (superClasses.contains(nameClass)) {
                    this.result.addError(format(this.isRename ? "Renamed {0} will shadow {1} '{2}'." : "Created {0} will shadow {1} '{2}'.",this.elementKind.displayName,getElementKindName(nameElement),getElementQualifiedName(nameElement)),newLocation_fromElement(nameElement));
                }
                if (this.isRename && subClasses.contains(nameClass)) {
                    this.result.addError(format("Renamed {0} will be shadowed by {1} '{2}'.",this.elementKind.displayName,getElementKindName(nameElement),getElementQualifiedName(nameElement)),newLocation_fromElement(nameElement));
                }
            }
            if (this.isRename) {
                this._validateWillBeInvisible();
            }
            return this.result;
        } )());
    }

    _getShadowingLocalElement() : _MatchShadowedByLocal {
        for(let match of this.references) {
            if (match.isQualified) {
                continue;
            }
            let containingElement : any = match.element;
            if (is(containingElement, any)) {
                let localElements : core.DartIterable<any> = new core.DartList.literal<core.DartIterable<any>>(containingElement.functions,containingElement.localVariables,containingElement.parameters).expand((x : core.DartIterable<any>) =>  {
                    return x;
                });
                for(let localElement of localElements) {
                    if (op(Op.EQUALS,localElement.displayName,this.name) && localElement.visibleRange.intersects(match.sourceRange)) {
                        return new _MatchShadowedByLocal(match,localElement);
                    }
                }
            }
        }
        return null;
    }
    _prepareElements() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            if (is(this.element, any)) {
                this.elements = await getHierarchyMembers(this.searchEngine,this.element);
            }else {
                this.elements = new core.DartSet.from(new core.DartList.literal(this.element));
            }
        } )());
    }

    _prepareReferences() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            if (!this.isRename) {
                return new async.Future.value();
            }
            await this._prepareElements();
            await async.Future.forEach(this.elements,(element : any) => new async.Future.fromPromise(( async () : Promise<any> =>  {
                let elementReferences : core.DartList<any> = await this.searchEngine.searchReferences(element);
                this.references.addAll(elementReferences);
            })()));
        } )());
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
}

export namespace _MatchShadowedByLocal {
    export type Constructors = '_MatchShadowedByLocal';
    export type Interface = Omit<_MatchShadowedByLocal, Constructors>;
}
@DartClass
export class _MatchShadowedByLocal {
    match : any;

    localElement : any;

    constructor(match : any,localElement : any) {
    }
    @defaultConstructor
    _MatchShadowedByLocal(match : any,localElement : any) {
        this.match = match;
        this.localElement = localElement;
    }
}

export class properties {
}
