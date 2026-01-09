
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const navItems = [
    'Home',
    'Latest Job',
    'Exam Date',
    'Admit Card',
    'Result',
    'Offline Form',
    'Contact'
  ];

  const handleNavClick = (item) => {
    switch (item) {
      case 'Home':
        navigate('/');
        break;
      case 'Latest Job':
        navigate('/latest-job');
        break;
      case 'Exam Date':
        navigate('/exam-date');
        break;
      case 'Admit Card':
        navigate('/admit-card');
        break;
      case 'Result':
        navigate('/result');
        break;
      case 'Offline Form':
        navigate('/offline-form');
        break;
      case 'Contact':
        navigate('/contact');
        break;
      default:
        toast({
          title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
        });
    }
    setIsMobileMenuOpen(false);
  };

  const openWhatsApp = () => {
    window.open('https://chat.whatsapp.com/CuxHZQk9bL0Ir4ouXf0cbI', '_blank');
  };

  return (
    <header className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => navigate('/')}
          >
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-md">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">RN</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Rojgar Network</h1>
              <p className="text-xs text-blue-100">Your Career Partner</p>
            </div>
          </motion.div>

          <div className="flex items-center gap-4">
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item, index) => (
                <motion.button
                  key={item}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  onClick={() => handleNavClick(item)}
                  className="px-4 py-2 text-white hover:bg-white/20 rounded-lg transition-all duration-300 font-medium text-sm"
                >
                  {item}
                </motion.button>
              ))}
            </nav>

            {/* WhatsApp Button - Visible on both desktop and mobile */}
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/20 hover:text-green-300 transition-colors"
              onClick={openWhatsApp}
              title="Join WhatsApp Group"
            >
              <MessageCircle className="h-6 w-6" />
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-white hover:bg-white/20"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden pb-4"
          >
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => handleNavClick(item)}
                className="block w-full text-left px-4 py-3 text-white hover:bg-white/20 rounded-lg transition-all duration-300 font-medium"
              >
                {item}
              </button>
            ))}
          </motion.nav>
        )}
      </div>
    </header>
  );
};

export default Header;
