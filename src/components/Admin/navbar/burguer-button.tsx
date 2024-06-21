"use client";
import React from "react";
import { StyledBurgerButton } from "./navbar.styles";
import { useSidebarContext } from "@/utils/context/SidebarContext";

export const BurguerButton = () => {
  const { collapsed, setCollapsed } = useSidebarContext();

  return (
    <div
      className={StyledBurgerButton()}
      // open={collapsed}
      onClick={setCollapsed}
    >
      <div />
      <div />
    </div>
  );
};
