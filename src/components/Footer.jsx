import { footerLinks } from "../constants"

const Footer = () => {
    return (
        <footer className="py-5 sm:px-10 px-5">
            <div className="screen-max-width">
                <div>
                    <p className="font-semibold text-gray text-xs">
                        More ways to shop: {' '}
                        <span className="underline text-blue">
                            <a href="https://www.apple.com/store" target="blank">
                                Find an Apple Store</a> {' '}
                        </span>
                        or {' '}
                        <span className="underline text-blue">
                            <a href="https://www.apple.com/store" target="blank">
                                other retailer</a> {' '}
                        </span>{' '}
                        near you.
                    </p>

                    <p className="font-semibold text-gray text-xs">
                        or call <span className="underline text-blue">+962 7 8050 5973 </span>{' '}
                    </p>
                </div>
                <div className="bg-neutral-700 my-5 h-[1px] w-full" />

                <div className="flex md:flex-row flex-col md:items-center justify-between">
                    <p className="font-semibold text-gray text-xs">Copyright @ 2024 Apple Inc. All right reserved.</p>

                    <div className="flex">
                        {footerLinks.map((link, i) => (
                            <p key={link} className="font-semibold text-gray text-xs">
                                {link} {' '}
                                {i !== footerLinks.length - 1 && (
                                    <span className="mx-2"> | </span>
                                )}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer