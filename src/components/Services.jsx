import '../styles/Services.css'
import { BsBoxSeam, BsTiktok, BsPersonVideo, BsStars, BsChatQuote } from 'react-icons/bs'
import { AiOutlineSound } from 'react-icons/ai'
import { MdKeyboardVoice } from 'react-icons/md'
import { TiTickOutline } from 'react-icons/ti'
import { FiMusic } from 'react-icons/fi'

function Services() {
    return <div id="services" className='Services'>
        <p className="Services_title">Ce que je propose</p>
        <p className="Services_intro">Il y a tant de façons de communiquer avec votre audience cible, voici quelques exemples de ce que je peux faire pour vous :</p>
        <div className='Services_cat'>
            <div className='Services_cat_sub'>
                <p className="Services_item">Démo produit</p>
                <FiMusic size={25} className="Services_icon"/>
                <p className="Services_item">Unboxing</p>
                <BsBoxSeam size={25} className="Services_icon"/>
                <p className="Services_item">ASMR</p>
                <MdKeyboardVoice size={25} className="Services_icon"/>
            </div>
            <div className='Services_cat_sub center'>
                <BsChatQuote size={25} className="Services_icon"/>
                <p className="Services_item">Témoignage</p>
                <BsTiktok size={25} className="Services_icon"/>
                <p className="Services_item">Trend</p>
                <TiTickOutline size={25} className="Services_icon"/>
                <p className="Services_item">Do & Don't</p>
            </div>
            <div className='Services_cat_sub'>
                <p className="Services_item">Voix off</p>
                <AiOutlineSound size={25} className="Services_icon"/>
                <p className="Services_item">Face Cam</p>
                <BsPersonVideo size={25} className="Services_icon"/>
                <p className="Services_item">Esthétique</p>
                <BsStars size={25} className="Services_icon"/>
            </div>

        </div>
    </div>
}

export default Services