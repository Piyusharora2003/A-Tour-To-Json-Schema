import React from 'react';
import styled from 'styled-components';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu.js';
import { IconContext } from 'react-icons/lib';


const SidebarNav = styled.nav`
  width: 100%;
  height: 93vh;
  display: flex;
  justify-content: center;
`;

const SidebarWrap = styled.div`
  width: 98%;
`;

const Sidebar = () => {
  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <SidebarNav className='bg-gray-900 border-0 border-t-2 border-gray-700'>
          <SidebarWrap>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;