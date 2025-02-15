# lucas-ingressos

# 🎟️ Sistema de Venda de Ingressos - Lucas

Este é um sistema de venda de ingressos para eventos, permitindo que usuários comprem ingressos e administradores gerenciem os ingressos disponíveis.

---

## 📌 **Funcionalidades**

### 🔹 API REST:
1. **Gerenciamento de Usuários**  
   ✅ Cadastro de usuários  
   ✅ Login com JWT  
   ✅ Controle de permissões (Admin vs. Usuário)  

2. **Gestão de Ingressos (CRUD)**  
   ✅ Criar, atualizar e deletar ingressos (apenas Admin)  
   ✅ Listar ingressos disponíveis  

3. **Venda de Ingressos**  
   ✅ Usuários autenticados podem comprar ingressos  
   ✅ Redução automática do estoque  
   ✅ Listagem do histórico de compras  

---

## 🚀 **Tecnologias Utilizadas**
- **Node.js** + Express.js
- **Sequelize** (ORM)
- **SQLite** (Banco de dados local)
- **Mustache.js** (Template Engine para interface web)
- **JWT (JSON Web Token)** (Autenticação)
- **Bcrypt.js** (Criptografia de senhas)

---

## ⚙️ **Instalação e Configuração**
### 1️⃣ **Clonar o Repositório**
```sh
git clone https://github.com/seu-usuario/lucas-ingressos.git
cd lucas-ingressos
