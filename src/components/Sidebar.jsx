
import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Sidebar = () => {
  const { toast } = useToast();

  const handleSocialClick = (platform) => {
    if (platform === 'WhatsApp') {
      window.open('https://chat.whatsapp.com/CuxHZQk9bL0Ir4ouXf0cbI', '_blank');
      return;
    }

    toast({
      title: `Join our ${platform} community!`,
      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  return (
    <aside className="space-y-6 sticky top-24">
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl shadow-lg p-6 text-white"
      >
        <div className="flex items-center gap-3 mb-4">
          <MessageCircle className="h-8 w-8" />
          <h3 className="text-xl font-bold">Join WhatsApp</h3>
        </div>
        <p className="text-sm mb-4 text-green-50">
          Get instant job updates, exam notifications, and results directly on WhatsApp!
        </p>
        <Button
          onClick={() => handleSocialClick('WhatsApp')}
          className="w-full bg-white text-green-600 hover:bg-green-50 font-semibold shadow-md transition-all duration-300 hover:scale-105"
        >
          <MessageCircle className="h-5 w-5 mr-2" />
          Join WhatsApp Group
        </Button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg p-6 text-white"
      >
        <div className="flex items-center gap-3 mb-4">
          <Send className="h-8 w-8" />
          <h3 className="text-xl font-bold">Join Telegram</h3>
        </div>
        <p className="text-sm mb-4 text-blue-50">
          Join our Telegram channel for daily updates, study materials, and exam tips!
        </p>
        <Button
          onClick={() => handleSocialClick('Telegram')}
          className="w-full bg-white text-blue-600 hover:bg-blue-50 font-semibold shadow-md transition-all duration-300 hover:scale-105"
        >
          <Send className="h-5 w-5 mr-2" />
          Join Telegram Channel
        </Button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-white rounded-xl shadow-lg p-6"
      >
        <h3 className="text-lg font-bold text-gray-800 mb-3">Quick Links</h3>
        <ul className="space-y-2">
          {['Sarkari Result', 'Employment News', 'Free Job Alert', 'Study Material', 'Previous Papers'].map((link, index) => (
            <li key={index}>
              <button
                onClick={() => handleSocialClick(link)}
                className="text-blue-600 hover:text-blue-800 hover:underline transition-all duration-300 text-sm w-full text-left"
              >
                {link}
              </button>
            </li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl shadow-lg p-6 text-white"
      >
        <h3 className="text-lg font-bold mb-3">📢 Important Notice</h3>
        <p className="text-sm text-purple-50 leading-relaxed">
          Stay alert for fake job scams! Always verify information from official sources. Rojgar Network never charges for job information.
        </p>
      </motion.div>
    </aside>
  );
};

export default Sidebar;
