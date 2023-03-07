import '../styles/About Me.css'
import pic from '../asset/photos/about.png'
import divider from '../asset/photos/divider.png'
import { Text } from '../langues/Text'

function About() {
    return <div className='About_container' id='about'>
        <div className='About_pic'>
            <p style={{ lineHeight: '40px' }}>
                <span style={{ fontStyle: 'italic', fontWeight: '600' }}>More</span><br />
                <span style={{ fontWeight: '900', marginBottom: '20px' }}>About me</span>
            </p>
            <img src={pic} alt="lucine à toulouse" className="About_pic_img"/>
        </div>
        <div className='About_text'>
            <div className='About_text_p'>
                <p>
                    <Text tid="presentation" i={0}/>{<span><strong>Portfolio</strong> !<br/></span>}
                    <Text tid="presentation" i={1}/>{<strong>Lucine</strong>}
                    <Text tid="presentation" i={2}/>{<strong>UGC</strong>}
                    <Text tid="presentation" i={3}/><br/><br/>
                    <Text tid="presentation" i={4}/>

                </p>
                <img src={divider} alt="divider" style={{ width: '70%' }} />
                <p><strong><Text tid="besoin" i={-1}/></strong><br /><br />
                <Text tid="creativite" i={-1}/>
                </p>
            </div>

        </div>
    </div>
}

export default About