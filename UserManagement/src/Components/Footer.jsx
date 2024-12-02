import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa"
import { Link } from "react-router-dom"

function Footer() {
  return (
    <footer className="footer footer-center bg-base-200 text-base-content rounded p-10">
      <nav className="grid grid-flow-col gap-4">
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4 text-2xl">
          <FaFacebook />
          <FaYoutube />
          <FaInstagram />
        </div>
      </nav>
      <aside>
        <p>Copyright © {new Date().getFullYear()} - All right reserved by UserManagement Industries Ltd</p>
      </aside>
    </footer>
  )
}

export default Footer
