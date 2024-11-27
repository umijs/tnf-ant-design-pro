const data = {
  data: [
    {
      province: '浙江省',
      name: '杭州市',
      id: '330100',
    },
    {
      province: '浙江省',
      name: '宁波市',
      id: '330200',
    },
    {
      province: '浙江省',
      name: '温州市',
      id: '330300',
    },
    {
      province: '浙江省',
      name: '嘉兴市',
      id: '330400',
    },
    {
      province: '浙江省',
      name: '湖州市',
      id: '330500',
    },
    {
      province: '浙江省',
      name: '绍兴市',
      id: '330600',
    },
    {
      province: '浙江省',
      name: '金华市',
      id: '330700',
    },
    {
      province: '浙江省',
      name: '衢州市',
      id: '330800',
    },
    {
      province: '浙江省',
      name: '舟山市',
      id: '330900',
    },
    {
      province: '浙江省',
      name: '台州市',
      id: '331000',
    },
    {
      province: '浙江省',
      name: '丽水市',
      id: '331100',
    },
  ],
};
module.exports = {
  'GET /api/geographic/city/:province': (req, res) => {
    setTimeout(
      () => {
        res.json(data);
      },
      Math.random(5, 10) * 1000,
    );
  },
};
