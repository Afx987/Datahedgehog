/** Library asset:datahedgehog_monitor/lib/lib/material/data_table_source.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "@dart2ts.packages/flutter/lib/src/foundation/change_notifier";
import * as lib4 from "./data_table";

export namespace DataTableSource {
    export type Constructors = lib3.ChangeNotifier.Constructors | 'DataTableSource';
    export type Interface = Omit<DataTableSource, Constructors>;
}
@DartClass
export class DataTableSource extends lib3.ChangeNotifier {
    @Abstract
    getRow(index : number) : lib4.DataRow{ throw 'abstract'}
    @AbstractProperty
    get rowCount() : number{ throw 'abstract'}
    @AbstractProperty
    get isRowCountApproximate() : boolean{ throw 'abstract'}
    @AbstractProperty
    get selectedRowCount() : number{ throw 'abstract'}
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    DataTableSource() {
    }
}

export class properties {
}
