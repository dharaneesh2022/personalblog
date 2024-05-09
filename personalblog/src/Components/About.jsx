
import './About.css'
import img from "../public/me.jpg"
import img1 from "../public/me_1.jpg"
import img2 from "../public/me_2.jpg"

function About() {
  return (
  <div className='about'>
    <h1 className='about'> About Me </h1>
    <div className='info_1'>
      <div className='about_1'>
        <h4 >Hello! I'm Dharaneesh </h4> <p> Welcome to my corner of the web!, a budding photographer with a passion for capturing the essence of life through my lens. Although I primarily focus on street photography, I'm not one to shy away from experimenting with various genres and techniques.</p>
      </div>
      <img className='img' src={img} alt="dharaneesh"></img>
    </div>
    <div className='info_1 '>
    <img className='img' src={img1} alt="dharaneesh"></img>
      <div className='about_1'> Beyond photography, I wear multiple hats - from crafting captivating logos to weaving narratives through video editing. Each medium allows me to express my creativity in unique ways, weaving together visual stories that resonate with viewers.
                                My journey into photography began as a means to freeze moments in time, but it quickly evolved into a profound exploration of the world around me. Whether I'm wandering through bustling city streets or immersing myself in the tranquility of nature, I find inspiration in the mundane and the extraordinary alike.
       </div>
    </div>
    <div className='info_1'>
      <div className='about_1'>
        <p>Through this blog, I aim to share my experiences, insights, and the lessons I've learned along the way. Join me as I navigate the vast landscape of photography, design, and storytelling, one frame at a time.</p>
      </div>
        <img className='img' src={img2} alt="dharaneesh"></img>
    </div>
  </div>
  );
}

export default About;
