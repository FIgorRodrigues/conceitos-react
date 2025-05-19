import React, { useState, useEffect } from 'react';
import productsApiService from '../services/productsApiService';

const Products = ({ children }) => {
    const [productList, setProducts] = useState([]);

    useEffect(() => {
        productsApiService.get('products').then(
            ({ data }) => setProducts([
                ...productList,
                ...data,
            ])
        ).catch(
            _ => alert("Falhou em buscar os produtos")
        )
    }, []);

    const handleAddProduct = async () => {
        const productId = Date.now();
        const { data, status } = await productsApiService.post(
            'products', 
            {
                "title": `Teste criação de produto ${productId}`,
                "price": 0.1,
                "description": "teste teste teste teste",
                "category": "string",
                "image": "http://example.com"
            }
        );
        if(status >= 300) {
            alert("Falhou em criar Produto");
            return;
        }
        setProducts([
            ...productList,
            {
                ...data, 
                id: productId,
            }
        ]);
    }

    return (
        <section className="product-list">
            <ul>
                {
                    productList.map(
                        ({id, title}) => <li key={id}>{title}</li>
                    )
                }
            </ul>
            <button title="Adicionar Produto" type="button" onClick={handleAddProduct}>
                Adicionar Produto
            </button>
            {children}
        </section>
    )
}

export default Products;