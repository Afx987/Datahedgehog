/** Library asset:datahedgehog_monitor/lib/lib/widgets/image.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./framework";
import * as lib4 from "./basic";
import * as lib5 from "./media_query";
import * as lib6 from "./localizations";
import * as lib7 from "@dart2ts.packages/flutter/lib/src/foundation/platform";
import * as lib8 from "@dart2ts.packages/flutter/lib/src/painting/image_provider";
import * as lib9 from "@dart2ts.packages/flutter/lib/src/painting/image_stream";
import * as lib10 from "@dart2ts.packages/flutter/lib/src/foundation/assertions";
import * as lib11 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as lib12 from "@dart2ts.packages/flutter/lib/src/painting/box_fit";
import * as lib13 from "@dart2ts.packages/flutter/lib/src/painting/alignment";
import * as lib14 from "@dart2ts.packages/flutter/lib/src/painting/decoration_image";
import * as io from "@dart2ts/dart/io";
import * as lib16 from "@dart2ts.packages/flutter/lib/src/services/asset_bundle";
import * as lib17 from "@dart2ts.packages/flutter/lib/src/painting/image_resolution";
import * as typed_data from "@dart2ts/dart/typed_data";
import * as lib19 from "@dart2ts.packages/flutter/lib/src/foundation/diagnostics";
import * as lib20 from "@dart2ts.packages/flutter/lib/src/semantics/binding";
import * as lib21 from "./ticker_provider";

export var createLocalImageConfiguration : (context : lib3.BuildContext,_namedArguments? : {size? : any}) => lib8.ImageConfiguration = (context : lib3.BuildContext,_namedArguments? : {size? : any}) : lib8.ImageConfiguration =>  {
    let {size} = Object.assign({
    }, _namedArguments );
    return lib8.ImageConfiguration({
        bundle : lib4.DefaultAssetBundle.of(context),devicePixelRatio : (((t)=>(!!t)?t.devicePixelRatio:null)(lib5.MediaQuery.of(context,{
            nullOk : true})) || 1.0),locale : lib6.Localizations.localeOf(context,{
            nullOk : true}),textDirection : lib4.Directionality.of(context),size : size,platform : lib7.properties.defaultTargetPlatform});
};
export var precacheImage : (provider : lib8.ImageProvider<any>,context : lib3.BuildContext,_namedArguments? : {size? : any,onError? : (exception : any,stackTrace : core.DartStackTrace) => any}) => any = (provider : lib8.ImageProvider<any>,context : lib3.BuildContext,_namedArguments? : {size? : any,onError? : (exception : any,stackTrace : core.DartStackTrace) => any}) =>  {
    let {size,onError} = Object.assign({
    }, _namedArguments );
    let config : lib8.ImageConfiguration = createLocalImageConfiguration(context,{
        size : size});
    let Completer;
    new core.DartList.literal<any>();
    /* TODO (EmptyStatementImpl) : ; */;
    op(Op.GT,,completer);
    op(Op.GT,,());
    let stream : lib9.ImageStream = provider.resolve(config);
    var listener : (image : lib9.ImageInfo,sync : boolean) => any = (image : lib9.ImageInfo,sync : boolean) : any =>  {
        completer.complete();
        stream.removeListener(listener);
    };
    var errorListener : (exception : any,stackTrace : core.DartStackTrace) => any = (exception : any,stackTrace : core.DartStackTrace) : any =>  {
        completer.complete();
        stream.removeListener(listener);
        if (onError != null) {
            onError(exception,stackTrace);
        }else {
            lib10.FlutterError.reportError(lib10.FlutterErrorDetails({
                context : 'image failed to precache',library : 'image resource service',exception : exception,stack : stackTrace,silent : true}));
        }
    };
    stream.addListener(listener,{
        onError : errorListener});
    return completer.future;
};
export namespace Image {
    export type Constructors = lib3.StatefulWidget.Constructors | 'Image' | 'network' | 'file' | 'asset' | 'memory';
    export type Interface = Omit<Image, Constructors>;
}
@DartClass
export class Image extends lib3.StatefulWidget {
    constructor(_namedArguments? : {key? : lib11.Key,image? : lib8.ImageProvider<any>,semanticLabel? : string,excludeFromSemantics? : boolean,width? : double,height? : double,color? : any,colorBlendMode? : any,fit? : lib12.BoxFit,alignment? : lib13.AlignmentGeometry,repeat? : lib14.ImageRepeat,centerSlice? : any,matchTextDirection? : boolean,gaplessPlayback? : boolean,filterQuality? : any}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Image(_namedArguments? : {key? : lib11.Key,image? : lib8.ImageProvider<any>,semanticLabel? : string,excludeFromSemantics? : boolean,width? : double,height? : double,color? : any,colorBlendMode? : any,fit? : lib12.BoxFit,alignment? : lib13.AlignmentGeometry,repeat? : lib14.ImageRepeat,centerSlice? : any,matchTextDirection? : boolean,gaplessPlayback? : boolean,filterQuality? : any}) {
        let {key,image,semanticLabel,excludeFromSemantics,width,height,color,colorBlendMode,fit,alignment,repeat,centerSlice,matchTextDirection,gaplessPlayback,filterQuality} = Object.assign({
            "excludeFromSemantics" : false,
            "alignment" : lib13.Alignment.center,
            "repeat" : lib14.ImageRepeat.noRepeat,
            "matchTextDirection" : false,
            "gaplessPlayback" : false,
            "filterQuality" : FilterQuality.low}, _namedArguments );
        this.assert = assert;
        this.image = image;
        this.semanticLabel = semanticLabel;
        this.excludeFromSemantics = excludeFromSemantics;
        this.width = width;
        this.height = height;
        this.color = color;
        this.colorBlendMode = colorBlendMode;
        this.fit = fit;
        this.alignment = alignment;
        this.repeat = repeat;
        this.centerSlice = centerSlice;
        this.matchTextDirection = matchTextDirection;
        this.gaplessPlayback = gaplessPlayback;
        this.filterQuality = filterQuality;
    }
     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

    @namedConstructor
    network(src : string,_namedArguments? : {key? : lib11.Key,scale? : double,semanticLabel? : string,excludeFromSemantics? : boolean,width? : double,height? : double,color? : any,colorBlendMode? : any,fit? : lib12.BoxFit,alignment? : lib13.AlignmentGeometry,repeat? : lib14.ImageRepeat,centerSlice? : any,matchTextDirection? : boolean,gaplessPlayback? : boolean,filterQuality? : any,headers? : core.DartMap<string,string>}) {
        let {key,scale,semanticLabel,excludeFromSemantics,width,height,color,colorBlendMode,fit,alignment,repeat,centerSlice,matchTextDirection,gaplessPlayback,filterQuality,headers} = Object.assign({
            "scale" : 1.0,
            "excludeFromSemantics" : false,
            "alignment" : lib13.Alignment.center,
            "repeat" : lib14.ImageRepeat.noRepeat,
            "matchTextDirection" : false,
            "gaplessPlayback" : false,
            "filterQuality" : FilterQuality.low}, _namedArguments );
        this.image = lib8.NetworkImage(src,{
            scale : scale,headers : headers});
        this.assert = assert;
        this.semanticLabel = semanticLabel;
        this.excludeFromSemantics = excludeFromSemantics;
        this.width = width;
        this.height = height;
        this.color = color;
        this.colorBlendMode = colorBlendMode;
        this.fit = fit;
        this.alignment = alignment;
        this.repeat = repeat;
        this.centerSlice = centerSlice;
        this.matchTextDirection = matchTextDirection;
        this.gaplessPlayback = gaplessPlayback;
        this.filterQuality = filterQuality;
    }
    static network : new(src : string,_namedArguments? : {key? : lib11.Key,scale? : double,semanticLabel? : string,excludeFromSemantics? : boolean,width? : double,height? : double,color? : any,colorBlendMode? : any,fit? : lib12.BoxFit,alignment? : lib13.AlignmentGeometry,repeat? : lib14.ImageRepeat,centerSlice? : any,matchTextDirection? : boolean,gaplessPlayback? : boolean,filterQuality? : any,headers? : core.DartMap<string,string>}) => Image;

     : any;

     : any;

     : any;

     : any;

     : any;

    @namedConstructor
    file(file : io.File,_namedArguments? : {key? : lib11.Key,scale? : double,semanticLabel? : string,excludeFromSemantics? : boolean,width? : double,height? : double,color? : any,colorBlendMode? : any,fit? : lib12.BoxFit,alignment? : lib13.AlignmentGeometry,repeat? : lib14.ImageRepeat,centerSlice? : any,matchTextDirection? : boolean,gaplessPlayback? : boolean,filterQuality? : any}) {
        let {key,scale,semanticLabel,excludeFromSemantics,width,height,color,colorBlendMode,fit,alignment,repeat,centerSlice,matchTextDirection,gaplessPlayback,filterQuality} = Object.assign({
            "scale" : 1.0,
            "excludeFromSemantics" : false,
            "alignment" : lib13.Alignment.center,
            "repeat" : lib14.ImageRepeat.noRepeat,
            "matchTextDirection" : false,
            "gaplessPlayback" : false,
            "filterQuality" : FilterQuality.low}, _namedArguments );
        this.image = lib8.FileImage(file,{
            scale : scale});
        this.assert = assert;
        this.semanticLabel = semanticLabel;
        this.excludeFromSemantics = excludeFromSemantics;
        this.width = width;
        this.height = height;
        this.color = color;
        this.colorBlendMode = colorBlendMode;
        this.fit = fit;
        this.alignment = alignment;
        this.repeat = repeat;
        this.centerSlice = centerSlice;
        this.matchTextDirection = matchTextDirection;
        this.gaplessPlayback = gaplessPlayback;
        this.filterQuality = filterQuality;
    }
    static file : new(file : io.File,_namedArguments? : {key? : lib11.Key,scale? : double,semanticLabel? : string,excludeFromSemantics? : boolean,width? : double,height? : double,color? : any,colorBlendMode? : any,fit? : lib12.BoxFit,alignment? : lib13.AlignmentGeometry,repeat? : lib14.ImageRepeat,centerSlice? : any,matchTextDirection? : boolean,gaplessPlayback? : boolean,filterQuality? : any}) => Image;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

    @namedConstructor
    asset(name : string,_namedArguments? : {key? : lib11.Key,bundle? : lib16.AssetBundle,semanticLabel? : string,excludeFromSemantics? : boolean,scale? : double,width? : double,height? : double,color? : any,colorBlendMode? : any,fit? : lib12.BoxFit,alignment? : lib13.AlignmentGeometry,repeat? : lib14.ImageRepeat,centerSlice? : any,matchTextDirection? : boolean,gaplessPlayback? : boolean,package? : string,filterQuality? : any}) {
        let {key,bundle,semanticLabel,excludeFromSemantics,scale,width,height,color,colorBlendMode,fit,alignment,repeat,centerSlice,matchTextDirection,gaplessPlayback,package,filterQuality} = Object.assign({
            "excludeFromSemantics" : false,
            "alignment" : lib13.Alignment.center,
            "repeat" : lib14.ImageRepeat.noRepeat,
            "matchTextDirection" : false,
            "gaplessPlayback" : false,
            "filterQuality" : FilterQuality.low}, _namedArguments );
        this.image = scale != null ? lib8.ExactAssetImage(name,{
            bundle : bundle,scale : scale,package : package}) : lib17.AssetImage(name,{
            bundle : bundle,package : package});
        this.assert = assert;
        this.semanticLabel = semanticLabel;
        this.excludeFromSemantics = excludeFromSemantics;
        this.width = width;
        this.height = height;
        this.color = color;
        this.colorBlendMode = colorBlendMode;
        this.fit = fit;
        this.alignment = alignment;
        this.repeat = repeat;
        this.centerSlice = centerSlice;
        this.matchTextDirection = matchTextDirection;
        this.gaplessPlayback = gaplessPlayback;
        this.filterQuality = filterQuality;
    }
    static asset : new(name : string,_namedArguments? : {key? : lib11.Key,bundle? : lib16.AssetBundle,semanticLabel? : string,excludeFromSemantics? : boolean,scale? : double,width? : double,height? : double,color? : any,colorBlendMode? : any,fit? : lib12.BoxFit,alignment? : lib13.AlignmentGeometry,repeat? : lib14.ImageRepeat,centerSlice? : any,matchTextDirection? : boolean,gaplessPlayback? : boolean,package? : string,filterQuality? : any}) => Image;

     : any;

     : any;

     : any;

     : any;

     : any;

    @namedConstructor
    memory(bytes : typed_data.Uint8List,_namedArguments? : {key? : lib11.Key,scale? : double,semanticLabel? : string,excludeFromSemantics? : boolean,width? : double,height? : double,color? : any,colorBlendMode? : any,fit? : lib12.BoxFit,alignment? : lib13.AlignmentGeometry,repeat? : lib14.ImageRepeat,centerSlice? : any,matchTextDirection? : boolean,gaplessPlayback? : boolean,filterQuality? : any}) {
        let {key,scale,semanticLabel,excludeFromSemantics,width,height,color,colorBlendMode,fit,alignment,repeat,centerSlice,matchTextDirection,gaplessPlayback,filterQuality} = Object.assign({
            "scale" : 1.0,
            "excludeFromSemantics" : false,
            "alignment" : lib13.Alignment.center,
            "repeat" : lib14.ImageRepeat.noRepeat,
            "matchTextDirection" : false,
            "gaplessPlayback" : false,
            "filterQuality" : FilterQuality.low}, _namedArguments );
        this.image = lib8.MemoryImage(bytes,{
            scale : scale});
        this.assert = assert;
        this.semanticLabel = semanticLabel;
        this.excludeFromSemantics = excludeFromSemantics;
        this.width = width;
        this.height = height;
        this.color = color;
        this.colorBlendMode = colorBlendMode;
        this.fit = fit;
        this.alignment = alignment;
        this.repeat = repeat;
        this.centerSlice = centerSlice;
        this.matchTextDirection = matchTextDirection;
        this.gaplessPlayback = gaplessPlayback;
        this.filterQuality = filterQuality;
    }
    static memory : new(bytes : typed_data.Uint8List,_namedArguments? : {key? : lib11.Key,scale? : double,semanticLabel? : string,excludeFromSemantics? : boolean,width? : double,height? : double,color? : any,colorBlendMode? : any,fit? : lib12.BoxFit,alignment? : lib13.AlignmentGeometry,repeat? : lib14.ImageRepeat,centerSlice? : any,matchTextDirection? : boolean,gaplessPlayback? : boolean,filterQuality? : any}) => Image;

     : any;

     : any;

     : any;

     : any;

     : any;

    image : lib8.ImageProvider<any>;

    width : double;

    height : double;

    color : any;

    filterQuality : any;

    colorBlendMode : any;

    fit : lib12.BoxFit;

    alignment : lib13.AlignmentGeometry;

    repeat : lib14.ImageRepeat;

    centerSlice : any;

    matchTextDirection : boolean;

    gaplessPlayback : boolean;

    semanticLabel : string;

    excludeFromSemantics : boolean;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createState() : _ImageState {
        return _ImageState();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib19.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib19.DiagnosticsProperty('image',this.image));
        properties.add(lib19.DoubleProperty('width',this.width,{
            defaultValue : null}));
        properties.add(lib19.DoubleProperty('height',this.height,{
            defaultValue : null}));
        properties.add(lib19.DiagnosticsProperty('color',this.color,{
            defaultValue : null}));
        properties.add(lib19.EnumProperty('colorBlendMode',this.colorBlendMode,{
            defaultValue : null}));
        properties.add(lib19.EnumProperty('fit',this.fit,{
            defaultValue : null}));
        properties.add(lib19.DiagnosticsProperty('alignment',this.alignment,{
            defaultValue : null}));
        properties.add(lib19.EnumProperty('repeat',this.repeat,{
            defaultValue : lib14.ImageRepeat.noRepeat}));
        properties.add(lib19.DiagnosticsProperty('centerSlice',this.centerSlice,{
            defaultValue : null}));
        properties.add(lib19.FlagProperty('matchTextDirection',{
            value : this.matchTextDirection,ifTrue : 'match text direction'}));
        properties.add(lib19.StringProperty('semanticLabel',this.semanticLabel,{
            defaultValue : null}));
        properties.add(lib19.DiagnosticsProperty('this.excludeFromSemantics',this.excludeFromSemantics));
        properties.add(lib19.EnumProperty('filterQuality',this.filterQuality));
    }
}

