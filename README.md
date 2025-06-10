🚗 Sistema de Estacionamento

Este projeto é uma aplicação web desenvolvida com **Python** e **Django**, com o objetivo de gerenciar o fluxo de veículos em um estacionamento. O sistema realiza o controle de entrada e saída dos veículos, calcula o tempo de permanência e o valor a ser pago automaticamente.

---

## 🔧 Tecnologias Utilizadas

- Python 3.x
- Django
- SQLite (banco de dados padrão do Django)
- HTML (templates)
- CSS básico (opcional, para estilização simples)

---

## ✨ Funcionalidades

- Registro de entrada de veículos (com data e hora automática).
- Registro de saída com cálculo do tempo total estacionado.
- Cálculo automático do valor a ser pago com base no tempo.
- Listagem de veículos atualmente no estacionamento.
- Histórico de entradas e saídas (em desenvolvimento).

---

## ⚙️ Como Executar o Projeto Localmente

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/estacionamento.git
cd estacionamento
2. Crie e ative um ambiente virtual
bash
Copiar
Editar
python -m venv venv
Para Linux/macOS:

bash
Copiar
Editar
source venv/bin/activate
Para Windows:

bash
Copiar
Editar
venv\Scripts\activate
3. Instale as dependências necessárias
bash
Copiar
Editar
pip install django
4. (Opcional) Gere o arquivo requirements.txt
bash
Copiar
Editar
pip freeze > requirements.txt
Para instalar via requirements.txt no futuro:

bash
Copiar
Editar
pip install -r requirements.txt
5. Execute as migrações do banco de dados
bash
Copiar
Editar
python manage.py migrate
6. Crie um superusuário para acessar o painel administrativo
bash
Copiar
Editar
python manage.py createsuperuser
Siga as instruções no terminal para informar:

Nome de usuário

E-mail (opcional)

Senha

7. Inicie o servidor de desenvolvimento
bash
Copiar
Editar
python manage.py runserver
8. Acesse o sistema no navegador
Página principal: http://127.0.0.1:8000/

Área administrativa: http://127.0.0.1:8000/admin
