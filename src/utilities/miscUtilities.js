import { toast } from "react-hot-toast";

export const debouncer = (callback, delay) => {
  let timerId;
  return (...args) => {
    clearTimeout(timerId);
    timerId = setTimeout(() => callback(...args), delay);
  };
};

export const validateFields = (userInput) => {
  const fields = Object.keys(userInput);

  return fields.every((input) => {
    if (input !== "image") {
      if (userInput[input].trim() === "") {
        toast.error(`Please provide ${input} `);
        return false;
      } else {
        return true;
      }
    } else {
      return true;
    }
  });
};

export const splitIngredientsAndInstructions = (userInput) => ({
  ...userInput,
  ingredients: userInput.ingredients.split("\n"),
  instructions: userInput.instructions.split("\n"),
});

export const joinIngredientsAndInstructions = (userInput) => ({
  ...userInput,
  ingredients: userInput.ingredients.join("\n"),
  instructions: userInput.instructions.join("\n"),
});
