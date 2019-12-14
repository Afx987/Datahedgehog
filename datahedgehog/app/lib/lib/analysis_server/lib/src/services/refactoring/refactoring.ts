/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/services/refactoring/refactoring.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace ConvertGetterToMethodRefactoring {
    export type Constructors = never;
    export type Interface = Omit<ConvertGetterToMethodRefactoring, Constructors>;
}
@DartClass
@Implements(Refactoring)
export class ConvertGetterToMethodRefactoring implements Refactoring.Interface {
    constructor(searchEngine : any,astProvider : any,element : any) {
    }
    @defaultFactory
    static $ConvertGetterToMethodRefactoring(searchEngine : any,astProvider : any,element : any) : ConvertGetterToMethodRefactoring {
        return new bare.createInstance(any,null,searchEngine,astProvider,element);
    }
}

export namespace ConvertMethodToGetterRefactoring {
    export type Constructors = never;
    export type Interface = Omit<ConvertMethodToGetterRefactoring, Constructors>;
}
@DartClass
@Implements(Refactoring)
export class ConvertMethodToGetterRefactoring implements Refactoring.Interface {
    constructor(searchEngine : any,astProvider : any,element : any) {
    }
    @defaultFactory
    static $ConvertMethodToGetterRefactoring(searchEngine : any,astProvider : any,element : any) : ConvertMethodToGetterRefactoring {
        return new bare.createInstance(any,null,searchEngine,astProvider,element);
    }
}

export namespace ExtractLocalRefactoring {
    export type Constructors = never;
    export type Interface = Omit<ExtractLocalRefactoring, Constructors>;
}
@DartClass
@Implements(Refactoring)
export class ExtractLocalRefactoring implements Refactoring.Interface {
    constructor(unit : any,selectionOffset : number,selectionLength : number) {
    }
    @defaultFactory
    static $ExtractLocalRefactoring(unit : any,selectionOffset : number,selectionLength : number) : ExtractLocalRefactoring {
        return new bare.createInstance(any,null,unit,selectionOffset,selectionLength);
    }
    @AbstractProperty
    get coveringExpressionLengths() : core.DartList<number>{ throw 'abstract'}
    @AbstractProperty
    get coveringExpressionOffsets() : core.DartList<number>{ throw 'abstract'}
    set extractAll(extractAll : boolean){ throw 'abstract'}
    @AbstractProperty
    get lengths() : core.DartList<number>{ throw 'abstract'}
    set name(name : string){ throw 'abstract'}
    @AbstractProperty
    get names() : core.DartList<string>{ throw 'abstract'}
    @AbstractProperty
    get offsets() : core.DartList<number>{ throw 'abstract'}
    @Abstract
    checkName() : any{ throw 'abstract'}
}

export namespace ExtractMethodRefactoring {
    export type Constructors = never;
    export type Interface = Omit<ExtractMethodRefactoring, Constructors>;
}
@DartClass
@Implements(Refactoring)
export class ExtractMethodRefactoring implements Refactoring.Interface {
    constructor(searchEngine : any,unit : any,selectionOffset : number,selectionLength : number) {
    }
    @defaultFactory
    static $ExtractMethodRefactoring(searchEngine : any,unit : any,selectionOffset : number,selectionLength : number) : ExtractMethodRefactoring {
        return new bare.createInstance(any,null,searchEngine,unit,selectionOffset,selectionLength);
    }
    @AbstractProperty
    get canCreateGetter() : boolean{ throw 'abstract'}
    set createGetter(createGetter : boolean){ throw 'abstract'}
    set extractAll(extractAll : boolean){ throw 'abstract'}
    @AbstractProperty
    get lengths() : core.DartList<number>{ throw 'abstract'}
    set name(name : string){ throw 'abstract'}
    @AbstractProperty
    get names() : core.DartList<string>{ throw 'abstract'}
    @AbstractProperty
    get offsets() : core.DartList<number>{ throw 'abstract'}
    @AbstractProperty
    get parameters() : core.DartList<any>{ throw 'abstract'}
    set parameters(parameters : core.DartList<any>){ throw 'abstract'}
    @AbstractProperty
    get returnType() : string{ throw 'abstract'}
    set returnType(returnType : string){ throw 'abstract'}
    @Abstract
    checkName() : any{ throw 'abstract'}
}

export namespace InlineLocalRefactoring {
    export type Constructors = never;
    export type Interface = Omit<InlineLocalRefactoring, Constructors>;
}
@DartClass
@Implements(Refactoring)
export class InlineLocalRefactoring implements Refactoring.Interface {
    constructor(searchEngine : any,astProvider : any,unit : any,offset : number) {
    }
    @defaultFactory
    static $InlineLocalRefactoring(searchEngine : any,astProvider : any,unit : any,offset : number) : InlineLocalRefactoring {
        return new bare.createInstance(any,null,searchEngine,astProvider,unit,offset);
    }
    @AbstractProperty
    get referenceCount() : number{ throw 'abstract'}
    @AbstractProperty
    get variableName() : string{ throw 'abstract'}
}

