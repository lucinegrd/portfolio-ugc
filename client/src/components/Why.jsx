import '../styles/Why.css'
import star from '../asset/photos/star.png'
import { Text } from '../langues/Text'

function Why() {
    return <div id="why" className='Why'>
        <div className='Why_stat'>
            <div className='Why_stat_def'>
                <img src={star} alt="étoile" style={{ width: '20px', height: '30px', marginRight: '1em' }} />
                <p style={{ textAlign: 'left' }}><Text tid="ugcdef" i={-1} /></p>
            </div>
            <div className='Why_stat_figures'>
                <div className='Why_stat_item'>
                    <p className="Why_stat_number"><span style={{ fontSize: '1.4em' }}>4</span>x</p>
                    <p className='Why_stat_text'>
                        <Text tid="stat1" i={-1} />
                    </p>
                </div>
                <div className='Why_stat_item' style={{ flexDirection: 'row' }}>
                    <p className="Why_stat_number"><span style={{ fontSize: '1.4em' }}>84</span>%</p>
                    <p className='Why_stat_text invert'>
                        <Text tid="stat2" i={-1} />
                    </p>
                </div>
                <div className='Why_stat_item'>
                    <p className="Why_stat_number"><span style={{ fontSize: '1.4em' }}>2.4</span>x</p>
                    <p className='Why_stat_text'>
                        <Text tid="stat3" i={-1} />
                    </p>
                </div>
            </div>
        </div>
        <div className='Why_head'>
            <p className='Why_head_title'>Why UGC ?</p>
            <p className='Why_head_phrase'>"<strong>Tiktok</strong>
            <Text tid="citation" i={0} />
            <strong><Text tid="citation" i={3} /></strong><Text tid="citation" i={1} />
            <strong><Text tid="citation" i={4} /></strong><Text tid="citation" i={2} />"</p>
        </div>

    </div>
}

export default Why