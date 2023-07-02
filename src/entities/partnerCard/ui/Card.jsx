import React from 'react'
import { Carousel, useAnimationOffsetEffect } from '@mantine/carousel';
import Autoplay from 'embla-carousel-autoplay';
  
export const Card = () => {

  const [embla, setEmbla] = React.useState(null);
  
  const autoplay = React.useRef(Autoplay({ delay: 2000 }));
  
  useAnimationOffsetEffect(embla, 200);

  return (
    <div className='relative rounded-primary overflow-hidden space-y-2 shadow pb-4'>
      <Carousel
        slideSize={'100%'}
        loop
        withControls={false}
        w={'100%'}
        getEmblaApi={setEmbla}
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
      >
        {Array(4).fill(1).map((img, i) => {
          return (
            <Carousel.Slide key={i} className={`relative `} >
              <div className={'flex justify-center items-center aspect-video object-cover w-full h-full text-3xl bg-slate-200'}>
                {i + 1}
                {/* <img src={getUrl(review, img)} alt="" className='aspect-video object-cover w-full' /> */}
              </div>
            </Carousel.Slide>
          ) 
        })}
      </Carousel>
      <h2 className='text-center font-head text-2xl px-6'>Имя</h2>
      <p className='px-6 font-body'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates exercitationem dolore, illo vero in iste commodi officia minus, ipsa incidunt consequuntur cupiditate fugit facere omnis atque corporis praesentium, officiis facilis?</p>
      <div className='flex justify-center'>
        <button className='text-2xl'>
          {`>`}
        </button>
      </div>
    </div>
  )
}
