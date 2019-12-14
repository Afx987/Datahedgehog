/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/analysis/navigation_collector_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(NavigationCollectorImplTest);
    });
};
export namespace NavigationCollectorImplTest {
    export type Constructors = 'NavigationCollectorImplTest';
    export type Interface = Omit<NavigationCollectorImplTest, Constructors>;
}
@DartClass
export class NavigationCollectorImplTest {
    collector : any;

    test_multipleTargets() : void {
        this.collector.addRegion(10,5,ElementKind.CLASS,new bare.createInstance(any,null,'file',11,12,13,14));
        this.collector.addRegion(10,5,ElementKind.CLASS,new bare.createInstance(any,null,'file',21,22,23,24));
        this.collector.createRegions();
        let regions : core.DartList<any> = this.collector.regions;
        expect(regions,hasLength(1));
        {
            let region : any = regions[0];
            expect(region.offset,10);
            expect(region.length,5);
            expect(region.targets,hasLength(2));
            {
                let target : any = op(Op.INDEX,this.collector.targets,op(Op.INDEX,region.targets,0));
                expect(target.offset,11);
                expect(target.length,12);
            }
            {
                let target : any = op(Op.INDEX,this.collector.targets,op(Op.INDEX,region.targets,1));
                expect(target.offset,21);
                expect(target.length,22);
            }
        }
    }
    test_unique() : void {
        this.collector.addRegion(100,10,ElementKind.CLASS,new bare.createInstance(any,null,'file',11,12,13,14));
        this.collector.addRegion(200,20,ElementKind.CLASS,new bare.createInstance(any,null,'file',21,22,23,24));
        this.collector.createRegions();
        let regions : core.DartList<any> = this.collector.regions;
        expect(regions,hasLength(2));
        {
            let region : any = regions[0];
            expect(region.offset,100);
            expect(region.length,10);
            expect(region.targets,hasLength(1));
            {
                let target : any = op(Op.INDEX,this.collector.targets,op(Op.INDEX,region.targets,0));
                expect(target.offset,11);
                expect(target.length,12);
            }
        }
        {
            let region : any = regions[1];
            expect(region.offset,200);
            expect(region.length,20);
            expect(region.targets,hasLength(1));
            {
                let target : any = op(Op.INDEX,this.collector.targets,op(Op.INDEX,region.targets,0));
                expect(target.offset,21);
                expect(target.length,22);
            }
        }
    }
    constructor() {
    }
    @defaultConstructor
    NavigationCollectorImplTest() {
        this.collector = new bare.createInstance(any,null);
    }
}

export class properties {
}
