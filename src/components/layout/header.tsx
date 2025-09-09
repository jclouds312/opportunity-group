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
import { Landmark, Menu, LogOut, ShoppingCart, Sparkles, UserCircle, Briefcase, User as UserIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ModeToggle } from "../mode-toggle";
import { useAuth } from "@/hooks/use-auth";
import { auth } from "@/lib/firebase";
import { signOut } from "firebase/auth";

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
      <Link
        href={href}
        className={cn(
          "flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors",
          isActive
            ? "bg-primary/10 text-primary"
            : "text-foreground/70 hover:bg-primary/5 hover:text-primary"
        )}
      >
        <Icon className="h-4 w-4" />
        {label}
      </Link>
    );
  };
  
  const MobileNavLink = ({ href, label, icon: Icon }: typeof navLinks[0]) => (
    <Link
      href={href}
      className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
    >
      <Icon className="h-5 w-5" />
      <span className="text-lg">{label}</span>
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center gap-2">
          <Briefcase className="h-6 w-6 text-primary" />
          <span className="font-headline text-lg font-semibold">Opportunity Group</span>
        </Link>
        <nav className="hidden md:flex items-center gap-4 text-sm lg:gap-6">
          {navLinks.map((link) => (
            <NavLink key={link.href} {...link} />
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end gap-2">
          <ModeToggle />
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
  const { user, userRole, loading } = useAuth();

  const handleLogout = async () => {
    await signOut(auth);
  };

  if (loading) {
     return null;
  }

  if (mobile) {
    return (
      <div className="grid gap-4">
        {user ? (
          <>
            <div className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground">
               <Avatar className="h-10 w-10">
                <AvatarImage src={user.photoURL || `https://picsum.photos/seed/${user.uid}/40/40`} />
                <AvatarFallback>
                  {user.displayName?.charAt(0) || <UserIcon />}
                </AvatarFallback>
              </Avatar>
              <span className="text-lg font-medium">{user.displayName || user.email}</span>
            </div>
             {userRole === 'admin' && (
              <Link href="/admin" className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary text-lg">
                Panel Admin
              </Link>
            )}
            <button onClick={handleLogout} className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary text-lg text-left">
              Cerrar Sesión
            </button>
          </>
        ) : (
          <>
            <Link href="/login" className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary text-lg">
              Iniciar Sesión
            </Link>
            <Link href="/signup" className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary text-lg">
              Registrarse
            </Link>
          </>
        )}
      </div>
    );
  }
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" size="icon" className="rounded-full">
          <Avatar>
            {user ? (
              <>
                 <AvatarImage src={user.photoURL || `https://picsum.photos/seed/${user.uid}/40/40`} />
                <AvatarFallback>{user.displayName?.charAt(0) || <UserIcon />}</AvatarFallback>
              </>
            ) : (
              <AvatarFallback>
                <UserCircle />
              </AvatarFallback>
            )}
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {user ? (
          <>
            <DropdownMenuLabel>{user.displayName || user.email}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {userRole === 'admin' && (
              <DropdownMenuItem asChild>
                <Link href="/admin">Panel Admin</Link>
              </DropdownMenuItem>
            )}
            <DropdownMenuItem>Perfil</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleLogout} className="flex items-center gap-2 cursor-pointer">
              <LogOut />
              <span>Cerrar Sesión</span>
            </DropdownMenuItem>
          </>
        ) : (
          <>
            <DropdownMenuLabel>Mi Cuenta</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild><Link href="/login">Iniciar Sesión</Link></DropdownMenuItem>
            <DropdownMenuItem asChild><Link href="/signup">Registrarse</Link></DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Header;
