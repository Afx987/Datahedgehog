/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/tool/spec/codegen_java_types.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./from_html";
import * as lib4 from "./api";
import * as lib5 from "./implied_types";
import * as lib6 from "./codegen_java";

export namespace CodegenJavaType {
    export type Constructors = lib6.CodegenJavaVisitor.Constructors | 'CodegenJavaType';
    export type Interface = Omit<CodegenJavaType, Constructors>;
}
@DartClass
export class CodegenJavaType extends lib6.CodegenJavaVisitor {
    className : string;

    superclassName : string;

    generateGetters : boolean;

    generateSetters : boolean;

    constructor(api : lib4.Api,className : string,superclassName : string,generateGetters : boolean,generateSetters : boolean) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    CodegenJavaType(api : lib4.Api,className : string,superclassName : string,generateGetters : boolean,generateSetters : boolean) {
        super.CodegenJavaVisitor(api);
        this.className = className;
        this.superclassName = superclassName;
        this.generateGetters = generateGetters;
        this.generateSetters = generateSetters;
    }
    consumerName(request : lib4.Request) : string {
        return camelJoin(new core.DartList.literal(request.method,'consumer'),{
            doCapitalize : true});
    }
    emitType(type : lib4.TypeDecl,html : any) : void {
        outputHeader({
            javaStyle : true});
        writeln('package org.dartlang.analysis.server.protocol;');
        writeln();
        if (is(type, lib4.TypeObject)) {
            this._writeTypeObject(type,html);
        }else if (is(type, lib4.TypeEnum)) {
            this._writeTypeEnum(type,html);
        }
    }
    _getAsTypeMethodName(typeDecl : lib4.TypeDecl) : string {
        let name : string = this.javaType(typeDecl,true);
        if (name == 'String') {
            return 'getAsString';
        }else if (name == 'boolean' || name == 'Boolean') {
            return 'getAsBoolean';
        }else if (name == 'int' || name == 'Integer') {
            return 'getAsInt';
        }else if (name == 'long' || name == 'Long') {
            return 'getAsLong';
        }else if (new core.DartString(name).startsWith('List')) {
            return 'getAsJsonArray';
        }else {
            return 'getAsJsonArray';
        }
    }
    _getEqualsLogicForField(field : lib4.TypeObjectField,other : string) : string {
        let name : string = this.javaName(field.name);
        if (this.isPrimitive(field.type) && !field.optional) {
            return `${other}.${name} == ${name}`;
        }else if (this.isArray(field.type)) {
            return `Arrays.equals(other.${name}, ${name})`;
        }else {
            return `ObjectUtilities.equals(${other}.${name}, ${name})`;
        }
    }
    _getToStringForField(field : lib4.TypeObjectField) : string {
        let name : string = this.javaName(field.name);
        if (this.isArray(field.type) || this.isList(field.type)) {
            return `StringUtils.join(${name}, ", ")`;
        }else {
            return name;
        }
    }
    _isTypeFieldInUpdateContentUnionType(className : string,fieldName : string) : boolean {
        if ((className == 'AddContentOverlay' || className == 'ChangeContentOverlay' || className == 'RemoveContentOverlay') && fieldName == 'type') {
            return true;
        }else {
            return false;
        }
    }
    _writeExtraContentInElementType() : void {
        properties._extraFieldsOnElement.forEach((name : string,value : string) =>  {
            this.publicField(this.javaName(name),() =>  {
                writeln(`private static final int ${name} = ${value};`);
            });
        });
        properties._extraMethodsOnElement.forEach((methodName : string,fieldName : string) =>  {
            this.publicMethod(methodName,() =>  {
                writeln(`public boolean ${methodName}() {`);
                writeln(`  return (flags & ${fieldName}) != 0;`);
                writeln('}');
            });
        });
    }
    _writeOutJsonObjectAddStatement(field : lib4.TypeObjectField) : void {
        let name : string = this.javaName(field.name);
        if (this.isDeclaredInSpec(field.type)) {
            writeln(`jsonObject.add("${name}", ${name}.toJson());`);
        }else if (is(field.type, lib4.TypeList)) {
            let listItemType : lib4.TypeDecl = (field.type as lib4.TypeList).itemType;
            let jsonArrayName : string = `jsonArray${capitalize(name)}`;
            writeln(`JsonArray ${jsonArrayName} = new JsonArray();`);
            writeln(`for (${this.javaType(listItemType)} elt : ${name}) {`);
            indent(() =>  {
                if (this.isDeclaredInSpec(listItemType)) {
                    writeln(`${jsonArrayName}.add(elt.toJson());`);
                }else {
                    writeln(`${jsonArrayName}.add(new JsonPrimitive(elt));`);
                }
            });
            writeln('}');
            writeln(`jsonObject.add("${name}", ${jsonArrayName});`);
        }else {
            writeln(`jsonObject.addProperty("${name}", ${name});`);
        }
    }
    _writeTypeEnum(type : lib4.TypeDecl,html : any) : void {
        this.javadocComment(this.toHtmlVisitor.collectHtml(() =>  {
            this.toHtmlVisitor.translateHtml(html);
            this.toHtmlVisitor.br();
            this.toHtmlVisitor.write('@coverage dart.server.generated.types');
        }));
        this.makeClass(`public class ${this.className}`,() =>  {
            let typeEnum : lib4.TypeEnum = type as lib4.TypeEnum;
            let values : core.DartList<lib4.TypeEnumValue> = typeEnum.values;
            for(let value of values) {
                this.privateField(this.javaName(value.value),() =>  {
                    this.javadocComment(this.toHtmlVisitor.collectHtml(() =>  {
                        this.toHtmlVisitor.translateHtml(value.html);
                    }));
                    writeln(`public static final String ${value.value} = "${value.value}";`);
                });
            }
        });
    }
    _writeTypeObject(type : lib4.TypeDecl,html : any) : void {
        writeln('import java.util.Arrays;');
        writeln('import java.util.List;');
        writeln('import java.util.Map;');
        writeln('import com.google.common.collect.Lists;');
        writeln('import com.google.dart.server.utilities.general.JsonUtilities;');
        writeln('import com.google.dart.server.utilities.general.ObjectUtilities;');
        writeln('import com.google.gson.JsonArray;');
        writeln('import com.google.gson.JsonElement;');
        writeln('import com.google.gson.JsonObject;');
        writeln('import com.google.gson.JsonPrimitive;');
        writeln('import org.apache.commons.lang3.builder.HashCodeBuilder;');
        writeln('import java.util.ArrayList;');
        writeln('import java.util.Iterator;');
        writeln('import org.apache.commons.lang3.StringUtils;');
        writeln();
        this.javadocComment(this.toHtmlVisitor.collectHtml(() =>  {
            this.toHtmlVisitor.translateHtml(html);
            this.toHtmlVisitor.br();
            this.toHtmlVisitor.write('@coverage dart.server.generated.types');
        }));
        writeln('@SuppressWarnings("unused")');
        let header : string = `public class ${this.className}`;
        if (this.superclassName != null) {
            header += ` extends ${this.superclassName}`;
        }
        this.makeClass(header,() =>  {
            this.publicField(this.javaName("EMPTY_ARRAY"),() =>  {
                writeln(`public static final ${this.className}[] EMPTY_ARRAY = new ${this.className}[0];`);
            });
            this.publicField(this.javaName("EMPTY_LIST"),() =>  {
                writeln(`public static final List<${this.className}> EMPTY_LIST = Lists.newArrayList();`);
            });
            let typeObject : lib4.TypeObject = type as lib4.TypeObject;
            let fields : core.DartList<lib4.TypeObjectField> = typeObject.fields;
            for(let field of fields) {
                let type : string = this.javaFieldType(field);
                let name : string = this.javaName(field.name);
                if (!(this.className == 'Outline' && name == 'children')) {
                    this.privateField(name,() =>  {
                        this.javadocComment(this.toHtmlVisitor.collectHtml(() =>  {
                            this.toHtmlVisitor.translateHtml(field.html);
                        }));
                        if (this.generateSetters) {
                            writeln(`private ${type} ${name};`);
                        }else {
                            writeln(`private final ${type} ${name};`);
                        }
                    });
                }
            }
            if (this.className == 'Outline') {
                this.privateField(this.javaName('parent'),() =>  {
                    writeln('private final Outline parent;');
                });
                this.privateField(this.javaName('children'),() =>  {
                    writeln('private List<Outline> children;');
                });
            }
            if (this.className == 'NavigationRegion') {
                this.privateField(this.javaName('targetObjects'),() =>  {
                    writeln('private final List<NavigationTarget> targetObjects = Lists.newArrayList();');
                });
            }
            if (this.className == 'NavigationTarget') {
                this.privateField(this.javaName('file'),() =>  {
                    writeln('private String file;');
                });
            }
            this.constructor(this.className,() =>  {
                this.javadocComment(this.toHtmlVisitor.collectHtml(() =>  {
                    this.toHtmlVisitor.write(`Constructor for {@link ${this.className}}.`);
                }));
                write(`public ${this.className}(`);
                let parameters : core.DartList<string> = new core.DartList<any>();
                if (this.className == 'Outline') {
                    parameters.add('Outline parent');
                }
                for(let field of fields) {
                    let type : string = this.javaFieldType(field);
                    let name : string = this.javaName(field.name);
                    if (!this._isTypeFieldInUpdateContentUnionType(this.className,field.name) && !(this.className == 'Outline' && name == 'children')) {
                        parameters.add(`${type} ${name}`);
                    }
                }
                write(parameters.join(', '));
                writeln(') {');
                indent(() =>  {
                    if (this.className == 'Outline') {
                        writeln('this.parent = parent;');
                    }
                    for(let field of fields) {
                        let name : string = this.javaName(field.name);
                        if (!this._isTypeFieldInUpdateContentUnionType(this.className,field.name) && !(this.className == 'Outline' && name == 'children')) {
                            writeln(`this.${name} = ${name};`);
                        }else if (this.className == 'AddContentOverlay') {
                            writeln('this.type = "add";');
                        }else if (this.className == 'ChangeContentOverlay') {
                            writeln('this.type = "change";');
                        }else if (this.className == 'RemoveContentOverlay') {
                            writeln('this.type = "remove";');
                        }
                    }
                });
                writeln('}');
            });
            if (this.generateGetters) {
                for(let field of fields) {
                    let type : string = this.javaFieldType(field);
                    let name : string = this.javaName(field.name);
                    this.publicMethod(`get${name}`,() =>  {
                        this.javadocComment(this.toHtmlVisitor.collectHtml(() =>  {
                            this.toHtmlVisitor.translateHtml(field.html);
                        }));
                        if (type == 'boolean') {
                            writeln(`public ${type} ${name}() {`);
                        }else {
                            writeln(`public ${type} get${capitalize(name)}() {`);
                        }
                        writeln(`  return ${name};`);
                        writeln('}');
                    });
                }
            }
            if (this.generateSetters) {
                for(let field of fields) {
                    let type : string = this.javaFieldType(field);
                    let name : string = this.javaName(field.name);
                    this.publicMethod(`set${name}`,() =>  {
                        this.javadocComment(this.toHtmlVisitor.collectHtml(() =>  {
                            this.toHtmlVisitor.translateHtml(field.html);
                        }));
                        let setterName : string = 'set' + capitalize(name);
                        writeln(`public void ${setterName}(${type} ${name}) {`);
                        writeln(`  this.${name} = ${name};`);
                        writeln('}');
                    });
                }
            }
            if (this.className == 'NavigationRegion') {
                this.publicMethod('lookupTargets',() =>  {
                    writeln('public void lookupTargets(List<NavigationTarget> allTargets) {');
                    writeln('  for (int i = 0; i < targets.length; i++) {');
                    writeln('    int targetIndex = targets[i];');
                    writeln('    NavigationTarget target = allTargets.get(targetIndex);');
                    writeln('    targetObjects.add(target);');
                    writeln('  }');
                    writeln('}');
                });
                this.publicMethod('getTargetObjects',() =>  {
                    writeln('public List<NavigationTarget> getTargetObjects() {');
                    writeln('  return targetObjects;');
                    writeln('}');
                });
            }
            if (this.className == 'NavigationTarget') {
                this.publicMethod('lookupFile',() =>  {
                    writeln('public void lookupFile(String[] allTargetFiles) {');
                    writeln('  file = allTargetFiles[fileIndex];');
                    writeln('}');
                });
                this.publicMethod('getFile',() =>  {
                    writeln('public String getFile() {');
                    writeln('  return file;');
                    writeln('}');
                });
            }
            if (this.className != 'Outline') {
                this.publicMethod('fromJson',() =>  {
                    writeln(`public static ${this.className} fromJson(JsonObject jsonObject) {`);
                    indent(() =>  {
                        for(let field of fields) {
                            write(`${this.javaFieldType(field)} ${this.javaName(field.name)} = `);
                            if (field.optional) {
                                write(`jsonObject.get("${this.javaName(field.name)}") == null ? null : `);
                            }
                            if (this.isDeclaredInSpec(field.type)) {
                                write(`${this.javaFieldType(field)}.fromJson(`);
                                write(`jsonObject.get("${this.javaName(field.name)}").getAsJsonObject())`);
                            }else {
                                if (this.isList(field.type)) {
                                    if (new core.DartString(this.javaFieldType(field)).endsWith('<String>')) {
                                        write(`JsonUtilities.decodeStringList(jsonObject.get("${this.javaName(field.name)}").${this._getAsTypeMethodName(field.type)}())`);
                                    }else {
                                        write(`${this.javaType((field.type as lib4.TypeList).itemType)}.fromJsonArray(jsonObject.get("${this.javaName(field.name)}").${this._getAsTypeMethodName(field.type)}())`);
                                    }
                                }else if (this.isArray(field.type)) {
                                    if (new core.DartString(this.javaFieldType(field)).startsWith('int')) {
                                        write(`JsonUtilities.decodeIntArray(jsonObject.get("${this.javaName(field.name)}").${this._getAsTypeMethodName(field.type)}())`);
                                    }
                                }else {
                                    write(`jsonObject.get("${this.javaName(field.name)}").${this._getAsTypeMethodName(field.type)}()`);
                                }
                            }
                            writeln(';');
                        }
                        write(`return new ${this.className}(`);
                        let parameters : core.DartList<string> = new core.DartList<any>();
                        for(let field of fields) {
                            if (!this._isTypeFieldInUpdateContentUnionType(this.className,field.name)) {
                                parameters.add(`${this.javaName(field.name)}`);
                            }
                        }
                        write(parameters.join(', '));
                        writeln(');');
                    });
                    writeln('}');
                });
            }else {
                this.publicMethod('fromJson',() =>  {
                    writeln('public static Outline fromJson(Outline parent, JsonObject outlineObject) {\n  JsonObject elementObject = outlineObject.get("element").getAsJsonObject();\n  Element element = Element.fromJson(elementObject);\n  int offset = outlineObject.get("offset").getAsInt();\n  int length = outlineObject.get("length").getAsInt();\n\n  // create outline object\n  Outline outline = new Outline(parent, element, offset, length);\n\n  // compute children recursively\n  List<Outline> childrenList = Lists.newArrayList();\n  JsonElement childrenJsonArray = outlineObject.get("children");\n  if (childrenJsonArray instanceof JsonArray) {\n    Iterator<JsonElement> childrenElementIterator = ((JsonArray) childrenJsonArray).iterator();\n    while (childrenElementIterator.hasNext()) {\n      JsonObject childObject = childrenElementIterator.next().getAsJsonObject();\n      childrenList.add(fromJson(outline, childObject));\n    }\n  }\n  outline.setChildren(childrenList);\n  return outline;\n}');
                });
                this.publicMethod('getParent',() =>  {
                    writeln('public Outline getParent() {\n  return parent;\n}');
                });
            }
            if (this.className != 'Outline' && this.className != 'RefactoringFeedback' && this.className != 'RefactoringOptions') {
                this.publicMethod('fromJsonArray',() =>  {
                    writeln(`public static List<${this.className}> fromJsonArray(JsonArray jsonArray) {`);
                    indent(() =>  {
                        writeln('if (jsonArray == null) {');
                        writeln('  return EMPTY_LIST;');
                        writeln('}');
                        writeln(`ArrayList<${this.className}> list = new ArrayList<${this.className}>(jsonArray.size());`);
                        writeln('Iterator<JsonElement> iterator = jsonArray.iterator();');
                        writeln('while (iterator.hasNext()) {');
                        writeln('  list.add(fromJson(iterator.next().getAsJsonObject()));');
                        writeln('}');
                        writeln('return list;');
                    });
                    writeln('}');
                });
            }
            if (this.className != 'Outline') {
                this.publicMethod('toJson',() =>  {
                    writeln('public JsonObject toJson() {');
                    indent(() =>  {
                        writeln('JsonObject jsonObject = new JsonObject();');
                        for(let field of fields) {
                            if (!this.isObject(field.type)) {
                                if (field.optional) {
                                    writeln(`if (${this.javaName(field.name)} != null) {`);
                                    indent(() =>  {
                                        this._writeOutJsonObjectAddStatement(field);
                                    });
                                    writeln('}');
                                }else {
                                    this._writeOutJsonObjectAddStatement(field);
                                }
                            }
                        }
                        writeln('return jsonObject;');
                    });
                    writeln('}');
                });
            }
            this.publicMethod('equals',() =>  {
                writeln('@Override');
                writeln('public boolean equals(Object obj) {');
                indent(() =>  {
                    writeln(`if (obj instanceof ${this.className}) {`);
                    indent(() =>  {
                        writeln(`${this.className} other = (${this.className}) obj;`);
                        writeln('return');
                        indent(() =>  {
                            let equalsForField : core.DartList<string> = new core.DartList<string>();
                            for(let field of fields) {
                                equalsForField.add(this._getEqualsLogicForField(field,'other'));
                            }
                            if (equalsForField.isNotEmpty) {
                                write(equalsForField.join(' && \n'));
                            }else {
                                write('true');
                            }
                        });
                        writeln(';');
                    });
                    writeln('}');
                    writeln('return false;');
                });
                writeln('}');
            });
            if (this.className == 'HighlightRegion' || this.className == 'NavigationRegion' || this.className == 'Outline') {
                this.publicMethod('containsInclusive',() =>  {
                    writeln('public boolean containsInclusive(int x) {');
                    indent(() =>  {
                        writeln('return offset <= x && x <= offset + length;');
                    });
                    writeln('}');
                });
            }
            if (this.className == 'Occurrences') {
                this.publicMethod('containsInclusive',() =>  {
                    writeln('public boolean containsInclusive(int x) {');
                    indent(() =>  {
                        writeln('for (int offset : offsets) {');
                        writeln('  if (offset <= x && x <= offset + length) {');
                        writeln('    return true;');
                        writeln('  }');
                        writeln('}');
                        writeln('return false;');
                    });
                    writeln('}');
                });
            }
            this.publicMethod('hashCode',() =>  {
                writeln('@Override');
                writeln('public int hashCode() {');
                indent(() =>  {
                    writeln('HashCodeBuilder builder = new HashCodeBuilder();');
                    for(let i : number = 0; i < fields.length; i++){
                        writeln(`builder.append(${this.javaName(fields[i].name)});`);
                    }
                    writeln('return builder.toHashCode();');
                });
                writeln('}');
            });
            this.publicMethod('toString',() =>  {
                writeln('@Override');
                writeln('public String toString() {');
                indent(() =>  {
                    writeln('StringBuilder builder = new StringBuilder();');
                    writeln('builder.append("[");');
                    for(let i : number = 0; i < fields.length; i++){
                        writeln(`builder.append("${this.javaName(fields[i].name)}=");`);
                        write(`builder.append(${this._getToStringForField(fields[i])}`);
                        if (i + 1 != fields.length) {
                            write(' + ", "');
                        }
                        writeln(');');
                    }
                    writeln('builder.append("]");');
                    writeln('return builder.toString();');
                });
                writeln('}');
            });
            if (this.className == 'Element') {
                this._writeExtraContentInElementType();
            }
            if (this.className == 'TypeHierarchyItem') {
                this.publicMethod('getBestName',() =>  {
                    writeln('public String getBestName() {');
                    indent(() =>  {
                        writeln('if (displayName == null) {');
                        writeln('  return classElement.getName();');
                        writeln('} else {');
                        writeln('  return displayName;');
                        writeln('}');
                    });
                    writeln('}');
                });
            }
        });
    }
}

