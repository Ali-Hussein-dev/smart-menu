declare namespace Menu {
  type SizeUnit = 'L' | 'cl'
  interface Size {
    s1?: number
    s2?: number
    s3?: number
  }

  interface DishTags {
    isVegan: boolean
    isVegitarian?: boolean
    withMeat?: TWithMeat
    withNuts?: boolean
    withMilkProducts?: boolean
    isGlutenFree?: boolean
    lactoseFree?: boolean
  }
  interface productInfo {
    allergen: {
      header: 'Allergene'
      infoList: {
        label: AllergenLabel | undefined
      }[]
    }
    additivesLabel: {
      header: 'Zusatsstoffe'
      infoList: {
        label: additivesLabel | undefined
      }[]
    }
    eatStyle: {
      header: 'Essen Stil'
      infoList: {
        label: eatStyle | undefined
      }[]
    }
  }
  interface Price {
    p1?: number
    p2?: number
    p3?: number
    pp1?: number // pp stands for happy hour price
    pp2?: number
    pp3?: number
  }
  interface BrandDetails {
    name: string
    about: string
  }
  interface Tea {
    ziehZeit: string
    teaArt: string
  }
  //-------------------------------
  interface Item {
    name: string
    price: Price
    size?: Size
    // it has be not optional
    displayTimeRange?: boolean
    imgSrc?: string | FruitIcon | undefined
    description?: string
    ingredients?: string
    brandName?: BrandNames | localeBrandNames
    origin?: string
    filler?: string
    label?: string
  }
  interface DishItem {
    info?: Partial<productInfo>
    dressing?: string
    meatSource?: string
  }
  //-------------------------------
  interface Header {
    header: string
    subHeader?: string
    iconName?: IconNames
    imgSrc?: string
    sizeUnit?: SizeUnit
    hasHH?: boolean
    origin?: string
    brandAbout?: string
    about?: string
  }
  //-------------------------------
  interface ItemsList<T = Item> {
    itemsList: T[]
    addon?: {
      header: string
      addonList?: Pick<Item, 'name' | 'price' | 'label' | 'brandName'>[]
    }
  }
  interface List<T = Item> {
    list: [Header | null, ItemsList<T>][]
  }
  //-------------------------------
  interface Hour {
    hrs: number
    min: number
  }
  interface TimeDetails {
    start: number
    end: number
    longStart: Hour
    longEnd: Hour
  }
  interface LunchTimeDetails extends TimeDetails {
    unavailableDays: number[]
  }
  interface MegaObj {
    name: string
    meta: {
      imgSrc: string
      isHH: boolean
      isLunch: boolean
      isCocktailAvailable: boolean
      timeRanges: {
        lunch: LunchTimeDetails
        cocktail: {
          available: TimeDetails
          hh1: TimeDetails
          hh2: TimeDetails
          cocktailOffMsg: string
        }
      }
    }
    menu: {
      de: {
        drinks: {
          name: string
          cocktail: [Header, List<Item>][]
          drinks: [Header, List<Item>][]
        }
        dishes: {
          name: string
          dishes: [Header, List<Menu.Item>][]
        }
      }
      en: {
        drinks: {
          name: string
          cocktail: [Header, List<Item>][] | undefined
          drinks: [Header, List<Item>][] | undefined
        }
        dishes: {
          name: string
          dishes: [Header, List<Item>][] | undefined
        }
      }
    }
  }
}

//--------------------------------------
