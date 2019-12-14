/** Library asset:datahedgehog_monitor/lib/lib/analyzer/lib/src/dart/sdk/patch.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts/dart/uri";

export namespace SdkPatcher {
    export type Constructors = 'SdkPatcher';
    export type Interface = Omit<SdkPatcher, Constructors>;
}
@DartClass
export class SdkPatcher {
    _allowNewPublicNames : boolean;

    _baseDesc : string;

    _patchDesc : string;

    _patchUnit : any;

    patch(resourceProvider : any,strongMode : boolean,allPatchPaths : core.DartMap<string,core.DartList<string>>,errorListener : any,source : any,unit : any) : void {
        let libraryUriStr : string;
        let isLibraryDefiningUnit : boolean;
        {
            let uri : lib3.Uri = source.uri;
            if (uri.scheme != 'dart') {
                throw new core.ArgumentError(`The URI of the unit to patch must have the "dart" scheme: ${uri}`);
            }
            let uriSegments : core.DartList<string> = uri.pathSegments;
            let libraryName : string = uriSegments.first;
            libraryUriStr = `dart:${libraryName}`;
            isLibraryDefiningUnit = uriSegments.length == 1;
            this._allowNewPublicNames = libraryName == '_internal';
        }
        let patchPaths : core.DartList<string> = (allPatchPaths.get(libraryUriStr) || new core.DartList.literal<string>());
        for(let path of patchPaths) {
            let patchFile : any = resourceProvider.getFile(path);
            if (!patchFile.exists) {
                throw new core.ArgumentError(`The patch file ${patchFile.path} for ${source} does not exist.`);
            }
            let patchSource : any = patchFile.createSource();
            let patchUnit : any = SdkPatcher.parse(patchSource,strongMode,errorListener);
            this._baseDesc = source.toString();
            this._patchDesc = patchFile.path;
            this._patchUnit = patchUnit;
            if (isLibraryDefiningUnit) {
                this._patchDirectives(source,unit,patchSource,patchUnit);
            }
            this._patchTopLevelDeclarations(unit,patchUnit,isLibraryDefiningUnit);
        }
    }
    _failExternalKeyword(name : string,offset : number) : void {
        throw new core.ArgumentError(`The keyword "external" was expected for "${name}" in ${this._baseDesc} @ ${offset}.`);
    }
    _failIfPublicName(node : any,name : string) : void {
        if (this._allowNewPublicNames) {
            return;
        }
        if (!Identifier.isPrivateName(name)) {
            this._failInPatch(`contains a public declaration "${name}"`,node.offset);
        }
    }
    _failInPatch(message : string,offset : number) : void {
        let loc : string = this._getLocationDesc3(this._patchUnit,offset);
        throw new core.ArgumentError(`The patch file ${this._patchDesc} for ${this._baseDesc} ${message} at ${loc}.`);
    }
    _getLocationDesc3(unit : any,offset : number) : string {
        let location : any = unit.lineInfo.getLocation(offset);
        return `the line ${location.lineNumber}`;
    }
    _matchParameterLists(baseParameters : any,patchParameters : any,context : () => string) : void {
        if (op(Op.EQUALS,baseParameters,null) && op(Op.EQUALS,patchParameters,null)) return;
        if (op(Op.EQUALS,baseParameters,null) || op(Op.EQUALS,patchParameters,null)) {
            throw new core.ArgumentError(`${context()}, parameter lists don't match`);
        }
        if (baseParameters.parameters.length != patchParameters.parameters.length) {
            throw new core.ArgumentError(`${context()}, parameter lists have different lengths`);
        }
        for(let i = 0; i < baseParameters.parameters.length; i++){
            this._matchParameters(op(Op.INDEX,baseParameters.parameters,i),op(Op.INDEX,patchParameters.parameters,i),() =>  {
                return `${context()}, parameter ${i}`;
            });
        }
    }
    _matchParameters(baseParameter : any,patchParameter : any,whichParameter : () => string) : void {
        if (baseParameter.identifier.name != patchParameter.identifier.name) {
            throw new core.ArgumentError(`${whichParameter()} has different name`);
        }
        let baseParameterWithoutDefault : any = this._withoutDefault(baseParameter);
        let patchParameterWithoutDefault : any = this._withoutDefault(patchParameter);
        if (is(baseParameterWithoutDefault, any) && is(patchParameterWithoutDefault, any)) {
            this._matchTypes(baseParameterWithoutDefault.type,patchParameterWithoutDefault.type,() =>  {
                return `${whichParameter()} type`;
            });
        }else if (is(baseParameterWithoutDefault, any) && is(patchParameterWithoutDefault, any)) {
            this._matchTypes(baseParameterWithoutDefault.returnType,patchParameterWithoutDefault.returnType,() =>  {
                return `${whichParameter()} return type`;
            });
            this._matchParameterLists(baseParameterWithoutDefault.parameters,patchParameterWithoutDefault.parameters,() =>  {
                return `${whichParameter()} parameters`;
            });
        }else if (is(baseParameterWithoutDefault, any) && is(patchParameter, any)) {
            throw new core.ArgumentError(`${whichParameter()} cannot be patched (field formal parameters are not supported)`);
        }else {
            throw new core.ArgumentError(`${whichParameter()} mismatch (different parameter kinds)`);
        }
    }
    _matchTypes(baseType : any,patchType : any,whichType : () => string) : void {
        var error : () => any = () =>  {
            return new core.ArgumentError(`${whichType()} doesn't match`);
        };
        if (op(Op.EQUALS,baseType,null) && op(Op.EQUALS,patchType,null)) return;
        if (op(Op.EQUALS,baseType,null) || op(Op.EQUALS,patchType,null)) throw error();
        let baseToken : any = baseType.beginToken;
        let patchToken : any = patchType.beginToken;
        while (true){
            if (baseToken.lexeme != patchToken.lexeme) throw error();
            if (core.identical(baseToken,baseType.endToken) && core.identical(patchToken,patchType.endToken)) {
                break;
            }
            if (core.identical(baseToken,baseType.endToken) || core.identical(patchToken,patchType.endToken)) {
                throw error();
            }
            baseToken = baseToken.next;
            patchToken = patchToken.next;
        }
    }
    _patchClassMembers(baseClass : any,patchClass : any) : void {
        let className : string = baseClass.name.name;
        let membersToAppend : core.DartList<any> = new core.DartList.literal();
        for(let patchMember of patchClass.members) {
            if (is(patchMember, any)) {
                if (SdkPatcher._hasPatchAnnotation(patchMember.metadata)) {
                    this._failInPatch('attempts to patch a field',patchMember.offset);
                }
                let fields : core.DartList<any> = patchMember.fields.variables;
                if (fields.length != 1) {
                    this._failInPatch('contains a field declaration with more than one field',patchMember.offset);
                }
                let name : string = fields[0].name.name;
                if (!this._allowNewPublicNames && !Identifier.isPrivateName(className) && !Identifier.isPrivateName(name)) {
                    this._failInPatch('contains a public field',patchMember.offset);
                }
                membersToAppend.add(patchMember);
            }else if (is(patchMember, any)) {
                let name : string = patchMember.name.name;
                if (SdkPatcher._hasPatchAnnotation(patchMember.metadata)) {
                    for(let baseMember of baseClass.members) {
                        if (is(baseMember, any) && op(Op.EQUALS,baseMember.name.name,name)) {
                            let externalKeyword : any = baseMember.externalKeyword;
                            if (externalKeyword != null) {
                                baseMember.externalKeyword = null;
                                SdkPatcher._removeToken(externalKeyword);
                            }else {
                                this._failExternalKeyword(name,baseMember.offset);
                            }
                            this._matchParameterLists(baseMember.parameters,patchMember.parameters,() =>  {
                                return `While patching ${className}.${name}`;
                            });
                            this._matchTypes(baseMember.returnType,patchMember.returnType,() =>  {
                                return `While patching ${className}.${name}, return type`;
                            });
                            let oldBody : any = baseMember.body;
                            let newBody : any = patchMember.body;
                            SdkPatcher._replaceNodeTokens(oldBody,newBody);
                            baseMember.body = newBody;
                        }
                    }
                }else {
                    this._failIfPublicName(patchMember,name);
                    membersToAppend.add(patchMember);
                }
            }else if (is(patchMember, any)) {
                let name : string = ((t)=>(!!t)?t.name:null)(patchMember.name);
                if (SdkPatcher._hasPatchAnnotation(patchMember.metadata)) {
                    for(let baseMember of baseClass.members) {
                        if (is(baseMember, any) && op(Op.EQUALS,((t)=>(!!t)?t.name:null)(baseMember.name),name)) {
                            let externalKeyword : any = baseMember.externalKeyword;
                            if (externalKeyword != null) {
                                baseMember.externalKeyword = null;
                                SdkPatcher._removeToken(externalKeyword);
                            }else {
                                this._failExternalKeyword(name,baseMember.offset);
                            }
                            if (op(Op.EQUALS,baseMember.factoryKeyword,null) && patchMember.factoryKeyword != null) {
                                this._failInPatch('attempts to replace generative constructor with a factory one',patchMember.offset);
                            }else if (baseMember.factoryKeyword != null && op(Op.EQUALS,patchMember.factoryKeyword,null)) {
                                this._failInPatch('attempts to replace factory constructor with a generative one',patchMember.offset);
                            }
                            if (baseMember.initializers.isNotEmpty) {
                                throw new core.ArgumentError('Cannot patch external constructors with initializers ' + `in ${this._baseDesc}.`);
                            }
                            this._matchParameterLists(baseMember.parameters,patchMember.parameters,() =>  {
                                let nameSuffix : string = name == null ? '' : `.${name}`;
                                return `While patching ${className}${nameSuffix}`;
                            });
                            let baseBody : any = baseMember.body;
                            let patchBody : any = patchMember.body;
                            let baseInitializers : any = baseMember.initializers;
                            let patchInitializers : any = patchMember.initializers;
                            if (patchInitializers.isNotEmpty) {
                                baseMember.parameters.endToken.setNext(patchInitializers.beginToken.previous);
                                baseInitializers.addAll(patchInitializers);
                                patchBody.endToken.setNext(baseBody.endToken.next);
                            }else {
                                SdkPatcher._replaceNodeTokens(baseBody,patchBody);
                            }
                            baseMember.body = patchBody;
                        }
                    }
                }else {
                    if (name == null) {
                        if (!this._allowNewPublicNames && !Identifier.isPrivateName(className)) {
                            this._failInPatch('contains an unnamed public constructor',patchMember.offset);
                        }
                    }else {
                        this._failIfPublicName(patchMember,name);
                    }
                    membersToAppend.add(patchMember);
                }
            }else {
                let className : string = patchClass.name.name;
                this._failInPatch(`contains an unsupported class member in ${className}`,patchMember.offset);
            }
        }
        SdkPatcher._appendToNodeList(baseClass.members,membersToAppend,baseClass.leftBracket);
    }
    _patchDirectives(baseSource : any,baseUnit : any,patchSource : any,patchUnit : any) : void {
        for(let patchDirective of patchUnit.directives) {
            if (is(patchDirective, any)) {
                baseUnit.directives.add(patchDirective);
            }else {
                this._failInPatch(`contains an unsupported "${patchDirective}" directive`,patchDirective.offset);
            }
        }
    }
    _patchTopLevelDeclarations(baseUnit : any,patchUnit : any,appendNewTopLevelDeclarations : boolean) : void {
        let declarationsToAppend : core.DartList<any> = new core.DartList.literal();
        for(let patchDeclaration of patchUnit.declarations) {
            if (is(patchDeclaration, any)) {
                let name : string = patchDeclaration.name.name;
                if (SdkPatcher._hasPatchAnnotation(patchDeclaration.metadata)) {
                    for(let baseDeclaration of baseUnit.declarations) {
                        if (is(patchDeclaration, any) && is(baseDeclaration, any) && op(Op.EQUALS,baseDeclaration.name.name,name)) {
                            let externalKeyword : any = baseDeclaration.externalKeyword;
                            if (externalKeyword != null) {
                                baseDeclaration.externalKeyword = null;
                                SdkPatcher._removeToken(externalKeyword);
                            }else {
                                this._failExternalKeyword(name,baseDeclaration.offset);
                            }
                            this._matchParameterLists(baseDeclaration.functionExpression.parameters,patchDeclaration.functionExpression.parameters,() =>  {
                                return `While patching ${name}`;
                            });
                            this._matchTypes(baseDeclaration.returnType,patchDeclaration.returnType,() =>  {
                                return `While patching ${name}, return type`;
                            });
                            let oldExpr : any = baseDeclaration.functionExpression;
                            let newBody : any = patchDeclaration.functionExpression.body;
                            SdkPatcher._replaceNodeTokens(oldExpr.body,newBody);
                            oldExpr.body = newBody;
                        }
                    }
                }else if (appendNewTopLevelDeclarations) {
                    this._failIfPublicName(patchDeclaration,name);
                    declarationsToAppend.add(patchDeclaration);
                }
            }else if (is(patchDeclaration, any)) {
                if (patchDeclaration.metadata.isNotEmpty) {
                    this._failInPatch('contains a function type alias with an annotation',patchDeclaration.offset);
                }
                this._failIfPublicName(patchDeclaration,patchDeclaration.name.name);
                declarationsToAppend.add(patchDeclaration);
            }else if (is(patchDeclaration, any)) {
                if (SdkPatcher._hasPatchAnnotation(patchDeclaration.metadata)) {
                    let name : string = patchDeclaration.name.name;
                    for(let baseDeclaration of baseUnit.declarations) {
                        if (is(baseDeclaration, any) && op(Op.EQUALS,baseDeclaration.name.name,name)) {
                            this._patchClassMembers(baseDeclaration,patchDeclaration);
                        }
                    }
                }else {
                    this._failIfPublicName(patchDeclaration,patchDeclaration.name.name);
                    declarationsToAppend.add(patchDeclaration);
                }
            }else if (is(patchDeclaration, any) && !SdkPatcher._hasPatchAnnotation(patchDeclaration.metadata)) {
                for(let variable of patchDeclaration.variables.variables) {
                    this._failIfPublicName(patchDeclaration,variable.name.name);
                }
                declarationsToAppend.add(patchDeclaration);
            }else {
                this._failInPatch('contains an unsupported top-level declaration',patchDeclaration.offset);
            }
        }
        if (appendNewTopLevelDeclarations) {
            SdkPatcher._appendToNodeList(baseUnit.declarations,declarationsToAppend,baseUnit.endToken.previous);
        }
    }
    _withoutDefault(parameter : any) : any {
        if (is(parameter, any)) {
            return parameter;
        }else if (is(parameter, any)) {
            return parameter.parameter;
        }else {
            /* TODO (AssertStatementImpl) : assert (false); */;
            return null;
        }
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'visibleForTesting',value : {
            arguments : [],namedArguments : {
            }}})
    static parse(source : any,strong : boolean,errorListener : any) : any {
        let code : string = source.contents.data;
        let reader : any = new bare.createInstance(any,null,code);
        let scanner : any = new bare.createInstance(any,null,source,reader,errorListener);
        scanner.scanGenericMethodComments = strong;
        let token : any = scanner.tokenize();
        let lineInfo : any = new bare.createInstance(any,null,scanner.lineStarts);
        let parser : any = new bare.createInstance(any,null,source,errorListener);
        parser.parseGenericMethodComments = strong;
        let unit : any = parser.parseCompilationUnit(token);
        unit.lineInfo = lineInfo;
        return unit;
    }
    static _appendToNodeList(nodes : any,newNodes : core.DartList<any>,defaultPrevToken : any) : void {
        let prevToken : any = (nodes.endToken || defaultPrevToken);
        for(let newNode of newNodes) {
            newNode.endToken.setNext(prevToken.next);
            prevToken.setNext(newNode.beginToken);
            nodes.add(newNode);
            prevToken = newNode.endToken;
        }
    }
    static _hasPatchAnnotation(metadata : core.DartList<any>) : boolean {
        return metadata.any((annotation : any) =>  {
            let name : any = annotation.name;
            return op(Op.EQUALS,annotation.constructorName,null) && is(name, any) && op(Op.EQUALS,name.name,'patch');
        });
    }
    static _removeToken(token : any) : void {
        token.previous.setNext(token.next);
    }
    static _replaceNodeTokens(oldNode : any,newNode : any) : void {
        oldNode.beginToken.previous.setNext(newNode.beginToken);
        newNode.endToken.setNext(oldNode.endToken.next);
    }
    constructor() {
    }
    @defaultConstructor
    SdkPatcher() {
    }
}

export class properties {
}
