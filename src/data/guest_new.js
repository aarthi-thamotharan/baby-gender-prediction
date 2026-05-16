import { image } from "framer-motion/client";

import aaruImg from "../assets/family/aarthi.jpg";
import ajinImg from "../assets/family/ajin.jpeg";
import akashImg from "../assets/family/akash.jpeg";
import akhilImg from "../assets/family/akhil.jpeg";
import aswinImg from "../assets/family/aswin.jpeg";
import keerthiImg from "../assets/family/keerthi.JPG";
import kichaImg from "../assets/family/kicha.jpeg";
import maheswariImg from "../assets/family/maheswari.jpeg";
import mahiImg from "../assets/family/mahi.jpeg";
import manoImg from "../assets/family/mano.jpeg";
import muthuImg from "../assets/family/muthu.jpeg";
import nanduImg from "../assets/family/nandu.jpeg";
import naomiImg from "../assets/family/naomi.jpeg";
import niveImg from "../assets/family/nive.jpeg";
import paaruImg from "../assets/family/paaru.jpeg";
import preethiImg from "../assets/family/preethi.jpeg";
import priyaImg from "../assets/family/priya.jpeg";
import ragulImg from "../assets/family/ragul.jpeg";
import rajeshImg from "../assets/family/rajesh.jpeg";
import sabariImg from "../assets/family/sabari.jpeg";
import sriramImg from "../assets/family/sriram.jpeg";
import subhaImg from "../assets/family/subha.jpeg";
import sudhaImg from "../assets/family/sudha.jpeg";
import swathiImg from "../assets/family/swathi.jpeg";
import syedImg from "../assets/family/syed.jpeg";
import thamuImg from "../assets/family/thamu.jpeg";
import vaishaliImg from "../assets/family/vaishali.jpeg";
import vijayImg from "../assets/family/vijay.jpeg";
import harithaImg from "../assets/family/haritha.jpeg";
import saravanaImg from "../assets/family/saravana.jpeg";
import praveenImg from "../assets/family/praveen.jpeg";
import ezhilImg from "../assets/family/ezhil.jpeg";
import shanmugapriyaImg from "../assets/family/shanmugapriya.jpeg";
import priyankaImg from "../assets/family/priyanka.jpeg";
import aishuImg from "../assets/family/aishu.jpeg";
import nithyaSriImg from "../assets/family/nithyasri.jpeg";
import rajeshkannanImg from "../assets/family/rajeshkannan.jpeg";
import aarthiImg from "../assets/family/aarthi.jpeg";
import ramImg from "../assets/family/ram.jpeg";
import vardhiniImg from "../assets/family/vardhini.jpeg";
import vidhyaImg from "../assets/family/vidhya.jpeg";
import deviImg from "../assets/family/devi.jpeg";

const relationMessages = [
    "Appa says you already love me so much even before meeting me. I can't wait to hear your sweet guess about whether I'm a little prince or princess 👶✨",

    "You bring so much joy to our family. Can you guess if I'll be your playful little nephew or sweet little niece? 🍼",

    "Your love and laughter will be so special for me. Tell me what you think I'll be! 👶✨",

    "I've already heard so many stories about your love and care. Tell me… do you think I'll be your naughty little boy or cute baby girl? 🍼",

    "Your warmth and affection mean the world to me even now. What's your prediction for me? 👶💖",

    "I can't wait to know your guess about my gender! Will I be a little prince or princess? ✨",

    "I'm still tiny inside amma's tummy, but I already know you'll spoil me with love. What's your prediction for me? 💙💖",

    "Your blessings and love reach me every day. Do you think I'll be a brave little boy or a sweet little girl? 👶",

    "I'm so excited to meet you! Can you guess if I'm a boy or girl? 💕",

    "Amma says you're waiting excitedly to meet me. Before I arrive, can you guess if I'll come as your little superhero or princess? ✨",

    "Your excitement is contagious! What do you think I'll be? 👶💙💖",

    "Your blessings are already protecting me every single day. Tell me… what does your heart say? Boy or girl? 🥹",

    "Your wisdom and love guide our family. What do you predict for me? 👶✨",

    "I can already feel your prayers and love reaching me from outside. I'm so excited to know your sweet prediction about me 🌸",

    "Your blessings mean everything to me. Can you guess if I'll be a little boy or girl? 👶💕",

    "Thank you for loving me even before seeing my tiny face. I'm waiting to know whether you think I'll be a baby boy or baby girl 👶💖",
];

