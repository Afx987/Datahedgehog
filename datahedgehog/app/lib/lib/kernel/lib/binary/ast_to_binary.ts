/** Library asset:datahedgehog_monitor/lib/lib/kernel/lib/binary/ast_to_binary.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../visitor";
import * as lib4 from "./../ast";
import * as lib5 from "./tag";
import * as lib6 from "./../canonical_name";
import * as convert from "@dart2ts/dart/convert";
import * as collection from "@dart2ts/dart/core";
import * as lib9 from "./../import_table";
import * as typed_data from "@dart2ts/dart/typed_data";

export namespace BinaryPrinter {
    export type Constructors = lib3.Visitor.Constructors | 'BinaryPrinter';
    export type Interface = Omit<BinaryPrinter, Constructors>;
}
@DartClass
export class BinaryPrinter extends lib3.Visitor<any> {
    _variableIndexer : VariableIndexer;

    _labelIndexer : LabelIndexer;

    _switchCaseIndexer : SwitchCaseIndexer;

    _typeParameterIndexer : TypeParameterIndexer;

    _stringIndexer : StringIndexer;

    _sourceUriIndexer : StringIndexer;

    _libraryDependencyIndex : core.DartMap<lib4.LibraryDependency,number>;

    _sink : BufferedSink;

    constructor(sink : core.DartSink<core.DartList<number>>) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    BinaryPrinter(sink : core.DartSink<core.DartList<number>>) {
        this._typeParameterIndexer = new TypeParameterIndexer();
        this._stringIndexer = new StringIndexer();
        this._sourceUriIndexer = new StringIndexer();
        this._libraryDependencyIndex = new core.DartMap.literal([
        ]);
        this.insideExternalLibrary = false;
        this._sink = new BufferedSink(sink);
    }
    _flush() : void {
        this._sink.flushAndDestroy();
    }
    writeByte(byte : number) : void {
        this._sink.addByte(byte);
    }
    writeBytes(bytes : core.DartList<number>) : void {
        this._sink.addBytes(bytes);
    }
    writeUInt30(value : number) : void {
        /* TODO (AssertStatementImpl) : assert (value >= 0 && value >> 30 == 0); */;
        if (value < 128) {
            this.writeByte(value);
        }else if (value < 16384) {
            this.writeByte((value >> 8) | 128);
            this.writeByte(value & 255);
        }else {
            this.writeByte((value >> 24) | 192);
            this.writeByte((value >> 16) & 255);
            this.writeByte((value >> 8) & 255);
            this.writeByte(value & 255);
        }
    }
    writeMagicWord(value : number) : void {
        this.writeByte((value >> 24) & 255);
        this.writeByte((value >> 16) & 255);
        this.writeByte((value >> 8) & 255);
        this.writeByte(value & 255);
    }
    writeUtf8Bytes(utf8Bytes : core.DartList<number>) : void {
        this.writeUInt30(utf8Bytes.length);
        this.writeBytes(utf8Bytes);
    }
    writeStringTable(indexer : StringIndexer) : void {
        this.writeUInt30(indexer.numberOfStrings);
        let endOffset : number = 0;
        for(let entry of indexer.entries) {
            endOffset += entry.utf8Bytes.length;
            this.writeUInt30(endOffset);
        }
        for(let entry of indexer.entries) {
            this.writeBytes(entry.utf8Bytes);
        }
    }
    writeStringReference(string : string) : void {
        this.writeUInt30(op(Op.INDEX,this._stringIndexer,string));
    }
    writeStringReferenceList(strings : core.DartList<string>) : void {
        this.writeList(strings,this.writeStringReference.bind(this));
    }
    writeUriReference(string : string) : void {
        let index : number = op(Op.INDEX,this._sourceUriIndexer,string);
        if (index == null) {
            index = op(Op.INDEX,this._sourceUriIndexer,"");
        }
        this.writeUInt30(index);
    }
    writeList(items : core.DartList<any>,writeItem : (x : any) => any) : void {
        this.writeUInt30(items.length);
        items.forEach(writeItem);
    }
    writeNodeList(nodes : core.DartList<lib4.Node>) : void {
        this.writeList(nodes,this.writeNode.bind(this));
    }
    writeNode(node : lib4.Node) : void {
        node.accept(this);
    }
    writeOptionalNode(node : lib4.Node) : void {
        if (op(Op.EQUALS,node,null)) {
            this.writeByte(lib5.Tag.Nothing);
        }else {
            this.writeByte(lib5.Tag.Something);
            this.writeNode(node);
        }
    }
    writeLinkTable(program : lib4.Program) : void {
        let list : core.DartList<lib6.CanonicalName> = new core.DartList.literal<lib6.CanonicalName>();
        var visitCanonicalName : (node : lib6.CanonicalName) => void = (node : lib6.CanonicalName) : void =>  {
            node.index = list.length;
            list.add(node);
            node.children.forEach(visitCanonicalName);
        };
        for(let library of program.libraries) {
            visitCanonicalName(library.canonicalName);
        }
        this.writeList(list,this.writeCanonicalNameEntry.bind(this));
    }
    writeCanonicalNameEntry(node : lib6.CanonicalName) : void {
        let parent = node.parent;
        if (parent.isRoot) {
            this.writeByte(0);
        }else {
            this.writeUInt30(parent.index + 1);
        }
        this.writeStringReference(node.name);
    }
    writeProgramFile(program : lib4.Program) : void {
        program.computeCanonicalNames();
        this.writeMagicWord(lib5.Tag.ProgramFile);
        this._stringIndexer.scanProgram(program);
        this.writeStringTable(this._stringIndexer);
        this.writeUriToSource(program);
        this.writeLinkTable(program);
        this.writeList(program.libraries,this.writeNode.bind(this));
        this.writeMemberReference(program.mainMethod,{
            allowNull : true});
        this._flush();
    }
    writeUriToSource(program : lib4.Program) : void {
        program.uriToSource.keys.forEach((uri : any) =>  {
            this._sourceUriIndexer.put(uri);
        });
        this.writeStringTable(this._sourceUriIndexer);
        for(let i : number = 0; i < this._sourceUriIndexer.entries.length; i++){
            let uri : string = this._sourceUriIndexer.entries[i].value;
            let source : lib4.Source = (program.uriToSource.get(uri) || new lib4.Source(new core.DartList.literal<number>(),new core.DartList.literal<number>()));
            this.writeUtf8Bytes(source.source);
            let lineStarts : core.DartList<number> = source.lineStarts;
            this.writeUInt30(lineStarts.length);
            let previousLineStart : number = 0;
            lineStarts.forEach((lineStart : any) =>  {
                this.writeUInt30(lineStart - previousLineStart);
                previousLineStart = lineStart;
            });
        }
    }
    writeLibraryDependencyReference(node : lib4.LibraryDependency) : void {
        let index : number = this._libraryDependencyIndex.get(node);
        if (index == null) {
            throw `Reference to library dependency ${node} out of scope`;
        }
        this.writeUInt30(index);
    }
    writeReference(reference : lib4.Reference) : void {
        if (op(Op.EQUALS,reference,null)) {
            this.writeByte(0);
        }else {
            let name : lib6.CanonicalName = reference.canonicalName;
            if (op(Op.EQUALS,name,null)) {
                throw `Missing canonical name for ${reference}`;
            }
            this.writeUInt30(name.index + 1);
        }
    }
    writeCanonicalNameReference(name : lib6.CanonicalName) : void {
        if (op(Op.EQUALS,name,null)) {
            this.writeByte(0);
        }else {
            this.writeUInt30(name.index + 1);
        }
    }
    writeLibraryReference(node : lib4.Library) : void {
        this.writeCanonicalNameReference(node.canonicalName);
    }
    writeOffset(offset : number) {
        this.writeUInt30(offset + 1);
    }
    writeClassReference(class_ : lib4.Class,_namedArguments? : {allowNull? : boolean}) : void {
        let {allowNull} = Object.assign({
            "allowNull" : false}, _namedArguments );
        if (op(Op.EQUALS,class_,null) && !allowNull) {
            throw 'Expected a class reference to be valid but was `null`.';
        }
        this.writeCanonicalNameReference(lib4.getCanonicalNameOfClass(class_));
    }
    writeMemberReference(member : lib4.Member,_namedArguments? : {allowNull? : boolean}) : void {
        let {allowNull} = Object.assign({
            "allowNull" : false}, _namedArguments );
        if (op(Op.EQUALS,member,null) && !allowNull) {
            throw 'Expected a member reference to be valid but was `null`.';
        }
        this.writeCanonicalNameReference(lib4.getCanonicalNameOfMember(member));
    }
    writeName(node : lib4.Name) : void {
        this.writeStringReference(node.name);
        if (node.isPrivate) {
            this.writeLibraryReference(node.library);
        }
    }
    insideExternalLibrary : boolean;

    visitLibrary(node : lib4.Library) {
        this.insideExternalLibrary = node.isExternal;
        this.writeByte(this.insideExternalLibrary ? 1 : 0);
        this.writeCanonicalNameReference(lib4.getCanonicalNameOfLibrary(node));
        this.writeStringReference((node.name || ''));
        this.writeUriReference((node.fileUri || ''));
        this.writeAnnotationList(node.annotations);
        this.writeLibraryDependencies(node);
        this.writeNodeList(node.typedefs);
        this.writeNodeList(node.classes);
        this.writeNodeList(node.fields);
        this.writeNodeList(node.procedures);
    }
    writeLibraryDependencies(library : lib4.Library) : void {
        this._libraryDependencyIndex = library.dependencies.isEmpty ? new core.DartMap.literal([
        ]) : new core.DartMap.literal([
        ]);
        this.writeUInt30(library.dependencies.length);
        for(let i : number = 0; i < library.dependencies.length; ++i){
            let importNode = library.dependencies[i];
            this._libraryDependencyIndex.set(importNode,i);
            this.writeLibraryDependency(importNode);
        }
    }
    writeLibraryDependency(node : lib4.LibraryDependency) : void {
        this.writeByte(node.flags);
        this.writeNodeList(node.annotations);
        this.writeLibraryReference(node.targetLibrary);
        this.writeStringReference((node.name || ''));
        this.writeNodeList(node.combinators);
    }
    visitCombinator(node : lib4.Combinator) : void {
        this.writeByte(node.isShow ? 1 : 0);
        this.writeStringReferenceList(node.names);
    }
    visitTypedef(node : lib4.Typedef) : void {
        this.writeCanonicalNameReference(lib4.getCanonicalNameOfTypedef(node));
        this.writeOffset(node.fileOffset);
        this.writeStringReference(node.name);
        this.writeUriReference((node.fileUri || ''));
        this.writeNodeList(node.typeParameters);
        this.writeNode(node.type);
    }
    writeAnnotation(annotation : lib4.Expression) : void {
        this._variableIndexer = ( this._variableIndexer ) || ( new VariableIndexer() );
        this.writeNode(annotation);
    }
    writeAnnotationList(annotations : core.DartList<lib4.Expression>) : void {
        this.writeList(annotations,this.writeAnnotation.bind(this));
    }
    _encodeClassFlags(isAbstract : boolean,level : lib4.ClassLevel) : number {
        let abstactFlag : number = isAbstract ? 1 : 0;
        let levelFlags : number = (level.index - 1) << 1;
        return abstactFlag | levelFlags;
    }
    visitClass(node : lib4.Class) {
        let flags : number = this._encodeClassFlags(node.isAbstract,node.level);
        if (op(Op.EQUALS,node.canonicalName,null)) {
            throw `Missing canonical name for ${node}`;
        }
        this.writeByte(lib5.Tag.Class);
        this.writeCanonicalNameReference(lib4.getCanonicalNameOfClass(node));
        this.writeOffset(node.fileOffset);
        this.writeByte(flags);
        this.writeStringReference((node.name || ''));
        this.writeUriReference((node.fileUri || ''));
        this.writeAnnotationList(node.annotations);
        this._typeParameterIndexer.enter(node.typeParameters);
        this.writeNodeList(node.typeParameters);
        this.writeOptionalNode(node.supertype);
        this.writeOptionalNode(node.mixedInType);
        this.writeNodeList(node.implementedTypes);
        this.writeNodeList(node.fields);
        this.writeNodeList(node.constructors);
        this.writeNodeList(node.procedures);
        this._typeParameterIndexer.exit(node.typeParameters);
    }
    private static __$_emptyName : lib4.Name;
    static get _emptyName() : lib4.Name { 
        if (this.__$_emptyName===undefined) {
            this.__$_emptyName = new lib4.Name('');
        }
        return this.__$_emptyName;
    }
    static set _emptyName(__$value : lib4.Name)  { 
        this.__$_emptyName = __$value;
    }

    visitConstructor(node : lib4.Constructor) {
        if (op(Op.EQUALS,node.canonicalName,null)) {
            throw `Missing canonical name for ${node}`;
        }
        this._variableIndexer = new VariableIndexer();
        this.writeByte(lib5.Tag.Constructor);
        this.writeCanonicalNameReference(lib4.getCanonicalNameOfMember(node));
        this.writeOffset(node.fileOffset);
        this.writeOffset(node.fileEndOffset);
        this.writeByte(node.flags);
        this.writeName((node.name || BinaryPrinter._emptyName));
        this.writeAnnotationList(node.annotations);
        /* TODO (AssertStatementImpl) : assert (node.function.typeParameters.isEmpty); */;
        this.writeNode(node.function);
        this._variableIndexer.restoreScope(node.function.positionalParameters.length + node.function.namedParameters.length);
        this.writeNodeList(node.initializers);
        this._variableIndexer = null;
    }
    visitProcedure(node : lib4.Procedure) {
        if (op(Op.EQUALS,node.canonicalName,null)) {
            throw `Missing canonical name for ${node}`;
        }
        this._variableIndexer = new VariableIndexer();
        this.writeByte(lib5.Tag.Procedure);
        this.writeCanonicalNameReference(lib4.getCanonicalNameOfMember(node));
        this.writeOffset(node.fileOffset);
        this.writeOffset(node.fileEndOffset);
        this.writeByte(node.kind.index);
        this.writeByte(node.flags);
        this.writeName((node.name || ''));
        this.writeUriReference((node.fileUri || ''));
        this.writeAnnotationList(node.annotations);
        this.writeOptionalNode(node.function);
        this._variableIndexer = null;
    }
    visitField(node : lib4.Field) {
        if (op(Op.EQUALS,node.canonicalName,null)) {
            throw `Missing canonical name for ${node}`;
        }
        this._variableIndexer = new VariableIndexer();
        this.writeByte(lib5.Tag.Field);
        this.writeCanonicalNameReference(lib4.getCanonicalNameOfMember(node));
        this.writeOffset(node.fileOffset);
        this.writeOffset(node.fileEndOffset);
        this.writeByte(node.flags);
        this.writeName(node.name);
        this.writeUriReference((node.fileUri || ''));
        this.writeAnnotationList(node.annotations);
        this.writeNode(node.type);
        this.writeOptionalNode(node.initializer);
        this._variableIndexer = null;
    }
    visitInvalidInitializer(node : lib4.InvalidInitializer) {
        this.writeByte(lib5.Tag.InvalidInitializer);
    }
    visitFieldInitializer(node : lib4.FieldInitializer) {
        this.writeByte(lib5.Tag.FieldInitializer);
        this.writeReference(node.fieldReference);
        this.writeNode(node.value);
    }
    visitSuperInitializer(node : lib4.SuperInitializer) {
        this.writeByte(lib5.Tag.SuperInitializer);
        this.writeReference(node.targetReference);
        this.writeNode(node.arguments);
    }
    visitRedirectingInitializer(node : lib4.RedirectingInitializer) {
        this.writeByte(lib5.Tag.RedirectingInitializer);
        this.writeReference(node.targetReference);
        this.writeNode(node.arguments);
    }
    visitLocalInitializer(node : lib4.LocalInitializer) {
        this.writeByte(lib5.Tag.LocalInitializer);
        this.writeVariableDeclaration(node.variable,false);
    }
    visitFunctionNode(node : lib4.FunctionNode) {
        /* TODO (AssertStatementImpl) : assert (_variableIndexer != null); */;
        this._variableIndexer.pushScope();
        let oldLabels = this._labelIndexer;
        this._labelIndexer = new LabelIndexer();
        let oldCases = this._switchCaseIndexer;
        this._switchCaseIndexer = new SwitchCaseIndexer();
        this._typeParameterIndexer.enter(node.typeParameters);
        this.writeOffset(node.fileOffset);
        this.writeOffset(node.fileEndOffset);
        this.writeByte(node.asyncMarker.index);
        this.writeByte(node.dartAsyncMarker.index);
        this.writeNodeList(node.typeParameters);
        this.writeUInt30(node.requiredParameterCount);
        this.writeVariableDeclarationList(node.positionalParameters);
        this.writeVariableDeclarationList(node.namedParameters);
        this.writeNode(node.returnType);
        this.writeOptionalNode(node.body);
        this._labelIndexer = oldLabels;
        this._switchCaseIndexer = oldCases;
        this._typeParameterIndexer.exit(node.typeParameters);
        this._variableIndexer.popScope();
    }
    visitInvalidExpression(node : lib4.InvalidExpression) {
        this.writeByte(lib5.Tag.InvalidExpression);
    }
    visitVariableGet(node : lib4.VariableGet) {
        /* TODO (AssertStatementImpl) : assert (_variableIndexer != null); */;
        let index : number = op(Op.INDEX,this._variableIndexer,node.variable);
        /* TODO (AssertStatementImpl) : assert (index != null); */;
        if (index & lib5.Tag.SpecializedPayloadMask == index && op(Op.EQUALS,node.promotedType,null)) {
            this.writeByte(lib5.Tag.SpecializedVariableGet + index);
            this.writeOffset(node.fileOffset);
            this.writeUInt30(node.variable.binaryOffset);
        }else {
            this.writeByte(lib5.Tag.VariableGet);
            this.writeOffset(node.fileOffset);
            this.writeUInt30(node.variable.binaryOffset);
            this.writeUInt30(op(Op.INDEX,this._variableIndexer,node.variable));
            this.writeOptionalNode(node.promotedType);
        }
    }
    visitVariableSet(node : lib4.VariableSet) {
        /* TODO (AssertStatementImpl) : assert (_variableIndexer != null); */;
        let index : number = op(Op.INDEX,this._variableIndexer,node.variable);
        if (index & lib5.Tag.SpecializedPayloadMask == index) {
            this.writeByte(lib5.Tag.SpecializedVariableSet + index);
            this.writeOffset(node.fileOffset);
            this.writeUInt30(node.variable.binaryOffset);
            this.writeNode(node.value);
        }else {
            this.writeByte(lib5.Tag.VariableSet);
            this.writeOffset(node.fileOffset);
            this.writeUInt30(node.variable.binaryOffset);
            this.writeUInt30(op(Op.INDEX,this._variableIndexer,node.variable));
            this.writeNode(node.value);
        }
    }
    visitPropertyGet(node : lib4.PropertyGet) {
        this.writeByte(lib5.Tag.PropertyGet);
        this.writeOffset(node.fileOffset);
        this.writeNode(node.receiver);
        this.writeName(node.name);
        this.writeReference(node.interfaceTargetReference);
    }
    visitPropertySet(node : lib4.PropertySet) {
        this.writeByte(lib5.Tag.PropertySet);
        this.writeOffset(node.fileOffset);
        this.writeNode(node.receiver);
        this.writeName(node.name);
        this.writeNode(node.value);
        this.writeReference(node.interfaceTargetReference);
    }
    visitSuperPropertyGet(node : lib4.SuperPropertyGet) {
        this.writeByte(lib5.Tag.SuperPropertyGet);
        this.writeName(node.name);
        this.writeReference(node.interfaceTargetReference);
    }
    visitSuperPropertySet(node : lib4.SuperPropertySet) {
        this.writeByte(lib5.Tag.SuperPropertySet);
        this.writeName(node.name);
        this.writeNode(node.value);
        this.writeReference(node.interfaceTargetReference);
    }
    visitDirectPropertyGet(node : lib4.DirectPropertyGet) {
        this.writeByte(lib5.Tag.DirectPropertyGet);
        this.writeOffset(node.fileOffset);
        this.writeNode(node.receiver);
        this.writeReference(node.targetReference);
    }
    visitDirectPropertySet(node : lib4.DirectPropertySet) {
        this.writeByte(lib5.Tag.DirectPropertySet);
        this.writeOffset(node.fileOffset);
        this.writeNode(node.receiver);
        this.writeReference(node.targetReference);
        this.writeNode(node.value);
    }
    visitStaticGet(node : lib4.StaticGet) {
        this.writeByte(lib5.Tag.StaticGet);
        this.writeOffset(node.fileOffset);
        this.writeReference(node.targetReference);
    }
    visitStaticSet(node : lib4.StaticSet) {
        this.writeByte(lib5.Tag.StaticSet);
        this.writeOffset(node.fileOffset);
        this.writeReference(node.targetReference);
        this.writeNode(node.value);
    }
    visitMethodInvocation(node : lib4.MethodInvocation) {
        this.writeByte(lib5.Tag.MethodInvocation);
        this.writeOffset(node.fileOffset);
        this.writeNode(node.receiver);
        this.writeName(node.name);
        this.writeNode(node.arguments);
        this.writeReference(node.interfaceTargetReference);
    }
    visitSuperMethodInvocation(node : lib4.SuperMethodInvocation) {
        this.writeByte(lib5.Tag.SuperMethodInvocation);
        this.writeOffset(node.fileOffset);
        this.writeName(node.name);
        this.writeNode(node.arguments);
        this.writeReference(node.interfaceTargetReference);
    }
    visitDirectMethodInvocation(node : lib4.DirectMethodInvocation) {
        this.writeByte(lib5.Tag.DirectMethodInvocation);
        this.writeNode(node.receiver);
        this.writeReference(node.targetReference);
        this.writeNode(node.arguments);
    }
    visitStaticInvocation(node : lib4.StaticInvocation) {
        this.writeByte(node.isConst ? lib5.Tag.ConstStaticInvocation : lib5.Tag.StaticInvocation);
        this.writeOffset(node.fileOffset);
        this.writeReference(node.targetReference);
        this.writeNode(node.arguments);
    }
    visitConstructorInvocation(node : lib4.ConstructorInvocation) {
        this.writeByte(node.isConst ? lib5.Tag.ConstConstructorInvocation : lib5.Tag.ConstructorInvocation);
        this.writeOffset(node.fileOffset);
        this.writeReference(node.targetReference);
        this.writeNode(node.arguments);
    }
    visitArguments(node : lib4.Arguments) {
        this.writeUInt30(node.positional.length + node.named.length);
        this.writeNodeList(node.types);
        this.writeNodeList(node.positional);
        this.writeNodeList(node.named);
    }
    visitNamedExpression(node : lib4.NamedExpression) {
        this.writeStringReference(node.name);
        this.writeNode(node.value);
    }
    visitNot(node : lib4.Not) {
        this.writeByte(lib5.Tag.Not);
        this.writeNode(node.operand);
    }
    logicalOperatorIndex(operator : string) : number {
        switch (operator) {
            case '&&':
                return 0;
            case '||':
                return 1;
        }
        throw `Not a logical operator: ${operator}`;
    }
    visitLogicalExpression(node : lib4.LogicalExpression) {
        this.writeByte(lib5.Tag.LogicalExpression);
        this.writeNode(node.left);
        this.writeByte(this.logicalOperatorIndex(node.operator));
        this.writeNode(node.right);
    }
    visitConditionalExpression(node : lib4.ConditionalExpression) {
        this.writeByte(lib5.Tag.ConditionalExpression);
        this.writeNode(node.condition);
        this.writeNode(node.then);
        this.writeNode(node.otherwise);
        this.writeOptionalNode(node.staticType);
    }
    visitStringConcatenation(node : lib4.StringConcatenation) {
        this.writeByte(lib5.Tag.StringConcatenation);
        this.writeOffset(node.fileOffset);
        this.writeNodeList(node.expressions);
    }
    visitIsExpression(node : lib4.IsExpression) {
        this.writeByte(lib5.Tag.IsExpression);
        this.writeOffset(node.fileOffset);
        this.writeNode(node.operand);
        this.writeNode(node.type);
    }
    visitAsExpression(node : lib4.AsExpression) {
        this.writeByte(lib5.Tag.AsExpression);
        this.writeOffset(node.fileOffset);
        this.writeNode(node.operand);
        this.writeNode(node.type);
    }
    visitStringLiteral(node : lib4.StringLiteral) {
        this.writeByte(lib5.Tag.StringLiteral);
        this.writeStringReference(node.value);
    }
    visitIntLiteral(node : lib4.IntLiteral) {
        let value : number = node.value;
        let biasedValue : number = value + lib5.Tag.SpecializedIntLiteralBias;
        if (biasedValue >= 0 && biasedValue & lib5.Tag.SpecializedPayloadMask == biasedValue) {
            this.writeByte(lib5.Tag.SpecializedIntLiteral + biasedValue);
        }else if (new core.DartInt(value).abs() >> 30 == 0) {
            if (value < 0) {
                this.writeByte(lib5.Tag.NegativeIntLiteral);
                this.writeUInt30(-value);
            }else {
                this.writeByte(lib5.Tag.PositiveIntLiteral);
                this.writeUInt30(value);
            }
        }else {
            this.writeByte(lib5.Tag.BigIntLiteral);
            this.writeStringReference(`${node.value}`);
        }
    }
    visitDoubleLiteral(node : lib4.DoubleLiteral) {
        this.writeByte(lib5.Tag.DoubleLiteral);
        this.writeStringReference(`${node.value}`);
    }
    visitBoolLiteral(node : lib4.BoolLiteral) {
        this.writeByte(node.value ? lib5.Tag.TrueLiteral : lib5.Tag.FalseLiteral);
    }
    visitNullLiteral(node : lib4.NullLiteral) {
        this.writeByte(lib5.Tag.NullLiteral);
    }
    visitSymbolLiteral(node : lib4.SymbolLiteral) {
        this.writeByte(lib5.Tag.SymbolLiteral);
        this.writeStringReference(node.value);
    }
    visitTypeLiteral(node : lib4.TypeLiteral) {
        this.writeByte(lib5.Tag.TypeLiteral);
        this.writeNode(node.type);
    }
    visitThisExpression(node : lib4.ThisExpression) {
        this.writeByte(lib5.Tag.ThisExpression);
    }
    visitRethrow(node : lib4.Rethrow) {
        this.writeByte(lib5.Tag.Rethrow);
        this.writeOffset(node.fileOffset);
    }
    visitThrow(node : lib4.Throw) {
        this.writeByte(lib5.Tag.Throw);
        this.writeOffset(node.fileOffset);
        this.writeNode(node.expression);
    }
    visitListLiteral(node : lib4.ListLiteral) {
        this.writeByte(node.isConst ? lib5.Tag.ConstListLiteral : lib5.Tag.ListLiteral);
        this.writeOffset(node.fileOffset);
        this.writeNode(node.typeArgument);
        this.writeNodeList(node.expressions);
    }
    visitMapLiteral(node : lib4.MapLiteral) {
        this.writeByte(node.isConst ? lib5.Tag.ConstMapLiteral : lib5.Tag.MapLiteral);
        this.writeOffset(node.fileOffset);
        this.writeNode(node.keyType);
        this.writeNode(node.valueType);
        this.writeNodeList(node.entries);
    }
    visitMapEntry(node : lib4.MapEntry) {
        this.writeNode(node.key);
        this.writeNode(node.value);
    }
    visitAwaitExpression(node : lib4.AwaitExpression) {
        this.writeByte(lib5.Tag.AwaitExpression);
        this.writeNode(node.operand);
    }
    visitFunctionExpression(node : lib4.FunctionExpression) {
        this.writeByte(lib5.Tag.FunctionExpression);
        this.writeNode(node.function);
    }
    visitLet(node : lib4.Let) {
        this.writeByte(lib5.Tag.Let);
        this.writeVariableDeclaration(node.variable,false);
        this.writeNode(node.body);
        --this._variableIndexer.stackHeight;
    }
    visitLoadLibrary(node : lib4.LoadLibrary) {
        this.writeByte(lib5.Tag.LoadLibrary);
        this.writeLibraryDependencyReference(node.import);
    }
    visitCheckLibraryIsLoaded(node : lib4.CheckLibraryIsLoaded) {
        this.writeByte(lib5.Tag.CheckLibraryIsLoaded);
        this.writeLibraryDependencyReference(node.import);
    }
    visitVectorCreation(node : lib4.VectorCreation) {
        this.writeByte(lib5.Tag.VectorCreation);
        this.writeUInt30(node.length);
    }
    visitVectorGet(node : lib4.VectorGet) {
        this.writeByte(lib5.Tag.VectorGet);
        this.writeNode(node.vectorExpression);
        this.writeUInt30(node.index);
    }
    visitVectorSet(node : lib4.VectorSet) {
        this.writeByte(lib5.Tag.VectorSet);
        this.writeNode(node.vectorExpression);
        this.writeUInt30(node.index);
        this.writeNode(node.value);
    }
    visitVectorCopy(node : lib4.VectorCopy) {
        this.writeByte(lib5.Tag.VectorCopy);
        this.writeNode(node.vectorExpression);
    }
    visitClosureCreation(node : lib4.ClosureCreation) {
        this.writeByte(lib5.Tag.ClosureCreation);
        this.writeReference(node.topLevelFunctionReference);
        this.writeNode(node.contextVector);
        this.writeNode(node.functionType);
    }
    writeStatementOrEmpty(node : lib4.Statement) {
        if (op(Op.EQUALS,node,null)) {
            this.writeByte(lib5.Tag.EmptyStatement);
        }else {
            this.writeNode(node);
        }
    }
    visitInvalidStatement(node : lib4.InvalidStatement) {
        this.writeByte(lib5.Tag.InvalidStatement);
    }
    visitExpressionStatement(node : lib4.ExpressionStatement) {
        this.writeByte(lib5.Tag.ExpressionStatement);
        this.writeNode(node.expression);
    }
    visitBlock(node : lib4.Block) {
        this._variableIndexer.pushScope();
        this.writeByte(lib5.Tag.Block);
        this.writeNodeList(node.statements);
        this._variableIndexer.popScope();
    }
    visitEmptyStatement(node : lib4.EmptyStatement) {
        this.writeByte(lib5.Tag.EmptyStatement);
    }
    visitAssertStatement(node : lib4.AssertStatement) {
        this.writeByte(lib5.Tag.AssertStatement);
        this.writeNode(node.condition);
        this.writeOptionalNode(node.message);
    }
    visitLabeledStatement(node : lib4.LabeledStatement) {
        this._labelIndexer.enter(node);
        this.writeByte(lib5.Tag.LabeledStatement);
        this.writeNode(node.body);
        this._labelIndexer.exit();
    }
    visitBreakStatement(node : lib4.BreakStatement) {
        this.writeByte(lib5.Tag.BreakStatement);
        this.writeOffset(node.fileOffset);
        this.writeUInt30(op(Op.INDEX,this._labelIndexer,node.target));
    }
    visitWhileStatement(node : lib4.WhileStatement) {
        this.writeByte(lib5.Tag.WhileStatement);
        this.writeNode(node.condition);
        this.writeNode(node.body);
    }
    visitDoStatement(node : lib4.DoStatement) {
        this.writeByte(lib5.Tag.DoStatement);
        this.writeNode(node.body);
        this.writeNode(node.condition);
    }
    visitForStatement(node : lib4.ForStatement) {
        this._variableIndexer.pushScope();
        this.writeByte(lib5.Tag.ForStatement);
        this.writeVariableDeclarationList(node.variables);
        this.writeOptionalNode(node.condition);
        this.writeNodeList(node.updates);
        this.writeNode(node.body);
        this._variableIndexer.popScope();
    }
    visitForInStatement(node : lib4.ForInStatement) {
        this._variableIndexer.pushScope();
        this.writeByte(node.isAsync ? lib5.Tag.AsyncForInStatement : lib5.Tag.ForInStatement);
        this.writeOffset(node.fileOffset);
        this.writeVariableDeclaration(node.variable,false);
        this.writeNode(node.iterable);
        this.writeNode(node.body);
        this._variableIndexer.popScope();
    }
    visitSwitchStatement(node : lib4.SwitchStatement) {
        this._switchCaseIndexer.enter(node);
        this.writeByte(lib5.Tag.SwitchStatement);
        this.writeNode(node.expression);
        this.writeNodeList(node.cases);
        this._switchCaseIndexer.exit(node);
    }
    visitSwitchCase(node : lib4.SwitchCase) {
        let length : number = node.expressions.length;
        this.writeUInt30(length);
        for(let i : number = 0; i < length; ++i){
            this.writeOffset(node.expressionOffsets[i]);
            this.writeNode(node.expressions[i]);
        }
        this.writeByte(node.isDefault ? 1 : 0);
        this.writeNode(node.body);
    }
    visitContinueSwitchStatement(node : lib4.ContinueSwitchStatement) {
        this.writeByte(lib5.Tag.ContinueSwitchStatement);
        this.writeUInt30(op(Op.INDEX,this._switchCaseIndexer,node.target));
    }
    visitIfStatement(node : lib4.IfStatement) {
        this.writeByte(lib5.Tag.IfStatement);
        this.writeNode(node.condition);
        this.writeNode(node.then);
        this.writeStatementOrEmpty(node.otherwise);
    }
    visitReturnStatement(node : lib4.ReturnStatement) {
        this.writeByte(lib5.Tag.ReturnStatement);
        this.writeOffset(node.fileOffset);
        this.writeOptionalNode(node.expression);
    }
    visitTryCatch(node : lib4.TryCatch) {
        this.writeByte(lib5.Tag.TryCatch);
        this.writeNode(node.body);
        if (node.catches.any((c : lib4.Catch) =>  {
            return c.stackTrace != null;
        })) {
            this.writeByte(1);
        }else {
            this.writeByte(0);
        }
        this.writeNodeList(node.catches);
    }
    visitCatch(node : lib4.Catch) {
        this._variableIndexer.pushScope();
        this.writeNode(node.guard);
        this.writeOptionalVariableDeclaration(node.exception);
        this.writeOptionalVariableDeclaration(node.stackTrace);
        this.writeNode(node.body);
        this._variableIndexer.popScope();
    }
    visitTryFinally(node : lib4.TryFinally) {
        this.writeByte(lib5.Tag.TryFinally);
        this.writeNode(node.body);
        this.writeNode(node.finalizer);
    }
    visitYieldStatement(node : lib4.YieldStatement) {
        this.writeByte(lib5.Tag.YieldStatement);
        this.writeOffset(node.fileOffset);
        this.writeByte(node.flags);
        this.writeNode(node.expression);
    }
    visitVariableDeclaration(node : lib4.VariableDeclaration) {
        this.writeVariableDeclaration(node,true);
    }
    writeVariableDeclaration(node : lib4.VariableDeclaration,hasTag? : boolean) : void {
        hasTag = hasTag || false;
        node.binaryOffset = this._sink.flushedLength + this._sink.length;
        if (hasTag) this.writeByte(lib5.Tag.VariableDeclaration);
        this.writeOffset(node.fileOffset);
        this.writeOffset(node.fileEqualsOffset);
        this.writeByte(node.flags);
        this.writeStringReference((node.name || ''));
        this.writeNode(node.type);
        this.writeOptionalNode(node.initializer);
        this._variableIndexer.declare(node);
    }
    writeVariableDeclarationList(nodes : core.DartList<lib4.VariableDeclaration>) : void {
        this.writeList(nodes,this.writeVariableDeclaration.bind(this));
    }
    writeOptionalVariableDeclaration(node : lib4.VariableDeclaration) : void {
        if (op(Op.EQUALS,node,null)) {
            this.writeByte(lib5.Tag.Nothing);
        }else {
            this.writeByte(lib5.Tag.Something);
            this.writeVariableDeclaration(node,false);
        }
    }
    visitFunctionDeclaration(node : lib4.FunctionDeclaration) {
        this.writeByte(lib5.Tag.FunctionDeclaration);
        this.writeOffset(node.fileOffset);
        this.writeVariableDeclaration(node.variable,false);
        this.writeNode(node.function);
    }
    visitBottomType(node : lib4.BottomType) {
        this.writeByte(lib5.Tag.BottomType);
    }
    visitInvalidType(node : lib4.InvalidType) {
        this.writeByte(lib5.Tag.InvalidType);
    }
    visitDynamicType(node : lib4.DynamicType) {
        this.writeByte(lib5.Tag.DynamicType);
    }
    visitVoidType(node : lib4.VoidType) {
        this.writeByte(lib5.Tag.VoidType);
    }
    visitInterfaceType(node : lib4.InterfaceType) {
        if (node.typeArguments.isEmpty) {
            this.writeByte(lib5.Tag.SimpleInterfaceType);
            this.writeReference(node.className);
        }else {
            this.writeByte(lib5.Tag.InterfaceType);
            this.writeReference(node.className);
            this.writeNodeList(node.typeArguments);
        }
    }
    visitSupertype(node : lib4.Supertype) {
        if (node.typeArguments.isEmpty) {
            this.writeByte(lib5.Tag.SimpleInterfaceType);
            this.writeReference(node.className);
        }else {
            this.writeByte(lib5.Tag.InterfaceType);
            this.writeReference(node.className);
            this.writeNodeList(node.typeArguments);
        }
    }
    visitFunctionType(node : lib4.FunctionType) {
        if (node.requiredParameterCount == node.positionalParameters.length && node.typeParameters.isEmpty && node.namedParameters.isEmpty) {
            this.writeByte(lib5.Tag.SimpleFunctionType);
            this.writeNodeList(node.positionalParameters);
            this.writeNode(node.returnType);
        }else {
            this.writeByte(lib5.Tag.FunctionType);
            this._typeParameterIndexer.enter(node.typeParameters);
            this.writeNodeList(node.typeParameters);
            this.writeUInt30(node.requiredParameterCount);
            this.writeUInt30(node.positionalParameters.length + node.namedParameters.length);
            this.writeNodeList(node.positionalParameters);
            this.writeNodeList(node.namedParameters);
            this.writeNode(node.returnType);
            this._typeParameterIndexer.exit(node.typeParameters);
        }
    }
    visitNamedType(node : lib4.NamedType) {
        this.writeStringReference(node.name);
        this.writeNode(node.type);
    }
    visitTypeParameterType(node : lib4.TypeParameterType) {
        this.writeByte(lib5.Tag.TypeParameterType);
        this.writeUInt30(op(Op.INDEX,this._typeParameterIndexer,node.parameter));
        this.writeUInt30(node.parameter.binaryOffset);
        this.writeOptionalNode(node.bound);
    }
    visitVectorType(node : lib4.VectorType) {
        this.writeByte(lib5.Tag.VectorType);
    }
    visitTypedefType(node : lib4.TypedefType) {
        this.writeByte(lib5.Tag.TypedefType);
        this.writeReference(node.typedefReference);
        this.writeNodeList(node.typeArguments);
    }
    visitTypeParameter(node : lib4.TypeParameter) {
        node.binaryOffset = this._sink.flushedLength + this._sink.length;
        this.writeStringReference((node.name || ''));
        this.writeNode(node.bound);
    }
    defaultNode(node : lib4.Node) {
        throw `Unsupported node: ${node}`;
    }
}

