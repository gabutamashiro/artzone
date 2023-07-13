module.exports = function ({ app, dbConn, upload }) {
	//CREATE
	app.post('/orders', (req, res) => {
		const { seller_id, customer_id, product_id, product_price } = req.body;

		const createOrderSql = `INSERT INTO \`order\` (seller_id, customer_id, product_id, product_price) VALUES (?, ?, ?, ?)`;
		const values = [seller_id, customer_id, product_id, product_price];
		
		dbConn.query(createOrderSql, values, (error, result) => {
			if (error) {
				console.error(error);
				res.status(500).json({ error: 'Erro ao criar o pedido.' });
			} else {
				res.status(201).json({ message: 'Pedido criado com sucesso.' });
			}
		});
	});
};