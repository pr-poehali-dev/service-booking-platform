import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface Category {
  id: string;
  name: string;
  color: string;
}

interface BookingSectionProps {
  categories: Category[];
}

const BookingSection = ({ categories }: BookingSectionProps) => {
  return (
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
  );
};

export default BookingSection;