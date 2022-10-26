import { component$ } from '@builder.io/qwik';

export default component$(() => {
    return(
        <div class='p-10 px-32'>
            <h1 className='text-3xl font-semibold'>Shipping policy</h1>
            <br/>
            <br/>
            <h2 className='text-2xl'>myMoringas LLC Shipping policy</h2>
            <p>
                All orders are processed within 5 to 7 business days (excluding weekends and holidays) after receiving your order confirmation email. You will receive another notification when your order has shipped. 
            </p>
            <br/>
            <h3 className='text-2xl'>Domestic Shipping Rates and Estimates</h3>
            <p>
                For calculated shipping rates: Shipping charges for your order will be calculated and displayed at checkout. 
            </p>
            <br/>
            <h4 className='text-2xl'>How do I check the status of my order?</h4>
            <p>
                When your order has shipped, you will receive an email notification from us which will include a tracking number you can use to check its status. Please allow 48 hours for the tracking information to become available. 
                <br/>
                If you haven’t received your order within X days of receiving your shipping confirmation email, please contact us at info@myMoringas.com  with your name and order number, and we will look into it for you.
            </p>
            <br/>
            <h5 className='text-2xl'>Refunds, returns, and exchanges</h5>
            <p>
                We accept returns up to 30 days after delivery if the item is unused and in its original condition, and we will refund the full order amount minus the shipping costs for the return. 
                <br/>
                In the event that your order arrives damaged in any way, please email us as soon as possible at info@myMoringas.com with your order number and a photo of the item’s condition. We address these on a case-by-case basis but will try our best to work towards a satisfactory solution.
            </p>
            <br/>
            <h6 className='text-2xl'>USPS packages</h6>
            <p>
                myMoringas by default sends most Domestic (United States) via USPS first class packages, with tracking number, which has no insurance. Therefore, in the rare location that a package is late or stolen, then we can help the customer with the tracking number. We, as a company is not, however, responsible for the carriers' issues. When the customer buys items that are not insured, is consenting that myMoringas is not responsible for refunds (not applicable). We, however, refer to the Post Office with the tracking number, to resolve an issue, which can be done online.
            </p>
            <br/>
            <h7 className='text-2xl'>International Shipping</h7>
            <p>
                In some instances, such as First-Class Package International the tracking number stops when it leaves the United States. Most likely, the package will arrive. With many carries depending on issues like customs or third-party involvement, myMoringas has no control in over the situation, and will not refund the package. 
            </p>
            <br/>
            <br/>
            <h8 className='font-bold'>If you have any further questions, please don't hesitate to contact us at info@myMoringas.com. We are here to serve you.</h8>
        </div>
    )
})