import { component$, useStyles$ } from "@builder.io/qwik";

export default component$(() => {


    return (
        <>
            <div class='bg-white text-black  text-5xl'>
                <br/>
                <h1 class='ml-40 font-semibold'>Contact</h1>
                <br/>
            </div>
            <div class='bg-green text-white px-40'>
                <br/>
                <h2 class='text-xl'>Get in touch with us</h2>
                <br/>
                <form class='flex flex-col gap-4 '>
                    <span class='grid grid-flow-col grid-cols-2 gap-4'>
                        <input name='Name' placeholder="Name" type='text'/>
                        <input name='Email' placeholder="Email" type='text'/>
                    </span>
                        <input name='PhoneNumber' placeholder="Phone number" type='text'/>
                        <textarea name='Comment' placeholder="Tell us something"/>
                        <input class='max-w-max bg-white text-green rounded-md px-5' type='submit' value='Send'/>
                </form>
                <br/>
                <br/>
            </div>
        </>
    )
})


