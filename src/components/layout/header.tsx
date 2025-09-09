"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Landmark, Menu, ShieldCheck, ShoppingCart, Sparkles, UserCircle } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/products", label: "Productos", icon: ShoppingCart },
  { href: "/investments", label: "Inversiones", icon: Landmark },
  { href: "/recommendations", label: "Recomendaciones", icon: Sparkles },
];

const Header = () => {
  const pathname = usePathname();

  const NavLink = ({ href, label, icon: Icon }: typeof navLinks[0]) => {
    const isActive = pathname === href;
    return (
      <Link href={href} legacyBehavior passHref>
        <a
          className={cn(
            "flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors",
            isActive
              ? "bg-primary/10 text-primary"
              : "text-foreground/70 hover:bg-primary/5 hover:text-primary"
          )}
        >
          <Icon className="h-4 w-4" />
          {label}
        </a>
      </Link>
    );
  };
  
  const MobileNavLink = ({ href, label, icon: Icon }: typeof navLinks[0]) => (
    <Link href={href} legacyBehavior passHref>
      <a className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">
        <Icon className="h-5 w-5" />
        <span className="text-lg">{label}</span>
      </a>
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center gap-2">
          <ShieldCheck className="h-6 w-6 text-primary" />
          <span className="font-headline text-lg font-semibold">Venta Digital Segura</span>
        </Link>
        <nav className="hidden md:flex items-center gap-4 text-sm lg:gap-6">
          {navLinks.map((link) => (
            <NavLink key={link.href} {...link} />
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end gap-4">
          <div className="hidden md:block">
            <UserMenu />
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden shrink-0">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="grid gap-6 text-lg font-medium mt-8">
                {navLinks.map((link) => (
                  <MobileNavLink key={link.href} {...link} />
                ))}
                <div className="border-t pt-6 mt-2">
                  <UserMenu mobile />
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

const UserMenu = ({ mobile = false }: { mobile?: boolean }) => {
  if (mobile) {
    return (
      <div className="grid gap-4">
        <Link href="/login" className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary text-lg">
          Iniciar Sesión
        </Link>
        <Link href="/signup" className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary text-lg">
          Registrarse
        </Link>
      </div>
    );
  }
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" size="icon" className="rounded-full">
          <Avatar>
            <AvatarImage src="https://picsum.photos/seed/user/40/40" />
            <AvatarFallback>
              <UserCircle />
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Mi Cuenta</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild><Link href="/admin">Panel Admin</Link></DropdownMenuItem>
        <DropdownMenuItem>Perfil</DropdownMenuItem>
        <DropdownMenuItem>Facturación</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild><Link href="/login">Iniciar Sesión</Link></DropdownMenuItem>
        <DropdownMenuItem asChild><Link href="/signup">Registrarse</Link></DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Header;
