import DiscordIcon from "@/assets/svgs/DiscordIcon";
import FaceBookIcon from "@/assets/svgs/FaceBookIcon";
import InstagramIcon from "@/assets/svgs/InstagramIcon";
import LinkedinIcon from "@/assets/svgs/LinkedinIcon";
import RedditIcon from "@/assets/svgs/RedditIcon";
import TwitterIcon from "@/assets/svgs/TwitterIcon";
import planet01 from "../assets/images/planet-01.png";
import planet02 from "../assets/images/planet-02.png";
import planet03 from "../assets/images/planet-03.png";
import planet04 from "../assets/images/planet-04.png";
import planet05 from "../assets/images/planet-05.png";
import HeadsetIcon from "@/assets/svgs/HeadsetIcon";
import VrpanoIcon from "@/assets/svgs/VrpanoIcon";
import planet6 from "../assets/images/planet-06.png";
import planet7 from "../assets/images/planet-07.png";
import planet8 from "../assets/images/planet-08.png";
import { StaticImageData } from "next/image";
import React from "react";

export interface NavigationRoute {
  id: number;
  name: string;
  href: string;
}

export interface SocialMediaLink {
  id: number;
  name: string;
  href: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export interface ExploreWorld {
  id: string;
  img: StaticImageData;
  title: string;
}

export interface NewFeature {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  subtitle: string;
}

export interface Insight {
  id: number;
  href: string;
  imgUrl: StaticImageData;
  title: string;
  subtitle: string;
}

export const NavigationRoutes: NavigationRoute[] = [
  { id: 1, name: "Home", href: "#home" },
  { id: 2, name: "About", href: "#about" },
  { id: 3, name: "The World", href: "#explore" },
  { id: 4, name: "How Metaverus Works", href: "#GetStarted" },
  { id: 5, name: "What's New?", href: "#WhatsNew" },
  { id: 6, name: "People on the World", href: "#PeopleOnTheWorld" },
  { id: 7, name: "Insight", href: "#Insight" },
  { id: 8, name: "Feedback", href: "#Feedback" },
];

export const socialMedia: SocialMediaLink[] = [
  {
    id: 1,
    name: "Twitter",
    href: "https://github.com/hossain101199",
    icon: TwitterIcon,
  },
  {
    id: 2,
    name: "Linkedin",
    href: "https://github.com/hossain101199",
    icon: LinkedinIcon,
  },
  {
    id: 3,
    name: "Instagram",
    href: "https://github.com/hossain101199",
    icon: InstagramIcon,
  },
  {
    id: 4,
    name: "FaceBook",
    href: "https://github.com/hossain101199",
    icon: FaceBookIcon,
  },
  {
    id: 5,
    name: "Reddit",
    href: "https://github.com/hossain101199",
    icon: RedditIcon,
  },
  {
    id: 6,
    name: "Discord",
    href: "https://github.com/hossain101199",
    icon: DiscordIcon,
  },
];

export const exploreWorlds: ExploreWorld[] = [
  {
    id: "world-1",
    img: planet01,
    title: "The Hogwarts",
  },
  {
    id: "world-2",
    img: planet02,
    title: "The Upside Down",
  },
  {
    id: "world-3",
    img: planet03,
    title: "Kadirojo Permai",
  },
  {
    id: "world-4",
    img: planet04,
    title: "Paradise Island",
  },
  {
    id: "world-5",
    img: planet05,
    title: "Hawkins Labs",
  },
];

export const startingFeatures: string[] = [
  "Find a world that suits you and you want to enter",
  "Enter the world by reading basmalah to be safe",
  "No need to beat around the bush, just stay on the gas and have fun",
];

export const newFeatures: NewFeature[] = [
  {
    icon: VrpanoIcon,
    title: "A new world",
    subtitle:
      "we have the latest update with new world for you to try never mind",
  },
  {
    icon: HeadsetIcon,
    title: "More realistic",
    subtitle:
      "In the latest update, your eyes are narrow, making the world more realistic than ever",
  },
];

export const insights: Insight[] = [
  {
    id: 1,
    href: "#",
    imgUrl: planet6,
    title: "The launch of the Metaverse makes Elon musk ketar-ketir",
    subtitle:
      "Magna etiam tempor orci eu lobortis elementum nibh tellus molestie. Diam maecenas sed enim ut sem viverra alique.",
  },
  {
    id: 2,
    href: "#",
    imgUrl: planet7,
    title: "7 tips to easily master the madness of the Metaverse",
    subtitle:
      "Vitae congue eu consequat ac felis donec. Et magnis dis parturient montes nascetur ridiculus mus. Convallis tellus id interdum",
  },
  {
    id: 3,
    href: "#",
    imgUrl: planet8,
    title: "With one platform you can explore the whole world virtually",
    subtitle:
      "Quam quisque id diam vel quam elementum. Viverra nam libero justo laoreet sit amet cursus sit. Mauris in aliquam sem",
  },
];