export namespace VariableIndexer {
    export type Constructors = 'VariableIndexer';
    export type Interface = Omit<VariableIndexer, Constructors>;
}
@DartClass
export class VariableIndexer {
    index : core.DartMap<lib4.VariableDeclaration,number>;

    scopes : core.DartList<number>;

    stackHeight : number;

    declare(node : lib4.VariableDeclaration) : void {
        this.index.set(node,this.stackHeight++);
    }
    pushScope() : void {
        this.scopes.add(this.stackHeight);
    }
    popScope() : void {
        this.stackHeight = this.scopes.removeLast();
    }
    restoreScope(numberOfVariables : number) : void {
        this.stackHeight += numberOfVariables;
    }
    [OperatorMethods.INDEX](node : lib4.VariableDeclaration) : number {
        return this.index.get(node);
    }
    constructor() {
    }
    @defaultConstructor
    VariableIndexer() {
        this.index = new core.DartMap.literal([
        ]);
        this.scopes = new core.DartList.literal<number>();
        this.stackHeight = 0;
    }
}

export namespace LabelIndexer {
    export type Constructors = 'LabelIndexer';
    export type Interface = Omit<LabelIndexer, Constructors>;
}
@DartClass
export class LabelIndexer {
    index : core.DartMap<lib4.LabeledStatement,number>;

