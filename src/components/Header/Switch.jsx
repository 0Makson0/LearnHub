import React from 'react';
import styles from './Switch.module.css';

const Switch = ({ checked, onChange }) => {
  return (
    <label className={styles.uiSwitch}>
      <input 
        type="checkbox" 
        checked={checked} 
        onChange={onChange} 
        className={styles.input} 
      />
      <div className={styles.slider}>
        <div className={styles.circle}></div>
      </div>
    </label>
  );
};

export default Switch;