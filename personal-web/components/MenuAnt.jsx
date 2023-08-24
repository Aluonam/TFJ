import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
const items = [
    // ------------------------------- BLOQUE 1 ----------------------
  {
    label: 'Información',
    key: 'mail',
    // icon: <MailOutlined />,
  },
    // ------------------------------- BLOQUE 2 ----------------------
  {
    label: 'Personal',
    key: 'app',
    // icon: <AppstoreOutlined />,
    disabled: true,
  },
    // ------------------------------- BLOQUE 3 ----------------------
  {
    label: 'Otros equipos',
    key: 'SubMenu',
    // icon: <SettingOutlined />,
    children: [
      // {
      //   type: 'group',
      //   label: 'Item 1',
      //   children: [
      //     {
      //       label: 'Option 1',
      //       key: 'setting:1',
      //     },
      //     {
      //       label: 'Option 2',
      //       key: 'setting:2',
      //     },
      //   ],
      // },
      {
        type: 'group',
        // label: 'Item 2',
        children: [
          {
            label: 'personal',
            key: 'setting:3',
          },
          {
            label: 'red',
            key: 'setting:4',
          },
        ],
      },
    ],
  },
  // ------------------------------- BLOQUE 4 ----------------------
  {
    label: (
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
        Mi equipo
      </a>
    ),
    key: 'alipay',
  },
];
const MenuAnt = () => {
  const [current, setCurrent] = useState('mail');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};
export default MenuAnt;