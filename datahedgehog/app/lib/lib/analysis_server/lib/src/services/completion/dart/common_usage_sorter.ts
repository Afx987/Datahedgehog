/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/services/completion/dart/common_usage_sorter.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/analysis_server/lib/src/protocol_server";

export namespace CommonUsageSorter {
    export type Constructors = 'CommonUsageSorter';
    export type Interface = Omit<CommonUsageSorter, Constructors>;
}
@DartClass
@Implements(any)
export class CommonUsageSorter implements any.Interface {
    selectorRelevance : core.DartMap<string,core.DartList<string>>;

    constructor(selectorRelevance? : core.DartMap<string,core.DartList<string>>) {
    }
    @defaultConstructor
    CommonUsageSorter(selectorRelevance? : core.DartMap<string,core.DartList<string>>) {
        selectorRelevance = selectorRelevance || properties.defaultSelectorRelevance;
        this.selectorRelevance = selectorRelevance;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    sort(request : any,suggestions : core.DartIterable<any>) : async.Future<any> {
        this._update(request,suggestions);
        return new async.Future.value();
    }
    _getCompletionTarget(request : any) : any {
        return new bare.createInstance(any,null,request.result.unit,request.offset);
    }
    _update(request : any,suggestions : core.DartIterable<any>) : void {
        let target = this._getCompletionTarget(request);
        if (target != null) {
            let visitor = new _BestTypeVisitor(target.entity);
            let type : any = target.containingNode.accept(visitor);
            if (type != null) {
                let typeElem : any = type.element;
                if (typeElem != null) {
                    let libElem : any = typeElem.library;
                    if (libElem != null) {
                        this._updateInvocationRelevance(type,libElem,suggestions);
                    }
                }
            }
        }
    }
    _updateInvocationRelevance(type : any,libElem : any,suggestions : core.DartIterable<any>) : void {
        let typeName : string = type.name;
        let selectors : core.DartList<string> = this.selectorRelevance.get(`${libElem.name}.${typeName}`);
        if (selectors != null) {
            for(let suggestion of suggestions) {
                let element : any = suggestion.element;
                if (element != null && (op(Op.EQUALS,element.kind,lib3.ElementKind.CONSTRUCTOR) || op(Op.EQUALS,element.kind,lib3.ElementKind.FIELD) || op(Op.EQUALS,element.kind,lib3.ElementKind.GETTER) || op(Op.EQUALS,element.kind,lib3.ElementKind.METHOD) || op(Op.EQUALS,element.kind,lib3.ElementKind.SETTER)) && op(Op.EQUALS,suggestion.kind,CompletionSuggestionKind.INVOCATION) && op(Op.EQUALS,suggestion.declaringType,typeName)) {
                    let index : number = selectors.indexOf(suggestion.completion);
                    if (index != -1) {
                        suggestion.relevance = op(Op.MINUS,DART_RELEVANCE_COMMON_USAGE,index);
                    }
                }
            }
        }
    }
}

export namespace _BestTypeVisitor {
    export type Constructors = '_BestTypeVisitor';
    export type Interface = Omit<_BestTypeVisitor, Constructors>;
}
@DartClass
export class _BestTypeVisitor extends any {
    entity : core.DartObject;

