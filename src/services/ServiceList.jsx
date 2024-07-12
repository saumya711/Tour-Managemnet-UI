import React from 'react';
import ServiceCard from './ServiceCard';
import {Col} from 'reactstrap'

import weatherImg from '../assets/images/weather.png';
import guidImg from '../assets/images/guide.png';
import customizationImg from '../assets/images/customization.png';

const servicesDate = [
    {
        imgUrl: weatherImg,
        title: "Calculate Weather",
        desc: "desc 1."
    },
    {
        imgUrl: guidImg,
        title: "Best Tour Guid",
        desc: "desc 2."
    },
    {
        imgUrl: customizationImg,
        title: "Customization",
        desc: "desc 3."
    }
]


const ServiceList = () => {
  return (
    <>
        {servicesDate.map((item, index) => (
            <Col lg='3' key={index}>
                <ServiceCard item={item} />
            </Col>
        ))}
    </>
  )
}

export default ServiceList
