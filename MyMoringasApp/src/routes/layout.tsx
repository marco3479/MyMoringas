import { component$, Slot } from '@builder.io/qwik';
import Navbar from '~/components/Navbar';
import Footer from '~/components/Footer'
import { DocumentHead } from '@builder.io/qwik-city';
export default component$(() => {
  return (
    <div
    className='absolute w-[100vw] h-[100vh] overflow-hidden'
    >
        {/*<PromoBanner/>*/}
        <Navbar/>
        <div
        className='flex absolute flex-col w-[100vw] h-[100vh] overflow-auto'
        >
            <main
            className='w-full h-auto relative'
            >
                {/*<CookiesWarning/>*/}
                <Slot/>
            </main>
            <Footer/>
            <div
            className='hidden relative p-5 text-3xl z-[3] text-right flex-col lg:hidden overflow-y-auto h-full bg-opacity-90 text-white max-w-min bg-black min-w-min self-end right-0'
            id='menuOptions'
            >
            </div>
        </div>
    </div>
  );
});


export const head: DocumentHead = {
  links: [{
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/icon?family=Material+Icons'
  }],
};