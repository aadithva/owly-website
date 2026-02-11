import React from 'react';
import Card from '@/components/ui/Card';
import { HiSparkles, HiLightningBolt, HiShieldCheck, HiUsers, HiChartBar, HiClock } from 'react-icons/hi';

export default function FeaturesPage() {
  const features = [
    {
      icon: HiSparkles,
      title: 'AI-Powered Creation',
      description: 'Leverage cutting-edge AI to generate creative concepts and variations in seconds.',
      details: ['Smart content suggestions', 'Auto-generate variations', 'Style consistency'],
    },
    {
      icon: HiLightningBolt,
      title: 'Lightning Fast Workflow',
      description: 'From concept to final render in minutes, not days. Optimized for speed without sacrificing quality.',
      details: ['Real-time preview', 'Instant rendering', 'Quick iterations'],
    },
    {
      icon: HiUsers,
      title: 'Team Collaboration',
      description: 'Work together seamlessly with real-time collaboration, comments, and version control.',
      details: ['Real-time editing', 'Comment threads', 'Role-based access'],
    },
    {
      icon: HiShieldCheck,
      title: 'Brand Consistency',
      description: 'Maintain your brand identity across all content with smart templates and guidelines.',
      details: ['Brand kits', 'Template library', 'Style guides'],
    },
    {
      icon: HiChartBar,
      title: 'Performance Analytics',
      description: 'Track performance metrics and optimize your ads based on real data insights.',
      details: ['A/B testing', 'Performance tracking', 'ROI analytics'],
    },
    {
      icon: HiClock,
      title: 'Automated Scheduling',
      description: 'Plan and schedule your content calendar with intelligent automation.',
      details: ['Content calendar', 'Auto-publishing', 'Multi-platform sync'],
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-neutral-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">
            Powerful Features for Modern Teams
          </h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Everything you need to plan, create, iterate, and launch exceptional ad content
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} hover gradient>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-black rounded-xl flex items-center justify-center">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-black mb-2">
                        {feature.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-neutral-600 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center text-sm text-neutral-600">
                        <span className="mr-2">✓</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-black mb-6">
            Integrates With Your Favorite Tools
          </h2>
          <p className="text-lg text-neutral-600 mb-12 max-w-2xl mx-auto">
            Seamlessly connect with the platforms you already use
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['Facebook Ads', 'Google Ads', 'TikTok', 'Instagram', 'YouTube', 'LinkedIn', 'Twitter', 'Snapchat'].map((platform) => (
              <div key={platform} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <p className="font-semibold text-neutral-800">{platform}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
