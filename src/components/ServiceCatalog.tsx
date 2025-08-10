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

interface ServiceCatalogProps {
  services: Service[];
  serviceType: 'booking' | 'order';
  onServiceSelect: (service: Service) => void;
}

const ServiceCatalog = ({ services, serviceType, onServiceSelect }: ServiceCatalogProps) => {
  return (
    <div className="space-y-4">
      {/* Toolbar */}
      <div className="flex justify-between items-center">
        <div className="text-sm text-gray-600">
          Найдено {services.length} предложений
        </div>
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
          
          <div className="flex border rounded-lg">
            <Button variant="ghost" size="sm" className="rounded-r-none">
              Список
            </Button>
            <Button variant="ghost" size="sm" className="rounded-l-none border-l">
              Карта
            </Button>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {services.map((service) => (
          <Card key={service.id} className="hover:shadow-lg transition-shadow group cursor-pointer">
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
              {serviceType === 'order' && (
                <div className="absolute bottom-4 left-4">
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    Выезд на дом
                  </Badge>
                </div>
              )}
            </div>
            
            <CardHeader className="pb-3">
              <CardTitle className="text-xl">{service.title}</CardTitle>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>{service.location}</span>
                <span>{service.workTime}</span>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {service.services.slice(0, 3).map((serviceItem, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
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
                <Button 
                  onClick={() => onServiceSelect(service)}
                  className="px-6"
                >
                  {serviceType === 'booking' ? 'Записаться' : 'Заказать'}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center pt-8">
        <Button variant="outline" size="lg">
          Показать еще
        </Button>
      </div>
    </div>
  );
};

export default ServiceCatalog;