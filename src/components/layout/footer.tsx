import Link from "next/link";
import FacebookIcon from "../icons/facebook";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6 py-8 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="font-headline text-lg">Opportunity Group</p>
          <p className="text-sm text-primary-foreground/80">&copy; {new Date().getFullYear()} Todos los derechos reservados.</p>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="https://www.facebook.com/profile.php?id=61575274133657" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FacebookIcon className="h-6 w-6 hover:opacity-80 transition-opacity" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
