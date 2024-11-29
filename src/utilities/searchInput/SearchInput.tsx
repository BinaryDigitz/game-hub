import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";
import { useForm } from "react-hook-form";
import { z } from "zod";
interface Props {
    onSearch: () => void
}

function SearchInput({ onSearch} : Props) {
    const schema = z.object({
        searchInput: z
        .string()
        .min(3, { message: " Must be aleast 3 letters" }).max(10, {message: "Must be at most 10 letters."})
    })
    type FormData = z.infer<typeof schema>
    const {reset, register, handleSubmit, formState: { isValid, errors} } = useForm<FormData>({ resolver: zodResolver(schema)})
  return (
    <form onSubmit={() =>{
       
        handleSubmit(onSearch)
        reset
    }} >
        <div className="w-[220px] border relative border-green-300">
            <label htmlFor="searchInput"></label>
            <input type="text" placeholder="e.g paracetamol" max={10} id="searchInput" className="w-[150px] px-2 rounded-sm "  {...register("searchInput")}/>
            
        <button disabled={!isValid} type="submit" className="absolute top-0 right-2"><span className="material-symbols-outlined ">search</span></button>
        </div>
        {errors.searchInput && <p>{errors.searchInput.message}</p>}
        
    </form>
  )
}

export default SearchInput
