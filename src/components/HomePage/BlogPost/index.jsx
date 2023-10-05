const BlogPost = () => {
  return (
    <section id='helpful-resources' className='  '>
      <div className='fv-container'>
        <div className='fv-row intro d-flex justify-content-center'>
          <div className='col-md-8'>
            <div className='kicker text-center'>Resources</div>
            <h2 className='text-center mb-5'>Check out what’s been going on</h2>
          </div>
        </div>
        <div className='fv-cards justify-content-center row-cols-1 row-cols-md-2 row-cols-lg-3'>
          <a href='/blog/will-legal-ai-make-you-irrelevant-or-unstoppable/'>
            <div className='fv-card resource-card'>
              <div className='card-header'>
                <img
                  src='/assets/artificial-intelligence-irrelevant-or-unstoppable.jpg'
                  className='img-fluid'
                  loading='lazy'
                  alt=''
                />
              </div>
              <div className='card-body'>
                <div className='chip chip-black chip-tag'>
                  <div className='chip-title'>BLOG POST</div>
                </div>
                <h3 className='h4'>Will Legal AI Make You Irrelevant — or Unstoppable?</h3>
              </div>
              <div className='card-footer'>
                <button href='/blog/will-legal-ai-make-you-irrelevant-or-unstoppable/' className='btn text-link'>
                  Read Post&nbsp;<span className='link-arrow'>›</span>
                </button>
              </div>
            </div>
          </a>
          <a href='/blog/secure-and-reliable-the-future-of-legal-payment-processing/'>
            <div className='fv-card resource-card'>
              <div className='card-header'>
                <img
                  src='/assets/10_cover.png'
                  className='img-fluid'
                  loading='lazy'
                  alt=''
                />
              </div>
              <div className='card-body'>
                <div className='chip chip-black chip-tag'>
                  <div className='chip-title'>BLOG POST</div>
                </div>
                <h3 className='h4'>Secure and Reliable: The Future of Legal Payment Processing</h3>
              </div>
              <div className='card-footer'>
                <button
                  href='/blog/secure-and-reliable-the-future-of-legal-payment-processing/'
                  className='btn text-link'
                >
                  Read Post&nbsp;<span className='link-arrow'>›</span>
                </button>
              </div>
            </div>
          </a>
          <a href='/customers/case-studies/hacking-immigration-law-Libra-growth/'>
            <div className='fv-card resource-card'>
              <div className='card-header'>
                <img
                  src='/assets/hacking-immigration-law-case-study.png'
                  className='img-fluid'
                  loading='lazy'
                  alt=''
                />
              </div>
              <div className='card-body'>
                <div className='chip chip-black chip-tag'>
                  <div className='chip-title'>CASE STUDY</div>
                </div>
                <h3 className='h4'>Hacking Immigration Law + Libra = Growth</h3>
              </div>
              <div className='card-footer'>
                <button
                  href='/customers/case-studies/hacking-immigration-law-Libra-growth/'
                  className='btn text-link'
                >
                  Read the Case Study&nbsp;<span className='link-arrow'>›</span>
                </button>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogPost;
