import { NavbarWrapper } from "@/components/Admin/navbar/navbar";
import { SidebarWrapper } from "@/components/Admin/slidebar/sidebar";

export default function AdminLayout({children}: {children: React.ReactNode}) {
    return (
        <section>
 <NavbarWrapper>{children}</NavbarWrapper>  
 <SidebarWrapper ></SidebarWrapper>        
        </section>
    );
}