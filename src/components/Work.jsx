import '../styles/Work.css'
import ReactPlayer from 'react-player'
import { Text } from '../langues/Text'
import betterhair from '../asset/photos/betterhair.jpeg'
import larosee from '../asset/photos/larosee.jpeg'
import masque from '../asset/photos/masque.jpeg'
import pen from '../asset/videos/pen.mov'
import stick from '../asset/videos/stick.mov'
import rose2 from '../asset/photos/rose2.jpg'
import gel from '../asset/photos/gel.jpeg'
import rose from '../asset/photos/rose.jpg'
import cbd from '../asset/photos/cbd.jpeg'
import cbdvid from '../asset/videos/cbd.mov'
import rosevid from '../asset/videos/rose.mov'


function Work() {
    return <div id="work" className='Work'>
        <p className="Work_title"><Text tid="videos" i={-1} /></p>
        <div className='Videos'>
            <div className="Videos_item">
                <div className='Videos_type'><Text tid="v_demoproduit" i={-1} /></div>
                <ReactPlayer url={pen} controls="true" playing="true" muted="false" width="auto" loop={true} />
                <div className='Videos_description'>
                    <Text tid="v1" i={-1} />
                </div>
            </div>
            <div className="Videos_item">
                <div className='Videos_type'><Text tid="v_stopmotion" i={-1} /></div>
                <ReactPlayer url={cbdvid} controls="true" playing="true" muted="false" width="auto" loop="true" />
                <div className='Videos_description'>
                    <Text tid="v2" i={-1} />
                </div>
            </div>
            <div className="Videos_item">
                <div className='Videos_type'><Text tid="v_demo" i={-1} /></div>
                <ReactPlayer url={rosevid} controls="true" playing="true" muted="false" width="auto" loop="true" />
                <div className='Videos_description'>
                    <Text tid="v3" i={-1} />
                </div>
            </div>
            <div className="Videos_item">
                <div className='Videos_type'><Text tid="v_trend" i={-1} /></div>
                <ReactPlayer url={stick} controls="true" playing="true" muted="false" width="auto" loop="true" />
                <div className='Videos_description'>
                    <Text tid="v4" i={-1} />
                </div>
            </div>
        </div>
        <p className="Work_title"><Text tid="photos" i={-1} /></p>

        <div className='Photos'>

            <div className="Photos_item">
                <img src={masque} alt="stick solaire" className='Photos_item_pic' />
            </div>
            <div className="Photos_item">
                <img src={cbd} alt="huile de cbd" className='Photos_item_pic' />
            </div>
            <div className="Photos_item">
                <img src={rose2} alt="Gelée tonic à la rose" className='Photos_item_pic' />
            </div>
            <div className="Photos_item">
                <img src={betterhair} alt="flacon d'huile pour les cheveux" className='Photos_item_pic' />
            </div>
        </div>
        <div className='Photos'>
            <div className="Photos_item">
                <img src={gel} alt="Gel nettoyant pour le visage" className='Photos_item_pic' />
            </div>
            <div className="Photos_item">
                <img src={larosee} alt="masque pour le visage, avec un coeur sur ma joue" className='Photos_item_pic' />
            </div>
            <div className="Photos_item">
                <img src={rose} alt="Tonifiant visage à la rose" className='Photos_item_pic' />
            </div>
            <div className="Photos_item">
            </div>
            <div className="Photos_item">
            </div>
        </div>

    </div>
}

export default Work