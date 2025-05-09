import Link from "next/link";
import hacks from "@/data/hackathons";

const UsedIn = () => {
    return (
    <div className = "ml-16 w-max">
        <div className = "font-bold text-4xl text-acm-gray-500 mb-6">USED IN</div>
            <div className = "grid grid-cols-2 gap-4 mb-5">
                {hacks.filter(hack => hack.name.toLowerCase() !== "designverse").map(({name, website, years, bgColor}) => (
                    <Link key = {name} href={website} target="_blank" rel="noopener norefferer">
                        <button className ={`rounded-lg p-4 text-white font-semibold flex justify-between items-center ${bgColor}`}> 
                            <span className="text-lg mr-3">{name}</span>
                            <span className="text-sm font-light">{years}</span>
                        </button>
                    </Link>

                ))}
            </div>
        </div>
    );
};

export default UsedIn;
