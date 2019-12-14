/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/tool/spec/to_html.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./from_html";
import * as lib4 from "./api";
import * as convert from "@dart2ts/dart/convert";

export var _toTitleCase : (str : string) => string = (str : string) : string =>  {
    if (new core.DartString(str).isEmpty) return str;
    return new core.DartString(new core.DartString(str).substring(0,1)).toUpperCase() + new core.DartString(str).substring(1);
};
export namespace ApiMappings {
    export type Constructors = lib4.HierarchicalApiVisitor.Constructors | 'ApiMappings';
    export type Interface = Omit<ApiMappings, Constructors>;
}
@DartClass
export class ApiMappings extends lib4.HierarchicalApiVisitor {
    domains : core.DartMap<any,lib4.Domain>;

    constructor(api : lib4.Api) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ApiMappings(api : lib4.Api) {
        this.domains = new core.DartMap.literal([
        ]);
        super.HierarchicalApiVisitor(api);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitDomain(domain : lib4.Domain) : void {
        this.domains.set(domain.html,domain);
    }
}

export namespace HtmlMixin {
    export type Constructors = 'HtmlMixin';
    export type Interface = Omit<HtmlMixin, Constructors>;
}
@DartClass
export class HtmlMixin {
    anchor(id : string,callback : () => void) : void {
        this.element('a',new core.DartMap.literal([
            ['name',id]]),callback);
    }
    b(callback : () => void) : void {
        return this.element('b',new core.DartMap.literal([
        ]),callback);
    }
    body(callback : () => void) : void {
        return this.element('body',new core.DartMap.literal([
        ]),callback);
    }
    box(callback : () => void) : void {
        this.element('div',new core.DartMap.literal([
            ['class','box']]),callback);
    }
    br() : void {
        return this.element('br',new core.DartMap.literal([
        ]));
    }
    dd(callback : () => void) : void {
        return this.element('dd',new core.DartMap.literal([
        ]),callback);
    }
    dl(callback : () => void) : void {
        return this.element('dl',new core.DartMap.literal([
        ]),callback);
    }
    dt(cls : string,callback : () => void) : void {
        return this.element('dt',new core.DartMap.literal([
            ['class',cls]]),callback);
    }
    @Abstract
    element(name : string,attributes : core.DartMap<any,string>,callback? : () => void) : void{ throw 'abstract'}
    gray(callback : () => void) : void {
        return this.element('span',new core.DartMap.literal([
            ['style','color:#999999']]),callback);
    }
    h1(callback : () => void) : void {
        return this.element('h1',new core.DartMap.literal([
        ]),callback);
    }
    h2(cls : string,callback : () => void) : void {
        if (cls == null) {
            return this.element('h2',new core.DartMap.literal([
            ]),callback);
        }
        return this.element('h2',new core.DartMap.literal([
            ['class',cls]]),callback);
    }
    h3(callback : () => void) : void {
        return this.element('h3',new core.DartMap.literal([
        ]),callback);
    }
    h4(callback : () => void) : void {
        return this.element('h4',new core.DartMap.literal([
        ]),callback);
    }
    h5(callback : () => void) : void {
        return this.element('h5',new core.DartMap.literal([
        ]),callback);
    }
    hangingIndent(callback : () => void) : void {
        return this.element('div',new core.DartMap.literal([
            ['class','hangingIndent']]),callback);
    }
    head(callback : () => void) : void {
        return this.element('head',new core.DartMap.literal([
        ]),callback);
    }
    html(callback : () => void) : void {
        return this.element('html',new core.DartMap.literal([
        ]),callback);
    }
    i(callback : () => void) : void {
        return this.element('i',new core.DartMap.literal([
        ]),callback);
    }
    li(callback : () => void) : void {
        return this.element('li',new core.DartMap.literal([
        ]),callback);
    }
    link(id : string,callback : () => void,attributes? : core.DartMap<any,string>) : void {
        attributes = ( attributes ) || ( new core.DartMap.literal([
        ]) );
        attributes.set('href',`#${id}`);
        this.element('a',attributes,callback);
    }
    p(callback : () => void) : void {
        return this.element('p',new core.DartMap.literal([
        ]),callback);
    }
    pre(callback : () => void) : void {
        return this.element('pre',new core.DartMap.literal([
        ]),callback);
    }
    span(cls : string,callback : () => void) : void {
        return this.element('span',new core.DartMap.literal([
            ['class',cls]]),callback);
    }
    title(callback : () => void) : void {
        return this.element('title',new core.DartMap.literal([
        ]),callback);
    }
    tt(callback : () => void) : void {
        return this.element('tt',new core.DartMap.literal([
        ]),callback);
    }
    ul(callback : () => void) : void {
        return this.element('ul',new core.DartMap.literal([
        ]),callback);
    }
    constructor() {
    }
    @defaultConstructor
    HtmlMixin() {
    }
}

export namespace ToHtmlVisitor {
    export type Constructors = lib4.HierarchicalApiVisitor.Constructors | 'ToHtmlVisitor';
    export type Interface = Omit<ToHtmlVisitor, Constructors>;
}
@DartClass
@With(HtmlMixin,any)
export class ToHtmlVisitor extends lib4.HierarchicalApiVisitor implements HtmlMixin.Interface,any.Interface {
    @Abstract
    anchor(id : string,callback : () => void) : void {
        throw 'from mixin';
    }
    @Abstract
    b(callback : () => void) : void {
        throw 'from mixin';
    }
    @Abstract
    body(callback : () => void) : void {
        throw 'from mixin';
    }
    @Abstract
    box(callback : () => void) : void {
        throw 'from mixin';
    }
    @Abstract
    br() : void {
        throw 'from mixin';
    }
    @Abstract
    dd(callback : () => void) : void {
        throw 'from mixin';
    }
    @Abstract
    dl(callback : () => void) : void {
        throw 'from mixin';
    }
    @Abstract
    dt(cls : string,callback : () => void) : void {
        throw 'from mixin';
    }
    @Abstract
    element(name : string,attributes : core.DartMap<any,string>,callback? : () => void) : void {
        throw 'from mixin';
    }
    @Abstract
    gray(callback : () => void) : void {
        throw 'from mixin';
    }
    @Abstract
    h1(callback : () => void) : void {
        throw 'from mixin';
    }
    @Abstract
    h2(cls : string,callback : () => void) : void {
        throw 'from mixin';
    }
    @Abstract
    h3(callback : () => void) : void {
        throw 'from mixin';
    }
    @Abstract
    h4(callback : () => void) : void {
        throw 'from mixin';
    }
    @Abstract
    h5(callback : () => void) : void {
        throw 'from mixin';
    }
    @Abstract
    hangingIndent(callback : () => void) : void {
        throw 'from mixin';
    }
    @Abstract
    head(callback : () => void) : void {
        throw 'from mixin';
    }
    @Abstract
    html(callback : () => void) : void {
        throw 'from mixin';
    }
    @Abstract
    i(callback : () => void) : void {
        throw 'from mixin';
    }
    @Abstract
    li(callback : () => void) : void {
        throw 'from mixin';
    }
    @Abstract
    link(id : string,callback : () => void,attributes? : core.DartMap<any,string>) : void {
        throw 'from mixin';
    }
    @Abstract
    p(callback : () => void) : void {
        throw 'from mixin';
    }
    @Abstract
    pre(callback : () => void) : void {
        throw 'from mixin';
    }
    @Abstract
    span(cls : string,callback : () => void) : void {
        throw 'from mixin';
    }
    @Abstract
    title(callback : () => void) : void {
        throw 'from mixin';
    }
    @Abstract
    tt(callback : () => void) : void {
        throw 'from mixin';
    }
    @Abstract
    ul(callback : () => void) : void {
        throw 'from mixin';
    }
    definedTypes : core.DartSet<string>;

