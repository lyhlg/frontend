"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
var Header_1 = __importDefault(require("@pages/header/Header"));
var Home_1 = __importDefault(require("@pages/Home"));
var App = function () { return (react_1.default.createElement("div", null,
    react_1.default.createElement(Header_1.default, null),
    react_1.default.createElement("div", null,
        react_1.default.createElement(react_router_dom_1.Switch, null,
            react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: "/", render: function () { return react_1.default.createElement(Home_1.default, { name: 'Root' }); } }),
            react_1.default.createElement(react_router_dom_1.Route, { path: "/home", render: function () { return react_1.default.createElement(Home_1.default, { name: 'Home' }); } }))))); };
exports.default = react_router_dom_1.withRouter(App);
