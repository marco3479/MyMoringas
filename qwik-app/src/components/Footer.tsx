import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
    return (
        <footer 
        className='bg-black text-white w-full relative p-12 text-xl grid grid-flow-row md:grid-flow-col grid-'
        id='footer'
        >
            <div className=''>
                <Link href='policies/privacy-policy'>
                    Privacy Policy
                </Link>
                <br/> 
                <br/> 
                <Link href='policies/terms-of-service'>
                    Terms of Service
                </Link>
                <br/>
                <br/>
                <Link href='policies/shipping-policy'>
                    Shipping Policy
                </Link>
                <br/>
                <br/>
                <Link href='policies/refund-policy'>
                    Refund Policy
                </Link>
                <br/>
                <br/>
                <Link href='contact'>
                    Contact
                </Link>
            </div>
            <div className=''>
                <h2>
                    myMoringas LLC mission
                </h2>
                <br/>
                We aim to improve the health and lives of our customers. We are also dedicated to economically 
                empowering those honest and hardworking Nicaraguan families of Moringa growers of privately 
                owned USDA-certified farms. If we achieve these goals, we are aiding humanity and enhancing 
                our Earth's soil quality.
                <br/>
                <br/>
                ~OneLove            
            </div>
            <br/>
        </footer>
    )
})