/** Library asset:datahedgehog_monitor/lib/lib/widgets/debug.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./framework";
import * as collection from "@dart2ts/dart/core";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/foundation/key";

export var _firstNonUniqueKey : (widgets : core.DartIterable<lib3.Widget>) => lib5.Key = (widgets : core.DartIterable<lib3.Widget>) : lib5.Key =>  {
    let keySet : core.DartSet<lib5.Key> = core.DartHashSet();
    for(let widget of widgets) {
        /* TODO (AssertStatementImpl) : assert (widget != null); */;
        if (op(Op.EQUALS,widget.key,null)) continue;
        if (!keySet.add(widget.key)) return widget.key;
    }
    return null;
};
export var debugChildrenHaveDuplicateKeys : (parent : lib3.Widget,children : core.DartIterable<lib3.Widget>) => boolean = (parent : lib3.Widget,children : core.DartIterable<lib3.Widget>) : boolean =>  {
    /* TODO (AssertStatementImpl) : assert (() {final Key nonUniqueKey = _firstNonUniqueKey(children); if (nonUniqueKey != null) {throw FlutterError('Duplicate keys found.\n' 'If multiple keyed nodes exist as children of another node, they must have unique keys.\n' '$parent has multiple children with key $nonUniqueKey.');} return true;}()); */;
    return false;
};
export var debugItemsHaveDuplicateKeys : (items : core.DartIterable<lib3.Widget>) => boolean = (items : core.DartIterable<lib3.Widget>) : boolean =>  {
    /* TODO (AssertStatementImpl) : assert (() {final Key nonUniqueKey = _firstNonUniqueKey(items); if (nonUniqueKey != null) throw FlutterError('Duplicate key found: $nonUniqueKey.'); return true;}()); */;
    return false;
};
export var debugCheckHasTable : (context : lib3.BuildContext) => boolean = (context : lib3.BuildContext) : boolean =>  {
    /* TODO (AssertStatementImpl) : assert (() {if (context.widget is! Table && context.ancestorWidgetOfExactType(Table) == null) {final Element element = context; throw FlutterError('No Table widget found.\n' '${context.widget.runtimeType} widgets require a Table widget ancestor.\n' 'The specific widget that could not find a Table ancestor was:\n' '  ${context.widget}\n' 'The ownership chain for the affected widget is:\n' '  ${element.debugGetCreatorChain(10)}');} return true;}()); */;
    return true;
};
export var debugCheckHasMediaQuery : (context : lib3.BuildContext) => boolean = (context : lib3.BuildContext) : boolean =>  {
    /* TODO (AssertStatementImpl) : assert (() {if (context.widget is! MediaQuery && context.ancestorWidgetOfExactType(MediaQuery) == null) {final Element element = context; throw FlutterError('No MediaQuery widget found.\n' '${context.widget.runtimeType} widgets require a MediaQuery widget ancestor.\n' 'The specific widget that could not find a MediaQuery ancestor was:\n' '  ${context.widget}\n' 'The ownership chain for the affected widget is:\n' '  ${element.debugGetCreatorChain(10)}\n' 'Typically, the MediaQuery widget is introduced by the MaterialApp or ' 'WidgetsApp widget at the top of your application widget tree.');} return true;}()); */;
    return true;
};
export var debugCheckHasDirectionality : (context : lib3.BuildContext) => boolean = (context : lib3.BuildContext) : boolean =>  {
    /* TODO (AssertStatementImpl) : assert (() {if (context.widget is! Directionality && context.ancestorWidgetOfExactType(Directionality) == null) {final Element element = context; throw FlutterError('No Directionality widget found.\n' '${context.widget.runtimeType} widgets require a Directionality widget ancestor.\n' 'The specific widget that could not find a Directionality ancestor was:\n' '  ${context.widget}\n' 'The ownership chain for the affected widget is:\n' '  ${element.debugGetCreatorChain(10)}\n' 'Typically, the Directionality widget is introduced by the MaterialApp ' 'or WidgetsApp widget at the top of your application widget tree. It ' 'determines the ambient reading direction and is used, for example, to ' 'determine how to lay out text, how to interpret "start" and "end" ' 'values, and to resolve EdgeInsetsDirectional, ' 'AlignmentDirectional, and other *Directional objects.');} return true;}()); */;
    return true;
};
export var debugWidgetBuilderValue : (widget : lib3.Widget,built : lib3.Widget) => any = (widget : lib3.Widget,built : lib3.Widget) : any =>  {
    /* TODO (AssertStatementImpl) : assert (() {if (built == null) {throw FlutterError('A build function returned null.\n' 'The offending widget is: $widget\n' 'Build functions must never return null. ' 'To return an empty space that causes the building widget to fill available room, return "new Container()". ' 'To return an empty space that takes as little room as possible, return "new Container(width: 0.0, height: 0.0)".');} if (widget == built) {throw FlutterError('A build function returned context.widget.\n' 'The offending widget is: $widget\n' 'Build functions must never return their BuildContext parameter\'s widget or a child that contains "context.widget". ' 'Doing so introduces a loop in the widget tree that can cause the app to crash.');} return true;}()); */;
};
export var debugAssertAllWidgetVarsUnset : (reason : string) => boolean = (reason : string) : boolean =>  {
    /* TODO (AssertStatementImpl) : assert (() {if (debugPrintRebuildDirtyWidgets || debugPrintBuildScope || debugPrintScheduleBuildForStacks || debugPrintGlobalKeyedWidgetLifecycle || debugProfileBuildsEnabled || debugHighlightDeprecatedWidgets) {throw FlutterError(reason);} return true;}()); */;
    return true;
};
export class properties {
    private static __$debugPrintRebuildDirtyWidgets : boolean;
    static get debugPrintRebuildDirtyWidgets() : boolean { 
        if (this.__$debugPrintRebuildDirtyWidgets===undefined) {
            this.__$debugPrintRebuildDirtyWidgets = false;
        }
        return this.__$debugPrintRebuildDirtyWidgets;
    }
    static set debugPrintRebuildDirtyWidgets(__$value : boolean)  { 
        this.__$debugPrintRebuildDirtyWidgets = __$value;
    }

