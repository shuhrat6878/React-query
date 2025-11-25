import { Skeleton } from "@/components/ui/skeleton"


export const CardLoading = () => {
    return (
        <>
            <div className="my-5">
                <Skeleton className="h-10 w-[400px] py-1 " />
                <Skeleton className="h-10 w-[300px] py-1" />
                <Skeleton className="h-10 w-[100px] py-1" />
            </div>
            <div className="my-5">
                <Skeleton className="h-10 w-[400px] py-1" />
                <Skeleton className="h-10 w-[300px] py-1" />
                <Skeleton className="h-10 w-[100px] py-1" />
            </div>
            <div className="my-5">
                <Skeleton className="h-10 w-[400px] py-1" />
                <Skeleton className="h-10 w-[300px] py-1" />
                <Skeleton className="h-10 w-[100px] py-1" />
            </div>
            <div className="my-5">
                <Skeleton className="h-10 w-[400px] py-1" />
                <Skeleton className="h-10 w-[300px] py-1" />
                <Skeleton className="h-10 w-[100px] py-1" />
            </div>
            <div className="my-5">
                <Skeleton className="h-10 w-[400px] py-1" />
                <Skeleton className="h-10 w-[300px] py-1" />
                <Skeleton className="h-10 w-[100px] py-1" />
            </div>
        </>
    )
}