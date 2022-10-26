import {
  budget_img,
  time_img,
  transport_img,
  customize_img,
  manali_popup,
  kasol_popup,
  ladakh_popup,
  valley_popup,
  offbeat_img,
  booked_img,
  kasol_img,
  laptop_img1,
  phone_img,
  laptop_img2,
} from "../public/imagesList/list";
import {
  Camping,
  Hiking,
  Offbeat,
  Biking,
  Forest,
  Apple,
  Historial,
  Romantic,
  Adventure,
  Offroading,
  Traditional,
  Waterfall,
} from "../public/imagesList/list";

/**home B */
export const card_icon = [
  {
    path: budget_img,
    title: "Fully Personalised",
    para: "Get hour-by-hour itinerary based on your interests & budget",
  },
  {
    path: time_img,
    title: "Fast & Free",
    para: "No more google searches to find the best deals,plan it for free",
  },
  {
    path: transport_img,
    title: "Save Extra",
    para: "Choose from the most affordable stays,activities and transport",
  },
  {
    path: customize_img,
    title: "Easy to Customise",
    para: "Shape the itinerary with your personal touch & manage all your bookings",
  },
];

/**home C */
export const dream_call = [
  {
    title: "ITINERARY",
    para: "Offbeat Autumn Manali Trip",
    imgPath: offbeat_img,
    link: "https://drive.google.com/file/d/1Kzp-FsRHKG6z-FjjxuerPJ-1nmW_Okpj/view",
  },
  {
    title: "MANALI",
    para: "132 trips booked last week",
    imgPath: booked_img,
    link: false,
  },
  {
    title: "ITINERARY",
    para: "Kasol - Manali Weekend Gateway",
    imgPath: kasol_img,
    link: "https://drive.google.com/file/d/1YZx_IcOmylGlcp8WN0pkqK82ARXiJ8Wg/view",
  },
];

export const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
/**home E */
export const works_section = [
  {
    path: laptop_img1,
    title: "Your Needs,Our Magic",
    para: "Share your trip requirements to feed our magical recommendation algorithm",
  },
  {
    path: phone_img,
    title: "Start customising your itinerary",
    para: "Choose from a variety of stays & activities of your choice & budget",
  },
  {
    path: laptop_img2,
    title: "Tap once & book it all",
    para: "Do all your stay, activities& transport booking at just one click, at only 20% booking amount",
  },
];

/**trip section A */

export const destination_object = {
  destination_1: {
    path: manali_popup,
    name: "destination_1",
    title: "Manali",
    selected: false,
  },
  destination_2: {
    path: kasol_popup,
    name: "destination_2",
    title: "Kasol",
    selected: false,
  },
  destination_3: {
    path: ladakh_popup,
    name: "destination_3",
    title: "Leh-Ladakh",
    selected: false,
  },
  destination_4: {
    path: valley_popup,
    name: "destination_4",
    title: "Spiti Valley",
    selected: false,
  },
};

/**trip section two */
export const tripTwoData = [
  {
    tripName: "Camping",
    tripLoc: Camping,
  },
  {
    tripName: "Hiking",
    tripLoc: Hiking,
  },
  {
    tripName: "Offbeat",
    tripLoc: Offbeat,
  },
  {
    tripName: "Apple Orchards",
    tripLoc: Apple,
  },
  {
    tripName: "Biking",
    tripLoc: Biking,
  },
  {
    tripName: "Forest",
    tripLoc: Forest,
  },
  {
    tripName: "Historical",
    tripLoc: Historial,
  },
  {
    tripName: "Romantic",
    tripLoc: Romantic,
  },
  {
    tripName: "Adventure",
    tripLoc: Adventure,
  },
  {
    tripName: "Offroading",
    tripLoc: Offroading,
  },
  {
    tripName: "Traditional",
    tripLoc: Traditional,
  },
  {
    tripName: "Waterfall",
    tripLoc: Waterfall,
  },
];
