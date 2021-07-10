import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Registry() {
    const [textIput, setTextIput] = useState("") // for text input
    const [registryData, setRegistryData] = useState([]) // save all inint item
    const [error, setError] = useState(false)


    const addItem = (e) => {
        e.preventDefault();

        const tempData = [...registryData]; // copy function
        tempData.push(textIput); // add text to array
        setRegistryData(tempData) // save vales in new function
        setTextIput("") // make input empty
    }


    useEffect(() => {
        if (textIput.length > 10) setError(true); // condition
        else setError(false) // if error
    }, [textIput]) //put value in inputrxt

   // console.log(registryData);

    const removeItem = (index) => { // remove  item
        let newData = [...registryData] //new function get all item
        newData.splice(index, 1) // delete spesific data
        setRegistryData(newData) // push new data in RegistryData
    }

    const editItem = (index) => {

        let newData = [...registryData] //new function get all item
        newData[index] = textIput;  // edit value
        setRegistryData(newData) // push new data in RegistryData
        setTextIput("") // Make input empty

    }



    return (
        <div className="registry">
            <h1>Registry</h1>
            <Link to="/home">Clik Here to HOME </Link>
            <form onSubmit={addItem}>
                <label>input text:
                    <input type="text" value={textIput}
                        onChange={(e) => setTextIput(e.target.value)}></input>
                </label>
                <input type="submit" value="submit"></input>
            </form>
            {
                registryData.map((item, index) => {
                    return (
                        <li key={index}> {item} <div>
                            <button className="buttons" onClick={() => removeItem(index)}>
                                Remove
                            </button>
                            <button className="buttons" onClick={() => editItem(index)}>
                                Edit
                            </button >
                        </div>
                        </li>
                    )
                })
            }
            {error ? <span style={{ color: "red" }}> Error faild is too long</span> : null}

        </div>
    )

}

export default Registry;