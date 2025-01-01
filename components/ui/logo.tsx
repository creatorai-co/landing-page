import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/logo.svg";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex items-center shrink-0" aria-label="CreatorAI">
      <Image src={logo} alt="CreatorAI" width={32} height={32} />
      <span
        className="ml-2 animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text font-nacelle text-2xl font-semibold text-transparent"
      >
        Creator
        <span
          className="ml-1 bg-gradient-to-r from-purple-500 to-violet-500 bg-clip-text text-transparent"
        >
          AI
        </span>
      </span>
    </Link>
  );
}
