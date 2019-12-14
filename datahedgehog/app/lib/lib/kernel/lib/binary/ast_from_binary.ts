/** Library asset:datahedgehog_monitor/lib/lib/kernel/lib/binary/ast_from_binary.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./../ast";
import * as lib4 from "./../canonical_name";
import * as typed_data from "@dart2ts/dart/typed_data";
import * as convert from "@dart2ts/dart/convert";
import * as lib7 from "./tag";
import * as lib8 from "@dart2ts/dart/uri";
import * as lib9 from "./../transformations/flags";

export namespace ParseError {
    export type Constructors = 'ParseError';
    export type Interface = Omit<ParseError, Constructors>;
}
@DartClass
export class ParseError {
    filename : string;

    byteIndex : number;

    message : string;

    path : string;

    constructor(message : string,_namedArguments? : {filename? : string,byteIndex? : number,path? : string}) {
    }
    @defaultConstructor
    ParseError(message : string,_namedArguments? : {filename? : string,byteIndex? : number,path? : string}) {
        let {filename,byteIndex,path} = Object.assign({
        }, _namedArguments );
        this.message = message;
        this.filename = filename;
        this.byteIndex = byteIndex;
        this.path = path;
    }
    toString() : string {
        return `${this.filename}:${this.byteIndex}: ${this.message} at ${this.path}`;
    }
}

export namespace BinaryBuilder {
    export type Constructors = 'BinaryBuilder';
    export type Interface = Omit<BinaryBuilder, Constructors>;
}
@DartClass
export class BinaryBuilder {
    variableStack : core.DartList<lib3.VariableDeclaration>;

    labelStack : core.DartList<lib3.LabeledStatement>;

    labelStackBase : number;

    switchCaseStack : core.DartList<lib3.SwitchCase>;

    typeParameterStack : core.DartList<lib3.TypeParameter>;

    filename : string;

    _bytes : core.DartList<number>;

    _byteIndex : number;

    _stringTable : core.DartList<string>;

    _sourceUriTable : core.DartList<string>;

    _linkTable : core.DartList<lib4.CanonicalName>;

    _transformerFlags : number;

    _currentLibrary : lib3.Library;

    debugPath : core.DartList<string>;

    _isReadingLibraryImplementation : boolean;

    constructor(_bytes : core.DartList<number>,filename? : string) {
    }
    @defaultConstructor
    BinaryBuilder(_bytes : core.DartList<number>,filename? : string) {
        this.variableStack = new core.DartList.literal<lib3.VariableDeclaration>();
        this.labelStack = new core.DartList.literal<lib3.LabeledStatement>();
        this.labelStackBase = 0;
        this.switchCaseStack = new core.DartList.literal<lib3.SwitchCase>();
        this.typeParameterStack = new core.DartList.literal<lib3.TypeParameter>();
        this._byteIndex = 0;
        this._stringTable = new core.DartList.literal<string>();
        this._sourceUriTable = new core.DartList.literal<string>();
        this._transformerFlags = 0;
        this.debugPath = new core.DartList.literal<string>();
        this._isReadingLibraryImplementation = false;
        this._bytes = _bytes;
        this.filename = filename;
    }
    fail(message : string) {
        throw new ParseError(message,{
            byteIndex : this._byteIndex,filename : this.filename,path : this.debugPath.join('::')});
    }
    readByte() : number {
        return this._bytes[this._byteIndex++];
    }
    readUInt() : number {
        let byte = this.readByte();
        if (byte & 128 == 0) {
            return byte;
        }else if (byte & 64 == 0) {
            return ((byte & 63) << 8) | this.readByte();
        }else {
            return ((byte & 63) << 24) | (this.readByte() << 16) | (this.readByte() << 8) | this.readByte();
        }
    }
    readMagicWord() : number {
        return (this.readByte() << 24) | (this.readByte() << 16) | (this.readByte() << 8) | this.readByte();
    }
    readUtf8Bytes() : core.DartList<number> {
        let bytes : core.DartList<number> = new typed_data.Uint8List(this.readUInt());
        bytes.setRange(0,bytes.length,this._bytes,this._byteIndex);
        this._byteIndex += bytes.length;
        return bytes;
    }
    readStringEntry(numBytes : number) : string {
        let numByteOrderMarks : number = 0;
        while (this._byteIndex + 2 < this._bytes.length && this._bytes[this._byteIndex] == 239 && this._bytes[this._byteIndex + 1] == 187 && this._bytes[this._byteIndex + 2] == 191){
            ++numByteOrderMarks;
            this._byteIndex += 3;
            numBytes -= 3;
        }
        let string : string = new convert.Utf8Decoder().convert(this._bytes,this._byteIndex,this._byteIndex + numBytes);
        this._byteIndex += numBytes;
        if (numByteOrderMarks > 0) {
            return op(Op.TIMES,'﻿',numByteOrderMarks) + string;
        }
        return string;
    }
    readStringTable(table : core.DartList<string>) : void {
        let length : number = this.readUInt();
        let endOffsets : core.DartList<number> = new core.DartList<number>(length);
        for(let i : number = 0; i < length; ++i){
            endOffsets[i] = this.readUInt();
        }
        table.length = length;
        let startOffset : number = 0;
        for(let i : number = 0; i < length; ++i){
            table[i] = this.readStringEntry(endOffsets[i] - startOffset);
            startOffset = endOffsets[i];
        }
    }
    readUriReference() : string {
        return this._sourceUriTable[this.readUInt()];
    }
    readStringReference() : string {
        return this._stringTable[this.readUInt()];
    }
    readStringReferenceList() : core.DartList<string> {
        return new core.DartList.generate(this.readUInt(),(i : any) =>  {
            return this.readStringReference();
        });
    }
    readStringOrNullIfEmpty() : string {
        let string = this.readStringReference();
        return new core.DartString(string).isEmpty ? null : string;
    }
    readAndCheckOptionTag() : boolean {
        let tag : number = this.readByte();
        if (tag == lib7.Tag.Nothing) {
            return false;
        }else if (tag == lib7.Tag.Something) {
            return true;
        }else {
            throw this.fail(`Invalid Option tag: ${tag}`);
        }
    }
    readAnnotationList(parent : lib3.TreeNode) : core.DartList<lib3.Expression> {
        let length : number = this.readUInt();
        if (length == 0) return new core.DartList.literal<lib3.Expression>();
        let list : core.DartList<lib3.Expression> = new core.DartList<lib3.Expression>(length);
        for(let i : number = 0; i < length; ++i){
            list[i] = ((_) : lib3.Expression =>  {
                {
                    _.parent = parent;
                    return _;
                }
            })(this.readExpression());
        }
        return list;
    }
    _fillTreeNodeList(list : core.DartList<lib3.TreeNode>,buildObject : () => lib3.TreeNode,parent : lib3.TreeNode) : void {
        list.length = this.readUInt();
        for(let i : number = 0; i < list.length; ++i){
            list[i] = ((_) : lib3.TreeNode =>  {
                {
                    _.parent = parent;
                    return _;
                }
            })(buildObject());
        }
    }
    _fillNonTreeNodeList(list : core.DartList<lib3.Node>,buildObject : () => lib3.Node) : void {
        list.length = this.readUInt();
        for(let i : number = 0; i < list.length; ++i){
            list[i] = buildObject();
        }
    }
    _mergeNamedNodeList(list : core.DartList<lib3.NamedNode>,readObject : () => lib3.NamedNode,parent : lib3.TreeNode) : void {
        if (this._isReadingLibraryImplementation) {
            this._fillTreeNodeList(list,readObject,parent);
        }else {
            let numberOfNodes : number = this.readUInt();
            for(let i : number = 0; i < numberOfNodes; ++i){
                let value = readObject();
                if (op(Op.EQUALS,value.parent,null)) {
                    list.add(((_) : lib3.NamedNode =>  {
                        {
                            _.parent = parent;
                            return _;
                        }
                    })(value));
                }
            }
        }
    }
    readLinkTable(linkRoot : lib4.CanonicalName) : void {
        let length : number = this.readUInt();
        this._linkTable = new core.DartList<lib4.CanonicalName>(length);
        for(let i : number = 0; i < length; ++i){
            let biasedParentIndex : number = this.readUInt();
            let name : string = this.readStringReference();
            let parent = biasedParentIndex == 0 ? linkRoot : this._linkTable[biasedParentIndex - 1];
            this._linkTable[i] = parent.getChild(name);
        }
    }
    readProgram(program : lib3.Program) : void {
        while (this._byteIndex < this._bytes.length){
            this._readOneProgram(program);
        }
    }
    readSingleFileProgram(program : lib3.Program) : void {
        this._readOneProgram(program);
        if (this._byteIndex < this._bytes.length) {
            if (this._byteIndex + 3 < this._bytes.length) {
                let magic : number = this.readMagicWord();
                if (magic == lib7.Tag.ProgramFile) {
                    throw 'Concatenated program file given when a single program ' + 'was expected.';
                }
            }
            throw 'Unrecognized bytes following program data';
        }
    }
    _readOneProgram(program : lib3.Program) : void {
        let magic : number = this.readMagicWord();
        if (magic != lib7.Tag.ProgramFile) {
            throw this.fail('This is not a binary dart file. ' + `Magic number was: ${new core.DartInt(magic).toRadixString(16)}`);
        }
        this.readStringTable(this._stringTable);
        let uriToSource : core.DartMap<string,lib3.Source> = this.readUriToSource();
        program.uriToSource.addAll(uriToSource);
        this.readLinkTable(program.root);
        let numberOfLibraries : number = this.readUInt();
        let libraries : core.DartList<lib3.Library> = new core.DartList<lib3.Library>(numberOfLibraries);
        for(let i : number = 0; i < numberOfLibraries; ++i){
            libraries[i] = this.readLibrary(program);
        }
        let mainMethod = this.readMemberReference({
            allowNull : true});
        program.mainMethodName = ( program.mainMethodName ) || ( mainMethod );
    }
    readUriToSource() : core.DartMap<string,lib3.Source> {
        this.readStringTable(this._sourceUriTable);
        let length : number = this._sourceUriTable.length;
        let uriToSource : core.DartMap<string,lib3.Source> = new core.DartMap.literal([
        ]);
        for(let i : number = 0; i < length; ++i){
            let uri : string = this._sourceUriTable[i];
            let sourceCode : core.DartList<number> = this.readUtf8Bytes();
            let lineCount : number = this.readUInt();
            let lineStarts : core.DartList<number> = new core.DartList<number>(lineCount);
            let previousLineStart : number = 0;
            for(let j : number = 0; j < lineCount; ++j){
                let lineStart : number = this.readUInt() + previousLineStart;
                lineStarts[j] = lineStart;
                previousLineStart = lineStart;
            }
            uriToSource.set(uri,new lib3.Source(lineStarts,sourceCode));
        }
        return uriToSource;
    }
    readCanonicalNameReference() : lib4.CanonicalName {
        let index = this.readUInt();
        if (index == 0) return null;
        return this._linkTable[index - 1];
    }
    readLibraryReference() : lib3.Reference {
        return this.readCanonicalNameReference().getReference();
    }
    readLibraryDependencyReference() : lib3.LibraryDependency {
        let index : number = this.readUInt();
        return this._currentLibrary.dependencies[index];
    }
    readClassReference(_namedArguments? : {allowNull? : boolean}) : lib3.Reference {
        let {allowNull} = Object.assign({
            "allowNull" : false}, _namedArguments );
        let name = this.readCanonicalNameReference();
        if (op(Op.EQUALS,name,null) && !allowNull) {
            throw 'Expected a class reference to be valid but was `null`.';
        }
        return ((_684_)=>(!!_684_)?_684_.getReference():null)(name);
    }
    readMemberReference(_namedArguments? : {allowNull? : boolean}) : lib3.Reference {
        let {allowNull} = Object.assign({
            "allowNull" : false}, _namedArguments );
        let name = this.readCanonicalNameReference();
        if (op(Op.EQUALS,name,null) && !allowNull) {
            throw 'Expected a member reference to be valid but was `null`.';
        }
        return ((_685_)=>(!!_685_)?_685_.getReference():null)(name);
    }
    readTypedefReference() : lib3.Reference {
        return this.readCanonicalNameReference().getReference();
    }
    readName() : lib3.Name {
        let text : string = this.readStringReference();
        if (new core.DartString(text).isNotEmpty && text[0] == '_') {
            return new lib3.Name.byReference(text,this.readLibraryReference());
        }else {
            return new lib3.Name(text);
        }
    }
    readLibrary(program : lib3.Program) : lib3.Library {
        let flags : number = this.readByte();
        let isExternal : boolean = (flags & 1) != 0;
        this._isReadingLibraryImplementation = !isExternal;
        let canonicalName = this.readCanonicalNameReference();
        let reference : lib3.Reference = canonicalName.getReference();
        let library : lib3.Library = reference.node;
        let shouldWriteData : boolean = op(Op.EQUALS,library,null) || this._isReadingLibraryImplementation;
        if (op(Op.EQUALS,library,null)) {
            library = new lib3.Library(lib8.Uri.parse(canonicalName.name),{
                reference : reference});
            program.libraries.add(((_) : lib3.Library =>  {
                {
                    _.parent = program;
                    return _;
                }
            })(library));
        }
        this._currentLibrary = library;
        let name : string = this.readStringOrNullIfEmpty();
        let fileUri : string = this.readUriReference();
        if (shouldWriteData) {
            library.isExternal = isExternal;
            library.name = name;
            library.fileUri = fileUri;
        }
        this.debugPath.add(((library.name || ((_686_)=>(!!_686_)?_686_.toString():null)(library.importUri)) || 'library'));
        this._fillTreeNodeList(library.annotations,this.readExpression.bind(this),library);
        this._readLibraryDependencies(library);
        this._mergeNamedNodeList(library.typedefs,this.readTypedef.bind(this),library);
        this._mergeNamedNodeList(library.classes,this.readClass.bind(this),library);
        this._mergeNamedNodeList(library.fields,this.readField.bind(this),library);
        this._mergeNamedNodeList(library.procedures,this.readProcedure.bind(this),library);
        this.debugPath.removeLast();
        this._currentLibrary = null;
        return library;
    }
    _readLibraryDependencies(library : lib3.Library) : void {
        let length : number = this.readUInt();
        if (library.isExternal) {
            /* TODO (AssertStatementImpl) : assert (length == 0); */;
            return;
        }
        library.dependencies.length = length;
        for(let i : number = 0; i < length; ++i){
            let flags = this.readByte();
            let annotations = this.readExpressionList();
            let targetLibrary = this.readLibraryReference();
            let prefixName = this.readStringOrNullIfEmpty();
            let names = this.readCombinatorList();
            library.dependencies[i] = ((_) : lib3.LibraryDependency =>  {
                {
                    _.parent = library;
                    return _;
                }
            })(new lib3.LibraryDependency.byReference(flags,annotations,targetLibrary,prefixName,names));
        }
    }
    readCombinator() : lib3.Combinator {
        let isShow = this.readUInt() == 1;
        let names = this.readStringReferenceList();
        return new lib3.Combinator(isShow,names);
    }
    readCombinatorList() : core.DartList<lib3.Combinator> {
        return new core.DartList.generate(this.readUInt(),(i : any) =>  {
            return this.readCombinator();
        });
    }
    readTypedef() : lib3.Typedef {
        let canonicalName = this.readCanonicalNameReference();
        let reference = canonicalName.getReference();
        let node : lib3.Typedef = reference.node;
        let shouldWriteData : boolean = op(Op.EQUALS,node,null) || this._isReadingLibraryImplementation;
        if (op(Op.EQUALS,node,null)) {
            node = new lib3.Typedef(null,null,{
                reference : reference});
        }
        let fileOffset : number = this.readOffset();
        let name : string = this.readStringReference();
        let fileUri : string = this.readUriReference();
        this.readAndPushTypeParameterList(node.typeParameters,node);
        let type = this.readDartType();
        this.typeParameterStack.length = 0;
        if (shouldWriteData) {
            node.fileOffset = fileOffset;
            node.name = name;
            node.fileUri = fileUri;
            node.type = type;
        }
        return node;
    }
    readClass() : lib3.Class {
        let tag : number = this.readByte();
        /* TODO (AssertStatementImpl) : assert (tag == Tag.Class); */;
        let canonicalName = this.readCanonicalNameReference();
        let reference = canonicalName.getReference();
        let node : lib3.Class = reference.node;
        let shouldWriteData : boolean = op(Op.EQUALS,node,null) || this._isReadingLibraryImplementation;
        if (op(Op.EQUALS,node,null)) {
            node = ((_) : lib3.Class =>  {
                {
                    _.level = lib3.ClassLevel.Temporary;
                    return _;
                }
            })(new lib3.Class({
                reference : reference}));
        }
        node.fileOffset = this.readOffset();
        let flags : number = this.readByte();
        node.isAbstract = flags & 1 != 0;
        let levelIndex : number = (flags >> 1) & 3;
        let level = lib3.ClassLevel.values[levelIndex + 1];
        if (level.index >= node.level.index) {
            node.level = level;
        }
        let name = this.readStringOrNullIfEmpty();
        let fileUri = this.readUriReference();
        let annotations = this.readAnnotationList(node);
        this.debugPath.add((node.name || 'normal-class'));
        this.readAndPushTypeParameterList(node.typeParameters,node);
        let supertype = this.readSupertypeOption();
        let mixedInType = this.readSupertypeOption();
        this._fillNonTreeNodeList(node.implementedTypes,this.readSupertype.bind(this));
        this._mergeNamedNodeList(node.fields,this.readField.bind(this),node);
        this._mergeNamedNodeList(node.constructors,this.readConstructor.bind(this),node);
        this._mergeNamedNodeList(node.procedures,this.readProcedure.bind(this),node);
        this.typeParameterStack.length = 0;
        this.debugPath.removeLast();
        if (shouldWriteData) {
            node.name = name;
            node.fileUri = fileUri;
            node.annotations = annotations;
            node.supertype = supertype;
            node.mixedInType = mixedInType;
        }
        return node;
    }
    getAndResetTransformerFlags() : number {
        let flags : number = this._transformerFlags;
        this._transformerFlags = 0;
        return flags;
    }
    addTransformerFlag(flags : number) : void {
        this._transformerFlags |= flags;
    }
    readField() : lib3.Field {
        let tag : number = this.readByte();
        /* TODO (AssertStatementImpl) : assert (tag == Tag.Field); */;
        let canonicalName = this.readCanonicalNameReference();
        let reference = canonicalName.getReference();
        let node : lib3.Field = reference.node;
        let shouldWriteData : boolean = op(Op.EQUALS,node,null) || this._isReadingLibraryImplementation;
        if (op(Op.EQUALS,node,null)) {
            node = new lib3.Field(null,{
                reference : reference});
        }
        let fileOffset : number = this.readOffset();
        let fileEndOffset : number = this.readOffset();
        let flags : number = this.readByte();
        let name = this.readName();
        let fileUri = this.readUriReference();
        let annotations = this.readAnnotationList(node);
        this.debugPath.add((((t)=>(!!t)?t.name:null)(node.name) || 'field'));
        let type = this.readDartType();
        let initializer = this.readExpressionOption();
        let transformerFlags : number = this.getAndResetTransformerFlags();
        this.debugPath.removeLast();
        if (shouldWriteData) {
            node.fileOffset = fileOffset;
            node.fileEndOffset = fileEndOffset;
            node.flags = flags;
            node.name = name;
            node.fileUri = fileUri;
            node.annotations = annotations;
            node.type = type;
            node.initializer = initializer;
            ((t)=>(!!t)?t.parent:null)(node.initializer) = node;
            node.transformerFlags = transformerFlags;
        }
        return node;
    }
    readConstructor() : lib3.Constructor {
        let tag : number = this.readByte();
        /* TODO (AssertStatementImpl) : assert (tag == Tag.Constructor); */;
        let canonicalName = this.readCanonicalNameReference();
        let reference = canonicalName.getReference();
        let node : lib3.Constructor = reference.node;
        let shouldWriteData : boolean = op(Op.EQUALS,node,null) || this._isReadingLibraryImplementation;
        if (op(Op.EQUALS,node,null)) {
            node = new lib3.Constructor(null,{
                reference : reference});
        }
        let fileOffset = this.readOffset();
        let fileEndOffset = this.readOffset();
        let flags = this.readByte();
        let name = this.readName();
        let annotations = this.readAnnotationList(node);
        this.debugPath.add((((t)=>(!!t)?t.name:null)(node.name) || 'constructor'));
        let function = this.readFunctionNode();
        this.pushVariableDeclarations(function.positionalParameters);
        this.pushVariableDeclarations(function.namedParameters);
        this._fillTreeNodeList(node.initializers,this.readInitializer.bind(this),node);
        this.variableStack.length = 0;
        let transformerFlags = this.getAndResetTransformerFlags();
        this.debugPath.removeLast();
        if (shouldWriteData) {
            node.fileOffset = fileOffset;
            node.fileEndOffset = fileEndOffset;
            node.flags = flags;
            node.name = name;
            node.annotations = annotations;
            node.function = ((_) : lib3.FunctionNode =>  {
                {
                    _.parent = node;
                    return _;
                }
            })(function);
            node.transformerFlags = transformerFlags;
        }
        return node;
    }
    readProcedure() : lib3.Procedure {
        let tag : number = this.readByte();
        /* TODO (AssertStatementImpl) : assert (tag == Tag.Procedure); */;
        let canonicalName = this.readCanonicalNameReference();
        let reference = canonicalName.getReference();
        let node : lib3.Procedure = reference.node;
        let shouldWriteData : boolean = op(Op.EQUALS,node,null) || this._isReadingLibraryImplementation;
        if (op(Op.EQUALS,node,null)) {
            node = new lib3.Procedure(null,null,null,{
                reference : reference});
        }
        let fileOffset = this.readOffset();
        let fileEndOffset = this.readOffset();
        let kindIndex : number = this.readByte();
        let kind = lib3.ProcedureKind.values[kindIndex];
        let flags = this.readByte();
        let name = this.readName();
        let fileUri = this.readUriReference();
        let annotations = this.readAnnotationList(node);
        this.debugPath.add((((t)=>(!!t)?t.name:null)(node.name) || 'procedure'));
        let function = this.readFunctionNodeOption();
        let transformerFlags = this.getAndResetTransformerFlags();
        this.debugPath.removeLast();
        if (shouldWriteData) {
            node.fileOffset = fileOffset;
            node.fileEndOffset = fileEndOffset;
            node.kind = kind;
            node.flags = flags;
            node.name = name;
            node.fileUri = fileUri;
            node.annotations = annotations;
            node.function = function;
            ((t)=>(!!t)?t.parent:null)(node.function) = node;
            node.transformerFlags = transformerFlags;
        }
        return node;
    }
    readInitializer() : lib3.Initializer {
        let tag : number = this.readByte();
        switch (tag) {
            case lib7.Tag.InvalidInitializer:
                return new lib3.InvalidInitializer();
            case lib7.Tag.FieldInitializer:
                return new lib3.FieldInitializer.byReference(this.readMemberReference(),this.readExpression());
            case lib7.Tag.SuperInitializer:
                return new lib3.SuperInitializer.byReference(this.readMemberReference(),this.readArguments());
            case lib7.Tag.RedirectingInitializer:
                return new lib3.RedirectingInitializer.byReference(this.readMemberReference(),this.readArguments());
            case lib7.Tag.LocalInitializer:
                return new lib3.LocalInitializer(this.readAndPushVariableDeclaration());
            default:
                throw this.fail(`Invalid initializer tag: ${tag}`);
        }
    }
    readFunctionNodeOption() : lib3.FunctionNode {
        return this.readAndCheckOptionTag() ? this.readFunctionNode() : null;
    }
    readFunctionNode() : lib3.FunctionNode {
        let offset : number = this.readOffset();
        let endOffset : number = this.readOffset();
        let asyncMarker : lib3.AsyncMarker = lib3.AsyncMarker.values[this.readByte()];
        let dartAsyncMarker : lib3.AsyncMarker = lib3.AsyncMarker.values[this.readByte()];
        let typeParameterStackHeight : number = this.typeParameterStack.length;
        let typeParameters = this.readAndPushTypeParameterList();
        let requiredParameterCount = this.readUInt();
        let variableStackHeight : number = this.variableStack.length;
        let positional = this.readAndPushVariableDeclarationList();
        let named = this.readAndPushVariableDeclarationList();
        let returnType = this.readDartType();
        let oldLabelStackBase : number = this.labelStackBase;
        this.labelStackBase = this.labelStack.length;
        let body = this.readStatementOption();
        this.labelStackBase = oldLabelStackBase;
        this.variableStack.length = variableStackHeight;
        this.typeParameterStack.length = typeParameterStackHeight;
        return ((_) : lib3.FunctionNode =>  {
            {
                _.fileOffset = offset;
                _.fileEndOffset = endOffset;
                return _;
            }
        })(new lib3.FunctionNode(body,{
            typeParameters : typeParameters,requiredParameterCount : requiredParameterCount,positionalParameters : positional,namedParameters : named,returnType : returnType,asyncMarker : asyncMarker,dartAsyncMarker : dartAsyncMarker}));
    }
    pushVariableDeclaration(variable : lib3.VariableDeclaration) : void {
        this.variableStack.add(variable);
    }
    pushVariableDeclarations(variables : core.DartList<lib3.VariableDeclaration>) : void {
        this.variableStack.addAll(variables);
    }
    readVariableReference() : lib3.VariableDeclaration {
        let index : number = this.readUInt();
        if (index >= this.variableStack.length) {
            throw this.fail(`Invalid variable index: ${index}`);
        }
        return this.variableStack[index];
    }
    logicalOperatorToString(index : number) : string {
        switch (index) {
            case 0:
                return '&&';
            case 1:
                return '||';
            default:
                throw this.fail(`Invalid logical operator index: ${index}`);
        }
    }
    readExpressionList() : core.DartList<lib3.Expression> {
        return new core.DartList.generate(this.readUInt(),(i : any) =>  {
            return this.readExpression();
        });
    }
    readExpressionOption() : lib3.Expression {
        return this.readAndCheckOptionTag() ? this.readExpression() : null;
    }
    readExpression() : lib3.Expression {
        let tagByte : number = this.readByte();
        let tag : number = tagByte & lib7.Tag.SpecializedTagHighBit == 0 ? tagByte : (tagByte & lib7.Tag.SpecializedTagMask);
        switch (tag) {
            case lib7.Tag.LoadLibrary:
                return new lib3.LoadLibrary(this.readLibraryDependencyReference());
            case lib7.Tag.CheckLibraryIsLoaded:
                return new lib3.CheckLibraryIsLoaded(this.readLibraryDependencyReference());
            case lib7.Tag.InvalidExpression:
                return new lib3.InvalidExpression();
            case lib7.Tag.VariableGet:
                let offset : number = this.readOffset();
                this.readUInt();
                return ((_) : lib3.VariableGet =>  {
                    {
                        _.fileOffset = offset;
                        return _;
                    }
                })(new lib3.VariableGet(this.readVariableReference(),this.readDartTypeOption()));
            case lib7.Tag.SpecializedVariableGet:
                let index : number = tagByte & lib7.Tag.SpecializedPayloadMask;
                let offset : number = this.readOffset();
                this.readUInt();
                return ((_) : lib3.VariableGet =>  {
                    {
                        _.fileOffset = offset;
                        return _;
                    }
                })(new lib3.VariableGet(this.variableStack[index]));
            case lib7.Tag.VariableSet:
                let offset : number = this.readOffset();
                this.readUInt();
                return ((_) : lib3.VariableSet =>  {
                    {
                        _.fileOffset = offset;
                        return _;
                    }
                })(new lib3.VariableSet(this.readVariableReference(),this.readExpression()));
            case lib7.Tag.SpecializedVariableSet:
                let index : number = tagByte & lib7.Tag.SpecializedPayloadMask;
                let offset : number = this.readOffset();
                this.readUInt();
                return ((_) : lib3.VariableSet =>  {
                    {
                        _.fileOffset = offset;
                        return _;
                    }
                })(new lib3.VariableSet(this.variableStack[index],this.readExpression()));
            case lib7.Tag.PropertyGet:
                let offset : number = this.readOffset();
                return ((_) : lib3.PropertyGet =>  {
                    {
                        _.fileOffset = offset;
                        return _;
                    }
                })(new lib3.PropertyGet.byReference(this.readExpression(),this.readName(),this.readMemberReference({
                    allowNull : true})));
            case lib7.Tag.PropertySet:
                let offset : number = this.readOffset();
                return ((_) : lib3.PropertySet =>  {
                    {
                        _.fileOffset = offset;
                        return _;
                    }
                })(new lib3.PropertySet.byReference(this.readExpression(),this.readName(),this.readExpression(),this.readMemberReference({
                    allowNull : true})));
            case lib7.Tag.SuperPropertyGet:
                this.addTransformerFlag(lib9.TransformerFlag.superCalls);
                return new lib3.SuperPropertyGet.byReference(this.readName(),this.readMemberReference({
                    allowNull : true}));
            case lib7.Tag.SuperPropertySet:
                this.addTransformerFlag(lib9.TransformerFlag.superCalls);
                return new lib3.SuperPropertySet.byReference(this.readName(),this.readExpression(),this.readMemberReference({
                    allowNull : true}));
            case lib7.Tag.DirectPropertyGet:
                let offset : number = this.readOffset();
                return ((_) : lib3.DirectPropertyGet =>  {
                    {
                        _.fileOffset = offset;
                        return _;
                    }
                })(new lib3.DirectPropertyGet.byReference(this.readExpression(),this.readMemberReference()));
            case lib7.Tag.DirectPropertySet:
                let offset : number = this.readOffset();
                return ((_) : lib3.DirectPropertySet =>  {
                    {
                        _.fileOffset = offset;
                        return _;
                    }
                })(new lib3.DirectPropertySet.byReference(this.readExpression(),this.readMemberReference(),this.readExpression()));
            case lib7.Tag.StaticGet:
                let offset : number = this.readOffset();
                return ((_) : lib3.StaticGet =>  {
                    {
                        _.fileOffset = offset;
                        return _;
                    }
                })(new lib3.StaticGet.byReference(this.readMemberReference()));
            case lib7.Tag.StaticSet:
                let offset : number = this.readOffset();
                return ((_) : lib3.StaticSet =>  {
                    {
                        _.fileOffset = offset;
                        return _;
                    }
                })(new lib3.StaticSet.byReference(this.readMemberReference(),this.readExpression()));
            case lib7.Tag.MethodInvocation:
                let offset : number = this.readOffset();
                return ((_) : lib3.MethodInvocation =>  {
                    {
                        _.fileOffset = offset;
                        return _;
                    }
                })(new lib3.MethodInvocation.byReference(this.readExpression(),this.readName(),this.readArguments(),this.readMemberReference({
                    allowNull : true})));
            case lib7.Tag.SuperMethodInvocation:
                let offset : number = this.readOffset();
                this.addTransformerFlag(lib9.TransformerFlag.superCalls);
                return ((_) : lib3.SuperMethodInvocation =>  {
                    {
                        _.fileOffset = offset;
                        return _;
                    }
                })(new lib3.SuperMethodInvocation.byReference(this.readName(),this.readArguments(),this.readMemberReference({
                    allowNull : true})));
            case lib7.Tag.DirectMethodInvocation:
                return new lib3.DirectMethodInvocation.byReference(this.readExpression(),this.readMemberReference(),this.readArguments());
            case lib7.Tag.StaticInvocation:
                let offset : number = this.readOffset();
                return ((_) : lib3.StaticInvocation =>  {
                    {
                        _.fileOffset = offset;
                        return _;
                    }
                })(new lib3.StaticInvocation.byReference(this.readMemberReference(),this.readArguments(),{
                    isConst : false}));
            case lib7.Tag.ConstStaticInvocation:
                let offset : number = this.readOffset();
                return ((_) : lib3.StaticInvocation =>  {
                    {
                        _.fileOffset = offset;
                        return _;
                    }
                })(new lib3.StaticInvocation.byReference(this.readMemberReference(),this.readArguments(),{
                    isConst : true}));
            case lib7.Tag.ConstructorInvocation:
                let offset : number = this.readOffset();
                return ((_) : lib3.ConstructorInvocation =>  {
                    {
                        _.fileOffset = offset;
                        return _;
                    }
                })(new lib3.ConstructorInvocation.byReference(this.readMemberReference(),this.readArguments(),{
                    isConst : false}));
            case lib7.Tag.ConstConstructorInvocation:
                let offset : number = this.readOffset();
                return ((_) : lib3.ConstructorInvocation =>  {
                    {
                        _.fileOffset = offset;
                        return _;
                    }
                })(new lib3.ConstructorInvocation.byReference(this.readMemberReference(),this.readArguments(),{
                    isConst : true}));
            case lib7.Tag.Not:
                return new lib3.Not(this.readExpression());
            case lib7.Tag.LogicalExpression:
                return new lib3.LogicalExpression(this.readExpression(),this.logicalOperatorToString(this.readByte()),this.readExpression());
            case lib7.Tag.ConditionalExpression:
                return new lib3.ConditionalExpression(this.readExpression(),this.readExpression(),this.readExpression(),this.readDartTypeOption());
            case lib7.Tag.StringConcatenation:
                let offset : number = this.readOffset();
                return ((_) : lib3.StringConcatenation =>  {
                    {
                        _.fileOffset = offset;
                        return _;
                    }
                })(new lib3.StringConcatenation(this.readExpressionList()));
            case lib7.Tag.IsExpression:
                let offset : number = this.readOffset();
                return ((_) : lib3.IsExpression =>  {
                    {
                        _.fileOffset = offset;
                        return _;
                    }
                })(new lib3.IsExpression(this.readExpression(),this.readDartType()));
            case lib7.Tag.AsExpression:
                let offset : number = this.readOffset();
                return ((_) : lib3.AsExpression =>  {
                    {
                        _.fileOffset = offset;
                        return _;
                    }
                })(new lib3.AsExpression(this.readExpression(),this.readDartType()));
            case lib7.Tag.StringLiteral:
                return new lib3.StringLiteral(this.readStringReference());
            case lib7.Tag.SpecializedIntLiteral:
                let biasedValue : number = tagByte & lib7.Tag.SpecializedPayloadMask;
                return new lib3.IntLiteral(biasedValue - lib7.Tag.SpecializedIntLiteralBias);
            case lib7.Tag.PositiveIntLiteral:
                return new lib3.IntLiteral(this.readUInt());
            case lib7.Tag.NegativeIntLiteral:
                return new lib3.IntLiteral(-this.readUInt());
            case lib7.Tag.BigIntLiteral:
                return new lib3.IntLiteral(core.DartInt.parse(this.readStringReference()));
            case lib7.Tag.DoubleLiteral:
                return new lib3.DoubleLiteral(core.DartDouble.parse(this.readStringReference()));
            case lib7.Tag.TrueLiteral:
                return new lib3.BoolLiteral(true);
            case lib7.Tag.FalseLiteral:
                return new lib3.BoolLiteral(false);
            case lib7.Tag.NullLiteral:
                return new lib3.NullLiteral();
            case lib7.Tag.SymbolLiteral:
                return new lib3.SymbolLiteral(this.readStringReference());
            case lib7.Tag.TypeLiteral:
                return new lib3.TypeLiteral(this.readDartType());
            case lib7.Tag.ThisExpression:
                return new lib3.ThisExpression();
            case lib7.Tag.Rethrow:
                let offset : number = this.readOffset();
                return ((_) : lib3.Rethrow =>  {
                    {
                        _.fileOffset = offset;
                        return _;
                    }
                })(new lib3.Rethrow());
            case lib7.Tag.Throw:
                let offset : number = this.readOffset();
                return ((_) : lib3.Throw =>  {
                    {
                        _.fileOffset = offset;
                        return _;
                    }
                })(new lib3.Throw(this.readExpression()));
            case lib7.Tag.ListLiteral:
                let offset : number = this.readOffset();
                let typeArgument = this.readDartType();
                return ((_) : lib3.ListLiteral =>  {
                    {
                        _.fileOffset = offset;
                        return _;
                    }
                })(new lib3.ListLiteral(this.readExpressionList(),{
                    typeArgument : typeArgument,isConst : false}));
            case lib7.Tag.ConstListLiteral:
                let offset : number = this.readOffset();
                let typeArgument = this.readDartType();
                return ((_) : lib3.ListLiteral =>  {
                    {
                        _.fileOffset = offset;
                        return _;
                    }
                })(new lib3.ListLiteral(this.readExpressionList(),{
                    typeArgument : typeArgument,isConst : true}));
            case lib7.Tag.MapLiteral:
                let offset : number = this.readOffset();
                let keyType = this.readDartType();
                let valueType = this.readDartType();
                return ((_) : lib3.MapLiteral =>  {
                    {
                        _.fileOffset = offset;
                        return _;
                    }
                })(new lib3.MapLiteral(this.readMapEntryList(),{
                    keyType : keyType,valueType : valueType,isConst : false}));
            case lib7.Tag.ConstMapLiteral:
                let offset : number = this.readOffset();
                let keyType = this.readDartType();
                let valueType = this.readDartType();
                return ((_) : lib3.MapLiteral =>  {
                    {
                        _.fileOffset = offset;
                        return _;
                    }
                })(new lib3.MapLiteral(this.readMapEntryList(),{
                    keyType : keyType,valueType : valueType,isConst : true}));
            case lib7.Tag.AwaitExpression:
                return new lib3.AwaitExpression(this.readExpression());
            case lib7.Tag.FunctionExpression:
                return new lib3.FunctionExpression(this.readFunctionNode());
            case lib7.Tag.Let:
                let variable = this.readVariableDeclaration();
                let stackHeight : number = this.variableStack.length;
                this.pushVariableDeclaration(variable);
                let body = this.readExpression();
                this.variableStack.length = stackHeight;
                return new lib3.Let(variable,body);
            case lib7.Tag.VectorCreation:
                let length = this.readUInt();
                return new lib3.VectorCreation(length);
            case lib7.Tag.VectorGet:
                let vectorExpression = this.readExpression();
                let index = this.readUInt();
                return new lib3.VectorGet(vectorExpression,index);
            case lib7.Tag.VectorSet:
                let vectorExpression = this.readExpression();
                let index = this.readUInt();
                let value = this.readExpression();
                return new lib3.VectorSet(vectorExpression,index,value);
            case lib7.Tag.VectorCopy:
                let vectorExpression = this.readExpression();
                return new lib3.VectorCopy(vectorExpression);
            case lib7.Tag.ClosureCreation:
                let topLevelFunctionReference = this.readMemberReference();
                let contextVector = this.readExpression();
                let functionType = this.readDartType();
                return new lib3.ClosureCreation.byReference(topLevelFunctionReference,contextVector,functionType);
            default:
                throw this.fail(`Invalid expression tag: ${tag}`);
        }
    }
    readMapEntryList() : core.DartList<lib3.MapEntry> {
        return new core.DartList.generate(this.readUInt(),(i : any) =>  {
            return this.readMapEntry();
        });
    }
    readMapEntry() : lib3.MapEntry {
        return new lib3.MapEntry(this.readExpression(),this.readExpression());
    }
    readStatementList() : core.DartList<lib3.Statement> {
        return new core.DartList.generate(this.readUInt(),(i : any) =>  {
            return this.readStatement();
        });
    }
    readStatementOrNullIfEmpty() : lib3.Statement {
        let node = this.readStatement();
        if (is(node, lib3.EmptyStatement)) {
            return null;
        }else {
            return node;
        }
    }
    readStatementOption() : lib3.Statement {
        return this.readAndCheckOptionTag() ? this.readStatement() : null;
    }
    readStatement() : lib3.Statement {
        let tag : number = this.readByte();
        switch (tag) {
            case lib7.Tag.InvalidStatement:
                return new lib3.InvalidStatement();
            case lib7.Tag.ExpressionStatement:
                return new lib3.ExpressionStatement(this.readExpression());
            case lib7.Tag.Block:
                return this.readBlock();
            case lib7.Tag.EmptyStatement:
                return new lib3.EmptyStatement();
            case lib7.Tag.AssertStatement:
                return new lib3.AssertStatement(this.readExpression(),this.readExpressionOption());
            case lib7.Tag.LabeledStatement:
                let label = new lib3.LabeledStatement(null);
                this.labelStack.add(label);
                label.body = ((_) : lib3.Statement =>  {
                    {
                        _.parent = label;
                        return _;
                    }
                })(this.readStatement());
                this.labelStack.removeLast();
                return label;
            case lib7.Tag.BreakStatement:
                let offset : number = this.readOffset();
                let index : number = this.readUInt();
                return ((_) : lib3.BreakStatement =>  {
                    {
                        _.fileOffset = offset;
                        return _;
                    }
                })(new lib3.BreakStatement(this.labelStack[this.labelStackBase + index]));
            case lib7.Tag.WhileStatement:
                return new lib3.WhileStatement(this.readExpression(),this.readStatement());
            case lib7.Tag.DoStatement:
                return new lib3.DoStatement(this.readStatement(),this.readExpression());
            case lib7.Tag.ForStatement:
                let variableStackHeight : number = this.variableStack.length;
                let variables = this.readAndPushVariableDeclarationList();
                let condition = this.readExpressionOption();
                let updates = this.readExpressionList();
                let body = this.readStatement();
                this.variableStack.length = variableStackHeight;
                return new lib3.ForStatement(variables,condition,updates,body);
            case lib7.Tag.ForInStatement:
            case lib7.Tag.AsyncForInStatement:
                let isAsync : boolean = tag == lib7.Tag.AsyncForInStatement;
                let variableStackHeight : number = this.variableStack.length;
                let offset = this.readOffset();
                let variable = this.readAndPushVariableDeclaration();
                let iterable = this.readExpression();
                let body = this.readStatement();
                this.variableStack.length = variableStackHeight;
                return ((_) : lib3.ForInStatement =>  {
                    {
                        _.fileOffset = offset;
                        return _;
                    }
                })(new lib3.ForInStatement(variable,iterable,body,{
                    isAsync : isAsync}));
            case lib7.Tag.SwitchStatement:
                let expression = this.readExpression();
                let count : number = this.readUInt();
                let cases : core.DartList<lib3.SwitchCase> = new core.DartList.generate(count,(i : any) =>  {
                    return new lib3.SwitchCase.empty();
                });
                this.switchCaseStack.addAll(cases);
                for(let i : number = 0; i < cases.length; ++i){
                    let caseNode = cases[i];
                    let length : number = this.readUInt();
                    caseNode.expressions.length = length;
                    caseNode.expressionOffsets.length = length;
                    for(let i : number = 0; i < length; ++i){
                        caseNode.expressionOffsets[i] = this.readOffset();
                        caseNode.expressions[i] = ((_) : lib3.Expression =>  {
                            {
                                _.parent = caseNode;
                                return _;
                            }
                        })(this.readExpression());
                    }
                    caseNode.isDefault = this.readByte() == 1;
                    caseNode.body = ((_) : lib3.Statement =>  {
                        {
                            _.parent = caseNode;
                            return _;
                        }
                    })(this.readStatement());
                }
                this.switchCaseStack.length -= count;
                return new lib3.SwitchStatement(expression,cases);
            case lib7.Tag.ContinueSwitchStatement:
                let index : number = this.readUInt();
                return new lib3.ContinueSwitchStatement(this.switchCaseStack[index]);
            case lib7.Tag.IfStatement:
                return new lib3.IfStatement(this.readExpression(),this.readStatement(),this.readStatementOrNullIfEmpty());
            case lib7.Tag.ReturnStatement:
                let offset : number = this.readOffset();
                return ((_) : lib3.ReturnStatement =>  {
                    {
                        _.fileOffset = offset;
                        return _;
                    }
                })(new lib3.ReturnStatement(this.readExpressionOption()));
            case lib7.Tag.TryCatch:
                let body : lib3.Statement = this.readStatement();
                this.readByte();
                return new lib3.TryCatch(body,this.readCatchList());
            case lib7.Tag.TryFinally:
                return new lib3.TryFinally(this.readStatement(),this.readStatement());
            case lib7.Tag.YieldStatement:
                let offset : number = this.readOffset();
                let flags : number = this.readByte();
                return ((_) : lib3.YieldStatement =>  {
                    {
                        _.fileOffset = offset;
                        return _;
                    }
                })(new lib3.YieldStatement(this.readExpression(),{
                    isYieldStar : flags & lib3.YieldStatement.FlagYieldStar != 0,isNative : flags & lib3.YieldStatement.FlagNative != 0}));
            case lib7.Tag.VariableDeclaration:
                let variable = this.readVariableDeclaration();
                this.variableStack.add(variable);
                return variable;
            case lib7.Tag.FunctionDeclaration:
                let offset : number = this.readOffset();
                let variable = this.readVariableDeclaration();
                this.variableStack.add(variable);
                let function = this.readFunctionNode();
                return ((_) : lib3.FunctionDeclaration =>  {
                    {
                        _.fileOffset = offset;
                        return _;
                    }
                })(new lib3.FunctionDeclaration(variable,function));
            default:
                throw this.fail(`Invalid statement tag: ${tag}`);
        }
    }
    readCatchList() : core.DartList<lib3.Catch> {
        return new core.DartList.generate(this.readUInt(),(i : any) =>  {
            return this.readCatch();
        });
    }
    readCatch() : lib3.Catch {
        let variableStackHeight : number = this.variableStack.length;
        let guard = this.readDartType();
        let exception = this.readAndPushVariableDeclarationOption();
        let stackTrace = this.readAndPushVariableDeclarationOption();
        let body = this.readStatement();
        this.variableStack.length = variableStackHeight;
        return new lib3.Catch(exception,body,{
            guard : guard,stackTrace : stackTrace});
    }
    readBlock() : lib3.Block {
        let stackHeight : number = this.variableStack.length;
        let body = this.readStatementList();
        this.variableStack.length = stackHeight;
        return new lib3.Block(body);
    }
    readSupertype() : lib3.Supertype {
        let type : lib3.InterfaceType = this.readDartType();
        return new lib3.Supertype.byReference(type.className,type.typeArguments);
    }
    readSupertypeOption() : lib3.Supertype {
        return this.readAndCheckOptionTag() ? this.readSupertype() : null;
    }
    readSupertypeList() : core.DartList<lib3.Supertype> {
        return new core.DartList.generate(this.readUInt(),(i : any) =>  {
            return this.readSupertype();
        });
    }
    readDartTypeList() : core.DartList<lib3.DartType> {
        return new core.DartList.generate(this.readUInt(),(i : any) =>  {
            return this.readDartType();
        });
    }
    readNamedTypeList() : core.DartList<lib3.NamedType> {
        return new core.DartList.generate(this.readUInt(),(i : any) =>  {
            return this.readNamedType();
        });
    }
    readNamedType() : lib3.NamedType {
        return new lib3.NamedType(this.readStringReference(),this.readDartType());
    }
    readDartTypeOption() : lib3.DartType {
        return this.readAndCheckOptionTag() ? this.readDartType() : null;
    }
    readDartType() : lib3.DartType {
        let tag : number = this.readByte();
        switch (tag) {
            case lib7.Tag.TypedefType:
                return new lib3.TypedefType.byReference(this.readTypedefReference(),this.readDartTypeList());
            case lib7.Tag.VectorType:
                return new lib3.VectorType();
            case lib7.Tag.BottomType:
                return new lib3.BottomType();
            case lib7.Tag.InvalidType:
                return new lib3.InvalidType();
            case lib7.Tag.DynamicType:
                return new lib3.DynamicType();
            case lib7.Tag.VoidType:
                return new lib3.VoidType();
            case lib7.Tag.InterfaceType:
                return new lib3.InterfaceType.byReference(this.readClassReference(),this.readDartTypeList());
            case lib7.Tag.SimpleInterfaceType:
                return new lib3.InterfaceType.byReference(this.readClassReference(),new core.DartList.literal<lib3.DartType>());
            case lib7.Tag.FunctionType:
                let typeParameterStackHeight : number = this.typeParameterStack.length;
                let typeParameters = this.readAndPushTypeParameterList();
                let requiredParameterCount = this.readUInt();
                let totalParameterCount = this.readUInt();
                let positional = this.readDartTypeList();
                let named = this.readNamedTypeList();
                /* TODO (AssertStatementImpl) : assert (positional.length + named.length == totalParameterCount); */;
                let returnType = this.readDartType();
                this.typeParameterStack.length = typeParameterStackHeight;
                return new lib3.FunctionType(positional,returnType,{
                    typeParameters : typeParameters,requiredParameterCount : requiredParameterCount,namedParameters : named});
            case lib7.Tag.SimpleFunctionType:
                let positional = this.readDartTypeList();
                let returnType = this.readDartType();
                return new lib3.FunctionType(positional,returnType);
            case lib7.Tag.TypeParameterType:
                let index : number = this.readUInt();
                this.readUInt();
                let bound = this.readDartTypeOption();
                return new lib3.TypeParameterType(this.typeParameterStack[index],bound);
            default:
                throw this.fail(`Invalid dart type tag: ${tag}`);
        }
    }
    readAndPushTypeParameterList(list? : core.DartList<lib3.TypeParameter>,parent? : lib3.TreeNode) : core.DartList<lib3.TypeParameter> {
        let length : number = this.readUInt();
        if (length == 0) return (list || new core.DartList.literal<lib3.TypeParameter>());
        if (list == null) {
            list = new core.DartList.generate(length,(i : any) =>  {
                return ((_) : lib3.TypeParameter =>  {
                    {
                        _.parent = parent;
                        return _;
                    }
                })(new lib3.TypeParameter(null,null));
            });
        }else if (list.length != length) {
            list.length = length;
            for(let i : number = 0; i < length; ++i){
                list[i] = ((_) : lib3.TypeParameter =>  {
                    {
                        _.parent = parent;
                        return _;
                    }
                })(new lib3.TypeParameter(null,null));
            }
        }
        this.typeParameterStack.addAll(list);
        for(let i : number = 0; i < list.length; ++i){
            this.readTypeParameter(list[i]);
        }
        return list;
    }
    readTypeParameter(node : lib3.TypeParameter) : void {
        node.name = this.readStringOrNullIfEmpty();
        node.bound = this.readDartType();
    }
    readArguments() : lib3.Arguments {
        let numArguments = this.readUInt();
        let typeArguments = this.readDartTypeList();
        let positional = this.readExpressionList();
        let named = this.readNamedExpressionList();
        /* TODO (AssertStatementImpl) : assert (numArguments == positional.length + named.length); */;
        return new lib3.Arguments(positional,{
            types : typeArguments,named : named});
    }
    readNamedExpressionList() : core.DartList<lib3.NamedExpression> {
        return new core.DartList.generate(this.readUInt(),(i : any) =>  {
            return this.readNamedExpression();
        });
    }
    readNamedExpression() : lib3.NamedExpression {
        return new lib3.NamedExpression(this.readStringReference(),this.readExpression());
    }
    readAndPushVariableDeclarationList() : core.DartList<lib3.VariableDeclaration> {
        return new core.DartList.generate(this.readUInt(),(i : any) =>  {
            return this.readAndPushVariableDeclaration();
        });
    }
    readAndPushVariableDeclarationOption() : lib3.VariableDeclaration {
        return this.readAndCheckOptionTag() ? this.readAndPushVariableDeclaration() : null;
    }
    readAndPushVariableDeclaration() : lib3.VariableDeclaration {
        let variable = this.readVariableDeclaration();
        this.variableStack.add(variable);
        return variable;
    }
    readVariableDeclaration() : lib3.VariableDeclaration {
        let offset : number = this.readOffset();
        let fileEqualsOffset : number = this.readOffset();
        let flags : number = this.readByte();
        return ((_) : lib3.VariableDeclaration =>  {
            {
                _.fileOffset = offset;
                _.fileEqualsOffset = fileEqualsOffset;
                return _;
            }
        })(new lib3.VariableDeclaration(this.readStringOrNullIfEmpty(),{
            type : this.readDartType(),initializer : this.readExpressionOption(),isFinal : flags & 1 != 0,isConst : flags & 2 != 0}));
    }
    readOffset() : number {
        return this.readUInt() - 1;
    }
}

export class properties {
}
