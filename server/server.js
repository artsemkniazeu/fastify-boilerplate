import fastify from 'fastify';
import path from 'path';
import AutoLoad from 'fastify-autoload';
import uuidv4 from 'uuid/v4';

const createRequestId = () => uuidv4();

const createServer = ({ logger, port }) => {
  const server = fastify({
    ignoreTrailingSlash: true,
    logger: {
      genReqId: createRequestId,
      ...logger,
    },
  });

  console.log(__dirname);
  server.register(AutoLoad, {
    dir: path.join(__dirname, 'src/routes'),
  });

  server.listen(port, (err) => {
    if (err) {
      server.log.error(err);
      console.log(err);
      process.exit(1);
    }
    server.log.info('Server Started');
  });

  return server;
};

module.exports = {
  createServer,
};
