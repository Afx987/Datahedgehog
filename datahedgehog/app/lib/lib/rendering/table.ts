/** Library asset:datahedgehog_monitor/lib/lib/rendering/table.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./box";
import * as math from "@dart2ts/dart/math";
import * as lib5 from "./table_border";
import * as lib6 from "@dart2ts.packages/flutter/lib/src/painting/decoration";
import * as lib7 from "@dart2ts.packages/flutter/lib/src/painting/image_provider";
import * as collection from "@dart2ts/dart/core";
import * as lib9 from "./object";
import * as lib10 from "@dart2ts.packages/flutter/lib/src/gestures/hit_test";
import * as lib11 from "@dart2ts.packages/flutter/lib/src/foundation/diagnostics";

export var debugFillProperties : (properties : lib11.DiagnosticPropertiesBuilder) => any = (properties : lib11.DiagnosticPropertiesBuilder) : any =>  {
    super.debugFillProperties(properties);
    properties.add(lib11.DiagnosticsProperty('border',properties.border,{
        defaultValue : null}));
    properties.add(lib11.DiagnosticsProperty('specified column widths',properties._columnWidths,{
        level : properties._columnWidths.isEmpty ? lib11.DiagnosticLevel.hidden : lib11.DiagnosticLevel.info}));
    properties.add(lib11.DiagnosticsProperty('default column width',properties.defaultColumnWidth));
    properties.add(lib11.MessageProperty('table size',`${properties.columns}×${properties.rows}`));
    properties.add(lib11.IterableProperty('column offsets',properties._columnLefts,{
        ifNull : 'unknown'}));
    properties.add(lib11.IterableProperty('row offsets',properties._rowTops,{
        ifNull : 'unknown'}));
};
export var paint : (context : lib9.PaintingContext,offset : any) => any = (context : lib9.PaintingContext,offset : any) : any =>  {
    /* TODO (AssertStatementImpl) : assert (_children.length == rows * columns); */;
    if (properties.rows * properties.columns == 0) {
        if (properties.border != null) {
            let borderRect : any = Rect.fromLTWH(offset.dx,offset.dy,size.width,0.0);
            properties.border.paint(context.canvas,borderRect,{
                rows : new core.DartList.literal<double>(),columns : new core.DartList.literal<double>()});
        }
        return;
    }
    /* TODO (AssertStatementImpl) : assert (_rowTops.length == rows + 1); */;
    if (properties._rowDecorations != null) {
        let canvas : any = context.canvas;
        for(let y : number = 0; y < properties.rows; y += 1){
            if (properties._rowDecorations.length <= y) break;
            if (properties._rowDecorations[y] != null) {
                properties._rowDecorationPainters[y] = ( properties._rowDecorationPainters[y] ) || ( properties._rowDecorations[y].createBoxPainter(markNeedsPaint) );
                properties._rowDecorationPainters[y].paint(canvas,Offset(offset.dx,op(Op.PLUS,offset.dy,properties._rowTops[y])),properties.configuration.copyWith({
                    size : Size(size.width,properties._rowTops[y + 1] - properties._rowTops[y])}));
            }
        }
    }
    for(let index : number = 0; index < properties._children.length; index += 1){
        let child : lib3.RenderBox = properties._children[index];
        if (child != null) {
            let childParentData : lib3.BoxParentData = child.parentData;
            context.paintChild(child,op(Op.PLUS,childParentData.offset,offset));
        }
    }
    /* TODO (AssertStatementImpl) : assert (_rows == _rowTops.length - 1); */;
    /* TODO (AssertStatementImpl) : assert (_columns == _columnLefts.length); */;
    if (properties.border != null) {
        let borderRect : any = Rect.fromLTWH(offset.dx,offset.dy,size.width,properties._rowTops.last);
        let rows : core.DartIterable<double> = properties._rowTops.getRange(1,properties._rowTops.length - 1);
        let columns : core.DartIterable<double> = properties._columnLefts.skip(1);
        properties.border.paint(context.canvas,borderRect,{
            rows : rows,columns : columns});
    }
};
export var hitTestChildren : (result : lib10.HitTestResult,_namedArguments? : {position? : any}) => boolean = (result : lib10.HitTestResult,_namedArguments? : {position? : any}) : boolean =>  {
    let {position} = Object.assign({
    }, _namedArguments );
    /* TODO (AssertStatementImpl) : assert (_children.length == rows * columns); */;
    for(let index : number = properties._children.length - 1; index >= 0; index -= 1){
        let child : lib3.RenderBox = properties._children[index];
        if (child != null) {
            let childParentData : lib3.BoxParentData = child.parentData;
            if (child.hitTest(result,{
                position : op(Op.MINUS,position,childParentData.offset)})) return true;
        }
    }
    return false;
};
export var performLayout : () => any = () : any =>  {
    let rows : number = this.rows;
    let columns : number = this.columns;
    /* TODO (AssertStatementImpl) : assert (_children.length == rows * columns); */;
    if (rows * columns == 0) {
        size = constraints.constrain(new bare.createInstance(any,null,0.0,0.0));
        return;
    }
    let widths : core.DartList<double> = _computeColumnWidths(constraints);
    let positions : core.DartList<double> = core.DartList(columns);
    let tableWidth : double;
    switch (properties.textDirection) {
        case TextDirection.rtl:
            positions[columns - 1] = 0.0;
            for(let x : number = columns - 2; x >= 0; x -= 1)positions[x] = positions[x + 1] + widths[x + 1];
            properties._columnLefts = positions.reversed;
            tableWidth = positions.first + widths.first;
            break;
        case TextDirection.ltr:
            positions[0] = 0.0;
            for(let x : number = 1; x < columns; x += 1)positions[x] = positions[x - 1] + widths[x - 1];
            properties._columnLefts = positions;
            tableWidth = positions.last + widths.last;
            break;
    }
    /* TODO (AssertStatementImpl) : assert (!positions.any((double value) => value == null)); */;
    properties._rowTops.clear();
    properties._baselineDistance = null;
    let rowTop : double = 0.0;
    for(let y : number = 0; y < rows; y += 1){
        properties._rowTops.add(rowTop);
        let rowHeight : double = 0.0;
        let haveBaseline : boolean = false;
        let beforeBaselineDistance : double = 0.0;
        let afterBaselineDistance : double = 0.0;
        let baselines : core.DartList<double> = core.DartList(columns);
        for(let x : number = 0; x < columns; x += 1){
            let xy : number = x + y * columns;
            let child : lib3.RenderBox = properties._children[xy];
            if (child != null) {
                let childParentData : TableCellParentData = child.parentData;
                /* TODO (AssertStatementImpl) : assert (childParentData != null); */;
                childParentData.x = x;
                childParentData.y = y;
                switch ((childParentData.verticalAlignment || properties.defaultVerticalAlignment)) {
                    case TableCellVerticalAlignment.baseline:
                        /* TODO (AssertStatementImpl) : assert (textBaseline != null); */;
                        child.layout(lib3.BoxConstraints.tightFor({
                            width : widths[x]}),{
                            parentUsesSize : true});
                        let childBaseline : double = child.getDistanceToBaseline(properties.textBaseline,{
                            onlyReal : true});
                        if (childBaseline != null) {
                            beforeBaselineDistance = math.max(beforeBaselineDistance,childBaseline);
                            afterBaselineDistance = math.max(afterBaselineDistance,op(Op.MINUS,child.size.height,childBaseline));
                            baselines[x] = childBaseline;
                            haveBaseline = true;
                        }else {
                            rowHeight = math.max(rowHeight,child.size.height);
                            childParentData.offset = Offset(positions[x],rowTop);
                        }
                        break;
                    case TableCellVerticalAlignment.top:
                    case TableCellVerticalAlignment.middle:
                    case TableCellVerticalAlignment.bottom:
                        child.layout(lib3.BoxConstraints.tightFor({
                            width : widths[x]}),{
                            parentUsesSize : true});
                        rowHeight = math.max(rowHeight,child.size.height);
                        break;
                    case TableCellVerticalAlignment.fill:
                        break;
                }
            }
        }
        if (haveBaseline) {
            if (y == 0) properties._baselineDistance = beforeBaselineDistance;
            rowHeight = math.max(rowHeight,beforeBaselineDistance + afterBaselineDistance);
        }
        for(let x : number = 0; x < columns; x += 1){
            let xy : number = x + y * columns;
            let child : lib3.RenderBox = properties._children[xy];
            if (child != null) {
                let childParentData : TableCellParentData = child.parentData;
                switch ((childParentData.verticalAlignment || properties.defaultVerticalAlignment)) {
                    case TableCellVerticalAlignment.baseline:
                        if (baselines[x] != null) childParentData.offset = Offset(positions[x],rowTop + beforeBaselineDistance - baselines[x]);
                        break;
                    case TableCellVerticalAlignment.top:
                        childParentData.offset = Offset(positions[x],rowTop);
                        break;
                    case TableCellVerticalAlignment.middle:
                        childParentData.offset = Offset(positions[x],rowTop + (rowHeight - child.size.height) / 2.0);
                        break;
                    case TableCellVerticalAlignment.bottom:
                        childParentData.offset = Offset(positions[x],rowTop + rowHeight - child.size.height);
                        break;
                    case TableCellVerticalAlignment.fill:
                        child.layout(lib3.BoxConstraints.tightFor({
                            width : widths[x],height : rowHeight}));
                        childParentData.offset = Offset(positions[x],rowTop);
                        break;
                }
            }
        }
        rowTop += rowHeight;
    }
    properties._rowTops.add(rowTop);
    size = constraints.constrain(Size(tableWidth,rowTop));
    /* TODO (AssertStatementImpl) : assert (_rowTops.length == rows + 1); */;
};
export var getRowBox : (row : number) => any = (row : number) : any =>  {
    /* TODO (AssertStatementImpl) : assert (row >= 0); */;
    /* TODO (AssertStatementImpl) : assert (row < rows); */;
    /* TODO (AssertStatementImpl) : assert (!debugNeedsLayout); */;
    return Rect.fromLTRB(0.0,properties._rowTops[row],size.width,properties._rowTops[row + 1]);
};
export var _computeColumnWidths : (constraints : lib3.BoxConstraints) => core.DartList<double> = (constraints : lib3.BoxConstraints) : core.DartList<double> =>  {
    /* TODO (AssertStatementImpl) : assert (constraints != null); */;
    /* TODO (AssertStatementImpl) : assert (_children.length == rows * columns); */;
    let widths : core.DartList<double> = core.DartList(properties.columns);
    let minWidths : core.DartList<double> = core.DartList(properties.columns);
    let flexes : core.DartList<double> = core.DartList(properties.columns);
    let tableWidth : double = 0.0;
    let unflexedTableWidth : double = 0.0;
    let totalFlex : double = 0.0;
    for(let x : number = 0; x < properties.columns; x += 1){
        let columnWidth : TableColumnWidth = (properties._columnWidths.get(x) || properties.defaultColumnWidth);
        let columnCells : core.DartIterable<lib3.RenderBox> = column(x);
        let maxIntrinsicWidth : double = columnWidth.maxIntrinsicWidth(columnCells,constraints.maxWidth);
        /* TODO (AssertStatementImpl) : assert (maxIntrinsicWidth.isFinite); */;
        /* TODO (AssertStatementImpl) : assert (maxIntrinsicWidth >= 0.0); */;
        widths[x] = maxIntrinsicWidth;
        tableWidth += maxIntrinsicWidth;
        let minIntrinsicWidth : double = columnWidth.minIntrinsicWidth(columnCells,constraints.maxWidth);
        /* TODO (AssertStatementImpl) : assert (minIntrinsicWidth.isFinite); */;
        /* TODO (AssertStatementImpl) : assert (minIntrinsicWidth >= 0.0); */;
        minWidths[x] = minIntrinsicWidth;
        /* TODO (AssertStatementImpl) : assert (maxIntrinsicWidth >= minIntrinsicWidth); */;
        let flex : double = columnWidth.flex(columnCells);
        if (flex != null) {
            /* TODO (AssertStatementImpl) : assert (flex.isFinite); */;
            /* TODO (AssertStatementImpl) : assert (flex > 0.0); */;
            flexes[x] = flex;
            totalFlex += flex;
        }else {
            unflexedTableWidth += maxIntrinsicWidth;
        }
    }
    /* TODO (AssertStatementImpl) : assert (!widths.any((double value) => value == null)); */;
    let maxWidthConstraint : double = constraints.maxWidth;
    let minWidthConstraint : double = constraints.minWidth;
    if (totalFlex > 0.0) {
        let targetWidth : double;
        if (new core.DartDouble(maxWidthConstraint).isFinite) {
            targetWidth = maxWidthConstraint;
        }else {
            targetWidth = minWidthConstraint;
        }
        if (tableWidth < targetWidth) {
            let remainingWidth : double = targetWidth - unflexedTableWidth;
            /* TODO (AssertStatementImpl) : assert (remainingWidth.isFinite); */;
            /* TODO (AssertStatementImpl) : assert (remainingWidth >= 0.0); */;
            for(let x : number = 0; x < properties.columns; x += 1){
                if (flexes[x] != null) {
                    let flexedWidth : double = remainingWidth * flexes[x] / totalFlex;
                    /* TODO (AssertStatementImpl) : assert (flexedWidth.isFinite); */;
                    /* TODO (AssertStatementImpl) : assert (flexedWidth >= 0.0); */;
                    if (widths[x] < flexedWidth) {
                        let delta : double = flexedWidth - widths[x];
                        tableWidth += delta;
                        widths[x] = flexedWidth;
                    }
                }
            }
            /* TODO (AssertStatementImpl) : assert (tableWidth >= targetWidth); */;
        }
    }else if (tableWidth < minWidthConstraint) {
        let delta : double = (minWidthConstraint - tableWidth) / properties.columns;
        for(let x : number = 0; x < properties.columns; x += 1)widths[x] += delta;
        tableWidth = minWidthConstraint;
    }
    /* TODO (AssertStatementImpl) : assert (() {unflexedTableWidth = null; return true;}()); */;
    if (tableWidth > maxWidthConstraint) {
        let deficit : double = tableWidth - maxWidthConstraint;
        let availableColumns : number = properties.columns;
        let minimumDeficit : double = 1e-8;
        while (deficit > minimumDeficit && totalFlex > minimumDeficit){
            let newTotalFlex : double = 0.0;
            for(let x : number = 0; x < properties.columns; x += 1){
                if (flexes[x] != null) {
                    let newWidth : double = widths[x] - deficit * flexes[x] / totalFlex;
                    /* TODO (AssertStatementImpl) : assert (newWidth.isFinite); */;
                    if (newWidth <= minWidths[x]) {
                        deficit -= widths[x] - minWidths[x];
                        widths[x] = minWidths[x];
                        flexes[x] = null;
                        availableColumns -= 1;
                    }else {
                        deficit -= widths[x] - newWidth;
                        widths[x] = newWidth;
                        newTotalFlex += flexes[x];
                    }
                    /* TODO (AssertStatementImpl) : assert (widths[x] >= 0.0); */;
                }
            }
            totalFlex = newTotalFlex;
        }
        if (deficit > 0.0) {
            do{
                let delta : double = deficit / availableColumns;
                let newAvailableColumns : number = 0;
                for(let x : number = 0; x < properties.columns; x += 1){
                    let availableDelta : double = widths[x] - minWidths[x];
                    if (availableDelta > 0.0) {
                        if (availableDelta <= delta) {
                            deficit -= widths[x] - minWidths[x];
                            widths[x] = minWidths[x];
                        }else {
                            deficit -= availableDelta;
                            widths[x] -= availableDelta;
                            newAvailableColumns += 1;
                        }
                    }
                }
                availableColumns = newAvailableColumns;
            } while (deficit > 0.0 && availableColumns > 0);
        }
    }
    return widths;
};
export var row : (y : number) => core.DartIterable<lib3.RenderBox> = (y : number) : core.DartIterable<lib3.RenderBox> => core.iter<lib3.RenderBox>(()=>(function*()  {
    let start : number = y * properties.columns;
    let end : number = (y + 1) * properties.columns;
    for(let xy : number = start; xy < end; xy += 1){
        let child : lib3.RenderBox = properties._children[xy];
        if (child != null) yield child;
    }
}).call(this));
export var unmodifiable : (_columnWidths : any) => any = (_columnWidths : any) =>  {
};
export var setColumnWidth : (column : number,value : TableColumnWidth) => any = (column : number,value : TableColumnWidth) : any =>  {
    if (op(Op.EQUALS,properties._columnWidths.get(column),value)) return;
    properties._columnWidths.set(column,value);
    markNeedsLayout();
};
export var column : (x : number) => core.DartIterable<lib3.RenderBox> = (x : number) : core.DartIterable<lib3.RenderBox> => core.iter<lib3.RenderBox>(()=>(function*()  {
    for(let y : number = 0; y < properties.rows; y += 1){
        let xy : number = x + y * properties.columns;
        let child : lib3.RenderBox = properties._children[xy];
        if (child != null) yield child;
    }
}).call(this));
export var unmodifiable : (_rowDecorations : any, : any) => any = (_rowDecorations : any, : any) =>  {
};
export var debugDescribeChildren : () => core.DartList<lib11.DiagnosticsNode> = () : core.DartList<lib11.DiagnosticsNode> =>  {
    if (properties._children.isEmpty) {
        return new core.DartList.literal<lib11.DiagnosticsNode>(lib11.DiagnosticsNode.message('table is empty'));
    }
    let children : core.DartList<lib11.DiagnosticsNode> = new core.DartList.literal<lib11.DiagnosticsNode>();
    for(let y : number = 0; y < properties.rows; y += 1){
        for(let x : number = 0; x < properties.columns; x += 1){
            let xy : number = x + y * properties.columns;
            let child : lib3.RenderBox = properties._children[xy];
            let name : string = `child (${x}, ${y})`;
            if (child != null) children.add(child.toDiagnosticsNode({
                name : name}));else children.add(lib11.DiagnosticsProperty(name,null,{
                ifNull : 'is null',showSeparator : false}));
        }
    }
    return children;
};
export var setFlatChildren : (columns : number,cells : core.DartList<lib3.RenderBox>) => any = (columns : number,cells : core.DartList<lib3.RenderBox>) : any =>  {
    if (cells == properties._children && columns == properties._columns) return;
    /* TODO (AssertStatementImpl) : assert (columns >= 0); */;
    if (columns == 0 || cells.isEmpty) {
        /* TODO (AssertStatementImpl) : assert (cells == null || cells.isEmpty); */;
        properties._columns = columns;
        if (properties._children.isEmpty) {
            /* TODO (AssertStatementImpl) : assert (_rows == 0); */;
            return;
        }
        for(let oldChild of properties._children) {
            if (oldChild != null) dropChild(oldChild);
        }
        properties._rows = 0;
        properties._children.clear();
        markNeedsLayout();
        return;
    }
    /* TODO (AssertStatementImpl) : assert (cells != null); */;
    /* TODO (AssertStatementImpl) : assert (cells.length % columns == 0); */;
    let lostChildren : core.DartSet<lib3.RenderBox> = core.DartHashSet();
    for(let y : number = 0; y < properties._rows; y += 1){
        for(let x : number = 0; x < properties._columns; x += 1){
            let xyOld : number = x + y * properties._columns;
            let xyNew : number = x + y * columns;
            if (properties._children[xyOld] != null && (x >= columns || xyNew >= cells.length || properties._children[xyOld] != cells[xyNew])) lostChildren.add(properties._children[xyOld]);
        }
    }
    let y : number = 0;
    while (y * columns < cells.length){
        for(let x : number = 0; x < columns; x += 1){
            let xyNew : number = x + y * columns;
            let xyOld : number = x + y * properties._columns;
            if (cells[xyNew] != null && (x >= properties._columns || y >= properties._rows || properties._children[xyOld] != cells[xyNew])) {
                if (!lostChildren.remove(cells[xyNew])) adoptChild(cells[xyNew]);
            }
        }
        y += 1;
    }
    lostChildren.forEach(dropChild);
    properties._columns = columns;
    properties._rows = op(Op.QUOTIENT,cells.length,columns);
    properties._children = cells.toList();
    /* TODO (AssertStatementImpl) : assert (_children.length == rows * columns); */;
    markNeedsLayout();
};
export var setChildren : (cells : core.DartList<core.DartList<lib3.RenderBox>>) => any = (cells : core.DartList<core.DartList<lib3.RenderBox>>) : any =>  {
    if (cells == null) {
        setFlatChildren(0,null);
        return;
    }
    for(let oldChild of properties._children) {
        if (oldChild != null) dropChild(oldChild);
    }
    properties._children.clear();
    properties._columns = cells.isNotEmpty ? cells.first.length : 0;
    properties._rows = 0;
    cells.forEach(addRow);
    /* TODO (AssertStatementImpl) : assert (_children.length == rows * columns); */;
};
export var addRow : (cells : core.DartList<lib3.RenderBox>) => any = (cells : core.DartList<lib3.RenderBox>) : any =>  {
    /* TODO (AssertStatementImpl) : assert (cells.length == columns); */;
    /* TODO (AssertStatementImpl) : assert (_children.length == rows * columns); */;
    properties._rows += 1;
    properties._children.addAll(cells);
    for(let cell of cells) {
        if (cell != null) adoptChild(cell);
    }
    markNeedsLayout();
};
export var setChild : (x : number,y : number,value : lib3.RenderBox) => any = (x : number,y : number,value : lib3.RenderBox) : any =>  {
    /* TODO (AssertStatementImpl) : assert (x != null); */;
    /* TODO (AssertStatementImpl) : assert (y != null); */;
    /* TODO (AssertStatementImpl) : assert (x >= 0 && x < columns && y >= 0 && y < rows); */;
    /* TODO (AssertStatementImpl) : assert (_children.length == rows * columns); */;
    let xy : number = x + y * properties.columns;
    let oldChild : lib3.RenderBox = properties._children[xy];
    if (op(Op.EQUALS,oldChild,value)) return;
    if (oldChild != null) dropChild(oldChild);
    properties._children[xy] = value;
    if (value != null) adoptChild(value);
};
export var attach : (owner : lib9.PipelineOwner) => any = (owner : lib9.PipelineOwner) : any =>  {
    super.attach(owner);
    for(let child of properties._children) ((_865_)=>(!!_865_)?_865_.attach(owner):null)(child);
};
export var detach : () => any = () : any =>  {
    super.detach();
    if (properties._rowDecorationPainters != null) {
        for(let painter of properties._rowDecorationPainters) ((_866_)=>(!!_866_)?_866_.dispose():null)(painter);
        properties._rowDecorationPainters = null;
    }
    for(let child of properties._children) ((_867_)=>(!!_867_)?_867_.detach():null)(child);
};
export var visitChildren : (visitor : (child : any) => any) => any = (visitor : (child : any) => any) : any =>  {
    /* TODO (AssertStatementImpl) : assert (_children.length == rows * columns); */;
    for(let child of properties._children) {
        if (child != null) visitor(child);
    }
};
export var computeMinIntrinsicWidth : (height : double) => double = (height : double) : double =>  {
    /* TODO (AssertStatementImpl) : assert (_children.length == rows * columns); */;
    let totalMinWidth : double = 0.0;
    for(let x : number = 0; x < properties.columns; x += 1){
        let columnWidth : TableColumnWidth = (properties._columnWidths.get(x) || properties.defaultColumnWidth);
        let columnCells : core.DartIterable<lib3.RenderBox> = column(x);
        totalMinWidth += columnWidth.minIntrinsicWidth(columnCells,new core.DartDouble(double).infinity);
    }
    return totalMinWidth;
};
export var computeMaxIntrinsicWidth : (height : double) => double = (height : double) : double =>  {
    /* TODO (AssertStatementImpl) : assert (_children.length == rows * columns); */;
    let totalMaxWidth : double = 0.0;
    for(let x : number = 0; x < properties.columns; x += 1){
        let columnWidth : TableColumnWidth = (properties._columnWidths.get(x) || properties.defaultColumnWidth);
        let columnCells : core.DartIterable<lib3.RenderBox> = column(x);
        totalMaxWidth += columnWidth.maxIntrinsicWidth(columnCells,new core.DartDouble(double).infinity);
    }
    return totalMaxWidth;
};
export var computeMinIntrinsicHeight : (width : double) => double = (width : double) : double =>  {
    /* TODO (AssertStatementImpl) : assert (_children.length == rows * columns); */;
    let widths : core.DartList<double> = _computeColumnWidths(lib3.BoxConstraints.tightForFinite({
        width : width}));
    let rowTop : double = 0.0;
    for(let y : number = 0; y < properties.rows; y += 1){
        let rowHeight : double = 0.0;
        for(let x : number = 0; x < properties.columns; x += 1){
            let xy : number = x + y * properties.columns;
            let child : lib3.RenderBox = properties._children[xy];
            if (child != null) rowHeight = math.max(rowHeight,child.getMaxIntrinsicHeight(widths[x]));
        }
        rowTop += rowHeight;
    }
    return rowTop;
};
export var computeMaxIntrinsicHeight : (width : double) => double = (width : double) : double =>  {
    return computeMinIntrinsicHeight(width);
};
export var computeDistanceToActualBaseline : (baseline : any) => double = (baseline : any) : double =>  {
    /* TODO (AssertStatementImpl) : assert (!debugNeedsLayout); */;
    return properties._baselineDistance;
};
export var setupParentData : (child : lib9.RenderObject) => any = (child : lib9.RenderObject) : any =>  {
    if (isNot(child.parentData, TableCellParentData)) child.parentData = TableCellParentData();
};
export namespace RenderTable {
    export type Constructors = lib3.RenderBox.Constructors | 'RenderTable';
    export type Interface = Omit<RenderTable, Constructors>;
}
@DartClass
export class RenderTable extends lib3.RenderBox {
    constructor(_namedArguments? : {columns? : number,rows? : number,columnWidths? : core.DartMap<number,TableColumnWidth>,defaultColumnWidth? : TableColumnWidth,textDirection? : any,border? : lib5.TableBorder,rowDecorations? : core.DartList<lib6.Decoration>,configuration? : lib7.ImageConfiguration,defaultVerticalAlignment? : TableCellVerticalAlignment,textBaseline? : any,children? : core.DartList<core.DartList<lib3.RenderBox>>}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    RenderTable(_namedArguments? : {columns? : number,rows? : number,columnWidths? : core.DartMap<number,TableColumnWidth>,defaultColumnWidth? : TableColumnWidth,textDirection? : any,border? : lib5.TableBorder,rowDecorations? : core.DartList<lib6.Decoration>,configuration? : lib7.ImageConfiguration,defaultVerticalAlignment? : TableCellVerticalAlignment,textBaseline? : any,children? : core.DartList<core.DartList<lib3.RenderBox>>}) {
        let {columns,rows,columnWidths,defaultColumnWidth,textDirection,border,rowDecorations,configuration,defaultVerticalAlignment,textBaseline,children} = Object.assign({
            "defaultColumnWidth" : new FlexColumnWidth(1.0),
            "configuration" : lib7.ImageConfiguration.empty,
            "defaultVerticalAlignment" : TableCellVerticalAlignment.top}, _namedArguments );
        this._textDirection = properties.textDirection;
        this._columns = (properties.columns || (children != null && children.isNotEmpty ? children.first.length : 0));
        this._rows = (properties.rows || 0);
        this._children = ((_) : core.DartList<lib3.RenderBox> =>  {
            {
                _.length = op(Op.TIMES,this._columns,this._rows);
                return _;
            }
        })(new core.DartList.literal<lib3.RenderBox>());
        this._columnWidths = (properties.columnWidths || core.DartHashMap());
        this._defaultColumnWidth = properties.defaultColumnWidth;
        this._border = properties.border;
        this.rowDecorations = this.rowDecorations;
        this._configuration = properties.configuration;
        this._defaultVerticalAlignment = properties.defaultVerticalAlignment;
        this._textBaseline = properties.textBaseline;
        this.assert = assert;
    }
     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

    _textDirection;

    _columns;

    _rows;

    _children;

    _columnWidths;

    _defaultColumnWidth;

    _border;

    rowDecorations;

    _configuration;

    _defaultVerticalAlignment;

    _textBaseline;

     : any;

    @Abstract
    forEach(addRow : any){ throw 'abstract'}
}

export enum TableCellVerticalAlignment {
    top,
    middle,
    bottom,
    baseline,
    fill
}

export namespace TableColumnWidth {
    export type Constructors = 'TableColumnWidth';
    export type Interface = Omit<TableColumnWidth, Constructors>;
}
@DartClass
@DartClassAnnotation({
    library : 'asset:meta/lib/meta.dart',type : 'immutable',value : {
        arguments : [],namedArguments : {
        }}})
export class TableColumnWidth {
    constructor() {
    }
    @defaultConstructor
    TableColumnWidth() {
    }
    @Abstract
    minIntrinsicWidth(cells : core.DartIterable<lib3.RenderBox>,containerWidth : double) : double{ throw 'abstract'}
    @Abstract
    maxIntrinsicWidth(cells : core.DartIterable<lib3.RenderBox>,containerWidth : double) : double{ throw 'abstract'}
    flex(cells : core.DartIterable<lib3.RenderBox>) : double {
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `${this.runtimeType}`;
    }
}

export namespace TableCellParentData {
    export type Constructors = lib3.BoxParentData.Constructors | 'TableCellParentData';
    export type Interface = Omit<TableCellParentData, Constructors>;
}
@DartClass
export class TableCellParentData extends lib3.BoxParentData {
    verticalAlignment : TableCellVerticalAlignment;

