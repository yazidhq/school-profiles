import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const usePath = () => {
  const location = useLocation();
  const [url, setUrl] = useState(null);
  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);

  return [url];
};

export default usePath;
