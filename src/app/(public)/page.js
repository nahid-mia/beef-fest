'use client';
import TipsSection from "@/components/TipsSection";
import { featuredAnimals } from "@/lib/data";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true)
  const [animals, setAnimalData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const data = await featuredAnimals();
      setAnimalData(data);
      setLoading(false);
    }
    fetchData();
  });
  if (loading) {
    return <div className="min-h-[70vh] container mx-auto flex justify-center items-center"><span className="loading loading-ring loading-lg"></span></div>
  }
  return (
    <>
      <TipsSection></TipsSection>
      <div className="w-10/12 mx-auto">
        {animals.slice(0, 4).map((animal) => (
          <div key={animal.id}>
            {animal.name}
          </div>
        ))}
      </div>
    </>
  );
}
