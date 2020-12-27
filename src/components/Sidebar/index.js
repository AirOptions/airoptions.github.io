import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SideBtnWrap,
  SidebarRoute,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
} from "./SidebarElements";

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick= {toggle}>
      <Icon isOpen = {isOpen} onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper isOpen = {isOpen}>
        <SidebarMenu onClick = {toggle} isOpen = {isOpen}>
          <SidebarLink to="/">Home</SidebarLink>
          <SidebarLink to="/features" isOpen = {isOpen}>Features</SidebarLink>
          <SidebarLink to="/callouts" isOpen = {isOpen}>Callouts</SidebarLink>
          <SidebarLink to="/pricing" isOpen = {isOpen}>Pricing</SidebarLink>
          <SidebarLink to="/disclaimer" isOpen = {isOpen}>Disclaimer</SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
