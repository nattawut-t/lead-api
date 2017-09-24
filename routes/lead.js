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

const tags = ['api', 'lead']

module.exports = [
  {
    method: 'GET',
    path: '/api/leads',
    config: {
      handler: search,
      description: 'Search Leads',
      tags,
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
      tags,
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
      tags,
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
      tags,
      validate: {
        payload: createPayload,
      },
      auth: 'jwt',
    },
  },
]