export default (sequelize, DataTypes) => {
  const Todo = sequelize.define('Todo', {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING
    },
    dueDate: {
      type: DataTypes.DATE,
      field: 'due_date',
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM('todo', 'completed'),
      allowNull: false,
      defaultValue: 'todo'
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      field: 'created_at',
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      field: 'updated_at',
    },
  }, {});
  Todo.associate = (models) => {
    Todo.belongsTo(models.User,);
  };
  return Todo;
};
