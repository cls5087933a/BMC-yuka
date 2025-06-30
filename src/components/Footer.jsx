import { ExternalLink, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              About This Analysis
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              This comprehensive business model analysis of Yuka provides insights into the company's 
              innovative approach to consumer health transparency and sustainable business practices.
            </p>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Resources
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://yuka.io/en/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-orange-600 text-sm flex items-center gap-1 transition-colors"
                >
                  Official Yuka Website
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://yuka.io/en/independence/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-orange-600 text-sm flex items-center gap-1 transition-colors"
                >
                  Independence Statement
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://yuka.io/en/social-impact/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-orange-600 text-sm flex items-center gap-1 transition-colors"
                >
                  Social Impact Report
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Analysis Framework
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              This analysis uses the Business Model Canvas framework to provide a structured 
              examination of Yuka's business strategy and operations.
            </p>
            <div className="flex items-center text-sm text-gray-600">
              <span>Made with</span>
              <Heart className="h-4 w-4 mx-1 text-red-500 fill-current" />
              <span>by Manus</span>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-sm text-gray-500">
            © 2024 Yuka Business Model Analysis. This is an independent analysis for educational purposes.
          </p>
        </div>
      </div>
    </footer>
  );
}

