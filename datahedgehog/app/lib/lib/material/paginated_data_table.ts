/** Library asset:datahedgehog_monitor/lib/lib/material/paginated_data_table.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/flutter/lib/src/widgets/framework";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/foundation/key";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/gestures/recognizer";
import * as lib6 from "./data_table";
import * as lib7 from "./data_table_source";
import * as lib8 from "@dart2ts.packages/flutter/lib/src/widgets/text_selection";
import * as lib9 from "@dart2ts.packages/flutter/lib/src/widgets/page_storage";
import * as lib10 from "./progress_indicator";
import * as math from "@dart2ts/dart/math";
import * as lib12 from "./theme";
import * as lib13 from "./theme_data";
import * as lib14 from "./material_localizations";
import * as lib15 from "@dart2ts.packages/flutter/lib/src/widgets/basic";
import * as lib16 from "./button_bar";
import * as lib17 from "@dart2ts.packages/flutter/lib/src/widgets/text";
import * as lib18 from "@dart2ts.packages/flutter/lib/src/painting/edge_insets";
import * as lib19 from "@dart2ts.packages/flutter/lib/src/painting/text_style";
import * as lib20 from "./dropdown";
import * as lib21 from "@dart2ts.packages/flutter/lib/src/widgets/container";
import * as lib22 from "@dart2ts.packages/flutter/lib/src/rendering/box";
import * as lib23 from "@dart2ts.packages/flutter/lib/src/painting/alignment";
import * as lib24 from "./icons";
import * as lib25 from "@dart2ts.packages/flutter/lib/src/widgets/icon";
import * as lib26 from "./icon_button";
import * as lib27 from "@dart2ts.packages/flutter/lib/src/rendering/flex";
import * as lib28 from "@dart2ts.packages/flutter/lib/src/widgets/icon_theme_data";
import * as lib29 from "./ink_decoration";
import * as lib30 from "./button_theme";
import * as lib31 from "@dart2ts.packages/flutter/lib/src/widgets/icon_theme";
import * as lib32 from "@dart2ts.packages/flutter/lib/src/painting/basic_types";
import * as lib33 from "@dart2ts.packages/flutter/lib/src/widgets/single_child_scroll_view";
import * as lib34 from "./card";

export var createState : () => PaginatedDataTableState = () : PaginatedDataTableState =>  {
    return PaginatedDataTableState();
};
export namespace PaginatedDataTable {
    export type Constructors = lib3.StatefulWidget.Constructors | 'PaginatedDataTable' | 'contains';
    export type Interface = Omit<PaginatedDataTable, Constructors>;
}
@DartClass
export class PaginatedDataTable extends lib3.StatefulWidget {
    constructor(_namedArguments? : {key? : lib4.Key,header? : any,actions? : any,columns? : any,sortColumnIndex? : any,sortAscending? : any,onSelectAll? : any,initialFirstRowIndex? : any,onPageChanged? : any,rowsPerPage? : any,availableRowsPerPage? : any,onRowsPerPageChanged? : any,dragStartBehavior? : any,source? : any}) {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    PaginatedDataTable(_namedArguments? : {key? : lib4.Key,header? : any,actions? : any,columns? : any,sortColumnIndex? : any,sortAscending? : any,onSelectAll? : any,initialFirstRowIndex? : any,onPageChanged? : any,rowsPerPage? : any,availableRowsPerPage? : any,onRowsPerPageChanged? : any,dragStartBehavior? : any,source? : any}) {
        let {key,header,actions,columns,sortColumnIndex,sortAscending,onSelectAll,initialFirstRowIndex,onPageChanged,rowsPerPage,availableRowsPerPage,onRowsPerPageChanged,dragStartBehavior,source} = Object.assign({
            "sortAscending" : true,
            "initialFirstRowIndex" : 0,
            "rowsPerPage" : properties.defaultRowsPerPage,
            "availableRowsPerPage" : new core.DartList.literal<number>(properties.defaultRowsPerPage,properties.defaultRowsPerPage * 2,properties.defaultRowsPerPage * 5,properties.defaultRowsPerPage * 10),
            "dragStartBehavior" : lib5.DragStartBehavior.down}, _namedArguments );
        this.assert = assert;
        this.header = header;
        this.actions = actions;
        this.columns = columns;
        this.sortColumnIndex = sortColumnIndex;
        this.sortAscending = sortAscending;
        this.onSelectAll = onSelectAll;
        this.initialFirstRowIndex = initialFirstRowIndex;
        this.onPageChanged = onPageChanged;
        this.rowsPerPage = rowsPerPage;
        this.availableRowsPerPage = availableRowsPerPage;
        this.onRowsPerPageChanged = onRowsPerPageChanged;
        this.dragStartBehavior = dragStartBehavior;
        this.source = source;
    }
     : any;

     : any;

     : any;

     : any;

     : any;

    [null](sortColumnIndex : any, : any) {
    }
     : any;

     : any;

     : any;

     : any;

     : any;

     : any;

    @namedConstructor
    contains(rowsPerPage : any) {
    }
    static contains : new(rowsPerPage : any) => PaginatedDataTable;

}

export namespace PaginatedDataTableState {
    export type Constructors = 'PaginatedDataTableState';
    export type Interface = Omit<PaginatedDataTableState, Constructors>;
}
@DartClass
export class PaginatedDataTableState extends any {
    _firstRowIndex : number;

    _rowCount : number;

    _rowCountApproximate : boolean;

    _selectedRowCount : number;

    _rows : core.DartMap<number,lib6.DataRow>;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    initState() : any {
        super.initState();
        this._firstRowIndex = ((((_745_)=>(!!_745_)?_745_.readState(lib8.properties.context):null)(lib9.PageStorage.of(lib8.properties.context)) || widget.initialFirstRowIndex) || 0);
        widget.source.addListener(this._handleDataSourceChanged.bind(this));
        this._handleDataSourceChanged();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    didUpdateWidget(oldWidget : PaginatedDataTable) : any {
        super.didUpdateWidget(oldWidget);
        if (oldWidget.source != widget.source) {
            oldWidget.source.removeListener(this._handleDataSourceChanged.bind(this));
            widget.source.addListener(this._handleDataSourceChanged.bind(this));
            this._handleDataSourceChanged();
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    dispose() : any {
        widget.source.removeListener(this._handleDataSourceChanged.bind(this));
        super.dispose();
    }
    _handleDataSourceChanged() : any {
        setState(() =>  {
            this._rowCount = widget.source.rowCount;
            this._rowCountApproximate = widget.source.isRowCountApproximate;
            this._selectedRowCount = widget.source.selectedRowCount;
            this._rows.clear();
        });
    }
    pageTo(rowIndex : number) : any {
        let oldFirstRowIndex : number = this._firstRowIndex;
        setState(() =>  {
            let rowsPerPage : number = widget.rowsPerPage;
            this._firstRowIndex = (op(Op.QUOTIENT,rowIndex,rowsPerPage)) * rowsPerPage;
        });
        if ((widget.onPageChanged != null) && (oldFirstRowIndex != this._firstRowIndex)) widget.onPageChanged(this._firstRowIndex);
    }
    _getBlankRowFor(index : number) : lib6.DataRow {
        return lib6.DataRow.byIndex({
            index : index,cells : widget.columns.map((column : lib6.DataColumn) =>  {
                return lib6.DataCell.empty;
            }).toList()});
    }
    _getProgressIndicatorRowFor(index : number) : lib6.DataRow {
        let haveProgressIndicator : boolean = false;
        let cells : core.DartList<lib6.DataCell> = widget.columns.map((column : lib6.DataColumn) =>  {
            if (!column.numeric) {
                haveProgressIndicator = true;
                return new lib6.DataCell(lib10.CircularProgressIndicator());
            }
            return lib6.DataCell.empty;
        }).toList();
        if (!haveProgressIndicator) {
            haveProgressIndicator = true;
            cells[0] = new lib6.DataCell(lib10.CircularProgressIndicator());
        }
        return lib6.DataRow.byIndex({
            index : index,cells : cells});
    }
    _getRows(firstRowIndex : number,rowsPerPage : number) : core.DartList<lib6.DataRow> {
        let result : core.DartList<lib6.DataRow> = new core.DartList.literal<lib6.DataRow>();
        let nextPageFirstRowIndex : number = firstRowIndex + rowsPerPage;
        let haveProgressIndicator : boolean = false;
        for(let index : number = firstRowIndex; index < nextPageFirstRowIndex; index += 1){
            let row : lib6.DataRow;
            if (index < this._rowCount || this._rowCountApproximate) {
                row = this._rows.putIfAbsent(index,() =>  {
                    return widget.source.getRow(index);
                });
                if (op(Op.EQUALS,row,null) && !haveProgressIndicator) {
                    row = ( row ) || ( this._getProgressIndicatorRowFor(index) );
                    haveProgressIndicator = true;
                }
            }
            row = ( row ) || ( this._getBlankRowFor(index) );
            result.add(row);
        }
        return result;
    }
    _handlePrevious() : any {
        this.pageTo(math.max(this._firstRowIndex - widget.rowsPerPage,0));
    }
    _handleNext() : any {
        this.pageTo(this._firstRowIndex + widget.rowsPerPage);
    }
    _tableKey : lib3.GlobalKey<any>;

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    build(context : lib3.BuildContext) : lib3.Widget {
        /* TODO (AssertStatementImpl) : assert (debugCheckHasMaterialLocalizations(context)); */;
        let themeData : lib13.ThemeData = lib12.Theme.of(context);
        let localizations : lib14.MaterialLocalizations = lib14.MaterialLocalizations.of(context);
        let headerWidgets : core.DartList<lib3.Widget> = new core.DartList.literal<lib3.Widget>();
        let startPadding : double = 24.0;
        if (this._selectedRowCount == 0) {
            headerWidgets.add(lib15.Expanded({
                child : widget.header}));
            if (is(widget.header, lib16.ButtonBar)) {
                startPadding = 12.0;
            }
        }else {
            headerWidgets.add(lib15.Expanded({
                child : lib17.Text(localizations.selectedRowCountTitle(this._selectedRowCount))}));
        }
        if (widget.actions != null) {
            headerWidgets.addAll(widget.actions.map((action : lib3.Widget) =>  {
                return lib15.Padding({
                    padding : new lib18.EdgeInsetsDirectional.only({
                        start : 24.0 - 8.0 * 2.0}),child : action});
            }).toList());
        }
        let footerTextStyle : lib19.TextStyle = themeData.textTheme.caption;
        let footerWidgets : core.DartList<lib3.Widget> = new core.DartList.literal<lib3.Widget>();
        if (widget.onRowsPerPageChanged != null) {
            let availableRowsPerPage : core.DartList<lib3.Widget> = widget.availableRowsPerPage.where((value : number) =>  {
                return value <= this._rowCount || value == widget.rowsPerPage;
            }).map((value : number) =>  {
                return lib20.DropdownMenuItem({
                    value : value,child : lib17.Text(`${value}`)});
            }).toList();
            footerWidgets.addAll(new core.DartList.literal<lib3.Widget>(lib21.Container({
                width : 14.0}),lib17.Text(localizations.rowsPerPageTitle),lib15.ConstrainedBox({
                constraints : new lib22.BoxConstraints({
                    minWidth : 64.0}),child : lib15.Align({
                    alignment : lib23.AlignmentDirectional.centerEnd,child : lib20.DropdownButtonHideUnderline({
                        child : lib20.DropdownButton({
                            items : availableRowsPerPage,value : widget.rowsPerPage,onChanged : widget.onRowsPerPageChanged,style : footerTextStyle,iconSize : 24.0})})})})));
        }
        footerWidgets.addAll(new core.DartList.literal<lib3.Widget>(lib21.Container({
            width : 32.0}),lib17.Text(localizations.pageRowsInfoTitle(this._firstRowIndex + 1,this._firstRowIndex + widget.rowsPerPage,this._rowCount,this._rowCountApproximate)),lib21.Container({
            width : 32.0}),lib26.IconButton({
            icon : new lib25.Icon(lib24.Icons.chevron_left),padding : lib18.EdgeInsets.zero,tooltip : localizations.previousPageTooltip,onPressed : this._firstRowIndex <= 0 ? null : this._handlePrevious.bind(this)}),lib21.Container({
            width : 24.0}),lib26.IconButton({
            icon : new lib25.Icon(lib24.Icons.chevron_right),padding : lib18.EdgeInsets.zero,tooltip : localizations.nextPageTooltip,onPressed : (!this._rowCountApproximate && (this._firstRowIndex + widget.rowsPerPage >= this._rowCount)) ? null : this._handleNext.bind(this)}),lib21.Container({
            width : 14.0})));
        return lib34.Card({
            semanticContainer : false,child : lib15.Column({
                crossAxisAlignment : lib27.CrossAxisAlignment.stretch,children : new core.DartList.literal<lib3.Widget>(lib15.Semantics({
                    container : true,child : lib17.DefaultTextStyle({
                        style : this._selectedRowCount > 0 ? themeData.textTheme.subhead.copyWith({
                            color : themeData.accentColor}) : themeData.textTheme.title.copyWith({
                            fontWeight : FontWeight.w400}),child : lib31.IconTheme.merge({
                            data : new lib28.IconThemeData({
                                opacity : 0.54}),child : lib30.ButtonTheme.bar({
                                child : lib29.Ink({
                                    height : 64.0,color : this._selectedRowCount > 0 ? themeData.secondaryHeaderColor : null,child : lib15.Padding({
                                        padding : lib18.EdgeInsetsDirectional.only({
                                            start : startPadding,end : 14.0}),child : lib15.Row({
                                            mainAxisAlignment : lib27.MainAxisAlignment.end,children : headerWidgets})})})})})})}),lib33.SingleChildScrollView({
                    scrollDirection : lib32.Axis.horizontal,dragStartBehavior : widget.dragStartBehavior,child : lib6.DataTable({
                        key : this._tableKey,columns : widget.columns,sortColumnIndex : widget.sortColumnIndex,sortAscending : widget.sortAscending,onSelectAll : widget.onSelectAll,rows : this._getRows(this._firstRowIndex,widget.rowsPerPage)})}),lib17.DefaultTextStyle({
                    style : footerTextStyle,child : lib31.IconTheme.merge({
                        data : new lib28.IconThemeData({
                            opacity : 0.54}),child : lib21.Container({
                            height : 56.0,child : lib33.SingleChildScrollView({
                                dragStartBehavior : widget.dragStartBehavior,scrollDirection : lib32.Axis.horizontal,reverse : true,child : lib15.Row({
                                    children : footerWidgets})})})})}))})});
    }
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    PaginatedDataTableState() {
        this._rows = new core.DartMap.literal([
        ]);
        this._tableKey = lib3.GlobalKey();
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

    private static __$ : any;
    static get () : any { 
        return this.__$;
    }
    static set (__$value : any)  { 
        this.__$ = __$value;
    }

    private static __$header : lib3.Widget;
    static get header() : lib3.Widget { 
        return this.__$header;
    }
    static set header(__$value : lib3.Widget)  { 
        this.__$header = __$value;
    }

    private static __$actions : core.DartList<lib3.Widget>;
    static get actions() : core.DartList<lib3.Widget> { 
        return this.__$actions;
    }
    static set actions(__$value : core.DartList<lib3.Widget>)  { 
        this.__$actions = __$value;
    }

    private static __$columns : core.DartList<lib6.DataColumn>;
    static get columns() : core.DartList<lib6.DataColumn> { 
        return this.__$columns;
    }
    static set columns(__$value : core.DartList<lib6.DataColumn>)  { 
        this.__$columns = __$value;
    }

    private static __$sortColumnIndex : number;
    static get sortColumnIndex() : number { 
        return this.__$sortColumnIndex;
    }
    static set sortColumnIndex(__$value : number)  { 
        this.__$sortColumnIndex = __$value;
    }

    private static __$sortAscending : boolean;
    static get sortAscending() : boolean { 
        return this.__$sortAscending;
    }
    static set sortAscending(__$value : boolean)  { 
        this.__$sortAscending = __$value;
    }

    private static __$onSelectAll : <T>(value : boolean) => void;
    static get onSelectAll() : <T>(value : boolean) => void { 
        return this.__$onSelectAll;
    }
    static set onSelectAll(__$value : <T>(value : boolean) => void)  { 
        this.__$onSelectAll = __$value;
    }

    private static __$initialFirstRowIndex : number;
    static get initialFirstRowIndex() : number { 
        return this.__$initialFirstRowIndex;
    }
    static set initialFirstRowIndex(__$value : number)  { 
        this.__$initialFirstRowIndex = __$value;
    }

    private static __$onPageChanged : <T>(value : number) => void;
    static get onPageChanged() : <T>(value : number) => void { 
        return this.__$onPageChanged;
    }
    static set onPageChanged(__$value : <T>(value : number) => void)  { 
        this.__$onPageChanged = __$value;
    }

    private static __$rowsPerPage : number;
    static get rowsPerPage() : number { 
        return this.__$rowsPerPage;
    }
    static set rowsPerPage(__$value : number)  { 
        this.__$rowsPerPage = __$value;
    }

    private static __$defaultRowsPerPage : number;
    static get defaultRowsPerPage() : number { 
        if (this.__$defaultRowsPerPage===undefined) {
            this.__$defaultRowsPerPage = 10;
        }
        return this.__$defaultRowsPerPage;
    }
    static set defaultRowsPerPage(__$value : number)  { 
        this.__$defaultRowsPerPage = __$value;
    }

    private static __$availableRowsPerPage : core.DartList<number>;
    static get availableRowsPerPage() : core.DartList<number> { 
        return this.__$availableRowsPerPage;
    }
    static set availableRowsPerPage(__$value : core.DartList<number>)  { 
        this.__$availableRowsPerPage = __$value;
    }

    private static __$onRowsPerPageChanged : <T>(value : number) => void;
    static get onRowsPerPageChanged() : <T>(value : number) => void { 
        return this.__$onRowsPerPageChanged;
    }
    static set onRowsPerPageChanged(__$value : <T>(value : number) => void)  { 
        this.__$onRowsPerPageChanged = __$value;
    }

    private static __$source : lib7.DataTableSource;
    static get source() : lib7.DataTableSource { 
        return this.__$source;
    }
    static set source(__$value : lib7.DataTableSource)  { 
        this.__$source = __$value;
    }

    private static __$dragStartBehavior : lib5.DragStartBehavior;
    static get dragStartBehavior() : lib5.DragStartBehavior { 
        return this.__$dragStartBehavior;
    }
    static set dragStartBehavior(__$value : lib5.DragStartBehavior)  { 
        this.__$dragStartBehavior = __$value;
    }

}
