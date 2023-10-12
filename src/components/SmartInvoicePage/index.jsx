import { Container } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import style from './style.module.scss';
import { HomeNav } from './Nav';
import { About } from './About';
import { PopularUsers } from './PopularUsers';
import { DocumentProcess } from './AboutDocumentProcess';
import { Working } from './Working';
import { Benefits } from './Benefits';
import { HomeFooter } from './Footer';
import { AIpros } from './AI_pros';
import FormModal from '../HomePage/FormModal';

const content = {
  product: {
    id: 'smarti',
    name: 'Smart I',
  },
  theme: {
    color: 'blue',
  },
};
const SmartInvoicePage = () => {
  const [showModal, setShowModal] = useState(false);

  const onClick = () => setShowModal(true);

  const commonProps = { content, showModal, setShowModal, onClick };

  return (
    <Container className={`p-0 ${style.homeContainer}`} id='homePage' fluid>
      <div className={style.header}>
        <HomeNav {...commonProps} />
        <div className={style.article}>
          <About {...commonProps} />
          <PopularUsers />
        </div>
      </div>
      <DocumentProcess />
      <Working />
      <Benefits />
      <AIpros />
      <HomeFooter {...commonProps} />
      <FormModal {...commonProps} />
    </Container>
  );
};

export default SmartInvoicePage;