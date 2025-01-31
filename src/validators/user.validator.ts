import Joi from "joi";

const userValidator = Joi.object({
  username: Joi.string()
    .pattern(/\w{4,}/)
    .required()
    .messages({
      "string.base": "Ім'я користувача повинно бути рядком",
      "string.empty": "Ім'я користувача є обов'язковим",
      "string.pattern.base":
        "Ім'я користувача повинно містити щонайменше 4 символи",
    }),

  password: Joi.string().min(3).max(6).required(),
  age: Joi.number().min(1).max(117).required(),
});

export { userValidator };
