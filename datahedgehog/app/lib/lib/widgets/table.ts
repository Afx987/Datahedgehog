/** Library asset:datahedgehog_monitor/lib/lib/widgets/table.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/painting/decoration";
import * as lib5 from "./framework";
import * as lib6 from "@dart2ts.packages/flutter/lib/src/rendering/table";
import * as lib7 from "@dart2ts.packages/flutter/lib/src/rendering/table_border";
import * as lib8 from "./basic";
import * as lib9 from "./image";
import * as lib10 from "@dart2ts.packages/flutter/lib/src/rendering/object";
import * as collection from "@dart2ts/dart/core";
import * as lib12 from "@dart2ts.packages/flutter/lib/src/foundation/node";
import * as lib13 from "@dart2ts.packages/flutter/lib/src/foundation/diagnostics";

export var updateRenderObject : (context : lib5.BuildContext,renderObject : lib6.RenderTable) => any = (context : lib5.BuildContext,renderObject : lib6.RenderTable) : any =>  {
    /* TODO (AssertStatementImpl) : assert (debugCheckHasDirectionality(context)); */;
    /* TODO (AssertStatementImpl) : assert (renderObject.columns == (children.isNotEmpty ? children[0].children.length : 0)); */;
    /* TODO (AssertStatementImpl) : assert (renderObject.rows == children.length); */;
    ((_) : lib6.RenderTable =>  {
        {
            _.columnWidths = properties.columnWidths;
            _.defaultColumnWidth = properties.defaultColumnWidth;
            _.textDirection = (properties.textDirection || lib8.Directionality.of(context));
            _.border = properties.border;
            _.rowDecorations = properties._rowDecorations;
            _.configuration = lib9.createLocalImageConfiguration(context);
            _.defaultVerticalAlignment = properties.defaultVerticalAlignment;
            _.textBaseline = properties.textBaseline;
            return _;
        }
    })(renderObject);
};
export var createRenderObject : (context : lib5.BuildContext) => lib6.RenderTable = (context : lib5.BuildContext) : lib6.RenderTable =>  {
    /* TODO (AssertStatementImpl) : assert (debugCheckHasDirectionality(context)); */;
    return lib6.RenderTable({
        columns : properties.children.isNotEmpty ? properties.children[0].children.length : 0,rows : properties.children.length,columnWidths : properties.columnWidths,defaultColumnWidth : properties.defaultColumnWidth,textDirection : (properties.textDirection || lib8.Directionality.of(context)),border : properties.border,rowDecorations : properties._rowDecorations,configuration : lib9.createLocalImageConfiguration(context),defaultVerticalAlignment : properties.defaultVerticalAlignment,textBaseline : properties.textBaseline});
};
export var FlutterError : ( : any) => any = ( : any) =>  {
};
export var createElement : () => _TableElement = () : _TableElement =>  {
    return _TableElement(this);
};
export var FlutterError : ( : any) => any = ( : any) =>  {
};
export var FlutterError : ( : any) => any = ( : any) =>  {
};
export var debugChildrenHaveDuplicateKeys : ( : any,flatChildren : any) => any = ( : any,flatChildren : any) =>  {
    this. = ;
};
export namespace TableRow {
    export type Constructors = 'TableRow';
    export type Interface = Omit<TableRow, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'asset:meta/lib/meta.dart',type : 'immutable',value : {
        arguments : [],namedArguments : {
        }}})
export class TableRow {
    constructor(_namedArguments? : {key? : lib3.LocalKey,decoration? : lib4.Decoration,children? : core.DartList<lib5.Widget>}) {
    }
    @defaultConstructor
    TableRow(_namedArguments? : {key? : lib3.LocalKey,decoration? : lib4.Decoration,children? : core.DartList<lib5.Widget>}) {
        let {key,decoration,children} = Object.assign({
        }, _namedArguments );
        this.key = key;
        this.decoration = decoration;
        this.children = children;
    }
    key : lib3.LocalKey;

    decoration : lib4.Decoration;

