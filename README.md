# Ravi - Full-Stack Web Developer Portfolio

A modern, production-ready one-page portfolio website built with React and warm yellow-orange theme with subtle doodle backgrounds.

![Portfolio Preview](https://img.shields.io/badge/Status-Production%20Ready-brightgreen)
![React](https://img.shields.io/badge/React-19.0.0-blue)
![License](https://img.shields.io/badge/License-MIT-yellow)

## 🌟 Features

- **Modern Design**: Clean, warm yellow-orange theme with subtle animated doodle backgrounds
- **Fully Responsive**: Perfect display on desktop, tablet, and mobile devices
- **Smooth Navigation**: Sticky header with smooth scroll to sections
- **Interactive Elements**: 
  - Project modals with detailed information
  - Hover animations on cards and buttons
  - Mobile hamburger menu
- **Contact Form**: EmailJS integration for easy contact (no backend required)
- **SEO Friendly**: Semantic HTML structure
- **Fast Performance**: Optimized images and code
- **Easy Customization**: Well-organized code structure

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14.0.0 or higher) - [Download here](https://nodejs.org/)
- **Yarn** (v1.22.0 or higher) - [Installation guide](https://classic.yarnpkg.com/en/docs/install)
- **Git** (optional, for cloning) - [Download here](https://git-scm.com/)

Check your installations:
```bash
node --version
yarn --version
```

## 🚀 Quick Start

### 1. Clone or Download the Project

**Option A: Using Git**
```bash
git clone <repository-url>
cd <project-folder>
```

**Option B: Download ZIP**
- Download and extract the project ZIP file
- Navigate to the project folder

### 2. Install Dependencies

Navigate to the frontend directory and install dependencies:

```bash
cd frontend
y
```

This will install all required packages including:
- React 19.0.0
- React Router DOM
- Lucide React (for icons)
- EmailJS Browser
- Tailwind CSS
- All Radix UI components

### 3. Configure EmailJS (Optional but Recommended)

The contact form uses EmailJS to send emails. To set it up:

1. **Create a free EmailJS account**: [https://www.emailjs.com/](https://www.emailjs.com/)

2. **Get your credentials**:
   - Service ID
   - Template ID
   - Public Key

3. **Update the credentials** in `/frontend/src/App.js`:

```javascript
// Find these lines in App.js (around line 23-24)
useEffect(() => {
  emailjs.init('YOUR_PUBLIC_KEY');  // Replace with your public key
}, []);

// And in the form submit handler (around line 82-86)
await emailjs.send(
  'YOUR_SERVICE_ID',      // Replace with your service ID
  'YOUR_TEMPLATE_ID',     // Replace with your template ID
  {
    from_name: formData.name,
    from_email: formData.email,
    phone: formData.phone,
    message: formData.message
  }
);
```

**Current Demo Credentials** (already configured):
- Service ID: `service_xdezyza`
- Template ID: `template_rz8x3kc`
- Public Key: `M4aomS8oTZri_2X50`

> ⚠️ **Note**: Replace these with your own credentials for production use.

### 4. Run the Development Server

Start the development server:

```bash
yarn start
```

The website will automatically open in your browser at:
```
http://localhost:3000
```

If it doesn't open automatically, manually navigate to the URL above.

### 5. Build for Production

When ready to deploy, create an optimized production build:

```bash
yarn build
```

This creates a `build` folder with optimized static files ready for deployment.

## 📁 Project Structure

```
frontend/
├── public/
│   ├── assets/
│   │   └── img/
│   │       ├── project-1.svg        # Star Boat Works thumbnail
│   │       ├── project-2.svg        # Bright Minds Tuition thumbnail
│   │       └── project-3.svg        # Mini E-Commerce thumbnail
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   └── ui/                      # Shadcn UI components
│   │       ├── button.jsx
│   │       ├── card.jsx
│   │       ├── dialog.jsx
│   │       └── ... (other components)
│   ├── App.js                       # Main application component
│   ├── App.css                      # Main styles
│   ├── index.js                     # Entry point
│   └── index.css                    # Global styles & Tailwind
├── package.json                     # Dependencies
├── tailwind.config.js               # Tailwind configuration
└── craco.config.js                  # CRACO configuration
```

## 🎨 Customization Guide

### Update Personal Information

Edit the following in `/frontend/src/App.js`:

**Contact Details** (lines 40-43):
```javascript
const handleWhatsApp = () => {
  window.open('https://wa.me/919629071640?text=Hi%20Ravi,%20I%20need%20a%20website', '_blank');
};

const handleEmail = () => {
  window.location.href = 'mailto:ravikumarsaravanan71640@gmail.com';
};
```

**Profile Information** (search for these sections):
- Name: "Ravi"
- Title: "Full-Stack Web Developer"
- Location: "Tharangambadi, Tamil Nadu"
- Working hours: "7 PM – 9 PM daily"

### Modify Colors

The warm yellow-orange theme can be customized in `/frontend/src/App.css`:

```css
/* Main gradient colors */
--color-primary: #FF7A18;      /* Main orange */
--color-secondary: #FFD166;    /* Yellow accent */
--color-light: #FFF9E6;        /* Light background */

/* Update these values in the CSS file */
background: linear-gradient(135deg, #FFD166 0%, #FF7A18 100%);
```

### Update Services

Edit the services array in App.js (around line 150):

```javascript
<div className="services-grid">
  <div className="service-card">
    <div className="service-icon">
      <Zap size={32} />  {/* Change icon */}
    </div>
    <h3>Your Service Name</h3>
    <p>Your service description</p>
  </div>
  {/* Add more service cards */}
</div>
```

### Update Projects

1. **Add new project thumbnails** to `/frontend/public/assets/img/`
2. **Update projects array** in App.js (around line 49):

```javascript
const projects = [
  {
    id: 1,
    title: 'Your Project Name',
    category: 'Project Category',
    description: 'Project description...',
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4']
  },
  // Add more projects
];
```

## 🛠️ Technologies Used

### Frontend
- **React 19.0.0** - UI framework
- **React Router DOM** - Navigation
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library
- **EmailJS** - Email service for contact form
- **Radix UI** - Accessible component primitives

### Build Tools
- **CRACO** - Create React App Configuration Override
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 📱 Responsive Breakpoints

The website is fully responsive with the following breakpoints:

- **Mobile**: < 600px
- **Tablet**: 600px - 900px
- **Desktop**: > 900px

## 🐛 Troubleshooting

### Issue: Port 3000 already in use

**Solution**: Kill the process or use a different port
```bash
# Kill process on port 3000 (Mac/Linux)
lsof -ti:3000 | xargs kill -9

# Or start on different port
PORT=3001 yarn start
```

### Issue: Module not found errors

**Solution**: Clear cache and reinstall
```bash
rm -rf node_modules
rm yarn.lock
yarn install
```

### Issue: EmailJS not sending emails

**Solutions**:
1. Check your EmailJS credentials are correct
2. Verify your EmailJS account is active
3. Check browser console for error messages
4. Test with the demo credentials first

### Issue: Styles not loading

**Solution**: Clear build cache
```bash
rm -rf .cache
rm -rf build
yarn start
```

## 📦 Deployment

### Deploy to Netlify

1. Build the project: `yarn build`
2. Drag and drop the `build` folder to [Netlify Drop](https://app.netlify.com/drop)

Or use Netlify CLI:
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=build
```

### Deploy to Vercel

```bash
npm install -g vercel
cd frontend
vercel --prod
```

### Deploy to GitHub Pages

1. Install gh-pages:
```bash
yarn add --dev gh-pages
```

2. Add to `package.json`:
```json
{
  "homepage": "https://yourusername.github.io/repo-name",
  "scripts": {
    "predeploy": "yarn build",
    "deploy": "gh-pages -d build"
  }
}
```

3. Deploy:
```bash
yarn deploy
```

## 🔒 Security Notes

- Replace demo EmailJS credentials with your own
- Never commit sensitive credentials to version control
- Use environment variables for production deployments
- Regularly update dependencies for security patches

## 📄 License

This project is licensed under the MIT License - feel free to use it for your own portfolio!

## 👤 Contact

**Ravi**
- WhatsApp: +91 9629071640
- Email: ravikumarsaravanan71640@gmail.com
- Location: Tharangambadi, Tamil Nadu

---

## 🙏 Acknowledgments

- Icons by [Lucide Icons](https://lucide.dev/)
- UI Components by [Radix UI](https://www.radix-ui.com/)
- Email Service by [EmailJS](https://www.emailjs.com/)
- Fonts by [Google Fonts](https://fonts.google.com/)

---

**Made with ❤️ using React**

*Last Updated: November 2025*
