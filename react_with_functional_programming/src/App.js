import { Link } from 'react-router-dom';
import './App.css';
import { map } from './utils/functions';

const NAV_ELEMENT = [
  {
    id: 'slfknenlsk2',
    content: 'TO-DO',
    linkTo: '/todo',
  },
  {
    id: 'dfdowsdf23rdf',
    content: 'Counter',
    linkTo: '/counter',
  },
  {
    id: 'lk33kn3lkndslfj',
    content: 'Calculator',
    linkTo: '/Calculator',
  },
];

function App() {
  return (
    <div>
      <header>
        <nav>
          <ul className="navs">
            {map(
              (a) => (
                <li className="nav">
                  <Link to={a.linkTo}>{a.content}</Link>
                </li>
              ),
              NAV_ELEMENT
            )}
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default App;
