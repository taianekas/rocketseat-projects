from flask import Flask, request, jsonify
from models.task import Task

app = Flask(__name__)

tasks = []
task_id_control = 1


@app.route('/tasks', methods=['POST'])
def create_task():
  global task_id_control
  data = request.get_json()
  new_task = Task(id=task_id_control, title=data['title'], description=data.get("description", ""))
  task_id_control += 1
  tasks.append(new_task)
  print(tasks)
  return jsonify({"message": "Nova tarefa criada com sucesso.", 'task_id': new_task.id})


@app.route('/tasks', methods=['GET'])
def get_tasks():
  task_list = [task.to_dict() for task in tasks]

  output = {
    "tasks": task_list,
    "total_tasks": len(task_list)
  }
  return jsonify(output)

@app.route('/tasks/<int:task_id>', methods=['GET'])
def get_task(task_id):
  for t in tasks:
    if t.id == task_id:
      return jsonify(t.to_dict())

  return jsonify({"message": "Não foi possível encontrar a atividade"}), 404


@app.route('/tasks/<int:task_id>', methods=['PUT'])
def update_task(task_id):
  task = None

  for t in tasks:
    if t.id == task_id:
      task = t
      break
      
  if task == None:
    return jsonify({"message": "Não foi possível encontrar a atividade"}), 404

  data = request.get_json()
  task.title = data['title']
  task.description = data['description']
  task.completed = data['completed']

  return jsonify({"message": "Tarefa atualizada com sucesso"}), 200

@app.route('/tasks/<int:task_id>', methods=['DELETE'])
def delete_task(task_id):
  task = None
  for t in tasks:
    if t.id == task_id:
      task = t
      break

    if not task:
      return jsonify({"message": "Não foi possível encontrar a atividade"}), 404

  tasks.remove(task)
  return jsonify({"message": "Tarefa deletada com sucesso"}), 200


if __name__ == "__main__":
  app.run(port=3000, debug=True)