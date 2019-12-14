/** Library asset:datahedgehog_monitor/lib/lib/widgets/fade_in_image.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./framework";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/animation/curves";
import * as lib6 from "@dart2ts.packages/flutter/lib/src/painting/box_fit";
import * as lib7 from "@dart2ts.packages/flutter/lib/src/painting/alignment";
import * as lib8 from "@dart2ts.packages/flutter/lib/src/painting/decoration_image";
import * as typed_data from "@dart2ts/dart/typed_data";
import * as lib10 from "@dart2ts.packages/flutter/lib/src/painting/image_provider";
import * as lib11 from "@dart2ts.packages/flutter/lib/src/services/asset_bundle";
import * as lib12 from "@dart2ts.packages/flutter/lib/src/painting/image_resolution";
import * as lib13 from "@dart2ts.packages/flutter/lib/src/painting/image_stream";
import * as lib14 from "./image";
import * as lib15 from "@dart2ts.packages/flutter/lib/src/animation/animation_controller";
import * as lib16 from "@dart2ts.packages/flutter/lib/src/animation/animation";
import * as lib17 from "@dart2ts.packages/flutter/lib/src/animation/animations";
import * as lib18 from "./basic";
import * as lib19 from "@dart2ts.packages/flutter/lib/src/foundation/diagnostics";

export namespace FadeInImage {
    export type Constructors = lib3.StatefulWidget.Constructors | 'FadeInImage' | 'memoryNetwork' | 'assetNetwork';
    export type Interface = Omit<FadeInImage, Constructors>;
}
@DartClass
export class FadeInImage extends lib3.StatefulWidget {
    constructor(_namedArguments? : {key? : lib4.Key,placeholder? : any,image? : any,fadeOutDuration? : core.DartDuration,fadeOutCurve? : lib5.Curve,fadeInDuration? : core.DartDuration,fadeInCurve? : lib5.Curve,width? : double,height? : double,fit? : lib6.BoxFit,alignment? : lib7.AlignmentGeometry,repeat? : lib8.ImageRepeat,matchTextDirection? : boolean}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    FadeInImage(_namedArguments? : {key? : lib4.Key,placeholder? : any,image? : any,fadeOutDuration? : core.DartDuration,fadeOutCurve? : lib5.Curve,fadeInDuration? : core.DartDuration,fadeInCurve? : lib5.Curve,width? : double,height? : double,fit? : lib6.BoxFit,alignment? : lib7.AlignmentGeometry,repeat? : lib8.ImageRepeat,matchTextDirection? : boolean}) {
        let {key,placeholder,image,fadeOutDuration,fadeOutCurve,fadeInDuration,fadeInCurve,width,height,fit,alignment,repeat,matchTextDirection} = Object.assign({
            "fadeOutDuration" : new core.DartDuration({
                milliseconds : 300}),
            "fadeOutCurve" : lib5.Curves.easeOut,
            "fadeInDuration" : new core.DartDuration({
                milliseconds : 700}),
            "fadeInCurve" : lib5.Curves.easeIn,
            "alignment" : lib7.Alignment.center,
            "repeat" : lib8.ImageRepeat.noRepeat,
            "matchTextDirection" : false}, _namedArguments );
        this.placeholder = lib10.MemoryImage(this.placeholder,{
            scale : placeholderScale});
        this.image = lib10.NetworkImage(this.image,{
            scale : imageScale});
        this.placeholder = placeholderScale != null ? lib10.ExactAssetImage(this.placeholder,{
            bundle : bundle,scale : placeholderScale}) : lib12.AssetImage(this.placeholder,{
            bundle : bundle});
        this.image = lib10.NetworkImage(this.image,{
            scale : imageScale});
        this.assert = assert;
        this.placeholder = placeholder;
        this.image = image;
        this.fadeOutDuration = fadeOutDuration;
        this.fadeOutCurve = fadeOutCurve;
        this.fadeInDuration = fadeInDuration;
        this.fadeInCurve = fadeInCurve;
        this.width = width;
        this.height = height;
        this.fit = fit;
        this.alignment = alignment;
        this.repeat = repeat;
        this.matchTextDirection = matchTextDirection;
    }
     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

    @namedConstructor
    memoryNetwork(_namedArguments? : {key? : lib4.Key,placeholder? : typed_data.Uint8List,image? : string,placeholderScale? : double,imageScale? : double,fadeOutDuration? : core.DartDuration,fadeOutCurve? : lib5.Curve,fadeInDuration? : core.DartDuration,fadeInCurve? : lib5.Curve,width? : double,height? : double,fit? : lib6.BoxFit,alignment? : lib7.AlignmentGeometry,repeat? : lib8.ImageRepeat,matchTextDirection? : boolean}) {
        let {key,placeholder,image,placeholderScale,imageScale,fadeOutDuration,fadeOutCurve,fadeInDuration,fadeInCurve,width,height,fit,alignment,repeat,matchTextDirection} = Object.assign({
            "placeholderScale" : 1.0,
            "imageScale" : 1.0,
            "fadeOutDuration" : new core.DartDuration({
                milliseconds : 300}),
            "fadeOutCurve" : lib5.Curves.easeOut,
            "fadeInDuration" : new core.DartDuration({
                milliseconds : 700}),
            "fadeInCurve" : lib5.Curves.easeIn,
            "alignment" : lib7.Alignment.center,
            "repeat" : lib8.ImageRepeat.noRepeat,
            "matchTextDirection" : false}, _namedArguments );
        this.placeholder = lib10.MemoryImage(this.placeholder,{
            scale : placeholderScale});
        this.image = lib10.NetworkImage(this.image,{
            scale : imageScale});
        this.placeholder = placeholderScale != null ? lib10.ExactAssetImage(this.placeholder,{
            bundle : bundle,scale : placeholderScale}) : lib12.AssetImage(this.placeholder,{
            bundle : bundle});
        this.image = lib10.NetworkImage(this.image,{
            scale : imageScale});
        this.assert = assert;
        this.fadeOutDuration = fadeOutDuration;
        this.fadeOutCurve = fadeOutCurve;
        this.fadeInDuration = fadeInDuration;
        this.fadeInCurve = fadeInCurve;
        this.width = width;
        this.height = height;
        this.fit = fit;
        this.alignment = alignment;
        this.repeat = repeat;
        this.matchTextDirection = matchTextDirection;
    }
    static memoryNetwork : new(_namedArguments? : {key? : lib4.Key,placeholder? : typed_data.Uint8List,image? : string,placeholderScale? : double,imageScale? : double,fadeOutDuration? : core.DartDuration,fadeOutCurve? : lib5.Curve,fadeInDuration? : core.DartDuration,fadeInCurve? : lib5.Curve,width? : double,height? : double,fit? : lib6.BoxFit,alignment? : lib7.AlignmentGeometry,repeat? : lib8.ImageRepeat,matchTextDirection? : boolean}) => FadeInImage;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

    placeholder;
    image;
    super;

     : any;

     : any;

    @namedConstructor
    assetNetwork(_namedArguments? : {key? : lib4.Key,placeholder? : string,image? : string,bundle? : lib11.AssetBundle,placeholderScale? : double,imageScale? : double,fadeOutDuration? : core.DartDuration,fadeOutCurve? : lib5.Curve,fadeInDuration? : core.DartDuration,fadeInCurve? : lib5.Curve,width? : double,height? : double,fit? : lib6.BoxFit,alignment? : lib7.AlignmentGeometry,repeat? : lib8.ImageRepeat,matchTextDirection? : boolean}) {
        let {key,placeholder,image,bundle,placeholderScale,imageScale,fadeOutDuration,fadeOutCurve,fadeInDuration,fadeInCurve,width,height,fit,alignment,repeat,matchTextDirection} = Object.assign({
            "imageScale" : 1.0,
            "fadeOutDuration" : new core.DartDuration({
                milliseconds : 300}),
            "fadeOutCurve" : lib5.Curves.easeOut,
            "fadeInDuration" : new core.DartDuration({
                milliseconds : 700}),
            "fadeInCurve" : lib5.Curves.easeIn,
            "alignment" : lib7.Alignment.center,
            "repeat" : lib8.ImageRepeat.noRepeat,
            "matchTextDirection" : false}, _namedArguments );
        this.placeholder = lib10.MemoryImage(this.placeholder,{
            scale : placeholderScale});
        this.image = lib10.NetworkImage(this.image,{
            scale : imageScale});
        this.placeholder = placeholderScale != null ? lib10.ExactAssetImage(this.placeholder,{
            bundle : bundle,scale : placeholderScale}) : lib12.AssetImage(this.placeholder,{
            bundle : bundle});
        this.image = lib10.NetworkImage(this.image,{
            scale : imageScale});
        this.assert = assert;
        this.fadeOutDuration = fadeOutDuration;
        this.fadeOutCurve = fadeOutCurve;
        this.fadeInDuration = fadeInDuration;
        this.fadeInCurve = fadeInCurve;
        this.width = width;
        this.height = height;
        this.fit = fit;
        this.alignment = alignment;
        this.repeat = repeat;
        this.matchTextDirection = matchTextDirection;
    }
    static assetNetwork : new(_namedArguments? : {key? : lib4.Key,placeholder? : string,image? : string,bundle? : lib11.AssetBundle,placeholderScale? : double,imageScale? : double,fadeOutDuration? : core.DartDuration,fadeOutCurve? : lib5.Curve,fadeInDuration? : core.DartDuration,fadeInCurve? : lib5.Curve,width? : double,height? : double,fit? : lib6.BoxFit,alignment? : lib7.AlignmentGeometry,repeat? : lib8.ImageRepeat,matchTextDirection? : boolean}) => FadeInImage;

     : any;

     : any;

    placeholder;
    assert;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

    image;
    super;

     : any;

     : any;

    placeholder : lib10.ImageProvider<any>;

    image : lib10.ImageProvider<any>;

    fadeOutDuration : core.DartDuration;

    fadeOutCurve : lib5.Curve;

    fadeInDuration : core.DartDuration;

    fadeInCurve : lib5.Curve;

    width : double;

    height : double;

    fit : lib6.BoxFit;

    alignment : lib7.AlignmentGeometry;

    repeat : lib8.ImageRepeat;

    matchTextDirection : boolean;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createState() : any {
        return _FadeInImageState();
    }
}

export enum FadeInImagePhase {
    start,
    waiting,
    fadeOut,
    fadeIn,
    completed
}

export namespace _ImageProviderResolver {
    export type Constructors = '_ImageProviderResolver';
    export type Interface = Omit<_ImageProviderResolver, Constructors>;
}
@DartClass
export class _ImageProviderResolver {
    constructor(_namedArguments? : {state? : _FadeInImageState,listener? : () => any}) {
    }
    @defaultConstructor
    _ImageProviderResolver(_namedArguments? : {state? : _FadeInImageState,listener? : () => any}) {
        let {state,listener} = Object.assign({
        }, _namedArguments );
        this.state = state;
        this.listener = listener;
    }
    state : _FadeInImageState;

    listener : () => any;

    get widget() : FadeInImage {
        return this.state.widget;
    }
    _imageStream : lib13.ImageStream;

    _imageInfo : lib13.ImageInfo;

    resolve(provider : lib10.ImageProvider<any>) : any {
        let oldImageStream : lib13.ImageStream = this._imageStream;
        this._imageStream = provider.resolve(lib14.createLocalImageConfiguration(this.state.context,{
            size : this.widget.width != null && this.widget.height != null ? Size(this.widget.width,this.widget.height) : null}));
        /* TODO (AssertStatementImpl) : assert (_imageStream != null); */;
        if (this._imageStream.key != ((t)=>(!!t)?t.key:null)(oldImageStream)) {
            ((_880_)=>(!!_880_)?_880_.removeListener(this._handleImageChanged.bind(this)):null)(oldImageStream);
            this._imageStream.addListener(this._handleImageChanged.bind(this));
        }
    }
    _handleImageChanged(imageInfo : lib13.ImageInfo,synchronousCall : boolean) : any {
        this._imageInfo = imageInfo;
        this.listener();
    }
    stopListening() : any {
        ((_881_)=>(!!_881_)?_881_.removeListener(this._handleImageChanged.bind(this)):null)(this._imageStream);
    }
}

