import reactDOM from 'react-dom';
import NavBar from './NavBar';
import Conteudo from './Conteudo';
import FundoMobile from './Fundo';

export default function Instagram(){
    return ( 
        <div>
        <NavBar />
        <Conteudo />
        <FundoMobile />
        </div>
    )}

const divRoot = document.querySelector(".root")
reactDOM.render(<Instagram />,divRoot);