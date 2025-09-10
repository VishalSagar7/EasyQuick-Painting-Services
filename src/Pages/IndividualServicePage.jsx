import React, { useEffect, useState } from 'react'
import SeconderyNavbar from '../components/SeconderyNavbar';
import { useParams } from 'react-router-dom'
import { serviceDetails } from '../constants/serviceDetails';
import Footer from "../components/Footer.jsx"


// const imagesArray = [
//   "https://aapkapainter.com/blog/wp-content/uploads/2018/09/disc-1024x768.jpg",
//   "https://paintingdrive.com/blog/wp-content/uploads/2024/06/image7-9-1024x586.jpg",
//   "https://aapkapainter.com/blog/wp-content/uploads/2024/05/purple-wall-texture-design.png",
//   "https://aapkapainter.com/blog/wp-content/uploads/2024/05/olive-green-wall-texture-design.png",
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-pTXjtL8QF9SZVzXmQg2SwmzrOGdD1rsQCT8WCsQ5YYtwzfkaE7r_yKaGdjBuWX_FXwQ&usqp=CAU",
//   "https://nipponpaint.co.in/wp-content/uploads/2024/10/A-room-with-sofa-and-violet-colour-walls-designed-with-tetxures-.jpg",
//   "https://assets.birlaopus.com/is/image/grasimindustries/sandstone?ts=1740737552654&dpr=off",
//   "https://www.colourdrive.in/images/uploads/design-painting/wall-textures/b4918-asain-paints-zig-zag-textures.png",
//   "https://www.colourdrive.in/images/uploads/design-painting/wall-textures/27357-spatula.jpg"
// ]

const IndividualServicePage = () => {

  const { servicecode } = useParams();
  const [imagesArray, setImagesArray] = useState([]);
  const [detailsToDisplay, setDetailsToDisplay] = useState({});
  const [selectedImage, setSelectedImage] = useState(imagesArray[0])
  const [selectedIndex, setSelectedIndex] = useState(null);


  useEffect(() => {

    const thisServiceDetail = serviceDetails.filter((service) => service.servicecode == servicecode);
    // console.log("this service details", thisServiceDetail[0]);
    
    setDetailsToDisplay(thisServiceDetail);
    setImagesArray(thisServiceDetail[0]?.imagesArray);
    setSelectedImage(thisServiceDetail[0]?.imagesArray?.[0])

  }, []);

  console.log("imagesArray" , imagesArray);
  

  // console.log("details to display", detailsToDisplay);
  // console.log("service name", detailsToDisplay[0]?.serviceName);


  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  },[]);

  return (
    <div className='min-h-screen bg-[#FAF6F0] '>

      <SeconderyNavbar />

      <div className='px-[10px]  md:px-[60px]'>
        <div className='my-2'>
          <h1 className='text-black text-2xl font-normal'>{detailsToDisplay[0]?.serviceName}</h1>
          <p className='text-gray-700 text-xs md:text-lg '>{detailsToDisplay[0]?.desc1}</p>
        </div>
        <div className='md:h-[500px] md:flex'>
          <div className=' h-[280px] md:h-full w-full md:w-6/10 border'>
            <img className='h-full w-full rounded object-center object-cover'
              src={selectedImage}
              alt="image" />
          </div>
          <div className="      not-visited: h-auto w-full md:w-4/10 md:px-8 py-4 md:py-0 flex flex-wrap items-start justify-between gap-4 md:gap-4 self-start">
            {imagesArray?.map((image, i) => (
              <div
                onClick={() => setSelectedIndex(i)}  
                key={i}
                className={`h-[80px] w-[100px] md:h-[100px] md:w-[140px] md:p-1 curspo rounded items-start self-start   
                  ${selectedIndex === i
                  ? "border-[3px] border-[#940023] "
                  : ""}`}>
                <img
                  onClick={() => setSelectedImage(image)}
                  className="h-full w-full rounded object-cover object-center"
                  src={image}
                  alt=""
                />
              </div>
            ))}
          </div>



        </div>
      </div>

      <Footer/>

    </div>
  )
}

export default IndividualServicePage;
