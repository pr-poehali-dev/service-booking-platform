import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Progress } from "@/components/ui/progress";

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

interface Category {
  id: string;
  name: string;
  color: string;
}

interface StepByStepRegistrationProps {
  selectedService?: Service;
  categories: Category[];
  serviceType: 'booking' | 'order';
  onClose: () => void;
}

const StepByStepRegistration = ({ 
  selectedService, 
  categories, 
  serviceType, 
  onClose 
}: StepByStepRegistrationProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    service: selectedService?.title || '',
    category: selectedService?.category || '',
    specificService: '',
    date: '',
    time: '',
    budget: '',
    description: '',
    name: '',
    phone: '',
    email: '',
    address: ''
  });

  const totalSteps = serviceType === 'booking' ? 4 : 5;
  const progress = (currentStep / totalSteps) * 100;

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    console.log('Форма отправлена:', formData);
    onClose();
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                {serviceType === 'booking' ? 'Выберите услугу' : 'Что нужно сделать?'}
              </h3>
              <p className="text-gray-600">
                {serviceType === 'booking' 
                  ? 'На какую процедуру хотите записаться?' 
                  : 'Опишите какая услуга вам нужна'
                }
              </p>
            </div>

            {selectedService ? (
              <Card className="border-primary bg-primary/5">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-4">
                    <div className={`w-16 h-16 ${selectedService.image} rounded-lg`}></div>
                    <div>
                      <h4 className="font-semibold">{selectedService.title}</h4>
                      <p className="text-sm text-gray-600">{selectedService.category}</p>
                      <Badge variant="secondary" className="mt-1">
                        {selectedService.price}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-4">
                <div>
                  <Label>Категория услуги</Label>
                  <Select value={formData.category} onValueChange={(value) => setFormData({...formData, category: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите категорию" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map(cat => (
                        <SelectItem key={cat.id} value={cat.name}>{cat.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}

            <div>
              <Label>Конкретная услуга</Label>
              <Select value={formData.specificService} onValueChange={(value) => setFormData({...formData, specificService: value})}>
                <SelectTrigger>
                  <SelectValue placeholder={serviceType === 'booking' ? "Выберите процедуру" : "Выберите услугу"} />
                </SelectTrigger>
                <SelectContent>
                  {selectedService?.services.map(service => (
                    <SelectItem key={service} value={service}>{service}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">Когда удобно?</h3>
              <p className="text-gray-600">Выберите дату и время</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label>Дата</Label>
                <Input 
                  type="date" 
                  value={formData.date}
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                />
              </div>
              <div>
                <Label>Время</Label>
                <Select value={formData.time} onValueChange={(value) => setFormData({...formData, time: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите время" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="morning">Утром (9:00-12:00)</SelectItem>
                    <SelectItem value="day">Днем (12:00-17:00)</SelectItem>
                    <SelectItem value="evening">Вечером (17:00-21:00)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label>Бюджет</Label>
              <RadioGroup value={formData.budget} onValueChange={(value) => setFormData({...formData, budget: value})}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="1000" id="budget1" />
                  <Label htmlFor="budget1">до 1 000 ₽</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="3000" id="budget2" />
                  <Label htmlFor="budget2">1 000 - 3 000 ₽</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="5000" id="budget3" />
                  <Label htmlFor="budget3">3 000 - 5 000 ₽</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="more" id="budget4" />
                  <Label htmlFor="budget4">более 5 000 ₽</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">Дополнительно</h3>
              <p className="text-gray-600">Опишите детали и пожелания</p>
            </div>

            <div>
              <Label>Комментарий к заказу</Label>
              <Textarea 
                placeholder={serviceType === 'booking' 
                  ? "Опишите пожелания к процедуре..." 
                  : "Опишите что именно нужно сделать..."
                }
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                rows={4}
              />
            </div>

            {serviceType === 'order' && (
              <div>
                <Label>Адрес выезда</Label>
                <Input 
                  placeholder="Улица, дом, квартира"
                  value={formData.address}
                  onChange={(e) => setFormData({...formData, address: e.target.value})}
                />
              </div>
            )}
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">Ваши контакты</h3>
              <p className="text-gray-600">Как с вами связаться?</p>
            </div>

            <div className="space-y-4">
              <div>
                <Label>Имя</Label>
                <Input 
                  placeholder="Введите ваше имя"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div>
                <Label>Телефон</Label>
                <Input 
                  placeholder="+7 (999) 123-45-67"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
              <div>
                <Label>Email (необязательно)</Label>
                <Input 
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-green-600">✓</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">Готово!</h3>
              <p className="text-gray-600">
                {serviceType === 'booking' 
                  ? 'Ваша запись оформлена. Мастер свяжется с вами в ближайшее время.'
                  : 'Ваш заказ принят. Исполнитель свяжется с вами в течение 30 минут.'
                }
              </p>
            </div>

            <Card className="bg-gray-50">
              <CardContent className="p-4">
                <h4 className="font-semibold mb-3">Детали заявки:</h4>
                <div className="space-y-2 text-sm">
                  <div><span className="text-gray-600">Услуга:</span> {formData.specificService}</div>
                  <div><span className="text-gray-600">Дата:</span> {formData.date}</div>
                  <div><span className="text-gray-600">Время:</span> {formData.time}</div>
                  <div><span className="text-gray-600">Бюджет:</span> {formData.budget}</div>
                  {serviceType === 'order' && (
                    <div><span className="text-gray-600">Адрес:</span> {formData.address}</div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <Card className="w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto">
        <CardHeader className="text-center pb-2">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-500">
              Шаг {currentStep} из {totalSteps}
            </div>
            <Button variant="ghost" size="sm" onClick={onClose}>
              ×
            </Button>
          </div>
          <Progress value={progress} className="w-full mb-4" />
          <CardTitle className="text-lg">
            {serviceType === 'booking' ? 'Запись к мастеру' : 'Заказ услуги'}
          </CardTitle>
        </CardHeader>

        <CardContent className="pb-6">
          {renderStep()}
          
          <div className="flex justify-between mt-8">
            <Button 
              variant="outline" 
              onClick={handlePrev}
              disabled={currentStep === 1}
            >
              Назад
            </Button>
            
            {currentStep === totalSteps ? (
              <Button onClick={handleSubmit} className="px-8">
                Завершить
              </Button>
            ) : (
              <Button onClick={handleNext}>
                Далее
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StepByStepRegistration;