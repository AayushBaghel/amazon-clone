import React from 'react';
import './Home.css';
import Product from './Product';
import Category from './Category';
import SignInAd from './SignInAd';

function Home() {
  return (
    <div className='home'>
        <img
            className='home__image'
            src='https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2023/BAU2023/ATFGW/Home_mela_Mar_3000x1200_Unrec._CB590930664_.jpg'
            alt=''
        />
        {/* Category id, title, image1, image2, image3, image4, title1, title2, title3, title4 */}
        <div className='home__row'>
          <Category 
            id='001'
            title="Home appliances | Up to 55% off"
            image1='https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg'
            title1="Air conditioners"
            image2='https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg'
            title2="Refrigerators"
            image3='https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg'
            title3="Microwaves"
            image4='https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/186x116---wm._SY116_CB667322346_.jpg'
            title4="Washing machines"
          />
          <Category 
            id='002'
            title="Up to 60% off | Styles for men"
            image1='https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-1-186-116._SY116_CB636110853_.jpg'
            title1="Clothing"
            image2='https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-2-186-116._SY116_CB636110853_.jpg'
            title2="Footwear"
            image3='https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-3-186-116._SY116_CB636110853_.jpg'
            title3="Watches"
            image4='https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-4-186-116._SY116_CB636110853_.jpg'
            title4="Bags & luggage"
          />
          <Category 
            id='003'
            title="Latest and upcoming launches"
            image1='https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/Meghana/iQOO/GW/D78091548_MayART_Central-Latest-Launches-Page_DEsign-SIM_PC_QuadCard_186X116_1._SY116_CB591041374_.jpg'
            title1="OnePlus Nord CE 3 Lite 5G"
            image2='https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/Meghana/iQOO/GW/D78091548_MayART_Central-Latest-Launches-Page_DEsign-SIM_PC_QuadCard_186X116_2._SY116_CB591041374_.jpg'
            title2="Samsung M14 5G | ₹14,990"
            image3='https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/Meghana/iQOO/GW/D78091548_MayART_Central-Latest-Launches-Page_DEsign-SIM_PC_QuadCard_186X116_3._SY116_CB591041374_.jpg'
            title3="Realme narzo N55 | ₹10,999"
            image4='https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/Meghana/iQOO/GW/D78091548_MayART_Central-Latest-Launches-Page_DEsign-SIM_PC_QuadCard_186X116_4._SY116_CB591041374_.jpg'
            title4="Explore all new launches"
          />
          <SignInAd/>
        </div>
        {/* Product id, title, price, rating, image */}
        <div className="home__row">
          <Product
            id='2023001'
            title="Sample Product which has a really long title"
            price={200}
            rating={4}
            image='https://pngimg.com/uploads/cooking_pot/cooking_pot_PNG14071.png'
          />
          <Product
            id='2023002'
            title="Sample Product which has a really long title"
            price={200}
            rating={4}
            image='https://pngimg.com/uploads/cooking_pot/cooking_pot_PNG14071.png'
          />
          <Product
            id='2023003'
            title="Sample Product which has a really long title"
            price={200}
            rating={4}
            image='https://pngimg.com/uploads/cooking_pot/cooking_pot_PNG14071.png'
          />
          <Product
            id='2023004'
            title="Sample Product which has a really long title"
            price={200}
            rating={4}
            image='https://pngimg.com/uploads/cooking_pot/cooking_pot_PNG14071.png'
          />
        </div>
        {/* Product */}
    </div>
  )
}

export default Home