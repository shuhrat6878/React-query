
import {
    Dialog,
    DialogContent,
} from "@/components/ui/dialog"
import React from "react"
import { Button } from "../ui/button"

export const Form = () => {
    const [open,setOpen ]= React.useState(false)
    return (
        <><Button className="mt-5 cursor-pointer" onClick={()=> setOpen(true)}>Create</Button>
            <Dialog onOpenChange={(res)=> setOpen(res)} open={open}>
                
                <DialogContent>
                    
                </DialogContent>
            </Dialog>
        </>
    )
}