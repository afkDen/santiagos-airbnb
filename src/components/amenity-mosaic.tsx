'use client'

import Image from 'next/image'
import { motion } from 'motion/react'
import { getLocalImageUrl } from '@/content/gallery'

const IMAGES = [
  {
    key: 'kara4',
    src: getLocalImageUrl('kara4'),
    alt: 'Air-conditioned videoke lounge with group seating',
    className: 'col-span-7 row-span-2 sm:col-span-8',
    sizes: '(max-width: 1024px) 62vw, 45vw',
  },
  {
    key: 'pool4',
    src: getLocalImageUrl('pool4'),
    alt: 'Illuminated private pool and resort exterior at night',
    className: 'col-span-5 sm:col-span-4',
    sizes: '(max-width: 1024px) 38vw, 23vw',
  },
  {
    key: 'fir1',
    src: getLocalImageUrl('fir1'),
    alt: 'Outdoor bonfire pit with seating inside the compound',
    className: 'col-span-5 sm:col-span-4',
    sizes: '(max-width: 1024px) 38vw, 23vw',
  },
]

export function AmenityMosaic() {
  return (
    <div className="grid h-[440px] grid-cols-12 grid-rows-2 gap-3 sm:h-[560px] sm:gap-4 lg:h-[620px]">
      {IMAGES.map((image, index) => (
        <motion.figure
          key={image.key}
          initial={{ opacity: 0, transform: 'translateY(12px)' }}
          whileInView={{ opacity: 1, transform: 'translateY(0)' }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.52, delay: index * 0.07, ease: [0.23, 1, 0.32, 1] }}
          className={`relative min-h-0 overflow-hidden rounded-2xl bg-sand/30 shadow-warm-md ${image.className}`}
          data-motion="spatial"
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes={image.sizes}
            className="object-cover"
          />
        </motion.figure>
      ))}
    </div>
  )
}
