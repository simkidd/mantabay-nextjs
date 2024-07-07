export interface Menu {
  label: string;
  href: string;
}

export const navlist: Menu[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Projects", href: "/projects" },
  { label: "Contact Us", href: "/contact-us" },
];
