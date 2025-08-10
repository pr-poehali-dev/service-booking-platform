import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

interface MarketplaceHeaderProps {
  serviceType: 'booking' | 'order';
  onServiceTypeChange: (type: 'booking' | 'order') => void;
}

const MarketplaceHeader = ({ serviceType, onServiceTypeChange }: MarketplaceHeaderProps) => {
  return (
    <div className="bg-white border-b border-gray-200 sticky top-0 z-50">
      {/* Top Navigation */}
      <div className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14">
            <div className="flex items-center space-x-3">
              <div className="w-7 h-7 bg-primary rounded-lg"></div>
              <span className="text-xl font-bold text-gray-900">ServiceMarket</span>
            </div>
            
            <div className="flex items-center space-x-3">
              <Button variant="ghost" size="sm">Войти</Button>
              <Button size="sm">Стать поставщиком</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Service Type Switcher & Search */}
      <div className="py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-6">
            {/* Service Type Toggle */}
            <div className="flex items-center">
              <div className="bg-gray-100 p-1 rounded-lg flex">
                <button
                  onClick={() => onServiceTypeChange('booking')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    serviceType === 'booking'
                      ? 'bg-white text-primary shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Бронирование
                </button>
                <button
                  onClick={() => onServiceTypeChange('order')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    serviceType === 'order'
                      ? 'bg-white text-primary shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Заказать услугу
                </button>
              </div>
              
              <div className="ml-3">
                <Badge variant="secondary" className="text-xs">
                  {serviceType === 'booking' ? 'Запись к мастеру' : 'Вызов на дом'}
                </Badge>
              </div>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-2xl">
              <div className="flex space-x-3">
                <div className="flex-1">
                  <Input 
                    placeholder={serviceType === 'booking' ? "Найти салон, мастера..." : "Найти услугу на дом..."} 
                    className="h-10"
                  />
                </div>
                <div className="w-40">
                  <Select>
                    <SelectTrigger className="h-10">
                      <SelectValue placeholder="Город" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="moscow">Москва</SelectItem>
                      <SelectItem value="spb">Санкт-Петербург</SelectItem>
                      <SelectItem value="ekb">Екатеринбург</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button className="h-10 px-6">
                  Найти
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketplaceHeader;