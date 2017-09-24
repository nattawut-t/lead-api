const Joi = require('joi')

const createPayload = Joi.object({
  prefixTh: Joi
    .number()
    .required(),
  firstNameTh: Joi
    .string()
    .required()
    .max(100),
  lastNameTh: Joi
    .string()
    .required()
    .max(100),

  prefixEn: Joi
    .number()
    .required(),
  firstNameEn: Joi
    .string()
    .required()
    .max(100),
  lastNameEn: Joi
    .string()
    .required()
    .max(100),

  idcardNo: Joi
    .string()
    .required()
    .regex(/^[0-9]{13}$/)
    .max(13),

  idcardExpiry: Joi
    .date()
    .required(),

  birthDate: Joi
    .date()
    .required(),

  maritalStatus: Joi
    .number()
    .required(),
})

const searchQuery = {
  search: Joi
    .string()
    .alphanum()
    .optional(),
  page: Joi
    .number()
    .optional(),
}

const getParams = {
  id: Joi
    .number()
    .required(),
}

module.exports = {
  searchQuery,
  getParams,
  createPayload,
}