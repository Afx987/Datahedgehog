/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/services/refactoring/convert_getter_to_method.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace ConvertGetterToMethodRefactoringImpl {
    export type Constructors = 'ConvertGetterToMethodRefactoringImpl';
    export type Interface = Omit<ConvertGetterToMethodRefactoringImpl, Constructors>;
}
@DartClass
@Implements(any)
export class ConvertGetterToMethodRefactoringImpl extends any implements any.Interface {
    searchEngine : any;

    astProvider : any;

    element : any;

    change : any;

    constructor(searchEngine : any,astProvider : any,element : any) {
    }
    @defaultConstructor
    ConvertGetterToMethodRefactoringImpl(searchEngine : any,astProvider : any,element : any) {
        this.searchEngine = searchEngine;
        this.astProvider = astProvider;
        this.element = element;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get refactoringName() : string {
        return 'Convert Getter To Method';
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
        let result : any = this._checkInitialConditions();
        return new async.Future.value(result);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createChange() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.change = new bare.createInstance(any,null,this.refactoringName);
            if (is(this.element.enclosingElement, any)) {
                await this._updateElementDeclaration(this.element);
                await this._updateElementReferences(this.element);
            }
            if (is(this.element.enclosingElement, any)) {
                let field : any = this.element.variable;
                let elements : core.DartSet<any> = await getHierarchyMembers(this.searchEngine,field);
                await async.Future.forEach(elements,(member : any) => new async.Future.fromPromise(( async () : Promise<any> =>  {
                    if (is(member, any)) {
                        let getter : any = member.getter;
                        if (!getter.isSynthetic) {
                            await this._updateElementDeclaration(getter);
                            return this._updateElementReferences(getter);
                        }
                    }
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
    _checkInitialConditions() : any {
        if (!this.element.isGetter || this.element.isSynthetic) {
            return new bare.createInstance(any,null,'Only explicit getters can be converted to methods.');
        }
        return new bare.createInstance(any,null);
    }
    _updateElementDeclaration(element : any) : async.Future<core.Null> { 
        return new async.Future.fromPromise(( async () =>  {
            let getKeyword : any = null;
            {
                let name : any = await this.astProvider.getParsedNameForElement(element);
                let declaration : any = ((t)=>(!!t)?t.parent:null)(name);
                if (is(declaration, any)) {
                    getKeyword = declaration.propertyKeyword;
                }else if (is(declaration, any)) {
                    getKeyword = declaration.propertyKeyword;
                }else {
                    return;
                }
            }
            if (getKeyword != null) {
                let getRange : any = range.startOffsetEndOffset(getKeyword.offset,element.nameOffset);
                let edit : any = newSourceEdit_range(getRange,'');
                doSourceChange_addElementEdit(this.change,element,edit);
            }
            {
                let edit : any = new bare.createInstance(any,null,range.elementName(element).end,0,'()');
                doSourceChange_addElementEdit(this.change,element,edit);
            }
        } )());
    }

    _updateElementReferences(element : any) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let matches : core.DartList<any> = await this.searchEngine.searchReferences(element);
            let references : core.DartList<any> = getSourceReferences(matches);
            for(let reference of references) {
                let refElement : any = reference.element;
                let refRange : any = reference.range;
                let edit = new bare.createInstance(any,null,refRange.end,0,"()");
                doSourceChange_addElementEdit(this.change,refElement,edit);
            }
        } )());
    }

}

export class properties {
}
