import React from "react";
import ListItem from "./ListItem";
export default function List(props) {
    // console.log(props.items);
    console.log(props.items);
    return (

        <ul className="flex flex-col gap-3">

            {props.items.map((item) => {
                return <ListItem items={props.items} item={item}></ListItem>
            })}



        </ul>
    )
}