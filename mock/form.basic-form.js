const data = { data: { message: 'Ok' } };
module.exports = {
  'POST /api/basicForm': (req, res) => {
    setTimeout(
      () => {
        res.json(data);
      },
      Math.random(5, 10) * 1000,
    );
  },
};
