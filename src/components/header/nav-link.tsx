import { IconThunder } from '../icons';
import { motion } from 'framer-motion';

export const NavLink: React.FC<{ label: string; delay?: number }> = ({
  label,
  delay,
}) => {
  return (
    <motion.li
      variants={{
        hidden: { y: 50 },
        visible: {
          y: 0,
        },
      }}
      transition={{ type: 'tween', delay }}
    >
      <a className="group relative mr-5 pl-[10px] cursor-pointer">
        <IconThunder className="absolute top-0 -left-[5px] opacity-0 invisible group-hover:opacity-100 group-hover:visible" />
        {label}
      </a>
    </motion.li>
  );
};
