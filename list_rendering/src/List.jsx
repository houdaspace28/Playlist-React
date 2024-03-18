import { useLayoutEffect } from "react";

function List(){
    const fruits=[{id:1,name:"apple"}, {id:2,name:"orange"}, {id:3,name:"banana"},{id:4,
    name:"coconut"},
    {id:5,
        name: "pineapple"}];
    
    

    
    const listItems=fruits.map(fruit => <li key={fruit.id}>{fruit.name}: {fruit.id}</li>)
    return(
      <ul>
        {listItems}
      </ul>

    );
}
export default List