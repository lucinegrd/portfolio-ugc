import '../styles/Work.css'
import ReactPlayer from 'react-player'
import { Text } from '../langues/Text'
import betterhair from '../asset/photos/betterhair.jpeg'
import larosee from '../asset/photos/larosee.jpeg'
import masque from '../asset/photos/masque.jpeg'
import pen from '../asset/videos/pen.mov'
import stick from '../asset/videos/stick.mov'


function Work() {
    return <div id="work" className='Work'>
        <p className="Work_title"><Text tid="videos" i={-1} /></p>
        <div className='Videos'>
            <div className="Videos_item">
                <ReactPlayer url={pen} controls="true" playing="true" muted="false" width="auto" loop="true" />
            </div>
            <div className="Videos_item">
                <ReactPlayer url={stick} controls="true" playing="true" muted="false" width="auto" loop="true" />
            </div>
        </div>
        <p className="Work_title"><Text tid="photos" i={-1} /></p>

        <div className='Photos'>
            <div className="Photos_item">
                <img src={betterhair} alt="flacon d'huile pour les cheveux" className='Photos_item_pic' />
            </div>
            <div className="Photos_item">
                <img src={larosee} alt="masque pour le visage, avec un coeur sur ma joue" className='Photos_item_pic' />
            </div>
            <div className="Photos_item">
                <img src={masque} alt="stick solaire" className='Photos_item_pic'/>
            </div>
        </div>



    </div>
}

export default Work