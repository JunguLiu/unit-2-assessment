const Todos = require("../modules/todos");

function index(req, res) {
  res.render("index", { Todos: Todos });
}

function post(req, res) {
  var todo = {
    todo: req.body.todo,
    done: false,
  };
  Todos.push(todo);
  res.redirect("/");
}
function deleteOne(req, res) {
  const idx = Todos.findIndex((todo) => todo.todo == req.params.todo);
  Todos.splice(idx, 1);
  res.redirect("/");
}
module.exports = {
  index,
  post,
  deleteOne,
};
