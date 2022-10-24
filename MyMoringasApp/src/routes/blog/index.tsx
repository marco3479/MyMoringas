import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

export default component$(() => {
    return (

        <div class='p-10 px-32 text-center'>
            <div class='hover:bg-lightgreen p-8'>
                <Link href='blog/quality-in-moringas-capsules'>
                    <h3 class='text-3xl font-semibold'>
                        Quality in Moringa Capsules
                    </h3>
                    <h4 class='font-semibold'>AUGUST 21, 2022</h4>
                    <p>
                        PLACE IMAGE FOR BACKGROUND
                    </p>
                </Link>
            </div>
        </div>
    )
})