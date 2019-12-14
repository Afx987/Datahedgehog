/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/summary/fasta/summary_builder.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts/dart/uri";
import * as lib4 from "./expressions";
import * as lib5 from "./stack_listener";
import * as lib6 from "./model";
import * as lib7 from "./expression_serializer";

export var opForAssignOp : (kind : number) => number = (kind : number) : number =>  {
    switch (kind) {
        case AMPERSAND_EQ_TOKEN:
            return AMPERSAND_TOKEN;
        case BAR_EQ_TOKEN:
            return BAR_TOKEN;
        case CARET_EQ_TOKEN:
            return CARET_TOKEN;
        case GT_GT_EQ_TOKEN:
            return GT_GT_TOKEN;
        case LT_LT_EQ_TOKEN:
            return LT_LT_TOKEN;
        case MINUS_EQ_TOKEN:
            return MINUS_TOKEN;
        case PERCENT_EQ_TOKEN:
            return PERCENT_TOKEN;
        case PLUS_EQ_TOKEN:
            return PLUS_TOKEN;
        case QUESTION_QUESTION_EQ_TOKEN:
            return QUESTION_QUESTION_TOKEN;
        case SLASH_EQ_TOKEN:
            return SLASH_TOKEN;
        case STAR_EQ_TOKEN:
            return STAR_TOKEN;
        case TILDE_SLASH_EQ_TOKEN:
            return TILDE_SLASH_TOKEN;
        case PLUS_EQ_TOKEN:
            return PLUS_TOKEN;
        default:
            throw `Unhandled kind ${kind}`;
    }
};
export var summarize : (uri : lib3.Uri,contents : core.DartList<number>) => any = (uri : lib3.Uri,contents : core.DartList<number>) : any =>  {
    let listener = new SummaryBuilder(uri);
    let parser = new bare.createInstance(any,null,listener);
    parser.parseUnit(scan(contents).tokens);
    return listener.topScope.unit;
};
export namespace ExpressionListener {
    export type Constructors = lib5.StackListener.Constructors | 'ExpressionListener';
    export type Interface = Omit<ExpressionListener, Constructors>;
}
@DartClass
export class ExpressionListener extends lib5.StackListener {
    private static __$_invariantCheckToken;
    static get _invariantCheckToken() { 
        if (this.__$_invariantCheckToken===undefined) {
            this.__$_invariantCheckToken = "invariant check: starting a function";
        }
        return this.__$_invariantCheckToken;
    }

    _withinFunction : number;

    _withinCascades : number;

