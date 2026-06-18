# MTB - My Technical Blog

A custom PHP MVC blog application for sharing technical articles and tutorials.

## 🚀 Quick Start

### Prerequisites
- Laragon (or XAMPP/WAMP)
- PHP 7.4+ (with PHP 8.0+ recommended)
- MySQL 5.7+

### Database Setup

1. **Create the database:**
   - Open phpMyAdmin (http://localhost/phpmyadmin)
   - Create a new database named `mvc`

2. **Import the schema:**
   - Select the `mvc` database
   - Go to Import tab
   - Choose file: `database_schema.sql`
   - Click "Go" to import

3. **Import dummy data:**
   - Still in the `mvc` database
   - Go to Import tab again
   - Choose file: `dummy_data.sql`
   - Click "Go" to import

### Access the Application

Visit: **http://localhost/mvc/MVC**

## 👥 Test Users

All users have the password: `password123`

| Email | Role | Description |
|-------|------|-------------|
| admin@mtb.com | Admin | Full access |
| john.doe@mtb.com | Author | Can create posts |
| jane.smith@mtb.com | Author | Frontend specialist |
| mike.johnson@mtb.com | Author | DevOps expert |
| sarah.williams@mtb.com | Author | Database expert |

## 📊 Dummy Data Included

- **5 Users** (1 admin, 4 authors)
- **10 Categories** (Web Dev, PHP, JavaScript, Database, DevOps, Security, etc.)
- **15 Blog Posts** (Full HTML content with code examples)
- **25 Comments** (Distributed across posts)
- **10 Subscribers** (Newsletter subscribers)

## 🔧 What Was Fixed

1. **Configuration Updates:**
   - Updated `URLROOT` in `app/config/config.php` 
   - Fixed `RewriteBase` in `public/.htaccess`

2. **Bug Fixes:**
   - Fixed undefined variable `$_GET['Cid']` in `Home.php` controller
   - Added null coalescing operator for better error handling

3. **Database:**
   - Complete schema with proper foreign keys and indexes
   - Realistic dummy data for immediate testing

## 📁 Project Structure

```
MVC/
├── app/
│   ├── config/         # Configuration files
│   ├── controllers/    # Application controllers
│   ├── models/         # Data models
│   ├── views/          # View templates
│   ├── libraries/      # Core framework classes
│   └── helpers/        # Helper functions
├── public/             # Public web root
│   ├── css/            # Stylesheets
│   ├── js/             # JavaScript files
│   └── index.php       # Front controller
├── database_schema.sql # Database structure
└── dummy_data.sql      # Sample data
```

## 🎯 Features

- Custom PHP MVC Framework
- User authentication and authorization
- Blog post management (CRUD)
- Category organization
- Comment system
- Newsletter subscription
- Responsive design
- SEO-friendly URLs

## 🔐 Security Features

- Prepared statements (PDO) for SQL injection prevention
- Password hashing with PHP's password_hash()
- Input validation and sanitization
- CSRF protection ready

## 📝 Next Steps

1. Import the database files as described above
2. Visit http://localhost/mvc/MVC to see the homepage
3. Login with admin@mtb.com / password123
4. Start customizing the blog!

## 🐛 Troubleshooting

**Database connection error?**
- Verify MySQL is running in Laragon
- Check credentials in `app/config/config.php`
- Confirm database `mvc` exists

**404 errors?**
- Ensure `.htaccess` files are present
- Check Apache mod_rewrite is enabled
- Verify the URL path matches project location

**Blank page?**
- Check PHP error logs in Laragon
- Enable error display in PHP settings
- Verify all files were uploaded correctly

---

**Built with ❤️ using PHP MVC Architecture**
