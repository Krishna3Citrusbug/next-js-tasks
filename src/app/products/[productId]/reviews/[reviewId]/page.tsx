export default function ReviewDetail({
  params,
}: {
  params: {
    productId: string;
    reviewId: string;
  };
}) {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center">
        Review {params.reviewId} for product {params.productId}
      </h1>
    </div>
  );
}
