const Footer =() => {
    return (
        <div className="mt-32 py-4 flex md:flex-row flex-col gap-6 md:gap-0 justify-between items-center">
            <h1 className="text-2xl font-bold"> Portfolio </h1>
            <div className="flex gap-7">
                <p> © {new Date().getFullYear()} <span className="font-bold">Mubtasim Saadid Ahmed</span>. All rights reserved. </p>
            </div>
            <div className="flex items-center gap-3">
                <a href="https://www.linkedin.com/in/mubtasimsaadid/"> <i class="ri-linkedin-box-fill ri-2x"> </i> </a>
                <a href="https://github.com/mubtasimsaadid"> <i class="ri-github-fill ri-2x"> </i> </a>
                <a href="https://www.reddit.com/user/Historical_Still3358/"> <i class="ri-reddit-fill ri-2x"> </i> </a>
            </div>
        </div>
    )
}
export default Footer;