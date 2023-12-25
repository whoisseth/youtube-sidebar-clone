/** @format */

import { RiVideoLine, RiVideoFill } from "react-icons/ri";
import { BsGrid3X3Gap } from "react-icons/bs";
import { IoMdPerson } from "react-icons/io";
import YtShortsIcon from "./svg/YtShortsIcon";
import { SiYoutubeshorts } from "react-icons/si";
import Subscriptions from "./svg/Subscriptions";
import SubscriptionsFill from "./svg/SubscriptionsFill";
import { GoHome, GoHomeFill } from "react-icons/go";
import { VscHistory } from "react-icons/vsc";

type SidebarItem = {
  title?: string;
  path?: string;
  defaultIcon?: React.ReactNode;
  activeIcon?: React.ReactNode;
  nestedItems?: SidebarItem[];
  sectionTitle?: string;
  showWhenCollapsed?: boolean;
};

export const ytSidebarDataset: SidebarItem[] = [
  {
    title: "Home",
    path: "/home",
    defaultIcon: <GoHome />,
    activeIcon: <GoHomeFill />,
    showWhenCollapsed: true
  },
  {
    title: "Trending",
    path: "/trending",
    defaultIcon: <BsGrid3X3Gap />,
    activeIcon: <BsGrid3X3Gap />,
    showWhenCollapsed: true
  },
  {
    title: "Subscriptions",
    path: "/shorts",
    defaultIcon: <Subscriptions />,
    activeIcon: <SubscriptionsFill />,
    showWhenCollapsed: true
  },
  {
    title: "Shorts",
    path: "/subscriptions",
    defaultIcon: <YtShortsIcon />,
    activeIcon: <SiYoutubeshorts />,
    showWhenCollapsed: true
  },
  {
    sectionTitle: "Library",
    nestedItems: [
      {
        title: "History",
        path: "/history",
        defaultIcon: <VscHistory />
        // activeIcon: <RiVideoFill />
      },
      {
        title: "Your Videos",
        path: "/your-videos",
        defaultIcon: <RiVideoLine />,
        activeIcon: <RiVideoFill />
      }
    ]
  },
  {
    sectionTitle: "Account",
    nestedItems: [
      {
        title: "Your Channel",
        path: "/your-channel",
        defaultIcon: <IoMdPerson />,
        activeIcon: <IoMdPerson />
      }
    ]
  }
];
