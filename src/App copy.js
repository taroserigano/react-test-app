import logo from './logo.svg';
import './App.css';
import Intro1 from './components/Intro1';
import Intro2 from './components/Intro2';

import Header2 from './components/Header2';
import Content from './components/Content';
import {BrowserRouter, NavLink} from "react-router-dom";
import {useState} from "react";
import Content2 from './components/Content2';
import Main from './components/Main';
import { Link } from "react-router-dom";
import Headline from './components/Headline';
import Stuff from './components/Stuff';


import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const posts = [
  {id: 1, title: 'Hello World', content: 'Changing the way you goold forever', numbers: '$83,000/$100,000', percent: '83% Dunded'},
  {id: 2, title: 'Installation', content: 'Changing the way you goold forever', numbers: '$83,000/$100,000', percent: '83% Dunded'},
  {id: 3, title: 'Installation', content: 'Changing the way you goold forever', numbers: '$83,000/$100,000', percent: '83% Dunded'},
  {id: 4, title: 'Installation', content: 'Changing the way you goold forever', numbers: '$83,000/$100,000', percent: '83% Dunded'}
];

const head1 = [
  {id: 1, title: "Featured Startups"}
];
const head2 = [
  {id: 1, title: "Upcoming Startups"}
];
const head3 = [
  {id: 1, title: "My Courses"}
];
const head4 = [
  {id: 1, title: "Featured Courses"}
];
function App() {
  return (
    
    <div className="App">

       <Header2 />
<Main />

      <Switch>

      <Route path="/"  component={Content}>
      <Intro1 />

          <Headline posts={head1} />
          <Content posts={posts}/>
          <Headline posts={head2} />
          <Content posts={posts}/>
        </Route>

      <Route path="/learn" component={Content2}>
      <Intro2 />

      <Headline posts={head3} />
          <Content2 posts={posts}/>
          <Headline posts={head4} />
          <Content posts={posts}/>
        </Route>
      </Switch>



      
   <Stuff />



    </div>
  );
}

export default App;
