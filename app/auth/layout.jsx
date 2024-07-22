import Link from "next/link";
export default function LoginLayout({ children }) {
  return (
    <div className="grid grid-rows-[auto_1fr] h-dvh">
      <div className="w-full flex justify-between items-center p-4">
        <div className="logo">foody logo</div>
        <Link href={"/"} className="bg-primary text-white py-2 px-4 rounded-sm">
          go back
        </Link>
      </div>
      <div className="grid place-items-center p-4 sm:p-0">{children}</div>
    </div>
  );
}
