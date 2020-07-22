document.addEventListener("DOMContentLoaded", function () {
  selectCamera();
  backButton();
});

const state = {
  camera: { name: "" },
  display: { name: "" },
  specialty: { name: "" },
};

const NODATA = [
  "No Data",
  "No Data",
  "No Data",
  "No Data",
  "No Data",
  "No Data",
  "No Data",
  "No Data",
  "No Data",
  "No Data",
  "No Data",
  "No Data",
];
const SPECIALTIES = [
  "Multi",
  "Arthro 1",
  "Arthro 2",
  "Arthro 4/16",
  "Lap 1",
  "Lap 2",
  "Lap STORZ",
  "Cysto",
  "Hysteroscopy",
  "Flexiscope",
  "ENT",
  "Laser",
  "Microscope",
  "Standard",
  "Vein Harvest",
  "Olympus GI",
];
const PRECISION4KSPECIALTIES = ["Arthro 1", "Hysteroscopy", "ENT"];
const FOURTEENFOURKSPECIALTIES = ["Arthro", "Lap"];
const FOURTEENSPECIALTIES = [
  "Multi",
  "Arthro 1",
  "Arthro 2",
  "Lap 1",
  "Lap 2",
  "Cysto",
  "Hysteroscopy",
  "Flexiscope",
  "ENT",
  "Laser",
  "Microscope",
  "Standard",
  "Vein Harvest",
  "Olympus GI",
];
const FIFTEENWISEVPSPECIALTIES = [
  "Multi",
  "Arthro 1",
  "Arthro 2",
  "Arthro 4/16",
  "Lap 1",
  "Lap 2",
  "Lap STORZ",
  "Cysto",
  "Hysteroscopy",
  "Flexiscope",
  "ENT",
  "Laser",
  "Microscope",
  "Standard",
  "Vein Harvest",
];

const FIFTEENFOURKSPECIALTIES = [
  "Multi",
  "Arthro 1",
  "Arthro 2",
  "Lap 1",
  "Lap 2",
  "Cysto",
  "Hysteroscopy",
  "Flexiscope",
  "ENT",
  "Laser",
  "Microscope",
  "Standard",
];
const TWELVEFOURKSPECIALTIES = ["Arthro"];
const PRECISIONSPECIALTIES = [
  "Multi",
  "Arthro 1",
  "Arthro 2",
  "Lap 1",
  "Lap 2",
  "Cysto",
  "Hysteroscopy",
  "ENT",
];
const SIXTEENSPECIALTIES = [
  "Lap 1",
  "Lap 2",
  "Lap Storz",
  "Arthro 1",
  "Arthro 2",
  "ENT 1",
  "ENT 2",
  "ENT 3",
  "Flexiscope",
  "Cysto",
  "Laser",
  "Hystero",
];
const SIXTEENVISIONPROSPECIALTIES = ["Lap 1", "Lap 2", "Lap Storz"];
TWELVESPECIALTIES = [
  "Arthro 1",
  "Arthro 2",
  "Lap 1",
  "Lap 2",
  "Cysto",
  "Hysteroscopy",
  "Flexiscope",
  "ENT 1",
  "ENT 2",
  "Laser",
  "Microscope",
  "Standard",
];
ELEVENSPECIALTIES = [
  "Arthro",
  "Lap 1",
  "Lap 2",
  "Cysto",
  "Hysto",
  "Flexiscope",
  "ENT",
  "Laser",
  "Microscope",
  "Standard",
];
FLEXIBLESPECIALTIES = [
  "5mm Flex Lap",
  "10mm Flex Lap",
  "Digital Flex Cysto",
  "Digital flex Uretero",
];
FLEXIBLEVPSPECIALTIES = [
  "5mm Flex Lap",
  "10mm Flex Lap",
  "Digital Flex Cysto",
  "Digital flex Uretero",
  "Olympus CV 190 GI",
];
FLEXIBLEWISE19SPECIALTIES = ["Digital Flex Cysto"];
FLEXIBLEVE21SPECIALTIES = ["5mm Flex Lap"];

let ccuSettings;
// let ccuSettingsUpCase;
// CCU Params
const CCUPARAMETERS = [
  "Enhancement",
  "Contrast",
  "R-Gain",
  "R-Hue",
  "B-Gain",
  "B-Hue",
  "Shutter",
  "Brt Control",
  "Size",
  "Brightness Peak",
  "Target Area",
  "Brt Lvl",
];
// 1288 Parameter
const TWELVEPARAMETERS = [
  "Enhance",
  "Light",
  "Zoom",
  "Shutter",
  "Shutter Adjust",
  "Brightness Peak",
  "Size",
  "Target Area",
  "Brt Control",
  "Brt Lvl",
  "R-Gain",
  "Sound",
];
// 1188 Parameters
const ELEVENPARAMETERS = [
  "Enhance",
  "Light",
  "Zoom",
  "Level",
  "Peak",
  "Speed",
  "Area",
  "AGC-Level",
  "AGC",
  "Shutter",
  "Options",
  "Fiber",
  "NTSC/PAL",
  "R-Gain",
  "B-Gain",
  "Light/Zoom",
];
// 1688 Parameters
const SIXTEENPARAMETERS = [
  "Shutter Mode",
  "Shutter Level",
  "Area",
  "Speed",
  "Photometry Mode",
  "Photometry Peak/Avg",
  "S Gamma",
  "BG Gamma",
  "MPED",
  "BG Point",
  "R Knee Slope",
  "R knee Point",
  "Enhance",
  "Chroma",
  "B Gain",
  "B Hue",
  "R Gain",
  "R Hue",
  "ENV Gain Mode",
  "ENV Manual Gain",
  "ENV Level",
  "ENV BG Offset",
  "ENV Gamma",
  "ENV Max Gain",
];

const SOFTWARE4013PARAMETERS = [
  "Size",
  "G Hue",
  "G Gain",
  "R-Ye Hue",
  "R-Ye Gain",
  "Ye Hue",
  "Ye Gain",
  "Ye-G Hue",
  "Ye-G Gain",
  "G-Cy Hue",
  "G-Cy Gain",
  "CY Hue",
  "CY Gain",
  "CY-B Hue",
  "CY-B Gain",
  "B-Mg Hue",
  "B-Mg Gain",
  "Mg Hue",
  "Mg Gain",
  "Mg-R Hue",
  "Mg-R Gain",
];
const FLEXIBLEPARAMETERS = ["R-Gain", "R-Hue", "B-Peak", "B-Gain", "B-Hue"];

