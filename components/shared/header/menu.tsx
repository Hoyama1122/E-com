import { Button } from "@/components/ui/button";
import ModeToggle from "./mode-toggle";
import Link from "next/link";
import { EllipsisVertical, ShoppingCart, UserIcon } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const Menu = () => {
  return (
    <div className="flex justify-end items-center gap-4">
      {/* Desktop Menu */}
      <nav className="hidden md:flex items-center gap-3">
        <ModeToggle />
        <Button asChild variant="ghost" className="flex items-center gap-2">
          <Link href="/cart">
            <ShoppingCart size={18} />
            Cart
          </Link>
        </Button>
        <Button asChild className="flex items-center gap-2">
          <Link href="/sign-in">
            <UserIcon size={18} />
            Sign In
          </Link>
        </Button>
      </nav>

      {/* Mobile Menu */}
      <nav className="md:hidden">
        <Sheet>
          <SheetTrigger className="flex items-center">
            <EllipsisVertical size={24} />
          </SheetTrigger>
          <SheetContent side="right" className="flex flex-col gap-4 p-6">
            <SheetTitle className="text-lg font-semibold mb-2">Menu</SheetTitle>
            
            <ModeToggle />

            <Button asChild variant="ghost" className="flex items-center gap-2 w-full justify-start">
              <Link href="/cart">
                <ShoppingCart size={18} />
                Cart
              </Link>
            </Button>

            <Button asChild className="flex items-center gap-2 w-full justify-start">
              <Link href="/sign-in">
                <UserIcon size={18} />
                Sign In
              </Link>
            </Button>

            <SheetDescription className="mt-4 text-sm text-muted-foreground">
              เลือกเมนูที่ต้องการ
            </SheetDescription>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
};

export default Menu;
