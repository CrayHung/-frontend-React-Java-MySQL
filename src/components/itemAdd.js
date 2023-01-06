import React from 'react';


const ItemAdd = (data) => {

    console.log(data);
    console.log(typeof(data));
    const addUrl = "http://localhost:8080/users/addorUpdate";
   
    fetch(addUrl, {method: 'POST',headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
        .then(res => {res.json(); console.log(res);console.log(typeof(res))})
        .catch(error => console.error('Error:', error))
        .then(response => {

            console.log('success', response);
            // setShow(false);
        }
            );
}

export default ItemAdd;