// Sixteen CCU Settings
const SIXTEENSETTINGS = {
  LAP1FOURK1688: [
    "Auto",
    "30",
    "0",
    "9",
    "Photometry",
    "2",
    "3",
    "4",
    "0",
    "4",
    "8",
    "0",
    "23",
    "14",
    "0",
    "0",
    "-10",
    "4",
    "Auto",
    "0",
    "0",
    "0",
    "0",
    "0",
  ],
  LAP14K4013: [
    "0",
    "0",
    "3",
    "-8",
    "-9",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "-3",
    "-5",
    "0",
    "0",
  ],
  LAP2FOURK1688: [
    "Auto",
    "30",
    "0",
    "9",
    "Photometry",
    "2",
    "3",
    "4",
    "0",
    "4",
    "8",
    "0",
    "23",
    "14",
    "0",
    "0",
    "-10",
    "4",
    "Auto",
    "0",
    "0",
    "0",
    "0",
    "0",
  ],
  LAP24K4013: [
    "0",
    "0",
    "3",
    "-8",
    "-9",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "-3",
    "-5",
    "0",
    "0",
  ],
  LAPSTORZFOURK1688: [
    "Auto",
    "30",
    "0",
    "9",
    "Photometry",
    "2",
    "3",
    "4",
    "0",
    "4",
    "8",
    "0",
    "23",
    "12",
    "0",
    "0",
    "-10",
    "4",
    "Auto",
    "0",
    "0",
    "0",
    "0",
    "0",
  ],
  LAPSTORZ4K4013: [
    "0",
    "0",
    "3",
    "-8",
    "-9",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "-3",
    "-5",
    "0",
    "0",
  ],
  ENT1FOURK1688: [
    "Auto",
    "30",
    "0",
    "9",
    "Photometry",
    "2",
    "3",
    "4",
    "0",
    "4",
    "8",
    "0",
    "23",
    "14",
    "0",
    "0",
    "-5",
    "-3",
    "Auto",
    "0",
    "0",
    "0",
    "0",
    "0",
  ],
  ENT2FOURK1688: [
    "Auto",
    "30",
    "0",
    "9",
    "Photometry",
    "2",
    "3",
    "4",
    "0",
    "4",
    "8",
    "0",
    "23",
    "14",
    "0",
    "0",
    "-7",
    "1",
    "Auto",
    "0",
    "0",
    "0",
    "0",
    "0",
  ],
  ENT3FOURK1688: [
    "Auto",
    "30",
    "0",
    "9",
    "Photometry",
    "2",
    "3",
    "4",
    "0",
    "4",
    "8",
    "0",
    "23",
    "5",
    "0",
    "0",
    "-5",
    "0",
    "Auto",
    "0",
    "0",
    "0",
    "0",
    "0",
  ],
  ENT4K4013: [
    "3",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
  ],
  CYSTOFOURK1688: [
    "Auto",
    "30",
    "1",
    "9",
    "Photometry",
    "0",
    "3",
    "4",
    "0",
    "4",
    "6",
    "10",
    "30",
    "0",
    "4",
    "0",
    "-12",
    "0",
    "Auto",
    "0",
    "0",
    "0",
    "0",
    "0",
    // ************** New 1688 settings
    // "3",
    // "0",
    // "0",
    // "9",
    // "-5",
    // "4",
    // "5",
    // "0",
    // "0",
    // "0",
    // "0",
    // "5",
    // "-17",
    // "0",
    // "0",
    // "0",
    // "0",
    // "0",
    // "0",
    // "0",
    // "0",
  ],
  CYSTO4013: [
    "3",
    "0",
    "0",
    "9",
    "-5",
    "4",
    "5",
    "0",
    "0",
    "0",
    "0",
    "5",
    "-17",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
  ],
  ARTHRO1FOURK1688: [
    "Auto",
    "30",
    "1",
    "9",
    "Photometry",
    "2",
    "5",
    "4",
    "0",
    "4",
    "6",
    "10",
    "20",
    "14",
    "0",
    "0",
    "2",
    "4",
    "Auto",
    "0",
    "0",
    "0",
    "0",
    "0",
  ],
  ARTHRO2FOURK1688: [
    "Auto",
    "30",
    "1",
    "9",
    "Photometry",
    "2",
    "5",
    "4",
    "0",
    "4",
    "6",
    "10",
    "20",
    "14",
    "0",
    "0",
    "2",
    "4",
    "Auto",
    "0",
    "0",
    "0",
    "0",
    "0",
  ],
  ARTHRO4K4013: [
    "3",
    "0",
    "4",
    "2",
    "1",
    "4",
    "5",
    "0",
    "0",
    "0",
    "0",
    "5",
    "-17",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
  ],
  FLEXISCOPEFOURK1688: [
    "Auto",
    "30",
    "1",
    "9",
    "Photometry",
    "2",
    "3",
    "4",
    "0",
    "4",
    "6",
    "10",
    "30",
    "0",
    "4",
    "0",
    "-12",
    "0",
    "Auto",
    "0",
    "0",
    "0",
    "0",
    "0",
  ],
  FLEXISCOPE4013: [
    "3",
    "0",
    "0",
    "9",
    "-5",
    "4",
    "5",
    "0",
    "0",
    "0",
    "0",
    "5",
    "-17",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
  ],
  LASERFOURK1688: [
    "Auto",
    "30",
    "1",
    "9",
    "Photometry",
    "2",
    "3",
    "4",
    "0",
    "4",
    "6",
    "10",
    "30",
    "0",
    "4",
    "0",
    "-12",
    "0",
    "Auto",
    "0",
    "0",
    "0",
    "0",
    "0",
  ],
  LASER4013: [
    "3",
    "0",
    "0",
    "9",
    "-5",
    "4",
    "5",
    "0",
    "0",
    "0",
    "0",
    "5",
    "-17",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
  ],
  HYSTEROFOURK1688: [
    "Auto",
    "30",
    "0",
    "9",
    "Photometry",
    "2",
    "3",
    "4",
    "0",
    "4",
    "8",
    "0",
    "20",
    "14",
    "0",
    "0",
    "2",
    "4",
    "Auto",
    "0",
    "0",
    "0",
    "0",
    "0",
  ],
  HYSTERO4013: [
    "3",
    "0",
    "0",
    "9",
    "-5",
    "4",
    "5",
    "0",
    "0",
    "0",
    "0",
    "5",
    "-17",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
  ],
  ///// 1688 VisionPro //////////////
  LAP1VISIONPRO1688: [
    "Auto",
    "30",
    "0",
    "9",
    "Photometry",
    "2",
    "3",
    "4",
    "0",
    "4",
    "8",
    "0",
    "23",
    "14",
    "0",
    "0",
    "-10",
    "4",
    "Auto",
    "0",
    "0",
    "0",
    "0",
    "0",
  ],
  LAP2VISIONPRO1688: [
    "Auto",
    "30",
    "0",
    "9",
    "Photometry",
    "2",
    "3",
    "4",
    "0",
    "4",
    "8",
    "0",
    "23",
    "14",
    "0",
    "0",
    "-10",
    "4",
    "Auto",
    "0",
    "0",
    "0",
    "0",
    "0",
  ],
  LAPSTORZVISIONPRO1688: [
    "Auto",
    "30",
    "0",
    "9",
    "Photometry",
    "2",
    "3",
    "4",
    "0",
    "4",
    "8",
    "0",
    "23",
    "12",
    "0",
    "0",
    "-10",
    "4",
    "Auto",
    "0",
    "0",
    "0",
    "0",
    "0",
  ],
  ENT1ISIONPRO1688: [
    "Auto",
    "30",
    "0",
    "9",
    "Photometry",
    "2",
    "3",
    "4",
    "0",
    "4",
    "8",
    "0",
    "23",
    "14",
    "0",
    "0",
    "-15",
    "-3",
    "Auto",
    "0",
    "0",
    "0",
    "0",
    "0",
  ],
  ENT1VISIONPRO1688: [
    "Auto",
    "30",
    "0",
    "9",
    "Photometry",
    "2",
    "3",
    "4",
    "0",
    "4",
    "8",
    "0",
    "23",
    "14",
    "0",
    "0",
    "-15",
    "-3",
    "Auto",
    "0",
    "0",
    "0",
    "0",
    "0",
  ],
  ENT2VISIONPRO1688: [
    "Auto",
    "30",
    "0",
    "9",
    "Photometry",
    "2",
    "3",
    "4",
    "0",
    "4",
    "8",
    "0",
    "23",
    "14",
    "0",
    "0",
    "-7",
    "1",
    "Auto",
    "0",
    "0",
    "0",
    "0",
    "0",
  ],
  ENT3VISIONPRO1688: [
    "Auto",
    "30",
    "0",
    "9",
    "Photometry",
    "2",
    "3",
    "4",
    "0",
    "4",
    "8",
    "0",
    "23",
    "5",
    "0",
    "0",
    "-5",
    "0",
    "Auto",
    "0",
    "0",
    "0",
    "0",
    "0",
  ],
};
// CCU Settings
const CAMERASETTINGS = {
  MULTIVISIONPRO1588: [
    "26",
    "Normal",
    "-12",
    "0",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "17",
  ],
  ARTHRO1VISIONPRO1588: [
    "26",
    "Normal",
    "0",
    "0",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "5",
    "1",
    "17",
  ],
  ARTHRO2VISIONPRO1588: [
    "26",
    "Normal",
    "-10",
    "-5",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "19",
  ],
  ARTHRO4_16VISIONPRO1588: [
    "27",
    "No Data",
    "7",
    "-4",
    "3",
    "-2",
    "Light 6 Bars",
    "Auto",
    "1",
    "5",
    "1",
    "26",
  ],
  LAP1VISIONPRO1588: [
    "30",
    "Normal",
    "-10",
    "-5",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "23",
  ],
  LAP2VISIONPRO1588: [
    "42",
    "Normal",
    "-10",
    "-5",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "0",
    "1",
    "26",
  ],
  LAPSTORZVISIONPRO1588: [
    "26",
    "Normal",
    "-10",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "19",
  ],
  CYSTOVISIONPRO1588: [
    "26",
    "Normal",
    "-12",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "19",
  ],
  HYSTEROSCOPYVISIONPRO1588: [
    "32",
    "Normal",
    "-10",
    "-2",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "23",
  ],
  FLEXISCOPEVISIONPRO1588: [
    "27",
    "Normal",
    "7",
    "-4",
    "3",
    "-2",
    "On",
    "Auto",
    "1",
    "6",
    "1",
    "10",
  ],
  ENTVISIONPRO1588: [
    "35",
    "Normal",
    "-10",
    "0",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "26",
  ],
  LASERVISIONPRO1588: [
    "35",
    "Normal",
    "-10",
    "0",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "26",
  ],
  MICROSCOPEVISIONPRO1588: [
    "35",
    "Normal",
    "-10",
    "0",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "26",
  ],
  STANDARDVISIONPRO1588: [
    "32",
    "Normal",
    "-10",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "23",
  ],
  VEINHARVESTVISIONPRO1588: [
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
  ],
  OLYMPUSGIVISIONPRO1588: [
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
  ],
  MULTIVISIONELECT1588: [
    "26",
    "Normal",
    "-12",
    "0",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "17",
  ],
  ARTHRO1VISIONELECT1588: [
    "26",
    "Normal",
    "0",
    "0",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "5",
    "1",
    "17",
  ],
  ARTHRO2VISIONELECT1588: [
    "26",
    "Normal",
    "-10",
    "-5",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "19",
  ],
  ARTHRO4_16VISIONELECT1588: [
    "27",
    "No Data",
    "7",
    "-4",
    "3",
    "-2",
    "Light 6 Bars",
    "Auto",
    "1",
    "5",
    "1",
    "26",
  ],
  LAP1VISIONELECT1588: [
    "30",
    "Normal",
    "-10",
    "-5",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "23",
  ],
  LAP2VISIONELECT1588: [
    "42",
    "Normal",
    "-10",
    "-5",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "0",
    "1",
    "26",
  ],
  LAPSTORZVISIONELECT1588: [
    "26",
    "Normal",
    "-10",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "19",
  ],
  CYSTOVISIONELECT1588: [
    "26",
    "Normal",
    "-12",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "19",
  ],
  HYSTEROSCOPYVISIONELECT1588: [
    "32",
    "Normal",
    "-10",
    "-2",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "23",
  ],
  FLEXISCOPEVISIONELECT1588: [
    "27",
    "Normal",
    "7",
    "-4",
    "3",
    "-2",
    "On",
    "Auto",
    "1",
    "6",
    "1",
    "10",
  ],
  ENTVISIONELECT1588: [
    "35",
    "Normal",
    "-10",
    "0",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "26",
  ],
  LASERVISIONELECT1588: [
    "35",
    "Normal",
    "-10",
    "0",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "26",
  ],
  MICROSCOPEVISIONELECT1588: [
    "35",
    "Normal",
    "-10",
    "0",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "26",
  ],
  STANDARDVISIONELECT1588: [
    "32",
    "Normal",
    "-10",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "23",
  ],
  VEINHARVESTVISIONELECT1588: [
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
  ],
  OLYMPUSGIVISIONELECT1588: [
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
  ],

  MULTIHDTVWISE1588: [
    "26",
    "Normal",
    "-12",
    "0",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "17",
  ],
  ARTHRO1HDTVWISE1588: [
    "26",
    "Normal",
    "0",
    "0",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "5",
    "1",
    "17",
  ],
  ARTHRO2HDTVWISE1588: [
    "26",
    "Normal",
    "-10",
    "-5",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "19",
  ],
  ARTHRO4_16HDTVWISE1588: [
    "27",
    "No Data",
    "7",
    "-4",
    "3",
    "-2",
    "Light 6 bars",
    "L10 20% Auto",
    "1",
    "5",
    "1",
    "26",
  ],
  LAP1HDTVWISE1588: [
    "30",
    "Normal",
    "-10",
    "-5",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "23",
  ],
  LAP2HDTVWISE1588: [
    "42",
    "Normal",
    "-10",
    "-5",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "0",
    "1",
    "26",
  ],
  LAPSTORZHDTVWISE1588: [
    "26",
    "Normal",
    "-10",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "19",
  ],
  CYSTOHDTVWISE1588: [
    "26",
    "Normal",
    "-12",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "19",
  ],
  HYSTEROSCOPYHDTVWISE1588: [
    "30",
    "Normal",
    "-10",
    "-5",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "23",
  ],
  FLEXISCOPEHDTVWISE1588: [
    "27",
    "Normal",
    "7",
    "-4",
    "3",
    "-2",
    "On",
    "Auto",
    "1",
    "6",
    "1",
    "10",
  ],
  ENTHDTVWISE1588: [
    "35",
    "Normal",
    "-10",
    "0",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "26",
  ],
  LASERHDTVWISE1588: [
    "35",
    "Normal",
    "-10",
    "0",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "26",
  ],
  MICROSCOPEHDTVWISE1588: [
    "35",
    "Normal",
    "-10",
    "0",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "26",
  ],
  STANDARDHDTVWISE1588: [
    "32",
    "Normal",
    "-10",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "23",
  ],
  VEINHARVESTHDTVWISE1588: [
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
  ],
  MULTIVISIONPROPRECISIONAC: [
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
  ],
  ARTHRO1VISIONPROPRECISIONAC: [
    "26",
    "Normal",
    "0",
    "-12",
    "0",
    "0",
    "On",
    "Auto",
    "0",
    "3",
    "1",
    "19",
  ],
  ARTHRO2VISIONPROPRECISIONAC: [
    "26",
    "Normal",
    "0",
    "0",
    "0",
    "0",
    "On",
    "Auto",
    "0",
    "5",
    "1",
    "17",
  ],
  ARTHRO4_16VISIONPROPRECISIONAC: [
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
  ],
  LAP1VISIONPROPRECISIONAC: [
    "26",
    "Normal",
    "-10",
    "-5",
    "0",
    "0",
    "On",
    "Auto",
    "0",
    "3",
    "1",
    "19",
  ],
  LAP2VISIONPROPRECISIONAC: [
    "26",
    "Normal",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "On",
    "Auto",
    "0",
    "4",
    "1",
    "19",
  ],
  LAPSTORZVISIONPROPRECISIONAC: [
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
  ],
  CYSTOVISIONPROPRECISIONAC: [
    "26",
    "Normal",
    "-10",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "0",
    "3",
    "1",
    "19",
  ],
  HYSTEROSCOPYVISIONPROPRECISIONAC: [
    "26",
    "Normal",
    "-12",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "No Data",
    "No Data",
    "No Data",
    "19",
  ],
  FLEXISCOPEVISIONPROPRECISIONAC: [
    "No Data",
    "Normal",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "On",
    "Auto",
    "No Data",
    "No Data",
    "No Data",
    "19",
  ],
  ENTVISIONPROPRECISIONAC: [
    "32",
    "Normal",
    "-10",
    "-2",
    "0",
    "0",
    "On",
    "Auto",
    "0",
    "3",
    "2",
    "19",
  ],
  LASERVISIONPROPRECISIONAC: [
    "No Data",
    "Normal",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "On",
    "Auto",
    "No Data",
    "No Data",
    "No Data",
    "19",
  ],
  MICROSCOPEVISIONPROPRECISIONAC: [
    "No Data",
    "Normal",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "On",
    "Auto",
    "No Data",
    "No Data",
    "No Data",
    "19",
  ],
  STANDARDVISIONPROPRECISIONAC: [
    "No Data",
    "Normal",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "On",
    "Auto",
    "No Data",
    "No Data",
    "No Data",
    "19",
  ],
  VEINHARVESTVISIONPROPRECISIONAC: [
    "No Data",
    "Normal",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "On",
    "Auto",
    "No Data",
    "No Data",
    "No Data",
    "19",
  ],
  OLYMPUSGIVISIONPROPRECISIONAC: [
    "No Data",
    "Normal",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "On",
    "Auto",
    "No Data",
    "No Data",
    "No Data",
    "19",
  ],
  MULTIHDTVWISEPRECISIONAC: [
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
  ],
  ARTHRO1HDTVWISEPRECISIONAC: [
    "26",
    "Normal",
    "0",
    "-12",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "19",
  ],
  ARTHRO2HDTVWISEPRECISIONAC: [
    "26",
    "Normal",
    "0",
    "0",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "5",
    "1",
    "17",
  ],
  ARTHRO4_16HDTVWISEPRECISIONAC: [
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
  ],
  LAP1HDTVWISEPRECISIONAC: [
    "26",
    "Normal",
    "-10",
    "-5",
    "0",
    "0",
    "On",
    "Auto",
    "0",
    "3",
    "1",
    "19",
  ],
  LAP2HDTVWISEPRECISIONAC: [
    "26",
    "Normal",
    "No Data",
    "No data",
    "No Data",
    "No Data",
    "On",
    "Auto",
    "1",
    "4",
    "1",
    "19",
  ],
  LAPSTORZHDTVWISEPRECISIONAC: [
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
  ],
  CYSTOHDTVWISEPRECISIONAC: [
    "26",
    "Normal",
    "-10",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "0",
    "3",
    "1",
    "19",
  ],
  HYSTEROSCOPYHDTVWISEPRECISIONAC: [
    "26",
    "Normal",
    "-12",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "No Data",
    "No Data",
    "No Data",
    "19",
  ],
  FLEXISCOPEHDTVWISEPRECISIONAC: [
    "No Data",
    "Normal",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "On",
    "Auto",
    "No Data",
    "No Data",
    "No Data",
    "19",
  ],
  ENTHDTVWISEPRECISIONAC: [
    "32",
    "Normal",
    "-10",
    "-2",
    "0",
    "0",
    "On",
    "Auto",
    "0",
    "3",
    "2",
    "19",
  ],
  LASERHDTVWISEPRECISIONAC: [
    "No Data",
    "Normal",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "On",
    "Auto",
    "No Data",
    "No Data",
    "No Data",
    "19",
  ],
  MICROSCOPEHDTVWISEPRECISIONAC: [
    "No Data",
    "Normal",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "On",
    "Auto",
    "No Data",
    "No Data",
    "No Data",
    "19",
  ],
  STANDARDHDTVWISEPRECISIONAC: [
    "No Data",
    "Normal",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "On",
    "Auto",
    "No Data",
    "No Data",
    "No Data",
    "19",
  ],
  VEINHARVESTHDTVWISEPRECISIONAC: [
    "No Data",
    "Normal",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "On",
    "Auto",
    "No Data",
    "No Data",
    "No Data",
    "19",
  ],
  OLYMPUSGIHDTVWISEPRECISIONAC: [
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
  ],
  ARTHRO1FOURKPRECISIONAC: [
    "16",
    "Normal",
    "0",
    "-7",
    "0",
    "0",
    "On",
    "Auto",
    "0",
    "5",
    "1",
    "19",
  ],
  HYSTEROSCOPYFOURKPRECISIONAC: [
    "18",
    "Normal",
    "-12",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "0",
    "3",
    "1",
    "19",
  ],
  ENTFOURKPRECISIONAC: [
    "18",
    "Normal",
    "-15",
    "-5",
    "0",
    "0",
    "On",
    "Auto",
    "0",
    "3",
    "2",
    "19",
  ],
  MULTIVISIONPRO1488: [
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
  ],

  ARTHRO1VISIONPRO1488: [
    "32",
    "Normal",
    "-15",
    "-1",
    "0",
    "0",
    "On",
    "Auto",
    "0",
    "5",
    "1",
    "19",
  ],
  ARTHRO2VISIONPRO1488: [
    "32",
    "Normal",
    "-15",
    "-1",
    "0",
    "0",
    "On",
    "Auto",
    "0",
    "5",
    "1",
    "19",
  ],
  ARTHRO4_16VISIONPRO1488: [
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
  ],
  LAP1VISIONPRO1488: [
    "30",
    "Normal",
    "-10",
    "-2",
    "0",
    "0",
    "On",
    "Auto",
    "0",
    "3",
    "1",
    "23",
  ],
  LAP2VISIONPRO1488: [
    "30",
    "Normal",
    "-10",
    "-2",
    "0",
    "0",
    "On",
    "Auto",
    "0",
    "3",
    "1",
    "23",
  ],
  LAPSTORZVISIONPRO1488: [
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
  ],
  CYSTOVISIONPRO1488: [
    "32",
    "Normal",
    "-10",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "0",
    "3",
    "1",
    "23",
  ],
  HYSTEROSCOPYVISIONPRO1488: [
    "32",
    "Normal",
    "-10",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "0",
    "3",
    "1",
    "23",
  ],
  FLEXISCOPEVISIONPRO1488: [
    "32",
    "Normal",
    "-10",
    "-2",
    "0",
    "0",
    "On",
    "Auto",
    "0",
    "3",
    "1",
    "23",
  ],
  ENTVISIONPRO1488: [
    "35",
    "Normal",
    "-10",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "0",
    "3",
    "1",
    "23",
  ],
  LASERVISIONPRO1488: [
    "35",
    "Normal",
    "-10",
    "0",
    "0",
    "0",
    "On",
    "Auto",
    "0",
    "3",
    "1",
    "26",
  ],
  MICROSCOPEVISIONPRO1488: [
    "35",
    "Normal",
    "-10",
    "0",
    "0",
    "0",
    "On",
    "Auto",
    "0",
    "3",
    "1",
    "26",
  ],
  STANDARDVISIONPRO1488: [
    "35",
    "Normal",
    "-10",
    "0",
    "0",
    "0",
    "On",
    "Auto",
    "0",
    "3",
    "1",
    "26",
  ],
  VEINHARVESTVISIONPRO1488: [
    "32",
    "Normal",
    "-10",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "0",
    "3",
    "1",
    "23",
  ],
  OLYMPUSGIVISIONPRO1488: [
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
  ],
  MULTIHDTVWISE1488: [
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
  ],
  ARTHRO1HDTVWISE1488: [
    "32",
    "Normal",
    "-15",
    "-1",
    "0",
    "0",
    "On",
    "Auto",
    "0",
    "5",
    "1",
    "19",
  ],
  ARTHRO2HDTVWISE1488: [
    "32",
    "Normal",
    "-15",
    "-1",
    "0",
    "0",
    "On",
    "Auto",
    "0",
    "5",
    "1",
    "19",
  ],
  ARTHRO4_16HDTVWISE1488: [
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
  ],
  LAP1HDTVWISE1488: [
    "30",
    "Normal",
    "-10",
    "-2",
    "0",
    "0",
    "On",
    "Auto",
    "0",
    "3",
    "1",
    "23",
  ],
  LAP2HDTVWISE1488: [
    "30",
    "Normal",
    "-10",
    "-2",
    "0",
    "0",
    "On",
    "Auto",
    "0",
    "3",
    "1",
    "23",
  ],
  LAPSTORZHDTVWISE1488: [
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
  ],
  CYSTOHDTVWISE1488: [
    "32",
    "Normal",
    "-10",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "0",
    "3",
    "1",
    "23",
  ],
  HYSTEROSCOPYHDTVWISE1488: [
    "32",
    "Normal",
    "-10",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "0",
    "3",
    "1",
    "23",
  ],
  FLEXISCOPEHDTVWISE1488: [
    "32",
    "Normal",
    "-10",
    "-2",
    "0",
    "0",
    "On",
    "Auto",
    "0",
    "3",
    "1",
    "23",
  ],
  ENTHDTVWISE1488: [
    "35",
    "Normal",
    "-10",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "0",
    "3",
    "1",
    "23",
  ],
  LASERHDTVWISE1488: [
    "35",
    "Normal",
    "-10",
    "0",
    "0",
    "0",
    "On",
    "Auto",
    "0",
    "3",
    "1",
    "26",
  ],
  MICROSCOPEHDTVWISE1488: [
    "35",
    "Normal",
    "-10",
    "0",
    "0",
    "0",
    "On",
    "Auto",
    "0",
    "3",
    "1",
    "26",
  ],
  STANDARDHDTVWISE1488: [
    "35",
    "Normal",
    "-10",
    "0",
    "0",
    "0",
    "On",
    "Auto",
    "0",
    "3",
    "1",
    "26",
  ],
  VEINHARVESTHDTVWISE1488: [
    "32",
    "Normal",
    "-10",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "0",
    "3",
    "1",
    "23",
  ],
  OLYMPUSGIHDTVWISE1488: [
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
  ],
  ARTHROFOURK1488: [
    "24",
    "Normal",
    "-15",
    "15",
    "0",
    "0",
    "On",
    "Auto",
    "0",
    "3",
    "2",
    "25",
  ],
  LAPFOURK1488: [
    "30",
    "Normal",
    "-10",
    "-2",
    "0",
    "0",
    "On",
    "Auto",
    "0",
    "3",
    "1",
    "23",
  ],
  MULTIHDTVWISE1288: [
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
  ],
  ARTHRO1HDTVWISE1288: [
    "4 bars",
    "5 bars",
    "0 bars",
    "On",
    "88",
    "4",
    "0",
    "0",
    "Auto",
    "12",
    "0",
    "On",
  ],
  ARTHRO2HDTVWISE1288: [
    "4 bars",
    "5 bars",
    "0 bars",
    "On",
    "88",
    "4",
    "0",
    "0",
    "Auto",
    "12",
    "0",
    "On",
  ],
  LAP1HDTVWISE1288: [
    "4 bars",
    "5 bars",
    "0 bars",
    "On",
    "88",
    "3",
    "0",
    "0",
    "Auto",
    "12",
    "-20",
    "On",
  ],
  LAP2HDTVWISE1288: [
    "4 bars",
    "5 bars",
    "0 bars",
    "On",
    "88",
    "3",
    "0",
    "0",
    "Auto",
    "12",
    "-20",
    "On",
  ],
  CYSTOHDTVWISE1288: [
    "3 bars",
    "5 bars",
    "0 bars",
    "On",
    "88",
    "3",
    "0",
    "0",
    "Auto",
    "12",
    "-10",
    "On",
  ],
  HYSTEROSCOPYHDTVWISE1288: [
    "3 bars",
    "5 bars",
    "0 bars",
    "On",
    "88",
    "3",
    "0",
    "0",
    "Auto",
    "12",
    "-10",
    "On",
  ],
  FLEXISCOPEHDTVWISE1288: [
    "3 bars",
    "5 bars",
    "0 bars",
    "On",
    "88",
    "3",
    "0",
    "0",
    "Auto",
    "12",
    "-10",
    "On",
  ],
  ENT1HDTVWISE1288: [
    "3 bars",
    "5 bars",
    "0 bars",
    "On",
    "88",
    "3",
    "0",
    "0",
    "Auto",
    "12",
    "-30",
    "On",
  ],
  ENT2HDTVWISE1288: [
    "3 bars",
    "5 bars",
    "0 bars",
    "On",
    "88",
    "3",
    "0",
    "0",
    "Auto",
    "12",
    "-30",
    "On",
  ],
  LASERHDTVWISE1288: [
    "3 bars",
    "5 bars",
    "0 bars",
    "On",
    "88",
    "3",
    "0",
    "0",
    "Auto",
    "12",
    "-10",
    "On",
  ],
  MICROSCOPEHDTVWISE1288: [
    "4 bars",
    "6 bars",
    "0 bars",
    "On",
    "88",
    "3",
    "0",
    "0",
    "Auto",
    "12",
    "-10",
    "On",
  ],
  STANDARDHDTVWISE1288: [
    "4 bars",
    "5 bars",
    "0 bars",
    "On",
    "88",
    "3",
    "0",
    "0",
    "Auto",
    "12",
    "-10",
    "On",
  ],
  ARTHRO1VISIONPRO1288: [
    "4 bars",
    "5 bars",
    "0 bars",
    "On",
    "88",
    "4",
    "0",
    "0",
    "Auto",
    "12",
    "0",
    "On",
  ],
  ARTHRO2VISIONPRO1288: [
    "4 bars",
    "5 bars",
    "0 bars",
    "On",
    "88",
    "4",
    "0",
    "0",
    "Auto",
    "12",
    "0",
    "On",
  ],
  LAP1VISIONPRO1288: [
    "4 bars",
    "5 bars",
    "0 bars",
    "On",
    "88",
    "3",
    "0",
    "0",
    "Auto",
    "12",
    "-20",
    "On",
  ],
  LAP2VISIONPRO1288: [
    "4 bars",
    "5 bars",
    "0 bars",
    "On",
    "88",
    "3",
    "0",
    "0",
    "Auto",
    "12",
    "-20",
    "On",
  ],
  CYSTOVISIONPRO1288: [
    "3 bars",
    "5 bars",
    "0 bars",
    "On",
    "88",
    "3",
    "0",
    "0",
    "Auto",
    "12",
    "-10",
    "On",
  ],
  HYSTEROSCOPYVISIONPRO1288: [
    "3 bars",
    "5 bars",
    "0 bars",
    "On",
    "88",
    "3",
    "0",
    "0",
    "Auto",
    "12",
    "-10",
    "On",
  ],
  FLEXISCOPEVISIONPRO1288: [
    "3 bars",
    "5 bars",
    "0 bars",
    "On",
    "88",
    "3",
    "0",
    "0",
    "Auto",
    "12",
    "-10",
    "On",
  ],
  ENT1VISIONPRO1288: [
    "3 bars",
    "5 bars",
    "0 bars",
    "On",
    "88",
    "3",
    "0",
    "0",
    "Auto",
    "12",
    "-30",
    "On",
  ],
  ENT2VISIONPRO1288: [
    "3 bars",
    "5 bars",
    "0 bars",
    "On",
    "88",
    "3",
    "0",
    "0",
    "Auto",
    "12",
    "-30",
    "On",
  ],
  LASERVISIONPRO1288: [
    "3 bars",
    "5 bars",
    "0 bars",
    "On",
    "88",
    "3",
    "0",
    "0",
    "Auto",
    "12",
    "-10",
    "On",
  ],
  MICROSCOPEVISIONPRO1288: [
    "4 bars",
    "6 bars",
    "0 bars",
    "On",
    "88",
    "3",
    "0",
    "0",
    "Auto",
    "12",
    "-10",
    "On",
  ],
  STANDARDVISIONPRO1288: [
    "4 bars",
    "5 bars",
    "0 bars",
    "On",
    "88",
    "3",
    "0",
    "0",
    "Auto",
    "12",
    "-10",
    "On",
  ],
  ARTHROFOURK1288: [
    "4 bars",
    "5 bars",
    "0 bars",
    "On",
    "88",
    "4",
    "0",
    "0",
    "Auto",
    "12",
    "-10",
    "On",
  ],
  ARTHROVISIONPRO1188: [
    "5 bars",
    "5 bars ",
    "0 bars",
    "50",
    "5",
    "10",
    "1",
    "19",
    "Auto",
    "On",
    "--",
    "On",
    "NTSC",
    "0",
    "0",
    "Light",
  ],
  LAP1VISIONPRO1188: [
    "5 bars",
    "5 bars ",
    "0 bars",
    "55",
    "3",
    "10",
    "1",
    "15",
    "Auto",
    "On",
    "--",
    "On",
    "NTSC",
    "0",
    "0",
    "Light",
  ],
  LAP2VISIONPRO1188: [
    "5 bars",
    "5 bars ",
    "0 bars",
    "55",
    "3",
    "10",
    "1",
    "15",
    "Auto",
    "On",
    "--",
    "On",
    "NTSC",
    "0",
    "0",
    "Light",
  ],

  CYSTOVISIONPRO1188: [
    "5 bars",
    "5 bars ",
    "0 bars",
    "55",
    "4",
    "10",
    "2",
    "19",
    "Auto",
    "On",
    "--",
    "On",
    "NTSC",
    "0",
    "0",
    "Light",
  ],
  HYSTOVISIONPRO1188: [
    "5 bars",
    "5 bars ",
    "0 bars",
    "55",
    "4",
    "10",
    "2",
    "19",
    "Auto",
    "On",
    "--",
    "On",
    "NTSC",
    "0",
    "0",
    "Light",
  ],
  FLEXISCOPEVISIONPRO1188: [
    "5 bars",
    "5 bars ",
    "0 bars",
    "55",
    "4",
    "10",
    "2",
    "19",
    "Auto",
    "On",
    "--",
    "On",
    "NTSC",
    "0",
    "0",
    "Light",
  ],
  ENTVISIONPRO1188: [
    "5 bars",
    "5 bars ",
    "0 bars",
    "55",
    "4",
    "10",
    "2",
    "19",
    "Auto",
    "On",
    "--",
    "On",
    "NTSC",
    "0",
    "0",
    "Light",
  ],
  LASERVISIONPRO1188: [
    "5 bars",
    "5 bars ",
    "0 bars",
    "55",
    "4",
    "10",
    "2",
    "19",
    "Auto",
    "On",
    "--",
    "On",
    "NTSC",
    "0",
    "0",
    "Light",
  ],
  MICROSCOPEVISIONPRO1188: [
    "5 bars",
    "5 bars ",
    "0 bars",
    "55",
    "4",
    "10",
    "2",
    "19",
    "Auto",
    "On",
    "--",
    "On",
    "NTSC",
    "0",
    "0",
    "Light",
  ],
  STANDARDVISIONPRO1188: [
    "5 bars",
    "5 bars ",
    "0 bars",
    "55",
    "4",
    "10",
    "2",
    "19",
    "Auto",
    "On",
    "--",
    "On",
    "NTSC",
    "0",
    "0",
    "Light",
  ],
  ARTHROHDTVWISE1188: [
    "5 bars",
    "5 bars ",
    "0 bars",
    "50",
    "5",
    "10",
    "1",
    "19",
    "Auto",
    "On",
    "--",
    "On",
    "NTSC",
    "0",
    "0",
    "Light",
  ],

  LAP1HDTVWISE1188: [
    "5 bars",
    "5 bars ",
    "0 bars",
    "55",
    "3",
    "10",
    "1",
    "15",
    "Auto",
    "On",
    "--",
    "On",
    "NTSC",
    "0",
    "0",
    "Light",
  ],
  LAP2HDTVWISE1188: [
    "5 bars",
    "5 bars ",
    "0 bars",
    "50",
    "5",
    "10",
    "1",
    "19",
    "Auto",
    "On",
    "--",
    "On",
    "NTSC",
    "0",
    "0",
    "Light",
  ],

  CYSTOHDTVWISE1188: [
    "5 bars",
    "5 bars ",
    "0 bars",
    "55",
    "4",
    "10",
    "2",
    "19",
    "Auto",
    "On",
    "--",
    "On",
    "NTSC",
    "0",
    "0",
    "Light",
  ],
  HYSTOHDTVWISE1188: [
    "5 bars",
    "5 bars ",
    "0 bars",
    "55",
    "4",
    "10",
    "2",
    "19",
    "Auto",
    "On",
    "--",
    "On",
    "NTSC",
    "0",
    "0",
    "Light",
  ],
  FLEXISCOPEHDTVWISE1188: [
    "5 bars",
    "5 bars ",
    "0 bars",
    "55",
    "4",
    "10",
    "2",
    "19",
    "Auto",
    "On",
    "--",
    "On",
    "NTSC",
    "0",
    "0",
    "Light",
  ],
  ENTHDTVWISE1188: [
    "5 bars",
    "5 bars ",
    "0 bars",
    "55",
    "4",
    "10",
    "2",
    "19",
    "Auto",
    "On",
    "--",
    "On",
    "NTSC",
    "0",
    "0",
    "Light",
  ],
  LASERHDTVWISE1188: [
    "5 bars",
    "5 bars ",
    "0 bars",
    "55",
    "4",
    "10",
    "2",
    "19",
    "Auto",
    "On",
    "--",
    "On",
    "NTSC",
    "0",
    "0",
    "Light",
  ],
  MICROSCOPEHDTVWISE1188: [
    "5 bars",
    "5 bars ",
    "0 bars",
    "55",
    "4",
    "10",
    "2",
    "19",
    "Auto",
    "On",
    "--",
    "On",
    "NTSC",
    "0",
    "0",
    "Light",
  ],
  STANDARDHDTVWISE1188: [
    "5 bars",
    "5 bars ",
    "0 bars",
    "55",
    "4",
    "10",
    "2",
    "19",
    "Auto",
    "On",
    "--",
    "On",
    "NTSC",
    "0",
    "0",
    "Light",
  ],
  // Flexible Scope Settings
  FIVEFLEXLAPVISIONELECT21FLEXIBLE: ["-2", "1", "6", "0", "0"],
  FIVEFLEXLAPWISE19FLEXIBLE: ["-2", "1", "6", "0", "0"],
  FIVEFLEXLAPHDTVWISEFLEXIBLE: ["-2", "1", "6", "0", "0"],
  FIVEFLEXLAPVISIONPROFLEXIBLE: ["-2", "1", "6", "0", "0"],
  TENFLEXLAPVISIONELECT21FLEXIBLE: ["-2", "1", "6", "0", "0"],
  TENFLEXLAPVISIONPROFLEXIBLE: ["-2", "1", "6", "0", "0"],
  TENFLEXLAPHDTVWISEFLEXIBLE: ["-2", "1", "6", "0", "0"],
  DIGITALFLEXCYSTOVISIONELECT21FLEXIBLE: ["6", "6", "6", "-22", "-22"],
  DIGITALFLEXCYSTOVISIONPROFLEXIBLE: ["6", "6", "6", "-22", "-22"],
  DIGITALFLEXCYSTOHDTVWISEFLEXIBLE: ["6", "6", "6", "-22", "-22"],
  DIGITALFLEXCYSTOWISE19FLEXIBLE: ["6", "6", "6", "-22", "-22"],
  DIGITALFLEXURETEROHDTVWISEFLEXIBLE: ["6", "6", "6", "-22", "-22"],
  DIGITALFLEXURETEROVISIONPROFLEXIBLE: ["6", "6", "6", "-22", "-22"],
  OLYMPUSCV190GIVISIONPROFLEXIBLE: [
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
  ],

  MULTIFOURK1588: [
    "26",
    "Normal",
    "-12",
    "0",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "17",
  ],
  ARTHRO1FOURK1588: [
    "26",
    "Normal",
    "0",
    "0",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "5",
    "1",
    "17",
  ],
  ARTHRO2FOURK1588: [
    "26",
    "Normal",
    "-10",
    "-5",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "19",
  ],
  ARTHRO4_16FOURK1588: [
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
  ],
  LAP1FOURK1588: [
    "30",
    "Normal",
    "-10",
    "-5",
    "0",
    "0",
    "Auto",
    "Auto",
    "1",
    "3",
    "3",
    "23",
  ],
  LAP2FOURK1588: [
    "42",
    "Normal",
    "-10",
    "-5",
    "0",
    "0",
    "Auto",
    "Auto",
    "1",
    "0",
    "1",
    "26",
  ],
  LAPSTORZFOURK1588: [
    "26",
    "Normal",
    "-10",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "19",
  ],
  CYSTOFOURK1588: [
    "26",
    "Normal",
    "-12",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "19",
  ],
  HYSTEROSCOPYFOURK1588: [
    "32",
    "Normal",
    "-10",
    "-2",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "23",
  ],
  FLEXISCOPEFOURK1588: [
    "27",
    "Normal",
    "7",
    "-4",
    "3",
    "-2",
    "On",
    "Auto",
    "1",
    "6",
    "1",
    "10",
  ],

  ENTFOURK1588: [
    "35",
    "Normal",
    "-10",
    "0",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "26",
  ],
  LASERFOURK1588: [
    "35",
    "Normal",
    "-10",
    "0",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "26",
  ],
  MICROSCOPEFOURK1588: [
    "35",
    "Normal",
    "-10",
    "0",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "26",
  ],
  STANDARDFOURK1588: [
    "32",
    "Normal",
    "-10",
    "-3",
    "0",
    "0",
    "On",
    "Auto",
    "1",
    "3",
    "1",
    "23",
  ],
  VEINHARVESTFOURK1588: [
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
  ],
};