export namespace _FadeInImageState {
    export type Constructors = '_FadeInImageState';
    export type Interface = Omit<_FadeInImageState, Constructors>;
}
@DartClass
@With(any)
export class _FadeInImageState extends any implements any.Interface {
    _imageResolver : _ImageProviderResolver;

    _placeholderResolver : _ImageProviderResolver;

    _controller : lib15.AnimationController;

    _animation : lib16.Animation<double>;

    _phase : FadeInImagePhase;

    get phase() : FadeInImagePhase {
        return this._phase;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    initState() : any {
        this._imageResolver = _ImageProviderResolver({
            state : this,listener : this._updatePhase.bind(this)});
        this._placeholderResolver = _ImageProviderResolver({
            state : this,listener : () =>  {
                setState(() =>  {
                });
            }});
        this._controller = lib15.AnimationController({
            value : 1.0,vsync : this});
        this._controller.addListener(() =>  {
            setState(() =>  {
            });
        });
        this._controller.addStatusListener((status : lib16.AnimationStatus) =>  {
            this._updatePhase();
        });
        super.initState();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    didChangeDependencies() : any {
        this._resolveImage();
        super.didChangeDependencies();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    didUpdateWidget(oldWidget : FadeInImage) : any {
        super.didUpdateWidget(oldWidget);
        if (widget.image != oldWidget.image || widget.placeholder != oldWidget.placeholder) this._resolveImage();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    reassemble() : any {
        this._resolveImage();
        super.reassemble();
    }
    _resolveImage() : any {
        this._imageResolver.resolve(widget.image);
        if (this._isShowingPlaceholder) this._placeholderResolver.resolve(widget.placeholder);
        if (op(Op.EQUALS,this._phase,FadeInImagePhase.start)) this._updatePhase();
    }
    _updatePhase() : any {
        setState(() =>  {
            switch (this._phase) {
                case FadeInImagePhase.start:
                    if (this._imageResolver._imageInfo != null) this._phase = FadeInImagePhase.completed;else this._phase = FadeInImagePhase.waiting;
                    break;
                case FadeInImagePhase.waiting:
                    if (this._imageResolver._imageInfo != null) {
                        this._controller.duration = widget.fadeOutDuration;
                        this._animation = lib17.CurvedAnimation({
                            parent : this._controller,curve : widget.fadeOutCurve});
                        this._phase = FadeInImagePhase.fadeOut;
                        this._controller.reverse({
                            from : 1.0});
                    }
                    break;
                case FadeInImagePhase.fadeOut:
                    if (op(Op.EQUALS,this._controller.status,lib16.AnimationStatus.dismissed)) {
                        this._controller.duration = widget.fadeInDuration;
                        this._animation = lib17.CurvedAnimation({
                            parent : this._controller,curve : widget.fadeInCurve});
                        this._phase = FadeInImagePhase.fadeIn;
                        this._placeholderResolver.stopListening();
                        this._controller.forward({
                            from : 0.0});
                    }
                    break;
                case FadeInImagePhase.fadeIn:
                    if (op(Op.EQUALS,this._controller.status,lib16.AnimationStatus.completed)) {
                        this._phase = FadeInImagePhase.completed;
                    }
                    break;
                case FadeInImagePhase.completed:
                    break;
            }
        });
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    dispose() : any {
        this._imageResolver.stopListening();
        this._placeholderResolver.stopListening();
        this._controller.dispose();
        super.dispose();
    }
    get _isShowingPlaceholder() : boolean {
        /* TODO (AssertStatementImpl) : assert (_phase != null); */;
        switch (this._phase) {
            case FadeInImagePhase.start:
            case FadeInImagePhase.waiting:
            case FadeInImagePhase.fadeOut:
                return true;
            case FadeInImagePhase.fadeIn:
            case FadeInImagePhase.completed:
                return false;
        }
        return null;
    }
    get _imageInfo() : lib13.ImageInfo {
        return this._isShowingPlaceholder ? this._placeholderResolver._imageInfo : this._imageResolver._imageInfo;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib3.BuildContext) : lib3.Widget {
        /* TODO (AssertStatementImpl) : assert (_phase != FadeInImagePhase.start); */;
        let imageInfo : lib13.ImageInfo = this._imageInfo;
        return lib18.RawImage({
            image : ((t)=>(!!t)?t.image:null)(imageInfo),width : widget.width,height : widget.height,scale : (((t)=>(!!t)?t.scale:null)(imageInfo) || 1.0),color : Color.fromRGBO(255,255,255,(((t)=>(!!t)?t.value:null)(this._animation) || 1.0)),colorBlendMode : BlendMode.modulate,fit : widget.fit,alignment : widget.alignment,repeat : widget.repeat,matchTextDirection : widget.matchTextDirection});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(description : lib19.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(description);
        description.add(lib19.EnumProperty('phase',this._phase));
        description.add(lib19.DiagnosticsProperty('pixels',this._imageInfo));
        description.add(lib19.DiagnosticsProperty('image stream',this._imageResolver._imageStream));
        description.add(lib19.DiagnosticsProperty('placeholder stream',this._placeholderResolver._imageStream));
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _FadeInImageState() {
        this._phase = FadeInImagePhase.start;
    }
}

export class properties {
}
