import React from "react";

export default function RoutePage({
  params,
}: {
  params: {
    slug?: string[];
  };
}) {
  if (params.slug?.length === 1) {
    return (
      <h1 className="text-5xl font-bold text-center">
        Documents have only one slug
      </h1>
    );
  } else if (params.slug?.length === 2) {
    return (
      <h1 className="text-5xl font-bold text-center">
        Documents have two slug
      </h1>
    );
  }
  return <h1 className="text-5xl font-bold text-center">Viewing Docs page</h1>;
}
