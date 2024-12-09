// import React from "react";

// const SplineElement = () => {
//     return (
        
    // <div className="w-full h-full absolute -bottom-1/2 md:bottom-0 -right-1/4">
    //   <iframe
    //     src="https://my.spline.design/untitled-439e9a6393aea56123d277a4e0d83059/"
    //     frameBorder="0"
    //     width="100%"
    //     height="100%"
    //     style={{ border: 'none' }}
    //     title="Spline 3D Scene"
    //   ></iframe>
    // </div>

    
    
    // );
    // }
    // export default SplineElement;


// import Spline from '@splinetool/react-spline';

// export default function SplineElement() {
//   return (
//     <div className="w-full h-full absolute -bottom-1/2 md:bottom-0 -right-1/4">

//         <Spline  scene="https://prod.spline.design/hb0QtAjyTpSxVSpn/scene.splinecode" />
//     </div>
//   );
// }

// import React, { useState, useEffect, useRef } from 'react';
// import Spline from '@splinetool/react-spline';

// export default function SplineElement() {
//   const [isVisible, setIsVisible] = useState(true);  // State to track visibility
//   const splineRef = useRef(null);  // Ref for the container element

//   useEffect(() => {
//     // Set up the intersection observer
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         // Check if the element is in view
//         setIsVisible(entry.isIntersecting);
//       },
//       {
//         threshold: 0.1, // Trigger when at least 10% of the element is in view
//       }
//     );

//     // Start observing the element
//     if (splineRef.current) {
//       observer.observe(splineRef.current);
//     }

//     // Clean up observer on component unmount
//     return () => {
//       if (splineRef.current) {
//         observer.unobserve(splineRef.current);
//       }
//     };
//   }, []);

//   return (
//     <div
//       ref={splineRef}
//       className="w-full h-full absolute -bottom-1/2 md:bottom-0 -right-1/4"
//     >
//       {isVisible && (
//         <Spline scene="https://prod.spline.design/hb0QtAjyTpSxVSpn/scene.splinecode" />
//       )}
//     </div>
//   );
// }



import React, { useState, useEffect, useRef, Suspense } from 'react';
import ErrorBoundary from "./ErrorBoundary";

const LazySpline = React.lazy(() => import("@splinetool/react-spline"));

export default function SplineElement() {
    const [isVisible, setIsVisible] = useState(false);
    const [hasLoaded, setHasLoaded] = useState(false);
    const splineRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    if (!hasLoaded) {
                        setIsVisible(true);
                        setHasLoaded(true);
                    } else {
                        setIsVisible(true);
                    }
                } else {
                    setIsVisible(false);
                }
            },
            {
                threshold: 0.1, // Trigger when at least 10% of the element is in view
            }
        );

        if (splineRef.current) {
            observer.observe(splineRef.current);
        }

        return () => {
            if (splineRef.current) {
                observer.unobserve(splineRef.current);
            }
        };
    }, [hasLoaded]);

    return (
        <div
            ref={splineRef}
            className="w-full h-full absolute -bottom-1/2 md:bottom-0 -right-1/4"
        >
            {/* Only render LazySpline when visible */}
            {isVisible && (
                <Suspense
                    fallback={
                        <div className="bg-slate-950 md:translate-x-[130%] w-fit text-white rounded-2xl p-4 h-full text-wrap content-center animate-pulse">
                            Uh oh, Please wait... Maybe the servers are
                            sleeping!!!
                        </div>
                    }
                >
                    <ErrorBoundary>
                        <LazySpline scene="https://prod.spline.design/hb0QtAjyTpSxVSpn/scene.splinecode" />
                    </ErrorBoundary>
                </Suspense>
            )}
        </div>
    );
}


