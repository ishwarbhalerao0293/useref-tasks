
import { useRef, useState, useEffect } from 'react';
import './App.css';

function App() {
  const inputRef = useRef(null);
  const intervalRef = useRef(null);

  const [seconds, setSeconds] = useState(0);
  const [name, setName] = useState('');

  const handleFocus = () => {
    inputRef.current?.focus();
  };

  const handleStart = () => {
    if (intervalRef.current !== null) return;

    intervalRef.current = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
  };

  const handleStop = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const handleReset = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setSeconds(0);
  };

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  const formatTime = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;

    return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  return (
    <div className="app">
      <nav className="navbar">
        <div className="brand">
          <span className="brand-icon">R</span>
          <span>ReactLab</span>
        </div>
        <span className="nav-tag">PRACTICE PROJECT</span>
      </nav>

      <header className="hero">
        <span className="eyebrow">REACT HOOKS · TASK 04</span>
        <h1>Mastering <span>useRef</span></h1>
        <p>Explore DOM references and persistent values with interactive examples.</p>
      </header>

      <main className="container">
        <section className="task-card">
          <div className="card-heading">
            <div className="icon-box focus-icon">◎</div>
            <div>
              <span className="task-label">TASK 04A</span>
              <h2>Focus Input</h2>
            </div>
            <span className="status">INTERACTIVE</span>
          </div>

          <p className="description">
            Automatically focus the input field using a React ref.
          </p>

          <label htmlFor="name-input">Your name</label>
          <div className="input-group">
            <input
              id="name-input"
              ref={inputRef}
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Type something here..."
            />
            <button className="primary-btn" onClick={handleFocus}>
              Focus input <span>↗</span>
            </button>
          </div>
          <p className="hint">Click the button to move your cursor into the input.</p>
        </section>

        <section className="task-card stopwatch-card">
          <div className="card-heading">
            <div className="icon-box timer-icon">◷</div>
            <div>
              <span className="task-label">TASK 04B</span>
              <h2>Stopwatch</h2>
            </div>
            <span className="status">LIVE TIMER</span>
          </div>

          <p className="description">
            Measure elapsed time using useState and useRef.
          </p>

          <div className="timer-panel">
            <span className="timer-caption">ELAPSED TIME</span>
            <div className="time-display">{formatTime(seconds)}</div>
            <span className="seconds-display">{seconds} seconds elapsed</span>
          </div>

          <div className="stopwatch-buttons">
            <button className="start-btn" onClick={handleStart}>
              <span>▶</span> Start
            </button>
            <button className="stop-btn" onClick={handleStop}>
              <span>Ⅱ</span> Stop
            </button>
            <button className="reset-btn" onClick={handleReset}>
              <span>↻</span> Reset
            </button>
          </div>
          <p className="hint centered">Start the timer, pause it, or reset to zero.</p>
        </section>

        <section className="concept-note">
          <span className="bulb">✦</span>
          <div>
            <h3>What you are learning</h3>
            <p>
              <strong>useRef</strong> stores a DOM reference and the interval ID
              without triggering a re-render. <strong>useState</strong> updates
              the time displayed on screen.
            </p>
          </div>
        </section>
      </main>

      <footer className="footer">
        Built with React <span>♥</span> Learning one hook at a time
      </footer>
    </div>
  );
}

export default App;
