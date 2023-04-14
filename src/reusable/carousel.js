import { Carousel } from 'react-carousel-minimal';

function Carousels({slide, thumbs}) {
  // console.log(slide)
  // console.log(thumbs)
 const data = [
    {
      image: "./jop.avif",
    },
    {
      image: "./joop.avif",
    },
    {
      image: "./jooop.avif",
    }
  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  return (
    <div className="App">
      <div style={{ textAlign: "center" }}>
        <div style={{padding: "0 0px",margin:'0 auto'}}>
          <Carousel
            data={data}
            width="100%"
            height="300px"
            radius="0px"
            automatic={slide}
            slideNumberStyle={slideNumberStyle}
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={thumbs}
            thumbnailWidth="100px"
            style={{textAlign: "center",width: "100%",margin: "0px auto",overflowX:'hidden'}}
          />
        </div>
      </div>
    </div>
  );
}

export default Carousels;