export const guests = {
    ram: {
        keys: ["ramkumar", "ram kumar", "appa", "dadda", "papa", "dada"],
        relation: "APPA",
        image: ramImg,
    },

    aarthi: {
        keys: ["aarthi", "aart", "aaru", "amma", "mummy", "mom"],
        relation: "AMMA",
        image: aarthiImg,
    },

    devi: {
        keys: ["devi", "anjadevi"],
        relation: "PAATI",
        image: deviImg,
    },

    vidhya: {
        keys: ["vidhya", "vidhu"],
        relation: "CHITHI",
        image: vidhyaImg,
    },

    sudha: {
        keys: ["ragasudha"],
        relation: "ATHAI",
        image: sudhaImg,
    },

    vaishali: {
        keys: ["vaishali", "vaishu"],
        relation: "ATHAI",
        image: vaishaliImg,
    },

    aravind: {
        keys: ["aravind", "arav", "aravi"],
        relation: "MAMA"
    },

    ezhil: {
        keys: ["ezhilarasi", "ezhil", "arasi"],
        relation: "ATHAI",
        image: ezhilImg,
    },

    preethi: {
        relation: "PERIYAMMA",
        image: preethiImg,
    },

    praveen: {
        keys: ["praveen", "pravin"],
        relation: "MAMA",
        image: praveenImg,
    },

    akash: {
        relation: "MAMA",
        image: akashImg,
    },

    akhil: {
        relation: "MAMA",
        image: akhilImg,
    },

    sabari: {
        keys: ["sabarish", "sabareesh", "sabari", "saba", "sabhareesh"],
        relation: "MAMA",
        image: sabariImg,
    },

    nithi: {
        keys: ["nithyasri", "nithya", "nithi", "nithya shree", "nithya sri", "nithyashree"],
        relation: "CHITHI",
        image: nithyaSriImg,
    },

    aswin: {
        keys: ["aswin", "aswa"],
        relation: "MAMA",
        image: aswinImg,
    },

    shanmugapriya: {
        keys: ["sanmugapriya", 'shanmuga priya', "shanmuga"],
        relation: "ATHAI",
        image: shanmugapriyaImg,
    },

    priyanka: {
        keys: ["priyanka", "priyanga", "pri"],
        relation: "CHITHI",
        image: priyankaImg,
    },

    nandhu: {
        keys: ["nandhu", "nandu", "nandhakumar", "nandha kumar"],
        relation: "MAMA",
        image: nanduImg,
    },

    paaru: {
        keys: ["paaru", "parkavi", "parvathi", "paru"],
        relation: "CHITHI",
        image: paaruImg,
    },

    naomi: {
        relation: "ATHAI",
        image: naomiImg,
    },

    saravanan: {
        keys: ["saravanan", "sarav", "sara", "saravana"],
        relation: "MAMA",
        image: saravanaImg,
    },

    haritha: {
        keys: ["swarnaharitha", "haritha", "swarna haritha"],
        relation: "ATHAI",
        image: harithaImg,
    },

    rajesh: {
        relation: "MAMA",
        image: rajeshImg,
    },

    varthini: {
        keys: ["vardhini", "vardhu", "var", "varthini", "varthu"],
        relation: "ATHAI",
        image: vardhiniImg,
    },

    vijay: {
        relation: "MAMA",
        image: vijayImg,
    },

    mahesh: {
        relation: "PAATI",
    },

    rajeshkannan: {
        keys: ["rajeshkannan", "kannan"],
        relation: "THATHA",
        image: rajeshkannanImg,
    },

    thamotharan: {
        keys: ["thamotharan", "tham", "thamu", "dhamu", "dhamodaran"],
        relation: "THATHA",
        image: thamuImg,
    },

    subha: {
        relation: "PAATI",
        image: subhaImg,
    },

    balu: {
        keys: ["balamurugan", "balu"],
        relation: "THATHA",
    },

    maheswari: {
        keys: ["maheswari", "mahes"],
        relation: "PAATI",
        image: maheswariImg,
    },

    aishu: {
        keys: ["aishu", "aishwarya"],
        relation: "ATHAI",
        image: aishuImg,
    },

    ragul: {
        keys: ["ragul"],
        relation: "MAMA",
        image: ragulImg,
    },

    nive: {
        keys: ["nivetha", "nive", "subbbu", "subbulakshmi", "subbu lakshmi"],
        relation: "CHITHI",
        image: niveImg,
    },

    mano: {
        keys: ["manoj", "mano", "manu"],
        relation: "MAMA",
        image: manoImg,
    },

    kicha: {
        keys: ["kishore", "kish", "kicha"],
        relation: "CHITHAPPA",
        image: kichaImg,
    },

    keerthi: {
        keys: ["keerthi", "keeru", "keer"],
        relation: "ATHAI",
        image: keerthiImg,
    },

    fyzal: {
        keys: ["fyzal", "fyz", "fyzu"],
        relation: "MAMA",
    },

    syed: {
        relation: "MAMA",
        image: syedImg,
    },

    sriram: {
        keys: ["sriram", "sri ram"],
        relation: "MAMA",
        image: sriramImg,
    },

    swathi: {
        keys: ["swathi", "swath", "swa"],
        relation: "CHITHI",
        image: swathiImg,
    },

    muthu: {
        keys: ["muthukumaran", "muthu", "muthukumar", "muthu kumaran"],
        relation: "MAMA",
        image: muthuImg,
    },

    priya: {
        keys: ["priya", "prie", "pri", "karthika priya"],
        relation: "ATHAI",
        image: priyaImg,
    },

    ajin: {
        relation: "MAMA",
        image: ajinImg,
    },

    mahi: {
        keys: ["mahisha", "mahi", "mahisha devi"],
        relation: "ATHAI",
        image: mahiImg,
    },
};

