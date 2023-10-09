const ScheduleDemo = (props) => {
  const { content: { scheduleDemo }, onClick } = props;
  return (
    <section id='final-cta' className='cta plain'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-8 text-center'>
            <div className='headline'>
              <h2 className='mb-5'>{scheduleDemo.title}</h2>
            </div>
            <a onClick={onClick} className='btn btn-primary'>
              {scheduleDemo.link.text}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleDemo;
