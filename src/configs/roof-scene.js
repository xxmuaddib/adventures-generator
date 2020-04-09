import ArrowLeft from '../assets/images/arrow-left.png';
import ArrowRight from '../assets/images/arrow-right.png';
import ArrowUp from '../assets/images/arrow-up.png';
import ArrowDown from '../assets/images/arrow-down.png';

import Roof from '../assets/images/roof.png';
import MoleculeWhite from '../assets/images/molecule-white.png';
import MoleculeOrange from '../assets/images/molecule-orange.png';
import MoleculeBlue from '../assets/images/molecule-blue.png';
import MoleculeBlack from '../assets/images/molecule-black.png';
import MoleculeLines from '../assets/images/molecule-lines.png';
import MoleculeLinesFull from '../assets/images/molecule-lines-full.png';
import MoleculesFull from '../assets/images/molecules-full.png';
import Molecule1_1 from '../assets/images/molecule1-1.png';
import Molecule1_2 from '../assets/images/molecule1-2.png';
import Molecule1_3 from '../assets/images/molecule1-3.png';
import Molecule1_4 from '../assets/images/molecule1-4.png';
import Molecule2_1 from '../assets/images/molecule2-1.png';
import Molecule2_2 from '../assets/images/molecule2-2.png';
import Molecule2_3 from '../assets/images/molecule2-3.png';
import Molecule2_4 from '../assets/images/molecule2-4.png';
import Molecule3_1 from '../assets/images/molecule3-1.png';
import Molecule3_2 from '../assets/images/molecule3-2.png';
import Molecule3_3 from '../assets/images/molecule3-3.png';
import Molecule3_4 from '../assets/images/molecule3-4.png';
import Molecule4_1 from '../assets/images/molecule4-1.png';
import Molecule4_2 from '../assets/images/molecule4-2.png';
import Molecule4_3 from '../assets/images/molecule4-3.png';
import Molecule4_4 from '../assets/images/molecule4-4.png';
import Molecule5_1 from '../assets/images/molecule5-1.png';
import Molecule5_2 from '../assets/images/molecule5-2.png';
import Molecule5_3 from '../assets/images/molecule5-3.png';
import Molecule5_4 from '../assets/images/molecule5-4.png';
import Molecule6_1 from '../assets/images/molecule6-1.png';
import Molecule6_2 from '../assets/images/molecule6-2.png';
import Molecule6_3 from '../assets/images/molecule6-3.png';
import Molecule6_4 from '../assets/images/molecule6-4.png';
import Molecule7_1 from '../assets/images/molecule7-1.png';
import Molecule7_2 from '../assets/images/molecule7-2.png';
import Molecule7_3 from '../assets/images/molecule7-3.png';
import Molecule7_4 from '../assets/images/molecule7-4.png';
import Molecule8_1 from '../assets/images/molecule8-1.png';
import Molecule8_2 from '../assets/images/molecule8-2.png';
import Molecule8_3 from '../assets/images/molecule8-3.png';
import Molecule8_4 from '../assets/images/molecule8-4.png';

