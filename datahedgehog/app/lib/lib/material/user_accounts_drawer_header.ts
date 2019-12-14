/** Library asset:datahedgehog_monitor/lib/lib/material/user_accounts_drawer_header.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/flutter/lib/src/widgets/framework";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/painting/edge_insets";
import * as lib6 from "@dart2ts.packages/flutter/lib/src/widgets/container";
import * as lib7 from "@dart2ts.packages/flutter/lib/src/widgets/basic";
import * as lib8 from "@dart2ts.packages/flutter/lib/src/animation/animation";
import * as lib9 from "@dart2ts.packages/flutter/lib/src/animation/animation_controller";
import * as lib10 from "@dart2ts.packages/flutter/lib/src/animation/curves";
import * as lib11 from "@dart2ts.packages/flutter/lib/src/animation/animations";
import * as lib12 from "./theme";
import * as lib13 from "./theme_data";
import * as lib14 from "@dart2ts.packages/flutter/lib/src/rendering/paragraph";
import * as lib15 from "@dart2ts.packages/flutter/lib/src/widgets/text";
import * as lib16 from "./material_localizations";
import * as math from "@dart2ts/dart/math";
import * as lib18 from "./icons";
import * as lib19 from "./colors";
import * as lib20 from "@dart2ts.packages/flutter/lib/src/widgets/icon";
import * as lib21 from "./ink_well";
import * as lib22 from "@dart2ts.packages/flutter/lib/src/rendering/custom_layout";
import * as lib23 from "@dart2ts.packages/flutter/lib/src/rendering/box";
import * as lib24 from "@dart2ts.packages/flutter/lib/src/painting/decoration";
import * as lib25 from "@dart2ts.packages/flutter/lib/src/painting/box_decoration";
import * as lib26 from "@dart2ts.packages/flutter/lib/src/rendering/flex";
import * as lib27 from "@dart2ts.packages/flutter/lib/src/widgets/safe_area";
import * as lib28 from "./drawer_header";

export namespace _AccountPictures {
    export type Constructors = lib3.StatelessWidget.Constructors | '_AccountPictures';
    export type Interface = Omit<_AccountPictures, Constructors>;
}
@DartClass
export class _AccountPictures extends lib3.StatelessWidget {
    constructor(_namedArguments? : {key? : lib4.Key,currentAccountPicture? : lib3.Widget,otherAccountsPictures? : core.DartList<lib3.Widget>}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _AccountPictures(_namedArguments? : {key? : lib4.Key,currentAccountPicture? : lib3.Widget,otherAccountsPictures? : core.DartList<lib3.Widget>}) {
        let {key,currentAccountPicture,otherAccountsPictures} = Object.assign({
        }, _namedArguments );
        super.StatelessWidget({
            key : key});
        this.currentAccountPicture = currentAccountPicture;
        this.otherAccountsPictures = otherAccountsPictures;
    }
    currentAccountPicture : lib3.Widget;

    otherAccountsPictures : core.DartList<lib3.Widget>;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib3.BuildContext) : lib3.Widget {
        return lib7.Stack({
            children : new core.DartList.literal<lib3.Widget>(lib7.PositionedDirectional({
                top : 0.0,end : 0.0,child : lib7.Row({
                    children : ((this.otherAccountsPictures || new core.DartList.literal<lib3.Widget>())).take(3).map((picture : lib3.Widget) =>  {
                        return lib7.Padding({
                            padding : new lib5.EdgeInsetsDirectional.only({
                                start : 8.0}),child : lib7.Semantics({
                                container : true,child : lib6.Container({
                                    padding : new lib5.EdgeInsets.only({
                                        left : 8.0,bottom : 8.0}),width : 48.0,height : 48.0,child : picture})})});
                    }).toList()})}),lib7.Positioned({
                top : 0.0,child : lib7.Semantics({
                    explicitChildNodes : true,child : lib7.SizedBox({
                        width : 72.0,height : 72.0,child : this.currentAccountPicture})})}))});
    }
}

export namespace _AccountDetails {
    export type Constructors = lib3.StatefulWidget.Constructors | '_AccountDetails';
    export type Interface = Omit<_AccountDetails, Constructors>;
}
@DartClass
export class _AccountDetails extends lib3.StatefulWidget {
    constructor(_namedArguments? : {key? : lib4.Key,accountName? : lib3.Widget,accountEmail? : lib3.Widget,onTap? : any,isOpen? : boolean}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _AccountDetails(_namedArguments? : {key? : lib4.Key,accountName? : lib3.Widget,accountEmail? : lib3.Widget,onTap? : any,isOpen? : boolean}) {
        let {key,accountName,accountEmail,onTap,isOpen} = Object.assign({
        }, _namedArguments );
        super.StatefulWidget({
            key : key});
        this.accountName = accountName;
        this.accountEmail = accountEmail;
        this.onTap = onTap;
        this.isOpen = isOpen;
    }
    accountName : lib3.Widget;

    accountEmail : lib3.Widget;

    onTap : any;

    isOpen : boolean;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createState() : _AccountDetailsState {
        return _AccountDetailsState();
    }
}

export namespace _AccountDetailsState {
    export type Constructors = '_AccountDetailsState';
    export type Interface = Omit<_AccountDetailsState, Constructors>;
}
@DartClass
@With(any)
export class _AccountDetailsState extends any implements any.Interface {
    _animation : lib8.Animation<double>;

    _controller : lib9.AnimationController;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    initState() : any {
        super.initState();
        this._controller = lib9.AnimationController({
            value : widget.isOpen ? 1.0 : 0.0,duration : new core.DartDuration({
                milliseconds : 200}),vsync : this});
        this._animation = ((_) : any =>  {
            {
                addListener(() =>  {
                    return setState(() =>  {
                    });
                });
                return _;
            }
        })(lib11.CurvedAnimation({
            parent : this._controller,curve : lib10.Curves.fastOutSlowIn,reverseCurve : lib10.Curves.fastOutSlowIn.flipped}));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    dispose() : any {
        this._controller.dispose();
        super.dispose();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    didUpdateWidget(oldWidget : _AccountDetails) : any {
        super.didUpdateWidget(oldWidget);
        if (op(Op.EQUALS,this._animation.status,lib8.AnimationStatus.dismissed) || op(Op.EQUALS,this._animation.status,lib8.AnimationStatus.reverse)) {
            this._controller.forward();
        }else {
            this._controller.reverse();
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib3.BuildContext) : lib3.Widget {
        /* TODO (AssertStatementImpl) : assert (debugCheckHasDirectionality(context)); */;
        /* TODO (AssertStatementImpl) : assert (debugCheckHasMaterialLocalizations(context)); */;
        /* TODO (AssertStatementImpl) : assert (debugCheckHasMaterialLocalizations(context)); */;
        let theme : lib13.ThemeData = lib12.Theme.of(context);
        let children : core.DartList<lib3.Widget> = new core.DartList.literal<lib3.Widget>();
        if (widget.accountName != null) {
            let accountNameLine : lib3.Widget = lib7.LayoutId({
                id : _AccountDetailsLayout.accountName,child : lib7.Padding({
                    padding : new lib5.EdgeInsets.symmetric({
                        vertical : 2.0}),child : lib15.DefaultTextStyle({
                        style : theme.primaryTextTheme.body2,overflow : lib14.TextOverflow.ellipsis,child : widget.accountName})})});
            children.add(accountNameLine);
        }
        if (widget.accountEmail != null) {
            let accountEmailLine : lib3.Widget = lib7.LayoutId({
                id : _AccountDetailsLayout.accountEmail,child : lib7.Padding({
                    padding : new lib5.EdgeInsets.symmetric({
                        vertical : 2.0}),child : lib15.DefaultTextStyle({
                        style : theme.primaryTextTheme.body1,overflow : lib14.TextOverflow.ellipsis,child : widget.accountEmail})})});
            children.add(accountEmailLine);
        }
        if (widget.onTap != null) {
            let localizations : lib16.MaterialLocalizations = lib16.MaterialLocalizations.of(context);
            let dropDownIcon : lib3.Widget = lib7.LayoutId({
                id : _AccountDetailsLayout.dropdownIcon,child : lib7.Semantics({
                    container : true,button : true,onTap : widget.onTap,child : lib7.SizedBox({
                        height : properties._kAccountDetailsHeight,width : properties._kAccountDetailsHeight,child : lib7.Center({
                            child : lib7.Transform.rotate({
                                angle : this._animation.value * math.pi,child : lib20.Icon(lib18.Icons.arrow_drop_down,{
                                    color : lib19.Colors.white,semanticLabel : widget.isOpen ? localizations.hideAccountsLabel : localizations.showAccountsLabel})})})})})});
            children.add(dropDownIcon);
        }
        let accountDetails : lib3.Widget = lib7.CustomMultiChildLayout({
            delegate : _AccountDetailsLayout({
                textDirection : lib7.Directionality.of(context)}),children : children});
        if (widget.onTap != null) {
            accountDetails = lib21.InkWell({
                onTap : widget.onTap,child : accountDetails,excludeFromSemantics : true});
        }
        return lib7.SizedBox({
            height : properties._kAccountDetailsHeight,child : accountDetails});
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _AccountDetailsState() {
    }
}

