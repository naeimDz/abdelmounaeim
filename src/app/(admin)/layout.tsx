import { NavbarWrapper } from "@/components/Admin/navbar/navbarwrapped";

export default function AdminLayout({children}: {children: React.ReactNode}) {
    return (
        <section>
            <NavbarWrapper children={undefined}  />
            {children}
        </section>
    );
}