export class properties {
    private static __$_extraFieldsOnElement : core.DartMap<string,string>;
    static get _extraFieldsOnElement() : core.DartMap<string,string> { 
        if (this.__$_extraFieldsOnElement===undefined) {
            this.__$_extraFieldsOnElement = new core.DartMap.literal([
                ['ABSTRACT','0x01'],
                ['CONST','0x02'],
                ['FINAL','0x04'],
                ['TOP_LEVEL_STATIC','0x08'],
                ['PRIVATE','0x10'],
                ['DEPRECATED','0x20']]);
        }
        return this.__$_extraFieldsOnElement;
    }
    static set _extraFieldsOnElement(__$value : core.DartMap<string,string>)  { 
        this.__$_extraFieldsOnElement = __$value;
    }

    private static __$_extraMethodsOnElement : core.DartMap<string,string>;
    static get _extraMethodsOnElement() : core.DartMap<string,string> { 
        if (this.__$_extraMethodsOnElement===undefined) {
            this.__$_extraMethodsOnElement = new core.DartMap.literal([
                ['isAbstract','ABSTRACT'],
                ['isConst','CONST'],
                ['isDeprecated','DEPRECATED'],
                ['isFinal','FINAL'],
                ['isPrivate','PRIVATE'],
                ['isTopLevelOrStatic','TOP_LEVEL_STATIC']]);
        }
        return this.__$_extraMethodsOnElement;
    }
    static set _extraMethodsOnElement(__$value : core.DartMap<string,string>)  { 
        this.__$_extraMethodsOnElement = __$value;
    }

