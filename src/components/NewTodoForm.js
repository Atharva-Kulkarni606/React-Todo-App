"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
function NewTodoForm(props) {
    const [description, setDescription] = (0, react_1.useState)('');
    const [assigned, setAssigned] = (0, react_1.useState)('');
    const submitTodo = () => {
        if (description !== '' && assigned !== '') {
            props.addTodo(description, assigned);
            setAssigned('');
            setDescription('');
        }
    };
    return ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: "mt-5" }, { children: (0, jsx_runtime_1.jsxs)("form", { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: 'mb-3' }, { children: [(0, jsx_runtime_1.jsx)("label", Object.assign({ className: 'form-label' }, { children: "Assigned" })), (0, jsx_runtime_1.jsx)("input", { type: 'text', className: 'form-control', required: true, onChange: e => setAssigned(e.target.value), value: assigned })] })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: 'mb-3' }, { children: [(0, jsx_runtime_1.jsx)("label", Object.assign({ className: 'form-label' }, { children: "Description" })), (0, jsx_runtime_1.jsx)("textarea", { className: 'form-control', rows: 3, required: true, onChange: e => setDescription(e.target.value), value: description })] })), (0, jsx_runtime_1.jsx)("button", Object.assign({ type: 'button', className: 'btn btn-primary mt-3', onClick: submitTodo }, { children: "Add Todo" }))] }) })));
}
exports.default = NewTodoForm;
