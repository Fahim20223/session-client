import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { ModelCard } from "../ModelCard/ModelCard";

const MyDownloads = () => {
  const { user } = use(AuthContext);
  const [models, setModels] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://3d-models-server-chi.vercel.app/my-downloads?email=${user.email}`,
      {
        headers: {
          authorization: `Bearer ${user.accessToken}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setLoading(false);
        setModels(data);
      });
  }, [user]);

  if (loading) {
    return <div>Please wait........Loading....</div>;
  }
  return (
    <div>
      <div className="grid grid-cols-3 lg:grid-cols-4 gap-3">
        {models.map((model) => (
          <ModelCard key={model._id} model={model}></ModelCard>
        ))}
      </div>
    </div>
  );
};

export default MyDownloads;
