import React from 'react';
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-primary rounded-lg"></div>
            <span className="text-2xl font-bold text-gray-900">BookService</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-600 hover:text-gray-900 font-medium">Услуги</a>
            <a href="#providers" className="text-gray-600 hover:text-gray-900 font-medium">Поставщики</a>
            <a href="#booking" className="text-gray-600 hover:text-gray-900 font-medium">Бронирование</a>
            <a href="#business" className="text-gray-600 hover:text-gray-900 font-medium">Для бизнеса</a>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost">Войти</Button>
            <Button>Регистрация</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;