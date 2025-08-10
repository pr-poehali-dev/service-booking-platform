import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('beauty');
  
  const categories = [
    { id: 'beauty', name: 'Красота и здоровье', color: 'bg-pink-100 text-pink-800' },
    { id: 'auto', name: 'Автосервисы', color: 'bg-blue-100 text-blue-800' },
    { id: 'home', name: 'Дом и ремонт', color: 'bg-green-100 text-green-800' },
    { id: 'fitness', name: 'Спорт и фитнес', color: 'bg-orange-100 text-orange-800' },
    { id: 'education', name: 'Образование', color: 'bg-purple-100 text-purple-800' },
    { id: 'health', name: 'Медицина', color: 'bg-red-100 text-red-800' }
  ];

  const services = {
    beauty: [
      {
        id: 1,
        title: "Салон красоты Elite",
        category: "Парикмахерская",
        services: ["Стрижка", "Окрашивание", "Укладка", "Процедуры"],
        rating: 4.8,
        reviews: 234,
        price: "от 1500 ₽",
        location: "Центр, ул. Тверская 12",
        workTime: "09:00 - 21:00",
        image: "bg-gradient-to-br from-pink-400 to-purple-500"
      },
      {
        id: 2,
        title: "Lash Studio Pro",
        category: "Наращивание ресниц",
        services: ["Классика", "2D", "3D", "Снятие", "Коррекция"],
        rating: 4.9,
        reviews: 167,
        price: "от 2200 ₽",
        location: "Арбат, пер. Сивцев 5",
        workTime: "10:00 - 20:00",
        image: "bg-gradient-to-br from-rose-400 to-pink-500"
      },
      {
        id: 3,
        title: "Wellness SPA",
        category: "SPA процедуры",
        services: ["Массаж", "Косметология", "Обертывания", "Пилинг"],
        rating: 4.7,
        reviews: 198,
        price: "от 3000 ₽",
        location: "Сокольники, ул. Русаковская 28",
        workTime: "08:00 - 22:00",
        image: "bg-gradient-to-br from-emerald-400 to-teal-500"
      }
    ],
    auto: [
      {
        id: 4,
        title: "АвтоМастер+",
        category: "Комплексное ТО",
        services: ["Диагностика", "Замена масла", "Шиномонтаж", "Кузовной ремонт"],
        rating: 4.6,
        reviews: 324,
        price: "от 800 ₽",
        location: "МКАД 15км, стр. 2",
        workTime: "08:00 - 20:00",
        image: "bg-gradient-to-br from-blue-500 to-indigo-600"
      },
      {
        id: 5,
        title: "Express Car Wash",
        category: "Автомойка",
        services: ["Мойка кузова", "Химчистка салона", "Полировка", "Детейлинг"],
        rating: 4.5,
        reviews: 156,
        price: "от 500 ₽",
        location: "Варшавское шоссе 42",
        workTime: "07:00 - 23:00",
        image: "bg-gradient-to-br from-cyan-400 to-blue-500"
      }
    ],
    home: [
      {
        id: 6,
        title: "РемонтДом",
        category: "Ремонт квартир",
        services: ["Электрика", "Сантехника", "Отделка", "Дизайн"],
        rating: 4.7,
        reviews: 89,
        price: "от 1200 ₽",
        location: "Выезд по Москве",
        workTime: "09:00 - 18:00",
        image: "bg-gradient-to-br from-amber-400 to-orange-500"
      }
    ],
    fitness: [
      {
        id: 7,
        title: "FitLife Premium",
        category: "Фитнес-клуб",
        services: ["Групповые занятия", "Персональный тренер", "Бассейн", "Сауна"],
        rating: 4.8,
        reviews: 445,
        price: "от 2500 ₽/мес",
        location: "Сокол, ул. Ленинградский пр. 78",
        workTime: "06:00 - 24:00",
        image: "bg-gradient-to-br from-green-400 to-emerald-500"
      }
    ],
    education: [
      {
        id: 8,
        title: "Языковая школа Speak",
        category: "Изучение языков",
        services: ["Английский", "Немецкий", "Французский", "Индивидуальные уроки"],
        rating: 4.9,
        reviews: 267,
        price: "от 1800 ₽/урок",
        location: "Патриаршие пруды, ул. Малая Бронная 23",
        workTime: "09:00 - 21:00",
        image: "bg-gradient-to-br from-violet-400 to-purple-500"
      }
    ],
    health: [
      {
        id: 9,
        title: "Клиника Здоровье+",
        category: "Медицинский центр",
        services: ["Терапевт", "Кардиолог", "УЗИ", "Анализы"],
        rating: 4.6,
        reviews: 578,
        price: "от 1500 ₽",
        location: "Чистые пруды, Мясницкая 42",
        workTime: "08:00 - 20:00",
        image: "bg-gradient-to-br from-red-400 to-pink-500"
      }
    ]
  };

  const getCurrentServices = () => services[selectedCategory] || [];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
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

      {/* Hero Section */}
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

      {/* Categories Section */}
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
                onClick={() => setSelectedCategory(category.id)}
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

      {/* Services Listings */}
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

      {/* Quick Booking */}
      <section id="booking" className="py-20 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Быстрое бронирование</h2>
            <p className="text-xl text-gray-300">Оставьте заявку и мы подберем лучший вариант</p>
          </div>
          
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader className="text-center">
              <CardTitle className="text-white text-2xl">Форма заявки</CardTitle>
              <CardDescription className="text-gray-300">
                Получите персональные предложения в течение 30 минут
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="clientName" className="text-white">Ваше имя</Label>
                  <Input id="clientName" placeholder="Введите имя" className="bg-gray-700 border-gray-600 text-white" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="clientPhone" className="text-white">Телефон</Label>
                  <Input id="clientPhone" placeholder="+7 (999) 123-45-67" className="bg-gray-700 border-gray-600 text-white" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-white">Категория услуги</Label>
                  <Select>
                    <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                      <SelectValue placeholder="Выберите категорию" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map(cat => (
                        <SelectItem key={cat.id} value={cat.id}>{cat.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dateTime" className="text-white">Желаемая дата и время</Label>
                  <Input id="dateTime" type="datetime-local" className="bg-gray-700 border-gray-600 text-white" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="budget" className="text-white">Бюджет</Label>
                <Select>
                  <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                    <SelectValue placeholder="Выберите бюджет" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1000">до 1 000 ₽</SelectItem>
                    <SelectItem value="3000">1 000 - 3 000 ₽</SelectItem>
                    <SelectItem value="5000">3 000 - 5 000 ₽</SelectItem>
                    <SelectItem value="10000">5 000 - 10 000 ₽</SelectItem>
                    <SelectItem value="more">более 10 000 ₽</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <Button className="w-full" size="lg">
                Отправить заявку
              </Button>
              
              <p className="text-sm text-gray-400 text-center">
                Отправляя заявку, вы соглашаетесь с условиями обработки персональных данных
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* For Business */}
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

      {/* Footer */}
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
    </div>
  );
};

export default Index;