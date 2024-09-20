import { IconThunder } from '../icons';
import { motion } from 'framer-motion';

export const NavLink: React.FC<{ label: string }> = ({ label }) => {
  return (
    <motion.li
      variants={{
        hidden: { y: 50, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1,
        },
      }}
      transition={{ type: 'tween', duration: 0.3 }}
    >
      <a className="group relative mr-5 pl-[10px] cursor-pointer">
        <IconThunder className="absolute top-0 -left-[5px] opacity-0 invisible group-hover:opacity-100 group-hover:visible" />
        {label}
      </a>
    </motion.li>
  );
};
