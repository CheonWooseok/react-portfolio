import { useEffect, useState } from "react";

export default function useFetch(func) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(() => {
    setLoading(true);
    func().then((res) => {
      console.log(res);
      setData(res);
      setLoading(false);
    });

    // let asyncData = func();
  }, [func]);

  return { data, loading };
}
