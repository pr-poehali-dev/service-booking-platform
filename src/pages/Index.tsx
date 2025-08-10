import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from '@/components/ui/icon';

const Index = () => {
  const services = [
    {
      id: 1,
      title: "Сантехнические работы",
      description: "Установка, ремонт сантехники любой сложности",
      price: "от 800 ₽",
      rating: 4.9,
      image: "🔧"
    },
    {
      id: 2,
      title: "Электромонтажные работы",
      description: "Проводка, розетки, выключатели, освещение",
      price: "от 500 ₽",
      rating: 4.8,
      image: "⚡"
    },
    {
      id: 3,
      title: "Уборка квартир",
      description: "Генеральная и поддерживающая уборка",
      price: "от 1200 ₽",
      rating: 4.9,
      image: "🧹"
    },
    {
      id: 4,
      title: "Ремонт техники",
      description: "Стиральные машины, холодильники, плиты",
      price: "от 900 ₽",
      rating: 4.7,
      image: "🔨"
    }
  ];

  const masters = [
    {
      id: 1,
      name: "Александр Петров",
      specialty: "Сантехник",
      experience: "8 лет",
      rating: 4.9,
      reviews: 247,
      image: "👨‍🔧"
    },
    {
      id: 2,
      name: "Елена Козлова",
      specialty: "Уборщица",
      experience: "5 лет",
      rating: 4.8,
      reviews: 189,
      image: "👩‍🏠"
    },
    {
      id: 3,
      name: "Дмитрий Волков",
      specialty: "Электрик",
      experience: "12 лет",
      rating: 4.9,
      reviews: 324,
      image: "👨‍🔬"
    }
  ];

  const faqItems = [
    {
      question: "Как быстро мастер приедет?",
      answer: "В большинстве случаев мастер может приехать в течение 2-4 часов после оформления заявки. Для срочных вызовов — в течение часа."
    },
    {
      question: "Гарантия на выполненные работы?",
      answer: "Мы предоставляем гарантию от 3 до 12 месяцев в зависимости от типа работ. Все мастера застрахованы."
    },
    {
      question: "Можно ли вызвать мастера на выходные?",
      answer: "Да, наши мастера работают 7 дней в неделю, включая праздничные дни. Стоимость услуг в выходные может быть увеличена на 20%."
    },
    {
      question: "Как производится оплата?",
      answer: "Оплата производится после выполнения работ наличными мастеру или по безналичному расчету через приложение."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="text-2xl">🏠</div>
              <span className="text-xl font-bold text-primary">Мастер на дом</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-700 hover:text-primary transition-colors">Услуги</a>
              <a href="#masters" className="text-gray-700 hover:text-primary transition-colors">Мастера</a>
              <a href="#booking" className="text-gray-700 hover:text-primary transition-colors">Записаться</a>
              <a href="#faq" className="text-gray-700 hover:text-primary transition-colors">FAQ</a>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Icon name="User" size={18} />
                Войти
              </Button>
              <Button size="sm">Стать мастером</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Найди мастера
              <br />
              <span className="text-primary">за 2 минуты</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Проверенные специалисты для ремонта и обслуживания дома. 
              Быстро, качественно, с гарантией.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <Button size="lg" className="w-full sm:w-auto px-8">
                <Icon name="Search" size={20} className="mr-2" />
                Найти мастера
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto px-8">
                <Icon name="Play" size={20} className="mr-2" />
                Как это работает
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 animate-slide-up">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">10k+</div>
              <div className="text-gray-600">Довольных клиентов</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">500+</div>
              <div className="text-gray-600">Проверенных мастеров</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">4.9</div>
              <div className="text-gray-600">Средний рейтинг</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">24/7</div>
              <div className="text-gray-600">Поддержка</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Популярные услуги
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Широкий спектр домашних услуг от профессиональных мастеров
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Card key={service.id} className="hover:shadow-lg transition-shadow group cursor-pointer">
                <CardHeader className="text-center">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                    {service.image}
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-primary">{service.price}</span>
                    <div className="flex items-center space-x-1">
                      <Icon name="Star" size={16} className="text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600">{service.rating}</span>
                    </div>
                  </div>
                  <Button className="w-full mt-4" variant="outline">
                    Заказать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Masters Section */}
      <section id="masters" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Лучшие мастера
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Профессионалы с высокими рейтингами и множественными отзывами
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {masters.map((master) => (
              <Card key={master.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="text-6xl mb-4">{master.image}</div>
                  <CardTitle className="text-xl">{master.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">
                    {master.specialty}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center space-y-3">
                  <div className="flex justify-center items-center space-x-4">
                    <Badge variant="secondary">
                      Опыт {master.experience}
                    </Badge>
                  </div>
                  
                  <div className="flex items-center justify-center space-x-2">
                    <div className="flex items-center space-x-1">
                      <Icon name="Star" size={16} className="text-yellow-400 fill-current" />
                      <span className="font-semibold">{master.rating}</span>
                    </div>
                    <span className="text-gray-600">({master.reviews} отзывов)</span>
                  </div>
                  
                  <Button className="w-full">
                    <Icon name="Calendar" size={18} className="mr-2" />
                    Записаться
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section id="booking" className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Быстрая запись
            </h2>
            <p className="text-xl text-gray-600">
              Оставьте заявку и мы найдем подходящего мастера
            </p>
          </div>
          
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-center">Форма заявки</CardTitle>
              <CardDescription className="text-center">
                Заполните форму и получите звонок в течение 15 минут
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Ваше имя</Label>
                  <Input id="name" placeholder="Введите имя" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Телефон</Label>
                  <Input id="phone" placeholder="+7 (999) 123-45-67" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="service">Тип услуги</Label>
                <Input id="service" placeholder="Например: сантехника, электрика..." />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="address">Адрес</Label>
                <Input id="address" placeholder="Улица, дом, квартира" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="description">Описание проблемы</Label>
                <Textarea 
                  id="description" 
                  placeholder="Опишите что нужно сделать..."
                  rows={4}
                />
              </div>
              
              <Button className="w-full" size="lg">
                <Icon name="Send" size={20} className="mr-2" />
                Отправить заявку
              </Button>
              
              <p className="text-sm text-gray-500 text-center">
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Частые вопросы
            </h2>
            <p className="text-xl text-gray-600">
              Ответы на самые популярные вопросы клиентов
            </p>
          </div>
          
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-primary text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Есть вопросы? Мы на связи!
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center space-y-2">
              <Icon name="Phone" size={32} />
              <h3 className="text-xl font-semibold">Телефон</h3>
              <p className="text-blue-100">+7 (800) 123-45-67</p>
            </div>
            
            <div className="flex flex-col items-center space-y-2">
              <Icon name="Mail" size={32} />
              <h3 className="text-xl font-semibold">Email</h3>
              <p className="text-blue-100">info@master-na-dom.ru</p>
            </div>
            
            <div className="flex flex-col items-center space-y-2">
              <Icon name="Clock" size={32} />
              <h3 className="text-xl font-semibold">Режим работы</h3>
              <p className="text-blue-100">Ежедневно 08:00 - 22:00</p>
            </div>
          </div>
          
          <Button variant="secondary" size="lg">
            <Icon name="MessageCircle" size={20} className="mr-2" />
            Написать в поддержку
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="text-2xl">🏠</div>
                <span className="text-xl font-bold">Мастер на дом</span>
              </div>
              <p className="text-gray-400 mb-4">
                Профессиональные услуги мастеров для вашего дома. 
                Быстро, качественно, надежно.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm">
                  <Icon name="Facebook" size={20} />
                </Button>
                <Button variant="ghost" size="sm">
                  <Icon name="Twitter" size={20} />
                </Button>
                <Button variant="ghost" size="sm">
                  <Icon name="Instagram" size={20} />
                </Button>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Услуги</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Сантехника</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Электрика</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Уборка</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Ремонт техники</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Информация</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Как это работает</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Стать мастером</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Мастер на дом. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;