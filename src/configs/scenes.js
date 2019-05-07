const SCENES = [
  {
    name: 'Main',
    route: 'Main',
    bg: 'https://static1.squarespace.com/static/58bea83d59cc6866d228a41b/58ca658b37c5813452b104aa/58ca65a0bebafbce64d25218/1501665865370/view+01.jpg?format=2500w',
    objects: {
      navMap: [
        {
          x: 70,
          y: 30,
          width: 80,
          height: 40,
          route: 'Next',
          name: 'Next',
          //showWhen: 'collectable1',
          element: 'text'
        },
      ],
      itemsMap: [{
        x: 200,
        y: 170,
        width: 20,
        height: 20,
        name: 'C',
        id: 'collectable1',
        collectable: true,
        type: 'collectable',
        element: 'image',
        imgSrc: 'http://cdn.onlinewebfonts.com/svg/img_327474.png',
      },
      {
        x: 150,
        y: 130,
        width: 40,
        height: 20,
        name: 'Test reciever',
        expectedId: 'collectable1',
        type: 'reciever',
      },
      {
        type: 'multiple',
        x: 200,
        y: 100,
        width: 20,
        height: 20,
        multiple: [
          {
            id: 'group1_1_1',
            element: 'image',
            imgSrc: 'http://cdn.onlinewebfonts.com/svg/img_311846.png',
          },
          {
            id: 'group1_1_2',
            element: 'image',
            imgSrc: 'http://cdn.onlinewebfonts.com/svg/img_327474.png',
          },
          {
            id: 'group1_1_3',
            element: 'image',
            imgSrc: 'https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-simple-512.png',
          },
        ],
        correct: 'group1_1_3',
        selected: 'group1_1_1',
        id: 'group1_1',
        group: 'group1',
      },
      {
        type: 'multiple',
        x: 220,
        y: 100,
        width: 20,
        height: 20,
        multiple: [
          {
            id: 'group1_2_1',
            element: 'image',
            imgSrc: 'http://cdn.onlinewebfonts.com/svg/img_327474.png',
          },
          {
            id: 'group1_2_2',
            element: 'image',
            imgSrc: 'https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-simple-512.png',
          },
          {
            id: 'group1_2_3',
            element: 'image',
            imgSrc: 'http://cdn.onlinewebfonts.com/svg/img_311846.png',
          },
        ],
        correct: 'group1_2_2',
        selected: 'group1_2_1',
        id: 'group1_2',
        group: 'group1',
      },
      {
        type: 'multiple',
        x: 240,
        y: 100,
        width: 20,
        height: 20,
        multiple: [
          {
            id: 'group1_3_1',
            element: 'image',
            imgSrc: 'https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-simple-512.png',
          },
          {
            id: 'group1_3_2',
            element: 'image',
            imgSrc: 'http://cdn.onlinewebfonts.com/svg/img_311846.png',
          },
          {
            id: 'group1_3_3',
            element: 'image',
            imgSrc: 'http://cdn.onlinewebfonts.com/svg/img_327474.png',
          },
        ],
        correct: 'group1_3_1',
        selected: 'group1_3_1',
        id: 'group1_3',
        group: 'group1',
        element: 'text',
      }],
      dialogButtonsMap: [],
    }
  },
  {
    name: 'Next',
    route: 'Next',
    bg: 'http://static.materialicious.com/images/house-to-see-the-sky-by-abraham-cota-paredes-o.jpg',
    objects: {
      navMap: [{
        x: 80,
        y: 80,
        width: 80,
        height: 40,
        route: 'Main',
        element: 'image',
        imgSrc: 'http://cdn.onlinewebfonts.com/svg/img_327474.png',
      }],
      itemsMap: [],
      dialogButtonsMap: [],
    },
  },
];

const INITIAL_SCREEN = 'Main';

export { SCENES, INITIAL_SCREEN };
