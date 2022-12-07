import React from "react";
import Item from "./Item";
export default function List(props) {
    return (
        <ul className="flex flex-col gap-3">
            <Item></Item>
        </ul>
    )
}