import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { RiHeartFill } from 'react-icons/ri';

export default function Component() {
  return (
    <footer className="bg-black py-8 my-20 text-white">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <img
            alt="ClinQ360 Logo"
            className="object-contain"
            height={50}
            src="/placeholder.svg"
            style={{
              aspectRatio: "150/50",
              objectFit: "cover",
            }}
            width={150}
          />
        </div>
        <div className="flex items-center space-x-4">
          <a className="text-gray-400 hover:text-white" href="#">
            <FaFacebook className="h-6 w-6" />
            <span className="sr-only">Facebook</span>
          </a>
          <a className="text-gray-400 hover:text-white" href="#">
            <FaTwitter className="h-6 w-6" />
            <span className="sr-only">Twitter</span>
          </a>
          <a className="text-gray-400 hover:text-white" href="#">
            <FaInstagram className="h-6 w-6" />
            <span className="sr-only">Instagram</span>
          </a>
          <a className="text-gray-400 hover:text-white" href="#">
            <FaLinkedin className="h-6 w-6" />
            <span className="sr-only">LinkedIn</span>
          </a>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-4 border-t border-gray-700 pt-4 flex justify-between text-gray-400">
        <div>© 2024 ClinQ360</div>
        <div>
          Made with
          <RiHeartFill className="inline-block h-4 w-4 text-red-500" />
          in India{"\n                "}
        </div>
      </div>
    </footer>
  )
}
