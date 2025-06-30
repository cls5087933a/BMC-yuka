import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Users, TrendingUp, Shield, Globe } from 'lucide-react';
import heroBackground from '../assets/hero-background.jpg';
import yukaAppInterface from '../assets/yuka-app-interface.png';

export function HomePage() {
  const stats = [
    { icon: Users, label: 'Global Users', value: '55M+', description: 'Active users worldwide' },
    { icon: Globe, label: 'Countries', value: '12', description: 'Markets served' },
    { icon: TrendingUp, label: 'Revenue', value: '$20.3M', description: '2023 annual revenue' },
    { icon: Shield, label: 'Independence', value: '100%', description: 'Brand independent' },
  ];

  const features = [
    {
      title: 'Complete Independence',
      description: 'Yuka maintains 100% independence from brands and manufacturers, ensuring unbiased product ratings.',
      icon: Shield,
    },
    {
      title: 'Freemium Model',
      description: 'Sustainable revenue through premium subscriptions while keeping core features free for all users.',
      icon: TrendingUp,
    },
    {
      title: 'Global Impact',
      description: 'Driving positive change in the food and cosmetics industry across 12 countries worldwide.',
      icon: Globe,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative bg-gradient-to-br from-orange-50 to-green-50 py-20 lg:py-32 overflow-hidden"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-white/80"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Yuka Business Model
                <span className="text-orange-600"> Analysis</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                A comprehensive examination of Yuka's innovative business model using the Business Model Canvas framework. 
                Discover how this French startup revolutionized consumer health transparency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700">
                  <Link to="/business-canvas">
                    View Business Canvas
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/analysis">
                    Read Full Analysis
                  </Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src={yukaAppInterface}
                alt="Yuka App Interface"
                className="max-w-sm w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-100 rounded-lg mb-4">
                  <stat.icon className="h-6 w-6 text-orange-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-sm font-medium text-gray-900 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Key Business Model Insights
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore the fundamental elements that make Yuka's business model unique and successful 
              in the competitive health and wellness technology market.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-green-500 rounded-2xl mb-4 mx-auto">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600 leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-orange-600 to-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Explore the Full Analysis?
          </h2>
          <p className="text-xl text-orange-100 mb-8 leading-relaxed">
            Dive deep into Yuka's business model with our comprehensive Business Model Canvas analysis 
            and detailed strategic insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="bg-white text-orange-600 hover:bg-gray-100">
              <Link to="/business-canvas">
                Business Model Canvas
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600">
              <Link to="/analysis">
                Full Analysis Report
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

