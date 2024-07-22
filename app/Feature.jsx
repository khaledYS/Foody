export default function Feature({
    title,
    description,
    logo
}){
    return (
        <div className="bg-secnd/10 text-secnd max-w-80 max-md:max-w-56 pb-12 pt-8 max-md:py-6 px-4 flex flex-col items-center gap-4 rounded-xl  ">
            <div className="feature-logo text-8xl max-md:text-5xl">{logo}</div>
            <dir className="feature-description flex flex-col gap-2 ">
                <div className="text-2xl max-md:text-2xl break-keep">{title}</div>
                <div className="text-lg max-md:text-md">{description}</div>
            </dir>
        </div>
    )
}