import "./RecipeDetailCard.css";

export function RecipeDetailCard({ recipe }) {
  const { id, title, ingredients, instructions, description, image } =
    recipe ?? {};

  return (
    <div>
      <h1 className="center">{title} </h1>
      <div className="recipe-detail-info">
        <img
          className="recipe-detail-image"
          src={
            image
              ? image
              : "https://res.cloudinary.com/dlzwbrjjs/image/upload/v1691516455/placeholder-rgb-color-icon-vector-32173552_vbbhay.jpg"
          }
          alt="recipe"
          height="400px"
          width="400px"
        />
        <div>
          <h3>{description}</h3>
          <div>
            <strong>Ingredients : </strong>
            {ingredients?.join(", ")}
          </div>
          <div>
            <h4>Instructions</h4>
            <div>
              {instructions?.map((instruction, index) => (
                <div key={instruction}>
                  {index + 1}) {instruction}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
