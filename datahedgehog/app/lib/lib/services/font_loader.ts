/** Library asset:datahedgehog_monitor/lib/lib/services/font_loader.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as typed_data from "@dart2ts/dart/typed_data";

export namespace FontLoader {
    export type Constructors = 'FontLoader';
    export type Interface = Omit<FontLoader, Constructors>;
}
@DartClass
export class FontLoader {
    constructor(family : string) {
    }
    @defaultConstructor
    FontLoader(family : string) {
        this._loaded = false;
        this._fontFutures = new core.DartList.literal<async.Future<typed_data.Uint8List>>();
        this.family = family;
    }
    family : string;

    addFont(bytes : async.Future<typed_data.ByteData>) : any {
        if (this._loaded) throw core.StateError('FontLoader is already loaded');
        this._fontFutures.add(bytes.then((data : typed_data.ByteData) =>  {
            return typed_data.Uint8List.view(data.buffer,data.offsetInBytes,data.lengthInBytes);
        }));
    }
    void : async.Future<any>;

    load() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            if (this._loaded) throw core.StateError('FontLoader is already loaded');
            this._loaded = true;
            let Iterable;
            new core.DartList.literal<async.Future<any>>();
            /* TODO (EmptyStatementImpl) : ; */;
            op(Op.SHIFTRIGHT,,loadFutures);
            return async.Future.wait(loadFutures.toList());
        } )());
    }

    @DartPropertyAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'protected',value : {
            arguments : [],namedArguments : {
            }}})
    @DartPropertyAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'visibleForTesting',value : {
            arguments : [],namedArguments : {
            }}})
    void : async.Future<any>;

    loadFont(list : typed_data.Uint8List,family : string) {
        return loadFontFromList(list,{
            fontFamily : family});
    }
    _loaded : boolean;

    _fontFutures : core.DartList<async.Future<typed_data.Uint8List>>;

}

export class properties {
}
