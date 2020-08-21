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
module.exports = {
  index,
  post,
};
