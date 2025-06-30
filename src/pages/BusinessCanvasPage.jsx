import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  Activity, 
  Database, 
  Gift, 
  Heart, 
  UserCheck, 
  Megaphone, 
  DollarSign, 
  TrendingDown 
} from 'lucide-react';
import businessCanvasIllustration from '../assets/business-canvas-illustration.jpg';

export function BusinessCanvasPage() {
  const canvasData = [
    {
      id: 'key-partners',
      title: 'Key Partners',
      icon: Users,
      color: 'bg-orange-100 text-orange-700',
      items: [
        'None (stated independence)',
        'Co-founders: Benoit & François Martin, Julie Chapon',
        'Limited investors: Founders Future, Wind Capital',
        'Data providers (implicit partnerships)',
      ],
    },
    {
      id: 'key-activities',
      title: 'Key Activities',
      icon: Activity,
      color: 'bg-blue-100 text-blue-700',
      items: [
        'Product scanning and analysis',
        'Database curation and management',
        'Algorithm development and refinement',
        'Mobile app development and maintenance',
        'User education and content creation',
        'Community engagement',
        'Customer support',
      ],
    },
    {
      id: 'key-resources',
      title: 'Key Resources',
      icon: Database,
      color: 'bg-purple-100 text-purple-700',
      items: [
        'Proprietary product database',
        'Mobile application technology',
        'Scoring algorithms and methodology',
        'Human capital (79 employees)',
        'Brand reputation for independence',
        'Intellectual property',
      ],
    },
    {
      id: 'value-propositions',
      title: 'Value Propositions',
      icon: Gift,
      color: 'bg-green-100 text-green-700',
      items: [
        'Transparency and informed choices',
        'Instant product health insights',
        'Convenience through barcode scanning',
        'Health improvement guidance',
        'Trust through 100% independence',
        'Alternative product recommendations',
      ],
    },
    {
      id: 'customer-relationships',
      title: 'Customer Relationships',
      icon: Heart,
      color: 'bg-pink-100 text-pink-700',
      items: [
        'Automated service through app',
        'Community-driven contributions',
        'Self-service help center',
        'Limited direct communication',
        'Social media engagement',
        'Educational content provision',
      ],
    },
    {
      id: 'customer-segments',
      title: 'Customer Segments',
      icon: UserCheck,
      color: 'bg-indigo-100 text-indigo-700',
      items: [
        'Health-conscious consumers',
        'Parents and families',
        'Individuals with dietary restrictions',
        'Ethical and environmental consumers',
        'Gen-Z and Millennials (primary)',
        'General public seeking transparency',
      ],
    },
    {
      id: 'channels',
      title: 'Channels',
      icon: Megaphone,
      color: 'bg-yellow-100 text-yellow-700',
      items: [
        'Mobile app stores (iOS, Android)',
        'Official website',
        'Social media platforms',
        'Word-of-mouth referrals',
        'Media coverage and PR',
        'Email marketing',
      ],
    },
    {
      id: 'cost-structure',
      title: 'Cost Structure',
      icon: TrendingDown,
      color: 'bg-red-100 text-red-700',
      items: [
        'Technology development and maintenance',
        'Personnel costs (79 employees)',
        'Data acquisition and verification',
        'Cloud infrastructure and servers',
        'Marketing and communications',
        'Legal and compliance',
        'Administrative expenses',
      ],
    },
    {
      id: 'revenue-streams',
      title: 'Revenue Streams',
      icon: DollarSign,
      color: 'bg-emerald-100 text-emerald-700',
      items: [
        'Premium subscriptions ($10-20/year)',
        'Voluntary user donations',
        'Book and merchandise sales',
        'Educational content (potential)',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Yuka Business Model Canvas
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            A comprehensive breakdown of Yuka's business model using the proven Business Model Canvas framework, 
            analyzing all nine key components that drive their success.
          </p>
          <div className="flex justify-center mb-8">
            <img
              src={businessCanvasIllustration}
              alt="Business Model Canvas"
              className="max-w-2xl w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Canvas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {canvasData.map((section) => (
            <Card key={section.id} className="h-full hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className={`p-2 rounded-lg ${section.color}`}>
                    <section.icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg font-semibold">{section.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {section.items.map((item, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="block w-full text-left justify-start py-2 px-3 text-sm font-normal bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      {item}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Key Insights */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Business Model Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Unique Positioning</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Yuka's commitment to 100% independence from brands and manufacturers sets it apart in the market. 
                This independence is maintained through a freemium model that relies solely on user subscriptions 
                rather than advertising or partnerships.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Scalable Revenue Model</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                The premium subscription model provides recurring revenue while keeping core features free. 
                With over 55 million users globally, even a small conversion rate generates significant revenue 
                ($20.3M in 2023).
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Technology-Driven Value</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                The core value proposition relies on sophisticated algorithms and a comprehensive database 
                to provide instant, accurate product analysis. This creates a strong competitive moat 
                through data and technology.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Community-Powered Growth</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Yuka's growth is largely organic, driven by word-of-mouth and user-generated content. 
                The app's utility and independence create strong user loyalty and natural advocacy, 
                reducing customer acquisition costs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

