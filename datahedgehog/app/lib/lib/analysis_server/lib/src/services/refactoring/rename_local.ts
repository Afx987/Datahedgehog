/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/services/refactoring/rename_local.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace RenameLocalRefactoringImpl {
    export type Constructors = 'RenameLocalRefactoringImpl';
    export type Interface = Omit<RenameLocalRefactoringImpl, Constructors>;
}
@DartClass
export class RenameLocalRefactoringImpl extends any {
    astProvider : any;

    unitCache : any;

    elements : core.DartSet<any>;

    constructor(searchEngine : any,astProvider : any,element : any) {
    }
    @defaultConstructor
    RenameLocalRefactoringImpl(searchEngine : any,astProvider : any,element : any) {
        this.elements = new core.DartSet<any>();
        this.unitCache = new bare.createInstance(any,null,astProvider);
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
        if (is(this.element, any)) {
            return "Rename Parameter";
        }
        if (is(this.element, any)) {
            return "Rename Local Function";
        }
        return "Rename Local Variable";
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    checkFinalConditions() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let result : any = new bare.createInstance(any,null);
            await this._prepareElements();
            for(let element of this.elements) {
                let unit : any = await this.unitCache.getUnit(element);
                if (unit != null) {
                    let elementRange : any = element.visibleRange;
                    unit.accept(new _ConflictValidatorVisitor(this,result,elementRange));
                }
            }
            return result;
        } )());
    }

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    checkNewName() : any {
        let result : any = super.checkNewName();
        if (is(this.element, any)) {
            result.addStatus(validateVariableName(newName));
        }else if (is(this.element, any)) {
            result.addStatus(validateParameterName(newName));
        }else if (is(this.element, any)) {
            result.addStatus(validateFunctionName(newName));
        }
        return result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    fillChange() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            for(let element of this.elements) {
                addDeclarationEdit(element);
                await searchEngine.searchReferences(element).then(addReferenceEdits);
            }
        } )());
    }

    _prepareElements() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let enclosing : any = this.element.enclosingElement;
            if (is(enclosing, any) && is(this.element, any) && op(Op.EQUALS,(this.element as any).parameterKind,ParameterKind.NAMED)) {
                let methods : core.DartSet<any> = await getHierarchyMembers(searchEngine,enclosing);
                for(let method of methods) {
                    if (is(method, any)) {
                        for(let parameter of method.parameters) {
                            if (op(Op.EQUALS,parameter.parameterKind,ParameterKind.NAMED) && op(Op.EQUALS,parameter.name,this.element.name)) {
                                this.elements.add(parameter);
                            }
                        }
                    }
                }
            }else {
                this.elements = new core.DartSet.from(new core.DartList.literal(this.element));
            }
        } )());
    }

}

export namespace _ConflictValidatorVisitor {
    export type Constructors = '_ConflictValidatorVisitor';
    export type Interface = Omit<_ConflictValidatorVisitor, Constructors>;
}
@DartClass
export class _ConflictValidatorVisitor extends any {
    refactoring : RenameLocalRefactoringImpl;

    result : any;

    elementRange : any;

    conflictingLocals : core.DartSet<any>;

    constructor(refactoring : RenameLocalRefactoringImpl,result : any,elementRange : any) {
    }
    @defaultConstructor
    _ConflictValidatorVisitor(refactoring : RenameLocalRefactoringImpl,result : any,elementRange : any) {
        this.conflictingLocals = new core.DartSet<any>();
        this.refactoring = refactoring;
        this.result = result;
        this.elementRange = elementRange;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSimpleIdentifier(node : any) {
        let nodeElement : any = node.bestElement;
        let newName : string = this.refactoring.newName;
        if (nodeElement != null && op(Op.EQUALS,nodeElement.name,newName)) {
            if (node.inDeclarationContext() && haveIntersectingRanges(this.refactoring.element,nodeElement)) {
                this.conflictingLocals.add(nodeElement);
                let nodeKind : string = nodeElement.kind.displayName;
                let message : string = `Duplicate ${nodeKind} '${newName}'.`;
                this.result.addError(message,newLocation_fromElement(nodeElement));
                return;
            }
            if (this.conflictingLocals.contains(nodeElement)) {
                return;
            }
            if (this.elementRange != null && this.elementRange.contains(node.offset) && !node.isQualified && !_ConflictValidatorVisitor._isNamedExpressionName(node)) {
                nodeElement = getSyntheticAccessorVariable(nodeElement);
                let nodeKind : string = nodeElement.kind.displayName;
                let nodeName : string = getElementQualifiedName(nodeElement);
                let nameElementSourceName : string = nodeElement.source.shortName;
                let refKind : string = this.refactoring.element.kind.displayName;
                let message : string = `Usage of ${nodeKind} "${nodeName}" declared in ` + `"${nameElementSourceName}" will be shadowed by renamed ${refKind}.`;
                this.result.addError(message,newLocation_fromNode(node));
            }
        }
    }
    static _isNamedExpressionName(node : any) : boolean {
        return is(node.parent, any) && is(node.parent.parent, any);
    }
}

export class properties {
}
