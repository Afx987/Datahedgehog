/** Library asset:datahedgehog_monitor/lib/lib/front_end/test/src/base/flat_buffers_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as typed_data from "@dart2ts/dart/typed_data";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(BuilderTest);
    });
};
export namespace BuilderTest {
    export type Constructors = 'BuilderTest';
    export type Interface = Omit<BuilderTest, Constructors>;
}
@DartClass
export class BuilderTest {
    test_error_addInt32_withoutStartTable() : void {
        let builder : any = new bare.createInstance(any,null);
        expect(() =>  {
            builder.addInt32(0,0);
        },throwsStateError);
    }
    test_error_addOffset_withoutStartTable() : void {
        let builder : any = new bare.createInstance(any,null);
        expect(() =>  {
            builder.addOffset(0,new bare.createInstance(any,null,0));
        },throwsStateError);
    }
    test_error_endTable_withoutStartTable() : void {
        let builder : any = new bare.createInstance(any,null);
        expect(() =>  {
            builder.endTable();
        },throwsStateError);
    }
    test_error_startTable_duringTable() : void {
        let builder : any = new bare.createInstance(any,null);
        builder.startTable();
        expect(() =>  {
            builder.startTable();
        },throwsStateError);
    }
    test_error_writeString_duringTable() : void {
        let builder : any = new bare.createInstance(any,null);
        builder.startTable();
        expect(() =>  {
            builder.writeString('12345');
        },throwsStateError);
    }
    test_file_identifier() : void {
        let byteList : typed_data.Uint8List;
        {
            let builder : any = new bare.createInstance(any,null,{
                initialSize : 0});
            builder.startTable();
            let offset : any = builder.endTable();
            byteList = builder.finish(offset,'Az~ÿ');
        }
        let byteData : typed_data.ByteData = byteList.buffer.asByteData(byteList.offsetInBytes);
        let tableDataLoc : number = byteData.getUint32(0,typed_data.Endianness.LITTLE_ENDIAN);
        expect(byteData.getUint8(4),65);
        expect(byteData.getUint8(5),122);
        expect(byteData.getUint8(6),126);
        expect(byteData.getUint8(7),255);
        let vTableLoc : number = tableDataLoc - byteData.getInt32(tableDataLoc,typed_data.Endianness.LITTLE_ENDIAN);
        expect(byteData.getUint16(vTableLoc,typed_data.Endianness.LITTLE_ENDIAN),4);
        expect(byteData.getUint16(vTableLoc + 2,typed_data.Endianness.LITTLE_ENDIAN),4);
    }
    test_low() : void {
        let builder : any = new bare.createInstance(any,null,{
            initialSize : 0});
        builder.lowReset();
        expect((((_) : any =>  {
            {
                lowWriteUint8(1);
                return _;
            }
        })(builder)).lowFinish(),new core.DartList.literal(1));
        expect((((_) : any =>  {
            {
                lowWriteUint32(2);
                return _;
            }
        })(builder)).lowFinish(),new core.DartList.literal(2,0,0,0,0,0,0,1));
        expect((((_) : any =>  {
            {
                lowWriteUint8(3);
                return _;
            }
        })(builder)).lowFinish(),new core.DartList.literal(0,0,0,3,2,0,0,0,0,0,0,1));
        expect((((_) : any =>  {
            {
                lowWriteUint8(4);
                return _;
            }
        })(builder)).lowFinish(),new core.DartList.literal(0,0,4,3,2,0,0,0,0,0,0,1));
        expect((((_) : any =>  {
            {
                lowWriteUint8(5);
                return _;
            }
        })(builder)).lowFinish(),new core.DartList.literal(0,5,4,3,2,0,0,0,0,0,0,1));
        expect((((_) : any =>  {
            {
                lowWriteUint32(6);
                return _;
            }
        })(builder)).lowFinish(),new core.DartList.literal(6,0,0,0,0,5,4,3,2,0,0,0,0,0,0,1));
    }
    test_table_default() : void {
        let byteList : core.DartList<number>;
        {
            let builder : any = new bare.createInstance(any,null,{
                initialSize : 0});
            builder.startTable();
            builder.addInt32(0,10,10);
            builder.addInt32(1,20,10);
            let offset : any = builder.endTable();
            byteList = builder.finish(offset);
        }
        let buffer : any = new bare.createInstance(any,null,byteList);
        let objectOffset : number = buffer.derefObject(0);
        expect(new bare.createInstance(any,null).vTableGet(buffer,objectOffset,0,15),15);
        expect(new bare.createInstance(any,null).vTableGet(buffer,objectOffset,1,15),20);
    }
    test_table_format() : void {
        let byteList : typed_data.Uint8List;
        {
            let builder : any = new bare.createInstance(any,null,{
                initialSize : 0});
            builder.startTable();
            builder.addInt32(0,10);
            builder.addInt32(1,20);
            builder.addInt32(2,30);
            byteList = builder.finish(builder.endTable());
        }
        let byteData : typed_data.ByteData = byteList.buffer.asByteData(byteList.offsetInBytes);
        let tableDataLoc : number = byteData.getUint32(0,typed_data.Endianness.LITTLE_ENDIAN);
        let vTableLoc : number = tableDataLoc - byteData.getInt32(tableDataLoc,typed_data.Endianness.LITTLE_ENDIAN);
        expect(byteData.getUint16(vTableLoc,typed_data.Endianness.LITTLE_ENDIAN),10);
        expect(byteData.getUint16(vTableLoc + 2,typed_data.Endianness.LITTLE_ENDIAN),16);
        for(let i : number = 0; i < 3; i++){
            let offset : number = byteData.getUint16(vTableLoc + 4 + 2 * i,typed_data.Endianness.LITTLE_ENDIAN);
            expect(byteData.getInt32(tableDataLoc + offset,typed_data.Endianness.LITTLE_ENDIAN),10 + 10 * i);
        }
    }
    test_table_string() : void {
        let latinString : string = 'test';
        let unicodeString : string = 'Проба пера';
        let byteList : core.DartList<number>;
        {
            let builder : any = new bare.createInstance(any,null,{
                initialSize : 0});
            let latinStringOffset : any = builder.writeString(latinString);
            let unicodeStringOffset : any = builder.writeString(unicodeString);
            builder.startTable();
            builder.addOffset(0,latinStringOffset);
            builder.addOffset(1,unicodeStringOffset);
            let offset : any = builder.endTable();
            byteList = builder.finish(offset);
        }
        let buf : any = new bare.createInstance(any,null,byteList);
        let objectOffset : number = buf.derefObject(0);
        expect(new bare.createInstance(any,null).vTableGet(buf,objectOffset,0),latinString);
        expect(new bare.createInstance(any,null).vTableGet(buf,objectOffset,1),unicodeString);
    }
    test_table_types() : void {
        let byteList : core.DartList<number>;
        {
            let builder : any = new bare.createInstance(any,null,{
                initialSize : 0});
            let stringOffset : any = builder.writeString('12345');
            builder.startTable();
            builder.addBool(0,true);
            builder.addInt8(1,10);
            builder.addInt32(2,20);
            builder.addOffset(3,stringOffset);
            builder.addInt32(4,40);
            builder.addUint32(5,2596069104);
            builder.addUint8(6,154);
            let offset : any = builder.endTable();
            byteList = builder.finish(offset);
        }
        let buf : any = new bare.createInstance(any,null,byteList);
        let objectOffset : number = buf.derefObject(0);
        expect(new bare.createInstance(any,null).vTableGet(buf,objectOffset,0),true);
        expect(new bare.createInstance(any,null).vTableGet(buf,objectOffset,1),10);
        expect(new bare.createInstance(any,null).vTableGet(buf,objectOffset,2),20);
        expect(new bare.createInstance(any,null).vTableGet(buf,objectOffset,3),'12345');
        expect(new bare.createInstance(any,null).vTableGet(buf,objectOffset,4),40);
        expect(new bare.createInstance(any,null).vTableGet(buf,objectOffset,5),2596069104);
        expect(new bare.createInstance(any,null).vTableGet(buf,objectOffset,6),154);
    }
    test_writeList_of_Uint32() : void {
        let values : core.DartList<number> = new core.DartList.literal<number>(10,100,12345,2596069104);
        let byteList : core.DartList<number>;
        {
            let builder : any = new bare.createInstance(any,null,{
                initialSize : 0});
            let offset : any = builder.writeListUint32(values);
            byteList = builder.finish(offset);
        }
        let buf : any = new bare.createInstance(any,null,byteList);
        let items : core.DartList<number> = new bare.createInstance(any,null).read(buf,0);
        expect(items,hasLength(4));
        expect(items,orderedEquals(values));
    }
    test_writeList_ofBool() : void {
        var verifyListBooleans : (len : number,trueBits : core.DartList<number>) => void = (len : number,trueBits : core.DartList<number>) : void =>  {
            let byteList : core.DartList<number>;
            {
                let builder : any = new bare.createInstance(any,null,{
                    initialSize : 0});
                let values : core.DartList<boolean> = new core.DartList.filled(len,false);
                for(let bit of trueBits) {
                    values[bit] = true;
                }
                let offset : any = builder.writeListBool(values);
                byteList = builder.finish(offset);
            }
            let buf : any = new bare.createInstance(any,null,byteList);
            let items : core.DartList<boolean> = new bare.createInstance(any,null).read(buf,0);
            expect(items,hasLength(len));
            for(let i : number = 0; i < items.length; i++){
                expect(items[i],trueBits.contains(i),{
                    reason : `bit ${i} of ${len}`});
            }
        };
        verifyListBooleans(0,new core.DartList.literal<number>());
        verifyListBooleans(1,new core.DartList.literal<number>());
        verifyListBooleans(1,new core.DartList.literal<number>(0));
        verifyListBooleans(31,new core.DartList.literal<number>(0,1));
        verifyListBooleans(31,new core.DartList.literal<number>(1,2,24,25,30));
        verifyListBooleans(31,new core.DartList.literal<number>(0,30));
        verifyListBooleans(32,new core.DartList.literal<number>(1,2,24,25,31));
        verifyListBooleans(33,new core.DartList.literal<number>(1,2,24,25,32));
        verifyListBooleans(33,new core.DartList.literal<number>(1,2,24,25,31,32));
        verifyListBooleans(63,new core.DartList.literal<number>());
        verifyListBooleans(63,new core.DartList.literal<number>(0,1,2,61,62));
        verifyListBooleans(63,new core.DartList.generate(63,(i : any) =>  {
            return i;
        }));
        verifyListBooleans(64,new core.DartList.literal<number>());
        verifyListBooleans(64,new core.DartList.literal<number>(0,1,2,61,62,63));
        verifyListBooleans(64,new core.DartList.literal<number>(1,2,62));
        verifyListBooleans(64,new core.DartList.literal<number>(0,1,2,63));
        verifyListBooleans(64,new core.DartList.generate(64,(i : any) =>  {
            return i;
        }));
        verifyListBooleans(100,new core.DartList.literal<number>(0,3,30,60,90,99));
    }
    test_writeList_ofFloat64() : void {
        let values : core.DartList<double> = new core.DartList.literal<double>(-1.234567,3400000000.0,-5.6e-13,7.8,12.13);
        let byteList : core.DartList<number>;
        {
            let builder : any = new bare.createInstance(any,null,{
                initialSize : 0});
            let offset : any = builder.writeListFloat64(values);
            byteList = builder.finish(offset);
        }
        let buf : any = new bare.createInstance(any,null,byteList);
        let items : core.DartList<double> = new bare.createInstance(any,null).read(buf,0);
        expect(items,hasLength(5));
        expect(items,orderedEquals(values));
    }
    test_writeList_ofInt32() : void {
        let byteList : core.DartList<number>;
        {
            let builder : any = new bare.createInstance(any,null,{
                initialSize : 0});
            let offset : any = builder.writeListInt32(new core.DartList.literal<number>(1,2,3,4,5));
            byteList = builder.finish(offset);
        }
        let buf : any = new bare.createInstance(any,null,byteList);
        let items : core.DartList<number> = new bare.createInstance(any,null,new bare.createInstance(any,null)).read(buf,0);
        expect(items,hasLength(5));
        expect(items,orderedEquals(new core.DartList.literal<number>(1,2,3,4,5)));
    }
    test_writeList_ofObjects() : void {
        let byteList : core.DartList<number>;
        {
            let builder : any = new bare.createInstance(any,null,{
                initialSize : 0});
            let object1 : any;
            {
                builder.startTable();
                builder.addInt32(0,10);
                builder.addInt32(1,20);
                object1 = builder.endTable();
            }
            let object2 : any;
            {
                builder.startTable();
                builder.addInt32(0,100);
                builder.addInt32(1,200);
                object2 = builder.endTable();
            }
            let offset : any = builder.writeList(new core.DartList.literal(object1,object2));
            byteList = builder.finish(offset);
        }
        let buf : any = new bare.createInstance(any,null,byteList);
        let items : core.DartList<TestPointImpl> = new bare.createInstance(any,null,new TestPointReader()).read(buf,0);
        expect(items,hasLength(2));
        expect(items[0].x,10);
        expect(items[0].y,20);
        expect(items[1].x,100);
        expect(items[1].y,200);
    }
    test_writeList_ofStrings_asRoot() : void {
        let byteList : core.DartList<number>;
        {
            let builder : any = new bare.createInstance(any,null,{
                initialSize : 0});
            let str1 : any = builder.writeString('12345');
            let str2 : any = builder.writeString('ABC');
            let offset : any = builder.writeList(new core.DartList.literal(str1,str2));
            byteList = builder.finish(offset);
        }
        let buf : any = new bare.createInstance(any,null,byteList);
        let items : core.DartList<string> = new bare.createInstance(any,null,new bare.createInstance(any,null)).read(buf,0);
        expect(items,hasLength(2));
        expect(items,contains('12345'));
        expect(items,contains('ABC'));
    }
    test_writeList_ofStrings_inObject() : void {
        let byteList : core.DartList<number>;
        {
            let builder : any = new bare.createInstance(any,null,{
                initialSize : 0});
            let listOffset : any = builder.writeList(new core.DartList.literal(builder.writeString('12345'),builder.writeString('ABC')));
            builder.startTable();
            builder.addOffset(0,listOffset);
            let offset : any = builder.endTable();
            byteList = builder.finish(offset);
        }
        let buf : any = new bare.createInstance(any,null,byteList);
        let reader : StringListWrapperImpl = new StringListWrapperReader().read(buf,0);
        let items : core.DartList<string> = reader.items;
        expect(items,hasLength(2));
        expect(items,contains('12345'));
        expect(items,contains('ABC'));
    }
    test_writeList_ofUint32() : void {
        let byteList : core.DartList<number>;
        {
            let builder : any = new bare.createInstance(any,null,{
                initialSize : 0});
            let offset : any = builder.writeListUint32(new core.DartList.literal<number>(1,2,2596069104));
            byteList = builder.finish(offset);
        }
        let buf : any = new bare.createInstance(any,null,byteList);
        let items : core.DartList<number> = new bare.createInstance(any,null).read(buf,0);
        expect(items,hasLength(3));
        expect(items,orderedEquals(new core.DartList.literal<number>(1,2,2596069104)));
    }
    test_writeList_ofUint8() : void {
        let byteList : core.DartList<number>;
        {
            let builder : any = new bare.createInstance(any,null,{
                initialSize : 0});
            let offset : any = builder.writeListUint8(new core.DartList.literal<number>(1,2,3,4,154));
            byteList = builder.finish(offset);
        }
        let buf : any = new bare.createInstance(any,null,byteList);
        let items : core.DartList<number> = new bare.createInstance(any,null).read(buf,0);
        expect(items,hasLength(5));
        expect(items,orderedEquals(new core.DartList.literal<number>(1,2,3,4,154)));
    }
    constructor() {
    }
    @defaultConstructor
    BuilderTest() {
    }
}

export namespace StringListWrapperImpl {
    export type Constructors = 'StringListWrapperImpl';
    export type Interface = Omit<StringListWrapperImpl, Constructors>;
}
@DartClass
export class StringListWrapperImpl {
    bp : any;

    offset : number;

    constructor(bp : any,offset : number) {
    }
    @defaultConstructor
    StringListWrapperImpl(bp : any,offset : number) {
        this.bp = bp;
        this.offset = offset;
    }
    get items() : core.DartList<string> {
        return new bare.createInstance(any,null,new bare.createInstance(any,null)).vTableGet(this.bp,this.offset,0);
    }
}

export namespace StringListWrapperReader {
    export type Constructors = 'StringListWrapperReader';
    export type Interface = Omit<StringListWrapperReader, Constructors>;
}
@DartClass
export class StringListWrapperReader extends any {
    constructor() {
    }
    @defaultConstructor
    StringListWrapperReader() {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createObject(object : any,offset : number) : StringListWrapperImpl {
        return new StringListWrapperImpl(object,offset);
    }
}

export namespace TestPointImpl {
    export type Constructors = 'TestPointImpl';
    export type Interface = Omit<TestPointImpl, Constructors>;
}
@DartClass
export class TestPointImpl {
    bp : any;

    offset : number;

    constructor(bp : any,offset : number) {
    }
    @defaultConstructor
    TestPointImpl(bp : any,offset : number) {
        this.bp = bp;
        this.offset = offset;
    }
    get x() : number {
        return new bare.createInstance(any,null).vTableGet(this.bp,this.offset,0,0);
    }
    get y() : number {
        return new bare.createInstance(any,null).vTableGet(this.bp,this.offset,1,0);
    }
}

export namespace TestPointReader {
    export type Constructors = 'TestPointReader';
    export type Interface = Omit<TestPointReader, Constructors>;
}
@DartClass
export class TestPointReader extends any {
    constructor() {
    }
    @defaultConstructor
    TestPointReader() {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    createObject(object : any,offset : number) : TestPointImpl {
        return new TestPointImpl(object,offset);
    }
}

export class properties {
}
