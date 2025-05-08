import React, { useEffect, useState } from 'react'
const images = [
  'banner.jpg',
  'banner2.jpeg',
  'banner3.jpeg',
]
export const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const nextImage = () => {
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
      setIsAnimating(false)
    }, 500)
  }
  useEffect(() => {
    const timer = setInterval(() => {
      nextImage()
    }, 5000)
    return () => clearInterval(timer)
  }, [])
  return (
    <section className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentImage ? 'opacity-100' : 'opacity-0'}`}
        >
          <img
            src={image}
            alt="Fashion Banner"
            className="w-full h-full object-cover"
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      <div className="absolute bottom-20 left-10 text-white">
        <h1 className="text-5xl font-bold italic mb-4 font-serif">Chau Bui</h1>
        <p className="text-xl mb-6 max-w-md">
          Bộ sưu tập túi xách cao cấp mới nhất
        </p>
        <button className="bg-white text-black px-8 py-3 rounded-none hover:bg-black hover:text-white transition-colors duration-300">
          Khám phá ngay
        </button>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-2 h-2 rounded-full transition-all ${index === currentImage ? 'w-8 bg-white' : 'bg-white/50'}`}
          />
        ))}
      </div>
    </section>
  )
}
