import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import Loading from './components/Loading';
import Nav from './components/Nav'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Popular = React.lazy(() => import('./components/Popular'))
const Battle = React.lazy(() => import('./components/Battle'))
const Results = React.lazy(() => import('./components/Results'))

// import Dialog from './Dialog';

class App extends React.Component {
  state = {
    theme: "light"
  }

  toggleTheme = () => {
    this.setState(({theme}) => {
      return {
        theme: theme === 'light' ? 'dark' : 'light',
      }
    })
  }

  render () {
    return <Router>
      <div className={this.state.theme}>
        <div className='container'>
          <Nav theme={this.state.theme} toggleTheme={this.toggleTheme}/>
          <React.Suspense fallback={<Loading/>}>
            <Routes>
              <Route path='/' element={<Popular />} />
              <Route path='/battle' element={<Battle />} />
              <Route path='/results' element={<Results />} />
            </Routes>
          </React.Suspense>
        </div>
      </div>;
    </Router>
  }
}

const rootElement = document.getElementById('app');
const root = ReactDOM.createRoot(rootElement);

root.render(<App />);