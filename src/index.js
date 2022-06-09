import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function Header()
{
	return <div id = "header">
	
		<span id = "name">
				
			Ashfak Uddin
		
		</span>
		<button>Contact</button>
		<button>About</button>
		
	</div>
}
function About()
{
	return <div>
		<div id = "content">
			Hi, I'm Ashfak. I'm an upcoming full stack MERN web developer. Feel free to browse my various projects. 
		</div>
	</div>
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
	<Header />
	<About />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
