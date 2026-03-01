import { View } from "react-native";
import { ReactNode } from "react";
import { usePathname } from "expo-router";
import NavbarBeforeLogin from "../components/01_NavbarBeforeLogin";
import NavbarBeforeStore from "../components/02_NavbarBeforeStore";
import NavbarAfterStore from "../components/03_NavbarAfterStore";
import Footer from "../components/04_Footer";

type LayoutProps = { children: ReactNode };

export default function Layout({ children }: LayoutProps) {
  const pathname = usePathname(); //get current path
  const userLoggedIn = false;
  const userHasStore = false;

  // Choose Navbar
  const NavbarToShow = !userLoggedIn ? (
    <NavbarBeforeLogin />
  ) : !userHasStore ? (
    <NavbarBeforeStore />
  ) : (
    <NavbarAfterStore />
  );

  return (
    <View className="flex-1 bg-white">
      {NavbarToShow}
      {children}
      <Footer />
    </View>
  );
}
