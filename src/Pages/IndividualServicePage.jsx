import React, { useEffect, useState } from 'react'
import SeconderyNavbar from '../components/SeconderyNavbar';
import { useParams } from 'react-router-dom'
import { serviceDetails } from '../constants/serviceDetails';


const imagesArray = [
  "https://aapkapainter.com/blog/wp-content/uploads/2018/09/disc-1024x768.jpg",
  "https://paintingdrive.com/blog/wp-content/uploads/2024/06/image7-9-1024x586.jpg",
  "https://aapkapainter.com/blog/wp-content/uploads/2024/05/purple-wall-texture-design.png",
  "https://aapkapainter.com/blog/wp-content/uploads/2024/05/olive-green-wall-texture-design.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-pTXjtL8QF9SZVzXmQg2SwmzrOGdD1rsQCT8WCsQ5YYtwzfkaE7r_yKaGdjBuWX_FXwQ&usqp=CAU",
  "https://nipponpaint.co.in/wp-content/uploads/2024/10/A-room-with-sofa-and-violet-colour-walls-designed-with-tetxures-.jpg",
  "https://assets.birlaopus.com/is/image/grasimindustries/sandstone?ts=1740737552654&dpr=off",
  "https://www.colourdrive.in/images/uploads/design-painting/wall-textures/b4918-asain-paints-zig-zag-textures.png",
  "https://www.colourdrive.in/images/uploads/design-painting/wall-textures/27357-spatula.jpg"
]

const IndividualServicePage = () => {

  const { servicecode } = useParams();
  const [detailsToDisplay, setDetailsToDisplay] = useState({});
  const [selectedImage, setSelectedImage] = useState(imagesArray[0])
  const [selectedIndex, setSelectedIndex] = useState(null);


  useEffect(() => {

    const thisServiceDetail = serviceDetails.filter((service) => service.servicecode == servicecode);
    setDetailsToDisplay(thisServiceDetail)

  }, []);

  console.log("details to display", detailsToDisplay);
  console.log("service name", detailsToDisplay[0]?.serviceName);



  return (
    <div className='min-h-screen bg-[#FAF6F0] '>

      <SeconderyNavbar />

      <div className='px-[60px]'>
        <div className='my-2'>
          <h1 className='text-black text-2xl font-normal'>{detailsToDisplay[0]?.serviceName}</h1>
          <p className='text-gray-700 '>{detailsToDisplay[0]?.desc1}</p>
        </div>
        <div className='h-[500px] flex'>
          <div className='h-full w-6/10 border'>
            <img className='h-full w-full rounded object-center object-cover'
              src={selectedImage}
              alt="image" />
          </div>
          <div className="w-4/10 px-4 flex flex-wrap items-start gap-4 self-start">
            {imagesArray?.map((image, i) => (
              <div
                onClick={() => setSelectedIndex(i)}  
                key={i}
                className={`h-[100px] w-[140px] p-1 curspo border rounded items-start self-start   
                  ${selectedIndex === i
                  ? "border-[3px] border-[#940023] "
                  : "border border-gray-600"}`}>
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

    </div>
  )
}

export default IndividualServicePage;
