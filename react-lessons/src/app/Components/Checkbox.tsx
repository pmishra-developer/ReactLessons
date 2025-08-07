"use client";

import React,{useState} from "react";

export default function Checkbox(){
    const[text,settext] = useState("");
    const[message,setmessage] = useState([
    {id:1,name:"Jack",employee:true},
    {id:2,name:"Tom",employee:false},
    {id:3,name:"Will",employee:true}]);

    function Value(e: { target: { value: React.SetStateAction<string>};
    })
    {
        settext(e.target.value);
    }

    function handleCheckboxToggle(id: number) {
        setmessage((list) =>
            list.map((item) =>
                item.id===id ? {... item, employee: !item.employee } : item
            )
        );
        }

    return(
        <div>
            <div>Enter value in the TextBox Below</div>
            <hr></hr>
            <input type="text" onChange={Value}></input>
            <hr></hr>
            <div>Entered Message is:</div>
            <hr></hr>
            <p>{text}</p>
            <hr></hr>
            <ul>
                This is an UnorderedList
                {message.map((item) =>(
                    <li key = {item.id}>
                        <input
                            type="checkbox"
                            checked={item.employee}
                            onChange={() => handleCheckboxToggle(item.id)}></input>
                        {item.name} - {item.employee ? "Employee" : "External"}
                    </li>
                ))}
            </ul>
        </div>
    );
}