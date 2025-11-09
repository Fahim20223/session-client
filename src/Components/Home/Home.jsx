import React from "react";
import { useLoaderData } from "react-router";
import { ModelCard } from "../ModelCard/ModelCard";

const Home = () => {
  const data = useLoaderData();

  return (
    <div>
      Home
      <div className="grid grid-cols-3 lg:grid-cols-4 gap-3 max-w-9/12 mx-auto">
        {data.map((model) => (
          <ModelCard model={model}></ModelCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
