interface IList {
    list: string[]
    listStyles?: string;
    children: any;
}

const List = ({list, listStyles = 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  ', children}: IList) => {
  return (
    <ul className={listStyles}>
        {
            Array.isArray(list) && list.length!==0 && list.map((listItem, i) =>{
                return <li key={i} className="flex flex-row items-center text-sm"> {children} {listItem} </li>
            })
        }
    </ul>
  )
}

export default List