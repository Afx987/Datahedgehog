/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/libraries_reader.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";

export var readLibraries : (librariesUnit : any) => core.DartMap<string,any> = (librariesUnit : any) : core.DartMap<string,any> =>  {
    let constContext = new _ConstContext(librariesUnit.references);
    for(let variable of librariesUnit.variables) {
        if (!variable.isConst) continue;
        op(Op.INDEX_ASSIGN,constContext.topLevelConstants,variable.name,new _ConstVariable(variable.initializer.bodyExpr,constContext));
    }
    for(let cls of librariesUnit.classes) {
        if (op(Op.EQUALS,cls.name,'Maturity')) {
            for(let field of cls.fields) {
                if (!field.isConst) continue;
                op(Op.INDEX_ASSIGN,constContext.maturityConstants,field.name,new _ConstVariable(field.initializer.bodyExpr,constContext));
            }
        }
    }
    return op(Op.INDEX,constContext.topLevelConstants,'libraries').value;
};
export namespace _ConstContext {
    export type Constructors = '_ConstContext';
    export type Interface = Omit<_ConstContext, Constructors>;
}
@DartClass
export class _ConstContext {
    topLevelConstants;

    maturityConstants;

    references : core.DartList<any>;

    constructor(references : core.DartList<any>) {
    }
    @defaultConstructor
    _ConstContext(references : core.DartList<any>) {
        this.topLevelConstants = new core.DartMap.literal([
        ]);
        this.maturityConstants = new core.DartMap.literal([
        ]);
        this.references = references;
    }
}

export namespace _ConstVariable {
    export type Constructors = '_ConstVariable';
    export type Interface = Omit<_ConstVariable, Constructors>;
}
@DartClass
export class _ConstVariable {
    expr : any;

    context : _ConstContext;

    _value : any;

