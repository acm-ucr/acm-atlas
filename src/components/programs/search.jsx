"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { FaSearch } from "react-icons/fa";
import { MdCancel } from "react-icons/md";

const search = () => {

    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const createQueryString = useCallback((name, value) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set(name, value);

        return params.toString();
    },
    [searchParams]
    );

  return (
  <div className="flex items-center px-3 py-2 w-10/12 rounded">
    <MdCancel
        className="mx-2 text-xl hover:opacity-50 hover:cursor-pointer -translate-y-2 translate-x-8"
        onClick={() => 
            router.replace(
                pathname + "?" + createQueryString("search", "")
            )
        }
      />
    <input
        placeholder="...Search"
        className="mb-5 rounded-xl bg-gray-100 px-4 pl-10 py-2 w-full"
        value={searchParams.get("search") ?? ""}
        onChange={(e) => 
            router.replace(
                pathname + "?" + createQueryString("search", e.target.value)
            )
        }
      />
      <FaSearch className="mx-2 text-xl -translate-y-3 -translate-x-10" />
  </div>);
};

export default search;
