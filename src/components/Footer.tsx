
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Instagram, Twitter, Linkedin, Send } from 'lucide-react';
import { useState } from 'react';
import { toast } from '@/hooks/use-toast';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const whatsappMessage = `Hi! I'm ${formData.name}. Email: ${formData.email}. Message: ${formData.message}`;
    const whatsappUrl = `https://wa.me/916382043432?text=${encodeURIComponent(whatsappMessage)}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
    
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

  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Logo and Description */}
          <div className="animate-slide-in-left">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-3">
                <span className="text-black font-bold">DA</span>
              </div>
              <span className="text-2xl font-bold">Digital Agency</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              We create stunning digital experiences that drive results. Let's build something amazing together.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="/" className="text-gray-400 hover:text-white transition-colors duration-300">Home</a></li>
              <li><a href="/services" className="text-gray-400 hover:text-white transition-colors duration-300">Services</a></li>
              <li><a href="/case-study" className="text-gray-400 hover:text-white transition-colors duration-300">Projects</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors duration-300">Contact</a></li>
            </ul>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-in-right">
            <h3 className="text-xl font-bold mb-6">Send us a message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
              />
              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
              />
              <Textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleInputChange}
                required
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                rows={4}
              />
              <Button type="submit" className="w-full bg-highlight text-white hover:bg-highlight-hover transition-all duration-300">
                <Send className="w-4 h-4 mr-2" />
                Send to WhatsApp
              </Button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Digital Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;





