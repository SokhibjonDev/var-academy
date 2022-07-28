import "./Header.css";

function Header() {
    return (
        <div className="Header">
            <div className="title">
                <h1>DASTURLASHNI <span>QULAY</span> MUHITDA O'RGANING</h1>
                <h6>endi bizda <span>Ingliz tili</span> ham  bor !</h6>
                <div className="sotSet">
                    <div className="backSot">
                        <a href="https://t.me/+ppGBI3hFiwc4NGUy"><img src="/images/telegram.png" alt="" /></a>
                    </div>
                    <div className="backSot">
                        <a href="#!"><img src="/images/instagram.png" alt="" /></a>
                    </div>
                    <div className="backSot">
                        <a href="#!"><img src="/images/linkedin.png" alt="" /></a>
                    </div>
                    <div className="backSot">
                        <a href="#!"><img src="/images/facebook.png" alt="" /></a>
                    </div>
                </div>
            </div>
            <div className="HeaderImg">
                <img src="/images/edu1.svg" alt="" />
            </div>
        </div>
    );
}
export default Header;