export namespace _ImageState {
    export type Constructors = '_ImageState';
    export type Interface = Omit<_ImageState, Constructors>;
}
@DartClass
export class _ImageState extends any {
    _imageStream : lib9.ImageStream;

    _imageInfo : lib9.ImageInfo;

    _isListeningToStream : boolean;

    _invertColors : boolean;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    didChangeDependencies() : any {
        this._invertColors = (((t)=>(!!t)?t.invertColors:null)(lib5.MediaQuery.of(context,{
            nullOk : true})) || lib20.properties.SemanticsBinding.instance.accessibilityFeatures.invertColors);
        this._resolveImage();
        if (lib21.TickerMode.of(context)) this._listenToStream();else this._stopListeningToStream();
        super.didChangeDependencies();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    didUpdateWidget(oldWidget : Image) : any {
        super.didUpdateWidget(oldWidget);
        if (widget.image != oldWidget.image) this._resolveImage();
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
        let newStream : lib9.ImageStream = widget.image.resolve(createLocalImageConfiguration(context,{
            size : widget.width != null && widget.height != null ? Size(widget.width,widget.height) : null}));
        /* TODO (AssertStatementImpl) : assert (newStream != null); */;
        this._updateSourceStream(newStream);
    }
    _handleImageChanged(imageInfo : lib9.ImageInfo,synchronousCall : boolean) : any {
        setState(() =>  {
            this._imageInfo = imageInfo;
        });
    }
    _updateSourceStream(newStream : lib9.ImageStream) : any {
        if (op(Op.EQUALS,((t)=>(!!t)?t.key:null)(this._imageStream),((t)=>(!!t)?t.key:null)(newStream))) return;
        if (this._isListeningToStream) this._imageStream.removeListener(this._handleImageChanged.bind(this));
        if (!widget.gaplessPlayback) setState(() =>  {
            this._imageInfo = null;
        });
        this._imageStream = newStream;
        if (this._isListeningToStream) this._imageStream.addListener(this._handleImageChanged.bind(this));
    }
    _listenToStream() : any {
        if (this._isListeningToStream) return;
        this._imageStream.addListener(this._handleImageChanged.bind(this));
        this._isListeningToStream = true;
    }
    _stopListeningToStream() : any {
        if (!this._isListeningToStream) return;
        this._imageStream.removeListener(this._handleImageChanged.bind(this));
        this._isListeningToStream = false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    dispose() : any {
        /* TODO (AssertStatementImpl) : assert (_imageStream != null); */;
        this._stopListeningToStream();
        super.dispose();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib3.BuildContext) : lib3.Widget {
        let image : lib4.RawImage = lib4.RawImage({
            image : ((t)=>(!!t)?t.image:null)(this._imageInfo),width : widget.width,height : widget.height,scale : (((t)=>(!!t)?t.scale:null)(this._imageInfo) || 1.0),color : widget.color,colorBlendMode : widget.colorBlendMode,fit : widget.fit,alignment : widget.alignment,repeat : widget.repeat,centerSlice : widget.centerSlice,matchTextDirection : widget.matchTextDirection,invertColors : this._invertColors,filterQuality : widget.filterQuality});
        if (widget.excludeFromSemantics) return image;
        return lib4.Semantics({
            container : widget.semanticLabel != null,image : true,label : op(Op.EQUALS,widget.semanticLabel,null) ? '' : widget.semanticLabel,child : image});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(description : lib19.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(description);
        description.add(lib19.DiagnosticsProperty('stream',this._imageStream));
        description.add(lib19.DiagnosticsProperty('pixels',this._imageInfo));
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _ImageState() {
        this._isListeningToStream = false;
    }
}

export class properties {
    private static __$void : async.Future<any>;
    static get void() : async.Future<any> { 
        return this.__$void;
    }
    static set void(__$value : async.Future<any>)  { 
        this.__$void = __$value;
    }

}
