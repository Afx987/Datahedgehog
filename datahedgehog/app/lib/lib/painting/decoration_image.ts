/** Library asset:datahedgehog_monitor/lib/lib/painting/decoration_image.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./image_provider";
import * as lib4 from "./box_fit";
import * as lib5 from "./alignment";
import * as lib6 from "./image_stream";

export var paintImage : (_namedArguments? : {canvas? : any,rect? : any,image? : any,scale? : double,colorFilter? : any,fit? : lib4.BoxFit,alignment? : lib5.Alignment,centerSlice? : any,repeat? : ImageRepeat,flipHorizontally? : boolean,invertColors? : boolean,filterQuality? : any}) => any = (_namedArguments? : {canvas? : any,rect? : any,image? : any,scale? : double,colorFilter? : any,fit? : lib4.BoxFit,alignment? : lib5.Alignment,centerSlice? : any,repeat? : ImageRepeat,flipHorizontally? : boolean,invertColors? : boolean,filterQuality? : any}) : any =>  {
    let {canvas,rect,image,scale,colorFilter,fit,alignment,centerSlice,repeat,flipHorizontally,invertColors,filterQuality} = Object.assign({
        "scale" : 1.0,
        "alignment" : lib5.Alignment.center,
        "repeat" : ImageRepeat.noRepeat,
        "flipHorizontally" : false,
        "invertColors" : false,
        "filterQuality" : FilterQuality.low}, _namedArguments );
    /* TODO (AssertStatementImpl) : assert (canvas != null); */;
    /* TODO (AssertStatementImpl) : assert (image != null); */;
    /* TODO (AssertStatementImpl) : assert (alignment != null); */;
    /* TODO (AssertStatementImpl) : assert (repeat != null); */;
    /* TODO (AssertStatementImpl) : assert (flipHorizontally != null); */;
    if (rect.isEmpty) return;
    let outputSize : any = rect.size;
    let inputSize : any = Size(image.width.toDouble(),image.height.toDouble());
    let sliceBorder : any;
    if (centerSlice != null) {
        sliceBorder = Offset(op(Op.MINUS,op(Op.PLUS,centerSlice.left,inputSize.width),centerSlice.right),op(Op.MINUS,op(Op.PLUS,centerSlice.top,inputSize.height),centerSlice.bottom));
        outputSize -= sliceBorder;
        inputSize -= sliceBorder;
    }
    fit = ( fit ) || ( op(Op.EQUALS,centerSlice,null) ? lib4.BoxFit.scaleDown : lib4.BoxFit.fill );
    /* TODO (AssertStatementImpl) : assert (centerSlice == null || (fit != BoxFit.none && fit != BoxFit.cover)); */;
    let fittedSizes : lib4.FittedSizes = lib4.applyBoxFit(fit,op(Op.DIVIDE,inputSize,scale),outputSize);
    let sourceSize : any = op(Op.TIMES,fittedSizes.source,scale);
    let destinationSize : any = fittedSizes.destination;
    if (centerSlice != null) {
        outputSize += sliceBorder;
        destinationSize += sliceBorder;
        /* TODO (AssertStatementImpl) : assert (sourceSize == inputSize, 'centerSlice was used with a BoxFit that does not guarantee that the image is fully visible.'); */;
    }
    if (repeat != ImageRepeat.noRepeat && op(Op.EQUALS,destinationSize,outputSize)) {
        repeat = ImageRepeat.noRepeat;
    }
    let paint : any = ((_) : any =>  {
        {
            _.isAntiAlias = false;
            return _;
        }
    })(Paint());
    if (colorFilter != null) paint.colorFilter = colorFilter;
    if (sourceSize != destinationSize) {
        paint.filterQuality = filterQuality;
    }
    paint.invertColors = invertColors;
    let halfWidthDelta : double = op(Op.DIVIDE,(op(Op.MINUS,outputSize.width,destinationSize.width)),2.0);
    let halfHeightDelta : double = op(Op.DIVIDE,(op(Op.MINUS,outputSize.height,destinationSize.height)),2.0);
    let dx : double = halfWidthDelta + (flipHorizontally ? -alignment.x : alignment.x) * halfWidthDelta;
    let dy : double = halfHeightDelta + alignment.y * halfHeightDelta;
    let destinationPosition : any = rect.topLeft.translate(dx,dy);
    let destinationRect : any = op(Op.BITAND,destinationPosition,destinationSize);
    let needSave : boolean = repeat != ImageRepeat.noRepeat || flipHorizontally;
    if (needSave) canvas.save();
    if (repeat != ImageRepeat.noRepeat) canvas.clipRect(rect);
    if (flipHorizontally) {
        let dx : double = op(Op.NEG,(op(Op.PLUS,rect.left,op(Op.DIVIDE,rect.width,2.0))));
        canvas.translate(-dx,0.0);
        canvas.scale(-1.0,1.0);
        canvas.translate(dx,0.0);
    }
    if (op(Op.EQUALS,centerSlice,null)) {
        let sourceRect : any = alignment.inscribe(sourceSize,op(Op.BITAND,Offset.zero,inputSize));
        for(let tileRect of _generateImageTileRects(rect,destinationRect,repeat)) canvas.drawImageRect(image,sourceRect,tileRect,paint);
    }else {
        for(let tileRect of _generateImageTileRects(rect,destinationRect,repeat)) canvas.drawImageNine(image,centerSlice,tileRect,paint);
    }
    if (needSave) canvas.restore();
};
export var _generateImageTileRects : (outputRect : any,fundamentalRect : any,repeat : ImageRepeat) => core.DartIterable<any> = (outputRect : any,fundamentalRect : any,repeat : ImageRepeat) : core.DartIterable<any> => core.iter<any>(()=>(function*()  {
    if (op(Op.EQUALS,repeat,ImageRepeat.noRepeat)) {
        yield fundamentalRect;
        return;
    }
    let startX : number = 0;
    let startY : number = 0;
    let stopX : number = 0;
    let stopY : number = 0;
    let strideX : double = fundamentalRect.width;
    let strideY : double = fundamentalRect.height;
    if (op(Op.EQUALS,repeat,ImageRepeat.repeat) || op(Op.EQUALS,repeat,ImageRepeat.repeatX)) {
        startX = (op(Op.DIVIDE,(op(Op.MINUS,outputRect.left,fundamentalRect.left)),strideX)).floor();
        stopX = (op(Op.DIVIDE,(op(Op.MINUS,outputRect.right,fundamentalRect.right)),strideX)).ceil();
    }
    if (op(Op.EQUALS,repeat,ImageRepeat.repeat) || op(Op.EQUALS,repeat,ImageRepeat.repeatY)) {
        startY = (op(Op.DIVIDE,(op(Op.MINUS,outputRect.top,fundamentalRect.top)),strideY)).floor();
        stopY = (op(Op.DIVIDE,(op(Op.MINUS,outputRect.bottom,fundamentalRect.bottom)),strideY)).ceil();
    }
    for(let i : number = startX; i <= stopX; ++i){
        for(let j : number = startY; j <= stopY; ++j)yield fundamentalRect.shift(Offset(i * strideX,j * strideY));
    }
}).call(this));
export enum ImageRepeat {
    repeat,
    repeatX,
    repeatY,
    noRepeat
}

