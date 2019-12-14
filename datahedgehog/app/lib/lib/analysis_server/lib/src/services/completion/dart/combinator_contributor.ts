/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/services/completion/dart/combinator_contributor.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace CombinatorContributor {
    export type Constructors = 'CombinatorContributor';
    export type Interface = Omit<CombinatorContributor, Constructors>;
}
@DartClass
export class CombinatorContributor extends any {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    computeSuggestions(request : any) : async.Future<core.DartList<any>> { 
        return new async.Future.fromPromise(( async () =>  {
            let node : any = request.target.containingNode;
            if (isNot(node, any)) {
                return EMPTY_LIST;
            }
            let directive = node.getAncestor((parent : any) =>  {
                return is(parent, any);
            });
            if (is(directive, any)) {
                let library : any = directive.uriElement;
                if (library != null) {
                    let builder : any = new bare.createInstance(any,null,request.libraryElement,CompletionSuggestionKind.IDENTIFIER,false,false,request.ideOptions);
                    library.visitChildren(builder);
                    return builder.suggestions;
                }
            }
            return EMPTY_LIST;
        } )());
    }

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    CombinatorContributor() {
    }
}

export class properties {
}
