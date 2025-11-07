# APP HC – Sistema de Agendamento e Acompanhamento Médico

> Projeto desenvolvido na **Sprint 4** das disciplinas **Front-End Design Engineering** e **Domain Driven Design Using Java** da **FIAP**.  
> O objetivo é integrar um **front-end React + Vite + TypeScript** a uma **API Java (Quarkus)** conectada ao banco **Oracle FIAP**, promovendo uma aplicação funcional, responsiva e integrada.

---

## Objetivo do Projeto

O **APP HC (Hospital das Clínicas)** é uma aplicação web voltada para **agendamento e gerenciamento de consultas médicas**, permitindo:
- Cadastro e visualização de pacientes e médicos.  
- Marcação e cancelamento de consultas.  
- Acesso rápido às informações de cada agendamento.  
- Integração completa com o backend hospedado no Render.  

O foco está em oferecer uma experiência **responsiva**, **intuitiva** e **acessível** em todos os dispositivos.

---

## Tecnologias Utilizadas

### Front-End
- **React** + **Vite** + **TypeScript**
- **React Router DOM** (para rotas estáticas e dinâmicas)
- **TailwindCSS** (estilização e responsividade)
- **React Hook Form** (controle de formulários)
- **Fetch API nativa** (integração com o backend)

### Back-End
- **Java 17**
- **Quarkus Framework**
- **JAX-RS (Jakarta RESTful Web Services)**
- **Oracle Database (FIAP Cloud)**
- **JDBC Manual (DriverManager)**
- **Deploy Render**

---

## Integração API

A comunicação entre o front-end e o back-end é feita via **requisições HTTP REST**, utilizando os métodos:
- **GET** – listar registros  
- **POST** – inserir novos dados  
- **PUT** – atualizar informações  
- **DELETE** – remover registros  

**URL base da API (Render):**
- https://app-hc-java.onrender.com/


---

## Integrantes

| Nome | RM | Turma |
|------|----|--------|
| Eduardo Martins | 562259 | 1TDSA |
| Vitor Madrigrano | 564191 | 1TDSA |
| Thiago Sposito | 561694 | 1TDSA |

---

## Deploys

| Tipo | Plataforma | Link |
|------|-------------|------|
| **Front-End** | Vercel | https://hcapp-seven.vercel.app/ |
| **Back-End (API)** | Render | https://sprint4-java-1.onrender.com |
| **Repositório GitHub** | GitHub | https://github.com/Tidlle/Sprint4_Front |

---

## Como Rodar Localmente

### Front-End
- bash
- git clone https://github.com/Tidlle/Sprint4_Front
- cd AppHC
- npm install
- npm run dev

# Back-End (Java)
- mvn quarkus:dev
  
A API ficará disponível em http://localhost:8080
