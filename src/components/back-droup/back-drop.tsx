import { Spinner } from "../ui/spinner"


export const BackDrop = () => {
  return (
    <div className="fixed inset-0 bg-[#00000053] flex justify-center items-center z-40">
      <Spinner className="size-10"/>
    </div>
  )
}