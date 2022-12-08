import React from "react";
import ListItem from "./ListItem";
export default function List(props) {
    return (

        <ul className="flex flex-col gap-3">

            {props.items.map((item) => {
                return <ListItem key={item.id} onCheckedTasks={props.onCheckedTasks} onHandleDeleted={props.onHandleDeleted} items={props.items} item={item}></ListItem>
            })}



        </ul>
    )
}