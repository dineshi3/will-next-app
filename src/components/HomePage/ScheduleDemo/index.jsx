const ScheduleDemo = (props) => {
  const { onClick } = props;
  return (
    <section id='final-cta' className='cta plain'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-8 text-center'>
            <div className='headline'>
              <h2 className='mb-5'>See all that Libra can do with a customized demonstration from our team</h2>
            </div>
            <a onClick={onClick} className='btn btn-primary'>
              Schedule a Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleDemo;
