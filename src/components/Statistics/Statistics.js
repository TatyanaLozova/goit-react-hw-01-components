import React from 'react'
import PropTypes from 'prop-types'
import s from "./Statistics.module.css"



const Statistics = ({ title, stats }) => {
  return (
    <section>
      <h2 className={s.title}>{title}</h2>
      <ul className={s.list}>
        {stats.map(({ id, label, percentage }) => (
          <li id={id} className={s.item}>
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










// <section className="statistics">
//   <h2 className="title">Upload stats</h2>

//   <ul className="stat-list">
//     <li className="item">
//       <span className="label">.docx</span>
//       <span className="percentage">4%</span>
//     </li>
//     <li className="item">
//       <span className="label">.mp3</span>
//       <span className="percentage">14%</span>
//     </li>
//     <li className="item">
//       <span className="label">.pdf</span>
//       <span className="percentage">41%</span>
//     </li>
//     <li className="item">
//       <span className="label">.mp4</span>
//       <span className="percentage">12%</span>
//     </li>
//   </ul>
// </section>