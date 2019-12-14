/** Library asset:datahedgehog_monitor/lib/lib/_internal/js_runtime/lib/typed_data_patch.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as typed_data.implementation from "@dart2ts/dart/typed_data.implementation";

export namespace ByteData {
    export type Constructors = never;
    export type Interface = Omit<ByteData, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'dart:_js_helper',type : 'patch',value : {
        arguments : [],namedArguments : {
        }}})
export class ByteData {
    constructor(length : number) {
    }
    @defaultFactory
    static $ByteData(length : number) : ByteData {
        return new typed_data.implementation.NativeByteData.$create(length);
    }
}

export namespace Float32List {
    export type Constructors = never;
    export type Interface = Omit<Float32List, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'dart:_js_helper',type : 'patch',value : {
        arguments : [],namedArguments : {
        }}})
export class Float32List {
    constructor(length : number) {
    }
    @defaultFactory
    static $Float32List(length : number) : Float32List {
        return new typed_data.implementation.NativeFloat32List.$create(length);
    }
    @namedFactory
    static $fromList(elements : core.DartList<double>) : Float32List {
        return new typed_data.implementation.NativeFloat32List.fromList(elements);
    }
    static fromList : new(elements : core.DartList<double>) => Float32List;

}

export namespace Float64List {
    export type Constructors = never;
    export type Interface = Omit<Float64List, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'dart:_js_helper',type : 'patch',value : {
        arguments : [],namedArguments : {
        }}})
export class Float64List {
    constructor(length : number) {
    }
    @defaultFactory
    static $Float64List(length : number) : Float64List {
        return new typed_data.implementation.NativeFloat64List.$create(length);
    }
    @namedFactory
    static $fromList(elements : core.DartList<double>) : Float64List {
        return new typed_data.implementation.NativeFloat64List.fromList(elements);
    }
    static fromList : new(elements : core.DartList<double>) => Float64List;

}

export namespace Int16List {
    export type Constructors = never;
    export type Interface = Omit<Int16List, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'dart:_js_helper',type : 'patch',value : {
        arguments : [],namedArguments : {
        }}})
export class Int16List {
    constructor(length : number) {
    }
    @defaultFactory
    static $Int16List(length : number) : Int16List {
        return new typed_data.implementation.NativeInt16List.$create(length);
    }
    @namedFactory
    static $fromList(elements : core.DartList<number>) : Int16List {
        return new typed_data.implementation.NativeInt16List.fromList(elements);
    }
    static fromList : new(elements : core.DartList<number>) => Int16List;

}

export namespace Int32List {
    export type Constructors = never;
    export type Interface = Omit<Int32List, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'dart:_js_helper',type : 'patch',value : {
        arguments : [],namedArguments : {
        }}})
export class Int32List {
    constructor(length : number) {
    }
    @defaultFactory
    static $Int32List(length : number) : Int32List {
        return new typed_data.implementation.NativeInt32List.$create(length);
    }
    @namedFactory
    static $fromList(elements : core.DartList<number>) : Int32List {
        return new typed_data.implementation.NativeInt32List.fromList(elements);
    }
    static fromList : new(elements : core.DartList<number>) => Int32List;

}

export namespace Int8List {
    export type Constructors = never;
    export type Interface = Omit<Int8List, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'dart:_js_helper',type : 'patch',value : {
        arguments : [],namedArguments : {
        }}})
export class Int8List {
    constructor(length : number) {
    }
    @defaultFactory
    static $Int8List(length : number) : Int8List {
        return new typed_data.implementation.NativeInt8List.$create(length);
    }
    @namedFactory
    static $fromList(elements : core.DartList<number>) : Int8List {
        return new typed_data.implementation.NativeInt8List.fromList(elements);
    }
    static fromList : new(elements : core.DartList<number>) => Int8List;

}

export namespace Uint32List {
    export type Constructors = never;
    export type Interface = Omit<Uint32List, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'dart:_js_helper',type : 'patch',value : {
        arguments : [],namedArguments : {
        }}})
export class Uint32List {
    constructor(length : number) {
    }
    @defaultFactory
    static $Uint32List(length : number) : Uint32List {
        return new typed_data.implementation.NativeUint32List.$create(length);
    }
    @namedFactory
    static $fromList(elements : core.DartList<number>) : Uint32List {
        return new typed_data.implementation.NativeUint32List.fromList(elements);
    }
    static fromList : new(elements : core.DartList<number>) => Uint32List;

}

export namespace Uint16List {
    export type Constructors = never;
    export type Interface = Omit<Uint16List, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'dart:_js_helper',type : 'patch',value : {
        arguments : [],namedArguments : {
        }}})
export class Uint16List {
    constructor(length : number) {
    }
    @defaultFactory
    static $Uint16List(length : number) : Uint16List {
        return new typed_data.implementation.NativeUint16List.$create(length);
    }
    @namedFactory
    static $fromList(elements : core.DartList<number>) : Uint16List {
        return new typed_data.implementation.NativeUint16List.fromList(elements);
    }
    static fromList : new(elements : core.DartList<number>) => Uint16List;

}

export namespace Uint8ClampedList {
    export type Constructors = never;
    export type Interface = Omit<Uint8ClampedList, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'dart:_js_helper',type : 'patch',value : {
        arguments : [],namedArguments : {
        }}})
export class Uint8ClampedList {
    constructor(length : number) {
    }
    @defaultFactory
    static $Uint8ClampedList(length : number) : Uint8ClampedList {
        return new typed_data.implementation.NativeUint8ClampedList.$create(length);
    }
    @namedFactory
    static $fromList(elements : core.DartList<number>) : Uint8ClampedList {
        return new typed_data.implementation.NativeUint8ClampedList.fromList(elements);
    }
    static fromList : new(elements : core.DartList<number>) => Uint8ClampedList;

}

export namespace Uint8List {
    export type Constructors = never;
    export type Interface = Omit<Uint8List, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'dart:_js_helper',type : 'patch',value : {
        arguments : [],namedArguments : {
        }}})
export class Uint8List {
    constructor(length : number) {
    }
    @defaultFactory
    static $Uint8List(length : number) : Uint8List {
        return new typed_data.implementation.NativeUint8List.$create(length);
    }
    @namedFactory
    static $fromList(elements : core.DartList<number>) : Uint8List {
        return new typed_data.implementation.NativeUint8List.fromList(elements);
    }
    static fromList : new(elements : core.DartList<number>) => Uint8List;

}

export namespace Int64List {
    export type Constructors = never;
    export type Interface = Omit<Int64List, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'dart:_js_helper',type : 'patch',value : {
        arguments : [],namedArguments : {
        }}})
export class Int64List {
    constructor(length : number) {
    }
    @defaultFactory
    static $Int64List(length : number) : Int64List {
        throw new core.UnsupportedError("Int64List not supported by dart2js.");
    }
    @namedFactory
    static $fromList(elements : core.DartList<number>) : Int64List {
        throw new core.UnsupportedError("Int64List not supported by dart2js.");
    }
    static fromList : new(elements : core.DartList<number>) => Int64List;

}

export namespace Uint64List {
    export type Constructors = never;
    export type Interface = Omit<Uint64List, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'dart:_js_helper',type : 'patch',value : {
        arguments : [],namedArguments : {
        }}})
export class Uint64List {
    constructor(length : number) {
    }
    @defaultFactory
    static $Uint64List(length : number) : Uint64List {
        throw new core.UnsupportedError("Uint64List not supported by dart2js.");
    }
    @namedFactory
    static $fromList(elements : core.DartList<number>) : Uint64List {
        throw new core.UnsupportedError("Uint64List not supported by dart2js.");
    }
    static fromList : new(elements : core.DartList<number>) => Uint64List;

}

export namespace Int32x4List {
    export type Constructors = never;
    export type Interface = Omit<Int32x4List, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'dart:_js_helper',type : 'patch',value : {
        arguments : [],namedArguments : {
        }}})
export class Int32x4List {
    constructor(length : number) {
    }
    @defaultFactory
    static $Int32x4List(length : number) : Int32x4List {
        return new typed_data.implementation.NativeInt32x4List(length);
    }
    @namedFactory
    static $fromList(elements : core.DartList<Int32x4>) : Int32x4List {
        return new typed_data.implementation.NativeInt32x4List.fromList(elements);
    }
    static fromList : new(elements : core.DartList<Int32x4>) => Int32x4List;

}

export namespace Float32x4List {
    export type Constructors = never;
    export type Interface = Omit<Float32x4List, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'dart:_js_helper',type : 'patch',value : {
        arguments : [],namedArguments : {
        }}})
export class Float32x4List {
    constructor(length : number) {
    }
    @defaultFactory
    static $Float32x4List(length : number) : Float32x4List {
        return new typed_data.implementation.NativeFloat32x4List(length);
    }
    @namedFactory
    static $fromList(elements : core.DartList<Float32x4>) : Float32x4List {
        return new typed_data.implementation.NativeFloat32x4List.fromList(elements);
    }
    static fromList : new(elements : core.DartList<Float32x4>) => Float32x4List;

}

export namespace Float64x2List {
    export type Constructors = never;
    export type Interface = Omit<Float64x2List, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'dart:_js_helper',type : 'patch',value : {
        arguments : [],namedArguments : {
        }}})
export class Float64x2List {
    constructor(length : number) {
    }
    @defaultFactory
    static $Float64x2List(length : number) : Float64x2List {
        return new typed_data.implementation.NativeFloat64x2List(length);
    }
    @namedFactory
    static $fromList(elements : core.DartList<Float64x2>) : Float64x2List {
        return new typed_data.implementation.NativeFloat64x2List.fromList(elements);
    }
    static fromList : new(elements : core.DartList<Float64x2>) => Float64x2List;

}

export namespace Float32x4 {
    export type Constructors = never;
    export type Interface = Omit<Float32x4, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'dart:_js_helper',type : 'patch',value : {
        arguments : [],namedArguments : {
        }}})
export class Float32x4 {
    constructor(x : double,y : double,z : double,w : double) {
    }
    @defaultFactory
    static $Float32x4(x : double,y : double,z : double,w : double) : Float32x4 {
        return new typed_data.implementation.NativeFloat32x4(x,y,z,w);
    }
    @namedFactory
    static $splat(v : double) : Float32x4 {
        return new typed_data.implementation.NativeFloat32x4.splat(v);
    }
    static splat : new(v : double) => Float32x4;

    @namedFactory
    static $zero() : Float32x4 {
        return new typed_data.implementation.NativeFloat32x4.zero();
    }
    static zero : new() => Float32x4;

    @namedFactory
    static $fromInt32x4Bits(x : Int32x4) : Float32x4 {
        return new typed_data.implementation.NativeFloat32x4.fromInt32x4Bits(x);
    }
    static fromInt32x4Bits : new(x : Int32x4) => Float32x4;

    @namedFactory
    static $fromFloat64x2(v : Float64x2) : Float32x4 {
        return new typed_data.implementation.NativeFloat32x4.fromFloat64x2(v);
    }
    static fromFloat64x2 : new(v : Float64x2) => Float32x4;

}

export namespace Int32x4 {
    export type Constructors = never;
    export type Interface = Omit<Int32x4, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'dart:_js_helper',type : 'patch',value : {
        arguments : [],namedArguments : {
        }}})
export class Int32x4 {
    constructor(x : number,y : number,z : number,w : number) {
    }
    @defaultFactory
    static $Int32x4(x : number,y : number,z : number,w : number) : Int32x4 {
        return new typed_data.implementation.NativeInt32x4(x,y,z,w);
    }
    @namedFactory
    static $bool(x : boolean,y : boolean,z : boolean,w : boolean) : Int32x4 {
        return new typed_data.implementation.NativeInt32x4.bool(x,y,z,w);
    }
    static bool : new(x : boolean,y : boolean,z : boolean,w : boolean) => Int32x4;

    @namedFactory
    static $fromFloat32x4Bits(x : Float32x4) : Int32x4 {
        return new typed_data.implementation.NativeInt32x4.fromFloat32x4Bits(x);
    }
    static fromFloat32x4Bits : new(x : Float32x4) => Int32x4;

}

export namespace Float64x2 {
    export type Constructors = never;
    export type Interface = Omit<Float64x2, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'dart:_js_helper',type : 'patch',value : {
        arguments : [],namedArguments : {
        }}})
export class Float64x2 {
    constructor(x : double,y : double) {
    }
    @defaultFactory
    static $Float64x2(x : double,y : double) : Float64x2 {
        return new typed_data.implementation.NativeFloat64x2(x,y);
    }
    @namedFactory
    static $splat(v : double) : Float64x2 {
        return new typed_data.implementation.NativeFloat64x2.splat(v);
    }
    static splat : new(v : double) => Float64x2;

    @namedFactory
    static $zero() : Float64x2 {
        return new typed_data.implementation.NativeFloat64x2.zero();
    }
    static zero : new() => Float64x2;

    @namedFactory
    static $fromFloat32x4(v : Float32x4) : Float64x2 {
        return new typed_data.implementation.NativeFloat64x2.fromFloat32x4(v);
    }
    static fromFloat32x4 : new(v : Float32x4) => Float64x2;

}

export class properties {
}
