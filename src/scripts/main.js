const main = () => {
  const baseUrl1 = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert';
  const baseUrl2 = 'https://www.themealdb.com/api/json/v1/1/categories.php';

  const getMeals = () => {
    fetch(`${baseUrl1}`)
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.error) {
          showResponseMessage(responseJson.message);
        } else {
          renderMeals(responseJson.meals);
        }
      })
      .catch((error) => {
        showResponseMessage(error);
      });
  };

  const renderMeals = (meals) => {
    const MealsElement = document.querySelector('#listMeal');
    MealsElement.innerHTML = '';

    meals.slice(20, 24).forEach((meal) => {
      MealsElement.innerHTML += `
          <div class="col-lg-4 col-md-6 col-sm-12 m-2 p-3">
              <div class="card p-3">
                  <img src="${meal.strMealThumb}" class="card-img-top" alt="${meal.strMealThumb} Pictures">
                  <div class="card-body">
                      <h5 class="p-2 text-center" style="background-color: #ffd27d;">${meal.strMeal}</h5>
                  </div>
              </div>
          </div>
          `;
    });
  };

  const getCategories = () => {
    fetch(`${baseUrl2}`)
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.error) {
          showResponseMessage(responseJson.message);
        } else {
          renderCategories(responseJson.categories);
        }
      })
      .catch((error) => {
        showResponseMessage(error);
      });
  };

  const renderCategories = (categories) => {
    const CategoriesElement = document.querySelector('#listCategory');
    CategoriesElement.innerHTML = '';

    categories.forEach((category) => {
      CategoriesElement.innerHTML += `
        <div class="col-lg-4 col-md-6 col-sm-12 mt-3 p-2">
          <div class="card p-2">
              <img src="${category.strCategoryThumb}" class="mx-auto d-block mt-2" alt="Pictures">
              <div class="card-body">
                  <h5 class="p-2 text-center" style="background-color: #ffd27d;">${category.strCategory}</h5>
              </div>
          </div>
        </div>
        `;
    });
  };

  const showResponseMessage = (message = 'Check your internet connection') => {
    alert(message);
  };

  document.addEventListener('DOMContentLoaded', () => {
    getMeals();
    getCategories();
  });
};

export default main;
