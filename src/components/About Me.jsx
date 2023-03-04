import '../styles/About Me.css'
import pic from '../asset/photos/about.png'
import divider from '../asset/photos/divider.png'

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
                <p>Bonjour et bienvenue sur mon <strong>Portfolio</strong> !<br />
                    Je m'appelle <strong>Lucine</strong> et je suis créatrice de contenu, principalement <strong>UGC</strong>, pour les marques. <br /><br />
                    Étudiante en informatique, je suis dans la création de contenu depuis 2020 pour mes réseaux personnels.
                    J'adore partager mes idées, mes envies et mes créations !
                </p>
                <img src={divider} alt="divider" style={{ width: '70%' }} />
                <p><strong>Vous avez besoin d'une créatrice UGC ?</strong><br /><br />
                    Je peux produire du contenu pour vos réseaux et fidéliser vos clients. Pleine de créativité je m'accorderai à l'univers de votre marque en devenant votre cliente cible et je vous proposerai du contenu engageant en accord avec vos valeurs !
                </p>
            </div>

        </div>
    </div>
}

export default About