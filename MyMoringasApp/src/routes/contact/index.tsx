import { component$, useStyles$ } from "@builder.io/qwik";

export default component$(() => {

    useStyles$(contactCSS);

    return (
        <>
            <div class='bg-white text-black  text-5xl'>
                <br/>
                <h1 class='ml-40'>Contact</h1>
                <br/>
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
                </form>
            </div>
        </>
    )
})


export const contactCSS = `

input, input::placeholder, textarea, textarea::placeholder {
    background-color: #5d9c13;
    color: white;
    border: 0;
    padding: 1.5rem;
    height: 4.5rem;
}

input:focus {
    border: none;
}

`