    private static __$_typeRenames : core.DartMap<string,string>;
    static get _typeRenames() : core.DartMap<string,string> { 
        if (this.__$_typeRenames===undefined) {
            this.__$_typeRenames = new core.DartMap.literal([
                ['Override','OverrideMember']]);
        }
        return this.__$_typeRenames;
    }
    static set _typeRenames(__$value : core.DartMap<string,string>)  { 
        this.__$_typeRenames = __$value;
    }

    private static __$pathToGenTypes : string;
    static get pathToGenTypes() : string { 
        if (this.__$pathToGenTypes===undefined) {
            this.__$pathToGenTypes = 'tool/spec/generated/java/types';
        }
        return this.__$pathToGenTypes;
    }
    static set pathToGenTypes(__$value : string)  { 
        this.__$pathToGenTypes = __$value;
    }

    private static __$targetDir : any;
    static get targetDir() : any { 
        if (this.__$targetDir===undefined) {
            this.__$targetDir = new bare.createInstance(any,null,properties.pathToGenTypes,(pkgPath : string) =>  {
                let api : lib4.Api = lib3.readApi(pkgPath);
                let impliedTypes : core.DartMap<string,lib5.ImpliedType> = lib5.computeImpliedTypes(api);
                let map : core.DartMap<string,any> = new core.DartMap<string,any>();
                for(let impliedType of impliedTypes.values) {
                    let typeNameInSpec : string = capitalize(impliedType.camelName);
                    let isRefactoringFeedback : boolean = impliedType.kind == 'refactoringFeedback';
                    let isRefactoringOption : boolean = impliedType.kind == 'refactoringOptions';
                    if (impliedType.kind == 'typeDefinition' || isRefactoringFeedback || isRefactoringOption) {
                        let type : lib4.TypeDecl = impliedType.type;
                        if (is(type, lib4.TypeObject) || is(type, lib4.TypeEnum)) {
                            let typeNameInJava : string = typeNameInSpec;
                            if (properties._typeRenames.containsKey(typeNameInSpec)) {
                                typeNameInJava = properties._typeRenames.get(typeNameInSpec);
                            }
                            map.set(`${typeNameInJava}.java`,(pkgPath : string) =>  {
                                let superclassName : string = null;
                                if (isRefactoringFeedback) {
                                    superclassName = 'RefactoringFeedback';
                                }
                                if (isRefactoringOption) {
                                    superclassName = 'RefactoringOptions';
                                }
                                let generateGetters : boolean = true;
                                let generateSetters : boolean = false;
                                if (isRefactoringOption || typeNameInSpec == 'Outline' || typeNameInSpec == 'RefactoringMethodParameter') {
                                    generateSetters = true;
                                }
                                let visitor : CodegenJavaType = new CodegenJavaType(api,typeNameInJava,superclassName,generateGetters,generateSetters);
                                return visitor.collectCode(() =>  {
                                    let doc : any = type.html;
                                    if (is(impliedType.apiNode, lib4.TypeDefinition)) {
                                        doc = (impliedType.apiNode as lib4.TypeDefinition).html;
                                    }
                                    visitor.emitType(type,doc);
                                });
                            });
                        }
                    }
                }
                return map;
            });
        }
        return this.__$targetDir;
    }
    static set targetDir(__$value : any)  { 
        this.__$targetDir = __$value;
    }

}
