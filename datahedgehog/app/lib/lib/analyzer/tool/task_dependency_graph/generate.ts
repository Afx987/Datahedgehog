/** Library asset:datahedgehog_monitor/lib/lib/analyzer/tool/task_dependency_graph/generate.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as io from "@dart2ts/dart/io";
import * as lib4 from "@dart2ts.packages/path/lib/path";
import * as lib5 from "@dart2ts/dart/uri";

export var main : () => any = () =>  {
    let script : string = io.Platform.script.toFilePath({
        windows : io.Platform.isWindows});
    let pkgPath : string = lib4.normalize(lib4.join(lib4.dirname(script),'..','..'));
    GeneratedContent.generateAll(pkgPath,new core.DartList.literal<any>(properties.target,properties.htmlTarget));
};
export namespace Driver {
    export type Constructors = 'Driver';
    export type Interface = Omit<Driver, Constructors>;
}
@DartClass
export class Driver {
    private static __$hasInitializedPlugins : boolean;
    static get hasInitializedPlugins() : boolean { 
        if (this.__$hasInitializedPlugins===undefined) {
            this.__$hasInitializedPlugins = false;
        }
        return this.__$hasInitializedPlugins;
    }
    static set hasInitializedPlugins(__$value : boolean)  { 
        this.__$hasInitializedPlugins = __$value;
    }

    resourceProvider : any;

    context : any;

    resultDescriptorType : any;

    listOfResultDescriptorType : any;

    enginePluginClass : any;

    taskUnitElement : any;

    extensionPointIdType : any;

    rootDir : string;

    constructor(pkgPath : string) {
    }
    @defaultConstructor
    Driver(pkgPath : string) {
        this.rootDir = new io.Directory(pkgPath).absolute.path;
    }
    get file() : io.File {
        return new io.File(lib4.join(this.rootDir,'tool','task_dependency_graph','tasks.dot'));
    }
    findExtensions(node : any,extensionIdVariable : any,callback : (descriptorName : any) => void) : void {
        let resultDescriptors : core.DartSet<any> = new core.DartSet<any>();
        node.accept(new ExtensionFinder(this.resultDescriptorType,extensionIdVariable,resultDescriptors.add.bind(resultDescriptors)));
        for(let resultDescriptor of resultDescriptors) {
            callback(resultDescriptor.name);
        }
    }
    findResultDescriptorLists(node : any,callback : (descriptorListName : string) => void) : void {
        let resultDescriptorLists : core.DartSet<any> = new core.DartSet<any>();
        node.accept(new GetterFinder(this.listOfResultDescriptorType,resultDescriptorLists.add.bind(resultDescriptorLists)));
        for(let resultDescriptorList of resultDescriptorLists) {
            if (resultDescriptorList.enclosingElement != this.enginePluginClass) {
                continue;
            }
            callback(resultDescriptorList.name);
        }
    }
    findResultDescriptors(node : any,callback : (descriptorName : string) => void) : void {
        let resultDescriptors : core.DartSet<any> = new core.DartSet<any>();
        node.accept(new GetterFinder(this.resultDescriptorType,resultDescriptors.add.bind(resultDescriptors)));
        for(let resultDescriptor of resultDescriptors) {
            callback(resultDescriptor.name);
        }
    }
    generateFileContents() : string {
        return `// Copyright (c) 2015, the Dart project authors.  Please see the AUTHORS file\n// for details. All rights reserved. Use of this source code is governed by a\n// BSD-style license that can be found in the LICENSE file.\n//\n// This file has been automatically generated.  Please do not edit it manually.\n// To regenerate the file, use the script\n// "pkg/analyzer/tool/task_dependency_graph/generate.dart".\n//\n// To render this graph using Graphviz (www.graphviz.org) use the command:\n// "dot tasks.dot -Tpdf -O".\ndigraph G {\n${this.generateGraphData()}\n}\n`;
    }
    generateGraphData() : string {
        if (!Driver.hasInitializedPlugins) {
            AnalysisEngine.instance.processRequiredPlugins();
            Driver.hasInitializedPlugins = true;
        }
        let lines : core.DartList<string> = new core.DartList.literal<string>();
        this.resourceProvider = PhysicalResourceProvider.INSTANCE;
        let sdk : any = new bare.createInstance(any,null,this.resourceProvider,FolderBasedDartSdk.defaultSdkDirectory(this.resourceProvider));
        this.context = AnalysisEngine.instance.createAnalysisContext();
        let builderOptions : any = new bare.createInstance(any,null);
        if (io.Platform.packageRoot != null) {
            builderOptions.defaultPackagesDirectoryPath = lib5.Uri.parse(io.Platform.packageRoot).toFilePath();
        }else if (io.Platform.packageConfig != null) {
            builderOptions.defaultPackageFilePath = lib5.Uri.parse(io.Platform.packageConfig).toFilePath();
        }else {
        }
        let builder : any = new bare.createInstance(any,null,this.resourceProvider,null,null,{
            options : builderOptions});
        let uriResolvers : core.DartList<any> = new core.DartList.literal(new bare.createInstance(any,null,sdk),new bare.createInstance(any,null,this.resourceProvider,builder.convertPackagesToMap(builder.createPackageMap(''))),new bare.createInstance(any,null,PhysicalResourceProvider.INSTANCE));
        this.context.sourceFactory = new bare.createInstance(any,null,uriResolvers);
        let dartDartSource : any = this.setupSource(lib4.join('lib','src','task','dart.dart'));
        let taskSource : any = this.setupSource(lib4.join('lib','plugin','task.dart'));
        let modelSource : any = this.setupSource(lib4.join('lib','task','model.dart'));
        let enginePluginSource : any = this.setupSource(lib4.join('lib','src','plugin','engine_plugin.dart'));
        let modelElement : any = this.getUnit(modelSource).element;
        let analysisTaskType : any = modelElement.getType('AnalysisTask').type;
        let dynamicType : any = this.context.typeProvider.dynamicType;
        this.resultDescriptorType = modelElement.getType('ResultDescriptor').type.instantiate(new core.DartList.literal(dynamicType));
        this.listOfResultDescriptorType = this.context.typeProvider.listType.instantiate(new core.DartList.literal(this.resultDescriptorType));
        let enginePluginUnit : any = this.getUnit(enginePluginSource);
        this.enginePluginClass = enginePluginUnit.element.getType('EnginePlugin');
        this.extensionPointIdType = enginePluginUnit.element.getType('ExtensionPointId').type;
        let dartDartUnit : any = this.getUnit(dartDartSource);
        let taskUnit : any = this.getUnit(taskSource);
        this.taskUnitElement = taskUnit.element;
        let results : core.DartSet<string> = new core.DartSet<string>();
        let resultLists : core.DartSet<string> = new core.DartSet<string>();
        for(let dartUnitMember of dartDartUnit.declarations) {
            if (is(dartUnitMember, any)) {
                let clazz : any = dartUnitMember;
                if (!clazz.isAbstract && clazz.element.type.isSubtypeOf(analysisTaskType)) {
                    let task : string = clazz.name.name;
                    let buildInputsAst : any;
                    let descriptorField : any;
                    for(let classMember of clazz.members) {
                        if (is(classMember, any) && op(Op.EQUALS,classMember.name.name,'buildInputs')) {
                            buildInputsAst = classMember;
                        }
                        if (is(classMember, any)) {
                            for(let field of classMember.fields.variables) {
                                if (op(Op.EQUALS,field.name.name,'DESCRIPTOR')) {
                                    descriptorField = field;
                                }
                            }
                        }
                    }
                    this.findResultDescriptors(buildInputsAst,(input : string) =>  {
                        results.add(input);
                        lines.add(`  ${input} -> ${task}`);
                    });
                    this.findResultDescriptorLists(buildInputsAst,(input : string) =>  {
                        resultLists.add(input);
                        lines.add(`  ${input} -> ${task}`);
                    });
                    this.findResultDescriptors(descriptorField,(out : string) =>  {
                        results.add(out);
                        lines.add(`  ${task} -> ${out}`);
                    });
                }
            }
        }
        for(let resultList of resultLists) {
            lines.add(`  ${resultList} [shape=hexagon]`);
            let extensionIdVariable : any = this._getExtensionId(resultList);
            this.findExtensions(enginePluginUnit,extensionIdVariable,(extension : string) =>  {
                results.add(extension);
                lines.add(`  ${extension} -> ${resultList}`);
            });
        }
        for(let result of results) {
            lines.add(`  ${result} [shape=box]`);
        }
        lines.sort();
        return lines.join('\n');
    }
    generateHtml() : string {
        return `<!DOCTYPE html>\n<html>\n<head>\n    <title>Analysis Task Dependency Graph</title>\n    <link rel="stylesheet" href="support/style.css">\n    <script src="support/viz.js"></script>\n    <script type="application/dart" src="support/web_app.dart.js"></script>\n    <script src="support/dart.js"></script>\n</head>\n<body>\n<button id="zoomBtn">Zoom</button>\n<script type="text/vnd.graphviz" id="dot">\ndigraph G {\n  tooltip="Analysis Task Dependency Graph";\n  node [fontname=Helvetica];\n  edge [fontname=Helvetica, fontcolor=gray];\n${this.generateGraphData()}\n}\n</script>\n</body>\n</html>\n`;
    }
    getUnit(source : any) : any {
        return this.context.resolveCompilationUnit2(source,source);
    }
    setupSource(filename : string) : any {
        let filePath : string = lib4.join(this.rootDir,filename);
        let file : any = this.resourceProvider.getResource(filePath);
        let source : any = file.createSource();
        let restoredUri : lib5.Uri = this.context.sourceFactory.restoreUri(source);
        if (restoredUri != null) {
            source = file.createSource(restoredUri);
        }
        let changeSet : any = new bare.createInstance(any,null);
        changeSet.addedSource(source);
        this.context.applyChanges(changeSet);
        return source;
    }
    _getExtensionId(resultListGetterName : string) : any {
        let getter : any = this.enginePluginClass.getGetter(resultListGetterName);
        for(let annotation of getter.metadata) {
            let annotationValue : any = annotation.constantValue;
            if (annotationValue.type.isSubtypeOf(this.extensionPointIdType)) {
                let extensionPointId : string = op(Op.INDEX,annotationValue.fields,'extensionPointId').toStringValue();
                for(let variable of this.taskUnitElement.topLevelVariables) {
                    if (op(Op.EQUALS,variable.name,extensionPointId)) {
                        return variable;
                    }
                }
            }
        }
        throw new core.Exception(`Could not find extension ID corresponding to ${resultListGetterName}`);
    }
}

export namespace ExtensionFinder {
    export type Constructors = 'ExtensionFinder';
    export type Interface = Omit<ExtensionFinder, Constructors>;
}
@DartClass
export class ExtensionFinder extends any {
    resultDescriptorType : any;

    extensionIdVariable : any;

    callback : (element : any) => void;

    constructor(resultDescriptorType : any,extensionIdVariable : any,callback : (element : any) => void) {
    }
    @defaultConstructor
    ExtensionFinder(resultDescriptorType : any,extensionIdVariable : any,callback : (element : any) => void) {
        this.resultDescriptorType = resultDescriptorType;
        this.extensionIdVariable = extensionIdVariable;
        this.callback = callback;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitIdentifier(node : any) {
        let element : any = node.staticElement;
        if (is(element, any) && element.isGetter && op(Op.EQUALS,element.variable,this.extensionIdVariable)) {
            let parent : any = node.parent;
            if (is(parent, any) && op(Op.EQUALS,parent.arguments.length,2) && op(Op.EQUALS,op(Op.INDEX,parent.arguments,0),node)) {
                let extension : any = op(Op.INDEX,parent.arguments,1);
                if (is(extension, any)) {
                    let element : any = extension.staticElement;
                    if (is(element, any) && element.isGetter && element.returnType.isSubtypeOf(this.resultDescriptorType)) {
                        this.callback(element);
                        return;
                    }
                }
            }
            throw new core.Exception(`Could not decode extension setup: ${parent}`);
        }
    }
}

export namespace GetterFinder {
    export type Constructors = 'GetterFinder';
    export type Interface = Omit<GetterFinder, Constructors>;
}
@DartClass
export class GetterFinder extends any {
    type : any;

    callback : (element : any) => void;

    constructor(type : any,callback : (element : any) => void) {
    }
    @defaultConstructor
    GetterFinder(type : any,callback : (element : any) => void) {
        this.type = type;
        this.callback = callback;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitIdentifier(node : any) {
        let element : any = node.staticElement;
        if (is(element, any) && element.isGetter && element.returnType.isSubtypeOf(this.type)) {
            this.callback(element);
        }
    }
}

export class properties {
    private static __$htmlTarget : any;
    static get htmlTarget() : any { 
        if (this.__$htmlTarget===undefined) {
            this.__$htmlTarget = new bare.createInstance(any,null,'doc/tasks.html',(pkgPath : string) =>  {
                return new Driver(pkgPath).generateHtml();
            });
        }
        return this.__$htmlTarget;
    }
    static set htmlTarget(__$value : any)  { 
        this.__$htmlTarget = __$value;
    }

    private static __$target : any;
    static get target() : any { 
        if (this.__$target===undefined) {
            this.__$target = new bare.createInstance(any,null,'tool/task_dependency_graph/tasks.dot',(pkgPath : string) =>  {
                return new Driver(pkgPath).generateFileContents();
            });
        }
        return this.__$target;
    }
    static set target(__$value : any)  { 
        this.__$target = __$value;
    }

}
