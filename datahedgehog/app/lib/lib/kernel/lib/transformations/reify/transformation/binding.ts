/** Library asset:datahedgehog_monitor/lib/lib/kernel/lib/transformations/reify/transformation/binding.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export namespace RuntimeLibrary {
    export type Constructors = '_';
    export type Interface = Omit<RuntimeLibrary, Constructors>;
}
@DartClass
export class RuntimeLibrary {
    typesLibrary : any;

    declarationsLibrary : any;

    interceptorsLibrary : any;

    dynamicTypeConstructor : any;

    interfaceTypeConstructor : any;

    declarationClassConstructor : any;

    functionTypeConstructor : any;

    voidTypeConstructor : any;

    markerClass : any;

    declarationClass : any;

    reifiedTypeClass : any;

    get typeType() : any {
        return this.reifiedTypeClass.rawType;
    }
    variablesFieldName : any;

    runtimeTypeName : any;

    asInstanceOfFunction : any;

    isSubtypeOfFunction : any;

    typeArgumentsFunction : any;

    allocateDeclarationsFunction : any;

    initFunction : any;

    interceptorFunction : any;

    reifyFunction : any;

    attachTypeFunction : any;

    constructor(typesLibrary : any,declarationsLibrary : any,interceptorsLibrary : any) {
    }
    @defaultFactory
    static $RuntimeLibrary(typesLibrary : any,declarationsLibrary : any,interceptorsLibrary : any) : RuntimeLibrary {
        let dynamicTypeClass : any;
        let interfaceTypeClass : any;
        let declarationClass : any;
        let functionTypeClass : any;
        let voidTypeClass : any;
        let markerClass : any;
        let reifiedTypeClass : any;
        let allocateDeclarationsFunction : any;
        let initFunction : any;
        let interceptorFunction : any;
        let reifyFunction : any;
        let attachTypeFunction : any;
        let asInstanceOfFunction : any;
        let isSubtypeOfFunction : any;
        let typeArgumentsFunction : any;
        for(let p of interceptorsLibrary.procedures) {
            if (op(Op.EQUALS,p.name.name,"type")) {
                interceptorFunction = p;
            }else if (op(Op.EQUALS,p.name.name,"reify")) {
                reifyFunction = p;
            }else if (op(Op.EQUALS,p.name.name,"attachType")) {
                attachTypeFunction = p;
            }
        }
        for(let c of interceptorsLibrary.classes) {
            if (op(Op.EQUALS,c.name,"HasRuntimeTypeGetter")) {
                markerClass = c;
            }
        }
        for(let c of typesLibrary.classes) {
            if (op(Op.EQUALS,c.name,'Dynamic')) {
                dynamicTypeClass = c;
            }else if (op(Op.EQUALS,c.name,'Interface')) {
                interfaceTypeClass = c;
            }else if (op(Op.EQUALS,c.name,'FunctionType')) {
                functionTypeClass = c;
            }else if (op(Op.EQUALS,c.name,'Void')) {
                voidTypeClass = c;
            }else if (op(Op.EQUALS,c.name,'ReifiedType')) {
                reifiedTypeClass = c;
            }
        }
        for(let p of typesLibrary.procedures) {
            if (op(Op.EQUALS,p.name.name,"asInstanceOf")) {
                asInstanceOfFunction = p;
            }else if (op(Op.EQUALS,p.name.name,"isSubtypeOf")) {
                isSubtypeOfFunction = p;
            }else if (op(Op.EQUALS,p.name.name,"getTypeArguments")) {
                typeArgumentsFunction = p;
            }
        }
        for(let p of declarationsLibrary.procedures) {
            if (op(Op.EQUALS,p.name.name,"allocateDeclarations")) {
                allocateDeclarationsFunction = p;
            }else if (op(Op.EQUALS,p.name.name,"init")) {
                initFunction = p;
            }
        }
        for(let c of declarationsLibrary.classes) {
            if (op(Op.EQUALS,c.name,'Class')) {
                declarationClass = c;
            }
        }
        /* TODO (AssertStatementImpl) : assert (dynamicTypeClass != null); */;
        /* TODO (AssertStatementImpl) : assert (declarationClass != null); */;
        /* TODO (AssertStatementImpl) : assert (interfaceTypeClass != null); */;
        /* TODO (AssertStatementImpl) : assert (functionTypeClass != null); */;
        /* TODO (AssertStatementImpl) : assert (voidTypeClass != null); */;
        /* TODO (AssertStatementImpl) : assert (markerClass != null); */;
        /* TODO (AssertStatementImpl) : assert (declarationClass != null); */;
        /* TODO (AssertStatementImpl) : assert (reifiedTypeClass != null); */;
        /* TODO (AssertStatementImpl) : assert (allocateDeclarationsFunction != null); */;
        /* TODO (AssertStatementImpl) : assert (initFunction != null); */;
        /* TODO (AssertStatementImpl) : assert (interceptorFunction != null); */;
        /* TODO (AssertStatementImpl) : assert (reifyFunction != null); */;
        /* TODO (AssertStatementImpl) : assert (attachTypeFunction != null); */;
        /* TODO (AssertStatementImpl) : assert (asInstanceOfFunction != null); */;
        /* TODO (AssertStatementImpl) : assert (isSubtypeOfFunction != null); */;
        /* TODO (AssertStatementImpl) : assert (typeArgumentsFunction != null); */;
        return new RuntimeLibrary._(markerClass.procedures.single.name,typesLibrary,declarationsLibrary,interceptorsLibrary,markerClass,declarationClass,reifiedTypeClass,dynamicTypeClass.constructors.single,interfaceTypeClass.constructors.single,declarationClass.constructors.single,functionTypeClass.constructors.single,voidTypeClass.constructors.single,allocateDeclarationsFunction,initFunction,interceptorFunction,reifyFunction,attachTypeFunction,asInstanceOfFunction,isSubtypeOfFunction,typeArgumentsFunction);
    }
    @namedConstructor
    _(runtimeTypeName : any,typesLibrary : any,declarationsLibrary : any,interceptorsLibrary : any,markerClass : any,declarationClass : any,reifiedTypeClass : any,dynamicTypeConstructor : any,interfaceTypeConstructor : any,declarationClassConstructor : any,functionTypeConstructor : any,voidTypeConstructor : any,allocateDeclarationsFunction : any,initFunction : any,interceptorFunction : any,reifyFunction : any,attachTypeFunction : any,asInstanceOfFunction : any,isSubtypeOfFunction : any,typeArgumentsFunction : any) {
        this.variablesFieldName = new bare.createInstance(any,null,"variables");
        this.runtimeTypeName = runtimeTypeName;
        this.typesLibrary = typesLibrary;
        this.declarationsLibrary = declarationsLibrary;
        this.interceptorsLibrary = interceptorsLibrary;
        this.markerClass = markerClass;
        this.declarationClass = declarationClass;
        this.reifiedTypeClass = reifiedTypeClass;
        this.dynamicTypeConstructor = dynamicTypeConstructor;
        this.interfaceTypeConstructor = interfaceTypeConstructor;
        this.declarationClassConstructor = declarationClassConstructor;
        this.functionTypeConstructor = functionTypeConstructor;
        this.voidTypeConstructor = voidTypeConstructor;
        this.allocateDeclarationsFunction = allocateDeclarationsFunction;
        this.initFunction = initFunction;
        this.interceptorFunction = interceptorFunction;
        this.reifyFunction = reifyFunction;
        this.attachTypeFunction = attachTypeFunction;
        this.asInstanceOfFunction = asInstanceOfFunction;
        this.isSubtypeOfFunction = isSubtypeOfFunction;
        this.typeArgumentsFunction = typeArgumentsFunction;
    }
    static _ : new(runtimeTypeName : any,typesLibrary : any,declarationsLibrary : any,interceptorsLibrary : any,markerClass : any,declarationClass : any,reifiedTypeClass : any,dynamicTypeConstructor : any,interfaceTypeConstructor : any,declarationClassConstructor : any,functionTypeConstructor : any,voidTypeConstructor : any,allocateDeclarationsFunction : any,initFunction : any,interceptorFunction : any,reifyFunction : any,attachTypeFunction : any,asInstanceOfFunction : any,isSubtypeOfFunction : any,typeArgumentsFunction : any) => RuntimeLibrary;

    contains(node : any) : boolean {
        while (isNot(node, any)){
            node = node.parent;
            if (op(Op.EQUALS,node,null)) return false;
        }
        return op(Op.EQUALS,node,this.typesLibrary) || op(Op.EQUALS,node,this.declarationsLibrary);
    }
}

export class properties {
}
