import { report } from "node:process";
import { useEffect } from "react";
import useCoreWebVitals from "./useCoreWebVitals";

const Analytics: React.FC = () => {
  const cwv = useCoreWebVitals(true);

  useEffect(() => {
    console.log("CWV", cwv);
  }, []);

  return null;
};

export default Analytics;
