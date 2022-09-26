import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
//import { Link } from '@builder.io/qwik-city';
import MoringaProduct from '/pictures/MoringaProduct.png'
import Chocoyos from '/pictures/Chocoyos.png'
import Label from '/pictures/Label.png'

export default component$(() => {
  return (
    <div>
      <div className='w-full max-h-[700px] flex items-center overflow-visible relative'>
        <div className='bg-white reel text-black absolute z-10  md:right-auto left-4 rounded-md p-4 text-3xl font-bold text-center'>
        </div>
        <img
        alt='MyMoringas Logo'
        src={MoringaProduct}
        loading='eager'
        placeholder='blur'
        class='object-cover'
        //layout={'fill'}
        />
      </div>
      <div className='w-full max-h-[600px]  overflow-visible relative'>
        <img
        alt='Chocoyos'
        src={Chocoyos}
        loading='eager'
        placeholder='blur'
        class='object-cover object-right '
        //layout={'fill'}
        />
      </div>
      <div className='bg-white p-8 text-center text-black text-xl'>
        Do you feel that your body is not the same?    
        <br/>  
        Have you begun to have aches that never felt?
        <br/>  
        Supplement your nutrition and vitality.
        <br/>  
        Help to avoid many diseases.
        <br/>  
        myMoringas properties are a gift of Mother Earth itself.
      </div>
      <div className='w-full h-auto overflow-visible relative'>
        <img
        alt='MyMoringas Label'
        src={Label}
        loading='eager'
        placeholder='blur'
        class='object-cover'
        //layout={'responsive'}
        />
      </div>
      <div className='bg-white p-8 text-black text-xl'>
        <div className='text-center text-4xl font-bold'>
          <h2>The Peer-Review</h2>
          <h2>Facts About Moringa</h2>     
        </div>
        <br/>
        <ol>
          <br/> 
          <li> 
          Two 500mg capsules taken before day meals will provide <strong>all-day vitality.</strong>
          </li>
          <li>
          <strong>Caffeine-free energy,</strong> no crash.
          </li>
          <li>
          With <strong>36 anti-inflammation agents</strong> that rival turmeric.
          </li>
          <li>
          Has <strong>46 antioxidants</strong>, can potentially slow down the aging process and promote longevity.
          </li>
          <li>
          It has all the essential <strong>amino acids</strong> that the human body needs for <strong>good health</strong> and cell makeup.
          </li>
          <li>
          Moringa can potentially help <strong>reduce joint pain.</strong>
          </li>
          <li>
          It has Quercetin, which is an antioxidant that helps <strong>lower blood pressure.</strong>
          </li>
          <li>
          It contains another antioxidant called Chlorogenic Acid, this helps <strong>stabilize blood sugar levels.</strong>
          </li>
          <li>
          Packed with all-natural daily vegan protein, it may help <strong>reduce the chances of diabetes.</strong>
          </li>
          <li>
          Contains <strong>Omegas (3, 6 & 9)</strong> fatty acids.
          </li>
          <li>
          Packed with Vitamins <strong>A, B1</strong> (L-Thiamine), <strong>B2</strong> (Riboflavin), <strong>B3</strong> (Niacin),<strong> B6</strong> and <strong>C</strong>.
          </li>
          <li>
          Contains <strong>calcium, potassium, iron, magnesium, phosphorus, and zinc.</strong>
          </li>
          <li>
          Even though Moringa is not recommended for women to take while pregnant, after child birth, it can be used to potentially <strong>increase up to 30% lieast milk production</strong> (prolactin hormones). 
          </li>
          <li>
          Treat and prevents various known <strong>diseases.</strong>
          </li>
          <li>
          Moringa is one of the most <strong>naturally-filled nutrient rich plants in the world.</strong>
          </li>
        </ol>
      </div>
      <div className='bg-white text-black p-4'>
        Get Rid Of These Symptoms: 
        <ul>
          <li>Tiredness</li>
          <li>High Glucose</li>
          <li>Inflammation</li>
          <li>Pain</li>
        </ul>
      </div>
      <div className='h-[400px]'>
        Customer Testimonials
      </div>
      <div>
      Our Moringa Quality
      <h2>USDA Organic Certified</h2>
      <h2>GMP (Good Manufacturing Processes) & Eco-friendly</h2>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to MyMoringas'
};
