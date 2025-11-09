import React, { useState } from "react";
import { useLoaderData } from "react-router";
import { ModelCard } from "../ModelCard/ModelCard";

const AllModels = () => {
  const data = useLoaderData();
  console.log(data);

  const [models, setModels] = useState(data);

  const [loading, setLoading] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    const search_text = e.target.search.value;
    console.log(search_text);
    setLoading(true);
    fetch(
      `https://3d-models-server-chi.vercel.app/search?search=${search_text}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setModels(data);
        setLoading(false);
      });
  };

  return (
    <div className="max-w-8/12 mx-auto">
      <h2 className="text-center font-bold text-2xl p-5">All-Models</h2>

      <form
        onSubmit={handleSearch}
        className=" mb-10 flex justify-center gap-2"
      >
        <label className="input rounded-full mb-10">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input name="search" type="search" placeholder="Search" />
        </label>
        <button className="btn btn-secondary rounded-full">
          {loading ? "Searching..." : "Search"}
        </button>
      </form>

      <div className="grid grid-cols-3 lg:grid-cols-4 gap-3">
        {models.map((model) => (
          <ModelCard key={model._id} model={model}></ModelCard>
        ))}
      </div>
    </div>
  );
};

export default AllModels;
