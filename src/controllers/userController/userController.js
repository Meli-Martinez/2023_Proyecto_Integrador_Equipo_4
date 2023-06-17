const userController = ('/user/:id', (req,res) => {
  const user = req.params.id;

  if (!isNaN(req.params.id)) {
    res.send(`el usuario es ${user}`)
  }
  res.status(404).send('User not found');
});

export { userController };
