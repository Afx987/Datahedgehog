/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/services/refactoring/refactoring_internal.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as collection from "@dart2ts/dart/core";

export var getSourceReference : (match : any) => SourceReference = (match : any) : SourceReference =>  {
    return new SourceReference(match);
};
export var getSourceReferences : (matches : core.DartList<any>) => core.DartList<SourceReference> = (matches : core.DartList<any>) : core.DartList<SourceReference> =>  {
    let uniqueReferences = new core.DartHashMap<SourceReference,SourceReference>();
    for(let match of matches) {
        let newReference : SourceReference = getSourceReference(match);
        let oldReference : SourceReference = op(Op.INDEX,uniqueReferences,newReference);
        if (op(Op.EQUALS,oldReference,null)) {
            op(Op.INDEX_ASSIGN,uniqueReferences,newReference,newReference);
            oldReference = newReference;
        }
    }
    return uniqueReferences.keys.toList();
};
export namespace RefactoringImpl {
    export type Constructors = 'RefactoringImpl';
    export type Interface = Omit<RefactoringImpl, Constructors>;
}
@DartClass
@Implements(any)
export class RefactoringImpl implements any.Interface {
    potentialEditIds : core.DartList<string>;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    checkAllConditions() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let result : any = new bare.createInstance(any,null);
            result.addStatus(await checkInitialConditions());
            if (result.hasFatalError) {
                return result;
            }
            result.addStatus(await checkFinalConditions());
            return result;
        } )());
    }

    constructor() {
    }
    @defaultConstructor
    RefactoringImpl() {
        this.potentialEditIds = new core.DartList.literal<string>();
    }
}

export namespace SourceReference {
    export type Constructors = 'SourceReference';
    export type Interface = Omit<SourceReference, Constructors>;
}
@DartClass
export class SourceReference {
    _match : any;

    constructor(_match : any) {
    }
    @defaultConstructor
    SourceReference(_match : any) {
        this._match = _match;
    }
    get element() : any {
        return this._match.element;
    }
    get file() : string {
        return this._match.file;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        let hash : number = new core.DartString(this.file).hashCode;
        hash = ((hash << 16) & 4294967295) + this.range.hashCode;
        return hash;
    }
    get isResolved() : boolean {
        return this._match.isResolved;
    }
    get range() : any {
        return this._match.sourceRange;
    }
    get unitSource() : any {
        return this._match.unitSource;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : core.DartObject) : boolean {
        if (core.identical(other,this)) {
            return true;
        }
        if (is(other, SourceReference)) {
            return other.file == this.file && op(Op.EQUALS,other.range,this.range);
        }
        return false;
    }
    addEdit(change : any,newText : string,_namedArguments? : {id? : string}) : void {
        let {id} = Object.assign({
        }, _namedArguments );
        let edit : any = this.createEdit(newText,{
            id : id});
        doSourceChange_addSourceEdit(change,this.unitSource,edit);
    }
    createEdit(newText : string,_namedArguments? : {id? : string}) : any {
        let {id} = Object.assign({
        }, _namedArguments );
        return newSourceEdit_range(this.range,newText,{
            id : id});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `${this.file}@${this.range}`;
    }
}

export class properties {
}
