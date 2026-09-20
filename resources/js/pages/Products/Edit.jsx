import { Link, useForm } from '@inertiajs/react';

export default function Edit({ product, categories }) {
    const { data, setData, put, processing, errors } = useForm({
        product_category_id: product.product_category_id ?? '',
        name: product.name ?? '',
        description: product.description ?? '',
        price: product.price ?? '',
        stock: product.stock ?? '',
    });

    function submit(e) {
        e.preventDefault();

        put(`/product/products/${product.id}`);
    }

    return (
        <div>
            <h1>Edit Product</h1>

            <form onSubmit={submit}>
                <div>
                    <label>Name</label>

                    <input
                        type="text"
                        value={data.name}
                        onChange={e =>
                            setData('name', e.target.value)
                        }
                    />

                    {errors.name && <p>{errors.name}</p>}
                </div>

                <div>
                    <label>Category</label>

                    <select
                        value={data.product_category_id}
                        onChange={e =>
                            setData(
                                'product_category_id',
                                e.target.value
                            )
                        }
                    >
                        <option value="">
                            Select Category
                        </option>

                        {categories.map(category => (
                            <option
                                key={category.id}
                                value={category.id}
                            >
                                {category.name}
                            </option>
                        ))}
                    </select>

                    {errors.product_category_id && (
                        <p>{errors.product_category_id}</p>
                    )}
                </div>

                <div>
                    <label>Price</label>

                    <input
                        type="number"
                        step="0.01"
                        value={data.price}
                        onChange={e =>
                            setData('price', e.target.value)
                        }
                    />

                    {errors.price && <p>{errors.price}</p>}
                </div>

                <div>
                    <label>Stock</label>

                    <input
                        type="number"
                        value={data.stock}
                        onChange={e =>
                            setData('stock', e.target.value)
                        }
                    />

                    {errors.stock && <p>{errors.stock}</p>}
                </div>

                <div>
                    <label>Description</label>

                    <textarea
                        value={data.description}
                        onChange={e =>
                            setData('description', e.target.value)
                        }
                    />

                    {errors.description && (
                        <p>{errors.description}</p>
                    )}
                </div>

                <button type="submit" disabled={processing}>
                    {processing ? 'Updating...' : 'Update Product'}
                </button>
            </form>

            <br />

            <Link href={`/product/products/${product.id}`}>
                Cancel
            </Link>

            {' | '}

            <Link href="/product/products">
                Back to Products
            </Link>
        </div>
    );
}