const cardsMenu = document.querySelector('.cards-menu');

const changeTitle = (restaurant) => {
    const {name, price, stars, kitchen} = restaurant;
    
    const restaurantTitle = document.querySelector('.restaurant-title');
    const sectionHeading = document.querySelector('.section-heading');
    const cardInfo = document.createElement('div');

    restaurantTitle.textContent = name;
    
    cardInfo.classList.add('card-info');
    cardInfo.innerHTML = `
        <div class="rating">${stars}</div>
        <div class="price">От ${price} ₽</div>
        <div class="category">${kitchen}</div>
    `
    sectionHeading.append(cardInfo);
}

const renderItems = (data) => {
    data.forEach(({description, id, image, name, price}) => {
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
            <img src="${image}" alt="${name}" class="card-image" />
            <div class="card-text">
                <div class="card-heading">
                    <h3 class="card-title card-title-reg">${name}</h3>
                </div>
                <div class="card-info">
                    <div class="ingredients"${description}
                    </div>
                </div>
                <div class="card-buttons">
                    <button class="button button-primary button-add-cart">
                        <span class="button-card-text">В корзину</span>
                        <span class="button-cart-svg"></span>
                    </button>
                    <strong class="card-price-bold">${price} ₽</strong>
                </div>
            </div>
        `;

        cardsMenu.append(card);
    });
}

if(localStorage.getItem('restaurant')) {
    const restaurant = JSON.parse(localStorage.getItem('restaurant'));

    changeTitle(restaurant);

    fetch(`./db/${restaurant.products}`)
    .then(res => res.json())
    .then(data => {
        renderItems(data);
    })
    .catch(error => {
        console.log(error);
    })
    .finally();
} else {
    window.location.href = '/';
}