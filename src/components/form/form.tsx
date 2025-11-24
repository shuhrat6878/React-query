
import {
    Dialog,
    DialogContent,
} from "@/components/ui/dialog"
import React from "react"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useCreateUser } from "@/page/home/service/mutation/useCreateUser"
import { Spinner } from "../ui/spinner"

import { useQueryClient } from "@tanstack/react-query"


const formSchema = z.object({
    name: z.string().min(2).max(50),
    email: z.email(),
    username: z.string().min(2).max(50),
})

export const CreateForm = () => {
    const [open, setOpen] = React.useState(false)
    const {mutate,isPending}=useCreateUser()

    const client = useQueryClient()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            username: "",
        },
    })

    const onSubmit =(data:z.infer<typeof formSchema>)=>{
            const newUser = { id: Date.now().toString(), ...data }
            mutate(newUser,{
                onSuccess:()=>{
                    client.invalidateQueries({queryKey:["user_list"]})
                    form.reset()
                    setOpen(false)
                },
                onError:(error)=>{
                    form.setError('username',{message:error.message})
                }
            })
    }

    return (
        <>
            <Button className="mt-5 cursor-pointer" onClick={() => setOpen(true)}>
                Create
            </Button>
            <Dialog onOpenChange={(res) => setOpen(res)} open={open}>
                <DialogContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="name..." {...field} />
                                        </FormControl>
                                        
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input placeholder="email..." {...field} />
                                        </FormControl>
                                        
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="username"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Username</FormLabel>
                                        <FormControl>
                                            <Input placeholder="username..." {...field} />
                                        </FormControl>
                                        
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button className="w-full" type="submit">
                                {isPending? <Spinner/> :""}
                                Submit</Button>
                        </form>
                    </Form>
                </DialogContent>
            </Dialog>
        </>
    )
}