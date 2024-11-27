const data = { data: { message: 'Ok' } };
module.exports = {
  'POST /api/advancedForm': (req, res) => {
    setTimeout(
      () => {
        res.json(data);
      },
      Math.random(5, 10) * 1000,
    );
  },
};
