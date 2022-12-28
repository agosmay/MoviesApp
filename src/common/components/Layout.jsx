import React , { useContext }  from 'react';
import './stylesheets/Layout.css';
import { FaReact } from 'react-icons/fa';
import { AuthContext } from '../../auth/context/AuthContext'
import { Link , useNavigate } from 'react-router-dom'
import { BsSuitHeart } from 'react-icons/bs';
import { AiOutlineFacebook } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
import { BsFillPlayBtnFill } from 'react-icons/bs';



export const Layout = ({children})=> {
	
	const { isAuth , user , leerUsuario } = useContext(AuthContext)
	
   	const navigate = useNavigate();

	const logout = () => {
		
		localStorage.removeItem("user");
		navigate("/login") 
		
	}
	
	
	return (
		<div>
			<header className="header-container">
				<ul>
					<li><h3 className="user">{`Welcome ${leerUsuario.username}`}</h3></li>
					<li><button onClick={logout} className="logOut-btn">Log Out</button></li>	
				</ul>
			</header>
			<main>{children}</main>
			<footer className="footer-container">
				<ul className="footer-ul">
					<li>Made with love <BsSuitHeart/></li>
					<li>Made with React <FaReact /></li>
					<div className="icon-container">
						<li className="icon-item"><a href="https://www.facebook.com/"><h3><AiOutlineFacebook /></h3></a></li>
						<li className="icon-item"><a href="https://www.instagram.com/"><h3><AiOutlineInstagram /></h3></a></li>
						<li className="icon-item"><a href="https://www.youtube.com/"><h3><BsFillPlayBtnFill/></h3></a></li>
					</div>
				</ul>
			</footer>
		</div>
		
	
	);
	
	
}
