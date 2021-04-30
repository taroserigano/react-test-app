import React from 'react';
import logo1 from './logo1.jpg';


function Content(props) {
    // const sidebar = (
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
        <button type="button" class="btn btn-purple">LEARN</button>        
        <p>{post.numbers}</p>
        <p>{post.numbers}</p>
        <p>{post.numbers}</p>


        {/* data-percent="100" */}

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
        {/* {sidebar} */}
        {content}
      </div>
    );
  }

  export default Content;