import { motion } from 'framer-motion';

interface AnimatedSlashProps {
  isActive?: boolean;
}

export const AnimatedSlash: React.FC<AnimatedSlashProps> = ({ isActive = false }) => {
  return (
    <motion.div
      className="text-2xl font-bold text-gray-700"
      animate={{ rotate: isActive ? 45 : 0 }}
      transition={{ duration: 0.3 }}
    >
      /
    </motion.div>
  );
};
