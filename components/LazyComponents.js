import dynamic from "next/dynamic";
import { Suspense } from "react";

// Optimized loading components
const LoadingSpinner = () => (
  <div className="animate-pulse bg-gray-200 h-64 rounded-lg flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin"></div>
  </div>
);

const LoadingCarousel = () => (
  <div className="animate-pulse bg-gray-200 h-96 rounded-lg flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin"></div>
  </div>
);

// Lazy load with intersection observer
export const LazySection1 = dynamic(
  () => import("@/components/aboutComponents/Section1"),
  {
    loading: () => <LoadingCarousel />,
    ssr: false,
  }
);

export const LazyBookDamiSlider = dynamic(
  () => import("@/components/bookDamiComponents/BookDamiSlider"),
  {
    loading: () => <LoadingCarousel />,
    ssr: false,
  }
);

export const LazyReviews = dynamic(() => import("@/components/Reviews"), {
  loading: () => <LoadingSpinner />,
  ssr: false,
});

// Wrapper with intersection observer
export const LazyWrapper = ({ children, threshold = 0.1 }) => {
  return <Suspense fallback={<LoadingSpinner />}>{children}</Suspense>;
};

export default {
  LazySection1,
  LazyBookDamiSlider,
  LazyReviews,
  LazyWrapper,
};
