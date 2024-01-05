import Logo from './logo'
import Menu from './menu'
import Button from './button'

export default function Navbar(){
    return(
        <div className='container  mx-auto px-4 my-8'>
            <div className='flex  w-full gap-10 items-center pr-11'>
                <Logo />
                <Menu />
                <Button />
            </div>
        </div>   
    )
};