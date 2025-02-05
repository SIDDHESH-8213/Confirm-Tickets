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

## 📦 Installation  
1. **Clone the Repository**  
   ```bash
   git clone https://github.com/yourusername/concertify.git
   cd concertify
