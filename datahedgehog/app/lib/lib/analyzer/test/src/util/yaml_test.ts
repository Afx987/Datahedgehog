/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/src/util/yaml_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => any = () =>  {
    group('yaml',() =>  {
        group('merge',() =>  {
            test('map',() =>  {
                expect(merge(new core.DartMap.literal([
                    ['one',true],
                    ['two',false],
                    ['three',new core.DartMap.literal([
                        ['nested',new core.DartMap.literal([
                            ['four',true],
                            ['six',true]])]])]]),new core.DartMap.literal([
                    ['three',new core.DartMap.literal([
                        ['nested',new core.DartMap.literal([
                            ['four',false],
                            ['five',true]])],
                        ['five',true]])],
                    ['seven',true]])),equals(new core.DartMap.literal([
                    ['one',true],
                    ['two',false],
                    ['three',new core.DartMap.literal([
                        ['nested',new core.DartMap.literal([
                            ['four',false],
                            ['five',true],
                            ['six',true]])],
                        ['five',true]])],
                    ['seven',true]])));
            });
            test('list',() =>  {
                expect(merge(new core.DartList.literal(1,2,3),new core.DartList.literal(2,3,4,5)),equals(new core.DartList.literal(1,2,3,4,5)));
            });
            test('list w/ promotion',() =>  {
                expect(merge(new core.DartList.literal('one','two','three'),new core.DartMap.literal([
                    ['three',false],
                    ['four',true]])),equals(new core.DartMap.literal([
                    ['one',true],
                    ['two',true],
                    ['three',false],
                    ['four',true]])));
                expect(merge(new core.DartMap.literal([
                    ['one',false],
                    ['two',false]]),new core.DartList.literal('one','three')),equals(new core.DartMap.literal([
                    ['one',true],
                    ['two',false],
                    ['three',true]])));
            });
            test('map w/ list promotion',() =>  {
                let map1 = new core.DartMap.literal([
                    ['one',new core.DartList.literal('a','b','c')]]);
                let map2 = new core.DartMap.literal([
                    ['one',new core.DartMap.literal([
                        ['a',true],
                        ['b',false]])]]);
                let map3 = new core.DartMap.literal([
                    ['one',new core.DartMap.literal([
                        ['a',true],
                        ['b',false],
                        ['c',true]])]]);
                expect(merge(map1,map2),map3);
            });
            test('map w/ no promotion',() =>  {
                let map1 = new core.DartMap.literal([
                    ['one',new core.DartList.literal('a','b','c')]]);
                let map2 = new core.DartMap.literal([
                    ['one',new core.DartMap.literal([
                        ['a','foo'],
                        ['b','bar']])]]);
                let map3 = new core.DartMap.literal([
                    ['one',new core.DartMap.literal([
                        ['a','foo'],
                        ['b','bar']])]]);
                expect(merge(map1,map2),map3);
            });
            test('map w/ no promotion (2)',() =>  {
                let map1 = new core.DartMap.literal([
                    ['one',new core.DartMap.literal([
                        ['a','foo'],
                        ['b','bar']])]]);
                let map2 = new core.DartMap.literal([
                    ['one',new core.DartList.literal('a','b','c')]]);
                let map3 = new core.DartMap.literal([
                    ['one',new core.DartList.literal('a','b','c')]]);
                expect(merge(map1,map2),map3);
            });
            test('object',() =>  {
                expect(merge(1,2),2);
                expect(merge(1,'foo'),'foo');
                expect(merge(new core.DartMap.literal([
                    ['foo',1]]),'foo'),'foo');
            });
        });
    });
};
export var merge : (o1 : core.DartObject,o2 : core.DartObject) => core.DartObject = (o1 : core.DartObject,o2 : core.DartObject) : core.DartObject =>  {
    return properties.merger.merge(o1,o2);
};
export class properties {
    private static __$merger : any;
    static get merger() : any { 
        if (this.__$merger===undefined) {
            this.__$merger = new bare.createInstance(any,null);
        }
        return this.__$merger;
    }
    static set merger(__$value : any)  { 
        this.__$merger = __$value;
    }

}
