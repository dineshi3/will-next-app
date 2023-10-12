import style from './style.module.scss';
import { Row, Col } from 'react-bootstrap';
import { Accordion } from 'react-bootstrap';
import Image from 'next/image';
import content from '../../data/smartInvoice.json';

const Benefits = () => {
  return (
    <div className={style.benefits}>
      <h3 className={style.title}>{content.benefitsTitle}</h3>
      <p className={`pt-4 ${style.benefitSubTitle}`}>
        {content.benefitsSubTitle}
      </p>
      <Row className={style.explainingBenefits}>
        <Col lg={4} className={style.aboutBenefitsContainer}>
          <Accordion defaultActiveKey="0" flush id="homePageBenefitAccordion">
            {content.benefitsItems.map((items, index) => {
              return (
                <Accordion.Item
                  key={index}
                  eventKey={`${index}`}
                  className={style.benefitsItems}
                >
                  <Accordion.Header>
                    <h5>{items.title}</h5>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>{items.content}</p>
                  </Accordion.Body>
                </Accordion.Item>
              );
            })}
          </Accordion>
        </Col>
        <Col>
          <img
            src="/assets/smart-i/ExtractionSkelton.svg"
            alt="extration-skelton"
            style={{width: '100%'}}
          />
        </Col>
      </Row>
    </div>
  );
};

export { Benefits };
