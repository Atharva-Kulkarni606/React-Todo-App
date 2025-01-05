"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
function ToDoRowItem(props) {
    return ((0, jsx_runtime_1.jsxs)("tr", Object.assign({ onClick: () => props.deleteTodo(props.rowNumber) }, { children: [(0, jsx_runtime_1.jsx)("th", Object.assign({ scope: 'row' }, { children: props.rowNumber })), (0, jsx_runtime_1.jsx)("td", { children: props.rowDescription }), (0, jsx_runtime_1.jsx)("td", { children: props.rowAssigned })] })));
}
exports.default = ToDoRowItem;
