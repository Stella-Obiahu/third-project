import myImage from "../src/images/img2.png";
import my2Image from "../src/images/img1.jpg";
import my3Image from "../src/images/img3.jpg";
import star from "../src/images/star.png";
import my22Image from "../src/images/img22.jpg"
let data = [
    {
        id : 1,
        title : "Life lesson with Katie Zaferes",
        description :"Thoughtout my career, many of my highest moments came only after many losses",
        price : 136,
        coverImg : myImage,
        star : star,
        stats : {
            rating : 5.0 ,
            reviewCount : "(6) ."
        },
        location : "online",
        openSpots : 0,
    },
    {
        id : 2,
        title : "Life lesson with Katie Zaferes",
        description :"Thoughtout my career, many of my highest moments came only after many losses",
        price : 125,
        coverImg : my2Image,
        star : star,
        stats : {
            rating : 5.0 ,
            reviewCount : "(30) ."
        },
        location : "USA",
        openSpots : 27,
    },
    {
        id : 3,
        title : "Life lesson with Katie Zaferes",
        description :"Thoughtout my career, many of my highest moments came only after many losses",
        price : 50,
        coverImg : my22Image,
        star : star,
        stats : {
            rating : 5.0 ,
            reviewCount : "(46) ."
        },
        location : "online",
        openSpots : 45,
    }
]
export default data