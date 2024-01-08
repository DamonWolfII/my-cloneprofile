import Logo from './logo'
import Menu from './menu'
import Button from './button'

export default function Navbar(){
    return(
        <div className='container  mx-auto px-4 pt-3 sticky top-0 backdrop-blur-sm z-10'>
            <div className='flex  w-full gap-10 items-center pr-11  '>
                <Logo />
                <Menu />
                <Button />
            </div>
        </div>   
    )
};