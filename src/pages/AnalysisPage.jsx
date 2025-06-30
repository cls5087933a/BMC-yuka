import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  TrendingUp, 
  Globe, 
  Shield, 
  Users, 
  Target, 
  AlertTriangle,
  CheckCircle,
  ExternalLink
} from 'lucide-react';

export function AnalysisPage() {
  const keyMetrics = [
    { label: 'Global Users', value: '55M+', change: '+600K monthly in US' },
    { label: 'Countries', value: '12', change: 'Expanding rapidly' },
    { label: 'Annual Revenue', value: '$20.3M', change: '2023 figures' },
    { label: 'Team Size', value: '79', change: 'Employees globally' },
  ];

  const strengths = [
    'Complete independence from brands ensures unbiased ratings',
    'Strong user loyalty and organic growth through word-of-mouth',
    'Scalable freemium model with recurring revenue streams',
    'First-mover advantage in product transparency apps',
    'Strong brand reputation for trustworthiness',
    'Comprehensive database covering food and cosmetics',
  ];

  const challenges = [
    'Heavy reliance on premium subscriptions for revenue',
    'Potential legal challenges from manufacturers',
    'Maintaining data accuracy across millions of products',
    'Competition from established tech companies',
    'Regulatory changes in different markets',
    'Scaling operations while maintaining quality',
  ];

  const opportunities = [
    'Expansion to new geographic markets',
    'Addition of new product categories',
    'Enhanced AI and machine learning capabilities',
    'B2B services for retailers and manufacturers',
    'Educational content and certification programs',
    'Integration with health and fitness platforms',
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive Business Analysis
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            An in-depth examination of Yuka's business model, market position, competitive advantages, 
            and strategic outlook in the health technology sector.
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {keyMetrics.map((metric, index) => (
            <Card key={index} className="text-center">
              <CardHeader className="pb-2">
                <CardTitle className="text-3xl font-bold text-orange-600">{metric.value}</CardTitle>
                <CardDescription className="font-medium">{metric.label}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">{metric.change}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Executive Summary */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-orange-600" />
              Executive Summary
            </CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <p className="text-gray-600 leading-relaxed mb-4">
              Yuka has established itself as a pioneering force in the consumer health transparency sector, 
              building a sustainable business model around complete independence from brand influence. 
              Launched in 2017 by French entrepreneurs, the company has grown to serve over 55 million users 
              across 12 countries, generating $20.3M in annual revenue through its freemium subscription model.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              The company's core value proposition centers on providing instant, unbiased health ratings for 
              food and cosmetic products through barcode scanning. This transparency-first approach has 
              resonated strongly with health-conscious consumers, particularly Gen-Z and Millennials, 
              driving organic growth and strong user engagement.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Yuka's business model demonstrates the viability of independence-focused strategies in the 
              digital health space, proving that consumer trust can be effectively monetized through 
              premium features while maintaining free access to core functionality.
            </p>
          </CardContent>
        </Card>

        {/* SWOT Analysis */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {/* Strengths */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-700">
                <CheckCircle className="h-5 w-5" />
                Strengths
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {strengths.map((strength, index) => (
                  <Badge key={index} variant="secondary" className="block w-full text-left justify-start py-2 px-3 text-sm font-normal bg-green-50 text-green-800">
                    {strength}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Challenges */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-red-700">
                <AlertTriangle className="h-5 w-5" />
                Challenges & Risks
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {challenges.map((challenge, index) => (
                  <Badge key={index} variant="secondary" className="block w-full text-left justify-start py-2 px-3 text-sm font-normal bg-red-50 text-red-800">
                    {challenge}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Market Position */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-orange-600" />
              Market Position & Competitive Advantage
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Shield className="h-4 w-4 text-orange-600" />
                  Independence
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Yuka's commitment to complete independence from brand partnerships and advertising 
                  creates a unique market position that competitors struggle to replicate.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Users className="h-4 w-4 text-orange-600" />
                  User Trust
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  High user trust translates to strong retention rates and organic growth, 
                  significantly reducing customer acquisition costs compared to competitors.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Globe className="h-4 w-4 text-orange-600" />
                  Market Leadership
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  As the leading independent product analysis app in Europe with rapid US expansion, 
                  Yuka has established strong market presence and brand recognition.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Growth Opportunities */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-orange-600" />
              Growth Opportunities
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {opportunities.map((opportunity, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 text-sm">{opportunity}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Conclusion */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Strategic Outlook & Conclusion</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <p className="text-gray-600 leading-relaxed mb-4">
              Yuka has successfully demonstrated that consumer trust and independence can form the foundation 
              of a sustainable and profitable business model in the health technology sector. The company's 
              freemium approach, combined with its unwavering commitment to objectivity, has created a 
              defensible market position that continues to drive growth.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              The key to Yuka's continued success lies in maintaining its core values while scaling operations 
              and expanding into new markets. The company's strong financial performance and user growth 
              metrics suggest a solid foundation for future expansion, particularly in the rapidly growing 
              US market.
            </p>
            <p className="text-gray-600 leading-relaxed">
              As consumer awareness of health and ingredient transparency continues to grow globally, 
              Yuka is well-positioned to capitalize on these trends while maintaining its unique value 
              proposition of complete independence and trustworthiness.
            </p>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-br from-orange-600 to-green-600 rounded-xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">Learn More About Yuka</h2>
          <p className="text-orange-100 mb-6 max-w-2xl mx-auto">
            Explore Yuka's official resources to gain deeper insights into their mission, 
            impact, and commitment to consumer health transparency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="secondary" size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
              <a href="https://yuka.io/en/" target="_blank" rel="noopener noreferrer">
                Visit Yuka Website
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-orange-600">
              <a href="https://yuka.io/en/social-impact/" target="_blank" rel="noopener noreferrer">
                View Impact Report
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

