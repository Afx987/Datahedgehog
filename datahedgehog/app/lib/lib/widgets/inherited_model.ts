/** Library asset:datahedgehog_monitor/lib/lib/widgets/inherited_model.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./framework";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as collection from "@dart2ts/dart/core";

export namespace InheritedModel {
    export type Constructors = lib3.InheritedWidget.Constructors | 'InheritedModel';
    export type Interface<T> = Omit<InheritedModel<T>, Constructors>;
}
@DartClass
export class InheritedModel<T> extends lib3.InheritedWidget {
    constructor(_namedArguments? : {key? : lib4.Key,child? : lib3.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    InheritedModel(_namedArguments? : {key? : lib4.Key,child? : lib3.Widget}) {
        let {key,child} = Object.assign({
        }, _namedArguments );
        super.InheritedWidget({
            key : key,child : child});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createElement() : InheritedModelElement<T> {
        return InheritedModelElement(this);
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    @Abstract
    updateShouldNotifyDependent(oldWidget : InheritedModel<T>,dependencies : core.DartSet<T>) : boolean{ throw 'abstract'}
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    isSupportedAspect(aspect : core.DartObject) : boolean {
        return true;
    }
    static _findModels<T extends InheritedModel<core.DartObject>>(context : lib3.BuildContext,aspect : core.DartObject) : core.DartIterable<lib3.InheritedElement> { 
        return core.iter<lib3.InheritedElement>(()=>(function*()  {
            let model : lib3.InheritedElement = context.ancestorInheritedElementForWidgetOfExactType(T);
            if (op(Op.EQUALS,model,null)) return;
            yield model;
            /* TODO (AssertStatementImpl) : assert (model.widget is T); */;
            let modelWidget : T = model.widget;
            if (modelWidget.isSupportedAspect(aspect)) return;
            let modelParent : lib3.Element;
            model.visitAncestorElements((ancestor : lib3.Element) =>  {
                modelParent = ancestor;
                return false;
            });
            if (op(Op.EQUALS,modelParent,null)) return;
            yield* InheritedModel._findModels(modelParent,aspect);
        }).call(this));
    }

    static inheritFrom<T extends InheritedModel<core.DartObject>>(context : lib3.BuildContext,_namedArguments? : {aspect? : core.DartObject}) : T {
        let {aspect} = Object.assign({
        }, _namedArguments );
        if (op(Op.EQUALS,aspect,null)) return context.inheritFromWidgetOfExactType(T);
        let models : core.DartList<lib3.InheritedElement> = InheritedModel._findModels(context,aspect).toList();
        if (models.isEmpty) {
            return null;
        }
        let lastModel : lib3.InheritedElement = models.last;
        for(let model of models) {
            let value : T = context.inheritFromElement(model,{
                aspect : aspect});
            if (op(Op.EQUALS,model,lastModel)) return value;
        }
        /* TODO (AssertStatementImpl) : assert (false); */;
        return null;
    }
}

export namespace InheritedModelElement {
    export type Constructors = lib3.InheritedElement.Constructors | 'InheritedModelElement';
    export type Interface<T> = Omit<InheritedModelElement<T>, Constructors>;
}
@DartClass
export class InheritedModelElement<T> extends lib3.InheritedElement {
    constructor(widget : InheritedModel<T>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    InheritedModelElement(widget : InheritedModel<T>) {
        super.InheritedElement(widget);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get widget() : InheritedModel<T> {
        return super.widget;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    updateDependencies(dependent : lib3.Element,aspect : core.DartObject) : any {
        let dependencies : core.DartSet<T> = this.getDependencies(dependent);
        if (dependencies != null && dependencies.isEmpty) return;
        if (op(Op.EQUALS,aspect,null)) {
            this.setDependencies(dependent,core.DartHashSet());
        }else {
            /* TODO (AssertStatementImpl) : assert (aspect is T); */;
            this.setDependencies(dependent,((_) : any =>  {
                {
                    add(aspect);
                    return _;
                }
            })(((dependencies || core.DartHashSet()))));
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    notifyDependent(oldWidget : InheritedModel<T>,dependent : lib3.Element) : any {
        let dependencies : core.DartSet<T> = this.getDependencies(dependent);
        if (op(Op.EQUALS,dependencies,null)) return;
        if (dependencies.isEmpty || this.widget.updateShouldNotifyDependent(oldWidget,dependencies)) dependent.didChangeDependencies();
    }
}

export class properties {
}
