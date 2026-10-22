
import { ArrowRight, Check } from 'lucide-react';

const processSteps: [string, string][] = [
  ['01', 'Discuss your requirements'],
  ['02', 'Plan the design and features'],
  ['03', 'Develop and review'],
  ['04', 'Test and launch'],
];

function Developers() {
  const websitePackages = [
    {
      name: 'ESSENTIAL WEBSITE',
      price: '₹9,999',
      description: 'For startups, local businesses and individual professionals.',
      features: [
        'Up to 3 pages',
        'Mobile-responsive design',
        'About, services and contact sections',
        'WhatsApp contact button',
        'Basic on-page SEO',
        'Testing and deployment labour',
      ],
    },
    {
      name: 'BUSINESS WEBSITE',
      price: '₹14,999',
      description: 'For growing and established businesses.',
      features: [
        'Up to 6 professional pages',
        'Custom branded UI/UX',
        'Enquiry form and WhatsApp integration',
        'Basic SEO and analytics setup',
        'Mobile and performance optimisation',
        'Deployment and launch testing',
      ],
    },
    {
      name: 'PREMIUM BUSINESS',
      price: '₹24,999',
      description: 'For companies looking for a more distinctive digital presence.',
      features: [
        'Up to 10 pages',
        'Premium custom design and animations',
        'Advanced service or portfolio sections',
        'Enquiry form and WhatsApp integration',
        'SEO foundations and analytics',
        'Performance optimisation and deployment',
      ],
    },
    {
      name: 'E-COMMERCE WEBSITE',
      price: 'From ₹39,999',
      description: 'For businesses selling products online.',
      features: [
        'Product catalogue and categories',
        'Shopping cart and checkout',
        'Payment gateway integration',
        'Order management setup',
        'Responsive storefront',
        'Testing and production deployment',
      ],
    },
    {
      name: 'CUSTOM WEB APPLICATION',
      price: 'From ₹59,999',
      description: 'For businesses needing portals, dashboards or custom systems.',
      features: [
        'Custom frontend and backend',
        'Database and authentication, if required',
        'Admin dashboard',
        'Custom business workflows',
        'Integration and functionality testing',
        'Deployment based on project requirements',
      ],
    },
  ];

  const websiteEnquiryLink = (packageName: string, price: string) =>
    `https://wa.me/916369216076?text=${encodeURIComponent(
      `Hello GenZ Edu Tech, I would like to enquire about the ${packageName} website package listed at ${price}. Please share the scope, delivery timeline, domain and hosting costs, and quotation details.`
    )}`;

  return (
    <section
      id="developers"
      className="section developers"
      aria-labelledby="developers-heading"
    >
      <div className="site-container">
        <div className="dev-head">
          <div className="section-heading">
            <div className="eyebrow">GenZ Developers</div>
            <h2 id="developers-heading">
              Need a website for your business?
            </h2>
          </div>
          <p>
            We design and develop modern, professional and mobile-friendly
            websites that help businesses strengthen their digital presence,
            present their services and connect with customers.
          </p>
        </div>

        <div className="dev-pricing">
          {websitePackages.map((websitePackage, index) => (
            <article
              className={`price-card ${
                index === 1 ? 'featured' : ''
              }`}
              key={websitePackage.name}
              data-testid={`card-package-${websitePackage.name
                .toLowerCase()
                .replaceAll(' ', '-')}`}
            >
              {index === 1 && (
                <span className="popular">Popular Choice</span>
              )}

              <h3>{websitePackage.name}</h3>
              <div className="price">{websitePackage.price}</div>
              <p>{websitePackage.description}</p>

              <ul>
                {websitePackage.features.map((feature) => (
                  <li key={feature}>
                    <Check size={14} />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href={websiteEnquiryLink(
                  websitePackage.name,
                  websitePackage.price
                )}
                className={`btn ${
                  index === 1 ? 'btn-gold' : 'btn-primary'
                }`}
                target="_blank"
                rel="noreferrer"
                data-testid={`link-package-${websitePackage.name
                  .toLowerCase()
                  .replaceAll(' ', '-')}`}
              >
                Discuss This Package <ArrowRight size={14} />
              </a>
            </article>
          ))}
        </div>

        <p className="dev-note">
          Every package includes a consultation, custom design within the
          agreed scope, testing and the specified deployment labour.
          Final scope and delivery timelines are confirmed before work begins.
        </p>

        <div className="services-row">
          <article className="service-panel">
            <div className="eyebrow">Domain & hosting</div>
            <h3>YOUR WEBSITE, ONLINE</h3>
            <div className="service-price">Quoted Separately</div>

            <ul>
              <li>Domain registration: approximately ₹700–₹1,500/year</li>
              <li>Hosting: approximately ₹0–₹8,000+/year for suitable small websites</li>
              <li>SSL certificate, where supported by the hosting provider</li>
              <li>Backend, database and paid service costs where required</li>
              <li>Third-party subscriptions and renewals</li>
            </ul>

            <p>
              A suitable free hosting plan may be available for some
              websites. Final costs depend on the provider, domain,
              features and technical requirements.
            </p>

            <a
              href={websiteEnquiryLink(
                'Domain and Hosting Consultation',
                'Based on requirements'
              )}
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Ask About Hosting <ArrowRight size={14} />
            </a>
          </article>

          <article className="service-panel light">
            <div className="eyebrow">Ongoing support</div>
            <h3>KEEP YOUR WEBSITE FRESH & RUNNING</h3>
            <div className="service-price">
              From ₹1,499 / Month
            </div>

            <ul>
              <li>Regular website updates within the agreed scope</li>
              <li>Content and text changes</li>
              <li>Basic technical support</li>
              <li>Performance and functionality checks</li>
              <li>Maintenance plan tailored to your needs</li>
            </ul>

            <p>
              Maintenance is optional. The monthly fee depends on the
              support required. New features, major redesigns and paid
              third-party services are quoted separately.
            </p>

            <a
              href={websiteEnquiryLink(
                'Website Maintenance',
                'From ₹1,499 per month'
              )}
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Discuss Maintenance <ArrowRight size={14} />
            </a>
          </article>
        </div>

        <div className="service-panel deployment-panel">
          <div className="eyebrow">Launch with confidence</div>
          <h3>Development, Deployment & Ownership</h3>

          <p>
            Deployment labour is included in the website packages listed
            above. For standalone deployment projects, our indicative
            service fee is ₹1,000–₹3,000, depending on complexity.
          </p>

          <p>
            Domain registration, hosting subscriptions, paid plugins,
            APIs and other third-party charges are separate unless
            expressly included in your written quotation. Recurring
            renewals are payable according to the selected provider's
            terms.
          </p>

          <p>
            We clarify project scope, costs, ownership, delivery
            expectations and ongoing support before work begins.
          </p>

          <a
            href={websiteEnquiryLink(
              'Website Deployment',
              '₹1,000–₹3,000 for standalone deployment'
            )}
            className="btn btn-primary"
            target="_blank"
            rel="noreferrer"
          >
            Discuss Your Project <ArrowRight size={14} />
          </a>
        </div>

        <div className="process">
          <h3>From first conversation to a website built for your business.</h3>

          <div className="process-list">
            {processSteps.map(([number, label]) => (
              <div className="process-step" key={number}>
                <b>{number}</b>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
