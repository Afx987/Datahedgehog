/** Library asset:datahedgehog_monitor/lib/lib/kernel/test/typedef_unalias_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./verify_test";

export var harnessTest : (name : string,doTest : (harness : lib3.TestHarness) => void) => void = (name : string,doTest : (harness : lib3.TestHarness) => void) : void =>  {
    test(name,() =>  {
        doTest(new lib3.TestHarness());
    });
};
export var main : () => any = () =>  {
    harnessTest('`Foo` where typedef Foo = C',(harness : lib3.TestHarness) =>  {
        let foo = new bare.createInstance(any,null,'Foo',harness.otherClass.rawType);
        harness.enclosingLibrary.addTypedef(foo);
        let type = new bare.createInstance(any,null,foo);
        expect(type.unalias,equals(harness.otherClass.rawType));
    });
    harnessTest('`Foo<Obj>` where typedef Foo<T> = C<T>',(harness : lib3.TestHarness) =>  {
        let param = harness.makeTypeParameter('T');
        let foo = new bare.createInstance(any,null,'Foo',new bare.createInstance(any,null,harness.otherClass,new core.DartList.literal(new bare.createInstance(any,null,param))),{
            typeParameters : new core.DartList.literal(param)});
        harness.enclosingLibrary.addTypedef(foo);
        let input = new bare.createInstance(any,null,foo,new core.DartList.literal(harness.objectClass.rawType));
        let expected = new bare.createInstance(any,null,harness.otherClass,new core.DartList.literal(harness.objectClass.rawType));
        expect(input.unalias,equals(expected));
    });
    harnessTest('`Bar<Obj>` where typedef Bar<T> = Foo<T>, Foo<T> = C<T>',(harness : lib3.TestHarness) =>  {
        let fooParam = harness.makeTypeParameter('T');
        let foo = new bare.createInstance(any,null,'Foo',new bare.createInstance(any,null,harness.otherClass,new core.DartList.literal(new bare.createInstance(any,null,fooParam))),{
            typeParameters : new core.DartList.literal(fooParam)});
        let barParam = harness.makeTypeParameter('T');
        let bar = new bare.createInstance(any,null,'Bar',new bare.createInstance(any,null,foo,new core.DartList.literal(new bare.createInstance(any,null,barParam))),{
            typeParameters : new core.DartList.literal(barParam)});
        harness.enclosingLibrary.addTypedef(foo);
        harness.enclosingLibrary.addTypedef(bar);
        let input = new bare.createInstance(any,null,bar,new core.DartList.literal(harness.objectClass.rawType));
        let expected = new bare.createInstance(any,null,harness.otherClass,new core.DartList.literal(harness.objectClass.rawType));
        expect(input.unalias,equals(expected));
    });
    harnessTest('`Foo<Foo<C>>` where typedef Foo<T> = C<T>',(harness : lib3.TestHarness) =>  {
        let param = harness.makeTypeParameter('T');
        let foo = new bare.createInstance(any,null,'Foo',new bare.createInstance(any,null,harness.otherClass,new core.DartList.literal(new bare.createInstance(any,null,param))),{
            typeParameters : new core.DartList.literal(param)});
        harness.enclosingLibrary.addTypedef(foo);
        let input = new bare.createInstance(any,null,foo,new core.DartList.literal(new bare.createInstance(any,null,foo,new core.DartList.literal(harness.objectClass.rawType))));
        let expected = new bare.createInstance(any,null,harness.otherClass,new core.DartList.literal(new bare.createInstance(any,null,foo,new core.DartList.literal(harness.objectClass.rawType))));
        expect(input.unalias,equals(expected));
    });
};
export class properties {
}
