import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface Service {
  id: number;
  title: string;
  category: string;
  services: string[];
  rating: number;
  reviews: number;
  price: string;
  location: string;
  workTime: string;
  image: string;
}

interface Category {
  id: string;
  name: string;
  color: string;
}

interface ServicesSectionProps {
  categories: Category[];
  services: Record<string, Service[]>;
  selectedCategory: string;
}

const ServicesSection = ({ categories, services, selectedCategory }: ServicesSectionProps) => {
  const getCurrentServices = () => services[selectedCategory] || [];

  return (
    <section id="services" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            {categories.find(c => c.id === selectedCategory)?.name}
          </h2>
          
          <div className="flex items-center space-x-4">
            <Select>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Сортировка" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rating">По рейтингу</SelectItem>
                <SelectItem value="price">По цене</SelectItem>
                <SelectItem value="reviews">По отзывам</SelectItem>
                <SelectItem value="distance">По расстоянию</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {getCurrentServices().map((service) => (
            <Card key={service.id} className="hover:shadow-lg transition-shadow group">
              <div className={`h-48 ${service.image} rounded-t-lg relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-opacity"></div>
                <div className="absolute top-4 left-4">
                  <Badge className="bg-white text-gray-900">{service.category}</Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-white rounded-full px-3 py-1 flex items-center space-x-1">
                    <span className="text-yellow-500">★</span>
                    <span className="font-semibold text-gray-900">{service.rating}</span>
                  </div>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span>{service.location}</span>
                  <span>•</span>
                  <span>{service.workTime}</span>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {service.services.slice(0, 3).map((serviceItem, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {serviceItem}
                    </Badge>
                  ))}
                  {service.services.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{service.services.length - 3} еще
                    </Badge>
                  )}
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-lg text-primary">{service.price}</div>
                    <div className="text-sm text-gray-500">{service.reviews} отзывов</div>
                  </div>
                  <Button className="px-6">
                    Забронировать
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;