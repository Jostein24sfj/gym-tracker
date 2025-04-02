import { FaInstagram, FaSnapchat, FaTiktok } from "react-icons/fa";
import "./footer.css";

export default function Footer() {
  return (
    <>
      <div className="footerSection">
        <div className="footerIcons">
          <a
            className="footerIconInstagram footericon"
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.instagram.com/josteinwestrum"
          >
            <FaInstagram />
          </a>
          <a
            className="footerIconSnapchat footericon"
            target="_blank"
            rel="noopener noreferrer"
            href="https://snapchat.com/t/cr6CaOt7"
          >
            <FaSnapchat />
          </a>
          <a
            className="footerIconTiktok footericon"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.tiktok.com/@josteinwestrum"
          >
            <FaTiktok />
          </a>
        </div>
        <div className="copyRightText">
          <p>
            &copy; {new Date().getFullYear()} Jostein Westrum. All rights
            reserved.
          </p>
        </div>
      </div>
    </>
  );
}
