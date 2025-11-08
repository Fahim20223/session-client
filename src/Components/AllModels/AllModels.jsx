import React from "react";
import { useLoaderData } from "react-router";
import { ModelCard } from "../ModelCard/ModelCard";

const AllModels = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="w-11/12 mx-auto">
      <h2 className="text-center font-bold text-2xl p-5">All-Models</h2>
      <div className="grid grid-cols-3 lg:grid-cols-4 gap-3">
        {data.map((model) => (
          <ModelCard key={model._id} model={model}></ModelCard>
        ))}
      </div>
    </div>
  );
};

export default AllModels;
