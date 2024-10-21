import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

export function Paginations() {
    return (
        <>
        <Pagination
  aria-label="Page navigation example"
  size="lg"
>
  <PaginationItem>
    <PaginationLink
      first
      href="#"
    >
      First
    </PaginationLink>
  </PaginationItem>
  
  <PaginationItem>
    <PaginationLink href="#">
      1
    </PaginationLink>
  </PaginationItem>
  <PaginationItem>
    <PaginationLink
    
    href="#">
      2
    </PaginationLink>
  </PaginationItem>
  <PaginationItem>
    <PaginationLink href="#">
      3
    </PaginationLink>
  </PaginationItem>
  <PaginationItem>
    <PaginationLink
      href="#"
      next
    >
      Next
    </PaginationLink>
  </PaginationItem>
</Pagination>
        </>
    )
}