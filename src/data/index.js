import {images} from "../images";
export const navBarLinks = ['Make An Appointment', 'Services', 'Our Locations']

export const serviceCards = [
     {
        image:images.careCenter,
        description:'Working to meet the medical and social needs of the HIV community.',
        button:'Care Center',
    },
    {
        image:images.covid19,
        description:`Protect yourself, those you love and your community. Anyone interested in receiving the COVID-19 vaccine is welcome to come to us for help.`,
        button:'Covid-19',
    },  
    {
        image:images.emergencyServices,
        description:'Nobody knows when an emergency will arise, so it is important to know where to go for the right care.',
        button:'ER Services',
    },  
    {
        image:images.heartCare,
        description: 'Our heart care team is here to help you with goal of always keeping your heart beating strong.',
        button:'Heart Care',
    },  
    {
        image:images.Maternity,
        description:'Let us help you and your family prepare for a healthy and happy beginning for a lifetime of memories',
        button:'Maternity',
    },  
    {
        image:images.orthopedicServices,
        description:'If you’re suffering from bone or joint issues, the right treatment can get you moving again quickly.',
        button:'Orthopedic', 
    },  
]

export const footerLinks = [
    {
        title:'COMPANY',
        links: ['Careers','Partners & integrations','About Us','Leadership','Support','Contact Us','News']
    },
    {
        title:'SERVICES',
        links: ['Care Center',' Emergency Services','Heart Care','Maternity','Orthopedic Services','Covid-19']
    },
    {
        title:'RESOURCES',
        links: ['Case Studies', 'White Papers','Blog','Newsroom']
    }
]

export const socialMediaImages = [images.facebook, images.linkedin,images.twitter]