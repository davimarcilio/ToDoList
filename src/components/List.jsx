import React from "react";
import ListItem from "./ListItem";
export default function List(props) {
    // console.log(props.items);
    return (

        <ul className="flex flex-col gap-3">

            {props.items.map((item) => {


                <ListItem item={item}></ListItem>

            })}



        </ul>
    )
}