    stackHeight : number;

    enter(node : lib4.LabeledStatement) : void {
        this.index.set(node,this.stackHeight++);
    }
    exit() : void {
        --this.stackHeight;
    }
    [OperatorMethods.INDEX](node : lib4.LabeledStatement) : number {
        return this.index.get(node);
    }
    constructor() {
    }
    @defaultConstructor
    LabelIndexer() {
        this.index = new core.DartMap.literal([
        ]);
        this.stackHeight = 0;
    }
}

export namespace SwitchCaseIndexer {
    export type Constructors = 'SwitchCaseIndexer';
    export type Interface = Omit<SwitchCaseIndexer, Constructors>;
}
@DartClass
export class SwitchCaseIndexer {
    index : core.DartMap<lib4.SwitchCase,number>;

    stackHeight : number;

    enter(node : lib4.SwitchStatement) : void {
        for(let caseNode of node.cases) {
            this.index.set(caseNode,this.stackHeight++);
        }
    }
    exit(node : lib4.SwitchStatement) : void {
        this.stackHeight -= node.cases.length;
    }
    [OperatorMethods.INDEX](node : lib4.SwitchCase) : number {
        return this.index.get(node);
    }
    constructor() {
    }
    @defaultConstructor
    SwitchCaseIndexer() {
        this.index = new core.DartMap.literal([
        ]);
        this.stackHeight = 0;
    }
}

