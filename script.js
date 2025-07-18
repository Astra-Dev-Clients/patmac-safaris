<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Us - PatMac Safaris</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        /* Global Styles */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        body {
            background-color: #f8f7f2;
            color: #333;
            line-height: 1.6;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 15px;
        }

        /* Header Styles */
        header {
            background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/api/placeholder/1200/400') center/cover no-repeat;
            color: #fff;
            padding: 20px 0;
        }

        .header-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 20px;
        }

        .logo {
            font-size: 28px;
            font-weight: bold;
            letter-spacing: 1px;
        }

        .logo span {
            color: #ffc107;
        }

        nav ul {
            display: flex;
            list-style: none;
        }

        nav ul li {
            margin-left: 20px;
        }

        nav ul li a {
            color: #fff;
            text-decoration: none;
            font-weight: 500;
            transition: color 0.3s;
        }

        nav ul li a:hover {
            color: #ffc107;
        }

        .menu-toggle {
            display: none;
            cursor: pointer;
            font-size: 24px;
        }

        /* Hero Section */
        .hero {
            text-align: center;
            padding: 60px 20px;
        }

        .hero h1 {
            font-size: 36px;
            margin-bottom: 20px;
        }

        .hero p {
            font-size: 18px;
            max-width: 800px;
            margin: 0 auto;
        }

        /* Contact Section */
        .contact-section {
            padding: 60px 0;
        }

        .contact-container {
            display: flex;
            flex-wrap: wrap;
            gap: 30px;
        }

        .contact-info {
            flex: 1;
            min-width: 300px;
        }

        .contact-form {
            flex: 2;
            min-width: 300px;
            background-color: #fff;
            border-radius: 10px;
            padding: 30px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }

        .contact-form h3, .contact-info h3 {
            margin-bottom: 20px;
            color: #333;
            font-size: 24px;
        }

        .form-group {
            margin-bottom: 20px;
        }

        .form-group label {
            display: block;
            margin-bottom: 5px;
            font-weight: 500;
        }

        .form-group input, 
        .form-group textarea, 
        .form-group select {
            width: 100%;
            padding: 12px;
            border: 1px solid #ddd;
            border-radius: 5px;
            font-size: 16px;
        }

        .form-group textarea {
            min-height: 150px;
            resize: vertical;
        }

        .submit-btn {
            background-color: #ffc107;
            color: #333;
            border: none;
            padding: 12px 30px;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
            font-weight: bold;
            transition: all 0.3s;
        }

        .submit-btn:hover {
            background-color: #e0a800;
            transform: translateY(-2px);
        }

        .info-item {
            display: flex;
            margin-bottom: 20px;
            align-items: flex-start;
        }

        .info-icon {
            margin-right: 15px;
            font-size: 20px;
            color: #ffc107;
            width: 30px;
            text-align: center;
        }

        .info-content h4 {
            margin-bottom: 5px;
            font-size: 18px;
        }

        .social-links {
            margin-top: 30px;
        }

        .social-links a {
            display: inline-block;
            margin-right: 15px;
            color: #555;
            font-size: 24px;
            transition: color 0.3s;
        }

        .social-links a:hover {
            color: #ffc107;
        }

        /* Map Section */
        .map-section {
            padding: 30px 0 60px;
        }

        .map-container {
            height: 400px;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }

        .map-placeholder {
            background-color: #ddd;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 18px;
            color: #777;
        }

        /* Footer */
        footer {
            background-color: #333;
            color: #fff;
            padding: 40px 0 20px;
        }

        .footer-content {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            gap: 30px;
        }

        .footer-col {
            flex: 1;
            min-width: 250px;
        }

        .footer-col h4 {
            margin-bottom: 20px;
            font-size: 20px;
            position: relative;
        }

        .footer-col h4::after {
            content: '';
            position: absolute;
            left: 0;
            bottom: -8px;
            width: 50px;
            height: 2px;
            background-color: #ffc107;
        }

        .footer-col ul {
            list-style: none;
        }

        .footer-col ul li {
            margin-bottom: 10px;
        }

        .footer-col ul li a {
            color: #ddd;
            text-decoration: none;
            transition: color 0.3s;
        }

        .footer-col ul li a:hover {
            color: #ffc107;
            padding-left: 5px;
        }

        .copyright {
            text-align: center;
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #444;
        }

        /* Notification */
        .notification {
            position: fixed;
            top: -100px;
            left: 50%;
            transform: translateX(-50%);
            background-color: #4CAF50;
            color: white;
            padding: 15px 25px;
            border-radius: 5px;
            box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
            transition: top 0.5s;
            z-index: 1000;
        }

        /* Responsive Styles */
        @media (max-width: 768px) {
            .menu-toggle {
                display: block;
            }

            nav ul {
                display: none;
                position: absolute;
                top: 80px;
                left: 0;
                width: 100%;
                background-color: rgba(0, 0, 0, 0.9);
                flex-direction: column;
                text-align: center;
                padding: 20px 0;
                z-index: 100;
            }

            nav ul.active {
                display: flex;
            }

            nav ul li {
                margin: 10px 0;
            }

            .hero h1 {
                font-size: 28px;
            }

            .hero p {
                font-size: 16px;
            }
        }

        @media (max-width: 576px) {
            .contact-form, .contact-info {
                padding: 20px;
            }

            .footer-col {
                min-width: 100%;
            }
        }
    </style>
