export const wine: [Menu.Header, Menu.List] = [
  { header: 'Wine', iconName: 'wine' },
  {
    list: [
      [
        { header: 'Weiße Weine', isSliders: true },
        {
          itemsList: [
            {
              imgSrc: '/trude/resieling.jpg',
              name: 'Tesh unplugged',
              origin: 'Deutschland - Nahe Weingut Tesch',
              description:
                "Gemacht von Martin Tesch wie Musik die unplugged gespielt wird. Ohne 'Verstärker' Riesling pur. Ein bisschen wild und unbändig",
              price: {
                p1: 6.5,
                p2: 19.5,
              },
            },
            {
              imgSrc: '/trude/roseneck.jpg',
              name: 'Berg Roseneck Riesling QbA Kabinett',
              origin: 'Carl Ehrhard, Rheingau',
              description:
                "handgelesene Trauben aus einer der besten Lagen am Rüdesheimer Berg. 'Nenn mich nicht süß!' ruft dieser tolle Riesling. Aber welch einzigartiges und anregendes Zusammenspiel von Rieslingfrucht, erfrischender säure, exotischer Aromatik und Süsse!",
              price: {
                p1: 7,
                p2: 22,
              },
            },
            {
              imgSrc: '/trude/grauerBurgunder.jpg',
              name: 'Grauer Burgunder Qualitätswein trocken',
              origin: 'Deutschland - Pfalz, Weinhof',
              description:
                'Aus dem historischen Herzen der deutschen Weinstraße. Hochwertiger Grauburgunder mit zarten fruchtaromen und angenehmer Würze.',
              price: {
                p1: 5.4,
                p2: 21,
              },
            },
            {
              imgSrc: '/trude/chardonnay.jpg',
              name: 'Chardonnay VdP, Le Bois Chalard trocken',
              origin: 'Frankreich - Loire, Sauvion Et Fils',
              description:
                'Seit 1965 setzen die Gebrüder Sauvion die Tradition fort. Feinheit, filler und Eleganz. Ein Chardonnay wie er sein soll: Exotische Früchte gepaart mit himmlischer Finesse',
              price: {
                p1: 5.2,
                p2: 15.5,
              },
            },
            {
              imgSrc: '/trude/roseBercher.jpg',
              name: 'Spatburgunder Rosé  QbA trocken',
              origin: 'Deutschland - Baden, Weingut Bercher Burkheim',
              description:
                'Ultimativer Terrassenwein oder zum Aperitif oder zu leichten Speisen oder einfach nur so. Ok Spaß beiseite, Späburgunder Rosé von Bercher mit Aromen von Rhabarber, Granatapfel und Cranberrys macht unglaublich viel Spaß und hat vielleicht mit Lust zu tun, aber für leichte Gerichte oder als Zeitvertreib ist dieser Wein ein Traum',
              price: {
                p1: 5.8,
                p2: 17.5,
              },
            },
            {
              imgSrc: '/trude/königsshild.jpg',
              name: 'Riesling Langenlans-heimer Königsschild QbA trocken',
              origin: 'Deutschland - Nahe Weingut Tesch',
              description:
                '1 Winzer, 1 Traube, 4 Lagen dicht beienander. Wer meint die schmechen alle ähnlich täuscht sich gewaltig. Wir haben die schönste Lage raus gesucht: Langenlohnsheimer Königschild.',
              price: {
                p2: 30.5,
              },
            },
            {
              imgSrc: '/trude/albarino.jpg',
              name: 'Albariño QbA trocken',
              origin: 'Volker Schmitt, Rheinhessen',
              description:
                'Der Volker Schmitt Albariño trotzt nur so vor Saftigkeit. Die Fruchtsäure ist besonders weich mit ein wenig Salzigkeit. Verführerische Aromen von reifen Äpfeln, saftigen Pfirsichen und Citrusfrüchtchen',
              price: {
                p2: 26.5,
              },
            },
            {
              imgSrc: '',
              name: 'Würzburger Silvaner QbA trocken',
              origin: 'Weingut am Stein, Franken',
              description:
                'Bio-dynamisch ausgebaut. Satfig, geradeaus mit Aromen von Kernobst und Zitrusfrüchten nussigen und würzigen Anklängen und mineralischen Abgang',
              price: {
                p2: 25.0,
              },
            },
            {
              imgSrc: '',
              name: 'Hugo Grüner Weltliner Qualitätswein trocken',
              origin: 'Weingut Huber Traisenthal, Österreich',
              description:
                'Helles Grüngelb in der Nase exotische frische mit grünem Apfel, schöne Mineralität, ein Grüner Veltliner genau wie er sein soll!',
              price: {
                p2: 19.5,
              },
            },
            {
              imgSrc: '',
              name: 'Sauvignon Blanc & Scheurebe QbA trocken',
              origin: 'Weingut Riffel, Rheinhessen',
              description:
                'Erik und Carolin Riffel erzeugen Ihre Weine im biodynamischer Anbau. Das Cuvee ist fruchtig und saftig mit einem exotischen Aroma und leichter Mineralität',
              price: {
                p2: 20.5,
              },
            },
          ],
        },
      ],
      [
        { header: 'Rote Weine', isSliders: true },
        {
          itemsList: [
            {
              imgSrc: '/trude/spätburgunder.jpg',
              name: 'Spätburgunder QbA trocken',
              origin: 'Weingut Leonhard, Pfalz',
              description:
                'Schonender An- und Aus- bau und die Wertschätzung eines schonenden Pflanzenschutz erzeugen einen kräftigen Spätburgunder dem man kaum glaubt dass er aus Deutschland kommt.',
              price: {
                p1: 6,
                p2: 18,
              },
            },
            {
              imgSrc: '/trude/rioja.jpg',
              name: 'Viña Pomal Centernario Crianza DOC trocken',
              origin: 'Spanien - Rioja, Bodegas Bilbainas',
              description:
                'Genialer vor kraftstroßender Crianza, durch sein amerikanisches Holz sind Vanillearomen vordergründig dann kommen Aromen von dunklen Beeren, Leder und Schaik zutage',
              price: {
                p1: 5.9,
                p2: 18,
              },
            },
            {
              imgSrc: '/trude/ursprung.jpg',
              name: 'Ursprung QbA trocken',
              origin: 'Deutschland - Pfalz Markus Schneider',
              description:
                'Schneider ist in aller Munde. Mit dem Ursprung verweist er auf das Jahr 1994 als er anfing. Der Ursprung ist eine Cuvee aus Cabernet Sauvignon, Merlot und Portugieser Dieser Wein ist das Paradebeispiel des DeutschenModernen Weintypus Aroomen von Pflaumen, Schattenmorellen und Rhabarber. Das ganze verpackt in einer weichen Textur aus Gerbstoff und harmonischer Holzeinsatz mit saftiger eleganter Säure',
              price: {
                p1: 7.7,
                p2: 23,
              },
            },
            {
              imgSrc: '/trude/cabernet.jpg',
              name: 'Cabernet Sauvignon QbA trocken',
              origin: 'Volker Schmidt, Rheinhessen',
              description:
                'Der Cabernet Sauvigon ist das Steckenpferd von Volker Schmidt. Die Trauben der Weinbergslagen direkt am Jakobsweg verwandelt er in einen traumhaften Cabernet Respekt!',
              price: {
                p1: 7,
                p2: 22,
              },
            },
            {
              imgSrc: '/trude/primitivo.jpg',
              name: "Primitivo Salento 'Donna Maruia' IGT trocken Primitivo",
              origin: 'Italien - Apulien, Conti Zecca',
              description:
                'Eines der Top Weingüter Apuliens. Der Primitivo zeigt sich leichtflüssig und fruchtig. Aromen von Aprikose, Hagebutten und schlehen geben einer eher kräftigen Rebsorte einen gräzilen Ausdruck.',
              price: {
                p1: 5.5,

                p2: 17.5,
              },
            },
            {
              imgSrc: '',
              name: 'Blauer Spätburgunder QbA trocken',
              origin: 'Deutschland - Pfalz Weingut Kinpser',
              description:
                'Knipse gilt nicht umsonst als einer der besten Rot weingatter Deutschlads und auch dieser Pinot beweist es. Sehr filigran, fast zerbrechlich und trotzdem voll da. Ein Pinot der an Burgund erinnert. Himbeeren, Kirschen und rote Johannisbeeren kann die Nase erfassen, während sich das feingliedrige Tanningerüst am Gaumen sein Perfktion erkennen lässt',
              price: {
                p2: 30.5,
              },
            },
            {
              imgSrc: '',
              name: 'Merlot Gutswein QbA trocken',
              origin: 'Deutschland - Pfalz, Weingut Lergenmüller',
              description:
                'Kein ganz seichter Merlot wie man ihn schon tausendmal getrunken hat, sondern unglaublich kompakt und konzentriert, aber trozdem unkompliziert',
              price: {
                p2: 20.5,
              },
            },
            {
              imgSrc: '',
              name: 'Deep Blue QbA trocken',
              origin: 'Deutschland - Nahe Weingut Tesch',
              description:
                'Kein echter Rosé sondern ein weißgekelterter Spätburgunder erinnert an Blüten bzw. florale Anklänge mit gelbfruchtigen Aromen von Aprikose und Grapefruit',
              price: {
                p2: 23.0,
              },
            },
            {
              imgSrc: '',
              name: 'Montepulciano d`Abruzz Riserva DOP trocken',
              origin: 'Italien - Cantina Tollo Abruzzen',
              description:
                'Spektatuläres Bouqet von roten Waldfrüchten und dunklen Kirschen, weiche Tannine und dezente Holz und Gerwürnoten. So schmeckt Italien!',
              price: {
                p2: 25.5,
              },
            },
            {
              imgSrc: '',
              name: 'Fabelhaft Tino trocken',
              origin: 'Portugal - Douro, Nieport',
              description:
                'Ein Wein wie ein Märchen, vielleicht ist deswegen die Geschichte vom Raben Nimmersatt auf dem Etikett verewigt. Diese Cuvee aus Autochthonen Rebsorten Portugals ist so unglaublich harmonisch zusammengesetzt, dass es schwierig ist diesen Wein auseinanderzunehmen.',
              price: {
                p2: 26.0,
              },
            },
          ],
        },
      ],
      [
        { header: 'Sekt & Co', imgSrc: '/trude/sparkling.jpg' },
        {
          itemsList: [
            {
              name: 'CAVA Anna de Codorníu Blanc de Blanc Brut weiß',
              description:
                'Dieser traditionelle spanische Schaumwein hat eine tolle, gelbe Farbe mit grünen Tönen. Tönen Dazu ein feines, lang anhaltendes Perlage. Inder Nase Zitrus-Noten und exotische früchte.',
              price: {
                p1: 4.2,
                p2: 27.5,
              },
            },
            {
              name: 'CAVA Anna de Codorníu rosé',
              description:
                'Dieser Cava hat eine kirschorte Farbe mit Erdbeer-Tönung. Dazu eine feine Perlage. Es erwartetSie ein Bouquet von roten Früchten, Kirsche und Erdbeere mit einem Hauch von grünem Apfel.',
              price: {
                p1: 4.2,
                p2: 27.5,
              },
            },
          ],
        },
      ],
      [
        { header: '' },
        {
          itemsList: [
            { name: 'Aperol', size: { s1: 4 }, price: { p1: 4.3 } },
            { name: 'Campari', size: { s1: 4 }, price: { p1: 4.3 } },
            {
              name: 'Martini Auswahl',
              description: "Bianco | d'Oro | Extra Dry | Rosso | Rosé",
              size: { s1: 4 },
              price: { p1: 4.3 },
            },
            { name: 'Pernod', size: { s1: 4 }, price: { p1: 4.3 } },
            { name: 'Pernod Absinth', size: { s1: 4 }, price: { p1: 4.3 } },
            { name: 'Ricard', size: { s1: 4 }, price: { p1: 4.3 } },
          ],
        },
      ],
      [
        { header: '' },
        {
          itemsList: [
            {
              name: 'Aperol Spritz',
              description: 'Aperol, Orange, Soda, Prosecco',
              size: { s1: 0.2 },
              price: { p1: 6 },
            },
            {
              name: 'Hugo',
              description: 'Holunderblütensirup, Mize, Soda, Prosecco',
              size: { s1: 0.2 },
              price: { p1: 6 },
            },
            {
              name: 'Rabini',
              description: 'Martini Bianco, Rhabarber, Soda, Prosecco',
              size: { s1: 0.2 },
              price: { p1: 6.5 },
            },
            {
              name: 'Aperitivo Rosato',
              description: 'Aperitivo Rosato, Beeren, Soda, Prosecco',
              size: { s1: 0.2 },
              price: { p1: 6.5 },
            },
            {
              name: 'Campari O-saft',
              description: 'Orangensaft',
              size: { s1: 0.2 },
              price: { p1: 7.4 },
            },
            {
              name: 'Aperol mit',
              description: 'Maracuja | Rhabarber',
              size: { s1: 0.2 },
              price: { p1: 7.8 },
            },
          ],
        },
      ],
    ],
  },
]
