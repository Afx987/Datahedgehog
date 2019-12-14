/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/test/services/correction/name_suggestion_test.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../../abstract_single_unit";

export var main : () => any = () =>  {
    defineReflectiveSuite(() =>  {
        defineReflectiveTests(VariableNameSuggestionTest);
    });
};
export namespace VariableNameSuggestionTest {
    export type Constructors = lib3.AbstractSingleUnitTest.Constructors | 'VariableNameSuggestionTest';
    export type Interface = Omit<VariableNameSuggestionTest, Constructors>;
}
@DartClass
export class VariableNameSuggestionTest extends lib3.AbstractSingleUnitTest {
    test_forExpression_cast() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  var sortedNodes;\n  var res = sortedNodes as String;\n}\n');
            let excluded = new core.DartSet.from(new core.DartList.literal());
            let expr = this.findNodeAtString('as String',(node : any) =>  {
                return is(node, any);
            });
            expect(getVariableNameSuggestionsForExpression(null,expr,excluded),unorderedEquals(new core.DartList.literal('sortedNodes','nodes')));
        } )());
    }

    test_forExpression_expectedType() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('class TreeNode {}\nmain() {\n  TreeNode node = null;\n}\n');
            let excluded : core.DartSet<string> = new core.DartSet.from(new core.DartList.literal());
            let expectedType : any = (this.findElement('node') as any).type;
            let assignedExpression : any = this.findNodeAtString('null;',(node : any) =>  {
                return is(node, any);
            });
            let suggestions : core.DartList<string> = getVariableNameSuggestionsForExpression(expectedType,assignedExpression,excluded);
            expect(suggestions,unorderedEquals(new core.DartList.literal('treeNode','node')));
        } )());
    }

    test_forExpression_expectedType_double() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  double res = 0.0;\n}\n');
            let expectedType : any = (this.findElement('res') as any).type;
            let assignedExpression : any = this.findNodeAtString('0.0;');
            expect(getVariableNameSuggestionsForExpression(expectedType,assignedExpression,new core.DartSet.from(new core.DartList.literal())),unorderedEquals(new core.DartList.literal('d')));
            expect(getVariableNameSuggestionsForExpression(expectedType,assignedExpression,new core.DartSet.from(new core.DartList.literal('d','e'))),unorderedEquals(new core.DartList.literal('f')));
        } )());
    }

    test_forExpression_expectedType_int() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  int res = 0;\n}\n');
            let expectedType : any = (this.findElement('res') as any).type;
            let assignedExpression : any = this.findNodeAtString('0;');
            expect(getVariableNameSuggestionsForExpression(expectedType,assignedExpression,new core.DartSet.from(new core.DartList.literal())),unorderedEquals(new core.DartList.literal('i')));
            expect(getVariableNameSuggestionsForExpression(expectedType,assignedExpression,new core.DartSet.from(new core.DartList.literal('i','j'))),unorderedEquals(new core.DartList.literal('k')));
        } )());
    }

    test_forExpression_expectedType_String() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main() {\n  String res = \'abc\';\n}\n');
            let expectedType : any = (this.findElement('res') as any).type;
            let assignedExpression : any = this.findNodeAtString("'abc';");
            expect(getVariableNameSuggestionsForExpression(expectedType,assignedExpression,new core.DartSet.from(new core.DartList.literal())),unorderedEquals(new core.DartList.literal('s')));
        } )());
    }

    test_forExpression_instanceCreation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            this.verifyNoTestUnitErrors = false;
            await this.resolveTestUnit('import \'dart:math\' as p;\nmain(p) {\n  new NoSuchClass();\n  new p.NoSuchClass();\n  new NoSuchClass.named();\n}\n');
            let excluded = new core.DartSet.from(new core.DartList.literal());
            expect(getVariableNameSuggestionsForExpression(null,this.findNodeAtString('new NoSuchClass()'),excluded),unorderedEquals(new core.DartList.literal('noSuchClass','suchClass','class')));
            expect(getVariableNameSuggestionsForExpression(null,this.findNodeAtString('new NoSuchClass.named()'),excluded),unorderedEquals(new core.DartList.literal('noSuchClass','suchClass','class')));
        } )());
    }

    test_forExpression_invocationArgument_named() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('foo({a, b, c}) {}\nmain() {\n  foo(a: 111, c: 333, b: 222);\n}\n');
            let excluded = new core.DartSet.from(new core.DartList.literal());
            {
                let expr = this.findNodeAtString('111');
                expect(getVariableNameSuggestionsForExpression(null,expr,excluded),unorderedEquals(new core.DartList.literal('a')));
            }
            {
                let expr = this.findNodeAtString('222');
                expect(getVariableNameSuggestionsForExpression(null,expr,excluded),unorderedEquals(new core.DartList.literal('b')));
            }
            {
                let expr = this.findNodeAtString('333');
                expect(getVariableNameSuggestionsForExpression(null,expr,excluded),unorderedEquals(new core.DartList.literal('c')));
            }
        } )());
    }

    test_forExpression_invocationArgument_optional() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('foo(a, [b = 2, c = 3]) {}\nmain() {\n  foo(111, 222, 333);\n}\n');
            let excluded = new core.DartSet.from(new core.DartList.literal());
            {
                let expr = this.findNodeAtString('111');
                expect(getVariableNameSuggestionsForExpression(null,expr,excluded),unorderedEquals(new core.DartList.literal('a')));
            }
            {
                let expr = this.findNodeAtString('222');
                expect(getVariableNameSuggestionsForExpression(null,expr,excluded),unorderedEquals(new core.DartList.literal('b')));
            }
            {
                let expr = this.findNodeAtString('333');
                expect(getVariableNameSuggestionsForExpression(null,expr,excluded),unorderedEquals(new core.DartList.literal('c')));
            }
        } )());
    }

    test_forExpression_invocationArgument_positional() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('foo(a, b) {}\nmain() {\n  foo(111, 222);\n}\n');
            let excluded = new core.DartSet.from(new core.DartList.literal());
            {
                let expr = this.findNodeAtString('111');
                expect(getVariableNameSuggestionsForExpression(null,expr,excluded),unorderedEquals(new core.DartList.literal('a')));
            }
            {
                let expr = this.findNodeAtString('222');
                expect(getVariableNameSuggestionsForExpression(null,expr,excluded),unorderedEquals(new core.DartList.literal('b')));
            }
        } )());
    }

    test_forExpression_methodInvocation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main(p) {\n  var res = p.getSortedNodes();\n}\n');
            let excluded = new core.DartSet.from(new core.DartList.literal());
            let expr = this.findNodeAtString('p.get',(node : any) =>  {
                return is(node, any);
            });
            expect(getVariableNameSuggestionsForExpression(null,expr,excluded),unorderedEquals(new core.DartList.literal('sortedNodes','nodes')));
        } )());
    }

    test_forExpression_methodInvocation_noPrefix() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main(p) {\n  var res = p.sortedNodes();\n}\n');
            let excluded = new core.DartSet.from(new core.DartList.literal());
            let expr = this.findNodeAtString('p.sorted',(node : any) =>  {
                return is(node, any);
            });
            expect(getVariableNameSuggestionsForExpression(null,expr,excluded),unorderedEquals(new core.DartList.literal('sortedNodes','nodes')));
        } )());
    }

    test_forExpression_name_get() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main(p) {\n  var res = p.get();\n}\n');
            let excluded = new core.DartSet.from(new core.DartList.literal());
            let expr = this.findNodeAtString('p.get',(node : any) =>  {
                return is(node, any);
            });
            expect(getVariableNameSuggestionsForExpression(null,expr,excluded),unorderedEquals(new core.DartList.literal()));
        } )());
    }

    test_forExpression_prefixedIdentifier() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main(p) {\n  var res = p.sortedNodes;\n}\n');
            let excluded = new core.DartSet.from(new core.DartList.literal());
            expect(getVariableNameSuggestionsForExpression(null,this.findNodeAtString('p.sorted',(node : any) =>  {
                return is(node, any);
            }),excluded),unorderedEquals(new core.DartList.literal('sortedNodes','nodes')));
        } )());
    }

    test_forExpression_privateName() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main(p) {\n  p._name;\n  p._computeSuffix();\n}\n');
            let excluded = new core.DartSet.from(new core.DartList.literal());
            expect(getVariableNameSuggestionsForExpression(null,this.findNodeAtString('p._name',(node : any) =>  {
                return is(node, any);
            }),excluded),unorderedEquals(new core.DartList.literal('name')));
            expect(getVariableNameSuggestionsForExpression(null,this.findNodeAtString('p._compute',(node : any) =>  {
                return is(node, any);
            }),excluded),unorderedEquals(new core.DartList.literal('computeSuffix','suffix')));
        } )());
    }

    test_forExpression_propertyAccess() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main(p) {\n  var res = p.q.sortedNodes;\n}\n');
            let excluded = new core.DartSet.from(new core.DartList.literal());
            let expression : any = this.findNodeAtString('p.q.sorted',(node : any) =>  {
                return is(node, any);
            });
            expect(getVariableNameSuggestionsForExpression(null,expression,excluded),unorderedEquals(new core.DartList.literal('sortedNodes','nodes')));
        } )());
    }

    test_forExpression_simpleName() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('main(p) {\n  var sortedNodes = null;\n  var res = sortedNodes;\n}\n');
            let excluded = new core.DartSet.from(new core.DartList.literal());
            let expr = this.findNodeAtString('sortedNodes;');
            expect(getVariableNameSuggestionsForExpression(null,expr,excluded),unorderedEquals(new core.DartList.literal('sortedNodes','nodes')));
        } )());
    }

    test_forExpression_unqualifiedInvocation() : async.Future<any> { 
        return new async.Future.fromPromise(( async () =>  {
            await this.resolveTestUnit('getSortedNodes() => [];\nmain(p) {\n  var res = getSortedNodes();\n}\n');
            let excluded = new core.DartSet.from(new core.DartList.literal());
            expect(getVariableNameSuggestionsForExpression(null,this.findNodeAtString('getSortedNodes();',(node : any) =>  {
                return is(node, any);
            }),excluded),unorderedEquals(new core.DartList.literal('sortedNodes','nodes')));
        } )());
    }

    test_forText() : void {
        {
            let excluded : core.DartSet<string> = new core.DartSet.from(new core.DartList.literal());
            let suggestions : core.DartList<string> = getVariableNameSuggestionsForText('Goodbye, cruel world!',excluded);
            expect(suggestions,unorderedEquals(new core.DartList.literal('goodbyeCruelWorld','cruelWorld','world')));
        }
        {
            let excluded : core.DartSet<string> = new core.DartSet.from(new core.DartList.literal('world'));
            let suggestions : core.DartList<string> = getVariableNameSuggestionsForText('Goodbye, cruel world!',excluded);
            expect(suggestions,unorderedEquals(new core.DartList.literal('goodbyeCruelWorld','cruelWorld','world2')));
        }
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    VariableNameSuggestionTest() {
    }
}

export class properties {
}
