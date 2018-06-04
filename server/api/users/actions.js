const _ = require('lodash');
const knex = require('../../config/knex');

async function create (req, res, next) {
  try {

    console.log(req.body);
    const createUser = await knex('users')
      .insert(req.body)
      .returning();

    const user = await knex('users')
      .where({ id : createUser[0] })
      .first();

    console.log(user);
    return res.status(200).json(user);

    // return res.status(403).json({ error : 'Unauthorized' });
  } catch (err) {
    return res.status(500).json(err);
  }
}

module.exports = {
  create,
};