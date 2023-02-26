import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import Popular from './components/Popular';
import Battle from './components/Battle';

// import Dialog from './Dialog';

class App extends React.Component {
  render () {
    return <div className='light'>
      <div className='container'>
        <Battle />
      </div>
    </div>;
  }
}

const rootElement = document.getElementById('app');
const root = ReactDOM.createRoot(rootElement);

root.render(<App />);