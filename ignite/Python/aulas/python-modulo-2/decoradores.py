# Decoradores

def meu_decorador(func):
  # wraper engloba a função em que quer utilizar o decorador
  def wrapper():
    print('Antes da função ser chamada')
    func()
    print('Depois da função ser chamada')

  return wrapper

@meu_decorador
def primeira_funcao():
  print ('Função chamada')

primeira_funcao()


class MeuDecoradorDeClasse:
  def __init__(self, func) -> None:
    self.func = func

  def __call__(self) -> any:
    print("Antes da função ser chamada (decorador de classe)")
    self.func()
    print("Depois da função ser chamada (decorador de classe)")

@MeuDecoradorDeClasse
def segunda_funcao():
  print("Segunda função foi chamada")

segunda_funcao()