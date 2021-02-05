interface Tea extends Menu.Item, Menu.Tea {}
export const tea: [Menu.Header, Menu.List<Tea>] = [
  {
    header: 'Teagenuss aus Hamburg',
    iconName: 'tea',
  },
  {
    list: [
      [
        {
          header: '',
          imgSrc:
            'https://www.twinings.co.uk/app_/responsive/TwiningsUKI/media/content/About-Tea/shutterstock_126275183.jpg?w=1260',
        },
        {
          itemsList: [
            {
              name: 'Grüntee Asia Superior Blatt',
              description:
                'Unfermentierter Spitzentee aus dem frubaren Mittelasien, mit sympathisch weicher, zartsüsser, angenehm-herver Geschmacksnote und leuchtend hellgelber Tassenfarbe. Versuchen Sie ihn pur, nach kurzer ziehZeit, für einen anregenden Genuss',
              teaArt: 'Teaart: Unfermentierter Grüntee',
              ziehZeit:
                'Ziehzeit: 2-4 Minuten für eine angenehm sympathische Tasse',
              price: { p1: 2.8 },
            },
            {
              name: 'Darjeeling Royal Second Flush Blatt',
              description:
                'Aus den besten Teegärten Nordindiens am Fuße des Himalayas stammt diese zartblumige Sommerpflückung, mit typisch nussiger Geschmacksnote und gelbgoldener Tassenfarbe.',
              price: { p1: 2.8 },
              teaArt: 'Teaart: Schwarzer Tee',
              ziehZeit: 'Ziehzeit: 2-4 Minuten für eine angenehm blumige Tasse',
            },
            {
              name: 'Earl Grey Premium Blatt',
              description:
                'Eine elegante Blattmischung aus Darjeeling und Assam wird benetzt mit dem pikanten Aromaöl feinster Bergamotterfrüchte. Der beliebte Klassiker ist ein charaktervoller Genuss zu jeder Tageszeit und liebt einen Hauch Zucker.',
              price: { p1: 2.8 },
              teaArt: 'Teaart: Aromatisierter Schwarzertee',
              ziehZeit: 'Ziehzeit: 2-4 Minuten für eine angenehm blumige Tasse',
            },
            {
              name: 'Rooibos Vanille',
              description:
                'Südafrikanischer Rotbusch, versetzt mit köstlichen Vanillestückchen und feinem Vanillearoma, hat eine süsse Geschmacksnote, kupferrote Tassenfarbe, kaum Gerbstoffe und ist koffeinfrei. Einfach lecker!',
              price: { p1: 2.8 },
              teaArt: 'Teaart: Aromatisierter Kräutertee',
              ziehZeit:
                'Ziehzeit: 5-10 Minuten für eine angenehm blumige Tasse',
            },
            {
              name: 'Kräutergarten',
              description:
                'Kräutermischung aus Lemongras. südafrikanischem Rooibos, Nanaminze, Fenchel, Süssholzwurzel, Zimt, Heidelbeeren und Kamille. Ein erfrischender Genuss!',
              price: { p1: 2.8 },
              teaArt: 'Teaart: Kräutermischung',
              ziehZeit: 'Ziehzeit: 5-10 Minuten für eine wohlschmechende Tasse',
            },
            {
              name: 'Kamillenblüten',
              description:
                'Getrocknete Kamillenblüten haben einen milden und honigartigen Geschmack. Ein traditionelles und stets geschötztes Hausmittel',
              price: { p1: 2.8 },
              teaArt: 'Teaart: Kräuterart',
              ziehZeit: 'Ziehzeit: 5-10 Minuten für eine aromatische Tasse',
            },
            {
              name: 'Sommerbeeren',
              description:
                'Eine Komposition aus sommerlichen Apfelstüchen, Hibiskusblüten, Hagebuttenschalen und Holunderbeeren, die mit lieblichem Erdbeer-Himbeer-Sahne-Aroma verfeinert wurde sehr erfrischend!',
              price: { p1: 2.8 },
              teaArt: 'Teaart: Aromatisierte Früchtemischung',
              ziehZeit: 'ZiehZeit: 5-10 Minuten für eine aromatische Tasse',
            },
            {
              name: 'Spicy Black Chai Blatt',
              description:
                'Gehaltvolle Schwarzteemischung, versetzt mit Kardamom, Nelken, Ingwer, Zimt, Pfeffer und Gewürzaroma. Mit Milch und Honig/Zucker wird daraus ein angenehm scharfer, wunderbar würziger, anregender Teegenuss, den schon die indischen Yogis (Lehrer) sehr geschätzt haben.',
              price: { p1: 2.8 },
              teaArt: 'Teaart: Aromatisierter Schwarztee',
              ziehZeit: 'Ziehzeit: 3-4 Minuten für eine aromatische Tasse',
            },
          ],
        },
      ],
    ],
  },
]
// interface Coffee extends Drink
export const coffee: [Menu.Header, Menu.List] = [
  {
    header: 'Coffee Time',

    subHeader: 'Handemade in Hamburg',
    origin: 'Aus der Meierei Horst',
    iconName: 'coffee',
  },
  {
    list: [
      [
        {
          header: '',
          imgSrc:
            'https://media3.s-nbcnews.com/j/newscms/2019_33/2203981/171026-better-coffee-boost-se-329p_67dfb6820f7d3898b5486975903c2e51.fit-1240w.jpg',
        },
        {
          itemsList: [
            { name: 'Tasse Kaffee', price: { p1: 2.4 } },
            { name: 'große Tasse Kaffee', price: { p1: 3.4 } },
            { name: 'Espresso', price: { p1: 2.4 } },
            { name: 'Espresso Doppio', price: { p1: 3.2 } },
            { name: 'Espresso Doppio Macchiato', price: { p1: 3.2 } },
            { name: 'Espresso Macchiato', price: { p1: 2.9 } },
            { name: 'Cappuccino', price: { p1: 3.2 } },
            { name: 'Latte Macchiato', price: { p1: 3.3 } },
            { name: 'Milchkaffee', price: { p1: 3.4 } },
            { name: 'Heiße Schokolade', price: { p1: 3.0 } },
            { name: 'Heiße Schokolade mit Sahne', price: { p1: 3.4 } },
          ],
        },
      ],
      [
        { header: 'Spezialitäten' },
        {
          itemsList: [
            {
              name: 'Irish Coffee ',
              description: 'Kaffee, Irish Whiskey, Sahne',
              price: { p1: 5.2 },
            },
            {
              name: 'Lumumba ',
              description: 'Schokolade, Amaretto, Sahne',
              price: { p1: 5.2 },
            },
            {
              name: 'Cock-mock ',
              description: 'Schokolade, Espresso, Sahne',
              price: { p1: 3.6 },
            },
          ],
          addon: {
            header: 'Milch Variante & Flavour',
            addonList: [
              { name: 'Hafemilch', price: { p1: 0.5 } },
              { name: 'Sojamilch', price: { p1: 0.5 } },
              { name: 'Haselnuss', price: { p1: 0.4 } },
              { name: 'Karamell', price: { p1: 0.4 } },
              { name: 'Mandel', price: { p1: 0.4 } },
              { name: 'Schokolade', price: { p1: 0.4 } },
            ],
          },
        },
      ],
    ],
  },
]