export namespace _AccountDetailsLayout {
    export type Constructors = lib22.MultiChildLayoutDelegate.Constructors | '_AccountDetailsLayout';
    export type Interface = Omit<_AccountDetailsLayout, Constructors>;
}
@DartClass
export class _AccountDetailsLayout extends lib22.MultiChildLayoutDelegate {
    constructor(_namedArguments? : {textDirection? : any}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _AccountDetailsLayout(_namedArguments? : {textDirection? : any}) {
        let {textDirection} = Object.assign({
        }, _namedArguments );
        this.textDirection = textDirection;
    }
    private static __$accountName : string;
    static get accountName() : string { 
        if (this.__$accountName===undefined) {
            this.__$accountName = 'accountName';
        }
        return this.__$accountName;
    }

    private static __$accountEmail : string;
    static get accountEmail() : string { 
        if (this.__$accountEmail===undefined) {
            this.__$accountEmail = 'accountEmail';
        }
        return this.__$accountEmail;
    }

    private static __$dropdownIcon : string;
    static get dropdownIcon() : string { 
        if (this.__$dropdownIcon===undefined) {
            this.__$dropdownIcon = 'dropdownIcon';
        }
        return this.__$dropdownIcon;
    }

    textDirection : any;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    performLayout(size : any) : any {
        let iconSize : any;
        if (this.hasChild(_AccountDetailsLayout.dropdownIcon)) {
            iconSize = this.layoutChild(_AccountDetailsLayout.dropdownIcon,lib23.BoxConstraints.loose(size));
            this.positionChild(_AccountDetailsLayout.dropdownIcon,this._offsetForIcon(size,iconSize));
        }
        let bottomLine : string = this.hasChild(_AccountDetailsLayout.accountEmail) ? _AccountDetailsLayout.accountEmail : (this.hasChild(_AccountDetailsLayout.accountName) ? _AccountDetailsLayout.accountName : null);
        if (bottomLine != null) {
            let constraintSize : any = op(Op.EQUALS,iconSize,null) ? size : op(Op.MINUS,size,Offset(iconSize.width,0.0));
            iconSize = ( iconSize ) || ( new bare.createInstance(any,null,properties._kAccountDetailsHeight,properties._kAccountDetailsHeight) );
            let bottomLineSize : any = this.layoutChild(bottomLine,lib23.BoxConstraints.loose(constraintSize));
            let bottomLineOffset : any = this._offsetForBottomLine(size,iconSize,bottomLineSize);
            this.positionChild(bottomLine,bottomLineOffset);
            if (bottomLine == _AccountDetailsLayout.accountEmail && this.hasChild(_AccountDetailsLayout.accountName)) {
                let nameSize : any = this.layoutChild(_AccountDetailsLayout.accountName,lib23.BoxConstraints.loose(constraintSize));
                this.positionChild(_AccountDetailsLayout.accountName,this._offsetForName(size,nameSize,bottomLineOffset));
            }
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    shouldRelayout(oldDelegate : lib22.MultiChildLayoutDelegate) : boolean {
        return true;
    }
    _offsetForIcon(size : any,iconSize : any) : any {
        switch (this.textDirection) {
            case TextDirection.ltr:
                return Offset(op(Op.MINUS,size.width,iconSize.width),op(Op.MINUS,size.height,iconSize.height));
            case TextDirection.rtl:
                return Offset(0.0,op(Op.MINUS,size.height,iconSize.height));
        }
        /* TODO (AssertStatementImpl) : assert (false, 'Unreachable'); */;
        return null;
    }
    _offsetForBottomLine(size : any,iconSize : any,bottomLineSize : any) : any {
        let y : double = op(Op.MINUS,op(Op.MINUS,size.height,0.5 * iconSize.height),0.5 * bottomLineSize.height);
        switch (this.textDirection) {
            case TextDirection.ltr:
                return Offset(0.0,y);
            case TextDirection.rtl:
                return Offset(op(Op.MINUS,size.width,bottomLineSize.width),y);
        }
        /* TODO (AssertStatementImpl) : assert (false, 'Unreachable'); */;
        return null;
    }
    _offsetForName(size : any,nameSize : any,bottomLineOffset : any) : any {
        let y : double = op(Op.MINUS,bottomLineOffset.dy,nameSize.height);
        switch (this.textDirection) {
            case TextDirection.ltr:
                return Offset(0.0,y);
            case TextDirection.rtl:
                return Offset(op(Op.MINUS,size.width,nameSize.width),y);
        }
        /* TODO (AssertStatementImpl) : assert (false, 'Unreachable'); */;
        return null;
    }
}

export namespace UserAccountsDrawerHeader {
    export type Constructors = lib3.StatefulWidget.Constructors | 'UserAccountsDrawerHeader';
    export type Interface = Omit<UserAccountsDrawerHeader, Constructors>;
}
@DartClass
export class UserAccountsDrawerHeader extends lib3.StatefulWidget {
    constructor(_namedArguments? : {key? : lib4.Key,decoration? : lib24.Decoration,margin? : lib5.EdgeInsetsGeometry,currentAccountPicture? : lib3.Widget,otherAccountsPictures? : core.DartList<lib3.Widget>,accountName? : lib3.Widget,accountEmail? : lib3.Widget,onDetailsPressed? : any}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    UserAccountsDrawerHeader(_namedArguments? : {key? : lib4.Key,decoration? : lib24.Decoration,margin? : lib5.EdgeInsetsGeometry,currentAccountPicture? : lib3.Widget,otherAccountsPictures? : core.DartList<lib3.Widget>,accountName? : lib3.Widget,accountEmail? : lib3.Widget,onDetailsPressed? : any}) {
        let {key,decoration,margin,currentAccountPicture,otherAccountsPictures,accountName,accountEmail,onDetailsPressed} = Object.assign({
            "margin" : new lib5.EdgeInsets.only({
                bottom : 8.0})}, _namedArguments );
        super.StatefulWidget({
            key : key});
        this.decoration = decoration;
        this.margin = margin;
        this.currentAccountPicture = currentAccountPicture;
        this.otherAccountsPictures = otherAccountsPictures;
        this.accountName = accountName;
        this.accountEmail = accountEmail;
        this.onDetailsPressed = onDetailsPressed;
    }
    decoration : lib24.Decoration;

    margin : lib5.EdgeInsetsGeometry;

    currentAccountPicture : lib3.Widget;

    otherAccountsPictures : core.DartList<lib3.Widget>;

    accountName : lib3.Widget;

    accountEmail : lib3.Widget;

    onDetailsPressed : any;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createState() : _UserAccountsDrawerHeaderState {
        return _UserAccountsDrawerHeaderState();
    }
}

export namespace _UserAccountsDrawerHeaderState {
    export type Constructors = '_UserAccountsDrawerHeaderState';
    export type Interface = Omit<_UserAccountsDrawerHeaderState, Constructors>;
}
@DartClass
export class _UserAccountsDrawerHeaderState extends any {
    _isOpen : boolean;

    _handleDetailsPressed() : any {
        setState(() =>  {
            this._isOpen = !this._isOpen;
        });
        widget.onDetailsPressed();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib3.BuildContext) : lib3.Widget {
        /* TODO (AssertStatementImpl) : assert (debugCheckHasMaterial(context)); */;
        /* TODO (AssertStatementImpl) : assert (debugCheckHasMaterialLocalizations(context)); */;
        return lib7.Semantics({
            container : true,label : lib16.MaterialLocalizations.of(context).signedInLabel,child : lib28.DrawerHeader({
                decoration : (widget.decoration || lib25.BoxDecoration({
                    color : lib12.Theme.of(context).primaryColor})),margin : widget.margin,padding : new lib5.EdgeInsetsDirectional.only({
                    top : 16.0,start : 16.0}),child : lib27.SafeArea({
                    bottom : false,child : lib7.Column({
                        crossAxisAlignment : lib26.CrossAxisAlignment.stretch,children : new core.DartList.literal<lib3.Widget>(lib7.Expanded({
                            child : lib7.Padding({
                                padding : new lib5.EdgeInsetsDirectional.only({
                                    end : 16.0}),child : _AccountPictures({
                                    currentAccountPicture : widget.currentAccountPicture,otherAccountsPictures : widget.otherAccountsPictures})})}),_AccountDetails({
                            accountName : widget.accountName,accountEmail : widget.accountEmail,isOpen : this._isOpen,onTap : op(Op.EQUALS,widget.onDetailsPressed,null) ? null : this._handleDetailsPressed.bind(this)}))})})})});
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _UserAccountsDrawerHeaderState() {
        this._isOpen = false;
    }
}

export class properties {
    private static __$_kAccountDetailsHeight : double;
    static get _kAccountDetailsHeight() : double { 
        if (this.__$_kAccountDetailsHeight===undefined) {
            this.__$_kAccountDetailsHeight = 56.0;
        }
        return this.__$_kAccountDetailsHeight;
    }
    static set _kAccountDetailsHeight(__$value : double)  { 
        this.__$_kAccountDetailsHeight = __$value;
    }

}
