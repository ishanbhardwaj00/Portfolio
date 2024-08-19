import styles from './keyboard.module.css'

const Keyboard = () => {
  return (
    <div className={`${styles.main}`}>
      <div className={styles.row}>
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
        <div className={`${styles.powerButton} ${styles.key} ${styles.right}`}>
          <span>Power</span>
        </div>
      </div>
      <div className={styles.row}>
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
        <div className={`${styles.delete} ${styles.key} ${styles.right}`}>
          <span>delete</span>
        </div>
      </div>
      <div className={styles.row}>
        <div className={`${styles.tab} ${styles.left} ${styles.key}`}>
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
        <div className={`${styles.number} ${styles.key} ${styles.skillKey}`}>
          <span className={styles.char}>R</span>
          <span className={styles.skillName}>
            <img src="/images/r.png" alt="redis" />
          </span>
          <div className={styles.expandedContainer}>
            <div className={styles.expandedSkills}>
              <span>
                <img src="/images/redis.png" alt="skills" />
              </span>
              <span>Redis</span>
              <img src="/images/react.png" alt="skills" />
              <span>React</span>
            </div>
          </div>
        </div>
        <div className={`${styles.number} ${styles.key} ${styles.skillKey}`}>
          <span className={styles.char}>T</span>
          <span className={styles.skillName}>
            <img src="/images/t.png" alt="ts" />
          </span>
          <div className={styles.expandedContainer}>
            <div className={styles.expandedSkills}>
              <span>
                <img src="/images/t.png" alt="skills" />
              </span>
              <span>Typescript</span>
            </div>
          </div>
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
        <div className={`${styles.number} ${styles.key} ${styles.skillKey}`}>
          <span className={`${styles.char}`}>P</span>
          <span className={styles.skillName}>
            <img src="/images/p.png" alt="redis" />
          </span>
          <div className={styles.expandedContainer}>
            <div className={styles.expandedSkills}>
              <span>
                <img src="/images/p.png" alt="skills" />
              </span>
              <span>Python</span>
            </div>
          </div>
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
      <div className={styles.row}>
        <div className={`${styles.caps} ${styles.left} ${styles.key}`}>
          <span>caps lock</span>
        </div>
        <div className={`${styles.number} ${styles.key} ${styles.skillKey}`}>
          <span className={styles.char}>A</span>
          <span className={styles.skillName}>
            <img src="/images/a.png" alt="aws" />
          </span>
          <div className={styles.expandedContainer}>
            <div className={styles.expandedSkills}>
              <span>
                <img src="/images/a.png" alt="skills" />
              </span>
              <span>AWS</span>
            </div>
          </div>
        </div>
        <div className={`${styles.number} ${styles.key} ${styles.skillKey}`}>
          <span className={styles.char}>S</span>
          <span className={styles.skillName}>
            <img src="/images/s.png" alt="SQL" />
          </span>
          <div className={styles.expandedContainer}>
            <div className={styles.expandedSkills}>
              <span>
                <img src="/images/s.png" alt="skills" />
              </span>
              <span>SQL</span>
            </div>
          </div>
        </div>
        <div className={`${styles.number} ${styles.key} ${styles.skillKey}`}>
          <span className={styles.char}>D</span>
          <span className={styles.skillName}>
            <img src="/images/d.png" alt="aws" />
          </span>
          <div className={styles.expandedContainer}>
            <div className={styles.expandedSkills}>
              <span>
                <img src="/images/d.png" alt="skills" />
              </span>
              <span>Docker</span>
            </div>
          </div>
        </div>
        <div className={`${styles.number} ${styles.key} ${styles.skillKey}`}>
          <span className={styles.char}>F</span>
          <span className={styles.skillName}>
            <img src="/images/f.png" alt="flutter" />
          </span>
          <div className={styles.expandedContainer}>
            <div className={styles.expandedSkills}>
              <span>
                <img src="/images/f.png" alt="skills" />
              </span>
              <span>Flutter</span>
            </div>
          </div>
        </div>
        <div className={`${styles.number} ${styles.key} ${styles.skillKey}`}>
          <span className={styles.char}>G</span>
          <span className={styles.skillName}>
            <img src="/images/g.png" alt="git" />
          </span>
          <div className={styles.expandedContainer}>
            <div className={styles.expandedSkills}>
              <span>
                <img src="/images/g.png" alt="skills" />
              </span>
              <span>Github</span>
            </div>
          </div>
        </div>
        <div className={`${styles.number} ${styles.key}`}>
          <span>H</span>
        </div>
        <div className={`${styles.number} ${styles.key} ${styles.skillKey}`}>
          <span className={styles.char}>J</span>
          <span className={styles.skillName}>
            <img src="/images/j.png" alt="git" />
          </span>
          <div className={styles.expandedContainer}>
            <div className={styles.expandedSkills}>
              <span>
                <img src="/images/j.png" alt="skills" />
              </span>
              <span>JavaScript</span>
            </div>
          </div>
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
        <div className={`${styles.delete} ${styles.key} ${styles.right}`}>
          <span>return</span>
        </div>
      </div>
      <div className={styles.row}>
        <div className={`${styles.shift} ${styles.left} ${styles.key}`}>
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
        <div className={`${styles.number} ${styles.key} ${styles.skillKey}`}>
          <span className={styles.char}>M</span>
          <span className={styles.skillName}>
            <img src="/images/m.png" alt="mongodb" />
          </span>
          <div className={styles.expandedContainer}>
            <div className={styles.expandedSkills}>
              <span>
                <img src="/images/m.png" alt="skills" />
              </span>
              <span>MongoDB</span>
            </div>
          </div>
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
        <div className={`${styles.shift} ${styles.key} ${styles.right}`}>
          <span>shift</span>
        </div>
      </div>
      <div className={styles.row}>
        <div className={`${styles.number} ${styles.key}`}>
          <span>fn</span>
        </div>
        <div className={`${styles.number} ${styles.key} ${styles.textSm}`}>
          <span>control</span>
        </div>
        <div className={`${styles.number} ${styles.key} ${styles.textSm}`}>
          <span>option</span>
        </div>
        <div className={`${styles.command} ${styles.key} ${styles.textSm}`}>
          <span>command</span>
        </div>
        <div className={`${styles.space} ${styles.key}`}></div>
        <div className={`${styles.command} ${styles.key} ${styles.textSm}`}>
          <span>command</span>
        </div>
        <div className={`${styles.number} ${styles.key} ${styles.textSm}`}>
          <span className={styles.symbol}>option</span>
        </div>
        <div className={`${styles.number} ${styles.key}`}>
          <span className={styles.symbol}>
            <img src="/images/left.png" alt="left" />
          </span>
        </div>
        <div className={`${styles.number} ${styles.key}`}>
          <img src="/images/up.png" alt="up" />
          <img src="/images/down.png" alt="down" />
        </div>
        <div className={`${styles.number} ${styles.key}`}>
          <img src="/images/right.png" alt="right" />
        </div>
      </div>
    </div>
  )
}

export default Keyboard