// put them in monitorParams

const MONITORPARAMS = [
  "Red",
  "Green",
  "Blue",
  "Gamma",
  "Brightness",
  "Contrast",
  "Sharpness",
];

const FOURKPARAMS = [
  "Red",
  "Green",
  "Blue",
  "Gamma",
  "Enhancement",
  "Brightness",
  "Contrast",
  "Sharpness",
];
// Monitor Settings
const MONITORSETTINGS = {
  VISIONPROMULTI1588: ["-20", "-20", "10", "S2", "45", "60", "No Data"],
  VISIONPROARTHRO11588: ["-10", "-10", "5", "S2", "45", "60", "No Data"],
  VISIONPROARTHRO21588: ["-35", "5", "5", "S2", "45", "50", "No Data"],
  VISIONPROARTHRO4_161588: ["-35", "5", "5", "S1.5", "47", "58", "No Data"],
  VISIONPROLAP11588: ["-25", "-5", "5", "1.9", "45", "45", "No Data"],
  VISIONPROLAP21588: ["-35", "5", "5", "1.5", "45", "45", "No Data"],
  VISIONPROLAPSTORZ1588: ["-35", "5", "5", "S2", "45", "60", "No Data"],
  VISIONPROCYSTO1588: ["-40", "10", "5", "S2", "45", "60", "No Data"],
  VISIONPROHYSTEROSCOPY1588: ["-25", "-25", "2", "S2", "45", "50", "No Data"],
  VISIONPROFLEXISCOPE1588: ["-50", "-30", "5", "S0", "47", "58", "No Data"],
  VISIONPROENT1588: ["-35", "10", "5", "S2", "45", "60", "No Data"],
  VISIONPROLASER1588: ["-35", "10", "5", "S3", "45", "60", "No Data"],
  VISIONPROMICROSCOPE1588: ["-7", "5", "-10", "S0", "45", "55", "No Data"],
  VISIONPROSTANDARD1588: ["-50", "30", "10", "1.5", "47", "58", "No Data"],
  VISIONPROVEINHARVEST1588: ["70", "46", "28", "S0", "37", "41", "No Data"],
  VISIONPROOLYMPUSGI1588: [
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
  ],
  VISIONPROLAP11688: ["-35", "8", "7", "1.5", "45", "50", "5"],
  VISIONPROLAP21688: ["-15", "5", "5", "1.9", "45", "50", "5"],
  VISIONPROLAPSTORZ1688: ["-15", "5", "5", "1.9", "45", "50", "5"],
  VISIONPROENT11688: ["TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD"],
  VISIONPROENT21688: ["TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD"],
  VISIONPROENT31688: ["TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD"],
  HDTVWISEMULTI1588: ["-25", "-25", "2", "S2", "45", "58", "No Data"],
  HDTVWISEARTHRO11588: ["-27", "-2", "14", "S1", "50", "55", "No Data"],
  HDTVWISEARTHRO21588: ["-35", "-3", "25", "S2", "55", "55", "No Data"],
  HDTVWISEARTHRO4_161588: [
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
  ],
  HDTVWISELAP11588: ["-25", "5", "5", "2.2", "55", "55", "No Data"],
  HDTVWISELAP21588: ["-35", "-3", "25", "1.7", "55", "55", "No Data"],
  HDTVWISELAPSTORZ1588: ["-35", "-3", "25", "S2", "45", "58", "No Data"],
  HDTVWISECYSTO1588: ["8", "-25", "2", "S0", "45", "55", "No Data"],
  HDTVWISEHYSTEROSCOPY1588: ["-25", "-25", "2", "S2", "45", "50", "No Data"],
  HDTVWISEFLEXISCOPE1588: ["-50", "-30", "5", "S0", "47", "58", "No Data"],
  HDTVWISEENT1588: ["-35", "-3", "25", "S1", "45", "55", "No Data"],
  HDTVWISELASER1588: ["-35", "-3", "25", "S1", "45", "55", "No Data"],
  HDTVWISEMICROSCOPE1588: ["-30", "-15", "10", "S2", "45", "58", "No Data"],
  HDTVWISESTANDARD1588: ["-50", "30", "10", "1.5", "47", "58", "No Data"],
  HDTVWISEVEINHARVEST1588: ["-36", "-38", "0", "S2", "50", "46", "No Data"],
  HDTVWISEOLYMPUSGI1588: [
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
  ],
  FOURKARTHRO1PRECISIONAC: ["-30", "-5", "30", "1.5", "Off", "40", "60", "5"],
  FOURKHYSTEROSCOPYPRECISIONAC: [
    "-30",
    "-5",
    "30",
    "1.5",
    "Off",
    "40",
    "60",
    "5",
  ],
  FOURKENTPRECISIONAC: ["-45", "-5", "30", "1.5", "Off", "40", "60", "5"],
  VISIONPROMULTIPRECISIONAC: ["-30", "-30", "5", "S2", "45", "60", "No Data"],
  VISIONPROARTHRO1PRECISIONAC: [
    "-20",
    "-20",
    "10",
    "S2",
    "45",
    "60",
    "No Data",
  ],
  VISIONPROARTHRO2PRECISIONAC: ["-10", "-10", "5", "S2", "45", "60", "No Data"],
  VISIONPROARTHRO4_16PRECISIONAC: [
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
  ],
  VISIONPROLAP1PRECISIONAC: ["-35", "5", "5", "S2", "45", "60", "No Data"],
  VISIONPROLAP2PRECISIONAC: ["-6", "-9", "3", "1.9", "50", "58", "No Data"],
  VISIONPROLAPSTORZPRECISIONAC: [
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
  ],
  VISIONPROCYSTOPRECISIONAC: ["-35", "5", "5", "S2", "45", "60", "No Data"],
  VISIONPROHYSTEROSCOPYPRECISIONAC: [
    "-40",
    "10",
    "5",
    "S2",
    "45",
    "60",
    "No Data",
  ],
  VISIONPROENTPRECISIONAC: ["-50", "30", "10", "1.5", "47", "58", "No Data"],
  HDTVWISEMULTIPRECISIONAC: ["-30", "-15", "10", "S2", "45", "58", "No Data"],
  HDTVWISEARTHRO1PRECISIONAC: ["-25", "-25", "2", "S2", "50", "50", "No Data"],
  HDTVWISEARTHRO2PRECISIONAC: ["-27", "-2", "14", "S1", "50", "55", "No Data"],
  HDTVWISEARTHRO4_16PRECISIONAC: [
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
  ],
  HDTVWISELAP1PRECISIONAC: ["-35", "-3", "25", "S2", "45", "58", "No Data"],
  HDTVWISELAP2PRECISIONAC: ["8", "0", "2", "S0", "50", "55", "No Data"],
  HDTVWISELAPSTORZPRECISIONAC: [
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
  ],
  HDTVWISECYSTOPRECISIONAC: ["-35", "-3", "25", "S2", "45", "58", "No Data"],
  HDTVWISEHYSTEROSCOPYPRECISIONAC: [
    "8",
    "-25",
    "2",
    "S0",
    "45",
    "55",
    "No Data",
  ],
  HDTVWISEFLEXISCOPEPRECISIONAC: [
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
  ],
  HDTVWISEENTPRECISIONAC: [
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
  ],
  HDTVWISELASERPRECISIONAC: [
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
  ],
  HDTVWISEMICROSCOPEPRECISIONAC: [
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
  ],
  HDTVWISESTANDARDPRECISIONAC: [
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
  ],
  HDTVWISEVEINHARVESTPRECISIONAC: [
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
  ],
  HDTVWISEOLYMPUSGIPRECISIONAC: [
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
  ],
  FOURKARTHRO1488: ["-10", "-2", "8", "S0", "Off", "43", "54", "7"],
  FOURKLAP1488: ["-10", "30", "25", "1.5", "Off", "50", "50", "5"],
  HDTVWISEMULTI1488: ["-30", "-15", "10", "S2", "45", "58", "No Data"],
  HDTVWISEARTHRO11488: ["-25", "-25", "2", "S2", "45", "58", "No Data"],
  HDTVWISEARTHRO21488: ["-27", "-2", "14", "S1", "50", "55", "No Data"],
  HDTVWISEARTHRO4_161488: [
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
  ],
  HDTVWISELAP11488: ["-35", "-3", "25", "S2", "45", "58", "No Data"],
  HDTVWISELAP21488: ["-25", "-2", "25", "S2", "45", "60", "No Data"],
  HDTVWISELAPSTORZ1488: [
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
  ],
  HDTVWISECYSTO1488: ["-35", "-3", "25", "S2", "45", "58", "No Data"],
  HDTVWISEHYSTEROSCOPY1488: ["8", "-25", "2", "S0", "45", "55", "No Data"],
  HDTVWISEFLEXISCOPE1488: ["-25", "-25", "2", "S2", "45", "50", "No Data"],
  HDTVWISEENT1488: ["-50", "30", "10", "1.5", "47", "58", "No Data"],
  HDTVWISELASER1488: ["-35", "-3", "25", "S1", "45", "55", "No Data"],
  HDTVWISEMICROSCOPE1488: ["-35", "-3", "25", "S1", "45", "55", "No Data"],
  HDTVWISESTANDARD1488: ["-30", "-15", "10", "S2", "45", "58", "No Data"],
  HDTVWISEVEINHARVEST1488: ["-50", "30", "10", "1.5", "47", "58", "No Data"],
  HDTVWISEOLYMPUSGI1488: ["-36", "-38", "0", "S2", "50", "46", "No Data"],
  VISIONPROMULTI1488: ["-30", "-30", "5", "S2", "45", "60", "No Data"],
  VISIONPROARTHRO11488: ["-20", "-20", "10", "S2", "45", "60", "No Data"],
  VISIONPROARTHRO21488: ["-10", "-10", "5", "S2", "45", "60", "No Data"],
  VISIONPROARTHRO4_161488: [
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
  ],
  VISIONPROLAP11488: ["-35", "5", "5", "S2", "45", "60", "No Data"],
  VISIONPROLAP21488: ["-10", "-9", "3", "1.9", "50", "58", "No Data"],
  VISIONPROLAPSTORZ1488: [
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
  ],
  VISIONPROCYSTO1488: ["-35", "5", "5", "S2", "45", "60", "No Data"],
  VISIONPROHYSTEROSCOPY1488: ["-40", "10", "5", "S2", "45", "60", "No Data"],
  VISIONPROFLEXISCOPE1488: ["-25", "-25", "2", "S2", "45", "50", "No Data"],
  VISIONPROENT1488: ["-50", "30", "10", "1.5", "47", "58", "No Data"],
  VISIONPROLASER1488: ["-35", "10", "5", "S2", "45", "60", "No Data"],
  VISIONPROMICROSCOPE1488: ["-35", "10", "5", "S3", "45", "60", "No Data"],
  VISIONPROSTANDARD1488: ["-7", "5", "-10", "S0", "45", "55", "No Data"],
  VISIONPROVEINHARVEST1488: ["-50", "30", "10", "1.5", "47", "58", "No Data"],
  VISIONPROOLYMPUSGI1488: ["70", "46", "28", "S0", "37", "41", "No Data"],
  VISIONPROARTHRO11288: ["-20", "-10", "5", "S2", "45", "60", "No Data"],
  VISIONPROARTHRO21288: ["-20", "-10", "-10", "S2", "45", "60", "No Data"],
  VISIONPROLAP11288: ["-35", "10", "5", "S2", "45", "60", "No Data"],
  VISIONPROLAP21288: ["-25", "-25", "10", "S2", "45", "60", "No Data"],
  VISIONPROCYSTO1288: ["-35", "10", "5", "S2", "45", "60", "No Data"],
  VISIONPROHYSTEROSCOPY1288: ["-45", "10", "5", "S2", "45", "60", "No Data"],
  VISIONPROFLEXISCOPE1288: ["-25", "-25", "2", "S2", "45", "50", "No Data"],
  VISIONPROENT11288: ["-50", "0", "10", "1.5", "47", "57", "No Data"],
  VISIONPROENT21288: ["0", "0", "0", "1.5", "50", "50", "No Data"],
  VISIONPROLASER1288: ["-35", "10", "5", "S2", "45", "60", "No Data"],
  VISIONPROMICROSCOPE1288: ["-35", "10", "5", "S3", "45", "60", "No Data"],
  VISIONPROSTANDARD1288: ["-10", "5", "10", "S0", "45", "55", "No Data"],
  HDTVWISEARTHRO11288: ["-14", "-30", "14", "S2", "45", "52", "No Data"],
  HDTVWISEARTHRO21288: ["-27", "-2", "14", "S2", "50", "50", "No Data"],
  HDTVWISELAP11288: ["-25", "-25", "2", "S2", "45", "52", "No Data"],
  HDTVWISELAP21288: ["8", "-5", "2", "S0", "45", "52", "No Data"],
  HDTVWISECYSTO1288: ["8", "-10", "2", "S0", "50", "50", "No Data"],
  HDTVWISEHYSTEROSCOPY1288: ["8", "-25", "2", "S0", "50", "50", "No Data"],
  HDTVWISEFLEXISCOPE1288: ["-25", "-25", "2", "S2", "45", "55", "No Data"],
  HDTVWISEENT11288: ["-50", "0", "10", "1.5", "47", "57", "No Data"],
  HDTVWISEENT21288: ["-30", "-22", "3", "1.9", "48", "60", "No Data"],
  HDTVWISELASER1288: ["15", "-30", "2", "S2", "45", "50", "No Data"],
  HDTVWISEMICROSCOPE1288: ["8", "-10", "2", "1.9", "55", "50", "No Data"],
  HDTVWISESTANDARD1288: ["-35", "-3", "25", "S1", "45", "58", "No Data"],
  FOURKARTHRO1288: ["-10", "5", "5", "1.5", "Off", "45", "60", "5"],
  HDTVWISEARTHRO1188: ["-10", "-45", "18", "S0", "45", "50", "No Data"],
  HDTVWISELAP11188: ["8", "0", "2", "S0", "50", "50", "No Data"],
  HDTVWISELAP21188: ["-10", "-14", "12", "S0", "45", "55", "No Data"],
  HDTVWISECYSTO1188: ["8", "0", "2", "S0", "50", "50", "No Data"],
  HDTVWISEHYSTO1188: ["8", "0", "2", "S0", "50", "50", "No Data"],
  HDTVWISEFLEXISCOPE1188: ["8", "0", "2", "S0", "50", "50"],
  HDTVWISEENT1188: ["8", "0", "2", "S0", "50", "50", "No Data"],
  HDTVWISELASER1188: ["-25", "-5", "10", "S1", "45", "50", "No Data"],
  HDTVWISEMICROSCOPE1188: ["-25", "-5", "10", "S2", "45", "50", "No Data"],
  HDTVWISESTANDARD1188: ["8", "0", "2", "S0", "50", "50", "No Data"],
  VISIONPROARTHRO1188: ["-30", "-30", "5", "S2", "45", "60", "No Data"],
  VISIONPROLAP11188: ["-35", "10", "5", "S2", "45", "60", "No Data"],
  VISIONPROLAP21188: ["-35", "5", "5", "S2", "40", "65", "No Data"],
  VISIONPROCYSTO1188: ["-45", "10", "5", "S2", "45", "60", "No Data"],
  VISIONPROHYSTO1188: ["-45", "10", "5", "S2", "45", "60", "No Data"],
  VISIONPROFLEXISCOPE1188: ["-30", "10", "5", "S2", "45", "55", "No Data"],
  VISIONPROENT1188: ["-30", "-30", "10", "S2", "45", "5", "No Data"],
  VISIONPROLASER1188: ["-30", "10", "5", "S2", "45", "55", "No Data"],
  VISIONPROMICROSCOPE1188: ["-30", "10", "5", "S2", "45", "55", "No Data"],
  VISIONPROSTANDARD1188: ["-7", "5", "-10", "S2", "45", "55", "No Data"],
  VISIONPROFIVEFLEXLAPFLEXIBLE: ["-40", "-3", "20", "S0", "45", "65", "5"],
  VISIONPROTENFLEXLAPFLEXIBLE: ["-8", "12", "-5", "1.8", "50", "50", "5"],
  VISIONPRODIGITALFLEXCYSTOFLEXIBLE: ["-25", "-25", "2", "S2", "45", "55", "5"],
  VISIONPRODIGITALFLEXURETEROFLEXIBLE: [
    "-25",
    "-25",
    "2",
    "S2",
    "45",
    "55",
    "5",
  ],
  VISIONPROOLYMPUSCV190GIFLEXIBLE: ["30", "30", "30", "S0", "35", "30", "5"],
  HDTVWISEFIVEFLEXLAPFLEXIBLE: ["-40", "-3", "20", "S0", "45", "65", "5"],
  HDTVWISETENFLEXLAPFLEXIBLE: ["-8", "12", "-5", "1.8", "50", "50", "5"],
  HDTVWISEDIGITALFLEXCYSTOFLEXIBLE: ["-25", "-25", "2", "S2", "45", "55", "5"],
  HDTVWISEDIGITALFLEXURETEROFLEXIBLE: [
    "-25",
    "-25",
    "2",
    "S2",
    "45",
    "55",
    "5",
  ],
  WISE19DIGITALFLEXCYSTOFLEXIBLE: [
    "3",
    "-11",
    "-22",
    "1.7",
    "50",
    "50",
    "No Data",
  ],
  VISIONELECT21FIVEFLEXLAPFLEXIBLE: [
    "-50",
    "30",
    "40",
    "S0",
    "50",
    "50",
    "No Data",
  ],
};

