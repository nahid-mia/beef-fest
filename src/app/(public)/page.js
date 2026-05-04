'use client';
import AboutSection from "@/components/AboutSection";
import AnimalCard from "@/components/AnimalCard";
import TipsSection from "@/components/TipsSection";
import { featuredAnimals } from "@/lib/data";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";

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
      <h2 className="text-center mt-10 text-2xl font-semibold bg-linear-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">Featured Animals</h2>
      <div className="w-8/12 mx-auto grid grid-cols-1 sm:grid-cols-2 gap-10 my-10">
        {animals.slice(0, 4).map((animal) => (
          <AnimalCard key={animal.id} animal={animal}></AnimalCard>
        ))}
      </div>
      <div className="flex items-center justify-center mb-10">
        <Link href={'/animals'}><button className="btn btn-success">Browse ALL <FaArrowRight></FaArrowRight></button></Link>
      </div>
      <AboutSection></AboutSection>
    </>
  );
}