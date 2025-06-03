import React, { useState } from 'react';

type FAQItemProps = {
  question: string;
  answer: string;
};

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b py-4">
      <button
        className="flex justify-between w-full text-left font-medium text-lg focus:outline-none"
        onClick={() => setOpen(!open)}
      >
        {question}
        <span>{open ? '-' : '+'}</span>
      </button>
      {open && <p className="mt-2 text-gray-600">{answer}</p>}
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqData: FAQItemProps[] = [
    {
      question: 'Do you use AI in your services?',
      answer: 'Yes, we use the latest AI tools to streamline website building, WhatsApp automation, and Shopify store setup.',
    },
    {
      question: 'What platforms do you work with?',
      answer: 'We specialize in websites, Shopify stores, and WhatsApp marketing setups.',
    },
    {
      question: 'Can I get a custom design?',
      answer: 'Absolutely! We offer personalized design solutions tailored to your brand.',
    },
    {
      question: 'Is your service beginner-friendly?',
      answer: 'Yes, we guide you through the entire process to make it simple and stress-free.',
    },
  ];

  return (
    <section className="max-w-3xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">FAQs</h2>
      {faqData.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </section>
  );
};

export default FAQ;
