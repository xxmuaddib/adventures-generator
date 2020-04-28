import ArrowDown from '../assets/images/arrow-down.png';

import ChemistryBg from '../assets/images/chemistry-bg.png';
import EmptyChemicalContainerMixBig from '../assets/images/empty-chemical-container-mix-big.png';
import Candle from '../assets/images/candle.png';
import CandleFired from '../assets/images/candle-fired.png';
import ChemicalContainers from '../assets/images/chemical-containers.png';
import ChemicalContainerSmall from '../assets/images/chemical-container-small.png';
import BloodContainer from '../assets/images/blood-container.png';
import WaterContainer from '../assets/images/blood-container.png';
import BloodContainerFull from '../assets/images/blood-container-full.png';
import WaterContainerFull from '../assets/images/water-container-full.png';
import WaterChemicalContainerSmall from '../assets/images/water-chemical-container-small.png';
import BloodChemicalContainerSmall from '../assets/images/blood-chemical-container-small.png';

export const CHEMISTRY_SCENE = {
  name: 'Chemistry',
  route: 'Chemistry',
  bg: ChemistryBg,
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
        type: 'nav',
        route: 'Level2-wall2',
        element: {
          type: 'trigger',
        },
        position: {
          x: 10,
          y: 185,
          width: 280,
          height: 15,
        },
      },
      {
        type: 'blank',
        element: {
          type: 'image',
          image: {
            src: ChemicalContainers,
          },
        },
        position: {
          x: 65,
          y: 11,
          width: 180,
          height: 130,
        },
      },
      {
        type: 'blank',
        element: {
          type: 'image',
          image: {
            src: EmptyChemicalContainerMixBig,
          },
        },
        position: {
          x: 85,
          y: 40,
          width: 25,
          height: 45,
        },
      },
      {
        type: 'receiver',
        id: 'candle',
        element: {
          type: 'image',
          image: {
            src: Candle,
          },
        },
        position: {
          x: 91,
          y: 95,
          width: 15,
          height: 15,
        },
        logical: {
          hideOnResolved: ['candle'],
          expectedValue: ['match'],
        },
      },
      {
        type: 'blank',
        id: 'candle',
        element: {
          type: 'image',
          image: {
            src: CandleFired,
          },
        },
        position: {
          x: 91,
          y: 90,
          width: 15,
          height: 20,
        },
        logical: {
          showOnResolved: ['candle'],
        },
      },
      {
        type: 'blank',
        element: {
          type: 'image',
          image: {
            src: ChemicalContainerSmall,
          },
        },
        position: {
          x: 139,
          y: 52,
          width: 8,
          height: 34,
        },
        logical: {
          hideOnResolved: ['blood-receiver'],
        },
      },
      {
        type: 'blank',
        element: {
          type: 'image',
          image: {
            src: BloodChemicalContainerSmall,
          },
        },
        position: {
          x: 139,
          y: 52,
          width: 8,
          height: 34,
        },
        logical: {
          showOnResolved: ['blood-receiver'],
        },
      },
      {
        type: 'blank',
        element: {
          type: 'image',
          image: {
            src: ChemicalContainerSmall,
          },
        },
        position: {
          x: 146,
          y: 52,
          width: 8,
          height: 34,
        },
      },

      {
        type: 'blank',
        element: {
          type: 'image',
          image: {
            src: ChemicalContainerSmall,
          },
        },
        position: {
          x: 143,
          y: 99,
          width: 8,
          height: 34,
        },
      },
      {
        type: 'receiver',
        id: 'blood-receiver',
        element: {
          type: 'image',
          image: {
            src: BloodContainer,
          },
        },
        position: {
          x: 178,
          y: 40,
          width: 21,
          height: 46,
        },
        logical: {
          expectedValue: ['blood'],
          hideOnResolved: ['blood-receiver'],
        },
      },
      {
        type: 'blank',
        element: {
          type: 'image',
          image: {
            src: BloodContainerFull,
          },
        },
        position: {
          x: 178,
          y: 40,
          width: 21,
          height: 46,
        },
        logical: {
          showOnResolved: ['blood-receiver'],
        },
      },
      {
        type: 'blank',
        element: {
          type: 'image',
          image: {
            src: WaterContainer,
          },
        },
        position: {
          x: 203,
          y: 35,
          width: 21,
          height: 58,
        },
      },
    ],
  },
};