export namespace InlineMethodRefactoring {
    export type Constructors = never;
    export type Interface = Omit<InlineMethodRefactoring, Constructors>;
}
@DartClass
@Implements(Refactoring)
export class InlineMethodRefactoring implements Refactoring.Interface {
    constructor(searchEngine : any,astProvider : any,unit : any,offset : number) {
    }
    @defaultFactory
    static $InlineMethodRefactoring(searchEngine : any,astProvider : any,unit : any,offset : number) : InlineMethodRefactoring {
        return new bare.createInstance(any,null,searchEngine,astProvider,unit,offset);
    }
    @AbstractProperty
    get className() : string{ throw 'abstract'}
    set deleteSource(deleteSource : boolean){ throw 'abstract'}
    set inlineAll(inlineAll : boolean){ throw 'abstract'}
    @AbstractProperty
    get isDeclaration() : boolean{ throw 'abstract'}
    @AbstractProperty
    get methodName() : string{ throw 'abstract'}
}

export namespace MoveFileRefactoring {
    export type Constructors = never;
    export type Interface = Omit<MoveFileRefactoring, Constructors>;
}
@DartClass
@Implements(Refactoring)
export class MoveFileRefactoring implements Refactoring.Interface {
    constructor(resourceProvider : any,searchEngine : any,context : any,source : any,oldFile : string) {
    }
    @defaultFactory
    static $MoveFileRefactoring(resourceProvider : any,searchEngine : any,context : any,source : any,oldFile : string) : MoveFileRefactoring {
        return new bare.createInstance(any,null,resourceProvider,searchEngine,context,source,oldFile);
    }
    set newFile(newName : string){ throw 'abstract'}
}

export namespace Refactoring {
    export type Constructors = 'Refactoring';
    export type Interface = Omit<Refactoring, Constructors>;
}
@DartClass
export class Refactoring {
    @AbstractProperty
    get potentialEditIds() : core.DartList<string>{ throw 'abstract'}
    @AbstractProperty
    get refactoringName() : string{ throw 'abstract'}
    @Abstract
    checkAllConditions() : async.Future<any>{ throw 'abstract'}
    @Abstract
    checkFinalConditions() : async.Future<any>{ throw 'abstract'}
    @Abstract
    checkInitialConditions() : async.Future<any>{ throw 'abstract'}
    @Abstract
    createChange() : async.Future<any>{ throw 'abstract'}
    @Abstract
    requiresPreview() : boolean{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    Refactoring() {
    }
}

export namespace RenameRefactoring {
    export type Constructors = never;
    export type Interface = Omit<RenameRefactoring, Constructors>;
}
@DartClass
@Implements(Refactoring)
export class RenameRefactoring implements Refactoring.Interface {
    constructor(searchEngine : any,astProvider : any,element : any) {
    }
    @defaultFactory
    static $RenameRefactoring(searchEngine : any,astProvider : any,element : any) : RenameRefactoring {
        if (op(Op.EQUALS,element,null)) {
            return null;
        }
        if (is(element, any)) {
            element = (element as any).variable;
        }
        if (is(element.enclosingElement, any)) {
            return new bare.createInstance(any,null,searchEngine,element);
        }
        if (is(element, any)) {
            return new bare.createInstance(any,null,searchEngine,astProvider,element);
        }
        if (is(element, any)) {
            return new bare.createInstance(any,null,searchEngine,element);
        }
        if (is(element, any)) {
            return new bare.createInstance(any,null,searchEngine,element);
        }
        if (is(element, any)) {
            return new bare.createInstance(any,null,searchEngine,element);
        }
        if (is(element, any)) {
            return new bare.createInstance(any,null,searchEngine,astProvider,element);
        }
        if (is(element.enclosingElement, any)) {
            return new bare.createInstance(any,null,searchEngine,element);
        }
        return null;
    }
    @AbstractProperty
    get elementKindName() : string{ throw 'abstract'}
    set newName(newName : string){ throw 'abstract'}
    @AbstractProperty
    get oldName() : string{ throw 'abstract'}
    @Abstract
    checkNewName() : any{ throw 'abstract'}
}

export namespace ResolvedUnitCache {
    export type Constructors = 'ResolvedUnitCache';
    export type Interface = Omit<ResolvedUnitCache, Constructors>;
}
@DartClass
export class ResolvedUnitCache {
    _astProvider : any;

    _map : core.DartMap<any,any>;

    constructor(_astProvider : any,unit? : any) {
    }
    @defaultConstructor
    ResolvedUnitCache(_astProvider : any,unit? : any) {
        this._map = new core.DartMap.literal([
        ]);
        this._astProvider = _astProvider;
        if (unit != null) {
            this._map.set(unit.element,unit);
        }
    }
    getUnit(element : any) : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            let unitElement : any = element.getAncestor((e : any) =>  {
                return is(e, any);
            }) as any;
            let unit : any = this._map.get(unitElement);
            if (op(Op.EQUALS,unit,null)) {
                unit = await this._astProvider.getResolvedUnitForElement(element);
                this._map.set(unitElement,unit);
            }
            return unit;
        } )());
    }

}

export class properties {
}
