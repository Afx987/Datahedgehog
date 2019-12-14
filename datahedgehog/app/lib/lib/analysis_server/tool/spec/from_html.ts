/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/tool/spec/from_html.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/path/lib/path";
import * as lib4 from "./api";
import * as io from "@dart2ts/dart/io";

export var readApi : (pkgPath : string) => lib4.Api = (pkgPath : string) : lib4.Api =>  {
    let reader : ApiReader = new ApiReader(lib3.join(pkgPath,'tool','spec','spec_input.html'));
    return reader.readApi();
};
export namespace ApiReader {
    export type Constructors = 'ApiReader';
    export type Interface = Omit<ApiReader, Constructors>;
}
@DartClass
export class ApiReader {
    private static __$specialElements : core.DartList<string>;
    static get specialElements() : core.DartList<string> { 
        if (this.__$specialElements===undefined) {
            this.__$specialElements = new core.DartList.literal('domain','feedback','object','refactorings','refactoring','type','types','request','notification','params','result','field','list','map','enum','key','value','options','ref','code','version','union','index','include');
        }
        return this.__$specialElements;
    }

    filePath : string;

    constructor(filePath : string) {
    }
    @defaultConstructor
    ApiReader(filePath : string) {
        this.filePath = filePath;
    }
    apiFromHtml(html : any) : lib4.Api {
        let api : lib4.Api;
        let versions : core.DartList<string> = new core.DartList.literal<string>();
        let domains : core.DartList<lib4.Domain> = new core.DartList.literal<lib4.Domain>();
        let types : lib4.Types = null;
        let refactorings : lib4.Refactorings = null;
        this.recurse(html,'api',new core.DartMap.literal([
            ['domain',(element : any) =>  {
                domains.add(this.domainFromHtml(element));
            }],
            ['refactorings',(element : any) =>  {
                refactorings = this.refactoringsFromHtml(element);
            }],
            ['types',(element : any) =>  {
                types = this.typesFromHtml(element);
            }],
            ['version',(element : any) =>  {
                versions.add(innerText(element));
            }],
            ['index',(element : any) =>  {
            }]]));
        if (versions.length != 1) {
            throw new core.Exception('The API must contain exactly one <version> element');
        }
        api = new lib4.Api(versions[0],domains,types,refactorings,html);
        return api;
    }
    checkAttributes(element : any,requiredAttributes : core.DartList<string>,context : string,_namedArguments? : {optionalAttributes? : core.DartList<string>}) : void {
        let {optionalAttributes} = Object.assign({
            "optionalAttributes" : new core.DartList.literal()}, _namedArguments );
        let attributesFound : core.DartSet<string> = new core.DartSet<string>();
        element.attributes.forEach((name : string,value : string) =>  {
            if (!requiredAttributes.contains(name) && !optionalAttributes.contains(name)) {
                throw new core.Exception(`${context}: Unexpected attribute in ${element.localName}: ${name}`);
            }
            attributesFound.add(name);
        });
        for(let expectedAttribute of requiredAttributes) {
            if (!attributesFound.contains(expectedAttribute)) {
                throw new core.Exception(`${context}: ${element.localName} must contain attribute ${expectedAttribute}`);
            }
        }
    }
    checkName(element : any,expectedName : string,context? : string) : void {
        if (element.localName != expectedName) {
            if (context == null) {
                context = element.localName;
            }
            throw new core.Exception(`${context}: Expected ${expectedName}, found ${element.localName}`);
        }
    }
    domainFromHtml(html : any) : lib4.Domain {
        this.checkName(html,'domain');
        let name : string = op(Op.INDEX,html.attributes,'name');
        let context : string = (name || 'domain');
        let experimental : boolean = op(Op.EQUALS,op(Op.INDEX,html.attributes,'experimental'),'true');
        this.checkAttributes(html,new core.DartList.literal('name'),context,{
            optionalAttributes : new core.DartList.literal('experimental')});
        let requests : core.DartList<lib4.Request> = new core.DartList.literal<lib4.Request>();
        let notifications : core.DartList<lib4.Notification> = new core.DartList.literal<lib4.Notification>();
        this.recurse(html,context,new core.DartMap.literal([
            ['request',(child : any) =>  {
                requests.add(this.requestFromHtml(child,context));
            }],
            ['notification',(child : any) =>  {
                notifications.add(this.notificationFromHtml(child,context));
            }]]));
        return new lib4.Domain(name,requests,notifications,html,{
            experimental : experimental});
    }
    getAncestor(html : any,name : string,context : string) : any {
        let ancestor : any = html.parent;
        while (ancestor != null){
            if (op(Op.EQUALS,ancestor.localName,name)) {
                return ancestor;
            }
            ancestor = ancestor.parent;
        }
        throw new core.Exception(`${context}: <${html.localName}> must be nested within <${name}>`);
    }
    notificationFromHtml(html : any,context : string) : lib4.Notification {
        let domainName : string = op(Op.INDEX,this.getAncestor(html,'domain',context).attributes,'name');
        this.checkName(html,'notification',context);
        let event : string = op(Op.INDEX,html.attributes,'event');
        context = `${context}.${event != null ? event : 'event'}`;
        this.checkAttributes(html,new core.DartList.literal('event'),context);
        let params : lib4.TypeDecl;
        this.recurse(html,context,new core.DartMap.literal([
            ['params',(child : any) =>  {
                params = this.typeObjectFromHtml(child,`${context}.params`);
            }]]));
        return new lib4.Notification(domainName,event,params,html);
    }
    processContentsAsType(html : any,context : string) : lib4.TypeDecl {
        let types : core.DartList<lib4.TypeDecl> = this.processContentsAsTypes(html,context);
        if (types.length != 1) {
            throw new core.Exception(`${context}: Exactly one type must be specified`);
        }
        return types[0];
    }
    processContentsAsTypes(html : any,context : string) : core.DartList<lib4.TypeDecl> {
        let types : core.DartList<lib4.TypeDecl> = new core.DartList.literal<lib4.TypeDecl>();
        this.recurse(html,context,new core.DartMap.literal([
            ['object',(child : any) =>  {
                types.add(this.typeObjectFromHtml(child,context));
            }],
            ['list',(child : any) =>  {
                this.checkAttributes(child,new core.DartList.literal(),context);
                types.add(new lib4.TypeList(this.processContentsAsType(child,context),child));
            }],
            ['map',(child : any) =>  {
                this.checkAttributes(child,new core.DartList.literal(),context);
                let keyType : lib4.TypeDecl;
                let valueType : lib4.TypeDecl;
                this.recurse(child,context,new core.DartMap.literal([
                    ['key',(child : any) =>  {
                        if (keyType != null) {
                            throw new core.Exception(`${context}: Key type already specified`);
                        }
                        keyType = this.processContentsAsType(child,`${context}.key`);
                    }],
                    ['value',(child : any) =>  {
                        if (valueType != null) {
                            throw new core.Exception(`${context}: Value type already specified`);
                        }
                        valueType = this.processContentsAsType(child,`${context}.value`);
                    }]]));
                if (op(Op.EQUALS,keyType,null)) {
                    throw new core.Exception(`${context}: Key type not specified`);
                }
                if (op(Op.EQUALS,valueType,null)) {
                    throw new core.Exception(`${context}: Value type not specified`);
                }
                types.add(new lib4.TypeMap(keyType,valueType,child));
            }],
            ['enum',(child : any) =>  {
                types.add(this.typeEnumFromHtml(child,context));
            }],
            ['ref',(child : any) =>  {
                this.checkAttributes(child,new core.DartList.literal(),context);
                types.add(new lib4.TypeReference(innerText(child),child));
            }],
            ['union',(child : any) =>  {
                this.checkAttributes(child,new core.DartList.literal('field'),context);
                let field : string = op(Op.INDEX,child.attributes,'field');
                types.add(new lib4.TypeUnion(this.processContentsAsTypes(child,context),field,child));
            }]]));
        return types;
    }
    readApi() : lib4.Api {
        let htmlContents : string = new io.File(this.filePath).readAsStringSync();
        let document : any = null /*topLevl*/.parse(htmlContents);
        let htmlElement : any = document.children.singleWhere((element : any) =>  {
            return op(Op.EQUALS,element.localName.toLowerCase(),'html');
        });
        return this.apiFromHtml(htmlElement);
    }
    recurse(parent : any,context : string,elementProcessors : core.DartMap<string,(element : any) => void>) : void {
        for(let key of elementProcessors.keys) {
            if (!ApiReader.specialElements.contains(key)) {
                throw new core.Exception(`${context}: ${key} is not a special element`);
            }
        }
        for(let node of parent.nodes) {
            if (is(node, any)) {
                if (elementProcessors.containsKey(node.localName)) {
                    (elementProcessors.get(node.localName))(node);
                }else if (ApiReader.specialElements.contains(node.localName)) {
                    throw new core.Exception(`${context}: Unexpected use of <${node.localName}>`);
                }else {
                    this.recurse(node,context,elementProcessors);
                }
            }
        }
    }
    refactoringFromHtml(html : any) : lib4.Refactoring {
        this.checkName(html,'refactoring');
        let kind : string = op(Op.INDEX,html.attributes,'kind');
        let context : string = kind != null ? kind : 'refactoring';
        this.checkAttributes(html,new core.DartList.literal('kind'),context);
        let feedback : lib4.TypeDecl;
        let options : lib4.TypeDecl;
        this.recurse(html,context,new core.DartMap.literal([
            ['feedback',(child : any) =>  {
                feedback = this.typeObjectFromHtml(child,`${context}.feedback`);
            }],
            ['options',(child : any) =>  {
                options = this.typeObjectFromHtml(child,`${context}.options`);
            }]]));
        return new lib4.Refactoring(kind,feedback,options,html);
    }
    refactoringsFromHtml(html : any) : lib4.Refactorings {
        this.checkName(html,'refactorings');
        let context : string = 'refactorings';
        this.checkAttributes(html,new core.DartList.literal(),context);
        let refactorings : core.DartList<lib4.Refactoring> = new core.DartList.literal<lib4.Refactoring>();
        this.recurse(html,context,new core.DartMap.literal([
            ['refactoring',(child : any) =>  {
                refactorings.add(this.refactoringFromHtml(child));
            }]]));
        return new lib4.Refactorings(refactorings,html);
    }
    requestFromHtml(html : any,context : string) : lib4.Request {
        let domainName : string = op(Op.INDEX,this.getAncestor(html,'domain',context).attributes,'name');
        this.checkName(html,'request',context);
        let method : string = op(Op.INDEX,html.attributes,'method');
        context = `${context}.${method != null ? method : 'method'}`;
        this.checkAttributes(html,new core.DartList.literal('method'),context,{
            optionalAttributes : new core.DartList.literal('experimental','deprecated')});
        let experimental : boolean = op(Op.EQUALS,op(Op.INDEX,html.attributes,'experimental'),'true');
        let deprecated : boolean = op(Op.EQUALS,op(Op.INDEX,html.attributes,'deprecated'),'true');
        let params : lib4.TypeDecl;
        let result : lib4.TypeDecl;
        this.recurse(html,context,new core.DartMap.literal([
            ['params',(child : any) =>  {
                params = this.typeObjectFromHtml(child,`${context}.params`);
            }],
            ['result',(child : any) =>  {
                result = this.typeObjectFromHtml(child,`${context}.result`);
            }]]));
        return new lib4.Request(domainName,method,params,result,html,{
            experimental : experimental,deprecated : deprecated});
    }
    typeDefinitionFromHtml(html : any) : lib4.TypeDefinition {
        this.checkName(html,'type');
        let name : string = op(Op.INDEX,html.attributes,'name');
        let context : string = name != null ? name : 'type';
        this.checkAttributes(html,new core.DartList.literal('name'),context,{
            optionalAttributes : new core.DartList.literal('experimental','deprecated')});
        let type : lib4.TypeDecl = this.processContentsAsType(html,context);
        let experimental : boolean = op(Op.EQUALS,op(Op.INDEX,html.attributes,'experimental'),'true');
        let deprecated : boolean = op(Op.EQUALS,op(Op.INDEX,html.attributes,'deprecated'),'true');
        return new lib4.TypeDefinition(name,type,html,{
            experimental : experimental,deprecated : deprecated});
    }
    typeEnumFromHtml(html : any,context : string) : lib4.TypeEnum {
        this.checkName(html,'enum',context);
        this.checkAttributes(html,new core.DartList.literal(),context);
        let values : core.DartList<lib4.TypeEnumValue> = new core.DartList.literal<lib4.TypeEnumValue>();
        this.recurse(html,context,new core.DartMap.literal([
            ['value',(child : any) =>  {
                values.add(this.typeEnumValueFromHtml(child,context));
            }]]));
        return new lib4.TypeEnum(values,html);
    }
    typeEnumValueFromHtml(html : any,context : string) : lib4.TypeEnumValue {
        this.checkName(html,'value',context);
        this.checkAttributes(html,new core.DartList.literal(),context,{
            optionalAttributes : new core.DartList.literal('deprecated')});
        let deprecated : boolean = op(Op.EQUALS,op(Op.INDEX,html.attributes,'deprecated'),'true');
        let values : core.DartList<string> = new core.DartList.literal<string>();
        this.recurse(html,context,new core.DartMap.literal([
            ['code',(child : any) =>  {
                let text : string = innerText(child).trim();
                values.add(text);
            }]]));
        if (values.length != 1) {
            throw new core.Exception(`${context}: Exactly one value must be specified`);
        }
        return new lib4.TypeEnumValue(values[0],html,{
            deprecated : deprecated});
    }
    typeObjectFieldFromHtml(html : any,context : string) : lib4.TypeObjectField {
        this.checkName(html,'field',context);
        let name : string = op(Op.INDEX,html.attributes,'name');
        context = `${context}.${name != null ? name : 'field'}`;
        this.checkAttributes(html,new core.DartList.literal('name'),context,{
            optionalAttributes : new core.DartList.literal('optional','value','deprecated')});
        let deprecated : boolean = op(Op.EQUALS,op(Op.INDEX,html.attributes,'deprecated'),'true');
        let optional : boolean = false;
        let optionalString : string = op(Op.INDEX,html.attributes,'optional');
        if (optionalString != null) {
            switch (optionalString) {
                case 'true':
                    optional = true;
                    break;
                case 'false':
                    optional = false;
                    break;
                default:
                    throw new core.Exception(`${context}: field contains invalid "optional" attribute: "${optionalString}"`);
            }
        }
        let value : string = op(Op.INDEX,html.attributes,'value');
        let type : lib4.TypeDecl = this.processContentsAsType(html,context);
        return new lib4.TypeObjectField(name,type,html,{
            optional : optional,value : value,deprecated : deprecated});
    }
    typeObjectFromHtml(html : any,context : string) : lib4.TypeObject {
        this.checkAttributes(html,new core.DartList.literal(),context,{
            optionalAttributes : new core.DartList.literal('experimental')});
        let fields : core.DartList<lib4.TypeObjectField> = new core.DartList.literal<lib4.TypeObjectField>();
        this.recurse(html,context,new core.DartMap.literal([
            ['field',(child : any) =>  {
                fields.add(this.typeObjectFieldFromHtml(child,context));
            }]]));
        let experimental : boolean = op(Op.EQUALS,op(Op.INDEX,html.attributes,'experimental'),'true');
        return new lib4.TypeObject(fields,html,{
            experimental : experimental});
    }
    typesFromHtml(html : any) : lib4.Types {
        this.checkName(html,'types');
        let context : string = 'types';
        this.checkAttributes(html,new core.DartList.literal(),context);
        let importUris : core.DartList<string> = new core.DartList.literal<string>();
        let typeMap : core.DartMap<string,lib4.TypeDefinition> = new core.DartMap.literal([
        ]);
        let childElements : core.DartList<any> = new core.DartList.literal<any>();
        this.recurse(html,context,new core.DartMap.literal([
            ['include',(child : any) =>  {
                let importUri : string = op(Op.INDEX,child.attributes,'import');
                if (importUri != null) {
                    importUris.add(importUri);
                }
                let relativePath : string = op(Op.INDEX,child.attributes,'path');
                let path : string = lib3.normalize(lib3.join(lib3.dirname(this.filePath),relativePath));
                let reader : ApiReader = new ApiReader(path);
                let api : lib4.Api = reader.readApi();
                for(let typeDefinition of api.types) {
                    typeDefinition.isExternal = true;
                    childElements.add(typeDefinition.html);
                    typeMap.set(typeDefinition.name,typeDefinition);
                }
            }],
            ['type',(child : any) =>  {
                let typeDefinition : lib4.TypeDefinition = this.typeDefinitionFromHtml(child);
                typeMap.set(typeDefinition.name,typeDefinition);
            }]]));
        for(let element of childElements) {
            html.append(element);
        }
        let types : lib4.Types = new lib4.Types(typeMap,html);
        types.importUris.addAll(importUris);
        return types;
    }
}

export class properties {
}
