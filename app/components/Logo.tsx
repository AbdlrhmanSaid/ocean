import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo.png";
const Logo = () => {
  return (
    <Link href="#home" className="flex items-end gap-2">
      <Image src={logo} height={32} width={32} alt="" />
      <div className="relative">
        <h1 className="capitalize text-white text-xl font-bold tracking-wide">
          ocean
        </h1>
        <div className="absolute -right-2.5 bottom-1.5 w-2 h-2 rounded-full bg-sky-700"></div>
      </div>
    </Link>
  );
};

export default Logo;
