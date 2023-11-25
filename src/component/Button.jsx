export default function Button({children ,...props}){
    return <button className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:text-stone-100 hover:bg-stone-400 hover:duration-200	" {...props}>{children}</button>
}