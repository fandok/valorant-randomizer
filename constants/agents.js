import imgBrimstone from "../public/agents/brim.png";
import imgPhoenix from "../public/agents/phoenix.png";
import imgSage from "../public/agents/sage.png";
import imgAstra from "../public/agents/astra.png";
import imgBreach from "../public/agents/breach.png";
import imgChamber from "../public/agents/chamber.png";
import imgCypher from "../public/agents/cypher.png";
import imgFade from "../public/agents/fade.png";
import imgJett from "../public/agents/jett.png";
import imgKayo from "../public/agents/kayo.png";
import imgKilljoy from "../public/agents/killjoy.png";
import imgNeon from "../public/agents/neon.png";
import imgOmen from "../public/agents/omen.png";
import imgRaze from "../public/agents/raze.png";
import imgReyna from "../public/agents/reyna.png";
import imgSkye from "../public/agents/skye.png";
import imgSova from "../public/agents/sova.png";
import imgViper from "../public/agents/viper.png";
import imgYoru from "../public/agents/yoru.png";

const agentsRole = {
  SENTINEL: "Sentinel",
  DUELIST: "Duelist",
  INITIATOR: "Initiator",
  CONTROLLER: "Controller",
};

export const AGENTS = [
  {
    id: 1,
    name: "Brimstone",
    role: agentsRole.CONTROLLER,
    image: imgBrimstone,
  },
  {
    id: 9,
    name: "Phoenix",
    role: agentsRole.DUELIST,
    image: imgPhoenix,
  },
  {
    id: 7,
    name: "Sage",
    role: agentsRole.SENTINEL,
    image: imgSage,
  },
  {
    id: 6,
    name: "Sova",
    role: agentsRole.INITIATOR,
    image: imgSova,
  },
  {
    id: 2,
    name: "Viper",
    role: agentsRole.CONTROLLER,
    image: imgViper,
  },
  {
    id: 5,
    name: "Cypher",
    role: agentsRole.SENTINEL,
    image: imgCypher,
  },
  {
    id: 11,
    name: "Reyna",
    role: agentsRole.DUELIST,
    image: imgReyna,
  },
  {
    id: 4,
    name: "Killjoy",
    role: agentsRole.SENTINEL,
    image: imgKilljoy,
  },
  {
    id: 13,
    name: "Breach",
    role: agentsRole.INITIATOR,
    image: imgBreach,
  },
  {
    id: 3,
    name: "Omen",
    role: agentsRole.CONTROLLER,
    image: imgOmen,
  },
  {
    id: 10,
    name: "Jett",
    role: agentsRole.DUELIST,
    image: imgJett,
  },
  {
    id: 12,
    name: "Raze",
    role: agentsRole.DUELIST,
    image: imgRaze,
  },
  {
    id: 14,
    name: "Skye",
    role: agentsRole.INITIATOR,
    image: imgSkye,
  },
  {
    id: 15,
    name: "Yoru",
    role: agentsRole.DUELIST,
    image: imgYoru,
  },
  {
    id: 16,
    name: "Astra",
    role: agentsRole.CONTROLLER,
    image: imgAstra,
  },
  {
    id: 17,
    name: "Kay/O",
    role: agentsRole.INITIATOR,
    image: imgKayo,
  },
  {
    id: 18,
    name: "Chamber",
    role: agentsRole.SENTINEL,
    image: imgChamber,
  },
  {
    id: 20,
    name: "Neon",
    role: agentsRole.DUELIST,
    image: imgNeon,
  },
  {
    id: 20,
    name: "Fade",
    role: agentsRole.INITIATOR,
    image: imgFade,
  },
];