export namespace TypeParameterIndexer {
    export type Constructors = 'TypeParameterIndexer';
    export type Interface = Omit<TypeParameterIndexer, Constructors>;
}
@DartClass
export class TypeParameterIndexer {
    index : core.DartMap<lib4.TypeParameter,number>;

    stackHeight : number;

    enter(typeParameters : core.DartList<lib4.TypeParameter>) : void {
        for(let parameter of typeParameters) {
            this.index.set(parameter,this.stackHeight);
            ++this.stackHeight;
        }
    }
    exit(typeParameters : core.DartList<lib4.TypeParameter>) : void {
        this.stackHeight -= typeParameters.length;
    }
    [OperatorMethods.INDEX](parameter : lib4.TypeParameter) : number {
        return this.index.get(parameter);
    }
    constructor() {
    }
    @defaultConstructor
    TypeParameterIndexer() {
        this.index = new core.DartMap.literal([
        ]);
        this.stackHeight = 0;
    }
}

export namespace StringTableEntry {
    export type Constructors = 'StringTableEntry';
    export type Interface = Omit<StringTableEntry, Constructors>;
}
@DartClass
@Implements(core.DartComparable)
export class StringTableEntry implements core.DartComparable.Interface<StringTableEntry> {
    value : string;

    utf8Bytes : core.DartList<number>;

