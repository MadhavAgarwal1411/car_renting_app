import heroImage from "@/assets/images/heroCar.png";
import angleIcon from "@/assets/images/angle-icon.png";
import homeIcon from "@/assets/images/homeicon.png";
import profileIcon from "@/assets/images/profileicon.png";
import tripIcon from "@/assets/images/tripicon.png";
import rentIcon from "@/assets/images/renticon.png";
import ashleyImage from "@/assets/images/ashley.png";
import searchIcon from "@/assets/images/search.png";
import slideFirst from "@/assets/images/slide1.png";
import mahindraLogo from "@/assets/images/mahindra.png";
import hyundaiLogo from "@/assets/images/hyundai.png";
import suzukiLogo from "@/assets/images/suzuki.png";
import toyotaLogo from "@/assets/images/toyota.png";
import innova from "@/assets/images/innova.png";
import swift from "@/assets/images/swift.png";
import alto from "@/assets/images/alto.png";
import fortuner from "@/assets/images/fortuner.png";
import edit from "@/assets/images/editicon.png";
import profilepicture from "@/assets/images/profilepic.png";
import paperIcon from "@/assets/images/Paper.png";
import helpIcon from "@/assets/images/help.png";
import rateIcon from "@/assets/images/Like.png";
import settingIcon from "@/assets/images/setting.png";
import logOutIcon from "@/assets/images/logout.png";
import facebookIcon from "@/assets/images/Facebook.png";
import googleIcon from "@/assets/images/Google.png";
import appleIcon from "@/assets/images/apple.png";
import exitIcon from "@/assets/images/exit.png";
import tripCar from "@/assets/images/tripcar1.png";
import messageIcon from "@/assets/images/message.png";
import callIcon from "@/assets/images/call.png";
import plusIcon from "@/assets/images/plus sign.png";

export const Images = {
  heroImage,
  ashleyImage,
  slideFirst,
  mahindraLogo,
  hyundaiLogo,
  suzukiLogo,
  toyotaLogo,
  innova,
  swift,
  alto,
  fortuner,
  profilepicture,
  tripCar,
};

export const Icons = {
  angleIcon,
  homeIcon,
  profileIcon,
  searchIcon,
  tripIcon,
  rentIcon,
  edit,
  paperIcon,
  helpIcon,
  rateIcon,
  settingIcon,
  logOutIcon,
  facebookIcon,
  googleIcon,
  appleIcon,
  exitIcon,
  messageIcon,
  callIcon,
  plusIcon,
};

export const onboarding = [
  {
    id: 1,

    image: Images.slideFirst,
  },
  {
    id: 2,

    image: Images.slideFirst,
  },
  {
    id: 3,

    image: Images.slideFirst,
  },
];

export const carDetails = [
  {
    id: 1,
    title: "Innova Crysta",
    ratings: "4.5⭐ ",
    price: "350/hour",
    image: Images.innova,
  },
  {
    id: 2,
    title: "Suzuki Swift",
    ratings: "4.5⭐ ",
    price: "200/hour",
    image: Images.swift,
  },
  {
    id: 3,
    title: "Suzuki Alto",
    ratings: "4.5⭐ ",
    price: "120/hour",
    image: Images.alto,
  },
  {
    id: 4,
    title: "Fortuner",
    ratings: "4.5⭐ ",
    price: "400/hour",
    image: Images.fortuner,
  },
];
export const carData = [
  {
    tripId: 1,
    carName: "Hyundai Creta petrol 2018",
    tripStartDate: "23-oct-2024",
    tripEndDate: "27-oct-2024",
    tripStartTime: "10:00 AM",
    tripEndTime: "5:00 PM",
    tripOrigin: "New Delhi",
    tripDestination: "Agra",
    tripStatus: "Upcoming",
    tripCall: Icons.callIcon,
    tripMessage: Icons.messageIcon,
    carImage: Images.tripCar,
  },
  {
    tripId: 2,
    carName: "Hyundai Creta petrol 2018",
    tripStartDate: "23-oct-2024",
    tripEndDate: "27-oct-2024",
    tripStartTime: "10:00 AM",
    tripEndTime: "5:00 PM",

    tripOrigin: "New Delhi",
    tripDestination: "Jaipur",
    tripStatus: "Completed",
  },
  {
    tripId: 3,
    carName: "Hyundai Creta petrol 2018",
    tripStartDate: "23-oct-2024",
    tripEndDate: "27-oct-2024",
    tripStartTime: "10:00 AM",
    tripEndTime: "5:00 PM",
    tripOrigin: "New Delhi",
    tripDestination: "Dehradun",
    tripStatus: "Completed",
  },
  {
    tripId: 4,
    carName: "Hyundai Creta petrol 2018",
    tripStartDate: "23-oct-2024",
    tripEndDate: "27-oct-2024",
    tripStartTime: "10:00 AM",
    tripEndTime: "5:00 PM",
    tripOrigin: "New Delhi",
    tripDestination: "Manali",
    tripStatus: "Completed",
  },
];
