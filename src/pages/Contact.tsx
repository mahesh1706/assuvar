
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, MapPin, Clock, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import { toast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const whatsappMessage = `Hi! I'm ${formData.name}. 
Email: ${formData.email}
Phone: ${formData.phone}
Subject: ${formData.subject}
Message: ${formData.message}`;
    
    const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
    
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    toast({
      title: "Message sent!",
      description: "We'll get back to you soon.",
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const faqs = [
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary depending on complexity. A simple website typically takes 2-4 weeks, while complex applications can take 2-6 months."
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes, we offer maintenance packages and ongoing support to ensure your website remains secure and up-to-date."
    },
    {
      question: "What's included in your SEO service?",
      answer: "Our SEO service includes keyword research, on-page optimization, technical SEO, content strategy, and monthly reporting."
    },
    {
      question: "Can you work with my existing brand?",
      answer: "Absolutely! We can work within your existing brand guidelines or help you develop a new brand identity."
    },
    {
      question: "What technologies do you use?",
      answer: "We use modern technologies including React, Node.js, Python, and cloud platforms like AWS to build scalable solutions."
    }
  ];

  return (
    <div className="font-nunito">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">Get In Touch</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to start your next project? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2 animate-slide-in-left">
              <Card className="shadow-lg">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-black mb-6">Send us a message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                        <Input
                          type="text"
                          name="name"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="transition-all duration-300 focus:ring-2 focus:ring-black"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                        <Input
                          type="email"
                          name="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="transition-all duration-300 focus:ring-2 focus:ring-black"
                        />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                        <Input
                          type="tel"
                          name="phone"
                          placeholder="Your Phone Number"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="transition-all duration-300 focus:ring-2 focus:ring-black"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                        <Input
                          type="text"
                          name="subject"
                          placeholder="Project Subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          className="transition-all duration-300 focus:ring-2 focus:ring-black"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                      <Textarea
                        name="message"
                        placeholder="Tell us about your project..."
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="transition-all duration-300 focus:ring-2 focus:ring-black"
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-black text-white hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Send to WhatsApp
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="animate-slide-in-right">
              <div className="space-y-6">
                <Card className="shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-black mb-4">Contact Information</h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <Mail className="w-5 h-5 text-black mt-1 mr-3" />
                        <div>
                          <p className="font-medium text-black">Email</p>
                          <p className="text-gray-600">assuvarcloud@gmail.com</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Phone className="w-5 h-5 text-black mt-1 mr-3" />
                        <div>
                          <p className="font-medium text-black">Phone</p>
                          <p className="text-gray-600">+91 63820 43432</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <MapPin className="w-5 h-5 text-black mt-1 mr-3" />
                        <div>
                          <p className="font-medium text-black">Location</p>
                          <p className="text-gray-600">Banglore, Hosur.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Clock className="w-5 h-5 text-black mt-1 mr-3" />
                        <div>
                          <p className="font-medium text-black">Business Hours</p>
                          <p className="text-gray-600">Mon - Sat: 9AM - 8PM</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-black mb-4">Why Choose Us?</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center text-gray-600">
                        <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                        Fast response time
                      </li>
                      <li className="flex items-center text-gray-600">
                        <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                        Professional expertise
                      </li>
                      <li className="flex items-center text-gray-600">
                        <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                        Quality assurance
                      </li>
                      <li className="flex items-center text-gray-600">
                        <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                        Ongoing support
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl font-bold text-black mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">Common questions about our services and process</p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card
                key={index}
                className="shadow-lg animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-black mb-3">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
