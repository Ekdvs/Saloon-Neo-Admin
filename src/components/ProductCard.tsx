import Image from "next/image";

export default function ProductCard({ name, price, image }: { name: string; price: number; image: string }) {
  return(<div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
    <Image
      className="w-full h-48 object-cover rounded-md"
      src={image}
      alt="Product Image"
      width={300}
      height={200}
    />
    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-2">Product Name : {name}</h3>
    <p className="text-gray-600 dark:text-gray-400 mt-1">Product Description</p>
    <p className="text-lg font-bold text-gray-900 dark:text-white mt-2">Price: ${price.toFixed(2)}</p>
  </div>)
}