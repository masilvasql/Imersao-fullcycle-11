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

python manage.py dumpdata app --> gera um json com todos os dados do banco de dados do model app
python manage.py dumpdata auth --> gera um json com todos os dados do banco de dados do model auth


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

# Variáveis de ambiente
utilizado o pacote: pipenv install django-environ

para obter os dados das variáveis de ambiente já no formato correto

como o django utiliza dados segregados (como se fosse json), 
foi instalado a lib --> pipenv install dj-database-url 
para ajudar nesta parte de criação da variável já no formato do django a partir da variável de ambiente
alterado a conexão no setings para 
DATABASES = {
    'default': dj_database_url.config(default=env.db())
}

# pasta de inicialização do docker
criado pasta .docker, criado o script,
no terminal, foi rodado o seguinte comando:
    chmod +x .docker/start.dev.sh 

# criado fixtures
criado pasta fixtures com o arquivo initial_data.json e populado com os dados do python manage.py dumpdata app e com o usuário do model auth
isto irá criar os dados de início da aplicação

após, foi rodado o comando: python manage.py loaddata initial_data