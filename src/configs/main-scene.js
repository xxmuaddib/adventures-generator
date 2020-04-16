import ArrowLeft from '../assets/images/arrow-left.png';
import ArrowRight from '../assets/images/arrow-right.png';
import ArrowUp from '../assets/images/arrow-up.png';
import ArrowDown from '../assets/images/arrow-down.png';

import Farm1Bg from '../assets/images/farm1-bg.png';

import Farm2Bg from '../assets/images/farm2-bg.png';

import Farm3Bg from '../assets/images/farm3-bg.png';

import Farm4Bg from '../assets/images/farm4-bg.png';

import CityBg from '../assets/images/city-bg.png';

import University1Bg from '../assets/images/university1-bg.png';

import University2Bg from '../assets/images/university2-bg.png';

import University3Bg from '../assets/images/university3-bg.png';

import University4 from '../assets/images/university4.png';

import VirusesBg from '../assets/images/viruses-bg.png';
import Virus1Front from '../assets/images/virus1-front.png';
import Virus2Front from '../assets/images/virus2-front.png';
import Virus3Front from '../assets/images/virus3-front.png';
import VirusesTableFront from '../assets/images/viruses-table-front.png';
import VirusesTableFrontPart1 from '../assets/images/viruses-table-front-part1.png';
import VirusesTableFrontPart2 from '../assets/images/viruses-table-front-part2.png';
import GumWithKey from '../assets/images/gum-with-key.png';
import Gum from '../assets/images/gum.png';
import GreenKey from '../assets/images/green-key.png';
import ImagePart2 from '../assets/images/image-part2.png';
import Virus2Image from '../assets/images/virus2-image.png';

import ImagePart4 from '../assets/images/image-part4.png';

import Wall2Bg from '../assets/images/wall2-bg.png';
import Wall2Window1 from '../assets/images/wall2-window1.png';
import Wall2Window2 from '../assets/images/wall2-window2.png';
import Wall2Window2Opened from '../assets/images/wall2-window2-opened.png';
import Wall2Foot from '../assets/images/wall2-foot.png';
import Wall2Picture1 from '../assets/images/wall2-picture1.png';
import Wall2Picture2 from '../assets/images/wall2-picture2.png';
import Wall2Picture3 from '../assets/images/wall2-picture3.png';
import Wall2Arm from '../assets/images/wall2-arm.png';
import ImagePart3 from '../assets/images/image-part3.png';

import Wall3Bg from '../assets/images/wall3-bg.png';
import Wall3Skeleton from '../assets/images/wall3-skeleton.png';
import Wall3Mirror from '../assets/images/wall3-mirror.png';
import Wall3Safe from '../assets/images/wall3-safe.png';
import Wall3SafeDoor1 from '../assets/images/wall3-safe-door1.png';
import Wall3SafeDoor2 from '../assets/images/wall3-safe-door2.png';
import Wall3SafeDoor1Opened from '../assets/images/wall3-safe-door1-opened.png';
import Wall3SafeDoor2Opened from '../assets/images/wall3-safe-door2-opened.png';
import Wall3Skull from '../assets/images/wall3-skull.png';
import ImagePart1 from '../assets/images/image-part1.png';
import Wall3Vase from '../assets/images/wall3-vase.png';

import MirrorSceneBackground from '../assets/images/mirror-scene-bg.png';
import MirrorSceneMirror from '../assets/images/mirror-scene-mirror.png';
import CrownPart1 from '../assets/images/crown-part1.png';
import CrownPart2 from '../assets/images/crown-part2.png';
import CrownPart3 from '../assets/images/crown-part3.png';
import CrownPart4 from '../assets/images/crown-part4.png';
import CrownPart5 from '../assets/images/crown-part5.png';

