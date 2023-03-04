import '../styles/Why.css'
import star from '../asset/photos/star.png'

function Why() {
    return <div id="why" className='Why'>
        <div className='Why_stat'>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <img src={star} alt="étoile" style={{ width: '20px', height:'30px' }} />
                <p>UGC = User Generated Content</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <img src={star} alt="étoile" style={{ width: '20px', height:'30px' }} />
                <p>L'UGC place vos clients au premier plan de votre marque humanisant ainsi davantage votre marketing et vos ventes</p>
            </div>
        </div>
        <div className='Why_head'>
            <p className='Why_head_title'>Why UGC ?</p>
            <p className='Why_head_phrase'>"<strong>Tiktok</strong> a bouleversé nos habitudes publicitaires et a complètement changé les codes. Adieu, le branding lourd et les productions en studio. Il est temps d'apporter plus d'<strong>authenticité</strong> et de <strong>naturel</strong> à votre contenu"</p>
        </div>

    </div>
}

export default Why