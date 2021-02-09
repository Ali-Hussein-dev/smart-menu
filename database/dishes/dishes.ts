interface DishItemO extends Menu.Item, Menu.DishItem {}
const dishes: [Menu.Header, Menu.List<DishItemO>][] = [
  [
    {
      header: 'Kleinigkeiten',
      imgSrc: '',
      iconName: 'kleinigkeiten',
    },
    {
      list: [
        [
          {
            header: '',
            imgSrc:
              'https://cdn.pixabay.com/photo/2017/11/26/19/40/nachos-2979802_1280.jpg',
          },
          {
            itemsList: [
              {
                name: 'Chili con Carne',
                description:
                  'Mexikanischer Hackfleisch-Bohneneintopf mit Sauerrahm und frischem Brot',

                price: { p1: 11.5 },
              },
              {
                name: 'Sweet Potato Fries and Truffle',
                description:
                  'Pommes frites von der Süßkartoffel mit hausgemachter Trüffelmayonnaise',
                price: { p1: 7.5 },
              },
              {
                name: 'Veganes Chili sin Carne',
                description:
                  'Mexikanischer Soja-Bohneneintopf mit frischem Brot',
                price: { p1: 10.5 },
                info: {
                  allergen: {
                    header: 'Allergene',
                    infoList: [
                      {
                        label: 'Enthält glutenhaltige/s Getreide/-Erzeugnisse',
                      },
                    ],
                  },
                  eatStyle: {
                    header: 'Essen Stil',
                    infoList: [{ label: 'Vegan' }],
                  },
                },
              },
              {
                name: 'Bacon Cheese Fries',
                description:
                  'Pommes frites mit herzhafter Käsesauce und knusprig gebratenen Baconwürfeln vom Strohschwein',
                price: { p1: 5.5 },
              },
              {
                name: 'Chili Cheese Fries',
                description:
                  'Pommes frites mit pikantem Chili con Carne, Jalapeños und leckerer Cheddarsauce',
                price: { p1: 9 },
              },
              {
                name: "Veganes Sandwich 'Tuna-Style' ",
                description:
                  'Creme aus Algen und Kichererbsen mit frischer Paprika, roten Zwiebeln, Mais und knusprigen Kartoffelchips auf geröstetem Weißbrot mit Gurken Tomaten und Eisbergsalat dazu Pommes Frite',
                price: { p1: 12.5 },
                info: {
                  allergen: {
                    header: 'Allergene',
                    infoList: [
                      {
                        label: 'Enthält glutenhaltige/s Getreide/-Erzeugnisse',
                      },
                    ],
                  },
                  eatStyle: {
                    header: 'Essen Stil',
                    infoList: [{ label: 'Vegan' }],
                  },
                },
              },
              {
                name: 'Carpaccio nach Cipranis Originalrezept',
                description:
                  'vom Rinderfilet, mariniert mit Trüffelöl, Rauke Salat, Ciprianisauce und frischen Hobel von Italienischem Hartkäse ',
                price: { p1: 13.5 },
              },
            ],
          },
        ],
      ],
    },
  ],
  [
    {
      header: 'Buntes aus der Schüssel',
      imgSrc: '',
      iconName: 'salat',
    },
    {
      list: [
        [
          {
            header: '',
            imgSrc:
              'https://cdn.pixabay.com/photo/2018/04/09/18/26/asparagus-3304997_1280.jpg',
          },
          {
            itemsList: [
              {
                name: 'Kleiner Gartensalat',
                description:
                  'Bunte Blattsalate mit Tomate, Gurke, Möhre, Chicorée und frischen Kräutern',
                price: { p1: 7.0 },
                dressing: 'Limonen-Joghurt',
              },
              {
                name: 'Großer Gartensalat',
                description:
                  'Bunte Blattsalate mit Tomate, Gurke, Paprika, frischen Kräutern und gebackenen Flammkuchenchips',
                price: { p1: 9.5 },
                dressing: 'Honig-Balsamico',
              },
              {
                name: "Caesar's Salat",
                description:
                  'Knackiger Römersalat und Kirschtomaten in einem mit feinen Kräutern und zerstoßenem Pfeffer  mit Croûtons und Parmesanspänen',
                price: { p1: 10.5 },
                dressing: 'Caesardressing',
              },
              {
                name: 'Rucola Melonoensalat',
                description:
                  'Frischer Rucola und saftige Honigmelone mit mariniertem Hirtenkäse',
                price: { p1: 13 },
                dressing: 'Joghurtdressing',
              },
              {
                name: 'Kerniger Nusssalat',
                description:
                  'Bunte Blattsalate, Apfelchips, Walnüsse, Cashewkerne, Croûtons mit Möhren und Kirschtomaten',
                price: { p1: 10 },
                dressing: 'Balsamico',
                info: {
                  eatStyle: {
                    header: 'Essen Stil',
                    infoList: [{ label: 'Vegan' }],
                  },
                },
              },
            ],
            addon: {
              header: 'Beilage zum Salat',
              addonList: [
                {
                  name: 'Kleine gegrillte Hähnchenbrust 120g vom Kikok',
                  price: { p1: 5.5 },
                },
                {
                  name: 'Gebratene Champignons und Kräuterseitlinge',
                  price: { p1: 3.5 },
                },
                { name: 'Parmeasan', price: { p1: 2.5 } },
              ],
            },
          },
        ],
      ],
    },
  ],
  [
    {
      header: 'Klassik',

      iconName: 'klassik',
    },
    {
      list: [
        [
          {
            header: '',
            imgSrc:
              'https://cdn.pixabay.com/photo/2017/01/09/20/23/pasta-salad-1967501_1280.jpg',
          },
          {
            itemsList: [
              {
                name: 'Currywurst ',
                description:
                  'Wurst aus 100% Bio-Schweinefleisch, nach hauseigenen Rezeptvorgaben hergestellt. Mit roter Sauce, frischem Karotten Krautsalat und Pommes frites',
                size: { s1: 200 },
                price: { p1: 12.5 },
              },
              {
                name: 'Großes Schnitzel',
                description:
                  'in Nussbutter gebraten, an Zitrone mit warmem Speckkartoffelsalat und frischem Cole Slaw',
                price: { p1: 14.5 },
              },
              {
                name: 'Gegrillte Hähnchenbrust',
                description:
                  'mit hausgemachter Kräuterbutter und Pommes frites',
                price: { p1: 15.5 },
                meatSource: 'vom Kikok aus dem Paderborner Land',
                size: { s1: 190 },
              },
              {
                name: 'Pasta Trüffel Pilze',
                description:
                  'Penne mit gebratenen Champignons und Kräuterseitlingen in veganer Trüffel-Sahne mit jungem Lauch und frischen Kräutern',
                price: { p1: 13.5 },
                info: {
                  allergen: {
                    header: 'Allergene',
                    infoList: [
                      {
                        label: 'Enthält glutenhaltige/s Getreide/-Erzeugnisse',
                      },
                    ],
                  },
                  eatStyle: {
                    header: 'Essen Stil',
                    infoList: [{ label: 'Vegan' }],
                  },
                },
              },
              {
                name: 'Pasta in Walnuss-Chili-Pesto',
                description:
                  'Penne mit glacierten Trauben und grünem Spargel in Walnuss-Chili-Pesto Wahlweise mit feinen Scheiben vom Holsteinischen Schinken +1,50€',
                price: { p1: 12 },
                info: {
                  allergen: {
                    header: 'Allergene',
                    infoList: [
                      {
                        label: 'Enthält glutenhaltige/s Getreide/-Erzeugnisse',
                      },
                    ],
                  },
                  eatStyle: {
                    header: 'Essen Stil',
                    infoList: [{ label: 'Vegan' }],
                  },
                },
              },
              {
                name: 'Warmer Pasta-Salat mit Rucola & Walnüssen',
                description:
                  'Lauwarme Pasta in einer leichten Ba lsamicovinaigrette mit frischem Rucola, roten Zwiebeln, Kirschtomaten, gerösteten Walnüssen und getrockneten Cranberries',
                price: { p1: 10 },
                info: {
                  allergen: {
                    header: 'Allergene',
                    infoList: [
                      {
                        label: 'Enthält glutenhaltige/s Getreide/-Erzeugnisse',
                      },
                    ],
                  },
                  eatStyle: {
                    header: 'Essen Stil',
                    infoList: [{ label: 'Vegan' }],
                  },
                },
              },
              {
                name: 'Echt Hamburger Pannfisch',
                description:
                  '(Gefangen nach der MSC- Richtlinie) auf knusprigen Bratkartoffeln mit Zwiebeln, in körniger Dijon-Senfsauce ',
                price: { p1: 15.5 },
              },
              {
                name: "Sellerie 'Cordon Bleu Style'",
                description:
                  'Sellerieschnitzel gefüllt mit veganem Käse auf knusprigen Bratkartoffeln mit Zwiebeln und jungem Lauch',
                price: { p1: 14 },
                info: {
                  allergen: {
                    header: 'Allergene',
                    infoList: [
                      {
                        label: 'Enthält glutenhaltige/s Getreide/-Erzeugnisse',
                      },
                    ],
                  },
                  eatStyle: {
                    header: 'Essen Stil',
                    infoList: [{ label: 'Vegan' }],
                  },
                },
              },
              {
                name: 'Trude’s BBQ Spare Ribs',
                description:
                  'Kotelettrippchen in unserer unverwechselbaren fein rauchigen BBQ-Sauce mariniert und schonend gegart mit frischem Cole Slaw und Pommes Frites ',
                price: { p1: 19.5 },
                size: { s1: 500 },
                meatSource: 'vom Strohschwein',
              },
            ],
          },
        ],
      ],
    },
  ],
  [
    {
      header: 'Der Hamburger',
      imgSrc: '',
      iconName: 'burger',
    },
    {
      list: [
        [
          {
            header: '',
            imgSrc:
              'https://cdn.pixabay.com/photo/2021/01/06/10/11/burger-5893927_1280.jpg',
          },
          {
            itemsList: [
              {
                name: 'Deluxe-Hamburger mit saftigem Black Angus-Weiderind',
                description:
                  'Den Hamburger servieren wir Ihnen in einem selbstgebackenen Sesambrötchen aus unserer Backstube mit Eisbergsalat, eingelegter Gurke Tomate, roten Zwiebeln und Spezial-Burgersauce und Cole Slaw',
                price: { p1: 120 },
                meatSource: 'vom Schleswig-Holstein',
                size: { s1: 200 },
              },
              {
                name: 'Deluxe-Hamburger mit saftigem Black Angus-Weiderind',
                description:
                  'Den Hamburger servieren wir Ihnen in einem selbstgebackenen Sesambrötchen aus unserer Backstube mit Eisbergsalat, eingelegter Gurke Tomate, roten Zwiebeln und Spezial-Burgersauce und Cole Slaw',
                price: { p1: 15 },
                meatSource: 'vom Schleswig-Holstein',
                size: { s1: 120 },
              },
              {
                name: 'Deluxe Trüffel Burger',
                description:
                  'Saftiges Black Angus-Weiderind in einem Brioche-Burgerbrötchen mit Eisbergsalat, Tomate, roten Zwiebeln und Spezial-Burgersauce. Als Krönung mit Süßkartoffel Fries und Trüffelmayonnaise verfeinert. (Die Süßkartoffel Fries sind auf dem Burger!)',
                price: { p1: 18.5 },
                // MeatType: 'Rind',
                meatSource: 'vom Schleswig-Holstein',
              },
              {
                name: 'Crunchy Chicken Burger Hot and Cheesy',
                description:
                  'mit gegrillter Hähnchenbrust vom Kikok aus dem Paderborner Land Hähnchenbrust in knuspriger Panade mit leckerer Cheddarsauce und Jalapeños in einem Sesambrötchen mit Eisbergsalat, eingelegter Gurke, Tomate, roten Zwiebeln und Spezial-Burgersauce',
                price: { p1: 14 },
                // MeatType: 'Hähnchen',
                meatSource: 'vom Kikok aus dem Paderborner Land',
              },
              {
                name: 'Beyond Meat Burger',
                description:
                  'Beyond Meat Patty mit veganem Käse und unserer fein rauchigen BBQ-Sauce im veganen Hamburgerbrötchen mit feurigen Jalapeños frischen Tomaten, eingelegter Gurke, roten Zwiebeln und Eisbergsalat',
                price: { p1: 16 },
                info: {
                  allergen: {
                    header: 'Allergene',
                    infoList: [
                      {
                        label: 'Enthält glutenhaltige/s Getreide/-Erzeugnisse',
                      },
                    ],
                  },
                  eatStyle: {
                    header: 'Essen Stil',
                    infoList: [{ label: 'Vegan' }],
                  },
                },
              },
              {
                name: 'T.R.U.D.E BBQ-Chili Burger',
                description:
                  'Gemüsebratling aus Quinoa und Kidneybohnen mit unsererfein-rauchigen BBQ-Sauce im veganen Hamburger-Brötchen mit feurigen Jalapeños,frischer Tomate, eingelegter Gurke, roten Zwiebeln und Eisbergsalat',
                price: { p1: 16 },
                info: {
                  allergen: {
                    header: 'Allergene',
                    infoList: [
                      {
                        label: 'Enthält glutenhaltige/s Getreide/-Erzeugnisse',
                      },
                    ],
                  },
                  eatStyle: {
                    header: 'Essen Stil',
                    infoList: [{ label: 'Vegan' }],
                  },
                },
              },
              {
                name: 'Pommes frites',
                description: 'Beilage zum Burger',
                price: { p1: 3 },
              },
              {
                name: 'Süßkartoffel Fries',
                description: 'Beilage zum Burger',
                price: { p1: 4 },
              },
            ],
            addon: {
              header: 'Werten Sie Ihren Burger auf mit ...',
              addonList: [
                {
                  name: 'Herzhaftem Cheddarkäse',
                  price: { p1: 1 },
                  label: 'Aufpreis',
                },
                { name: 'Jalapeño', price: { p1: 1 }, label: 'Aufpreis' },
                {
                  name: 'Würziger Barbecuesauce',
                  price: { p1: 1 },
                  label: 'Aufpreis',
                },
                { name: 'Krossem Bacon', price: { p1: 1 }, label: 'Aufpreis' },
                {
                  name: 'Brioche-Burgerbrötchen',
                  price: { p1: 1 },
                  label: 'Aufpreis',
                },
                {
                  name: 'Glutenfreiem Burgerbrötchen',
                  price: { p1: 2 },
                  label: 'Aufpreis',
                },
                {
                  name: 'Veganem Burgerbrötchen',
                  price: { p1: 1 },
                  label: 'Aufpreis',
                },
              ],
            },
          },
        ],
      ],
    },
  ],
  [
    { header: 'Steaks', imgSrc: '', iconName: 'steak' },
    {
      list: [
        [
          {
            header: '',
            imgSrc:
              'https://cdn.pixabay.com/photo/2016/03/05/20/06/abstract-1238655_1280.jpg',
          },
          {
            itemsList: [
              {
                name: 'Rumpsteak',
                description: '',
                price: { p1: 25.5 },
                meatSource: 'vom Schleswig-Holstein',
                size: { s1: 250 },
              },
              {
                name: 'Rumpsteak Big Chef Cut',
                description:
                  'Der Klassiker, geschnitten aus dem Roastbeef. Eine gleichmäßige Marmorierung macht es zu einem hoch aromatischen und saftigen Stück Fleisch. Unsere Schlemmer-Steaks servieren wir Ihnen mit einer Backkartoffel, Kräuterschmand und hausgemachter Kräuterbutter.',
                price: { p1: 35.5 },
                meatSource: 'vom Schleswig-Holstein',
                size: { s1: 450 },
              },
            ],
          },
        ],
      ],
    },
  ],
  [
    { header: 'Flamkuchen', imgSrc: '', iconName: 'flammkuchen' },
    {
      list: [
        [
          {
            header: '',
            imgSrc:
              'https://cdn.pixabay.com/photo/2016/03/01/11/36/tarte-flambee-1230126_1280.jpg',
          },
          {
            itemsList: [
              {
                name: 'Der Original',
                description:
                  'mit magerem Speckvom Strohschwein und Zwiebeln auf Sauerrahm',
                price: { p1: 9.5 },
              },
              {
                name: 'Der BBQ Beef',
                description:
                  'mit gegrillten Rumpsteak-Würfeln vom Weiderind, Mais, Paprika, herzhaftem Käse und Barbecue-Sauce auf Tomatenpüree',
                price: { p1: 13.5 },
              },
              {
                name: 'Der Trüffelige',
                description:
                  'mit Champignons und Kräuterseitlingen, jungem Lauch, Tomaten und Trüffelmayonnaise auf Tomatenpüree',
                price: { p1: 11.5 },
                info: {
                  eatStyle: {
                    header: 'Essen Stil',
                    infoList: [{ label: 'Vegan' }],
                  },
                },
              },
              {
                name: 'Der Holländer',
                description:
                  'zarter grüner Spargel und knackiger Brokkoli mit Käse und leckererSauce überbacken auf Sauerrahm – Wahlweise mit magerem Speck vom Strohschwein (+ 1€ Aufpreis)',
                price: { p1: 12 },
              },
              {
                name: 'Der Klassiker',
                description:
                  'mit Zwiebeln, magerem Speckvom Strohschwein und leckerem Käse gratiniert auf Sauerrahm',
                price: { p1: 10.5 },
              },
              {
                name: 'Der Cheeseburger',
                description:
                  'Hamburgerfleisch vom deutschen Weiderind mit Tomaten, Zwiebeln und leckerem Käse2auf Tomatensauce, nach dem Backen mit eingelegten Gurken und unserer unverwechselbaren Burgersauce garniert',
                price: { p1: 13.5 },
              },
              {
                name: 'Der Zickige',
                description:
                  'mit Ziegenkäse, Tomaten, Kräutern, Rucolasalat und Blütenhonig auf Sauerrahm',
                price: { p1: 12.5 },
              },
            ],
          },
        ],
      ],
    },
  ],
  [
    { header: 'Kindergerichte', imgSrc: '', iconName: 'kinder' },
    {
      list: [
        [
          {
            header: '',
            imgSrc:
              'https://cdn.pixabay.com/photo/2016/02/11/20/06/baker-1194428_1280.jpg',
          },
          {
            itemsList: [
              {
                name: 'Miraculix',
                description: 'Pasta mit Ketchup und geriebenem Käse',
                price: { p1: 5 },
              },
              {
                name: 'Roadrunner',
                description:
                  'Kleine gegrillte Hähnchenbrust vom Kikok aus dem Paderborner Land mit Pommes frites',
                price: { p1: 8 },
              },
              {
                name: 'Hamburger',
                description:
                  'Unser Deluxe Hamburger als Miniversion für unsere kleinen Gäste mit Pommes frites',
                price: { p1: 5 },
              },
            ],
          },
        ],
      ],
    },
  ],
  [
    { header: 'Desserts', imgSrc: '', iconName: 'desserts' },
    {
      list: [
        [
          {
            header: '',
            imgSrc:
              'https://cdn.pixabay.com/photo/2016/10/13/11/44/chocolates-1737503_1280.jpg',
          },
          {
            itemsList: [
              {
                name: 'Schokoladen Brownie',
                description: 'mit Vanillesauce',
                price: { p1: 5 },
              },
              {
                name: 'Schoko-Flammkuchen',
                description:
                  'mit Nuss-Nougatcreme, Haselnusskrokant und Mandeln auf Vanilleschmand Halbe Portion 5,50€',
                price: { p1: 9 },
              },
              {
                name: 'Süßer Oreo Flammkuchen',
                description:
                  'Original Oreo Kekse auf süßem Vanilleschmand mit gesalzenen Erdnüssen und mildem Mozzarella überbacken. Auf den ersten Blick mag die Kombination von süß und salzig verrückt erscheinen. Schmeckt aber total lecker. Entdeckt auf kulinarischen Reise in Queens, New York bei Krave It!  Halbe Portion 5,50€',
                price: { p1: 9 },
              },
              {
                name: 'Hamburger Rote Grütze',
                description:
                  'mit Vanilleeis Wahlweise mit veganem Mango-Fruchteis',
                price: { p1: 6 },
                info: {
                  eatStyle: {
                    header: 'Essen Stil',
                    infoList: [{ label: 'Vegan' }],
                  },
                },
              },
            ],
          },
        ],
      ],
    },
  ],
  [
    { header: 'Eis', imgSrc: '', iconName: 'eis' },
    {
      list: [
        [
          {
            header: '',
            imgSrc:
              'https://cdn.pixabay.com/photo/2017/10/02/14/53/ice-cream-2809036_1280.jpg',
          },
          {
            itemsList: [
              {
                name: 'TRUDE.s Sonnenschein',
                description:
                  'Vanilleeis (2 Kugeln), Orangensaft und frische Minze',
                price: { p1: 5 },
              },
              {
                name: 'Schwedenbecher',
                description:
                  'Vanilleeis (3 Kugeln), Apfelkompott, Zimt, Sahne und ein Schuss Eierlikör',
                price: { p1: 6.5 },
              },
              {
                name: 'Fitenssbecher',
                description:
                  'Joghurteis, Erdbeereis, Vanilleeis, Naturjoghurt, Sahne und MüsliJoghurteis, Erdbeereis, Vanilleeis, Naturjoghurt, Sahne und Müsli',
                price: { p1: 6.5 },
              },
              {
                name: 'Nuss-Baileysbecher',
                description:
                  'Haselnusseis, Walnusseis, Vanilleeis, Nusskrokant, Sahne und ein Schuss Baileys',
                price: { p1: 6.5 },
              },
              {
                name: 'Eiskaffee',
                description:
                  'Vanilleeis (2 Kugeln), aromatisierter Kaffee, Sahne und Borkenschokolade',
                price: { p1: 5.5 },
              },
              {
                name: 'Schokoladenbecher',
                description:
                  'Schokoladeneis, Haselnusseis, Vanilleeis, Sahne, Schokoladensauce und Borkenschokolade',
                price: { p1: 6.5 },
              },
              {
                name: 'Kokosnuss-Ananasbecher',
                description:
                  'Frische Ananas, Kokosnusseis, Joghurteis, Vanilleeis, Sahne, garniert mit Erdbeersauce und Kokosstreuseln',
                price: { p1: 8 },
              },
              {
                name: 'Kinderbecher',
                description:
                  'Vanilleeis (1 Kugel), Sahne, Smarties, Hörnchenwaffel und Schokoladenstreusel',
                price: { p1: 3.5 },
              },
              {
                name: 'Unsere Eissorten',
                description:
                  'Vanilleeis, Schokoladeneis, Haselnusseis, Walnusseis, Erdbeereis, Joghurteis, Kokosnusseis',
                price: { p1: 1.3 },
              },
              {
                name: 'On Top 1',
                description:
                  'Schokosauce, Erdbeersauce, Müsli, Apfelkompott, Borkenschokolade, Joghurt, Krokant, Smarties, Hörnchenwaffel',
                price: { p1: 0.5 },
              },
              {
                name: 'On Top 2',
                description: 'Eierlikör, Baileys, frische Ananas',
                price: { p1: 1.3 },
              },
              {
                name: 'Schlagsahne',
                description: '',
                price: { p1: 0.8 },
              },
            ],
          },
        ],
      ],
    },
  ],
]
export const lunch = [
  {
    name: 'Gebratne Lachs',
    description: 'Gebratne Lachs mit süße Sojasauce und leckerem Beilagesalat',
    price: { p1: 8.9 },
    imgSrc:
      'https://www.foodiesfeed.com/wp-content/uploads/2021/01/fried-salmon-with-sweet-soy-sauce-in-a-korean-restaurant.jpg',
  },
  {
    name: 'Hähnchen Spieße',
    description: 'Hähnchen Spieße mit Kochbananen',
    price: { p1: 10.9 },
    imgSrc:
      'https://www.foodiesfeed.com/wp-content/uploads/2015/08/paleo-chicken-skewers-with-plantains-768x512.jpg',
  },
]
export default dishes