    private static __$debugOnRebuildDirtyWidget : (e : lib3.Element,builtOnce : boolean) => any;
    static get debugOnRebuildDirtyWidget() : (e : lib3.Element,builtOnce : boolean) => any { 
        return this.__$debugOnRebuildDirtyWidget;
    }
    static set debugOnRebuildDirtyWidget(__$value : (e : lib3.Element,builtOnce : boolean) => any)  { 
        this.__$debugOnRebuildDirtyWidget = __$value;
    }

    private static __$debugPrintBuildScope : boolean;
    static get debugPrintBuildScope() : boolean { 
        if (this.__$debugPrintBuildScope===undefined) {
            this.__$debugPrintBuildScope = false;
        }
        return this.__$debugPrintBuildScope;
    }
    static set debugPrintBuildScope(__$value : boolean)  { 
        this.__$debugPrintBuildScope = __$value;
    }

    private static __$debugPrintScheduleBuildForStacks : boolean;
    static get debugPrintScheduleBuildForStacks() : boolean { 
        if (this.__$debugPrintScheduleBuildForStacks===undefined) {
            this.__$debugPrintScheduleBuildForStacks = false;
        }
        return this.__$debugPrintScheduleBuildForStacks;
    }
    static set debugPrintScheduleBuildForStacks(__$value : boolean)  { 
        this.__$debugPrintScheduleBuildForStacks = __$value;
    }

    private static __$debugPrintGlobalKeyedWidgetLifecycle : boolean;
    static get debugPrintGlobalKeyedWidgetLifecycle() : boolean { 
        if (this.__$debugPrintGlobalKeyedWidgetLifecycle===undefined) {
            this.__$debugPrintGlobalKeyedWidgetLifecycle = false;
        }
        return this.__$debugPrintGlobalKeyedWidgetLifecycle;
    }
    static set debugPrintGlobalKeyedWidgetLifecycle(__$value : boolean)  { 
        this.__$debugPrintGlobalKeyedWidgetLifecycle = __$value;
    }

    private static __$debugProfileBuildsEnabled : boolean;
    static get debugProfileBuildsEnabled() : boolean { 
        if (this.__$debugProfileBuildsEnabled===undefined) {
            this.__$debugProfileBuildsEnabled = false;
        }
        return this.__$debugProfileBuildsEnabled;
    }
    static set debugProfileBuildsEnabled(__$value : boolean)  { 
        this.__$debugProfileBuildsEnabled = __$value;
    }

    private static __$debugHighlightDeprecatedWidgets : boolean;
    static get debugHighlightDeprecatedWidgets() : boolean { 
        if (this.__$debugHighlightDeprecatedWidgets===undefined) {
            this.__$debugHighlightDeprecatedWidgets = false;
        }
        return this.__$debugHighlightDeprecatedWidgets;
    }
    static set debugHighlightDeprecatedWidgets(__$value : boolean)  { 
        this.__$debugHighlightDeprecatedWidgets = __$value;
    }

}
