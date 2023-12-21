import { FormatRupiah } from "@arismun/format-rupiah";
import { Card, CardHeader, CardBody, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

export function ProductCard({ data }) {
  const { id, name, imageUrl, price, priceDiscount, href, color } = data;
  return (
    <div key={id} className="group relative">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <img
          src={imageUrl}
          alt={name}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            {/* <a href={href}>
              <span aria-hidden="true" className="absolute inset-0" />
              {name}
            </a> */}
            <Link to={`/products/1`}>
              <span aria-hidden="true" className="absolute inset-0" />
              {name}
            </Link>
          </h3>
          <p className="mt-1 text-sm text-gray-500">{color || "basic"}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">
          <FormatRupiah value={price} />
        </p>
      </div>
    </div>
  );
}
