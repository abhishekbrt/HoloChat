import './header.css'
import Random from './random';

function Header(){
    return(
        <div className="header">
            <div>
                <h2>this is header div 1</h2>

            </div>
            <Random/>
            <div>
            <h2>this is header div 1</h2>

            </div>


        </div>
    );
}
export default Header;

