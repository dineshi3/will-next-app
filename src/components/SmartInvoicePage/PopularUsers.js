import style from './style.module.scss';

const PopularUsers = () => {
  return (
    <div className={style.companiewListWrapper}>
      <img
        src="/assets/smart-i/CompaniesLists.svg"
        alt="companiew-lists"
        style={{width: '100%'}}
      />
    </div>
  );
};

export { PopularUsers };
