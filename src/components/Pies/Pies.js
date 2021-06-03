import React, {useState, useEffect} from 'react';
import './Pies.css';
import DisplayPies from './Pie/Pie';

const Pies = (props) => {
    console.log(props);

    const [pies, setPies] = useState([]);

    const fetchPies = () => {
        let url = 'http://localhost:4000/pies/';

        fetch(url, {
            method: 'GET',
            headers: new Headers({
                'Content-Type':'application/json',
                'Authorization': props.sessionToken
            })
        })
        .then(res => res.json())
        .then(json => setPies(json))
    }

    useEffect(() => {
        fetchPies();
    }, []);

    return(
        <table>
            <thead>
                <tr>
                    <th>Name of Pie</th>
                    <th>Base of Pie</th>
                    <th>Crust</th>
                    <th>Bake Time</th>
                    <th>Servings</th>
                    <th>Rating</th>
                </tr>
            </thead>
            <tbody>
                <DisplayPies pie={pies}/>
            </tbody>
        </table>
    )
}

export default Pies;