import { useMediaQuery } from "react-responsive";

export default function useMedia() {
  const isPc = useMediaQuery({
    query: "(min-width:1024px)",
  });
  const isTablet = useMediaQuery({
    query: "(min-width:768px) and (max-width:1023px)",
  });
  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });

  const media = isPc ? "pc" : isTablet ? "tablet" : "mobile";

  return { media };
}
