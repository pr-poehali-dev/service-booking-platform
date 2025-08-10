import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

interface Category {
  id: string;
  name: string;
  color: string;
}

interface CategoriesSectionProps {
  categories: Category[];
  selectedCategory: string;
  onCategorySelect: (categoryId: string) => void;
}

const CategoriesSection = ({ categories, selectedCategory, onCategorySelect }: CategoriesSectionProps) => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Категории услуг</h2>
          <p className="text-xl text-gray-600">Выберите категорию для поиска подходящих услуг</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
          {categories.map((category) => (
            <Card 
              key={category.id}
              className={`cursor-pointer transition-all hover:shadow-lg ${
                selectedCategory === category.id ? 'ring-2 ring-primary' : ''
              }`}
              onClick={() => onCategorySelect(category.id)}
            >
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 rounded-full ${category.color} mx-auto mb-4 flex items-center justify-center`}>
                  <div className="w-8 h-8 bg-current opacity-20 rounded"></div>
                </div>
                <h3 className="font-semibold text-gray-900">{category.name}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;