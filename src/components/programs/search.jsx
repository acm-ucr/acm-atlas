"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";
import { MdCancel } from "react-icons/md";

const Search = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [searchValue, setSearchValue] = useState(
    searchParams.get("search") ?? "",
  );

  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );

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
  }, 300);

  return (
    <div className="flex w-10/12 items-center rounded px-3 py-2 text-acm-gray-200">
      <input
        placeholder="...Search"
        className="mb-5 w-full rounded-xl bg-gray-100 px-4 py-2 pl-10"
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
          handleSearch(e.target.value);
        }}
      />
      <MdCancel
        className="mx-2 pr-4 text-4xl hover:cursor-pointer hover:opacity-50 pb-5"
        onClick={() => {
          setSearchValue("");
          router.replace(pathname + "?" + createQueryString("search", ""), {
            scroll: false,
          });
        }}
      />
    </div>
  );
};

export default Search;
