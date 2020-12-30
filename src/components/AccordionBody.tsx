import DishItem from './DishItem'

//--------------------------------------
const ExtraItem: React.FC<{
  extra: {
    list: { name: string; price: number; label: string }[]
    header4: string
  }
}> = ({ extra }) => {
  // hooks
  //--------------------------------------
  // functions
  //--------------------------------------
  return (
    <div className="p-2 rounded-sm text-blueGray-600 bg-amber-100">
      <div className="flex">
        <h3 className="text-sm font-semibold md:text-lg text-blueGray-500">
          {extra.header4}{' '}
        </h3>
      </div>
      {extra.list.map((o) => (
        <div
          key={o.name}
          className="flex items-start justify-between gap-x-1 md:text-lg"
        >
          <span className="mb-2 text-sm font-normal md:text-lg ">
            {o.name}{' '}
          </span>
          <div className="flex items-center gap-x-1">
            <span className="text-sm font-light tracking-tight md:text-lg">
              {o.label}{' '}
            </span>
            <span className="font-normal">{o.price.toFixed(2)} </span>
          </div>
        </div>
      ))}
    </div>
  )
}
//=======================
const AccordionBody: React.FC<{
  extra?: any
  ImgSrc: string
  list: any[]
  id: number
}> = ({ extra, list: list, ImgSrc, id }) => {
  // hooks
  //--------------------------------------
  // functions
  //--------------------------------------
  return (
    <div data-testid={id.toString()} className="px-2">
      <img className="" src={ImgSrc} />
      {list.map((o) => (
        <DishItem
          key={o.name}
          name={o.name}
          description={o.description}
          price={o.price}
        />
      ))}
      {extra && <ExtraItem extra={extra} />}
    </div>
  )
}
export default AccordionBody
