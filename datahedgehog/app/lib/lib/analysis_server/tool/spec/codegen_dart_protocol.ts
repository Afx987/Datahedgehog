/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/tool/spec/codegen_dart_protocol.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/path/lib/path";
import * as lib4 from "./from_html";
import * as lib5 from "./codegen_dart";
import * as lib6 from "./to_html";
import * as lib7 from "./implied_types";
import * as lib8 from "./api";
import * as convert from "@dart2ts/dart/convert";

export var target : (responseRequiresRequestTime : boolean) => any = (responseRequiresRequestTime : boolean) : any =>  {
    return new bare.createInstance(any,null,'lib/protocol/protocol_generated.dart',(pkgPath : string) =>  {
        let visitor : CodegenProtocolVisitor = new CodegenProtocolVisitor(lib3.basename(pkgPath),responseRequiresRequestTime,lib4.readApi(pkgPath));
        return visitor.collectCode(visitor.visitApi.bind(visitor));
    });
};
export namespace CodegenProtocolVisitor {
    export type Constructors = lib5.DartCodegenVisitor.Constructors | 'CodegenProtocolVisitor';
    export type Interface = Omit<CodegenProtocolVisitor, Constructors>;
}
@DartClass
@With(any)
export class CodegenProtocolVisitor extends lib5.DartCodegenVisitor implements any.Interface {
    private static __$_optionalConstructorArguments : core.DartMap<string,core.DartList<string>>;
    static get _optionalConstructorArguments() : core.DartMap<string,core.DartList<string>> { 
        if (this.__$_optionalConstructorArguments===undefined) {
            this.__$_optionalConstructorArguments = new core.DartMap.literal([
                ['AnalysisErrorFixes',new core.DartList.literal('fixes')],
                ['SourceChange',new core.DartList.literal('edits','linkedEditGroups')],
                ['SourceFileEdit',new core.DartList.literal('edits')],
                ['TypeHierarchyItem',new core.DartList.literal('interfaces','mixins','subclasses')]]);
        }
        return this.__$_optionalConstructorArguments;
    }

    private static __$disclaimer : string;
    static get disclaimer() : string { 
        if (this.__$disclaimer===undefined) {
            this.__$disclaimer = 'Clients may not extend, implement or mix-in this class.';
        }
        return this.__$disclaimer;
    }

    packageName : string;

    responseRequiresRequestTime : boolean;

    toHtmlVisitor : lib6.ToHtmlVisitor;

    impliedTypes : core.DartMap<string,lib7.ImpliedType>;

