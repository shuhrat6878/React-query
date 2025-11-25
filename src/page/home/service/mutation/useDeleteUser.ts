import { request } from "@/config/request"
import { useMutation } from "@tanstack/react-query"

export const useDeleteUser = (id: number) => {
    return useMutation({
        mutationFn: (data: {
            name: string;
            email: string;
            username: string;
        }) => request.delete(`/users/${id}`, { data }).then((res) => res.data)
    })
}

