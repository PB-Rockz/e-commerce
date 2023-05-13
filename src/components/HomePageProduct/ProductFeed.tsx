import { Product as ProductType } from "../../../typings";
import Product from "./Product";

type Props = {
  products: ProductType[];
};

function ProductFeed({ products }: Props) {
  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto">
      {products
        .slice(0, 4)
        .map(({ title, id, price, description, category, image, rating }) => (
          <Product
            key={id}
            id={id}
            price={price}
            description={description}
            category={category}
            title={title}
            image={image}
            rating={rating}
          />
        ))}

      <img
        className="md:col-span-full"
        src="https://links.papareact.com/dyz"
        alt=""
      />
      <div className="md:col-span-2">
        {products
          .slice(4, 5)
          .map(({ title, id, price, description, category, image, rating }) => (
            <Product
              key={id}
              id={id}
              price={price}
              description={description}
              category={category}
              title={title}
              image={image}
              rating={rating}
            />
          ))}
      </div>
      {products
        .slice(5, products.length)
        .map(({ title, id, price, description, category, image, rating }) => (
          <Product
            key={id}
            id={id}
            price={price}
            description={description}
            category={category}
            title={title}
            image={image}
            rating={rating}
          />
        ))}
    </div>
  );
}

export default ProductFeed;
