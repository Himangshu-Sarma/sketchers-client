import Image from "next/image";
import logo from "../../../assets/logo.webp";

const Logo = () => {
  return (
    <Image
      src={logo}
      alt="Logo"
      width={100}
      height={100}
    />
  );
};

export default Logo;
