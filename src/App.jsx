import './App.css'
import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const  data = [
    {
        // image: `/src/assets/azelit.c51d4d1e_ZFoIpv.jpg`,
        name: 'Macrons',
        image:"https://images.pexels.com/photos/808941/pexels-photo-808941.jpeg?cs=srgb&dl=pexels-raudys-808941.jpg&fm=jpg",
        price: '180',
    },
    {
        // image: `/src/assets/terranz-other.fe41f67d_Z1IrlCC.jpg`,
        name: 'Strawberry Dessert',
        image:"https://images.pexels.com/photos/2638026/pexels-photo-2638026.jpeg?cs=srgb&dl=pexels-myfoodie-2638026.jpg&fm=jpg",
        price: '320'
    },
    {
        // image: `/src/assets/shipcom.ee1ba5d2_o18LH.jpg`,
        name: 'Mousse Cke',
        image:"https://w.forfun.com/fetch/bb/bb492192c97ac90b240ab3381ece3926.jpeg",
        price: '220'
    },
    {
        // image: `/src/assets/green-palmes.41a0af47_Z1Mo497.jpg`,
        name: 'Berry Pudding',
        image:"https://us.123rf.com/450wm/kwasny221/kwasny2211601/kwasny221160100331/52117318-panna-cotta-dessert-with-frsh-raspberries-and-mint-leaves-on-top.jpg?ver=6",
        price: '180'
    },
    {
        // image: `/src/assets/planet-fitness.2b86950e_Z1XdacQ.jpg`,
        name: 'Cup Cakes',
        image:"https://e0.pxfuel.com/wallpapers/183/303/desktop-wallpaper-cupcakes-sweet-dessert-fruit-cupcake-food.jpg",
        price: '340'
    },
    {
        // image: `/src/assets/wild-leaf.85d7f76f_Z1vakWD.jpg`,
        name: 'Cookkies',
        image:"https://thishealthytable.com/wp-content/uploads/2021/06/banana-oat-muffins-recipe.jpg",
        price: '220'
    },
    {
        // image: `/src/assets/best-western.d33d3fe0_Z2qgqbJ.jpg`,
        name: 'Brownies',
        image:"https://img.huffingtonpost.com/asset/621550be2700003752458c1f.jpeg?ops=scalefit_960_noupscale",
        price: '280'
    },
    {
        // image: `/src/assets/terranz-other.fe41f67d_Z1IrlCC.jpg`,
        name: 'Mug Cake',
        image:"https://www.blessthismessplease.com/wp-content/uploads/2024/01/mug-cake-recipe-15-of-22-600x800.jpg",
        price: '140'
    }
]


const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
      
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
};


  return (
    <>
    <div className="bg-pink-100 h-screen">
        <div className="mx-16 sm:mx-36 pt-16">
            <p className='font-semibold text-center sm:font-bold text-pink-800'><span className='text-red-900 pr-5'><i class="fa-solid fa-square"></i></span>DESSERT MENU<span className='text-red-900 pl-5'><i class="fa-solid fa-square"></i></span></p>
        </div>
        <div className="w-3/4 m-auto">
            <div className="mt-20">
                <Slider {...settings} >
                    {data.map((item) => (
                        <div className='sm:h-[360px] border bg-red-900 text-white rounded-3xl'>
                            <div className="flex flex-col gap-10 justify-center items-center">
                              <div className="mt-5">
                                <img className='w-[150px] m-auto h-[150px] rounded-full' src={item.image} alt="" />
                              </div>
                              <div className="">
                                <h1 className='font-bold sm:text-3xl'>{item.name}</h1>
                                <p className='font-thin sm:text-2xl text-center'>{item.price}</p>
                              </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    </div>
    </>
  )
}

export default App
