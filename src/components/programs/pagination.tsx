"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { StaticImageData } from "next/image";

interface Project {
  photo: StaticImageData;
  name: string;
  github?: string;
  website: string;
}

interface ProjectGridProps {
  projects: Project[];
}

const PaginationComponent = ({ projects = [] }: ProjectGridProps) => {
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
  const total = Math.floor(projects.length / 6);

  return (
    <div className="scale-125 py-12">
      <Pagination>
        <PaginationContent>
          {index > 0 && (
            <PaginationItem className="hover:cursor-pointer hover:opacity-70">
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
          )}
          {index - 1 > 0 && (
            <PaginationItem className="hover:cursor-pointer hover:opacity-70">
              <PaginationLink
                onClick={() => {
                  router.push(pathname + "?" + createQueryString("page", "0"), {
                    scroll: false,
                  });
                }}
              >
                {1}
              </PaginationLink>
            </PaginationItem>
          )}
          <PaginationItem>
            {index - 2 > 0 && <PaginationEllipsis />}
          </PaginationItem>
          <PaginationItem className="hover:cursor-pointer hover:opacity-70">
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
          <PaginationItem className="hover:cursor-pointer">
            <PaginationLink className="rounded-full bg-acm-blue-500 text-white hover:bg-acm-blue-500 hover:text-white hover:opacity-85">
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
          <PaginationItem className="hover:cursor-pointer hover:opacity-70">
            {index + 1 < total && (
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
          {index + 1 <= total && (
            <PaginationItem className="hover:cursor-pointer hover:opacity-70">
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
          )}
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default PaginationComponent;