    x : number;

    y : number;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `${super.toString()}; ${op(Op.EQUALS,this.verticalAlignment,null) ? "default vertical alignment" : `${this.verticalAlignment}`}`;
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    TableCellParentData() {
    }
}

export namespace MinColumnWidth {
    export type Constructors = TableColumnWidth.Constructors | 'MinColumnWidth';
    export type Interface = Omit<MinColumnWidth, Constructors>;
}
@DartClass
export class MinColumnWidth extends TableColumnWidth {
    constructor(a : TableColumnWidth,b : TableColumnWidth) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    MinColumnWidth(a : TableColumnWidth,b : TableColumnWidth) {
        this.a = a;
        this.b = b;
    }
    a : TableColumnWidth;

    b : TableColumnWidth;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    minIntrinsicWidth(cells : core.DartIterable<lib3.RenderBox>,containerWidth : double) : double {
        return math.min(this.a.minIntrinsicWidth(cells,containerWidth),this.b.minIntrinsicWidth(cells,containerWidth));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    maxIntrinsicWidth(cells : core.DartIterable<lib3.RenderBox>,containerWidth : double) : double {
        return math.min(this.a.maxIntrinsicWidth(cells,containerWidth),this.b.maxIntrinsicWidth(cells,containerWidth));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    flex(cells : core.DartIterable<lib3.RenderBox>) : double {
        let aFlex : double = this.a.flex(cells);
        if (aFlex == null) return this.b.flex(cells);
        let bFlex : double = this.b.flex(cells);
        if (bFlex == null) return null;
        return math.min(aFlex,bFlex);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `${this.runtimeType}(${this.a}, ${this.b})`;
    }
}

export namespace MaxColumnWidth {
    export type Constructors = TableColumnWidth.Constructors | 'MaxColumnWidth';
    export type Interface = Omit<MaxColumnWidth, Constructors>;
}
@DartClass
export class MaxColumnWidth extends TableColumnWidth {
    constructor(a : TableColumnWidth,b : TableColumnWidth) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    MaxColumnWidth(a : TableColumnWidth,b : TableColumnWidth) {
        this.a = a;
        this.b = b;
    }
    a : TableColumnWidth;

    b : TableColumnWidth;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    minIntrinsicWidth(cells : core.DartIterable<lib3.RenderBox>,containerWidth : double) : double {
        return math.max(this.a.minIntrinsicWidth(cells,containerWidth),this.b.minIntrinsicWidth(cells,containerWidth));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    maxIntrinsicWidth(cells : core.DartIterable<lib3.RenderBox>,containerWidth : double) : double {
        return math.max(this.a.maxIntrinsicWidth(cells,containerWidth),this.b.maxIntrinsicWidth(cells,containerWidth));
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    flex(cells : core.DartIterable<lib3.RenderBox>) : double {
        let aFlex : double = this.a.flex(cells);
        if (aFlex == null) return this.b.flex(cells);
        let bFlex : double = this.b.flex(cells);
        if (bFlex == null) return null;
        return math.max(aFlex,bFlex);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `${this.runtimeType}(${this.a}, ${this.b})`;
    }
}

export namespace FlexColumnWidth {
    export type Constructors = TableColumnWidth.Constructors | 'FlexColumnWidth';
    export type Interface = Omit<FlexColumnWidth, Constructors>;
}
@DartClass
export class FlexColumnWidth extends TableColumnWidth {
    constructor(value? : double) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    FlexColumnWidth(value? : double) {
        value = value || 1.0;
        this.assert = assert;
        this.value = value;
    }
     : any;

    value : double;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    minIntrinsicWidth(cells : core.DartIterable<lib3.RenderBox>,containerWidth : double) : double {
        return 0.0;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    maxIntrinsicWidth(cells : core.DartIterable<lib3.RenderBox>,containerWidth : double) : double {
        return 0.0;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    flex(cells : core.DartIterable<lib3.RenderBox>) : double {
        return this.value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `${this.runtimeType}(${this.value})`;
    }
}

export namespace FractionColumnWidth {
    export type Constructors = TableColumnWidth.Constructors | 'FractionColumnWidth';
    export type Interface = Omit<FractionColumnWidth, Constructors>;
}
@DartClass
export class FractionColumnWidth extends TableColumnWidth {
    constructor(value : double) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    FractionColumnWidth(value : double) {
        this.assert = assert;
        this.value = value;
    }
     : any;

    value : double;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    minIntrinsicWidth(cells : core.DartIterable<lib3.RenderBox>,containerWidth : double) : double {
        if (!new core.DartDouble(containerWidth).isFinite) return 0.0;
        return this.value * containerWidth;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    maxIntrinsicWidth(cells : core.DartIterable<lib3.RenderBox>,containerWidth : double) : double {
        if (!new core.DartDouble(containerWidth).isFinite) return 0.0;
        return this.value * containerWidth;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `${this.runtimeType}(${this.value})`;
    }
}

export namespace FixedColumnWidth {
    export type Constructors = TableColumnWidth.Constructors | 'FixedColumnWidth';
    export type Interface = Omit<FixedColumnWidth, Constructors>;
}
@DartClass
export class FixedColumnWidth extends TableColumnWidth {
    constructor(value : double) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    FixedColumnWidth(value : double) {
        this.assert = assert;
        this.value = value;
    }
     : any;

    value : double;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    minIntrinsicWidth(cells : core.DartIterable<lib3.RenderBox>,containerWidth : double) : double {
        return this.value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    maxIntrinsicWidth(cells : core.DartIterable<lib3.RenderBox>,containerWidth : double) : double {
        return this.value;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `${this.runtimeType}(${this.value})`;
    }
}

export namespace IntrinsicColumnWidth {
    export type Constructors = TableColumnWidth.Constructors | 'IntrinsicColumnWidth';
    export type Interface = Omit<IntrinsicColumnWidth, Constructors>;
}
@DartClass
export class IntrinsicColumnWidth extends TableColumnWidth {
    constructor(_namedArguments? : {flex? : double}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    IntrinsicColumnWidth(_namedArguments? : {flex? : double}) {
        let {flex} = Object.assign({
        }, _namedArguments );
        this._flex = flex;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    minIntrinsicWidth(cells : core.DartIterable<lib3.RenderBox>,containerWidth : double) : double {
        let result : double = 0.0;
        for(let cell of cells) result = math.max(result,cell.getMinIntrinsicWidth(new core.DartDouble(double).infinity));
        return result;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    maxIntrinsicWidth(cells : core.DartIterable<lib3.RenderBox>,containerWidth : double) : double {
        let result : double = 0.0;
        for(let cell of cells) result = math.max(result,cell.getMaxIntrinsicWidth(new core.DartDouble(double).infinity));
        return result;
    }
    _flex : double;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    flex(cells : core.DartIterable<lib3.RenderBox>) : double {
        return this._flex;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return `${this.runtimeType}(flex: ${((_863_)=>(!!_863_)?new core.DartDouble(_863_).toStringAsFixed(1):null)(this._flex)})`;
    }
}

export class properties {
    static get defaultColumnWidth() : TableColumnWidth {
        return properties._defaultColumnWidth;
    }
    private static __$_columnLefts : core.DartIterable<double>;
    static get _columnLefts() : core.DartIterable<double> { 
        return this.__$_columnLefts;
    }
    static set _columnLefts(__$value : core.DartIterable<double>)  { 
        this.__$_columnLefts = __$value;
    }

    private static __$_rowTops : core.DartList<double>;
    static get _rowTops() : core.DartList<double> { 
        if (this.__$_rowTops===undefined) {
            this.__$_rowTops = new core.DartList.literal<double>();
        }
        return this.__$_rowTops;
    }
    static set _rowTops(__$value : core.DartList<double>)  { 
        this.__$_rowTops = __$value;
    }

    private static __$_children : core.DartList<lib3.RenderBox>;
    static get _children() : core.DartList<lib3.RenderBox> { 
        if (this.__$_children===undefined) {
            this.__$_children = new core.DartList.literal<lib3.RenderBox>();
        }
        return this.__$_children;
    }
    static set _children(__$value : core.DartList<lib3.RenderBox>)  { 
        this.__$_children = __$value;
    }

    static get columns() : number {
        return properties._columns;
    }
    private static __$_columns : number;
    static get _columns() : number { 
        return this.__$_columns;
    }
    static set _columns(__$value : number)  { 
        this.__$_columns = __$value;
    }

    static set columns(value : number) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        /* TODO (AssertStatementImpl) : assert (value >= 0); */;
        if (value == properties.columns) return;
        let oldColumns : number = properties.columns;
        let oldChildren : core.DartList<lib3.RenderBox> = properties._children;
        properties._columns = value;
        properties._children = ((_) : core.DartList<lib3.RenderBox> =>  {
            {
                _.length = properties.columns * properties.rows;
                return _;
            }
        })(new core.DartList.literal<lib3.RenderBox>());
        let columnsToCopy : number = math.min(properties.columns,oldColumns);
        for(let y : number = 0; y < properties.rows; y += 1){
            for(let x : number = 0; x < columnsToCopy; x += 1)properties._children[x + y * properties.columns] = oldChildren[x + y * oldColumns];
        }
        if (oldColumns > properties.columns) {
            for(let y : number = 0; y < properties.rows; y += 1){
                for(let x : number = properties.columns; x < oldColumns; x += 1){
                    let xy : number = x + y * oldColumns;
                    if (oldChildren[xy] != null) dropChild(oldChildren[xy]);
                }
            }
        }
        markNeedsLayout();
    }
    static get rows() : number {
        return properties._rows;
    }
    private static __$_rows : number;
    static get _rows() : number { 
        return this.__$_rows;
    }
    static set _rows(__$value : number)  { 
        this.__$_rows = __$value;
    }

    static set rows(value : number) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        /* TODO (AssertStatementImpl) : assert (value >= 0); */;
        if (value == properties.rows) return;
        if (properties._rows > value) {
            for(let xy : number = properties.columns * value; xy < properties._children.length; xy += 1){
                if (properties._children[xy] != null) dropChild(properties._children[xy]);
            }
        }
        properties._rows = value;
        properties._children.length = properties.columns * properties.rows;
        markNeedsLayout();
    }
    static get columnWidths() : core.DartMap<number,TableColumnWidth> {
        return op(Op.LT,core.DartMap<K,V>,number);
    }
    private static __$ : TableColumnWidth;
    static get () : TableColumnWidth { 
        return this.__$;
    }
    static set (__$value : TableColumnWidth)  { 
        this.__$ = __$value;
    }

    private static __$_columnWidths : core.DartMap<number,TableColumnWidth>;
    static get _columnWidths() : core.DartMap<number,TableColumnWidth> { 
        return this.__$_columnWidths;
    }
    static set _columnWidths(__$value : core.DartMap<number,TableColumnWidth>)  { 
        this.__$_columnWidths = __$value;
    }

    static set columnWidths(value : core.DartMap<number,TableColumnWidth>) {
        value = ( value ) || ( core.DartHashMap() );
        if (properties._columnWidths == value) return;
        properties._columnWidths = value;
        markNeedsLayout();
    }
    private static __$_defaultColumnWidth : TableColumnWidth;
    static get _defaultColumnWidth() : TableColumnWidth { 
        return this.__$_defaultColumnWidth;
    }
    static set _defaultColumnWidth(__$value : TableColumnWidth)  { 
        this.__$_defaultColumnWidth = __$value;
    }

    static set defaultColumnWidth(value : TableColumnWidth) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        if (op(Op.EQUALS,properties.defaultColumnWidth,value)) return;
        properties._defaultColumnWidth = value;
        markNeedsLayout();
    }
    static get textDirection() : any {
        return properties._textDirection;
    }
    private static __$_textDirection : any;
    static get _textDirection() : any { 
        return this.__$_textDirection;
    }
    static set _textDirection(__$value : any)  { 
        this.__$_textDirection = __$value;
    }

    static set textDirection(value : any) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        if (op(Op.EQUALS,properties._textDirection,value)) return;
        properties._textDirection = value;
        markNeedsLayout();
    }
    static get border() : lib5.TableBorder {
        return properties._border;
    }
    private static __$_border : lib5.TableBorder;
    static get _border() : lib5.TableBorder { 
        return this.__$_border;
    }
    static set _border(__$value : lib5.TableBorder)  { 
        this.__$_border = __$value;
    }

    static set border(value : lib5.TableBorder) {
        if (op(Op.EQUALS,properties.border,value)) return;
        properties._border = value;
        markNeedsPaint();
    }
    static get rowDecorations() : core.DartList<lib6.Decoration> {
        return op(Op.LT,core.DartList<E>,lib6.Decoration);
    }
    private static __$ : lib6.Decoration;
    static get () : lib6.Decoration { 
        return this.__$;
    }
    static set (__$value : lib6.Decoration)  { 
        this.__$ = __$value;
    }

    private static __$_rowDecorations : core.DartList<lib6.Decoration>;
    static get _rowDecorations() : core.DartList<lib6.Decoration> { 
        return this.__$_rowDecorations;
    }
    static set _rowDecorations(__$value : core.DartList<lib6.Decoration>)  { 
        this.__$_rowDecorations = __$value;
    }

    private static __$_rowDecorationPainters : core.DartList<lib6.BoxPainter>;
    static get _rowDecorationPainters() : core.DartList<lib6.BoxPainter> { 
        return this.__$_rowDecorationPainters;
    }
    static set _rowDecorationPainters(__$value : core.DartList<lib6.BoxPainter>)  { 
        this.__$_rowDecorationPainters = __$value;
    }

    static set rowDecorations(value : core.DartList<lib6.Decoration>) {
        if (properties._rowDecorations == value) return;
        properties._rowDecorations = value;
        if (properties._rowDecorationPainters != null) {
            for(let painter of properties._rowDecorationPainters) ((_864_)=>(!!_864_)?_864_.dispose():null)(painter);
        }
        properties._rowDecorationPainters = properties._rowDecorations != null ? core.DartList(properties._rowDecorations.length) : null;
    }
    static get configuration() : lib7.ImageConfiguration {
        return properties._configuration;
    }
    private static __$_configuration : lib7.ImageConfiguration;
    static get _configuration() : lib7.ImageConfiguration { 
        return this.__$_configuration;
    }
    static set _configuration(__$value : lib7.ImageConfiguration)  { 
        this.__$_configuration = __$value;
    }

    static set configuration(value : lib7.ImageConfiguration) {
        /* TODO (AssertStatementImpl) : assert (value != null); */;
        if (op(Op.EQUALS,value,properties._configuration)) return;
        properties._configuration = value;
        markNeedsPaint();
    }
    static get defaultVerticalAlignment() : TableCellVerticalAlignment {
        return properties._defaultVerticalAlignment;
    }
    private static __$_defaultVerticalAlignment : TableCellVerticalAlignment;
    static get _defaultVerticalAlignment() : TableCellVerticalAlignment { 
        return this.__$_defaultVerticalAlignment;
    }
    static set _defaultVerticalAlignment(__$value : TableCellVerticalAlignment)  { 
        this.__$_defaultVerticalAlignment = __$value;
    }

    static set defaultVerticalAlignment(value : TableCellVerticalAlignment) {
        if (op(Op.EQUALS,properties._defaultVerticalAlignment,value)) return;
        properties._defaultVerticalAlignment = value;
        markNeedsLayout();
    }
    static get textBaseline() : any {
        return properties._textBaseline;
    }
    private static __$_textBaseline : any;
    static get _textBaseline() : any { 
        return this.__$_textBaseline;
    }
    static set _textBaseline(__$value : any)  { 
        this.__$_textBaseline = __$value;
    }

    static set textBaseline(value : any) {
        if (op(Op.EQUALS,properties._textBaseline,value)) return;
        properties._textBaseline = value;
        markNeedsLayout();
    }
    private static __$_baselineDistance : double;
    static get _baselineDistance() : double { 
        return this.__$_baselineDistance;
    }
    static set _baselineDistance(__$value : double)  { 
        this.__$_baselineDistance = __$value;
    }

}
