import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonCard() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[230px] w-full p-4 rounded-xl" >
        <div className="space-y-2 flex flex-col gap-2 items-center">
          <Skeleton className="h-[30px] w-full" />
          <Skeleton className="h-[50px] w-[50px] rounded-full" />
          <Skeleton className="h-2 w-full rounded-lg" />
          <div className="flex items-center w-full justify-between">
            <Skeleton className="h-4 w-[50px]" />
            <Skeleton className="h-4 w-[50px]" />
          </div>
          <Skeleton className="h-4 w-full" />
        </div>
      </Skeleton>
    </div>
  );
}
