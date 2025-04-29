"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import spark from "../../data/projects/spark";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const PaginationComponent = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );

  const index = parseInt(searchParams.get("page") ?? "0");
  const total = Math.floor(spark.length / 6);

  return (
    <div className="scale-125 py-5">
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={() => {
                if (index > 0) {
                  router.push(
                    pathname +
                      "?" +
                      createQueryString("page", (index - 1).toString()),
                    { scroll: false },
                  );
                }
              }}
            />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink className="bg-acm-blue-500 rounded-full text-white">
              {index + 1}
            </PaginationLink>
            {index + 1 <= total && ( // Only render if index + 2 is within bounds
              <PaginationLink
                onClick={() => {
                  if (index < total) {
                    router.push(
                      pathname +
                        "?" +
                        createQueryString("page", (index + 1).toString()),
                      { scroll: false },
                    );
                  }
                }}
              >
                {index + 2}
              </PaginationLink>
            )}
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext
              onClick={() => {
                if (index < total) {
                  router.push(
                    pathname +
                      "?" +
                      createQueryString("page", (index + 1).toString()),
                    { scroll: false },
                  );
                }
              }}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default PaginationComponent;
