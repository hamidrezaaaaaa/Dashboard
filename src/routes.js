import DashboardIcon from "./assets/DashboardIcon.svg";
import DashboardIconActive from "./assets/DashboardIconActive.svg";
import TransactionsIcon from "./assets/TransactionsIcon.svg";
import TransactionsIconActive from "./assets/TransactionsIconActive.svg";
import SecureIcon from "./assets/SecureIcon.svg";
import SecureIconActive from "./assets/SecureIconActive.svg";
import SettingsIcon from "./assets/SettingsIcon.svg";
import SettingsIconActive from "./assets/SettingsIconActive.svg";
import AddressIcon from "./assets/svg.svg";
import AddressIconsActive from "./assets/address-icon.svg";
import SignOutIcon from "./assets/SignOutIcon.svg";
import AccountsIcon from "./assets/AccountsIcon.svg";
import AccountsIconActive from "./assets/AccountsIconActive.svg";
import Dashboard from "./pages/Dashboard";
import Account from "./pages/Account";
import Addresses from "./pages/Addresses";
import Orders from "./pages/Orders";
import Settings from "./pages/Settings";
import Financial from "./pages/Financial";


const routes = [
  {
    label: "داشبورد",
    path: "/",
    icon: DashboardIcon,
    activeIcon: DashboardIconActive,
     component: Dashboard,
  },
  {
    label: "پروفایل",
    path: "/accounts",
    icon: AccountsIcon,
    activeIcon: AccountsIconActive,
    component: Account,
  },
  {
    label: "آدرس ها",
    path: "/Addresses",
    icon: AddressIcon,
    activeIcon: AddressIconsActive,
     component: Addresses,
  },
  {
    label: "سفارشات اخیر",
    path: "/orders",
    icon: SecureIcon,
    activeIcon: SecureIconActive,
    component: Orders,
  },
  {
    label :"سابقه مالی",
    path: "/financial-history",
    icon : TransactionsIcon,
    activeIcon:TransactionsIconActive,
    component: Financial

  },
  {
    label: "تنظیمات",
    path: "/settings",
    icon: SettingsIcon,
    activeIcon: SettingsIconActive,
    component: Settings,
  },
  {
    label: "خروج",
    path: "/sign-out",
    icon: SignOutIcon,
    activeIcon: SignOutIcon,
  },
];

export default routes;