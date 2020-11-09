import { getRoot } from '../controllers/rootController';

module.exports = async (fastify) => {
  fastify.get('/', getRoot);
};
