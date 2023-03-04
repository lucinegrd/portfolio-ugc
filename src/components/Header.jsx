import '../styles/Header.css'

function Header(){

    return <div className="Header">
        <ul className="Header_list">
            <li><button onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>ABOUT ME</button></li>
            <li><button onClick={() => document.getElementById('why').scrollIntoView({ behavior: 'smooth' })}>WHY UGC</button></li>
            <li><button onClick={() => document.getElementById('work').scrollIntoView({ behavior: 'smooth' })}>MY WORK</button></li>
            <li><button onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}>SERVICES</button></li>
            <li><button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>CONTACT ME</button></li>
        </ul>
    
    </div>
}

export default Header