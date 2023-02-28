import { useParams } from "react-router-dom";

export default function Dashboard() {
    let params = useParams()
    console.log(params,'params')
    return ( <p>dashboard</p> );
}