/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/generated/sdk_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./test_support";
import * as lib4 from "./../src/context/mock_sdk";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(DartSdkManagerTest);
        defineReflectiveTests(SdkDescriptionTest);
    });
};
export namespace DartSdkManagerTest {
    export type Constructors = lib3.EngineTestCase.Constructors | 'DartSdkManagerTest';
    export type Interface = Omit<DartSdkManagerTest, Constructors>;
}
@DartClass
export class DartSdkManagerTest extends lib3.EngineTestCase {
    test_anySdk() : void {
        let manager : any = new bare.createInstance(any,null,'/a/b/c',false);
        expect(manager.anySdk,isNull);
        let options : any = new bare.createInstance(any,null);
        let description : any = new bare.createInstance(any,null,new core.DartList.literal<string>('/c/d'),options);
        let sdk : any = new lib4.MockSdk();
        manager.getSdk(description,() =>  {
            return sdk;
        });
        expect(manager.anySdk,same(sdk));
    }
    test_getSdk_differentDescriptors() : void {
        let manager : any = new bare.createInstance(any,null,'/a/b/c',false);
        let options : any = new bare.createInstance(any,null);
        let description1 : any = new bare.createInstance(any,null,new core.DartList.literal<string>('/c/d'),options);
        let sdk1 : any = new lib4.MockSdk();
        let result1 : any = manager.getSdk(description1,() =>  {
            return sdk1;
        });
        expect(result1,same(sdk1));
        let description2 : any = new bare.createInstance(any,null,new core.DartList.literal<string>('/e/f'),options);
        let sdk2 : any = new lib4.MockSdk();
        let result2 : any = manager.getSdk(description2,() =>  {
            return sdk2;
        });
        expect(result2,same(sdk2));
        manager.getSdk(description1,this._failIfAbsent.bind(this));
        manager.getSdk(description2,this._failIfAbsent.bind(this));
    }
    test_getSdk_sameDescriptor() : void {
        let manager : any = new bare.createInstance(any,null,'/a/b/c',false);
        let options : any = new bare.createInstance(any,null);
        let description : any = new bare.createInstance(any,null,new core.DartList.literal<string>('/c/d'),options);
        let sdk : any = new lib4.MockSdk();
        let result : any = manager.getSdk(description,() =>  {
            return sdk;
        });
        expect(result,same(sdk));
        manager.getSdk(description,this._failIfAbsent.bind(this));
    }
    _failIfAbsent() : any {
        fail('Use of ifAbsent function');
        return null;
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    DartSdkManagerTest() {
    }
}

export namespace SdkDescriptionTest {
    export type Constructors = lib3.EngineTestCase.Constructors | 'SdkDescriptionTest';
    export type Interface = Omit<SdkDescriptionTest, Constructors>;
}
@DartClass
export class SdkDescriptionTest extends lib3.EngineTestCase {
    test_equals_differentPaths_nested() : void {
        let options : any = new bare.createInstance(any,null);
        let left : any = new bare.createInstance(any,null,new core.DartList.literal<string>('/a/b/c'),options);
        let right : any = new bare.createInstance(any,null,new core.DartList.literal<string>('/a/b'),options);
        expect(op(Op.EQUALS,left,right),isFalse);
    }
    test_equals_differentPaths_unrelated() : void {
        let options : any = new bare.createInstance(any,null);
        let left : any = new bare.createInstance(any,null,new core.DartList.literal<string>('/a/b/c'),options);
        let right : any = new bare.createInstance(any,null,new core.DartList.literal<string>('/d/e'),options);
        expect(op(Op.EQUALS,left,right),isFalse);
    }
    test_equals_noPaths() : void {
        let options : any = new bare.createInstance(any,null);
        let left : any = new bare.createInstance(any,null,new core.DartList.literal<string>(),options);
        let right : any = new bare.createInstance(any,null,new core.DartList.literal<string>(),options);
        expect(op(Op.EQUALS,left,right),isTrue);
    }
    test_equals_samePaths_differentOptions() : void {
        let path : string = '/a/b/c';
        let leftOptions : any = new bare.createInstance(any,null);
        let rightOptions : any = new bare.createInstance(any,null);
        rightOptions.strongMode = !leftOptions.strongMode;
        let left : any = new bare.createInstance(any,null,new core.DartList.literal<string>(path),leftOptions);
        let right : any = new bare.createInstance(any,null,new core.DartList.literal<string>(path),rightOptions);
        expect(op(Op.EQUALS,left,right),isFalse);
    }
    test_equals_samePaths_sameOptions_multiple() : void {
        let leftPath : string = '/a/b/c';
        let rightPath : string = '/d/e';
        let options : any = new bare.createInstance(any,null);
        let left : any = new bare.createInstance(any,null,new core.DartList.literal<string>(leftPath,rightPath),options);
        let right : any = new bare.createInstance(any,null,new core.DartList.literal<string>(leftPath,rightPath),options);
        expect(op(Op.EQUALS,left,right),isTrue);
    }
    test_equals_samePaths_sameOptions_single() : void {
        let path : string = '/a/b/c';
        let options : any = new bare.createInstance(any,null);
        let left : any = new bare.createInstance(any,null,new core.DartList.literal<string>(path),options);
        let right : any = new bare.createInstance(any,null,new core.DartList.literal<string>(path),options);
        expect(op(Op.EQUALS,left,right),isTrue);
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SdkDescriptionTest() {
    }
}

export class properties {
}
