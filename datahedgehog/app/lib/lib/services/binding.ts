/** Library asset:datahedgehog_monitor/lib/lib/services/binding.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as lib3 from "./platform_messages";
import * as lib4 from "@dart2ts.packages/flutter/lib/src/foundation/licenses";
import * as lib5 from "./asset_bundle";
import * as lib6 from "@dart2ts.packages/flutter/lib/src/foundation/isolates";

export var BindingBase : () => any = () : any =>  {
    var initInstances : () => any = () : any =>  {
        super.initInstances();
        _instance = this;
        ((_) : any =>  {
            {
                _.onPlatformMessage = lib3.BinaryMessages.handlePlatformMessage.bind(lib3.BinaryMessages);
                return _;
            }
        })(window);
        initLicenses();
    };
    static;
    var instance : () => any = () : any =>  {
        return _instance;
    };
    static;
    let _instance : any;
    var initLicenses : () => any = () : any =>  {
        lib4.LicenseRegistry.addLicense(_addLicenses);
    };
    var _addLicenses : () => async.DartStream<lib4.LicenseEntry> = () : async.DartStream<lib4.LicenseEntry> => async.stream<lib4.LicenseEntry>(()=>(async function*()  {
        let rawLicenses : async.DartCompleter<string> = async.DartCompleter();
        async.DartTimer.run(() => new async.Future.fromPromise(( async () : Promise<any> =>  {
            rawLicenses.complete(lib5.properties.rootBundle.loadString('LICENSE',{
                cache : false}));
        })()));
        await rawLicenses.future;
        let parsedLicenses : async.DartCompleter<core.DartList<lib4.LicenseEntry>> = async.DartCompleter();
        async.DartTimer.run(() => new async.Future.fromPromise(( async () : Promise<any> =>  {
            parsedLicenses.complete(lib6.compute(_parseLicenses,await rawLicenses.future,{
                debugLabel : 'parseLicenses'}));
        })()));
        await parsedLicenses.future;
        yield* op(Op.LT,async.DartStream<T>,lib4.LicenseEntry);
        op(Op.GT,,.fromIterable(await parsedLicenses.future));
    }).call(this));
    static;
    var _parseLicenses : (rawLicenses : string) => core.DartList<lib4.LicenseEntry> = (rawLicenses : string) : core.DartList<lib4.LicenseEntry> =>  {
        let _licenseSeparator : string = '\n' + (op(Op.TIMES,'-',80)) + '\n';
        let result : core.DartList<lib4.LicenseEntry> = new core.DartList.literal<lib4.LicenseEntry>();
        let licenses : core.DartList<string> = new core.DartString(rawLicenses).split(_licenseSeparator);
        for(let license of licenses) {
            let split : number = new core.DartString(license).indexOf('\n\n');
            if (split >= 0) {
                result.add(lib4.LicenseEntryWithLineBreaks(new core.DartString(new core.DartString(license).substring(0,split)).split('\n'),new core.DartString(license).substring(split + 2)));
            }else {
                result.add(lib4.LicenseEntryWithLineBreaks(new core.DartList.literal<string>(),license));
            }
        }
        return result;
    };
    var initServiceExtensions : () => any = () : any =>  {
        super.initServiceExtensions();
        /* TODO (AssertStatementImpl) : assert (() {registerStringServiceExtension(name: 'evict', getter: () async => '', setter: (String value) async {evict(value);}); return true;}()); */;
    };
    var evict : (asset : string) => any = (asset : string) : any =>  {
        lib5.properties.rootBundle.evict(asset);
    };
};
export class properties {
    private static __$ServicesBinding : any;
    static get ServicesBinding() : any { 
        return this.__$ServicesBinding;
    }
    static set ServicesBinding(__$value : any)  { 
        this.__$ServicesBinding = __$value;
    }

}
