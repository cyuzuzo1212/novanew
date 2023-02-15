import React from 'react'
import NavBar from '../components/NabBar'
import {Popup} from './creat';

import { PropertyCard } from '../components/PropertyCard'
import { Filter } from '../components/Filter';
function Home() {
  const data = [
    {
      'price': '1,300,000',
      'bed': '42',
      'bath': '92',
      'square': '82',
      'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs6ubtG2ZUWF6-rMdUCih3LjCLY5W64fJX-A&usqp=CAU'
    }, {
      'price': '300,000',
      'bed': '42',
      'bath': '12',
      'square': '12',
      'image': 'https://wallpaper-house.com/data/out/9/wallpaper2you_298987.jpg'
    }, {
      'price': '410,000',
      'bed': '32',
      'bath': '12',
      'square': '12',
      'image': 'https://cdn.wallpapersafari.com/30/29/BHOdok.jpg'
    },{
      'price': '1,300,000',
      'bed': '42',
      'bath': '92',
      'square': '82',
      'image': 'https://wallpaperaccess.com/full/223237.jpg'
    }, {
      'price': '220,000',
      'bed': '42',
      'bath': '12',
      'square': '12',
      'image': 'https://t3.ftcdn.net/jpg/05/32/28/64/240_F_532286485_uwzDYd8sWISFU9mHdpAU84J6Jk2R2yFL.jpg'
    }, {
      'price': '440,000',
      'bed': '32',
      'bath': '12',
      'square': '12',
      'image': 'https://t3.ftcdn.net/jpg/02/22/30/00/240_F_222300092_eAqYjM0fNb15Re4u8InsQY9mcApNE9ci.jpg'
    },{
      'price': '1,300,000',
      'bed': '42',
      'bath': '92',
      'square': '82',
      'image': 'https://t4.ftcdn.net/jpg/05/46/00/59/240_F_546005926_eG69JWq5iYOgJpX5lGKOTepunJCBWKe9.jpg'
    }, {
      'price': '210,000',
      'bed': '42',
      'bath': '12',
      'square': '12',
      'image': 'https://d37ukvrrv3in12.cloudfront.net/listings/67e261f0-e00a-4b44-a981-73e1901e42a9/xl/1.jpg'
    }, 
  ];
  return (

    <div>
    <Popup/>
      <NavBar />

     <Filter/>



      <div className='banner-area'>
        <div className='banner-item flex-1'>
          <h5>Blair Owens</h5>
          <h1>Our Properties</h1>
        </div>

        <div className='banner-item flex-2'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin gravida tortor semper nibh vehicula, in tempor urna dignissim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed tellus felis, vulputate id eleifend sit amet, varius non ipsum.
          </p>
        </div>

      </div>




      <div className='container'>
        <div className='properties'>
          {data.map((item, index) => {
            return (
              <PropertyCard  price={item.price} bath={item.bath} bed={item.bed} square={item.square} img={item.image} />
            );
          })
        }
        </div>
      </div>
    </div>

  )

}
export default Home