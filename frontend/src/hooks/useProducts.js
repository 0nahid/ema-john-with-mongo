import axios from "axios";
import { useEffect, useState } from "react";
const useProducts = () => {

    const [products, setProducts] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const size = 10;
    useEffect(() => {
        axios.get(`http://localhost:5500/api/products?page=${pageCount}&&size=${size}`)
            .then(res => {
                setProducts(res.data.products)
                const count = res.data.count;
                const pageNumbers = Math.ceil(count / 10);
                setPageCount(pageNumbers);
            })
    }, [pageCount])

    return [products, setProducts];
}

export default useProducts;