export const ROOF_SCENE = {
  name: 'Roof',
  route: 'Roof',
  bg: Roof,
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
          y: 2,
          width: 10,
          height: 10,
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
        route: 'Wall2',
        element: {
          type: 'trigger',
        },
        position: {
          x: 0,
          y: 0,
          width: 30,
          height: 200,
        },
      },
      {
        type: 'decorative',
        element: {
          type: 'image',
          image: {
            src: MoleculeLines,
          },
        },
        position: {
          x: 55,
          y: 45,
          width: 180,
          height: 120,
        },
        logical: {
          hideOnResolved: ['slot1'],
        },
      },
      {
        type: 'slot',
        id: 'slot1_1',
        group: 'slot1',
        main: true,
        element: {
          type: 'image',
          image: {
            src: Molecule1_1,
          },
        },
        position: {
          x: 74,
          y: 46,
          width: 39,
          height: 39,
          zIndex: 2,
        },
        logical: {
          scenario: {
            slot1_1: 4,
            slot1_2: 3,
            slot1_3: 4,
            slot1_4: 3,
            slot1_5: 2,
            slot1_6: 1,
            slot1_7: 2,
            slot1_8: 3,
          },
          selected: 1,
          hideOnResolved: ['slot1'],
          options: [
            {
              id: 1,
              element: {
                type: 'image',
                image: {
                  src: Molecule1_1,
                },
              },
            },
            {
              id: 2,
              element: {
                type: 'image',
                image: {
                  src: Molecule1_2,
                },
              },
            },
            {
              id: 3,
              element: {
                type: 'image',
                image: {
                  src: Molecule1_3,
                },
              },
            },
            {
              id: 4,
              element: {
                type: 'image',
                image: {
                  src: Molecule1_4,
                },
              },
            },
          ],
        },
      },
      {
        type: 'slot',
        group: 'slot1',
        id: 'slot1_2',
        element: {
          type: 'image',
          image: {
            src: Molecule2_1,
          },
        },
        position: {
          x: 160,
          y: 55,
          width: 39,
          height: 39,
          zIndex: 2,
        },
        logical: {
          hideOnResolved: ['slot1'],
          selected: 1,
          options: [
            {
              id: 1,
              element: {
                type: 'image',
                image: {
                  src: Molecule2_1,
                },
              },
            },
            {
              id: 2,
              element: {
                type: 'image',
                image: {
                  src: Molecule2_2,
                },
              },
            },
            {
              id: 3,
              element: {
                type: 'image',
                image: {
                  src: Molecule2_4,
                },
              },
            },
            {
              id: 4,
              element: {
                type: 'image',
                image: {
                  src: Molecule2_3,
                },
              },
            },
          ],
        },
      },
      {
        type: 'slot',
        group: 'slot1',
        id: 'slot1_3',
        element: {
          type: 'image',
          image: {
            src: Molecule3_1,
          },
        },
        position: {
          x: 194,
          y: 56,
          width: 39,
          height: 39,
          zIndex: 2,
        },
        logical: {
          hideOnResolved: ['slot1'],
          selected: 1,
          options: [
            {
              id: 1,
              element: {
                type: 'image',
                image: {
                  src: Molecule3_1,
                },
              },
            },
            {
              id: 2,
              element: {
                type: 'image',
                image: {
                  src: Molecule3_2,
                },
              },
            },
            {
              id: 3,
              element: {
                type: 'image',
                image: {
                  src: Molecule3_3,
                },
              },
            },
            {
              id: 4,
              element: {
                type: 'image',
                image: {
                  src: Molecule3_4,
                },
              },
            },
          ],
        },
      },
      {
        type: 'slot',
        group: 'slot1',
        id: 'slot1_4',
        element: {
          type: 'image',
          image: {
            src: Molecule4_1,
          },
        },
        position: {
          x: 143,
          y: 68,
          width: 37,
          height: 38,
          zIndex: 2,
        },
        logical: {
          hideOnResolved: ['slot1'],
          selected: 1,
          options: [
            {
              id: 1,
              element: {
                type: 'image',
                image: {
                  src: Molecule4_1,
                },
              },
            },
            {
              id: 2,
              element: {
                type: 'image',
                image: {
                  src: Molecule4_2,
                },
              },
            },
            {
              id: 3,
              element: {
                type: 'image',
                image: {
                  src: Molecule4_4,
                },
              },
            },
            {
              id: 4,
              element: {
                type: 'image',
                image: {
                  src: Molecule4_3,
                },
              },
            },
          ],
        },
      },
      {
        type: 'slot',
        group: 'slot1',
        id: 'slot1_5',
        element: {
          type: 'image',
          image: {
            src: Molecule5_1,
          },
        },
        position: {
          x: 91,
          y: 77,
          width: 39,
          height: 41,
          zIndex: 2,
        },
        logical: {
          hideOnResolved: ['slot1'],
          selected: 1,
          options: [
            {
              id: 1,
              element: {
                type: 'image',
                image: {
                  src: Molecule5_1,
                },
              },
            },
            {
              id: 2,
              element: {
                type: 'image',
                image: {
                  src: Molecule5_4,
                },
              },
            },
            {
              id: 3,
              element: {
                type: 'image',
                image: {
                  src: Molecule5_3,
                },
              },
            },
            {
              id: 4,
              element: {
                type: 'image',
                image: {
                  src: Molecule5_2,
                },
              },
            },
          ],
        },
      },
      {
        type: 'slot',
        group: 'slot1',
        id: 'slot1_6',
        element: {
          type: 'image',
          image: {
            src: Molecule6_4,
          },
        },
        position: {
          x: 160,
          y: 104,
          width: 38,
          height: 40,
          zIndex: 2,
        },
        logical: {
          hideOnResolved: ['slot1'],
          selected: 1,
          options: [
            {
              id: 1,
              element: {
                type: 'image',
                image: {
                  src: Molecule6_4,
                },
              },
            },
            {
              id: 2,
              element: {
                type: 'image',
                image: {
                  src: Molecule6_2,
                },
              },
            },
            {
              id: 3,
              element: {
                type: 'image',
                image: {
                  src: Molecule6_3,
                },
              },
            },
            {
              id: 4,
              element: {
                type: 'image',
                image: {
                  src: Molecule6_1,
                },
              },
            },
          ],
        },
      },
      {
        type: 'slot',
        group: 'slot1',
        id: 'slot1_7',
        element: {
          type: 'image',
          image: {
            src: Molecule7_1,
          },
        },
        position: {
          x: 74,
          y: 112,
          width: 39,
          height: 42,
          zIndex: 2,
        },
        logical: {
          hideOnResolved: ['slot1'],
          selected: 1,
          options: [
            {
              id: 1,
              element: {
                type: 'image',
                image: {
                  src: Molecule7_1,
                },
              },
            },
            {
              id: 2,
              element: {
                type: 'image',
                image: {
                  src: Molecule7_4,
                },
              },
            },
            {
              id: 3,
              element: {
                type: 'image',
                image: {
                  src: Molecule7_3,
                },
              },
            },
            {
              id: 4,
              element: {
                type: 'image',
                image: {
                  src: Molecule7_2,
                },
              },
            },
          ],
        },
      },
      {
        type: 'slot',
        group: 'slot1',
        id: 'slot1_8',
        element: {
          type: 'image',
          image: {
            src: Molecule8_3,
          },
        },
        position: {
          x: 177,
          y: 110,
          width: 39,
          height: 47,
          zIndex: 2,
        },
        logical: {
          hideOnResolved: ['slot1'],
          selected: 1,
          options: [
            {
              id: 1,
              element: {
                type: 'image',
                image: {
                  src: Molecule8_3,
                },
              },
            },
            {
              id: 2,
              element: {
                type: 'image',
                image: {
                  src: Molecule8_2,
                },
              },
            },
            {
              id: 3,
              element: {
                type: 'image',
                image: {
                  src: Molecule8_1,
                },
              },
            },
            {
              id: 4,
              element: {
                type: 'image',
                image: {
                  src: Molecule8_4,
                },
              },
            },
          ],
        },
      },
      {
        type: 'decorative',
        element: {
          type: 'image',
          image: {
            src: MoleculeLinesFull,
          },
        },
        position: {
          x: 55,
          y: 45,
          width: 180,
          height: 120,
        },
        logical: {
          hideOnResolved: ['slot2'],
          showOnResolved: ['slot1'],
        },
      },

      {
        type: 'slot',
        id: 'slot2_1',
        group: 'slot2',
        main: true,
        element: {
          type: 'image',
          image: {
            src: MoleculeBlack,
          },
        },
        position: {
          x: 71,
          y: 46,
          width: 11,
          height: 11,
          zIndex: 2,
        },
        logical: {
          scenario: {
            slot2_1: 1,
            slot2_2: 4,
            slot2_3: 1,
            slot2_4: 3,
            slot2_5: 2,
            slot2_6: 2,
            slot2_7: 4,
            slot2_8: 3,
            slot2_9: 4,
            slot2_10: 4,
            slot2_11: 4,
            slot2_12: 3,
            slot2_13: 4,
            slot2_14: 3,
            slot2_15: 3,
            slot2_16: 1,
            slot2_17: 2,
            slot2_18: 2,
            slot2_19: 1,
            slot2_20: 4,
            slot2_21: 1,
            slot2_22: 2,
            slot2_23: 4,
            slot2_24: 2,
            slot2_25: 3,
            slot2_26: 4,
            slot2_27: 3,
            slot2_28: 4,
            slot2_29: 1,
            slot2_30: 1,
            slot2_31: 4,
            slot2_32: 3,
            slot2_33: 1,
            slot2_34: 4,
            slot2_35: 2,
          },
          hideOnResolved: ['slot2'],
          showOnResolved: ['slot1'],
          selected: 1,
          options: [
            {
              id: 1,
              element: {
                type: 'image',
                image: {
                  src: MoleculeBlack,
                },
              },
            },
            {
              id: 2,
              element: {
                type: 'image',
                image: {
                  src: MoleculeBlue,
                },
              },
            },
            {
              id: 3,
              element: {
                type: 'image',
                image: {
                  src: MoleculeOrange,
                },
              },
            },
            {
              id: 4,
              element: {
                type: 'image',
                image: {
                  src: MoleculeWhite,
                },
              },
            },
          ],
        },
      },
      {
        type: 'slot',
        id: 'slot2_2',
        group: 'slot2',
        element: {
          type: 'image',
          image: {
            src: MoleculeBlack,
          },
        },
        position: {
          x: 105,
          y: 46,
          width: 11,
          height: 11,
          zIndex: 2,
        },
        logical: {
          showOnResolved: ['slot1'],
          hideOnResolved: ['slot2'],
          selected: 1,
          options: [
            {
              id: 1,
              element: {
                type: 'image',
                image: {
                  src: MoleculeBlack,
                },
              },
            },
            {
              id: 2,
              element: {
                type: 'image',
                image: {
                  src: MoleculeBlue,
                },
              },
            },
            {
              id: 3,
              element: {
                type: 'image',
                image: {
                  src: MoleculeOrange,
                },
              },
            },
            {
              id: 4,
              element: {
                type: 'image',
                image: {
                  src: MoleculeWhite,
                },
              },
            },
          ],
        },
      },
      {
        type: 'slot',
        id: 'slot2_3',
        group: 'slot2',
        element: {
          type: 'image',
          image: {
            src: MoleculeBlack,
          },
        },
        position: {
          x: 140,
          y: 46,
          width: 11,
          height: 11,
          zIndex: 2,
        },
        logical: {
          hideOnResolved: ['slot2'],
          showOnResolved: ['slot1'],
          selected: 1,
          options: [
            {
              id: 1,
              element: {
                type: 'image',
                image: {
                  src: MoleculeBlack,
                },
              },
            },
            {
              id: 2,
              element: {
                type: 'image',
                image: {
                  src: MoleculeBlue,
                },
              },
            },
            {
              id: 3,
              element: {
                type: 'image',
                image: {
                  src: MoleculeOrange,
                },
              },
            },
            {
              id: 4,
              element: {
                type: 'image',
                image: {
                  src: MoleculeWhite,
                },
              },
            },
          ],
        },
      },
      {
        type: 'slot',
        id: 'slot2_4',
        group: 'slot2',
        element: {
          type: 'image',
          image: {
            src: MoleculeBlack,
          },
        },
        position: {
          x: 174,
          y: 46,
          width: 11,
          height: 11,
          zIndex: 2,
        },
        logical: {
          hideOnResolved: ['slot2'],
          showOnResolved: ['slot1'],
          selected: 1,
          options: [
            {
              id: 1,
              element: {
                type: 'image',
                image: {
                  src: MoleculeBlack,
                },
              },
            },
            {
              id: 2,
              element: {
                type: 'image',
                image: {
                  src: MoleculeBlue,
                },
              },
            },
            {
              id: 3,
              element: {
                type: 'image',
                image: {
                  src: MoleculeOrange,
                },
              },
            },
            {
              id: 4,
              element: {
                type: 'image',
                image: {
                  src: MoleculeWhite,
                },
              },
            },
          ],
        },
      },
      {
        type: 'slot',
        id: 'slot2_5',
        group: 'slot2',
        element: {
          type: 'image',
          image: {
            src: MoleculeBlack,
          },
        },
        position: {
          x: 88,
          y: 60,
          width: 11,
          height: 11,
          zIndex: 2,
        },
        logical: {
          showOnResolved: ['slot1'],
          hideOnResolved: ['slot2'],
          selected: 1,
          options: [
            {
              id: 1,
              element: {
                type: 'image',
                image: {
                  src: MoleculeBlack,
                },
              },
            },
            {
              id: 2,
              element: {
                type: 'image',
                image: {
                  src: MoleculeBlue,
                },
              },
            },
            {
              id: 3,
              element: {
                type: 'image',
                image: {
                  src: MoleculeOrange,
                },
              },
            },
            {
              id: 4,
              element: {
                type: 'image',
                image: {
                  src: MoleculeWhite,
                },
              },
            },
          ],
        },
      },
      {
        type: 'slot',
        id: 'slot2_6',
        group: 'slot2',
        element: {
          type: 'image',
          image: {
            src: MoleculeBlack,
          },
        },
        position: {
          x: 156,
          y: 60,
          width: 11,
          height: 11,
          zIndex: 2,
        },
        logical: {
          hideOnResolved: ['slot2'],
          showOnResolved: ['slot1'],
          selected: 1,
          options: [
            {
              id: 1,
              element: {
                type: 'image',
                image: {
                  src: MoleculeBlack,
                },
              },
            },
            {
              id: 2,
              element: {
                type: 'image',
                image: {
                  src: MoleculeBlue,
                },
              },
            },
            {
              id: 3,
              element: {
                type: 'image',
                image: {
                  src: MoleculeOrange,
                },
              },
            },
            {
              id: 4,
              element: {
                type: 'image',
                image: {
                  src: MoleculeWhite,
                },
              },
            },
          ],
        },
      },
      {
        type: 'slot',
        id: 'slot2_7',
        group: 'slot2',
        element: {
          type: 'image',
          image: {
            src: MoleculeBlack,
          },
        },
        position: {
          x: 224,
          y: 60,
          width: 11,
          height: 11,
          zIndex: 2,
        },
        logical: {
          hideOnResolved: ['slot2'],
          showOnResolved: ['slot1'],
          selected: 1,
          options: [
            {
              id: 1,
              element: {
                type: 'image',
                image: {
                  src: MoleculeBlack,
                },
              },
            },
            {
              id: 2,
              element: {
                type: 'image',
                image: {
                  src: MoleculeBlue,
                },
              },
            },
            {
              id: 3,
              element: {
                type: 'image',
                image: {
                  src: MoleculeOrange,
                },
              },
            },
            {
              id: 4,
              element: {
                type: 'image',
                image: {
                  src: MoleculeWhite,
                },
              },
            },
          ],
        },
      },
      {
        type: 'slot',
        id: 'slot2_8',
        group: 'slot2',
        element: {
          type: 'image',
          image: {
            src: MoleculeBlack,
          },
        },
        position: {
          x: 71,
          y: 69,
          width: 11,
          height: 11,
          zIndex: 2,
        },
        logical: {
          hideOnResolved: ['slot2'],
          showOnResolved: ['slot1'],
          selected: 1,
          options: [
            {
              id: 1,
              element: {
                type: 'image',
                image: {
                  src: MoleculeBlack,
                },
              },
            },
            {
              id: 2,
              element: {
                type: 'image',
                image: {
                  src: MoleculeBlue,
                },
              },
            },
            {
              id: 3,
              element: {
                type: 'image',
                image: {
                  src: MoleculeOrange,
                },
              },
            },
            {
              id: 4,
              element: {
                type: 'image',
                image: {
                  src: MoleculeWhite,
                },
              },
            },
          ],
        },
      },
      {
        type: 'slot',
        id: 'slot2_9',
        group: 'slot2',
        element: {
          type: 'image',
          image: {
            src: MoleculeBlack,
          },
        },
        position: {
          x: 106,
          y: 69,
          width: 11,
          height: 11,
          zIndex: 2,
        },
        logical: {
          hideOnResolved: ['slot2'],
          showOnResolved: ['slot1'],
          selected: 1,
          options: [
            {
              id: 1,
              element: {
                type: 'image',
                image: {
                  src: MoleculeBlack,
                },
              },
            },
            {
              id: 2,
              element: {
                type: 'image',
                image: {
                  src: MoleculeBlue,
                },
              },
            },
            {
              id: 3,
              element: {
                type: 'image',
                image: {
                  src: MoleculeOrange,
                },
              },
            },
            {
              id: 4,
              element: {
                type: 'image',
                image: {
                  src: MoleculeWhite,
                },
              },
            },
          ],
        },
      },
      {
        type: 'slot',
        id: 'slot2_10',
        group: 'slot2',
        element: {
          type: 'image',
          image: {
            src: MoleculeBlack,
          },
        },
        position: {
          x: 139,
          y: 69,
          width: 11,
          height: 11,
          zIndex: 2,
        },
        logical: {
          hideOnResolved: ['slot2'],
          showOnResolved: ['slot1'],
          selected: 1,
          options: [
            {
              id: 1,
              element: {
                type: 'image',
                image: {
                  src: MoleculeBlack,
                },
              },
            },
            {
              id: 2,
              element: {
                type: 'image',
                image: {
                  src: MoleculeBlue,
                },
              },
            },
            {
              id: 3,
              element: {
                type: 'image',
                image: {
                  src: MoleculeOrange,
                },
              },
            },
            {
              id: 4,
              element: {
                type: 'image',
                image: {
                  src: MoleculeWhite,
                },
              },
            },
          ],
        },
      },
      {
        type: 'slot',
        id: 'slot2_11',
        group: 'slot2',
        element: {
          type: 'image',
          image: {
            src: MoleculeBlack,
          },
        },
        position: {
          x: 173,
          y: 69,
          width: 11,
          height: 11,
          zIndex: 2,
        },
        logical: {
          hideOnResolved: ['slot2'],
          showOnResolved: ['slot1'],
          selected: 1,
          options: [
            {
              id: 1,
              element: {
                type: 'image',
                image: {
                  src: MoleculeBlack,
                },
              },
            },
            {
              id: 2,
              element: {
                type: 'image',
                image: {
                  src: MoleculeBlue,
                },
              },
            },
            {
              id: 3,
              element: {
                type: 'image',
                image: {
                  src: MoleculeOrange,
                },
              },
            },
            {
              id: 4,
              element: {
                type: 'image',
                image: {
                  src: MoleculeWhite,
                },
              },
            },
          ],
        },
      },
      {
        type: 'slot',
        id: 'slot2_12',
        group: 'slot2',
        element: {
          type: 'image',
          image: {
            src: MoleculeBlack,
          },
        },
        position: {
          x: 208,
          y: 69,
          width: 11,
          height: 11,
          zIndex: 2,
        },
        logical: {
          hideOnResolved: ['slot2'],
          showOnResolved: ['slot1'],
          selected: 1,
          options: [
            {
              id: 1,
              element: {
                type: 'image',
                image: {
                  src: MoleculeBlack,
                },
              },
            },
            {
              id: 2,
              element: {
                type: 'image',
                image: {
                  src: MoleculeBlue,
                },
              },
            },
            {
              id: 3,
              element: {
                type: 'image',
                image: {
                  src: MoleculeOrange,
                },
              },
            },
            {
              id: 4,
              element: {
                type: 'image',
                image: {
                  src: MoleculeWhite,
                },
              },
            },
          ],
        },
      },
      {
        type: 'slot',
        id: 'slot2_13',
        group: 'slot2',
        element: {
          type: 'image',
          image: {
            src: MoleculeBlack,
          },
        },
        position: {
          x: 55,
          y: 81,
          width: 11,
          height: 11,
          zIndex: 2,
        },
        logical: {
          hideOnResolved: ['slot2'],
          showOnResolved: ['slot1'],
          selected: 1,
          options: [
            {
              id: 1,
              element: {
                type: 'image',
                image: {
                  src: MoleculeBlack,
                },
              },
            },
            {
              id: 2,
              element: {
                type: 'image',
                image: {
                  src: MoleculeBlue,
                },
              },
            },
            {
              id: 3,
              element: {
                type: 'image',
                image: {
                  src: MoleculeOrange,
                },
              },
            },
            {
              id: 4,
              element: {
                type: 'image',
                image: {
                  src: MoleculeWhite,
                },
              },
            },
          ],
        },
      },
      {
        type: 'slot',
        id: 'slot2_14',
        group: 'slot2',
        element: {
          type: 'image',
          image: {
            src: MoleculeBlack,
          },
        },
        position: {
          x: 122,
          y: 81,
          width: 11,
          height: 11,
          zIndex: 2,
        },
        logical: {
          hideOnResolved: ['slot2'],
          showOnResolved: ['slot1'],
          selected: 1,
          options: [
            {
              id: 1,
              element: {
                type: 'image',
                image: {
                  src: MoleculeBlack,
                },
              },
            },
            {
              id: 2,
              element: {
                type: 'image',
                image: {
                  src: MoleculeBlue,
                },
              },
            },
            {
              id: 3,
              element: {
                type: 'image',
                image: {
                  src: MoleculeOrange,
                },
              },
            },
            {
              id: 4,
              element: {
                type: 'image',
                image: {
                  src: MoleculeWhite,
                },
              },
            },
          ],
        },
      },
      {
        type: 'slot',
        id: 'slot2_15',
        group: 'slot2',
        element: {
          type: 'image',
          image: {
            src: MoleculeBlack,
          },
        },
        position: {
          x: 156,
          y: 81,
          width: 11,
          height: 11,
          zIndex: 2,
        },
        logical: {
          hideOnResolved: ['slot2'],
          showOnResolved: ['slot1'],
          selected: 1,
          options: [
            {
              id: 1,
              element: {
                type: 'image',
                image: {
                  src: MoleculeBlack,
                },
              },
            },
            {
              id: 2,
              element: {
                type: 'image',
                image: {
                  src: MoleculeBlue,
                },
              },
            },
            {
              id: 3,
              element: {
                type: 'image',
                image: {
                  src: MoleculeOrange,
                },
              },
            },
            {
              id: 4,
              element: {
                type: 'image',
                image: {
                  src: MoleculeWhite,
                },
              },
            },
          ],
        },
      },
      {
        type: 'slot',
        id: 'slot2_16',
        group: 'slot2',
        element: {
          type: 'image',
          image: {
            src: MoleculeBlack,
          },
        },
        position: {
          x: 190,
          y: 81,
          width: 11,
          height: 11,
          zIndex: 2,
        },
        logical: {
          hideOnResolved: ['slot2'],
          showOnResolved: ['slot1'],
          selected: 1,
          options: [
            {
              id: 1,
              element: {
                type: 'image',
                image: {
                  src: MoleculeBlack,
                },
              },
            },
            {
              id: 2,
              element: {
                type: 'image',
                image: {
                  src: MoleculeBlue,
                },
              },
            },
            {
              id: 3,
              element: {
                type: 'image',
                image: {
                  src: MoleculeOrange,
                },
              },
            },
            {
              id: 4,
              element: {
                type: 'image',
                image: {
                  src: MoleculeWhite,
                },
              },
            },
          ],
        },
      },
      {
        type: 'slot',
        id: 'slot2_17',
        group: 'slot2',
        element: {
          type: 'image',
          image: {
            src: MoleculeBlack,
          },
        },
        position: {
          x: 225,
          y: 81,
          width: 11,
          height: 11,
          zIndex: 2,
        },
        logical: {
          hideOnResolved: ['slot2'],
          showOnResolved: ['slot1'],
          selected: 1,
          options: [
            {
              id: 1,
              element: {
                type: 'image',
                image: {
                  src: MoleculeBlack,
                },
              },
            },
            {
              id: 2,
              element: {
                type: 'image',
                image: {
                  src: MoleculeBlue,
                },
              },
            },
            {
              id: 3,
              element: {
                type: 'image',
                image: {
                  src: MoleculeOrange,
                },
              },
            },
            {
              id: 4,
              element: {
                type: 'image',
                image: {
                  src: MoleculeWhite,
                },
              },
            },
          ],
        },
      },
      {
        type: 'slot',
        id: 'slot2_18',
        group: 'slot2',
        element: {
          type: 'image',
          image: {
            src: MoleculeBlack,
          },
        },
        position: {
          x: 106,
          y: 93,
          width: 11,
          height: 11,
          zIndex: 2,
        },
        logical: {
          hideOnResolved: ['slot2'],
          showOnResolved: ['slot1'],

          selected: 1,
          options: [
            {
              id: 1,
              element: {
                type: 'image',
                image: {
                  src: MoleculeBlack,
                },
              },
            },
            {
              id: 2,
              element: {
                type: 'image',
                image: {
                  src: MoleculeBlue,
                },
              },
            },
            {
              id: 3,
              element: {
                type: 'image',
                image: {
                  src: MoleculeOrange,
                },
              },
            },
            {
              id: 4,
              element: {
                type: 'image',
                image: {
                  src: MoleculeWhite,
                },
              },
            },
          ],
        },
      },
      {
        type: 'slot',
        id: 'slot2_19',
        group: 'slot2',
        element: {
          type: 'image',
          image: {
            src: MoleculeBlack,
          },
        },
        position: {
          x: 54,
          y: 105,
          width: 11,
          height: 11,
          zIndex: 2,
        },
        logical: {
          hideOnResolved: ['slot2'],
          showOnResolved: ['slot1'],
          selected: 1,
          options: [
            {
              id: 1,
              element: {
                type: 'image',
                image: {
                  src: MoleculeBlack,
                },
              },
            },
            {
              id: 2,
              element: {
                type: 'image',
                image: {
                  src: MoleculeBlue,
                },
              },
            },
            {
              id: 3,
              element: {
                type: 'image',
                image: {
                  src: MoleculeOrange,
                },
              },
            },
            {
              id: 4,
              element: {
                type: 'image',
                image: {
                  src: MoleculeWhite,
                },
              },
            },
          ],
        },
      },
      {
        type: 'slot',
        id: 'slot2_20',
        group: 'slot2',
        element: {
          type: 'image',
          image: {
            src: MoleculeBlack,
          },
        },
        position: {
          x: 88,
          y: 105,
          width: 11,
          height: 11,
          zIndex: 2,
        },
        logical: {
          hideOnResolved: ['slot2'],
          showOnResolved: ['slot1'],
          selected: 1,
          options: [
            {
              id: 1,
              element: {
                type: 'image',
                image: {
                  src: MoleculeBlack,
                },
              },
            },
            {
              id: 2,
              element: {
                type: 'image',
                image: {
                  src: MoleculeBlue,
                },
              },
            },
            {
              id: 3,
              element: {
                type: 'image',
                image: {
                  src: MoleculeOrange,
                },
              },
            },
            {
              id: 4,
              element: {
                type: 'image',
                image: {
                  src: MoleculeWhite,
                },
              },
            },
          ],
        },
      },
      {
        type: 'slot',
        id: 'slot2_21',
        group: 'slot2',
        element: {
          type: 'image',
          image: {
            src: MoleculeBlack,
          },
        },
        position: {
          x: 123,
          y: 105,
          width: 11,
          height: 11,
          zIndex: 2,
        },
        logical: {
          hideOnResolved: ['slot2'],
          showOnResolved: ['slot1'],
          selected: 1,
          options: [
            {
              id: 1,
              element: {
                type: 'image',
                image: {
                  src: MoleculeBlack,
                },
              },
            },
            {
              id: 2,
              element: {
                type: 'image',
                image: {
                  src: MoleculeBlue,
                },
              },
            },
            {
              id: 3,
              element: {
                type: 'image',
                image: {
                  src: MoleculeOrange,
                },
              },
            },
            {
              id: 4,
              element: {
                type: 'image',
                image: {
                  src: MoleculeWhite,
                },
              },
            },
          ],
        },
      },
      {
        type: 'slot',
        id: 'slot2_22',
        group: 'slot2',
        element: {
          type: 'image',
          image: {
            src: MoleculeBlack,
          },
        },
        position: {
          x: 156,
          y: 105,
          width: 11,
          height: 11,
          zIndex: 2,
        },
        logical: {
          hideOnResolved: ['slot2'],
          showOnResolved: ['slot1'],
          selected: 1,
          options: [
            {
              id: 1,
              element: {
                type: 'image',
                image: {
                  src: MoleculeBlack,
                },
              },
            },
            {
              id: 2,
              element: {
                type: 'image',
                image: {
                  src: MoleculeBlue,
                },
              },
            },
            {
              id: 3,
              element: {
                type: 'image',
                image: {
                  src: MoleculeOrange,
                },
              },
            },
            {
              id: 4,
              element: {
                type: 'image',
                image: {
                  src: MoleculeWhite,
                },
              },
            },
          ],
        },
      },
      {
        type: 'slot',
        id: 'slot2_23',
        group: 'slot2',
        element: {
          type: 'image',
          image: {
            src: MoleculeBlack,
          },
        },
        position: {
          x: 190,
          y: 105,
          width: 11,
          height: 11,
          zIndex: 2,
        },
        logical: {
          hideOnResolved: ['slot2'],
          showOnResolved: ['slot1'],
          selected: 1,
          options: [
            {
              id: 1,
              element: {
                type: 'image',
                image: {
                  src: MoleculeBlack,
                },
              },
            },
            {
              id: 2,
              element: {
                type: 'image',
                image: {
                  src: MoleculeBlue,
                },
              },
            },
            {
              id: 3,
              element: {
                type: 'image',
                image: {
                  src: MoleculeOrange,
                },
              },
            },
            {
              id: 4,
              element: {
                type: 'image',
                image: {
                  src: MoleculeWhite,
                },
              },
            },
          ],
        },
      },
      {
        type: 'slot',
        id: 'slot2_24',
        group: 'slot2',
        element: {
          type: 'image',
          image: {
            src: MoleculeBlack,
          },
        },
        position: {
          x: 71,
          y: 117,
          width: 11,
          height: 11,
          zIndex: 2,
        },
        logical: {
          hideOnResolved: ['slot2'],
          showOnResolved: ['slot1'],
          selected: 1,
          options: [
            {
              id: 1,
              element: {
                type: 'image',
                image: {
                  src: MoleculeBlack,
                },
              },
            },
            {
              id: 2,
              element: {
                type: 'image',
                image: {
                  src: MoleculeBlue,
                },
              },
            },
            {
              id: 3,
              element: {
                type: 'image',
                image: {
                  src: MoleculeOrange,
                },
              },
            },
            {
              id: 4,
              element: {
                type: 'image',
                image: {
                  src: MoleculeWhite,
                },
              },
            },
          ],
        },
      },
      {
        type: 'slot',
        id: 'slot2_25',
        group: 'slot2',
        element: {
          type: 'image',
          image: {
            src: MoleculeBlack,
          },
        },
        position: {
          x: 106,
          y: 117,
          width: 11,
          height: 11,
          zIndex: 2,
        },
        logical: {
          hideOnResolved: ['slot2'],
          showOnResolved: ['slot1'],
          selected: 1,
          options: [
            {
              id: 1,
              element: {
                type: 'image',
                image: {
                  src: MoleculeBlack,
                },
              },
            },
            {
              id: 2,
              element: {
                type: 'image',
                image: {
                  src: MoleculeBlue,
                },
              },
            },
            {
              id: 3,
              element: {
                type: 'image',
                image: {
                  src: MoleculeOrange,
                },
              },
            },
            {
              id: 4,
              element: {
                type: 'image',
                image: {
                  src: MoleculeWhite,
                },
              },
            },
          ],
        },
      },
      {
        type: 'slot',
        id: 'slot2_26',
        group: 'slot2',
        element: {
          type: 'image',
          image: {
            src: MoleculeBlack,
          },
        },
        position: {
          x: 139,
          y: 117,
          width: 11,
          height: 11,
          zIndex: 2,
        },
        logical: {
          hideOnResolved: ['slot2'],
          showOnResolved: ['slot1'],
          selected: 1,
          options: [
            {
              id: 1,
              element: {
                type: 'image',
                image: {
                  src: MoleculeBlack,
                },
              },
            },
            {
              id: 2,
              element: {
                type: 'image',
                image: {
                  src: MoleculeBlue,
                },
              },
            },
            {
              id: 3,
              element: {
                type: 'image',
                image: {
                  src: MoleculeOrange,
                },
              },
            },
            {
              id: 4,
              element: {
                type: 'image',
                image: {
                  src: MoleculeWhite,
                },
              },
            },
          ],
        },
      },
      {
        type: 'slot',
        id: 'slot2_27',
        group: 'slot2',
        element: {
          type: 'image',
          image: {
            src: MoleculeBlack,
          },
        },
        position: {
          x: 174,
          y: 117,
          width: 11,
          height: 11,
          zIndex: 2,
        },
        logical: {
          hideOnResolved: ['slot2'],
          showOnResolved: ['slot1'],
          selected: 1,
          options: [
            {
              id: 1,
              element: {
                type: 'image',
                image: {
                  src: MoleculeBlack,
                },
              },
            },
            {
              id: 2,
              element: {
                type: 'image',
                image: {
                  src: MoleculeBlue,
                },
              },
            },
            {
              id: 3,
              element: {
                type: 'image',
                image: {
                  src: MoleculeOrange,
                },
              },
            },
            {
              id: 4,
              element: {
                type: 'image',
                image: {
                  src: MoleculeWhite,
                },
              },
            },
          ],
        },
      },
      {
        type: 'slot',
        id: 'slot2_28',
        group: 'slot2',
        element: {
          type: 'image',
          image: {
            src: MoleculeBlack,
          },
        },
        position: {
          x: 208,
          y: 117,
          width: 11,
          height: 11,
          zIndex: 2,
        },
        logical: {
          hideOnResolved: ['slot2'],
          showOnResolved: ['slot1'],
          selected: 1,
          options: [
            {
              id: 1,
              element: {
                type: 'image',
                image: {
                  src: MoleculeBlack,
                },
              },
            },
            {
              id: 2,
              element: {
                type: 'image',
                image: {
                  src: MoleculeBlue,
                },
              },
            },
            {
              id: 3,
              element: {
                type: 'image',
                image: {
                  src: MoleculeOrange,
                },
              },
            },
            {
              id: 4,
              element: {
                type: 'image',
                image: {
                  src: MoleculeWhite,
                },
              },
            },
          ],
        },
      },
      {
        type: 'slot',
        id: 'slot2_29',
        group: 'slot2',
        element: {
          type: 'image',
          image: {
            src: MoleculeBlack,
          },
        },
        position: {
          x: 88,
          y: 129,
          width: 11,
          height: 11,
          zIndex: 2,
        },
        logical: {
          hideOnResolved: ['slot2'],
          showOnResolved: ['slot1'],
          selected: 1,
          options: [
            {
              id: 1,
              element: {
                type: 'image',
                image: {
                  src: MoleculeBlack,
                },
              },
            },
            {
              id: 2,
              element: {
                type: 'image',
                image: {
                  src: MoleculeBlue,
                },
              },
            },
            {
              id: 3,
              element: {
                type: 'image',
                image: {
                  src: MoleculeOrange,
                },
              },
            },
            {
              id: 4,
              element: {
                type: 'image',
                image: {
                  src: MoleculeWhite,
                },
              },
            },
          ],
        },
      },
      {
        type: 'slot',
        id: 'slot2_30',
        group: 'slot2',
        element: {
          type: 'image',
          image: {
            src: MoleculeBlack,
          },
        },
        position: {
          x: 191,
          y: 129,
          width: 11,
          height: 11,
          zIndex: 2,
        },
        logical: {
          hideOnResolved: ['slot2'],
          showOnResolved: ['slot1'],
          selected: 1,
          options: [
            {
              id: 1,
              element: {
                type: 'image',
                image: {
                  src: MoleculeBlack,
                },
              },
            },
            {
              id: 2,
              element: {
                type: 'image',
                image: {
                  src: MoleculeBlue,
                },
              },
            },
            {
              id: 3,
              element: {
                type: 'image',
                image: {
                  src: MoleculeOrange,
                },
              },
            },
            {
              id: 4,
              element: {
                type: 'image',
                image: {
                  src: MoleculeWhite,
                },
              },
            },
          ],
        },
      },
      {
        type: 'slot',
        id: 'slot2_31',
        group: 'slot2',
        element: {
          type: 'image',
          image: {
            src: MoleculeBlack,
          },
        },
        position: {
          x: 106,
          y: 141,
          width: 11,
          height: 11,
          zIndex: 2,
        },
        logical: {
          hideOnResolved: ['slot2'],
          showOnResolved: ['slot1'],
          selected: 1,
          options: [
            {
              id: 1,
              element: {
                type: 'image',
                image: {
                  src: MoleculeBlack,
                },
              },
            },
            {
              id: 2,
              element: {
                type: 'image',
                image: {
                  src: MoleculeBlue,
                },
              },
            },
            {
              id: 3,
              element: {
                type: 'image',
                image: {
                  src: MoleculeOrange,
                },
              },
            },
            {
              id: 4,
              element: {
                type: 'image',
                image: {
                  src: MoleculeWhite,
                },
              },
            },
          ],
        },
      },
      {
        type: 'slot',
        id: 'slot2_32',
        group: 'slot2',
        element: {
          type: 'image',
          image: {
            src: MoleculeBlack,
          },
        },
        position: {
          x: 140,
          y: 141,
          width: 11,
          height: 11,
          zIndex: 2,
        },
        logical: {
          hideOnResolved: ['slot2'],
          showOnResolved: ['slot1'],
          selected: 1,
          options: [
            {
              id: 1,
              element: {
                type: 'image',
                image: {
                  src: MoleculeBlack,
                },
              },
            },
            {
              id: 2,
              element: {
                type: 'image',
                image: {
                  src: MoleculeBlue,
                },
              },
            },
            {
              id: 3,
              element: {
                type: 'image',
                image: {
                  src: MoleculeOrange,
                },
              },
            },
            {
              id: 4,
              element: {
                type: 'image',
                image: {
                  src: MoleculeWhite,
                },
              },
            },
          ],
        },
      },
      {
        type: 'slot',
        id: 'slot2_33',
        group: 'slot2',
        element: {
          type: 'image',
          image: {
            src: MoleculeBlack,
          },
        },
        position: {
          x: 174,
          y: 141,
          width: 11,
          height: 11,
          zIndex: 2,
        },
        logical: {
          hideOnResolved: ['slot2'],
          showOnResolved: ['slot1'],
          selected: 1,
          options: [
            {
              id: 1,
              element: {
                type: 'image',
                image: {
                  src: MoleculeBlack,
                },
              },
            },
            {
              id: 2,
              element: {
                type: 'image',
                image: {
                  src: MoleculeBlue,
                },
              },
            },
            {
              id: 3,
              element: {
                type: 'image',
                image: {
                  src: MoleculeOrange,
                },
              },
            },
            {
              id: 4,
              element: {
                type: 'image',
                image: {
                  src: MoleculeWhite,
                },
              },
            },
          ],
        },
      },
      {
        type: 'slot',
        id: 'slot2_34',
        group: 'slot2',
        element: {
          type: 'image',
          image: {
            src: MoleculeBlack,
          },
        },
        position: {
          x: 156,
          y: 153,
          width: 11,
          height: 11,
          zIndex: 2,
        },
        logical: {
          hideOnResolved: ['slot2'],
          showOnResolved: ['slot1'],
          selected: 1,
          options: [
            {
              id: 1,
              element: {
                type: 'image',
                image: {
                  src: MoleculeBlack,
                },
              },
            },
            {
              id: 2,
              element: {
                type: 'image',
                image: {
                  src: MoleculeBlue,
                },
              },
            },
            {
              id: 3,
              element: {
                type: 'image',
                image: {
                  src: MoleculeOrange,
                },
              },
            },
            {
              id: 4,
              element: {
                type: 'image',
                image: {
                  src: MoleculeWhite,
                },
              },
            },
          ],
        },
      },
      {
        type: 'slot',
        id: 'slot2_35',
        group: 'slot2',
        element: {
          type: 'image',
          image: {
            src: MoleculeBlack,
          },
        },
        position: {
          x: 190,
          y: 153,
          width: 11,
          height: 11,
          zIndex: 2,
        },
        logical: {
          hideOnResolved: ['slot2'],
          showOnResolved: ['slot1'],
          selected: 1,
          options: [
            {
              id: 1,
              element: {
                type: 'image',
                image: {
                  src: MoleculeBlack,
                },
              },
            },
            {
              id: 2,
              element: {
                type: 'image',
                image: {
                  src: MoleculeBlue,
                },
              },
            },
            {
              id: 3,
              element: {
                type: 'image',
                image: {
                  src: MoleculeOrange,
                },
              },
            },
            {
              id: 4,
              element: {
                type: 'image',
                image: {
                  src: MoleculeWhite,
                },
              },
            },
          ],
        },
      },
      {
        type: 'nav',
        route: 'Wall3',
        element: {
          type: 'trigger',
        },
        position: {
          x: 10,
          y: 0,
          width: 280,
          height: 15,
        },
      },
      {
        type: 'nav',
        route: 'Wall4',
        element: {
          type: 'trigger',
        },
        position: {
          x: 270,
          y: 0,
          width: 30,
          height: 200,
        },
      },
      {
        type: 'nav',
        route: 'Wall1',
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
    ],
  },
};