const FOURKSETTINGS = {
  FOURKLAP11688: ["-45", "-5", "10", "S7", "Low", "45", "50", "No Data"],
  FOURKLAP21688: ["-45", "-15", "-10", "S5", "Low", "40", "50", "No Data"],
  FOURKLAPSTORZ1688: ["-45", "-15", "-10", "S5", "Low", "40", "50", "No Data"],
  FOURKENT11688: ["-30", "-6", "7", "S0", "Mid", "39", "52", "No Data"],
  FOURKENT21688: ["-50", "-13", "-15", "S0", "Low", "39", "52", "No Data"],
  FOURKENT31688: ["-10", "-6", "7", "S2", "Off", "39", "52", "No Data"],
  FOURKMULTI1688: ["-25", "-15", "5", "S2", "Low", "39", "52", "No Data"],
  // 1588/4K
  FOURKMULTI1588: ["-25", "-15", "5", "S2", "Low", "39", "52", "5"],
  FOURKARTHRO11588: ["-25", "-15", "5", "S2", "Low", "43", "65", "5"],
  FOURKARTHRO21588: ["-25", "-15", "5", "S2", "Low", "43", "65", "5"],
  FOURKARTHRO4_161588: [
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
  ],
  FOURKLAP11588: ["-30", "-5", "30", "1.5", "Off", "45", "60", "5"],
  FOURKLAP21588: ["-10", "25", "22", "1.5", "Off", "42", "53", "1"],
  FOURKLAPSTORZ1588: [
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
  ],
  FOURKCYSTO1588: [
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
  ],
  FOURKHYSTEROSCOPY1588: [
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
  ],
  FOURKFLEXISCOPE1588: [
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
  ],
  FOURKENT1588: ["-20", "0", "0", "1.9", "Off", "50", "55", "1"],
  FOURKLASER1588: [
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
  ],
  FOURKMICROSCOPE1588: [
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
  ],
  FOURKSTANDARD1588: [
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
  ],
  FOURKVEINHARVEST1588: [
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
  ],
  FOURKOLYMPUSGI1588: [
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
    "No Data",
  ],
  FOURKFLEXISCOPE1688: ["-35", "0", "10", "S0", "Mid", "45", "70", "No Data"],
  FOURKCYSTO1688: ["-35", "0", "10", "S0", "Mid", "45", "70", "No Data"],
  FOURKARTHRO11688: ["-10", "10", "5", "S4", "Low", "37", "54", "No Data"],
  FOURKARTHRO21688: ["-15", "-5", "8", "S7", "Low", "37", "52", "No Data"],
  FOURKLASER1688: ["-35", "0", "10", "S0", "Mid", "45", "70", "No Data"],
  FOURKHYSTERO1688: ["-45", "-15", "0", "S5", "Low", "40", "50", "No Data"],
  FOURKMICROSCOPE1688: ["TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD"],
  FOURKOLYMPUSGI1688: ["TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD", "TBD"],
  FOURKVEINHARVEST1688: [
    "TBD",
    "TBD",
    "TBD",
    "TBD",
    "TBD",
    "TBD",
    "TBD",
    "TBD",
  ],
};

