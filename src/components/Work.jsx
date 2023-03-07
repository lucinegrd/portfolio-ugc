import '../styles/Work.css'
import ReactPlayer from 'react-player'
import { Text } from '../langues/Text'


function Work() {
    return <div id="work" className='Work'>
        <p className="Work_title"><Text tid="videos" i={-1} /></p>
        <p className="Work_title"><Text tid="photos" i={-1} /></p>

    </div>
}

export default Work