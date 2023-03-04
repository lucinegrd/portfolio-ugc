import profile_pic from "../asset/photos/profile_pic.png"
import insta from "../asset/photos/insta.png"
import tiktok from "../asset/photos/tiktok.png"
import mail from "../asset/photos/mail.png"
import youtube from "../asset/photos/youtube.png"

import '../styles/Home.css';
import { FaMapMarkerAlt } from 'react-icons/fa'

function Home() {
    return <div className="Home">
        <div className="Home_text">
            <p className="Home_text_name">Lucine  Giraud</p>
            <p className="Home_text_niches">LIFESTYLE | PERSONAL CARE | PLANT LOVER</p>
            <p className="Home_text_ugc">Créatrice UGC - Créatrice de contenu pour les marques</p>
            <div className="Home_location">
                <FaMapMarkerAlt size={20} />
                <p className="France"> France</p>
            </div>
            <div className="Home_links_pic_phone">
                <div className="Home_links">
                    <a href="mailto:contact-ugc@lucine-giraud.com" target="_blank" rel="noreferrer"><img src={mail} alt="instagram" className="Home_links_icon" /></a>
                    <a href="https://www.tiktok.com/@lucine.ugc" target="_blank" rel="noreferrer"><img src={tiktok} alt="instagram" className="Home_links_icon" /></a>
                    <a href="https://www.instagram.com/lucine.ugc/" target="_blank" rel="noreferrer"><img src={insta} alt="instagram" className="Home_links_icon" /></a>
                    <a href="https://www.youtube.com/channel/UCxkCFuD-PtTCVP2H0etYXQQ" target="_blank" rel="noreferrer"><img src={youtube} alt="instagram" className="Home_links_icon" /></a>
                </div>
                <div className="Home_pic_phone">
                    <img src={profile_pic} alt="profil" className="Home_pic_img" style={{ width: '100%' }} />
                </div>
            </div>

        </div>
        <div className="Home_pic_pc">
            <img src={profile_pic} alt="profil" className="Home_pic_img" style={{ width: '100%' }} />
        </div>

    </div>
}

export default Home