const SCENES = [
  {
    name: 'Farm1',
    route: 'Farm1',
    bg: Farm1Bg,
    objects: {
      itemsMap: [
        {
          type: 'nav',
          route: 'Farm2',
          element: {
            type: 'trigger',
          },
          position: {
            x: 0,
            y: 0,
            width: 400,
            height: 400,
          },
        },
      ],
    },
  },
  {
    name: 'Farm2',
    route: 'Farm2',
    bg: Farm2Bg,
    objects: {
      itemsMap: [
        {
          type: 'nav',
          route: 'Farm3',
          element: {
            type: 'trigger',
          },
          position: {
            x: 0,
            y: 0,
            width: 400,
            height: 400,
          },
        },
      ],
    },
  },
  {
    name: 'Farm3',
    route: 'Farm3',
    bg: Farm3Bg,
    objects: {
      itemsMap: [
        {
          type: 'nav',
          route: 'Farm4',
          element: {
            type: 'trigger',
          },
          position: {
            x: 0,
            y: 0,
            width: 400,
            height: 400,
          },
        },
      ],
    },
  },
  {
    name: 'Farm4',
    route: 'Farm4',
    bg: Farm4Bg,
    objects: {
      itemsMap: [
        {
          type: 'nav',
          route: 'City',
          element: {
            type: 'trigger',
          },
          position: {
            x: 0,
            y: 0,
            width: 400,
            height: 400,
          },
        },
      ],
    },
  },
  {
    name: 'City',
    route: 'City',
    bg: CityBg,
    objects: {
      itemsMap: [
        {
          type: 'nav',
          route: 'University1',
          element: {
            type: 'trigger',
          },
          position: {
            x: 0,
            y: 0,
            width: 400,
            height: 400,
          },
        },
      ],
    },
  },
  {
    name: 'University1',
    route: 'University1',
    bg: University1Bg,
    objects: {
      itemsMap: [
        {
          type: 'nav',
          route: 'University2',
          element: {
            type: 'trigger',
          },
          position: {
            x: 0,
            y: 0,
            width: 400,
            height: 400,
          },
        },
      ],
    },
  },
  {
    name: 'University2',
    route: 'University2',
    bg: University2Bg,
    objects: {
      itemsMap: [
        {
          type: 'nav',
          route: 'University3',
          element: {
            type: 'trigger',
          },
          position: {
            x: 0,
            y: 0,
            width: 400,
            height: 400,
          },
        },
      ],
    },
  },
  {
    name: 'University3',
    route: 'University3',
    bg: University3Bg,
    objects: {
      itemsMap: [
        {
          type: 'nav',
          route: 'University4',
          element: {
            type: 'trigger',
          },
          position: {
            x: 0,
            y: 0,
            width: 400,
            height: 400,
          },
        },
      ],
    },
  },
  {
    name: 'University4',
    route: 'University4',
    bg: University4,
    objects: {
      itemsMap: [
        {
          type: 'nav',
          route: 'Wall1',
          element: {
            type: 'trigger',
          },
          position: {
            x: 0,
            y: 0,
            width: 400,
            height: 400,
          },
        },
      ],
    },
  },
  {
    name: 'Wall2',
    route: 'Wall2',
    bg: Wall2Bg,
    objects: {
      itemsMap: [
        {
          type: 'blank',
          element: {
            type: 'image',
            image: {
              src: ArrowRight,
            },
          },
          position: {
            x: 284,
            y: 95,
            width: 10,
            height: 10,
          },
        },
        {
          type: 'blank',
          element: {
            type: 'image',
            image: {
              src: ArrowLeft,
            },
          },
          position: {
            x: 5,
            y: 95,
            width: 10,
            height: 10,
          },
        },
        {
          type: 'blank',
          element: {
            type: 'image',
            image: {
              src: ArrowUp,
            },
          },
          position: {
            x: 145,
            y: 3,
            width: 10,
            height: 10,
          },
        },
        {
          type: 'nav',
          route: 'Roof',
          element: {
            type: 'trigger',
          },
          position: {
            x: 35,
            y: 0,
            width: 232,
            height: 20,
          },
        },
        {
          type: 'nav',
          route: 'Wall1',
          element: {
            type: 'trigger',
          },
          position: {
            x: 0,
            y: 0,
            width: 35,
            height: 200,
          },
        },
        {
          type: 'nav',
          route: '',
          element: {
            type: 'image',
            image: {
              src: Wall2Window1,
            },
          },
          position: {
            x: 60,
            y: 30,
            width: 50,
            height: 100,
          },
        },
        {
          type: 'decorative',
          id: 'wandow2-closed',
          element: {
            type: 'image',
            image: {
              src: Wall2Window2,
            },
          },
          position: {
            x: 200,
            y: 30,
            width: 50,
            height: 100,
            zIndex: 4,
          },
          logical: {
            hideOnResolved: ['wandow2-closed'],
          },
        },
        {
          type: 'decorative',
          id: 'window2-opened',
          element: {
            type: 'image',
            image: {
              src: Wall2Window2Opened,
            },
          },
          position: {
            x: 190,
            y: 25,
            width: 70,
            height: 105,
            zIndex: 2,
          },
          logical: {
            showOnResolved: ['wandow2-closed'],
          },
        },
        {
          type: 'collectable',
          id: 'skeleton-foot',
          element: {
            type: 'image',
            image: {
              src: Wall2Foot,
            },
          },
          position: {
            x: 221,
            y: 35,
            width: 8,
            height: 90,
            zIndex: 3,
          },
          logical: {
            showOnResolved: ['decorative4'],
            countOfUse: 1,
          },
        },
        {
          type: 'nav',
          route: 'blank',
          element: {
            type: 'image',
            image: {
              src: Wall2Picture1,
            },
          },
          position: {
            x: 120,
            y: 20,
            width: 30,
            height: 30,
            zIndex: 1,
          },
        },
        {
          type: 'nav',
          route: '',
          element: {
            type: 'image',
            image: {
              src: Wall2Picture2,
            },
          },
          position: {
            x: 170,
            y: 30,
            width: 25,
            height: 30,
            zIndex: 1,
          },
        },
        {
          type: 'collectable',
          id: 'skeleton-arm',
          element: {
            type: 'image',
            image: {
              src: Wall2Arm,
            },
          },
          position: {
            x: 128,
            y: 35,
            width: 5,
            height: 40,
            zIndex: 3,
          },
          logical: {
            countOfUse: 1,
          },
        },
        {
          type: 'nav',
          route: '',
          element: {
            type: 'image',
            image: {
              src: Wall2Picture3,
            },
          },
          position: {
            x: 125,
            y: 70,
            width: 30,
            height: 25,
            zIndex: 2,
          },
        },
        {
          type: 'collectable',
          id: 'collectable7',
          element: {
            type: 'image',
            image: {
              src: ImagePart3,
            },
          },
          position: {
            x: 129,
            y: 76,
            width: 5,
            height: 8,
            zIndex: 1,
          },
          logical: {
            countOfUse: 1,
          },
        },
        {
          type: 'nav',
          route: 'Wall3',
          element: {
            type: 'trigger',
          },
          position: {
            x: 265,
            y: 0,
            width: 35,
            height: 200,
          },
        },
      ],
    },
  },
  {
    name: 'Wall3',
    route: 'Wall3',
    bg: Wall3Bg,
    objects: {
      itemsMap: [
        {
          type: 'blank',
          element: {
            type: 'image',
            image: {
              src: ArrowRight,
            },
          },
          position: {
            x: 284,
            y: 95,
            width: 10,
            height: 10,
          },
        },
        {
          type: 'blank',
          element: {
            type: 'image',
            image: {
              src: ArrowLeft,
            },
          },
          position: {
            x: 5,
            y: 95,
            width: 10,
            height: 10,
          },
        },
        {
          type: 'blank',
          element: {
            type: 'image',
            image: {
              src: ArrowUp,
            },
          },
          position: {
            x: 145,
            y: 3,
            width: 10,
            height: 10,
          },
        },
        {
          type: 'nav',
          route: 'Roof',
          element: {
            type: 'trigger',
          },
          position: {
            x: 35,
            y: 0,
            width: 232,
            height: 20,
          },
        },
        {
          type: 'nav',
          route: 'Wall2',
          element: {
            type: 'trigger',
          },
          position: {
            x: 0,
            y: 0,
            width: 35,
            height: 200,
          },
        },
        {
          type: 'blank',
          element: {
            type: 'image',
            image: {
              src: Wall3Vase,
            },
          },
          position: {
            x: 68,
            y: 5,
            width: 13,
            height: 40,
            zIndex: 4,
          },
        },
        {
          type: 'nav',
          route: '',
          element: {
            type: 'image',
            image: {
              src: Wall3Safe,
            },
          },
          position: {
            x: 50,
            y: 40,
            width: 50,
            height: 130,
          },
        },
        {
          type: 'receiver',
          id: 'safe-door',
          element: {
            type: 'image',
            image: {
              src: Wall3SafeDoor1,
            },
          },
          position: {
            x: 55,
            y: 50,
            width: 40,
            height: 55,
            zIndex: 3,
          },
          logical: {
            expectedValue: ['safe-green-key'],
            hideOnResolved: ['safe-door'],
          },
        },
        {
          type: 'collectable',
          id: 'skeleton-skull',
          element: {
            type: 'image',
            image: {
              src: Wall3Skull,
            },
          },
          position: {
            x: 68,
            y: 63,
            width: 15,
            height: 25,
            zIndex: 2,
          },
          logical: {
            countOfUse: 1,
          },
        },
        {
          type: 'decorative',
          id: 'safe-door2',
          element: {
            type: 'image',
            image: {
              src: Wall3SafeDoor2,
            },
          },
          position: {
            x: 55,
            y: 110,
            width: 40,
            height: 55,
            zIndex: 3,
          },
          logical: {
            hideOnResolved: ['safe-door2'],
          },
        },
        {
          type: 'blank',
          id: 'blank1',
          element: {
            type: 'image',
            image: {
              src: Wall3SafeDoor1Opened,
            },
          },
          position: {
            x: 55,
            y: 50,
            width: 40,
            height: 55,
            zIndex: 1,
          },
        },
        {
          type: 'blank',
          id: 'blank1',
          element: {
            type: 'image',
            image: {
              src: Wall3SafeDoor2Opened,
            },
          },
          position: {
            x: 55,
            y: 110,
            width: 40,
            height: 55,
            zIndex: 1,
          },
        },
        {
          type: 'collectable',
          id: 'collectable4',
          element: {
            type: 'image',
            image: {
              src: ImagePart1,
            },
          },
          position: {
            x: 60,
            y: 135,
            width: 22,
            height: 18,
            zIndex: 1,
          },
          logical: {
            countOfUse: 1,
          },
        },
        {
          type: 'nav',
          route: 'Mirror',
          element: {
            type: 'image',
            image: {
              src: Wall3Mirror,
            },
          },
          position: {
            x: 130,
            y: 40,
            width: 40,
            height: 60,
          },
        },
        {
          type: 'collectable',
          id: 'collectable9',
          element: {
            type: 'image',
            image: {
              src: ImagePart4,
            },
          },
          position: {
            x: 162,
            y: 37,
            width: 10,
            height: 10,
          },
          logical: {
            countOfUse: 1,
          },
        },
        {
          type: 'nav',
          element: {
            type: 'image',
            image: {
              src: Wall3Skeleton,
            },
          },
          position: {
            x: 200,
            y: 50,
            width: 35,
            height: 130,
          },
        },
        {
          type: 'nav',
          route: 'Wall4',
          element: {
            type: 'trigger',
          },
          position: {
            x: 265,
            y: 0,
            width: 35,
            height: 200,
          },
        },
      ],
    },
  },
  {
    name: 'Mirror',
    route: 'Mirror',
    bg: MirrorSceneBackground,
    objects: {
      itemsMap: [
        {
          type: 'blank',
          element: {
            type: 'image',
            image: {
              src: MirrorSceneMirror,
            },
          },
          position: {
            x: 90,
            y: 15,
            width: 120,
            height: 170,
          },
        },
        {
          type: 'blank',
          element: {
            type: 'image',
            image: {
              src: CrownPart1,
            },
          },
          position: {
            x: 120,
            y: 58,
            width: 15,
            height: 15,
          },
        },
        {
          type: 'blank',
          element: {
            type: 'image',
            image: {
              src: CrownPart2,
            },
          },
          position: {
            x: 130,
            y: 52,
            width: 16,
            height: 16,
            zIndex: 2,
          },
        },
        {
          type: 'blank',
          element: {
            type: 'image',
            image: {
              src: CrownPart3,
            },
          },
          position: {
            x: 144,
            y: 46,
            width: 18,
            height: 18,
          },
        },
        {
          type: 'blank',
          element: {
            type: 'image',
            image: {
              src: CrownPart4,
            },
          },
          position: {
            x: 160,
            y: 54,
            width: 17,
            height: 17,
          },
        },
        {
          type: 'blank',
          element: {
            type: 'image',
            image: {
              src: CrownPart5,
            },
          },
          position: {
            x: 171,
            y: 60,
            width: 15,
            height: 15,
          },
        },
        {
          type: 'blank',
          element: {
            type: 'image',
            image: {
              src: ArrowDown,
            },
          },
          position: {
            x: 145,
            y: 188,
            width: 10,
            height: 10,
          },
        },
        {
          type: 'nav',
          route: 'Wall3',
          element: {
            type: 'trigger',
          },
          position: {
            x: 0,
            y: 185,
            height: 15,
            width: 300,
          },
        },
      ],
    },
  },
  {
    name: 'Virus1',
    route: 'Virus1',
    bg: VirusesBg,
    objects: {
      itemsMap: [
        {
          type: 'blank',
          element: {
            type: 'image',
            image: {
              src: ArrowDown,
            },
          },
          position: {
            x: 145,
            y: 188,
            width: 10,
            height: 10,
          },
        },
        {
          type: 'dialog',
          id: 'virus1-dialog',
          element: {
            type: 'image',
            image: {
              src: Virus1Front,
            },
          },
          position: {
            x: 100,
            y: 5,
            width: 100,
            height: 150,
            zIndex: 1,
          },
          logical: {
            dialogProperties: {
              character: {
                translations: {
                  en: 'Ill kill your time',
                },
              },
            },
          },
        },
        {
          type: 'blank',
          element: {
            type: 'image',
            image: {
              src: VirusesTableFront,
            },
          },
          position: {
            x: 80,
            y: 80,
            width: 150,
            height: 100,
            zIndex: 1,
          },
        },
        {
          type: 'blank',
          element: {
            type: 'image',
            image: {
              src: VirusesTableFrontPart1,
            },
          },
          position: {
            x: 80,
            y: 135,
            width: 148,
            height: 30,
            zIndex: 3,
          },
        },
        {
          type: 'blank',
          element: {
            type: 'image',
            image: {
              src: VirusesTableFrontPart2,
            },
          },
          position: {
            x: 80,
            y: 155,
            width: 15,
            height: 30,
            zIndex: 3,
          },
        },
        {
          type: 'blank',
          element: {
            type: 'image',
            image: {
              src: VirusesTableFrontPart2,
            },
          },
          position: {
            x: 213,
            y: 155,
            width: 15,
            height: 30,
            zIndex: 3,
          },
        },
        {
          type: 'nav',
          route: 'Wall1',
          element: {
            type: 'trigger',
          },
          position: {
            x: 0,
            y: 185,
            height: 15,
            width: 300,
          },
        },
      ],
    },
  },
  {
    name: 'Virus2',
    route: 'Virus2',
    bg: VirusesBg,
    objects: {
      itemsMap: [
        {
          type: 'blank',
          element: {
            type: 'image',
            image: {
              src: ArrowDown,
            },
          },
          position: {
            x: 145,
            y: 188,
            width: 10,
            height: 10,
          },
        },
        {
          type: 'dialog',
          id: 'virus2-dialog',
          element: {
            type: 'image',
            image: {
              src: Virus2Front,
            },
          },
          position: {
            x: 100,
            y: 5,
            width: 100,
            height: 150,
            zIndex: 1,
          },
          logical: {
            dialogProperties: {
              character: {
                translations: {
                  en: 'Ill kill your time',
                },
              },
            },
          },
        },
        {
          type: 'blank',
          element: {
            type: 'image',
            image: {
              src: VirusesTableFront,
            },
          },
          position: {
            x: 80,
            y: 80,
            width: 150,
            height: 100,
            zIndex: 1,
          },
        },
        {
          type: 'collectable',
          id: 'collectable10',
          element: {
            type: 'image',
            image: {
              src: Virus2Image,
            },
          },
          position: {
            x: 95,
            y: 92,
            width: 38,
            height: 38,
            zIndex: 3,
          },
        },
        {
          type: 'blank',
          element: {
            type: 'image',
            image: {
              src: VirusesTableFrontPart1,
            },
          },
          position: {
            x: 80,
            y: 135,
            width: 148,
            height: 30,
            zIndex: 2,
          },
        },
        {
          type: 'blank',
          element: {
            type: 'image',
            image: {
              src: VirusesTableFrontPart2,
            },
          },
          position: {
            x: 80,
            y: 155,
            width: 15,
            height: 30,
            zIndex: 2,
          },
        },
        {
          type: 'blank',
          element: {
            type: 'image',
            image: {
              src: VirusesTableFrontPart2,
            },
          },
          position: {
            x: 213,
            y: 155,
            width: 15,
            height: 30,
            zIndex: 3,
          },
        },
        {
          type: 'nav',
          route: 'Wall1',
          element: {
            type: 'trigger',
          },
          position: {
            x: 0,
            y: 185,
            height: 15,
            width: 300,
          },
        },
      ],
    },
  },
  {
    name: 'Virus3',
    route: 'Virus3',
    bg: VirusesBg,
    objects: {
      itemsMap: [
        {
          type: 'blank',
          element: {
            type: 'image',
            image: {
              src: ArrowDown,
            },
          },
          position: {
            x: 145,
            y: 188,
            width: 10,
            height: 10,
          },
        },
        {
          type: 'dialog',
          id: 'virus3-dialog',
          element: {
            type: 'image',
            image: {
              src: Virus3Front,
            },
          },
          position: {
            x: 100,
            y: 5,
            width: 100,
            height: 150,
            zIndex: 1,
          },
          logical: {
            dialogProperties: {
              character: {
                translations: {
                  en: 'Ill kill your time',
                },
              },
            },
          },
        },
        {
          type: 'collectable',
          id: 'collectable3',
          element: {
            type: 'image',
            image: {
              src: ImagePart2,
            },
          },
          position: {
            x: 200,
            y: 110,
            width: 15,
            height: 15,
            zIndex: 4,
          },
          logical: {
            countOfUse: 1,
          },
        },
        {
          type: 'blank',
          element: {
            type: 'image',
            image: {
              src: VirusesTableFront,
            },
          },
          position: {
            x: 80,
            y: 80,
            width: 150,
            height: 100,
            zIndex: 1,
          },
        },
        {
          type: 'blank',
          element: {
            type: 'image',
            image: {
              src: VirusesTableFrontPart1,
            },
          },
          position: {
            x: 80,
            y: 135,
            width: 148,
            height: 30,
            zIndex: 3,
          },
        },
        {
          type: 'blank',
          element: {
            type: 'image',
            image: {
              src: VirusesTableFrontPart2,
            },
          },
          position: {
            x: 80,
            y: 155,
            width: 15,
            height: 30,
            zIndex: 3,
          },
        },
        {
          type: 'blank',
          element: {
            type: 'image',
            image: {
              src: VirusesTableFrontPart2,
            },
          },
          position: {
            x: 213,
            y: 155,
            width: 15,
            height: 30,
            zIndex: 3,
          },
        },
        {
          type: 'nav',
          route: 'Wall1',
          element: {
            type: 'trigger',
          },
          position: {
            x: 0,
            y: 185,
            height: 15,
            width: 300,
          },
        },
        {
          type: 'decorative',
          id: 'gum-width-key',
          element: {
            type: 'image',
            image: {
              src: GumWithKey,
            },
          },
          position: {
            x: 90,
            y: 155,
            width: 20,
            height: 20,
            zIndex: 2,
          },
          logical: {
            hideOnResolved: ['gum-width-key'],
          },
        },
        {
          type: 'collectable',
          id: 'safe-green-key',
          element: {
            type: 'image',
            image: {
              src: GreenKey,
            },
          },
          position: {
            x: 90,
            y: 160,
            width: 30,
            height: 20,
            zIndex: 2,
          },
          logical: {
            showOnResolved: ['gum-width-key'],
            countOfUse: 1,
          },
        },
        {
          type: 'decorative',
          id: 'pink-gum',
          element: {
            type: 'image',
            image: {
              src: Gum,
            },
          },
          position: {
            x: 90,
            y: 180,
            width: 20,
            height: 20,
          },
          logical: {
            showOnResolved: ['gum-width-key'],
          },
        },
      ],
    },
  },
];

const INITIAL_SCREEN = 'Wall1';

export { SCENES, INITIAL_SCREEN };
