import { Button } from "./ui/button";
import { useDispatch, useSelector } from 'react-redux';
import { setOffset } from '../actions/productActions';
import { useState } from "react";

export function Paginations() {
    const dispatch = useDispatch();
    const offset = useSelector(state => state.product.offset);
    const currentPage = offset / 25 + 1;
    const [pageRange, setPageRange] = useState([1, 2, 3]); 


    const updatePageRange = (page) => {
        if (page === 1) setPageRange([1, 2, 3]);
        else if (pageRange[1] !== page) setPageRange([page - 1, page, page + 1]);
    };

    const handleNext = () => {
        dispatch(setOffset(offset + 25));
        updatePageRange(currentPage + 1);
    };
    const handleOffset0 = () => {
      dispatch(setOffset(0));
      setPageRange([1, 2, 3]);
    };
    const handlePrev = () => {
        if (currentPage > 1) {
            dispatch(setOffset(offset - 25));
            updatePageRange(currentPage - 1);
        }
    };

    return (
        <div className="inline-flex rounded-md border border-gray-300 bg-white">
            <Button 
                variant="ghost" 
                className="rounded-l-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50" 
                disabled={offset === 0}
                onClick={handleOffset0}
            >
                First
            </Button>
            <Button 
                variant="ghost" 
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50" 
                disabled={offset === 0}
                onClick={handlePrev}
            >
                Previous
            </Button>
            <div className="h-full w-px bg-gray-300" aria-hidden="true" />
            {pageRange.map(page => (
                <Button 
                    key={page}
                    variant="ghost"
                    className={`px-4 py-2 text-sm font-medium ${
                        page === currentPage ? "bg-blue-500 text-white" : "text-gray-700 hover:bg-gray-50"
                    }`}
                    onClick={() => {
                        dispatch(setOffset((page - 1) * 25));
                        updatePageRange(page);
                    }}
                >
                    {page}
                </Button>
            ))}
            <div className="h-full w-px bg-gray-300" aria-hidden="true" />
            <Button 
                variant="ghost" 
                onClick={handleNext} 
                className="rounded-r-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
                Next
            </Button>
        </div>
    );
}
