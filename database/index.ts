import dishes, { lunch } from './dishes/dishes'
import { cocktail } from './drinks/cocktail'
import drinks from './drinks'

const MegaList: Menu.MegaObj[] = [
  {
    name: 'T.R.U.D.E',
    meta: {
      imgSrc: '/trude/trude_logo.jpg',
      isHH: false,
      isLunch: true,
      isCocktailAvailable: false,
      timeRanges: {
        lunch: {
          start: 690,
          end: 1020,
          longStart: { hrs: 11, min: 30 },
          longEnd: { hrs: 17, min: 0 },
          unavailableDays: [6, 0],
        },
        cocktail: {
          hh1: {
            start: 1020,
            end: 1140,
            longStart: { hrs: 17, min: 0 },
            longEnd: { hrs: 19, min: 0 },
          },
          hh2: {
            start: 1350,
            end: 30,
            longStart: { hrs: 22, min: 30 },
            longEnd: { hrs: 0, min: 30 },
          },
          available: {
            start: 1020,
            end: 360,
            longStart: { hrs: 17, min: 0 },
            longEnd: { hrs: 6, min: 0 },
          },
          cocktailOffMsg:
            'Cocktail Karte steht erst um 17:00 Uhr zur Verfügung!',
        },
      },
    },
    menu: {
      de: {
        drinks: {
          name: 'Barkarte',
          drinks,
          cocktail,
        },
        dishes: {
          name: 'Küchekarte',
          dishes,
          lunch,
        },
      },
      en: {
        drinks: {
          name: 'Drink Menu',
          drinks: undefined,
          cocktail: undefined,
        },
        dishes: { name: 'Dishes Menu', dishes: undefined, lunch },
      },
    },
  },
]
export default MegaList

const drinkss = MegaList[0].menu.de.drinks

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const longdrinkItem = drinkss.drinks[4][1].list[1][1].addon.addonList[1]
longdrinkItem

// type TLanguageCode = 'de' | 'en'

// export const findRestuarant = (name, objList = GBList) => {
//   return objList.filter((o) => o.name === name)
// }
// export const findMenuSection = (
//   ResObj: Obj,
//   menuType: TMenuType | TMenuType2,
//   sectionName: string,
//   lang: TLanguageCode = 'de'
// ) => {
//   return ResObj.menu[lang][menuType][sectionName]
// }

// const trude = findRestuarant(GBList, 'trude');
// const salat = findMenuSection(trude[0], 'speise', 'salat');
// const salad = findMenuSection(trude[0], 'dishes', 'salad', 'en');
