import React from 'react';

const ItemDelete = (Item) => {
    console.log(Item);

    const deleteUrl = "http://localhost:8080/users/delete/" + Item;
   
    fetch(deleteUrl, { method: 'DELETE' })
				.then(response => (response.json()))
				.then(res => console.log(res))
				.catch(err => console.log(err))
}

export default ItemDelete;
