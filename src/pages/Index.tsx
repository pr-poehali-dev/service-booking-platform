import React, { useState } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CategoriesSection from '@/components/CategoriesSection';
import ServicesSection from '@/components/ServicesSection';
import BookingSection from '@/components/BookingSection';
import BusinessSection from '@/components/BusinessSection';
import Footer from '@/components/Footer';

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

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <HeroSection />
      <CategoriesSection 
        categories={categories}
        selectedCategory={selectedCategory}
        onCategorySelect={handleCategorySelect}
      />
      <ServicesSection 
        categories={categories}
        services={services}
        selectedCategory={selectedCategory}
      />
      <BookingSection categories={categories} />
      <BusinessSection />
      <Footer />
    </div>
  );
};

export default Index;