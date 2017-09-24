const Joi = require('Joi')
const {
  search,
  get,
  create,
  update,
} = require('../controllers/lead')
const {
  createPayload,
  searchQuery,
  getParams,
} = require('../schemas/lead')

module.exports = [
  {
    method: 'GET',
    path: '/api/leads',
    config: {
      handler: search,
      description: 'Search Leads',
      tags: ['api'],
      validate: {
        query: searchQuery,
      },
    },
  },
  {
    method: 'GET',
    path: '/api/leads/{id}',
    config: {
      handler: get,
      description: 'Get Lead',
      tags: ['api'],
      validate: {
        params: getParams,
      },
      auth: 'jwt',
    },
  },
  {
    method: 'POST',
    path: '/api/leads',
    config: {
      handler: create,
      description: 'Create Lead',
      tags: ['api'],
      validate: {
        payload: createPayload,
      },
      auth: 'jwt',
    },
  },
  {
    method: 'PUT',
    path: '/api/leads',
    config: {
      handler: update,
      description: 'Update Lead',
      tags: ['api'],
      validate: {
        payload: createPayload,
      },
      auth: 'jwt',
    },
  },
]