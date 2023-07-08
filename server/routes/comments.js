module.exports = function ({ app, dbConn, upload }) {
    app.get('/posts/:postId/comments', (req, res) => {
        const postId = req.params.postId;
        const getCommentsSql = 'SELECT * FROM `comment` WHERE has_post = 1 AND parent_id = ? ORDER BY id ASC';
    
        dbConn.query(getCommentsSql, [postId], (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).jsonp({ error: 'Erro ao buscar os comentÃ¡rios.' });
            return;
        }
    
        const comments = results.map(comment => ({
            id: comment.id,
            parentId: comment.parent_id,
            userId: comment.user_id,
            commentContent: comment.comment_content,
            hasPost: comment.has_post
        }));
    
        // const commentsWithReplies = getChildrenComments(comments, null);
        // res.status(200).json(commentsWithReplies);
    
        res.status(200).jsonp(comments);
        });
    });
}