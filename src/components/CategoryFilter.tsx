
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface CategoryFilterProps {
  categories: string[];
  onFilterChange: (category: string) => void;
  activeCategory: string;
}

export default function CategoryFilter({
  categories,
  onFilterChange,
  activeCategory,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      <Button
        variant={activeCategory === "all" ? "default" : "outline"}
        className={activeCategory === "all" ? "bg-bali-green hover:bg-bali-green-dark" : ""}
        onClick={() => onFilterChange("all")}
      >
        All Events
      </Button>
      {categories.map((category) => (
        <Button
          key={category}
          variant={activeCategory === category ? "default" : "outline"}
          className={activeCategory === category ? "bg-bali-green hover:bg-bali-green-dark" : ""}
          onClick={() => onFilterChange(category)}
        >
          {category}
        </Button>
      ))}
    </div>
  );
}
