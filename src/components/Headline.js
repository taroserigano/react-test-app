import React from 'react';
import logo1 from './logo1.jpg';
import { Link } from "react-router-dom";


function Headline(props) {
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
    const head = props.posts.map((post) =>
    <div key={post.id} className="four wide column">
      <h1>{post.title}</h1>
     
    </div>
  );



    return (
      
        <div class="ui grid content-frame">
        {head}
      </div>
    );
  }

  export default Headline;