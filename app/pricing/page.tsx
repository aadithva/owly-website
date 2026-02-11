import React from 'react';
import Card from '@/components/ui/Card';
import { HiCheck } from 'react-icons/hi';

export default function PricingPage() {
  const plans = [
    {
      name: 'Starter',
      price: '29',
      description: 'Perfect for individuals and small teams getting started',
      features: [
        'Up to 3 team members',
        '50 video exports/month',
        'Basic templates',
        'HD video quality',
        'Email support',
        '5 GB storage',
      ],
      cta: 'Start Free Trial',
      popular: false,
    },
    {
      name: 'Professional',
      price: '99',
      description: 'For growing teams that need more power and flexibility',
      features: [
        'Up to 15 team members',
        'Unlimited video exports',
        'Premium templates',
        '4K video quality',
        'Priority support',
        '100 GB storage',
        'Brand kit & guidelines',
        'Advanced analytics',
      ],
      cta: 'Start Free Trial',
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large organizations with custom needs',
      features: [
        'Unlimited team members',
        'Unlimited everything',
        'Custom templates',
        '8K video quality',
        'Dedicated support',
        'Unlimited storage',
        'Advanced security',
        'Custom integrations',
        'SLA guarantee',
      ],
      cta: 'Contact Sales',
      popular: false,
    },
  ];

  const faqs = [
    {
      question: 'Can I change plans later?',
      answer: 'Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, and can arrange invoicing for Enterprise customers.',
    },
    {
      question: 'Is there a free trial?',
      answer: 'Yes! All plans come with a 14-day free trial. No credit card required to start.',
    },
    {
      question: 'Can I cancel anytime?',
      answer: 'Absolutely. You can cancel your subscription at any time with no cancellation fees.',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-neutral-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Choose the perfect plan for your team. All plans include a 14-day free trial.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div key={index} className="relative">
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-black text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <Card
                  hover
                  gradient={plan.popular}
                  className={`h-full ${plan.popular ? 'border-2 border-black' : ''}`}
                >
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-black mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-neutral-600 text-sm mb-4">
                      {plan.description}
                    </p>
                    <div className="mb-4">
                      {plan.price === 'Custom' ? (
                        <span className="text-4xl font-bold text-black">
                          Custom
                        </span>
                      ) : (
                        <>
                          <span className="text-5xl font-bold text-black">
                            ${plan.price}
                          </span>
                          <span className="text-neutral-600">/month</span>
                        </>
                      )}
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <HiCheck className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-neutral-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full py-3 rounded-full font-semibold transition-colors ${
                      plan.popular
                        ? 'bg-black text-white hover:bg-neutral-800'
                        : 'border-2 border-black text-black hover:bg-neutral-50'
                    }`}
                  >
                    {plan.cta}
                  </button>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-black text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} hover={false}>
                <h3 className="text-xl font-bold text-black mb-3">
                  {faq.question}
                </h3>
                <p className="text-neutral-600">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to get started?
          </h2>
          <p className="text-xl text-neutral-300 mb-8">
            Join thousands of teams already using Owly
          </p>
          <button className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-neutral-100 transition-colors">
            Start Your Free Trial
          </button>
        </div>
      </section>
    </div>
  );
}
