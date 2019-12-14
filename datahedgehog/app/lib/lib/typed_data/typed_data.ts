/** Library asset:datahedgehog_monitor/lib/lib/typed_data/typed_data.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace ByteBuffer {
    export type Constructors = 'ByteBuffer';
    export type Interface = Omit<ByteBuffer, Constructors>;
}
@DartClass
export class ByteBuffer {
    @AbstractProperty
    get lengthInBytes() : number{ throw 'abstract'}
    @Abstract
    asUint8List(offsetInBytes? : number,length? : number) : Uint8List{ throw 'abstract'}
    @Abstract
    asInt8List(offsetInBytes? : number,length? : number) : Int8List{ throw 'abstract'}
    @Abstract
    asUint8ClampedList(offsetInBytes? : number,length? : number) : Uint8ClampedList{ throw 'abstract'}
    @Abstract
    asUint16List(offsetInBytes? : number,length? : number) : Uint16List{ throw 'abstract'}
    @Abstract
    asInt16List(offsetInBytes? : number,length? : number) : Int16List{ throw 'abstract'}
    @Abstract
    asUint32List(offsetInBytes? : number,length? : number) : Uint32List{ throw 'abstract'}
    @Abstract
    asInt32List(offsetInBytes? : number,length? : number) : Int32List{ throw 'abstract'}
    @Abstract
    asUint64List(offsetInBytes? : number,length? : number) : Uint64List{ throw 'abstract'}
    @Abstract
    asInt64List(offsetInBytes? : number,length? : number) : Int64List{ throw 'abstract'}
    @Abstract
    asInt32x4List(offsetInBytes? : number,length? : number) : Int32x4List{ throw 'abstract'}
    @Abstract
    asFloat32List(offsetInBytes? : number,length? : number) : Float32List{ throw 'abstract'}
    @Abstract
    asFloat64List(offsetInBytes? : number,length? : number) : Float64List{ throw 'abstract'}
    @Abstract
    asFloat32x4List(offsetInBytes? : number,length? : number) : Float32x4List{ throw 'abstract'}
    @Abstract
    asFloat64x2List(offsetInBytes? : number,length? : number) : Float64x2List{ throw 'abstract'}
    @Abstract
    asByteData(offsetInBytes? : number,length? : number) : ByteData{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    ByteBuffer() {
    }
}

export namespace TypedData {
    export type Constructors = 'TypedData';
    export type Interface = Omit<TypedData, Constructors>;
}
@DartClass
export class TypedData {
    @AbstractProperty
    get elementSizeInBytes() : number{ throw 'abstract'}
    @AbstractProperty
    get offsetInBytes() : number{ throw 'abstract'}
    @AbstractProperty
    get lengthInBytes() : number{ throw 'abstract'}
    @AbstractProperty
    get buffer() : ByteBuffer{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    TypedData() {
    }
}

export namespace Endianness {
    export type Constructors = '_';
    export type Interface = Omit<Endianness, Constructors>;
}
@DartClass
export class Endianness {
    @namedConstructor
    _(_littleEndian : boolean) {
        this._littleEndian = _littleEndian;
    }
    static _ : new(_littleEndian : boolean) => Endianness;

    private static __$BIG_ENDIAN : Endianness;
    static get BIG_ENDIAN() : Endianness { 
        if (this.__$BIG_ENDIAN===undefined) {
            this.__$BIG_ENDIAN = new Endianness._(false);
        }
        return this.__$BIG_ENDIAN;
    }

    private static __$LITTLE_ENDIAN : Endianness;
    static get LITTLE_ENDIAN() : Endianness { 
        if (this.__$LITTLE_ENDIAN===undefined) {
            this.__$LITTLE_ENDIAN = new Endianness._(true);
        }
        return this.__$LITTLE_ENDIAN;
    }

    private static __$HOST_ENDIAN : Endianness;
    static get HOST_ENDIAN() : Endianness { 
        if (this.__$HOST_ENDIAN===undefined) {
            this.__$HOST_ENDIAN = (new ByteData.view(new Uint16List.fromList(new core.DartList.literal(1)).buffer)).getInt8(0) == 1 ? Endianness.LITTLE_ENDIAN : Endianness.BIG_ENDIAN;
        }
        return this.__$HOST_ENDIAN;
    }
    static set HOST_ENDIAN(__$value : Endianness)  { 
        this.__$HOST_ENDIAN = __$value;
    }

    _littleEndian : boolean;

}

export namespace ByteData {
    export type Constructors = never;
    export type Interface = Omit<ByteData, Constructors>;
}
@DartClass
@Implements(TypedData)
export class ByteData implements TypedData.Interface {
    constructor(length : number) {
    }
    @defaultFactory
    static $ByteData(length : number) : ByteData {
    }
    @namedFactory
    static $view(buffer : ByteBuffer,offsetInBytes? : number,length? : number) : ByteData {
        offsetInBytes = offsetInBytes || 0;
        return buffer.asByteData(offsetInBytes,length);
    }
    static view : new(buffer : ByteBuffer,offsetInBytes : number,length : number) => ByteData;

    @Abstract
    getInt8(byteOffset : number) : number{ throw 'abstract'}
    @Abstract
    setInt8(byteOffset : number,value : number) : void{ throw 'abstract'}
    @Abstract
    getUint8(byteOffset : number) : number{ throw 'abstract'}
    @Abstract
    setUint8(byteOffset : number,value : number) : void{ throw 'abstract'}
    @Abstract
    getInt16(byteOffset : number,endian? : Endianness) : number{ throw 'abstract'}
    @Abstract
    setInt16(byteOffset : number,value : number,endian? : Endianness) : void{ throw 'abstract'}
    @Abstract
    getUint16(byteOffset : number,endian? : Endianness) : number{ throw 'abstract'}
    @Abstract
    setUint16(byteOffset : number,value : number,endian? : Endianness) : void{ throw 'abstract'}
    @Abstract
    getInt32(byteOffset : number,endian? : Endianness) : number{ throw 'abstract'}
    @Abstract
    setInt32(byteOffset : number,value : number,endian? : Endianness) : void{ throw 'abstract'}
    @Abstract
    getUint32(byteOffset : number,endian? : Endianness) : number{ throw 'abstract'}
    @Abstract
    setUint32(byteOffset : number,value : number,endian? : Endianness) : void{ throw 'abstract'}
    @Abstract
    getInt64(byteOffset : number,endian? : Endianness) : number{ throw 'abstract'}
    @Abstract
    setInt64(byteOffset : number,value : number,endian? : Endianness) : void{ throw 'abstract'}
    @Abstract
    getUint64(byteOffset : number,endian? : Endianness) : number{ throw 'abstract'}
    @Abstract
    setUint64(byteOffset : number,value : number,endian? : Endianness) : void{ throw 'abstract'}
    @Abstract
    getFloat32(byteOffset : number,endian? : Endianness) : double{ throw 'abstract'}
    @Abstract
    setFloat32(byteOffset : number,value : double,endian? : Endianness) : void{ throw 'abstract'}
    @Abstract
    getFloat64(byteOffset : number,endian? : Endianness) : double{ throw 'abstract'}
    @Abstract
    setFloat64(byteOffset : number,value : double,endian? : Endianness) : void{ throw 'abstract'}
}

export namespace Int8List {
    export type Constructors = never;
    export type Interface = Omit<Int8List, Constructors>;
}
@DartClass
@Implements(core.DartList,TypedData)
export class Int8List implements core.DartList.Interface<number>,TypedData.Interface {
    constructor(length : number) {
    }
    @defaultFactory
    static $Int8List(length : number) : Int8List {
    }
    @namedFactory
    static $fromList(elements : core.DartList<number>) : Int8List {
    }
    static fromList : new(elements : core.DartList<number>) => Int8List;

    @namedFactory
    static $view(buffer : ByteBuffer,offsetInBytes? : number,length? : number) : Int8List {
        offsetInBytes = offsetInBytes || 0;
        return buffer.asInt8List(offsetInBytes,length);
    }
    static view : new(buffer : ByteBuffer,offsetInBytes : number,length : number) => Int8List;

    private static __$BYTES_PER_ELEMENT : number;
    static get BYTES_PER_ELEMENT() : number { 
        if (this.__$BYTES_PER_ELEMENT===undefined) {
            this.__$BYTES_PER_ELEMENT = 1;
        }
        return this.__$BYTES_PER_ELEMENT;
    }

}

export namespace Uint8List {
    export type Constructors = never;
    export type Interface = Omit<Uint8List, Constructors>;
}
@DartClass
@Implements(core.DartList,TypedData)
export class Uint8List implements core.DartList.Interface<number>,TypedData.Interface {
    constructor(length : number) {
    }
    @defaultFactory
    static $Uint8List(length : number) : Uint8List {
    }
    @namedFactory
    static $fromList(elements : core.DartList<number>) : Uint8List {
    }
    static fromList : new(elements : core.DartList<number>) => Uint8List;

    @namedFactory
    static $view(buffer : ByteBuffer,offsetInBytes? : number,length? : number) : Uint8List {
        offsetInBytes = offsetInBytes || 0;
        return buffer.asUint8List(offsetInBytes,length);
    }
    static view : new(buffer : ByteBuffer,offsetInBytes : number,length : number) => Uint8List;

    private static __$BYTES_PER_ELEMENT : number;
    static get BYTES_PER_ELEMENT() : number { 
        if (this.__$BYTES_PER_ELEMENT===undefined) {
            this.__$BYTES_PER_ELEMENT = 1;
        }
        return this.__$BYTES_PER_ELEMENT;
    }

}

export namespace Uint8ClampedList {
    export type Constructors = never;
    export type Interface = Omit<Uint8ClampedList, Constructors>;
}
@DartClass
@Implements(core.DartList,TypedData)
export class Uint8ClampedList implements core.DartList.Interface<number>,TypedData.Interface {
    constructor(length : number) {
    }
    @defaultFactory
    static $Uint8ClampedList(length : number) : Uint8ClampedList {
    }
    @namedFactory
    static $fromList(elements : core.DartList<number>) : Uint8ClampedList {
    }
    static fromList : new(elements : core.DartList<number>) => Uint8ClampedList;

    @namedFactory
    static $view(buffer : ByteBuffer,offsetInBytes? : number,length? : number) : Uint8ClampedList {
        offsetInBytes = offsetInBytes || 0;
        return buffer.asUint8ClampedList(offsetInBytes,length);
    }
    static view : new(buffer : ByteBuffer,offsetInBytes : number,length : number) => Uint8ClampedList;

    private static __$BYTES_PER_ELEMENT : number;
    static get BYTES_PER_ELEMENT() : number { 
        if (this.__$BYTES_PER_ELEMENT===undefined) {
            this.__$BYTES_PER_ELEMENT = 1;
        }
        return this.__$BYTES_PER_ELEMENT;
    }

}

export namespace Int16List {
    export type Constructors = never;
    export type Interface = Omit<Int16List, Constructors>;
}
@DartClass
@Implements(core.DartList,TypedData)
export class Int16List implements core.DartList.Interface<number>,TypedData.Interface {
    constructor(length : number) {
    }
    @defaultFactory
    static $Int16List(length : number) : Int16List {
    }
    @namedFactory
    static $fromList(elements : core.DartList<number>) : Int16List {
    }
    static fromList : new(elements : core.DartList<number>) => Int16List;

    @namedFactory
    static $view(buffer : ByteBuffer,offsetInBytes? : number,length? : number) : Int16List {
        offsetInBytes = offsetInBytes || 0;
        return buffer.asInt16List(offsetInBytes,length);
    }
    static view : new(buffer : ByteBuffer,offsetInBytes : number,length : number) => Int16List;

    private static __$BYTES_PER_ELEMENT : number;
    static get BYTES_PER_ELEMENT() : number { 
        if (this.__$BYTES_PER_ELEMENT===undefined) {
            this.__$BYTES_PER_ELEMENT = 2;
        }
        return this.__$BYTES_PER_ELEMENT;
    }

}

export namespace Uint16List {
    export type Constructors = never;
    export type Interface = Omit<Uint16List, Constructors>;
}
@DartClass
@Implements(core.DartList,TypedData)
export class Uint16List implements core.DartList.Interface<number>,TypedData.Interface {
    constructor(length : number) {
    }
    @defaultFactory
    static $Uint16List(length : number) : Uint16List {
    }
    @namedFactory
    static $fromList(elements : core.DartList<number>) : Uint16List {
    }
    static fromList : new(elements : core.DartList<number>) => Uint16List;

    @namedFactory
    static $view(buffer : ByteBuffer,offsetInBytes? : number,length? : number) : Uint16List {
        offsetInBytes = offsetInBytes || 0;
        return buffer.asUint16List(offsetInBytes,length);
    }
    static view : new(buffer : ByteBuffer,offsetInBytes : number,length : number) => Uint16List;

    private static __$BYTES_PER_ELEMENT : number;
    static get BYTES_PER_ELEMENT() : number { 
        if (this.__$BYTES_PER_ELEMENT===undefined) {
            this.__$BYTES_PER_ELEMENT = 2;
        }
        return this.__$BYTES_PER_ELEMENT;
    }

}

export namespace Int32List {
    export type Constructors = never;
    export type Interface = Omit<Int32List, Constructors>;
}
@DartClass
@Implements(core.DartList,TypedData)
export class Int32List implements core.DartList.Interface<number>,TypedData.Interface {
    constructor(length : number) {
    }
    @defaultFactory
    static $Int32List(length : number) : Int32List {
    }
    @namedFactory
    static $fromList(elements : core.DartList<number>) : Int32List {
    }
    static fromList : new(elements : core.DartList<number>) => Int32List;

    @namedFactory
    static $view(buffer : ByteBuffer,offsetInBytes? : number,length? : number) : Int32List {
        offsetInBytes = offsetInBytes || 0;
        return buffer.asInt32List(offsetInBytes,length);
    }
    static view : new(buffer : ByteBuffer,offsetInBytes : number,length : number) => Int32List;

    private static __$BYTES_PER_ELEMENT : number;
    static get BYTES_PER_ELEMENT() : number { 
        if (this.__$BYTES_PER_ELEMENT===undefined) {
            this.__$BYTES_PER_ELEMENT = 4;
        }
        return this.__$BYTES_PER_ELEMENT;
    }

}

export namespace Uint32List {
    export type Constructors = never;
    export type Interface = Omit<Uint32List, Constructors>;
}
@DartClass
@Implements(core.DartList,TypedData)
export class Uint32List implements core.DartList.Interface<number>,TypedData.Interface {
    constructor(length : number) {
    }
    @defaultFactory
    static $Uint32List(length : number) : Uint32List {
    }
    @namedFactory
    static $fromList(elements : core.DartList<number>) : Uint32List {
    }
    static fromList : new(elements : core.DartList<number>) => Uint32List;

    @namedFactory
    static $view(buffer : ByteBuffer,offsetInBytes? : number,length? : number) : Uint32List {
        offsetInBytes = offsetInBytes || 0;
        return buffer.asUint32List(offsetInBytes,length);
    }
    static view : new(buffer : ByteBuffer,offsetInBytes : number,length : number) => Uint32List;

    private static __$BYTES_PER_ELEMENT : number;
    static get BYTES_PER_ELEMENT() : number { 
        if (this.__$BYTES_PER_ELEMENT===undefined) {
            this.__$BYTES_PER_ELEMENT = 4;
        }
        return this.__$BYTES_PER_ELEMENT;
    }

}

export namespace Int64List {
    export type Constructors = never;
    export type Interface = Omit<Int64List, Constructors>;
}
@DartClass
@Implements(core.DartList,TypedData)
export class Int64List implements core.DartList.Interface<number>,TypedData.Interface {
    constructor(length : number) {
    }
    @defaultFactory
    static $Int64List(length : number) : Int64List {
    }
    @namedFactory
    static $fromList(elements : core.DartList<number>) : Int64List {
    }
    static fromList : new(elements : core.DartList<number>) => Int64List;

    @namedFactory
    static $view(buffer : ByteBuffer,offsetInBytes? : number,length? : number) : Int64List {
        offsetInBytes = offsetInBytes || 0;
        return buffer.asInt64List(offsetInBytes,length);
    }
    static view : new(buffer : ByteBuffer,offsetInBytes : number,length : number) => Int64List;

    private static __$BYTES_PER_ELEMENT : number;
    static get BYTES_PER_ELEMENT() : number { 
        if (this.__$BYTES_PER_ELEMENT===undefined) {
            this.__$BYTES_PER_ELEMENT = 8;
        }
        return this.__$BYTES_PER_ELEMENT;
    }

}

export namespace Uint64List {
    export type Constructors = never;
    export type Interface = Omit<Uint64List, Constructors>;
}
@DartClass
@Implements(core.DartList,TypedData)
export class Uint64List implements core.DartList.Interface<number>,TypedData.Interface {
    constructor(length : number) {
    }
    @defaultFactory
    static $Uint64List(length : number) : Uint64List {
    }
    @namedFactory
    static $fromList(elements : core.DartList<number>) : Uint64List {
    }
    static fromList : new(elements : core.DartList<number>) => Uint64List;

    @namedFactory
    static $view(buffer : ByteBuffer,offsetInBytes? : number,length? : number) : Uint64List {
        offsetInBytes = offsetInBytes || 0;
        return buffer.asUint64List(offsetInBytes,length);
    }
    static view : new(buffer : ByteBuffer,offsetInBytes : number,length : number) => Uint64List;

    private static __$BYTES_PER_ELEMENT : number;
    static get BYTES_PER_ELEMENT() : number { 
        if (this.__$BYTES_PER_ELEMENT===undefined) {
            this.__$BYTES_PER_ELEMENT = 8;
        }
        return this.__$BYTES_PER_ELEMENT;
    }

}

export namespace Float32List {
    export type Constructors = never;
    export type Interface = Omit<Float32List, Constructors>;
}
@DartClass
@Implements(core.DartList,TypedData)
export class Float32List implements core.DartList.Interface<double>,TypedData.Interface {
    constructor(length : number) {
    }
    @defaultFactory
    static $Float32List(length : number) : Float32List {
    }
    @namedFactory
    static $fromList(elements : core.DartList<double>) : Float32List {
    }
    static fromList : new(elements : core.DartList<double>) => Float32List;

    @namedFactory
    static $view(buffer : ByteBuffer,offsetInBytes? : number,length? : number) : Float32List {
        offsetInBytes = offsetInBytes || 0;
        return buffer.asFloat32List(offsetInBytes,length);
    }
    static view : new(buffer : ByteBuffer,offsetInBytes : number,length : number) => Float32List;

    private static __$BYTES_PER_ELEMENT : number;
    static get BYTES_PER_ELEMENT() : number { 
        if (this.__$BYTES_PER_ELEMENT===undefined) {
            this.__$BYTES_PER_ELEMENT = 4;
        }
        return this.__$BYTES_PER_ELEMENT;
    }

}

export namespace Float64List {
    export type Constructors = never;
    export type Interface = Omit<Float64List, Constructors>;
}
@DartClass
@Implements(core.DartList,TypedData)
export class Float64List implements core.DartList.Interface<double>,TypedData.Interface {
    constructor(length : number) {
    }
    @defaultFactory
    static $Float64List(length : number) : Float64List {
    }
    @namedFactory
    static $fromList(elements : core.DartList<double>) : Float64List {
    }
    static fromList : new(elements : core.DartList<double>) => Float64List;

    @namedFactory
    static $view(buffer : ByteBuffer,offsetInBytes? : number,length? : number) : Float64List {
        offsetInBytes = offsetInBytes || 0;
        return buffer.asFloat64List(offsetInBytes,length);
    }
    static view : new(buffer : ByteBuffer,offsetInBytes : number,length : number) => Float64List;

    private static __$BYTES_PER_ELEMENT : number;
    static get BYTES_PER_ELEMENT() : number { 
        if (this.__$BYTES_PER_ELEMENT===undefined) {
            this.__$BYTES_PER_ELEMENT = 8;
        }
        return this.__$BYTES_PER_ELEMENT;
    }

}

export namespace Float32x4List {
    export type Constructors = never;
    export type Interface = Omit<Float32x4List, Constructors>;
}
@DartClass
@Implements(core.DartList,TypedData)
export class Float32x4List implements core.DartList.Interface<Float32x4>,TypedData.Interface {
    constructor(length : number) {
    }
    @defaultFactory
    static $Float32x4List(length : number) : Float32x4List {
    }
    @namedFactory
    static $fromList(elements : core.DartList<Float32x4>) : Float32x4List {
    }
    static fromList : new(elements : core.DartList<Float32x4>) => Float32x4List;

    @namedFactory
    static $view(buffer : ByteBuffer,offsetInBytes? : number,length? : number) : Float32x4List {
        offsetInBytes = offsetInBytes || 0;
        return buffer.asFloat32x4List(offsetInBytes,length);
    }
    static view : new(buffer : ByteBuffer,offsetInBytes : number,length : number) => Float32x4List;

    private static __$BYTES_PER_ELEMENT : number;
    static get BYTES_PER_ELEMENT() : number { 
        if (this.__$BYTES_PER_ELEMENT===undefined) {
            this.__$BYTES_PER_ELEMENT = 16;
        }
        return this.__$BYTES_PER_ELEMENT;
    }

}

export namespace Int32x4List {
    export type Constructors = never;
    export type Interface = Omit<Int32x4List, Constructors>;
}
@DartClass
@Implements(core.DartList,TypedData)
export class Int32x4List implements core.DartList.Interface<Int32x4>,TypedData.Interface {
    constructor(length : number) {
    }
    @defaultFactory
    static $Int32x4List(length : number) : Int32x4List {
    }
    @namedFactory
    static $fromList(elements : core.DartList<Int32x4>) : Int32x4List {
    }
    static fromList : new(elements : core.DartList<Int32x4>) => Int32x4List;

    @namedFactory
    static $view(buffer : ByteBuffer,offsetInBytes? : number,length? : number) : Int32x4List {
        offsetInBytes = offsetInBytes || 0;
        return buffer.asInt32x4List(offsetInBytes,length);
    }
    static view : new(buffer : ByteBuffer,offsetInBytes : number,length : number) => Int32x4List;

    private static __$BYTES_PER_ELEMENT : number;
    static get BYTES_PER_ELEMENT() : number { 
        if (this.__$BYTES_PER_ELEMENT===undefined) {
            this.__$BYTES_PER_ELEMENT = 16;
        }
        return this.__$BYTES_PER_ELEMENT;
    }

}

export namespace Float64x2List {
    export type Constructors = never;
    export type Interface = Omit<Float64x2List, Constructors>;
}
@DartClass
@Implements(core.DartList,TypedData)
export class Float64x2List implements core.DartList.Interface<Float64x2>,TypedData.Interface {
    constructor(length : number) {
    }
    @defaultFactory
    static $Float64x2List(length : number) : Float64x2List {
    }
    @namedFactory
    static $fromList(elements : core.DartList<Float64x2>) : Float64x2List {
    }
    static fromList : new(elements : core.DartList<Float64x2>) => Float64x2List;

    @namedFactory
    static $view(buffer : ByteBuffer,offsetInBytes? : number,length? : number) : Float64x2List {
        offsetInBytes = offsetInBytes || 0;
        return buffer.asFloat64x2List(offsetInBytes,length);
    }
    static view : new(buffer : ByteBuffer,offsetInBytes : number,length : number) => Float64x2List;

    private static __$BYTES_PER_ELEMENT : number;
    static get BYTES_PER_ELEMENT() : number { 
        if (this.__$BYTES_PER_ELEMENT===undefined) {
            this.__$BYTES_PER_ELEMENT = 16;
        }
        return this.__$BYTES_PER_ELEMENT;
    }

}

export namespace Float32x4 {
    export type Constructors = never;
    export type Interface = Omit<Float32x4, Constructors>;
}
@DartClass
export class Float32x4 {
    constructor(x : double,y : double,z : double,w : double) {
    }
    @defaultFactory
    static $Float32x4(x : double,y : double,z : double,w : double) : Float32x4 {
    }
    @namedFactory
    static $splat(v : double) : Float32x4 {
    }
    static splat : new(v : double) => Float32x4;

    @namedFactory
    static $zero() : Float32x4 {
    }
    static zero : new() => Float32x4;

    @namedFactory
    static $fromInt32x4Bits(x : Int32x4) : Float32x4 {
    }
    static fromInt32x4Bits : new(x : Int32x4) => Float32x4;

    @namedFactory
    static $fromFloat64x2(v : Float64x2) : Float32x4 {
    }
    static fromFloat64x2 : new(v : Float64x2) => Float32x4;

    @Abstract
    [OperatorMethods.PLUS](other : Float32x4) : Float32x4{ throw 'abstract'}
    @Abstract
    [OperatorMethods.NEGATE]() : Float32x4{ throw 'abstract'}
    @Abstract
    [OperatorMethods.MINUS](other : Float32x4) : Float32x4{ throw 'abstract'}
    @Abstract
    [OperatorMethods.MULTIPLY](other : Float32x4) : Float32x4{ throw 'abstract'}
    @Abstract
    [OperatorMethods.DIVIDE](other : Float32x4) : Float32x4{ throw 'abstract'}
    @Abstract
    lessThan(other : Float32x4) : Int32x4{ throw 'abstract'}
    @Abstract
    lessThanOrEqual(other : Float32x4) : Int32x4{ throw 'abstract'}
    @Abstract
    greaterThan(other : Float32x4) : Int32x4{ throw 'abstract'}
    @Abstract
    greaterThanOrEqual(other : Float32x4) : Int32x4{ throw 'abstract'}
    @Abstract
    equal(other : Float32x4) : Int32x4{ throw 'abstract'}
    @Abstract
    notEqual(other : Float32x4) : Int32x4{ throw 'abstract'}
    @Abstract
    scale(s : double) : Float32x4{ throw 'abstract'}
    @Abstract
    abs() : Float32x4{ throw 'abstract'}
    @Abstract
    clamp(lowerLimit : Float32x4,upperLimit : Float32x4) : Float32x4{ throw 'abstract'}
    @AbstractProperty
    get x() : double{ throw 'abstract'}
    @AbstractProperty
    get y() : double{ throw 'abstract'}
    @AbstractProperty
    get z() : double{ throw 'abstract'}
    @AbstractProperty
    get w() : double{ throw 'abstract'}
    @AbstractProperty
    get signMask() : number{ throw 'abstract'}
    private static __$XXXX : number;
    static get XXXX() : number { 
        if (this.__$XXXX===undefined) {
            this.__$XXXX = 0;
        }
        return this.__$XXXX;
    }

    private static __$XXXY : number;
    static get XXXY() : number { 
        if (this.__$XXXY===undefined) {
            this.__$XXXY = 64;
        }
        return this.__$XXXY;
    }

    private static __$XXXZ : number;
    static get XXXZ() : number { 
        if (this.__$XXXZ===undefined) {
            this.__$XXXZ = 128;
        }
        return this.__$XXXZ;
    }

    private static __$XXXW : number;
    static get XXXW() : number { 
        if (this.__$XXXW===undefined) {
            this.__$XXXW = 192;
        }
        return this.__$XXXW;
    }

    private static __$XXYX : number;
    static get XXYX() : number { 
        if (this.__$XXYX===undefined) {
            this.__$XXYX = 16;
        }
        return this.__$XXYX;
    }

    private static __$XXYY : number;
    static get XXYY() : number { 
        if (this.__$XXYY===undefined) {
            this.__$XXYY = 80;
        }
        return this.__$XXYY;
    }

    private static __$XXYZ : number;
    static get XXYZ() : number { 
        if (this.__$XXYZ===undefined) {
            this.__$XXYZ = 144;
        }
        return this.__$XXYZ;
    }

    private static __$XXYW : number;
    static get XXYW() : number { 
        if (this.__$XXYW===undefined) {
            this.__$XXYW = 208;
        }
        return this.__$XXYW;
    }

    private static __$XXZX : number;
    static get XXZX() : number { 
        if (this.__$XXZX===undefined) {
            this.__$XXZX = 32;
        }
        return this.__$XXZX;
    }

    private static __$XXZY : number;
    static get XXZY() : number { 
        if (this.__$XXZY===undefined) {
            this.__$XXZY = 96;
        }
        return this.__$XXZY;
    }

    private static __$XXZZ : number;
    static get XXZZ() : number { 
        if (this.__$XXZZ===undefined) {
            this.__$XXZZ = 160;
        }
        return this.__$XXZZ;
    }

    private static __$XXZW : number;
    static get XXZW() : number { 
        if (this.__$XXZW===undefined) {
            this.__$XXZW = 224;
        }
        return this.__$XXZW;
    }

    private static __$XXWX : number;
    static get XXWX() : number { 
        if (this.__$XXWX===undefined) {
            this.__$XXWX = 48;
        }
        return this.__$XXWX;
    }

    private static __$XXWY : number;
    static get XXWY() : number { 
        if (this.__$XXWY===undefined) {
            this.__$XXWY = 112;
        }
        return this.__$XXWY;
    }

    private static __$XXWZ : number;
    static get XXWZ() : number { 
        if (this.__$XXWZ===undefined) {
            this.__$XXWZ = 176;
        }
        return this.__$XXWZ;
    }

    private static __$XXWW : number;
    static get XXWW() : number { 
        if (this.__$XXWW===undefined) {
            this.__$XXWW = 240;
        }
        return this.__$XXWW;
    }

    private static __$XYXX : number;
    static get XYXX() : number { 
        if (this.__$XYXX===undefined) {
            this.__$XYXX = 4;
        }
        return this.__$XYXX;
    }

    private static __$XYXY : number;
    static get XYXY() : number { 
        if (this.__$XYXY===undefined) {
            this.__$XYXY = 68;
        }
        return this.__$XYXY;
    }

    private static __$XYXZ : number;
    static get XYXZ() : number { 
        if (this.__$XYXZ===undefined) {
            this.__$XYXZ = 132;
        }
        return this.__$XYXZ;
    }

    private static __$XYXW : number;
    static get XYXW() : number { 
        if (this.__$XYXW===undefined) {
            this.__$XYXW = 196;
        }
        return this.__$XYXW;
    }

    private static __$XYYX : number;
    static get XYYX() : number { 
        if (this.__$XYYX===undefined) {
            this.__$XYYX = 20;
        }
        return this.__$XYYX;
    }

    private static __$XYYY : number;
    static get XYYY() : number { 
        if (this.__$XYYY===undefined) {
            this.__$XYYY = 84;
        }
        return this.__$XYYY;
    }

    private static __$XYYZ : number;
    static get XYYZ() : number { 
        if (this.__$XYYZ===undefined) {
            this.__$XYYZ = 148;
        }
        return this.__$XYYZ;
    }

    private static __$XYYW : number;
    static get XYYW() : number { 
        if (this.__$XYYW===undefined) {
            this.__$XYYW = 212;
        }
        return this.__$XYYW;
    }

    private static __$XYZX : number;
    static get XYZX() : number { 
        if (this.__$XYZX===undefined) {
            this.__$XYZX = 36;
        }
        return this.__$XYZX;
    }

    private static __$XYZY : number;
    static get XYZY() : number { 
        if (this.__$XYZY===undefined) {
            this.__$XYZY = 100;
        }
        return this.__$XYZY;
    }

    private static __$XYZZ : number;
    static get XYZZ() : number { 
        if (this.__$XYZZ===undefined) {
            this.__$XYZZ = 164;
        }
        return this.__$XYZZ;
    }

    private static __$XYZW : number;
    static get XYZW() : number { 
        if (this.__$XYZW===undefined) {
            this.__$XYZW = 228;
        }
        return this.__$XYZW;
    }

    private static __$XYWX : number;
    static get XYWX() : number { 
        if (this.__$XYWX===undefined) {
            this.__$XYWX = 52;
        }
        return this.__$XYWX;
    }

    private static __$XYWY : number;
    static get XYWY() : number { 
        if (this.__$XYWY===undefined) {
            this.__$XYWY = 116;
        }
        return this.__$XYWY;
    }

    private static __$XYWZ : number;
    static get XYWZ() : number { 
        if (this.__$XYWZ===undefined) {
            this.__$XYWZ = 180;
        }
        return this.__$XYWZ;
    }

    private static __$XYWW : number;
    static get XYWW() : number { 
        if (this.__$XYWW===undefined) {
            this.__$XYWW = 244;
        }
        return this.__$XYWW;
    }

    private static __$XZXX : number;
    static get XZXX() : number { 
        if (this.__$XZXX===undefined) {
            this.__$XZXX = 8;
        }
        return this.__$XZXX;
    }

    private static __$XZXY : number;
    static get XZXY() : number { 
        if (this.__$XZXY===undefined) {
            this.__$XZXY = 72;
        }
        return this.__$XZXY;
    }

    private static __$XZXZ : number;
    static get XZXZ() : number { 
        if (this.__$XZXZ===undefined) {
            this.__$XZXZ = 136;
        }
        return this.__$XZXZ;
    }

    private static __$XZXW : number;
    static get XZXW() : number { 
        if (this.__$XZXW===undefined) {
            this.__$XZXW = 200;
        }
        return this.__$XZXW;
    }

    private static __$XZYX : number;
    static get XZYX() : number { 
        if (this.__$XZYX===undefined) {
            this.__$XZYX = 24;
        }
        return this.__$XZYX;
    }

    private static __$XZYY : number;
    static get XZYY() : number { 
        if (this.__$XZYY===undefined) {
            this.__$XZYY = 88;
        }
        return this.__$XZYY;
    }

    private static __$XZYZ : number;
    static get XZYZ() : number { 
        if (this.__$XZYZ===undefined) {
            this.__$XZYZ = 152;
        }
        return this.__$XZYZ;
    }

    private static __$XZYW : number;
    static get XZYW() : number { 
        if (this.__$XZYW===undefined) {
            this.__$XZYW = 216;
        }
        return this.__$XZYW;
    }

    private static __$XZZX : number;
    static get XZZX() : number { 
        if (this.__$XZZX===undefined) {
            this.__$XZZX = 40;
        }
        return this.__$XZZX;
    }

    private static __$XZZY : number;
    static get XZZY() : number { 
        if (this.__$XZZY===undefined) {
            this.__$XZZY = 104;
        }
        return this.__$XZZY;
    }

    private static __$XZZZ : number;
    static get XZZZ() : number { 
        if (this.__$XZZZ===undefined) {
            this.__$XZZZ = 168;
        }
        return this.__$XZZZ;
    }

    private static __$XZZW : number;
    static get XZZW() : number { 
        if (this.__$XZZW===undefined) {
            this.__$XZZW = 232;
        }
        return this.__$XZZW;
    }

    private static __$XZWX : number;
    static get XZWX() : number { 
        if (this.__$XZWX===undefined) {
            this.__$XZWX = 56;
        }
        return this.__$XZWX;
    }

    private static __$XZWY : number;
    static get XZWY() : number { 
        if (this.__$XZWY===undefined) {
            this.__$XZWY = 120;
        }
        return this.__$XZWY;
    }

    private static __$XZWZ : number;
    static get XZWZ() : number { 
        if (this.__$XZWZ===undefined) {
            this.__$XZWZ = 184;
        }
        return this.__$XZWZ;
    }

    private static __$XZWW : number;
    static get XZWW() : number { 
        if (this.__$XZWW===undefined) {
            this.__$XZWW = 248;
        }
        return this.__$XZWW;
    }

    private static __$XWXX : number;
    static get XWXX() : number { 
        if (this.__$XWXX===undefined) {
            this.__$XWXX = 12;
        }
        return this.__$XWXX;
    }

    private static __$XWXY : number;
    static get XWXY() : number { 
        if (this.__$XWXY===undefined) {
            this.__$XWXY = 76;
        }
        return this.__$XWXY;
    }

    private static __$XWXZ : number;
    static get XWXZ() : number { 
        if (this.__$XWXZ===undefined) {
            this.__$XWXZ = 140;
        }
        return this.__$XWXZ;
    }

    private static __$XWXW : number;
    static get XWXW() : number { 
        if (this.__$XWXW===undefined) {
            this.__$XWXW = 204;
        }
        return this.__$XWXW;
    }

    private static __$XWYX : number;
    static get XWYX() : number { 
        if (this.__$XWYX===undefined) {
            this.__$XWYX = 28;
        }
        return this.__$XWYX;
    }

    private static __$XWYY : number;
    static get XWYY() : number { 
        if (this.__$XWYY===undefined) {
            this.__$XWYY = 92;
        }
        return this.__$XWYY;
    }

    private static __$XWYZ : number;
    static get XWYZ() : number { 
        if (this.__$XWYZ===undefined) {
            this.__$XWYZ = 156;
        }
        return this.__$XWYZ;
    }

    private static __$XWYW : number;
    static get XWYW() : number { 
        if (this.__$XWYW===undefined) {
            this.__$XWYW = 220;
        }
        return this.__$XWYW;
    }

    private static __$XWZX : number;
    static get XWZX() : number { 
        if (this.__$XWZX===undefined) {
            this.__$XWZX = 44;
        }
        return this.__$XWZX;
    }

    private static __$XWZY : number;
    static get XWZY() : number { 
        if (this.__$XWZY===undefined) {
            this.__$XWZY = 108;
        }
        return this.__$XWZY;
    }

    private static __$XWZZ : number;
    static get XWZZ() : number { 
        if (this.__$XWZZ===undefined) {
            this.__$XWZZ = 172;
        }
        return this.__$XWZZ;
    }

    private static __$XWZW : number;
    static get XWZW() : number { 
        if (this.__$XWZW===undefined) {
            this.__$XWZW = 236;
        }
        return this.__$XWZW;
    }

    private static __$XWWX : number;
    static get XWWX() : number { 
        if (this.__$XWWX===undefined) {
            this.__$XWWX = 60;
        }
        return this.__$XWWX;
    }

    private static __$XWWY : number;
    static get XWWY() : number { 
        if (this.__$XWWY===undefined) {
            this.__$XWWY = 124;
        }
        return this.__$XWWY;
    }

    private static __$XWWZ : number;
    static get XWWZ() : number { 
        if (this.__$XWWZ===undefined) {
            this.__$XWWZ = 188;
        }
        return this.__$XWWZ;
    }

    private static __$XWWW : number;
    static get XWWW() : number { 
        if (this.__$XWWW===undefined) {
            this.__$XWWW = 252;
        }
        return this.__$XWWW;
    }

    private static __$YXXX : number;
    static get YXXX() : number { 
        if (this.__$YXXX===undefined) {
            this.__$YXXX = 1;
        }
        return this.__$YXXX;
    }

    private static __$YXXY : number;
    static get YXXY() : number { 
        if (this.__$YXXY===undefined) {
            this.__$YXXY = 65;
        }
        return this.__$YXXY;
    }

    private static __$YXXZ : number;
    static get YXXZ() : number { 
        if (this.__$YXXZ===undefined) {
            this.__$YXXZ = 129;
        }
        return this.__$YXXZ;
    }

    private static __$YXXW : number;
    static get YXXW() : number { 
        if (this.__$YXXW===undefined) {
            this.__$YXXW = 193;
        }
        return this.__$YXXW;
    }

    private static __$YXYX : number;
    static get YXYX() : number { 
        if (this.__$YXYX===undefined) {
            this.__$YXYX = 17;
        }
        return this.__$YXYX;
    }

    private static __$YXYY : number;
    static get YXYY() : number { 
        if (this.__$YXYY===undefined) {
            this.__$YXYY = 81;
        }
        return this.__$YXYY;
    }

    private static __$YXYZ : number;
    static get YXYZ() : number { 
        if (this.__$YXYZ===undefined) {
            this.__$YXYZ = 145;
        }
        return this.__$YXYZ;
    }

    private static __$YXYW : number;
    static get YXYW() : number { 
        if (this.__$YXYW===undefined) {
            this.__$YXYW = 209;
        }
        return this.__$YXYW;
    }

    private static __$YXZX : number;
    static get YXZX() : number { 
        if (this.__$YXZX===undefined) {
            this.__$YXZX = 33;
        }
        return this.__$YXZX;
    }

    private static __$YXZY : number;
    static get YXZY() : number { 
        if (this.__$YXZY===undefined) {
            this.__$YXZY = 97;
        }
        return this.__$YXZY;
    }

    private static __$YXZZ : number;
    static get YXZZ() : number { 
        if (this.__$YXZZ===undefined) {
            this.__$YXZZ = 161;
        }
        return this.__$YXZZ;
    }

    private static __$YXZW : number;
    static get YXZW() : number { 
        if (this.__$YXZW===undefined) {
            this.__$YXZW = 225;
        }
        return this.__$YXZW;
    }

    private static __$YXWX : number;
    static get YXWX() : number { 
        if (this.__$YXWX===undefined) {
            this.__$YXWX = 49;
        }
        return this.__$YXWX;
    }

    private static __$YXWY : number;
    static get YXWY() : number { 
        if (this.__$YXWY===undefined) {
            this.__$YXWY = 113;
        }
        return this.__$YXWY;
    }

    private static __$YXWZ : number;
    static get YXWZ() : number { 
        if (this.__$YXWZ===undefined) {
            this.__$YXWZ = 177;
        }
        return this.__$YXWZ;
    }

    private static __$YXWW : number;
    static get YXWW() : number { 
        if (this.__$YXWW===undefined) {
            this.__$YXWW = 241;
        }
        return this.__$YXWW;
    }

    private static __$YYXX : number;
    static get YYXX() : number { 
        if (this.__$YYXX===undefined) {
            this.__$YYXX = 5;
        }
        return this.__$YYXX;
    }

    private static __$YYXY : number;
    static get YYXY() : number { 
        if (this.__$YYXY===undefined) {
            this.__$YYXY = 69;
        }
        return this.__$YYXY;
    }

    private static __$YYXZ : number;
    static get YYXZ() : number { 
        if (this.__$YYXZ===undefined) {
            this.__$YYXZ = 133;
        }
        return this.__$YYXZ;
    }

    private static __$YYXW : number;
    static get YYXW() : number { 
        if (this.__$YYXW===undefined) {
            this.__$YYXW = 197;
        }
        return this.__$YYXW;
    }

    private static __$YYYX : number;
    static get YYYX() : number { 
        if (this.__$YYYX===undefined) {
            this.__$YYYX = 21;
        }
        return this.__$YYYX;
    }

    private static __$YYYY : number;
    static get YYYY() : number { 
        if (this.__$YYYY===undefined) {
            this.__$YYYY = 85;
        }
        return this.__$YYYY;
    }

    private static __$YYYZ : number;
    static get YYYZ() : number { 
        if (this.__$YYYZ===undefined) {
            this.__$YYYZ = 149;
        }
        return this.__$YYYZ;
    }

    private static __$YYYW : number;
    static get YYYW() : number { 
        if (this.__$YYYW===undefined) {
            this.__$YYYW = 213;
        }
        return this.__$YYYW;
    }

    private static __$YYZX : number;
    static get YYZX() : number { 
        if (this.__$YYZX===undefined) {
            this.__$YYZX = 37;
        }
        return this.__$YYZX;
    }

    private static __$YYZY : number;
    static get YYZY() : number { 
        if (this.__$YYZY===undefined) {
            this.__$YYZY = 101;
        }
        return this.__$YYZY;
    }

    private static __$YYZZ : number;
    static get YYZZ() : number { 
        if (this.__$YYZZ===undefined) {
            this.__$YYZZ = 165;
        }
        return this.__$YYZZ;
    }

    private static __$YYZW : number;
    static get YYZW() : number { 
        if (this.__$YYZW===undefined) {
            this.__$YYZW = 229;
        }
        return this.__$YYZW;
    }

    private static __$YYWX : number;
    static get YYWX() : number { 
        if (this.__$YYWX===undefined) {
            this.__$YYWX = 53;
        }
        return this.__$YYWX;
    }

    private static __$YYWY : number;
    static get YYWY() : number { 
        if (this.__$YYWY===undefined) {
            this.__$YYWY = 117;
        }
        return this.__$YYWY;
    }

    private static __$YYWZ : number;
    static get YYWZ() : number { 
        if (this.__$YYWZ===undefined) {
            this.__$YYWZ = 181;
        }
        return this.__$YYWZ;
    }

    private static __$YYWW : number;
    static get YYWW() : number { 
        if (this.__$YYWW===undefined) {
            this.__$YYWW = 245;
        }
        return this.__$YYWW;
    }

    private static __$YZXX : number;
    static get YZXX() : number { 
        if (this.__$YZXX===undefined) {
            this.__$YZXX = 9;
        }
        return this.__$YZXX;
    }

    private static __$YZXY : number;
    static get YZXY() : number { 
        if (this.__$YZXY===undefined) {
            this.__$YZXY = 73;
        }
        return this.__$YZXY;
    }

    private static __$YZXZ : number;
    static get YZXZ() : number { 
        if (this.__$YZXZ===undefined) {
            this.__$YZXZ = 137;
        }
        return this.__$YZXZ;
    }

    private static __$YZXW : number;
    static get YZXW() : number { 
        if (this.__$YZXW===undefined) {
            this.__$YZXW = 201;
        }
        return this.__$YZXW;
    }

    private static __$YZYX : number;
    static get YZYX() : number { 
        if (this.__$YZYX===undefined) {
            this.__$YZYX = 25;
        }
        return this.__$YZYX;
    }

    private static __$YZYY : number;
    static get YZYY() : number { 
        if (this.__$YZYY===undefined) {
            this.__$YZYY = 89;
        }
        return this.__$YZYY;
    }

    private static __$YZYZ : number;
    static get YZYZ() : number { 
        if (this.__$YZYZ===undefined) {
            this.__$YZYZ = 153;
        }
        return this.__$YZYZ;
    }

    private static __$YZYW : number;
    static get YZYW() : number { 
        if (this.__$YZYW===undefined) {
            this.__$YZYW = 217;
        }
        return this.__$YZYW;
    }

    private static __$YZZX : number;
    static get YZZX() : number { 
        if (this.__$YZZX===undefined) {
            this.__$YZZX = 41;
        }
        return this.__$YZZX;
    }

    private static __$YZZY : number;
    static get YZZY() : number { 
        if (this.__$YZZY===undefined) {
            this.__$YZZY = 105;
        }
        return this.__$YZZY;
    }

    private static __$YZZZ : number;
    static get YZZZ() : number { 
        if (this.__$YZZZ===undefined) {
            this.__$YZZZ = 169;
        }
        return this.__$YZZZ;
    }

    private static __$YZZW : number;
    static get YZZW() : number { 
        if (this.__$YZZW===undefined) {
            this.__$YZZW = 233;
        }
        return this.__$YZZW;
    }

    private static __$YZWX : number;
    static get YZWX() : number { 
        if (this.__$YZWX===undefined) {
            this.__$YZWX = 57;
        }
        return this.__$YZWX;
    }

    private static __$YZWY : number;
    static get YZWY() : number { 
        if (this.__$YZWY===undefined) {
            this.__$YZWY = 121;
        }
        return this.__$YZWY;
    }

    private static __$YZWZ : number;
    static get YZWZ() : number { 
        if (this.__$YZWZ===undefined) {
            this.__$YZWZ = 185;
        }
        return this.__$YZWZ;
    }

    private static __$YZWW : number;
    static get YZWW() : number { 
        if (this.__$YZWW===undefined) {
            this.__$YZWW = 249;
        }
        return this.__$YZWW;
    }

    private static __$YWXX : number;
    static get YWXX() : number { 
        if (this.__$YWXX===undefined) {
            this.__$YWXX = 13;
        }
        return this.__$YWXX;
    }

    private static __$YWXY : number;
    static get YWXY() : number { 
        if (this.__$YWXY===undefined) {
            this.__$YWXY = 77;
        }
        return this.__$YWXY;
    }

    private static __$YWXZ : number;
    static get YWXZ() : number { 
        if (this.__$YWXZ===undefined) {
            this.__$YWXZ = 141;
        }
        return this.__$YWXZ;
    }

    private static __$YWXW : number;
    static get YWXW() : number { 
        if (this.__$YWXW===undefined) {
            this.__$YWXW = 205;
        }
        return this.__$YWXW;
    }

    private static __$YWYX : number;
    static get YWYX() : number { 
        if (this.__$YWYX===undefined) {
            this.__$YWYX = 29;
        }
        return this.__$YWYX;
    }

    private static __$YWYY : number;
    static get YWYY() : number { 
        if (this.__$YWYY===undefined) {
            this.__$YWYY = 93;
        }
        return this.__$YWYY;
    }

    private static __$YWYZ : number;
    static get YWYZ() : number { 
        if (this.__$YWYZ===undefined) {
            this.__$YWYZ = 157;
        }
        return this.__$YWYZ;
    }

    private static __$YWYW : number;
    static get YWYW() : number { 
        if (this.__$YWYW===undefined) {
            this.__$YWYW = 221;
        }
        return this.__$YWYW;
    }

    private static __$YWZX : number;
    static get YWZX() : number { 
        if (this.__$YWZX===undefined) {
            this.__$YWZX = 45;
        }
        return this.__$YWZX;
    }

    private static __$YWZY : number;
    static get YWZY() : number { 
        if (this.__$YWZY===undefined) {
            this.__$YWZY = 109;
        }
        return this.__$YWZY;
    }

    private static __$YWZZ : number;
    static get YWZZ() : number { 
        if (this.__$YWZZ===undefined) {
            this.__$YWZZ = 173;
        }
        return this.__$YWZZ;
    }

    private static __$YWZW : number;
    static get YWZW() : number { 
        if (this.__$YWZW===undefined) {
            this.__$YWZW = 237;
        }
        return this.__$YWZW;
    }

    private static __$YWWX : number;
    static get YWWX() : number { 
        if (this.__$YWWX===undefined) {
            this.__$YWWX = 61;
        }
        return this.__$YWWX;
    }

    private static __$YWWY : number;
    static get YWWY() : number { 
        if (this.__$YWWY===undefined) {
            this.__$YWWY = 125;
        }
        return this.__$YWWY;
    }

    private static __$YWWZ : number;
    static get YWWZ() : number { 
        if (this.__$YWWZ===undefined) {
            this.__$YWWZ = 189;
        }
        return this.__$YWWZ;
    }

    private static __$YWWW : number;
    static get YWWW() : number { 
        if (this.__$YWWW===undefined) {
            this.__$YWWW = 253;
        }
        return this.__$YWWW;
    }

    private static __$ZXXX : number;
    static get ZXXX() : number { 
        if (this.__$ZXXX===undefined) {
            this.__$ZXXX = 2;
        }
        return this.__$ZXXX;
    }

    private static __$ZXXY : number;
    static get ZXXY() : number { 
        if (this.__$ZXXY===undefined) {
            this.__$ZXXY = 66;
        }
        return this.__$ZXXY;
    }

    private static __$ZXXZ : number;
    static get ZXXZ() : number { 
        if (this.__$ZXXZ===undefined) {
            this.__$ZXXZ = 130;
        }
        return this.__$ZXXZ;
    }

    private static __$ZXXW : number;
    static get ZXXW() : number { 
        if (this.__$ZXXW===undefined) {
            this.__$ZXXW = 194;
        }
        return this.__$ZXXW;
    }

    private static __$ZXYX : number;
    static get ZXYX() : number { 
        if (this.__$ZXYX===undefined) {
            this.__$ZXYX = 18;
        }
        return this.__$ZXYX;
    }

    private static __$ZXYY : number;
    static get ZXYY() : number { 
        if (this.__$ZXYY===undefined) {
            this.__$ZXYY = 82;
        }
        return this.__$ZXYY;
    }

    private static __$ZXYZ : number;
    static get ZXYZ() : number { 
        if (this.__$ZXYZ===undefined) {
            this.__$ZXYZ = 146;
        }
        return this.__$ZXYZ;
    }

    private static __$ZXYW : number;
    static get ZXYW() : number { 
        if (this.__$ZXYW===undefined) {
            this.__$ZXYW = 210;
        }
        return this.__$ZXYW;
    }

    private static __$ZXZX : number;
    static get ZXZX() : number { 
        if (this.__$ZXZX===undefined) {
            this.__$ZXZX = 34;
        }
        return this.__$ZXZX;
    }

    private static __$ZXZY : number;
    static get ZXZY() : number { 
        if (this.__$ZXZY===undefined) {
            this.__$ZXZY = 98;
        }
        return this.__$ZXZY;
    }

    private static __$ZXZZ : number;
    static get ZXZZ() : number { 
        if (this.__$ZXZZ===undefined) {
            this.__$ZXZZ = 162;
        }
        return this.__$ZXZZ;
    }

    private static __$ZXZW : number;
    static get ZXZW() : number { 
        if (this.__$ZXZW===undefined) {
            this.__$ZXZW = 226;
        }
        return this.__$ZXZW;
    }

    private static __$ZXWX : number;
    static get ZXWX() : number { 
        if (this.__$ZXWX===undefined) {
            this.__$ZXWX = 50;
        }
        return this.__$ZXWX;
    }

    private static __$ZXWY : number;
    static get ZXWY() : number { 
        if (this.__$ZXWY===undefined) {
            this.__$ZXWY = 114;
        }
        return this.__$ZXWY;
    }

    private static __$ZXWZ : number;
    static get ZXWZ() : number { 
        if (this.__$ZXWZ===undefined) {
            this.__$ZXWZ = 178;
        }
        return this.__$ZXWZ;
    }

    private static __$ZXWW : number;
    static get ZXWW() : number { 
        if (this.__$ZXWW===undefined) {
            this.__$ZXWW = 242;
        }
        return this.__$ZXWW;
    }

    private static __$ZYXX : number;
    static get ZYXX() : number { 
        if (this.__$ZYXX===undefined) {
            this.__$ZYXX = 6;
        }
        return this.__$ZYXX;
    }

    private static __$ZYXY : number;
    static get ZYXY() : number { 
        if (this.__$ZYXY===undefined) {
            this.__$ZYXY = 70;
        }
        return this.__$ZYXY;
    }

    private static __$ZYXZ : number;
    static get ZYXZ() : number { 
        if (this.__$ZYXZ===undefined) {
            this.__$ZYXZ = 134;
        }
        return this.__$ZYXZ;
    }

    private static __$ZYXW : number;
    static get ZYXW() : number { 
        if (this.__$ZYXW===undefined) {
            this.__$ZYXW = 198;
        }
        return this.__$ZYXW;
    }

    private static __$ZYYX : number;
    static get ZYYX() : number { 
        if (this.__$ZYYX===undefined) {
            this.__$ZYYX = 22;
        }
        return this.__$ZYYX;
    }

    private static __$ZYYY : number;
    static get ZYYY() : number { 
        if (this.__$ZYYY===undefined) {
            this.__$ZYYY = 86;
        }
        return this.__$ZYYY;
    }

    private static __$ZYYZ : number;
    static get ZYYZ() : number { 
        if (this.__$ZYYZ===undefined) {
            this.__$ZYYZ = 150;
        }
        return this.__$ZYYZ;
    }

    private static __$ZYYW : number;
    static get ZYYW() : number { 
        if (this.__$ZYYW===undefined) {
            this.__$ZYYW = 214;
        }
        return this.__$ZYYW;
    }

    private static __$ZYZX : number;
    static get ZYZX() : number { 
        if (this.__$ZYZX===undefined) {
            this.__$ZYZX = 38;
        }
        return this.__$ZYZX;
    }

    private static __$ZYZY : number;
    static get ZYZY() : number { 
        if (this.__$ZYZY===undefined) {
            this.__$ZYZY = 102;
        }
        return this.__$ZYZY;
    }

    private static __$ZYZZ : number;
    static get ZYZZ() : number { 
        if (this.__$ZYZZ===undefined) {
            this.__$ZYZZ = 166;
        }
        return this.__$ZYZZ;
    }

    private static __$ZYZW : number;
    static get ZYZW() : number { 
        if (this.__$ZYZW===undefined) {
            this.__$ZYZW = 230;
        }
        return this.__$ZYZW;
    }

    private static __$ZYWX : number;
    static get ZYWX() : number { 
        if (this.__$ZYWX===undefined) {
            this.__$ZYWX = 54;
        }
        return this.__$ZYWX;
    }

    private static __$ZYWY : number;
    static get ZYWY() : number { 
        if (this.__$ZYWY===undefined) {
            this.__$ZYWY = 118;
        }
        return this.__$ZYWY;
    }

    private static __$ZYWZ : number;
    static get ZYWZ() : number { 
        if (this.__$ZYWZ===undefined) {
            this.__$ZYWZ = 182;
        }
        return this.__$ZYWZ;
    }

    private static __$ZYWW : number;
    static get ZYWW() : number { 
        if (this.__$ZYWW===undefined) {
            this.__$ZYWW = 246;
        }
        return this.__$ZYWW;
    }

    private static __$ZZXX : number;
    static get ZZXX() : number { 
        if (this.__$ZZXX===undefined) {
            this.__$ZZXX = 10;
        }
        return this.__$ZZXX;
    }

    private static __$ZZXY : number;
    static get ZZXY() : number { 
        if (this.__$ZZXY===undefined) {
            this.__$ZZXY = 74;
        }
        return this.__$ZZXY;
    }

    private static __$ZZXZ : number;
    static get ZZXZ() : number { 
        if (this.__$ZZXZ===undefined) {
            this.__$ZZXZ = 138;
        }
        return this.__$ZZXZ;
    }

    private static __$ZZXW : number;
    static get ZZXW() : number { 
        if (this.__$ZZXW===undefined) {
            this.__$ZZXW = 202;
        }
        return this.__$ZZXW;
    }

    private static __$ZZYX : number;
    static get ZZYX() : number { 
        if (this.__$ZZYX===undefined) {
            this.__$ZZYX = 26;
        }
        return this.__$ZZYX;
    }

    private static __$ZZYY : number;
    static get ZZYY() : number { 
        if (this.__$ZZYY===undefined) {
            this.__$ZZYY = 90;
        }
        return this.__$ZZYY;
    }

    private static __$ZZYZ : number;
    static get ZZYZ() : number { 
        if (this.__$ZZYZ===undefined) {
            this.__$ZZYZ = 154;
        }
        return this.__$ZZYZ;
    }

    private static __$ZZYW : number;
    static get ZZYW() : number { 
        if (this.__$ZZYW===undefined) {
            this.__$ZZYW = 218;
        }
        return this.__$ZZYW;
    }

    private static __$ZZZX : number;
    static get ZZZX() : number { 
        if (this.__$ZZZX===undefined) {
            this.__$ZZZX = 42;
        }
        return this.__$ZZZX;
    }

    private static __$ZZZY : number;
    static get ZZZY() : number { 
        if (this.__$ZZZY===undefined) {
            this.__$ZZZY = 106;
        }
        return this.__$ZZZY;
    }

    private static __$ZZZZ : number;
    static get ZZZZ() : number { 
        if (this.__$ZZZZ===undefined) {
            this.__$ZZZZ = 170;
        }
        return this.__$ZZZZ;
    }

    private static __$ZZZW : number;
    static get ZZZW() : number { 
        if (this.__$ZZZW===undefined) {
            this.__$ZZZW = 234;
        }
        return this.__$ZZZW;
    }

    private static __$ZZWX : number;
    static get ZZWX() : number { 
        if (this.__$ZZWX===undefined) {
            this.__$ZZWX = 58;
        }
        return this.__$ZZWX;
    }

    private static __$ZZWY : number;
    static get ZZWY() : number { 
        if (this.__$ZZWY===undefined) {
            this.__$ZZWY = 122;
        }
        return this.__$ZZWY;
    }

    private static __$ZZWZ : number;
    static get ZZWZ() : number { 
        if (this.__$ZZWZ===undefined) {
            this.__$ZZWZ = 186;
        }
        return this.__$ZZWZ;
    }

    private static __$ZZWW : number;
    static get ZZWW() : number { 
        if (this.__$ZZWW===undefined) {
            this.__$ZZWW = 250;
        }
        return this.__$ZZWW;
    }

    private static __$ZWXX : number;
    static get ZWXX() : number { 
        if (this.__$ZWXX===undefined) {
            this.__$ZWXX = 14;
        }
        return this.__$ZWXX;
    }

    private static __$ZWXY : number;
    static get ZWXY() : number { 
        if (this.__$ZWXY===undefined) {
            this.__$ZWXY = 78;
        }
        return this.__$ZWXY;
    }

    private static __$ZWXZ : number;
    static get ZWXZ() : number { 
        if (this.__$ZWXZ===undefined) {
            this.__$ZWXZ = 142;
        }
        return this.__$ZWXZ;
    }

    private static __$ZWXW : number;
    static get ZWXW() : number { 
        if (this.__$ZWXW===undefined) {
            this.__$ZWXW = 206;
        }
        return this.__$ZWXW;
    }

    private static __$ZWYX : number;
    static get ZWYX() : number { 
        if (this.__$ZWYX===undefined) {
            this.__$ZWYX = 30;
        }
        return this.__$ZWYX;
    }

    private static __$ZWYY : number;
    static get ZWYY() : number { 
        if (this.__$ZWYY===undefined) {
            this.__$ZWYY = 94;
        }
        return this.__$ZWYY;
    }

    private static __$ZWYZ : number;
    static get ZWYZ() : number { 
        if (this.__$ZWYZ===undefined) {
            this.__$ZWYZ = 158;
        }
        return this.__$ZWYZ;
    }

    private static __$ZWYW : number;
    static get ZWYW() : number { 
        if (this.__$ZWYW===undefined) {
            this.__$ZWYW = 222;
        }
        return this.__$ZWYW;
    }

    private static __$ZWZX : number;
    static get ZWZX() : number { 
        if (this.__$ZWZX===undefined) {
            this.__$ZWZX = 46;
        }
        return this.__$ZWZX;
    }

    private static __$ZWZY : number;
    static get ZWZY() : number { 
        if (this.__$ZWZY===undefined) {
            this.__$ZWZY = 110;
        }
        return this.__$ZWZY;
    }

    private static __$ZWZZ : number;
    static get ZWZZ() : number { 
        if (this.__$ZWZZ===undefined) {
            this.__$ZWZZ = 174;
        }
        return this.__$ZWZZ;
    }

    private static __$ZWZW : number;
    static get ZWZW() : number { 
        if (this.__$ZWZW===undefined) {
            this.__$ZWZW = 238;
        }
        return this.__$ZWZW;
    }

    private static __$ZWWX : number;
    static get ZWWX() : number { 
        if (this.__$ZWWX===undefined) {
            this.__$ZWWX = 62;
        }
        return this.__$ZWWX;
    }

    private static __$ZWWY : number;
    static get ZWWY() : number { 
        if (this.__$ZWWY===undefined) {
            this.__$ZWWY = 126;
        }
        return this.__$ZWWY;
    }

    private static __$ZWWZ : number;
    static get ZWWZ() : number { 
        if (this.__$ZWWZ===undefined) {
            this.__$ZWWZ = 190;
        }
        return this.__$ZWWZ;
    }

    private static __$ZWWW : number;
    static get ZWWW() : number { 
        if (this.__$ZWWW===undefined) {
            this.__$ZWWW = 254;
        }
        return this.__$ZWWW;
    }

    private static __$WXXX : number;
    static get WXXX() : number { 
        if (this.__$WXXX===undefined) {
            this.__$WXXX = 3;
        }
        return this.__$WXXX;
    }

    private static __$WXXY : number;
    static get WXXY() : number { 
        if (this.__$WXXY===undefined) {
            this.__$WXXY = 67;
        }
        return this.__$WXXY;
    }

    private static __$WXXZ : number;
    static get WXXZ() : number { 
        if (this.__$WXXZ===undefined) {
            this.__$WXXZ = 131;
        }
        return this.__$WXXZ;
    }

    private static __$WXXW : number;
    static get WXXW() : number { 
        if (this.__$WXXW===undefined) {
            this.__$WXXW = 195;
        }
        return this.__$WXXW;
    }

    private static __$WXYX : number;
    static get WXYX() : number { 
        if (this.__$WXYX===undefined) {
            this.__$WXYX = 19;
        }
        return this.__$WXYX;
    }

    private static __$WXYY : number;
    static get WXYY() : number { 
        if (this.__$WXYY===undefined) {
            this.__$WXYY = 83;
        }
        return this.__$WXYY;
    }

    private static __$WXYZ : number;
    static get WXYZ() : number { 
        if (this.__$WXYZ===undefined) {
            this.__$WXYZ = 147;
        }
        return this.__$WXYZ;
    }

    private static __$WXYW : number;
    static get WXYW() : number { 
        if (this.__$WXYW===undefined) {
            this.__$WXYW = 211;
        }
        return this.__$WXYW;
    }

    private static __$WXZX : number;
    static get WXZX() : number { 
        if (this.__$WXZX===undefined) {
            this.__$WXZX = 35;
        }
        return this.__$WXZX;
    }

    private static __$WXZY : number;
    static get WXZY() : number { 
        if (this.__$WXZY===undefined) {
            this.__$WXZY = 99;
        }
        return this.__$WXZY;
    }

    private static __$WXZZ : number;
    static get WXZZ() : number { 
        if (this.__$WXZZ===undefined) {
            this.__$WXZZ = 163;
        }
        return this.__$WXZZ;
    }

    private static __$WXZW : number;
    static get WXZW() : number { 
        if (this.__$WXZW===undefined) {
            this.__$WXZW = 227;
        }
        return this.__$WXZW;
    }

    private static __$WXWX : number;
    static get WXWX() : number { 
        if (this.__$WXWX===undefined) {
            this.__$WXWX = 51;
        }
        return this.__$WXWX;
    }

    private static __$WXWY : number;
    static get WXWY() : number { 
        if (this.__$WXWY===undefined) {
            this.__$WXWY = 115;
        }
        return this.__$WXWY;
    }

    private static __$WXWZ : number;
    static get WXWZ() : number { 
        if (this.__$WXWZ===undefined) {
            this.__$WXWZ = 179;
        }
        return this.__$WXWZ;
    }

    private static __$WXWW : number;
    static get WXWW() : number { 
        if (this.__$WXWW===undefined) {
            this.__$WXWW = 243;
        }
        return this.__$WXWW;
    }

    private static __$WYXX : number;
    static get WYXX() : number { 
        if (this.__$WYXX===undefined) {
            this.__$WYXX = 7;
        }
        return this.__$WYXX;
    }

    private static __$WYXY : number;
    static get WYXY() : number { 
        if (this.__$WYXY===undefined) {
            this.__$WYXY = 71;
        }
        return this.__$WYXY;
    }

    private static __$WYXZ : number;
    static get WYXZ() : number { 
        if (this.__$WYXZ===undefined) {
            this.__$WYXZ = 135;
        }
        return this.__$WYXZ;
    }

    private static __$WYXW : number;
    static get WYXW() : number { 
        if (this.__$WYXW===undefined) {
            this.__$WYXW = 199;
        }
        return this.__$WYXW;
    }

    private static __$WYYX : number;
    static get WYYX() : number { 
        if (this.__$WYYX===undefined) {
            this.__$WYYX = 23;
        }
        return this.__$WYYX;
    }

    private static __$WYYY : number;
    static get WYYY() : number { 
        if (this.__$WYYY===undefined) {
            this.__$WYYY = 87;
        }
        return this.__$WYYY;
    }

    private static __$WYYZ : number;
    static get WYYZ() : number { 
        if (this.__$WYYZ===undefined) {
            this.__$WYYZ = 151;
        }
        return this.__$WYYZ;
    }

    private static __$WYYW : number;
    static get WYYW() : number { 
        if (this.__$WYYW===undefined) {
            this.__$WYYW = 215;
        }
        return this.__$WYYW;
    }

    private static __$WYZX : number;
    static get WYZX() : number { 
        if (this.__$WYZX===undefined) {
            this.__$WYZX = 39;
        }
        return this.__$WYZX;
    }

    private static __$WYZY : number;
    static get WYZY() : number { 
        if (this.__$WYZY===undefined) {
            this.__$WYZY = 103;
        }
        return this.__$WYZY;
    }

    private static __$WYZZ : number;
    static get WYZZ() : number { 
        if (this.__$WYZZ===undefined) {
            this.__$WYZZ = 167;
        }
        return this.__$WYZZ;
    }

    private static __$WYZW : number;
    static get WYZW() : number { 
        if (this.__$WYZW===undefined) {
            this.__$WYZW = 231;
        }
        return this.__$WYZW;
    }

    private static __$WYWX : number;
    static get WYWX() : number { 
        if (this.__$WYWX===undefined) {
            this.__$WYWX = 55;
        }
        return this.__$WYWX;
    }

    private static __$WYWY : number;
    static get WYWY() : number { 
        if (this.__$WYWY===undefined) {
            this.__$WYWY = 119;
        }
        return this.__$WYWY;
    }

    private static __$WYWZ : number;
    static get WYWZ() : number { 
        if (this.__$WYWZ===undefined) {
            this.__$WYWZ = 183;
        }
        return this.__$WYWZ;
    }

    private static __$WYWW : number;
    static get WYWW() : number { 
        if (this.__$WYWW===undefined) {
            this.__$WYWW = 247;
        }
        return this.__$WYWW;
    }

    private static __$WZXX : number;
    static get WZXX() : number { 
        if (this.__$WZXX===undefined) {
            this.__$WZXX = 11;
        }
        return this.__$WZXX;
    }

    private static __$WZXY : number;
    static get WZXY() : number { 
        if (this.__$WZXY===undefined) {
            this.__$WZXY = 75;
        }
        return this.__$WZXY;
    }

    private static __$WZXZ : number;
    static get WZXZ() : number { 
        if (this.__$WZXZ===undefined) {
            this.__$WZXZ = 139;
        }
        return this.__$WZXZ;
    }

    private static __$WZXW : number;
    static get WZXW() : number { 
        if (this.__$WZXW===undefined) {
            this.__$WZXW = 203;
        }
        return this.__$WZXW;
    }

    private static __$WZYX : number;
    static get WZYX() : number { 
        if (this.__$WZYX===undefined) {
            this.__$WZYX = 27;
        }
        return this.__$WZYX;
    }

    private static __$WZYY : number;
    static get WZYY() : number { 
        if (this.__$WZYY===undefined) {
            this.__$WZYY = 91;
        }
        return this.__$WZYY;
    }

    private static __$WZYZ : number;
    static get WZYZ() : number { 
        if (this.__$WZYZ===undefined) {
            this.__$WZYZ = 155;
        }
        return this.__$WZYZ;
    }

    private static __$WZYW : number;
    static get WZYW() : number { 
        if (this.__$WZYW===undefined) {
            this.__$WZYW = 219;
        }
        return this.__$WZYW;
    }

    private static __$WZZX : number;
    static get WZZX() : number { 
        if (this.__$WZZX===undefined) {
            this.__$WZZX = 43;
        }
        return this.__$WZZX;
    }

    private static __$WZZY : number;
    static get WZZY() : number { 
        if (this.__$WZZY===undefined) {
            this.__$WZZY = 107;
        }
        return this.__$WZZY;
    }

    private static __$WZZZ : number;
    static get WZZZ() : number { 
        if (this.__$WZZZ===undefined) {
            this.__$WZZZ = 171;
        }
        return this.__$WZZZ;
    }

    private static __$WZZW : number;
    static get WZZW() : number { 
        if (this.__$WZZW===undefined) {
            this.__$WZZW = 235;
        }
        return this.__$WZZW;
    }

    private static __$WZWX : number;
    static get WZWX() : number { 
        if (this.__$WZWX===undefined) {
            this.__$WZWX = 59;
        }
        return this.__$WZWX;
    }

    private static __$WZWY : number;
    static get WZWY() : number { 
        if (this.__$WZWY===undefined) {
            this.__$WZWY = 123;
        }
        return this.__$WZWY;
    }

    private static __$WZWZ : number;
    static get WZWZ() : number { 
        if (this.__$WZWZ===undefined) {
            this.__$WZWZ = 187;
        }
        return this.__$WZWZ;
    }

    private static __$WZWW : number;
    static get WZWW() : number { 
        if (this.__$WZWW===undefined) {
            this.__$WZWW = 251;
        }
        return this.__$WZWW;
    }

    private static __$WWXX : number;
    static get WWXX() : number { 
        if (this.__$WWXX===undefined) {
            this.__$WWXX = 15;
        }
        return this.__$WWXX;
    }

    private static __$WWXY : number;
    static get WWXY() : number { 
        if (this.__$WWXY===undefined) {
            this.__$WWXY = 79;
        }
        return this.__$WWXY;
    }

    private static __$WWXZ : number;
    static get WWXZ() : number { 
        if (this.__$WWXZ===undefined) {
            this.__$WWXZ = 143;
        }
        return this.__$WWXZ;
    }

    private static __$WWXW : number;
    static get WWXW() : number { 
        if (this.__$WWXW===undefined) {
            this.__$WWXW = 207;
        }
        return this.__$WWXW;
    }

    private static __$WWYX : number;
    static get WWYX() : number { 
        if (this.__$WWYX===undefined) {
            this.__$WWYX = 31;
        }
        return this.__$WWYX;
    }

    private static __$WWYY : number;
    static get WWYY() : number { 
        if (this.__$WWYY===undefined) {
            this.__$WWYY = 95;
        }
        return this.__$WWYY;
    }

    private static __$WWYZ : number;
    static get WWYZ() : number { 
        if (this.__$WWYZ===undefined) {
            this.__$WWYZ = 159;
        }
        return this.__$WWYZ;
    }

    private static __$WWYW : number;
    static get WWYW() : number { 
        if (this.__$WWYW===undefined) {
            this.__$WWYW = 223;
        }
        return this.__$WWYW;
    }

    private static __$WWZX : number;
    static get WWZX() : number { 
        if (this.__$WWZX===undefined) {
            this.__$WWZX = 47;
        }
        return this.__$WWZX;
    }

    private static __$WWZY : number;
    static get WWZY() : number { 
        if (this.__$WWZY===undefined) {
            this.__$WWZY = 111;
        }
        return this.__$WWZY;
    }

    private static __$WWZZ : number;
    static get WWZZ() : number { 
        if (this.__$WWZZ===undefined) {
            this.__$WWZZ = 175;
        }
        return this.__$WWZZ;
    }

    private static __$WWZW : number;
    static get WWZW() : number { 
        if (this.__$WWZW===undefined) {
            this.__$WWZW = 239;
        }
        return this.__$WWZW;
    }

    private static __$WWWX : number;
    static get WWWX() : number { 
        if (this.__$WWWX===undefined) {
            this.__$WWWX = 63;
        }
        return this.__$WWWX;
    }

    private static __$WWWY : number;
    static get WWWY() : number { 
        if (this.__$WWWY===undefined) {
            this.__$WWWY = 127;
        }
        return this.__$WWWY;
    }

    private static __$WWWZ : number;
    static get WWWZ() : number { 
        if (this.__$WWWZ===undefined) {
            this.__$WWWZ = 191;
        }
        return this.__$WWWZ;
    }

    private static __$WWWW : number;
    static get WWWW() : number { 
        if (this.__$WWWW===undefined) {
            this.__$WWWW = 255;
        }
        return this.__$WWWW;
    }

    @Abstract
    shuffle(mask : number) : Float32x4{ throw 'abstract'}
    @Abstract
    shuffleMix(other : Float32x4,mask : number) : Float32x4{ throw 'abstract'}
    @Abstract
    withX(x : double) : Float32x4{ throw 'abstract'}
    @Abstract
    withY(y : double) : Float32x4{ throw 'abstract'}
    @Abstract
    withZ(z : double) : Float32x4{ throw 'abstract'}
    @Abstract
    withW(w : double) : Float32x4{ throw 'abstract'}
    @Abstract
    min(other : Float32x4) : Float32x4{ throw 'abstract'}
    @Abstract
    max(other : Float32x4) : Float32x4{ throw 'abstract'}
    @Abstract
    sqrt() : Float32x4{ throw 'abstract'}
    @Abstract
    reciprocal() : Float32x4{ throw 'abstract'}
    @Abstract
    reciprocalSqrt() : Float32x4{ throw 'abstract'}
}

export namespace Int32x4 {
    export type Constructors = never;
    export type Interface = Omit<Int32x4, Constructors>;
}
@DartClass
export class Int32x4 {
    constructor(x : number,y : number,z : number,w : number) {
    }
    @defaultFactory
    static $Int32x4(x : number,y : number,z : number,w : number) : Int32x4 {
    }
    @namedFactory
    static $bool(x : boolean,y : boolean,z : boolean,w : boolean) : Int32x4 {
    }
    static bool : new(x : boolean,y : boolean,z : boolean,w : boolean) => Int32x4;

    @namedFactory
    static $fromFloat32x4Bits(x : Float32x4) : Int32x4 {
    }
    static fromFloat32x4Bits : new(x : Float32x4) => Int32x4;

    @Abstract
    [OperatorMethods.BINARY_OR](other : Int32x4) : Int32x4{ throw 'abstract'}
    @Abstract
    [OperatorMethods.BINARY_AND](other : Int32x4) : Int32x4{ throw 'abstract'}
    @Abstract
    [OperatorMethods.XOR](other : Int32x4) : Int32x4{ throw 'abstract'}
    @Abstract
    [OperatorMethods.PLUS](other : Int32x4) : Int32x4{ throw 'abstract'}
    @Abstract
    [OperatorMethods.MINUS](other : Int32x4) : Int32x4{ throw 'abstract'}
    @AbstractProperty
    get x() : number{ throw 'abstract'}
    @AbstractProperty
    get y() : number{ throw 'abstract'}
    @AbstractProperty
    get z() : number{ throw 'abstract'}
    @AbstractProperty
    get w() : number{ throw 'abstract'}
    @AbstractProperty
    get signMask() : number{ throw 'abstract'}
    private static __$XXXX : number;
    static get XXXX() : number { 
        if (this.__$XXXX===undefined) {
            this.__$XXXX = 0;
        }
        return this.__$XXXX;
    }

    private static __$XXXY : number;
    static get XXXY() : number { 
        if (this.__$XXXY===undefined) {
            this.__$XXXY = 64;
        }
        return this.__$XXXY;
    }

    private static __$XXXZ : number;
    static get XXXZ() : number { 
        if (this.__$XXXZ===undefined) {
            this.__$XXXZ = 128;
        }
        return this.__$XXXZ;
    }

    private static __$XXXW : number;
    static get XXXW() : number { 
        if (this.__$XXXW===undefined) {
            this.__$XXXW = 192;
        }
        return this.__$XXXW;
    }

    private static __$XXYX : number;
    static get XXYX() : number { 
        if (this.__$XXYX===undefined) {
            this.__$XXYX = 16;
        }
        return this.__$XXYX;
    }

    private static __$XXYY : number;
    static get XXYY() : number { 
        if (this.__$XXYY===undefined) {
            this.__$XXYY = 80;
        }
        return this.__$XXYY;
    }

    private static __$XXYZ : number;
    static get XXYZ() : number { 
        if (this.__$XXYZ===undefined) {
            this.__$XXYZ = 144;
        }
        return this.__$XXYZ;
    }

    private static __$XXYW : number;
    static get XXYW() : number { 
        if (this.__$XXYW===undefined) {
            this.__$XXYW = 208;
        }
        return this.__$XXYW;
    }

    private static __$XXZX : number;
    static get XXZX() : number { 
        if (this.__$XXZX===undefined) {
            this.__$XXZX = 32;
        }
        return this.__$XXZX;
    }

    private static __$XXZY : number;
    static get XXZY() : number { 
        if (this.__$XXZY===undefined) {
            this.__$XXZY = 96;
        }
        return this.__$XXZY;
    }

    private static __$XXZZ : number;
    static get XXZZ() : number { 
        if (this.__$XXZZ===undefined) {
            this.__$XXZZ = 160;
        }
        return this.__$XXZZ;
    }

    private static __$XXZW : number;
    static get XXZW() : number { 
        if (this.__$XXZW===undefined) {
            this.__$XXZW = 224;
        }
        return this.__$XXZW;
    }

    private static __$XXWX : number;
    static get XXWX() : number { 
        if (this.__$XXWX===undefined) {
            this.__$XXWX = 48;
        }
        return this.__$XXWX;
    }

    private static __$XXWY : number;
    static get XXWY() : number { 
        if (this.__$XXWY===undefined) {
            this.__$XXWY = 112;
        }
        return this.__$XXWY;
    }

    private static __$XXWZ : number;
    static get XXWZ() : number { 
        if (this.__$XXWZ===undefined) {
            this.__$XXWZ = 176;
        }
        return this.__$XXWZ;
    }

    private static __$XXWW : number;
    static get XXWW() : number { 
        if (this.__$XXWW===undefined) {
            this.__$XXWW = 240;
        }
        return this.__$XXWW;
    }

    private static __$XYXX : number;
    static get XYXX() : number { 
        if (this.__$XYXX===undefined) {
            this.__$XYXX = 4;
        }
        return this.__$XYXX;
    }

    private static __$XYXY : number;
    static get XYXY() : number { 
        if (this.__$XYXY===undefined) {
            this.__$XYXY = 68;
        }
        return this.__$XYXY;
    }

    private static __$XYXZ : number;
    static get XYXZ() : number { 
        if (this.__$XYXZ===undefined) {
            this.__$XYXZ = 132;
        }
        return this.__$XYXZ;
    }

    private static __$XYXW : number;
    static get XYXW() : number { 
        if (this.__$XYXW===undefined) {
            this.__$XYXW = 196;
        }
        return this.__$XYXW;
    }

    private static __$XYYX : number;
    static get XYYX() : number { 
        if (this.__$XYYX===undefined) {
            this.__$XYYX = 20;
        }
        return this.__$XYYX;
    }

    private static __$XYYY : number;
    static get XYYY() : number { 
        if (this.__$XYYY===undefined) {
            this.__$XYYY = 84;
        }
        return this.__$XYYY;
    }

    private static __$XYYZ : number;
    static get XYYZ() : number { 
        if (this.__$XYYZ===undefined) {
            this.__$XYYZ = 148;
        }
        return this.__$XYYZ;
    }

    private static __$XYYW : number;
    static get XYYW() : number { 
        if (this.__$XYYW===undefined) {
            this.__$XYYW = 212;
        }
        return this.__$XYYW;
    }

    private static __$XYZX : number;
    static get XYZX() : number { 
        if (this.__$XYZX===undefined) {
            this.__$XYZX = 36;
        }
        return this.__$XYZX;
    }

    private static __$XYZY : number;
    static get XYZY() : number { 
        if (this.__$XYZY===undefined) {
            this.__$XYZY = 100;
        }
        return this.__$XYZY;
    }

    private static __$XYZZ : number;
    static get XYZZ() : number { 
        if (this.__$XYZZ===undefined) {
            this.__$XYZZ = 164;
        }
        return this.__$XYZZ;
    }

    private static __$XYZW : number;
    static get XYZW() : number { 
        if (this.__$XYZW===undefined) {
            this.__$XYZW = 228;
        }
        return this.__$XYZW;
    }

    private static __$XYWX : number;
    static get XYWX() : number { 
        if (this.__$XYWX===undefined) {
            this.__$XYWX = 52;
        }
        return this.__$XYWX;
    }

    private static __$XYWY : number;
    static get XYWY() : number { 
        if (this.__$XYWY===undefined) {
            this.__$XYWY = 116;
        }
        return this.__$XYWY;
    }

    private static __$XYWZ : number;
    static get XYWZ() : number { 
        if (this.__$XYWZ===undefined) {
            this.__$XYWZ = 180;
        }
        return this.__$XYWZ;
    }

    private static __$XYWW : number;
    static get XYWW() : number { 
        if (this.__$XYWW===undefined) {
            this.__$XYWW = 244;
        }
        return this.__$XYWW;
    }

    private static __$XZXX : number;
    static get XZXX() : number { 
        if (this.__$XZXX===undefined) {
            this.__$XZXX = 8;
        }
        return this.__$XZXX;
    }

    private static __$XZXY : number;
    static get XZXY() : number { 
        if (this.__$XZXY===undefined) {
            this.__$XZXY = 72;
        }
        return this.__$XZXY;
    }

    private static __$XZXZ : number;
    static get XZXZ() : number { 
        if (this.__$XZXZ===undefined) {
            this.__$XZXZ = 136;
        }
        return this.__$XZXZ;
    }

    private static __$XZXW : number;
    static get XZXW() : number { 
        if (this.__$XZXW===undefined) {
            this.__$XZXW = 200;
        }
        return this.__$XZXW;
    }

    private static __$XZYX : number;
    static get XZYX() : number { 
        if (this.__$XZYX===undefined) {
            this.__$XZYX = 24;
        }
        return this.__$XZYX;
    }

    private static __$XZYY : number;
    static get XZYY() : number { 
        if (this.__$XZYY===undefined) {
            this.__$XZYY = 88;
        }
        return this.__$XZYY;
    }

    private static __$XZYZ : number;
    static get XZYZ() : number { 
        if (this.__$XZYZ===undefined) {
            this.__$XZYZ = 152;
        }
        return this.__$XZYZ;
    }

    private static __$XZYW : number;
    static get XZYW() : number { 
        if (this.__$XZYW===undefined) {
            this.__$XZYW = 216;
        }
        return this.__$XZYW;
    }

    private static __$XZZX : number;
    static get XZZX() : number { 
        if (this.__$XZZX===undefined) {
            this.__$XZZX = 40;
        }
        return this.__$XZZX;
    }

    private static __$XZZY : number;
    static get XZZY() : number { 
        if (this.__$XZZY===undefined) {
            this.__$XZZY = 104;
        }
        return this.__$XZZY;
    }

    private static __$XZZZ : number;
    static get XZZZ() : number { 
        if (this.__$XZZZ===undefined) {
            this.__$XZZZ = 168;
        }
        return this.__$XZZZ;
    }

    private static __$XZZW : number;
    static get XZZW() : number { 
        if (this.__$XZZW===undefined) {
            this.__$XZZW = 232;
        }
        return this.__$XZZW;
    }

    private static __$XZWX : number;
    static get XZWX() : number { 
        if (this.__$XZWX===undefined) {
            this.__$XZWX = 56;
        }
        return this.__$XZWX;
    }

    private static __$XZWY : number;
    static get XZWY() : number { 
        if (this.__$XZWY===undefined) {
            this.__$XZWY = 120;
        }
        return this.__$XZWY;
    }

    private static __$XZWZ : number;
    static get XZWZ() : number { 
        if (this.__$XZWZ===undefined) {
            this.__$XZWZ = 184;
        }
        return this.__$XZWZ;
    }

    private static __$XZWW : number;
    static get XZWW() : number { 
        if (this.__$XZWW===undefined) {
            this.__$XZWW = 248;
        }
        return this.__$XZWW;
    }

    private static __$XWXX : number;
    static get XWXX() : number { 
        if (this.__$XWXX===undefined) {
            this.__$XWXX = 12;
        }
        return this.__$XWXX;
    }

    private static __$XWXY : number;
    static get XWXY() : number { 
        if (this.__$XWXY===undefined) {
            this.__$XWXY = 76;
        }
        return this.__$XWXY;
    }

    private static __$XWXZ : number;
    static get XWXZ() : number { 
        if (this.__$XWXZ===undefined) {
            this.__$XWXZ = 140;
        }
        return this.__$XWXZ;
    }

    private static __$XWXW : number;
    static get XWXW() : number { 
        if (this.__$XWXW===undefined) {
            this.__$XWXW = 204;
        }
        return this.__$XWXW;
    }

    private static __$XWYX : number;
    static get XWYX() : number { 
        if (this.__$XWYX===undefined) {
            this.__$XWYX = 28;
        }
        return this.__$XWYX;
    }

    private static __$XWYY : number;
    static get XWYY() : number { 
        if (this.__$XWYY===undefined) {
            this.__$XWYY = 92;
        }
        return this.__$XWYY;
    }

    private static __$XWYZ : number;
    static get XWYZ() : number { 
        if (this.__$XWYZ===undefined) {
            this.__$XWYZ = 156;
        }
        return this.__$XWYZ;
    }

    private static __$XWYW : number;
    static get XWYW() : number { 
        if (this.__$XWYW===undefined) {
            this.__$XWYW = 220;
        }
        return this.__$XWYW;
    }

    private static __$XWZX : number;
    static get XWZX() : number { 
        if (this.__$XWZX===undefined) {
            this.__$XWZX = 44;
        }
        return this.__$XWZX;
    }

    private static __$XWZY : number;
    static get XWZY() : number { 
        if (this.__$XWZY===undefined) {
            this.__$XWZY = 108;
        }
        return this.__$XWZY;
    }

    private static __$XWZZ : number;
    static get XWZZ() : number { 
        if (this.__$XWZZ===undefined) {
            this.__$XWZZ = 172;
        }
        return this.__$XWZZ;
    }

    private static __$XWZW : number;
    static get XWZW() : number { 
        if (this.__$XWZW===undefined) {
            this.__$XWZW = 236;
        }
        return this.__$XWZW;
    }

    private static __$XWWX : number;
    static get XWWX() : number { 
        if (this.__$XWWX===undefined) {
            this.__$XWWX = 60;
        }
        return this.__$XWWX;
    }

    private static __$XWWY : number;
    static get XWWY() : number { 
        if (this.__$XWWY===undefined) {
            this.__$XWWY = 124;
        }
        return this.__$XWWY;
    }

    private static __$XWWZ : number;
    static get XWWZ() : number { 
        if (this.__$XWWZ===undefined) {
            this.__$XWWZ = 188;
        }
        return this.__$XWWZ;
    }

    private static __$XWWW : number;
    static get XWWW() : number { 
        if (this.__$XWWW===undefined) {
            this.__$XWWW = 252;
        }
        return this.__$XWWW;
    }

    private static __$YXXX : number;
    static get YXXX() : number { 
        if (this.__$YXXX===undefined) {
            this.__$YXXX = 1;
        }
        return this.__$YXXX;
    }

    private static __$YXXY : number;
    static get YXXY() : number { 
        if (this.__$YXXY===undefined) {
            this.__$YXXY = 65;
        }
        return this.__$YXXY;
    }

    private static __$YXXZ : number;
    static get YXXZ() : number { 
        if (this.__$YXXZ===undefined) {
            this.__$YXXZ = 129;
        }
        return this.__$YXXZ;
    }

    private static __$YXXW : number;
    static get YXXW() : number { 
        if (this.__$YXXW===undefined) {
            this.__$YXXW = 193;
        }
        return this.__$YXXW;
    }

    private static __$YXYX : number;
    static get YXYX() : number { 
        if (this.__$YXYX===undefined) {
            this.__$YXYX = 17;
        }
        return this.__$YXYX;
    }

    private static __$YXYY : number;
    static get YXYY() : number { 
        if (this.__$YXYY===undefined) {
            this.__$YXYY = 81;
        }
        return this.__$YXYY;
    }

    private static __$YXYZ : number;
    static get YXYZ() : number { 
        if (this.__$YXYZ===undefined) {
            this.__$YXYZ = 145;
        }
        return this.__$YXYZ;
    }

    private static __$YXYW : number;
    static get YXYW() : number { 
        if (this.__$YXYW===undefined) {
            this.__$YXYW = 209;
        }
        return this.__$YXYW;
    }

    private static __$YXZX : number;
    static get YXZX() : number { 
        if (this.__$YXZX===undefined) {
            this.__$YXZX = 33;
        }
        return this.__$YXZX;
    }

    private static __$YXZY : number;
    static get YXZY() : number { 
        if (this.__$YXZY===undefined) {
            this.__$YXZY = 97;
        }
        return this.__$YXZY;
    }

    private static __$YXZZ : number;
    static get YXZZ() : number { 
        if (this.__$YXZZ===undefined) {
            this.__$YXZZ = 161;
        }
        return this.__$YXZZ;
    }

    private static __$YXZW : number;
    static get YXZW() : number { 
        if (this.__$YXZW===undefined) {
            this.__$YXZW = 225;
        }
        return this.__$YXZW;
    }

    private static __$YXWX : number;
    static get YXWX() : number { 
        if (this.__$YXWX===undefined) {
            this.__$YXWX = 49;
        }
        return this.__$YXWX;
    }

    private static __$YXWY : number;
    static get YXWY() : number { 
        if (this.__$YXWY===undefined) {
            this.__$YXWY = 113;
        }
        return this.__$YXWY;
    }

    private static __$YXWZ : number;
    static get YXWZ() : number { 
        if (this.__$YXWZ===undefined) {
            this.__$YXWZ = 177;
        }
        return this.__$YXWZ;
    }

    private static __$YXWW : number;
    static get YXWW() : number { 
        if (this.__$YXWW===undefined) {
            this.__$YXWW = 241;
        }
        return this.__$YXWW;
    }

    private static __$YYXX : number;
    static get YYXX() : number { 
        if (this.__$YYXX===undefined) {
            this.__$YYXX = 5;
        }
        return this.__$YYXX;
    }

    private static __$YYXY : number;
    static get YYXY() : number { 
        if (this.__$YYXY===undefined) {
            this.__$YYXY = 69;
        }
        return this.__$YYXY;
    }

    private static __$YYXZ : number;
    static get YYXZ() : number { 
        if (this.__$YYXZ===undefined) {
            this.__$YYXZ = 133;
        }
        return this.__$YYXZ;
    }

    private static __$YYXW : number;
    static get YYXW() : number { 
        if (this.__$YYXW===undefined) {
            this.__$YYXW = 197;
        }
        return this.__$YYXW;
    }

    private static __$YYYX : number;
    static get YYYX() : number { 
        if (this.__$YYYX===undefined) {
            this.__$YYYX = 21;
        }
        return this.__$YYYX;
    }

    private static __$YYYY : number;
    static get YYYY() : number { 
        if (this.__$YYYY===undefined) {
            this.__$YYYY = 85;
        }
        return this.__$YYYY;
    }

    private static __$YYYZ : number;
    static get YYYZ() : number { 
        if (this.__$YYYZ===undefined) {
            this.__$YYYZ = 149;
        }
        return this.__$YYYZ;
    }

    private static __$YYYW : number;
    static get YYYW() : number { 
        if (this.__$YYYW===undefined) {
            this.__$YYYW = 213;
        }
        return this.__$YYYW;
    }

    private static __$YYZX : number;
    static get YYZX() : number { 
        if (this.__$YYZX===undefined) {
            this.__$YYZX = 37;
        }
        return this.__$YYZX;
    }

    private static __$YYZY : number;
    static get YYZY() : number { 
        if (this.__$YYZY===undefined) {
            this.__$YYZY = 101;
        }
        return this.__$YYZY;
    }

    private static __$YYZZ : number;
    static get YYZZ() : number { 
        if (this.__$YYZZ===undefined) {
            this.__$YYZZ = 165;
        }
        return this.__$YYZZ;
    }

    private static __$YYZW : number;
    static get YYZW() : number { 
        if (this.__$YYZW===undefined) {
            this.__$YYZW = 229;
        }
        return this.__$YYZW;
    }

    private static __$YYWX : number;
    static get YYWX() : number { 
        if (this.__$YYWX===undefined) {
            this.__$YYWX = 53;
        }
        return this.__$YYWX;
    }

    private static __$YYWY : number;
    static get YYWY() : number { 
        if (this.__$YYWY===undefined) {
            this.__$YYWY = 117;
        }
        return this.__$YYWY;
    }

    private static __$YYWZ : number;
    static get YYWZ() : number { 
        if (this.__$YYWZ===undefined) {
            this.__$YYWZ = 181;
        }
        return this.__$YYWZ;
    }

    private static __$YYWW : number;
    static get YYWW() : number { 
        if (this.__$YYWW===undefined) {
            this.__$YYWW = 245;
        }
        return this.__$YYWW;
    }

    private static __$YZXX : number;
    static get YZXX() : number { 
        if (this.__$YZXX===undefined) {
            this.__$YZXX = 9;
        }
        return this.__$YZXX;
    }

    private static __$YZXY : number;
    static get YZXY() : number { 
        if (this.__$YZXY===undefined) {
            this.__$YZXY = 73;
        }
        return this.__$YZXY;
    }

    private static __$YZXZ : number;
    static get YZXZ() : number { 
        if (this.__$YZXZ===undefined) {
            this.__$YZXZ = 137;
        }
        return this.__$YZXZ;
    }

    private static __$YZXW : number;
    static get YZXW() : number { 
        if (this.__$YZXW===undefined) {
            this.__$YZXW = 201;
        }
        return this.__$YZXW;
    }

    private static __$YZYX : number;
    static get YZYX() : number { 
        if (this.__$YZYX===undefined) {
            this.__$YZYX = 25;
        }
        return this.__$YZYX;
    }

    private static __$YZYY : number;
    static get YZYY() : number { 
        if (this.__$YZYY===undefined) {
            this.__$YZYY = 89;
        }
        return this.__$YZYY;
    }

    private static __$YZYZ : number;
    static get YZYZ() : number { 
        if (this.__$YZYZ===undefined) {
            this.__$YZYZ = 153;
        }
        return this.__$YZYZ;
    }

    private static __$YZYW : number;
    static get YZYW() : number { 
        if (this.__$YZYW===undefined) {
            this.__$YZYW = 217;
        }
        return this.__$YZYW;
    }

    private static __$YZZX : number;
    static get YZZX() : number { 
        if (this.__$YZZX===undefined) {
            this.__$YZZX = 41;
        }
        return this.__$YZZX;
    }

    private static __$YZZY : number;
    static get YZZY() : number { 
        if (this.__$YZZY===undefined) {
            this.__$YZZY = 105;
        }
        return this.__$YZZY;
    }

    private static __$YZZZ : number;
    static get YZZZ() : number { 
        if (this.__$YZZZ===undefined) {
            this.__$YZZZ = 169;
        }
        return this.__$YZZZ;
    }

    private static __$YZZW : number;
    static get YZZW() : number { 
        if (this.__$YZZW===undefined) {
            this.__$YZZW = 233;
        }
        return this.__$YZZW;
    }

    private static __$YZWX : number;
    static get YZWX() : number { 
        if (this.__$YZWX===undefined) {
            this.__$YZWX = 57;
        }
        return this.__$YZWX;
    }

    private static __$YZWY : number;
    static get YZWY() : number { 
        if (this.__$YZWY===undefined) {
            this.__$YZWY = 121;
        }
        return this.__$YZWY;
    }

    private static __$YZWZ : number;
    static get YZWZ() : number { 
        if (this.__$YZWZ===undefined) {
            this.__$YZWZ = 185;
        }
        return this.__$YZWZ;
    }

    private static __$YZWW : number;
    static get YZWW() : number { 
        if (this.__$YZWW===undefined) {
            this.__$YZWW = 249;
        }
        return this.__$YZWW;
    }

    private static __$YWXX : number;
    static get YWXX() : number { 
        if (this.__$YWXX===undefined) {
            this.__$YWXX = 13;
        }
        return this.__$YWXX;
    }

    private static __$YWXY : number;
    static get YWXY() : number { 
        if (this.__$YWXY===undefined) {
            this.__$YWXY = 77;
        }
        return this.__$YWXY;
    }

    private static __$YWXZ : number;
    static get YWXZ() : number { 
        if (this.__$YWXZ===undefined) {
            this.__$YWXZ = 141;
        }
        return this.__$YWXZ;
    }

    private static __$YWXW : number;
    static get YWXW() : number { 
        if (this.__$YWXW===undefined) {
            this.__$YWXW = 205;
        }
        return this.__$YWXW;
    }

    private static __$YWYX : number;
    static get YWYX() : number { 
        if (this.__$YWYX===undefined) {
            this.__$YWYX = 29;
        }
        return this.__$YWYX;
    }

    private static __$YWYY : number;
    static get YWYY() : number { 
        if (this.__$YWYY===undefined) {
            this.__$YWYY = 93;
        }
        return this.__$YWYY;
    }

    private static __$YWYZ : number;
    static get YWYZ() : number { 
        if (this.__$YWYZ===undefined) {
            this.__$YWYZ = 157;
        }
        return this.__$YWYZ;
    }

    private static __$YWYW : number;
    static get YWYW() : number { 
        if (this.__$YWYW===undefined) {
            this.__$YWYW = 221;
        }
        return this.__$YWYW;
    }

    private static __$YWZX : number;
    static get YWZX() : number { 
        if (this.__$YWZX===undefined) {
            this.__$YWZX = 45;
        }
        return this.__$YWZX;
    }

    private static __$YWZY : number;
    static get YWZY() : number { 
        if (this.__$YWZY===undefined) {
            this.__$YWZY = 109;
        }
        return this.__$YWZY;
    }

    private static __$YWZZ : number;
    static get YWZZ() : number { 
        if (this.__$YWZZ===undefined) {
            this.__$YWZZ = 173;
        }
        return this.__$YWZZ;
    }

    private static __$YWZW : number;
    static get YWZW() : number { 
        if (this.__$YWZW===undefined) {
            this.__$YWZW = 237;
        }
        return this.__$YWZW;
    }

    private static __$YWWX : number;
    static get YWWX() : number { 
        if (this.__$YWWX===undefined) {
            this.__$YWWX = 61;
        }
        return this.__$YWWX;
    }

    private static __$YWWY : number;
    static get YWWY() : number { 
        if (this.__$YWWY===undefined) {
            this.__$YWWY = 125;
        }
        return this.__$YWWY;
    }

    private static __$YWWZ : number;
    static get YWWZ() : number { 
        if (this.__$YWWZ===undefined) {
            this.__$YWWZ = 189;
        }
        return this.__$YWWZ;
    }

    private static __$YWWW : number;
    static get YWWW() : number { 
        if (this.__$YWWW===undefined) {
            this.__$YWWW = 253;
        }
        return this.__$YWWW;
    }

    private static __$ZXXX : number;
    static get ZXXX() : number { 
        if (this.__$ZXXX===undefined) {
            this.__$ZXXX = 2;
        }
        return this.__$ZXXX;
    }

    private static __$ZXXY : number;
    static get ZXXY() : number { 
        if (this.__$ZXXY===undefined) {
            this.__$ZXXY = 66;
        }
        return this.__$ZXXY;
    }

    private static __$ZXXZ : number;
    static get ZXXZ() : number { 
        if (this.__$ZXXZ===undefined) {
            this.__$ZXXZ = 130;
        }
        return this.__$ZXXZ;
    }

    private static __$ZXXW : number;
    static get ZXXW() : number { 
        if (this.__$ZXXW===undefined) {
            this.__$ZXXW = 194;
        }
        return this.__$ZXXW;
    }

    private static __$ZXYX : number;
    static get ZXYX() : number { 
        if (this.__$ZXYX===undefined) {
            this.__$ZXYX = 18;
        }
        return this.__$ZXYX;
    }

    private static __$ZXYY : number;
    static get ZXYY() : number { 
        if (this.__$ZXYY===undefined) {
            this.__$ZXYY = 82;
        }
        return this.__$ZXYY;
    }

    private static __$ZXYZ : number;
    static get ZXYZ() : number { 
        if (this.__$ZXYZ===undefined) {
            this.__$ZXYZ = 146;
        }
        return this.__$ZXYZ;
    }

    private static __$ZXYW : number;
    static get ZXYW() : number { 
        if (this.__$ZXYW===undefined) {
            this.__$ZXYW = 210;
        }
        return this.__$ZXYW;
    }

    private static __$ZXZX : number;
    static get ZXZX() : number { 
        if (this.__$ZXZX===undefined) {
            this.__$ZXZX = 34;
        }
        return this.__$ZXZX;
    }

    private static __$ZXZY : number;
    static get ZXZY() : number { 
        if (this.__$ZXZY===undefined) {
            this.__$ZXZY = 98;
        }
        return this.__$ZXZY;
    }

    private static __$ZXZZ : number;
    static get ZXZZ() : number { 
        if (this.__$ZXZZ===undefined) {
            this.__$ZXZZ = 162;
        }
        return this.__$ZXZZ;
    }

    private static __$ZXZW : number;
    static get ZXZW() : number { 
        if (this.__$ZXZW===undefined) {
            this.__$ZXZW = 226;
        }
        return this.__$ZXZW;
    }

    private static __$ZXWX : number;
    static get ZXWX() : number { 
        if (this.__$ZXWX===undefined) {
            this.__$ZXWX = 50;
        }
        return this.__$ZXWX;
    }

    private static __$ZXWY : number;
    static get ZXWY() : number { 
        if (this.__$ZXWY===undefined) {
            this.__$ZXWY = 114;
        }
        return this.__$ZXWY;
    }

    private static __$ZXWZ : number;
    static get ZXWZ() : number { 
        if (this.__$ZXWZ===undefined) {
            this.__$ZXWZ = 178;
        }
        return this.__$ZXWZ;
    }

    private static __$ZXWW : number;
    static get ZXWW() : number { 
        if (this.__$ZXWW===undefined) {
            this.__$ZXWW = 242;
        }
        return this.__$ZXWW;
    }

    private static __$ZYXX : number;
    static get ZYXX() : number { 
        if (this.__$ZYXX===undefined) {
            this.__$ZYXX = 6;
        }
        return this.__$ZYXX;
    }

    private static __$ZYXY : number;
    static get ZYXY() : number { 
        if (this.__$ZYXY===undefined) {
            this.__$ZYXY = 70;
        }
        return this.__$ZYXY;
    }

    private static __$ZYXZ : number;
    static get ZYXZ() : number { 
        if (this.__$ZYXZ===undefined) {
            this.__$ZYXZ = 134;
        }
        return this.__$ZYXZ;
    }

    private static __$ZYXW : number;
    static get ZYXW() : number { 
        if (this.__$ZYXW===undefined) {
            this.__$ZYXW = 198;
        }
        return this.__$ZYXW;
    }

    private static __$ZYYX : number;
    static get ZYYX() : number { 
        if (this.__$ZYYX===undefined) {
            this.__$ZYYX = 22;
        }
        return this.__$ZYYX;
    }

    private static __$ZYYY : number;
    static get ZYYY() : number { 
        if (this.__$ZYYY===undefined) {
            this.__$ZYYY = 86;
        }
        return this.__$ZYYY;
    }

    private static __$ZYYZ : number;
    static get ZYYZ() : number { 
        if (this.__$ZYYZ===undefined) {
            this.__$ZYYZ = 150;
        }
        return this.__$ZYYZ;
    }

    private static __$ZYYW : number;
    static get ZYYW() : number { 
        if (this.__$ZYYW===undefined) {
            this.__$ZYYW = 214;
        }
        return this.__$ZYYW;
    }

    private static __$ZYZX : number;
    static get ZYZX() : number { 
        if (this.__$ZYZX===undefined) {
            this.__$ZYZX = 38;
        }
        return this.__$ZYZX;
    }

    private static __$ZYZY : number;
    static get ZYZY() : number { 
        if (this.__$ZYZY===undefined) {
            this.__$ZYZY = 102;
        }
        return this.__$ZYZY;
    }

    private static __$ZYZZ : number;
    static get ZYZZ() : number { 
        if (this.__$ZYZZ===undefined) {
            this.__$ZYZZ = 166;
        }
        return this.__$ZYZZ;
    }

    private static __$ZYZW : number;
    static get ZYZW() : number { 
        if (this.__$ZYZW===undefined) {
            this.__$ZYZW = 230;
        }
        return this.__$ZYZW;
    }

    private static __$ZYWX : number;
    static get ZYWX() : number { 
        if (this.__$ZYWX===undefined) {
            this.__$ZYWX = 54;
        }
        return this.__$ZYWX;
    }

    private static __$ZYWY : number;
    static get ZYWY() : number { 
        if (this.__$ZYWY===undefined) {
            this.__$ZYWY = 118;
        }
        return this.__$ZYWY;
    }

    private static __$ZYWZ : number;
    static get ZYWZ() : number { 
        if (this.__$ZYWZ===undefined) {
            this.__$ZYWZ = 182;
        }
        return this.__$ZYWZ;
    }

    private static __$ZYWW : number;
    static get ZYWW() : number { 
        if (this.__$ZYWW===undefined) {
            this.__$ZYWW = 246;
        }
        return this.__$ZYWW;
    }

    private static __$ZZXX : number;
    static get ZZXX() : number { 
        if (this.__$ZZXX===undefined) {
            this.__$ZZXX = 10;
        }
        return this.__$ZZXX;
    }

    private static __$ZZXY : number;
    static get ZZXY() : number { 
        if (this.__$ZZXY===undefined) {
            this.__$ZZXY = 74;
        }
        return this.__$ZZXY;
    }

    private static __$ZZXZ : number;
    static get ZZXZ() : number { 
        if (this.__$ZZXZ===undefined) {
            this.__$ZZXZ = 138;
        }
        return this.__$ZZXZ;
    }

    private static __$ZZXW : number;
    static get ZZXW() : number { 
        if (this.__$ZZXW===undefined) {
            this.__$ZZXW = 202;
        }
        return this.__$ZZXW;
    }

    private static __$ZZYX : number;
    static get ZZYX() : number { 
        if (this.__$ZZYX===undefined) {
            this.__$ZZYX = 26;
        }
        return this.__$ZZYX;
    }

    private static __$ZZYY : number;
    static get ZZYY() : number { 
        if (this.__$ZZYY===undefined) {
            this.__$ZZYY = 90;
        }
        return this.__$ZZYY;
    }

    private static __$ZZYZ : number;
    static get ZZYZ() : number { 
        if (this.__$ZZYZ===undefined) {
            this.__$ZZYZ = 154;
        }
        return this.__$ZZYZ;
    }

    private static __$ZZYW : number;
    static get ZZYW() : number { 
        if (this.__$ZZYW===undefined) {
            this.__$ZZYW = 218;
        }
        return this.__$ZZYW;
    }

    private static __$ZZZX : number;
    static get ZZZX() : number { 
        if (this.__$ZZZX===undefined) {
            this.__$ZZZX = 42;
        }
        return this.__$ZZZX;
    }

    private static __$ZZZY : number;
    static get ZZZY() : number { 
        if (this.__$ZZZY===undefined) {
            this.__$ZZZY = 106;
        }
        return this.__$ZZZY;
    }

    private static __$ZZZZ : number;
    static get ZZZZ() : number { 
        if (this.__$ZZZZ===undefined) {
            this.__$ZZZZ = 170;
        }
        return this.__$ZZZZ;
    }

    private static __$ZZZW : number;
    static get ZZZW() : number { 
        if (this.__$ZZZW===undefined) {
            this.__$ZZZW = 234;
        }
        return this.__$ZZZW;
    }

    private static __$ZZWX : number;
    static get ZZWX() : number { 
        if (this.__$ZZWX===undefined) {
            this.__$ZZWX = 58;
        }
        return this.__$ZZWX;
    }

    private static __$ZZWY : number;
    static get ZZWY() : number { 
        if (this.__$ZZWY===undefined) {
            this.__$ZZWY = 122;
        }
        return this.__$ZZWY;
    }

    private static __$ZZWZ : number;
    static get ZZWZ() : number { 
        if (this.__$ZZWZ===undefined) {
            this.__$ZZWZ = 186;
        }
        return this.__$ZZWZ;
    }

    private static __$ZZWW : number;
    static get ZZWW() : number { 
        if (this.__$ZZWW===undefined) {
            this.__$ZZWW = 250;
        }
        return this.__$ZZWW;
    }

    private static __$ZWXX : number;
    static get ZWXX() : number { 
        if (this.__$ZWXX===undefined) {
            this.__$ZWXX = 14;
        }
        return this.__$ZWXX;
    }

    private static __$ZWXY : number;
    static get ZWXY() : number { 
        if (this.__$ZWXY===undefined) {
            this.__$ZWXY = 78;
        }
        return this.__$ZWXY;
    }

    private static __$ZWXZ : number;
    static get ZWXZ() : number { 
        if (this.__$ZWXZ===undefined) {
            this.__$ZWXZ = 142;
        }
        return this.__$ZWXZ;
    }

    private static __$ZWXW : number;
    static get ZWXW() : number { 
        if (this.__$ZWXW===undefined) {
            this.__$ZWXW = 206;
        }
        return this.__$ZWXW;
    }

    private static __$ZWYX : number;
    static get ZWYX() : number { 
        if (this.__$ZWYX===undefined) {
            this.__$ZWYX = 30;
        }
        return this.__$ZWYX;
    }

    private static __$ZWYY : number;
    static get ZWYY() : number { 
        if (this.__$ZWYY===undefined) {
            this.__$ZWYY = 94;
        }
        return this.__$ZWYY;
    }

    private static __$ZWYZ : number;
    static get ZWYZ() : number { 
        if (this.__$ZWYZ===undefined) {
            this.__$ZWYZ = 158;
        }
        return this.__$ZWYZ;
    }

    private static __$ZWYW : number;
    static get ZWYW() : number { 
        if (this.__$ZWYW===undefined) {
            this.__$ZWYW = 222;
        }
        return this.__$ZWYW;
    }

    private static __$ZWZX : number;
    static get ZWZX() : number { 
        if (this.__$ZWZX===undefined) {
            this.__$ZWZX = 46;
        }
        return this.__$ZWZX;
    }

    private static __$ZWZY : number;
    static get ZWZY() : number { 
        if (this.__$ZWZY===undefined) {
            this.__$ZWZY = 110;
        }
        return this.__$ZWZY;
    }

    private static __$ZWZZ : number;
    static get ZWZZ() : number { 
        if (this.__$ZWZZ===undefined) {
            this.__$ZWZZ = 174;
        }
        return this.__$ZWZZ;
    }

    private static __$ZWZW : number;
    static get ZWZW() : number { 
        if (this.__$ZWZW===undefined) {
            this.__$ZWZW = 238;
        }
        return this.__$ZWZW;
    }

    private static __$ZWWX : number;
    static get ZWWX() : number { 
        if (this.__$ZWWX===undefined) {
            this.__$ZWWX = 62;
        }
        return this.__$ZWWX;
    }

    private static __$ZWWY : number;
    static get ZWWY() : number { 
        if (this.__$ZWWY===undefined) {
            this.__$ZWWY = 126;
        }
        return this.__$ZWWY;
    }

    private static __$ZWWZ : number;
    static get ZWWZ() : number { 
        if (this.__$ZWWZ===undefined) {
            this.__$ZWWZ = 190;
        }
        return this.__$ZWWZ;
    }

    private static __$ZWWW : number;
    static get ZWWW() : number { 
        if (this.__$ZWWW===undefined) {
            this.__$ZWWW = 254;
        }
        return this.__$ZWWW;
    }

    private static __$WXXX : number;
    static get WXXX() : number { 
        if (this.__$WXXX===undefined) {
            this.__$WXXX = 3;
        }
        return this.__$WXXX;
    }

    private static __$WXXY : number;
    static get WXXY() : number { 
        if (this.__$WXXY===undefined) {
            this.__$WXXY = 67;
        }
        return this.__$WXXY;
    }

    private static __$WXXZ : number;
    static get WXXZ() : number { 
        if (this.__$WXXZ===undefined) {
            this.__$WXXZ = 131;
        }
        return this.__$WXXZ;
    }

    private static __$WXXW : number;
    static get WXXW() : number { 
        if (this.__$WXXW===undefined) {
            this.__$WXXW = 195;
        }
        return this.__$WXXW;
    }

    private static __$WXYX : number;
    static get WXYX() : number { 
        if (this.__$WXYX===undefined) {
            this.__$WXYX = 19;
        }
        return this.__$WXYX;
    }

    private static __$WXYY : number;
    static get WXYY() : number { 
        if (this.__$WXYY===undefined) {
            this.__$WXYY = 83;
        }
        return this.__$WXYY;
    }

    private static __$WXYZ : number;
    static get WXYZ() : number { 
        if (this.__$WXYZ===undefined) {
            this.__$WXYZ = 147;
        }
        return this.__$WXYZ;
    }

    private static __$WXYW : number;
    static get WXYW() : number { 
        if (this.__$WXYW===undefined) {
            this.__$WXYW = 211;
        }
        return this.__$WXYW;
    }

    private static __$WXZX : number;
    static get WXZX() : number { 
        if (this.__$WXZX===undefined) {
            this.__$WXZX = 35;
        }
        return this.__$WXZX;
    }

    private static __$WXZY : number;
    static get WXZY() : number { 
        if (this.__$WXZY===undefined) {
            this.__$WXZY = 99;
        }
        return this.__$WXZY;
    }

    private static __$WXZZ : number;
    static get WXZZ() : number { 
        if (this.__$WXZZ===undefined) {
            this.__$WXZZ = 163;
        }
        return this.__$WXZZ;
    }

    private static __$WXZW : number;
    static get WXZW() : number { 
        if (this.__$WXZW===undefined) {
            this.__$WXZW = 227;
        }
        return this.__$WXZW;
    }

    private static __$WXWX : number;
    static get WXWX() : number { 
        if (this.__$WXWX===undefined) {
            this.__$WXWX = 51;
        }
        return this.__$WXWX;
    }

    private static __$WXWY : number;
    static get WXWY() : number { 
        if (this.__$WXWY===undefined) {
            this.__$WXWY = 115;
        }
        return this.__$WXWY;
    }

    private static __$WXWZ : number;
    static get WXWZ() : number { 
        if (this.__$WXWZ===undefined) {
            this.__$WXWZ = 179;
        }
        return this.__$WXWZ;
    }

    private static __$WXWW : number;
    static get WXWW() : number { 
        if (this.__$WXWW===undefined) {
            this.__$WXWW = 243;
        }
        return this.__$WXWW;
    }

    private static __$WYXX : number;
    static get WYXX() : number { 
        if (this.__$WYXX===undefined) {
            this.__$WYXX = 7;
        }
        return this.__$WYXX;
    }

    private static __$WYXY : number;
    static get WYXY() : number { 
        if (this.__$WYXY===undefined) {
            this.__$WYXY = 71;
        }
        return this.__$WYXY;
    }

    private static __$WYXZ : number;
    static get WYXZ() : number { 
        if (this.__$WYXZ===undefined) {
            this.__$WYXZ = 135;
        }
        return this.__$WYXZ;
    }

    private static __$WYXW : number;
    static get WYXW() : number { 
        if (this.__$WYXW===undefined) {
            this.__$WYXW = 199;
        }
        return this.__$WYXW;
    }

    private static __$WYYX : number;
    static get WYYX() : number { 
        if (this.__$WYYX===undefined) {
            this.__$WYYX = 23;
        }
        return this.__$WYYX;
    }

    private static __$WYYY : number;
    static get WYYY() : number { 
        if (this.__$WYYY===undefined) {
            this.__$WYYY = 87;
        }
        return this.__$WYYY;
    }

    private static __$WYYZ : number;
    static get WYYZ() : number { 
        if (this.__$WYYZ===undefined) {
            this.__$WYYZ = 151;
        }
        return this.__$WYYZ;
    }

    private static __$WYYW : number;
    static get WYYW() : number { 
        if (this.__$WYYW===undefined) {
            this.__$WYYW = 215;
        }
        return this.__$WYYW;
    }

    private static __$WYZX : number;
    static get WYZX() : number { 
        if (this.__$WYZX===undefined) {
            this.__$WYZX = 39;
        }
        return this.__$WYZX;
    }

    private static __$WYZY : number;
    static get WYZY() : number { 
        if (this.__$WYZY===undefined) {
            this.__$WYZY = 103;
        }
        return this.__$WYZY;
    }

    private static __$WYZZ : number;
    static get WYZZ() : number { 
        if (this.__$WYZZ===undefined) {
            this.__$WYZZ = 167;
        }
        return this.__$WYZZ;
    }

    private static __$WYZW : number;
    static get WYZW() : number { 
        if (this.__$WYZW===undefined) {
            this.__$WYZW = 231;
        }
        return this.__$WYZW;
    }

    private static __$WYWX : number;
    static get WYWX() : number { 
        if (this.__$WYWX===undefined) {
            this.__$WYWX = 55;
        }
        return this.__$WYWX;
    }

    private static __$WYWY : number;
    static get WYWY() : number { 
        if (this.__$WYWY===undefined) {
            this.__$WYWY = 119;
        }
        return this.__$WYWY;
    }

    private static __$WYWZ : number;
    static get WYWZ() : number { 
        if (this.__$WYWZ===undefined) {
            this.__$WYWZ = 183;
        }
        return this.__$WYWZ;
    }

    private static __$WYWW : number;
    static get WYWW() : number { 
        if (this.__$WYWW===undefined) {
            this.__$WYWW = 247;
        }
        return this.__$WYWW;
    }

    private static __$WZXX : number;
    static get WZXX() : number { 
        if (this.__$WZXX===undefined) {
            this.__$WZXX = 11;
        }
        return this.__$WZXX;
    }

    private static __$WZXY : number;
    static get WZXY() : number { 
        if (this.__$WZXY===undefined) {
            this.__$WZXY = 75;
        }
        return this.__$WZXY;
    }

    private static __$WZXZ : number;
    static get WZXZ() : number { 
        if (this.__$WZXZ===undefined) {
            this.__$WZXZ = 139;
        }
        return this.__$WZXZ;
    }

    private static __$WZXW : number;
    static get WZXW() : number { 
        if (this.__$WZXW===undefined) {
            this.__$WZXW = 203;
        }
        return this.__$WZXW;
    }

    private static __$WZYX : number;
    static get WZYX() : number { 
        if (this.__$WZYX===undefined) {
            this.__$WZYX = 27;
        }
        return this.__$WZYX;
    }

    private static __$WZYY : number;
    static get WZYY() : number { 
        if (this.__$WZYY===undefined) {
            this.__$WZYY = 91;
        }
        return this.__$WZYY;
    }

    private static __$WZYZ : number;
    static get WZYZ() : number { 
        if (this.__$WZYZ===undefined) {
            this.__$WZYZ = 155;
        }
        return this.__$WZYZ;
    }

    private static __$WZYW : number;
    static get WZYW() : number { 
        if (this.__$WZYW===undefined) {
            this.__$WZYW = 219;
        }
        return this.__$WZYW;
    }

    private static __$WZZX : number;
    static get WZZX() : number { 
        if (this.__$WZZX===undefined) {
            this.__$WZZX = 43;
        }
        return this.__$WZZX;
    }

    private static __$WZZY : number;
    static get WZZY() : number { 
        if (this.__$WZZY===undefined) {
            this.__$WZZY = 107;
        }
        return this.__$WZZY;
    }

    private static __$WZZZ : number;
    static get WZZZ() : number { 
        if (this.__$WZZZ===undefined) {
            this.__$WZZZ = 171;
        }
        return this.__$WZZZ;
    }

    private static __$WZZW : number;
    static get WZZW() : number { 
        if (this.__$WZZW===undefined) {
            this.__$WZZW = 235;
        }
        return this.__$WZZW;
    }

    private static __$WZWX : number;
    static get WZWX() : number { 
        if (this.__$WZWX===undefined) {
            this.__$WZWX = 59;
        }
        return this.__$WZWX;
    }

    private static __$WZWY : number;
    static get WZWY() : number { 
        if (this.__$WZWY===undefined) {
            this.__$WZWY = 123;
        }
        return this.__$WZWY;
    }

    private static __$WZWZ : number;
    static get WZWZ() : number { 
        if (this.__$WZWZ===undefined) {
            this.__$WZWZ = 187;
        }
        return this.__$WZWZ;
    }

    private static __$WZWW : number;
    static get WZWW() : number { 
        if (this.__$WZWW===undefined) {
            this.__$WZWW = 251;
        }
        return this.__$WZWW;
    }

    private static __$WWXX : number;
    static get WWXX() : number { 
        if (this.__$WWXX===undefined) {
            this.__$WWXX = 15;
        }
        return this.__$WWXX;
    }

    private static __$WWXY : number;
    static get WWXY() : number { 
        if (this.__$WWXY===undefined) {
            this.__$WWXY = 79;
        }
        return this.__$WWXY;
    }

    private static __$WWXZ : number;
    static get WWXZ() : number { 
        if (this.__$WWXZ===undefined) {
            this.__$WWXZ = 143;
        }
        return this.__$WWXZ;
    }

    private static __$WWXW : number;
    static get WWXW() : number { 
        if (this.__$WWXW===undefined) {
            this.__$WWXW = 207;
        }
        return this.__$WWXW;
    }

    private static __$WWYX : number;
    static get WWYX() : number { 
        if (this.__$WWYX===undefined) {
            this.__$WWYX = 31;
        }
        return this.__$WWYX;
    }

    private static __$WWYY : number;
    static get WWYY() : number { 
        if (this.__$WWYY===undefined) {
            this.__$WWYY = 95;
        }
        return this.__$WWYY;
    }

    private static __$WWYZ : number;
    static get WWYZ() : number { 
        if (this.__$WWYZ===undefined) {
            this.__$WWYZ = 159;
        }
        return this.__$WWYZ;
    }

    private static __$WWYW : number;
    static get WWYW() : number { 
        if (this.__$WWYW===undefined) {
            this.__$WWYW = 223;
        }
        return this.__$WWYW;
    }

    private static __$WWZX : number;
    static get WWZX() : number { 
        if (this.__$WWZX===undefined) {
            this.__$WWZX = 47;
        }
        return this.__$WWZX;
    }

    private static __$WWZY : number;
    static get WWZY() : number { 
        if (this.__$WWZY===undefined) {
            this.__$WWZY = 111;
        }
        return this.__$WWZY;
    }

    private static __$WWZZ : number;
    static get WWZZ() : number { 
        if (this.__$WWZZ===undefined) {
            this.__$WWZZ = 175;
        }
        return this.__$WWZZ;
    }

    private static __$WWZW : number;
    static get WWZW() : number { 
        if (this.__$WWZW===undefined) {
            this.__$WWZW = 239;
        }
        return this.__$WWZW;
    }

    private static __$WWWX : number;
    static get WWWX() : number { 
        if (this.__$WWWX===undefined) {
            this.__$WWWX = 63;
        }
        return this.__$WWWX;
    }

    private static __$WWWY : number;
    static get WWWY() : number { 
        if (this.__$WWWY===undefined) {
            this.__$WWWY = 127;
        }
        return this.__$WWWY;
    }

    private static __$WWWZ : number;
    static get WWWZ() : number { 
        if (this.__$WWWZ===undefined) {
            this.__$WWWZ = 191;
        }
        return this.__$WWWZ;
    }

    private static __$WWWW : number;
    static get WWWW() : number { 
        if (this.__$WWWW===undefined) {
            this.__$WWWW = 255;
        }
        return this.__$WWWW;
    }

    @Abstract
    shuffle(mask : number) : Int32x4{ throw 'abstract'}
    @Abstract
    shuffleMix(other : Int32x4,mask : number) : Int32x4{ throw 'abstract'}
    @Abstract
    withX(x : number) : Int32x4{ throw 'abstract'}
    @Abstract
    withY(y : number) : Int32x4{ throw 'abstract'}
    @Abstract
    withZ(z : number) : Int32x4{ throw 'abstract'}
    @Abstract
    withW(w : number) : Int32x4{ throw 'abstract'}
    @AbstractProperty
    get flagX() : boolean{ throw 'abstract'}
    @AbstractProperty
    get flagY() : boolean{ throw 'abstract'}
    @AbstractProperty
    get flagZ() : boolean{ throw 'abstract'}
    @AbstractProperty
    get flagW() : boolean{ throw 'abstract'}
    @Abstract
    withFlagX(x : boolean) : Int32x4{ throw 'abstract'}
    @Abstract
    withFlagY(y : boolean) : Int32x4{ throw 'abstract'}
    @Abstract
    withFlagZ(z : boolean) : Int32x4{ throw 'abstract'}
    @Abstract
    withFlagW(w : boolean) : Int32x4{ throw 'abstract'}
    @Abstract
    select(trueValue : Float32x4,falseValue : Float32x4) : Float32x4{ throw 'abstract'}
}

export namespace Float64x2 {
    export type Constructors = never;
    export type Interface = Omit<Float64x2, Constructors>;
}
@DartClass
export class Float64x2 {
    constructor(x : double,y : double) {
    }
    @defaultFactory
    static $Float64x2(x : double,y : double) : Float64x2 {
    }
    @namedFactory
    static $splat(v : double) : Float64x2 {
    }
    static splat : new(v : double) => Float64x2;

    @namedFactory
    static $zero() : Float64x2 {
    }
    static zero : new() => Float64x2;

    @namedFactory
    static $fromFloat32x4(v : Float32x4) : Float64x2 {
    }
    static fromFloat32x4 : new(v : Float32x4) => Float64x2;

    @Abstract
    [OperatorMethods.PLUS](other : Float64x2) : Float64x2{ throw 'abstract'}
    @Abstract
    [OperatorMethods.NEGATE]() : Float64x2{ throw 'abstract'}
    @Abstract
    [OperatorMethods.MINUS](other : Float64x2) : Float64x2{ throw 'abstract'}
    @Abstract
    [OperatorMethods.MULTIPLY](other : Float64x2) : Float64x2{ throw 'abstract'}
    @Abstract
    [OperatorMethods.DIVIDE](other : Float64x2) : Float64x2{ throw 'abstract'}
    @Abstract
    scale(s : double) : Float64x2{ throw 'abstract'}
    @Abstract
    abs() : Float64x2{ throw 'abstract'}
    @Abstract
    clamp(lowerLimit : Float64x2,upperLimit : Float64x2) : Float64x2{ throw 'abstract'}
    @AbstractProperty
    get x() : double{ throw 'abstract'}
    @AbstractProperty
    get y() : double{ throw 'abstract'}
    @AbstractProperty
    get signMask() : number{ throw 'abstract'}
    @Abstract
    withX(x : double) : Float64x2{ throw 'abstract'}
    @Abstract
    withY(y : double) : Float64x2{ throw 'abstract'}
    @Abstract
    min(other : Float64x2) : Float64x2{ throw 'abstract'}
    @Abstract
    max(other : Float64x2) : Float64x2{ throw 'abstract'}
    @Abstract
    sqrt() : Float64x2{ throw 'abstract'}
}

export class properties {
}
