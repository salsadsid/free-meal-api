
// fetch data from themealdb.com

const loadFood = foods => {
    const searchText = document.getElementById('searchText').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => searchFood(data))
}

// Show results in bootstrap cards

const searchFood = foods => {
    const container = document.getElementById('food-container');
    const notFound = document.getElementById('not-found');
    console.log(foods)
    if (foods.meals == null) {
        const h3 = document.createElement('h3');
        h3.innerText = "Search result not found";
        h3.classList.add('text-center');
        h3.classList.add('mt-4');
        notFound.appendChild(h3);
    }
    else {
        foods.meals.forEach(food => {

            const div = document.createElement('div');
            div.classList.add('col');
            div.innerHTML = `
                    <div class="card">
                        <img src="${food.strMealThumb}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${food.strMeal}</h5>
                            <p class="card-text">${food.strInstructions.slice(0, 200)}</p>
                        </div>
                    </div>
            `
            container.appendChild(div);

        })
    }
}