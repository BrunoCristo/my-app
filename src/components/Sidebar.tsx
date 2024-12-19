"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  LayoutDashboard,
  Briefcase,
  FileText,
  Building2,
  PackageOpen,
  Settings,
} from "lucide-react";
import ToggleSidebarButton from "./ToggleSidebarButton";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const pathname = usePathname();

  const navigationItems = [
    { href: "/", icon: LayoutDashboard, label: "Dashboard" },
    { href: "/negociacoes", icon: Briefcase, label: "Negociações" },
    { href: "/contratos", icon: FileText, label: "Contratos" },
    { href: "/empresas", icon: Building2, label: "Empresas" },
    { href: "/servicos", icon: PackageOpen, label: "Servicos" },
    { href: "/configuracoes", icon: Settings, label: "Configurações" },
  ];

  const isActiveRoute = (href) => {
    if (href === "/") {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  return (
    <div
      className={`bg-card text-card-foreground h-screen shadow-lg relative transition-all duration-300 ease-in-out ${
        isOpen ? "w-64" : "w-20"
      }`}
    >
      <ToggleSidebarButton isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />

      <div
        className={`flex flex-col items-center p-6 border-b border-border ${
          isOpen ? "" : "px-2 py-4"
        }`}
      >
        <div className="relative">
          <Image
            src="https://westernfinance.org/wp-content/uploads/speaker-3-v2.jpg"
            alt="Profile"
            width={isOpen ? 80 : 40}
            height={isOpen ? 80 : 40}
            className="rounded-full border-2 border-primary"
          />
          {/* <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full" /> */}
        </div>

        {isOpen && (
          <div className="mt-4 text-center">
            <h2 className="font-semibold text-lg">John Doe</h2>
            <p className="text-sm text-muted-foreground">
              john.doe@example.com
            </p>
            <p className="mt-2 text-sm font-medium text-primary">
              Joven Pan FM
            </p>
          </div>
        )}
      </div>

      <nav className="mt-6 px-2 space-y-1">
        {navigationItems.map((item) => {
          const isActive = isActiveRoute(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${
                isActive
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "hover:bg-accent hover:text-accent-foreground"
              } ${isOpen ? "" : "justify-center px-0"}`}
            >
              <item.icon
                className={`w-5 h-5 ${isOpen ? "mr-3" : ""} ${
                  isActive ? "animate-pulse" : ""
                }`}
              />
              {isOpen && (
                <span className={`${isActive ? "font-semibold" : ""}`}>
                  {item.label}
                </span>
              )}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;
