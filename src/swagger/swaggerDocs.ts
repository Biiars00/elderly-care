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

/**
 * @swagger
 * /medicalServices/{service}:
 *   get:
 *     summary: Listar todos as consultas/exames
 *     tags: [Medical Services]
 *     description: Esta rota retorna todas as consultas/exames agendados.
 *     parameters:
 *       - in: path
 *         name: service
 *         required: true
 *         description: O tipo de serviço para filtrar as consultas/exames.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Lista de consultas/exames.
 *       404:
 *         description: Nenhuma consulta/exame encontrado.
 */

/**
 * @swagger
 * /medicalServices/service/{serviceId}:
 *   get:
 *     summary: Buscar uma consulta ou exame
 *     tags: [Medical Services]
 *     description: Esta rota permite buscar uma consulta ou exame específico.
 *     parameters:
 *       - in: path
 *         name: serviceId
 *         required: true
 *         description: O ID da consulta/exame a ser buscado.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Consulta/exame encontrado.
 *       404:
 *         description: Consulta/exame não encontrado.
 */

/**
 * @swagger
 * /medicalServices:
 *   post:
 *     summary: Agendar uma nova consulta/exame
 *     tags: [Medical Services]
 *     description: Esta rota cria uma nova consulta ou exame para o idoso.
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
 *               service:
 *                 type: string
 *               serviceId:
 *                 type: string
 *               medicalSpecialty:
 *                 type: string
 *               doctor:
 *                 type: string
 *               date:
 *                 type: string
 *               time:
 *                 type: string
 *     responses:
 *       201:
 *         description: Consulta/exame agendado com sucesso.
 *       400:
 *         description: Dados inválidos.
 */

/**
 * @swagger
 * /medicalServices/{serviceId}:
 *   put:
 *     summary: Atualizar uma consulta/exame
 *     tags: [Medical Services]
 *     description: Esta rota permite atualizar os detalhes de uma consulta ou exame agendado.
 *     parameters:
 *       - in: path
 *         name: serviceId
 *         required: true
 *         description: O ID da consulta/exame a ser atualizado.
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
 *               service:
 *                 type: string
 *               medicalSpecialty:
 *                 type: string
 *               doctor:
 *                 type: string
 *               date:
 *                 type: string
 *               time:
 *                 type: string
 *     responses:
 *       200:
 *         description: Consulta/exame atualizado com sucesso.
 *       400:
 *         description: Dados inválidos.
 *       404:
 *         description: Consulta/exame não encontrado.
 */

/**
 * @swagger
 * /medicalServices/{serviceId}:
 *   delete:
 *     summary: Remover uma consulta/exame
 *     tags: [Medical Services]
 *     description: Esta rota remove uma consulta ou exame agendado.
 *     parameters:
 *       - in: path
 *         name: serviceId
 *         required: true
 *         description: O ID do serviço a ser removido.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Consulta/exame removido com sucesso.
 *       404:
 *         description: Consulta/exame não encontrado.
 */
