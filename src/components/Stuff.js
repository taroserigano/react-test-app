import React from 'react';
import logo1 from './logo1.jpg';
import { Link } from "react-router-dom";


function Stuff() {
    // const head = (
    //   <ul>
    //     {props.posts.map((post) =>
    //       <li key={post.id} className=''>
    //         {post.title}
    //       </li>
    //     )}
    //   </ul>
    // );
    // const head = props.posts.map((post) =>
    //   <div key={post.id} className="four wide column">
    //     <h1>{post.title}</h1>
       
    //   </div>
    // );



    return (
      
        <div class="ui grid">
        <div class="three column row">
          <div class="column color">Advice A Startup</div>
          <div class="column color">Join Minority Ventures Cohort</div>
          <div class="column color">Help  &lt; Code /&gt; </div>
        </div>



        </div>
    );
  }

  export default Stuff;