import { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';

import closeIcon from '@/assets/closeIcon.svg';

import styles from './styles.module.scss';

const FormModal = (props) => {
  const { showModal, setShowModal } = props;

  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState();

  useEffect(() => {
    showModal && document.getElementById('form-email-input').focus();
  }, [showModal]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setErrors(false);
  };

  const handleSubmit = () => {
    if (!email) setErrors(true);
  };

  return (
    <Modal centered className='form-modal' show={showModal} onHide={() => setShowModal(false)}>
      <Modal.Body>
        <div className={styles.container}>
          <div className={styles.closeIcon}>
            <img {...closeIcon} onClick={() => setShowModal(false)} />
          </div>
          <div className={styles.inputContainer}>
            <p className='input-label'>Email</p>
            <input
              type='text'
              id='form-email-input'
              placeholder='Enter Email'
              className={errors ? styles.error : ''}
              onChange={handleEmailChange}
            />
          </div>
          <button className='btn btn-primary' onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default FormModal;
