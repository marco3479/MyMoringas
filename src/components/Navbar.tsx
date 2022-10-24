import { component$ } from "@builder.io/qwik"
import { Link } from "@builder.io/qwik-city"
import MyMoringasLogo from '/pictures/MyMoringasLogo.png'

export default component$(() => {
    return(
        <div className='bg-green  drop-shadow-md shadow-black sticky h-[100px] text-3xl w-[full] px-10 flex flex-row justify-between items-center'>
                    <button className='md:hidden'>
                        <i className="material-icons text-4xl">
                            menu
                        </i>
                    </button>
                    <span className='text-xl relative flex flex-row items-center'>
                        <span className='relative m-0 hover:cursor-pointer' onClick$={() => {window.location.assign(window.location.origin + '/')}}>
                            <img
                            alt='MyMoringas Logo'
                            className='rounded-md'
                            src={MyMoringasLogo}
                            width={204}
                            height={54}
                            loading='eager'
                            placeholder='blur'
                            />
                        </span>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span className='hidden md:inline text-white'>
                            <Link href='shop'>Shop</Link>
                            &nbsp;&nbsp;&nbsp;
                            <Link href='blog'>Blog</Link>
                            &nbsp;&nbsp;&nbsp;
                            <Link href='about-us'>About Us</Link>
                            &nbsp;&nbsp;&nbsp;
                            <Link href='contact'>Contact</Link>
                        </span>
                    </span>
                    <div>
                        cart
                    </div>
                </div>
    )
})