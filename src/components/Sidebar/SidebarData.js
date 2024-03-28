import React from 'react';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [{
    title: 'Introduction',
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Json Objects',
        path: '/learn/playground/1',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'What is JSON Schema',
        path: '/learn/playground/2',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Creating First Schema',
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Basic Examples',
        path: '/learn/playground/3',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Creating First Schema',
        path: '/learn/playground/4',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
    ]
  },
];