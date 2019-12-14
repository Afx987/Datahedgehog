/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/domains/analysis/occurrences_dart.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var addDartOccurrences : (collector : any,unit : any) => void = (collector : any,unit : any) : void =>  {
    let visitor : _DartUnitOccurrencesComputerVisitor = new _DartUnitOccurrencesComputerVisitor();
    unit.accept(visitor);
    visitor.elementsOffsets.forEach((engineElement : any,offsets : any) =>  {
        let length : number = engineElement.nameLength;
        let serverElement : any = null /*topLevl*/.convertElement(engineElement);
        let occurrences : any = new bare.createInstance(any,null,serverElement,offsets,length);
        collector.addOccurrences(occurrences);
    });
};
export namespace DartOccurrencesComputer {
    export type Constructors = 'DartOccurrencesComputer';
    export type Interface = Omit<DartOccurrencesComputer, Constructors>;
}
@DartClass
@Implements(any)
export class DartOccurrencesComputer implements any.Interface {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeOccurrences(collector : any,context : any,source : any) : void {
        let libraries : core.DartList<any> = context.getLibrariesContaining(source);
        if (libraries.isNotEmpty) {
            let unit : any = context.getResolvedCompilationUnit2(source,libraries.first);
            if (unit != null) {
                addDartOccurrences(collector,unit);
            }
        }
    }
    constructor() {
    }
    @defaultConstructor
    DartOccurrencesComputer() {
    }
}

export namespace _DartUnitOccurrencesComputerVisitor {
    export type Constructors = '_DartUnitOccurrencesComputerVisitor';
    export type Interface = Omit<_DartUnitOccurrencesComputerVisitor, Constructors>;
}
@DartClass
export class _DartUnitOccurrencesComputerVisitor extends any {
    elementsOffsets : core.DartMap<any,core.DartList<number>>;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSimpleIdentifier(node : any) {
        let element : any = node.bestElement;
        if (element != null) {
            this._addOccurrence(element,node.offset);
        }
        return super.visitSimpleIdentifier(node);
    }
    _addOccurrence(element : any,offset : number) : void {
        element = this._canonicalizeElement(element);
        if (op(Op.EQUALS,element,null) || op(Op.EQUALS,element,DynamicElementImpl.instance)) {
            return;
        }
        let offsets : core.DartList<number> = this.elementsOffsets.get(element);
        if (offsets == null) {
            offsets = new core.DartList.literal<number>();
            this.elementsOffsets.set(element,offsets);
        }
        offsets.add(offset);
    }
    _canonicalizeElement(element : any) : any {
        if (is(element, any)) {
            element = (element as any).field;
        }
        if (is(element, any)) {
            element = (element as any).variable;
        }
        if (is(element, any)) {
            element = (element as any).baseElement;
        }
        return element;
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _DartUnitOccurrencesComputerVisitor() {
        this.elementsOffsets = new core.DartMap.literal([
        ]);
    }
}

export class properties {
}
