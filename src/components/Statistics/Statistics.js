import React from 'react'
import PropTypes from 'prop-types'
import s from "./Statistics.module.css"



const Statistics = ({ title, stats }) => {
  return (
    <section>
      <h2 className={s.title}>{title}</h2>
      <ul className={s.list}>
        {stats.map(({ id, label, percentage }) => (
          <li key={id} className={s.item}>
            <span>{label}</span>
            <br />
            <span>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};

export default Statistics;



