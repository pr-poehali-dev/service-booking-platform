import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

interface Category {
  id: string;
  name: string;
  color: string;
}

interface CatalogFiltersProps {
  categories: Category[];
  selectedCategory: string;
  onCategorySelect: (categoryId: string) => void;
  priceRange: number[];
  onPriceRangeChange: (range: number[]) => void;
}

const CatalogFilters = ({ 
  categories, 
  selectedCategory, 
  onCategorySelect,
  priceRange,
  onPriceRangeChange
}: CatalogFiltersProps) => {
  return (
    <div className="space-y-6">
      {/* Category Filter */}
      <div>
        <h3 className="font-semibold text-gray-900 mb-4">Категории</h3>
        <div className="grid grid-cols-2 lg:grid-cols-1 gap-3">
          {categories.map((category) => (
            <Card 
              key={category.id}
              className={`cursor-pointer transition-all hover:shadow-md ${
                selectedCategory === category.id ? 'ring-2 ring-primary bg-primary/5' : ''
              }`}
              onClick={() => onCategorySelect(category.id)}
            >
              <CardContent className="p-3">
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 rounded-full ${category.color} flex items-center justify-center flex-shrink-0`}>
                    <div className="w-5 h-5 bg-current opacity-30 rounded"></div>
                  </div>
                  <span className="text-sm font-medium text-gray-900">{category.name}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Price Filter */}
      <div>
        <h3 className="font-semibold text-gray-900 mb-4">Цена</h3>
        <div className="space-y-4">
          <div>
            <Slider
              value={priceRange}
              onValueChange={onPriceRangeChange}
              max={10000}
              min={0}
              step={500}
              className="w-full"
            />
          </div>
          <div className="flex items-center justify-between text-sm text-gray-600">
            <span>{priceRange[0]} ₽</span>
            <span>{priceRange[1]} ₽</span>
          </div>
        </div>
      </div>

      {/* Rating Filter */}
      <div>
        <h3 className="font-semibold text-gray-900 mb-4">Рейтинг</h3>
        <div className="space-y-2">
          {[4.5, 4.0, 3.5, 3.0].map((rating) => (
            <label key={rating} className="flex items-center space-x-2 cursor-pointer">
              <input type="checkbox" className="rounded border-gray-300" />
              <span className="text-sm text-gray-700">от {rating}</span>
              <div className="flex">
                {Array.from({ length: 5 }, (_, i) => (
                  <span key={i} className={`text-xs ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>★</span>
                ))}
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* Working Hours */}
      <div>
        <h3 className="font-semibold text-gray-900 mb-4">Время работы</h3>
        <div className="space-y-2">
          <label className="flex items-center space-x-2 cursor-pointer">
            <input type="checkbox" className="rounded border-gray-300" />
            <span className="text-sm text-gray-700">Работает сейчас</span>
          </label>
          <label className="flex items-center space-x-2 cursor-pointer">
            <input type="checkbox" className="rounded border-gray-300" />
            <span className="text-sm text-gray-700">24/7</span>
          </label>
          <label className="flex items-center space-x-2 cursor-pointer">
            <input type="checkbox" className="rounded border-gray-300" />
            <span className="text-sm text-gray-700">Выходные</span>
          </label>
        </div>
      </div>

      {/* Reset Filters */}
      <Button variant="outline" className="w-full">
        Сбросить фильтры
      </Button>
    </div>
  );
};

export default CatalogFilters;