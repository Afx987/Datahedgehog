/** Library asset:datahedgehog_monitor/lib/lib/cupertino/tab_scaffold.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/flutter/lib/src/widgets/framework";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as lib5 from "./bottom_tab_bar";
import * as lib6 from "@dart2ts.packages/flutter/lib/src/widgets/media_query";
import * as lib7 from "@dart2ts.packages/flutter/lib/src/painting/edge_insets";
import * as lib8 from "@dart2ts.packages/flutter/lib/src/widgets/basic";
import * as lib9 from "@dart2ts.packages/flutter/lib/src/painting/alignment";
import * as lib10 from "./theme";
import * as lib11 from "@dart2ts.packages/flutter/lib/src/painting/box_decoration";
import * as lib12 from "@dart2ts.packages/flutter/lib/src/widgets/container";
import * as lib13 from "@dart2ts.packages/flutter/lib/src/widgets/focus_manager";
import * as lib14 from "@dart2ts.packages/flutter/lib/src/widgets/text_selection";
import * as lib15 from "@dart2ts.packages/flutter/lib/src/widgets/focus_scope";
import * as lib16 from "@dart2ts.packages/flutter/lib/src/rendering/stack";
import * as lib17 from "@dart2ts.packages/flutter/lib/src/widgets/ticker_provider";

export namespace CupertinoTabScaffold {
    export type Constructors = lib3.StatefulWidget.Constructors | 'CupertinoTabScaffold';
    export type Interface = Omit<CupertinoTabScaffold, Constructors>;
}
@DartClass
export class CupertinoTabScaffold extends lib3.StatefulWidget {
    constructor(_namedArguments? : {key? : lib4.Key,tabBar? : lib5.CupertinoTabBar,tabBuilder? : (context : lib3.BuildContext,index : number) => lib3.Widget,backgroundColor? : any,resizeToAvoidBottomInset? : boolean}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    CupertinoTabScaffold(_namedArguments? : {key? : lib4.Key,tabBar? : lib5.CupertinoTabBar,tabBuilder? : (context : lib3.BuildContext,index : number) => lib3.Widget,backgroundColor? : any,resizeToAvoidBottomInset? : boolean}) {
        let {key,tabBar,tabBuilder,backgroundColor,resizeToAvoidBottomInset} = Object.assign({
            "resizeToAvoidBottomInset" : true}, _namedArguments );
        this.assert = assert;
        this.tabBar = tabBar;
        this.tabBuilder = tabBuilder;
        this.backgroundColor = backgroundColor;
        this.resizeToAvoidBottomInset = resizeToAvoidBottomInset;
    }
     : any;

     : any;

     : any;

     : any;

    tabBar : lib5.CupertinoTabBar;

    tabBuilder : (context : lib3.BuildContext,index : number) => lib3.Widget;

    backgroundColor : any;

    resizeToAvoidBottomInset : boolean;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createState() : _CupertinoTabScaffoldState {
        return _CupertinoTabScaffoldState();
    }
}

export namespace _CupertinoTabScaffoldState {
    export type Constructors = '_CupertinoTabScaffoldState';
    export type Interface = Omit<_CupertinoTabScaffoldState, Constructors>;
}
@DartClass
export class _CupertinoTabScaffoldState extends any {
    _currentPage : number;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    initState() : any {
        super.initState();
        this._currentPage = widget.tabBar.currentIndex;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    didUpdateWidget(oldWidget : CupertinoTabScaffold) : any {
        super.didUpdateWidget(oldWidget);
        if (this._currentPage >= widget.tabBar.items.length) {
            this._currentPage = op(Op.MINUS,widget.tabBar.items.length,1);
            /* TODO (AssertStatementImpl) : assert (_currentPage >= 0, 'CupertinoTabBar is expected to keep at least 2 tabs after updating'); */;
            ;
        }
        if (widget.tabBar.currentIndex != oldWidget.tabBar.currentIndex) {
            this._currentPage = widget.tabBar.currentIndex;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib3.BuildContext) : lib3.Widget {
        let stacked : core.DartList<lib3.Widget> = new core.DartList.literal<lib3.Widget>();
        let existingMediaQuery : lib6.MediaQueryData = lib6.MediaQuery.of(context);
        let newMediaQuery : lib6.MediaQueryData = lib6.MediaQuery.of(context);
        let content : lib3.Widget = _TabSwitchingView({
            currentTabIndex : this._currentPage,tabNumber : widget.tabBar.items.length,tabBuilder : widget.tabBuilder});
        if (widget.resizeToAvoidBottomInset) {
            newMediaQuery = newMediaQuery.removeViewInsets({
                removeBottom : true});
            content = lib8.Padding({
                padding : lib7.EdgeInsets.only({
                    bottom : existingMediaQuery.viewInsets.bottom}),child : content});
        }
        if (widget.tabBar != null && (!widget.resizeToAvoidBottomInset || op(Op.GT,widget.tabBar.preferredSize.height,existingMediaQuery.viewInsets.bottom))) {
            let bottomPadding : double = op(Op.PLUS,widget.tabBar.preferredSize.height,existingMediaQuery.padding.bottom);
            if (widget.tabBar.opaque(context)) {
                content = lib8.Padding({
                    padding : lib7.EdgeInsets.only({
                        bottom : bottomPadding}),child : content});
            }else {
                newMediaQuery = newMediaQuery.copyWith({
                    padding : newMediaQuery.padding.copyWith({
                        bottom : bottomPadding})});
            }
        }
        content = lib6.MediaQuery({
            data : newMediaQuery,child : content});
        stacked.add(content);
        if (widget.tabBar != null) {
            stacked.add(lib8.Align({
                alignment : lib9.Alignment.bottomCenter,child : widget.tabBar.copyWith({
                    currentIndex : this._currentPage,onTap : (newIndex : number) =>  {
                        setState(() =>  {
                            this._currentPage = newIndex;
                        });
                        if (widget.tabBar.onTap != null) widget.tabBar.onTap(newIndex);
                    }})}));
        }
        return lib12.DecoratedBox({
            decoration : lib11.BoxDecoration({
                color : (widget.backgroundColor || lib10.CupertinoTheme.of(context).scaffoldBackgroundColor)}),child : lib8.Stack({
                children : stacked})});
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _CupertinoTabScaffoldState() {
    }
}

