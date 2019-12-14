/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/integration/coverage_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../../tool/spec/api";
import * as io from "@dart2ts/dart/io";
import * as lib5 from "@dart2ts.packages/path/lib/path";
import * as lib6 from "./../../tool/spec/from_html";

export var main : () => any = () =>  {
    let api : lib3.Api;
    let coverageFile : io.File;
    let pathPrefix : string;
    if (io.FileSystemEntity.isFileSync(lib5.join('tool','spec','spec_input.html'))) {
        api = lib6.readApi('.');
        pathPrefix = '.';
    }else {
        api = lib6.readApi(lib5.join('pkg','analysis_server'));
        pathPrefix = lib5.join('pkg','analysis_server');
    }
    coverageFile = new io.File(lib5.join(pathPrefix,'test','integration','coverage.md'));
    let lines : core.DartList<string> = coverageFile.readAsLinesSync();
    let coveredDomains : core.DartSet<string> = lines.where((line : any) =>  {
        return new core.DartString(line).startsWith('## ') && new core.DartString(line).endsWith(' domain');
    }).map((line : any) =>  {
        return new core.DartString(new core.DartString(line).substring(new core.DartString('##').length,new core.DartString(line).length - new core.DartString('domain').length)).trim();
    }).toSet();
    lines = lines.map((line : string) =>  {
        let index : number = new core.DartString(line).indexOf('(');
        return index != -1 ? new core.DartString(new core.DartString(line).substring(0,index)).trim() : line;
    }).toList();
    let allMembers : core.DartSet<string> = lines.where((line : any) =>  {
        return new core.DartString(line).startsWith('- ');
    }).map((line : any) =>  {
        return new core.DartString(new core.DartString(line).substring(new core.DartString('- [ ]').length)).trim();
    }).toSet();
    let coveredMembers : core.DartSet<string> = lines.where((line : any) =>  {
        return new core.DartString(line).startsWith('- [x]');
    }).map((line : any) =>  {
        return new core.DartString(new core.DartString(line).substring(new core.DartString('- [x]').length)).trim();
    }).toSet();
    for(let domain of api.domains) {
        group(`integration coverage of ${domain.name}`,() =>  {
            test('domain',() =>  {
                if (!coveredDomains.contains(domain.name)) {
                    fail(`${domain.name} domain not found in ${coverageFile.path}`);
                }
            });
            for(let request of domain.requests) {
                let fullName : string = `${domain.name}.${request.method}`;
                test(fullName,() =>  {
                    if (!allMembers.contains(fullName)) {
                        fail(`${fullName} not found in ${coverageFile.path}`);
                    }
                    let fileName : string = getCamelWords(request.method).map((s : any) =>  {
                        return s.toLowerCase();
                    }).join('_');
                    let testName : string = lib5.join(domain.name,`${fileName}_test.dart`);
                    let testPath : string = lib5.join(pathPrefix,'test','integration',testName);
                    expect(io.FileSystemEntity.isFileSync(testPath),coveredMembers.contains(fullName),{
                        reason : `${testName} state incorrect`});
                });
            }
        });
    }
    group('integration coverage',() =>  {
        test('no unexpected domains',() =>  {
            for(let domain of coveredDomains) {
                expect(api.domains.map((d : any) =>  {
                    return d.name;
                }),contains(domain));
            }
        });
    });
};
export class properties {
}
