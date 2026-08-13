import { workBlur } from "./workBlur";

export type WorkPhoto = {
  src: string;
  alt: string;
  caption: string;
  blurDataURL: string;
};

export const WORK_PHOTOS: WorkPhoto[] = [
  { src: "/images/work/aqe-work-01.jpg", alt: "Crystal chandelier installation in a two-story foyer", caption: "Crystal chandelier install · foyer", blurDataURL: workBlur.img1 },
  { src: "/images/work/aqe-work-02.jpg", alt: "Low-voltage landscape path lighting along a garden bed", caption: "Path lighting · garden bed", blurDataURL: workBlur.img2 },
  { src: "/images/work/aqe-work-03.jpg", alt: "Technician testing a wall outlet with a multimeter", caption: "Troubleshooting a dead outlet", blurDataURL: workBlur.img3 },
  { src: "/images/work/aqe-work-04.jpg", alt: "Full front-yard landscape lighting at dusk", caption: "Landscape lighting · dusk", blurDataURL: workBlur.img4 },
  { src: "/images/work/aqe-work-05.jpg", alt: "Low-voltage path lighting along a side yard at night", caption: "Path lighting · side yard", blurDataURL: workBlur.img5 },
  { src: "/images/work/aqe-work-06.jpg", alt: "Uplighting on a mature palm tree trunk", caption: "Palm tree uplighting", blurDataURL: workBlur.img6 },
  { src: "/images/work/aqe-work-07.jpg", alt: "AQE technician next to a residential meter panel", caption: "Meter panel swap", blurDataURL: workBlur.img7 },
  { src: "/images/work/aqe-work-08.jpg", alt: "AQE technician beside an open electrical panel", caption: "Panel upgrade · on site", blurDataURL: workBlur.img8 },
  { src: "/images/work/aqe-work-10.jpg", alt: "Close-up of a cascading crystal chandelier", caption: "Cascading crystal chandelier", blurDataURL: workBlur.img10 },
  { src: "/images/work/aqe-work-11.jpg", alt: "Multi-unit meter bank installed on an exterior wall", caption: "Multi-unit meter bank", blurDataURL: workBlur.img11 },
  { src: "/images/work/aqe-work-12.jpg", alt: "Meter bank upgrade on an exterior wall with a ladder", caption: "Meter bank upgrade", blurDataURL: workBlur.img12 },
  { src: "/images/work/aqe-work-13.jpg", alt: "Two technicians at an open panel during a service upgrade", caption: "Panel upgrade · the crew", blurDataURL: workBlur.img13 },
  { src: "/images/work/aqe-work-14.jpg", alt: "Two AQE technicians during a panel installation", caption: "Panel install · team photo", blurDataURL: workBlur.img14 },
  { src: "/images/work/aqe-work-15.jpg", alt: "Deck and garden accent lighting at night", caption: "Deck & garden lighting", blurDataURL: workBlur.img15 },
  { src: "/images/work/aqe-work-16.jpg", alt: "Technician working on a weatherhead and service mast", caption: "Weatherhead & service mast", blurDataURL: workBlur.img16 },
  { src: "/images/work/aqe-work-17.jpg", alt: "New meter panel opening prepped for a stucco patch", caption: "Panel install · stucco prep", blurDataURL: workBlur.img17 },
  { src: "/images/work/aqe-work-18.jpg", alt: "Two technicians installing a bank of commercial disconnects", caption: "Commercial disconnect bank", blurDataURL: workBlur.img18 },
  { src: "/images/work/aqe-work-19.jpg", alt: "Poolside string lights and tree lighting at night", caption: "Poolside string & tree lighting", blurDataURL: workBlur.img19 },
  { src: "/images/work/aqe-work-20.jpg", alt: "Technician troubleshooting a garage ceiling outlet", caption: "GFCI troubleshooting · garage", blurDataURL: workBlur.img20 },
  { src: "/images/work/aqe-work-21.jpg", alt: "Technician installing a new meter panel outdoors", caption: "New meter panel install", blurDataURL: workBlur.img21 },
  { src: "/images/work/aqe-work-23.jpg", alt: "Technician testing wiring in an open garage ceiling", caption: "Wiring test · garage ceiling", blurDataURL: workBlur.img23 },
  { src: "/images/work/aqe-work-24.jpg", alt: "The AQE crew with a box of donuts after a job", caption: "The AQE crew", blurDataURL: workBlur.img24 },
  { src: "/images/work/aqe-work-25.jpg", alt: "AQE service van parked on a residential street", caption: "On the road · AQE van", blurDataURL: workBlur.img25 },
  { src: "/images/work/aqe-work-26.jpg", alt: "Exterior wall uplighting at night", caption: "Uplighting · exterior wall", blurDataURL: workBlur.img26 },
  { src: "/images/work/aqe-work-27.jpg", alt: "Two technicians installing an outlet during a remodel", caption: "Outlet install · hallway", blurDataURL: workBlur.img27 },
  { src: "/images/work/aqe-work-28.jpg", alt: "Two technicians installing a modern pendant light fixture", caption: "Pendant fixture install", blurDataURL: workBlur.img28 },
  { src: "/images/work/aqe-work-29.jpg", alt: "Close-up of a crystal sphere chandelier", caption: "Crystal sphere chandelier", blurDataURL: workBlur.img29 },
  { src: "/images/work/aqe-work-30.jpg", alt: "Technician testing a bathroom exhaust fan connection", caption: "Bath fan troubleshooting", blurDataURL: workBlur.img30 },
  { src: "/images/work/aqe-work-31.jpg", alt: "A cake reading All Quality Electrical", caption: "Celebrating a milestone", blurDataURL: workBlur.img31 },
  { src: "/images/work/aqe-work-32.jpg", alt: "Technician installing a ceiling fixture during a remodel", caption: "Ceiling fixture install · remodel", blurDataURL: workBlur.img32 },
  { src: "/images/work/aqe-work-33.jpg", alt: "Technician wiring an outdoor condenser unit", caption: "Condenser hookup", blurDataURL: workBlur.img33 },
  { src: "/images/work/aqe-work-34.jpg", alt: "Two technicians working on a utility pole service connection", caption: "Utility pole service connection", blurDataURL: workBlur.img34 },
  { src: "/images/work/aqe-work-35.jpg", alt: "Modern home exterior lit with wall sconces and path lighting", caption: "Exterior lighting · modern remodel", blurDataURL: workBlur.img35 },
  { src: "/images/work/aqe-work-36.jpg", alt: "The full AQE crew at a restaurant table, all wearing black AQE shirts", caption: "The whole crew", blurDataURL: workBlur.img36 },
];
