/** Library asset:datahedgehog_monitor/lib/lib/kernel/lib/transformations/method_call.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../ast";
import * as lib4 from "./../visitor";
import * as lib5 from "./../class_hierarchy";
import * as lib6 from "./../core_types";
import * as math from "@dart2ts/dart/math";

export var transformProgram : (program : lib3.Program,debug? : any) => lib3.Program = (program : lib3.Program,debug? : any) : lib3.Program =>  {
    debug = debug || false;
    new MethodCallTransformer(debug).visitProgram(program);
    return program;
};
export namespace MethodCallTransformer {
    export type Constructors = lib4.Transformer.Constructors | 'MethodCallTransformer';
    export type Interface = Omit<MethodCallTransformer, Constructors>;
}
@DartClass
export class MethodCallTransformer extends lib4.Transformer {
    _visited : core.DartSet<lib3.Member>;

    blacklistedSelectors : core.DartSet<string>;

    _movedBodies : core.DartMap<lib3.Procedure,lib3.Procedure>;

    _movedConstructors : core.DartMap<lib3.Constructor,lib3.Constructor>;

    _staticProcedureCalls : core.DartMap<lib3.Procedure,core.DartMap<string,lib3.Procedure>>;

    _constructorCalls : core.DartMap<lib3.Constructor,core.DartMap<string,lib3.Constructor>>;

    _methodToLegalPositionalArgumentCount : core.DartMap<string,core.DartSet<number>>;

    _rewrittenMethods : core.DartMap<lib3.Name,core.DartSet<string>>;

    _superProcedureCalls : core.DartMap<lib3.Procedure,core.DartMap<string,lib3.Procedure>>;

    _debug : boolean;

    hierarchy : lib5.ClassHierarchy;

    coreTypes : lib6.CoreTypes;

    _invocationMirrorConstructor : lib3.Constructor;

    _listFrom : lib3.Procedure;

    constructor(_debug : boolean) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    MethodCallTransformer(_debug : boolean) {
        this._visited = new core.DartSet<lib3.Member>();
        this.blacklistedSelectors = new core.DartSet.from(new core.DartList.literal("call"));
        this._movedBodies = new core.DartMap.literal([
        ]);
        this._movedConstructors = new core.DartMap.literal([
        ]);
        this._staticProcedureCalls = new core.DartMap.literal([
        ]);
        this._constructorCalls = new core.DartMap.literal([
        ]);
        this._methodToLegalPositionalArgumentCount = new core.DartMap.literal([
        ]);
        this._rewrittenMethods = new core.DartMap.literal([
        ]);
        this._superProcedureCalls = new core.DartMap.literal([
        ]);
        this._debug = _debug;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitProgram(node : lib3.Program) : lib3.TreeNode {
        this.hierarchy = new lib5.ClassHierarchy(node);
        this.coreTypes = new lib6.CoreTypes(node);
        for(let library of node.libraries) {
            for(let procedure of new core.DartList.from(library.procedures)) {
                this._moveAndTransformProcedure(procedure);
            }
            for(let clazz of library.classes) {
                for(let field of clazz.fields) {
                    this.blacklistedSelectors.add(field.name.name);
                }
                for(let procedure of new core.DartList.from(clazz.procedures)) {
                    this._moveAndTransformProcedure(procedure);
                    this._recordNonStaticProcedureAndVariableArguments(procedure);
                }
                for(let constructor of new core.DartList.from(clazz.constructors)) {
                    this._moveAndTransformConstructor(constructor);
                }
                for(let constructor of clazz.constructors) {
                    this._rewriteConstructorInitializations(constructor);
                }
            }
        }
        node.transformChildren(this);
        for(let library of node.libraries) {
            for(let clazz of library.classes) {
                for(let procedure of new core.DartList.from(clazz.procedures)) {
                    this._createNeededNonStaticStubs(procedure);
                }
            }
        }
        return node;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitProcedure(node : lib3.Procedure) : lib3.TreeNode {
        if (!this._visited.contains(node)) {
            this._visited.add(node);
            node.transformChildren(this);
        }
        return node;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitConstructor(node : lib3.Constructor) : lib3.TreeNode {
        if (!this._visited.contains(node)) {
            this._visited.add(node);
            node.transformChildren(this);
        }
        return node;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitStaticInvocation(node : lib3.StaticInvocation) : lib3.TreeNode {
        node.transformChildren(this);
        if (!this._isMethod(node.target)) return node;
        if (!this._hasAnyOptionalParameters(node.target.function)) return node;
        if (!this._callIsLegal(node.target.function,node.arguments)) return node;
        let rewrittenNode : lib3.Expression = this._rewriteWithLetAndSort(node,node.arguments);
        node.target = this._getNewTargetForStaticLikeInvocation(node.target,node.arguments,this._staticProcedureCalls);
        this._turnNamedArgumentsIntoPositional(node.arguments);
        return rewrittenNode;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitDirectMethodInvocation(node : lib3.DirectMethodInvocation) : lib3.TreeNode {
        node.transformChildren(this);
        if (!this._isMethod(node.target)) return node;
        if (!this._hasAnyOptionalParameters(node.target.function)) return node;
        if (!this._callIsLegal(node.target.function,node.arguments)) return node;
        let rewrittenNode : lib3.Expression = this._rewriteWithLetAndSort(node,node.arguments);
        node.target = this._getNewTargetForStaticLikeInvocation(node.target,node.arguments,this._superProcedureCalls);
        this._turnNamedArgumentsIntoPositional(node.arguments);
        return rewrittenNode;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSuperMethodInvocation(node : lib3.SuperMethodInvocation) : lib3.TreeNode {
        throw "visitSuperMethodInvocation is not implemented!";
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitMethodInvocation(node : lib3.MethodInvocation) : lib3.TreeNode {
        node.transformChildren(this);
        let name = node.name.name;
        if (this.blacklistedSelectors.contains(name)) return node;
        let rewrittenNode : lib3.Expression = this._rewriteWithLetAndSort(node,node.arguments);
        let argumentsSignature : string = this._createArgumentsSignature(node.arguments);
        if (node.arguments.named.isEmpty) {
            let okCounts = this._methodToLegalPositionalArgumentCount.get(name);
            if (op(Op.EQUALS,okCounts,null) || !okCounts.contains(node.arguments.positional.length)) {
                return node;
            }
        }
        let originalName = node.name;
        node.name = this._createName(node.name,argumentsSignature);
        this._rewrittenMethods.putIfAbsent(originalName,() =>  {
            return new core.DartSet<string>();
        }).add(argumentsSignature);
        this._turnNamedArgumentsIntoPositional(node.arguments);
        return rewrittenNode;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitConstructorInvocation(node : lib3.ConstructorInvocation) : lib3.TreeNode {
        node.transformChildren(this);
        if (!this._callIsLegal(node.target.function,node.arguments)) return node;
        let rewrittenNode : lib3.Expression;
        if (node.isConst) {
            node.arguments.named.sort((a : any,b : any) =>  {
                return new core.DartString(a.name).compareTo(b.name);
            });
            rewrittenNode = node;
        }else {
            rewrittenNode = this._rewriteWithLetAndSort(node,node.arguments);
        }
        node.target = this._getNewTargetForConstructor(node.target,node.arguments);
        this._turnNamedArgumentsIntoPositional(node.arguments);
        return rewrittenNode;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitSuperInitializer(node : lib3.SuperInitializer) : lib3.TreeNode {
        node.transformChildren(this);
        if (!this._callIsLegal(node.target.function,node.arguments)) return node;
        node.target = this._getNewTargetForConstructor(node.target,node.arguments);
        this._turnNamedArgumentsIntoPositional(node.arguments);
        return node;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitRedirectingInitializer(node : lib3.RedirectingInitializer) : lib3.TreeNode {
        node.transformChildren(this);
        if (!this._callIsLegal(node.target.function,node.arguments)) return node;
        node.target = this._getNewTargetForConstructor(node.target,node.arguments);
        this._turnNamedArgumentsIntoPositional(node.arguments);
        return node;
    }
    _getNewTargetForStaticLikeInvocation(target : lib3.Procedure,arguments : lib3.Arguments,cache : core.DartMap<lib3.Procedure,core.DartMap<string,lib3.Procedure>>) : lib3.Procedure {
        let createdProcedures = cache.putIfAbsent(target,() =>  {
            return new core.DartMap.literal([
            ]);
        });
        let argumentsSignature = this._createArgumentsSignature(arguments);
        return (createdProcedures.get(argumentsSignature) || this._createAndCacheInvocationProcedure(argumentsSignature,arguments.positional.length,arguments.named.map((e : any) =>  {
            return e.name;
        }).toList(),target,this._movedBodies.get(target),createdProcedures,true));
    }
    _turnNamedArgumentsIntoPositional(arguments : lib3.Arguments) : void {
        for(let named of arguments.named) {
            arguments.positional.add(((_) : lib3.Expression =>  {
                {
                    _.parent = arguments;
                    return _;
                }
            })(named.value));
        }
        arguments.named.clear();
    }
    _getNewTargetForConstructor(target : lib3.Constructor,arguments : lib3.Arguments) : lib3.Constructor {
        if (!this._isNotExternal(target)) return target;
        if (!this._hasAnyOptionalParameters(target.function)) return target;
        let argumentsSignature = this._createArgumentsSignature(arguments);
        let createdConstructor = this._constructorCalls.putIfAbsent(target,() =>  {
            return new core.DartMap.literal([
            ]);
        });
        return (createdConstructor.get(argumentsSignature) || this._createAndCacheInvocationConstructor(argumentsSignature,arguments.positional.length,arguments.named.map((e : any) =>  {
            return e.name;
        }).toList(),target,this._movedConstructors.get(target),createdConstructor,true));
    }
    _createArgumentsSignature(arguments : lib3.Arguments) : string {
        let namedString : string = arguments.named.map((e : any) =>  {
            return e.name;
        }).join("%");
        return `${arguments.positional.length}%${namedString}`;
    }
    _parseArgumentsSignature(argumentsSignature : string) : core.DartList<string> {
        return new core.DartString(argumentsSignature).split("%");
    }
    _rewriteWithLetAndSort(original : lib3.Expression,arguments : lib3.Arguments) : lib3.Expression {
        let named = arguments.named;
        if (named.length < 2) return original;
        let let : lib3.Let;
        for(let i : number = named.length - 1; i >= 0; i--){
            let letDeclaration : lib3.VariableDeclaration = new lib3.VariableDeclaration.forValue(named[i].value);
            named[i].value = ((_) : lib3.VariableGet =>  {
                {
                    _.parent = arguments;
                    return _;
                }
            })(new lib3.VariableGet(letDeclaration));
            let = new lib3.Let(letDeclaration,(let || original));
        }
        named.sort((a : any,b : any) =>  {
            return new core.DartString(a.name).compareTo(b.name);
        });
        let expressions = arguments.positional;
        for(let i : number = expressions.length - 1; i >= 0; i--){
            let letDeclaration : lib3.VariableDeclaration = new lib3.VariableDeclaration.forValue(expressions[i]);
            expressions[i] = ((_) : lib3.VariableGet =>  {
                {
                    _.parent = arguments;
                    return _;
                }
            })(new lib3.VariableGet(letDeclaration));
            let = new lib3.Let(letDeclaration,(let || original));
        }
        return let;
    }
    _createNeededNonStaticStubs(procedure : lib3.Procedure) : void {
        let incomingCalls = this._rewrittenMethods.get(procedure.name);
        if (incomingCalls != null && op(Op.EQUALS,procedure.kind,lib3.ProcedureKind.Method) && !procedure.isStatic) {
            let createdOnSuper = this._superProcedureCalls.get(procedure);
            let names = procedure.function.namedParameters.map((e : any) =>  {
                return e.name;
            }).toSet();
            nextArgumentSignature:
                for(let argumentsSignature of incomingCalls) {
                    if (createdOnSuper != null && createdOnSuper.containsKey(argumentsSignature)) {
                        continue;
                    }
                    let elements = this._parseArgumentsSignature(argumentsSignature);
                    let positional : number = core.DartInt.parse(elements[0]);
                    if (positional < procedure.function.requiredParameterCount || positional > procedure.function.positionalParameters.length) {
                        this._createNoSuchMethodStub(argumentsSignature,positional,elements.sublist(1),procedure);
                        continue;
                    }
                    if (elements.length > 2 || elements[1] != "") {
                        for(let i : number = 1; i < elements.length; i++){
                            let name : string = elements[i];
                            if (!names.contains(name)) {
                                this._createNoSuchMethodStub(argumentsSignature,positional,elements.sublist(1),procedure);
                                continue;
                            }
                        }
                    }
                    let destination = (this._movedBodies.get(procedure) || procedure);
                    this._createAndCacheInvocationProcedure(argumentsSignature,positional,elements.sublist(1),procedure,destination,new core.DartMap.literal([
                    ]),false);
                };
        }
    }
    _recordNonStaticProcedureAndVariableArguments(procedure : lib3.Procedure) : void {
        if (this._isMethod(procedure) && !procedure.isStatic && this._hasAnyOptionalParameters(procedure.function)) {
            let name = procedure.name.name;
            let okCounts = this._methodToLegalPositionalArgumentCount.putIfAbsent(name,() =>  {
                return new core.DartSet<number>();
            });
            for(let i : number = procedure.function.requiredParameterCount; i <= procedure.function.positionalParameters.length; i++){
                okCounts.add(i);
            }
        }
    }
    _moveAndTransformProcedure(procedure : lib3.Procedure) : void {
        if (this._isMethod(procedure) && this._hasAnyOptionalParameters(procedure.function)) {
            let function = procedure.function;
            let newParameterDeclarations = new core.DartList.literal<lib3.VariableDeclaration>();
            let newNamedParameterDeclarations = new core.DartList.literal<lib3.VariableDeclaration>();
            let newParameterVariableGets = new core.DartList.literal<lib3.Expression>();
            let targetParameters = function.positionalParameters;
            let targetNamedParameters = function.namedParameters;
            this._moveVariableInitialization(targetParameters,targetNamedParameters,newParameterDeclarations,newNamedParameterDeclarations,newParameterVariableGets,procedure.function);
            let functionNode : lib3.FunctionNode = this._createShallowFunctionCopy(function);
            let newProcedure = new lib3.Procedure(this._createOriginalName(procedure),lib3.ProcedureKind.Method,functionNode,{
                isAbstract : procedure.isAbstract,isStatic : procedure.isStatic,isConst : procedure.isConst,fileUri : procedure.fileUri});
            this._addMember(procedure,newProcedure);
            this._movedBodies.set(procedure,newProcedure);
            if (procedure.isAbstract && op(Op.EQUALS,procedure.function.body,null)) {
                procedure.function.positionalParameters = newParameterDeclarations;
                procedure.function.namedParameters = newNamedParameterDeclarations;
            }else if (procedure.isStatic) {
                let expression = new lib3.StaticInvocation(newProcedure,new lib3.Arguments(newParameterVariableGets));
                let statement = ((_) : lib3.ReturnStatement =>  {
                    {
                        _.parent = procedure.function;
                        return _;
                    }
                })(new lib3.ReturnStatement(expression));
                procedure.function.body = statement;
                procedure.function.positionalParameters = newParameterDeclarations;
                procedure.function.namedParameters = newNamedParameterDeclarations;
            }else {
                let expression = new lib3.DirectMethodInvocation(new lib3.ThisExpression(),newProcedure,new lib3.Arguments(newParameterVariableGets));
                let statement = ((_) : lib3.ReturnStatement =>  {
                    {
                        _.parent = procedure.function;
                        return _;
                    }
                })(new lib3.ReturnStatement(expression));
                procedure.function.body = statement;
                procedure.function.positionalParameters = newParameterDeclarations;
                procedure.function.namedParameters = newNamedParameterDeclarations;
            }
            if (this._debug) {
                let debugPrint : lib3.Expression = this._getPrintExpression("DEBUG! Procedure shouldn't have been called...",procedure);
                procedure.function.body = ((_) : lib3.Block =>  {
                    {
                        _.parent = procedure.function;
                        return _;
                    }
                })(new lib3.Block(new core.DartList.literal(new lib3.ExpressionStatement(debugPrint),procedure.function.body)));
            }
            this._visited.add(procedure);
        }
    }
    _rewriteConstructorInitializations(constructor : lib3.Constructor) : void {
        if (this._isNotExternal(constructor)) {
            let initializers : core.DartList<lib3.Initializer> = constructor.initializers;
            let foundIndex : number = -1;
            let arguments : lib3.Arguments;
            for(let i : number = initializers.length - 1; i >= 0; --i){
                let initializer : lib3.Initializer = initializers[i];
                if (is(initializer, lib3.SuperInitializer)) {
                    foundIndex = i;
                    arguments = initializer.arguments;
                    break;
                }else if (is(initializer, lib3.RedirectingInitializer)) {
                    foundIndex = i;
                    arguments = initializer.arguments;
                    break;
                }
            }
            if (foundIndex == -1) return;
            if (arguments.named.length < 2) return;
            let argumentCount : number = arguments.positional.length + arguments.named.length;
            initializers.length += argumentCount;
            initializers.setRange(foundIndex + argumentCount,initializers.length,initializers,foundIndex);
            let storeIndex : number = foundIndex;
            for(let i : number = 0; i < arguments.positional.length; ++i){
                let variable = new lib3.VariableDeclaration.forValue(arguments.positional[i]);
                arguments.positional[i] = ((_) : lib3.VariableGet =>  {
                    {
                        _.parent = arguments;
                        return _;
                    }
                })(new lib3.VariableGet(variable));
                initializers[storeIndex++] = ((_) : lib3.LocalInitializer =>  {
                    {
                        _.parent = constructor;
                        return _;
                    }
                })(new lib3.LocalInitializer(variable));
            }
            for(let i : number = 0; i < arguments.named.length; ++i){
                let argument : lib3.NamedExpression = arguments.named[i];
                let variable = new lib3.VariableDeclaration.forValue(argument.value);
                arguments.named[i].value = ((_) : lib3.VariableGet =>  {
                    {
                        _.parent = argument;
                        return _;
                    }
                })(new lib3.VariableGet(variable));
                initializers[storeIndex++] = ((_) : lib3.LocalInitializer =>  {
                    {
                        _.parent = constructor;
                        return _;
                    }
                })(new lib3.LocalInitializer(variable));
            }
            arguments.named.sort((a : any,b : any) =>  {
                return new core.DartString(a.name).compareTo(b.name);
            });
        }
    }
    _moveAndTransformConstructor(constructor : lib3.Constructor) : void {
        if (this._isNotExternal(constructor) && this._hasAnyOptionalParameters(constructor.function)) {
            let function = constructor.function;
            let newParameterDeclarations = new core.DartList.literal<lib3.VariableDeclaration>();
            let newNamedParameterDeclarations = new core.DartList.literal<lib3.VariableDeclaration>();
            let newParameterVariableGets = new core.DartList.literal<lib3.Expression>();
            let targetParameters = function.positionalParameters;
            let targetNamedParameters = function.namedParameters;
            this._moveVariableInitialization(targetParameters,targetNamedParameters,newParameterDeclarations,newNamedParameterDeclarations,newParameterVariableGets,constructor.function);
            let functionNode : lib3.FunctionNode = this._createShallowFunctionCopy(function);
            let newConstructor = new lib3.Constructor(functionNode,{
                name : this._createOriginalName(constructor),isConst : constructor.isConst,isExternal : constructor.isExternal,initializers : constructor.initializers});
            this._addMember(constructor,newConstructor);
            this._movedConstructors.set(constructor,newConstructor);
            constructor.function.body = null;
            constructor.function.positionalParameters = newParameterDeclarations;
            constructor.function.namedParameters = newNamedParameterDeclarations;
            constructor.initializers = new core.DartList.literal(((_) : lib3.RedirectingInitializer =>  {
                {
                    _.parent = constructor;
                    return _;
                }
            })(new lib3.RedirectingInitializer(newConstructor,new lib3.Arguments(newParameterVariableGets))));
            if (this._debug) {
                let debugPrint : lib3.Expression = this._getPrintExpression("DEBUG! Constructor shouldn't have been called...",constructor);
                let variable = new lib3.VariableDeclaration.forValue(debugPrint);
                let debugInitializer = ((_) : lib3.LocalInitializer =>  {
                    {
                        _.parent = constructor;
                        return _;
                    }
                })(new lib3.LocalInitializer(variable));
                let redirector = constructor.initializers[0];
                constructor.initializers = new core.DartList.literal(debugInitializer,redirector);
            }
            this._visited.add(constructor);
        }
    }
    _createShallowFunctionCopy(function : lib3.FunctionNode) : lib3.FunctionNode {
        let newParameters = new core.DartList.from(function.positionalParameters);
        let named = new core.DartList.from(function.namedParameters);
        named.sort((a : any,b : any) =>  {
            return new core.DartString(a.name).compareTo(b.name);
        });
        newParameters.addAll(named);
        let functionNode = new lib3.FunctionNode(function.body,{
            positionalParameters : newParameters,namedParameters : new core.DartList.literal(),requiredParameterCount : newParameters.length,returnType : function.returnType,asyncMarker : function.asyncMarker,dartAsyncMarker : function.dartAsyncMarker});
        return functionNode;
    }
    _moveVariableInitialization(originalParameters : core.DartList<lib3.VariableDeclaration>,originalNamedParameters : core.DartList<lib3.VariableDeclaration>,newParameterDeclarations : core.DartList<lib3.VariableDeclaration>,newNamedParameterDeclarations : core.DartList<lib3.VariableDeclaration>,newParameterVariableGets : core.DartList<lib3.Expression>,newStuffParent : lib3.TreeNode) : void {
        for(let orgVar of originalParameters) {
            let variableDeclaration = ((_) : lib3.VariableDeclaration =>  {
                {
                    _.parent = newStuffParent;
                    return _;
                }
            })(new lib3.VariableDeclaration(orgVar.name,{
                initializer : orgVar.initializer,type : orgVar.type,isFinal : orgVar.isFinal,isConst : orgVar.isConst}));
            ((t)=>(!!t)?t.parent:null)(variableDeclaration.initializer) = variableDeclaration;
            newParameterDeclarations.add(variableDeclaration);
            orgVar.initializer = null;
            newParameterVariableGets.add(new lib3.VariableGet(variableDeclaration));
        }
        let tmp = new core.DartList<_Pair<string,lib3.Expression>>();
        for(let orgVar of originalNamedParameters) {
            let variableDeclaration = ((_) : lib3.VariableDeclaration =>  {
                {
                    _.parent = newStuffParent;
                    return _;
                }
            })(new lib3.VariableDeclaration(orgVar.name,{
                initializer : orgVar.initializer,type : orgVar.type,isFinal : orgVar.isFinal,isConst : orgVar.isConst}));
            ((t)=>(!!t)?t.parent:null)(variableDeclaration.initializer) = variableDeclaration;
            newNamedParameterDeclarations.add(variableDeclaration);
            orgVar.initializer = null;
            tmp.add(new _Pair<any,any>(orgVar.name,new lib3.VariableGet(variableDeclaration)));
        }
        tmp.sort((a : any,b : any) =>  {
            return new core.DartString(a.key).compareTo(b.key);
        });
        for(let item of tmp) {
            newParameterVariableGets.add(item.value);
        }
    }
    _createNoSuchMethodStub(argumentsSignature : string,positionalCount : number,givenNamedParameters : core.DartList<string>,existing : lib3.Procedure) : lib3.Procedure {
        let newParameterDeclarations = new core.DartList.literal<lib3.VariableDeclaration>();
        let newParameterVariableGets = new core.DartList.literal<lib3.Expression>();
        for(let i : number = 0; i < positionalCount + givenNamedParameters.length; i++){
            let variableDeclaration = new lib3.VariableDeclaration(`v%${i}`);
            newParameterDeclarations.add(variableDeclaration);
            newParameterVariableGets.add(new lib3.VariableGet(variableDeclaration));
        }
        let procedureName = this._createName(existing.name,argumentsSignature);
        let noSuchMethod : lib3.Member = this.hierarchy.getDispatchTarget(existing.enclosingClass,new lib3.Name("noSuchMethod"));
        let argumentsToNoSuchMethod : lib3.Arguments;
        if (noSuchMethod.function.positionalParameters.length == 1 && noSuchMethod.function.namedParameters.isEmpty) {
            let invocation : lib3.ConstructorInvocation = this._createInvocation(procedureName.name,new lib3.Arguments(newParameterVariableGets));
            argumentsToNoSuchMethod = new lib3.Arguments(new core.DartList.literal(invocation));
        }else {
            noSuchMethod = this.hierarchy.getDispatchTarget(this.hierarchy.rootClass,new lib3.Name("noSuchMethod"));
            let invocation : lib3.ConstructorInvocation = this._createInvocation(procedureName.name,new lib3.Arguments(newParameterVariableGets));
            let invocationPrime : lib3.ConstructorInvocation = this._createInvocation("noSuchMethod",new lib3.Arguments(new core.DartList.literal(invocation)));
            argumentsToNoSuchMethod = new lib3.Arguments(new core.DartList.literal(invocationPrime));
        }
        let statement : lib3.ReturnStatement;
        let expression = new lib3.DirectMethodInvocation(new lib3.ThisExpression(),noSuchMethod,argumentsToNoSuchMethod);
        statement = new lib3.ReturnStatement(expression);
        let functionNode = new lib3.FunctionNode(statement,{
            positionalParameters : newParameterDeclarations,namedParameters : new core.DartList.literal(),requiredParameterCount : newParameterDeclarations.length,returnType : existing.function.returnType,asyncMarker : existing.function.asyncMarker,dartAsyncMarker : existing.function.dartAsyncMarker});
        let procedure = new lib3.Procedure(procedureName,lib3.ProcedureKind.Method,functionNode,{
            isStatic : existing.isStatic,fileUri : existing.fileUri});
        this._addMember(existing,procedure);
        this._visited.add(procedure);
        return procedure;
    }
    _createInvocation(methodName : string,callArguments : lib3.Arguments) : lib3.ConstructorInvocation {
        if (op(Op.EQUALS,this._invocationMirrorConstructor,null)) {
            let clazz : lib3.Class = this.coreTypes.invocationMirrorClass;
            this._invocationMirrorConstructor = clazz.constructors[0];
        }
        let numPositionalArguments : number = callArguments.positional.length + 1;
        let numArguments : number = numPositionalArguments + callArguments.named.length;
        let argumentsDescriptor : core.DartList<lib3.Expression> = new core.DartList.literal(new lib3.IntLiteral(numArguments),new lib3.IntLiteral(numPositionalArguments));
        let arguments : core.DartList<lib3.Expression> = new core.DartList.literal();
        arguments.add(new lib3.ThisExpression());
        for(let pos of callArguments.positional) {
            arguments.add(pos);
        }
        for(let named of callArguments.named) {
            argumentsDescriptor.add(new lib3.StringLiteral(named.name));
            argumentsDescriptor.add(new lib3.IntLiteral(arguments.length));
            arguments.add(named.value);
        }
        return new lib3.ConstructorInvocation(this._invocationMirrorConstructor,new lib3.Arguments(new core.DartList.literal(new lib3.StringLiteral(methodName),this._fixedLengthList(argumentsDescriptor),this._fixedLengthList(arguments),new lib3.BoolLiteral(false))));
    }
    _fixedLengthList(list : core.DartList<lib3.Expression>) : lib3.Expression {
        this._listFrom = ( this._listFrom ) || ( this.coreTypes.listFromConstructor );
        return new lib3.StaticInvocation(this._listFrom,new lib3.Arguments(new core.DartList.literal(new lib3.ListLiteral(list)),{
            named : new core.DartList.literal(new lib3.NamedExpression("growable",new lib3.BoolLiteral(false))),types : new core.DartList.literal(new lib3.DynamicType())}));
    }
    _createAndCacheInvocationProcedure(argumentsSignature : string,positionalCount : number,givenNamedParameters : core.DartList<string>,target : lib3.Procedure,realTarget : lib3.Procedure,createdProcedures : core.DartMap<string,lib3.Procedure>,doSpecialCaseForAllParameters : boolean) : lib3.Procedure {
        if (doSpecialCaseForAllParameters && positionalCount == target.function.positionalParameters.length && givenNamedParameters.length == target.function.namedParameters.length) {
            return realTarget;
        }
        let newParameterDeclarations = new core.DartList.literal<lib3.VariableDeclaration>();
        let newParameterVariableGets = new core.DartList.literal<lib3.Expression>();
        this._extractAndCreateParameters(positionalCount,newParameterDeclarations,newParameterVariableGets,target,givenNamedParameters);
        let statement : lib3.ReturnStatement;
        if (target.isAbstract && op(Op.EQUALS,((t)=>(!!t)?t.body:null)(target.function),null)) {
        }else if (target.isStatic) {
            let expression = new lib3.StaticInvocation(realTarget,new lib3.Arguments(newParameterVariableGets));
            statement = new lib3.ReturnStatement(expression);
        }else {
            let expression = new lib3.DirectMethodInvocation(new lib3.ThisExpression(),realTarget,new lib3.Arguments(newParameterVariableGets));
            statement = new lib3.ReturnStatement(expression);
        }
        let functionNode = new lib3.FunctionNode(statement,{
            positionalParameters : newParameterDeclarations,namedParameters : new core.DartList.literal(),requiredParameterCount : newParameterDeclarations.length,returnType : target.function.returnType,asyncMarker : target.function.asyncMarker,dartAsyncMarker : target.function.dartAsyncMarker});
        let procedure = new lib3.Procedure(this._createName(target.name,argumentsSignature),lib3.ProcedureKind.Method,functionNode,{
            isAbstract : target.isAbstract,isStatic : target.isStatic,isConst : target.isConst,fileUri : target.fileUri});
        this._addMember(target,procedure);
        createdProcedures.set(argumentsSignature,procedure);
        this._visited.add(procedure);
        return procedure;
    }
    _createAndCacheInvocationConstructor(argumentsSignature : string,positionalCount : number,givenNamedParameters : core.DartList<string>,target : lib3.Constructor,realTarget : lib3.Constructor,createdConstructor : core.DartMap<string,lib3.Constructor>,doSpecialCaseForAllParameters : boolean) : lib3.Constructor {
        if (doSpecialCaseForAllParameters && positionalCount == target.function.positionalParameters.length && givenNamedParameters.length == target.function.namedParameters.length) {
            createdConstructor.set(argumentsSignature,realTarget);
            return realTarget;
        }
        let newParameterDeclarations = new core.DartList.literal<lib3.VariableDeclaration>();
        let newParameterVariableGets = new core.DartList.literal<lib3.Expression>();
        this._extractAndCreateParameters(positionalCount,newParameterDeclarations,newParameterVariableGets,target,givenNamedParameters);
        let functionNode = new lib3.FunctionNode(null,{
            positionalParameters : newParameterDeclarations,namedParameters : new core.DartList.literal(),requiredParameterCount : newParameterDeclarations.length,returnType : target.function.returnType,asyncMarker : target.function.asyncMarker,dartAsyncMarker : target.function.dartAsyncMarker});
        let constructor = new lib3.Constructor(functionNode,{
            name : this._createName(target.name,argumentsSignature),isConst : target.isConst,isExternal : target.isExternal,initializers : new core.DartList.literal(new lib3.RedirectingInitializer(realTarget,new lib3.Arguments(newParameterVariableGets)))});
        this._addMember(target,constructor);
        createdConstructor.set(argumentsSignature,constructor);
        this._visited.add(constructor);
        return constructor;
    }
    _extractAndCreateParameters(positionalCount : number,newParameterDeclarations : core.DartList<lib3.VariableDeclaration>,newParameterVariableGets : core.DartList<lib3.Expression>,target : lib3.Member,givenNamedParameters : core.DartList<string>) : void {
        let targetParameters = target.function.positionalParameters;
        positionalCount = math.min(positionalCount,targetParameters.length);
        for(let i : number = 0; i < positionalCount; i++){
            let orgVar = targetParameters[i];
            let variableDeclaration = new lib3.VariableDeclaration(orgVar.name,{
                type : orgVar.type,isFinal : orgVar.isFinal,isConst : orgVar.isConst});
            newParameterDeclarations.add(variableDeclaration);
            newParameterVariableGets.add(new lib3.VariableGet(variableDeclaration));
        }
        this._fillInPositionalParameters(positionalCount,target,newParameterVariableGets);
        let orgNamed = new core.DartList.from(target.function.namedParameters);
        orgNamed.sort((a : any,b : any) =>  {
            return new core.DartString(a.name).compareTo(b.name);
        });
        let givenArgumentsIterator = givenNamedParameters.iterator;
        givenArgumentsIterator.moveNext();
        for(let named of orgNamed) {
            if (givenArgumentsIterator.current == named.name) {
                let variableDeclaration = new lib3.VariableDeclaration(named.name);
                newParameterDeclarations.add(variableDeclaration);
                newParameterVariableGets.add(new lib3.VariableGet(variableDeclaration));
                givenArgumentsIterator.moveNext();
            }else {
                this._fillInSingleParameter(named,newParameterVariableGets,target);
            }
        }
    }
    _addMember(existingMember : lib3.Member,newMember : lib3.Member) : void {
        if (existingMember.enclosingClass != null) {
            existingMember.enclosingClass.addMember(newMember);
        }else {
            existingMember.enclosingLibrary.addMember(newMember);
        }
    }
    _fillInPositionalParameters(startFrom : number,copyFrom : lib3.Member,fillInto : core.DartList<lib3.Expression>) : void {
        let targetParameters = copyFrom.function.positionalParameters;
        for(let i : number = startFrom; i < targetParameters.length; i++){
            let parameter = targetParameters[i];
            this._fillInSingleParameter(parameter,fillInto,copyFrom);
        }
    }
    _fillInSingleParameter(parameter : lib3.VariableDeclaration,fillInto : core.DartList<lib3.Expression>,copyFrom : lib3.Member) : void {
        if (is(parameter.initializer, lib3.StaticGet)) {
            let staticGet : lib3.StaticGet = parameter.initializer;
            fillInto.add(new lib3.StaticGet(staticGet.target));
        }else if (op(Op.EQUALS,parameter.initializer,null)) {
            fillInto.add(new lib3.NullLiteral());
        }else if (is(parameter.initializer, lib3.IntLiteral)) {
            let value : lib3.IntLiteral = parameter.initializer;
            fillInto.add(new lib3.IntLiteral(value.value));
        }else {
            let initializer = parameter.initializer;
            let f = new lib3.Field(new lib3.Name(`${copyFrom.name.name}%_${parameter.name}`,copyFrom.enclosingLibrary),{
                type : parameter.type,initializer : initializer,isFinal : false,isConst : true,isStatic : true,fileUri : (((t)=>(!!t)?t.fileUri:null)(copyFrom.enclosingClass) || copyFrom.enclosingLibrary.fileUri)});
            initializer.parent = f;
            if (copyFrom.enclosingClass != null) {
                copyFrom.enclosingClass.addMember(f);
            }else {
                copyFrom.enclosingLibrary.addMember(f);
            }
            fillInto.add(new lib3.StaticGet(f));
            parameter.initializer = ((_) : lib3.StaticGet =>  {
                {
                    _.parent = parameter;
                    return _;
                }
            })(new lib3.StaticGet(f));
        }
    }
    _createOriginalName(member : lib3.Member) : lib3.Name {
        return new lib3.Name(`${member.name.name}%original`,member.enclosingLibrary);
    }
    _createName(name : lib3.Name,argumentsSignature : string) : lib3.Name {
        let nameString : string = `${name.name}%${argumentsSignature}`;
        return new lib3.Name(nameString,name.library);
    }
    _isMethod(procedure : lib3.Procedure) : boolean {
        return op(Op.EQUALS,procedure.kind,lib3.ProcedureKind.Method);
    }
    _isNotExternal(constructor : lib3.Constructor) : boolean {
        return !constructor.isExternal;
    }
    _hasAnyOptionalParameters(targetFunction : lib3.FunctionNode) : boolean {
        return this._hasOptionalParameters(targetFunction) || this._hasNamedParameters(targetFunction);
    }
    _hasOptionalParameters(targetFunction : lib3.FunctionNode) : boolean {
        return targetFunction.positionalParameters.length > targetFunction.requiredParameterCount;
    }
    _hasNamedParameters(targetFunction : lib3.FunctionNode) : boolean {
        return targetFunction.namedParameters.isNotEmpty;
    }
    _callIsLegal(targetFunction : lib3.FunctionNode,arguments : lib3.Arguments) : boolean {
        if ((targetFunction.requiredParameterCount > arguments.positional.length) || (targetFunction.positionalParameters.length < arguments.positional.length)) {
            return false;
        }
        let givenNamed : core.DartSet<string> = arguments.named.map((v : any) =>  {
            return v.name;
        }).toSet();
        let takenNamed : core.DartSet<string> = targetFunction.namedParameters.map((v : any) =>  {
            return v.name;
        }).toSet();
        givenNamed.removeAll(takenNamed);
        return givenNamed.isEmpty;
    }
    _getDartCoreLibrary(program : lib3.Program) : lib3.Library {
        if (op(Op.EQUALS,program,null)) return null;
        return program.libraries.firstWhere((lib : any) =>  {
            return lib.importUri.scheme == 'dart' && lib.importUri.path == 'core';
        });
    }
    _getProcedureInLib(lib : lib3.Library,name : string) : lib3.Procedure {
        if (op(Op.EQUALS,lib,null)) return null;
        return lib.procedures.firstWhere((procedure : any) =>  {
            return procedure.name.name == name;
        });
    }
    _getProcedureInClassInLib(lib : lib3.Library,className : string,procedureName : string) : lib3.Procedure {
        if (op(Op.EQUALS,lib,null)) return null;
        let clazz : lib3.Class = lib.classes.firstWhere((clazz : any) =>  {
            return clazz.name == className;
        });
        return clazz.procedures.firstWhere((procedure : any) =>  {
            return procedure.name.name == procedureName;
        });
    }
    _getPrintExpression(msg : string,treeNode : lib3.TreeNode) : lib3.Expression {
        let program : lib3.TreeNode = treeNode;
        while (isNot(program, lib3.Program))program = program.parent;
        let finalMsg = msg;
        if (is(treeNode, lib3.Member)) {
            finalMsg += ` [ ${treeNode.name.name} ]`;
            if (treeNode.enclosingClass != null) {
                finalMsg += ` [ class ${treeNode.enclosingClass.name} ]`;
            }
            if (treeNode.enclosingLibrary != null) {
                finalMsg += ` [ lib ${treeNode.enclosingLibrary.name} ]`;
            }
        }
        let stacktrace = new lib3.StaticGet(this._getProcedureInClassInLib(this._getDartCoreLibrary(program),'StackTrace','current'));
        let printStackTrace = new lib3.StaticInvocation(this._getProcedureInLib(this._getDartCoreLibrary(program),'print'),new lib3.Arguments(new core.DartList.literal(new lib3.StringConcatenation(new core.DartList.literal(new lib3.StringLiteral(finalMsg),new lib3.StringLiteral("\n"),stacktrace,new lib3.StringLiteral("\n"))))));
        return printStackTrace;
    }
}

export namespace _Pair {
    export type Constructors = '_Pair';
    export type Interface<K,V> = Omit<_Pair<K,V>, Constructors>;
}
@DartClass
export class _Pair<K,V> {
    key : K;

    value : V;

    constructor(key : K,value : V) {
    }
    @defaultConstructor
    _Pair(key : K,value : V) {
        this.key = key;
        this.value = value;
    }
}

export class properties {
}
