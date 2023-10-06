import { useState } from 'react';

const products = [
  {
    id: 'case',
    category: 'Case & Matter Management',
    products: [
      {
        title: 'Legal Case Management Software',
        description: 'One centralized workspace for everything you need to power your business.',
        href: '/platform/case-management-software/',
        img: {
          src: '/assets/case-management.svg',
          alt: 'Case Management',
        },
      },
      {
        title: 'Intake and Lead Management',
        description: 'Turn more leads into clients, optimize your marketing efforts, and boost your ROI.',
        href: '/platform/intake-and-lead-tracking/',
        img: {
          src: '/assets/120-leadmgmt.svg',
          alt: 'Lead Management',
        },
      },
      {
        title: 'eSignature Software for Legal Firms',
        description: 'Create, manage, and e-Sign docs easily with Libra.',
        href: '/platform/esignature/',
        img: {
          src: '/assets/120-esignatures.svg',
          alt: 'eSignature',
        },
      },
    ],
  },
  {
    id: 'documents',
    category: 'Documents',
    products: [
      {
        title: 'Legal Document Management',
        description: 'Access your documents for better context, collaboration, and security.',
        href: '/platform/document-management/',
        img: {
          src: '/assets/document-management.svg',
          alt: 'Document Management',
        },
      },
      {
        title: 'Legal Document Assembly',
        description: 'Legal document assembly software built for firms that streamline workflow.',
        href: '/platform/contract-lifecycle-management/',
        img: {
          src: '/assets/document-assembly.svg',
          alt: 'Document Assembly',
        },
      },
      {
        title: 'Contract Lifecycle Management',
        description: 'Contract management that can be set up quickly and effortlessly!',
        href: '/platform/contract-lifecycle-management/',
        img: {
          src: '/assets/120-contractmgmt.svg',
          alt: 'Contract Lifecycle Management',
        },
      },
    ],
  },
  {
    id: 'revops',
    category: 'Revenue & Operations',
    products: [
      {
        title: 'Time Tracking, Billing, and Payments',
        description: 'Time tracking and billing that turns hours into invoices.',
        href: '/platform/billing-and-time-keeping/',
        img: {
          src: '/assets/time-billing-payments.svg',
          alt: 'Time, Billing, and Payments',
        },
      },
      {
        title: 'Business Analytics for Legal',
        description: 'Operational insight that provides actionable data to help your firm.',
        href: '/platform/business-analytics/',
        img: {
          src: '/assets/business-insights.svg',
          alt: 'Business Insights',
        },
      },
    ],
  },
];
const ProductShowcase = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id='products-showcase' className='products-showcase'>
      <div className='fv-container'>
        <div className='product-cards-intro'>
          <div className='product-cards-intro-col'>
            <div className='kicker text-center'>Products</div>
            <h2 className='text-center'>
              Our full suite of AI-powered solutions built for <span className='highlight'>you</span>
            </h2>
          </div>
        </div>
        <ul className='nav card-group-nav nav-pills' id='product-groups' role='tablist'>
          {products.map((product, index) => (
            <li className='nav-item' role='presentation' key={index} onClick={() => setActiveTab(index)}>
              <a
                className={`nav-link ${activeTab == index ? 'active' : ''}`}
                id={`product-category-tab-${index + 1}`}
                data-toggle='tab'
                href={`#${product.id}`}
                role='tab'
                aria-controls='case'
                aria-selected='true'
                onClick={(e) => e.preventDefault()}
              >
                {product.category}
              </a>
            </li>
          ))}
        </ul>

        <div className='tab-content'>
          {products.map(
            (product, index) =>
               (
                <div
                  id={product.id}
                  className={`cards grid-col-3 tab-pane fade ${activeTab == index ? 'show active' : ''} `}
                  role='tabpanel'
                  aria-labelledby='home-tab'
                  key={product.id}
                >
                  {product.products.map((item) => (
                    <a href={'https://libra.vakilsearch.com/login'} key={item.title}>
                      <div className='fv-card product-card'>
                        <div className='card-header icon'>
                          <figure className='card-image icon'>
                            <img className='img-fluid token' loading='lazy' {...item.img} />
                          </figure>
                        </div>
                        <div className='card-body'>
                          <h3 className='h5'>{item.title}</h3>
                          <div className='body'>{item.description}</div>
                        </div>
                        <div className='card-footer'>
                          <div className='card-cta'>
                            <p>
                              Learn More&nbsp;<span className='link-arrow'>›</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              ),
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
