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

export async function uploadImage(image) {
  const CLOUDINARY_URL =
    "https://api.cloudinary.com/v1_1/dlzwbrjjs/image/upload";

  const CLOUDINARY_UPLOAD_PRESET = "s6n0g1p0";

  const file = image;
  const formData = new FormData();

  formData.append("file", file);
  formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
  formData.append("folder", "sapphire");

  return fetch(CLOUDINARY_URL, {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => console.error(err));
}
