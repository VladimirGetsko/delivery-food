const renderItems = (data) => {
    console.log(data);
}

fetch('https://delivery-food-f8d4b-default-rtdb.firebaseio.com/db/partners.json')
        .then(res => res.json())
        .then(data => {
            renderItems(data);
        })
        .catch(error => {
            console.log(error);
        })
        .finally();