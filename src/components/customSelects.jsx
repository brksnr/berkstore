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

export function CustomSelect({ setSort, setColor }) {
  const [selectedValue, setSelectedValue] = useState("");
  const [selectedColorValue, setSelectedColorValue] = useState("");

  const handleValueChange = (value) => {
    setSelectedValue(value);
  };
  const handleColorValueChange = (value) => {
    setSelectedColorValue(value);
  };

  const handleFilterClick = () => {
    setSort(selectedValue);
    setColor(selectedColorValue);
  };
    return (
        <>
        <div className="flex flex-col gap-4 lg:flex-row">
         <Select onValueChange={handleValueChange} >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Sort by:" />
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
    <Select onValueChange={handleColorValueChange}>
    <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Color :" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Color:</SelectLabel>
          <SelectItem value="beyaz">Beyaz</SelectItem>
          <SelectItem value="siyah">Siyah</SelectItem>
          <SelectItem value="sarı">Sarı</SelectItem>
          <SelectItem value="kırmızı">Kırmızı</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
    <Button onClick={handleFilterClick} variant="default" size="sm">Filter</Button>
    </div>
        </>
    )
}