// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Component1 from './components/Component1';
import './style.css';

export function App() {
  return (
    <div className="elements">
      <div className="page">
        <div className="top" />
        <div className="bottom">
          <ul className="tags">
            {Array.from({ length: 20 }).map(() => {
              const size = Math.floor(Math.random() * 20 + 2);
              return <li className="tag" style={{ width: `${size}%` }} />;
            })}
          </ul>
          <Component1 />
          <span className="words">
            <span className="word" />
            {Array.from({ length: 200 }).map(() => {
              const size = Math.floor(Math.random() * 200 + 2);
              return <li className="word" style={{ width: `${size}px` }} />;
            })}
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
