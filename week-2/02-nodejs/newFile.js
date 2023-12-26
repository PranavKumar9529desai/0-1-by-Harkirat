// post route , user can upload new todo in the todo list.
app.post("/todos", function (req, res) {
  console.log(req.body.title);
  let Title = req.body.title;
  let Description = req.body.description;
  console.log(req.query.title);

  res.status(200);
});
