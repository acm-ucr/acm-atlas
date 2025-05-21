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
    (name: string, value: string): string => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );

  function debounce<F extends (...args: Parameters<F>) => void>(
    func: F,
    delay: number,
  ): (...args: Parameters<F>) => void {
    let timeout: NodeJS.Timeout;
    return (...args: Parameters<F>) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), delay);
    };
  }

  const handleSearch = debounce((value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("search", value);
    params.set("page", "0");
    router.replace(pathname + "?" + params.toString(), {
      scroll: false,
    });
  }, 300);

  return (
    <div className="relative flex w-10/12 items-center rounded px-3 py-2 text-acm-gray-200">
      <input
        placeholder="Search for a project"
        className="mb-5 w-full rounded-xl border-2 border-black px-4 py-2 pl-10"
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
          handleSearch(e.target.value);
        }}
      />
      <MdCancel
        className="absolute right-0 mr-4 pb-5 text-4xl hover:cursor-pointer hover:opacity-50"
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
