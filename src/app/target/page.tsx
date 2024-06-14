import Image from 'next/image'
import googleImage from './google.png'

const Page = () => {
  return (
    <div>
      image
      <Image src={googleImage} alt="구글이미지"/>
    </div>
  )
}

export default Page