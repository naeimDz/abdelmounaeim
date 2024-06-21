
import { Link } from "@nextui-org/link";
import { Navbar, NavbarContent } from "@nextui-org/navbar";
import React from "react";


interface Props {
  children: React.ReactNode;
}

export const NavbarWrapper = ({ children }: Props) => {
  return (
    <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
      <Navbar
        isBordered
        className="w-full"
        classNames={{
          wrapper: "w-full max-w-full",
        }}
      >
        <NavbarContent className="md:hidden">
          <h6>3 line</h6>
        </NavbarContent>
        <NavbarContent className="w-full max-md:hidden">
          <h4>Search bar</h4>
        </NavbarContent>
        <NavbarContent
          justify="end"
          className="w-fit data-[justify=end]:flex-grow-0"
        >
          <div className="flex items-center gap-2 max-md:hidden">

            <span>Feedback?</span>
          </div>

         

          <div className="max-md:hidden">
          <span>support</span>
          </div>

          <Link
            href="https://github.com/Siumauricio/nextui-dashboard-template"
            target={"_blank"}
          >

          </Link>
          <NavbarContent>
 <h3>user</h3>
          </NavbarContent>
        </NavbarContent>
      </Navbar>
      {children}
    </div>
  );
};
