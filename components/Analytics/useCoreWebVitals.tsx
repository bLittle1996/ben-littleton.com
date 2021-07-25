import { useEffect, useState } from "react";
import { getCLS, getFCP, getFID, getLCP, getTTFB, Metric } from "web-vitals";
import { cancellable } from "../../utils";
import { isBoolean } from "../../utils/guards";

type CWVName = "CLS" | "FCP" | "FID" | "LCP" | "TTFB";

const useCoreWebVitals = (reportAllChanges = false) => {
  const [cwv, setCWV] = useState<Record<CWVName, number>>({
    CLS: NOT_MEASURED,
    FCP: NOT_MEASURED,
    FID: NOT_MEASURED,
    LCP: NOT_MEASURED,
    TTFB: NOT_MEASURED,
  });

  const handleMetric = (metric: Metric) => {
    setCWV((cwv) => ({ ...cwv, [metric.name]: metric.value }));
  };

  useEffect(() => {
    const [cancellableReporter, stopUsingReporter] = cancellable(handleMetric);

    getLCP(cancellableReporter, reportAllChanges);
    getFID(cancellableReporter, reportAllChanges);
    getCLS(cancellableReporter, reportAllChanges);
    getFCP(cancellableReporter, reportAllChanges);
    getTTFB(cancellableReporter);

    return () => {
      stopUsingReporter();
    };
  }, [reportAllChanges]);

  return cwv;
};

export const NOT_MEASURED = -1 as const;

export default useCoreWebVitals;
