"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const TodoRowItem_1 = __importDefault(require("./TodoRowItem"));
function ToDoTable(props) {
    return ((0, jsx_runtime_1.jsxs)("table", Object.assign({ className: "table table-hover" }, { children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", Object.assign({ scope: 'col' }, { children: "#" })), (0, jsx_runtime_1.jsx)("th", Object.assign({ scope: 'col' }, { children: "Description" })), (0, jsx_runtime_1.jsx)("th", Object.assign({ scope: 'col' }, { children: "Assigned" }))] }) }), (0, jsx_runtime_1.jsx)("tbody", { children: props.todos.map(todo => ((0, jsx_runtime_1.jsx)(TodoRowItem_1.default, { deleteTodo: props.deleteTodo, rowNumber: todo.rowNumber, rowDescription: todo.rowDescription, rowAssigned: todo.rowAssigned }, todo.rowNumber))) })] })));
}
exports.default = ToDoTable;