</head>
<body>
    <!-- Header Section -->
    <header>
        <div class="header-content">
            <div class="logo">Pat<span>Mac</span> Safaris</div>
            <div class="menu-toggle">
                <i class="fas fa-bars"></i>
            </div>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Safaris</a></li>
                    <li><a href="#">Destinations</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </div>
        <div class="hero">
            <h1>Contact Us</h1>
            <p>Get in touch with our team to plan your dream safari adventure in Africa.</p>
        </div>
    </header>

    <!-- Contact Section -->
    <section class="contact-section">
        <div class="container">
            <div class="contact-container">
                <div class="contact-info">
                    <h3>Get In Touch</h3>
                    
                    <div class="info-item">
                        <div class="info-icon">
                            <i class="fas fa-map-marker-alt"></i>
                        </div>
                        <div class="info-content">
                            <h4>Our Location</h4>
                            <p>123 Safari Road, Nairobi, Kenya</p>
                        </div>
                    </div>
                    
                    <div class="info-item">
                        <div class="info-icon">
                            <i class="fas fa-phone-alt"></i>
                        </div>
                        <div class="info-content">
                            <h4>Call Us</h4>
                            <p>+254 123 456 789</p>
                            <p>+1 987 654 3210</p>
                        </div>
                    </div>
                    
                    <div class="info-item">
                        <div class="info-icon">
                            <i class="fas fa-envelope"></i>
                        </div>
                        <div class="info-content">
                            <h4>Email Us</h4>
                            <p>info@patmacsafaris.com</p>
                            <p>bookings@patmacsafaris.com</p>
                        </div>
                    </div>
                    
                    <div class="info-item">
                        <div class="info-icon">
                            <i class="fas fa-clock"></i>
                        </div>
                        <div class="info-content">
                            <h4>Opening Hours</h4>
                            <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                            <p>Saturday: 9:00 AM - 3:00 PM</p>
                        </div>
                    </div>
                    
                    <div class="social-links">
                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-tripadvisor"></i></a>
                    </div>
                </div>
                
                <div class="contact-form">
                    <h3>Send Us A Message</h3>
                    <form id="contactForm">
                        <div class="form-group">
                            <label for="name">Your Name</label>
                            <input type="text" id="name" name="name" required>
                        </div>
                        
                        <div class="form-group">
                            <label for="email">Your Email</label>
                            <input type="email" id="email" name="email" required>
                        </div>
                        
                        <div class="form-group">
                            <label for="phone">Phone Number</label>
                            <input type="tel" id="phone" name="phone">
                        </div>
                        
                        <div class="form-group">
                            <label for="safari">Safari Interest</label>
                            <select id="safari" name="safari">
                                <option value="">Select Safari Type</option>
                                <option value="wildlife">Wildlife Safari</option>
                                <option value="cultural">Cultural Safari</option>
                                <option value="adventure">Adventure Safari</option>
                                <option value="photography">Photography Safari</option>
                                <option value="luxury">Luxury Safari</option>
                            </select>
                        </div>
                        
                        <div class="form-group">
                            <label for="message">Your Message</label>
                            <textarea id="message" name="message" required></textarea>
                        </div>
                        
                        <button type="submit" class="submit-btn">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <!-- Map Section -->
    <section class="map-section">
        <div class="container">
            <div class="map-container">
                <div class="map-placeholder">
                    <p>Map Location - PatMac Safaris Office</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer Section -->
    <footer>
        <div class="container">
            <div class="footer-content">
                <div class="footer-col">
                    <h4>PatMac Safaris</h4>
                    <p>Discover the beauty of Africa with our expertly crafted safari experiences. We are dedicated to providing unforgettable adventures while promoting sustainable tourism.</p>
                </div>
                
                <div class="footer-col">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Safari Packages</a></li>
                        <li><a href="#">Destinations</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                
                <div class="footer-col">
                    <h4>Popular Safaris</h4>
                    <ul>
                        <li><a href="#">Masai Mara Experience</a></li>
                        <li><a href="#">Serengeti Migration</a></li>
                        <li><a href="#">Big Five Adventure</a></li>
                        <li><a href="#">Gorilla Trekking</a></li>
                        <li><a href="#">Beach & Bush Combo</a></li>
                    </ul>
                </div>
                
                <div class="footer-col">
                    <h4>Newsletter</h4>
                    <p>Subscribe to our newsletter for the latest updates on safari deals and wildlife news.</p>
                    <form id="newsletterForm">
                        <div class="form-group">
                            <input type="email" placeholder="Your Email Address" required>
                        </div>
                        <button type="submit" class="submit-btn">Subscribe</button>
                    </form>
                </div>
            </div>
            
            <div class="copyright">
                <p>&copy; 2025 PatMac Safaris. All Rights Reserved.</p>
            </div>
        </div>
    </footer>

    <div class="notification" id="notification"></div>

    <script>
        // Mobile Navigation Toggle
        document.querySelector('.menu-toggle').addEventListener('click', function() {
            document.querySelector('nav ul').classList.toggle('active');
        });

        // Contact Form Submission
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const safari = document.getElementById('safari').value;
            const message = document.getElementById('message').value;
            
            // Validate form (basic validation)
            if (!name || !email || !message) {
                showNotification('Please fill in all required fields', 'error');
                return;
            }
            
            // In a real application, you would send this data to a server
            // For now, we'll just show a success message
            console.log({name, email, phone, safari, message});
            
            // Reset form after submission
            document.getElementById('contactForm').reset();
            
            // Show success notification
            showNotification('Thank you! Your message has been sent successfully.');
        });

        // Newsletter Form Submission
        document.getElementById('newsletterForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get email value
            const email = this.querySelector('input[type="email"]').value;
            
            // In a real application, you would send this data to a server
            console.log({email});
            
            // Reset form after submission
            this.reset();
            
            // Show success notification
            showNotification('Thank you for subscribing to our newsletter!');
        });

        // Notification function
        function showNotification(message, type = 'success') {
            const notification = document.getElementById('notification');
            notification.textContent = message;
            
            if (type === 'error') {
                notification.style.backgroundColor = '#f44336';
            } else {
                notification.style.backgroundColor = '#4CAF50';
            }
            
            notification.style.top = '20px';
            
            setTimeout(function() {
                notification.style.top = '-100px';
            }, 3000);
        }
    </script>
</body>
</html>