    apiMappings : ApiMappings;

    constructor(api : lib4.Api) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    ToHtmlVisitor(api : lib4.Api) {
        this.definedTypes = new core.DartSet<string>();
        this.apiMappings = new ApiMappings(api);
        super.HierarchicalApiVisitor(api);
        this.apiMappings.visitApi();
    }
    describePayload(subType : lib4.TypeObject,name : string,_namedArguments? : {force? : boolean}) : void {
        let {force} = Object.assign({
            "force" : false}, _namedArguments );
        if (force || subType != null) {
            this.h4(() =>  {
                write(name);
            });
            if (op(Op.EQUALS,subType,null)) {
                this.p(() =>  {
                    write('none');
                });
            }else {
                this.visitTypeDecl(subType);
            }
        }
    }
    generateDomainIndex(domain : lib4.Domain) : void {
        this.h4(() =>  {
            write(domain.name);
            write(' (');
            this.link(`domain_${domain.name}`,() =>  {
                return write('↑');
            });
            write(')');
        });
        if (domain.requests.length > 0) {
            this.element('div',new core.DartMap.literal([
                ['class','subindex']]),() =>  {
                this.generateRequestsIndex(domain.requests);
                if (domain.notifications.length > 0) {
                    this.generateNotificationsIndex(domain.notifications);
                }
            });
        }else if (domain.notifications.length > 0) {
            this.element('div',new core.DartMap.literal([
                ['class','subindex']]),() =>  {
                this.generateNotificationsIndex(domain.notifications);
            });
        }
    }
    generateDomainsHeader() : void {
        this.h1(() =>  {
            write('Domains');
        });
    }
    generateIndex() : void {
        this.h3(() =>  {
            return write('Domains');
        });
        for(let domain of this.api.domains) {
            if (domain.experimental || (domain.requests.length == 0 && domain.notifications == 0)) {
                continue;
            }
            this.generateDomainIndex(domain);
        }
        this.generateTypesIndex(this.definedTypes);
        this.generateRefactoringsIndex(this.api.refactorings);
    }
    generateNotificationsIndex(notifications : core.DartIterable<lib4.Notification>) : void {
        this.h5(() =>  {
            return write("Notifications");
        });
        this.element('div',new core.DartMap.literal([
            ['class','subindex']]),() =>  {
            this.element('ul',new core.DartMap.literal([
            ]),() =>  {
                for(let notification of notifications) {
                    this.element('li',new core.DartMap.literal([
                    ]),() =>  {
                        return this.link(`notification_${notification.longEvent}`,() =>  {
                            return write(notification.event);
                        });
                    });
                }
            });
        });
    }
    generateRefactoringsIndex(refactorings : core.DartIterable<lib4.Refactoring>) : void {
        if (refactorings == null) {
            return;
        }
        this.h3(() =>  {
            write("Refactorings");
            write(' (');
            this.link('refactorings',() =>  {
                return write('↑');
            });
            write(')');
        });
        this.element('div',new core.DartMap.literal([
            ['class','subindex']]),() =>  {
            this.element('ul',new core.DartMap.literal([
            ]),() =>  {
                for(let refactoring of refactorings) {
                    this.element('li',new core.DartMap.literal([
                    ]),() =>  {
                        return this.link(`refactoring_${refactoring.kind}`,() =>  {
                            return write(refactoring.kind);
                        });
                    });
                }
            });
        });
    }
    generateRequestsIndex(requests : core.DartIterable<lib4.Request>) : void {
        this.h5(() =>  {
            return write("Requests");
        });
        this.element('ul',new core.DartMap.literal([
        ]),() =>  {
            for(let request of requests) {
                if (!request.experimental) {
                    this.element('li',new core.DartMap.literal([
                    ]),() =>  {
                        return this.link(`request_${request.longMethod}`,() =>  {
                            return write(request.method);
                        });
                    });
                }
            }
        });
    }
    generateTableOfContents() : void {
        for(let domain of this.api.domains.where((domain : any) =>  {
            return !domain.experimental;
        })) {
            writeln();
            this.p(() =>  {
                this.link(`domain_${domain.name}`,() =>  {
                    write(_toTitleCase(domain.name));
                });
            });
            this.ul(() =>  {
                for(let request of domain.requests) {
                    this.li(() =>  {
                        this.link(`request_${request.longMethod}`,() =>  {
                            write(request.longMethod);
                        },request.deprecated ? new core.DartMap.literal([
                            ['class','deprecated']]) : null);
                    });
                    writeln();
                }
            });
            writeln();
        }
    }
    generateTypesIndex(types : core.DartSet<string>) : void {
        this.h3(() =>  {
            write("Types");
            write(' (');
            this.link('types',() =>  {
                return write('↑');
            });
            write(')');
        });
        let sortedTypes : core.DartList<string> = types.toList();
        sortedTypes.sort();
        this.element('div',new core.DartMap.literal([
            ['class','subindex']]),() =>  {
            this.element('ul',new core.DartMap.literal([
            ]),() =>  {
                for(let type of sortedTypes) {
                    this.element('li',new core.DartMap.literal([
                    ]),() =>  {
                        return this.link(`type_${type}`,() =>  {
                            return write(type);
                        });
                    });
                }
            });
        });
    }
    javadocParams(typeObject : lib4.TypeObject) : void {
        if (typeObject != null) {
            for(let field of typeObject.fields) {
                this.hangingIndent(() =>  {
                    write(`@param ${field.name} `);
                    this.translateHtml(field.html,{
                        squashParagraphs : true});
                });
            }
        }
    }
    showType(shortDesc : string,type : lib4.TypeDecl,typeForBolding? : lib4.TypeObject) : void {
        let fieldsToBold : core.DartSet<string> = new core.DartSet<string>();
        if (typeForBolding != null) {
            for(let field of typeForBolding.fields) {
                fieldsToBold.add(field.name);
            }
        }
        this.pre(() =>  {
            if (shortDesc != null) {
                write(`${shortDesc}: `);
            }
            let typeVisitor : TypeVisitor = new TypeVisitor(this.api,{
                fieldsToBold : fieldsToBold});
            addAll(typeVisitor.collectHtml(() =>  {
                typeVisitor.visitTypeDecl(type);
            }));
        });
    }
    translateHtml(html : any,_namedArguments? : {squashParagraphs? : boolean}) : void {
        let {squashParagraphs} = Object.assign({
            "squashParagraphs" : false}, _namedArguments );
        for(let node of html.nodes) {
            if (is(node, any)) {
                if (squashParagraphs && op(Op.EQUALS,node.localName,'p')) {
                    this.translateHtml(node,{
                        squashParagraphs : squashParagraphs});
                    continue;
                }
                switch (node.localName) {
                    case 'domains':
                        this.generateDomainsHeader();
                        break;
                    case 'domain':
                        this.visitDomain(this.apiMappings.domains.get(node));
                        break;
                    case 'head':
                        this.head(() =>  {
                            this.translateHtml(node,{
                                squashParagraphs : squashParagraphs});
                            this.element('link',new core.DartMap.literal([
                                ['rel','stylesheet'],
                                ['href','https://fonts.googleapis.com/css?family=Source+Code+Pro|Roboto:500,400italic,300,400'],
                                ['type','text/css']]));
                            this.element('style',new core.DartMap.literal([
                            ]),() =>  {
                                writeln(properties.stylesheet);
                            });
                        });
                        break;
                    case 'refactorings':
                        this.visitRefactorings(this.api.refactorings);
                        break;
                    case 'types':
                        this.visitTypes(this.api.types);
                        break;
                    case 'version':
                        this.translateHtml(node,{
                            squashParagraphs : squashParagraphs});
                        break;
                    case 'toc':
                        this.generateTableOfContents();
                        break;
                    case 'index':
                        this.generateIndex();
                        break;
                    default:
                        if (!lib3.ApiReader.specialElements.contains(node.localName)) {
                            this.element(node.localName,node.attributes,() =>  {
                                this.translateHtml(node,{
                                    squashParagraphs : squashParagraphs});
                            });
                        }
                }
            }else if (is(node, any)) {
                let text : string = node.text;
                write(text);
            }
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitApi() : void {
        let apiTypes : core.DartIterable<lib4.TypeDefinition> = this.api.types.where((td : lib4.TypeDefinition) =>  {
            return !td.experimental;
        });
        this.definedTypes = apiTypes.map((td : lib4.TypeDefinition) =>  {
            return td.name;
        }).toSet();
        this.html(() =>  {
            this.translateHtml(this.api.html);
        });
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitDomain(domain : lib4.Domain) : void {
        if (domain.experimental) {
            return;
        }
        this.h2('domain',() =>  {
            this.anchor(`domain_${domain.name}`,() =>  {
                write(`${domain.name} domain`);
            });
        });
        this.translateHtml(domain.html);
        if (domain.requests.isNotEmpty) {
            this.h3(() =>  {
                write('Requests');
            });
            this.dl(() =>  {
                domain.requests.forEach(this.visitRequest.bind(this));
            });
        }
        if (domain.notifications.isNotEmpty) {
            this.h3(() =>  {
                write('Notifications');
            });
            this.dl(() =>  {
                domain.notifications.forEach(this.visitNotification.bind(this));
            });
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitNotification(notification : lib4.Notification) : void {
        this.dt('notification',() =>  {
            this.anchor(`notification_${notification.longEvent}`,() =>  {
                write(notification.longEvent);
            });
        });
        this.dd(() =>  {
            this.box(() =>  {
                this.showType('notification',notification.notificationType,notification.params);
            });
            this.translateHtml(notification.html);
            this.describePayload(notification.params,'parameters:');
        });
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitRefactoring(refactoring : lib4.Refactoring) {
        this.dt('refactoring',() =>  {
            write(refactoring.kind);
        });
        this.dd(() =>  {
            this.translateHtml(refactoring.html);
            this.describePayload(refactoring.feedback,'Feedback:',{
                force : true});
            this.describePayload(refactoring.options,'Options:',{
                force : true});
        });
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitRefactorings(refactorings : lib4.Refactorings) : void {
        this.translateHtml(refactorings.html);
        this.dl(() =>  {
            super.visitRefactorings(refactorings);
        });
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitRequest(request : lib4.Request) : void {
        if (request.experimental) {
            return;
        }
        this.dt(request.deprecated ? 'request deprecated' : 'request',() =>  {
            this.anchor(`request_${request.longMethod}`,() =>  {
                write(request.longMethod);
            });
        });
        this.dd(() =>  {
            this.box(() =>  {
                this.showType('request',request.requestType,request.params);
                this.br();
                this.showType('response',request.responseType,request.result);
            });
            this.translateHtml(request.html);
            this.describePayload(request.params,'parameters:');
            this.describePayload(request.result,'returns:');
        });
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitTypeDefinition(typeDefinition : lib4.TypeDefinition) : void {
        if (typeDefinition.experimental) {
            return;
        }
        this.dt(typeDefinition.deprecated ? 'typeDefinition deprecated' : 'typeDefinition',() =>  {
            this.anchor(`type_${typeDefinition.name}`,() =>  {
                write(`${typeDefinition.name}: `);
                let typeVisitor : TypeVisitor = new TypeVisitor(this.api,{
                    short : true});
                addAll(typeVisitor.collectHtml(() =>  {
                    typeVisitor.visitTypeDecl(typeDefinition.type);
                }));
            });
        });
        this.dd(() =>  {
            this.translateHtml(typeDefinition.html);
            this.visitTypeDecl(typeDefinition.type);
        });
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitTypeEnum(typeEnum : lib4.TypeEnum) : void {
        this.dl(() =>  {
            super.visitTypeEnum(typeEnum);
        });
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitTypeEnumValue(typeEnumValue : lib4.TypeEnumValue) : void {
        let isDocumented : boolean = false;
        for(let node of typeEnumValue.html.nodes) {
            if ((is(node, any) && node.localName != 'code') || (is(node, any) && node.text.trim().isNotEmpty)) {
                isDocumented = true;
                break;
            }
        }
        this.dt(typeEnumValue.deprecated ? 'value deprecated' : 'value',() =>  {
            write(typeEnumValue.value);
        });
        if (isDocumented) {
            this.dd(() =>  {
                this.translateHtml(typeEnumValue.html);
            });
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitTypeList(typeList : lib4.TypeList) : void {
        this.visitTypeDecl(typeList.itemType);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitTypeMap(typeMap : lib4.TypeMap) : void {
        this.visitTypeDecl(typeMap.valueType);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitTypeObject(typeObject : lib4.TypeObject) : void {
        this.dl(() =>  {
            super.visitTypeObject(typeObject);
        });
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitTypeObjectField(typeObjectField : lib4.TypeObjectField) : void {
        this.dt('field',() =>  {
            this.b(() =>  {
                if (typeObjectField.deprecated) {
                    this.span('deprecated',() =>  {
                        write(typeObjectField.name);
                    });
                }else {
                    write(typeObjectField.name);
                }
                if (typeObjectField.value != null) {
                    write(` = ${convert.properties.JSON.encode(typeObjectField.value)}`);
                }else {
                    write(': ');
                    let typeVisitor : TypeVisitor = new TypeVisitor(this.api,{
                        short : true});
                    addAll(typeVisitor.collectHtml(() =>  {
                        typeVisitor.visitTypeDecl(typeObjectField.type);
                    }));
                    if (typeObjectField.optional) {
                        this.gray(() =>  {
                            return write(' (optional)');
                        });
                    }
                }
            });
        });
        this.dd(() =>  {
            this.translateHtml(typeObjectField.html);
        });
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitTypeReference(typeReference : lib4.TypeReference) : void {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitTypes(types : lib4.Types) : void {
        this.translateHtml(types.html);
        this.dl(() =>  {
            let sortedTypes : core.DartList<lib4.TypeDefinition> = types.toList();
            sortedTypes.sort((first : lib4.TypeDefinition,second : lib4.TypeDefinition) =>  {
                return new core.DartString(first.name).compareTo(second.name);
            });
            sortedTypes.forEach(this.visitTypeDefinition.bind(this));
        });
    }
}

export namespace TypeVisitor {
    export type Constructors = lib4.HierarchicalApiVisitor.Constructors | 'TypeVisitor';
    export type Interface = Omit<TypeVisitor, Constructors>;
}
@DartClass
@With(HtmlMixin,any)
export class TypeVisitor extends lib4.HierarchicalApiVisitor implements HtmlMixin.Interface,any.Interface {
    @Abstract
    anchor(id : string,callback : () => void) : void {
        throw 'from mixin';
    }
    @Abstract
    b(callback : () => void) : void {
        throw 'from mixin';
    }
    @Abstract
    body(callback : () => void) : void {
        throw 'from mixin';
    }
    @Abstract
    box(callback : () => void) : void {
        throw 'from mixin';
    }
    @Abstract
    br() : void {
        throw 'from mixin';
    }
    @Abstract
    dd(callback : () => void) : void {
        throw 'from mixin';
    }
    @Abstract
    dl(callback : () => void) : void {
        throw 'from mixin';
    }
    @Abstract
    dt(cls : string,callback : () => void) : void {
        throw 'from mixin';
    }
    @Abstract
    element(name : string,attributes : core.DartMap<any,string>,callback? : () => void) : void {
        throw 'from mixin';
    }
    @Abstract
    gray(callback : () => void) : void {
        throw 'from mixin';
    }
    @Abstract
    h1(callback : () => void) : void {
        throw 'from mixin';
    }
    @Abstract
    h2(cls : string,callback : () => void) : void {
        throw 'from mixin';
    }
    @Abstract
    h3(callback : () => void) : void {
        throw 'from mixin';
    }
    @Abstract
    h4(callback : () => void) : void {
        throw 'from mixin';
    }
    @Abstract
    h5(callback : () => void) : void {
        throw 'from mixin';
    }
    @Abstract
    hangingIndent(callback : () => void) : void {
        throw 'from mixin';
    }
    @Abstract
    head(callback : () => void) : void {
        throw 'from mixin';
    }
    @Abstract
    html(callback : () => void) : void {
        throw 'from mixin';
    }
    @Abstract
    i(callback : () => void) : void {
        throw 'from mixin';
    }
    @Abstract
    li(callback : () => void) : void {
        throw 'from mixin';
    }
    @Abstract
    link(id : string,callback : () => void,attributes? : core.DartMap<any,string>) : void {
        throw 'from mixin';
    }
    @Abstract
    p(callback : () => void) : void {
        throw 'from mixin';
    }
    @Abstract
    pre(callback : () => void) : void {
        throw 'from mixin';
    }
    @Abstract
    span(cls : string,callback : () => void) : void {
        throw 'from mixin';
    }
    @Abstract
    title(callback : () => void) : void {
        throw 'from mixin';
    }
    @Abstract
    tt(callback : () => void) : void {
        throw 'from mixin';
    }
    @Abstract
    ul(callback : () => void) : void {
        throw 'from mixin';
    }
    fieldsToBold : core.DartSet<string>;

    short : boolean;

    constructor(api : lib4.Api,_namedArguments? : {fieldsToBold? : core.DartSet<string>,short? : boolean}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    TypeVisitor(api : lib4.Api,_namedArguments? : {fieldsToBold? : core.DartSet<string>,short? : boolean}) {
        let {fieldsToBold,short} = Object.assign({
            "short" : false}, _namedArguments );
        super.HierarchicalApiVisitor(api);
        this.fieldsToBold = fieldsToBold;
        this.short = short;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitTypeEnum(typeEnum : lib4.TypeEnum) : void {
        if (this.short) {
            write('String');
            return;
        }
        writeln('enum {');
        indent(() =>  {
            for(let value of typeEnum.values) {
                writeln(value.value);
            }
        });
        write('}');
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitTypeList(typeList : lib4.TypeList) : void {
        write('List<');
        this.visitTypeDecl(typeList.itemType);
        write('>');
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitTypeMap(typeMap : lib4.TypeMap) : void {
        write('Map<');
        this.visitTypeDecl(typeMap.keyType);
        write(', ');
        this.visitTypeDecl(typeMap.valueType);
        write('>');
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitTypeObject(typeObject : lib4.TypeObject) : void {
        if (this.short) {
            write('object');
            return;
        }
        writeln('{');
        indent(() =>  {
            for(let field of typeObject.fields) {
                write('"');
                if (this.fieldsToBold != null && this.fieldsToBold.contains(field.name)) {
                    this.b(() =>  {
                        write(field.name);
                    });
                }else {
                    write(field.name);
                }
                write('": ');
                if (field.value != null) {
                    write(convert.properties.JSON.encode(field.value));
                }else {
                    if (field.optional) {
                        this.gray(() =>  {
                            write('optional');
                        });
                        write(' ');
                    }
                    this.visitTypeDecl(field.type);
                }
                writeln();
            }
        });
        write('}');
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitTypeReference(typeReference : lib4.TypeReference) : void {
        let displayName : string = typeReference.typeName;
        if (this.api.types.containsKey(typeReference.typeName)) {
            this.link(`type_${typeReference.typeName}`,() =>  {
                write(displayName);
            });
        }else {
            write(displayName);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitTypeUnion(typeUnion : lib4.TypeUnion) : void {
        let verticalBarNeeded : boolean = false;
        for(let choice of typeUnion.choices) {
            if (verticalBarNeeded) {
                write(' | ');
            }
            this.visitTypeDecl(choice);
            verticalBarNeeded = true;
        }
    }
}

export class properties {
    private static __$stylesheet : string;
    static get stylesheet() : string { 
        if (this.__$stylesheet===undefined) {
            this.__$stylesheet = new core.DartString('body {\n  font-family: \'Roboto\', sans-serif;\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 0 16px;\n  font-size: 16px;\n  line-height: 1.5;\n  color: #111;\n  background-color: #fdfdfd;\n  font-weight: 300;\n  -webkit-font-smoothing: auto;\n}\n\nh2, h3, h4, h5 {\n  margin-bottom: 0;\n}\n\nh2.domain {\n  border-bottom: 1px solid rgb(200, 200, 200);\n  margin-bottom: 0.5em;\n}\n\nh4 {\n  font-size: 18px;\n}\n\nh5 {\n  font-size: 16px;\n}\n\np {\n  margin-top: 0;\n}\n\npre {\n  margin: 0;\n  font-family: \'Source Code Pro\', monospace;\n  font-size: 15px;\n}\n\ndiv.box {\n  background-color: rgb(240, 245, 240);\n  border-radius: 4px;\n  padding: 4px 12px;\n  margin: 16px 0;\n}\n\ndiv.hangingIndent {\n  padding-left: 3em;\n  text-indent: -3em;\n}\n\ndl dt {\n  font-weight: bold;\n}\n\ndl dd {\n  margin-left: 16px;\n}\n\ndt {\n  margin-top: 1em;\n}\n\ndt.notification {\n  font-weight: bold;\n}\n\ndt.refactoring {\n  font-weight: bold;\n}\n\ndt.request {\n  font-weight: bold;\n}\n\ndt.typeDefinition {\n  font-weight: bold;\n}\n\na {\n  text-decoration: none;\n}\n\na:focus, a:hover {\n  text-decoration: underline;\n}\n\n.deprecated {\n  text-decoration: line-through;\n}\n\n/* Styles for index */\n\n.subindex ul {\n  padding-left: 0;\n  margin-left: 0;\n\n  -webkit-margin-before: 0;\n  -webkit-margin-start: 0;\n  -webkit-padding-start: 0;\n\n  list-style-type: none;\n}\n').trim();
        }
        return this.__$stylesheet;
    }
    static set stylesheet(__$value : string)  { 
        this.__$stylesheet = __$value;
    }

    private static __$target : any;
    static get target() : any { 
        if (this.__$target===undefined) {
            this.__$target = new bare.createInstance(any,null,'doc/api.html',(pkgPath : string) =>  {
                let visitor : ToHtmlVisitor = new ToHtmlVisitor(lib3.readApi(pkgPath));
                let document : any = new bare.createInstance(any,null);
                document.append(new bare.createInstance(any,null,'html',null,null));
                for(let node of visitor.collectHtml(visitor.visitApi.bind(visitor))) {
                    document.append(node);
                }
                return document.outerHtml;
            });
        }
        return this.__$target;
    }
    static set target(__$value : any)  { 
        this.__$target = __$value;
    }

}
