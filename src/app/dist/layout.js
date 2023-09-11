'use client';
"use strict";
exports.__esModule = true;
var React = require("react");
require("../css/global.css");
require("../css/menu.scss");
require("../css/btn.scss");
require("../css/list.scss");
require("../css/popover.scss");
require("../css/card.scss");
var AppBar_1 = require("@mui/material/AppBar");
var Box_1 = require("@mui/material/Box");
var Toolbar_1 = require("@mui/material/Toolbar");
var ThemeRegistry_1 = require("@/components/ThemeRegistry/ThemeRegistry");
var Button_1 = require("@mui/material/Button");
var navigation_1 = require("next/navigation");
var menuFormatter_1 = require("./layout/menuFormatter");
var select_1 = require("@/components/select");
var input_1 = require("@/components/input");
var footer_1 = require("@/components/footer");
var advance_1 = require("@/components/advance");
var material_1 = require("@mui/material");
var TypographyStyled = material_1.styled(function (props) {
    return (React.createElement(material_1.Typography, { variant: "h6", display: 'block', borderRadius: '50%', border: '2px solid #F65730', width: '38px', height: '38px', textAlign: 'center', lineHeight: '38px' }, props.title));
})(function (_a) {
    var theme = _a.theme;
    return ({});
});
function RootLayout(_a) {
    var children = _a.children;
    var router = navigation_1.useRouter();
    var buttonElementType = function () {
        return (React.createElement(Box_1["default"], { sx: {
                display: 'flex',
                alignItems: 'center'
            } }, menuFormatter_1["default"]().map(function (item) { return (React.createElement("div", { key: item.text, className: "mx-4 header" }, item.formatterComponent())); })));
    };
    var Login = function () {
        router.push('/pages/login');
    };
    var searchProduct = function (productName) {
        router.push("/pages/product/" + productName);
    };
    var omsProtect = [
        {
            title: '多',
            children: [
                {
                    title: '现货多'
                },
                {
                    title: '品牌众多 现货充足'
                },
            ]
        },
        {
            title: '快',
            children: [
                {
                    title: '发货快'
                },
                {
                    title: '自有仓储 下单即发'
                },
            ]
        },
        {
            title: '正',
            children: [
                {
                    title: '正品保障'
                },
                {
                    title: '正规保证 严格把控'
                },
            ]
        },
    ];
    return (React.createElement("html", { lang: "en" },
        React.createElement("head", null,
            React.createElement("script", { src: "/amfe-flexible/index.js" }),
            React.createElement("title", null, "\u6B27\u7F8E\u65AF\u5546\u57CE-\u4E13\u4E1A\u7F8E\u5986\u62A4\u80A4\uFF0C\u53EA\u4E3A\u6700\u7F8E\u7684\u4F60"),
            React.createElement("meta", { name: 'description', content: 'onmouse,\u6B27\u7F8E\u65AF\uFF0C\u7F8E\u5986\uFF0C\u5546\u57CE' }),
            React.createElement("link", { rel: "icon", href: "/favicon.ico", type: "image/x-icon", sizes: "192x192" }),
            React.createElement("meta", { name: "viewport", content: "width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no" })),
        React.createElement("body", null,
            React.createElement(ThemeRegistry_1["default"], null,
                React.createElement(AppBar_1["default"], { position: "fixed", sx: { zIndex: 2000 } },
                    React.createElement(Toolbar_1["default"], { variant: "dense", sx: { backgroundColor: '#323232' } },
                        React.createElement(Box_1["default"], { component: 'img', src: '/logo.png', alt: '公司logo', width: 54, height: 64, sx: { objectFit: 'scale-down' } }),
                        React.createElement("div", { className: "flex-1" }),
                        React.createElement(Box_1["default"], { sx: { display: { xs: 'none', sm: 'block' } } }, buttonElementType()),
                        React.createElement(Box_1["default"], { sx: {
                                display: 'flex',
                                justifyContent: 'flex-end',
                                width: '158px'
                            } },
                            React.createElement(Button_1["default"], { variant: "text", color: "error", onClick: Login }, "\u767B\u5F55"),
                            React.createElement(Button_1["default"], { variant: "contained", color: "error" }, "\u6CE8\u518C")))),
                React.createElement(Box_1["default"], { component: "main", sx: {
                        flexGrow: 1,
                        mt: ['64px']
                    } },
                    React.createElement(Box_1["default"], { className: "flex", sx: { background: '#fff', p: '2px' } },
                        React.createElement(Box_1["default"], { className: "flex-1", paddingLeft: '9.5rem' },
                            React.createElement(material_1.Stack, { direction: 'row', spacing: 2, height: '100%', alignItems: 'center', color: '#F65730' }, omsProtect.map(function (item, index) { return (React.createElement(material_1.Stack, { direction: 'row', spacing: 2, alignItems: 'center', key: index },
                                React.createElement(TypographyStyled, { title: item.title }),
                                React.createElement(Box_1["default"], null,
                                    React.createElement(material_1.Typography, null, item.children[0].title),
                                    React.createElement(material_1.Typography, { variant: "caption" }, item.children[1].title)))); }))),
                        React.createElement(Box_1["default"], { sx: { display: 'flex', alignItems: 'center', flex: 1 } },
                            React.createElement(select_1["default"], null),
                            React.createElement(input_1["default"], { onProductNameChange: searchProduct }))),
                    React.createElement(Box_1["default"], { sx: {
                            flexGrow: 1,
                            p: "0 10rem",
                            mt: ['28px']
                        } }, children)),
                React.createElement(advance_1["default"], null),
                React.createElement(footer_1["default"], null)))));
}
exports["default"] = RootLayout;
