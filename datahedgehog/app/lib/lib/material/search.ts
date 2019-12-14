/** Library asset:datahedgehog_monitor/lib/lib/material/search.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/flutter/lib/src/widgets/framework";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/widgets/navigator";
import * as lib5 from "./theme";
import * as lib6 from "./theme_data";
import * as lib7 from "./colors";
import * as lib8 from "@dart2ts.packages/flutter/lib/src/widgets/focus_scope";
import * as lib9 from "@dart2ts.packages/flutter/lib/src/animation/animation";
import * as lib10 from "@dart2ts.packages/flutter/lib/src/widgets/focus_manager";
import * as lib11 from "@dart2ts.packages/flutter/lib/src/widgets/editable_text";
import * as lib12 from "@dart2ts.packages/flutter/lib/src/animation/animations";
import * as lib13 from "@dart2ts.packages/flutter/lib/src/foundation/change_notifier";
import * as lib14 from "@dart2ts.packages/flutter/lib/src/widgets/pages";
import * as lib15 from "@dart2ts.packages/flutter/lib/src/widgets/transitions";
import * as lib16 from "@dart2ts.packages/flutter/lib/src/widgets/text_selection";
import * as lib17 from "./material_localizations";
import * as lib18 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as lib19 from "@dart2ts.packages/flutter/lib/src/widgets/basic";
import * as lib20 from "@dart2ts.packages/flutter/lib/src/foundation/platform";
import * as lib21 from "@dart2ts.packages/flutter/lib/src/services/text_input";
import * as lib22 from "./input_border";
import * as lib23 from "./input_decorator";
import * as lib24 from "./text_field";
import * as lib25 from "./app_bar";
import * as lib26 from "@dart2ts.packages/flutter/lib/src/widgets/animated_switcher";
import * as lib27 from "./scaffold";

export var showSearch : <T>(_namedArguments? : {context? : lib3.BuildContext,delegate? : SearchDelegate<T>,query? : string}) => async.Future<T> = <T>(_namedArguments? : {context? : lib3.BuildContext,delegate? : SearchDelegate<T>,query? : string}) : async.Future<T> =>  {
    let {context,delegate,query} = Object.assign({
        "query" : ''}, _namedArguments );
    /* TODO (AssertStatementImpl) : assert (delegate != null); */;
    /* TODO (AssertStatementImpl) : assert (context != null); */;
    delegate.query = (query || delegate.query);
    delegate._currentBody = _SearchBody.suggestions;
    return lib4.Navigator.of(context).push(_SearchPageRoute({
        delegate : delegate}));
};
export var buildTransitions : (context : lib3.BuildContext,animation : lib9.Animation<double>,secondaryAnimation : lib9.Animation<double>,child : lib3.Widget) => lib3.Widget = (context : lib3.BuildContext,animation : lib9.Animation<double>,secondaryAnimation : lib9.Animation<double>,child : lib3.Widget) : lib3.Widget =>  {
    return lib15.FadeTransition({
        opacity : animation,child : child});
};
export var createAnimation : () => lib9.Animation<double> = () : lib9.Animation<double> =>  {
    let animation : lib9.Animation<double> = super.createAnimation();
    properties.delegate._proxyAnimation.parent = animation;
    return animation;
};
export var buildPage : (context : lib3.BuildContext,animation : lib9.Animation<double>,secondaryAnimation : lib9.Animation<double>) => lib3.Widget = (context : lib3.BuildContext,animation : lib9.Animation<double>,secondaryAnimation : lib9.Animation<double>) : lib3.Widget =>  {
    return _SearchPage({
        delegate : properties.delegate,animation : animation});
};
export var didComplete : (result : any) => any = (result : any) : any =>  {
    super.didComplete(result);
    /* TODO (AssertStatementImpl) : assert (delegate._route == this); */;
    properties.delegate._route = null;
    properties.delegate._currentBody = null;
};
export namespace SearchDelegate {
    export type Constructors = 'SearchDelegate';
    export type Interface<T> = Omit<SearchDelegate<T>, Constructors>;
}
@DartClass
export class SearchDelegate<T> {
    @Abstract
    buildSuggestions(context : lib3.BuildContext) : lib3.Widget{ throw 'abstract'}
    @Abstract
    buildResults(context : lib3.BuildContext) : lib3.Widget{ throw 'abstract'}
    @Abstract
    buildLeading(context : lib3.BuildContext) : lib3.Widget{ throw 'abstract'}
    @Abstract
    buildActions(context : lib3.BuildContext) : core.DartList<lib3.Widget>{ throw 'abstract'}
    appBarTheme(context : lib3.BuildContext) : lib6.ThemeData {
        /* TODO (AssertStatementImpl) : assert (context != null); */;
        let theme : lib6.ThemeData = lib5.Theme.of(context);
        /* TODO (AssertStatementImpl) : assert (theme != null); */;
        return theme.copyWith({
            primaryColor : lib7.Colors.white,primaryIconTheme : theme.primaryIconTheme.copyWith({
                color : lib7.Colors.grey}),primaryColorBrightness : Brightness.light,primaryTextTheme : theme.textTheme});
    }
    get query() : string {
        return this._queryTextController.text;
    }
    set query(value : string) {
        /* TODO (AssertStatementImpl) : assert (query != null); */;
        this._queryTextController.text = value;
    }
    showResults(context : lib3.BuildContext) : any {
        this._focusNode.unfocus();
        this._currentBody = _SearchBody.results;
    }
    showSuggestions(context : lib3.BuildContext) : any {
        lib8.FocusScope.of(context).requestFocus(this._focusNode);
        this._currentBody = _SearchBody.suggestions;
    }
    close(context : lib3.BuildContext,result : T) : any {
        this._currentBody = null;
        this._focusNode.unfocus();
        ((_) : lib4.NavigatorState =>  {
            {
                _.popUntil((route : any) =>  {
                    return op(Op.EQUALS,route,this._route);
                });
                _.pop(result);
                return _;
            }
        })(lib4.Navigator.of(context));
    }
    get transitionAnimation() : lib9.Animation<double> {
        return this._proxyAnimation;
    }
    _focusNode : lib10.FocusNode;

