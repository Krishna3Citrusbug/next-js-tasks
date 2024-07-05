export default function ProductDetail({
  params,
}: {
  params: {
    productId: string;
  };
}) {
  return (
    <div className="p-8">
      <h1 className="text-5xl font-bold text-center">
        Details of Product {params.productId}
      </h1>
    </div>
  );
}