    constructor(expr : any,context : _ConstContext) {
    }
    @defaultConstructor
    _ConstVariable(expr : any,context : _ConstContext) {
        this.expr = expr;
        this.context = context;
    }
    get value() : any {
        return this._value = ( this._value ) || ( this._materialize() );
    }
    _findConstructor(entityRef : any) : (positional : (i : number,defaultValue : any?) => any,named : (name : string,defaultValue : any?) => any) => any {
        /* TODO (AssertStatementImpl) : assert (entityRef.implicitFunctionTypeIndices.isEmpty); */;
        /* TODO (AssertStatementImpl) : assert (entityRef.paramReference == 0); */;
        /* TODO (AssertStatementImpl) : assert (entityRef.syntheticParams.isEmpty); */;
        /* TODO (AssertStatementImpl) : assert (entityRef.syntheticReturnType == null); */;
        /* TODO (AssertStatementImpl) : assert (entityRef.typeArguments.isEmpty); */;
        let reference = this.context.references[entityRef.reference];
        /* TODO (AssertStatementImpl) : assert (reference.prefixReference == 0); */;
        switch (reference.name) {
            case 'LibraryInfo':
                return (positional : (i : number,defaultValue : any?) => any,named : (name : string,defaultValue : any?) => any) =>  {
                    return new bare.createInstance(any,null,positional(0),{
                        categories : named('categories',''),dart2jsPath : named('dart2jsPath'),dart2jsPatchPath : named('dart2jsPatchPath'),implementation : named('implementation',false),documented : named('documented',true),maturity : named('maturity',Maturity.UNSPECIFIED),platforms : named('platforms',op(Op.BITOR,DART2JS_PLATFORM,VM_PLATFORM))});
                };
            case 'Maturity':
                return (positional : (i : number,defaultValue : any?) => any,named : (name : string,defaultValue : any?) => any) =>  {
                    return new bare.createInstance(any,null,positional(0),positional(1),positional(2));
                };
            default:
                throw new core.UnimplementedError(`Unexpected constructor reference: ${reference.name}`);
        }
    }
    _findReference(entityRef : any) : any {
        /* TODO (AssertStatementImpl) : assert (entityRef.implicitFunctionTypeIndices.isEmpty); */;
        /* TODO (AssertStatementImpl) : assert (entityRef.paramReference == 0); */;
        /* TODO (AssertStatementImpl) : assert (entityRef.syntheticParams.isEmpty); */;
        /* TODO (AssertStatementImpl) : assert (entityRef.syntheticReturnType == null); */;
        /* TODO (AssertStatementImpl) : assert (entityRef.typeArguments.isEmpty); */;
        let reference = this.context.references[entityRef.reference];
        if (op(Op.EQUALS,reference.prefixReference,0)) {
            return op(Op.INDEX,this.context.topLevelConstants,reference.name).value;
        }else {
            /* TODO (AssertStatementImpl) : assert (reference.prefixReference != 0); */;
            let prefixReference = this.context.references[reference.prefixReference];
            /* TODO (AssertStatementImpl) : assert (prefixReference.name == 'Maturity'); */;
            /* TODO (AssertStatementImpl) : assert (prefixReference.prefixReference == 0); */;
            return op(Op.INDEX,this.context.maturityConstants,reference.name).value;
        }
    }
    _materialize() : any {
        let stack = new core.DartList.literal();
        let stringIndex = 0;
        let intIndex = 0;
        let referenceIndex = 0;
        var popItems : (count : number) => core.DartList<any> = (count : number) : core.DartList<any> =>  {
            let items = stack.sublist(stack.length - count,stack.length);
            stack.length -= count;
            return items;
        };
        for(let operation of this.expr.operations) {
            switch (operation) {
                case UnlinkedExprOperation.pushString:
                    stack.add(op(Op.INDEX,this.expr.strings,stringIndex++));
                    break;
                case UnlinkedExprOperation.invokeConstructor:
                    let namedArgumentList = popItems(op(Op.INDEX,this.expr.ints,intIndex++));
                    let namedArguments = new core.DartMap.literal([
                    ]);
                    for(let namedArgument of namedArgumentList) {
                        namedArguments.set(op(Op.INDEX,this.expr.strings,stringIndex++),namedArgument);
                    }
                    let positionalArguments = popItems(op(Op.INDEX,this.expr.ints,intIndex++));
                    stack.add((this._findConstructor(op(Op.INDEX,this.expr.references,referenceIndex++)))((i : any,defaultValue? : any) =>  {
                        return i < positionalArguments.length ? positionalArguments[i] : defaultValue;
                    },(name : any,defaultValue? : any) =>  {
                        return namedArguments.containsKey(name) ? namedArguments.get(name) : defaultValue;
                    }));
                    break;
                case UnlinkedExprOperation.makeUntypedMap:
                    let map = new core.DartMap.literal([
                    ]);
                    let numKeyValuePairs = op(Op.INDEX,this.expr.ints,intIndex++);
                    let keyValueList = popItems(op(Op.TIMES,numKeyValuePairs,2));
                    for(let i = 0; i < numKeyValuePairs; i++){
                        map.set(keyValueList[2 * i],keyValueList[2 * i + 1]);
                    }
                    stack.add(map);
                    break;
                case UnlinkedExprOperation.pushReference:
                    stack.add(this._findReference(op(Op.INDEX,this.expr.references,referenceIndex++)));
                    break;
                case UnlinkedExprOperation.pushInt:
                    stack.add(op(Op.INDEX,this.expr.ints,intIndex++));
                    break;
                case UnlinkedExprOperation.pushFalse:
                    stack.add(false);
                    break;
                case UnlinkedExprOperation.pushTrue:
                    stack.add(true);
                    break;
                case UnlinkedExprOperation.bitOr:
                    let y = stack.removeLast();
                    let x = stack.removeLast();
                    stack.add(op(Op.BITOR,x,y));
                    break;
                default:
                    throw new core.UnimplementedError(`Unexpected expression in libraries.dart: ${operation}`);
            }
        }
        /* TODO (AssertStatementImpl) : assert (stringIndex == expr.strings.length); */;
        /* TODO (AssertStatementImpl) : assert (intIndex == expr.ints.length); */;
        /* TODO (AssertStatementImpl) : assert (referenceIndex == expr.references.length); */;
        /* TODO (AssertStatementImpl) : assert (stack.length == 1); */;
        if (op(Op.EQUALS,stack[0],null)) {
            throw new core.StateError('Unexpected null constant in libraries.dart');
        }
        return stack[0];
    }
}

export class properties {
}
