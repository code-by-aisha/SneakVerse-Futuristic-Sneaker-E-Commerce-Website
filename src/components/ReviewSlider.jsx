 // src/components/ReviewSlider.jsx
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

const reviews = [
  {
    id: 1,
    name: "Alex Johnson",
    rating: 5,
    comment: "Amazing collection and fast shipping! The sneakers are even better in person.",
    avatar: "/api/placeholder/100/100"
  },
  {
    id: 2,
    name: "Sarah Miller",
    rating: 5,
    comment: "Best sneaker store I've found online. Premium quality and great customer service.",
    avatar: "/api/placeholder/100/100"
  },
  {
    id: 3,
    name: "Mike Chen",
    rating: 5,
    comment: "The attention to detail is incredible. My new go-to for limited editions.",
    avatar: "/api/placeholder/100/100"
  },
  {
    id: 4,
    name: "Emily Davis",
    rating: 5,
    comment: "Fast delivery and authentic products. Will definitely shop here again!",
    avatar: "/api/placeholder/100/100"
  }
]

const ReviewSlider = () => {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      breakpoints={{
        768: {
          slidesPerView: 2
        },
        992: {
          slidesPerView: 3
        }
      }}
      className="pb-5"
    >
      {reviews.map(review => (
        <SwiperSlide key={review.id}>
          <div className="glass-card p-4 rounded-4 h-100">
            <div className="d-flex align-items-center mb-3">
              <img 
                src={review.avatar} 
                alt={review.name}
                className="rounded-circle me-3"
                width="50"
                height="50"
              />
              <div>
                <h6 className="mb-1 text-light">{review.name}</h6>
                <div className="text-warning">
                  {'★'.repeat(review.rating)}
                </div>
              </div>
            </div>
            <p className="text-gray mb-0">{review.comment}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default ReviewSlider