const showBackButton = () => {
  let moneySettingsToggle = document.getElementById("money-settings");
  let backButtonToggle = document.getElementById("back-button");
  // "money-settings-toggle has a display: none"
  if (moneySettingsToggle !== null) {
    moneySettingsToggle.id = "money-settings-toggle";
  }

  backButtonToggle.style.display = "block";
  showHomeIcon();
};

const showHomeIcon = () => {
  // need to grab the js-navbar-toggle div, and insert the home icon
  let jsNavBarToggle = document.getElementById("js-navbar-toggle");
  let homeIconDiv = document.getElementById("home-icon-div-hide");
  // "js-navbar-toggle-hide" display: none
  if (jsNavBarToggle !== null) {
    jsNavBarToggle.id = "js-navbar-toggle-hide";
  }
  if (homeIconDiv !== null) {
    homeIconDiv.id = "home-icon-div-show";
  }
  homeIconEventListener();
};

const homeIconEventListener = () => {
  let homeIcon = document.getElementById("home-icon-div-show");
  homeIcon.addEventListener("click", () => {
    resetState(homeIcon);
    resetDOM();
  });
};

const resetDOM = () => {
  // Hide home icon
  hideHomeIcon();
  // Show menu icon
  let jsNavBarToggle = document.getElementById("js-navbar-toggle-hide");
  if (jsNavBarToggle !== null) {
    jsNavBarToggle.id = "js-navbar-toggle";
  }

  // replace back icon with "Money Settings"
  let moneySettingsToggle = document.getElementById("money-settings-toggle");
  let backButtonToggle = document.getElementById("back-button");
  if (moneySettingsToggle !== null) {
    moneySettingsToggle.id = "money-settings";
    backButtonToggle.style.display = "none";
  }
  // reset to show camera buttons
  // show ccu
  let ccuTopDiv = document.getElementById("top-camera-div");
  ccuTopDiv.className = "camera-div";
  // reset displayDiv html
  let displayDiv = document.getElementById("displayTopDiv");
  displayDiv.innerHTML = "";
  displayDiv.className = "";
  // reset specialtyDiv html

  if (specialtyDiv !== null) {
    let specialtyDiv = document.getElementById("specialtyTopDiv");
    specialtyDiv.innerHTML = "";
    specialtyDiv.className = "";
  }
  // reset ccu settings div
  let ccuSettingsDiv = document.getElementById("ccuSettingsTopDiv");
  if (ccuSettingsDiv !== null) {
    ccuSettingsDiv.innerHTML = "";
  }
  // reset monitor settings div
  let monitorSettingsDiv = document.getElementById("monitorSettingsTopDiv");
  if (monitorSettingsDiv !== null) {
    monitorSettingsDiv.innerHTML = "";
  }
  // reset software version text box
  const swVersionTextBoxDiv = document.getElementById(
    "software-version-text-box-div"
  );
  if (swVersionTextBoxDiv !== null) {
    swVersionTextBoxDiv.innerHTML = "";
  }
  // reset software version settings div
  const swVersionSettingsDiv = document.getElementById(
    "software-version-settings-div"
  );
  if (swVersionSettingsDiv !== null) {
    swVersionSettingsDiv.innerHTML = "";
  }
};

