/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/plugin/result_merger.dart */
import {is,isNot,equals} from "@dart2ts/dart/_common";
import {defaultConstructor,namedConstructor,namedFactory,defaultFactory,DartClass,Implements,With,op,Op,OperatorMethods,DartClassAnnotation,DartMethodAnnotation,DartPropertyAnnotation,Abstract,AbstractProperty,int,bool,double,Omit} from "@dart2ts/dart/utils";
import * as _common from "@dart2ts/dart/_common";
import * as core from "@dart2ts/dart/core";
import * as async from "@dart2ts/dart/async";
import * as collection from "@dart2ts/dart/core";

export namespace ResultMerger {
    export type Constructors = 'ResultMerger';
    export type Interface = Omit<ResultMerger, Constructors>;
}
@DartClass
export class ResultMerger {
    mergeAnalysisErrorFixes(partialResultList : core.DartList<core.DartList<any>>) : core.DartList<any> {
        var computeKey : (error : any) => string = (error : any) : string =>  {
            let buffer : core.DartStringBuffer = new core.DartStringBuffer();
            buffer.write(error.location.offset);
            buffer.write(';');
            buffer.write(error.code);
            buffer.write(';');
            buffer.write(error.message);
            buffer.write(';');
            buffer.write(error.correction);
            return buffer.toString();
        };
        let count : number = partialResultList.length;
        if (count == 0) {
            return new core.DartList.literal<any>();
        }else if (count == 1) {
            return partialResultList[0];
        }
        let fixesMap : core.DartMap<string,any> = new core.DartMap.literal([
        ]);
        for(let fix of partialResultList[0]) {
            fixesMap.set(computeKey(fix.error),fix);
        }
        for(let i : number = 1; i < count; i++){
            for(let fix of partialResultList[i]) {
                let key : string = computeKey(fix.error);
                let mergedFix : any = fixesMap.get(key);
                if (op(Op.EQUALS,mergedFix,null)) {
                    fixesMap.set(key,fix);
                }else {
                    let mergedChanges : core.DartList<any> = mergedFix.fixes.toList();
                    mergedChanges.addAll(fix.fixes);
                    let copiedFix : any = new bare.createInstance(any,null,mergedFix.error,{
                        fixes : mergedChanges});
                    fixesMap.set(key,copiedFix);
                }
            }
        }
        let mergedFixes : core.DartList<any> = fixesMap.values.toList();
        for(let fixes of mergedFixes) {
            fixes.fixes.sort((first : any,second : any) =>  {
                return op(Op.MINUS,first.priority,second.priority);
            });
        }
        return mergedFixes;
    }
    mergeAnalysisErrors(partialResultList : core.DartList<core.DartList<any>>) : core.DartList<any> {
        let count : number = partialResultList.length;
        if (count == 0) {
            return new core.DartList.literal<any>();
        }else if (count == 1) {
            return partialResultList[0];
        }
        let mergedErrors : core.DartList<any> = new core.DartList.literal<any>();
        for(let partialResults of partialResultList) {
            mergedErrors.addAll(partialResults);
        }
        return mergedErrors;
    }
    mergeCompletionSuggestions(partialResultList : core.DartList<core.DartList<any>>) : core.DartList<any> {
        let count : number = partialResultList.length;
        if (count == 0) {
            return new core.DartList.literal<any>();
        }else if (count == 1) {
            return partialResultList[0];
        }
        let mergedSuggestions : core.DartList<any> = new core.DartList.literal<any>();
        for(let partialResults of partialResultList) {
            mergedSuggestions.addAll(partialResults);
        }
        return mergedSuggestions;
    }
    mergeFoldingRegions(partialResultList : core.DartList<core.DartList<any>>) : core.DartList<any> {
        let count : number = partialResultList.length;
        if (count == 0) {
            return new core.DartList.literal<any>();
        }else if (count == 1) {
            return partialResultList[0];
        }
        let mergedRegions : core.DartList<any> = partialResultList[0].toList();
        var isNonOverlapping : (newRegion : any) => boolean = (newRegion : any) : boolean =>  {
            let newStart : number = newRegion.offset;
            let newEnd : number = newStart + newRegion.length;
            for(let existingRegion of mergedRegions) {
                let existingStart : number = existingRegion.offset;
                let existingEnd : number = existingStart + existingRegion.length;
                if (this.overlaps(newStart,newEnd,existingStart,existingEnd,{
                    allowNesting : true})) {
                    return false;
                }
            }
            return true;
        };
        for(let i : number = 1; i < count; i++){
            let partialResults : core.DartList<any> = partialResultList[i];
            for(let region of partialResults) {
                if (isNonOverlapping(region)) {
                    mergedRegions.add(region);
                }
            }
        }
        return mergedRegions;
    }
    mergeHighlightRegions(partialResultList : core.DartList<core.DartList<any>>) : core.DartList<any> {
        let count : number = partialResultList.length;
        if (count == 0) {
            return new core.DartList.literal<any>();
        }else if (count == 1) {
            return partialResultList[0];
        }
        let mergedRegions : core.DartList<any> = new core.DartList.literal<any>();
        for(let partialResults of partialResultList) {
            mergedRegions.addAll(partialResults);
        }
        return mergedRegions;
    }
    mergeNavigation(partialResultList : core.DartList<any>) : any {
        let count : number = partialResultList.length;
        if (count == 0) {
            return null;
        }else if (count == 1) {
            return partialResultList[0];
        }
        let base : any = partialResultList[0];
        let file : string = base.file;
        let mergedRegions : core.DartList<any> = base.regions.toList();
        let mergedTargets : core.DartList<any> = base.targets.toList();
        let mergedFiles : core.DartList<string> = base.files.toList();
        var isNonOverlapping : (newRegion : any) => boolean = (newRegion : any) : boolean =>  {
            let newStart : number = newRegion.offset;
            let newEnd : number = newStart + newRegion.length;
            for(let mergedRegion of mergedRegions) {
                let mergedStart : number = mergedRegion.offset;
                let mergedEnd : number = mergedStart + mergedRegion.length;
                if (this.overlaps(newStart,newEnd,mergedStart,mergedEnd)) {
                    return false;
                }
            }
            return true;
        };
        var matchingRegion : (newRegion : any) => number = (newRegion : any) : number =>  {
            let newOffset : number = newRegion.offset;
            let newLength : number = newRegion.length;
            for(let i : number = 0; i < mergedRegions.length; i++){
                let mergedRegion : any = mergedRegions[i];
                if (newOffset == mergedRegion.offset && newLength == mergedRegion.length) {
                    return i;
                }
            }
            return -1;
        };
        for(let i : number = 1; i < count; i++){
            let result : any = partialResultList[i];
            let regions : core.DartList<any> = result.regions;
            let targets : core.DartList<any> = result.targets;
            let files : core.DartList<string> = result.files;
            let fileMap : core.DartMap<number,number> = new core.DartMap.literal([
            ]);
            for(let j : number = 0; j < files.length; j++){
                let file : string = files[j];
                let index : number = mergedFiles.indexOf(file);
                if (index < 0) {
                    index = mergedFiles.length;
                    mergedFiles.add(file);
                }
                fileMap.set(j,index);
            }
            let targetMap : core.DartMap<number,number> = new core.DartMap.literal([
            ]);
            for(let j : number = 0; j < targets.length; j++){
                let target : any = targets[j];
                let newIndex : number = fileMap.get(target.fileIndex);
                if (target.fileIndex != newIndex) {
                    target = new bare.createInstance(any,null,target.kind,newIndex,target.offset,target.length,target.startLine,target.startColumn);
                }
                let index : number = mergedTargets.indexOf(target);
                if (index < 0) {
                    index = mergedTargets.length;
                    mergedTargets.add(target);
                }
                targetMap.set(j,index);
            }
            for(let j : number = 0; j < regions.length; j++){
                let region : any = regions[j];
                let newTargets : core.DartList<number> = region.targets.map((oldTarget : number) =>  {
                    return targetMap.get(oldTarget);
                }).toList();
                if (region.targets != newTargets) {
                    region = new bare.createInstance(any,null,region.offset,region.length,newTargets);
                }
                let index : number = matchingRegion(region);
                if (index >= 0) {
                    let mergedRegion : any = mergedRegions[index];
                    let mergedTargets : core.DartList<number> = mergedRegion.targets;
                    let added : boolean = false;
                    for(let target of region.targets) {
                        if (!mergedTargets.contains(target)) {
                            if (added) {
                                mergedTargets.add(target);
                            }else {
                                mergedTargets = mergedTargets.toList();
                                mergedTargets.add(target);
                                mergedRegion = new bare.createInstance(any,null,mergedRegion.offset,mergedRegion.length,mergedTargets);
                                mergedRegions[index] = mergedRegion;
                                added = true;
                            }
                        }
                    }
                    if (added) {
                        mergedTargets.sort();
                    }
                }else if (isNonOverlapping(region)) {
                    mergedRegions.add(region);
                }
            }
        }
        return new bare.createInstance(any,null,file,mergedRegions,mergedTargets,mergedFiles);
    }
    mergeOccurrences(partialResultList : core.DartList<core.DartList<any>>) : core.DartList<any> {
        let count : number = partialResultList.length;
        if (count == 0) {
            return new core.DartList.literal<any>();
        }else if (count == 1) {
            return partialResultList[0];
        }
        let elementMap : core.DartMap<any,core.DartSet<number>> = new core.DartMap.literal([
        ]);
        for(let partialResults of partialResultList) {
            for(let occurances of partialResults) {
                let element : any = occurances.element;
                let offsets : core.DartSet<number> = elementMap.putIfAbsent(element,() =>  {
                    return new core.DartHashSet<number>();
                });
                offsets.addAll(occurances.offsets);
            }
        }
        let mergedOccurrences : core.DartList<any> = new core.DartList.literal<any>();
        elementMap.forEach((element : any,offsets : core.DartSet<number>) =>  {
            let sortedOffsets : core.DartList<number> = offsets.toList();
            sortedOffsets.sort();
            mergedOccurrences.add(new bare.createInstance(any,null,element,sortedOffsets,element.name.length));
        });
        return mergedOccurrences;
    }
    mergeOutline(partialResultList : core.DartList<core.DartList<any>>) : core.DartList<any> {
        var computeKey : (element : any) => string = (element : any) : string =>  {
            let location : any = element.location;
            if (op(Op.EQUALS,location,null)) {
                throw new core.StateError('Elements in an outline are expected to have a location');
            }
            let buffer : core.DartStringBuffer = new core.DartStringBuffer();
            buffer.write(location.offset);
            buffer.write(';');
            buffer.write(element.kind.name);
            return buffer.toString();
        };
        let count : number = partialResultList.length;
        if (count == 0) {
            return new core.DartList.literal<any>();
        }else if (count == 1) {
            return partialResultList[0];
        }
        let mergedOutlines : core.DartList<any> = partialResultList[0].toList();
        let outlineMap : core.DartMap<string,any> = new core.DartMap.literal([
        ]);
        let copyMap : core.DartMap<any,any> = new core.DartMap.literal([
        ]);
        var addToMap : (outline : any) => void = (outline : any) : void =>  {
            let key : string = computeKey(outline.element);
            if (outlineMap.containsKey(key)) {
                throw new core.StateError('Inconsistent outlines');
            }
            outlineMap.set(key,outline);
            ((_30_)=>(!!_30_)?_30_.forEach(addToMap):null)(outline.children);
        };
        var mergeChildren : (mergedOutline : any,newOutline : any) => void = (mergedOutline : any,newOutline : any) : void =>  {
            for(let newChild of newOutline.children) {
                let mergedChild : any = outlineMap.get(computeKey(newChild.element));
                if (op(Op.EQUALS,mergedChild,null)) {
                    let copiedOutline : any = copyMap.putIfAbsent(mergedOutline,() =>  {
                        return new bare.createInstance(any,null,mergedOutline.element,mergedOutline.offset,mergedOutline.length,{
                            children : mergedOutline.children.toList()});
                    });
                    copiedOutline.children.add(newChild);
                    addToMap(newChild);
                }else {
                    mergeChildren(mergedChild,newChild);
                }
            }
        };
        mergedOutlines.forEach(addToMap);
        for(let i : number = 1; i < count; i++){
            for(let outline of partialResultList[i]) {
                let mergedOutline : any = outlineMap.get(computeKey(outline.element));
                if (op(Op.EQUALS,mergedOutline,null)) {
                    mergedOutlines.add(outline);
                    addToMap(outline);
                }else {
                    mergeChildren(mergedOutline,outline);
                }
            }
        }
        var traverse : (outline : any) => any = (outline : any) : any =>  {
            let copiedOutline : any = copyMap.get(outline);
            let isCopied : boolean = copiedOutline != null;
            copiedOutline = ( copiedOutline ) || ( outline );
            let currentChildren : core.DartList<any> = copiedOutline.children;
            if (currentChildren == null || currentChildren.isEmpty) {
                return outline;
            }
            let updatedChildren : core.DartList<any> = currentChildren.map((child : any) =>  {
                return traverse(child);
            }).toList();
            if (currentChildren != updatedChildren) {
                if (!isCopied) {
                    return new bare.createInstance(any,null,copiedOutline.element,copiedOutline.offset,copiedOutline.length,{
                        children : updatedChildren});
                }
                copiedOutline.children = updatedChildren;
                return copiedOutline;
            }
            return outline;
        };
        for(let i : number = 0; i < mergedOutlines.length; i++){
            mergedOutlines[i] = traverse(mergedOutlines[i]);
        }
        return mergedOutlines;
    }
    mergePrioritizedSourceChanges(partialResultList : core.DartList<core.DartList<any>>) : core.DartList<any> {
        let count : number = partialResultList.length;
        if (count == 0) {
            return new core.DartList.literal<any>();
        }else if (count == 1) {
            return partialResultList[0];
        }
        let mergedChanges : core.DartList<any> = new core.DartList.literal<any>();
        for(let partialResults of partialResultList) {
            mergedChanges.addAll(partialResults);
        }
        mergedChanges.sort((first : any,second : any) =>  {
            return op(Op.MINUS,first.priority,second.priority);
        });
        return mergedChanges;
    }
    mergeRefactoringFeedbacks(feedbacks : core.DartList<any>) : any {
        let count : number = feedbacks.length;
        if (count == 0) {
            return null;
        }else if (count == 1) {
            return feedbacks[0];
        }
        let first : any = feedbacks[0];
        if (is(first, any)) {
            return first;
        }else if (is(first, any)) {
            return first;
        }else if (is(first, any)) {
            let coveringExpressionOffsets : core.DartList<number> = op(Op.EQUALS,first.coveringExpressionOffsets,null) ? new core.DartList.literal<number>() : first.coveringExpressionOffsets.toList();
            let coveringExpressionLengths : core.DartList<number> = op(Op.EQUALS,first.coveringExpressionLengths,null) ? new core.DartList.literal<number>() : first.coveringExpressionLengths.toList();
            let names : core.DartList<string> = first.names.toList();
            let offsets : core.DartList<number> = first.offsets.toList();
            let lengths : core.DartList<number> = first.lengths.toList();
            for(let i : number = 1; i < count; i++){
                let feedback : any = feedbacks[i];
                if (feedback.coveringExpressionOffsets != null) {
                    coveringExpressionOffsets.addAll(feedback.coveringExpressionOffsets);
                }
                if (feedback.coveringExpressionLengths != null) {
                    coveringExpressionLengths.addAll(feedback.coveringExpressionLengths);
                }
                for(let name of feedback.names) {
                    if (!names.contains(name)) {
                        names.add(name);
                    }
                }
                offsets.addAll(feedback.offsets);
                lengths.addAll(feedback.lengths);
            }
            return new bare.createInstance(any,null,names.toList(),offsets,lengths,{
                coveringExpressionOffsets : (coveringExpressionOffsets.isEmpty ? null : coveringExpressionOffsets),coveringExpressionLengths : (coveringExpressionLengths.isEmpty ? null : coveringExpressionLengths)});
        }else if (is(first, any)) {
            let offset : number = first.offset;
            let length : number = first.length;
            let returnType : string = first.returnType;
            let names : core.DartList<string> = first.names.toList();
            let canCreateGetter : boolean = first.canCreateGetter;
            let parameters : core.DartList<any> = first.parameters;
            let offsets : core.DartList<number> = first.offsets.toList();
            let lengths : core.DartList<number> = first.lengths.toList();
            for(let i : number = 1; i < count; i++){
                let feedback : any = feedbacks[i];
                if (new core.DartString(returnType).isEmpty) {
                    returnType = feedback.returnType;
                }
                for(let name of feedback.names) {
                    if (!names.contains(name)) {
                        names.add(name);
                    }
                }
                canCreateGetter = canCreateGetter && feedback.canCreateGetter;
                offsets.addAll(feedback.offsets);
                lengths.addAll(feedback.lengths);
            }
            return new bare.createInstance(any,null,offset,length,returnType,names.toList(),canCreateGetter,parameters,offsets,lengths);
        }else if (is(first, any)) {
            let occurrences : number = first.occurrences;
            for(let i : number = 1; i < count; i++){
                occurrences += (feedbacks[i] as any).occurrences;
            }
            return new bare.createInstance(any,null,first.name,occurrences);
        }else if (is(first, any)) {
            return first;
        }else if (is(first, any)) {
            return first;
        }else if (is(first, any)) {
            return first;
        }
        throw new core.StateError(`Unsupported class of refactoring feedback: ${first.runtimeType}`);
    }
    mergeRefactoringKinds(partialResultList : core.DartList<core.DartList<any>>) : core.DartList<any> {
        let count : number = partialResultList.length;
        if (count == 0) {
            return new core.DartList.literal<any>();
        }else if (count == 1) {
            return partialResultList[0];
        }
        let mergedKinds : core.DartSet<any> = new core.DartHashSet<any>();
        for(let partialResults of partialResultList) {
            mergedKinds.addAll(partialResults);
        }
        return mergedKinds.toList();
    }
    mergeRefactorings(partialResultList : core.DartList<any>) : any {
        var mergeChanges : (changes : core.DartList<any>) => any = (changes : core.DartList<any>) : any =>  {
            let count : number = changes.length;
            if (count == 0) {
                return null;
            }else if (count == 1) {
                return changes[0];
            }
            let first : any = changes[0];
            let message : string = first.message;
            let editMap : core.DartMap<string,any> = new core.DartMap.literal([
            ]);
            for(let edit of first.edits) {
                editMap.set(edit.file,edit);
            }
            let linkedEditGroups : core.DartList<any> = first.linkedEditGroups.toList();
            let selection : any = first.selection;
            for(let i : number = 1; i < count; i++){
                let change : any = changes[i];
                for(let edit of change.edits) {
                    let mergedEdit : any = editMap.get(edit.file);
                    if (op(Op.EQUALS,mergedEdit,null)) {
                        editMap.set(edit.file,edit);
                    }else {
                        let edits : core.DartList<any> = mergedEdit.edits.toList();
                        edits.addAll(edit.edits);
                        editMap.set(edit.file,new bare.createInstance(any,null,mergedEdit.file,mergedEdit.fileStamp,{
                            edits : edits}));
                    }
                }
                linkedEditGroups.addAll(change.linkedEditGroups);
                message = ( message ) || ( change.message );
                selection = ( selection ) || ( change.selection );
            }
            return new bare.createInstance(any,null,message,{
                edits : editMap.values.toList(),linkedEditGroups : linkedEditGroups,selection : selection});
        };
        let count : number = partialResultList.length;
        if (count == 0) {
            return null;
        }else if (count == 1) {
            return partialResultList[0];
        }
        let result : any = partialResultList[0];
        let initialProblems : core.DartList<any> = result.initialProblems.toList();
        let optionsProblems : core.DartList<any> = result.optionsProblems.toList();
        let finalProblems : core.DartList<any> = result.finalProblems.toList();
        let feedbacks : core.DartList<any> = new core.DartList.literal<any>();
        if (result.feedback != null) {
            feedbacks.add(result.feedback);
        }
        let changes : core.DartList<any> = new core.DartList.literal<any>();
        if (result.change != null) {
            changes.add(result.change);
        }
        let potentialEdits : core.DartList<string> = result.potentialEdits.toList();
        for(let i : number = 1; i < count; i++){
            let result : any = partialResultList[1];
            initialProblems.addAll(result.initialProblems);
            optionsProblems.addAll(result.optionsProblems);
            finalProblems.addAll(result.finalProblems);
            if (result.feedback != null) {
                feedbacks.add(result.feedback);
            }
            if (result.change != null) {
                changes.add(result.change);
            }
            potentialEdits.addAll(result.potentialEdits);
        }
        return new bare.createInstance(any,null,initialProblems,optionsProblems,finalProblems,{
            feedback : this.mergeRefactoringFeedbacks(feedbacks),change : mergeChanges(changes),potentialEdits : potentialEdits});
    }
    mergeSourceChanges(partialResultList : core.DartList<core.DartList<any>>) : core.DartList<any> {
        let count : number = partialResultList.length;
        if (count == 0) {
            return new core.DartList.literal<any>();
        }else if (count == 1) {
            return partialResultList[0];
        }
        let mergedChanges : core.DartList<any> = new core.DartList.literal<any>();
        for(let partialResults of partialResultList) {
            mergedChanges.addAll(partialResults);
        }
        return mergedChanges;
    }
    @DartMethodAnnotation({
        library : 'asset:meta/lib/meta.dart',type : 'visibleForTesting',value : {
            arguments : [],namedArguments : {
            }}})
    overlaps(leftStart : number,leftEnd : number,rightStart : number,rightEnd : number,_namedArguments? : {allowNesting? : boolean}) : boolean {
        let {allowNesting} = Object.assign({
            "allowNesting" : false}, _namedArguments );
        if (leftEnd < rightStart || leftStart > rightEnd) {
            return false;
        }
        if (!allowNesting) {
            return true;
        }
        return !((leftStart <= rightStart && rightEnd <= leftEnd) || (rightStart <= leftStart && leftEnd <= rightEnd));
    }
    constructor() {
    }
    @defaultConstructor
    ResultMerger() {
    }
}

export class properties {
}
