import { Link } from '@inertiajs/react';

export default function Index({ products }) {
    return (
        <div>
            <h1>Products</h1>

            <Link href="/product/products/create">
                + Add Product
            </Link>

            <table border="1" cellPadding="8">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {products.map((product) => (
                        <tr key={product.id}>
                            <td>{product.name}</td>

                            <td>
                                {product.category?.name ?? 'No Category'}
                            </td>

                            <td>₱{product.price}</td>

                            <td>{product.stock}</td>

                            <td>
                                <Link
                                    href={`/product/products/${product.id}`}
                                >
                                    View
                                </Link>

                                {' | '}

                                <Link
                                    href={`/product/products/${product.id}/edit`}
                                >
                                    Edit
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}