    _queryTextController : lib11.TextEditingController;

    _proxyAnimation : lib12.ProxyAnimation;

    _currentBodyNotifier : lib13.ValueNotifier<_SearchBody>;

    get _currentBody() : _SearchBody {
        return this._currentBodyNotifier.value;
    }
    set _currentBody(value : _SearchBody) {
        this._currentBodyNotifier.value = value;
    }
    _route : _SearchPageRoute<T>;

    constructor() {
    }
    @defaultConstructor
    SearchDelegate() {
        this._focusNode = lib10.FocusNode();
        this._queryTextController = lib11.TextEditingController();
        this._proxyAnimation = lib12.ProxyAnimation(lib12.properties.kAlwaysDismissedAnimation);
        this._currentBodyNotifier = lib13.ValueNotifier(null);
    }
}

export enum _SearchBody {
    suggestions,
    results
}

export namespace _SearchPageRoute {
    export type Constructors = lib14.PageRoute.Constructors | '_SearchPageRoute';
    export type Interface<T> = Omit<_SearchPageRoute<T>, Constructors>;
}
@DartClass
export class _SearchPageRoute<T> extends lib14.PageRoute<T> {
    constructor(_namedArguments? : {delegate? : any}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _SearchPageRoute(_namedArguments? : {delegate? : any}) {
        let {delegate} = Object.assign({
        }, _namedArguments );
        this.assert = assert;
        this.delegate = delegate;
    }
     : any;

     : any;

     : any;

}

export namespace _SearchPage {
    export type Constructors = lib3.StatefulWidget.Constructors | '_SearchPage';
    export type Interface<T> = Omit<_SearchPage<T>, Constructors>;
}
@DartClass
export class _SearchPage<T> extends lib3.StatefulWidget {
    constructor(_namedArguments? : {delegate? : SearchDelegate<T>,animation? : lib9.Animation<double>}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _SearchPage(_namedArguments? : {delegate? : SearchDelegate<T>,animation? : lib9.Animation<double>}) {
        let {delegate,animation} = Object.assign({
        }, _namedArguments );
        this.delegate = delegate;
        this.animation = animation;
    }
    delegate : SearchDelegate<T>;

    animation : lib9.Animation<double>;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createState() : any {
        return _SearchPageState();
    }
}

export namespace _SearchPageState {
    export type Constructors = '_SearchPageState';
    export type Interface<T> = Omit<_SearchPageState<T>, Constructors>;
}
@DartClass
export class _SearchPageState<T> extends any {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    initState() : any {
        super.initState();
        this.queryTextController.addListener(this._onQueryChanged.bind(this));
        widget.animation.addStatusListener(this._onAnimationStatusChanged.bind(this));
        widget.delegate._currentBodyNotifier.addListener(this._onSearchBodyChanged.bind(this));
        widget.delegate._focusNode.addListener(this._onFocusChanged.bind(this));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    dispose() : any {
        super.dispose();
        this.queryTextController.removeListener(this._onQueryChanged.bind(this));
        widget.animation.removeStatusListener(this._onAnimationStatusChanged.bind(this));
        widget.delegate._currentBodyNotifier.removeListener(this._onSearchBodyChanged.bind(this));
        widget.delegate._focusNode.removeListener(this._onFocusChanged.bind(this));
    }
    _onAnimationStatusChanged(status : lib9.AnimationStatus) : any {
        if (status != lib9.AnimationStatus.completed) {
            return;
        }
        widget.animation.removeStatusListener(this._onAnimationStatusChanged.bind(this));
        if (op(Op.EQUALS,widget.delegate._currentBody,_SearchBody.suggestions)) {
            lib8.FocusScope.of(lib16.properties.context).requestFocus(widget.delegate._focusNode);
        }
    }
    _onFocusChanged() : any {
        if (widget.delegate._focusNode.hasFocus && widget.delegate._currentBody != _SearchBody.suggestions) {
            widget.delegate.showSuggestions(lib16.properties.context);
        }
    }
    _onQueryChanged() : any {
        setState(() =>  {
        });
    }
    _onSearchBodyChanged() : any {
        setState(() =>  {
        });
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib3.BuildContext) : lib3.Widget {
        /* TODO (AssertStatementImpl) : assert (debugCheckHasMaterialLocalizations(context)); */;
        let theme : lib6.ThemeData = widget.delegate.appBarTheme(context);
        let searchFieldLabel : string = lib17.MaterialLocalizations.of(context).searchFieldLabel;
        let body : lib3.Widget;
        switch (widget.delegate._currentBody) {
            case _SearchBody.suggestions:
                body = lib19.KeyedSubtree({
                    key : new lib18.ValueKey<_SearchBody>(_SearchBody.suggestions),child : widget.delegate.buildSuggestions(context)});
                break;
            case _SearchBody.results:
                body = lib19.KeyedSubtree({
                    key : new lib18.ValueKey<_SearchBody>(_SearchBody.results),child : widget.delegate.buildResults(context)});
                break;
        }
        let routeName : string;
        switch (lib20.properties.defaultTargetPlatform) {
            case lib20.TargetPlatform.iOS:
                routeName = '';
                break;
            case lib20.TargetPlatform.android:
            case lib20.TargetPlatform.fuchsia:
                routeName = searchFieldLabel;
        }
        return lib19.Semantics({
            explicitChildNodes : true,scopesRoute : true,namesRoute : true,label : routeName,child : lib27.Scaffold({
                appBar : lib25.AppBar({
                    backgroundColor : theme.primaryColor,iconTheme : theme.primaryIconTheme,textTheme : theme.primaryTextTheme,brightness : theme.primaryColorBrightness,leading : widget.delegate.buildLeading(context),title : lib24.TextField({
                        controller : this.queryTextController,focusNode : widget.delegate._focusNode,style : theme.textTheme.title,textInputAction : lib21.TextInputAction.search,onSubmitted : (_ : string) =>  {
                            widget.delegate.showResults(context);
                        },decoration : lib23.InputDecoration({
                            border : lib22.InputBorder.none,hintText : searchFieldLabel})}),actions : widget.delegate.buildActions(context)}),body : lib26.AnimatedSwitcher({
                    duration : new core.DartDuration({
                        milliseconds : 300}),child : body})})});
    }
    get queryTextController() : lib11.TextEditingController {
        return widget.delegate._queryTextController;
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _SearchPageState() {
    }
}

export class properties {
    private static __$ : any;
    static get () : any { 
        return this.__$;
    }
    static set (__$value : any)  { 
        this.__$ = __$value;
    }

    private static __$delegate : SearchDelegate<any>;
    static get delegate() : SearchDelegate<any> { 
        return this.__$delegate;
    }
    static set delegate(__$value : SearchDelegate<any>)  { 
        this.__$delegate = __$value;
    }

    static get barrierColor() : any {
        return null;
    }
    static get barrierLabel() : string {
        return null;
    }
    static get transitionDuration() : core.DartDuration {
        return new core.DartDuration({
            milliseconds : 300});
    }
    static get maintainState() : boolean {
        return false;
    }
}
