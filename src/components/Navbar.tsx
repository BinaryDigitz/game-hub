import logo from "../assets/logo.webp"

function Navbar() {
  return (
    <nav className=' h-14 flex items-center justify-between'>
        <div className="logo p-1" >
            <img src={logo} alt="logo" className="size-14" />
        </div>
      
    </nav>
  )
}

export default Navbar
