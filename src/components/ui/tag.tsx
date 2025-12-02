
interface Props {
    text: string
}

export default function Tag({ text }: Props) {
    return (
        <div className="px-5 py-1 border-2 border-accent rounded-full">
            <span
                className="text-accent text-md">
                {text}
            </span>
        </div>
    )
}