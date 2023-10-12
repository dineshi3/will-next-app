import { NavigationButtons } from './About';
import style from './style.module.scss';
import content from '../../data/smartInvoice.json';

const HomeFooter = (props) => {
  return (
    <div className={style.footerNavigations}>
      <h1 className={style.mainTitle}>{content.footerTitle}</h1>
      <NavigationButtons {...props} />
    </div>
  );
};

const FooterResourceDetails = () => {
  return (
    <div className={style.footerResouceContainer}>
      <div className={style.resourceDetails}>
        <b>Company</b>
        <ul>
          <li>Loreum Ipsum</li>
          <li>Loreum Ipsum</li>
        </ul>
      </div>
      <div className={style.resourceDetails}>
        <b>Product</b>
        <ul>
          <li>Loreum Ipsum</li>
          <li>Loreum Ipsum</li>
        </ul>
      </div>
      <div className={style.resourceDetails}>
        <b>Resource</b>
        <ul>
          <li>Loreum Ipsum</li>
          <li>Loreum Ipsum</li>
        </ul>
      </div>
      <div className={style.resourceDetails}>
        <b>Newsletter</b>
        <p>Get smart i news & product updates</p>
        <div className={style.newsLetter}>
          <input type="text" />
          <button type="button">GO</button>
        </div>
      </div>
    </div>
  );
};

export { HomeFooter };
