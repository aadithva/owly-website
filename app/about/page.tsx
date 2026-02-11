import React from 'react';
import Card from '@/components/ui/Card';

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-neutral-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">
              About Owly
            </h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              We're on a mission to revolutionize how performance and brand teams create ad content
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-black mb-6">
                Our Story
              </h2>
              <p className="text-lg text-neutral-600 mb-4">
                Founded in 2024, Owly was born from a simple observation: creating great ad content shouldn't be complicated.
              </p>
              <p className="text-lg text-neutral-600 mb-4">
                Our team of designers, developers, and marketing experts came together to build a platform that makes ad creation intuitive, collaborative, and fun.
              </p>
              <p className="text-lg text-neutral-600">
                Today, we're proud to serve thousands of teams worldwide, helping them bring their creative visions to life.
              </p>
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-emerald-100 to-teal-100 h-96"></div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card hover={false}>
              <h3 className="text-3xl font-bold text-black mb-4">Our Mission</h3>
              <p className="text-lg text-neutral-600">
                To empower every marketer and brand team with tools that make creating exceptional ad content accessible, efficient, and delightful.
              </p>
            </Card>
            <Card hover={false}>
              <h3 className="text-3xl font-bold text-black mb-4">Our Vision</h3>
              <p className="text-lg text-neutral-600">
                A world where great ideas become great ads in minutes, not weeks, enabling brands to connect with their audiences in meaningful ways.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-black text-center mb-16">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Innovation', description: 'We constantly push boundaries to bring you cutting-edge features.' },
              { title: 'Simplicity', description: 'Complex problems deserve simple, elegant solutions.' },
              { title: 'Collaboration', description: 'Great work happens when teams work together seamlessly.' },
              { title: 'Quality', description: 'We never compromise on the quality of our product or support.' },
              { title: 'Transparency', description: 'Honest communication builds trust with our customers.' },
              { title: 'Impact', description: 'We measure success by the success of our customers.' },
            ].map((value, index) => (
              <Card key={index} hover gradient>
                <h3 className="text-xl font-bold text-black mb-3">{value.title}</h3>
                <p className="text-neutral-600">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
