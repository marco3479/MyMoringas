import { component$, useStyles$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {

    useStyles$(footerCSS);

    return (
        <footer 
        className='bg-black text-white w-full relative p-12  mb-16'
        id='footer'
        >
            <div class=' grid grid-flow-row md:grid-flow-col w-full relative' id='footer1'>
                <div className=' flex flex-col place-content-center'>
                    <Link href='privacy-policy'>
                        Privacy Policy
                    </Link>
                    <Link href='terms-of-service'>
                        Terms of Service
                    </Link>
                    <Link href='shipping-policy'>
                        Shipping Policy
                    </Link>
                    <Link href='refund-policy'>
                        Refund Policy
                    </Link>
                    <Link href='contact'>
                        Contact
                    </Link>
                </div>
                <div className=''>
                    <h2>
                        myMoringas LLC Mission
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
            </div>
            <br/>

            <div>
                <i class=''>
                    Subscribe to our emails for discounts
                </i>
                <br/>
                <br/>
                <input class='bg-black w-80'  type='text' placeholder='Email'/>
            </div>
            <br/>
            <br/>
            <div class='text-center text-sm'>
                © 2022, myMoringas
            </div>
        </footer>
    )
})

export const footerCSS = `
 
@media (min-width: 768px) {
    #footer1 {
      grid-template-columns: 1fr 2fr;
    }
  }
  `