import Link from "next/link";

export default function Navbar() {
  return (
    <div className="bg-white h-12 mb-4 shadow-md dark:bg-gray-800 dark:text-white">
      <div className="container mx-auto flex items-center justify-between px-4 py-2">
        <Link href="/">
          <a className="text-xl font-bold text-gray-800 dark:text-gray-200">
            Sony
          </a>
        </Link>
      </div>
    </div>
  );
}
