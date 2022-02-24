import React, {useEffect} from "react"
import logo from "../logo.png"
import chroma from "chroma-js"

export default function Panel() {
    const one_scale = new chroma.scale(['#877', '#151515']).mode('lab');
    const oneRef = React.createRef();
    const overlayRef = React.createRef();
    const logoRef = React.createRef();
    const textRef = React.createRef();
    const navBRef = React.createRef();
    const navRRef = React.createRef();

    useEffect(() => {
        const handleScroll = () => {
            window.requestAnimationFrame(function() {
                oneRef.current.style.backgroundColor = one_scale(window.pageYOffset / oneRef.current.clientHeight).hex();
                if (window.pageYOffset < 30) {
                    // centered box
        
                    overlayRef.current.style.width = '60vmin';
                    overlayRef.current.style.maxWidth = '500px';
                    overlayRef.current.style.top = '30vh';
                    overlayRef.current.style.left = '30vw';
        
                    overlayRef.current.style.backgroundColor = 'rgba(69, 69, 69, 0.5)';
        
                    logoRef.current.style.width = '50vmin';
                    logoRef.current.style.maxWidth = '500px';
                    logoRef.current.style.height = '10vmin';
                    logoRef.current.style.filter = 'none';
                    // logo.style.padding = '15px';
                    logoRef.current.style.float = 'center';
                    textRef.current.innerHTML = '<h1>Clement Chan</h1>';
                    textRef.current.style.opacity = '1';
        
                    navBRef.current.style.visibility = 'hidden';
                    navBRef.current.style.width = '0';
                    navBRef.current.style.height = '0';
        
                    navRRef.current.style.visibility = 'hidden';
                    navRRef.current.style.width = '0';
                    navRRef.current.style.height = '0';
                }
                else {
                    // navbar
        
                    overlayRef.current.style.width = '100%';
                    overlayRef.current.style.maxWidth = 'none';
                    overlayRef.current.style.top = '0';
                    overlayRef.current.style.left = '0';
        
                    overlayRef.current.style.backgroundColor = 'rgba(69, 69, 69, 1)';
        
                    logoRef.current.style.width = '30vmin';
                    logoRef.current.style.height = '6vmin';
                    logoRef.current.style.maxWidth = '300px';
                    logoRef.current.style.filter = 'saturate(300%)';
                    logoRef.current.style.float = 'left';
                    textRef.current.innerHTML = '';
                    textRef.current.style.opacity = '0';
        
                    navBRef.current.style.visibility = 'visible';
                    navBRef.current.style.width = 'auto';
                    navBRef.current.style.height = 'auto';
        
                    navRRef.current.style.visibility = 'visible';
                    navRRef.current.style.width = 'auto';
                    navRRef.current.style.height = 'auto';
                }
            });
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
  });

    return (
    <div className="panel one" ref={oneRef}>
        <div id="over-nav" className="overlay" ref={overlayRef}>
            <div>
                <nav className="navbar navbar-expand-sm navbar-dark" aria-label="Navigation bar">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                            <img alt="slyq logo" className="logo" src={logo} ref={logoRef}></img>
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-right" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation" id="navbar-button" ref={navBRef}>
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbar-right" ref={navRRef}>
                            <ul className="navbar-nav me-auto mb-2 mb-sm-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Link</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="dropdown03" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</a>
                                    <ul className="dropdown-menu" aria-labelledby="dropdown03">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <div className="text" ref={textRef}>
                <h1>Clement Chan</h1>
            </div>
        </div>
    </div>
    );
}