import '../styles/Services.css'
import { BsBoxSeam, BsTiktok, BsPersonVideo, BsStars, BsChatQuote } from 'react-icons/bs'
import { AiOutlineSound } from 'react-icons/ai'
import { MdKeyboardVoice } from 'react-icons/md'
import { TiTickOutline } from 'react-icons/ti'
import { FiMusic } from 'react-icons/fi'
import { Text } from '../langues/Text'

function Services() {
    return <div id="services" className='Services'>
        <p className="Services_title"><Text tid="sevicestitle" i={-1} /></p>
        <p className="Services_intro"><Text tid="servicesintro" i={-1} /></p>
        <div className='Services_cat'>
            <div className='Services_cat_sub'>
                <p className="Services_item"><Text tid="produit" i={-1} /></p>
                <FiMusic size={25} className="Services_icon"/>
                <p className="Services_item">Unboxing</p>
                <BsBoxSeam size={25} className="Services_icon"/>
                <p className="Services_item">ASMR</p>
                <MdKeyboardVoice size={25} className="Services_icon"/>
            </div>
            <div className='Services_cat_sub center'>
                <BsChatQuote size={25} className="Services_icon"/>
                <p className="Services_item"><Text tid="temoignage" i={-1} /></p>
                <BsTiktok size={25} className="Services_icon"/>
                <p className="Services_item">Trend</p>
                <TiTickOutline size={25} className="Services_icon"/>
                <p className="Services_item">Do & Don't</p>
            </div>
            <div className='Services_cat_sub'>
                <p className="Services_item"><Text tid="voixoff" i={-1} /></p>
                <AiOutlineSound size={25} className="Services_icon"/>
                <p className="Services_item">Face Cam</p>
                <BsPersonVideo size={25} className="Services_icon"/>
                <p className="Services_item"><Text tid="esthetique" i={-1} /></p>
                <BsStars size={25} className="Services_icon"/>
            </div>
        </div>
        <p className="Services_text"><Text tid="collab" i={-1} /></p>
        <p className="Services_text"><Text tid="tarif" i={0} /><strong><Text tid="tarif" i={1} /></strong><Text tid="tarif" i={2} /></p>
        <p className="Services_text"><Text tid="devis" i={0} /><strong><Text tid="devis" i={1} /></strong><Text tid="devis" i={2} /></p>
    </div>
}

export default Services