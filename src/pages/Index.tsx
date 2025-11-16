import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const tours = [
    {
      title: 'Тур по Майами',
      description: 'Откройте для себя яркую культуру Майами, пляжи Саус-Бич и район Арт-Деко',
      price: 'от $1,200',
      duration: '5 дней',
      image: 'https://cdn.poehali.dev/projects/637ed245-debc-41b2-8342-fbadc963e854/files/b9eb0fed-3e3b-4a4d-9fa4-37362e69bdc1.jpg'
    },
    {
      title: 'Ки-Уэст и Флорида-Кис',
      description: 'Путешествие по самой южной точке США с остановками на живописных островах',
      price: 'от $900',
      duration: '3 дня',
      image: 'https://cdn.poehali.dev/projects/637ed245-debc-41b2-8342-fbadc963e854/files/6a1f3d36-5e9b-4179-872e-831c3ef3361b.jpg'
    },
    {
      title: 'Орландо - парки развлечений',
      description: 'Disney World, Universal Studios и другие знаменитые парки в одном туре',
      price: 'от $1,500',
      duration: '7 дней',
      image: 'https://cdn.poehali.dev/projects/637ed245-debc-41b2-8342-fbadc963e854/files/9d4da7fa-b47b-4a75-b238-53e5e2306e85.jpg'
    }
  ];

  const excursions = [
    {
      icon: 'Waves',
      title: 'Круиз по Эверглейдс',
      description: 'Исследуйте уникальную экосистему с аллигаторами и тропическими птицами'
    },
    {
      icon: 'Building',
      title: 'Экскурсия в космический центр NASA',
      description: 'Посетите центр космических полетов им. Кеннеди на мысе Канаверал'
    },
    {
      icon: 'Ship',
      title: 'Морская рыбалка',
      description: 'Отправьтесь на рыбалку в Мексиканском заливе или Атлантическом океане'
    },
    {
      icon: 'Palmtree',
      title: 'Тропический сад',
      description: 'Прогулка по ботаническим садам с редкими тропическими растениями'
    }
  ];

  const weather = [
    { month: 'Январь-Март', temp: '20-25°C', desc: 'Сухой сезон, идеально для поездок' },
    { month: 'Апрель-Июнь', temp: '26-30°C', desc: 'Теплая погода, начало сезона дождей' },
    { month: 'Июль-Сентябрь', temp: '31-33°C', desc: 'Жаркий сезон, высокая влажность' },
    { month: 'Октябрь-Декабрь', temp: '22-27°C', desc: 'Комфортная температура, меньше туристов' }
  ];

  const attractions = [
    { name: 'Саус-Бич', icon: 'Sunset' },
    { name: 'Эверглейдс', icon: 'Trees' },
    { name: 'Космический центр NASA', icon: 'Rocket' },
    { name: 'Ки-Уэст', icon: 'Anchor' },
    { name: 'Стадион Хард Рок', icon: 'Music' },
    { name: 'Винвуд Уоллс', icon: 'Palette' }
  ];

  const faqs = [
    {
      question: 'Когда лучшее время для посещения Флориды?',
      answer: 'Лучшее время — с ноября по апрель, когда температура комфортная (20-25°C) и меньше дождей. Избегайте июля-сентября из-за жары и сезона ураганов.'
    },
    {
      question: 'Нужна ли виза для посещения Флориды?',
      answer: 'Для граждан России требуется туристическая виза США. Процесс оформления занимает от 2 недель до 2 месяцев. Мы поможем с документами.'
    },
    {
      question: 'Какие парки развлечений стоит посетить?',
      answer: 'В Орландо: Disney World, Universal Studios, SeaWorld. В Тампе: Busch Gardens. Рекомендуем выделить минимум 5-7 дней для полноценного посещения.'
    },
    {
      question: 'Безопасно ли купаться в океане?',
      answer: 'Да, пляжи Флориды безопасны и патрулируются. Следуйте указаниям спасателей, обращайте внимание на флаги (красный = опасно). Лучшие пляжи: Клируотер, Саус-Бич, Санибел.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary">Florida Travel</h1>
            <div className="hidden md:flex gap-8">
              {['Главная', 'Туры', 'Экскурсии', 'Погода', 'Достопримечательности', 'FAQ', 'Контакты'].map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-foreground hover:text-primary transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="главная" className="pt-24 pb-16 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center min-h-[80vh]">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                Откройте для себя<br />
                <span className="text-primary">солнечную Флориду</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Тропические пляжи, захватывающие парки развлечений и уникальная природа ждут вас
              </p>
              <div className="flex gap-4">
                <Button size="lg" onClick={() => scrollToSection('туры')}>
                  Выбрать тур
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('контакты')}>
                  Связаться с нами
                </Button>
              </div>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/637ed245-debc-41b2-8342-fbadc963e854/files/b9eb0fed-3e3b-4a4d-9fa4-37362e69bdc1.jpg"
                alt="Флорида"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tours Section */}
      <section id="туры" className="py-24 px-6 bg-secondary/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Популярные туры</h2>
            <p className="text-xl text-muted-foreground">Выберите идеальное путешествие для вас</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {tours.map((tour, idx) => (
              <Card key={idx} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="h-48 overflow-hidden">
                  <img src={tour.image} alt={tour.title} className="w-full h-full object-cover" />
                </div>
                <CardHeader>
                  <CardTitle>{tour.title}</CardTitle>
                  <CardDescription>{tour.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-2">
                      <Icon name="Clock" size={16} />
                      <span className="text-sm">{tour.duration}</span>
                    </div>
                    <span className="font-bold text-primary">{tour.price}</span>
                  </div>
                  <Button className="w-full">Забронировать</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Excursions Section */}
      <section id="экскурсии" className="py-24 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Экскурсии и активности</h2>
            <p className="text-xl text-muted-foreground">Насыщенная программа для каждого</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {excursions.map((exc, idx) => (
              <Card key={idx} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name={exc.icon as any} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-lg">{exc.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{exc.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Weather Section */}
      <section id="погода" className="py-24 px-6 bg-secondary/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Погода по сезонам</h2>
            <p className="text-xl text-muted-foreground">Планируйте поездку с учетом климата</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {weather.map((w, idx) => (
              <Card key={idx}>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Icon name="Sun" className="text-primary" />
                    <CardTitle className="text-lg">{w.month}</CardTitle>
                  </div>
                  <div className="text-3xl font-bold text-primary">{w.temp}</div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{w.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Attractions Section */}
      <section id="достопримечательности" className="py-24 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Главные достопримечательности</h2>
            <p className="text-xl text-muted-foreground">Что обязательно стоит увидеть</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {attractions.map((attr, idx) => (
              <Card key={idx} className="hover:bg-secondary/20 transition-colors cursor-pointer">
                <CardContent className="flex items-center gap-4 p-6">
                  <Icon name={attr.icon as any} size={24} className="text-primary" />
                  <span className="font-medium">{attr.name}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 px-6 bg-secondary/20">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Часто задаваемые вопросы</h2>
            <p className="text-xl text-muted-foreground">Ответы на популярные вопросы</p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="bg-white rounded-lg px-6 border">
                <AccordionTrigger className="text-left font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact Section */}
      <section id="контакты" className="py-24 px-6">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-muted-foreground">Мы поможем спланировать ваше путешествие</p>
          </div>
          <Card>
            <CardContent className="p-8">
              <form className="space-y-6">
                <div>
                  <label className="block mb-2 font-medium">Ваше имя</label>
                  <Input placeholder="Иван Иванов" />
                </div>
                <div>
                  <label className="block mb-2 font-medium">Email</label>
                  <Input type="email" placeholder="ivan@example.com" />
                </div>
                <div>
                  <label className="block mb-2 font-medium">Телефон</label>
                  <Input type="tel" placeholder="+7 (999) 123-45-67" />
                </div>
                <div>
                  <label className="block mb-2 font-medium">Сообщение</label>
                  <Textarea placeholder="Расскажите о ваших планах на поездку..." rows={5} />
                </div>
                <Button size="lg" className="w-full">
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12 px-6">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Florida Travel</h3>
          <p className="text-background/80 mb-6">Ваш надежный гид по солнечной Флориде</p>
          <div className="flex justify-center gap-6">
            <Icon name="Facebook" className="cursor-pointer hover:text-primary transition-colors" />
            <Icon name="Instagram" className="cursor-pointer hover:text-primary transition-colors" />
            <Icon name="Twitter" className="cursor-pointer hover:text-primary transition-colors" />
            <Icon name="Mail" className="cursor-pointer hover:text-primary transition-colors" />
          </div>
          <div className="mt-8 pt-8 border-t border-background/20 text-background/60">
            © 2024 Florida Travel. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
