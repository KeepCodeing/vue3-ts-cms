const menuList = [
  {
    id: 1,
    menuname: '系统总览',
    type: '系统',
    url: 'dashboard',
    icon: 'el-icon-dashboard',
    createdAt: '2021.10.01',
    updatedAt: '2021.10.01',
    children: [
      {
        menuname: '系统总览',
        type: '系统',
        url: 'dashboard',
        icon: 'el-icon-dashboard',
        createdAt: '2021.10.01',
        updatedAt: '2021.10.01',
        button: '超级管理员'
      },
      {
        menuname: '系统总览',
        type: '系统',
        url: 'dashboard',
        icon: 'el-icon-dashboard',
        createdAt: '2021.10.01',
        updatedAt: '2021.10.01',
        button: '超级管理员'
      },
      {
        menuname: '系统总览',
        type: '系统',
        url: 'dashboard',
        icon: 'el-icon-dashboard',
        createdAt: '2021.10.01',
        updatedAt: '2021.10.01',
        button: '超级管理员'
      },
      {
        menuname: '系统总览',
        type: '系统',
        url: 'dashboard',
        icon: 'el-icon-dashboard',
        createdAt: '2021.10.01',
        updatedAt: '2021.10.01',
        button: '超级管理员'
      }
    ]
  }
];

for (let i = 2; i < 10; i++) {
  const temp = JSON.parse(JSON.stringify(menuList[0]));
  temp.id = i;
  menuList.push(temp);
}

export { menuList };