    constructor(packageName : string,responseRequiresRequestTime : boolean,api : lib8.Api) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    CodegenProtocolVisitor(packageName : string,responseRequiresRequestTime : boolean,api : lib8.Api) {
        this.toHtmlVisitor = new lib6.ToHtmlVisitor(api);
        this.impliedTypes = lib7.computeImpliedTypes(api);
        super.DartCodegenVisitor(api);
        this.packageName = packageName;
        this.responseRequiresRequestTime = responseRequiresRequestTime;
        codeGeneratorSettings.commentLineLength = 79;
        codeGeneratorSettings.languageName = 'dart';
    }
    compareEqualsCode(type : lib8.TypeDecl,thisVar : string,otherVar : string) : string {
        let resolvedType : lib8.TypeDecl = this.resolveTypeReferenceChain(type);
        if (is(resolvedType, lib8.TypeReference) || is(resolvedType, lib8.TypeEnum) || is(resolvedType, lib8.TypeObject) || is(resolvedType, lib8.TypeUnion)) {
            return `${thisVar} == ${otherVar}`;
        }else if (is(resolvedType, lib8.TypeList)) {
            let itemTypeName : string = this.dartType(resolvedType.itemType);
            let subComparison : string = this.compareEqualsCode(resolvedType.itemType,'a','b');
            let closure : string = `(${itemTypeName} a, ${itemTypeName} b) => ${subComparison}`;
            return `listEqual(${thisVar}, ${otherVar}, ${closure})`;
        }else if (is(resolvedType, lib8.TypeMap)) {
            let valueTypeName : string = this.dartType(resolvedType.valueType);
            let subComparison : string = this.compareEqualsCode(resolvedType.valueType,'a','b');
            let closure : string = `(${valueTypeName} a, ${valueTypeName} b) => ${subComparison}`;
            return `mapEqual(${thisVar}, ${otherVar}, ${closure})`;
        }
        throw new core.Exception(`Don't know how to compare for equality: ${resolvedType}`);
    }
    emitClasses(types : core.DartList<lib7.ImpliedType>) : void {
        for(let impliedType of types) {
            let type : lib8.TypeDecl = impliedType.type;
            let dartTypeName : string = capitalize(impliedType.camelName);
            if (op(Op.EQUALS,type,null)) {
                writeln();
                this.emitEmptyObjectClass(dartTypeName,impliedType);
            }else if (is(type, lib8.TypeObject)) {
                writeln();
                this.emitObjectClass(dartTypeName,type,impliedType);
            }else if (is(type, lib8.TypeEnum)) {
                writeln();
                this.emitEnumClass(dartTypeName,type,impliedType);
            }
        }
    }
    emitConvenienceConstructor(className : string,impliedType : lib7.ImpliedType) : boolean {
        let inputType : string;
        let inputName : string;
        let fieldName : string;
        let makeDecoder : string;
        let constructorName : string;
        let extraArgs : core.DartList<string> = new core.DartList.literal<string>();
        switch (impliedType.kind) {
            case 'requestParams':
                inputType = 'Request';
                inputName = 'request';
                fieldName = 'params';
                makeDecoder = 'new RequestDecoder(request)';
                constructorName = 'fromRequest';
                break;
            case 'requestResult':
                inputType = 'Response';
                inputName = 'response';
                fieldName = 'result';
                makeDecoder = 'new ResponseDecoder(REQUEST_ID_REFACTORING_KINDS.remove(response.id))';
                constructorName = 'fromResponse';
                break;
            case 'notificationParams':
                inputType = 'Notification';
                inputName = 'notification';
                fieldName = 'params';
                makeDecoder = 'new ResponseDecoder(null)';
                constructorName = 'fromNotification';
                break;
            case 'refactoringOptions':
                inputType = 'EditGetRefactoringParams';
                inputName = 'refactoringParams';
                fieldName = 'options';
                makeDecoder = 'new RequestDecoder(request)';
                constructorName = 'fromRefactoringParams';
                extraArgs.add('Request request');
                break;
            default:
                return false;
        }
        let args : core.DartList<string> = new core.DartList.literal(`${inputType} ${inputName}`);
        args.addAll(extraArgs);
        writeln(`factory ${className}.${constructorName}(${args.join(', ')}) {`);
        indent(() =>  {
            let fieldNameString : string = this.literalString(new core.DartString(fieldName).replaceFirst(new core.DartRegExp('^_'),''));
            if (className == 'EditGetRefactoringParams') {
                writeln(`var params = new ${className}.fromJson(`);
                writeln(`    ${makeDecoder}, ${fieldNameString}, ${inputName}.${fieldName});`);
                writeln('REQUEST_ID_REFACTORING_KINDS[request.id] = params.kind;');
                writeln('return params;');
            }else {
                writeln(`return new ${className}.fromJson(`);
                writeln(`    ${makeDecoder}, ${fieldNameString}, ${inputName}.${fieldName});`);
            }
        });
        writeln('}');
        return true;
    }
    emitEmptyObjectClass(className : string,impliedType : lib7.ImpliedType) : void {
        docComment(this.toHtmlVisitor.collectHtml(() =>  {
            this.toHtmlVisitor.p(() =>  {
                this.toHtmlVisitor.write(impliedType.humanReadableName);
            });
            this.toHtmlVisitor.p(() =>  {
                this.toHtmlVisitor.write(CodegenProtocolVisitor.disclaimer);
            });
        }));
        write(`class ${className}`);
        if (impliedType.kind == 'refactoringFeedback') {
            writeln(' extends RefactoringFeedback implements HasToJson {');
        }else if (impliedType.kind == 'refactoringOptions') {
            writeln(' extends RefactoringOptions implements HasToJson {');
        }else if (impliedType.kind == 'requestParams') {
            writeln(' implements RequestParams {');
        }else if (impliedType.kind == 'requestResult') {
            writeln(' implements ResponseResult {');
        }else {
            writeln(' {');
        }
        indent(() =>  {
            if (impliedType.kind == 'requestResult' || impliedType.kind == 'requestParams') {
                this.emitEmptyToJsonMember();
                writeln();
            }
            if (this.emitToRequestMember(impliedType)) {
                writeln();
            }
            if (this.emitToResponseMember(impliedType)) {
                writeln();
            }
            if (this.emitToNotificationMember(impliedType)) {
                writeln();
            }
            this.emitObjectEqualsMember(null,className);
            writeln();
            this.emitObjectHashCode(null,className);
        });
        writeln('}');
    }
    emitEmptyToJsonMember() : void {
        writeln('@override');
        writeln('Map<String, dynamic> toJson() => <String, dynamic>{};');
    }
    emitEnumClass(className : string,type : lib8.TypeEnum,impliedType : lib7.ImpliedType) : void {
        docComment(this.toHtmlVisitor.collectHtml(() =>  {
            this.toHtmlVisitor.p(() =>  {
                this.toHtmlVisitor.write(impliedType.humanReadableName);
            });
            if (impliedType.type != null) {
                this.toHtmlVisitor.showType(null,impliedType.type);
            }
            this.toHtmlVisitor.p(() =>  {
                this.toHtmlVisitor.write(CodegenProtocolVisitor.disclaimer);
            });
        }));
        writeln(`class ${className} implements Enum {`);
        indent(() =>  {
            if (this.emitSpecialStaticMembers(className)) {
                writeln();
            }
            for(let value of type.values) {
                docComment(this.toHtmlVisitor.collectHtml(() =>  {
                    this.toHtmlVisitor.translateHtml(value.html);
                }));
                let valueString : string = this.literalString(value.value);
                writeln(`static const ${className} ${value.value} = const ${className}._(${valueString});`);
                writeln();
            }
            writeln('/**');
            writeln(' * A list containing all of the enum values that are defined.');
            writeln(' */');
            write('static const List<');
            write(className);
            write('> VALUES = const <');
            write(className);
            write('>[');
            let first : boolean = true;
            for(let value of type.values) {
                if (first) {
                    first = false;
                }else {
                    write(', ');
                }
                write(value.value);
            }
            writeln('];');
            writeln();
            writeln('@override');
            writeln('final String name;');
            writeln();
            writeln(`const ${className}._(this.name);`);
            writeln();
            this.emitEnumClassConstructor(className,type);
            writeln();
            this.emitEnumFromJsonConstructor(className,type,impliedType);
            writeln();
            if (this.emitSpecialConstructors(className)) {
                writeln();
            }
            if (this.emitSpecialGetters(className)) {
                writeln();
            }
            if (this.emitSpecialMethods(className)) {
                writeln();
            }
            writeln('@override');
            writeln(`String toString() => "${className}.$name";`);
            writeln();
            writeln('String toJson() => name;');
        });
        writeln('}');
    }
    emitEnumClassConstructor(className : string,type : lib8.TypeEnum) : void {
        writeln(`factory ${className}(String name) {`);
        indent(() =>  {
            writeln('switch (name) {');
            indent(() =>  {
                for(let value of type.values) {
                    let valueString : string = this.literalString(value.value);
                    writeln(`case ${valueString}:`);
                    indent(() =>  {
                        writeln(`return ${value.value};`);
                    });
                }
            });
            writeln('}');
            writeln("throw new Exception('Illegal enum value: $name');");
        });
        writeln('}');
    }
    emitEnumFromJsonConstructor(className : string,type : lib8.TypeEnum,impliedType : lib7.ImpliedType) : void {
        writeln(`factory ${className}.fromJson(JsonDecoder jsonDecoder, String jsonPath, Object json) {`);
        indent(() =>  {
            writeln('if (json is String) {');
            indent(() =>  {
                writeln('try {');
                indent(() =>  {
                    writeln(`return new ${className}(json);`);
                });
                writeln('} catch(_) {');
                indent(() =>  {
                    writeln('// Fall through');
                });
                writeln('}');
            });
            writeln('}');
            let humanReadableNameString : string = this.literalString(impliedType.humanReadableName);
            writeln(`throw jsonDecoder.mismatch(jsonPath, ${humanReadableNameString}, json);`);
        });
        writeln('}');
    }
    emitImports() : void {
        writeln("import 'dart:convert' hide JsonDecoder;");
        writeln();
        writeln("import 'package:analyzer/src/generated/utilities_general.dart';");
        writeln(`import 'package:${this.packageName}/protocol/protocol.dart';`);
        writeln(`import 'package:${this.packageName}/src/protocol/protocol_internal.dart';`);
        for(let uri of this.api.types.importUris) {
            write("import '");
            write(uri);
            writeln("';");
        }
    }
    emitObjectClass(className : string,type : lib8.TypeObject,impliedType : lib7.ImpliedType) : void {
        docComment(this.toHtmlVisitor.collectHtml(() =>  {
            this.toHtmlVisitor.p(() =>  {
                this.toHtmlVisitor.write(impliedType.humanReadableName);
            });
            if (impliedType.type != null) {
                this.toHtmlVisitor.showType(null,impliedType.type);
            }
            this.toHtmlVisitor.p(() =>  {
                this.toHtmlVisitor.write(CodegenProtocolVisitor.disclaimer);
            });
        }));
        write(`class ${className}`);
        if (impliedType.kind == 'refactoringFeedback') {
            writeln(' extends RefactoringFeedback {');
        }else if (impliedType.kind == 'refactoringOptions') {
            writeln(' extends RefactoringOptions {');
        }else if (impliedType.kind == 'requestParams') {
            writeln(' implements RequestParams {');
        }else if (impliedType.kind == 'requestResult') {
            writeln(' implements ResponseResult {');
        }else {
            writeln(' implements HasToJson {');
        }
        indent(() =>  {
            if (this.emitSpecialStaticMembers(className)) {
                writeln();
            }
            for(let field of type.fields) {
                if (field.value != null) {
                    continue;
                }
                writeln(`${this.dartType(field.type)} _${field.name};`);
                writeln();
            }
            for(let field of type.fields) {
                if (field.value != null) {
                    continue;
                }
                docComment(this.toHtmlVisitor.collectHtml(() =>  {
                    this.toHtmlVisitor.translateHtml(field.html);
                }));
                writeln(`${this.dartType(field.type)} get ${field.name} => _${field.name};`);
                writeln();
                docComment(this.toHtmlVisitor.collectHtml(() =>  {
                    this.toHtmlVisitor.translateHtml(field.html);
                }));
                writeln(`void set ${field.name}(${this.dartType(field.type)} value) {`);
                indent(() =>  {
                    if (!field.optional) {
                        writeln('assert(value != null);');
                    }
                    writeln(`this._${field.name} = value;`);
                });
                writeln('}');
                writeln();
            }
            this.emitObjectConstructor(type,className);
            writeln();
            this.emitObjectFromJsonConstructor(className,type,impliedType);
            writeln();
            if (this.emitConvenienceConstructor(className,impliedType)) {
                writeln();
            }
            if (this.emitSpecialConstructors(className)) {
                writeln();
            }
            if (this.emitSpecialGetters(className)) {
                writeln();
            }
            this.emitToJsonMember(type);
            writeln();
            if (this.emitToRequestMember(impliedType)) {
                writeln();
            }
            if (this.emitToResponseMember(impliedType)) {
                writeln();
            }
            if (this.emitToNotificationMember(impliedType)) {
                writeln();
            }
            if (this.emitSpecialMethods(className)) {
                writeln();
            }
            writeln('@override');
            writeln('String toString() => JSON.encode(toJson());');
            writeln();
            this.emitObjectEqualsMember(type,className);
            writeln();
            this.emitObjectHashCode(type,className);
        });
        writeln('}');
    }
    emitObjectConstructor(type : lib8.TypeObject,className : string) : void {
        let args : core.DartList<string> = new core.DartList.literal<string>();
        let optionalArgs : core.DartList<string> = new core.DartList.literal<string>();
        let extraInitCode : core.DartList<() => void> = new core.DartList.literal<() => void>();
        for(let field of type.fields) {
            if (field.value != null) {
                continue;
            }
            let arg : string = `${this.dartType(field.type)} ${field.name}`;
            let setValueFromArg : string = `this.${field.name} = ${field.name};`;
            if (this.isOptionalConstructorArg(className,field)) {
                optionalArgs.add(arg);
                if (!field.optional) {
                    let fieldType : lib8.TypeDecl = field.type;
                    if (is(fieldType, lib8.TypeList)) {
                        extraInitCode.add(() =>  {
                            writeln(`if (${field.name} == null) {`);
                            indent(() =>  {
                                writeln(`this.${field.name} = <${this.dartType(fieldType.itemType)}>[];`);
                            });
                            writeln('} else {');
                            indent(() =>  {
                                writeln(setValueFromArg);
                            });
                            writeln('}');
                        });
                    }else {
                        throw new core.Exception("Don't know how to create default field value.");
                    }
                }else {
                    extraInitCode.add(() =>  {
                        writeln(setValueFromArg);
                    });
                }
            }else {
                args.add(arg);
                extraInitCode.add(() =>  {
                    writeln(setValueFromArg);
                });
            }
        }
        if (optionalArgs.isNotEmpty) {
            args.add(`{${optionalArgs.join(', ')}}`);
        }
        write(`${className}(${args.join(', ')})`);
        if (extraInitCode.isEmpty) {
            writeln(';');
        }else {
            writeln(' {');
            indent(() =>  {
                for(let callback of extraInitCode) {
                    callback();
                }
            });
            writeln('}');
        }
    }
    emitObjectEqualsMember(type : lib8.TypeObject,className : string) : void {
        writeln('@override');
        writeln('bool operator ==(other) {');
        indent(() =>  {
            writeln(`if (other is ${className}) {`);
            indent(() =>  {
                let comparisons = new core.DartList.literal<string>();
                if (type != null) {
                    for(let field of type.fields) {
                        if (field.value != null) {
                            continue;
                        }
                        comparisons.add(this.compareEqualsCode(field.type,field.name,`other.${field.name}`));
                    }
                }
                if (comparisons.isEmpty) {
                    writeln('return true;');
                }else {
                    let concatenated : string = comparisons.join(' &&\n    ');
                    writeln(`return ${concatenated};`);
                }
            });
            writeln('}');
            writeln('return false;');
        });
        writeln('}');
    }
    emitObjectFromJsonConstructor(className : string,type : lib8.TypeObject,impliedType : lib7.ImpliedType) : void {
        let humanReadableNameString : string = this.literalString(impliedType.humanReadableName);
        if (className == 'RefactoringFeedback') {
            writeln('factory RefactoringFeedback.fromJson(JsonDecoder jsonDecoder, ' + 'String jsonPath, Object json, Map responseJson) {');
            indent(() =>  {
                writeln('return refactoringFeedbackFromJson(jsonDecoder, jsonPath, ' + 'json, responseJson);');
            });
            writeln('}');
            return;
        }
        if (className == 'RefactoringOptions') {
            writeln('factory RefactoringOptions.fromJson(JsonDecoder jsonDecoder, ' + 'String jsonPath, Object json, RefactoringKind kind) {');
            indent(() =>  {
                writeln('return refactoringOptionsFromJson(jsonDecoder, jsonPath, ' + 'json, kind);');
            });
            writeln('}');
            return;
        }
        writeln(`factory ${className}.fromJson(JsonDecoder jsonDecoder, String jsonPath, Object json) {`);
        indent(() =>  {
            writeln('if (json == null) {');
            indent(() =>  {
                writeln('json = {};');
            });
            writeln('}');
            writeln('if (json is Map) {');
            indent(() =>  {
                let args : core.DartList<string> = new core.DartList.literal<string>();
                let optionalArgs : core.DartList<string> = new core.DartList.literal<string>();
                for(let field of type.fields) {
                    let fieldNameString : string = this.literalString(field.name);
                    let fieldAccessor : string = `json[${fieldNameString}]`;
                    let jsonPath : string = `jsonPath + ${this.literalString(`.${field.name}`)}`;
                    if (field.value != null) {
                        let valueString : string = this.literalString(field.value);
                        writeln(`if (${fieldAccessor} != ${valueString}) {`);
                        indent(() =>  {
                            writeln(`throw jsonDecoder.mismatch(jsonPath, "equal " + ${valueString}, json);`);
                        });
                        writeln('}');
                        continue;
                    }
                    if (this.isOptionalConstructorArg(className,field)) {
                        optionalArgs.add(`${field.name}: ${field.name}`);
                    }else {
                        args.add(field.name);
                    }
                    let fieldType : lib8.TypeDecl = field.type;
                    let fieldDartType : string = this.dartType(fieldType);
                    writeln(`${fieldDartType} ${field.name};`);
                    writeln(`if (json.containsKey(${fieldNameString})) {`);
                    indent(() =>  {
                        let fromJson : string = this.fromJsonCode(fieldType).asSnippet(jsonPath,fieldAccessor);
                        writeln(`${field.name} = ${fromJson};`);
                    });
                    write('}');
                    if (!field.optional) {
                        writeln(' else {');
                        indent(() =>  {
                            writeln(`throw jsonDecoder.mismatch(jsonPath, ${fieldNameString});`);
                        });
                        writeln('}');
                    }else {
                        writeln();
                    }
                }
                args.addAll(optionalArgs);
                writeln(`return new ${className}(${args.join(', ')});`);
            });
            writeln('} else {');
            indent(() =>  {
                writeln(`throw jsonDecoder.mismatch(jsonPath, ${humanReadableNameString}, json);`);
            });
            writeln('}');
        });
        writeln('}');
    }
    emitObjectHashCode(type : lib8.TypeObject,className : string) : void {
        writeln('@override');
        writeln('int get hashCode {');
        indent(() =>  {
            if (op(Op.EQUALS,type,null)) {
                writeln(`return ${new core.DartString(className).hashCode};`);
            }else {
                writeln('int hash = 0;');
                for(let field of type.fields) {
                    let valueToCombine : string;
                    if (field.value != null) {
                        valueToCombine = new core.DartInt(field.value.hashCode).toString();
                    }else {
                        valueToCombine = `${field.name}.hashCode`;
                    }
                    writeln(`hash = JenkinsSmiHash.combine(hash, ${valueToCombine});`);
                }
                writeln('return JenkinsSmiHash.finish(hash);');
            }
        });
        writeln('}');
    }
    emitSpecialConstructors(className : string) : boolean {
        switch (className) {
            case 'LinkedEditGroup':
                docComment(new core.DartList.literal(new bare.createInstance(any,null,'Construct an empty LinkedEditGroup.')));
                writeln('LinkedEditGroup.empty() : this(<Position>[], 0, <LinkedEditSuggestion>[]);');
                return true;
            case 'RefactoringProblemSeverity':
                docComment(new core.DartList.literal(new bare.createInstance(any,null,'Returns the [RefactoringProblemSeverity] with the maximal severity.')));
                writeln('static RefactoringProblemSeverity max(RefactoringProblemSeverity a, RefactoringProblemSeverity b) =>');
                writeln('    maxRefactoringProblemSeverity(a, b);');
                return true;
            default:
                return false;
        }
    }
    emitSpecialGetters(className : string) : boolean {
        switch (className) {
            case 'Element':
                for(let name of properties.specialElementFlags.keys) {
                    let flag : string = `FLAG_${new core.DartString(name).toUpperCase()}`;
                    writeln(`bool get ${camelJoin(new core.DartList.literal('is',name))} => (flags & ${flag}) != 0;`);
                }
                return true;
            case 'SourceEdit':
                docComment(new core.DartList.literal(new bare.createInstance(any,null,'The end of the region to be modified.')));
                writeln('int get end => offset + length;');
                return true;
            default:
                return false;
        }
    }
    emitSpecialMethods(className : string) : boolean {
        switch (className) {
            case 'LinkedEditGroup':
                docComment(new core.DartList.literal(new bare.createInstance(any,null,'Add a new position and change the length.')));
                writeln('void addPosition(Position position, int length) {');
                indent(() =>  {
                    writeln('positions.add(position);');
                    writeln('this.length = length;');
                });
                writeln('}');
                writeln();
                docComment(new core.DartList.literal(new bare.createInstance(any,null,'Add a new suggestion.')));
                writeln('void addSuggestion(LinkedEditSuggestion suggestion) {');
                indent(() =>  {
                    writeln('suggestions.add(suggestion);');
                });
                writeln('}');
                return true;
            case 'SourceChange':
                docComment(new core.DartList.literal(new bare.createInstance(any,null,'Adds [edit] to the [FileEdit] for the given [file].')));
                writeln('void addEdit(String file, int fileStamp, SourceEdit edit) =>');
                writeln('    addEditToSourceChange(this, file, fileStamp, edit);');
                writeln();
                docComment(new core.DartList.literal(new bare.createInstance(any,null,'Adds the given [FileEdit].')));
                writeln('void addFileEdit(SourceFileEdit edit) {');
                indent(() =>  {
                    writeln('edits.add(edit);');
                });
                writeln('}');
                writeln();
                docComment(new core.DartList.literal(new bare.createInstance(any,null,'Adds the given [LinkedEditGroup].')));
                writeln('void addLinkedEditGroup(LinkedEditGroup linkedEditGroup) {');
                indent(() =>  {
                    writeln('linkedEditGroups.add(linkedEditGroup);');
                });
                writeln('}');
                writeln();
                docComment(new core.DartList.literal(new bare.createInstance(any,null,'Returns the [FileEdit] for the given [file], maybe `null`.')));
                writeln('SourceFileEdit getFileEdit(String file) =>');
                writeln('    getChangeFileEdit(this, file);');
                return true;
            case 'SourceEdit':
                docComment(new core.DartList.literal(new bare.createInstance(any,null,'Get the result of applying the edit to the given [code].')));
                writeln('String apply(String code) => applyEdit(code, this);');
                return true;
            case 'SourceFileEdit':
                docComment(new core.DartList.literal(new bare.createInstance(any,null,'Adds the given [Edit] to the list.')));
                writeln('void add(SourceEdit edit) => addEditForSource(this, edit);');
                writeln();
                docComment(new core.DartList.literal(new bare.createInstance(any,null,'Adds the given [Edit]s.')));
                writeln('void addAll(Iterable<SourceEdit> edits) =>');
                writeln('    addAllEditsForSource(this, edits);');
                return true;
            default:
                return false;
        }
    }
    emitSpecialStaticMembers(className : string) : boolean {
        switch (className) {
            case 'Element':
                let makeFlagsArgs : core.DartList<string> = new core.DartList.literal<string>();
                let makeFlagsStatements : core.DartList<string> = new core.DartList.literal<string>();
                properties.specialElementFlags.forEach((name : string,value : string) =>  {
                    let flag : string = `FLAG_${new core.DartString(name).toUpperCase()}`;
                    let camelName : string = camelJoin(new core.DartList.literal('is',name));
                    writeln(`static const int ${flag} = ${value};`);
                    makeFlagsArgs.add(`${camelName}: false`);
                    makeFlagsStatements.add(`if (${camelName}) flags |= ${flag};`);
                });
                writeln();
                writeln(`static int makeFlags({${makeFlagsArgs.join(', ')}}) {`);
                indent(() =>  {
                    writeln('int flags = 0;');
                    for(let statement of makeFlagsStatements) {
                        writeln(statement);
                    }
                    writeln('return flags;');
                });
                writeln('}');
                return true;
            case 'SourceEdit':
                docComment(new core.DartList.literal(new bare.createInstance(any,null,'Get the result of applying a set of ' + '[edits] to the given [code].  Edits are applied in the order ' + 'they appear in [edits].')));
                writeln('static String applySequence(String code, Iterable<SourceEdit> edits) =>');
                writeln('    applySequenceOfEdits(code, edits);');
                return true;
            default:
                return false;
        }
    }
    emitToJsonMember(type : lib8.TypeObject) : void {
        writeln('@override');
        writeln('Map<String, dynamic> toJson() {');
        indent(() =>  {
            writeln('Map<String, dynamic> result = {};');
            for(let field of type.fields) {
                let fieldNameString : string = this.literalString(field.name);
                if (field.value != null) {
                    writeln(`result[${fieldNameString}] = ${this.literalString(field.value)};`);
                    continue;
                }
                let fieldToJson : string = this.toJsonCode(field.type).asSnippet(field.name);
                let populateField : string = `result[${fieldNameString}] = ${fieldToJson};`;
                if (field.optional) {
                    writeln(`if (${field.name} != null) {`);
                    indent(() =>  {
                        writeln(populateField);
                    });
                    writeln('}');
                }else {
                    writeln(populateField);
                }
            }
            writeln('return result;');
        });
        writeln('}');
    }
    emitToNotificationMember(impliedType : lib7.ImpliedType) : boolean {
        if (impliedType.kind == 'notificationParams') {
            writeln('Notification toNotification() {');
            indent(() =>  {
                let eventString : string = this.literalString((impliedType.apiNode as lib8.Notification).longEvent);
                let jsonPart : string = impliedType.type != null ? 'toJson()' : 'null';
                writeln(`return new Notification(${eventString}, ${jsonPart});`);
            });
            writeln('}');
            return true;
        }
        return false;
    }
    emitToRequestMember(impliedType : lib7.ImpliedType) : boolean {
        if (impliedType.kind == 'requestParams') {
            writeln('@override');
            writeln('Request toRequest(String id) {');
            indent(() =>  {
                let methodString : string = this.literalString((impliedType.apiNode as lib8.Request).longMethod);
                let jsonPart : string = impliedType.type != null ? 'toJson()' : 'null';
                writeln(`return new Request(id, ${methodString}, ${jsonPart});`);
            });
            writeln('}');
            return true;
        }
        return false;
    }
    emitToResponseMember(impliedType : lib7.ImpliedType) : boolean {
        if (impliedType.kind == 'requestResult') {
            writeln('@override');
            if (this.responseRequiresRequestTime) {
                writeln('Response toResponse(String id, int requestTime) {');
            }else {
                writeln('Response toResponse(String id) {');
            }
            indent(() =>  {
                let jsonPart : string = impliedType.type != null ? 'toJson()' : 'null';
                if (this.responseRequiresRequestTime) {
                    writeln(`return new Response(id, requestTime, result: ${jsonPart});`);
                }else {
                    writeln(`return new Response(id, result: ${jsonPart});`);
                }
            });
            writeln('}');
            return true;
        }
        return false;
    }
    fromJsonCode(type : lib8.TypeDecl) : FromJsonCode {
        if (is(type, lib8.TypeReference)) {
            let referencedDefinition : lib8.TypeDefinition = op(Op.INDEX,this.api.types,type.typeName);
            if (referencedDefinition != null) {
                let referencedType : lib8.TypeDecl = referencedDefinition.type;
                if (is(referencedType, lib8.TypeObject) || is(referencedType, lib8.TypeEnum)) {
                    return new FromJsonSnippet((jsonPath : string,json : string) =>  {
                        let typeName : string = this.dartType(type);
                        if (typeName == 'RefactoringFeedback') {
                            return `new ${typeName}.fromJson(jsonDecoder, ${jsonPath}, ${json}, json)`;
                        }else if (typeName == 'RefactoringOptions') {
                            return `new ${typeName}.fromJson(jsonDecoder, ${jsonPath}, ${json}, kind)`;
                        }else {
                            return `new ${typeName}.fromJson(jsonDecoder, ${jsonPath}, ${json})`;
                        }
                    });
                }else {
                    return this.fromJsonCode(referencedType);
                }
            }else {
                switch (type.typeName) {
                    case 'String':
                        return new FromJsonFunction('jsonDecoder.decodeString');
                    case 'bool':
                        return new FromJsonFunction('jsonDecoder.decodeBool');
                    case 'int':
                    case 'long':
                        return new FromJsonFunction('jsonDecoder.decodeInt');
                    case 'object':
                        return new FromJsonIdentity();
                    default:
                        throw new core.Exception(`Unexpected type name ${type.typeName}`);
                }
            }
        }else if (is(type, lib8.TypeMap)) {
            let keyCode : FromJsonCode;
            if (this.dartType(type.keyType) != 'String') {
                keyCode = this.fromJsonCode(type.keyType);
            }else {
                keyCode = new FromJsonIdentity();
            }
            let valueCode : FromJsonCode = this.fromJsonCode(type.valueType);
            if (keyCode.isIdentity && valueCode.isIdentity) {
                return new FromJsonFunction('jsonDecoder.decodeMap');
            }else {
                return new FromJsonSnippet((jsonPath : string,json : string) =>  {
                    let result : core.DartStringBuffer = new core.DartStringBuffer();
                    result.write(`jsonDecoder.decodeMap(${jsonPath}, ${json}`);
                    if (!keyCode.isIdentity) {
                        result.write(`, keyDecoder: ${keyCode.asClosure}`);
                    }
                    if (!valueCode.isIdentity) {
                        result.write(`, valueDecoder: ${valueCode.asClosure}`);
                    }
                    result.write(')');
                    return result.toString();
                });
            }
        }else if (is(type, lib8.TypeList)) {
            let itemCode : FromJsonCode = this.fromJsonCode(type.itemType);
            if (itemCode.isIdentity) {
                return new FromJsonFunction('jsonDecoder.decodeList');
            }else {
                return new FromJsonSnippet((jsonPath : string,json : string) =>  {
                    return `jsonDecoder.decodeList(${jsonPath}, ${json}, ${itemCode.asClosure})`;
                });
            }
        }else if (is(type, lib8.TypeUnion)) {
            let decoders : core.DartList<string> = new core.DartList.literal<string>();
            for(let choice of type.choices) {
                let resolvedChoice : lib8.TypeDecl = this.resolveTypeReferenceChain(choice);
                if (is(resolvedChoice, lib8.TypeObject)) {
                    let field : lib8.TypeObjectField = resolvedChoice.getField(type.field);
                    if (op(Op.EQUALS,field,null)) {
                        throw new core.Exception(`Each choice in the union needs a field named ${type.field}`);
                    }
                    if (op(Op.EQUALS,field.value,null)) {
                        throw new core.Exception(`Each choice in the union needs a constant value for the field ${type.field}`);
                    }
                    let closure : string = this.fromJsonCode(choice).asClosure;
                    decoders.add(`${this.literalString(field.value)}: ${closure}`);
                }else {
                    throw new core.Exception('Union types must be unions of objects.');
                }
            }
            return new FromJsonSnippet((jsonPath : string,json : string) =>  {
                return `jsonDecoder.decodeUnion(${jsonPath}, ${json}, ${this.literalString(type.field)}, {${decoders.join(', ')}})`;
            });
        }else {
            throw new core.Exception(`Can't convert ${type} from JSON`);
        }
    }
    getClassesToEmit() : core.DartList<lib7.ImpliedType> {
        let types : core.DartList<lib7.ImpliedType> = this.impliedTypes.values.where((type : lib7.ImpliedType) =>  {
            let node : lib8.ApiNode = type.apiNode;
            return !(is(node, lib8.TypeDefinition) && node.isExternal);
        }).toList();
        types.sort((first : any,second : any) =>  {
            return capitalize(first.camelName).compareTo(capitalize(second.camelName));
        });
        return types;
    }
    isOptionalConstructorArg(className : string,field : lib8.TypeObjectField) : boolean {
        if (field.optional) {
            return true;
        }
        let forceOptional : core.DartList<string> = CodegenProtocolVisitor._optionalConstructorArguments.get(className);
        if (forceOptional != null && forceOptional.contains(field.name)) {
            return true;
        }
        return false;
    }
    literalString(s : string) : string {
        return convert.properties.JSON.encode(s);
    }
    toJsonCode(type : lib8.TypeDecl) : ToJsonCode {
        let resolvedType : lib8.TypeDecl = this.resolveTypeReferenceChain(type);
        if (is(resolvedType, lib8.TypeReference)) {
            return new ToJsonIdentity(this.dartType(type));
        }else if (is(resolvedType, lib8.TypeList)) {
            let itemCode : ToJsonCode = this.toJsonCode(resolvedType.itemType);
            if (itemCode.isIdentity) {
                return new ToJsonIdentity(this.dartType(type));
            }else {
                return new ToJsonSnippet(this.dartType(type),(value : string) =>  {
                    return `${value}.map(${itemCode.asClosure}).toList()`;
                });
            }
        }else if (is(resolvedType, lib8.TypeMap)) {
            let keyCode : ToJsonCode;
            if (this.dartType(resolvedType.keyType) != 'String') {
                keyCode = this.toJsonCode(resolvedType.keyType);
            }else {
                keyCode = new ToJsonIdentity(this.dartType(resolvedType.keyType));
            }
            let valueCode : ToJsonCode = this.toJsonCode(resolvedType.valueType);
            if (keyCode.isIdentity && valueCode.isIdentity) {
                return new ToJsonIdentity(this.dartType(resolvedType));
            }else {
                return new ToJsonSnippet(this.dartType(type),(value : string) =>  {
                    let result : core.DartStringBuffer = new core.DartStringBuffer();
                    result.write(`mapMap(${value}`);
                    if (!keyCode.isIdentity) {
                        result.write(`, keyCallback: ${keyCode.asClosure}`);
                    }
                    if (!valueCode.isIdentity) {
                        result.write(`, valueCallback: ${valueCode.asClosure}`);
                    }
                    result.write(')');
                    return result.toString();
                });
            }
        }else if (is(resolvedType, lib8.TypeUnion)) {
            for(let choice of resolvedType.choices) {
                if (isNot(this.resolveTypeReferenceChain(choice), lib8.TypeObject)) {
                    throw new core.Exception('Union types must be unions of objects');
                }
            }
            return new ToJsonSnippet(this.dartType(type),(value : string) =>  {
                return `${value}.toJson()`;
            });
        }else if (is(resolvedType, lib8.TypeObject) || is(resolvedType, lib8.TypeEnum)) {
            return new ToJsonSnippet(this.dartType(type),(value : string) =>  {
                return `${value}.toJson()`;
            });
        }else {
            throw new core.Exception(`Can't convert ${resolvedType} from JSON`);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitApi() {
        outputHeader({
            year : '2017'});
        writeln();
        this.emitImports();
        this.emitClasses(this.getClassesToEmit());
    }
}

export namespace FromJsonCode {
    export type Constructors = 'FromJsonCode';
    export type Interface = Omit<FromJsonCode, Constructors>;
}
@DartClass
export class FromJsonCode {
    @AbstractProperty
    get asClosure() : string{ throw 'abstract'}
    @AbstractProperty
    get isIdentity() : boolean{ throw 'abstract'}
    @Abstract
    asSnippet(jsonPath : string,json : string) : string{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    FromJsonCode() {
    }
}

export namespace ToJsonCode {
    export type Constructors = 'ToJsonCode';
    export type Interface = Omit<ToJsonCode, Constructors>;
}
@DartClass
export class ToJsonCode {
    @AbstractProperty
    get asClosure() : string{ throw 'abstract'}
    @AbstractProperty
    get isIdentity() : boolean{ throw 'abstract'}
    @Abstract
    asSnippet(value : string) : string{ throw 'abstract'}
    constructor() {
    }
    @defaultConstructor
    ToJsonCode() {
    }
}

export namespace FromJsonFunction {
    export type Constructors = FromJsonCode.Constructors | 'FromJsonFunction';
    export type Interface = Omit<FromJsonFunction, Constructors>;
}
@DartClass
export class FromJsonFunction extends FromJsonCode {
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    asClosure : string;

    constructor(asClosure : string) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    FromJsonFunction(asClosure : string) {
        this.asClosure = asClosure;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isIdentity() : boolean {
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    asSnippet(jsonPath : string,json : string) : string {
        return `${this.asClosure}(${jsonPath}, ${json})`;
    }
}

export namespace FromJsonSnippet {
    export type Constructors = FromJsonCode.Constructors | 'FromJsonSnippet';
    export type Interface = Omit<FromJsonSnippet, Constructors>;
}
@DartClass
export class FromJsonSnippet extends FromJsonCode {
    callback : (jsonPath : string,json : string) => string;

    constructor(callback : (jsonPath : string,json : string) => string) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    FromJsonSnippet(callback : (jsonPath : string,json : string) => string) {
        this.callback = callback;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get asClosure() : string {
        return `(String jsonPath, Object json) => ${this.callback('jsonPath','json')}`;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isIdentity() : boolean {
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    asSnippet(jsonPath : string,json : string) : string {
        return this.callback(jsonPath,json);
    }
}

export namespace ToJsonFunction {
    export type Constructors = ToJsonCode.Constructors | 'ToJsonFunction';
    export type Interface = Omit<ToJsonFunction, Constructors>;
}
@DartClass
export class ToJsonFunction extends ToJsonCode {
    @DartPropertyAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    asClosure : string;

    constructor(asClosure : string) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ToJsonFunction(asClosure : string) {
        this.asClosure = asClosure;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isIdentity() : boolean {
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    asSnippet(value : string) : string {
        return `${this.asClosure}(${value})`;
    }
}

export namespace ToJsonSnippet {
    export type Constructors = ToJsonCode.Constructors | 'ToJsonSnippet';
    export type Interface = Omit<ToJsonSnippet, Constructors>;
}
@DartClass
export class ToJsonSnippet extends ToJsonCode {
    callback : (value : string) => string;

    type : string;

    constructor(type : string,callback : (value : string) => string) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ToJsonSnippet(type : string,callback : (value : string) => string) {
        this.type = type;
        this.callback = callback;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get asClosure() : string {
        return `(${this.type} value) => ${this.callback('value')}`;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isIdentity() : boolean {
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    asSnippet(value : string) : string {
        return this.callback(value);
    }
}

export namespace FromJsonIdentity {
    export type Constructors = FromJsonSnippet.Constructors | 'FromJsonIdentity';
    export type Interface = Omit<FromJsonIdentity, Constructors>;
}
@DartClass
export class FromJsonIdentity extends FromJsonSnippet {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    FromJsonIdentity() {
        super.FromJsonSnippet((jsonPath : string,json : string) =>  {
            return json;
        });
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isIdentity() : boolean {
        return true;
    }
}

export namespace ToJsonIdentity {
    export type Constructors = ToJsonSnippet.Constructors | 'ToJsonIdentity';
    export type Interface = Omit<ToJsonIdentity, Constructors>;
}
@DartClass
export class ToJsonIdentity extends ToJsonSnippet {
    constructor(type : string) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ToJsonIdentity(type : string) {
        super.ToJsonSnippet(type,(value : string) =>  {
            return value;
        });
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get isIdentity() : boolean {
        return true;
    }
}

export class properties {
    private static __$specialElementFlags : core.DartMap<string,string>;
    static get specialElementFlags() : core.DartMap<string,string> { 
        if (this.__$specialElementFlags===undefined) {
            this.__$specialElementFlags = new core.DartMap.literal([
                ['abstract','0x01'],
                ['const','0x02'],
                ['final','0x04'],
                ['static','0x08'],
                ['private','0x10'],
                ['deprecated','0x20']]);
        }
        return this.__$specialElementFlags;
    }
    static set specialElementFlags(__$value : core.DartMap<string,string>)  { 
        this.__$specialElementFlags = __$value;
    }

}
