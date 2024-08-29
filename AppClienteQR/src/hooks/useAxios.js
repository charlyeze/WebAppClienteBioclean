import { useState } from "react";
import axios from "axios";

const ROOT_URL = "https://appbiocleancba.com.ar:3001";

const useAxios = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const makeQuery = async ({ url, nBar, idCli }) => {
    try {
      setLoading(true);
      setData(null);

      const config = {
        method: "get",
        url: `${ROOT_URL}/${url}?find={"n_bar":${nBar}, "id_cli": "${idCli}"}`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjoiZGV2ZWxvcCIsInVzZXJJZCI6IjYzNTViZThlMGJlYzkzMDRlZGU1NzMyNSIsImlhdCI6MTcyMjIxNjAxNCwiZXhwIjoxNzUzNzUyMDE0fQ.yf68lMmQFgqqqv_b4jEz-ZfwjkGLzPltnLBx4Rbkl9Q`,
        },
      };

      const result = await axios(config);

      setData(result.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { data, error, loading, makeQuery };
};

export default useAxios;
