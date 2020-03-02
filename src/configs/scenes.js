import EmptyRoomWithClosedDoor from '../assets/images/EmptyRoomWithClosedDoor.png';
import Man from '../assets/images/Man.png';
import ManWithoutKey from '../assets/images/ManWithoutKey.png';
import Key from '../assets/images/Key.png';
import ClosedDoor from '../assets/images/ClosedDoor.png';
import OpenDoor from '../assets/images/OpenDoor.png';

const SCENES = [
  {
    name: 'Main',
    route: 'Main',
    bg: EmptyRoomWithClosedDoor,
    objects: {
      navMap: [],
      itemsMap: [
        {
          type: 'dialog',
          id: 'dialog1',
          element: {
            type: 'image',
            image: {
              src: Man,
            },
          },
          position: {
            x: 50,
            y: 40,
            width: 50,
            height: 150,
          },
          logical: {
            hideOnResolved: ['dialog1_1'],
            dialogProperties: {
              dialog: [
                {
                  s: 'Hi, Give me the key, please!!! I need to go to toilet...',
                  a:
                    'No way, unless you give me the answer to the question of the universe!!!',
                  dialog: [
                    {
                      hideOnResolved: 'dialog1_1',
                      s: 'What is the question, ara?',
                      a:
                        "What a bad attitude. But I'll tell you if you promise to behave well, ara!",
                      dialog: [
                        {
                          s: 'Ok, tell me please, your majesty.',
                          a:
                            'What is the green thing that lives under the ground and eats stone?',
                          dialog: [
                            {
                              s: 'The green underground stoneeater.',
                              a: "Wow, you're a genius. Take the key.",
                              resolve: 'dialog1_1',
                            },
                            {
                              s: 'Fish?...',
                              a: "You're a donk. A fish is never green.",
                            },
                            {
                              s: 'Doggy?...',
                              a: 'Get out of my sight, you crazy idiot!!!',
                            },
                            {
                              s: 'IBM Watson',
                              a:
                                'That could be true in another galaxy in a dream of a drunk ill elephant before dying because of diarea!!! GET OUT!!!',
                            },
                          ],
                        },
                      ],
                    },
                    {
                      s:
                        "I don't have time for this kind of games. I need to go to toilet!",
                      a:
                        "I don't care. The universe is in danger. Go and pee in another place.",
                      dialog: [
                        {
                          s: 'Why are you doing this?',
                          a: 'Because I am spiderman...',
                        },
                      ],
                    },
                    {
                      s:
                        "Listen, man... I don't who are you... But this is my house. Give me the key!!!",
                      a:
                        "It was your house until I came here. Now it's our house.",
                      dialog: [
                        {
                          s: 'I will call the police.',
                          a: 'Your bladder will explode by the time they come.',
                          dialog: [
                            {
                              s: "Maan... You're right",
                              a: 'Universe is always right...',
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          },
        },
        {
          type: 'dialog',
          id: 'dialog2',
          element: {
            type: 'image',
            image: {
              src: ManWithoutKey,
            },
          },
          position: {
            x: 50,
            y: 40,
            width: 50,
            height: 150,
          },
          logical: {
            showOnResolved: ['dialog1_1'],
            dialogProperties: {
              dialog: [
                {
                  s: 'Could you open the door for me please?',
                  a: 'No! Take it and do whatever you want.',
                },
              ],
            },
          },
        },
        {
          type: 'collectable',
          id: 'collectable1',
          element: {
            type: 'image',
            image: {
              src: Key,
            },
          },
          position: {
            x: 52,
            y: 74,
            width: 15,
            height: 15,
          },
          logical: {
            showOnResolved: ['dialog1_1'],
            countOfUse: 1,
          },
        },
        {
          type: 'receiver',
          id: 'receiver1',
          element: {
            type: 'image',
            image: {
              src: ClosedDoor,
            },
          },
          position: {
            x: 154,
            y: 0,
            width: 50,
            height: 200,
          },
          logical: {
            expectedValue: 'collectable1',
            hideOnResolved: ['receiver1'],
          },
        },
        {
          type: 'receiver',
          id: 'receiver2',
          element: {
            type: 'image',
            image: {
              src: OpenDoor,
            },
          },
          position: {
            x: 154,
            y: 0,
            width: 50,
            height: 200,
          },
          logical: {
            expectedValue: 'collectable2',
            showOnResolved: ['receiver1'],
          },
        },
      ],
    },
  },
];

const INITIAL_SCREEN = 'Main';

export { SCENES, INITIAL_SCREEN };
