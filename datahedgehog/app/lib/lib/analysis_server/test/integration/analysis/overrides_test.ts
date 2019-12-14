/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/integration/analysis/overrides_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../support/integration_tests";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(OverridesTest);
    });
};
export namespace OverridesTest {
    export type Constructors = lib3.AbstractAnalysisServerIntegrationTest.Constructors | 'OverridesTest';
    export type Interface = Omit<OverridesTest, Constructors>;
}
@DartClass
export class OverridesTest extends lib3.AbstractAnalysisServerIntegrationTest {
    test_overrides() {
        let pathname : string = this.sourcePath('test.dart');
        let text : string = 'abstract class Interface1 {\n  method0();\n  method1();\n  method2();\n  method3();\n}\n\nabstract class Interface2 {\n  method0();\n  method1();\n  method4();\n  method5();\n}\n\nabstract class Base {\n  method0();\n  method2();\n  method4();\n  method6();\n}\n\nclass Target extends Base implements Interface1, Interface2 {\n  method0() {}\n  method1() {}\n  method2() {}\n  method3() {}\n  method4() {}\n  method5() {}\n  method6() {}\n  method7() {}\n}\n';
        this.writeFile(pathname,text);
        this.standardAnalysisSetup();
        this.sendAnalysisSetSubscriptions(new core.DartMap.literal([
            [AnalysisService.OVERRIDES,new core.DartList.literal(pathname)]]));
        let overrides : core.DartList<any>;
        this.onAnalysisOverrides.listen((params : any) =>  {
            expect(params.file,equals(pathname));
            overrides = params.overrides;
        });
        return this.analysisFinished.then((_ : any) =>  {
            let targetOffset : number = new core.DartString(text).indexOf('Target');
            var findOverride : (methodName : string) => any = (methodName : string) : any =>  {
                let methodOffset : number = new core.DartString(text).indexOf(methodName,targetOffset);
                for(let override of overrides) {
                    if (op(Op.EQUALS,override.offset,methodOffset)) {
                        return override;
                    }
                }
                return null;
            };
            var checkOverrides : (methodName : string,expectedOverridesBase : boolean,expectedOverridesInterfaces : core.DartList<string>) => void = (methodName : string,expectedOverridesBase : boolean,expectedOverridesInterfaces : core.DartList<string>) : void =>  {
                let override : any = findOverride(methodName);
                if (!expectedOverridesBase && expectedOverridesInterfaces.isEmpty) {
                    expect(override,isNull);
                    return;
                }else {
                    expect(override,isNotNull);
                }
                expect(override.length,equals(new core.DartString(methodName).length));
                let superclassMember : any = override.superclassMember;
                if (expectedOverridesBase) {
                    expect(superclassMember.element.name,equals(methodName));
                    expect(superclassMember.className,equals('Base'));
                }else {
                    expect(superclassMember,isNull);
                }
                let interfaceMembers : core.DartList<any> = override.interfaceMembers;
                if (expectedOverridesInterfaces.isNotEmpty) {
                    expect(interfaceMembers,isNotNull);
                    let actualOverridesInterfaces : core.DartSet<string> = new core.DartSet<string>();
                    for(let overriddenMember of interfaceMembers) {
                        expect(overriddenMember.element.name,equals(methodName));
                        let className : string = overriddenMember.className;
                        let wasAdded : boolean = actualOverridesInterfaces.add(className);
                        expect(wasAdded,isTrue);
                    }
                    expect(actualOverridesInterfaces,equals(expectedOverridesInterfaces.toSet()));
                }else {
                    expect(interfaceMembers,isNull);
                }
            };
            checkOverrides('method0',true,new core.DartList.literal('Interface1','Interface2'));
            checkOverrides('method1',false,new core.DartList.literal('Interface1','Interface2'));
            checkOverrides('method2',true,new core.DartList.literal('Interface1'));
            checkOverrides('method3',false,new core.DartList.literal('Interface1'));
            checkOverrides('method4',true,new core.DartList.literal('Interface2'));
            checkOverrides('method5',false,new core.DartList.literal('Interface2'));
            checkOverrides('method6',true,new core.DartList.literal());
            checkOverrides('method7',false,new core.DartList.literal());
        });
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    OverridesTest() {
    }
}

export class properties {
}
