"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/** Library asset:datahedgehog_monitor/lib/lib/analysis_server/lib/src/plugin/result_merger.dart */
var _common_1 = require("@dart2ts/dart/_common");
var utils_1 = require("@dart2ts/dart/utils");
var core = require("@dart2ts/dart/core");
var ResultMerger = /** @class */ (function () {
    function ResultMerger() {
    }
    ResultMerger.prototype.mergeAnalysisErrorFixes = function (partialResultList) {
        var computeKey = function (error) {
            var buffer = new core.DartStringBuffer();
            buffer.write(error.location.offset);
            buffer.write(';');
            buffer.write(error.code);
            buffer.write(';');
            buffer.write(error.message);
            buffer.write(';');
            buffer.write(error.correction);
            return buffer.toString();
        };
        var count = partialResultList.length;
        if (count == 0) {
            return new core.DartList.literal();
        }
        else if (count == 1) {
            return partialResultList[0];
        }
        var fixesMap = new core.DartMap.literal([]);
        for (var _i = 0, _a = partialResultList[0]; _i < _a.length; _i++) {
            var fix = _a[_i];
            fixesMap.set(computeKey(fix.error), fix);
        }
        for (var i = 1; i < count; i++) {
            for (var _b = 0, _c = partialResultList[i]; _b < _c.length; _b++) {
                var fix = _c[_b];
                var key = computeKey(fix.error);
                var mergedFix = fixesMap.get(key);
                if (utils_1.op(utils_1.Op.EQUALS, mergedFix, null)) {
                    fixesMap.set(key, fix);
                }
                else {
                    var mergedChanges = mergedFix.fixes.toList();
                    mergedChanges.addAll(fix.fixes);
                    var copiedFix = new bare.createInstance(any, null, mergedFix.error, {
                        fixes: mergedChanges
                    });
                    fixesMap.set(key, copiedFix);
                }
            }
        }
        var mergedFixes = fixesMap.values.toList();
        for (var _d = 0, mergedFixes_1 = mergedFixes; _d < mergedFixes_1.length; _d++) {
            var fixes = mergedFixes_1[_d];
            fixes.fixes.sort(function (first, second) {
                return utils_1.op(utils_1.Op.MINUS, first.priority, second.priority);
            });
        }
        return mergedFixes;
    };
    ResultMerger.prototype.mergeAnalysisErrors = function (partialResultList) {
        var count = partialResultList.length;
        if (count == 0) {
            return new core.DartList.literal();
        }
        else if (count == 1) {
            return partialResultList[0];
        }
        var mergedErrors = new core.DartList.literal();
        for (var _i = 0, partialResultList_1 = partialResultList; _i < partialResultList_1.length; _i++) {
            var partialResults = partialResultList_1[_i];
            mergedErrors.addAll(partialResults);
        }
        return mergedErrors;
    };
    ResultMerger.prototype.mergeCompletionSuggestions = function (partialResultList) {
        var count = partialResultList.length;
        if (count == 0) {
            return new core.DartList.literal();
        }
        else if (count == 1) {
            return partialResultList[0];
        }
        var mergedSuggestions = new core.DartList.literal();
        for (var _i = 0, partialResultList_2 = partialResultList; _i < partialResultList_2.length; _i++) {
            var partialResults = partialResultList_2[_i];
            mergedSuggestions.addAll(partialResults);
        }
        return mergedSuggestions;
    };
    ResultMerger.prototype.mergeFoldingRegions = function (partialResultList) {
        var _this = this;
        var count = partialResultList.length;
        if (count == 0) {
            return new core.DartList.literal();
        }
        else if (count == 1) {
            return partialResultList[0];
        }
        var mergedRegions = partialResultList[0].toList();
        var isNonOverlapping = function (newRegion) {
            var newStart = newRegion.offset;
            var newEnd = newStart + newRegion.length;
            for (var _i = 0, mergedRegions_1 = mergedRegions; _i < mergedRegions_1.length; _i++) {
                var existingRegion = mergedRegions_1[_i];
                var existingStart = existingRegion.offset;
                var existingEnd = existingStart + existingRegion.length;
                if (_this.overlaps(newStart, newEnd, existingStart, existingEnd, {
                    allowNesting: true
                })) {
                    return false;
                }
            }
            return true;
        };
        for (var i = 1; i < count; i++) {
            var partialResults = partialResultList[i];
            for (var _i = 0, partialResults_1 = partialResults; _i < partialResults_1.length; _i++) {
                var region = partialResults_1[_i];
                if (isNonOverlapping(region)) {
                    mergedRegions.add(region);
                }
            }
        }
        return mergedRegions;
    };
    ResultMerger.prototype.mergeHighlightRegions = function (partialResultList) {
        var count = partialResultList.length;
        if (count == 0) {
            return new core.DartList.literal();
        }
        else if (count == 1) {
            return partialResultList[0];
        }
        var mergedRegions = new core.DartList.literal();
        for (var _i = 0, partialResultList_3 = partialResultList; _i < partialResultList_3.length; _i++) {
            var partialResults = partialResultList_3[_i];
            mergedRegions.addAll(partialResults);
        }
        return mergedRegions;
    };
    ResultMerger.prototype.mergeNavigation = function (partialResultList) {
        var _this = this;
        var count = partialResultList.length;
        if (count == 0) {
            return null;
        }
        else if (count == 1) {
            return partialResultList[0];
        }
        var base = partialResultList[0];
        var file = base.file;
        var mergedRegions = base.regions.toList();
        var mergedTargets = base.targets.toList();
        var mergedFiles = base.files.toList();
        var isNonOverlapping = function (newRegion) {
            var newStart = newRegion.offset;
            var newEnd = newStart + newRegion.length;
            for (var _i = 0, mergedRegions_2 = mergedRegions; _i < mergedRegions_2.length; _i++) {
                var mergedRegion = mergedRegions_2[_i];
                var mergedStart = mergedRegion.offset;
                var mergedEnd = mergedStart + mergedRegion.length;
                if (_this.overlaps(newStart, newEnd, mergedStart, mergedEnd)) {
                    return false;
                }
            }
            return true;
        };
        var matchingRegion = function (newRegion) {
            var newOffset = newRegion.offset;
            var newLength = newRegion.length;
            for (var i = 0; i < mergedRegions.length; i++) {
                var mergedRegion = mergedRegions[i];
                if (newOffset == mergedRegion.offset && newLength == mergedRegion.length) {
                    return i;
                }
            }
            return -1;
        };
        var _loop_1 = function (i) {
            var result = partialResultList[i];
            var regions = result.regions;
            var targets = result.targets;
            var files = result.files;
            var fileMap = new core.DartMap.literal([]);
            for (var j = 0; j < files.length; j++) {
                var file_1 = files[j];
                var index = mergedFiles.indexOf(file_1);
                if (index < 0) {
                    index = mergedFiles.length;
                    mergedFiles.add(file_1);
                }
                fileMap.set(j, index);
            }
            var targetMap = new core.DartMap.literal([]);
            for (var j = 0; j < targets.length; j++) {
                var target = targets[j];
                var newIndex = fileMap.get(target.fileIndex);
                if (target.fileIndex != newIndex) {
                    target = new bare.createInstance(any, null, target.kind, newIndex, target.offset, target.length, target.startLine, target.startColumn);
                }
                var index = mergedTargets.indexOf(target);
                if (index < 0) {
                    index = mergedTargets.length;
                    mergedTargets.add(target);
                }
                targetMap.set(j, index);
            }
            for (var j = 0; j < regions.length; j++) {
                var region = regions[j];
                var newTargets = region.targets.map(function (oldTarget) {
                    return targetMap.get(oldTarget);
                }).toList();
                if (region.targets != newTargets) {
                    region = new bare.createInstance(any, null, region.offset, region.length, newTargets);
                }
                var index = matchingRegion(region);
                if (index >= 0) {
                    var mergedRegion = mergedRegions[index];
                    var mergedTargets_1 = mergedRegion.targets;
                    var added = false;
                    for (var _i = 0, _a = region.targets; _i < _a.length; _i++) {
                        var target = _a[_i];
                        if (!mergedTargets_1.contains(target)) {
                            if (added) {
                                mergedTargets_1.add(target);
                            }
                            else {
                                mergedTargets_1 = mergedTargets_1.toList();
                                mergedTargets_1.add(target);
                                mergedRegion = new bare.createInstance(any, null, mergedRegion.offset, mergedRegion.length, mergedTargets_1);
                                mergedRegions[index] = mergedRegion;
                                added = true;
                            }
                        }
                    }
                    if (added) {
                        mergedTargets_1.sort();
                    }
                }
                else if (isNonOverlapping(region)) {
                    mergedRegions.add(region);
                }
            }
        };
        for (var i = 1; i < count; i++) {
            _loop_1(i);
        }
        return new bare.createInstance(any, null, file, mergedRegions, mergedTargets, mergedFiles);
    };
    ResultMerger.prototype.mergeOccurrences = function (partialResultList) {
        var count = partialResultList.length;
        if (count == 0) {
            return new core.DartList.literal();
        }
        else if (count == 1) {
            return partialResultList[0];
        }
        var elementMap = new core.DartMap.literal([]);
        for (var _i = 0, partialResultList_4 = partialResultList; _i < partialResultList_4.length; _i++) {
            var partialResults = partialResultList_4[_i];
            for (var _a = 0, partialResults_2 = partialResults; _a < partialResults_2.length; _a++) {
                var occurances = partialResults_2[_a];
                var element = occurances.element;
                var offsets = elementMap.putIfAbsent(element, function () {
                    return new core.DartHashSet();
                });
                offsets.addAll(occurances.offsets);
            }
        }
        var mergedOccurrences = new core.DartList.literal();
        elementMap.forEach(function (element, offsets) {
            var sortedOffsets = offsets.toList();
            sortedOffsets.sort();
            mergedOccurrences.add(new bare.createInstance(any, null, element, sortedOffsets, element.name.length));
        });
        return mergedOccurrences;
    };
    ResultMerger.prototype.mergeOutline = function (partialResultList) {
        var computeKey = function (element) {
            var location = element.location;
            if (utils_1.op(utils_1.Op.EQUALS, location, null)) {
                throw new core.StateError('Elements in an outline are expected to have a location');
            }
            var buffer = new core.DartStringBuffer();
            buffer.write(location.offset);
            buffer.write(';');
            buffer.write(element.kind.name);
            return buffer.toString();
        };
        var count = partialResultList.length;
        if (count == 0) {
            return new core.DartList.literal();
        }
        else if (count == 1) {
            return partialResultList[0];
        }
        var mergedOutlines = partialResultList[0].toList();
        var outlineMap = new core.DartMap.literal([]);
        var copyMap = new core.DartMap.literal([]);
        var addToMap = function (outline) {
            var key = computeKey(outline.element);
            if (outlineMap.containsKey(key)) {
                throw new core.StateError('Inconsistent outlines');
            }
            outlineMap.set(key, outline);
            (function (_30_) { return (!!_30_) ? _30_.forEach(addToMap) : null; })(outline.children);
        };
        var mergeChildren = function (mergedOutline, newOutline) {
            for (var _i = 0, _a = newOutline.children; _i < _a.length; _i++) {
                var newChild = _a[_i];
                var mergedChild = outlineMap.get(computeKey(newChild.element));
                if (utils_1.op(utils_1.Op.EQUALS, mergedChild, null)) {
                    var copiedOutline = copyMap.putIfAbsent(mergedOutline, function () {
                        return new bare.createInstance(any, null, mergedOutline.element, mergedOutline.offset, mergedOutline.length, {
                            children: mergedOutline.children.toList()
                        });
                    });
                    copiedOutline.children.add(newChild);
                    addToMap(newChild);
                }
                else {
                    mergeChildren(mergedChild, newChild);
                }
            }
        };
        mergedOutlines.forEach(addToMap);
        for (var i = 1; i < count; i++) {
            for (var _i = 0, _a = partialResultList[i]; _i < _a.length; _i++) {
                var outline = _a[_i];
                var mergedOutline = outlineMap.get(computeKey(outline.element));
                if (utils_1.op(utils_1.Op.EQUALS, mergedOutline, null)) {
                    mergedOutlines.add(outline);
                    addToMap(outline);
                }
                else {
                    mergeChildren(mergedOutline, outline);
                }
            }
        }
        var traverse = function (outline) {
            var copiedOutline = copyMap.get(outline);
            var isCopied = copiedOutline != null;
            copiedOutline = (copiedOutline) || (outline);
            var currentChildren = copiedOutline.children;
            if (currentChildren == null || currentChildren.isEmpty) {
                return outline;
            }
            var updatedChildren = currentChildren.map(function (child) {
                return traverse(child);
            }).toList();
            if (currentChildren != updatedChildren) {
                if (!isCopied) {
                    return new bare.createInstance(any, null, copiedOutline.element, copiedOutline.offset, copiedOutline.length, {
                        children: updatedChildren
                    });
                }
                copiedOutline.children = updatedChildren;
                return copiedOutline;
            }
            return outline;
        };
        for (var i = 0; i < mergedOutlines.length; i++) {
            mergedOutlines[i] = traverse(mergedOutlines[i]);
        }
        return mergedOutlines;
    };
    ResultMerger.prototype.mergePrioritizedSourceChanges = function (partialResultList) {
        var count = partialResultList.length;
        if (count == 0) {
            return new core.DartList.literal();
        }
        else if (count == 1) {
            return partialResultList[0];
        }
        var mergedChanges = new core.DartList.literal();
        for (var _i = 0, partialResultList_5 = partialResultList; _i < partialResultList_5.length; _i++) {
            var partialResults = partialResultList_5[_i];
            mergedChanges.addAll(partialResults);
        }
        mergedChanges.sort(function (first, second) {
            return utils_1.op(utils_1.Op.MINUS, first.priority, second.priority);
        });
        return mergedChanges;
    };
    ResultMerger.prototype.mergeRefactoringFeedbacks = function (feedbacks) {
        var count = feedbacks.length;
        if (count == 0) {
            return null;
        }
        else if (count == 1) {
            return feedbacks[0];
        }
        var first = feedbacks[0];
        if (_common_1.is(first, any)) {
            return first;
        }
        else if (_common_1.is(first, any)) {
            return first;
        }
        else if (_common_1.is(first, any)) {
            var coveringExpressionOffsets = utils_1.op(utils_1.Op.EQUALS, first.coveringExpressionOffsets, null) ? new core.DartList.literal() : first.coveringExpressionOffsets.toList();
            var coveringExpressionLengths = utils_1.op(utils_1.Op.EQUALS, first.coveringExpressionLengths, null) ? new core.DartList.literal() : first.coveringExpressionLengths.toList();
            var names = first.names.toList();
            var offsets = first.offsets.toList();
            var lengths = first.lengths.toList();
            for (var i = 1; i < count; i++) {
                var feedback = feedbacks[i];
                if (feedback.coveringExpressionOffsets != null) {
                    coveringExpressionOffsets.addAll(feedback.coveringExpressionOffsets);
                }
                if (feedback.coveringExpressionLengths != null) {
                    coveringExpressionLengths.addAll(feedback.coveringExpressionLengths);
                }
                for (var _i = 0, _a = feedback.names; _i < _a.length; _i++) {
                    var name_1 = _a[_i];
                    if (!names.contains(name_1)) {
                        names.add(name_1);
                    }
                }
                offsets.addAll(feedback.offsets);
                lengths.addAll(feedback.lengths);
            }
            return new bare.createInstance(any, null, names.toList(), offsets, lengths, {
                coveringExpressionOffsets: (coveringExpressionOffsets.isEmpty ? null : coveringExpressionOffsets), coveringExpressionLengths: (coveringExpressionLengths.isEmpty ? null : coveringExpressionLengths)
            });
        }
        else if (_common_1.is(first, any)) {
            var offset = first.offset;
            var length_1 = first.length;
            var returnType = first.returnType;
            var names = first.names.toList();
            var canCreateGetter = first.canCreateGetter;
            var parameters = first.parameters;
            var offsets = first.offsets.toList();
            var lengths = first.lengths.toList();
            for (var i = 1; i < count; i++) {
                var feedback = feedbacks[i];
                if (new core.DartString(returnType).isEmpty) {
                    returnType = feedback.returnType;
                }
                for (var _b = 0, _c = feedback.names; _b < _c.length; _b++) {
                    var name_2 = _c[_b];
                    if (!names.contains(name_2)) {
                        names.add(name_2);
                    }
                }
                canCreateGetter = canCreateGetter && feedback.canCreateGetter;
                offsets.addAll(feedback.offsets);
                lengths.addAll(feedback.lengths);
            }
            return new bare.createInstance(any, null, offset, length_1, returnType, names.toList(), canCreateGetter, parameters, offsets, lengths);
        }
        else if (_common_1.is(first, any)) {
            var occurrences = first.occurrences;
            for (var i = 1; i < count; i++) {
                occurrences += feedbacks[i].occurrences;
            }
            return new bare.createInstance(any, null, first.name, occurrences);
        }
        else if (_common_1.is(first, any)) {
            return first;
        }
        else if (_common_1.is(first, any)) {
            return first;
        }
        else if (_common_1.is(first, any)) {
            return first;
        }
        throw new core.StateError("Unsupported class of refactoring feedback: " + first.runtimeType);
    };
    ResultMerger.prototype.mergeRefactoringKinds = function (partialResultList) {
        var count = partialResultList.length;
        if (count == 0) {
            return new core.DartList.literal();
        }
        else if (count == 1) {
            return partialResultList[0];
        }
        var mergedKinds = new core.DartHashSet();
        for (var _i = 0, partialResultList_6 = partialResultList; _i < partialResultList_6.length; _i++) {
            var partialResults = partialResultList_6[_i];
            mergedKinds.addAll(partialResults);
        }
        return mergedKinds.toList();
    };
    ResultMerger.prototype.mergeRefactorings = function (partialResultList) {
        var mergeChanges = function (changes) {
            var count = changes.length;
            if (count == 0) {
                return null;
            }
            else if (count == 1) {
                return changes[0];
            }
            var first = changes[0];
            var message = first.message;
            var editMap = new core.DartMap.literal([]);
            for (var _i = 0, _a = first.edits; _i < _a.length; _i++) {
                var edit = _a[_i];
                editMap.set(edit.file, edit);
            }
            var linkedEditGroups = first.linkedEditGroups.toList();
            var selection = first.selection;
            for (var i = 1; i < count; i++) {
                var change = changes[i];
                for (var _b = 0, _c = change.edits; _b < _c.length; _b++) {
                    var edit = _c[_b];
                    var mergedEdit = editMap.get(edit.file);
                    if (utils_1.op(utils_1.Op.EQUALS, mergedEdit, null)) {
                        editMap.set(edit.file, edit);
                    }
                    else {
                        var edits = mergedEdit.edits.toList();
                        edits.addAll(edit.edits);
                        editMap.set(edit.file, new bare.createInstance(any, null, mergedEdit.file, mergedEdit.fileStamp, {
                            edits: edits
                        }));
                    }
                }
                linkedEditGroups.addAll(change.linkedEditGroups);
                message = (message) || (change.message);
                selection = (selection) || (change.selection);
            }
            return new bare.createInstance(any, null, message, {
                edits: editMap.values.toList(), linkedEditGroups: linkedEditGroups, selection: selection
            });
        };
        var count = partialResultList.length;
        if (count == 0) {
            return null;
        }
        else if (count == 1) {
            return partialResultList[0];
        }
        var result = partialResultList[0];
        var initialProblems = result.initialProblems.toList();
        var optionsProblems = result.optionsProblems.toList();
        var finalProblems = result.finalProblems.toList();
        var feedbacks = new core.DartList.literal();
        if (result.feedback != null) {
            feedbacks.add(result.feedback);
        }
        var changes = new core.DartList.literal();
        if (result.change != null) {
            changes.add(result.change);
        }
        var potentialEdits = result.potentialEdits.toList();
        for (var i = 1; i < count; i++) {
            var result_1 = partialResultList[1];
            initialProblems.addAll(result_1.initialProblems);
            optionsProblems.addAll(result_1.optionsProblems);
            finalProblems.addAll(result_1.finalProblems);
            if (result_1.feedback != null) {
                feedbacks.add(result_1.feedback);
            }
            if (result_1.change != null) {
                changes.add(result_1.change);
            }
            potentialEdits.addAll(result_1.potentialEdits);
        }
        return new bare.createInstance(any, null, initialProblems, optionsProblems, finalProblems, {
            feedback: this.mergeRefactoringFeedbacks(feedbacks), change: mergeChanges(changes), potentialEdits: potentialEdits
        });
    };
    ResultMerger.prototype.mergeSourceChanges = function (partialResultList) {
        var count = partialResultList.length;
        if (count == 0) {
            return new core.DartList.literal();
        }
        else if (count == 1) {
            return partialResultList[0];
        }
        var mergedChanges = new core.DartList.literal();
        for (var _i = 0, partialResultList_7 = partialResultList; _i < partialResultList_7.length; _i++) {
            var partialResults = partialResultList_7[_i];
            mergedChanges.addAll(partialResults);
        }
        return mergedChanges;
    };
    ResultMerger.prototype.overlaps = function (leftStart, leftEnd, rightStart, rightEnd, _namedArguments) {
        var allowNesting = Object.assign({
            "allowNesting": false
        }, _namedArguments).allowNesting;
        if (leftEnd < rightStart || leftStart > rightEnd) {
            return false;
        }
        if (!allowNesting) {
            return true;
        }
        return !((leftStart <= rightStart && rightEnd <= leftEnd) || (rightStart <= leftStart && leftEnd <= rightEnd));
    };
    ResultMerger.prototype.ResultMerger = function () {
    };
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'asset:meta/lib/meta.dart', type: 'visibleForTesting', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], ResultMerger.prototype, "overlaps", null);
    __decorate([
        utils_1.defaultConstructor
    ], ResultMerger.prototype, "ResultMerger", null);
    ResultMerger = __decorate([
        utils_1.DartClass
    ], ResultMerger);
    return ResultMerger;
}());
exports.ResultMerger = ResultMerger;
var properties = /** @class */ (function () {
    function properties() {
    }
    return properties;
}());
exports.properties = properties;
//# sourceMappingURL=result_merger.js.map