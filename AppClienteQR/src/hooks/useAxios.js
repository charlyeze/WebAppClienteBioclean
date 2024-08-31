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
        url: `${ROOT_URL}/${url}?isNotAuth=${true}&find={"n_bar":${nBar}, "id_cli": "${idCli}"}`,
        headers: {
          "Content-Type": "application/json",
        },
      };
      console.log('config', config)

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