export namespace _TabSwitchingView {
    export type Constructors = lib3.StatefulWidget.Constructors | '_TabSwitchingView';
    export type Interface = Omit<_TabSwitchingView, Constructors>;
}
@DartClass
export class _TabSwitchingView extends lib3.StatefulWidget {
    constructor(_namedArguments? : {currentTabIndex? : number,tabNumber? : number,tabBuilder? : (context : lib3.BuildContext,index : number) => lib3.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _TabSwitchingView(_namedArguments? : {currentTabIndex? : number,tabNumber? : number,tabBuilder? : (context : lib3.BuildContext,index : number) => lib3.Widget}) {
        let {currentTabIndex,tabNumber,tabBuilder} = Object.assign({
        }, _namedArguments );
        this.assert = assert;
        this.currentTabIndex = currentTabIndex;
        this.tabNumber = tabNumber;
        this.tabBuilder = tabBuilder;
    }
     : any;

     : any;

     : any;

     : any;

    currentTabIndex : number;

    tabNumber : number;

    tabBuilder : (context : lib3.BuildContext,index : number) => lib3.Widget;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createState() : _TabSwitchingViewState {
        return _TabSwitchingViewState();
    }
}

export namespace _TabSwitchingViewState {
    export type Constructors = '_TabSwitchingViewState';
    export type Interface = Omit<_TabSwitchingViewState, Constructors>;
}
@DartClass
export class _TabSwitchingViewState extends any {
    tabs : core.DartList<lib3.Widget>;

    tabFocusNodes : core.DartList<lib13.FocusScopeNode>;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    initState() : any {
        super.initState();
        this.tabs = core.DartList(widget.tabNumber);
        this.tabFocusNodes = op(Op.LT,core.DartList<E>,lib13.FocusScopeNode);
        op(Op.GT,,.generate(widget.tabNumber,(index : number) =>  {
            return lib13.FocusScopeNode();
        }));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    didChangeDependencies() : any {
        super.didChangeDependencies();
        this._focusActiveTab();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    didUpdateWidget(oldWidget : _TabSwitchingView) : any {
        super.didUpdateWidget(oldWidget);
        this._focusActiveTab();
    }
    _focusActiveTab() : any {
        lib15.FocusScope.of(lib14.properties.context).setFirstFocus(this.tabFocusNodes[widget.currentTabIndex]);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    dispose() : any {
        for(let focusScopeNode of this.tabFocusNodes) {
            focusScopeNode.detach();
        }
        super.dispose();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib3.BuildContext) : lib3.Widget {
        return op(Op.GT,lib8.Stack({
            fit : lib16.StackFit.expand,children : op(Op.LT,core.DartList<E>,lib3.Widget)}),.generate(widget.tabNumber,(index : number) =>  {
            let active : boolean = index == widget.currentTabIndex;
            if (active || this.tabs[index] != null) {
                this.tabs[index] = widget.tabBuilder(context,index);
            }
            return lib8.Offstage({
                offstage : !active,child : lib17.TickerMode({
                    enabled : active,child : lib15.FocusScope({
                        node : this.tabFocusNodes[index],child : (this.tabs[index] || lib12.Container())})})});
        }));
        ;
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _TabSwitchingViewState() {
    }
}

export class properties {
}
