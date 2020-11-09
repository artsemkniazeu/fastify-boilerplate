const getRoot = async (req, res) => {
  const { query } = req;
  console.log(query);
  res
    .code(200)
    .send({
      hello: 'world!',
    });
};

module.exports = {
  getRoot,
};
