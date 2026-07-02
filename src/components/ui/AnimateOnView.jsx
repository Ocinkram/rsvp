import { motion } from 'framer-motion';
import { fadeInUp, viewportOnce, easeOut } from './animations';

export const AnimateOnView = ({
  children,
  delay = 0,
  duration = 0.65,
  y = 28,
  className,
  style,
  as = 'div',
}) => {
  const Component = motion[as] ?? motion.div;

  return (
    <Component
      className={className}
      style={style}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration, delay, ease: easeOut }}
    >
      {children}
    </Component>
  );
};

export const StaggerOnView = ({
  children,
  className,
  style,
  as = 'div',
  stagger = 0.12,
}) => {
  const Component = motion[as] ?? motion.div;

  return (
    <Component
      className={className}
      style={style}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger, delayChildren: 0.05 } },
      }}
    >
      {children}
    </Component>
  );
};

export const StaggerItem = ({ children, className, style, as = 'div' }) => {
  const Component = motion[as] ?? motion.div;

  return (
    <Component
      className={className}
      style={style}
      variants={fadeInUp}
      transition={{ duration: 0.65, ease: easeOut }}
    >
      {children}
    </Component>
  );
};