    frequency : number;

    constructor(value : string) {
    }
    @defaultConstructor
    StringTableEntry(value : string) {
        this.frequency = 0;
        this.value = value;
        this.utf8Bytes = new convert.Utf8Encoder().convert(value);
    }
    compareTo(other : StringTableEntry) : number {
        return other.frequency - this.frequency;
    }
}

export namespace StringIndexer {
    export type Constructors = lib3.RecursiveVisitor.Constructors | 'StringIndexer';
    export type Interface = Omit<StringIndexer, Constructors>;
}
@DartClass
export class StringIndexer extends lib3.RecursiveVisitor<core.Null> {
    entries : core.DartList<StringTableEntry>;

    index : core.DartLinkedHashMap<string,number>;

    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    StringIndexer() {
        this.entries = new core.DartList.literal<StringTableEntry>();
        this.index = new core.DartLinkedHashMap<string,number>();
        this.put('');
    }
    get numberOfStrings() : number {
        return this.index.length;
    }
    scanProgram(node : lib4.Node) : void {
        node.accept(this);
        this.entries.sort();
        for(let i : number = 0; i < this.entries.length; ++i){
            op(Op.INDEX_ASSIGN,this.index,this.entries[i].value,i);
        }
    }
    visitCanonicalName(name : lib6.CanonicalName) : void {
        this.put(name.name);
        name.children.forEach(this.visitCanonicalName.bind(this));
    }
    put(string : string) : void {
        let i : number = this.index.putIfAbsent(string,() =>  {
            this.entries.add(new StringTableEntry(string));
            return this.index.length;
        });
        ++this.entries[i].frequency;
    }
    putOptional(string : string) : void {
        if (string != null) {
            this.put(string);
        }
    }
    [OperatorMethods.INDEX](string : string) : number {
        return op(Op.INDEX,this.index,string);
    }
    addLibraryImports(imports : lib9.LibraryImportTable) : void {
        imports.importPaths.forEach(this.put.bind(this));
    }
    visitName(node : lib4.Name) {
        this.put(node.name);
    }
    visitLibrary(node : lib4.Library) {
        this.visitCanonicalName(node.canonicalName);
        this.putOptional(node.name);
        this.put(`${node.importUri}`);
        node.visitChildren(this);
    }
    visitLibraryDependency(node : lib4.LibraryDependency) {
        this.putOptional(node.name);
        node.visitChildren(this);
    }
    visitCombinator(node : lib4.Combinator) {
        node.names.forEach(this.put.bind(this));
    }
    visitTypedef(node : lib4.Typedef) {
        this.put(node.name);
        node.visitChildren(this);
    }
    visitClass(node : lib4.Class) {
        this.putOptional(node.name);
        node.visitChildren(this);
    }
    visitNamedExpression(node : lib4.NamedExpression) {
        this.put(node.name);
        node.visitChildren(this);
    }
    visitStringLiteral(node : lib4.StringLiteral) {
        this.put(node.value);
    }
    visitIntLiteral(node : lib4.IntLiteral) {
        if (new core.DartInt(node.value).abs() >> 30 != 0) {
            this.put(`${node.value}`);
        }
    }
    visitDoubleLiteral(node : lib4.DoubleLiteral) {
        this.put(`${node.value}`);
    }
    visitSymbolLiteral(node : lib4.SymbolLiteral) {
        this.put(node.value);
    }
    visitVariableDeclaration(node : lib4.VariableDeclaration) {
        this.putOptional(node.name);
        node.visitChildren(this);
    }
    visitNamedType(node : lib4.NamedType) {
        this.put(node.name);
        node.visitChildren(this);
    }
    visitTypeParameter(node : lib4.TypeParameter) {
        this.putOptional(node.name);
        node.visitChildren(this);
    }
}

