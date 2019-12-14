/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/src/lint/project_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as io from "@dart2ts/dart/io";

export var main : () => any = () =>  {
};
export var defineTests : () => any = () =>  {
    group('project',() =>  {
        group('basic',() =>  {
            group('cwd',() =>  {
                let project = new bare.createInstance(any,null,null,null);
                test('name',() =>  {
                    expect(project.name,'analyzer');
                });
                test('spec',() =>  {
                    expect(project.pubspec,isNotNull);
                });
                test('root',() =>  {
                    expect(project.root.path,io.Directory.current.path);
                });
            });
        });
    });
};
export class properties {
}
