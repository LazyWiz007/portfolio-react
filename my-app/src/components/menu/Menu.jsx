import "./menu.scss"

export default function Menu({menuOpen, setMenuOpen}) {
    return (
        <div className={"menu " + ( menuOpen && "active")}>
            <ul>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#intro"> Home </a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#portfolio"> About Me </a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#work"> Mywork </a>
                </li >
                <li>
                    <a href="#testimonials"> Testimonials </a>
                </li >
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#contacts"> contacts </a>
                </li>
            </ul>
            
        </div>
    )
}
