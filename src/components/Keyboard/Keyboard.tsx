import styles from './keyboard.module.css'

const Keyboard = () => {
  return (
    <div className={`${styles.main}`}>
      <div className={styles.row1}>
        <div className={`${styles.esc} ${styles.key}`}>esc</div>
        <div className={`${styles.fnKey} ${styles.key}`}>F1</div>
        <div className={`${styles.fnKey} ${styles.key}`}>F2</div>
        <div className={`${styles.fnKey} ${styles.key}`}>F3</div>
        <div className={`${styles.fnKey} ${styles.key}`}>F4</div>
        <div className={`${styles.fnKey} ${styles.key}`}>F5</div>
        <div className={`${styles.fnKey} ${styles.key}`}>F6</div>
        <div className={`${styles.fnKey} ${styles.key}`}>F7</div>
        <div className={`${styles.fnKey} ${styles.key}`}>F8</div>
        <div className={`${styles.fnKey} ${styles.key}`}>F9</div>
        <div className={`${styles.fnKey} ${styles.key}`}>F10</div>
        <div className={`${styles.fnKey} ${styles.key}`}>F11</div>
        <div className={`${styles.fnKey} ${styles.key}`}>F12</div>
        <div className={`${styles.powerButton} ${styles.key}`}>Power</div>
      </div>
      <div className={styles.row2}>
        <div className={`${styles.tilde} ${styles.key}`}>
          <span>~</span>
          <span>.</span>
        </div>
        <div className={`${styles.number} ${styles.key}`}>
          <span className={styles.symbol}>!</span>
          <span className={styles.digit}>1</span>
        </div>
        <div className={`${styles.number} ${styles.key}`}>
          <span className={styles.symbol}>@</span>
          <span className={styles.digit}>2</span>
        </div>
        <div className={`${styles.number} ${styles.key}`}>
          <span className={styles.symbol}>#</span>
          <span className={styles.digit}>3</span>
        </div>
        <div className={`${styles.number} ${styles.key}`}>
          <span className={styles.symbol}>$</span>
          <span className={styles.digit}>4</span>
        </div>
        <div className={`${styles.number} ${styles.key}`}>
          <span className={styles.symbol}>%</span>
          <span className={styles.digit}>5</span>
        </div>
        <div className={`${styles.number} ${styles.key}`}>
          <span className={styles.symbol}>^</span>
          <span className={styles.digit}>6</span>
        </div>
        <div className={`${styles.number} ${styles.key}`}>
          <span className={styles.symbol}>&</span>
          <span className={styles.digit}>7</span>
        </div>
        <div className={`${styles.number} ${styles.key}`}>
          <span className={styles.symbol}>*</span>
          <span className={styles.digit}>8</span>
        </div>
        <div className={`${styles.number} ${styles.key}`}>
          <span className={styles.symbol}>(</span>
          <span className={styles.digit}>9</span>
        </div>
        <div className={`${styles.number} ${styles.key}`}>
          <span className={styles.symbol}>)</span>
          <span className={styles.digit}>0</span>
        </div>
        <div className={`${styles.number} ${styles.key}`}>
          <span className={styles.symbol}>_</span>
          <span className={styles.digit}>-</span>
        </div>
        <div className={`${styles.number} ${styles.key}`}>
          <span className={styles.symbol}>+</span>
          <span className={styles.digit}>=</span>
        </div>
        <div className={`${styles.delete} ${styles.key}`}>delete</div>
      </div>
      <div className={styles.row2}>
        <div className={`${styles.tab} ${styles.key}`}>
          <span>tab</span>
        </div>
        <div className={`${styles.number} ${styles.key}`}>
          <span>Q</span>
        </div>
        <div className={`${styles.number} ${styles.key}`}>
          <span>W</span>
        </div>
        <div className={`${styles.number} ${styles.key}`}>
          <span>E</span>
        </div>
        <div className={`${styles.number} ${styles.key}`}>
          <span>R</span>
        </div>
        <div className={`${styles.number} ${styles.key}`}>
          <span>T</span>
        </div>
        <div className={`${styles.number} ${styles.key}`}>
          <span>Y</span>
        </div>
        <div className={`${styles.number} ${styles.key}`}>
          <span>U</span>
        </div>
        <div className={`${styles.number} ${styles.key}`}>
          <span>I</span>
        </div>
        <div className={`${styles.number} ${styles.key}`}>
          <span>O</span>
        </div>
        <div className={`${styles.number} ${styles.key}`}>
          <span className={styles.digit}>P</span>
        </div>
        <div className={`${styles.number} ${styles.key}`}>
          <span className={styles.symbol}>&#123;</span>
          <span className={styles.digit}>[</span>
        </div>
        <div className={`${styles.number} ${styles.key}`}>
          <span className={styles.symbol}>&#125;</span>
          <span className={styles.digit}>]</span>
        </div>
        <div className={`${styles.pipe} ${styles.key}`}>
          <span className={styles.symbol}>|</span>
          <span className={styles.digit}>\</span>
        </div>
      </div>
      <div className={styles.row2}>
        <div className={`${styles.caps} ${styles.key}`}>
          <span>caps lock</span>
        </div>
        <div className={`${styles.number} ${styles.key}`}>
          <span>A</span>
        </div>
        <div className={`${styles.number} ${styles.key}`}>
          <span>S</span>
        </div>
        <div className={`${styles.number} ${styles.key}`}>
          <span>D</span>
        </div>
        <div className={`${styles.number} ${styles.key}`}>
          <span>F</span>
        </div>
        <div className={`${styles.number} ${styles.key}`}>
          <span>G</span>
        </div>
        <div className={`${styles.number} ${styles.key}`}>
          <span>H</span>
        </div>
        <div className={`${styles.number} ${styles.key}`}>
          <span>J</span>
        </div>
        <div className={`${styles.number} ${styles.key}`}>
          <span>K</span>
        </div>
        <div className={`${styles.number} ${styles.key}`}>
          <span>L</span>
        </div>
        <div className={`${styles.number} ${styles.key}`}>
          <span className={styles.symbol}>:</span>
          <span className={styles.digit}>;</span>
        </div>
        <div className={`${styles.number} ${styles.key}`}>
          <span className={styles.symbol}>"</span>
          <span className={styles.digit}>'</span>
        </div>
        <div className={`${styles.delete} ${styles.key}`}>return</div>
      </div>
      <div className={styles.row2}>
        <div className={`${styles.shift} ${styles.key}`}>
          <span>shift</span>
        </div>
        <div className={`${styles.number} ${styles.key}`}>
          <span className={styles.digit}>Z</span>
        </div>
        <div className={`${styles.number} ${styles.key}`}>
          <span className={styles.digit}>X</span>
        </div>
        <div className={`${styles.number} ${styles.key}`}>
          <span className={styles.digit}>C</span>
        </div>
        <div className={`${styles.number} ${styles.key}`}>
          <span className={styles.digit}>V</span>
        </div>
        <div className={`${styles.number} ${styles.key}`}>
          <span className={styles.digit}>B</span>
        </div>
        <div className={`${styles.number} ${styles.key}`}>
          <span className={styles.digit}>N</span>
        </div>
        <div className={`${styles.number} ${styles.key}`}>
          <span className={styles.digit}>M</span>
        </div>
        <div className={`${styles.number} ${styles.key}`}>
          <span className={styles.symbol}>&gt;</span>
          <span className={styles.digit}>,</span>
        </div>
        <div className={`${styles.number} ${styles.key}`}>
          <span className={styles.symbol}>&lt;</span>
          <span className={styles.digit}>.</span>
        </div>
        <div className={`${styles.number} ${styles.key}`}>
          <span className={styles.symbol}>?</span>
          <span className={styles.digit}>/</span>
        </div>
        <div className={`${styles.shift} ${styles.key}`}>shift</div>
      </div>
      <div className={styles.row2}>
        <div className={`${styles.fn} ${styles.key}`}>
          <span>fn</span>
        </div>
        <div className={`${styles.control} ${styles.key}`}>
          <span>control</span>
        </div>
        <div className={`${styles.option} ${styles.key}`}>
          <span>option</span>
        </div>
        <div className={`${styles.command} ${styles.key}`}>
          <span>command</span>
        </div>
        <div className={`${styles.number} ${styles.key}`}>
          <span className={styles.symbol}>$</span>
          <span className={styles.digit}>4</span>
        </div>
        <div className={`${styles.number} ${styles.key}`}>
          <span className={styles.symbol}>%</span>
          <span className={styles.digit}>5</span>
        </div>
        <div className={`${styles.number} ${styles.key}`}>
          <span className={styles.symbol}>^</span>
          <span className={styles.digit}>6</span>
        </div>
        <div className={`${styles.number} ${styles.key}`}>
          <span className={styles.symbol}>&</span>
          <span className={styles.digit}>7</span>
        </div>
        <div className={`${styles.number} ${styles.key}`}>
          <span className={styles.symbol}>*</span>
          <span className={styles.digit}>8</span>
        </div>
        <div className={`${styles.number} ${styles.key}`}>
          <span className={styles.symbol}>(</span>
          <span className={styles.digit}>9</span>
        </div>
        <div className={`${styles.number} ${styles.key}`}>
          <span className={styles.symbol}>)</span>
          <span className={styles.digit}>0</span>
        </div>
        <div className={`${styles.number} ${styles.key}`}>
          <span className={styles.symbol}>_</span>
          <span className={styles.digit}>-</span>
        </div>
        <div className={`${styles.number} ${styles.key}`}>
          <span className={styles.symbol}>+</span>
          <span className={styles.digit}>=</span>
        </div>
        <div className={`${styles.delete} ${styles.key}`}>delete</div>
      </div>
    </div>
  )
}

export default Keyboard
