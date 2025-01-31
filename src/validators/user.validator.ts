import Joi from "joi";

const userValidator = Joi.object({
  username: Joi.string()
    .pattern(/\w+{4, }/)
    .required(),
  password: Joi.string().min(3).max(6).required(),
  age: Joi.number().min(1).max(117).required(),
});

export { userValidator };
