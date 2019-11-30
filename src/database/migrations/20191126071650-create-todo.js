export default {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Todos', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: {
      type: Sequelize.STRING
    },
    dueDate: {
      type: Sequelize.DATE,
      field: 'due_date',
      allowNull: false,
    },
    status: {
      type: Sequelize.ENUM('todo', 'completed'),
      allowNull: false,
      defaultValue: 'todo'
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  }),
  // eslint-disable-next-line no-unused-vars
  down: (queryInterface, Sequelize) => queryInterface.dropTable('todos')
};
