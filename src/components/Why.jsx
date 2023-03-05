import '../styles/Why.css'
import star from '../asset/photos/star.png'

function Why() {
    return <div id="why" className='Why'>
        <div className='Why_stat'>
            <div className='Why_stat_def'>
                <img src={star} alt="étoile" style={{ width: '20px', height: '30px', marginRight: '1em' }} />
                <p style={{ textAlign: 'left' }}>L'UGC (User Generated Content) place vos clients au premier plan de votre marque humanisant ainsi davantage votre marketing et vos ventes.</p>
            </div>
            <div className='Why_stat_figures'>
                <div className='Why_stat_item'>
                    <p className="Why_stat_number"><span style={{ fontSize: '1.4em' }}>4</span>x</p>
                    <p className='Why_stat_text'>
                        Les publicités basées sur l'UGC obtiennent des taux de clics 4 fois plus élevés que les publicités classiques
                    </p>
                </div>
                <div className='Why_stat_item' style={{flexDirection:'row'}}>
                    <p className="Why_stat_number"><span style={{ fontSize: '1.4em' }}>84</span>%</p>
                    <p className='Why_stat_text invert'>
                        84% des consommateurs déclarent faire confiance aux recommandations avant toute autre source de publicité
                    </p>
                </div>
                <div className='Why_stat_item'>
                    <p className="Why_stat_number"><span style={{ fontSize: '1.4em' }}>2.4</span>x</p>
                    <p className='Why_stat_text'>
                        Les consommateurs trouvent 2,4 fois plus authentique le contenu généré par les utilisateurs que celui de la marque
                    </p>
                </div>
            </div>
        </div>
        <div className='Why_head'>
            <p className='Why_head_title'>Why UGC ?</p>
            <p className='Why_head_phrase'>"<strong>Tiktok</strong> a bouleversé nos habitudes publicitaires et a complètement changé les codes. Adieu, le branding lourd et les productions en studio. Il est temps d'apporter plus d'<strong>authenticité</strong> et de <strong>naturel</strong> à votre contenu"</p>
        </div>

    </div>
}

export default Why