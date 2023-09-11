'use client';
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var React = require("react");
var Box_1 = require("@mui/material/Box");
var List_1 = require("@mui/material/List");
var ListItem_1 = require("@mui/material/ListItem");
var ListItemButton_1 = require("@mui/material/ListItemButton");
var ListItemIcon_1 = require("@mui/material/ListItemIcon");
var ListItemText_1 = require("@mui/material/ListItemText");
var Divider_1 = require("@mui/material/Divider");
var ArrowForwardIos_1 = require("@mui/icons-material/ArrowForwardIos");
var material_1 = require("@mui/material");
var data_1 = require("./data");
var util_1 = require("@/app/utils/util");
var styles_1 = require("@mui/material/styles");
var Paper_1 = require("@mui/material/Paper");
var ImageStepper_1 = require("./ImageStepper");
var announcement_1 = require("./announcement");
var menuData_1 = require("./menuData");
var Item = styles_1.styled(Paper_1["default"])(function (_a) {
    var theme = _a.theme;
    return (__assign(__assign({ backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff' }, theme.typography.body2), { padding: theme.spacing(1), textAlign: 'center', color: theme.palette.text.secondary }));
});
var MenuItem = styles_1.styled(Paper_1["default"])(function (_a) {
    var theme = _a.theme;
    return (__assign(__assign({}, theme.typography.body2), { textAlign: 'center', color: theme.palette.text.secondary, height: 45, lineHeight: '60px', display: 'flex', flexDirection: 'column', alignItems: 'center' }));
});
function Catalog() {
    var _a = React.useState({
        top: 0,
        left: 0
    }), anchorPosition = _a[0], setAnchorPosition = _a[1];
    var _b = React.useState(-1), activeIndex = _b[0], setActiveIndex = _b[1];
    var _c = React.useState([]), navSubject = _c[0], setNavSubject = _c[1];
    var _d = React.useState(null), anchorEl = _d[0], setAnchorEl = _d[1];
    var open = Boolean(anchorEl);
    var _e = React.useState([]), navLists = _e[0], setNavLists = _e[1];
    var openPopover = function (event, item, index) {
        setActiveIndex(index);
        item && setNavSubject(item.navSubject);
        setAnchorEl(event.currentTarget);
    };
    /**
     * 采用鼠标进入后，判断是否超出指定区域，就要关闭并初始化菜单
     * @param event
     */
    var closePopover = function (event) {
        if (!util_1.pointerInSpecifyArea(event, document.querySelector('.menuList'))) {
            setActiveIndex(-1);
            setAnchorEl(null);
        }
    };
    var _f = React.useState(menuData_1.menuData.leftMenu), leftMenu = _f[0], setLeftMenu = _f[1];
    var _g = React.useState(menuData_1.menuData.RightMenu), rightMenu = _g[0], setRightMenu = _g[1];
    var menuPopover = function () {
        var menuList = document.querySelector('.menuList');
        console.dir(menuList);
        setAnchorPosition({
            top: menuList.offsetTop,
            left: menuList.offsetLeft + menuList.offsetWidth
        });
    };
    React.useEffect(function () {
        menuPopover();
        setNavLists(data_1.data);
        window.addEventListener("resize", function (e) {
            menuPopover();
        });
        // setLeftMenu(menuData.leftMenu)
        // setRightMenu(menuData.RightMenu)
    }, []);
    return (React.createElement(Box_1["default"], { sx: {
            width: '100%',
            height: '470px',
            display: 'flex'
        } },
        React.createElement(List_1["default"], { className: "w-52 h-full menuList", sx: {
                bgcolor: 'background.paper',
                padding: '0px !important',
                borderRadius: '5px',
                overflow: 'auto'
            } }, !navLists.length ? (React.createElement(material_1.Stack, { spacing: 1 }, Array.from({ length: 12 }).map(function (item, index) { return (React.createElement(material_1.Skeleton, { key: index, animation: "wave", variant: "rounded", width: 162, height: 36 })); }))) : (navLists.map(function (item, index) { return (React.createElement("div", { key: index, onMouseLeave: function ($event) { return closePopover($event); } },
            React.createElement(ListItem_1["default"], { "aria-describedby": "mouse-over-popover", disablePadding: true, dense: true, sx: {
                    padding: '5px',
                    '&:hover': {
                        color: '#ED6C02',
                        '&:mouseout': { color: 'inherit' }
                    }
                }, className: activeIndex == index ? 'activeList' : '', onMouseEnter: function ($event) { return openPopover($event, item, index); } },
                React.createElement(ListItemButton_1["default"], { dense: true, sx: {
                        '&:hover': { background: 'rgba(237,108,2, 0.1)' },
                        paddingRight: '0 !important'
                    }, className: activeIndex == index ? 'activeListItem' : '' },
                    React.createElement(ListItemText_1["default"], { className: "font-bold", primary: item.navItem }),
                    React.createElement(ListItemIcon_1["default"], { sx: { paddingLeft: '40px' } },
                        React.createElement(ArrowForwardIos_1["default"], { sx: { color: 'rgba(0,0,0,0.6)', fontSize: '12px' } })))),
            index !== navLists.length - 1 && React.createElement(Divider_1["default"], null))); }))),
        React.createElement(material_1.Popover, { id: "mouse-over-popover", sx: {
                marginLeft: '5px'
            }, open: open, anchorEl: anchorEl, anchorReference: "anchorPosition", anchorPosition: anchorPosition, anchorOrigin: {
                vertical: 'top',
                horizontal: 'right'
            }, transformOrigin: {
                vertical: 'top',
                horizontal: 'left'
            }, onMouseLeave: function ($event) { return closePopover($event); } },
            React.createElement(material_1.Container, { sx: {
                    width: '690px',
                    height: '455px !important',
                    padding: '16px 10px !important'
                } }, navSubject.map(function (item, index) { return (React.createElement(Box_1["default"], { key: index, sx: { marginBottom: '7px' } },
                React.createElement(material_1.Stack, { direction: "row", className: 'items-center' },
                    React.createElement(Box_1["default"], { sx: { backgroundColor: '#ED6C02', width: 2, height: 16, marginRight: '3px' } }),
                    React.createElement(material_1.Button, { variant: "text", className: "!text-base !text-gray-500 !mb-1", sx: {
                            '&:hover': {
                                color: '#ED6C02 !important',
                                background: 'none !important'
                            }
                        } }, item.navSubjectItem)),
                React.createElement(Divider_1["default"], null),
                React.createElement(material_1.Stack, { direction: "row", divider: React.createElement(Divider_1["default"], { sx: { margin: '9px 0 !important' }, orientation: "vertical", variant: "middle", flexItem: true }), className: "!flex-wrap", spacing: 1 }, item.navSubjectChildren.map(function (subItem, subIndex) { return (React.createElement(material_1.Button, { key: subIndex, variant: "text", className: "!text-sm !text-gray-400", sx: {
                        padding: '8px',
                        '&:hover': {
                            color: '#ED6C02 !important',
                            background: 'none !important'
                        },
                        '&.MuiButtonBase-root': {
                            marginLeft: '0 !important'
                        }
                    } }, subItem.navSubjectChildrenItem)); })))); }))),
        React.createElement(material_1.Grid, { container: true, spacing: 1, sx: { paddingLeft: '7px' } },
            React.createElement(material_1.Grid, { item: true, xs: 8 },
                React.createElement(Item, { sx: { padding: 0 } },
                    React.createElement(ImageStepper_1["default"], null))),
            React.createElement(material_1.Grid, { item: true, xs: 4 },
                React.createElement(Item, { sx: {
                        height: '110px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center'
                    } },
                    React.createElement("h2", null,
                        React.createElement("strong", null, "Hi~\u6B22\u8FCE\u6765\u5230\u6B27\u7F8E\u65AF\u5546\u57CE")),
                    React.createElement(material_1.Stack, { direction: "row", divider: React.createElement(Divider_1["default"], { sx: { margin: '9px 0 !important' }, orientation: "vertical", variant: "middle", flexItem: true }), className: "!flex-wrap", spacing: 1, sx: { marginTop: '15px' } },
                        React.createElement(material_1.Button, { variant: "text" }, "\u767B\u5F55"),
                        React.createElement(material_1.Button, { variant: "text", color: "error", sx: { marginLeft: '0 !important' } }, "\u6CE8\u518C"))),
                React.createElement(material_1.Grid, { container: true, spacing: 1, sx: { padding: '10px 0' } },
                    React.createElement(material_1.Grid, { item: true, xs: 7 },
                        React.createElement(Item, { sx: { height: '130px', display: 'flex' } },
                            React.createElement(Box_1["default"], { className: "cursor-pointer", sx: {
                                    bgcolor: 'background.default',
                                    display: 'grid',
                                    gridTemplateColumns: { md: '1fr 1fr 1fr' },
                                    gap: 2,
                                    alignItems: 'center'
                                } }, leftMenu.map(function (item, index) { return (React.createElement(MenuItem, { elevation: 0, key: index },
                                React.createElement(Box_1["default"], { component: item.icon, sx: { color: item.iconColor } }),
                                React.createElement(material_1.Typography, { variant: "caption", sx: {
                                        color: '#666 !important',
                                        '&:hover': {
                                            color: '#ED6C02 !important'
                                        }
                                    } }, item.title))); })))),
                    React.createElement(material_1.Grid, { item: true, xs: 5 },
                        React.createElement(Item, { sx: { height: '130px' } },
                            React.createElement(Box_1["default"], { className: "cursor-pointer", sx: {
                                    bgcolor: 'background.default',
                                    display: 'grid',
                                    gridTemplateColumns: { md: '1fr 1fr' },
                                    gap: 2
                                } }, rightMenu.map(function (item, index) { return (React.createElement(MenuItem, { elevation: 0, key: index },
                                React.createElement(Box_1["default"], { component: item.icon, sx: { color: item.iconColor } }),
                                React.createElement(material_1.Typography, { variant: "caption", sx: {
                                        color: '#666 !important',
                                        '&:hover': {
                                            color: '#ED6C02 !important'
                                        }
                                    } }, item.title))); }))))),
                React.createElement(Item, { sx: { height: '194px' } },
                    React.createElement(announcement_1["default"], null))))));
}
exports["default"] = Catalog;