const resetState = () => {
  (state.camera.name = ""),
    (state.display.name = ""),
    (state.specialty.name = "");
};

const hideHomeIcon = () => {
  let homeIconShow = document.getElementById("home-icon-div-show");
  if (homeIconShow !== null) {
    homeIconShow.id = "home-icon-div-hide";
  }
};

function backButton() {
  let backButtonToggle = document.getElementById("back-button");
  backButtonToggle.addEventListener("click", () => {
    if (
      state.specialty.name !== "" &&
      state.display.name !== "" &&
      state.camera.name !== ""
    ) {
      // reset state.specialty
      state.specialty.name = "";
      // reset html ccuSettingsTopDiv
      let ccuSettingsTopDiv = document.getElementById("ccuSettingsTopDiv");
      ccuSettingsTopDiv.innerHTML = "";
      // reset html monitorSettingsTopDiv
      let monitorSettingsTopDiv = document.getElementById(
        "monitorSettingsTopDiv"
      );
      monitorSettingsTopDiv.innerHTML = "";
      // eliminate specialtySelectDiv to display specialties
      specialtyTopDiv.className = "";
      // reset software version text box
      const swVersionTextBoxDiv = document.getElementById(
        "software-version-text-box-div"
      );
      console.log(swVersionTextBoxDiv);
      if (swVersionTextBoxDiv !== null) {
        swVersionTextBoxDiv.innerHTML = "";
      }
      const softwareVersionSettingsIdDiv = document.getElementById(
        "software-version-settings-div"
      );
      if (softwareVersionSettingsIdDiv !== null) {
        softwareVersionSettingsIdDiv.innerHTML = " ";
      }
    } else if (
      state.specialty.name === "" &&
      state.display.name !== "" &&
      state.camera.name !== ""
    ) {
      let displayTopDiv = document.getElementById("displayTopDiv");
      displayTopDiv.className = "";
      displayTopDiv.innerHTML = "";
      let specialtyTopDiv = document.getElementById("specialtyTopDiv");
      specialtyTopDiv.innerHTML = "";
      state.display.name = "";
      showDisplays(state.camera.name, state.display.name);
    } else if (state.display.name === "" && state.camera.name !== "") {
      hideHomeIcon();
      resetDOM();
      resetState();
      selectCamera();
    }
  });
}

function selectCamera(camera, display) {
  let cameraButton = document.getElementsByClassName("camera-button");
  for (let item of cameraButton) {
    item.addEventListener("click", function (item) {
      let cameraTopDiv = document.getElementById("top-camera-div");
      cameraTopDiv.classList.add("cameraSelectDiv");
      let camera = this.dataset.camera;
      // ********** Declaring State ********* //
      state.camera.name = this.dataset.camera;
      showDisplays(camera);
      showBackButton();
    });
  }
}

