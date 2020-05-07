async function requestHandler(req, res) {
  try {
    const user = await Users.findById(req.userId);
    const tasks = await Tasks.findById(user.tasksId);
    tasks.completed = true;
    await tasks.save();
    res.send('Tasks Completed');
  }
  catch(errors) {
    res.send(errors)
  }
}