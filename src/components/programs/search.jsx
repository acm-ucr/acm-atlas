"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { FaSearch } from "react-icons/fa";
import { MdCancel } from "react-icons/md";

const Search = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );

  return (
    <div className="text-acm-gray-200 flex w-10/12 items-center rounded px-3 py-2">
      <MdCancel
        className="mx-2 translate-x-8 -translate-y-2 text-xl hover:cursor-pointer hover:opacity-50"
        onClick={() =>
          router.replace(pathname + "?" + createQueryString("search", ""), {
            scroll: false,
          })
        }
      />
      <input
        placeholder="...Search"
        className="mb-5 w-full rounded-xl bg-gray-100 px-4 py-2 pl-10"
        value={searchParams.get("search") ?? ""}
        onChange={(e) =>
          router.replace(
            pathname + "?" + createQueryString("search", e.target.value),
            { scroll: false },
          )
        }
      />
      <FaSearch className="mx-2 -translate-x-10 -translate-y-3 text-xl" />
    </div>
  );
};

export default Search;