export namespace DecorationImage {
    export type Constructors = 'DecorationImage';
    export type Interface = Omit<DecorationImage, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'asset:meta/lib/meta.dart',type : 'immutable',value : {
        arguments : [],namedArguments : {
        }}})
export class DecorationImage {
    constructor(_namedArguments? : {image? : lib3.ImageProvider<any>,colorFilter? : any,fit? : lib4.BoxFit,alignment? : lib5.AlignmentGeometry,centerSlice? : any,repeat? : ImageRepeat,matchTextDirection? : boolean}) {
    }
    @defaultConstructor
    DecorationImage(_namedArguments? : {image? : lib3.ImageProvider<any>,colorFilter? : any,fit? : lib4.BoxFit,alignment? : lib5.AlignmentGeometry,centerSlice? : any,repeat? : ImageRepeat,matchTextDirection? : boolean}) {
        let {image,colorFilter,fit,alignment,centerSlice,repeat,matchTextDirection} = Object.assign({
            "alignment" : lib5.Alignment.center,
            "repeat" : ImageRepeat.noRepeat,
            "matchTextDirection" : false}, _namedArguments );
        this.assert = assert;
        this.image = image;
        this.colorFilter = colorFilter;
        this.fit = fit;
        this.alignment = alignment;
        this.centerSlice = centerSlice;
        this.repeat = repeat;
        this.matchTextDirection = matchTextDirection;
    }
     : any;

     : any;

     : any;

     : any;

    image : lib3.ImageProvider<any>;

    colorFilter : any;

    fit : lib4.BoxFit;

    alignment : lib5.AlignmentGeometry;

    centerSlice : any;

    repeat : ImageRepeat;

    matchTextDirection : boolean;

