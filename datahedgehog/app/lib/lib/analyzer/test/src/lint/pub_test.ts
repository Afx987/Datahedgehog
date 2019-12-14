/** Library asset:datahedgehog_monitor/lib/lib/analyzer/test/src/lint/pub_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/source_span/lib/src/span";

export var main : () => any = () =>  {
    defineTests();
};
export var defineTests : () => any = () =>  {
    let src = "name: linter\nversion: 0.0.1\nauthor: Dart Team <misc@dartlang.org>\nauthors:\n  - Bill\n  - Ted\ndescription: Style linter for Dart.\ndocumentation:\nhomepage: https://github.com/dart-lang/linter\ndependencies:\n  transmogrify:\n    hosted:\n      name: transmogrify\n      url: http://your-package-server.com\n    version: '>=0.4.0 <1.0.0'\n  analyzer: '0.24.0-dev.1'\n  cli_util: '>=0.0.1 <0.1.0'\n  semver: '>=0.2.0 <0.3.0'\n  yaml: '>=2.1.2 <3.0.0'\n  kittens:\n    git:\n      url: git://github.com/munificent/kittens.git\n      ref: some-branch\n  foo: any\ndev_dependencies:\n  markdown: '>=0.7.1+2 <0.8.0'\n  unittest: '>=0.11.0 <0.12.0'\n";
    let ps : any = new bare.createInstance(any,null,src);
    group('pubspec',() =>  {
        group('basic',() =>  {
            test('toString()',() =>  {
                expect(ps.toString(),isNotNull);
            });
        });
        group('entries',() =>  {
            testValue('name',ps.name,equals('linter'));
            testKeySpan('name',ps.name,{
                startOffset : 0,endOffset : 4});
            testValueSpan('name',ps.name,{
                startOffset : 6,endOffset : 12});
            group('documentation',() =>  {
                test('no value',() =>  {
                    expect(ps.documentation.value.text,isNull);
                });
            });
            testValue('homepage',ps.homepage,equals('https://github.com/dart-lang/linter'));
            testValue('description',ps.description,equals('Style linter for Dart.'));
            testValue('version',ps.version,equals('0.0.1'));
            testValue('author',ps.author,equals('Dart Team <misc@dartlang.org>'));
            group('authors',() =>  {
                let authors : any = ps.authors;
                test('contents',() =>  {
                    expect(authors,isNotNull);
                    expect(authors.any((n : any) =>  {
                        return op(Op.EQUALS,n.text,'Bill');
                    }),isTrue);
                    expect(authors.any((n : any) =>  {
                        return op(Op.EQUALS,n.text,'Ted');
                    }),isTrue);
                });
            });
            testDepListContains('dependencies',ps.dependencies,new core.DartList.literal(new core.DartMap.literal([
                ['analyzer','0.24.0-dev.1']])));
            testDepListContains('dev_dependencies',ps.devDependencies,new core.DartList.literal(new core.DartMap.literal([
                ['markdown','>=0.7.1+2 <0.8.0']])));
            group('hosted',() =>  {
                let dep : any = findDependency(ps.dependencies,{
                    name : 'transmogrify'});
                let host : any = dep.host;
                testValue('name',host.name,equals('transmogrify'));
                testValue('url',host.url,equals('http://your-package-server.com'));
                testKeySpan('name',host.name,{
                    startOffset : 237,endOffset : 241});
                testValueSpan('name',host.name,{
                    startOffset : 243,endOffset : 255});
            });
            group('git',() =>  {
                let dep : any = findDependency(ps.dependencies,{
                    name : 'kittens'});
                let git : any = dep.git;
                testValue('ref',git.ref,equals('some-branch'));
                testValue('url',git.url,equals('git://github.com/munificent/kittens.git'));
            });
        });
    });
};
export var findDependency : (deps : any,_namedArguments? : {name? : string}) => any = (deps : any,_namedArguments? : {name? : string}) : any =>  {
    let {name} = Object.assign({
    }, _namedArguments );
    return deps.firstWhere((dep : any) =>  {
        return op(Op.EQUALS,dep.name.text,name);
    },{
        orElse : () =>  {
            return null;
        }});
};
export var testDepListContains : (label : string,list : any,exp : core.DartList<core.DartMap<string,string>>) => any = (label : string,list : any,exp : core.DartList<core.DartMap<string,string>>) =>  {
    test(label,() =>  {
        exp.forEach((entry : core.DartMap<string,string>) =>  {
            entry.forEach((k : any,v : any) =>  {
                let dep : any = findDependency(list,{
                    name : k});
                expect(dep,isNotNull);
                expect(dep.version.value.text,equals(v));
            });
        });
    });
};
export var testEntry : (label : string,node : any,m : any) => any = (label : string,node : any,m : any) =>  {
    group(label,() =>  {
        test('entry',() =>  {
            expect(node,m);
        });
    });
};
export var testKeySpan : (label : string,node : any,_namedArguments? : {startOffset? : number,endOffset? : number}) => any = (label : string,node : any,_namedArguments? : {startOffset? : number,endOffset? : number}) =>  {
    let {startOffset,endOffset} = Object.assign({
    }, _namedArguments );
    group(label,() =>  {
        group('key',() =>  {
            testSpan(node.key.span,{
                startOffset : startOffset,endOffset : endOffset});
        });
    });
};
export var testSpan : (span : lib3.SourceSpan,_namedArguments? : {startOffset? : number,endOffset? : number}) => any = (span : lib3.SourceSpan,_namedArguments? : {startOffset? : number,endOffset? : number}) =>  {
    let {startOffset,endOffset} = Object.assign({
    }, _namedArguments );
    test('span',() =>  {
        let start = span.start;
        expect(start,isNotNull);
        expect(start.offset,equals(startOffset));
        let end = span.end;
        expect(end,isNotNull);
        expect(end.offset,equals(endOffset));
    });
};
export var testValue : (label : string,node : any,m : any) => any = (label : string,node : any,m : any) =>  {
    group(label,() =>  {
        test('value',() =>  {
            expect(node.value.text,m);
        });
    });
};
export var testValueSpan : (label : string,node : any,_namedArguments? : {startOffset? : number,endOffset? : number}) => any = (label : string,node : any,_namedArguments? : {startOffset? : number,endOffset? : number}) =>  {
    let {startOffset,endOffset} = Object.assign({
    }, _namedArguments );
    group(label,() =>  {
        group('value',() =>  {
            testSpan(node.value.span,{
                startOffset : startOffset,endOffset : endOffset});
        });
    });
};
export class properties {
}
