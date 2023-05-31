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

export const NavigationRoutes = [
  { id: 1, name: "Home", href: "home" },
  { id: 2, name: "About", href: "#about" },
  { id: 3, name: "The World", href: "#explore" },
  { id: 4, name: "How Metaverus Works", href: "#" },
  { id: 5, name: "What's New?", href: "#" },
  { id: 6, name: "People on the World", href: "#" },
  { id: 7, name: "Insight", href: "#" },
];

export const socialMedia = [
  { id: 1, name: "Twitter", href: "/", icon: TwitterIcon },
  { id: 2, name: "Linkedin", href: "/", icon: LinkedinIcon },
  { id: 3, name: "Instagram", href: "/", icon: InstagramIcon },
  { id: 4, name: "FaceBook", href: "/", icon: FaceBookIcon },
  { id: 5, name: "Reddit", href: "/", icon: RedditIcon },
  { id: 6, name: "Discord", href: "/", icon: DiscordIcon },
];

export const exploreWorlds = [
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

export const startingFeatures = [
  "Find a world that suits you and you want to enter",
  "Enter the world by reading basmalah to be safe",
  "No need to beat around the bush, just stay on the gas and have fun",
];

export const newFeatures = [
  {
    icon: HeadsetIcon,
    title: "A new world",
    subtitle:
      "we have the latest update with new world for you to try never mind",
  },
  {
    icon: VrpanoIcon,
    title: "More realistic",
    subtitle:
      "In the latest update, your eyes are narrow, making the world more realistic than ever",
  },
];

export const insights = [
  {
    imgUrl: "/planet-06.png",
    title: "The launch of the Metaverse makes Elon musk ketar-ketir",
    subtitle:
      "Magna etiam tempor orci eu lobortis elementum nibh tellus molestie. Diam maecenas sed enim ut sem viverra alique.",
  },
  {
    imgUrl: "/planet-07.png",
    title: "7 tips to easily master the madness of the Metaverse",
    subtitle:
      "Vitae congue eu consequat ac felis donec. Et magnis dis parturient montes nascetur ridiculus mus. Convallis tellus id interdum",
  },
  {
    imgUrl: "/planet-08.png",
    title: "With one platform you can explore the whole world virtually",
    subtitle:
      "Quam quisque id diam vel quam elementum. Viverra nam libero justo laoreet sit amet cursus sit. Mauris in aliquam sem",
  },
];
