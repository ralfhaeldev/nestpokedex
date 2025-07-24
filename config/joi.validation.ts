import * as Joi from 'joi';

export const JoiValidationSchema = Joi.object({
        MONGODB: Joi.required(),
        MONGODB_NUBE: Joi.required(),
        NAMEDB: Joi.required(),
        PORT: Joi.number().default(3005),
        DEFAULT_LIMIT: Joi.number().default(6)
        
})