export namespace GlobalIndexer {
    export type Constructors = lib3.TreeVisitor.Constructors | 'GlobalIndexer';
    export type Interface = Omit<GlobalIndexer, Constructors>;
}
@DartClass
export class GlobalIndexer extends lib3.TreeVisitor<any> {
    indices : core.DartMap<lib4.TreeNode,number>;

    buildIndexForContainer(libraryOrClass : lib4.TreeNode) : void {
        libraryOrClass.accept(this);
    }
    buildIndexForList(list : core.DartList<lib4.TreeNode>) : void {
        for(let i : number = 0; i < list.length; ++i){
            let child : lib4.TreeNode = list[i];
            if (child != null) {
                this.indices.set(child,i);
            }
        }
    }
    visitProgram(node : lib4.Program) {
        this.buildIndexForList(node.libraries);
    }
    visitLibrary(node : lib4.Library) {
        this.buildIndexForList(node.classes);
        this.buildIndexForList(node.fields);
        this.buildIndexForList(node.procedures);
    }
    visitClass(node : lib4.Class) {
        this.buildIndexForList(node.fields);
        this.buildIndexForList(node.constructors);
        this.buildIndexForList(node.procedures);
    }
    [OperatorMethods.INDEX](memberOrLibraryOrClass : lib4.TreeNode) : number {
        let node = memberOrLibraryOrClass;
        /* TODO (AssertStatementImpl) : assert (node is Member || node is Library || node is Class); */;
        let index : number = this.indices.get(node);
        if (index == null) {
            this.buildIndexForContainer(node.parent);
            return this.indices.get(node);
        }else {
            return index;
        }
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    GlobalIndexer() {
        this.indices = new core.DartMap.literal([
        ]);
    }
}

export namespace BufferedSink {
    export type Constructors = 'BufferedSink';
    export type Interface = Omit<BufferedSink, Constructors>;
}
@DartClass
export class BufferedSink {
    private static __$SIZE : number;
    static get SIZE() : number { 
        if (this.__$SIZE===undefined) {
            this.__$SIZE = 100000;
        }
        return this.__$SIZE;
    }

