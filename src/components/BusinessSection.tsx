import React from 'react';
import { Button } from "@/components/ui/button";

const BusinessSection = () => {
  return (
    <section id="business" className="py-20 px-4 bg-primary text-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Для бизнеса</h2>
        <p className="text-xl mb-12 max-w-3xl mx-auto opacity-90">
          Зарегистрируйте свой бизнес на платформе и получите доступ к тысячам клиентов. 
          Управляйте записями, отзывами и аналитикой в одном месте.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full mx-auto mb-4 flex items-center justify-center">
              <div className="w-8 h-8 bg-white rounded"></div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Больше клиентов</h3>
            <p className="opacity-80">Привлекайте новых клиентов через нашу платформу</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full mx-auto mb-4 flex items-center justify-center">
              <div className="w-8 h-8 bg-white rounded"></div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Удобное управление</h3>
            <p className="opacity-80">Управляйте расписанием и бронированиями онлайн</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full mx-auto mb-4 flex items-center justify-center">
              <div className="w-8 h-8 bg-white rounded"></div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Аналитика</h3>
            <p className="opacity-80">Отслеживайте статистику и рост бизнеса</p>
          </div>
        </div>
        
        <Button variant="secondary" size="lg" className="px-8">
          Зарегистрировать бизнес
        </Button>
      </div>
    </section>
  );
};

export default BusinessSection;