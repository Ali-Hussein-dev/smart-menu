/**
 * TODO
 * - refacor drinks obj to arrays
 */

export const beer: [Menu.Header, Menu.List] = [
  { iconName: 'beer', header: 'Bier', imgSrc: '/trude/beer.jpg' },
  {
    list: [
      // bottle
      [
        { header: 'Fussfrisches Bier', sizeUnit: 'L' },
        {
          itemsList: [
            {
              name: 'Pilsener | Alsterwasser',
              brandName: 'Bitburger',
              size: {
                s1: 0.25,
                s2: 0.4,
              },
              price: {
                p1: 2.8,
                p2: 4,
              },
            },
            {
              name: 'Weißbier',
              brandName: 'König Ludwig',
              size: {
                s1: 0.3,
                s2: 0.5,
              },
              price: {
                p1: 3.1,
                p2: 4.5,
              },
            },
            {
              name: 'Weißbier Alkoholfrei',
              brandName: 'König Ludwig',
              size: {
                s1: 0.3,
                s2: 0.5,
              },
              price: {
                p1: 3.1,
                p2: 4.5,
              },
            },
            {
              name: 'Dunkelbier',
              brandName: 'König Ludwig',
              size: {
                s1: 0.3,
                s2: 0.5,
              },
              price: {
                p1: 3.3,
                p2: 5.9,
              },
            },
            {
              name: 'Helles',
              brandName: 'König Ludwig',
              size: {
                s1: 0.3,
                s2: 0.5,
              },
              price: {
                p1: 3.2,
                p2: 5.9,
              },
            },
            {
              name: 'Zwickel',
              brandName: 'Ratsherrn',
              size: {
                s1: 0.3,
                s2: 0.5,
              },
              price: {
                p1: 3.1,
                p2: 5.9,
              },
            },
          ],
        },
      ],
      //Aus der Flasche
      [
        { header: 'Aus der Flasche', sizeUnit: 'L' },
        {
          itemsList: [
            {
              name: 'White IPA',
              brandName: 'Ratsherrn',
              size: {
                s1: 0.33,
              },
              price: {
                p1: 3.1,
              },
            },
            {
              name: 'Pale Ale',
              brandName: 'Ratsherrn',
              size: {
                s1: 0.33,
              },
              price: {
                p1: 3.1,
              },
            },
            {
              name: 'Westküsten IPA ',
              brandName: 'Ratsherrn',
              size: {
                s1: 0.33,
              },
              price: {
                p1: 3.1,
              },
            },
            {
              name: 'Dunkel weißbier',
              brandName: 'König Ludwig',
              size: {
                s2: 0.5,
              },
              price: {
                p2: 4.5,
              },
            },
            {
              name: 'Kristall weißbier',
              brandName: 'König Ludwig',
              size: {
                s2: 0.5,
              },
              price: {
                p2: 4.5,
              },
            },
          ],
        },
      ],
      // alcoholfree
      [
        {
          header: 'Alkoholfreies Bier',
          sizeUnit: 'L',
        },
        {
          itemsList: [
            {
              name: 'Pils alkoholfrei',
              brandName: 'Bitburger',
              size: {
                s1: 0.33,
              },
              price: {
                p1: 2.9,
              },
            },
            {
              name: 'Alsterwasser alkoholfrei',
              brandName: 'Bitburger',
              size: {
                s1: 0.33,
              },
              price: {
                p1: 2.9,
              },
            },
            {
              name: 'Malzbier',
              brandName: 'Vitamalz',
              size: {
                s1: 0.33,
              },
              price: {
                p1: 2.9,
              },
            },
            {
              name: "Fahrbier 'Drink and Drive' ",
              brandName: 'Fahrbier',
              size: {
                s1: 0.33,
              },
              price: {
                p1: 2.9,
              },
            },
          ],
        },
      ],
      // beerSpecialities
      [
        {
          header: 'Beerspzialitäten',
        },
        {
          itemsList: [
            {
              name: 'Bananawheat weißebier mit einem Schuss Bananasaft',
              brandName: 'König Ludwig',
              size: {
                s1: 0.3,
                s2: 0.5,
              },
              price: {
                p1: 3.2,
                p2: 4.5,
              },
            },
            {
              name: 'Russ weißbier mit einem Schuss Sprite',
              brandName: 'König Ludwig',
              size: {
                s1: 0.3,
                s2: 0.5,
              },
              price: {
                p1: 3.1,
                p2: 4.5,
              },
            },
          ],
        },
      ],
    ],
  },
]
