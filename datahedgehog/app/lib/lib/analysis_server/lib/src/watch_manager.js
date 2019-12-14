"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("@dart2ts/dart/utils");
var core = require("@dart2ts/dart/core");
var WatchManager = /** @class */ (function () {
    function WatchManager(provider, handleWatchEvent) {
    }
    WatchManager.prototype.WatchManager = function (provider, handleWatchEvent) {
        this.rootNode = new WatchNode(null);
        this._watchedFolders = new core.DartHashMap();
        this.provider = provider;
        this.handleWatchEvent = handleWatchEvent;
    };
    WatchManager.prototype.addFolder = function (folder, token) {
        var folderNode = this._watchedFolders.get(folder);
        if (folderNode != null) {
            folderNode.tokens.add(token);
            return;
        }
        folderNode = new WatchNode(folder);
        this._watchedFolders.set(folder, folderNode);
        folderNode.tokens.add(token);
        var parentNode = this.rootNode.insert(folderNode);
        if (utils_1.op(utils_1.Op.EQUALS, parentNode, this.rootNode)) {
            folderNode.subscription = folder.changes.listen(this._handleWatchEvent.bind(this));
            for (var _i = 0, _a = folderNode.children; _i < _a.length; _i++) {
                var childNode = _a[_i];
                /* TODO (AssertStatementImpl) : assert (childNode.subscription != null); */ ;
                if (childNode.subscription != null) {
                    childNode.subscription.cancel();
                    childNode.subscription = null;
                }
            }
        }
    };
    WatchManager.prototype.removeFolder = function (folder, token) {
        var folderNode = this._watchedFolders.get(folder);
        if (utils_1.op(utils_1.Op.EQUALS, folderNode, null)) {
            /* TODO (AssertStatementImpl) : assert (false); */ ;
            return;
        }
        var tokens = folderNode.tokens;
        if (!tokens.remove(token)) {
            /* TODO (AssertStatementImpl) : assert (false); */ ;
        }
        if (tokens.isEmpty) {
            if (folderNode.subscription != null) {
                for (var _i = 0, _a = folderNode.children; _i < _a.length; _i++) {
                    var childNode = _a[_i];
                    /* TODO (AssertStatementImpl) : assert (childNode.subscription == null); */ ;
                    childNode.subscription = childNode.folder.changes.listen(this._handleWatchEvent.bind(this));
                }
                folderNode.subscription.cancel();
                folderNode.subscription = null;
            }
            folderNode.delete();
            this._watchedFolders.remove(folder);
        }
    };
    WatchManager.prototype._handleWatchEvent = function (event) {
        var path = event.path;
        var tokens = new core.DartList.literal();
        var parent = this.rootNode.findParent(path);
        while (parent != this.rootNode) {
            tokens.addAll(parent.tokens);
            parent = parent.parent;
        }
        if (tokens.isNotEmpty) {
            this.handleWatchEvent(event, tokens);
        }
    };
    __decorate([
        utils_1.defaultConstructor
    ], WatchManager.prototype, "WatchManager", null);
    WatchManager = __decorate([
        utils_1.DartClass
    ], WatchManager);
    return WatchManager;
}());
exports.WatchManager = WatchManager;
var WatchNode = /** @class */ (function () {
    function WatchNode(folder) {
    }
    WatchNode.prototype.WatchNode = function (folder) {
        this._children = new core.DartList.literal();
        this.tokens = new core.DartHashSet();
        this.folder = folder;
    };
    Object.defineProperty(WatchNode.prototype, "children", {
        get: function () {
            return this._children;
        },
        enumerable: true,
        configurable: true
    });
    WatchNode.prototype.delete = function () {
        if (this.parent != null) {
            this.parent._removeChild(this);
            this.parent = null;
        }
    };
    WatchNode.prototype.findParent = function (filePath) {
        if (this._children == null) {
            return this;
        }
        for (var _i = 0, _a = this._children; _i < _a.length; _i++) {
            var childNode = _a[_i];
            if (childNode.folder.isOrContains(filePath)) {
                return childNode.findParent(filePath);
            }
        }
        return this;
    };
    WatchNode.prototype.insert = function (node) {
        var parentNode = this.findParent(node.folder.path);
        parentNode._addChild(node, true);
        return parentNode;
    };
    WatchNode.prototype.toString = function () {
        return 'WatchNode (' + ("folder = " + (utils_1.op(utils_1.Op.EQUALS, this.folder, null) ? '<root>' : this.folder.path) + ", ") + ("tokens = " + this.tokens + ", ") + ("subscription = " + (utils_1.op(utils_1.Op.EQUALS, this.subscription, null) ? 'null' : 'non-null') + ")");
    };
    WatchNode.prototype._addChild = function (newChild, checkChildren) {
        if (checkChildren) {
            var folder = newChild.folder;
            for (var i = this._children.length - 1; i >= 0; i--) {
                var existingChild = this._children[i];
                if (folder.contains(existingChild.folder.path)) {
                    newChild._addChild(existingChild, false);
                    this._children.removeAt(i);
                }
            }
        }
        newChild.parent = this;
        this._children.add(newChild);
    };
    WatchNode.prototype._removeChild = function (child) {
        this._children.remove(child);
        var grandchildren = child.children;
        for (var _i = 0, grandchildren_1 = grandchildren; _i < grandchildren_1.length; _i++) {
            var grandchild = grandchildren_1[_i];
            grandchild.parent = this;
            this._children.add(grandchild);
        }
        child._children.clear();
    };
    __decorate([
        utils_1.defaultConstructor
    ], WatchNode.prototype, "WatchNode", null);
    __decorate([
        utils_1.DartMethodAnnotation({
            library: 'dart:core', type: 'override', value: {
                arguments: [], namedArguments: {}
            }
        })
    ], WatchNode.prototype, "toString", null);
    WatchNode = __decorate([
        utils_1.DartClass
    ], WatchNode);
    return WatchNode;
}());
exports.WatchNode = WatchNode;
var properties = /** @class */ (function () {
    function properties() {
    }
    return properties;
}());
exports.properties = properties;
//# sourceMappingURL=watch_manager.js.map