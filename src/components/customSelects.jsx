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
import { Button } from "./ui/button";
import { useState } from "react";

export function CustomSelect({ setSort }) {
  const [selectedValue, setSelectedValue] = useState(""); 

  const handleValueChange = (value) => {
    setSelectedValue(value);
  };

  const handleFilterClick = () => {
    setSort(selectedValue);
  };
    return (
        <>
         <Select onValueChange={handleValueChange} >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Popularity" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Sort:</SelectLabel>
          <SelectItem value="price:asc">price:asc</SelectItem>
          <SelectItem value="price:desc">price:desc</SelectItem>
          <SelectItem value="rating:asc">rating:asc</SelectItem>
          <SelectItem value="rating:desc">rating:desc</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
    <Button onClick={handleFilterClick} variant="default" size="sm">Filter</Button>
        </>
    )
}