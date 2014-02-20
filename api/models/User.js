/**
 * User
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {
      firstName: {
          type: 'string'
      },
      lastName: {
          type: 'string'
      },
      email: {
          type: 'email'
      },
      provider: {
          type: 'string'
      },
      password: {
          type: 'string'
      }
  }

};
