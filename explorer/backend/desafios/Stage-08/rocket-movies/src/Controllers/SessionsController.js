const { compare } = require('bcryptjs');
const knex = require('../Database/knex');
const AppError = require('../Utils/AppError');
const authConfig = require('../Configs/auth');
const { sign } = require('jsonwebtoken');

class SessionsController {
 async create( request, response ) {
  const { email, password } = request.body;

  const user = await knex('Users').where('email', email).first();
    if(!user) {
      throw new AppError('E-mail ou senha incorreta', 401);
    }

  const passwordMatched = await compare(password, user.password)
    if(!passwordMatched) {
      throw new AppError('E-mail ou senha incorreta', 401);
    }

  const { secret, expiresIn } = authConfig.jwt
  const token = sign({email}, secret, {
    subject: String(user.id),
    expiresIn
  })
  
  return response.json({ user, token });
 }
}

module.exports = SessionsController;