# ativar virtualenv
pipenv shell

# validar interpretador python 
CTRL + SHIFT + P ==> Python : Select Interpreter

# Criar pasta para vscode
* pasta: .vscode
    * criar o arquivo settings.json
        * criar o json: `
        {
            "python.defaultInterpreterPath": "/home/python/app.venv/bin/python",
            "python.terminal.activateEnvironment": true
        }`


# comandos django
django admin -> Verificar se o django está  ok

django-admin startproject nomeDoProjeto


# passos após rodar os comandos do django para criar o projeto

Mover o arquivo manage.py para a raiz do projeto

o pyton ira criar uma 2 pastas com o nome do projeto, por exemplo projTest/projTeste, mover os arquivos da pasta de nível 2 para a pasta de nível 1 e deletar a de nível 2

# comandos após ajuste de pastas do projeto
python manage.py migrate -> irá rodar as migrações do django, irá criar um banco sqlite na raíz 

python manage.py runserver 0.0.0.0:8000 -> Subir o serviço do django

python manage.py createsuperuser -> criar usuário admin
    usuário:admin@user.com
    senha:adm

django-admin startapp app --> Inicializa os módulos do django que são chamados de app

dentro de settings.py, registrar o nome do seu módulo (no meu caso app) dentro da tag INSTALLED_APPS 

dentro de models.py no APP, registrar sua entidade do banco de dados

python manage.py makemigrations  -->  Cria a migração

python manage.py migrate -> roda a migração

após isto, acessar o arquivo admin.py e registrar o model, como no exemplo: admin.site.register(Player)