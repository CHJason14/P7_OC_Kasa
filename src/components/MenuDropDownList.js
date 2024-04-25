export default function MenuDropDownList({content=[]}) {
  return (
    <ul>
        {(content).map((list) => (
            <li key={list} className='list'>{list}</li>
        ))}
    </ul> 
  )
}
