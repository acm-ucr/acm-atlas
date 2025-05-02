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
            {index - 2 > 0 && (
              <PaginationLink
                onClick={() => {
                  router.push(pathname + "?" + createQueryString("page", "0"), {
                    scroll: false,
                  });
                }}
              >
                {1}
              </PaginationLink>
            )}
          </PaginationItem>
          <PaginationItem>
            {index - 2 > 0 && <PaginationEllipsis />}
          </PaginationItem>
          <PaginationItem>
            {index > 0 && (
              <PaginationLink
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
              >
                {index}
              </PaginationLink>
            )}
          </PaginationItem>
          <PaginationItem>
            <PaginationLink className="bg-acm-blue-500 rounded-full text-white">
              {index + 1}
            </PaginationLink>
            {index + 1 <= total && (
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
            {index + 2 <= total && <PaginationEllipsis />}
          </PaginationItem>
          <PaginationItem>
            {index + 2 < total && (
              <PaginationLink
                onClick={() => {
                  if (index + 2 < total) {
                    router.push(
                      pathname +
                        "?" +
                        createQueryString("page", total.toString()),
                      { scroll: false },
                    );
                  }
                }}
              >
                {total + 1}
              </PaginationLink>
            )}
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
