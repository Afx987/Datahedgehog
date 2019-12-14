/** Library asset:datahedgehog_monitor/lib/lib/front_end/lib/src/fasta/kernel/kernel_ast_factory.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../builder/ast_factory";
import * as lib4 from "./kernel_shadow_ast";

export namespace KernelAstFactory {
    export type Constructors = 'KernelAstFactory';
    export type Interface = Omit<KernelAstFactory, Constructors>;
}
@DartClass
@Implements(lib3.AstFactory)
export class KernelAstFactory implements lib3.AstFactory.Interface<any> {
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    arguments(positional : core.DartList<any>,_namedArguments? : {types? : core.DartList<any>,named? : core.DartList<any>}) : any {
        let {types,named} = Object.assign({
        }, _namedArguments );
        return new lib4.KernelArguments(positional,{
            types : types,named : named});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    asExpression(operand : any,operator : any,type : any) : any {
        return ((_) : lib4.KernelAsExpression =>  {
            {
                _.fileOffset = offsetForToken(operator);
                return _;
            }
        })(new lib4.KernelAsExpression(operand,type));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    awaitExpression(keyword : any,operand : any) : any {
        return ((_) : lib4.KernelAwaitExpression =>  {
            {
                _.fileOffset = offsetForToken(keyword);
                return _;
            }
        })(new lib4.KernelAwaitExpression(operand));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    block(statements : core.DartList<any>,beginToken : any) : lib4.KernelBlock {
        return ((_) : lib4.KernelBlock =>  {
            {
                _.fileOffset = offsetForToken(beginToken);
                return _;
            }
        })(new lib4.KernelBlock(statements));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    boolLiteral(value : boolean,token : any) : lib4.KernelBoolLiteral {
        return ((_) : lib4.KernelBoolLiteral =>  {
            {
                _.fileOffset = offsetForToken(token);
                return _;
            }
        })(new lib4.KernelBoolLiteral(value));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    conditionalExpression(condition : any,thenExpression : any,elseExpression : any) : any {
        return new lib4.KernelConditionalExpression(condition,thenExpression,elseExpression);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    constructorInvocation(target : any,arguments : any,_namedArguments? : {isConst? : boolean}) : any {
        let {isConst} = Object.assign({
            "isConst" : false}, _namedArguments );
        return new lib4.KernelConstructorInvocation(target,arguments,{
            isConst : isConst});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    directMethodInvocation(receiver : any,target : any,arguments : any) : any {
        return new lib4.KernelDirectMethodInvocation(receiver,target,arguments);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    directPropertyGet(receiver : any,target : any) : any {
        return new lib4.KernelDirectPropertyGet(receiver,target);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    directPropertySet(receiver : any,target : any,value : any) : any {
        return new lib4.KernelDirectPropertySet(receiver,target,value);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    doubleLiteral(value : double,token : any) : lib4.KernelDoubleLiteral {
        return ((_) : lib4.KernelDoubleLiteral =>  {
            {
                _.fileOffset = offsetForToken(token);
                return _;
            }
        })(new lib4.KernelDoubleLiteral(value));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    expressionStatement(expression : any) : any {
        return new lib4.KernelExpressionStatement(expression);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    functionExpression(function : any,token : any) : any {
        return ((_) : lib4.KernelFunctionExpression =>  {
            {
                _.fileOffset = offsetForToken(token);
                return _;
            }
        })(new lib4.KernelFunctionExpression(function));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    ifStatement(condition : any,thenPart : any,elsePart : any) : any {
        return new lib4.KernelIfStatement(condition,thenPart,elsePart);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    intLiteral(value : number,token : any) : lib4.KernelIntLiteral {
        return ((_) : lib4.KernelIntLiteral =>  {
            {
                _.fileOffset = offsetForToken(token);
                return _;
            }
        })(new lib4.KernelIntLiteral(value));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    isExpression(expression : any,type : any,token : any,isInverted : boolean) : any {
        if (isInverted) {
            return new lib4.KernelIsNotExpression(expression,type,offsetForToken(token));
        }else {
            return ((_) : lib4.KernelIsExpression =>  {
                {
                    _.fileOffset = offsetForToken(token);
                    return _;
                }
            })(new lib4.KernelIsExpression(expression,type));
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    listLiteral(expressions : core.DartList<any>,typeArgument : any,isConst : boolean,token : any) : lib4.KernelListLiteral {
        return ((_) : lib4.KernelListLiteral =>  {
            {
                _.fileOffset = offsetForToken(token);
                return _;
            }
        })(new lib4.KernelListLiteral(expressions,{
            typeArgument : typeArgument,isConst : isConst}));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    logicalExpression(left : any,operator : string,right : any) : any {
        return new lib4.KernelLogicalExpression(left,operator,right);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    mapLiteral(beginToken : any,constKeyword : any,entries : core.DartList<any>,_namedArguments? : {keyType? : any,valueType? : any}) : any {
        let {keyType,valueType} = Object.assign({
            "keyType" : new bare.createInstance(any,null),
            "valueType" : new bare.createInstance(any,null)}, _namedArguments );
        return ((_) : lib4.KernelMapLiteral =>  {
            {
                _.fileOffset = (((t)=>(!!t)?t.charOffset:null)(constKeyword) || offsetForToken(beginToken));
                return _;
            }
        })(new lib4.KernelMapLiteral(entries,{
            keyType : keyType,valueType : valueType,isConst : constKeyword != null}));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    methodInvocation(receiver : any,name : any,arguments : any,interfaceTarget? : any) : any {
        return new lib4.KernelMethodInvocation(receiver,name,arguments);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    not(token : any,operand : any) : any {
        return ((_) : lib4.KernelNot =>  {
            {
                _.fileOffset = offsetForToken(token);
                return _;
            }
        })(new lib4.KernelNot(operand));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    nullLiteral(token : any) : lib4.KernelNullLiteral {
        return ((_) : lib4.KernelNullLiteral =>  {
            {
                _.fileOffset = offsetForToken(token);
                return _;
            }
        })(new lib4.KernelNullLiteral());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    propertyGet(receiver : any,name : any,interfaceTarget? : any) : any {
        return new lib4.KernelPropertyGet(receiver,name,interfaceTarget);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    propertySet(receiver : any,name : any,value : any,interfaceTarget? : any) : any {
        return new lib4.KernelPropertySet(receiver,name,value,interfaceTarget);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    rethrowExpression(keyword : any) : any {
        return ((_) : lib4.KernelRethrow =>  {
            {
                _.fileOffset = offsetForToken(keyword);
                return _;
            }
        })(new lib4.KernelRethrow());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    returnStatement(expression : any,token : any) : lib4.KernelReturnStatement {
        return ((_) : lib4.KernelReturnStatement =>  {
            {
                _.fileOffset = offsetForToken(token);
                return _;
            }
        })(new lib4.KernelReturnStatement(expression));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    setExplicitArgumentTypes(arguments : any,types : core.DartList<any>) : void {
        lib4.KernelArguments.setExplicitArgumentTypes(arguments,types);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    staticGet(readTarget : any,token : any) : any {
        return ((_) : lib4.KernelStaticGet =>  {
            {
                _.fileOffset = offsetForToken(token);
                return _;
            }
        })(new lib4.KernelStaticGet(readTarget));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    staticInvocation(target : any,arguments : any,_namedArguments? : {isConst? : boolean}) : any {
        let {isConst} = Object.assign({
            "isConst" : false}, _namedArguments );
        if (op(Op.EQUALS,target.kind,ProcedureKind.Factory)) {
            return new lib4.KernelFactoryConstructorInvocation(target,arguments,{
                isConst : isConst});
        }
        return new lib4.KernelStaticInvocation(target,arguments,{
            isConst : isConst});
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    stringConcatenation(expressions : core.DartList<any>,token : any) : any {
        return ((_) : lib4.KernelStringConcatenation =>  {
            {
                _.fileOffset = offsetForToken(token);
                return _;
            }
        })(new lib4.KernelStringConcatenation(expressions));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    stringLiteral(value : string,token : any) : any {
        return ((_) : lib4.KernelStringLiteral =>  {
            {
                _.fileOffset = offsetForToken(token);
                return _;
            }
        })(new lib4.KernelStringLiteral(value));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    superMethodInvocation(beginToken : any,name : any,arguments : any,interfaceTarget? : any) : any {
        return new lib4.KernelSuperMethodInvocation(name,arguments,interfaceTarget);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    superPropertyGet(name : any,interfaceTarget? : any) : any {
        return new lib4.KernelSuperPropertyGet(name,interfaceTarget);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    symbolLiteral(hashToken : any,value : string) : any {
        return ((_) : lib4.KernelSymbolLiteral =>  {
            {
                _.fileOffset = offsetForToken(hashToken);
                return _;
            }
        })(new lib4.KernelSymbolLiteral(value));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    thisExpression(keyword : any) : any {
        return ((_) : lib4.KernelThisExpression =>  {
            {
                _.fileOffset = offsetForToken(keyword);
                return _;
            }
        })(new lib4.KernelThisExpression());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    throwExpression(keyword : any,expression : any) : any {
        return ((_) : lib4.KernelThrow =>  {
            {
                _.fileOffset = offsetForToken(keyword);
                return _;
            }
        })(new lib4.KernelThrow(expression));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    typeLiteral(type : any) : any {
        return new lib4.KernelTypeLiteral(type);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    variableDeclaration(name : string,token : any,functionNestingLevel : number,_namedArguments? : {type? : any,initializer? : any,equalsToken? : any,isFinal? : boolean,isConst? : boolean,isLocalFunction? : boolean}) : any {
        let {type,initializer,equalsToken,isFinal,isConst,isLocalFunction} = Object.assign({
            "isFinal" : false,
            "isConst" : false,
            "isLocalFunction" : false}, _namedArguments );
        return ((_) : lib4.KernelVariableDeclaration =>  {
            {
                _.fileOffset = offsetForToken(token);
                _.fileEqualsOffset = offsetForToken(equalsToken);
                return _;
            }
        })(new lib4.KernelVariableDeclaration(name,functionNestingLevel,{
            type : type,initializer : initializer,isFinal : isFinal,isConst : isConst,isLocalFunction : isLocalFunction}));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    variableGet(variable : any,fact : any,scope : any,token : any) : any {
        return ((_) : lib4.KernelVariableGet =>  {
            {
                _.fileOffset = offsetForToken(token);
                return _;
            }
        })(new lib4.KernelVariableGet(variable,fact,scope));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    variableSet(variable : any,value : any) : any {
        return new lib4.KernelVariableSet(variable,value);
    }
    constructor() {
    }
    @defaultConstructor
    KernelAstFactory() {
    }
}

export class properties {
}
