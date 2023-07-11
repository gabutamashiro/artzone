module.exports = function ({ app, dbConn, upload }) {
  app.post('/products', (req, res) => {
      const {
        productContent,
        productDescription,
        productTag,
        productCategory,
        productPrice,
        productIsFree,
        productCreatedBy
      } = req.body;

      const productCreatedDate = new Date();
  
      const createProductSql = `INSERT INTO product
        (product_content, product_description, product_tag, product_category, product_price, product_is_free, product_created_date, product_created_by)
        VALUES (?, ?, ?, ?, ?, ?, ?)`;
  
      dbConn.query(
        createProductSql,
        [productContent, productDescription, productTag, productCategory, productPrice, productIsFree, productCreatedDate, productCreatedBy],
        function (error, result) {
          if (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro ao criar o anúncio.' });
          } else {
            res.status(200).jsonp({ 
              product: {
                id: result.insertId,
                product_content: productContent,
                product_tag: productTag,
                product_description: productDescription,
                product_category: productCategory,
                product_price: productPrice,
                product_is_free: productIsFree,
                product_created_date: productCreatedDate,
                product_created_by: productCreatedBy
              },
              message: 'Anúncio criado com sucesso.'
            });
          }
        }
      );
  });

  app.get('/products', (req, res) => {
    const getProductsSql = "SELECT * FROM product ORDER BY product_created_date DESC";
    dbConn.query(getProductsSql, function (error, products) {
      if (products) {
        res.status(200).jsonp(products);
      } else {
        res.status(400).jsonp({ message: 'Não foi possível recuperar os produtos. Tente novamente.' });
      }
    });
  });

  app.get('/products/:id', (req, res) => {
    const id = req.params.id;
    const getProductSql = "SELECT product.id, product_content, product_category, product_created_date, product_created_by, product_description, product_price, product_is_free, user_account.user_avatar, user_account.user_full_name, user_account.user_number_of_followers FROM product INNER JOIN user_account ON product.product_created_by = user_account.id WHERE product.id = ?";
    if (!id) {
      res.status(400).jsonp({ message: 'Não foi possível carregar os detalhes. Tente novamente.' });
    }
    dbConn.query(getProductSql, [id], function (error, response) {
      if (response && response.length) {
        res.status(200).jsonp(response);
      } else {
        res.status(400).jsonp({ message: 'Not found' });
      }
    });
  });

  app.post('/product/delete/:id', (req, res) => {
    const productId = req.params.id;
    const deleteProductSql = 'DELETE FROM product WHERE id = ?';
    dbConn.query(deleteProductSql, [productId], function (error, result) {
      if (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao excluir o anúncio.' });
        return;
      }
      if (result.affectedRows === 0) {
        res.status(404).json({ message: 'Anúncio não encontrado.' });
        return;
      }
      res.status(200).json({ message: 'Anúncio excluído com sucesso.' });
    });
  });
}