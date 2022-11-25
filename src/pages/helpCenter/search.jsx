import { useRef, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { data } from "./helpData"

const HelpSearch = () => {
    const [active, setActive] = useState(false);
    const [result, setResult] = useState([])
    const inputRef = useRef(null)

    const handleSearch = (query) => {
        if(query.length > 0) {
            let searchResult = data.map(item => { 
                return ( 
                    item.contents.filter(item => item.question.toUpperCase().indexOf(query.toUpperCase()) !== -1) 
                )
            });

            const combinedResult = [].concat.apply([], searchResult)

            setResult(combinedResult.slice(0, 6))
        }
        else {
            setResult([])
        }
    }

    return (
        <div className="relative">
            <div className={`flex items-center rounded border hover:border-primary-800 py-1 px-2 ${(active) ? "border-primary-800" : "border-gray-300"}`}>
                <FiSearch />
                <input 
                    type="text" 
                    ref={inputRef} 
                    className="p-1 px-3 border border-none flex-1 focus:outline-none" 
                    placeholder="Search" 
                    onFocus={() => {inputRef.current.placeholder = "What do you need help with?"; setActive(true)}} 
                    onBlur={() => {inputRef.current.placeholder = "Search"; setActive(false)}}
                    onChange={(e) => handleSearch(e.target.value)}
                />

            </div>
            <div className="p-4 absolute top-full left-0 w-full bg-white">
                {
                    result.map((item,i) => {
                        return (
                            <a key={i} href={`help/`} className="block border border-b-gray-100 p-4">{item.question}</a>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default HelpSearch;