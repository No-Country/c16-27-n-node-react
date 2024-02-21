export const createError = (status, message) => {
  const err = new Error();
  err.status = status;
  err.message = message;
  return err;
};

//EXAMPLE
// const user = await User.findOne({ username: req.body.username });
//     if (!user) return next(createError(404, "User not found!"));