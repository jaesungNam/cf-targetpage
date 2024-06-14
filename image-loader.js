'use client'



export default function myImageLoader({ src, width, quality }) {
  if(src.startsWith('http') || src.startsWith('https')) {
    return `${src}?w=${width}&q=${quality || 75}`
  }
  return `https://target.overpowerman.click${src}?w=${width}&q=${quality || 75}`

}