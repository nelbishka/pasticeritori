import { useEffect } from "react";

export default function GoogleReviews() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section className="py-16 bg-[#F5EBDD] overflow-hidden">
        <h2 className="text-3xl font-bold mb-12">What People Say</h2>
      <div className="max-w-5xl mx-auto px-4 text-center">
        <div className="overflow-x-hidden">
          <div
            className="elfsight-app-0c768fa2-47ab-408e-82cb-a97fe9eab75b"
            data-elfsight-app-lazy
          ></div>
        </div>
        <p className="text-lg max-w-xl m-auto mb-6">We’d love to hear about your experience!</p>
      </div>
    </section>
  );
}
