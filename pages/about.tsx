import Button from "@/components/common/Button";
import Header from "@/components/layout/Header";
import React from "react";

const About = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen p-8 bg-gray-50">
        {/* Page Header */}
        {/* <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">About Page</h1>
          <div className="flex justify-center gap-4">
            <Link href="/" className="text-blue-600 hover:underline">
              Go to Index
            </Link>
            <Link href="/home" className="text-blue-600 hover:underline">
              Go to Home
            </Link>
          </div>
        </div> */}

        {/* Button Showcase */}
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Button Examples
          </h2>
          <div className="flex flex-col gap-4 items-center">
            <Button shape="rounded-sm" size="small">
              Small Button
            </Button>
            <Button shape="rounded-md" size="medium">
              Medium Button
            </Button>
            <Button shape="rounded-full" size="large">
              Large Button
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
