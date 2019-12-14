/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/services/refactoring/convert_method_to_getter.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace ConvertMethodToGetterRefactoringImpl {
    export type Constructors = 'ConvertMethodToGetterRefactoringImpl';
    export type Interface = Omit<ConvertMethodToGetterRefactoringImpl, Constructors>;
}
@DartClass
@Implements(any)
export class ConvertMethodToGetterRefactoringImpl extends any implements any.Interface {
    searchEngine : any;

    astProvider : any;

    element : any;

    change : any;

    constructor(searchEngine : any,astProvider : any,element : any) {
    }
    @defaultConstructor
    ConvertMethodToGetterRefactoringImpl(searchEngine : any,astProvider : any,element : any) {
        this.searchEngine = searchEngine;
        this.astProvider = astProvider;
        this.element = element;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get refactoringName() : string {
        return 'Convert Method To Getter';
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
    checkInitialConditions() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            if (is(this.element, any)) {
                if (isNot(this.element.enclosingElement, any)) {
                    return new bare.createInstance(any,null,'Only top-level functions can be converted to getters.');
                }
            }else if (isNot(this.element, any)) {
                return new bare.createInstance(any,null,'Only class methods or top-level functions can be converted to getters.');
            }
            if (this.element.returnType != null && this.element.returnType.isVoid) {
                return new bare.createInstance(any,null,`Cannot convert ${this.element.kind.displayName} returning void.`);
            }
            if (this.element.parameters.isNotEmpty) {
                return new bare.createInstance(any,null,'Only methods without parameters can be converted to getters.');
            }
            return new bare.createInstance(any,null);
        } )());
    }

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createChange() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.change = new bare.createInstance(any,null,this.refactoringName);
            if (is(this.element, any)) {
                await this._updateElementDeclaration(this.element);
                await this._updateElementReferences(this.element);
            }
            if (is(this.element, any)) {
                let method : any = this.element;
                let elements : core.DartSet<any> = await getHierarchyMembers(this.searchEngine,method);
                await async.Future.forEach(elements,(element : any) => new async.Future.fromPromise(( async () : Promise<any> =>  {
                    await this._updateElementDeclaration(element);
                    return this._updateElementReferences(element);
                })()));
            }
            return this.change;
        } )());
    }

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    requiresPreview() : boolean {
        return false;
    }
    _updateElementDeclaration(element : any) : async.Future<core.Null> { 
        return new async.Future.fromPromise(( async () =>  {
            let parameters : any;
            {
                let name : any = await this.astProvider.getParsedNameForElement(element);
                let declaration : any = ((t)=>(!!t)?t.parent:null)(name);
                if (is(declaration, any)) {
                    parameters = declaration.parameters;
                }else if (is(declaration, any)) {
                    parameters = declaration.functionExpression.parameters;
                }else {
                    return;
                }
            }
            {
                let edit : any = new bare.createInstance(any,null,element.nameOffset,0,'get ');
                doSourceChange_addElementEdit(this.change,element,edit);
            }
            {
                let edit : any = newSourceEdit_range(range.node(parameters),'');
                doSourceChange_addElementEdit(this.change,element,edit);
            }
        } )());
    }

    _updateElementReferences(element : any) : async.Future<core.Null> { 
        return new async.Future.fromPromise(( async () =>  {
            let matches : core.DartList<any> = await this.searchEngine.searchReferences(element);
            let references : core.DartList<any> = getSourceReferences(matches);
            for(let reference of references) {
                let refElement : any = reference.element;
                let refRange : any = reference.range;
                let invocation : any;
                {
                    let refUnit : any = await this.astProvider.getParsedUnitForElement(refElement);
                    let refNode : any = new bare.createInstance(any,null,refRange.offset).searchWithin(refUnit);
                    invocation = refNode.getAncestor((node : any) =>  {
                        return is(node, any);
                    });
                }
                if (invocation != null) {
                    let edit : any = newSourceEdit_range(range.startOffsetEndOffset(refRange.end,invocation.end),'');
                    doSourceChange_addElementEdit(this.change,refElement,edit);
                }
            }
        } )());
    }

}

export class properties {
}