    children : core.DartList<lib5.Widget>;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        let result : core.DartStringBuffer = core.DartStringBuffer();
        result.write('TableRow(');
        if (this.key != null) result.write(`${this.key}, `);
        if (this.decoration != null) result.write(`${this.decoration}, `);
        if (this.children == null) {
            result.write('child list is null');
        }else if (this.children.isEmpty) {
            result.write('no children');
        }else {
            result.write(`${this.children}`);
        }
        result.write(')');
        return result.toString();
    }
}

export namespace Table {
    export type Constructors = lib5.RenderObjectWidget.Constructors | 'Table' | 'any';
    export type Interface = Omit<Table, Constructors>;
}
@DartClass
export class Table extends lib5.RenderObjectWidget {
    constructor(_namedArguments? : {key? : lib3.Key,children? : any,columnWidths? : any,defaultColumnWidth? : any,textDirection? : any,border? : any,defaultVerticalAlignment? : any,textBaseline? : any}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    Table(_namedArguments? : {key? : lib3.Key,children? : any,columnWidths? : any,defaultColumnWidth? : any,textDirection? : any,border? : any,defaultVerticalAlignment? : any,textBaseline? : any}) {
        let {key,children,columnWidths,defaultColumnWidth,textDirection,border,defaultVerticalAlignment,textBaseline} = Object.assign({
            "children" : new core.DartList.literal<TableRow>(),
            "defaultColumnWidth" : new lib6.FlexColumnWidth(1.0),
            "defaultVerticalAlignment" : lib6.TableCellVerticalAlignment.top}, _namedArguments );
        this.assert = assert;
        this.children = children;
        this.columnWidths = columnWidths;
        this.defaultColumnWidth = defaultColumnWidth;
        this.textDirection = textDirection;
        this.border = border;
        this.defaultVerticalAlignment = defaultVerticalAlignment;
        this.textBaseline = textBaseline;
    }
     : any;

     : any;

     : any;

    @namedConstructor
    any( : (row : TableRow) => any, : any) {
        properties.row.children.any((cell : lib5.Widget) =>  {
            return op(Op.EQUALS,cell,null);
        });
    }
    static any : new( : any) => Table;

    FlutterError( : any) {
    }
}

export namespace _TableElementRow {
    export type Constructors = '_TableElementRow';
    export type Interface = Omit<_TableElementRow, Constructors>;
}
@DartClass
export class _TableElementRow {
    constructor(_namedArguments? : {key? : lib3.LocalKey,children? : core.DartList<lib5.Element>}) {
    }
    @defaultConstructor
    _TableElementRow(_namedArguments? : {key? : lib3.LocalKey,children? : core.DartList<lib5.Element>}) {
        let {key,children} = Object.assign({
        }, _namedArguments );
        this.key = key;
        this.children = children;
    }
    key : lib3.LocalKey;

