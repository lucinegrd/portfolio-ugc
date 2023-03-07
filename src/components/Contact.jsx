import '../styles/Contact.css'
import smile from '../asset/photos/smile.jpeg'
import insta from "../asset/photos/insta2.png"
import tiktok from "../asset/photos/tiktok2.png"
import mail from "../asset/photos/mail2.png"

function Contact() {
    return <div id="contact" className='Contact'>
        <div className='Contact_container'>
            <div className='Contact_info'>
                <p className="Contact_title">Me contacter</p>
                <table className='Contact_table'>
                    <tr>
                        <td className='Contact_icon'>
                            <a href="mailto:contact-ugc@lucine-giraud.com" target="_blank" rel="noreferrer"><img src={mail} alt="mail" className='Contact_icon_item'/></a>
                        </td>
                        <td className='Contact_text'>
                            <a href="mailto:contact-ugc@lucine-giraud.com" target="_blank" rel="noreferrer" className='Contact_text_item'><p>contact-ugc@lucine-giraud.com</p></a>
                        </td>
                    </tr>
                    <tr>
                        <td className='Contact_icon'>
                            <a href="https://www.tiktok.com/@lucine.ugc" target="_blank" rel="noreferrer"><img src={tiktok} alt="tiktok" className='Contact_icon_item'/></a>
                        </td>
                        <td className='Contact_text'>
                        <a href="https://www.tiktok.com/@lucine.ugc" target="_blank" rel="noreferrer" className='Contact_text_item'><p>www.tiktok.com/@lucine.ugc</p></a>
                        </td>
                    </tr>
                    <tr>
                        <td className='Contact_icon'>
                            <a href="https://www.instagram.com/lucine.ugc/" target="_blank" rel="noreferrer"><img src={insta} alt="instagram" className='Contact_icon_item'/></a>
                        </td>
                        <td className='Contact_text'>
                        <a href="https://www.instagram.com/lucine.ugc/" target="_blank" rel="noreferrer" className='Contact_text_item'><p>www.instagram.com/lucine.ugc</p></a>
                        </td>
                    </tr>
                </table>
            </div>
            <div className='Contact_pic'>
                <img className='Contact_pic_img' src={smile} alt="lucine big smile" />
            </div>
        </div>
    </div>
}

export default Contact