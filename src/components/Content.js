import React from 'react';
import logo1 from './logo1.jpg';
import { Link } from "react-router-dom";
import {BrowserRouter, NavLink} from "react-router-dom";


function Content(props) {
    // const head = (
    //   <ul>
    //     {props.posts.map((post) =>
    //       <li key={post.id} className=''>
    //         {post.title}
    //       </li>
    //     )}
    //   </ul>
    // );
    const content = props.posts.map((post) =>
      <div key={post.id} className="four wide column">
        <h3><img src={logo1} /></h3>
        <p>{post.content}</p>
        <button type="button" class="btn nav-center">GIVE</button>
        <NavLink to="/learn" >
        <button type="button" class="btn btn-purple">LEARN</button>   
        </NavLink>     
        <p>{post.numbers}</p>

        <div class="ui progress error" data-percent="80">
  <div class="bar ">
    <div class="progress "></div>
  </div>
</div>

    


        <p>{post.percent}</p>
      </div>
      
    
    );
    return (
      
        <div class="ui grid content-frame">
        {content}
      </div>
    );
  }

  export default Content;