    children : core.DartList<lib5.Element>;

}

export namespace _TableElement {
    export type Constructors = lib5.RenderObjectElement.Constructors | '_TableElement';
    export type Interface = Omit<_TableElement, Constructors>;
}
@DartClass
export class _TableElement extends lib5.RenderObjectElement {
    constructor(widget : Table) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _TableElement(widget : Table) {
        this._children = new core.DartList.literal<_TableElementRow>();
        this._debugWillReattachChildren = false;
        this._forgottenChildren = core.DartHashSet();
        super.RenderObjectElement(widget);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get widget() : Table {
        return super.widget;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get renderObject() : lib6.RenderTable {
        return super.renderObject;
    }
    _children : core.DartList<_TableElementRow>;

    _debugWillReattachChildren : boolean;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    mount(parent : lib5.Element,newSlot : any) : any {
        super.mount(parent,newSlot);
        /* TODO (AssertStatementImpl) : assert (!_debugWillReattachChildren); */;
        /* TODO (AssertStatementImpl) : assert (() {_debugWillReattachChildren = true; return true;}()); */;
        this._children = this.widget.children.map((row : TableRow) =>  {
            return _TableElementRow({
                key : row.key,children : row.children.map((child : lib5.Widget) =>  {
                    /* TODO (AssertStatementImpl) : assert (child != null); */;
                    return this.inflateWidget(child,null);
                }).toList({
                    growable : false})});
        }).toList({
            growable : false});
        /* TODO (AssertStatementImpl) : assert (() {_debugWillReattachChildren = false; return true;}()); */;
        this._updateRenderObjectChildren();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    insertChildRenderObject(child : lib10.RenderObject,slot : lib5.Element) : any {
        /* TODO (AssertStatementImpl) : assert (_debugWillReattachChildren); */;
        this.renderObject.setupParentData(child);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    moveChildRenderObject(child : lib10.RenderObject,slot : any) : any {
        /* TODO (AssertStatementImpl) : assert (_debugWillReattachChildren); */;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    removeChildRenderObject(child : lib10.RenderObject) : any {
        /* TODO (AssertStatementImpl) : assert (() {if (_debugWillReattachChildren) return true; for (Element forgottenChild in _forgottenChildren) {if (forgottenChild.renderObject == child) return true;} return false;}()); */;
        let childParentData : lib6.TableCellParentData = child.parentData;
        this.renderObject.setChild(childParentData.x,childParentData.y,null);
    }
    _forgottenChildren : core.DartSet<lib5.Element>;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    update(newWidget : Table) : any {
        /* TODO (AssertStatementImpl) : assert (!_debugWillReattachChildren); */;
        /* TODO (AssertStatementImpl) : assert (() {_debugWillReattachChildren = true; return true;}()); */;
        let oldKeyedRows : core.DartMap<lib3.LocalKey,core.DartList<lib5.Element>> = new core.DartMap.literal([
        ]);
        for(let row of this._children) {
            if (row.key != null) {
                oldKeyedRows.set(row.key,row.children);
            }
        }
        let oldUnkeyedRows : core.DartIterator<_TableElementRow> = this._children.where((row : _TableElementRow) =>  {
            return op(Op.EQUALS,row.key,null);
        }).iterator;
        let newChildren : core.DartList<_TableElementRow> = new core.DartList.literal<_TableElementRow>();
        let taken : core.DartSet<core.DartList<lib5.Element>> = core.DartSet();
        for(let row of newWidget.children) {
            let oldChildren : core.DartList<lib5.Element>;
            if (row.key != null && oldKeyedRows.containsKey(row.key)) {
                oldChildren = oldKeyedRows.get(row.key);
                taken.add(oldChildren);
            }else if (op(Op.EQUALS,row.key,null) && oldUnkeyedRows.moveNext()) {
                oldChildren = oldUnkeyedRows.current.children;
            }else {
                oldChildren = new core.DartList.literal<lib5.Element>();
            }
            newChildren.add(_TableElementRow({
                key : row.key,children : this.updateChildren(oldChildren,row.children,{
                    forgottenChildren : this._forgottenChildren})}));
        }
        while (oldUnkeyedRows.moveNext())this.updateChildren(oldUnkeyedRows.current.children,new core.DartList.literal<lib5.Widget>(),{
            forgottenChildren : this._forgottenChildren});
        for(let oldChildren of oldKeyedRows.values.where((list : core.DartList<lib5.Element>) =>  {
            return !taken.contains(list);
        })) this.updateChildren(oldChildren,new core.DartList.literal<lib5.Widget>(),{
            forgottenChildren : this._forgottenChildren});
        /* TODO (AssertStatementImpl) : assert (() {_debugWillReattachChildren = false; return true;}()); */;
        this._children = newChildren;
        this._updateRenderObjectChildren();
        this._forgottenChildren.clear();
        super.update(newWidget);
        /* TODO (AssertStatementImpl) : assert (widget == newWidget); */;
    }
    _updateRenderObjectChildren() : any {
        /* TODO (AssertStatementImpl) : assert (renderObject != null); */;
        this.renderObject.setFlatChildren(this._children.isNotEmpty ? this._children[0].children.length : 0,this._children.expand((row : _TableElementRow) =>  {
            return row.children.map((child : lib5.Element) =>  {
                let box : any = child.renderObject;
                return box;
            });
        }).toList());
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    visitChildren(visitor : (element : lib5.Element) => any) : any {
        for(let child of this._children.expand((row : _TableElementRow) =>  {
            return row.children;
        })) {
            if (!this._forgottenChildren.contains(child)) visitor(child);
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    forgetChild(child : lib5.Element) : boolean {
        this._forgottenChildren.add(child);
        return true;
    }
}

export namespace TableCell {
    export type Constructors = lib5.ParentDataWidget.Constructors | 'TableCell';
    export type Interface = Omit<TableCell, Constructors>;
}
@DartClass
export class TableCell extends lib5.ParentDataWidget<Table> {
    constructor(_namedArguments? : {key? : lib3.Key,verticalAlignment? : lib6.TableCellVerticalAlignment,child? : lib5.Widget}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    TableCell(_namedArguments? : {key? : lib3.Key,verticalAlignment? : lib6.TableCellVerticalAlignment,child? : lib5.Widget}) {
        let {key,verticalAlignment,child} = Object.assign({
        }, _namedArguments );
        super.ParentDataWidget({
            key : key,child : child});
        this.verticalAlignment = verticalAlignment;
    }
    verticalAlignment : lib6.TableCellVerticalAlignment;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    applyParentData(renderObject : lib10.RenderObject) : any {
        let parentData : lib6.TableCellParentData = renderObject.parentData;
        if (parentData.verticalAlignment != this.verticalAlignment) {
            parentData.verticalAlignment = this.verticalAlignment;
            let targetParent : lib12.AbstractNode = renderObject.parent;
            if (is(targetParent, lib10.RenderObject)) targetParent.markNeedsLayout();
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    debugFillProperties(properties : lib13.DiagnosticPropertiesBuilder) : any {
        super.debugFillProperties(properties);
        properties.add(lib13.EnumProperty('verticalAlignment',this.verticalAlignment));
    }
}

export class properties {
    private static __$ : any;
    static get () : any { 
        return this.__$;
    }
    static set (__$value : any)  { 
        this.__$ = __$value;
    }

    private static __$ : any;
    static get () : any { 
        return this.__$;
    }
    static set (__$value : any)  { 
        this.__$ = __$value;
    }

    private static __$row1 : TableRow;
    static get row1() : TableRow { 
        return this.__$row1;
    }
    static set row1(__$value : TableRow)  { 
        this.__$row1 = __$value;
    }

    private static __$ : any;
    static get () : any { 
        return this.__$;
    }
    static set (__$value : any)  { 
        this.__$ = __$value;
    }

    private static __$ : any;
    static get () : any { 
        return this.__$;
    }
    static set (__$value : any)  { 
        this.__$ = __$value;
    }

    private static __$row2 : TableRow;
    static get row2() : TableRow { 
        return this.__$row2;
    }
    static set row2(__$value : TableRow)  { 
        this.__$row2 = __$value;
    }

    private static __$ : any;
    static get () : any { 
        return this.__$;
    }
    static set (__$value : any)  { 
        this.__$ = __$value;
    }

    private static __$ : any;
    static get () : any { 
        return this.__$;
    }
    static set (__$value : any)  { 
        this.__$ = __$value;
    }

    private static __$ : any;
    static get () : any { 
        return this.__$;
    }
    static set (__$value : any)  { 
        this.__$ = __$value;
    }

    private static __$ : any;
    static get () : any { 
        return this.__$;
    }
    static set (__$value : any)  { 
        this.__$ = __$value;
    }

    private static __$cellCount : number;
    static get cellCount() : number { 
        if (this.__$cellCount===undefined) {
            this.__$cellCount = properties.children.first.children.length;
        }
        return this.__$cellCount;
    }
    static set cellCount(__$value : number)  { 
        this.__$cellCount = __$value;
    }

    private static __$ : any;
    static get () : any { 
        return this.__$;
    }
    static set (__$value : any)  { 
        this.__$ = __$value;
    }

    private static __$row : TableRow;
    static get row() : TableRow { 
        return this.__$row;
    }
    static set row(__$value : TableRow)  { 
        this.__$row = __$value;
    }

    private static __$ : any;
    static get () : any { 
        return this.__$;
    }
    static set (__$value : any)  { 
        this.__$ = __$value;
    }

    private static __$ : any;
    static get () : any { 
        return this.__$;
    }
    static set (__$value : any)  { 
        this.__$ = __$value;
    }

    private static __$ : any;
    static get () : any { 
        return this.__$;
    }
    static set (__$value : any)  { 
        this.__$ = __$value;
    }

    private static __$_rowDecorations;
    static get _rowDecorations() { 
        if (this.__$_rowDecorations===undefined) {
            this.__$_rowDecorations = properties.children.any((row : TableRow) =>  {
                return row.decoration != null;
            }) ? properties.children.map((row : TableRow) =>  {
                return row.decoration;
            }).toList({
                growable : false}) : null;
        }
        return this.__$_rowDecorations;
    }
    static set _rowDecorations(__$value : any)  { 
        this.__$_rowDecorations = __$value;
    }
    ,private static __$super;
    static get super() { 
        return this.__$super;
    }
    static set super(__$value : any)  { 
        this.__$super = __$value;
    }

    private static __$ : any;
    static get () : any { 
        return this.__$;
    }
    static set (__$value : any)  { 
        this.__$ = __$value;
    }

    private static __$ : any;
    static get () : any { 
        return this.__$;
    }
    static set (__$value : any)  { 
        this.__$ = __$value;
    }

    private static __$flatChildren : core.DartList<lib5.Widget>;
    static get flatChildren() : core.DartList<lib5.Widget> { 
        if (this.__$flatChildren===undefined) {
            this.__$flatChildren = properties.children.expand((row : TableRow) =>  {
                return row.children;
            }).toList({
                growable : false});
        }
        return this.__$flatChildren;
    }
    static set flatChildren(__$value : core.DartList<lib5.Widget>)  { 
        this.__$flatChildren = __$value;
    }

    private static __$_rowDecorations : core.DartList<lib4.Decoration>;
    static get _rowDecorations() : core.DartList<lib4.Decoration> { 
        return this.__$_rowDecorations;
    }
    static set _rowDecorations(__$value : core.DartList<lib4.Decoration>)  { 
        this.__$_rowDecorations = __$value;
    }

    private static __$children : core.DartList<TableRow>;
    static get children() : core.DartList<TableRow> { 
        return this.__$children;
    }
    static set children(__$value : core.DartList<TableRow>)  { 
        this.__$children = __$value;
    }

    private static __$columnWidths : core.DartMap<number,lib6.TableColumnWidth>;
    static get columnWidths() : core.DartMap<number,lib6.TableColumnWidth> { 
        return this.__$columnWidths;
    }
    static set columnWidths(__$value : core.DartMap<number,lib6.TableColumnWidth>)  { 
        this.__$columnWidths = __$value;
    }

    private static __$defaultColumnWidth : lib6.TableColumnWidth;
    static get defaultColumnWidth() : lib6.TableColumnWidth { 
        return this.__$defaultColumnWidth;
    }
    static set defaultColumnWidth(__$value : lib6.TableColumnWidth)  { 
        this.__$defaultColumnWidth = __$value;
    }

    private static __$textDirection : any;
    static get textDirection() : any { 
        return this.__$textDirection;
    }
    static set textDirection(__$value : any)  { 
        this.__$textDirection = __$value;
    }

    private static __$border : lib7.TableBorder;
    static get border() : lib7.TableBorder { 
        return this.__$border;
    }
    static set border(__$value : lib7.TableBorder)  { 
        this.__$border = __$value;
    }

    private static __$defaultVerticalAlignment : lib6.TableCellVerticalAlignment;
    static get defaultVerticalAlignment() : lib6.TableCellVerticalAlignment { 
        return this.__$defaultVerticalAlignment;
    }
    static set defaultVerticalAlignment(__$value : lib6.TableCellVerticalAlignment)  { 
        this.__$defaultVerticalAlignment = __$value;
    }

    private static __$textBaseline : any;
    static get textBaseline() : any { 
        return this.__$textBaseline;
    }
    static set textBaseline(__$value : any)  { 
        this.__$textBaseline = __$value;
    }

}
