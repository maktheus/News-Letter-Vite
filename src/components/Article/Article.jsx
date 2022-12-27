
const Article = ({ title, text, tags, image, alt }) => {
    return <div className="alura-card">
        <h1 className="mb-2 text-xl text-alura-200 dark:text-gray-200 font-bold">{title}</h1>
        <div className="w-full pr-5 flex gap-2 justify-end">
            {
                tex.map((content, index) => <p key={index} className="text-alura-200 dark:text-gray-400 line-clamp-6 sm:line-clamp-none">{content}</p>) 
            }
        </div>
        <div className="flex flex-col gap-1">
            {
                text.map((content, index) => <span key={index} className="text-alura-200 dark:text-gray-400">{content}</span>)
            }
        </div>
        {image && <img className="sm:p-4" src={image} />}
        {image && alt && <span className="sr-only">{alt}</span>}
    </div>
}

export default Article