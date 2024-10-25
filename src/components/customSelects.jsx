import * as React from "react"
 
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function CustomSelect() {
    return (
        <>
         <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Popularity" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Sort:</SelectLabel>
          <SelectItem value="apple">price:asc</SelectItem>
          <SelectItem value="banana">price:desc</SelectItem>
          <SelectItem value="blueberry">rating:asc</SelectItem>
          <SelectItem value="grapes">rating:desc</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
        </>
    )
}