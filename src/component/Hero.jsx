const Hero = () =>{
    return(
    <main className="Hero">
        <div className="Hero-contant">
            <h1>YOUR FEET DESERVE THE BEST </h1>
            <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>

            <div className="hero-btn">
                <button>shop Now</button>
                <button>Category</button>
            </div>

            <div className="shopping">
                <p>Also Availabe On</p>
                <div className="brand">
                    <img src="/images/flipkart.png" alt="" />
                </div>
            </div>

        </div>
        <div className="Hero-img">
            <img src="/images/shoe_image.png" alt="img" />
        </div>

    </main>
    )
}
export default Hero;