/** Library asset:datahedgehog_monitor/lib/lib/_internal/pub/asset/dart/transformer_isolate.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as mirrors from "@dart2ts/dart/mirrors";
import * as isolate from "@dart2ts/dart/isolate";
import * as convert from "@dart2ts/dart/convert";
import * as lib6 from "./serialize/transformer";
import * as lib7 from "./serialize";
import * as lib8 from "@dart2ts/dart/uri";

export var loadTransformers : (replyTo : isolate.SendPort) => void = (replyTo : isolate.SendPort) : void =>  {
    let port = new isolate.ReceivePort();
    replyTo.send(port.sendPort);
    port.listen((wrappedMessage : any) =>  {
        lib7.respond(wrappedMessage,(message : any) =>  {
            let configuration = convert.properties.JSON.decode(op(Op.INDEX,message,'configuration'));
            let mode = new bare.createInstance(any,null,op(Op.INDEX,message,'mode'));
            return _initialize(op(Op.INDEX,message,'library'),configuration,mode).map(lib6.serializeTransformerLike).toList();
        });
    });
};
export var _initialize : (uri : string,configuration : core.DartMap<any,any>,mode : any) => core.DartList<any> = (uri : string,configuration : core.DartMap<any,any>,mode : any) : core.DartList<any> =>  {
    let transformerClass = mirrors.reflectClass(Transformer);
    let aggregateClass = mirrors.reflectClass(AggregateTransformer);
    let groupClass = mirrors.reflectClass(TransformerGroup);
    let seen = new core.DartSet<any>();
    let transformers = new core.DartList.literal();
    var loadFromLibrary : (library : any) => any = (library : any) =>  {
        if (seen.contains(library)) return;
        seen.add(library);
        for(let dependency of library.libraryDependencies) {
            if (!dependency.isExport) continue;
            loadFromLibrary(dependency.targetLibrary);
        }
        transformers.addAll(library.declarations.values.map((declaration : any) =>  {
            if (isNot(declaration, mirrors.ClassMirror)) return null;
            let classMirror = declaration;
            if (classMirror.isPrivate) return null;
            if (classMirror.isAbstract) return null;
            if (!classMirror.isSubtypeOf(transformerClass) && !classMirror.isSubtypeOf(groupClass) && !classMirror.isSubtypeOf(aggregateClass)) {
                return null;
            }
            let constructor = _getConstructor(classMirror,'asPlugin');
            if (op(Op.EQUALS,constructor,null)) return null;
            if (constructor.parameters.isEmpty) {
                if (configuration.isNotEmpty) return null;
                return classMirror.newInstance(new core.Symbol('asPlugin'),new core.DartList.literal()).reflectee;
            }
            if (constructor.parameters.length != 1) return null;
            return classMirror.newInstance(new core.Symbol('asPlugin'),new core.DartList.literal(new bare.createInstance(any,null,configuration,mode))).reflectee;
        }).where((classMirror : any) =>  {
            return classMirror != null;
        }));
    };
    let library = op(Op.INDEX,properties._mirrors.libraries,lib8.Uri.parse(uri));
    if (op(Op.EQUALS,library,null)) throw `Couldn't find library at ${uri}.`;
    loadFromLibrary(library);
    return transformers;
};
export var _getConstructor : (classMirror : mirrors.ClassMirror,constructor : string) => mirrors.MethodMirror = (classMirror : mirrors.ClassMirror,constructor : string) : mirrors.MethodMirror =>  {
    let name = new core.Symbol(`${mirrors.MirrorSystem.getName(classMirror.simpleName)}` + `.${constructor}`);
    let candidate = classMirror.declarations.get(name);
    if (is(candidate, mirrors.MethodMirror) && candidate.isConstructor) return candidate;
    return null;
};
export class properties {
    private static __$_mirrors;
    static get _mirrors() { 
        if (this.__$_mirrors===undefined) {
            this.__$_mirrors = mirrors.currentMirrorSystem();
        }
        return this.__$_mirrors;
    }
    static set _mirrors(__$value : any)  { 
        this.__$_mirrors = __$value;
    }

}
