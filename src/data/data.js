export const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/recipes") {
        resolve({
          status: 200,
          message: "Success",
          data: [
            {
              id: "1",
              name: "Spaghetti Bolognese",
              ingredients: [
                "500g ground beef",
                "1 onion, diced",
                "2 cloves of garlic, minced",
                "1 can of diced tomatoes",
                "1 tablespoon tomato paste",
                "1 teaspoon dried oregano",
                "1 teaspoon dried basil",
                "Salt and pepper to taste",
                "250g spaghetti",
                "Grated Parmesan cheese, for garnish",
              ],
              instructions: [
                "In a large pan, cook the ground beef until browned. Remove from the pan and set aside.",
                "In the same pan, sauté the onion and garlic until softened.",
                "Add the diced tomatoes, tomato paste, oregano, basil, salt, and pepper. Stir well.",
                "Return the cooked ground beef to the pan and simmer for 20 minutes.",
                "Meanwhile, cook the spaghetti according to package instructions until al dente.",
                "Serve the spaghetti with the Bolognese sauce on top. Garnish with grated Parmesan cheese.",
                "Enjoy!",
              ],
              cuisine: "Italian",
              image:
                "https://images.unsplash.com/photo-1516001784377-938d72d1e4ab?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8cmVjaXBlfHx8fHx8MTY4ODIyMTA4Nw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400",
            },
            {
              id: "2",
              name: "Chicken Tikka Masala",
              ingredients: [
                "500g chicken breast, cut into cubes",
                "1 cup plain yogurt",
                "2 tablespoons lemon juice",
                "2 teaspoons ground cumin",
                "2 teaspoons ground coriander",
                "1 teaspoon ground turmeric",
                "1 teaspoon garam masala",
                "1 teaspoon paprika",
                "Salt and pepper to taste",
                "2 tablespoons vegetable oil",
                "1 onion, finely chopped",
                "3 cloves of garlic, minced",
                "1 can of tomato sauce",
                "1 cup heavy cream",
                "Fresh cilantro, for garnish",
              ],
              instructions: [
                "In a bowl, combine the yogurt, lemon juice, cumin, coriander, turmeric, garam masala, paprika, salt, and pepper.",
                "Add the chicken cubes to the marinade and coat well. Let it marinate for at least 1 hour or overnight in the refrigerator.",
                "In a large pan, heat the vegetable oil over medium heat. Add the chopped onion and sauté until golden brown.",
                "Add the minced garlic and cook for another minute.",
                "Add the marinated chicken cubes to the pan and cook until browned.",
                "Pour in the tomato sauce and simmer for 15 minutes.",
                "Stir in the heavy cream and simmer for an additional 5 minutes.",
                "Garnish with fresh cilantro and serve with rice or naan bread.",
                "Enjoy!",
              ],
              cuisine: "Indian",
              image:
                "https://images.unsplash.com/photo-1543352634-a1c51d9f1fa7?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8cmVjaXBlfHx8fHx8MTY4ODIyMTE0OA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400",
            },
            {
              id: "3",
              name: "Caesar Salad",
              ingredients: [
                "1 head of romaine lettuce, chopped",
                "1 cup croutons",
                "1/2 cup grated Parmesan cheese",
                "1/4 cup Caesar dressing",
                "1 lemon, juiced",
                "Salt and pepper to taste",
              ],
              instructions: [
                "In a large bowl, combine the chopped romaine lettuce, croutons, and grated Parmesan cheese.",
                "Drizzle the Caesar dressing and lemon juice over the salad.",
                "Season with salt and pepper, and toss to coat the ingredients evenly.",
                "Serve immediately as a side dish or add grilled chicken for a complete meal.",
                "Enjoy!",
              ],
              cuisine: "International",
              image:
                "https://images.unsplash.com/photo-1487376318617-f43c7b41e2e2?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8cmVjaXBlfHx8fHx8MTY4ODIyMTE5OA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400",
            },
          ],
        });
      } else {
        reject({
          status: 404,
          message: "Weather data not found.",
        });
      }
    }, 1000);
  });
};
