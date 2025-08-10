import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg"></div>
              <span className="text-xl font-bold">BookService</span>
            </div>
            <p className="text-gray-400 mb-6">
              Маркетплейс бронирований услуг в любой сфере бизнеса. 
              Удобно, быстро, надежно.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Категории</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Красота и здоровье</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Автосервисы</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Дом и ремонт</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Спорт и фитнес</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Компания</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Для бизнеса</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Поддержка</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 BookService. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;