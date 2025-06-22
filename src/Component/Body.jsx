import imagebody from '../assets/finance.png';
import { useNavigate } from "react-router-dom";
export default function BodyPage(){
    const navigate = useNavigate();

    return(
        <div className="Maincontainer">
            <div className="item">
                <img className="myImage" src={imagebody} />
            </div>
            
            <div className="item">
                <div style={{padding:"20px", fontSize:"50px", fontFamily:"cursive", fontWeight:"600"}}>Take Control of Your Money</div>
                <div style={{padding:"20px",fontSize:"20px", fontFamily:"Helvectica", fontWeight:"200"}}>Personal budgeting is the secret to financial freedom. Start your journey today.</div>
                <div>
                    <button  className="getStartedBtn" onClick={() => navigate("/budgetpage")}>
                        Get Started
                    </button>
                </div>
                </div>
        </div>
    )
}
