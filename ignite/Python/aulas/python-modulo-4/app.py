import os 
from dotenv import load_dotenv
from flask import Flask, request, jsonify
from database import db
from flask_login import LoginManager, login_user, current_user, logout_user, login_required
from models.user import User
import bcrypt

# Carrega as variáveis de ambiente do arquivo .env
load_dotenv()

app = Flask(__name__)

# Define a configuração da aplicação usando a variável de ambiente
app.config['SECRET_KEY'] = os.getenv('SECRET_KEY')
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('SQLALCHEMY_DATABASE_URI')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = os.getenv('SQLALCHEMY_TRACK_MODIFICATIONS')

login_manager = LoginManager()

db.init_app(app)
login_manager.init_app(app)
#view login
login_manager.login_view = 'login'


@login_manager.user_loader
def load_user(user_id):
  return User.query.get(user_id)

# Rodar os comandos abaixo para criar tabelas no banco de dados
# flask shell
# user = User(username='admin', password='123')
# user
# db.session.add(user)
# db.session.commit()
# exit()

@app.route('/login', methods=['POST'])
def login():
  data = request.json
  username = data.get('username')
  password = data.get('password')

  if username and password:
  # Login
    user = User.query.filter_by(username=username).first()

    if user and bcrypt.checkpw(str.encode(password), str.encode(user.password)):
      login_user(user)
      print(user.is_authenticated)
      return jsonify({'message': 'Autenticação realizada com sucesso!'})

  return jsonify({'message': 'Credenciais inválidas'}), 400


@app.route('/logout', methods=['GET'])
@login_required
def logout():
  logout_user()
  return jsonify({'message': 'Logout realizado com sucesso!'})


@app.route('/user', methods=['POST'])
def create_user():
  data = request.json
  username = data.get('username')
  password = data.get('password')

  if username and password:
    hashed_password = bcrypt.hashpw(str.encode(password), bcrypt.gensalt())
    user = User(username=username, password=hashed_password, role='user')
    db.session.add(user)
    db.session.commit()
    return jsonify({'message': 'Usuario cadastrado com sucesso'})

  return jsonify({'message': 'Dados invalidos'}), 400

@app.route('/user/<int:id_user>', methods=['GET'])
@login_required
def read_user(id_user):
  user = User.query.get(id_user)

  if user:
    return {'username': user.username}

  return jsonify({'message': 'Usuario não encontrado'}), 404


@app.route('/user/<int:id_user>', methods=['PUT'])
@login_required
def update_user(id_user):
  data = request.json
  user = User.query.get(id_user)

  if id_user != current_user.id and current_user.role == 'user':
     return jsonify({'message': 'Operação não permitida'}), 403
  
  if user and data.get('password'):
    user.password = data.get('password')
    db.session.commit()

    return jsonify({'message': f'Usuário {id_user} atualizado com sucesso'})

  return jsonify({'message': 'Usuario não encontrado'}), 404


@app.route('/user/<int:id_user>', methods=['DELETE'])
def delete_user(id_user):
  user = User.query.get(id_user)

  if current_user.role != 'admin':
    return jsonify({"message": "Operação não permitida"}), 403

  if id_user == current_user.id:
    return jsonify({'message': 'Deleção não permitida'}), 403

  if user:
    db.session.delete(user)
    db.session.commit()
    return jsonify({'message': f'Usuário {id_user} deletado com sucesso'})

  return jsonify({'message': 'Usuario não encontrado'}), 404


if __name__ == '__main__':
  with app.app_context():
    db.create_all()
  app.run(port=3000, debug=True)


@app.shell_context_processor
def make_shell_context():
  return {'db': db, 'User': User}

# Rodar os comandos abaixo para criar tabelas no banco de dados
# flask shell
# db.create_all()
# db.session.commit()
# exit()
