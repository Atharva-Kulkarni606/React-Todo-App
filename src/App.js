"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
require("./App.css");
const ToDoTable_1 = __importDefault(require("./components/ToDoTable"));
const NewTodoForm_1 = __importDefault(require("./components/NewTodoForm"));
function App() {
    const [showAddTodoForm, setshowAddTodoForm] = (0, react_1.useState)(false);
    const [todos, setTodos] = (0, react_1.useState)([
        { rowNumber: 1, rowDescription: 'Feed dog', rowAssigned: 'Eric' },
        { rowNumber: 2, rowDescription: 'Feed dog 2', rowAssigned: 'Eric2' },
        { rowNumber: 3, rowDescription: 'Feed dog 3', rowAssigned: 'Eric3' }
    ]);
    const deleteTodo = (deleteRowNumber) => {
        let filtered = todos.filter(function (value) {
            return value.rowNumber !== deleteRowNumber;
        });
        setTodos(filtered);
    };
    const addTodo = (description, assigned) => {
        let rowNumber = 0;
        if (todos.length > 0) {
            rowNumber = todos[todos.length - 1].rowNumber + 1;
        }
        else {
            rowNumber = 1;
        }
        const newTodo = { rowNumber: todos.length + 1, rowDescription: description, rowAssigned: assigned };
        setTodos(todos => [...todos, newTodo]);
        console.log(todos);
    };
    return ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: 'mt-5 container' }, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "card" }, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: "card-header" }, { children: "Your Todo's" })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "card-body" }, { children: [(0, jsx_runtime_1.jsx)(ToDoTable_1.default, { todos: todos, deleteTodo: deleteTodo }), (0, jsx_runtime_1.jsx)("button", Object.assign({ className: "btn btn-primary", onClick: () => setshowAddTodoForm(!showAddTodoForm) }, { children: showAddTodoForm ? 'Close the add todo form' : 'Add new todo' })), showAddTodoForm && (0, jsx_runtime_1.jsx)(NewTodoForm_1.default, { addTodo: addTodo })] }))] })) })));
}
exports.default = App;
