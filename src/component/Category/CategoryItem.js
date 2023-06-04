import "./CategoryItem.scss"


const CategoryItem = ({categories}) => {
  const renderCategories = categories.map(({ title, id, imageUrl }) => (
    <div className="category-container" key={id}>
      <div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }}></div>
      <div className="category-body-container">
        {/* <img  alt='' src={imageUrl} className='background-image'/> */}
        <h1 className="h1">{title}</h1>
        <p>shop now</p>
      </div>
    </div>
  ));

  return (
    <div className="categories-container">
      {renderCategories}
    </div>
  );
};

export default CategoryItem;