    private static __$SMALL : number;
    static get SMALL() : number { 
        if (this.__$SMALL===undefined) {
            this.__$SMALL = 10000;
        }
        return this.__$SMALL;
    }

    _sink : core.DartSink<core.DartList<number>>;

    _buffer : typed_data.Uint8List;

    length : number;

    flushedLength : number;

    constructor(_sink : core.DartSink<core.DartList<number>>) {
    }
    @defaultConstructor
    BufferedSink(_sink : core.DartSink<core.DartList<number>>) {
        this._buffer = new typed_data.Uint8List(BufferedSink.SIZE);
        this.length = 0;
        this.flushedLength = 0;
        this._sink = _sink;
    }
    addByte(byte : number) : void {
        op(Op.INDEX_ASSIGN,this._buffer,this.length++,byte);
        if (this.length == BufferedSink.SIZE) {
            this._sink.add(this._buffer);
            this._buffer = new typed_data.Uint8List(BufferedSink.SIZE);
            this.length = 0;
            this.flushedLength += BufferedSink.SIZE;
        }
    }
    addBytes(bytes : core.DartList<number>) : void {
        if (this.length + bytes.length < BufferedSink.SIZE && (bytes.length < BufferedSink.SMALL || this.length < BufferedSink.SMALL)) {
            if (this.length == 0) {
                this._sink.add(bytes);
                this.flushedLength += bytes.length;
            }else {
                this._buffer.setRange(this.length,this.length + bytes.length,bytes);
                this.length += bytes.length;
            }
        }else if (bytes.length < BufferedSink.SMALL) {
            this._buffer.setRange(this.length,BufferedSink.SIZE,bytes);
            this._sink.add(this._buffer);
            let alreadyEmitted : number = BufferedSink.SIZE - this.length;
            let remainder : number = bytes.length - alreadyEmitted;
            this._buffer = new typed_data.Uint8List(BufferedSink.SIZE);
            this._buffer.setRange(0,remainder,bytes,alreadyEmitted);
            this.length = remainder;
            this.flushedLength += BufferedSink.SIZE;
        }else {
            this._sink.add(this._buffer.sublist(0,this.length));
            this._sink.add(bytes);
            this._buffer = new typed_data.Uint8List(BufferedSink.SIZE);
            this.flushedLength += this.length;
            this.flushedLength += bytes.length;
            this.length = 0;
        }
    }
    flush() : void {
        this._sink.add(this._buffer.sublist(0,this.length));
        this._buffer = new typed_data.Uint8List(BufferedSink.SIZE);
        this.flushedLength += this.length;
        this.length = 0;
    }
    flushAndDestroy() : void {
        this._sink.add(this._buffer.sublist(0,this.length));
    }
}

export namespace LibraryFilteringBinaryPrinter {
    export type Constructors = BinaryPrinter.Constructors | 'LibraryFilteringBinaryPrinter';
    export type Interface = Omit<LibraryFilteringBinaryPrinter, Constructors>;
}
@DartClass
export class LibraryFilteringBinaryPrinter extends BinaryPrinter {
    predicate : (_ : lib4.Library) => boolean;

    constructor(sink : core.DartSink<core.DartList<number>>,predicate : (library : lib4.Library) => boolean) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    LibraryFilteringBinaryPrinter(sink : core.DartSink<core.DartList<number>>,predicate : (library : lib4.Library) => boolean) {
        this.predicate = predicate;
        super.BinaryPrinter(sink);
    }
    writeProgramFile(program : lib4.Program) : void {
        program.computeCanonicalNames();
        this.writeMagicWord(lib5.Tag.ProgramFile);
        this._stringIndexer.scanProgram(program);
        this.writeStringTable(this._stringIndexer);
        this.writeUriToSource(program);
        this.writeLinkTable(program);
        this.writeList(program.libraries.where(this.predicate).toList(),this.writeNode.bind(this));
        this.writeMemberReference(program.mainMethod,{
            allowNull : true});
        this._flush();
    }
}

export class properties {
}
