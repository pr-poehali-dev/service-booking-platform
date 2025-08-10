import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const HeroSection = () => {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Маркетплейс
            <br />
            <span className="text-primary">бронирований</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Найдите и забронируйте услуги в любой сфере бизнеса. 
            Красота, автосервисы, ремонт, спорт, образование и медицина.
          </p>
          
          <div className="max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <Input 
                  placeholder="Поиск услуг, салонов, мастеров..." 
                  className="h-12 text-lg"
                />
              </div>
              <div className="sm:w-48">
                <Select>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Город" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="moscow">Москва</SelectItem>
                    <SelectItem value="spb">Санкт-Петербург</SelectItem>
                    <SelectItem value="ekb">Екатеринбург</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button size="lg" className="h-12 px-8">
                Найти
              </Button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">15000+</div>
            <div className="text-gray-600 font-medium">Поставщиков услуг</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">250K+</div>
            <div className="text-gray-600 font-medium">Довольных клиентов</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">50+</div>
            <div className="text-gray-600 font-medium">Категорий услуг</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">4.8</div>
            <div className="text-gray-600 font-medium">Средний рейтинг</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;