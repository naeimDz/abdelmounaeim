import { NavbarWrapper } from "@/components/Admin/navbar/navbar";

export default function AdminLayout({children}: {children: React.ReactNode}) {
    return (
        <section>
 <NavbarWrapper>{children}</NavbarWrapper>          
        </section>
    );
}