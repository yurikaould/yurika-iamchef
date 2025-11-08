export interface IngredientInterface {
    aisle: string;
    amount: number;
    consistency: string;
    id: number;
    image: string;
    measures: {
        metric: {
        amount: number;
        unitLong: string;
        unitShort: string;
        };
        us: {
        amount: number;
        unitLong: string;
        unitShort: string;
        };
    };
    meta?: string[];
    name: string;
    original: string;
    originalName: string;
    unit: string;
}


export const ingredients: IngredientInterface[] = [
    {
      aisle: "Meat",
      amount: 500,
      consistency: "solid",
      id: 5050,
      image: "chicken-breast.jpg",
      measures: {
        metric: { amount: 500, unitLong: "grams", unitShort: "g" },
        us: { amount: 17.6, unitLong: "ounces", unitShort: "oz" }
      },
      meta: ["boneless"],
      name: "chicken breast",
      original: "500g boneless chicken breast",
      originalName: "chicken breast",
      unit: "g"
    },
    {
      aisle: "Produce",
      amount: 1,
      consistency: "solid",
      id: 11457,
      image: "cucumber.jpg",
      measures: {
        metric: { amount: 1, unitLong: "", unitShort: "" },
        us: { amount: 1, unitLong: "", unitShort: "" }
      },
      meta: ["chopped"],
      name: "cucumber",
      original: "1 cucumber, chopped",
      originalName: "cucumber",
      unit: ""
    },
    {
      aisle: "Pasta and Rice",
      amount: 150,
      consistency: "solid",
      id: 20052,
      image: "white-rice.jpg",
      measures: {
        metric: { amount: 150, unitLong: "grams", unitShort: "g" },
        us: { amount: 5.3, unitLong: "ounces", unitShort: "oz" }
      },
      meta: ["steamed"],
      name: "white rice",
      original: "150g white rice, steamed",
      originalName: "white rice",
      unit: "g"
    },
    {
      aisle: "Cheese",
      amount: 100,
      consistency: "solid",
      id: 1019,
      image: "feta.jpg",
      measures: {
        metric: { amount: 100, unitLong: "grams", unitShort: "g" },
        us: { amount: 3.5, unitLong: "oz", unitShort: "oz" }
      },
      meta: ["crumbled"],
      name: "feta cheese",
      original: "100g feta cheese, crumbled",
      originalName: "feta cheese",
      unit: "g"
    },
    {
      aisle: "Oil, Vinegar, Salad Dressing",
      amount: 2,
      consistency: "liquid",
      id: 1002044,
      image: "olive-oil.jpg",
      measures: {
        metric: { amount: 2, unitLong: "tbsp", unitShort: "tbsp" },
        us: { amount: 2, unitLong: "tbsp", unitShort: "tbsp" }
      },
      name: "olive oil",
      original: "2 tbsp olive oil",
      originalName: "olive oil",
      unit: "tbsp"
    },
    {
      aisle: "Pasta and Rice",
      amount: 180,
      consistency: "solid",
      id: 20420,
      image: "spaghetti.jpg",
      measures: {
        metric: { amount: 180, unitLong: "grams", unitShort: "g" },
        us: { amount: 6.3, unitLong: "oz", unitShort: "oz" }
      },
      name: "spaghetti",
      original: "180g spaghetti",
      originalName: "spaghetti",
      unit: "g"
    },
    {
      aisle: "Bread",
      amount: 4,
      consistency: "solid",
      id: 18064,
      image: "baguette.jpg",
      measures: {
        metric: { amount: 4, unitLong: "slices", unitShort: "slices" },
        us: { amount: 4, unitLong: "slices", unitShort: "slices" }
      },
      name: "baguette",
      original: "4 baguette slices",
      originalName: "baguette",
      unit: "slices"
    },
    {
      aisle: "Spices and Seasonings",
      amount: 2,
      consistency: "solid",
      id: 2025,
      image: "garam-masala.jpg",
      measures: {
        metric: { amount: 2, unitLong: "tsp", unitShort: "tsp" },
        us: { amount: 2, unitLong: "tsp", unitShort: "tsp" }
      },
      name: "garam masala",
      original: "2 tsp garam masala",
      originalName: "garam masala",
      unit: "tsp"
    },
    {
      aisle: "Produce",
      amount: 4,
      consistency: "solid",
      id: 11282,
      image: "onion.jpg",
      measures: {
        metric: { amount: 4, unitLong: "", unitShort: "" },
        us: { amount: 4, unitLong: "", unitShort: "" }
      },
      meta: ["sliced"],
      name: "onions",
      original: "4 onions, sliced",
      originalName: "onions",
      unit: ""
    },
    {
      aisle: "Canned and Jarred",
      amount: 400,
      consistency: "solid",
      id: 16057,
      image: "chickpeas.jpg",
      measures: {
        metric: { amount: 400, unitLong: "grams", unitShort: "g" },
        us: { amount: 14.1, unitLong: "oz", unitShort: "oz" }
      },
      meta: ["canned"],
      name: "chickpeas",
      original: "400g canned chickpeas",
      originalName: "chickpeas",
      unit: "g"
    }
  ];  