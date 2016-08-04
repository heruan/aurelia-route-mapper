"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var aurelia_route_recognizer_1 = require("aurelia-route-recognizer");
var RouteMapper = (function (_super) {
    __extends(RouteMapper, _super);
    function RouteMapper() {
        _super.apply(this, arguments);
    }
    RouteMapper.prototype.map = function (routes, parentName, parentRoute) {
        var _this = this;
        if (parentName === void 0) { parentName = ''; }
        if (parentRoute === void 0) { parentRoute = ''; }
        routes.forEach(function (config) {
            var name = parentName ? parentName + "/" + config.name : config.name;
            var path = parentRoute + config.route;
            _this.add({
                path: path,
                handler: { name: name },
                caseSensitive: config.caseSensitive === true
            });
            if (config.settings.childConfig) {
                _this.map(config.settings.childConfig, name, path);
            }
        });
    };
    return RouteMapper;
}(aurelia_route_recognizer_1.RouteRecognizer));
exports.RouteMapper = RouteMapper;
