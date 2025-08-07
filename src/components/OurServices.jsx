import ServiceCard from './ServiceCard';
import { servicesArray } from './utils/inputFieldCss';

const OurServices = () => {
    return (
        <div className='w-full'
            // style={{
            //     background: `url(${"https://img.freepik.com/free-photo/flat-lay-paint-roller-isolated-white-background_53876-139763.jpg?t=st=1753957857~exp=1753961457~hmac=3b00b56e9292506d4cecd4e7c6652af14f04dc9b3e0e9783f553df7a1319f147&w=1380"})`,
            //     backgroundPosition: "center",
            //     backgroundSize : "cover"
            // }}
        >
            <h1 className='text-2xl md:text-4xl topic-head text-center text-gray-900 font-bold font-mono capitalize'>Services we provide</h1>
            <div className='flex w-full flex-wrap p-6 md:p-12 justify-between gap-y-6 md:gap-y-12'>
                {
                    servicesArray?.length > 0 && servicesArray?.map((service, index) =>
                        <ServiceCard key={index} service={service} />
                    )
                }
            </div>
        </div>
    )
}

export default OurServices;
