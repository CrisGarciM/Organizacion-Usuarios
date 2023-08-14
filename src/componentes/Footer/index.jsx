import "./Footer.css"

const Footer = () => {
    return <footer className="footer" style={{backgroundImage: "url(/img/Footer.png)"}} > 
    <div className="redes">
        <a href="https://github.com/CrisGarciM">
            <img src="/img/github.png" alt="Github"/>
        </a>
        <a href="https://www.linkedin.com/in/cristian-garcia-2b035a1b1/">
            <img src="/img/linkedin.png" alt="linkedin"/>
        </a>
        <a href="https://www.instagram.com/cristiangarcia8774/">
            <img src="/img/instagram.png" alt="instagram"/>
        </a>
    </div>
    <img src="/img/Logo.png" alt="org" />
    <strong>Desarrollado por Cristian Faber Garcia Mesa</strong>
</footer>
}

export default Footer