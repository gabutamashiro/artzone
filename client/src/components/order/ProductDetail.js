const ProductDetail = (props) => {
  const { product } = props;

  if (!product) {
    return <></>
  }

  return (
    <div className="product-detail">
			<h2>Resumo do pedido</h2>
			<div className="product-detail__data">
				<table>
					<tr>
						<th>ID</th>
						<th>Conteúdo</th>
						<th>Descrição</th>
						<th>Preço</th>
						<th>Gratuito?</th>
						<th>Nome Anunciante</th>
						<th>Imagem Anunciante</th>
					</tr>
					<tr>
						<td>{product.id}</td>
						<td>
							{ product.product_category === 1 &&
								<img src={`http://localhost:8080${product.product_content}`} alt={`${product.product_created_by} - ${product.product_created_date}`}/>
							}
							{ product.product_category === 2 &&
								<video width="320" height="240">
									<source src={`http://localhost:8080${product.product_content}`} type="video/mp4"></source>
								</video>
							}
						</td>
						<td>{product.product_description}</td>
						<td>{product.product_price}</td>
						<td>{product.product_is_free}</td>
						<td>{product.user_full_name}</td>
						<td><img src={`http://localhost:8080${product?.user_avatar}`} alt={product.user_avatar} /></td>
					</tr>
				</table>
			</div>
    </div>
  );
};

export default ProductDetail;