/**
 * @swagger
 * tags:
 *   - name: Contacts
 *     description: Operações relacionadas a contatos de emergência
 */

/**
 * @swagger
 * /contacts:
 *   get:
 *     summary: Listar todos os contatos de emergência
 *     tags: [Contacts]
 *     responses:
 *       200:
 *         description: Lista de contatos de emergência
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   name:
 *                     type: string
 *                   phone:
 *                     type: string
 */

/**
 * @swagger
 * /contacts/{contactId}:
 *   get:
 *     summary: Buscar um contato de emergência
 *     tags: [Contacts]
 *     parameters:
 *       - name: contactId
 *         in: path
 *         required: true
 *         description: ID do contato de emergência
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Contato de emergência encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 name:
 *                   type: string
 *                 phone:
 *                   type: string
 *       404:
 *         description: Contato de emergência não encontrado
 */

/**
 * @swagger
 * /contacts:
 *   post:
 *     summary: Adicionar um novo contato de emergência
 *     tags: [Contacts]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               phone:
 *                 type: string
 *     responses:
 *       201:
 *         description: Contato de emergência adicionado com sucesso
 */

/**
 * @swagger
 * /contacts/{contactId}:
 *   put:
 *     summary: Atualizar um contato de emergência
 *     tags: [Contacts]
 *     parameters:
 *       - name: contactId
 *         in: path
 *         required: true
 *         description: ID do contato de emergência
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               phone:
 *                 type: string
 *     responses:
 *       200:
 *         description: Contato de emergência atualizado com sucesso
 *       404:
 *         description: Contato de emergência não encontrado
 */

/**
 * @swagger
 * /contacts/{contactId}:
 *   delete:
 *     summary: Remover um contato de emergência
 *     tags: [Contacts]
 *     parameters:
 *       - name: contactId
 *         in: path
 *         required: true
 *         description: ID do contato de emergência
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Contato de emergência removido com sucesso
 *       404:
 *         description: Contato de emergência não encontrado
 */

/**
 * @swagger
 * tags:
 *   - name: Medical Services
 *     description: Operações relacionadas a serviços médicos, como consultas, exames, dicas de saúde e bem-estar, entre outros.
 */