    get forConst() : boolean {
        return false;
    }
    get ignore() : boolean {
        return this._withinFunction > 0 || this._withinCascades > 0;
    }
    @AbstractProperty
    get parser() : any{ throw 'abstract'}
    beginCascade(token : any) : void {
        this._withinCascades++;
    }
    beginFunctionDeclaration(token : any) : void {
        this.debugEvent("BeginFunctionDeclaration");
        this._withinFunction++;
    }
    beginLiteralString(token : any) : void {
        this.debugEvent("beginLiteralString");
        if (this.ignore) return;
        this.push(new lib4.StringLiteral(token.lexeme));
    }
    beginUnnamedFunction(token : any) : void {
        this.debugEvent("BeginUnnamedFunction");
        let check = this.pop();
        /* TODO (AssertStatementImpl) : assert (check == _invariantCheckToken); */;
        this._withinFunction++;
    }
    computeExpression(token : any,scope : lib6.Scope) : any {
        this.debugStart(token);
        this.parser.parseExpression(token);
        this.debugEvent('---- END ---');
        let node : lib4.Expression = this.pop();
        this.checkEmpty();
        return new lib7.Serializer(scope,this.forConst).run(node);
    }
    debugEvent(name : string) : void {
        if (new boolean.fromEnvironment('CDEBUG',{
            defaultValue : false})) {
            let s = this.stack.join(' :: ');
            if (s == '') s = '<empty>';
            let bits = `${this._withinFunction},${this._withinCascades}`;
            let prefix = this.ignore ? `ignore ${name} on:` : `do ${name} on:`;
            prefix = `${prefix}${op(Op.TIMES," ",(30 - new core.DartString(prefix).length))}`;
            core.print(`${prefix} ${bits} ${s}`);
        }
    }
    debugStart(token : any) : void {
        this.debugEvent(`\n---- START: ${this.runtimeType} ---`);
        if (new boolean.fromEnvironment('CDEBUG',{
            defaultValue : false})) {
            this._printExpression(token);
        }
    }
    endCascade() : void {
        this._withinCascades--;
        throw new core.UnimplementedError();
    }
    endConstructorReference(start : any,periodBeforeName : any,endToken : any) : void {
        this.debugEvent(`ConstructorReference ${start} ${periodBeforeName}`);
        let ctorName : lib4.Ref = this.popIfNotNull(periodBeforeName);
        /* TODO (AssertStatementImpl) : assert (ctorName?.prefix == null); */;
        let typeArgs : core.DartList<lib4.TypeRef> = this.pop();
        let type : lib4.Ref = this.pop();
        this.push(new lib4.ConstructorName(new lib4.TypeRef(type,typeArgs),((t)=>(!!t)?t.name:null)(ctorName)));
    }
    endFormalParameter(thisKeyword : any,nameToken : any,kind : any,memberKind : any) : void {
        this.debugEvent("FormalParameter");
        /* TODO (AssertStatementImpl) : assert (ignore); */;
    }
    endFormalParameters(count : number,beginToken : any,endToken : any,kind : any) : void {
        this.debugEvent("FormalParameters");
        /* TODO (AssertStatementImpl) : assert (ignore); */;
    }
    endBlockFunctionBody(count : number,begin : any,end : any) : void {
        this.debugEvent("BlockFunctionBody");
        /* TODO (AssertStatementImpl) : assert (ignore); */;
    }
    endFunctionDeclaration(token : any) : void {
        this.debugEvent("FunctionDeclaration");
        this._withinFunction--;
        if (this.ignore) return;
        this._endFunction();
    }
    endFunctionName(beginToken : any,token : any) : void {
        this.debugEvent("FunctionName");
        /* TODO (AssertStatementImpl) : assert (ignore); */;
    }
    endLiteralMapEntry(colon : any,token : any) : void {
        this.debugEvent('MapEntry');
        if (this.ignore) return;
        let value = this.pop();
        let key = this.pop();
        this.push(new lib4.KeyValuePair(key,value));
    }
    endLiteralString(interpolationCount : number,endToken : any) : void {
        this.debugEvent("endLiteralString");
        if (interpolationCount != 0) {
            this.popList(2 * interpolationCount + 1);
            this.push(new lib4.StringLiteral(`<interpolate ${interpolationCount}>`));
        }
    }
    endLiteralSymbol(token : any,dots : number) : void {
        this.debugEvent('LiteralSymbol');
        if (this.ignore) return;
        this.push(new lib4.SymbolLiteral(this.popList(dots).join('.')));
    }
    endReturnStatement(hasValue : any,begin : any,end : any) : void {
        this.debugEvent("ReturnStatement");
        /* TODO (AssertStatementImpl) : assert (ignore); */;
    }
    endSend(beginToken : any,endToken : any) : void {
        this.debugEvent("EndSend");
        if (this.ignore) return;
        let args : core.DartList<lib4.Expression> = this.pop();
        if (args != null) {
            this.pop();
            let receiver = this.pop();
            if (is(receiver, lib4.Ref) && receiver.name == 'identical') {
                /* TODO (AssertStatementImpl) : assert (receiver.prefix == null); */;
                /* TODO (AssertStatementImpl) : assert (args.length == 2); */;
                this.push(new lib4.Identical(args[0],args[1]));
                return;
            }
            this._unhandledSend();
        }
    }
    endThrowExpression(throwToken : any,token : any) : void {
        this.debugEvent("Throw");
        /* TODO (AssertStatementImpl) : assert (ignore); */;
    }
    endTypeArguments(count : number,beginToken : any,endToken : any) : void {
        this.debugEvent("TypeArguments");
        if (this.ignore) return;
        this.push((this.popList(count) || new core.DartList.literal<lib4.TypeRef>()));
    }
    endTypeList(count : number) : void {
        this.debugEvent("TypeList");
        this.push((this.popList(count) || new core.DartList.literal<lib4.TypeRef>()));
    }
    endTypeVariable(token : any,extendsOrSuper : any) : void {
        this.debugEvent("endTypeVariable");
        /* TODO (AssertStatementImpl) : assert (ignore); */;
    }
    endTypeVariables(count : number,beginToken : any,endToken : any) : void {
        this.debugEvent("TypeVariables");
        /* TODO (AssertStatementImpl) : assert (ignore); */;
    }
    endUnnamedFunction(beginToken : any,token : any) : void {
        this.debugEvent("UnnamedFunction");
        this._withinFunction--;
        if (this.ignore) return;
        this._endFunction();
    }
    handleAsyncModifier(asyncToken : any,starToken : any) : void {
        this.debugEvent("AsyncModifier");
        /* TODO (AssertStatementImpl) : assert (ignore); */;
    }
    handleBinaryExpression(operator : any) : void {
        this.debugEvent("BinaryExpression");
        if (this.ignore) return;
        let right : lib4.Expression = this.pop();
        let left : lib4.Expression = this.pop();
        let kind = operator.kind;
        if (op(Op.EQUALS,kind,PERIOD_TOKEN)) {
            if (is(left, lib4.Ref) && is(right, lib4.Ref) && op(Op.EQUALS,right.prefix,null) && left.prefixDepth < 2) {
                this.push(new lib4.Ref(right.name,left));
                return;
            }
            if (is(right, lib4.Ref)) {
                this.push(new lib4.Load(left,right.name));
                return;
            }
        }
        this.push(new lib4.Binary(left,right,kind));
    }
    handleConditionalExpression(question : any,colon : any) : void {
        this.debugEvent("ConditionalExpression");
        if (this.ignore) return;
        let falseBranch = this.pop();
        let trueBranch = this.pop();
        let cond = this.pop();
        this.push(new lib4.Conditional(cond,trueBranch,falseBranch));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    endConstExpression(token : any) : void {
        this.debugEvent("ConstExpression");
        if (this.ignore) return;
        let args : core.DartList<any> = this.pop();
        let constructorName = this.pop();
        let positional = args.where((a : any) =>  {
            return isNot(a, lib4.NamedArg);
        }).toList();
        let named = args.where((a : any) =>  {
            return is(a, lib4.NamedArg);
        }).toList();
        this.push(new lib4.ConstCreation(constructorName,positional,named));
    }
    handleIdentifier(token : any,context : any) : void {
        this.debugEvent("Identifier");
        if (this.ignore) return;
        this.push(new lib4.Ref(token.lexeme));
    }
    handleIsOperator(operator : any,not : any,endToken : any) : void {
        this.debugEvent("Is");
        if (this.ignore) return;
        this.push(new lib4.Is(this.pop(),this.pop()));
    }
    handleLiteralBool(token : any) : void {
        this.debugEvent("LiteralBool");
        if (this.ignore) return;
        this.push(new lib4.BoolLiteral(op(Op.EQUALS,token.lexeme,'true')));
    }
    handleLiteralDouble(token : any) : void {
        this.debugEvent("LiteralDouble");
        if (this.ignore) return;
        this.push(new lib4.DoubleLiteral(core.DartDouble.parse(token.lexeme)));
    }
    handleLiteralInt(token : any) : void {
        this.debugEvent("LiteralInt");
        if (this.ignore) return;
        this.push(new lib4.IntLiteral(core.DartInt.parse(token.lexeme)));
    }
    handleLiteralList(count : any,begin : any,constKeyword : any,end : any) : void {
        this.debugEvent("LiteralList");
        if (this.ignore) return;
        let values = (this.popList(count) || new core.DartList.literal<lib4.Expression>());
        let typeArguments : core.DartList<lib4.TypeRef> = this.pop();
        let type = ((t)=>(!!t)?t.single:null)(typeArguments);
        this.push(new lib4.ListLiteral(type,values,constKeyword != null));
    }
    handleLiteralMap(count : any,begin : any,constKeyword : any,end : any) : void {
        this.debugEvent('LiteralMap');
        if (this.ignore) return;
        let values = (this.popList(count) || new core.DartList.literal<lib4.KeyValuePair>());
        let typeArgs = (this.pop() || new core.DartList.literal<lib4.TypeRef>());
        this.push(new lib4.MapLiteral(typeArgs,values,constKeyword != null));
    }
    handleLiteralNull(token : any) : void {
        this.debugEvent("LiteralNull");
        if (this.ignore) return;
        this.push(new lib4.NullLiteral());
    }
    handleModifier(token : any) : void {
        this.debugEvent("Modifier");
        /* TODO (AssertStatementImpl) : assert (ignore); */;
    }
    handleModifiers(count : number) : void {
        this.debugEvent("Modifiers");
        /* TODO (AssertStatementImpl) : assert (ignore); */;
    }
    handleNoArguments(token : any) : void {
        this.debugEvent("NoArguments");
        if (this.ignore) return;
        let typeArguments = this.pop();
        /* TODO (AssertStatementImpl) : assert (typeArguments == null); */;
        this.push(lib5.NullValue.Arguments);
    }
    handleNoFormalParameters(token : any,kind : any) : void {
        this.debugEvent("NoFormalParameters");
        /* TODO (AssertStatementImpl) : assert (ignore); */;
    }
    handleNoFunctionBody(token : any) : void {
        this.debugEvent("NoFunctionBody");
        /* TODO (AssertStatementImpl) : assert (ignore); */;
    }
    handleNoInitializer() : void {
    }
    handleNoInitializers() : void {
        this.debugEvent("NoInitializers");
        /* TODO (AssertStatementImpl) : assert (ignore); */;
    }
    handleNoType(token : any) : void {
        this.debugEvent("NoType");
        if (this.ignore) return;
        this.push(lib5.NullValue.Type);
    }
    handleNoTypeArguments(token : any) : void {
        this.debugEvent("NoTypeArguments");
        if (this.ignore) return;
        this.push(lib5.NullValue.TypeArguments);
    }
    handleNoTypeVariables(token : any) : void {
        this.debugEvent("NoTypeVariables");
        if (this.ignore) return;
        this.push(ExpressionListener._invariantCheckToken);
    }
    handleQualified(period : any) : void {
        this.debugEvent('Qualified');
        if (this.ignore) return;
        let name : lib4.Ref = this.pop();
        let prefix : lib4.Ref = this.pop();
        /* TODO (AssertStatementImpl) : assert (name.prefix == null); */;
        /* TODO (AssertStatementImpl) : assert (prefix.prefix == null); */;
        this.push(new lib4.Ref(name.name,prefix));
    }
    handleStringJuxtaposition(count : number) : void {
        this.debugEvent("StringJuxtaposition");
        if (this.ignore) return;
        this.popList(count);
        this.push(new lib4.StringLiteral(`<juxtapose ${count}>`));
    }
    handleStringPart(token : any) : void {
        this.debugEvent("handleStringPart");
        if (this.ignore) return;
        this.push(new lib4.StringLiteral(token.lexeme));
    }
    handleType(beginToken : any,endToken : any) : void {
        this.debugEvent("Type");
        if (this.ignore) return;
        let arguments : core.DartList<lib4.TypeRef> = this.pop();
        let name : lib4.Ref = this.pop();
        this.push(new lib4.TypeRef(name,arguments));
    }
    handleUnaryPrefixExpression(operator : any) : void {
        this.debugEvent("UnaryPrefix");
        if (this.ignore) return;
        this.push(new lib4.Unary(this.pop(),operator.kind));
    }
    handleVoidKeyword(token : any) : void {
        this.debugEvent("VoidKeyword");
        /* TODO (AssertStatementImpl) : assert (ignore); */;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    logEvent(e : any) : void {
        if (this.ignore) return;
        super.logEvent(e);
    }
    @Abstract
    push(o : core.DartObject) : void{ throw 'abstract'}
    @Abstract
    _endFunction() : void{ throw 'abstract'}
    _printExpression(token : any) : void {
        let current = token;
        let end = new bare.createInstance(any,null,this).skipExpression(current);
        let str = new core.DartStringBuffer();
        while (current != end){
            if (!new core.DartList.literal("(",",",")").contains(current.lexeme)) str.write(' ');
            str.write(current.lexeme);
            current = current.next;
        }
        core.print(`exp: ${str}`);
    }
    @Abstract
    _unhandledSend() : void{ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ExpressionListener() {
        this._withinFunction = 0;
        this._withinCascades = 0;
    }
}

export namespace SummaryBuilder {
    export type Constructors = lib5.StackListener.Constructors | 'SummaryBuilder';
    export type Interface = Omit<SummaryBuilder, Constructors>;
}
@DartClass
export class SummaryBuilder extends lib5.StackListener {
    private static __$parsed : number;
    static get parsed() : number { 
        if (this.__$parsed===undefined) {
            this.__$parsed = 0;
        }
        return this.__$parsed;
    }
    static set parsed(__$value : number)  { 
        this.__$parsed = __$value;
    }

    private static __$total : number;
    static get total() : number { 
        if (this.__$total===undefined) {
            this.__$total = 0;
        }
        return this.__$total;
    }
    static set total(__$value : number)  { 
        this.__$total = __$value;
    }

    isDartCoreImported : boolean;

    isCoreLibrary : boolean;

    topScope : lib6.TopScope;

    scope : lib6.Scope;

    constBuilder : ConstExpressionBuilder;

    initializerBuilder : InitializerBuilder;

    typeSeen : boolean;

    inConstContext : boolean;

    uri : lib3.Uri;

    _slots : number;

    _nextParamKind : any;

    constructor(uri : lib3.Uri) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    SummaryBuilder(uri : lib3.Uri) {
        this.isDartCoreImported = false;
        this.isCoreLibrary = false;
        this.typeSeen = false;
        this.inConstContext = false;
        this._slots = 0;
        this.uri = uri;
        this.constBuilder = new ConstExpressionBuilder(uri);
        this.initializerBuilder = new InitializerBuilder(uri);
    }
    get needInitializer() : boolean {
        return !this.typeSeen || this.inConstContext;
    }
    assignSlot() : number {
        return ++this._slots;
    }
    beginClassDeclaration(beginToken : any,name : any) : void {
        this.debugEvent("beginClass");
        let classScope = this.scope = new lib6.ClassScope(this.scope);
        classScope.className = name.lexeme;
    }
    beginCompilationUnit(token : any) : void {
        this.scope = this.topScope = new lib6.TopScope();
    }
    beginEnum(token : any) : void {
        this.debugEvent("beginEnum");
        this.scope = new lib6.EnumScope(this.scope);
    }
    beginFieldInitializer(token : any) {
        this.debugEvent("beginFieldInitializer");
        SummaryBuilder.total++;
        if (this.needInitializer) {
            SummaryBuilder.parsed++;
            if (this.inConstContext) {
                this.push(this.constBuilder.computeExpression(token.next,this.scope));
            }else {
                this.push(this.initializerBuilder.computeExpression(token.next,this.scope));
            }
        }
    }
    beginFormalParameters(token : any,kind : any) : void {
        this._nextParamKind = UnlinkedParamKind.required;
    }
    beginFunctionTypeAlias(token : any) : void {
        this.debugEvent('beginFunctionTypeAlias');
        this.scope = new lib6.TypeParameterScope(this.scope);
    }
    beginInitializer(token : any) {
    }
    beginLiteralString(token : any) : void {
        this.debugEvent("beginLiteralString");
        this.push(token.lexeme.substring(1,op(Op.MINUS,token.lexeme.length,1)));
    }
    beginMember(token : any) : void {
        this.typeSeen = false;
        this.inConstContext = false;
    }
    beginNamedMixinApplication(beginToken : any,name : any) : void {
        this.debugEvent('beginNamedMixinApplication');
        this.scope = new lib6.ClassScope(this.scope);
    }
    beginOptionalFormalParameters(begin : any) : void {
        this._nextParamKind = op(Op.EQUALS,begin,'{') ? UnlinkedParamKind.named : UnlinkedParamKind.positional;
    }
    beginTopLevelMember(token : any) : void {
        this.typeSeen = false;
        this.inConstContext = false;
    }
    debugEvent(name : string) : void {
        if (new boolean.fromEnvironment('DEBUG',{
            defaultValue : false})) {
            let s = this.stack.join(' :: ');
            if (s == '') s = '<empty>';
            let bits = `type?: ${this.typeSeen}, const?: ${this.inConstContext}`;
            let prefix = `do ${name} on:`;
            prefix = `${prefix}${op(Op.TIMES," ",(30 - new core.DartString(prefix).length))}`;
            core.print(`${prefix} ${bits} ${s}`);
        }
    }
    endClassBody(memberCount : number,beginToken : any,endToken : any) : void {
        this.debugEvent("ClassBody");
    }
    endClassDeclaration(interfacesCount : number,beginToken : any,classKeyword : any,extendsKeyword : any,implementsKeyword : any,endToken : any) : void {
        this.debugEvent("endClassDeclaration");
        let interfaces : core.DartList<any> = this.popList(interfacesCount);
        let supertype : any = this.pop();
        let typeVariables : core.DartList<any> = this.pop();
        let name : string = this.pop();
        let modifiers : number = this.pop();
        let metadata : core.DartList<any> = this.pop();
        this.checkEmpty();
        let s : lib6.ClassScope = this.scope;
        s.className = name;
        ((_) : any =>  {
            {
                _.name = name;
                _.isAbstract = modifiers & properties._abstract_flag != 0;
                _.annotations = metadata;
                _.typeParameters = typeVariables;
                _.interfaces = interfaces;
                return _;
            }
        })(s.currentClass);
        if (supertype != null) {
            s.currentClass.supertype = supertype;
        }else {
            s.currentClass.hasNoSupertype = this.isCoreLibrary && name == 'Object';
        }
        this.scope = this.scope.parent;
        this.topScope.unit.classes.add(s.currentClass);
        if (this._isPrivate(name)) return;
        ((_) : any =>  {
            {
                _.name = name;
                _.kind = ReferenceKind.classOrEnum;
                _.numTypeParameters = ((t)=>(!!t)?t.length:null)(typeVariables);
                return _;
            }
        })(s.publicName);
        this.topScope.publicNamespace.names.add(s.publicName);
    }
    endCombinators(count : number) : void {
        this.debugEvent("Combinators");
        this.push((this.popList(count) || lib5.NullValue.Combinators));
    }
    endCompilationUnit(count : number,token : any) : void {
        if (!this.isDartCoreImported) {
            this.topScope.unit.imports.add(new bare.createInstance(any,null,{
                isImplicit : true}));
        }
        this.topScope.expandLazyReferences();
        if (new boolean.fromEnvironment('SKIP_API')) return;
        let apiSignature = new bare.createInstance(any,null);
        this.topScope.unit.collectApiSignature(apiSignature);
        this.topScope.unit.apiSignature = apiSignature.toByteList();
    }
    endConditionalUri(ifKeyword : any,equalitySign : any) : void {
        let dottedName : string = this.pop();
        let value : string = this.pop();
        let uri : string = this.pop();
        uri = new core.DartString(uri).substring(1,new core.DartString(uri).length - 1);
        this.push(new bare.createInstance(any,null,{
            name : dottedName,value : value,uri : uri}));
    }
    endConditionalUris(count : number) : void {
        this.push((this.popList(count) || new core.DartList.literal<any>()));
    }
    endConstructorReference(start : any,periodBeforeName : any,endToken : any) : void {
        let ctorName = this.popIfNotNull(periodBeforeName);
        let typeArguments = this.pop();
        let className = this.pop();
        this.push(new core.DartList.literal('ctor-ref:',className,typeArguments,ctorName));
    }
    endDottedName(count : any,firstIdentifier : any) : void {
        this.push(this.popList(count).join('.'));
    }
    endEnum(enumKeyword : any,endBrace : any,count : number) : void {
        this.debugEvent("Enum");
        let constants : core.DartList<string> = this.popList(count);
        let name : string = this.pop();
        let metadata : core.DartList<any> = this.pop();
        this.checkEmpty();
        let s : lib6.EnumScope = this.scope;
        this.scope = s.parent;
        ((_) : any =>  {
            {
                _.name = name;
                _.annotations = metadata;
                return _;
            }
        })(s.currentEnum);
        s.top.unit.enums.add(s.currentEnum);
        let e = new bare.createInstance(any,null,{
            name : name,kind : ReferenceKind.classOrEnum,numTypeParameters : 0});
        for(let s of constants) {
            e.members.add(new bare.createInstance(any,null,{
                name : s,kind : ReferenceKind.propertyAccessor,numTypeParameters : 0}));
        }
        this.topScope.publicNamespace.names.add(e);
    }
    endExport(exportKeyword : any,semicolon : any) : void {
        this.debugEvent("Export");
        let combinators : core.DartList<any> = this.pop();
        let conditionalUris : core.DartList<any> = this.pop();
        let uri : string = this.pop();
        let metadata : core.DartList<any> = this.pop();
        this.topScope.unit.exports.add(new bare.createInstance(any,null,{
            annotations : metadata}));
        this.topScope.publicNamespace.exports.add(new bare.createInstance(any,null,{
            uri : uri,combinators : combinators,configurations : conditionalUris}));
        this.checkEmpty();
    }
    endFactoryMethod(beginToken : any,factoryKeyword : any,endToken : any) : void {
        this.debugEvent("FactoryMethod");
        throw new core.UnimplementedError();
    }
    endFieldInitializer(assignmentOperator : any,token : any) : void {
        this.debugEvent(`FieldInitializer ${this.typeSeen} ${assignmentOperator}`);
        let initializer = this.needInitializer && assignmentOperator != null ? this.pop() : null;
        let name = this.pop();
        this.push(new _InitializedName(name,new bare.createInstance(any,null,{
            bodyExpr : initializer})));
    }
    endFields(count : number,beginToken : any,endToken : any) : void {
        this.debugEvent("Fields");
        let s = this.scope;
        if (is(s, lib6.ClassScope)) {
            this._endFields(count,s.currentClass.fields,false);
        }else {
            throw new core.UnimplementedError();
        }
    }
    endFormalParameter(thisKeyword : any,nameToken : any,kind : any,memberKind : any) : void {
        this.debugEvent("FormalParameter");
        let nameOrFormal = this.pop();
        if (is(nameOrFormal, "string")) {
            let type : any = this.pop();
            this.pop();
            let metadata : core.DartList<any> = this.pop();
            this.push(new bare.createInstance(any,null,{
                name : nameOrFormal,kind : this._nextParamKind,inheritsCovariantSlot : this.slotIf(op(Op.EQUALS,type,null)),annotations : metadata,isInitializingFormal : thisKeyword != null,type : type}));
        }else {
            this.push(nameOrFormal);
        }
    }
    endFormalParameters(count : number,beginToken : any,endToken : any,kind : any) : void {
        this.debugEvent("FormalParameters");
        let formals : core.DartList<any> = this.popList(count);
        if (formals != null && formals.isNotEmpty) {
            let last = formals.last;
            if (is(last, core.DartList<any>)) {
                let newList = new core.DartList<any>(formals.length - 1 + last.length);
                newList.setRange(0,formals.length - 1,formals);
                newList.setRange(formals.length - 1,newList.length,last);
                for(let i : number = 0; i < last.length; i++){
                    newList[i + formals.length - 1] = last[i];
                }
                formals = newList;
            }
        }
        this.push((formals || lib5.NullValue.FormalParameters));
    }
    endFunctionTypeAlias(typedefKeyword : any,equals : any,endToken : any) : void {
        this.debugEvent("endFunctionTypeAlias");
        let formals : core.DartList<any> = this.pop();
        let typeVariables : core.DartList<any> = this.pop();
        let name : string = this.pop();
        let returnType : any = this.pop();
        let metadata : core.DartList<any> = this.pop();
        this.checkEmpty();
        this.scope = this.scope.parent;
        this.topScope.unit.typedefs.add(new bare.createInstance(any,null,{
            name : name,typeParameters : typeVariables,returnType : returnType,parameters : formals,annotations : metadata}));
        this._addNameIfPublic(name,ReferenceKind.typedef,typeVariables.length);
    }
    endFunctionTypedFormalParameter(thisKeyword : any,kind : any) : void {
        this.debugEvent("FunctionTypedFormalParameter");
        let formals : core.DartList<any> = this.pop();
        if (formals != null) formals.forEach((p : any) =>  {
            return p.inheritsCovariantSlot = null;
        });
        this.pop();
        let name : string = this.pop();
        let returnType : any = this.pop();
        this.pop();
        let metadata : core.DartList<any> = this.pop();
        this.push(new bare.createInstance(any,null,{
            name : name,kind : this._nextParamKind,isFunctionTyped : true,parameters : formals,annotations : metadata,type : returnType}));
    }
    endHide(_ : any) : void {
        this.push(new bare.createInstance(any,null,{
            hides : this.pop()}));
    }
    endIdentifierList(count : number) : void {
        this.debugEvent("endIdentifierList");
        this.push((this.popList(count) || lib5.NullValue.IdentifierList));
    }
    endImport(importKeyword : any,deferredKeyword : any,asKeyword : any,semicolon : any) : void {
        this.debugEvent("endImport");
        let combinators : core.DartList<any> = this.pop();
        let prefix : string = this.popIfNotNull(asKeyword);
        let prefixIndex : number = prefix == null ? null : this.topScope.serializeReference(null,prefix);
        let conditionalUris : core.DartList<any> = this.pop();
        let uri : string = this.pop();
        let metadata : core.DartList<any> = this.pop();
        this.topScope.unit.imports.add(new bare.createInstance(any,null,{
            uri : uri,prefixReference : prefixIndex,combinators : combinators,configurations : conditionalUris,isDeferred : deferredKeyword != null,annotations : metadata}));
        if (uri == 'dart:core') this.isDartCoreImported = true;
        this.checkEmpty();
    }
    endInitializer(assignmentOperator : any) : void {
        this.debugEvent(`Initializer ${this.typeSeen} ${assignmentOperator}`);
    }
    endInitializers(count : number,beginToken : any,endToken : any) : void {
        this.debugEvent("Initializers");
    }
    endLibraryName(libraryKeyword : any,semicolon : any) : void {
        this.debugEvent("endLibraryName");
        let name : string = this.pop();
        let metadata : core.DartList<any> = this.pop();
        this.topScope.unit.libraryName = name;
        this.topScope.unit.libraryAnnotations = metadata;
        if (name == 'dart.core') this.isCoreLibrary = true;
    }
    endLiteralString(interpolationCount : number,endToken : any) : void {
        /* TODO (AssertStatementImpl) : assert (interpolationCount == 0); */;
    }
    endMember() : void {
        this.debugEvent("Member");
    }
    endMetadata(beginToken : any,periodBeforeName : any,endToken : any) : void {
        this.debugEvent("Metadata");
        let arguments : core.DartList<any> = this.pop();
        let result = new bare.createInstance(any,null);
        if (arguments == null) {
            this.popIfNotNull(periodBeforeName);
            this.pop();
        }else {
            this.popIfNotNull(periodBeforeName);
            this.pop();
        }
        this.push(result);
    }
    endMetadataStar(count : number,forParameter : boolean) : void {
        this.debugEvent("MetadataStar");
        this.push((this.popList(count) || lib5.NullValue.Metadata));
    }
    endMethod(getOrSet : any,beginToken : any,endToken : any) : void {
        this.debugEvent("Method");
        let asyncModifier : number = this.pop();
        let formals : core.DartList<any> = this.pop();
        let typeVariables : core.DartList<any> = this.pop();
        let name : string = this.pop();
        let returnType : any = this.pop();
        let modifiers : number = this.pop();
        let metadata : core.DartList<any> = this.pop();
        let s : lib6.ClassScope = this.scope;
        let isStatic : boolean = modifiers & properties._static_flag != 0;
        let isConst : boolean = modifiers & properties._const_flag != 0;
        let isGetter : boolean = op(Op.EQUALS,getOrSet,'get');
        let isSetter : boolean = op(Op.EQUALS,getOrSet,'set');
        let isOperator : boolean = name == "operator";
        let isConstructor : boolean = name == s.className || new core.DartString(name).startsWith(`${s.className}.`);
        if (isConstructor) {
            name = name == s.className ? '' : new core.DartString(name).substring(new core.DartString(name).indexOf('.') + 1);
        }
        name = isSetter ? `${name}=` : name;
        s.currentClass.executables.add(new bare.createInstance(any,null,{
            name : name,kind : isGetter ? UnlinkedExecutableKind.getter : (isSetter ? UnlinkedExecutableKind.setter : (isConstructor ? UnlinkedExecutableKind.constructor : UnlinkedExecutableKind.functionOrMethod)),isExternal : modifiers & properties._external_flag != 0,isAbstract : modifiers & properties._abstract_flag != 0,isAsynchronous : asyncModifier & properties._async_flag != 0,isGenerator : asyncModifier & properties._star_flag != 0,isStatic : isStatic,isConst : isConst,constCycleSlot : this.slotIf(isConst),typeParameters : typeVariables,returnType : returnType,parameters : formals,annotations : metadata,inferredReturnTypeSlot : this.slotIf(op(Op.EQUALS,returnType,null) && !isStatic && !isConstructor)}));
        if (isConstructor && name == '') return;
        if (this._isPrivate(name)) return;
        if (isSetter || isOperator) return;
        if (!isStatic && !isConstructor) return;
        s.publicName.members.add(new bare.createInstance(any,null,{
            name : name,kind : isGetter ? ReferenceKind.propertyAccessor : (isConstructor ? ReferenceKind.constructor : ReferenceKind.method),numTypeParameters : typeVariables.length}));
    }
    endMixinApplication(withKeyword : any) : void {
        this.debugEvent("MixinApplication");
        let s : lib6.ClassScope = this.scope;
        s.currentClass.mixins = this.pop();
    }
    endNamedMixinApplication(begin : any,classKeyword : any,equals : any,implementsKeyword : any,endToken : any) : void {
        this.debugEvent("endNamedMixinApplication");
        let interfaces : core.DartList<any> = this.popIfNotNull(implementsKeyword);
        let supertype : any = this.pop();
        let typeVariables : core.DartList<any> = this.pop();
        let name : string = this.pop();
        let modifiers : number = this.pop();
        let metadata : core.DartList<any> = this.pop();
        this.checkEmpty();
        let s : lib6.ClassScope = this.scope;
        ((_) : any =>  {
            {
                _.name = name;
                _.isAbstract = modifiers & properties._abstract_flag != 0;
                _.isMixinApplication = true;
                _.annotations = metadata;
                _.typeParameters = typeVariables;
                _.interfaces = interfaces;
                return _;
            }
        })(s.currentClass);
        if (supertype != null) {
            s.currentClass.supertype = supertype;
        }else {
            s.currentClass.hasNoSupertype = this.isCoreLibrary && name == 'Object';
        }
        this.scope = this.scope.parent;
        this.topScope.unit.classes.add(s.currentClass);
        this._addNameIfPublic(name,ReferenceKind.classOrEnum,typeVariables.length);
    }
    endOptionalFormalParameters(count : number,beginToken : any,endToken : any) : void {
        this.debugEvent("OptionalFormalParameters");
        this.push(this.popList(count));
    }
    endPart(partKeyword : any,semicolon : any) : void {
        this.debugEvent("Part");
        let uri : string = this.pop();
        let metadata : core.DartList<any> = this.pop();
        this.topScope.unit.parts.add(new bare.createInstance(any,null,{
            annotations : metadata}));
        this.topScope.publicNamespace.parts.add(uri);
        this.checkEmpty();
    }
    endPartOf(partKeyword : any,semicolon : any,hasName : boolean) : void {
        this.debugEvent("endPartOf");
        let name : string = this.pop();
        this.pop();
        this.topScope.unit.isPartOf = true;
        if (name == 'dart.core') this.isCoreLibrary = true;
    }
    endRedirectingFactoryBody(beginToken : any,endToken : any) : void {
        this.debugEvent("RedirectingFactoryBody");
        this.pop();
    }
    endShow(_ : any) : void {
        this.push(new bare.createInstance(any,null,{
            shows : this.pop()}));
    }
    endTopLevelFields(count : number,beginToken : any,endToken : any) : void {
        this.debugEvent("endTopLevelFields");
        this._endFields(count,this.topScope.unit.variables,true);
        this.checkEmpty();
    }
    endTopLevelMethod(beginToken : any,getOrSet : any,endToken : any) : void {
        this.debugEvent("endTopLevelMethod");
        let asyncModifier : number = this.pop();
        let formals : core.DartList<any> = this.pop();
        let typeVariables : core.DartList<any> = this.pop();
        let name : string = this.pop();
        let returnType : any = this.pop();
        let modifiers : number = this.pop();
        let metadata : core.DartList<any> = this.pop();
        this.checkEmpty();
        this.topScope.unit.executables.add(new bare.createInstance(any,null,{
            name : op(Op.EQUALS,getOrSet,'set') ? `${name}=` : name,kind : op(Op.EQUALS,getOrSet,'get') ? UnlinkedExecutableKind.getter : (op(Op.EQUALS,getOrSet,'set') ? UnlinkedExecutableKind.setter : UnlinkedExecutableKind.functionOrMethod),isExternal : modifiers & properties._external_flag != 0,isAbstract : modifiers & properties._abstract_flag != 0,isAsynchronous : asyncModifier & properties._async_flag != 0,isGenerator : asyncModifier & properties._star_flag != 0,isStatic : modifiers & properties._static_flag != 0,typeParameters : new core.DartList.literal(),returnType : returnType,parameters : formals,annotations : metadata,inferredReturnTypeSlot : null}));
        let normalizedName : string = op(Op.EQUALS,getOrSet,'set') ? `${name}=` : name;
        this._addNameIfPublic(normalizedName,getOrSet != null ? ReferenceKind.topLevelPropertyAccessor : ReferenceKind.topLevelFunction,(((t)=>(!!t)?t.length:null)(typeVariables) || 0));
    }
    endTypeArguments(count : number,beginToken : any,endToken : any) : void {
        this.debugEvent("TypeArguments");
        this.push((this.popList(count) || new core.DartList.literal()));
    }
    endTypeList(count : number) : void {
        this.debugEvent("TypeList");
        this.push((this.popList(count) || lib5.NullValue.TypeList));
    }
    endTypeVariable(token : any,extendsOrSuper : any) : void {
        this.debugEvent("endTypeVariable");
        let bound : any = this.pop();
        let name : string = this.pop();
        let s = this.scope;
        if (is(s, lib6.TypeParameterScope)) {
            s.typeParameters.add(name);
        }else {
            throw new core.UnimplementedError();
        }
        this.push(new bare.createInstance(any,null,{
            name : name,bound : bound}));
    }
    endTypeVariables(count : number,beginToken : any,endToken : any) : void {
        this.debugEvent("TypeVariables");
        this.push((this.popList(count) || new core.DartList.literal()));
    }
    handleAsyncModifier(asyncToken : any,starToken : any) : void {
        this.debugEvent("AsyncModifier");
        let asyncModifier : number = 0;
        if (op(Op.EQUALS,asyncToken,"async")) asyncModifier |= properties._async_flag;
        if (op(Op.EQUALS,asyncToken,"sync")) asyncModifier |= properties._sync_flag;
        if (starToken != null) asyncModifier |= properties._star_flag;
        this.push(asyncModifier);
    }
    handleFormalParameterWithoutValue(token : any) : void {
        this.debugEvent("FormalParameterWithoutValue");
    }
    handleModifier(token : any) : void {
        this.debugEvent("Modifier");
        let modifier = op(Op.INDEX,properties._modifierFlag,token.stringValue);
        if (op(Op.BITAND,modifier,properties._const_flag) != 0) this.inConstContext = true;
        this.push(modifier);
    }
    handleModifiers(count : number) : void {
        this.debugEvent("Modifiers");
        this.push(((this.popList(count) || new core.DartList.literal())).fold(0,(a : any,b : any) =>  {
            return op(Op.BITOR,a,b);
        }));
    }
    handleNoConstructorReferenceContinuationAfterTypeArguments(token : any) : void {
        this.debugEvent("NoConstructorReferenceContinuationAfterTypeArguments");
    }
    handleNoFieldInitializer(token : any) : void {
        this.debugEvent("NoFieldInitializer");
        this.push(new _InitializedName(this.pop(),null));
    }
    handleNoFunctionBody(token : any) : void {
        this.debugEvent("NoFunctionBody");
    }
    handleNoInitializers() : void {
        this.debugEvent("NoInitializers");
    }
    handleNoTypeVariables(token : any) : void {
        this.debugEvent("NoTypeVariables");
        this.push(new core.DartList.literal());
    }
    handleOperatorName(operatorKeyword : any,token : any) : void {
        this.debugEvent("OperatorName");
        this.push(operatorKeyword.lexeme);
    }
    handleQualified(period : any) : void {
        this.debugEvent("handleQualified");
        let name : string = this.pop();
        let receiver : string = this.pop();
        this.push(`${receiver}.${name}`);
    }
    handleStringPart(token : any) : void {
        this.debugEvent("handleStringPart");
        this.push(token.lexeme.substring(1,op(Op.MINUS,token.lexeme.length,1)));
    }
    handleType(beginToken : any,endToken : any) : void {
        this.debugEvent("Type");
        let arguments : core.DartList<any> = this.pop();
        let name : string = this.pop();
        let type;
        if (new core.DartString(name).contains('.')) {
            let parts = new core.DartString(name).split('.');
            for(let p of parts) {
                type = op(Op.EQUALS,type,null) ? new lib6.LazyEntityRef(p,this.scope) : new lib6.NestedLazyEntityRef(type,p,this.scope);
            }
        }else {
            type = new lib6.LazyEntityRef(name,this.scope);
        }
        type.typeArguments = arguments;
        this.push(type);
        this.typeSeen = true;
    }
    handleValuedFormalParameter(equals : any,token : any) : void {
        this.debugEvent("ValuedFormalParameter");
    }
    handleVoidKeyword(token : any) : void {
        this.debugEvent("VoidKeyword");
        this.push(new lib6.LazyEntityRef("void",this.scope.top));
    }
    slotIf(condition : boolean) : number {
        return condition ? this.assignSlot() : 0;
    }
    _addName(name : string,kind : any,_namedArguments? : {numTypeParameters? : number}) : void {
        let {numTypeParameters} = Object.assign({
            "numTypeParameters" : 0}, _namedArguments );
        this.topScope.publicNamespace.names.add(new bare.createInstance(any,null,{
            name : name,kind : kind,numTypeParameters : numTypeParameters}));
    }
    _addNameIfPublic(name : string,kind : any,numTypeParameters : number) : void {
        if (this._isPrivate(name)) return null;
        this._addName(name,kind,{
            numTypeParameters : numTypeParameters});
    }
    _addPropertyName(name : string,_namedArguments? : {includeSetter? : boolean}) : void {
        let {includeSetter} = Object.assign({
            "includeSetter" : false}, _namedArguments );
        this._addName(name,ReferenceKind.topLevelPropertyAccessor);
        if (includeSetter) {
            this._addName(`${name}=`,ReferenceKind.topLevelPropertyAccessor);
        }
    }
    _endFields(count : number,result : core.DartList<any>,isTopLevel : boolean) : void {
        this.debugEvent(`EndFields: ${count} ${isTopLevel}`);
        let fields : core.DartList<_InitializedName> = this.popList(count);
        let type : any = this.pop();
        let modifiers : number = this.pop();
        let metadata : core.DartList<any> = this.pop();
        let isStatic : boolean = modifiers & properties._static_flag != 0;
        let isFinal : boolean = modifiers & properties._final_flag != 0;
        let isConst : boolean = modifiers & properties._const_flag != 0;
        let isInstance : boolean = !isStatic && !isTopLevel;
        for(let field of fields) {
            let name = field.name;
            let initializer = field.initializer;
            let needsPropagatedType : boolean = initializer != null && (isFinal || isConst);
            let needsInferredType : boolean = op(Op.EQUALS,type,null) && (initializer != null || isInstance);
            result.add(new bare.createInstance(any,null,{
                isFinal : isFinal,isConst : isConst,isStatic : isStatic,name : name,type : type,annotations : metadata,initializer : initializer,propagatedTypeSlot : this.slotIf(needsPropagatedType),inferredTypeSlot : this.slotIf(needsInferredType)}));
            if (this._isPrivate(name)) continue;
            if (isTopLevel) {
                this._addPropertyName(name,{
                    includeSetter : !isFinal && !isConst});
            }else if (isStatic) {
                (this.scope as lib6.ClassScope).publicName.members.add(new bare.createInstance(any,null,{
                    name : name,kind : ReferenceKind.propertyAccessor,numTypeParameters : 0}));
            }
        }
    }
    _isPrivate(name : string) : boolean {
        return new core.DartString(name).startsWith('_');
    }
}

export namespace _InitializedName {
    export type Constructors = '_InitializedName';
    export type Interface = Omit<_InitializedName, Constructors>;
}
@DartClass
export class _InitializedName {
    name : string;

    initializer : any;

    constructor(name : string,initializer : any) {
    }
    @defaultConstructor
    _InitializedName(name : string,initializer : any) {
        this.name = name;
        this.initializer = initializer;
    }
    toString() {
        return "II:" + (this.initializer != null ? `${this.name} = ${this.initializer}` : this.name);
    }
}

export namespace ConstExpressionBuilder {
    export type Constructors = ExpressionListener.Constructors | 'ConstExpressionBuilder';
    export type Interface = Omit<ConstExpressionBuilder, Constructors>;
}
@DartClass
export class ConstExpressionBuilder extends ExpressionListener {
    uri : lib3.Uri;

    parser : any;

    constructor(uri : lib3.Uri) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ConstExpressionBuilder(uri : lib3.Uri) {
        this.uri = uri;
        this.parser = new bare.createInstance(any,null,this);
    }
    get forConst() : boolean {
        return true;
    }
    endArguments(count : number,begin : any,end : any) : void {
        this.debugEvent("Arguments");
        if (this.ignore) return;
        this.push((this.popList(count) || new core.DartList.literal()));
    }
    handleAsOperator(op : any,next : any) : void {
        this.debugEvent("As");
        if (this.ignore) return;
        this.push(new lib4.As(this.pop(),this.pop()));
    }
    handleAssignmentExpression(operator : any) : void {
        this.pop();
        this.pop();
        this.push(new lib4.Invalid({
            hint : "assign"}));
    }
    handleIndexedExpression(openSquareBracket : any,token : any) : void {
        this.debugEvent("Index");
        if (this.ignore) return;
        this.pop();
        this.pop();
        this.push(new lib4.Invalid({
            hint : "index"}));
    }
    handleNamedArgument(colon : any) : void {
        this.debugEvent("NamedArg");
        if (this.ignore) return;
        let value = this.pop();
        let name : lib4.Ref = this.pop();
        this.push(new lib4.NamedArg(name.name,value));
    }
    endNewExpression(token : any) : void {
        this.debugEvent("NewExpression");
        if (this.ignore) return;
        this.pop();
        this.pop();
        this.push(new lib4.Invalid({
            hint : "new"}));
    }
    handleNoConstructorReferenceContinuationAfterTypeArguments(token : any) : void {
        this.debugEvent("NoConstructorReferenceContinuationAfterTypeArguments");
    }
    handleUnaryPostfixAssignmentExpression(operator : any) : void {
        this.pop();
        this.push(new lib4.Invalid({
            hint : "postfixOp"}));
    }
    handleUnaryPrefixAssignmentExpression(operator : any) : void {
        this.pop();
        this.push(new lib4.Invalid({
            hint : "prefixOp"}));
    }
    _endFunction() : void {
        /* TODO (AssertStatementImpl) : assert (_withinFunction >= 0); */;
        this.push(new lib4.Invalid({
            hint : 'function'}));
    }
    _unhandledSend() : void {
        this.push(new lib4.Invalid({
            hint : "call"}));
    }
}

export namespace InitializerBuilder {
    export type Constructors = ExpressionListener.Constructors | 'InitializerBuilder';
    export type Interface = Omit<InitializerBuilder, Constructors>;
}
@DartClass
export class InitializerBuilder extends ExpressionListener {
    uri : lib3.Uri;

    parser : any;

    _inArguments : number;

    constructor(uri : lib3.Uri) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    InitializerBuilder(uri : lib3.Uri) {
        this._inArguments = 0;
        this.uri = uri;
        this.parser = new bare.createInstance(any,null,this);
    }
    get ignore() : boolean {
        return super.ignore || this._inArguments > 0;
    }
    beginArguments(token : any) : void {
    }
    endArguments(count : number,begin : any,end : any) : void {
        this.debugEvent("Arguments");
        if (this.ignore) return;
        this.push((this.popList(count) || new core.DartList.literal()));
    }
    handleAsOperator(op : any,next : any) : void {
        this.debugEvent("As");
        if (this.ignore) return;
        let type : lib4.TypeRef = this.pop();
        this.pop();
        this.push(new lib4.Opaque({
            type : type}));
    }
    handleAssignmentExpression(operator : any) : void {
        this.debugEvent("Assign");
        if (this.ignore) return;
        let left = this.pop();
        let right = this.pop();
        let kind = operator.kind;
        if (op(Op.EQUALS,kind,EQ_TOKEN)) {
            this.push(new lib4.OpaqueOp(right));
        }else {
            this.push(new lib4.OpaqueOp(new lib4.Binary(left,right,opForAssignOp(kind))));
        }
    }
    handleIndexedExpression(openSquareBracket : any,token : any) : void {
        this.debugEvent("Index");
        if (this.ignore) return;
        this.pop();
        this.pop();
        this.push(new lib4.Opaque());
    }
    handleIsOperator(operator : any,not : any,endToken : any) : void {
        this.debugEvent("Is");
        if (this.ignore) return;
        throw new core.UnimplementedError();
    }
    handleNamedArgument(colon : any) : void {
        this.debugEvent("NamedArg");
        if (this.ignore) return;
        this.pop();
        this.pop();
        this.push(lib5.NullValue.Arguments);
    }
    endNewExpression(token : any) : void {
        this.debugEvent("NewExpression");
        if (this.ignore) return;
        this.pop();
        this.pop();
        throw new core.UnimplementedError();
    }
    handleNoConstructorReferenceContinuationAfterTypeArguments(token : any) : void {
        this.debugEvent("NoConstructorReferenceContinuationAfterTypeArguments");
    }
    handleUnaryPostfixAssignmentExpression(operator : any) : void {
        this.debugEvent("PostFix");
        if (this.ignore) return;
        this.push(new lib4.OpaqueOp(this.pop()));
    }
    handleUnaryPrefixAssignmentExpression(operator : any) : void {
        this.debugEvent("Prefix");
        if (this.ignore) return;
        let kind = op(Op.EQUALS,operator.kind,PLUS_PLUS_TOKEN) ? PLUS_TOKEN : MINUS_TOKEN;
        this.push(new lib4.OpaqueOp(new lib4.Binary(this.pop(),new lib4.IntLiteral(1),kind)));
    }
    _endFunction() : void {
        this.push(new lib4.Opaque({
            hint : "function"}));
    }
    _unhandledSend() : void {
        this.push(new lib4.Opaque({
            hint : "call"}));
    }
}

export class properties {
    private static __$_abstract_flag;
    static get _abstract_flag() { 
        if (this.__$_abstract_flag===undefined) {
            this.__$_abstract_flag = 1 << 2;
        }
        return this.__$_abstract_flag;
    }
    static set _abstract_flag(__$value : any)  { 
        this.__$_abstract_flag = __$value;
    }

    private static __$_async_flag;
    static get _async_flag() { 
        if (this.__$_async_flag===undefined) {
            this.__$_async_flag = 1;
        }
        return this.__$_async_flag;
    }
    static set _async_flag(__$value : any)  { 
        this.__$_async_flag = __$value;
    }

    private static __$_const_flag;
    static get _const_flag() { 
        if (this.__$_const_flag===undefined) {
            this.__$_const_flag = 1 << 1;
        }
        return this.__$_const_flag;
    }
    static set _const_flag(__$value : any)  { 
        this.__$_const_flag = __$value;
    }

    private static __$_external_flag;
    static get _external_flag() { 
        if (this.__$_external_flag===undefined) {
            this.__$_external_flag = 1 << 4;
        }
        return this.__$_external_flag;
    }
    static set _external_flag(__$value : any)  { 
        this.__$_external_flag = __$value;
    }

    private static __$_final_flag;
    static get _final_flag() { 
        if (this.__$_final_flag===undefined) {
            this.__$_final_flag = 1;
        }
        return this.__$_final_flag;
    }
    static set _final_flag(__$value : any)  { 
        this.__$_final_flag = __$value;
    }

    private static __$_modifierFlag;
    static get _modifierFlag() { 
        if (this.__$_modifierFlag===undefined) {
            this.__$_modifierFlag = new core.DartMap.literal([
                ['const',properties._const_flag],
                ['abstract',properties._abstract_flag],
                ['static',properties._static_flag],
                ['external',properties._external_flag],
                ['final',properties._final_flag],
                ['var',properties._var_flag]]);
        }
        return this.__$_modifierFlag;
    }
    static set _modifierFlag(__$value : any)  { 
        this.__$_modifierFlag = __$value;
    }

    private static __$_star_flag;
    static get _star_flag() { 
        if (this.__$_star_flag===undefined) {
            this.__$_star_flag = 1 << 2;
        }
        return this.__$_star_flag;
    }
    static set _star_flag(__$value : any)  { 
        this.__$_star_flag = __$value;
    }

    private static __$_static_flag;
    static get _static_flag() { 
        if (this.__$_static_flag===undefined) {
            this.__$_static_flag = 1 << 3;
        }
        return this.__$_static_flag;
    }
    static set _static_flag(__$value : any)  { 
        this.__$_static_flag = __$value;
    }

    private static __$_sync_flag;
    static get _sync_flag() { 
        if (this.__$_sync_flag===undefined) {
            this.__$_sync_flag = 1 << 1;
        }
        return this.__$_sync_flag;
    }
    static set _sync_flag(__$value : any)  { 
        this.__$_sync_flag = __$value;
    }

    private static __$_var_flag;
    static get _var_flag() { 
        if (this.__$_var_flag===undefined) {
            this.__$_var_flag = 0;
        }
        return this.__$_var_flag;
    }
    static set _var_flag(__$value : any)  { 
        this.__$_var_flag = __$value;
    }

}
