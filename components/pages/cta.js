export default function Cta({button, second_link}) {
 
    return(
  
        <section>

            <button class="primary">
                {button}
            </button>

            <p class="read_more">
                {second_link}
            </p>

        </section>
       
    )
}