    createPainter(onChanged : any) : DecorationImagePainter {
        /* TODO (AssertStatementImpl) : assert (onChanged != null); */;
        return DecorationImagePainter._(this,onChanged);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    [OperatorMethods.EQUALS](other : any) : boolean {
        if (core.identical(this,other)) return true;
        if (this.runtimeType != other.runtimeType) return false;
        let typedOther : DecorationImage = other;
        return op(Op.EQUALS,this.image,typedOther.image) && op(Op.EQUALS,this.colorFilter,typedOther.colorFilter) && op(Op.EQUALS,this.fit,typedOther.fit) && op(Op.EQUALS,this.alignment,typedOther.alignment) && op(Op.EQUALS,this.centerSlice,typedOther.centerSlice) && op(Op.EQUALS,this.repeat,typedOther.repeat) && this.matchTextDirection == typedOther.matchTextDirection;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hashCode() : number {
        return hashValues(this.image,this.colorFilter,this.fit,this.alignment,this.centerSlice,this.repeat,this.matchTextDirection);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        let properties : core.DartList<string> = new core.DartList.literal<string>();
        properties.add(`${this.image}`);
        if (this.colorFilter != null) properties.add(`${this.colorFilter}`);
        if (this.fit != null && !(op(Op.EQUALS,this.fit,lib4.BoxFit.fill) && this.centerSlice != null) && !(op(Op.EQUALS,this.fit,lib4.BoxFit.scaleDown) && op(Op.EQUALS,this.centerSlice,null))) properties.add(`${this.fit}`);
        properties.add(`${this.alignment}`);
        if (this.centerSlice != null) properties.add(`centerSlice: ${this.centerSlice}`);
        if (this.repeat != ImageRepeat.noRepeat) properties.add(`${this.repeat}`);
        if (this.matchTextDirection) properties.add('match text direction');
        return `${this.runtimeType}(${properties.join(", ")})`;
    }
}

export namespace DecorationImagePainter {
    export type Constructors = '_';
    export type Interface = Omit<DecorationImagePainter, Constructors>;
}
@DartClass
export class DecorationImagePainter {
    @namedConstructor
    _(_details : DecorationImage,_onChanged : any) {
        this.assert = assert;
        this._details = _details;
        this._onChanged = _onChanged;
    }
    static _ : new(_details : DecorationImage,_onChanged : any) => DecorationImagePainter;

     : any;

    _details : DecorationImage;

    _onChanged : any;

    _imageStream : lib6.ImageStream;

    _image : lib6.ImageInfo;

    paint(canvas : any,rect : any,clipPath : any,configuration : lib3.ImageConfiguration) : any {
        /* TODO (AssertStatementImpl) : assert (canvas != null); */;
        /* TODO (AssertStatementImpl) : assert (rect != null); */;
        /* TODO (AssertStatementImpl) : assert (configuration != null); */;
        let flipHorizontally : boolean = false;
        if (this._details.matchTextDirection) {
            /* TODO (AssertStatementImpl) : assert (() {if (configuration.textDirection == null) {throw FlutterError('ImageDecoration.matchTextDirection can only be used when a TextDirection is available.\n' 'When DecorationImagePainter.paint() was called, there was no text direction provided ' 'in the ImageConfiguration object to match.\n' 'The DecorationImage was:\n' '  $_details\n' 'The ImageConfiguration was:\n' '  $configuration');} return true;}()); */;
            if (op(Op.EQUALS,configuration.textDirection,TextDirection.rtl)) flipHorizontally = true;
        }
        let newImageStream : lib6.ImageStream = this._details.image.resolve(configuration);
        if (newImageStream.key != ((t)=>(!!t)?t.key:null)(this._imageStream)) {
            ((_800_)=>(!!_800_)?_800_.removeListener(this._imageListener.bind(this)):null)(this._imageStream);
            this._imageStream = newImageStream;
            this._imageStream.addListener(this._imageListener.bind(this));
        }
        if (op(Op.EQUALS,this._image,null)) return;
        if (clipPath != null) {
            canvas.save();
            canvas.clipPath(clipPath);
        }
        paintImage({
            canvas : canvas,rect : rect,image : this._image.image,scale : this._image.scale,colorFilter : this._details.colorFilter,fit : this._details.fit,alignment : this._details.alignment.resolve(configuration.textDirection),centerSlice : this._details.centerSlice,repeat : this._details.repeat,flipHorizontally : flipHorizontally,filterQuality : FilterQuality.low});
        if (clipPath != null) canvas.restore();
    }
    _imageListener(value : lib6.ImageInfo,synchronousCall : boolean) : any {
        if (op(Op.EQUALS,this._image,value)) return;
        this._image = value;
        /* TODO (AssertStatementImpl) : assert (_onChanged != null); */;
        if (!synchronousCall) this._onChanged();
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'mustCallSuper',value : {
            arguments : [],namedArguments : {
            }}})
    dispose() : any {
        ((_801_)=>(!!_801_)?_801_.removeListener(this._imageListener.bind(this)):null)(this._imageStream);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `${this.runtimeType}(stream: ${this._imageStream}, image: ${this._image}) for ${this._details}`;
    }
}

export class properties {
}