function showDisplays(camera, display) {
  let displayTopDiv = document.getElementById("displayTopDiv");
  displayTopDiv.innerHTML = "";
  let hDiv = document.createElement("div");
  //************* bread crumbs *************/
  let cameraDiv = document.createElement("div");
  let cameraPTag = document.createElement("p");
  cameraDiv.setAttribute("class", "camera-div");
  cameraPTag.setAttribute("class", "camera-p-tag");
  cameraPTag.innerHTML = "CCU: " + camera;
  //************ end  ********************/
  cameraDiv.appendChild(cameraPTag);
  hDiv.setAttribute("class", "title-div");
  let hElement = document.createElement("h1");
  hElement.append("Select Display");
  displayTopDiv.setAttribute("style", "margin-top: 5em;");
  hDiv.appendChild(hElement);
  hDiv.appendChild(cameraDiv);
  displayTopDiv.appendChild(hDiv);

  // Monitor Variables
  const hdtvWise = () => {
    let wiseDisplayDiv = document.createElement("div");
    let wiseLink = document.createElement("a");
    wiseDisplayDiv.setAttribute("class", "display-button-div");
    wiseDisplayDiv.setAttribute("align", "center");
    wiseLink.setAttribute("class", "display-button button");
    wiseLink.setAttribute("data-display", "HDTV Wise");
    wiseLink.setAttribute("href", "#");
    wiseLink.appendChild(document.createTextNode("HDTV Wise"));
    wiseDisplayDiv.appendChild(wiseLink);
    displayTopDiv.appendChild(wiseDisplayDiv);
  };
  const VisionElectTwentyOne = () => {
    let visionElectTwentyOneDisplayDiv = document.createElement("div");
    let visionElectLink = document.createElement("a");
    visionElectTwentyOneDisplayDiv.setAttribute("class", "display-button-div");
    visionElectTwentyOneDisplayDiv.setAttribute("align", "center");
    visionElectLink.setAttribute("class", "display-button button");
    visionElectLink.setAttribute("data-display", "Vision Elect 21");
    visionElectLink.setAttribute("href", "#");
    visionElectLink.appendChild(document.createTextNode("Vision Elect 21"));
    visionElectTwentyOneDisplayDiv.appendChild(visionElectLink);
    displayTopDiv.appendChild(visionElectTwentyOneDisplayDiv);
  };
  const wiseNineteen = () => {
    let wiseNineteenDisplayDiv = document.createElement("div");
    let wiseNineteenLink = document.createElement("a");
    wiseNineteenDisplayDiv.setAttribute("class", "display-button-div");
    wiseNineteenDisplayDiv.setAttribute("align", "center");
    wiseNineteenLink.setAttribute("class", "display-button button");
    wiseNineteenLink.setAttribute("data-display", "Wise 19");
    wiseNineteenLink.setAttribute("href", "#");
    wiseNineteenLink.appendChild(document.createTextNode("Wise 19"));
    wiseNineteenDisplayDiv.appendChild(wiseNineteenLink);
    displayTopDiv.appendChild(wiseNineteenDisplayDiv);
  };
  const visionPro = () => {
    let vpDisplayDiv = document.createElement("div");
    let vpLink = document.createElement("a");
    vpDisplayDiv.setAttribute("class", "display-button-div");
    vpDisplayDiv.setAttribute("align", "center");
    vpLink.setAttribute("class", "display-button button");
    vpLink.setAttribute("data-display", "VisionPro");
    vpLink.setAttribute("href", "#");
    vpLink.appendChild(document.createTextNode("Visionpro"));
    vpDisplayDiv.appendChild(vpLink);
    displayTopDiv.appendChild(vpDisplayDiv);
  };
  const fourK = () => {
    let fourKDisplayDiv = document.createElement("div");
    let fourKLink = document.createElement("a");
    fourKDisplayDiv.setAttribute("class", "display-button-div");
    fourKDisplayDiv.setAttribute("align", "center");
    fourKLink.setAttribute("class", "display-button button");
    fourKLink.setAttribute("data-display", "FourK");
    fourKLink.setAttribute("href", "#");
    fourKLink.appendChild(document.createTextNode("4K"));
    fourKDisplayDiv.appendChild(fourKLink);
    displayTopDiv.appendChild(fourKDisplayDiv);
  };

  if (camera === "1688") {
    // Visionpro
    visionPro();
    // 4K
    fourK();
    selectDisplay(camera);
  } else if (camera === "1188") {
    // HDTV Wise
    hdtvWise();
    // Visionpro
    visionPro();
    selectDisplay(camera);
  } else if (camera === "Flexible") {
    VisionElectTwentyOne();
    wiseNineteen();
    hdtvWise();
    visionPro();
    selectDisplay(camera);
  } else {
    // HDTV Wise
    hdtvWise();
    // Visionpro
    visionPro();
    // 4K
    fourK();
    selectDisplay(camera);
  }
  // Button selection
}

function selectDisplay(camera) {
  let displayButton = document.getElementsByClassName("display-button");
  // Loop over buttons
  for (let button of displayButton) {
    button.addEventListener("click", function () {
      let displayTopDiv = document.getElementById("displayTopDiv");
      displayTopDiv.classList.add("displaySelectDiv");
      let display = this.dataset.display;
      // ************ Delcare State *********
      state.display.name = this.dataset.display;
      showSpecialties(camera, display);
    });
  }
}

function showSpecialties(camera, display) {
  let cameraDisplay = new CameraDisplayObject(camera, display);
  cameraDisplay.displaySpecialties();
}

// Specialites Object Model
function CameraDisplayObject(camera, display) {
  this.camera = camera;
  this.display = display;
}
// Object prototype
CameraDisplayObject.prototype.displaySpecialties = function () {
  let display = this.display;

  if (display === "FourK") {
    display = "4k";
  }
  let hDiv = document.createElement("div");
  hDiv.setAttribute("class", "title-div");
  let hElement = document.createElement("h1");
  hElement.append("Select Specialty");

  // Breadcrumbs
  let selectedConsolesDiv = document.createElement("div");
  selectedConsolesDiv.setAttribute("class", "selected-consoles-div");
  let displayPTag = document.createElement("p");
  displayPTag.setAttribute("class", "displayPTag");
  let cameraPTag = document.createElement("p");
  cameraPTag.setAttribute("class", "cameraPTag");
  cameraPTag.innerHTML = "CCU: " + this.camera;
  displayPTag.innerHTML = "DISPLAY: " + display;

  selectedConsolesDiv.appendChild(cameraPTag);
  selectedConsolesDiv.appendChild(displayPTag);

  hDiv.appendChild(hElement);
  specialtyTopDiv.appendChild(hDiv);
  specialtyTopDiv.appendChild(selectedConsolesDiv);
  // specialty div
  if (this.camera === "Precision AC" && this.display === "FourK") {
    PRECISION4KSPECIALTIES.forEach(function (specialty) {
      specialtyDiv(specialty);
    });
  } else if (this.camera === "Precision AC") {
    PRECISIONSPECIALTIES.forEach(function (specialty) {
      specialtyDiv(specialty);
    });
  } else if (
    (this.camera === "1588" && this.display === "VisionPro") ||
    (this.camera === "1588" && this.display === "HDTV Wise")
  ) {
    FIFTEENWISEVPSPECIALTIES.forEach(function (specialty) {
      specialtyDiv(specialty);
    });
  } else if (this.camera === "1588" && this.display === "FourK") {
    FIFTEENFOURKSPECIALTIES.forEach(function (specialty) {
      specialtyDiv(specialty);
    });
  } else if (this.camera === "1488" && this.display === "FourK") {
    FOURTEENFOURKSPECIALTIES.forEach(function (specialty) {
      specialtyDiv(specialty);
    });
  } else if (
    this.camera === "1488" &&
    (this.display === "VisionPro" || this.display === "HDTV Wise")
  ) {
    FOURTEENSPECIALTIES.forEach(function (specialty) {
      specialtyDiv(specialty);
    });
  } else if (this.camera === "1688" && this.display === "VisionPro") {
    SIXTEENVISIONPROSPECIALTIES.forEach(function (specialty) {
      specialtyDiv(specialty);
    });
  } else if (this.camera === "1288" && this.display === "FourK") {
    TWELVEFOURKSPECIALTIES.forEach(function (specialty) {
      specialtyDiv(specialty);
    });
  } else if (
    this.camera === "1288" &&
    (this.display === "VisionPro" || this.display === "HDTV Wise")
  ) {
    TWELVESPECIALTIES.forEach(function (specialty) {
      specialtyDiv(specialty);
    });
  } else if (this.camera === "1188") {
    ELEVENSPECIALTIES.forEach(function (specialty) {
      specialtyDiv(specialty);
    });
  } else if (this.camera === "Flexible" && this.display === "HDTV Wise") {
    FLEXIBLESPECIALTIES.forEach(function (specialty) {
      specialtyDiv(specialty);
    });
  } else if (this.camera === "Flexible" && this.display === "VisionPro") {
    FLEXIBLEVPSPECIALTIES.forEach(function (specialty) {
      specialtyDiv(specialty);
    });
  } else if (this.camera === "Flexible" && this.display === "Wise 19") {
    FLEXIBLEWISE19SPECIALTIES.forEach(function (specialty) {
      specialtyDiv(specialty);
    });
  } else if (this.camera === "Flexible" && this.display === "Vision Elect 21") {
    FLEXIBLEVE21SPECIALTIES.forEach(function (specialty) {
      specialtyDiv(specialty);
    });
  } else {
    SIXTEENSPECIALTIES.forEach(function (specialty) {
      specialtyDiv(specialty);
    });
  }
  let cameraDisplay = this;
  selectSpecialty(cameraDisplay);
};

function specialtyDiv(specialty) {
  let specialtiesDiv = document.createElement("div");
  let specialtiesLink = document.createElement("a");
  specialtiesDiv.setAttribute("class", "specialty-button-div");
  specialtiesDiv.setAttribute("align", "center");
  specialtiesLink.setAttribute("class", "specialty-button button");
  specialtiesLink.setAttribute("data-specialty", specialty);
  specialtiesLink.setAttribute("href", "#");
  specialtiesLink.appendChild(document.createTextNode(specialty));
  specialtiesDiv.appendChild(specialtiesLink);
  specialtyTopDiv.appendChild(specialtiesDiv);
}
// User can select a specialty
function selectSpecialty(cameraDisplay) {
  let specialtyButton = document.getElementsByClassName("specialty-button");
  let specialtyTopDiv = document.getElementById("specialtyTopDiv");
  for (let button of specialtyButton) {
    button.addEventListener("click", function () {
      specialtyTopDiv.className = "";
      specialtyTopDiv.className = "specialtySelectDiv";
      // specialtyTopDiv.classList.add("specialtySelectDiv");
      let cameraDisplaySpecialty = {
        camera: cameraDisplay.camera,
        display: cameraDisplay.display,
        specialty: this.dataset.specialty,
      }; // camera
      // ********** Declare State ***********
      state.specialty.name = this.dataset.specialty;
      displaySettings(cameraDisplaySpecialty);
    });
  }
}