    constructor(entity : core.DartObject) {
    }
    @defaultConstructor
    _BestTypeVisitor(entity : core.DartObject) {
        this.entity = entity;
    }
    visitConstructorName(node : any) : any {
        return node.period != null && op(Op.EQUALS,node.name,this.entity) ? ((t)=>(!!t)?t.type:null)(node.type) : null;
    }
    visitNode(node : any) : any {
        return null;
    }
    visitPrefixedIdentifier(node : any) : any {
        return op(Op.EQUALS,node.identifier,this.entity) ? ((t)=>(!!t)?t.bestType:null)(node.prefix) : null;
    }
    visitPropertyAccess(node : any) : any {
        return op(Op.EQUALS,node.propertyName,this.entity) ? ((t)=>(!!t)?t.bestType:null)(node.realTarget) : null;
    }
}

export class properties {
    private static __$defaultSelectorRelevance : core.DartMap<string,core.DartList<string>>;
    static get defaultSelectorRelevance() : core.DartMap<string,core.DartList<string>> { 
        if (this.__$defaultSelectorRelevance===undefined) {
            this.__$defaultSelectorRelevance = new core.DartMap.literal([
                ['dart.core.Comparable',new core.DartList.literal('compareTo','compare')],
                ['dart.math.Random',new core.DartList.literal('nextInt','nextDouble','nextBool')],
                ['dart.core.List',new core.DartList.literal('add','map','length','removeLast','addAll','join','forEach','contains','removeAt','where','last','clear','setRange','sort','insert','remove','sublist','indexOf','isEmpty','any','insertAll','first','removeRange','replaceRange','take','getRange','skip','toList','retainWhere','fillRange','removeWhere','expand','fold','reversed','firstWhere','every','setAll','asMap','isNotEmpty','lastIndexOf','singleWhere','lastWhere','shuffle','takeWhile','iterator','toString','toSet','single','reduce','elementAt','skipWhile','insertRange','filter','push','mappedBy','addLast','some','slice','retainMatching','firstMatching','removeAll','retainAll','removeMatching','min','lastMatching','singleMatching','max','get','toArray','runtimeType','reverse','addd','asByteArray')],
                ['dart.core.Iterable',new core.DartList.literal('toList','map','join','toSet','where','forEach','expand','fold','every','any','contains','firstWhere','length','elementAt','skipWhile','reduce','iterator','take','skip','toString','singleWhere','lastWhere','takeWhile','isEmpty','first','single','last','isNotEmpty','addAll','indexOf','add','sort','toArray','mappedBy','filter')],
                ['dart.core.Set',new core.DartList.literal('add','contains','remove','addAll','clear','difference','map','containsAll','union','removeWhere','removeAll','intersection','retainAll','retainWhere','forEach','toSet','every','lookup','any','toString','toList','where','length','join','skip','firstWhere','isEmpty','first','iterator','singleWhere','expand','elementAt','fold','reduce','single','lastWhere','isNotEmpty','take','takeWhile','skipWhile','last','findBy','toArray','filter')],
                ['dart.collection.Queue',new core.DartList.literal('add','removeFirst','clear','removeLast','remove','addAll','addLast','addFirst','removeWhere','retainWhere','length','toList','where','contains','forEach','map','isNotEmpty','first','isEmpty','fold','skip','any','elementAt')],
                ['dart.core.Map',new core.DartList.literal('containsKey','forEach','remove','putIfAbsent','clear','addAll','length','keys','values','containsValue','toString','isNotEmpty','isEmpty','get','getKeys','put','getValues','clone','keySet','hashCode','runtimeType')],
                ['dart.core.Iterator',new core.DartList.literal('moveNext','current','next','hasNext')],
                ['dart.pkg.collection.equality.Equality',new core.DartList.literal('hash','equals','isValidKey')],
                ['dart.pkg.collection.equality.SetEquality',new core.DartList.literal('equals','hash')],
                ['dart.pkg.collection.equality.MapEquality',new core.DartList.literal('equals','hash')],
                ['dart.pkg.collection.equality.ListEquality',new core.DartList.literal('equals','hash')],
                ['dart.pkg.collection.equality.IterableEquality',new core.DartList.literal('hash','equals')],
                ['dart.pkg.collection.equality.UnorderedIterableEquality',new core.DartList.literal('hash','equals')],
                ['dart.async.StreamSubscription',new core.DartList.literal('cancel','pause','onDone','resume','onError','asFuture','onData','isPaused')],
                ['dart.async.StreamController',new core.DartList.literal('add','close','addError','addStream','stream','hasListener','signalError','sink','done')],
                ['dart.async.Stream',new core.DartList.literal('listen','transform','pipe','first','toList','forEach','firstWhere','where','join','fold','asyncMap','map','isEmpty','asBroadcastStream','handleError','capture','asyncExpand','take','single','expand','onFile','skip','any','timeout','add','last','runtimeType','isBroadcast','drain','elementAt','skipWhile','distinct','singleWhere','lastWhere','contains','every','takeWhile','emit','onDir','onError','onDone','onData','length')],
                ['dart.async.Future',new core.DartList.literal('then','catchError','wait','whenComplete','forEach','asStream','timeout','map','packages','where','firstWhere','chain','transform','doWhile','onError','onResponse','onRequest','handleException')],
                ['dart.core.String',new core.DartList.literal('substring','codeUnitAt','startsWith','replaceAll','split','contains','indexOf','toLowerCase','trim','length','endsWith','lastIndexOf','compareTo','isEmpty','toUpperCase','replaceFirst','toString','replaceAllMapped','allMatches','padLeft','codeUnits','hashCode','splitMapJoin','isNotEmpty','runes','charCodeAt','charCodes','trimRight','padRight','concat','equalsIgnoreCase','splitChars','trimLeft','matchAsPrefix','equals','map','toLoweCase','match','slice','getBytes','toCharArray','runtimeType','charAt','valueOf')],
                ['dart.core.StringBuffer',new core.DartList.literal('write','toString','writeln','writeCharCode','clear','writeAll','add','addAll','addCharCode','isEmpty')],
                ['dart.core.RegExp',new core.DartList.literal('firstMatch','hasMatch','allMatches','matchAsPrefix','pattern','stringMatch','toString','exec')],
                ['dart.core.double',new core.DartList.literal('parse','toInt','compareTo','floor','toString','abs','round','toStringAsPrecision','toDouble','floorToDouble','ceil','truncate','toStringAsFixed','roundToDouble','clamp','isNaN','isFinite','toStringAsExponential','ceilToDouble','truncateToDouble','isNan','isNegative','isInfinite','hashCode')],
                ['dart.core.Type',new core.DartList.literal('toString','hashCode','runtimeType')],
                ['dart.mirrors.InstanceMirror',new core.DartList.literal('reflectee','getField','type','invoke','setField','delegate','function','then','apply','hasReflectee')],
                ['dart.collection.IterableBase',new core.DartList.literal('iterableToFullString')],
                ['dart.pkg.collection.utils.Pair',new core.DartList.literal('last')],
                ['dart.collection.Maps',new core.DartList.literal('mapToString','length','putIfAbsent','clear','containsKey','getValues','forEach','containsValue','isNotEmpty','isEmpty')],
                ['dart.collection.SplayTreeSet',new core.DartList.literal('add','addAll','where')],
                ['dart.core.StackTrace',new core.DartList.literal('toString','frames')],
                ['dart.convert.JsonCodec',new core.DartList.literal('encode','decode','fuse')],
                ['dart.mirrors.MirrorSystem',new core.DartList.literal('getName','libraries','findLibrary','isolate','dynamicType','getSymbol','voidType')],
                ['dart.mirrors.ClassMirror',new core.DartList.literal('newInstance','isSubtypeOf','reflectedType','qualifiedName','metadata','getField','owner','declarations','superclass','simpleName','isSubclassOf','invoke','instanceMembers','mixin','isAbstract','originalDeclaration','typeVariables','setField','isOriginalDeclaration','superinterfaces','isAssignableTo','owners')],
                ['dart.io.Process',new core.DartList.literal('start','runSync','run','kill','exitCode')],
                ['dart.core.int',new core.DartList.literal('parse','toDouble','toString','toInt','compareTo','toRadixString','abs','remainder','toUnsigned','toSigned','clamp','round','floor','substr','ceil','isEven','id','append','truncate','hashCode','toStringAsFixed','ceilToDouble','roundToDouble','floorToDouble','truncateToDouble','isNegative','length','isNaN','isInfinite','runtimeType','bitLength')],
                ['dart.core.Sink',new core.DartList.literal('add','close')],
                ['dart.async.EventSink',new core.DartList.literal('close','add','addError')],
                ['dart.async.Completer',new core.DartList.literal('complete','completeError','future','isCompleted','completeException','then')],
                ['dart.io.FileStat',new core.DartList.literal('mode','stat','type','statSync','changed','modified','size')],
                ['dart.io.Link',new core.DartList.literal('existsSync','createSync','resolveSymbolicLinksSync','exists','delete','targetSync','deleteSync','target','create','updateSync')],
                ['dart.io.FileSystemEntityType',new core.DartList.literal('toString','NOT_FOUND','DIRECTORY','FILE')],
                ['dart.io.Directory',new core.DartList.literal('existsSync','list','listSync','watch','path','exists','createSync','create','deleteSync','delete','createTemp','createTempSync','renameSync','parent','absolute','stat','current','createRecursivelySync','resolveSymbolicLinksSync','rename','statSync')],
                ['dart.io.File',new core.DartList.literal('existsSync','readAsStringSync','openRead','writeAsStringSync','readAsString','openWrite','lastModifiedSync','exists','resolveSymbolicLinksSync','writeAsString','path','resolveSymbolicLinks','statSync','deleteSync','createSync','delete','openSync','parent','readAsBytesSync','copy','open','absolute','fullPathSync','length','writeAsBytesSync','lastModified','writeAsBytes','readAsLinesSync','fullPath','readAsBytes','copySync','create','lengthSync','readAsLines','isFileSync','isFile','rename','openOutputStream','openInputStream','stat','renameSync','watch','directorySync','isAbsolute','directory')],
                ['dart.io.Stdout',new core.DartList.literal('writeln','close','write','flush','addStream','writeString','add','writeCharCode','addString')],
                ['dart.io.IOSink',new core.DartList.literal('write','close','writeln','flush','add','addStream','writeAll','writeCharCode','encoding','addError','done')],
                ['dart.mirrors.LibraryMirror',new core.DartList.literal('uri','getField','declarations','invoke','topLevelMembers','setField','classes','first')],
                ['dart.core.Match',new core.DartList.literal('group','end','start','groups','toString')],
                ['dart.isolate.SendPort',new core.DartList.literal('send','call','hashCode')],
                ['dart.core.DateTime',new core.DartList.literal('parse','toIso8601String','millisecondsSinceEpoch','difference','toUtc','add','day','year','month','isAfter','toString','compareTo','subtract','isBefore','millisecond','toLocal','timeZoneName','timeZoneOffset','isUtc','weekday','isAtSameMomentAs','second','hour','minute','hashCode','now','runtimeType')],
                ['dart.core.Duration',new core.DartList.literal('inMilliseconds','toString','inSeconds','inMicroseconds','inHours','inMinutes','inDays','isNegative','compareTo')],
                ['dart.core.Uri',new core.DartList.literal('parse','toString','toFilePath','path','resolve','decodeComponent','encodeFull','decodeQueryComponent','scheme','encodeComponent','resolveUri','encodeQueryComponent','query','decodeFull','pathSegments','queryParameters','origin','authority','splitQueryString','replace','host','isAbsolute','port','fragment','hasAuthority','userInfo','parseIPv4Address','parseIPv6Address','hasQuery','endsWith','startsWith')],
                ['dart.typed_data.Uint32List',new core.DartList.literal('sublist','setAll','fillRange','setRange','removeRange','removeLast','clear','addAll','add')],
                ['dart.typed_data.TypedData',new core.DartList.literal('buffer')],
                ['dart.io.BytesBuilder',new core.DartList.literal('takeBytes','addByte','add','clear','toBytes')],
                ['dart.isolate.ReceivePort',new core.DartList.literal('close','transform','listen','receive','toSendPort','takeWhile','sendPort','asBroadcastStream')],
                ['dart.convert.Encoding',new core.DartList.literal('decode','encode','getByName','decodeStream','name')],
                ['dart.convert.Utf8Codec',new core.DartList.literal('encode','decode','decoder','decodeStream')],
                ['dart.core.Stopwatch',new core.DartList.literal('start','stop','reset','elapsedMicroseconds','elapsedMilliseconds','elapsed','elapsedInMs')],
                ['dart.async.ZoneDelegate',new core.DartList.literal('handleUncaughtError','registerUnaryCallback','registerCallback','registerBinaryCallback','runBinary','errorCallback','scheduleMicrotask','run','createTimer')],
                ['dart.async.Zone',new core.DartList.literal('handleUncaughtError','run','fork','inSameErrorZone','runGuarded','bindUnaryCallback','bindBinaryCallback','runUnary','bindCallback','scheduleMicrotask','createTimer')],
                ['dart.dom.html.BodyElement',new core.DartList.literal('innerHtml','children','nodes','append','style','onContextMenu','onMouseDown','onMouseWheel','scrollTop','onMouseUp','onClick','scrollLeft','clientHeight','clientWidth','onBlur','onFocus','onDoubleClick','scrollHeight','onMouseMove','elements','createFragment','classes','ownerDocument','query','onKeyDown','querySelector','offsetWidth','scrollWidth','offsetHeight','setInnerHtml','childNodes','requestFullscreen','offsetTop')],
                ['dart.dom.html.Location',new core.DartList.literal('hash','search','reload','pathname','toString','href','host','assign','replace','protocol','hostname','port','origin')],
                ['dart.convert.HtmlEscape',new core.DartList.literal('convert')],
                ['dart.dom.html.Window',new core.DartList.literal('postMessage','btoa','lookupPort','document','requestAnimationFrame','alert','navigator','devicePixelRatio','pageYOffset','pageXOffset','onAnimationEnd','innerWidth','onResize','getSelection','cancelAnimationFrame','animationEndEvent','innerHeight','registerPort','dispatchEvent','onAnimationStart','onMouseUp','onMouseMove','open','screen','indexedDB','setTimeout','scrollX','scrollY','onScroll','openDatabase','confirm','getContainer','location','onKeyUp','atob','scrollTo','localStorage','scrollBy','setInterval','setImmediate','requestLayoutFrame','requestFileSystem','onHashChange','close','console','onError','onMessage','animationFrame')],
                ['dart.core.Function',new core.DartList.literal('apply','toString','call','bind')],
                ['dart.async.Timer',new core.DartList.literal('cancel','run')],
                ['dart.dom.html.HeadElement',new core.DartList.literal('append','querySelector','query','children','style','elements','querySelectorAll','nodes','id','insertBefore','text')],
                ['dart.dom.html.ElementStream',new core.DartList.literal('listen','where','first','matches','forEach','map')],
                ['dart.dom.html.Element',new core.DartList.literal('query','onClick','innerHtml','style','querySelector','nodes','children','remove','append','querySelectorAll','classes','attributes','setInnerHtml','getComputedStyle','onChange','parent','matches','getBoundingClientRect','focus','dispatchEvent','addEventListener','insertAllBefore','clone','getAttribute','blur','createShadowRoot','contains','text','setAttribute','insertAdjacentElement','appendText','scrollIntoView','shadowRoot','getNamespacedAttributes','removeEventListener','insertBefore','appendHtml','click','offsetWidth','insertAdjacentHtml','insertAdjacentText','getClientRects','getElementsByClassName','replaceWith','scrollByLines','scrollByPages','hasChildNodes','requestFullscreen','requestPointerLock','queryAll','setAttributeNS','getAttributeNS','dataset','offsetHeight','on','createFragment','offsetTo','getDestinationInsertionPoints','matchesWithAncestors','attributeChanged','onMouseDown','nextElementSibling','getRegionFlowRanges','onContextMenu','animate','onTouchStart','scrollTop','offsetTop','onTouchMove','onTouchEnd','onMouseWheel','clientWidth','scrollLeft','clientHeight','isTagSupported','parentNode','onMouseUp','bind','onKeyDown','ownerDocument','unbind','unbindAll','init','createInstance','render','update','onKeyUp','onMouseMove','xtag','offsetLeft','tabIndex','client','requestFullScreen','getInputContext','borderEdge','clearModel','id','disabled','value','getContext','lastChild','firstChild','nextNode','innerHTML','onMouseEnter','onMouseLeave','contentEdge','elements','matchesSelector','webkitRequestPointerLock','tagName','childNodes','webkitRequestFullscreen','webkitRequestFullScreen','marginEdge','paddingEdge','outerHtml','onMouseOver','onMouseOut','onDragEnd','boolean','scrollHeight','hidden','onDragStart','onDoubleClick','nodeType','hashCode','onDrag','onInput','selectionStart','selectionEnd','onDrop','onDragLeave','hideOrShowNavigation','onDragOver','model','scrollEvent','onDragEnter','previousElementSibling','className','namespaceUri','onSubmit','selection','setItemSelected','runtimeType','apply','createBinding','values','onBlur','onTouchCancel','show','insertAdjacentHTML','nodeName','selected','contentEditable','localName','number','draggable','src','addText','addHTML','select','clear','str','clearSelection')],
                ['dart.dom.html.HtmlElement',new core.DartList.literal('querySelector','query','append','classes','style','getComputedStyle','remove','getBoundingClientRect','querySelectorAll','clone','attributes','focus','tabIndex','onClick','parent','onMouseLeave','replaceWith','onContextMenu','onMouseEnter','onKeyDown','blur','setInnerText','scrollTop','appendHtml','dataset','lastChild','onSelectStart','onDrop','onDragOver','onDragLeave','onDragEnter','onDragEnd','onDragStart','onDrag','onDoubleClick','children','onScroll','getAttribute','nodes','outerHtml','click','createShadowRoot')],
                ['dart.dom.html.ElementList',new core.DartList.literal('forEach','length','contains','last','style','addAll','first','where','onMouseLeave','onMouseEnter','toList','some','onClick','map','classes','indexOf')],
                ['dart.dom.html.HtmlDocument',new core.DartList.literal('query','querySelectorAll','querySelector','queryAll','createElement','body','title','createElementUpgrader','documentElement','timeline','onKeyDown','getElementById','registerElement','onClick','addEventListener','onMouseUp','onMouseMove','activeElement','createElementNS','createDocumentFragment','createRange','adoptNode','getElementsByTagName','onKeyUp','elementFromPoint','contains','getElementsByName','head','exitFullscreen','onMouseWheel','register')],
                ['dart.collection.LinkedHashMap',new core.DartList.literal('containsKey','forEach','remove','putIfAbsent','keys','length','clear','values','isNotEmpty')],
                ['dart.dom.html.Navigator',new core.DartList.literal('userAgent','language','appVersion','appName','geolocation','vendor','appCodeName','dartEnabled','getUserMedia','onLine','platform','storageQuota')],
                ['dart.dom.html.CssStyleDeclaration',new core.DartList.literal('display','width','height','top','setProperty','left','position','zIndex','cssText','right','maxHeight','visibility','bottom','background','removeProperty','cursor','overflow','getPropertyValue','opacity','backgroundColor','float','transform','padding','border','borderRadius','paddingBottom','transition','paddingTop','overflowY','color','outline','backgroundImage','transformStyle','pointerEvents','marginLeft','textAlign','backgroundPosition','boxSizing','paddingLeft','backgroundSize','margin','fontFamily','userSelect','fontSize','lineHeight','willChange','fontWeight','getProperty','marginRight','whiteSpace','overflowX','textDecoration','perspective','perspectiveOrigin','appearance','borderLeftWidth','paddingRight','borderColor','borderBottomWidth','borderTopWidth','webkitOverflowScrolling','borderRightWidth','marginBottom','transitionProperty','transitionTimingFunction','transitionDuration','animation','animationDelay','animationFillMode','animationDirection','animationIterationCount','animationTimingFunction','animationDuration','animationName','verticalAlign','marginTop','boxShadow','getPropertyPriority','textStrokeColor','borderBottom','font','supportsProperty','textShadow','maxWidth','minWidth','minHeight','outlineColor','filter','borderWidth','animationPlayState','fontStyle','borderRight','borderLeft','borderTop')],
                ['dart.io.ProcessResult',new core.DartList.literal('stdout','exitCode')],
                ['dart.io.FileSystemEvent',new core.DartList.literal('path','isDirectory','type','MODIFY','CREATE','DELETE')],
                ['dart.collection.HashSet',new core.DartList.literal('add','contains','remove','clear','addAll','retainAll','length','isEmpty','toList','removeAll','any','forEach','map')],
                ['dart.collection.HashMap',new core.DartList.literal('remove','containsKey','forEach','clear','keys','putIfAbsent','addAll','values')],
                ['dart.io.FileSystemEntity',new core.DartList.literal('isDirectorySync','path','typeSync','existsSync','isDirectory','identicalSync','isFileSync','type','isFile','statSync','deleteSync','isLinkSync','parentOf','renameSync','isLink','readAsStringSync','identical','rename','toString','delete','exists','parent','stat')],
                ['dart.io.OSError',new core.DartList.literal('errorCode','toString')],
                ['dart.async.StreamTransformer',new core.DartList.literal('bind')],
                ['dart.core.Runes',new core.DartList.literal('toList','any','elementAt','iterator','single','first','forEach','last')],
                ['dart.core.Object',new core.DartList.literal('toString','toJson','hashCode','discardListChages','reverse','map','lightDom','getName','where','add','containsKey','format','setTable','getClass','getNamespace','getId','getCell','getSize','setNamespace','equals','setColumn','getColumnName','getForeignTableName','setDatabase','setAttribute','setId','getChild','body','setPrevious','getIndex','getParent','getChildAt','getChildCount','getValue','getRoot','POST','GET','getPackage','setSchema','clone','getType','then','isInheritance','isVisible','getDartName','getPlatform','setPosition','setPackage','requiresTransactionInPostgres','setAppData','getSchema','getBuildProperty','getPrevious','getTerminal','n','replaceWith','setChild','setPlatform','run','removeItem','getAllItems','bytes','compareTo','getAttribute','setPreviousIndex','isEmpty','getEdgeAt','isVertex','writeExternal','isEdge','getEdgeCount','isConnectable','setValue','isCollapsed','getStyles','setRoot','getStyle','getGeometry','noSuchMethod','contains','elementAt','e')],
                ['dart.core.StringSink',new core.DartList.literal('write','writeln','writeCharCode','toString','writeAll')],
                ['dart.io.Stdin',new core.DartList.literal('pipe','readLineSync','transform','listen')],
                ['dart.io.HttpServer',new core.DartList.literal('bind','listen','close','connectionsInfo','bindSecure','address','port','idleTimeout','serverHeader','autoCompress','asBroadcastStream','transform','addRequestHandler','listenOn','on')],
                ['dart.io.HttpResponse',new core.DartList.literal('close','write','statusCode','headers','add','done','redirect','addStream','detachSocket','reasonPhrase','writeln','addError','writeCharCode','writeAll','flush','toString','when','cookies','contentLength','addString','getLogs','listen','persistentConnection','deadline')],
                ['dart.io.HttpRequest',new core.DartList.literal('listen','uri','session','drain','transform','response','toString','cookies','method','fold','connectionInfo','pipe','asBroadcastStream','toList','timeout','takeWhile','take','skipWhile','singleWhere','map','lastWhere','join','handleError','skip','firstWhere','expand','every','elementAt','distinct','asyncMap','asyncExpand','any','toSet','contains','where','reduce','forEach','headers','path')],
                ['dart.collection.SplayTreeMap',new core.DartList.literal('forEach','containsKey','remove','keys','values','firstKeyAfter','lastKeyBefore','clear','length')],
                ['dart.io.HttpClient',new core.DartList.literal('post','getUrl','openUrl','close','postUrl','get','open','addCredentials','patchUrl','shutdown','put','delete','addProxyCredentials','findProxyFromEnvironment')],
                ['dart.io.HttpClientRequest',new core.DartList.literal('close','add','write','addStream','cookies')],
                ['dart.io.Platform',new core.DartList.literal('isWindows','script','environment','operatingSystem','pathSeparator')],
                ['dart.collection.LinkedHashSet',new core.DartList.literal('add','map','contains','toList','addAll','remove')],
                ['dart.io.RandomAccessFile',new core.DartList.literal('lengthSync','readIntoSync','close','closeSync','writeStringSync','writeString','writeFromSync','length','readInto','read','readSync','writeFrom','readListSync','flushSync','positionSync','setPosition','writeListSync','setPositionSync','unlock','lock','unlockSync','readList','lockSync','readByteSync','position','writeList','writeByteSync')],
                ['dart.core.num',new core.DartList.literal('round','toDouble','toInt','floor','abs','toString','parse','ceil','toStringAsFixed','isNaN','compareTo','roundToDouble','remainder','hashCode','clamp','isInfinite','isNegative','truncate','toStringAsPrecision','toStringAsExponential','isFinite','truncateToDouble','toRadixString')],
                ['dart.dom.html.HttpRequest',new core.DartList.literal('send','open','getString','abort','setRequestHeader','request','getAllResponseHeaders','overrideMimeType','requestCrossOrigin','getResponseHeader','postFormData','onLoadEnd','onError','onLoad','DONE','withCredentials','onReadyStateChange','onLoadStart')],
                ['dart.dom.html.Event',new core.DartList.literal('preventDefault','toString','stopImmediatePropagation','stopPropagation','target','currentTarget')],
                ['dart.dom.html.FileReader',new core.DartList.literal('readAsArrayBuffer','readAsDataUrl','readAsText','onError','onLoadEnd','result')],
                ['dart.core.Pattern',new core.DartList.literal('allMatches','matchAsPrefix','toString','firstMatch','pattern','codeUnitAt')],
                ['dart.io.ContentType',new core.DartList.literal('parse','toString','charset','mimeType','value','parameters','subType','primaryType')],
                ['dart.io.HttpHeaders',new core.DartList.literal('set','contentType','ifModifiedSince','value','add','host','forEach','date','removeAll','clear','remove','noFolding','contentLength','port','expires','chunkedTransferEncoding','persistentConnection','toString','CONTENT_TYPE','data')],
                ['dart.typed_data.Uint8List',new core.DartList.literal('setRange','sublist','fillRange','setAll','length','buffer','toString','toList','lastIndexOf','indexOf','join','removeRange','removeLast','clear','addAll','add')],
                ['dart.async.StreamSink',new core.DartList.literal('close','addStream','add','addError')],
                ['dart.typed_data.ByteData',new core.DartList.literal('getUint32','setUint32','getUint8','setUint64','getInt32','getUint16','getUint64','setUint16','getInt16','setInt64','setInt32','setInt16','setFloat64','getInt64','setInt8','getFloat64','getFloat32','setFloat32','getInt8','setUint8')],
                ['dart.io.HttpClientResponse',new core.DartList.literal('listen','toList','transform','drain','fold','pipe','detachSocket')],
                ['dart.core.BidirectionalIterator',new core.DartList.literal('moveNext','movePrevious')],
                ['dart.mirrors.ClosureMirror',new core.DartList.literal('invoke','apply','function')],
                ['dart.typed_data.Int32x4',new core.DartList.literal('x','signMask','select')],
                ['dart.js.JsObject',new core.DartList.literal('callMethod','hasProperty','toString','deleteProperty','instanceof')],
                ['dart.dom.html.Node',new core.DartList.literal('remove','ELEMENT_NODE','insertBefore','replaceWith','insertAllBefore','querySelector','localName','text','append','setMenubarOrientation','getElementsByTagName','getElementsByClassName','nodes','parentNode','getElementById','firstChild','parent','contains','tagName','value','toString','name','querySelectorAll','clone','attributes','nextNode','nodeType','click','bind','outerHtml','dispatchEvent','on','childNodes')],
                ['dart.core.RuneIterator',new core.DartList.literal('moveNext','reset')],
                ['dart.mirrors.DeclarationMirror',new core.DartList.literal('isPrivate','simpleName','metadata','isSubclassOf','qualifiedName','parameters','invoke')],
                ['dart.dom.html.History',new core.DartList.literal('pushState','back','replaceState','length')],
                ['dart.dom.html.CssClassSet',new core.DartList.literal('add','remove','toggle','clear','contains','addAll','removeAll','toString','firstWhere','first','toggleAll','length','containsAll')],
                ['dart.dom.html.Document',new core.DartList.literal('querySelector','querySelectorAll','documentElement','createElement','title','body','removeEventListener','addEventListener','getElementsByTagName','createElementNS','query','window','queryAll')],
                ['dart.mirrors.IsolateMirror',new core.DartList.literal('rootLibrary')],
                ['dart.mirrors.ObjectMirror',new core.DartList.literal('invoke','getField','setField')],
                ['dart.dom.html.DivElement',new core.DartList.literal('append','classes','style','setInnerHtml','remove','querySelector','id','getComputedStyle','appendText','text','querySelectorAll','onDragEnd','onDrag','onDragStart','draggable','innerHtml','insertAdjacentElement','appendHtml','className','children','focus','query','nodes','createShadowRoot','clone','attributes','queryAll','click','onMouseDown','onClick','hidden','addEventListener','onMouseMove','scrollIntoView','onKeyDown','title','getBoundingClientRect','onMouseUp','dispatchEvent','insertAdjacentText','contentEditable','scrollTop','scrollByLines','bind','insertBefore','xtag','insertAdjacentHtml','matches','setAttribute','on','onKeyUp','getElementsByClassName')],
                ['dart.dom.html.NodeValidatorBuilder',new core.DartList.literal('allowNavigation','allowElement','allowHtml5','allowSvg','allowInlineStyles','allowTextElements','allowTemplating','allowCustomElement','allowTagExtension','allowImages')],
                ['dart.dom.html.Console',new core.DartList.literal('timeEnd','time','timeStamp','warn','log','error','groupEnd','info','debug','groupCollapsed','group','dir')],
                ['dart.dom.html.ElementUpgrader',new core.DartList.literal('upgrade')],
                ['dart.async.StreamIterator',new core.DartList.literal('moveNext','cancel')],
                ['dart.io.SystemEncoding',new core.DartList.literal('decode')],
                ['dart.collection.UnmodifiableListView',new core.DartList.literal('where','contains','any','length','join','firstWhere')],
                ['dart.core.Error',new core.DartList.literal('safeToString','toString')],
                ['dart.convert.Utf8Encoder',new core.DartList.literal('bind','convert','startChunkedConversion')],
                ['dart.dom.html.DomImplementation',new core.DartList.literal('createHtmlDocument')],
                ['dart.dom.html.DocumentFragment',new core.DartList.literal('querySelectorAll','append','clone','nodes','children','setInnerHtml','querySelector','queryAll','query','remove','ownerDocument')],
                ['dart.dom.html.ShadowRoot',new core.DartList.literal('querySelector','querySelectorAll','host','children','append','contains','query','activeElement','supported','nodes','firstChild','getElementsByTagName','text','innerHtml','olderShadowRoot')],
                ['dart.mirrors.TypeMirror',new core.DartList.literal('qualifiedName','isSubtypeOf','reflectedType','newInstance','isAssignableTo','simpleName','typeArguments','originalDeclaration','toString','referent','hasReflectedType','isPrivate','typeVariables','owner','invoke','isOriginalDeclaration')],
                ['dart.io.ServerSocket',new core.DartList.literal('bind','close','listen')],
                ['dart.dom.html.PerformanceNavigation',new core.DartList.literal('type','redirectCount')],
                ['dart.dom.html.Performance',new core.DartList.literal('now','timing','navigation')],
                ['dart.dom.html.PerformanceTiming',new core.DartList.literal('navigationStart')],
                ['dart.typed_data.ByteBuffer',new core.DartList.literal('asUint8List','asUint32List','asInt32List','asByteData','asFloat64x2List','asInt32x4List','asFloat32x4List','asFloat64List','asFloat32List','asUint64List','asInt64List','asUint16List','asInt16List','asUint8ClampedList','asInt8List')],
                ['dart.io.WebSocket',new core.DartList.literal('add','listen','close','connect','where','map','send')],
                ['dart.convert.JsonEncoder',new core.DartList.literal('convert','startChunkedConversion')],
                ['dart.convert.JsonDecoder',new core.DartList.literal('convert','startChunkedConversion')],
                ['dart.core.bool',new core.DartList.literal('toString','should','hashCode','isAssignableFrom','parse','containsKey')],
                ['dart.core.FormatException',new core.DartList.literal('toString')],
                ['dart.dom.html.WindowBase',new core.DartList.literal('postMessage','navigator','close','alert')],
                ['dart.dom.html.ButtonElement',new core.DartList.literal('text','onClick','classes','attributes','style','append','type','setInnerHtml','children','onMouseOut','onMouseOver','click','disabled','dataset','appendText')],
                ['dart.core.Exception',new core.DartList.literal('toString','printStackTrace')],
                ['dart.dom.html.DataTransfer',new core.DartList.literal('setData','setDragImage','types','effectAllowed','dropEffect','getData','files')],
                ['dart.math.Point',new core.DartList.literal('x','y','distanceTo','magnitude')],
                ['dart.dom.html.LIElement',new core.DartList.literal('classes','append','style','text','querySelector','innerHtml','dispatchEvent','children','dataset','className','nodes','remove','value')],
                ['dart.dom.html.CanvasRenderingContext2D',new core.DartList.literal('lineTo','beginPath','fillRect','moveTo','stroke','drawImage','closePath','restore','translate','save','scale','fill','getImageData','clearRect','setTransform','strokeRect','rotate','putImageData','fillStyle','arc','transform','fillText','strokeStyle','createImageData','createPatternFromImage','clip','lineWidth','drawImageToRect','strokeText','font','rect','drawImageScaledFromSource','setFillColorRgb','createLinearGradient','bezierCurveTo','drawImageScaled','measureText','setLineDash','shadowBlur','shadowOffsetX','shadowOffsetY','shadowColor','quadraticCurveTo','imageSmoothingEnabled','textAlign','createRadialGradient','textBaseline','globalAlpha','lineCap')],
                ['dart.io.HeaderValue',new core.DartList.literal('parse')],
                ['dart.dom.html.ScriptElement',new core.DartList.literal('src','type','async','remove','text')],
                ['dart.dom.html.MouseEvent',new core.DartList.literal('preventDefault','stopPropagation','target','dataTransfer','page','client','ctrlKey','stopImmediatePropagation','metaKey','shiftKey')],
                ['dart.io.RawSocket',new core.DartList.literal('write','listen','close','connect','read','available','shutdown','setOption')],
                ['dart.io.RawSecureSocket',new core.DartList.literal('secure','connect','shutdown','listen','secureServer','write','read')],
                ['dart.dom.web_sql.SqlDatabase',new core.DartList.literal('transaction','supported')],
                ['dart.dom.web_sql.SqlTransaction',new core.DartList.literal('executeSql')],
                ['dart.dom.web_sql.SqlResultSetRowList',new core.DartList.literal('length','elementAt','isNotEmpty','item','forEach')],
                ['dart.convert.AsciiCodec',new core.DartList.literal('encode','decode')],
                ['dart.dom.html.EventStreamProvider',new core.DartList.literal('forTarget','forElement')],
                ['dart.dom.html.MutationObserver',new core.DartList.literal('observe','disconnect','takeRecords')],
                ['dart.dom.html.UListElement',new core.DartList.literal('queryAll','append','style','id','children','remove','query','insertBefore','classes')],
                ['dart.dom.html.VideoElement',new core.DartList.literal('canPlayType','load','pause','play','autoplay','remove','src')],
                ['dart.dom.html.MediaError',new core.DartList.literal('code')],
                ['dart.dom.html.TimeRanges',new core.DartList.literal('start','end')],
                ['dart.dom.html.SourceElement',new core.DartList.literal('remove')],
                ['dart.dom.html.ObjectElement',new core.DartList.literal('remove','getAttribute')],
                ['dart.dom.html.OptionElement',new core.DartList.literal('value','text','selected','label','appendText')],
                ['dart.dom.html.SpanElement',new core.DartList.literal('classes','text','style','append','appendText','onMouseOut','onMouseOver','onClick','attributes','remove','draggable','id','outerHtml','innerHtml','setAttribute','querySelector','scrollIntoView')],
                ['dart.dom.html.Geolocation',new core.DartList.literal('getCurrentPosition','watchPosition')],
                ['dart.dom.html.Coordinates',new core.DartList.literal('accuracy','longitude','latitude','speed','heading','altitudeAccuracy','altitude')],
                ['dart.dom.html.ImageElement',new core.DartList.literal('remove','width','height','onLoad','src','style','crossOrigin','classes','className','id','onDragStart')],
                ['dart.mirrors.MethodMirror',new core.DartList.literal('parameters','isGetter','isConstructor','returnType','owner','simpleName','location','source','isStatic')],
                ['dart.dom.html.Storage',new core.DartList.literal('containsKey','clear','remove','length','keys','containsValue')],
                ['dart.convert.ChunkedConversionSink',new core.DartList.literal('add','close','specialI')],
                ['dart.collection.ListQueue',new core.DartList.literal('add','removeFirst','addAll','addLast','removeLast','forEach','toList','removeWhere','addFirst')],
                ['dart.dom.html.CanvasElement',new core.DartList.literal('getContext','style','width','height','context2D','toDataUrl','getContext3d','onMouseUp','onMouseDown','getBoundingClientRect','onMouseMove','onClick','onMouseOut','className','onMouseOver','setAttribute','remove','context2d','focus')],
                ['dart.dom.html.KeyboardEvent',new core.DartList.literal('preventDefault','which','stopPropagation','ctrlKey','keyCode','stopImmediatePropagation','metaKey','altKey','shiftKey','getModifierState')],
                ['dart.dom.html.WebSocket',new core.DartList.literal('send','close','onMessage','onClose','onError','onOpen','readyState','url','sendTypedData','binaryType')],
                ['dart.io.WebSocketTransformer',new core.DartList.literal('upgrade','isUpgradeRequest')],
                ['dart.core.Symbol',new core.DartList.literal('toString','length')],
                ['dart.js.JsFunction',new core.DartList.literal('apply')],
                ['dart.io.InternetAddress',new core.DartList.literal('address','host','lookup','toString','isLoopback')],
                ['dart.convert.Latin1Codec',new core.DartList.literal('decode')],
                ['dart.dom.html.ElementEvents',new core.DartList.literal('click','load','change','keyPress','drop','dragOver','dragEnter','input','keyDown','dragLeave','dragEnd','dragStart','mouseOut','mouseMove','keyUp','loadedMetadata')],
                ['dart.dom.html.TableCellElement',new core.DartList.literal('setInnerHtml','style','append','text','insertAdjacentElement','colSpan','setAttribute','innerHtml','cellIndex')],
                ['dart.dom.html.TableRowElement',new core.DartList.literal('append','attributes','classes','onClick','children','onMouseOut','onMouseOver','remove','insertCell','cells','createFragment','addCell','query','outerHtml')],
                ['dart.convert.Converter',new core.DartList.literal('convert','startChunkedConversion')],
                ['dart.dom.html.FormData',new core.DartList.literal('append','appendBlob')],
                ['dart.io.ProcessException',new core.DartList.literal('toString')],
                ['dart.dom.html.Text',new core.DartList.literal('remove','text','toString')],
                ['dart.dom.html.AnchorElement',new core.DartList.literal('href','text','onClick','id','classes','append','dispatchEvent','replaceWith','download','click','setAttribute','appendText')],
                ['dart.dom.svg.LineElement',new core.DartList.literal('setAttribute')],
                ['dart.dom.svg.RectElement',new core.DartList.literal('setAttribute','attributes')],
                ['dart.dom.svg.EllipseElement',new core.DartList.literal('setAttribute')],
                ['dart.dom.svg.PolylineElement',new core.DartList.literal('attributes')],
                ['dart.dom.svg.CircleElement',new core.DartList.literal('setAttribute')],
                ['dart.dom.svg.PathElement',new core.DartList.literal('setAttribute','createSvgPathSegLinetoAbs','createSvgPathSegMovetoAbs')],
                ['dart.dom.html.HeadingElement',new core.DartList.literal('text','classes','appendText','append','id')],
                ['dart.dom.html.TableElement',new core.DartList.literal('insertRow','createFragment','append','children','createTBody','deleteRow','addRow','query','querySelector')],
                ['dart.io.HttpConnectionInfo',new core.DartList.literal('remoteAddress','remotePort','localPort','remoteHost')],
                ['dart.dom.html.FormElement',new core.DartList.literal('append','submit','children','remove')],
                ['dart.io.Cookie',new core.DartList.literal('value','toString','path')],
                ['dart.dom.html.InputElement',new core.DartList.literal('focus','select','value','remove','type','checkValidity','dataset','onKeyDown','setSelectionRange','dispatchEvent','selectionStart','selectionEnd','setAttribute','bind','checked','attributes','blur','setRangeText','click','onChange','placeholder','id','onKeyUp','onBlur','onKeyPress','autocomplete','onPaste','defaultChecked','onFocus','disabled')],
                ['dart.io.Socket',new core.DartList.literal('close','connect','transform','destroy','add','listen','write','addStream','pipe','address','read','writeList','setOption','flush','map','readList','available')],
                ['dart.mirrors.ParameterMirror',new core.DartList.literal('type','isOptional','defaultValue')],
                ['dart.convert.Codec',new core.DartList.literal('fuse','encode','decode')],
                ['dart.dom.indexed_db.Database',new core.DartList.literal('transaction','createObjectStore','close')],
                ['dart.dom.indexed_db.Transaction',new core.DartList.literal('objectStore','onAbort','onError','onComplete')],
                ['dart.dom.indexed_db.ObjectStore',new core.DartList.literal('put','delete','createIndex','getObject','index','openCursor','clear')],
                ['dart.dom.svg.SvgSvgElement',new core.DartList.literal('append','setAttribute','createFragment','createSvgPoint','getScreenCtm','onMouseUp','onMouseMove')],
                ['dart.dom.svg.Point',new core.DartList.literal('matrixTransform')],
                ['dart.dom.svg.Matrix',new core.DartList.literal('inverse')],
                ['dart.dom.html.WheelEvent',new core.DartList.literal('preventDefault','stopPropagation')],
                ['dart.dom.svg.AnimatedRect',new core.DartList.literal('baseVal')],
                ['dart.dom.html.SelectElement',new core.DartList.literal('append','focus','remove','classes','tabIndex','options','selectedIndex','querySelectorAll','multiple','value')],
                ['dart.dom.html.LabelElement',new core.DartList.literal('query','text','append','htmlFor','style','appendText','classes')],
                ['dart.io.HttpSession',new core.DartList.literal('id','destroy','clear','containsKey','isNew','remove','onTimeout')],
                ['dart.dom.indexed_db.IdbFactory',new core.DartList.literal('open','deleteDatabase','supported','supportsDatabaseNames','getDatabaseNames')],
                ['dart.dom.indexed_db.Request',new core.DartList.literal('result')],
                ['dart.dom.indexed_db.Index',new core.DartList.literal('openCursor')],
                ['dart.dom.indexed_db.KeyRange',new core.DartList.literal('upperBound_','bound_','lowerBound_','only_')],
                ['dart.dom.indexed_db.CursorWithValue',new core.DartList.literal('delete')],
                ['dart.core.NoSuchMethodError',new core.DartList.literal('toString')],
                ['dart.isolate.Isolate',new core.DartList.literal('spawn','spawnUri','resume','addOnExitListener','removeErrorListener','addErrorListener','kill','ping','pause','setErrorsFatal')],
                ['dart.dom.html.TemplateElement',new core.DartList.literal('decorate','content')],
                ['dart.dom.html.TreeWalker',new core.DartList.literal('nextNode')],
                ['dart.dom.html.StyleElement',new core.DartList.literal('remove','appendText','text','sheet','attributes','type','appendHtml','dataset','append','innerHtml')],
                ['dart.dom.html.EventTarget',new core.DartList.literal('error','result','matchesWithAncestors','nodeName','matches','classes','dispatchEvent','removeEventListener','addEventListener','status','parent','value','hashCode')],
                ['dart.collection_helpers.equality.Equality',new core.DartList.literal('hash','equals','isValidKey')],
                ['dart.collection_helpers.equality.SetEquality',new core.DartList.literal('hash','equals')],
                ['dart.collection_helpers.equality.MapEquality',new core.DartList.literal('hash','equals')],
                ['dart.collection_helpers.equality.ListEquality',new core.DartList.literal('hash','equals')],
                ['dart.collection_helpers.equality.IterableEquality',new core.DartList.literal('hash','equals')],
                ['dart.collection_helpers.equality.UnorderedIterableEquality',new core.DartList.literal('hash','equals')],
                ['dart.io.SecureSocket',new core.DartList.literal('initialize','close','connect','listen','write','add','fold','writeln','secure','transform')],
                ['dart.io.HttpDate',new core.DartList.literal('parse','format')],
                ['dart.math.Rectangle',new core.DartList.literal('top','left','containsPoint','height','width','topLeft','intersection','topRight','intersects','containsRectangle','boundingBox','snap')],
                ['dart.dom.html.ContentElement',new core.DartList.literal('getDistributedNodes')],
                ['dart.io.SocketException',new core.DartList.literal('toString')],
                ['dart.dom.html.TextAreaElement',new core.DartList.literal('style','focus','select','rows','attributes','setSelectionRange','value','appendText','remove')],
                ['dart.dom.html.LinkElement',new core.DartList.literal('href','replaceWith','rel')],
                ['dart.dom.html.ParagraphElement',new core.DartList.literal('text','appendHtml','classes','addHtml','hidden')],
                ['dart.typed_data.Int32List',new core.DartList.literal('setRange','indexOf','sublist','removeRange','removeLast','clear','addAll','add','setAll')],
                ['dart.dom.web_gl.RenderingContext',new core.DartList.literal('ARRAY_BUFFER','texParameteri','bindBuffer','bindFramebuffer','TEXTURE_2D','enable','deleteShader','getUniformLocation','bindTexture','clear','createTexture','detachShader','attachShader','getAttribLocation','createBuffer','enableVertexAttribArray','vertexAttribPointer','FLOAT','STATIC_DRAW','createShader','shaderSource','compileShader','viewport','useProgram','clearColor','bufferDataTyped','getShaderParameter','uniformMatrix4fv','getShaderInfoLog','bindRenderbuffer','deleteTexture','deleteProgram','RGBA','linkProgram','createProgram','disableVertexAttribArray','disable','getProgramParameter','blendFunc','drawArrays','getProgramInfoLog','TRIANGLES','lineWidth','COMPILE_STATUS','texImage2DTyped','NEAREST','createFramebuffer','getExtension','framebufferTexture2D','framebufferRenderbuffer','renderbufferStorage','createRenderbuffer','ELEMENT_ARRAY_BUFFER','uniformMatrix3fv','uniform2f','UNSIGNED_BYTE','deleteFramebuffer','deleteRenderbuffer','TEXTURE_MIN_FILTER','TEXTURE_MAG_FILTER','CLAMP_TO_EDGE','DEPTH_TEST','DEPTH_BUFFER_BIT','texImage2DImage','COLOR_BUFFER_BIT','LINK_STATUS','FRAGMENT_SHADER','VERTEX_SHADER','bufferData','TEXTURE_WRAP_S','TEXTURE_WRAP_T','texImage2DCanvas','LINEAR','UNSIGNED_SHORT','texImage2D','drawElements','pixelStorei','colorMask','depthFunc','TRIANGLE_STRIP','activeTexture','TEXTURE0','depthMask','FRAMEBUFFER','UNPACK_FLIP_Y_WEBGL','generateMipmap','uniform1i')],
                ['dart.typed_data.Float32List',new core.DartList.literal('sublist','indexOf','buffer','setRange','length')],
                ['dart.dom.html.DirectoryEntry',new core.DartList.literal('getFile','createDirectory','createFile','createReader','getDirectory','removeRecursively','toUrl','fullPath','toString')],
                ['dart.dom.html.Entry',new core.DartList.literal('moveTo','isFile','copyTo','isDirectory','fullPath','name','remove','getMetadata','createWriter','file','getParent','toUrl')],
                ['dart.dom.html.DirectoryReader',new core.DartList.literal('readEntries')],
                ['dart.dom.html.KeyCode',new core.DartList.literal('DOWN','RIGHT','LEFT','TAB','UP','ESC','ENTER','isCharacterKey','SPACE','NUM_SOUTH','NUM_NORTH','NUM_EAST','NUM_WEST','NUM_NORTH_EAST','NUM_SOUTH_EAST','R')],
                ['dart.pkg.collection.iterable_zip.IterableZip',new core.DartList.literal('map','toList')],
                ['dart.convert.LineSplitter',new core.DartList.literal('convert')],
                ['dart.dom.html.HttpRequestUpload',new core.DartList.literal('onProgress','onError','onTimeout')],
                ['dart.dom.html.File',new core.DartList.literal('name','slice','readAsBytesSync','existsSync')],
                ['dart.dom.html.Events',new core.DartList.literal('error','message','load','hashChange','popState','resize','loadEnd')],
                ['dart.dom.html.Url',new core.DartList.literal('createObjectUrl','revokeObjectUrl','createObjectUrlFromBlob','createObjectUrlFromStream')],
                ['dart.dom.html.RtcIceCandidate',new core.DartList.literal('candidate','sdpMLineIndex')],
                ['dart.dom.html.RtcPeerConnection',new core.DartList.literal('setLocalDescription','createDataChannel','createOffer','createAnswer')],
                ['dart.io.RawDatagramSocket',new core.DartList.literal('bind','close','receive','send','listen')],
                ['dart.pkg.collection.equality.DeepCollectionEquality',new core.DartList.literal('equals','hash')],
                ['dart.pkg.collection.priority_queue.PriorityQueue',new core.DartList.literal('addAll','contains','removeFirst','add','removeAll')],
                ['dart.convert.StringConversionSink',new core.DartList.literal('add','asUtf8Sink','close','asStringSink','addSlice')],
                ['dart.dom.html.ImageData',new core.DartList.literal('data')],
                ['dart.dom.html.PreElement',new core.DartList.literal('appendText','text','append','classes')],
                ['dart.dom.html.MediaStream',new core.DartList.literal('stop')],
                ['dart.dom.html.DomParser',new core.DartList.literal('parseFromString')],
                ['dart.dom.html.CustomEvent',new core.DartList.literal('stopImmediatePropagation','preventDefault','stopPropagation')],
                ['dart.typed_data.Uint16List',new core.DartList.literal('buffer','sublist','setRange','removeRange','removeLast','clear','addAll','add','length')],
                ['dart.dom.html.CanvasGradient',new core.DartList.literal('addColorStop')],
                ['dart.dom.html.Notification',new core.DartList.literal('requestPermission')],
                ['dart.dom.svg.Length',new core.DartList.literal('value','valueAsString')],
                ['dart.dom.svg.AnimatedLength',new core.DartList.literal('baseVal')],
                ['dart.dom.svg.PointList',new core.DartList.literal('getItem')],
                ['dart.mirrors.SourceLocation',new core.DartList.literal('line')],
                ['dart.DartGrammarDefinition',new core.DartList.literal('build')],
                ['dart.dom.html.TextMetrics',new core.DartList.literal('width')],
                ['dart.dom.html.CssRect',new core.DartList.literal('width','height','top','left','topLeft')],
                ['dart.dom.html.KeyboardEventStream',new core.DartList.literal('onKeyDown')],
                ['dart.dom.html.CssRule',new core.DartList.literal('selectorText')],
                ['dart.dom.html.CssStyleRule',new core.DartList.literal('style','selectorText')],
                ['dart.dom.html.Selection',new core.DartList.literal('removeAllRanges','collapse','getRangeAt')],
                ['dart.dom.html.CheckboxInputElement',new core.DartList.literal('checked','attributes','classes','value')],
                ['dart.dom.html.TextInputElement',new core.DartList.literal('classes','value','focus','select','className','onKeyDown','style')],
                ['dart.dom.html.DateInputElement',new core.DartList.literal('classes')],
                ['dart.dom.html.RangeInputElement',new core.DartList.literal('style','attributes','onChange','value','step','max','min')],
                ['dart.dom.html.AnimationTimeline',new core.DartList.literal('play')],
                ['dart.dom.html.AnimationPlayer',new core.DartList.literal('play')],
                ['dart.dom.html.GlobalEventHandlers',new core.DartList.literal('clickEvent')],
                ['dart.dom.html.TouchEvent',new core.DartList.literal('preventDefault','supported','stopPropagation')],
                ['dart.dom.html.AudioElement',new core.DartList.literal('canPlayType','load','append','play','pause','remove')],
                ['dart.io.ProcessSignal',new core.DartList.literal('watch')],
                ['dart.convert.Utf8Decoder',new core.DartList.literal('convert','startChunkedConversion')],
                ['dart.dom.html.AnimationEvent',new core.DartList.literal('preventDefault','stopImmediatePropagation')],
                ['dart.dom.html.FocusEvent',new core.DartList.literal('stopImmediatePropagation')],
                ['dart.dom.html.Touch',new core.DartList.literal('page','client')],
                ['dart.async.DeferredLibrary',new core.DartList.literal('load')],
                ['dart.dom.html.TableSectionElement',new core.DartList.literal('append','innerHtml','rows','createFragment','addRow')],
                ['dart.mirrors.Mirror',new core.DartList.literal('methods','invoke','type','delegate','members')],
                ['dart.core.StateError',new core.DartList.literal('toString')],
                ['dart.io.FileMode',new core.DartList.literal('APPEND','READ','WRITE')],
                ['dart.dom.html.CssStyleDeclarationBase',new core.DartList.literal('display','backgroundColor','opacity','borderLeftWidth')],
                ['dart.dom.html.IFrameElement',new core.DartList.literal('style','src')],
                ['dart.io.FileSystemException',new core.DartList.literal('toString')],
                ['dart.dom.html.Screen',new core.DartList.literal('width','height','pixelDepth')],
                ['dart.core.ArgumentError',new core.DartList.literal('toString')],
                ['dart.dom.html.Blob',new core.DartList.literal('slice')],
                ['dart.dom.svg.PatternElement',new core.DartList.literal('setAttribute','append')],
                ['dart.dom.svg.DefsElement',new core.DartList.literal('append')],
                ['dart.dom.svg.PathSegList',new core.DartList.literal('appendItem','clear','length','getItem')],
                ['dart.dom.html.FileList',new core.DartList.literal('length','item')],
                ['dart.dom.html.FileError',new core.DartList.literal('NOT_FOUND_ERR','code')],
                ['dart.mirrors.VariableMirror',new core.DartList.literal('type','isFinal','isStatic')],
                ['dart.io.HttpStatus',new core.DartList.literal('NOT_FOUND')],
                ['dart.typed_data.Float64List',new core.DartList.literal('sublist','indexOf','setRange')],
                ['dart.typed_data.Float32x4',new core.DartList.literal('shuffle','shuffleMix','scale','signMask','clamp','withX','withY','w','z','y','x')],
                ['dart.pkg.typed_data.typed_buffers.Int32x4Buffer',new core.DartList.literal('add')],
                ['dart.dom.html.NumberInputElement',new core.DartList.literal('step','max','min','valueAsNumber')],
                ['dart.dom.html.ValidityState',new core.DartList.literal('valid')],
                ['dart.dom.html.CssStyleSheet',new core.DartList.literal('ownerNode','insertRule','addRule')],
                ['dart.io.ZLibCodec',new core.DartList.literal('decode')],
                ['dart.collection.HasNextIterator',new core.DartList.literal('next')],
                ['dart.isolate.RawReceivePort',new core.DartList.literal('close')],
                ['dart.mirrors.TypeVariableMirror',new core.DartList.literal('simpleName','isSubtypeOf','isAssignableTo','owner')],
                ['dart.typed_data.implementation.NativeByteBuffer',new core.DartList.literal('asFloat64List','asFloat32List','asInt32List')],
                ['dart.typed_data.implementation.NativeFloat32x4List',new core.DartList.literal('length')],
                ['dart.typed_data.implementation.NativeFloat32List',new core.DartList.literal('sublist')],
                ['dart.typed_data.implementation.NativeInt32x4List',new core.DartList.literal('length')],
                ['dart.typed_data.implementation.NativeFloat64x2List',new core.DartList.literal('length')],
                ['dart.typed_data.implementation.NativeFloat64List',new core.DartList.literal('sublist')],
                ['dart.typed_data.implementation.NativeTypedArray',new core.DartList.literal('length')],
                ['dart.typed_data.implementation.NativeTypedArrayOfDouble',new core.DartList.literal('setRange')],
                ['dart.typed_data.implementation.NativeTypedArrayOfInt',new core.DartList.literal('setRange')],
                ['dart.typed_data.implementation.NativeInt32x4',new core.DartList.literal('w','z','y','x')],
                ['dart.dom.svg.SvgElement',new core.DartList.literal('isTagSupported','clone','setAttribute','children','setInnerHtml','attributes')],
                ['dart.dom.svg.GElement',new core.DartList.literal('append','querySelector','id')],
                ['dart.dom.html.ProgressEvent',new core.DartList.literal('toString')],
                ['dart.core.RangeError',new core.DartList.literal('toString','checkValidRange','checkNotNegative','checkValueInInterval','checkValidIndex')],
                ['dart.dom.html.TouchList',new core.DartList.literal('length','first','isEmpty','isNotEmpty')],
                ['dart.dom.html.FieldSetElement',new core.DartList.literal('append','querySelector')],
                ['dart.dom.html.ShadowElement',new core.DartList.literal('getDistributedNodes')],
                ['dart.dom.html.KeyEvent',new core.DartList.literal('keyCode','type','preventDefault')],
                ['dart.dom.html.NodeList',new core.DartList.literal('length','add')],
                ['dart.dom.html.DomStringList',new core.DartList.literal('length')],
                ['dart.dom.html.HtmlCollection',new core.DartList.literal('length','forEach','contains')],
                ['dart.dom.html.Range',new core.DartList.literal('createContextualFragment','selectNodeContents','insertNode','setEndAfter')],
                ['dart.dom.html.NodeTreeSanitizer',new core.DartList.literal('sanitizeTree')],
                ['dart.dom.html.MimeTypeArray',new core.DartList.literal('length')],
                ['dart.dom.html.PluginArray',new core.DartList.literal('length')],
                ['dart.dom.html.SourceBufferList',new core.DartList.literal('length')],
                ['dart.dom.html.SpeechGrammarList',new core.DartList.literal('length')],
                ['dart.dom.html.TextTrackCueList',new core.DartList.literal('length')],
                ['dart.dom.html.TextTrackList',new core.DartList.literal('length')],
                ['dart.dom.html.Dimension',new core.DartList.literal('value','toString')],
                ['dart.dom.html.UriPolicy',new core.DartList.literal('allowsUri')],
                ['dart.dom.html.NodeValidator',new core.DartList.literal('allowsAttribute','allowsElement')],
                ['dart.dom.html.Worker',new core.DartList.literal('terminate')],
                ['dart.typed_data.Int16List',new core.DartList.literal('sublist','buffer','contains','setRange','removeRange','removeLast','clear','addAll','add')],
                ['dart.dom.indexed_db.Cursor',new core.DartList.literal('next')],
                ['dart.dom.svg.LengthList',new core.DartList.literal('length','getItem')],
                ['dart.dom.svg.NumberList',new core.DartList.literal('length','getItem')],
                ['dart.dom.svg.StringList',new core.DartList.literal('length','getItem')],
                ['dart.dom.svg.TransformList',new core.DartList.literal('length','getItem')],
                ['dart.js.JsArray',new core.DartList.literal('length','addAll','insert','removeRange','removeAt','add','setRange','removeLast')],
                ['dart.dom.html.ApplicationCache',new core.DartList.literal('swapCache')],
                ['dart.dom.web_audio.AudioContext',new core.DartList.literal('createBufferSource','createOscillator','destination','createPanner','createGain')],
                ['dart.dom.html.FileUploadInputElement',new core.DartList.literal('click')],
                ['dart.dom.html.DomRectReadOnly',new core.DartList.literal('top','left','height','width')],
                ['dart.typed_data.Int8List',new core.DartList.literal('sublist','setRange','removeRange','removeLast','clear','addAll','add','buffer')],
                ['dart.dom.web_audio.AudioBufferSourceNode',new core.DartList.literal('connectNode','start','stop')],
                ['dart.dom.html.FileEntry',new core.DartList.literal('file','getParent','toUrl','getMetadata')],
                ['dart.dom.html.CustomStream',new core.DartList.literal('listen')],
                ['dart.dom.html.TrackElement',new core.DartList.literal('defaultValue')],
                ['dart.dom.web_audio.OscillatorNode',new core.DartList.literal('connectNode')],
                ['dart.dom.html.StorageQuota',new core.DartList.literal('queryInfo')],
                ['dart.collection.DoubleLinkedQueue',new core.DartList.literal('add')],
                ['dart.core.TypeError',new core.DartList.literal('toString')],
                ['dart.core.AssertionError',new core.DartList.literal('toString')],
                ['dart.profiler.Metrics',new core.DartList.literal('register')],
                ['dart.collection.LinkedList',new core.DartList.literal('remove','addFirst','clear','add')],
                ['dart.typed_data.Uint8ClampedList',new core.DartList.literal('sublist')],
                ['dart.typed_data.Float64x2',new core.DartList.literal('y','x','withX')],
                ['dart.convert.ByteConversionSink',new core.DartList.literal('close','add','addSlice')],
                ['dart.convert.ClosableStringSink',new core.DartList.literal('close','write')],
                ['dart.mirrors.TypedefMirror',new core.DartList.literal('isSubtypeOf','isAssignableTo','referent')],
                ['dart.mirrors.FunctionTypeMirror',new core.DartList.literal('isSubtypeOf','isAssignableTo','returnType','parameters','isOriginalDeclaration')],
                ['dart.mirrors.LibraryDependencyMirror',new core.DartList.literal('metadata')],
                ['dart.test.stream_from_iterable.IterableTest',new core.DartList.literal('run')],
                ['dart.io.SecureServerSocket',new core.DartList.literal('bind','close','listen')],
                ['dart.io.RawServerSocket',new core.DartList.literal('bind','listen','close')],
                ['dart.typed_data.Uint64List',new core.DartList.literal('sublist','setRange','removeRange','removeLast','clear','addAll','add')],
                ['dart.typed_data.Int64List',new core.DartList.literal('sublist','setRange','removeRange','removeLast','clear','addAll','add')],
                ['dart.io.StdioType',new core.DartList.literal('name')],
                ['dart.io.HttpConnectionsInfo',new core.DartList.literal('total','idle','active')],
                ['dart.io.RawSecureServerSocket',new core.DartList.literal('bind','close','listen')],
                ['dart.io.ServerSocketReference',new core.DartList.literal('create')],
                ['dart.io.NetworkInterface',new core.DartList.literal('list')],
                ['dart.io.ZLibDecoder',new core.DartList.literal('convert')],
                ['dart.io.ZLibEncoder',new core.DartList.literal('convert')],
                ['dart.pkg.async.results.ValueResult',new core.DartList.literal('value')],
                ['dart.pkg.async.stream_zip.StreamZip',new core.DartList.literal('toList')],
                ['dart.pkg.async.results.Result',new core.DartList.literal('flatten','release')],
                ['dart.pkg.async.results.ErrorResult',new core.DartList.literal('stackTrace','error')],
                ['dart.dom.html.OptGroupElement',new core.DartList.literal('append')],
                ['dart.dom.html.UnknownElement',new core.DartList.literal('query')],
                ['dart.dom.web_audio.AudioParam',new core.DartList.literal('value','setValueAtTime')],
                ['dart.dom.html.RadioButtonInputElement',new core.DartList.literal('checked')],
                ['dart.dom.web_audio.BiquadFilterNode',new core.DartList.literal('connectNode')],
                ['dart.async.StreamConsumer',new core.DartList.literal('addStream','close')],
                ['dart.dom.html.FileSystem',new core.DartList.literal('root')],
                ['dart.dom.html.FileWriter',new core.DartList.literal('write','abort')],
                ['dart.dom.html.OutputElement',new core.DartList.literal('scrollIntoView')],
                ['dart.dom.html.Css',new core.DartList.literal('supports')],
                ['dart.io.IOException',new core.DartList.literal('toString')],
                ['dart.dom.html.ButtonInputElement',new core.DartList.literal('value','onClick')]]);
        }
        return this.__$defaultSelectorRelevance;
    }
    static set defaultSelectorRelevance(__$value : core.DartMap<string,core.DartList<string>>)  { 
        this.__$defaultSelectorRelevance = __$value;
    }

}
