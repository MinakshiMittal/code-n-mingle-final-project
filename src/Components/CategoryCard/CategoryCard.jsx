import "./CategoryCard.css";

export const CategoryCard = ({category}) => {
    console.log(category._id);
    return(
        <div className="card-demo" key={category._id}>
            <img
            className="category-image"
            src={category.imageUrl}
            alt="product"
            />
            <h1 className="category-name">{category.category}</h1>
        </div>
    )
}