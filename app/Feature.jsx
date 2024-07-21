export default function Feature({
    title,
    description,
    logo
}){
    return (
        <div className="bg-secnd/10 text-secnd max-w-80 pb-12 pt-8 px-4 flex flex-col justify-center items-center gap-4 rounded-xl">
            <div className="feature-logo text-8xl">{logo}</div>
            <dir className="feature-description flex flex-col gap-2">
                <div className="text-3xl break-keep">{title}</div>
                <div className="text-xl">{description}</div>
            </dir>
        </div>
    )
}