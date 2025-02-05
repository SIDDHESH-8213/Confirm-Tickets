# Confirm-Tickets

  
*A Scalable Ticketing System Inspired by BookMyShow*  

![Build Status](https://img.shields.io/badge/build-passing-brightgreen) 
![License](https://img.shields.io/badge/license-MIT-blue) 
![AWS](https://img.shields.io/badge/deployed%20on-AWS-orange)

![bms drawio (1)](https://github.com/user-attachments/assets/0cf91829-2379-4fa1-b1ee-39514bc90d2c)


Confirm Tickets is a **high-performance backend system** designed to handle **massive traffic spikes** during ticket sales (e.g., concerts, sports events). Built with **Node.js**, **Redis**, and **PostgreSQL**, it ensures **low latency**, **high availability**, and **scalability**. Whether you're selling tickets for a Coldplay concert or a local event, Concertify has you covered.

---

## 🚀 Features  
- **Event Management**: Create, list, and fetch event details.  
- **Seat Locking**: Prevent overbooking with Redis-based seat locks (TTL = 5 mins).  
- **Payment Integration**: Simulated payment processing with async workflows.  
- **User Authentication**: JWT-based secure authentication.  
- **Scalability**: Designed to handle 500k+ concurrent users with auto-scaling and caching.  

---

## 🛠️ Tech Stack  
| **Component**       | **Technology**                                                                 |
|----------------------|--------------------------------------------------------------------------------|
| **Backend**          | Node.js, Express.js                                                           |
| **Database**         | PostgreSQL (RDS)                                                              |
| **Caching**          | Redis (ElastiCache)                                                           |
| **Authentication**   | JWT                                                                           |
| **Deployment**       | AWS (EC2, ALB, RDS, ElastiCache, S3, CloudFront)                              |
| **Containerization** | Docker                                                                        |
| **Testing**          | Jest, k6 (load testing)                                                       |

---

### 🌐 API Endpoints

| Endpoint             | Method | Description                 | Example Request Body |
|----------------------|--------|-----------------------------|----------------------|
| `/api/events`       | GET    | List all events            | -                    |
| `/api/events`       | POST   | Create a new event         | `{ name, date, venue, total_seats }` |
| `/api/tickets/lock` | POST   | Lock a seat for booking    | `{ eventId, seatNumber, userId }` |
| `/api/tickets/book` | POST   | Confirm seat booking       | `{ eventId, seatNumber, userId }` |
| `/api/auth/register`| POST   | Register a new user        | `{ username, password }` |
| `/api/auth/login`   | POST   | Login and get JWT token    | `{ username, password }` |

---

### 🧠 How It Works

#### 1️⃣ Event Management
- **Create Events:** Admins can create events with details like name, date, venue, and total seats.
- **List Events:** Users can fetch a list of all available events.

#### 2️⃣ Seat Locking
- When a user selects a seat, it’s temporarily locked in Redis for 5 minutes to prevent overbooking.
- If the user doesn’t complete the booking within 5 minutes, the seat is automatically unlocked.

#### 3️⃣ Payment Integration
- Payments are processed asynchronously to avoid blocking the main thread.
- A simulated payment gateway is used for testing.

#### 4️⃣ User Authentication
- Users can register and log in using a username and password.
- A JWT token is issued upon successful login and must be included in the headers of authenticated requests.

#### 5️⃣ Scalability
- **Redis** caches frequently accessed data (e.g., event details, seat availability) to reduce database load.
- **PostgreSQL** handles persistent data storage with read replicas for high availability.
- **Auto-scaling** ensures the system can handle traffic spikes by adding more EC2 instances as needed.

---


### 🛠️ Technologies Used
- **Node.js & Express.js** - Backend framework
- **PostgreSQL** - Database for persistent storage
- **Redis** - Caching and seat-locking mechanism
- **JWT** - Authentication and security
- **AWS EC2** - Auto-scalable cloud hosting

---

### 📌 License
This project is open-source and available under the [MIT License](LICENSE).

