/** Library asset:datahedgehog_monitor/lib/lib/material/material_localizations.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./time";
import * as lib4 from "./typography";
import * as lib5 from "@dart2ts.packages/flutter/lib/src/widgets/framework";
import * as lib6 from "@dart2ts.packages/flutter/lib/src/widgets/localizations";
import * as lib7 from "@dart2ts.packages/flutter/lib/src/foundation/synchronous_future";

export namespace MaterialLocalizations {
    export type Constructors = 'MaterialLocalizations';
    export type Interface = Omit<MaterialLocalizations, Constructors>;
}
@DartClass
export class MaterialLocalizations {
    @AbstractProperty
    get openAppDrawerTooltip() : string{ throw 'abstract'}
    @AbstractProperty
    get backButtonTooltip() : string{ throw 'abstract'}
    @AbstractProperty
    get closeButtonTooltip() : string{ throw 'abstract'}
    @AbstractProperty
    get deleteButtonTooltip() : string{ throw 'abstract'}
    @AbstractProperty
    get nextMonthTooltip() : string{ throw 'abstract'}
    @AbstractProperty
    get previousMonthTooltip() : string{ throw 'abstract'}
    @AbstractProperty
    get nextPageTooltip() : string{ throw 'abstract'}
    @AbstractProperty
    get previousPageTooltip() : string{ throw 'abstract'}
    @AbstractProperty
    get showMenuTooltip() : string{ throw 'abstract'}
    @Abstract
    aboutListTileTitle(applicationName : string) : string{ throw 'abstract'}
    @AbstractProperty
    get licensesPageTitle() : string{ throw 'abstract'}
    @Abstract
    pageRowsInfoTitle(firstRow : number,lastRow : number,rowCount : number,rowCountIsApproximate : boolean) : string{ throw 'abstract'}
    @AbstractProperty
    get rowsPerPageTitle() : string{ throw 'abstract'}
    @Abstract
    tabLabel(_namedArguments? : {tabIndex? : number,tabCount? : number}) : string{ throw 'abstract'}
    @Abstract
    selectedRowCountTitle(selectedRowCount : number) : string{ throw 'abstract'}
    @AbstractProperty
    get cancelButtonLabel() : string{ throw 'abstract'}
    @AbstractProperty
    get closeButtonLabel() : string{ throw 'abstract'}
    @AbstractProperty
    get continueButtonLabel() : string{ throw 'abstract'}
    @AbstractProperty
    get copyButtonLabel() : string{ throw 'abstract'}
    @AbstractProperty
    get cutButtonLabel() : string{ throw 'abstract'}
    @AbstractProperty
    get okButtonLabel() : string{ throw 'abstract'}
    @AbstractProperty
    get pasteButtonLabel() : string{ throw 'abstract'}
    @AbstractProperty
    get selectAllButtonLabel() : string{ throw 'abstract'}
    @AbstractProperty
    get viewLicensesButtonLabel() : string{ throw 'abstract'}
    @AbstractProperty
    get anteMeridiemAbbreviation() : string{ throw 'abstract'}
    @AbstractProperty
    get postMeridiemAbbreviation() : string{ throw 'abstract'}
    @AbstractProperty
    get timePickerHourModeAnnouncement() : string{ throw 'abstract'}
    @AbstractProperty
    get timePickerMinuteModeAnnouncement() : string{ throw 'abstract'}
    @AbstractProperty
    get modalBarrierDismissLabel() : string{ throw 'abstract'}
    @AbstractProperty
    get drawerLabel() : string{ throw 'abstract'}
    @AbstractProperty
    get popupMenuLabel() : string{ throw 'abstract'}
    @AbstractProperty
    get dialogLabel() : string{ throw 'abstract'}
    @AbstractProperty
    get alertDialogLabel() : string{ throw 'abstract'}
    @AbstractProperty
    get searchFieldLabel() : string{ throw 'abstract'}
    @Abstract
    timeOfDayFormat(_namedArguments? : {alwaysUse24HourFormat? : boolean}) : lib3.TimeOfDayFormat{ throw 'abstract'}
    @AbstractProperty
    get scriptCategory() : lib4.ScriptCategory{ throw 'abstract'}
    @Abstract
    formatDecimal(number : number) : string{ throw 'abstract'}
    @Abstract
    formatHour(timeOfDay : lib3.TimeOfDay,_namedArguments? : {alwaysUse24HourFormat? : boolean}) : string{ throw 'abstract'}
    @Abstract
    formatMinute(timeOfDay : lib3.TimeOfDay) : string{ throw 'abstract'}
    @Abstract
    formatTimeOfDay(timeOfDay : lib3.TimeOfDay,_namedArguments? : {alwaysUse24HourFormat? : boolean}) : string{ throw 'abstract'}
    @Abstract
    formatYear(date : core.DartDateTime) : string{ throw 'abstract'}
    @Abstract
    formatMediumDate(date : core.DartDateTime) : string{ throw 'abstract'}
    @Abstract
    formatFullDate(date : core.DartDateTime) : string{ throw 'abstract'}
    @Abstract
    formatMonthYear(date : core.DartDateTime) : string{ throw 'abstract'}
    @AbstractProperty
    get narrowWeekdays() : core.DartList<string>{ throw 'abstract'}
    @AbstractProperty
    get firstDayOfWeekIndex() : number{ throw 'abstract'}
    @AbstractProperty
    get signedInLabel() : string{ throw 'abstract'}
    @AbstractProperty
    get hideAccountsLabel() : string{ throw 'abstract'}
    @AbstractProperty
    get showAccountsLabel() : string{ throw 'abstract'}
    @AbstractProperty
    get reorderItemToStart() : string{ throw 'abstract'}
    @AbstractProperty
    get reorderItemToEnd() : string{ throw 'abstract'}
    @AbstractProperty
    get reorderItemUp() : string{ throw 'abstract'}
    @AbstractProperty
    get reorderItemDown() : string{ throw 'abstract'}
    @AbstractProperty
    get reorderItemLeft() : string{ throw 'abstract'}
    @AbstractProperty
    get reorderItemRight() : string{ throw 'abstract'}
    get expandedIconTapHint() : string {
        return 'Collapse';
    }
    get collapsedIconTapHint() : string {
        return 'Expand';
    }
    @Abstract
    remainingTextFieldCharacterCount(remaining : number) : string{ throw 'abstract'}
    @AbstractProperty
    get refreshIndicatorSemanticLabel() : string{ throw 'abstract'}
    static of(context : lib5.BuildContext) : MaterialLocalizations {
        return lib6.Localizations.of(context,MaterialLocalizations);
    }
    constructor() {
    }
    @defaultConstructor
    MaterialLocalizations() {
    }
}

export namespace _MaterialLocalizationsDelegate {
    export type Constructors = lib6.LocalizationsDelegate.Constructors | '_MaterialLocalizationsDelegate';
    export type Interface = Omit<_MaterialLocalizationsDelegate, Constructors>;
}
@DartClass
export class _MaterialLocalizationsDelegate extends lib6.LocalizationsDelegate<MaterialLocalizations> {
    constructor() {
        // @ts-ignore
        super();
    }
    @defaultConstructor
    _MaterialLocalizationsDelegate() {
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    isSupported(locale : any) : boolean {
        return op(Op.EQUALS,locale.languageCode,'en');
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    load(locale : any) : async.Future<MaterialLocalizations> {
        return DefaultMaterialLocalizations.load(locale);
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    shouldReload(old : _MaterialLocalizationsDelegate) : boolean {
        return false;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    toString() : string {
        return 'DefaultMaterialLocalizations.delegate(en_US)';
    }
}

export namespace DefaultMaterialLocalizations {
    export type Constructors = 'DefaultMaterialLocalizations';
    export type Interface = Omit<DefaultMaterialLocalizations, Constructors>;
}
@DartClass
@Implements(MaterialLocalizations)
export class DefaultMaterialLocalizations implements MaterialLocalizations.Interface {
    constructor() {
    }
    @defaultConstructor
    DefaultMaterialLocalizations() {
    }
    private static __$_shortWeekdays : core.DartList<string>;
    static get _shortWeekdays() : core.DartList<string> { 
        if (this.__$_shortWeekdays===undefined) {
            this.__$_shortWeekdays = new core.DartList.literal<string>('Mon','Tue','Wed','Thu','Fri','Sat','Sun');
        }
        return this.__$_shortWeekdays;
    }

    private static __$_weekdays : core.DartList<string>;
    static get _weekdays() : core.DartList<string> { 
        if (this.__$_weekdays===undefined) {
            this.__$_weekdays = new core.DartList.literal<string>('Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday');
        }
        return this.__$_weekdays;
    }

    private static __$_narrowWeekdays : core.DartList<string>;
    static get _narrowWeekdays() : core.DartList<string> { 
        if (this.__$_narrowWeekdays===undefined) {
            this.__$_narrowWeekdays = new core.DartList.literal<string>('S','M','T','W','T','F','S');
        }
        return this.__$_narrowWeekdays;
    }

    private static __$_shortMonths : core.DartList<string>;
    static get _shortMonths() : core.DartList<string> { 
        if (this.__$_shortMonths===undefined) {
            this.__$_shortMonths = new core.DartList.literal<string>('Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec');
        }
        return this.__$_shortMonths;
    }

    private static __$_months : core.DartList<string>;
    static get _months() : core.DartList<string> { 
        if (this.__$_months===undefined) {
            this.__$_months = new core.DartList.literal<string>('January','February','March','April','May','June','July','August','September','October','November','December');
        }
        return this.__$_months;
    }

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    formatHour(timeOfDay : lib3.TimeOfDay,_namedArguments? : {alwaysUse24HourFormat? : boolean}) : string {
        let {alwaysUse24HourFormat} = Object.assign({
            "alwaysUse24HourFormat" : false}, _namedArguments );
        let format : lib3.TimeOfDayFormat = this.timeOfDayFormat({
            alwaysUse24HourFormat : alwaysUse24HourFormat});
        switch (format) {
            case lib3.TimeOfDayFormat.h_colon_mm_space_a:
                return this.formatDecimal(timeOfDay.hourOfPeriod == 0 ? 12 : timeOfDay.hourOfPeriod);
            case lib3.TimeOfDayFormat.HH_colon_mm:
                return this._formatTwoDigitZeroPad(timeOfDay.hour);
            default:
                throw core.AssertionError(`${this.runtimeType} does not support ${format}.`);
        }
    }
    _formatTwoDigitZeroPad(number : number) : string {
        /* TODO (AssertStatementImpl) : assert (0 <= number && number < 100); */;
        if (number < 10) return `0${number}`;
        return `${number}`;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    formatMinute(timeOfDay : lib3.TimeOfDay) : string {
        let minute : number = timeOfDay.minute;
        return minute < 10 ? `0${minute}` : new core.DartInt(minute).toString();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    formatYear(date : core.DartDateTime) : string {
        return new core.DartInt(date.year).toString();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    formatMediumDate(date : core.DartDateTime) : string {
        let day : string = DefaultMaterialLocalizations._shortWeekdays[date.weekday - core.DartDateTime.monday];
        let month : string = DefaultMaterialLocalizations._shortMonths[date.month - core.DartDateTime.january];
        return `${day}, ${month} ${date.day}`;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    formatFullDate(date : core.DartDateTime) : string {
        let month : string = DefaultMaterialLocalizations._months[date.month - core.DartDateTime.january];
        return `${DefaultMaterialLocalizations._weekdays[date.weekday - core.DartDateTime.monday]}, ${month} ${date.day}, ${date.year}`;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    formatMonthYear(date : core.DartDateTime) : string {
        let year : string = this.formatYear(date);
        let month : string = DefaultMaterialLocalizations._months[date.month - core.DartDateTime.january];
        return `${month} ${year}`;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get narrowWeekdays() : core.DartList<string> {
        return DefaultMaterialLocalizations._narrowWeekdays;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get firstDayOfWeekIndex() : number {
        return 0;
    }
    _formatDayPeriod(timeOfDay : lib3.TimeOfDay) : string {
        switch (timeOfDay.period) {
            case lib3.DayPeriod.am:
                return this.anteMeridiemAbbreviation;
            case lib3.DayPeriod.pm:
                return this.postMeridiemAbbreviation;
        }
        return null;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    formatDecimal(number : number) : string {
        if (number > -1000 && number < 1000) return new core.DartInt(number).toString();
        let digits : string = new core.DartInt(new core.DartInt(number).abs()).toString();
        let result : core.DartStringBuffer = core.DartStringBuffer(number < 0 ? '-' : '');
        let maxDigitIndex : number = new core.DartString(digits).length - 1;
        for(let i : number = 0; i <= maxDigitIndex; i += 1){
            result.write(digits[i]);
            if (i < maxDigitIndex && (maxDigitIndex - i) % 3 == 0) result.write(',');
        }
        return result.toString();
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    formatTimeOfDay(timeOfDay : lib3.TimeOfDay,_namedArguments? : {alwaysUse24HourFormat? : boolean}) : string {
        let {alwaysUse24HourFormat} = Object.assign({
            "alwaysUse24HourFormat" : false}, _namedArguments );
        let buffer : core.DartStringBuffer = core.DartStringBuffer();
        ((_) : core.DartStringBuffer =>  {
            {
                _.write(this.formatHour(timeOfDay,{
                    alwaysUse24HourFormat : alwaysUse24HourFormat}));
                _.write(':');
                _.write(this.formatMinute(timeOfDay));
                return _;
            }
        })(buffer);
        if (alwaysUse24HourFormat) {
            return `${buffer}`;
        }
        ((_) : core.DartStringBuffer =>  {
            {
                _.write(' ');
                _.write(this._formatDayPeriod(timeOfDay));
                return _;
            }
        })(buffer);
        return `${buffer}`;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get openAppDrawerTooltip() : string {
        return 'Open navigation menu';
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get backButtonTooltip() : string {
        return 'Back';
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get closeButtonTooltip() : string {
        return 'Close';
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get deleteButtonTooltip() : string {
        return 'Delete';
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get nextMonthTooltip() : string {
        return 'Next month';
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get previousMonthTooltip() : string {
        return 'Previous month';
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get nextPageTooltip() : string {
        return 'Next page';
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get previousPageTooltip() : string {
        return 'Previous page';
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get showMenuTooltip() : string {
        return 'Show menu';
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get drawerLabel() : string {
        return 'Navigation menu';
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get popupMenuLabel() : string {
        return 'Popup menu';
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get dialogLabel() : string {
        return 'Dialog';
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get alertDialogLabel() : string {
        return 'Alert';
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get searchFieldLabel() : string {
        return 'Search';
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    aboutListTileTitle(applicationName : string) : string {
        return `About ${applicationName}`;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get licensesPageTitle() : string {
        return 'Licenses';
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    pageRowsInfoTitle(firstRow : number,lastRow : number,rowCount : number,rowCountIsApproximate : boolean) : string {
        return rowCountIsApproximate ? `${firstRow}–${lastRow} of about ${rowCount}` : `${firstRow}–${lastRow} of ${rowCount}`;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get rowsPerPageTitle() : string {
        return 'Rows per page:';
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    tabLabel(_namedArguments? : {tabIndex? : number,tabCount? : number}) : string {
        let {tabIndex,tabCount} = Object.assign({
        }, _namedArguments );
        /* TODO (AssertStatementImpl) : assert (tabIndex >= 1); */;
        /* TODO (AssertStatementImpl) : assert (tabCount >= 1); */;
        return `Tab ${tabIndex} of ${tabCount}`;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    selectedRowCountTitle(selectedRowCount : number) : string {
        switch (selectedRowCount) {
            case 0:
                return 'No items selected';
            case 1:
                return '1 item selected';
            default:
                return `${selectedRowCount} items selected`;
        }
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get cancelButtonLabel() : string {
        return 'CANCEL';
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get closeButtonLabel() : string {
        return 'CLOSE';
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get continueButtonLabel() : string {
        return 'CONTINUE';
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get copyButtonLabel() : string {
        return 'COPY';
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get cutButtonLabel() : string {
        return 'CUT';
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get okButtonLabel() : string {
        return 'OK';
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get pasteButtonLabel() : string {
        return 'PASTE';
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get selectAllButtonLabel() : string {
        return 'SELECT ALL';
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get viewLicensesButtonLabel() : string {
        return 'VIEW LICENSES';
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get anteMeridiemAbbreviation() : string {
        return 'AM';
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get postMeridiemAbbreviation() : string {
        return 'PM';
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get timePickerHourModeAnnouncement() : string {
        return 'Select hours';
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get timePickerMinuteModeAnnouncement() : string {
        return 'Select minutes';
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get modalBarrierDismissLabel() : string {
        return 'Dismiss';
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get scriptCategory() : lib4.ScriptCategory {
        return lib4.ScriptCategory.englishLike;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    timeOfDayFormat(_namedArguments? : {alwaysUse24HourFormat? : boolean}) : lib3.TimeOfDayFormat {
        let {alwaysUse24HourFormat} = Object.assign({
            "alwaysUse24HourFormat" : false}, _namedArguments );
        return alwaysUse24HourFormat ? lib3.TimeOfDayFormat.HH_colon_mm : lib3.TimeOfDayFormat.h_colon_mm_space_a;
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get signedInLabel() : string {
        return 'Signed in';
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get hideAccountsLabel() : string {
        return 'Hide accounts';
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get showAccountsLabel() : string {
        return 'Show accounts';
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get reorderItemUp() : string {
        return 'Move up';
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get reorderItemDown() : string {
        return 'Move down';
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get reorderItemLeft() : string {
        return 'Move left';
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get reorderItemRight() : string {
        return 'Move right';
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get reorderItemToEnd() : string {
        return 'Move to the end';
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get reorderItemToStart() : string {
        return 'Move to the start';
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get expandedIconTapHint() : string {
        return 'Collapse';
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get collapsedIconTapHint() : string {
        return 'Expand';
    }
    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    get refreshIndicatorSemanticLabel() : string {
        return 'Refresh';
    }
    static load(locale : any) : async.Future<MaterialLocalizations> {
        return lib7.SynchronousFuture(new DefaultMaterialLocalizations());
    }
    private static __$delegate : lib6.LocalizationsDelegate<MaterialLocalizations>;
    static get delegate() : lib6.LocalizationsDelegate<MaterialLocalizations> { 
        if (this.__$delegate===undefined) {
            this.__$delegate = _MaterialLocalizationsDelegate();
        }
        return this.__$delegate;
    }

    @DartMethodAnnotation({
        library : 'dart:core',type : 'override',value : {
            arguments : [],namedArguments : {
            }}})
    remainingTextFieldCharacterCount(remaining : number) : string {
        switch (remaining) {
            case 0:
                return 'No characters remaining';
            case 1:
                return '1 character remaining';
            default:
                return `${remaining} characters remaining`;
        }
    }
}

export class properties {
}
