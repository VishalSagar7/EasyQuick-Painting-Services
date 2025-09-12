import React from 'react'
import OneStep from './OneStep'
import { MoveRight } from 'lucide-react';
import Heading from './Heading';
import rightarrow from "../assets/icons/rightarrow.png";


const stepsArray = [
    {
        img: "https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg?t=st=1754039525~exp=1754043125~hmac=6d201c4db80c88497e4e1a24157f4639e22827a624936b0a204cc8bdb5276ba7&w=1380",
        description: "Get in touch with us"
    },
    {
        img: "https://img.freepik.com/free-vector/recruitment-interview-illustration_1284-8406.jpg?t=st=1754040733~exp=1754044333~hmac=69e962a5809a2e364f2ffb5f60d22c439564e9a231d40b7670b50dec8a478b31&w=1380",
        description: "Free Consultation"
    },
    {
        img: "https://img.freepik.com/free-vector/hand-drawn-painter-cartoon-illustration_23-2151046691.jpg?t=st=1754040854~exp=1754044454~hmac=744ae932c32bc1c4738c4583d065dca5d3d36b0c36189517d296c7be8269b253&w=1380",
        description: "Job starts"
    },
    {
        img: "https://img.freepik.com/free-vector/staff-management-perspective-definition-target-orientation-teamwork-organization-business-coach-company-executive-personnel-cartoon-characters_335657-2967.jpg?t=st=1754040940~exp=1754044540~hmac=8ead008f27f9d9387180215a67af33708dde05876ec9948183680a822f1cd7eb&w=1380",
        description: "Regular Supervision"
    },
    {
        img: "https://img.freepik.com/free-vector/cleaner-with-cleaning-products-housekeeping-service_18591-52057.jpg?t=st=1754041103~exp=1754044703~hmac=89eb9410052a3a1c4334c2b137c75d38a2b55db1c2163080e2898c5b9a5c21af&w=1380",
        description: "Post Painting clean-up"
    },
    {
        img: "https://img.freepik.com/free-vector/check-list-with-businessman-flat-design_79603-145.jpg?t=st=1754041269~exp=1754044869~hmac=c4955aaf2f4de5c779d161ea4cf5e73686cfc522a6200a903fc15c831ea13863&w=1380",
        description: "On time completion"
    },
]

const Steps = () => {
    return (
        <div className='w-full pb-[80px] md:px-10'>

            

            <Heading text={"Steps We Follow"}/>

            <div className='w-full  border mt-[40px] flex flex-wrap md:flex-nowrap items-center justify-center gap-4 md:gap-2'>

                {stepsArray.map((step, index) => (
                    <React.Fragment key={index}>
                        <OneStep step={step} />
                        {index !== stepsArray.length - 1 && (
                            // <MoveRight className='hidden md:block' color='black' size={50}/>
                            <img src={ rightarrow }/>
                        )}
                    </React.Fragment>
                ))}

            </div>

        </div>
    )
}

export default Steps;
