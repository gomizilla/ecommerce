import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";

export default function Navbar() {
  return (
    <div className="bg-base-100">
      <div className="navbar m-auto max-w-7xl flex-col gap-2 sm:flex-row">
        <div className="flex-1">
          <Link href="/" className="btn btn-ghost text-xl normal-case">
            <Image src={logo} height={40} width={40} alt="Waaamazon Logo" />
            Waaaamazon
          </Link>
        </div>
      </div>
    </div>
  );
}
