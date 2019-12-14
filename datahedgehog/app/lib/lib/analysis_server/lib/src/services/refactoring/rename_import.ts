/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/services/refactoring/rename_import.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace RenameImportRefactoringImpl {
    export type Constructors = 'RenameImportRefactoringImpl';
    export type Interface = Omit<RenameImportRefactoringImpl, Constructors>;
}
@DartClass
export class RenameImportRefactoringImpl extends any {
    constructor(searchEngine : any,element : any) {
    }
    @defaultConstructor
    RenameImportRefactoringImpl(searchEngine : any,element : any) {
        super.DartObject(searchEngine,element);
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
        return "Rename Import Prefix";
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
        result.addStatus(validateImportPrefixName(newName));
        return result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    fillChange() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            {
                let prefix : any = this.element.prefix;
                let edit : any = null;
                if (newName.isEmpty) {
                    let uriEnd : number = this.element.uriEnd;
                    let prefixEnd : number = op(Op.PLUS,this.element.prefixOffset,prefix.nameLength);
                    edit = newSourceEdit_range(range.startOffsetEndOffset(uriEnd,prefixEnd),"");
                }else {
                    if (op(Op.EQUALS,prefix,null)) {
                        edit = newSourceEdit_range(new bare.createInstance(any,null,this.element.uriEnd,0),` as ${newName}`);
                    }else {
                        let offset : number = this.element.prefixOffset;
                        let length : number = prefix.nameLength;
                        edit = newSourceEdit_range(new bare.createInstance(any,null,offset,length),newName);
                    }
                }
                if (edit != null) {
                    doSourceChange_addElementEdit(change,this.element,edit);
                }
            }
            let matches : core.DartList<any> = await searchEngine.searchReferences(this.element);
            let references : core.DartList<any> = getSourceReferences(matches);
            for(let reference of references) {
                if (newName.isEmpty) {
                    reference.addEdit(change,'');
                }else {
                    let interpolationIdentifier : any = this._getInterpolationIdentifier(reference);
                    if (interpolationIdentifier != null) {
                        doSourceChange_addElementEdit(change,reference.element,new bare.createInstance(any,null,interpolationIdentifier.offset,interpolationIdentifier.length,`{${newName}.${interpolationIdentifier.name}}`));
                    }else {
                        reference.addEdit(change,`${newName}.`);
                    }
                }
            }
        } )());
    }

    _getInterpolationIdentifier(reference : any) : any {
        let source : any = reference.element.source;
        let unit : any = context.parseCompilationUnit(source);
        let nodeLocator : any = new bare.createInstance(any,null,reference.range.offset);
        let node : any = nodeLocator.searchWithin(unit);
        if (is(node, any)) {
            let parent : any = node.parent;
            if (is(parent, any) && op(Op.EQUALS,parent.rightBracket,null)) {
                return node;
            }
        }
        return null;
    }
}

export class properties {
}