function displaySettings(cameraDisplaySpecialty) {
  if (cameraDisplaySpecialty.specialty === "Arthro 4/16") {
    cameraDisplaySpecialty.specialty = "Arthro 4_16";
  }
  if (state.specialty.name === "Arthro 4_16") {
    state.specialty.name = "Arthro 4/16";
  }
  let headerDiv = document.createElement("div");
  headerDiv.setAttribute("class", "settings-header");
  // Camera Parameter Header Div
  let cameraParametersHeaderDiv = document.createElement("div");
  let cameraParameterTitle = document.createElement("h3");
  cameraParametersHeaderDiv.setAttribute("class", "camera-header");
  cameraParameterTitle.appendChild(
    document.createTextNode(
      `${cameraDisplaySpecialty.camera}` + " " + `${state.specialty.name}`
    )
  );
  let cameraHeaderText = document.createElement("p");
  cameraHeaderText.setAttribute("class", "camera-header-text");
  cameraHeaderText.innerHTML = "Money Settings";
  cameraParametersHeaderDiv.appendChild(cameraParameterTitle);
  cameraParametersHeaderDiv.appendChild(cameraHeaderText);
  headerDiv.appendChild(cameraParametersHeaderDiv);
  // params/settings parent Div
  let parentDiv = document.createElement("div");
  parentDiv.setAttribute("class", "parent-div");
  // Camera parameters Div
  let cameraParameterDiv = document.createElement("div");

  cameraParameterDiv.setAttribute("class", "camera-parameter");

  let cameraSettingsDiv = document.createElement("div");
  cameraSettingsDiv.setAttribute("class", "camera-settings");

  // CCU/Specialty Settings
  // convert 5mm to FIVEMM function
  if (cameraDisplaySpecialty.specialty === "5mm Flex Lap") {
    cameraDisplaySpecialty.specialty = "Five Flex Lap";
  } else if (cameraDisplaySpecialty.specialty === "10mm Flex Lap") {
    cameraDisplaySpecialty.specialty = "Ten Flex Lap";
  }

  ccuSettings =
    cameraDisplaySpecialty.specialty.replace(/\s/g, "").toUpperCase() +
    cameraDisplaySpecialty.display.replace(/\s/g, "").toUpperCase() +
    cameraDisplaySpecialty.camera.replace(/\s/g, "").toUpperCase();
  if (
    cameraDisplaySpecialty.camera !== "1688" &&
    cameraDisplaySpecialty.camera !== "1288" &&
    cameraDisplaySpecialty.camera !== "1188" &&
    cameraDisplaySpecialty.camera !== "Flexible"
  ) {
    // CCU Parameters
    CCUPARAMETERS.forEach(function (parameter) {
      let cameraParameter = document.createElement("p");
      cameraParameter.appendChild(document.createTextNode(parameter));
      cameraParameterDiv.appendChild(cameraParameter);
      parentDiv.appendChild(cameraParameterDiv);
    });
    // CCU Settings
    for (let setting in CAMERASETTINGS) {
      if (ccuSettings === setting) {
        CAMERASETTINGS[setting].forEach(function (setting) {
          let cameraSettings = document.createElement("p");
          cameraSettings.appendChild(document.createTextNode(setting));
          cameraSettingsDiv.appendChild(cameraSettings);
          parentDiv.appendChild(cameraSettingsDiv);
        });
      }
    }
  } else if (cameraDisplaySpecialty.camera === "1288") {
    // 1288 Parameters
    TWELVEPARAMETERS.forEach(function (parameter) {
      let cameraParameter = document.createElement("p");
      cameraParameter.appendChild(document.createTextNode(parameter));
      cameraParameterDiv.appendChild(cameraParameter);
      parentDiv.appendChild(cameraParameterDiv);
    });
    // 1288 CCU Settings
    for (let setting in CAMERASETTINGS) {
      if (ccuSettings === setting) {
        CAMERASETTINGS[setting].forEach(function (setting) {
          let cameraSettings = document.createElement("p");
          cameraSettings.appendChild(document.createTextNode(setting));
          cameraSettingsDiv.appendChild(cameraSettings);
          parentDiv.appendChild(cameraSettingsDiv);
        });
      }
    }
  } else if (cameraDisplaySpecialty.camera === "1188") {
    // 1188 Parameters
    ELEVENPARAMETERS.forEach(function (parameter) {
      let cameraParameter = document.createElement("p");
      cameraParameter.appendChild(document.createTextNode(parameter));
      cameraParameterDiv.appendChild(cameraParameter);
      parentDiv.appendChild(cameraParameterDiv);
    });
    // 1188 CCU Settings
    for (let setting in CAMERASETTINGS) {
      if (ccuSettings === setting) {
        CAMERASETTINGS[setting].forEach(function (setting) {
          let cameraSettings = document.createElement("p");
          cameraSettings.appendChild(document.createTextNode(setting));
          cameraSettingsDiv.appendChild(cameraSettings);
          parentDiv.appendChild(cameraSettingsDiv);
        });
      }
    }
  } else if (cameraDisplaySpecialty.camera === "Flexible") {
    // Flexible Parameters
    FLEXIBLEPARAMETERS.forEach(function (parameter) {
      let cameraParameter = document.createElement("p");
      cameraParameter.appendChild(document.createTextNode(parameter));
      cameraParameterDiv.appendChild(cameraParameter);
      parentDiv.appendChild(cameraParameterDiv);
    });
    // FCU Settings
    for (let setting in CAMERASETTINGS) {
      if (ccuSettings === setting) {
        CAMERASETTINGS[setting].forEach(function (setting) {
          let cameraSettings = document.createElement("p");
          cameraSettings.appendChild(document.createTextNode(setting));
          cameraSettingsDiv.appendChild(cameraSettings);
          parentDiv.appendChild(cameraSettingsDiv);
        });
      }
    }
  } else {
    // 1688 Parameters
    SIXTEENPARAMETERS.forEach(function (parameter) {
      let cameraParameter = document.createElement("p");
      cameraParameter.appendChild(document.createTextNode(parameter));
      cameraParameterDiv.appendChild(cameraParameter);
      parentDiv.appendChild(cameraParameterDiv);
    });
    // Software version text box function
    softwareVersionParams(parentDiv);
    // Out Of Box Message Function
    if (
      cameraDisplaySpecialty.specialty === "Flexiscope" ||
      cameraDisplaySpecialty.specialty === "Laser" ||
      cameraDisplaySpecialty.specialty === "Cysto" ||
      cameraDisplaySpecialty.specialty === "Hystero" ||
      cameraDisplaySpecialty.specialty === "Microscope" ||
      cameraDisplaySpecialty.specialty === "Olympus GI"
    ) {
      let outOfBoxMessage = document.createElement("div");
      let outOfBoxMessageText = document.createElement("p");
      outOfBoxMessage.setAttribute("class", "out-of-box-message");
      outOfBoxMessageText.setAttribute("class", "out-of-box-message-text");
      outOfBoxMessageText.appendChild(
        document.createTextNode(
          "These CCU settings come out of box with 1688 CCU software 4.0.13"
        )
      );
      outOfBoxMessage.appendChild(outOfBoxMessageText);
      ccuSettingsTopDiv.appendChild(outOfBoxMessage);
    }

    // 1688 CCU Settings
    for (let setting in SIXTEENSETTINGS) {
      if (ccuSettings === setting) {
        SIXTEENSETTINGS[setting].forEach(function (setting) {
          let cameraSettings = document.createElement("p");
          cameraSettings.appendChild(document.createTextNode(setting));
          cameraSettingsDiv.appendChild(cameraSettings);
          parentDiv.appendChild(cameraSettingsDiv);
        });
      }
    }
    // Software version parameter text box
    function softwareVersionParams() {
      const swVersionTextBoxDiv = document.getElementById(
        "software-version-text-box-div"
      );
      const swVersionDiv = document.createElement("div");
      swVersionDiv.setAttribute("class", "sw-version-div");
      const swVersionTextTag = document.createElement("p");
      swVersionTextTag.setAttribute("class", "sw-version-text-tag");
      swVersionTextTag.innerHTML =
        "The following CCU settings will be visible on software version 4.0.13";
      swVersionDiv.appendChild(swVersionTextTag);
      swVersionTextBoxDiv.appendChild(swVersionDiv);
      softwareVersionSettings();
    }

    function softwareVersionSettings() {
      const softwareVersionSettingsIdDiv = document.getElementById(
        "software-version-settings-div"
      );
      // create parameter div
      const softwareVersionParameterDiv = document.createElement("div");
      softwareVersionParameterDiv.setAttribute(
        "class",
        "software-version-parameter-div"
      );
      // Now I have add the 4.0.13 parameters - SOFTWARE4013PARAMETERS
      SOFTWARE4013PARAMETERS.map((param) => {
        // create p-tag
        const softwareVersionParameterPtag = document.createElement("p");
        softwareVersionParameterPtag.setAttribute(
          "class",
          "software-version-parameter-ptag"
        );
        softwareVersionParameterPtag.innerHTML = param;
        softwareVersionParameterDiv.appendChild(softwareVersionParameterPtag);
      });
      // create setting div
      const softwareVersionSettingDiv = document.createElement("div");
      softwareVersionSettingDiv.setAttribute(
        "class",
        "software-version-setting-div"
      );
      let ccuSwSettings;
      console.log(state.specialty);
      if (state.specialty.name === "Flexiscope") {
        ccuSwSettings = SIXTEENSETTINGS.FLEXISCOPE4013;
      } else if (state.specialty.name === "Cysto") {
        ccuSwSettings = SIXTEENSETTINGS.CYSTO4013;
      } else if (state.specialty.name === "Laser") {
        ccuSwSettings = SIXTEENSETTINGS.LASER4013;
      } else if (state.specialty.name === "Hystero") {
        ccuSwSettings = SIXTEENSETTINGS.HYSTERO4013;
      } else if (state.specialty.name === "Lap 1") {
        ccuSwSettings = SIXTEENSETTINGS.LAP14K4013;
      } else if (state.specialty.name === "Lap 2") {
        ccuSwSettings = SIXTEENSETTINGS.LAP24K4013;
      } else if (state.specialty.name === "Lap Storz") {
        ccuSwSettings = SIXTEENSETTINGS.LAPSTORZ4K4013;
      } else if (
        state.specialty.name === "Arthro 1" ||
        state.specialty.name === "Arthro 2"
      ) {
        ccuSwSettings = SIXTEENSETTINGS.ARTHRO4K4013;
      } else {
        ccuSwSettings = SIXTEENSETTINGS.ENT4K4013;
      }

      ccuSwSettings.map((setting) => {
        // create p-tag
        const softwareVersionSettingPtag = document.createElement("p");
        softwareVersionSettingPtag.setAttribute(
          "class",
          "software-version-setting-ptag"
        );
        softwareVersionSettingPtag.innerHTML = setting;
        softwareVersionSettingDiv.appendChild(softwareVersionSettingPtag);
      });
      softwareVersionSettingsIdDiv.appendChild(softwareVersionParameterDiv);
      softwareVersionSettingsIdDiv.appendChild(softwareVersionSettingDiv);
    }
  }

  // Applying Headers to DOM
  ccuSettingsTopDiv.appendChild(headerDiv); // Parameter Header
  ccuSettingsTopDiv.appendChild(headerDiv); // Settings Header

  // Display Settings Div
  let displayHeaderDiv = document.createElement("div");
  displayHeaderDiv.setAttribute("class", "container-display");

  // Apply params settings to DOM
  ccuSettingsTopDiv.appendChild(parentDiv);

  // Monitor settings
  // Main div
  let monitorSettingsTopDiv = document.getElementById("monitorSettingsTopDiv");
  // created Main Monitor Div
  let monitorMainDiv = document.createElement("div");
  monitorMainDiv.setAttribute("class", "monitor-main-div");
  monitorSettingsTopDiv.appendChild(monitorMainDiv);

  // Header Div
  let monitorHeaderDiv = document.createElement("div");
  let paramsHeaderDiv = document.createElement("div");
  let paramsTitle = document.createElement("h3");
  // Give h3 tags Text
  if (cameraDisplaySpecialty.display !== "FourK") {
    paramsTitle.appendChild(
      document.createTextNode(`${cameraDisplaySpecialty.display}`)
    );
  } else {
    paramsTitle.appendChild(document.createTextNode("4K"));
  }
  paramsTitle.appendChild(document.createTextNode(` ${state.specialty.name}`));

  // Set attributes
  monitorHeaderDiv.setAttribute("class", "monitor-header-div");
  paramsHeaderDiv.setAttribute("class", "monitor-title-div");

  let monitorTitleText = document.createElement("p");
  monitorTitleText.setAttribute("class", "monitor-title-text");
  monitorTitleText.innerHTML = "Money Settings";

  // Append DOM
  paramsHeaderDiv.appendChild(paramsTitle);
  paramsHeaderDiv.appendChild(monitorTitleText);

  monitorHeaderDiv.appendChild(paramsHeaderDiv);
  monitorMainDiv.appendChild(monitorHeaderDiv);

  // Monitor parameters
  let secondDiv = document.createElement("div");
  secondDiv.setAttribute("class", "settings-second-div");
  let monitorParams = document.createElement("div");
  monitorParams.setAttribute("class", "monitor-params");
  let monitorSettings = document.createElement("div");
  monitorSettings.setAttribute("class", "monitor-settings");

  // Loop through array
  let monitorSpecialtySettings =
    cameraDisplaySpecialty.display.replace(/\s/g, "").toUpperCase() +
    cameraDisplaySpecialty.specialty.replace(/\s/g, "").toUpperCase() +
    cameraDisplaySpecialty.camera.replace(/\s/g, "").toUpperCase();
  if (cameraDisplaySpecialty.display !== "FourK") {
    MONITORPARAMS.forEach(function (parameter) {
      let pTag = document.createElement("p");
      pTag.appendChild(document.createTextNode(parameter));
      monitorParams.appendChild(pTag);
    });
  } else {
    FOURKPARAMS.forEach(function (parameter) {
      let pTag = document.createElement("p");
      pTag.appendChild(document.createTextNode(parameter));
      monitorParams.appendChild(pTag);
    });
    for (let displaySpecialty in FOURKSETTINGS) {
      if (monitorSpecialtySettings === displaySpecialty) {
        FOURKSETTINGS[displaySpecialty].forEach(function (setting) {
          let sTag = document.createElement("p");
          sTag.appendChild(document.createTextNode(setting));
          monitorSettings.appendChild(sTag);
        });
      }
    }
  }

  for (let displaySpecialty in MONITORSETTINGS) {
    if (monitorSpecialtySettings === displaySpecialty) {
      MONITORSETTINGS[displaySpecialty].forEach(function (setting) {
        let sTag = document.createElement("p");
        sTag.appendChild(document.createTextNode(setting));
        monitorSettings.appendChild(sTag);
      });
    }
  }

  // Settings divs
  secondDiv.appendChild(monitorParams);
  secondDiv.appendChild(monitorSettings);
  monitorMainDiv.appendChild(secondDiv);
}
