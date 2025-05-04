"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { MdCancel } from "react-icons/md";

const Search = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [searchValue, setSearchValue] = useState(searchParams.get("search") ?? "");

  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  // Debounce function
  const debounce = (func, delay) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), delay);
    };
  };

  const handleSearch = debounce((value) => {
    router.replace(pathname + "?" + createQueryString("search", value), {
      scroll: false,
    });
  }, 300); // 300ms debounce delay

  return (
    <div className="text-acm-gray-200 flex w-10/12 items-center rounded px-3 py-2">
      <MdCancel
        className="mx-2 translate-x-8 -translate-y-2 text-xl hover:cursor-pointer hover:opacity-50"
        onClick={() => {
          setSearchValue(""); // Clear the input field
          router.replace(pathname + "?" + createQueryString("search", ""), {
            scroll: false,
          });
        }}
      />
      <input
        placeholder="...Search"
        className="mb-5 w-full rounded-xl bg-gray-100 px-4 py-2 pl-10"
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value); // Update local state
          handleSearch(e.target.value); // Debounced URL update
        }}
      />
      <FaSearch className="mx-2 -translate-x-10 -translate-y-3 text-xl" />
    </div>
  );
};

export default Search;