export const thankYouMessages = {
    boy: [
        "Tiny human just saw your BOY prediction and immediately started acting rowdy already 💙😂",

        "Someone thinks I'm going to arrive with unlimited chaos energy 🚙👶",

        "So you really looked at amma and appa and said… yep definitely a baby boy 💀💙",

        "Tiny moustache loading… according to your prediction 👨‍🍼😂",

        "Your prediction gives strong 'future cricket captain' energy 🏏👶",

        "Apparently I'm going to be a tiny snack thief and remote-control destroyer 💙😂",

        "You voted BOY 💙 Tiny human is now practicing dramatic superhero entries inside tummy 🦸‍♂️",

        "According to you, amma is growing a future professional troublemaker 👶😂",

        "Boy prediction accepted 💙 Tiny human has already started mentally naming toy cars 🚗✨",

        "If you're right, appa is never financially recovering from toy shopping 😂💙",
    ],

    girl: [
        "Tiny human heard your GIRL prediction and immediately became extra dramatic 💖👑",

        "According to you, a tiny princess is currently chilling inside amma's tummy ✨👶",

        "You really said this family needs MORE attitude and sparkle 💅💖",

        "Girl prediction noted 💖 Tiny human has already started imaginary shopping 🛍️😂",

        "Someone thinks I'm arriving to completely control appa emotionally 👶💕",

        "Tiny queen energy detected 👑✨",

        "According to your prediction, amma is growing her future best friend already 💖🥹",

        "Your GIRL prediction has strong 'future family CEO' vibes 👶😂",

        "Your prediction gives strong 'future cricket captain' energy 🏏👶",

        "Tiny human is currently kicking with princess-level confidence after your prediction 💖✨",

        "If you're right, appa is about to become permanently soft and emotional 😂💕",
    ],
};

export { relationMessages };
