import { useSelector } from "react-redux";
import { selectContact } from "./contactSlice";

export function PeopleList(){
    const arr = useSelector(selectContact);
    const listItems = arr.map((val, index)=><li key={index}>{val}</li>);
    return(
        <div>
            <p>Contact List</p>
            <ul>{listItems}</ul>
        </div>
    );
}