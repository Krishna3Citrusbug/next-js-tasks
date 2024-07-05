import Link from "next/link";

export default function Product() {
  return (
    <div className="p-8">
      <h1 className="text-5xl font-bold text-center">Products Page</h1>
      <ul>
        <li>
          <Link href="products/1">
            <h2 className="text-2xl font-bold text-red">Product 1</h2>
          </Link>
        </li>
        <li>
          <Link href="products/2">
            <h2 className="text-2xl font-bold text-red">Product 2</h2>
          </Link>
        </li>
        <li>
          <Link href="products/3">
            <h2 className="text-2xl font-bold text-red">Product 3</h2>
          </Link>
        </li>
      </ul>
    </div>
  );
}
