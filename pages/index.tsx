import React from "react";
import Card from "../components/common/Card";
import Button from "../components/common/Button";

export default function Home() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">ALX Listing App</h1>
      
      {/* Example property card */}
      <Card
        title="Sample Property"
        description="This is a placeholder property description."
        imageUrl="/assets/placeholder.png"
      />

      {/* Example button */}
      <div className="mt-4">
        <Button label="Book Now" onClick={() => alert("Booking initiated!")} />
      </div>
    </div>
  );
}
