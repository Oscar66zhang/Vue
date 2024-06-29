
import Mock from 'mockjs';

const users = [
  { id: 1, name: 'Computer', content:'电脑 ',data:"2012-8-9" },
  { id: 2, name: 'iPhone', content:'手机', data:'2013-11-11' },
  { id: 3, name: 'Keyboard', content:'键盘', data:'2015-10-9' },
];

Mock.mock('/api/users', 'get', () => {
  return {
    code: 200,
    data: users,
  };
});

export default Mock;
