import Logo from './logo'
import Menu from './menu'
import Button from './button'

export default function Navbar(){
    return(
    
        <div className='flex flex-nowrap w-full justify-between items-center bg-transparent '>
            <Logo />
            <Menu />
            <Button />
        </div>

        
    )
};