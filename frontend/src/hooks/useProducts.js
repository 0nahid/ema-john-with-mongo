import axios from "axios";
import { useEffect, useState } from "react";
const useProducts = () => {

    const [products, setProducts] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    useEffect(() => {
        axios.get(`http://localhost:5500/api/products`)
            .then(res => {
                setProducts(res.data.products)
                const count = res.data.count;
                const pageNumbers = Math.ceil(count / 10);
                setPageCount(pageNumbers);
            })
    }, [])

    return [products, setProducts];
}

export default useProducts;