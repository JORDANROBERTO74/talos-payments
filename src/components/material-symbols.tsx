"use client";

import { useEffect } from "react";

export function MaterialSymbols() {
  useEffect(() => {
    // Add preconnect links
    const preconnect1 = document.createElement("link");
    preconnect1.rel = "preconnect";
    preconnect1.href = "https://fonts.googleapis.com";
    document.head.appendChild(preconnect1);

    const preconnect2 = document.createElement("link");
    preconnect2.rel = "preconnect";
    preconnect2.crossOrigin = "";
    preconnect2.href = "https://fonts.gstatic.com";
    document.head.appendChild(preconnect2);

    // Add Material Symbols stylesheet
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    return () => {
      // Cleanup on unmount
      document.head.removeChild(preconnect1);
      document.head.removeChild(preconnect2);
      document.head.removeChild(link);
    };
  }, []);

  return null;
}
