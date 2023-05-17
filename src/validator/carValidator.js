import Joi from "joi";

const carValidator = Joi.object(
    {
    brand: Joi.string().regex(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/).required().messages({
        "string.pattern.base": "Only letters from 1 to 20 symbols"
            }),

   price: Joi.number().min(0).max(1000000).required().messages({"number.min":"min 0", "number.max":"max 1000000"}),

        year: Joi.number().min(1990).max(new Date().getFullYear()).required().messages({"number.min":"min 1990",
          "number.max":"It's date don't come"})



}
)

export  {carValidator}