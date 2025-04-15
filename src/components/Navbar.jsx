"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { navLinks } from "@/staticShit/navLinks";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { useEffect } from "react";

const Navbar = () => {
  const [openSubRoutes, setOpenSubRoutes] = useState({});
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const toggleSubRoutes = (href, event) => {
    event.preventDefault();

    setOpenSubRoutes((prev) => ({
      ...prev,
      [href]: !prev[href],
    }));
    setIsMenuOpen(false);
    router.push(href);
  };

  const navigateToSubLink = (href, event) => {
    event.preventDefault();
    setIsMenuOpen(false);
    router.push(href);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest("aside") && !event.target.closest("button")) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("click", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isMenuOpen]);

  console.log(pathname, "path");

  return (
    <div className=" fixed top-0 left-0 w-full mb-8 z-50">
      {/* Mobile Menu Button */}
      <div className="md:hidden flex justify-between items-center p-4 bg-gray-200">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <IoClose size={30} /> : <GiHamburgerMenu size={30} />}
        </button>
      </div>

      {/* Sidebar Navigation */}
      <aside
        className={`bg-gray-200 md:w-64 w-full p-6 fixed h-full flex items-center flex-col transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:block`}
      >
        <Image
          src="/logo.jpg"
          alt="Logo"
          width={200}
          height={200}
          className="rounded-lg mb-6 hover:cursor-pointer"
          onClick={() => {
            router.push("/");
            setIsMenuOpen(false);
          }}
        />
        <nav>
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  className={`block font-semibold cursor-pointer ${
                    pathname === link.href
                      ? "text-blue-500 underline"
                      : "text-gray-800 hover:underline"
                  }`}
                  onClick={(event) => toggleSubRoutes(link.href, event)}
                  href={link.href}
                >
                  {link.name}
                </a>
                {link.subRoute && openSubRoutes[link.href] && (
                  <ul className="ml-4 mt-2 space-y-2">
                    {link.subRoute.map((subLink) => (
                      <li key={subLink.href}>
                        {console.log(subLink.href, "sublink")}
                        <a
                          href={subLink.href}
                          className={`block cursor-pointer ${
                            pathname === subLink.href
                              ? "text-blue-500 underline"
                              : "text-gray-600 hover:underline"
                          }`}
                          onClick={(event) =>
                            navigateToSubLink(subLink.href, event)
                          }
                        >
                          {subLink.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </div>
  );
};

export default Navbar;
